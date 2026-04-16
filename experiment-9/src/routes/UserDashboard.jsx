import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress, Alert, Card, CardContent, Divider, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import api from '../services/api';

const UserDashboard = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await api.get('/api/user/profile');
            // Requirement from Guide: Show data in alert
            alert(res.data.message || 'User profile data fetched successfully!');
            setProfile(res.data);
        } catch (err) {
            console.error('Error fetching profile:', err);
            setError('Failed to fetch profile data from server.');
            alert('Error: Failed to fetch profile data.');
            // Fallback for demo
            setProfile({ username: sessionStorage.getItem('user'), role: 'USER', email: 'user@example.com' });
        } finally {
            setLoading(false);
        }
    };

    if (loading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress />
        </Box>
    );

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a237e' }}>
                User Dashboard
            </Typography>
            
            <Button variant="contained" color="success" onClick={fetchData} sx={{ mb: 3 }}>
                Get Profile
            </Button>
            
            {profile && (
                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <PersonIcon sx={{ fontSize: 40, color: '#1a237e', mr: 2 }} />
                            <Typography variant="h5">Profile Information</Typography>
                        </Box>
                        <Divider sx={{ mb: 2 }} />
                        
                        <Box sx={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Username:</Typography>
                            <Typography variant="body1">{profile?.username || sessionStorage.getItem('user')}</Typography>
                            
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Role:</Typography>
                            <Typography variant="body1">{profile?.role || 'USER'}</Typography>
                        </Box>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default UserDashboard;
