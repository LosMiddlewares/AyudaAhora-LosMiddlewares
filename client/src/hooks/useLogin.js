import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { environments } from '../config/environments.js';
import { UserContext } from '../context/UserContext.jsx';
import { type } from '../types/type.js';
import Swal from 'sweetalert2';

export function useLogin() {

    const navigate = useNavigate();

    const { setUserState } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${environments.API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (!res.ok) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al iniciar sesión',
                    text: 'La contraseña o el DNI son incorrectos',
                });
            } else {
                const data = await res.json();

                localStorage.setItem('token', JSON.stringify(data.token));
                localStorage.setItem('user', JSON.stringify(data)); // Guarda el usuario completo

                setUserState({ type: type.LOGIN, payload: { user: data } });

                Swal.fire({
                    title: 'Login correcto',
                    text: 'Bienvenido',
                    icon: 'success'
                });
                setTimeout(() => {
                    navigate('/');
                }, 1000);
                
            }
        } catch (error) {
            console.error(error);
            setError('La contraseña o el nombre de usuario es incorrecto');
        }
    };

    return {
        email, setEmail,
        password, setPassword,
        error, setError,
        handleLogin
    };
}


// Custom hook para el cierre de sesion 
export function useLogout() {

    const navigate = useNavigate();

    const { setUserState, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true)
        }
    },[]);

    const handleLogout = () => {

        setIsLoggedIn(false);

        localStorage.removeItem('token');
        localStorage.removeItem('user');

        setUserState({ type: type.LOGOUT });

        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }
    return { isLoggedIn, setIsLoggedIn, handleLogout }
}