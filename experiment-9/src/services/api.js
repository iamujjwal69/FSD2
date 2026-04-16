import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    }
});

// TEMPORARY MOCK FOR DEMONSTRATION
api.interceptors.request.use(async (config) => {
    console.log('--- DEMO MOCK API ACTIVE ---');
    if (config.url === '/api/user/profile') {
        const username = sessionStorage.getItem('user') || 'DemoUser';
        config.adapter = async () => ({
            data: { message: `Demo: Welcome ${username}! Basic Auth validation succeeded.`, username, role: 'USER' },
            status: 200, statusText: 'OK', headers: {}, config
        });
    } else if (config.url === '/api/admin/dashboard') {
        config.adapter = async () => ({
            data: { message: 'Demo: Admin Data Fetch Success!', totalUsers: 154, activeSessions: 8, systemStatus: 'Healthy' },
            status: 200, statusText: 'OK', headers: {}, config
        });
    }
    return config;
});

export default api;
