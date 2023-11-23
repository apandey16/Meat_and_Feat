import {signInWithEmailAndPassword } from 'firebase/auth';


async function loginUser(email: string, password: string, auth: any) {   
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return 1;
    } catch (error) {  
        return error.code;
    }
    
    
}

export default loginUser;