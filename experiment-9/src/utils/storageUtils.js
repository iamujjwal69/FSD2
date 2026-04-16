export const setSession = (username, role) => {
    sessionStorage.setItem('user', username);
    sessionStorage.setItem('role', role);
};

export const getSession = () => {
    return {
        user: sessionStorage.getItem('user'),
        role: sessionStorage.getItem('role')
    };
};

export const clearSession = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('role');
};

export const isAuthenticated = () => {
    return !!sessionStorage.getItem('role');
};

export const getRole = () => {
    return sessionStorage.getItem('role');
};
