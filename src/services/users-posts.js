import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
/**
 * @param {{title: string, description: string, location: string, userId:string}} newPosts
 * @return {Promise}
 **/

import { getAuth } from "firebase/auth";

export async function savePublicPost({ title, description, location }) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const userId = user.uid; 
    const usersPosts = collection(db, 'posted-by-users');
    await addDoc(usersPosts, {
      title,
      description,
      location,
      created_at: serverTimestamp(),
      user_id: userId, 
    });
  } 
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