import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
/**
 * @param {{title: string, description: string, location: string, created_at: string, user_id: string, user_email: string}} newPosts
 * @return {Promise}
 **/

import { getAuth } from "firebase/auth";

export async function savePublicPost({ title, description, location, created_at, user_id, user_email }) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const userId = user.uid; 
    const userEmail = user.email ; 
    const usersPosts = collection(db, 'posted-by-users');
    await addDoc(usersPosts, {
      title,
      description,
      location,
      created_at: serverTimestamp(),
      user_id: userId,
      user_email: userEmail
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
                created_at: doc.data().created_at,
                user_id: doc.data().user_id,
                user_email: doc.data().user_email
            }
        });
        callback(posts);
    });
}