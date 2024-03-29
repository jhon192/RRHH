import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from '../axios';
import Sidebar from "../components/MainSidebar";
import { useAuth } from '../contexts/AuthContext';
import Navbar from './Navbar';

export default function DefaultLayout() {
    const { user, setUser, csrfToken } = useAuth();

    // check if user is logged in or not from server
    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get('/auth');
                if (resp.status === 200) {
                    setUser((await axios.get(`/users/${resp.data.id}`)).data);
                }
            } catch (error) {
                if (error.response.status === 401) {
                    localStorage.removeItem('user');
                    window.location.href = '/';
                }
            }
        })();
    }, []);

    // if user is not logged in, redirect to login page
    if (!user) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <Navbar />
            <div className='flex h-full'>
                <Sidebar className="rounded-none" />
                <main className="container m-10">
                    <Outlet />
                </main>
            </div>

        </>
    );
}