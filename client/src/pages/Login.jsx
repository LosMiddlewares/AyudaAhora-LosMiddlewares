import './css/Login.css';
import logo from '../assets/AyudaRosa.png';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin.js';

function Login() {
  const { email, setEmail, password, setPassword, error, handleLogin } = useLogin();

  return (
    <div id='contenedor-todo'>
      <div id='caja-login' className='animate__animated animate__fadeInDown'>

        <div id='caja-logo'>
          <Link to="/"><img src={logo} className="hover-image" id="logo" alt="Logo" /></Link>
        </div>


        <div id='caja-form'>
          <form onSubmit={handleLogin}>
            <div className='cajita-form'>
              <label htmlFor="usuario">Email</label>
              <input
                type="email"
                placeholder='tuEmail@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="usuario"
              />
            </div>
            <div className='cajita-form'>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                placeholder='Ingrese su Contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                id="password"
              />
            </div>

            <div className="submit-container">
              <button type='submit'>Ingresar</button>
              <p>Todavía no tenes cuenta? <a href="/">Registrate</a></p>
            </div>
            
          </form>
          {error && <p className='error'>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
