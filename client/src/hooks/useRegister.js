import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { environments } from '../config/environments.js';
import Swal from 'sweetalert2';

export const useRegister = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fecha_nac, setFecha_nac] = useState("");
    const [profile_pic, setProfile_pic] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleNameChange = (e) => setName(e.target.value);
    const handleLastNameChange = (e) => setlastname(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleFecha_nac = (e) => setFecha_nac(e.target.value);
    const handleProfile_pic = (e) => setProfile_pic(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        try {
            // obtenemos token

            const res = await fetch(`${environments.API_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    lastname,
                    fecha_nac,
                    email,
                    password,
                    profile_pic
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
                console.log(data);
                

                setSuccess(true);
                Swal.fire({
                    title: 'Ya estás registrado!',
                    icon: 'success',
                });
                setTimeout(() => {
                    navigate('/login');
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
        lastname, setlastname: handleLastNameChange,
        fecha_nac, setFecha_nac: handleFecha_nac,
        email, setEmail: handleEmailChange,
        password, setPassword: handlePasswordChange,
        confirmPassword, setConfirmPassword: handleConfirmPasswordChange,
        profile_pic, setProfile_pic: handleProfile_pic,
        error, success,
        handleSubmit,
    };
};
