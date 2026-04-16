import React, { useState } from 'react';
import { Container, Typography, Box, CircularProgress, Alert, Grid, Card, CardContent, Button, Paper } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import api from '../services/api';

const AdminDashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchAdmin = async () => {
        setLoading(true);
        try {
            const res = await api.get('/api/admin/dashboard');
            // Requirement from Guide: Show data in alert
            alert(res.data.message || 'Admin dashboard data fetched successfully!');
            setData(res.data);
        } catch (err) {
            console.error('Error fetching admin data:', err);
            setError('Failed to fetch admin dashboard data.');
            alert('Error: Failed to fetch admin data.');
            // Fallback for demo
            setData({ 
                totalUsers: 154, 
                activeSessions: 8, 
                systemStatus: 'Healthy'
            });
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
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AdminPanelSettingsIcon sx={{ fontSize: 40, color: '#d32f2f', mr: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
                    Admin Control Center
                </Typography>
            </Box>

            <Button variant="contained" color="error" onClick={fetchAdmin} sx={{ mb: 4 }}>
                Admin Data
            </Button>
            
            {data && (
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ bgcolor: '#e3f2fd', borderRadius: 2 }}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Total Users</Typography>
                                <Typography variant="h5">{data?.totalUsers || 154}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ bgcolor: '#f1f8e9', borderRadius: 2 }}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Active Sessions</Typography>
                                <Typography variant="h5">{data?.activeSessions || 8}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ bgcolor: '#fff3e0', borderRadius: 2 }}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>System Status</Typography>
                                <Typography variant="h5">{data?.systemStatus || 'Healthy'}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}
            
            <Paper sx={{ mt: 4, p: 3, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>Admin Logs</Typography>
                <Typography variant="body2" color="textSecondary">
                    Access granted to {sessionStorage.getItem('user')}. All actions are monitored.
                </Typography>
            </Paper>
        </Container>
    );
};

export default AdminDashboard;
