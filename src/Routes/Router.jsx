import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Homepage from '../Pages/Homepage';
import Services from '../Pages/Services';
import Projects from '../Pages/Projects';

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
          element: <Homepage />,
        },
        {
          path: '/creativity',
          element: <Homepage />,
        },
        {
          path: '/contact',
          element: <Homepage />,
        },
      ],
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
