import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Posts from './pages/Posts.jsx';
import { Register } from './pages/Register.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
]);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
