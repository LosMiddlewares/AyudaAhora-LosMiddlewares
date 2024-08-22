import './App.css';
import Home from './pages/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
