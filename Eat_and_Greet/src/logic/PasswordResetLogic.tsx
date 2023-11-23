import {Auth, sendPasswordResetEmail } from 'firebase/auth';

async function resetUserPassword(email: string, auth: Auth) {   
    try {
        await sendPasswordResetEmail(auth, email);
        return 1;
    } catch (error) {
        return error.code;
    }
}

export default resetUserPassword;