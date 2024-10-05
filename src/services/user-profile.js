import { doc, getDoc, updateDoc, collection, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

/**
* 
* @param {string} id 
* @returns {{id: string, email: string, displayName: string, bio: string, traveledTo: string}}
*/

export async function getUserProfileById(id) {
    try {
        const profileRef = doc(db, `/users/${id}`);
        const profileDocument = await getDoc(profileRef);

        if (!profileDocument.exists()) {
            throw new Error(`No se encontró el perfil de usuario con ID: ${id}`);
        }

        return {
            id: profileDocument.id,
            email: profileDocument.data().email,
            displayName: profileDocument.data().displayName,
            bio: profileDocument.data().bio,
            traveledTo: profileDocument.data().traveledTo
        };
    } catch (error) {
        console.error("Error al obtener el perfil del usuario:", error);
        throw error;
    }
}


/**
* 
* @param {string} id 
* @param {{displayName: string, bio: string, traveledTo: string}} data
*/

export async function updateUserProfile(id, {displayName, bio, traveledTo}){
    const profileRef = doc(db, `/users/${id}`);

    await updateDoc(profileRef, {
        displayName,
        bio,
        traveledTo
    });
}


export async function getPostsByUserId(id) {
    try {
      const postsRef = collection(db, "posted-by-users");
      const query = where("user_id", "==", id);
      const querySnapshot = await getDocs(postsRef, query);
  
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return posts;
    } catch (error) {
      console.error("Error al obtener los posteos del usuario:", error);
      throw error;
    }
    
  }
