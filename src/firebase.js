// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite';
import { ref, onUnmounted } from 'vue';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOG7sZw03hoG0IR_XZBaQFuQ8nrW0-9bA",
    authDomain: "fir-vue-electronics.firebaseapp.com",
    projectId: "fir-vue-electronics",
    storageBucket: "fir-vue-electronics.appspot.com",
    messagingSenderId: "8141206823",
    appId: "1:8141206823:web:e17059d1b4ee39346da502"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const electronicsCollection = collection(db, "electronics");

export const createElectronic = electronic => {
    return electronicsCollection.add(electronic);
}

export const getElectronic = async id => {
    const electronic = await electronicsCollection.doc(id).get();
    return electronic.exists ? electronic.data() : null;
}

export const updateElectronic = (id, electronic) => {
    return electronicsCollection.doc(id).update(electronic);
}

export const deleteElectronic = id => {
    return electronicsCollection.doc(id).delete();
}

export const useLoadElectronics = () => {
    const electronics = ref([])
    const close = electronicsCollection.onSnapshot(snapshot => {
        electronics.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    });
    onUnmounted(close);
    return electronics;
}