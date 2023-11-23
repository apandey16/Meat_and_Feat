import {Auth, signInWithEmailAndPassword } from 'firebase/auth';

async function loginUser(email: string, password: string, auth: Auth) {   
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return 1;
    } catch (error) {  
        return error.code;
    } 
}

export default loginUser;