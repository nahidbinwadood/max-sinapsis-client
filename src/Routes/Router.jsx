import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Homepage from '../Pages/Homepage';
import Services from '../Pages/Services';
import Projects from '../Pages/Projects';
import Portfolio from '../Pages/Portfolio';
import Creativity from '../Pages/Creativity';
import Contact from '../Pages/Contact';
import Login from '../Pages/Auth/Login';
import ResetPassword from '../Pages/Auth/ResetPassword';
import EmailVerification from '../Pages/Auth/EmailVerification';
import SetPassword from '../Pages/Auth/SetPassword';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Homepage />,
        },
        {
          path: '/services',
          element: <Services />,
        },
        {
          path: '/projects',
          element: <Projects />,
        },
        {
          path: '/portfolio',
          element: <Portfolio />,
        },
        {
          path: '/creativity',
          element: <Creativity />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
    },
    {
      path: '/email-verification',
      element: <EmailVerification />,
    },
    {
      path: '/set-password',
      element: <SetPassword />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

export default router;
