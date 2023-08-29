import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBRGAN3o2ptZYB2wduztrXqKztayDWS6MY",
    authDomain: "chat-app-807b0.firebaseapp.com",
    projectId: "chat-app-807b0",
    storageBucket: "chat-app-807b0.appspot.com",
    messagingSenderId: "80905669081",
    appId: "1:80905669081:web:031338d88c3e100a1871c8"
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