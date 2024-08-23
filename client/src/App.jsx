import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Posts from './pages/Posts.jsx';
import AgregarPost from './pages/AgregarPost.jsx';
import PostSingle from './pages/PostSingle.jsx';
import { Register } from './pages/Register.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserProvider.jsx';
import { Toaster } from 'sonner'


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
  {
    path: "/addPost",
    element: <AgregarPost />,
  },
  {
    path: "/post/:id",
    element: <PostSingle />,
  },
]);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" richColors />
    </UserProvider>
  );
};

export default App;
