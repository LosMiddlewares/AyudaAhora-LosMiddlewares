import { useRegister } from "../hooks/useRegister.js";
import logo from '../assets/AyudaRosa.png';
import { Link } from "react-router-dom";
import './css/Register.css';

export const Register = () => {
    const {
        name, setName,
        lastName, setLastName,
        fecha_nac, setfecha_nac,
        email, setEmail,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        error, success,
        handleSubmit
    } = useRegister();

    return (
        <div id="contenedor" className='animate__animated animate__fadeInDown'>
            <div id="caja-principal">
                <div id='contenedor-logo'>
                    <Link to="/">
                        <img src={logo} className="hover-image" id="logo" alt="Logo" />
                    </Link>
                </div>
                <div className="desc-profile">
                    <h4>Por favor no olvides completar todos los campos</h4>
                </div>
                <div id="form">
                    <form onSubmit={handleSubmit}>
                        {error && <p className='error'>{error}</p>}
                        {success && <p className='success'>Perfil actualizado exitosamente</p>}
                        <div className="grid-container">
                            <div className="caja-inputs">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={setName}
                                    placeholder="Nombre"
                                    required
                                    id="name"
                                />
                            </div>
                            <div className="caja-inputs">
                                <label htmlFor="lastName">Apellido</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={setLastName}
                                    placeholder="Apellido"
                                    required
                                    id="lastName"
                                />
                            </div>
                            <div className="caja-inputs">
                                <label htmlFor="birthDate">Fecha de Nacimiento</label>
                                <input
                                    type="date"
                                    value={fecha_nac}
                                    onChange={setfecha_nac}
                                    placeholder="Fecha de Nacimiento"
                                    required
                                    id="birthDate"
                                />
                            </div>
                            <div className="caja-inputs">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={setEmail}
                                    placeholder="tuEmail@gmail.com"
                                    required
                                    id="email"
                                />
                            </div>
                            <div className="caja-inputs">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={setPassword}
                                    placeholder="Contraseña"
                                    required
                                    id="password"
                                />
                            </div>
                            <div className="caja-inputs">
                                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={setConfirmPassword}
                                    placeholder="Confirmar Contraseña"
                                    required
                                    id="confirmPassword"
                                />
                            </div>
                            <div className="caja-boton">
                                <button type="submit">Finalizar registro</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
