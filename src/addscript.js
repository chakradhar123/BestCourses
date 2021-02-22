import {db} from "./db";
import firebase from "firebase";
async function  addCategory (name) {
    console.log(name)
    var result = await db.collection("Category").add({
        name:name,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    }) 
    console.log(result)
}
export {addCategory}
