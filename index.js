import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig.js";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);

//referenciak:
export const db = getFirestore(app)
export const auth = getAuth(app)

export const readWorkers = async () =>
{
    const querySnapshot = await getDocs(collection(db, "workers"))
    let workers = []
    querySnapshot.forEach((doc)=>  { workers.push({...doc.data(), id:doc.id}) })
    return workers
}


    
    
console.log(readWorkers());
