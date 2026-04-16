import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getRole } from '../utils/storageUtils';

const RoleRoute = ({ requiredRole }) => {
    const role = getRole();

    if (role !== requiredRole) {
        // If they don't have the right role, redirect to their own dashboard
        const dashboard = role === 'ADMIN' ? '/admin' : '/user';
        return <Navigate to={dashboard} replace />;
    }

    return <Outlet />;
};

export default RoleRoute;
