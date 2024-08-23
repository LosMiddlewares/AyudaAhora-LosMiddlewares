import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { environments } from '../config/environments.js';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

export const usePost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [goal_amount, setGoal_amount] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleGoal_amount = (e) => setGoal_amount(e.target.value);
    const handleImageChange = (e) => setImage(e.target.value);

    const handleSubmitPost = async (e) => {
        e.preventDefault();

        try {
            // obtenemos token
            const valueToken = localStorage.getItem('token');
            console.log("first to:", valueToken);
            const token = valueToken ? JSON.parse(valueToken).token : null;
            console.log("token loco:", token);
            

            // id del usuario
            //const userId = localStorage.getItem('userId');

            const res = await fetch(`${environments.API_URL}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    title,
                    description,
                    goal_amount,
                    image
                })
            });
            if (!res.ok) {
                const errorData = await res.json();
                setError(errorData.error || "Error al intertar crear Post");
                Swal.fire({
                    icon: 'error',
                    text: errorData.error || 'Error al intertar crear Post',
                });
            } else {
                const data = await res.json();
                localStorage.setItem('post', JSON.stringify(data)); // Guarda el usuario completo

                //dispatch({ type: type.LOGIN, payload: { user: data } });

                setSuccess(true);
                toast.success('Post creado', {
                    duration: 1500
                })
                setTimeout(() => {
                    navigate('/posts');
                }, 1500);
            }    
        
        } catch (error) {
            console.error(error);
            setError('Error de conexión con el servidor');
            toast.success('Error de conexión con el servidor', {
                duration: 1500
            })
        }
    };

    return {
        title, setTitle: handleTitleChange,
        description, setDescription: handleDescriptionChange,
        goal_amount, setGoal_amount: handleGoal_amount,
        image, setImage: handleImageChange,
        error, success,
        handleSubmitPost,
    };
};