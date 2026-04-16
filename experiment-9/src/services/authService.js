import { setSession, clearSession } from '../utils/storageUtils';

const login = async (username, password) => {
    // MOCK LOGIN FOR DEMONSTRATION
    console.log('--- DEMO MOCK LOGIN ACTIVE ---');
    return new Promise((resolve) => {
        setTimeout(() => {
            const role = username.toLowerCase().includes('admin') ? 'ADMIN' : 'USER';
            setSession(username, role);
            resolve({ success: true, role });
        }, 500);
    });
};

const logout = () => {
    clearSession();
};

export default {
    login,
    logout
};
