import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        await updateProfile(auth.currentUser, {
            displayName: displayName
        })
        console.log(userCredential);
        navigate("/")
    } catch (error) {
        console.log(error.message);
    }

}


export const singIn = async (email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        console.log(userCredential);
        navigate("/")
    } catch (error) {
        console.log(error.message);
    }
}

export const userObserver = (setCurrentUser) => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
        } else {
            // User is signed out
            setCurrentUser(false);
        }
    });
};

export const logOut = () => {
    signOut(auth);
};
export const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            navigate("/")
        }).catch((error) => {
            console.log(error);
        });
}