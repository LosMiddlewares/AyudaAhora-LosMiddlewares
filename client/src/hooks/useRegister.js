import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { environments } from '../config/environments.js';
import Swal from 'sweetalert2';

export const useRegister = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fecha_nac, setFecha_nac] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleNameChange = (e) => setName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleFecha_nac = (e) => setFecha_nac(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        try {
            // obtenemos token
            const valueToken = localStorage.getItem('token');
            const token = valueToken ? JSON.parse(valueToken) : null;

            // id del usuario
            const userId = localStorage.getItem('userId');

            const res = await fetch(`${environments.API_URL}/abog/editar-perfil/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name,
                    lastName,
                    phoneNum,
                    fecha_nac,
                    email,
                    password,
                })
            });
            if (!res.ok) {
                const errorData = await res.json();
                setError(errorData.error || "Error al intertar registrarte");
                Swal.fire({
                    icon: 'error',
                    text: errorData.error || 'Error al intertar registrarte',
                });
            } else {
                const data = await res.json();
                
                localStorage.setItem('user', JSON.stringify(data)); // Guarda el usuario completo

                //dispatch({ type: type.LOGIN, payload: { user: data } });

                setSuccess(true);
                Swal.fire({
                    title: 'Ya estás registrado!',
                    icon: 'success',
                });
                setTimeout(() => {
                    navigate('/home-abog');
                }, 2500);
            }    
        
        } catch (error) {
            console.error(error);
            setError('Error de conexión con el servidor');
            Swal.fire({
                icon: 'error',
                text: 'Error de conexión con el servidor',
            });
        }
    };

    return {
        name, setName: handleNameChange,
        lastName, setLastName: handleLastNameChange,
        fecha_nac, setFecha_nac: handleFecha_nac,
        email, setEmail: handleEmailChange,
        password, setPassword: handlePasswordChange,
        confirmPassword, setConfirmPassword: handleConfirmPasswordChange,
        error, success,
        handleSubmit,
    };
};
