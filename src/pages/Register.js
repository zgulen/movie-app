import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import  toast  from "react-hot-toast"

const Login = () => {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();

    //
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [userData, setUserData] = useState([])

    const register = async (email, password) => {
      try {
        const { user } = createUserWithEmailAndPassword(auth, email, password).then(res => setUserData(res.user));
        return user;
        
      } catch (error) {
        toast.error(error.message)
      }
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        const user =  await register(email,pass)
      };
      console.log(userData);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
