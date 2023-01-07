import app from './app.js'

import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

export async function sendToGodfellas(toSend)  {

    const db = getFirestore(app)
    const goodfellas = collection(db,'goodfellas')
    const docRef = await addDoc(goodfellas, toSend)

    return docRef.id
}


