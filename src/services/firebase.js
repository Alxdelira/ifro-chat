import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as dotenv from 'dotenv'

dotenv.config(
    )


    
    
    // Configurações do Firebase
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID
    };
    // Inicializa o Firebase
    const app = firebase.initializeApp(firebaseConfig);
    // Exporta as funções do Firebase
    const auth = app.auth();
    // Exporta o banco de dados do Firebase
    const db = app.firestore();
    // Exporta o provedor de login do Google
    const provider = new firebase.auth.GoogleAuthProvider();
    
    export { auth, db, provider };