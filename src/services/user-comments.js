import { doc, getDoc, updateDoc } from "firebase/firestore";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

/**
 * @param {{comment: string}} newComments
 * @return {Promise}
 **/

export async function guardarComentario({comment}){
    
    const usersComments = collection(db, 'comments-by-users');

    await addDoc(usersComments, {
        comment,
        created_at: serverTimestamp()
    });
}
