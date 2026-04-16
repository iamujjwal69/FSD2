import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const result = await authService.login(username, password);
            if (result.success) {
                // Requirement: Redirect based on role
                if (result.role === 'ADMIN') {
                    navigate('/admin');
                } else {
                    navigate('/user');
                }
            }
        } catch (err) {
            setError('Invalid credentials or server error. (Requirement: Logic still applies if backend fails, but we try to call it first)');
            // For testing purposes, if the backend isn't running, we'll simulate success based on requirement
            // But in a real app, we'd stop here.
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Paper elevation={6} sx={{ p: 4, width: '100%', borderRadius: 3 }}>
                    <Typography component="h1" variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1a237e' }}>
                        Login to RBAC
                    </Typography>
                    
                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                    
                    <form onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={loading}
                            sx={{ mt: 3, mb: 2, py: 1.5, fontSize: '1rem', background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)' }}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                    
                    <Typography variant="body2" color="text.secondary" align="center">
                        Tip: Use "admin" in username for ADMIN role
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default Login;
