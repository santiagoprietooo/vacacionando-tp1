import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

/**
 * @param {{title: string, description: string, location: string}} newPosts
 * @return {Promise}
 **/

export async function savePublicPost({title, description, location}){
    const usersPosts = collection(db, 'posted-by-users');

    await addDoc(usersPosts, {
        title,
        description,
        location,
        created_at: serverTimestamp()
    });
}

export function readPublicPosts(callback){
    const usersPosts = collection(db, 'posted-by-users');
    const postQuery = query(usersPosts, orderBy('created_at', 'desc'));

    onSnapshot(postQuery, snapshot => {
        const posts = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                location: doc.data().location,
            }
        });
        callback(posts);
    });
}