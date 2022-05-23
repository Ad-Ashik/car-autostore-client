// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_api_Key,
    // authDomain: process.env.REACT_APP_auth_Domain,
    // projectId: process.env.REACT_APP_project_Id,
    // storageBucket: process.env.REACT_APP_storage_Bucket,
    // messagingSenderId: process.env.REACT_APP_messaging_SenderId,
    // appId: process.env.REACT_APP_app_Id,

    apiKey: "AIzaSyAaEy6DvbYddB6ViagBhp8GZ-6kzEftjJY",
    authDomain: "car-autostore.firebaseapp.com",
    projectId: "car-autostore",
    storageBucket: "car-autostore.appspot.com",
    messagingSenderId: "552368921727",
    appId: "1:552368921727:web:461da2d9f5456c42f5734a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;