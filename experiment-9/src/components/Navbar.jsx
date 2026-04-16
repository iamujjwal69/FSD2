import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { getRole, clearSession, isAuthenticated } from '../utils/storageUtils';

const Navbar = () => {
    const navigate = useNavigate();
    const role = getRole();
    const authed = isAuthenticated();

    const handleLogout = () => {
        clearSession();
        navigate('/login');
    };

    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    RBAC Portal
                </Typography>
                <Box>
                    {authed && (
                        <>
                            <Button color="inherit" component={Link} to={role === 'ADMIN' ? '/admin' : '/user'}>
                                Dashboard
                            </Button>
                            
                            {/* Requirement: Hide admin components (links) for USER */}
                            {role === 'ADMIN' && (
                                <Button color="inherit" component={Link} to="/admin">
                                    Admin Panel
                                </Button>
                            )}
                            
                            <Button color="inherit" onClick={handleLogout} sx={{ ml: 2, border: '1px solid white' }}>
                                Logout
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
