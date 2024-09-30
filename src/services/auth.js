import { onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from './firebase';
import { getUserProfileById, updateUserProfile } from "./user-profile";

let loggedUser = {
    id: null,
    email: null,
    displayName: null,
    bio: null,
    traveledTo: null,
    fullyLoaded: false
};

let observers = [];

onAuthStateChanged(auth, async user => {
    if(user){
            loggedUser = {
            id: user.uid,
            email: user.email,
            displayName: user.displayName
        }
        
        getUserProfileById(user.uid)
        .then(userProfile => {
            loggedUser = {
                ...loggedUser,
                bio: userProfile.bio,
                traveledTo: userProfile.traveledTo,
                fullyLoaded: true
            }
            notifyAll();
        });
    } else {
        loggedUser = {
            id: null,
            email: null,
            displayName: null,
            bio: null,
            traveledTo: null,
            fullyLoaded: false
        }
    }

    notifyAll();
});

export async function login({email, password}) {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("Se inició la sesión con éxito: ", user);
    } catch(error) {
        console.error("[auth.js login] Error al tratar de iniciar sesión: ", error);
        throw error;
    }
}

/**
 * 
 * @param {{displayName: string, bio: string, traveledTo: string}} data
 * @returns {Promise<null>}
 */

export async function editMyProfile({displayName, bio, traveledTo}) {
    try {
        await updateProfile(auth.currentUser, {displayName});

        await updateUserProfile(loggedUser.id, {displayName, bio, traveledTo});

        loggedUser = {
            ...loggedUser,
            displayName,
            bio,
            traveledTo
        }
        notifyAll();
    } catch (error) {
        console.error("[auth.js editMyProfile] Error al tratar de editar el perfil: ", error);
        throw error;
    }
}

export async function logout() {
    await signOut(auth);
}

/**
 * 
 * @param {Function} callback 
 */

export function subscribeToAuthChanges(callback) {
    observers.push(callback);

    notify(callback);
}

/**
 * 
 * @param {Function} callback 
 */

function notify(callback) {
    callback({...loggedUser});
}

function notifyAll() {
    observers.forEach(callback => notify(callback));
}