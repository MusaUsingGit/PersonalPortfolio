
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { router } from '../index'; 

function AnimatedRoutes() {
  const location = useLocation(); 

  return (
        <RouterProvider router={router} />
  );
}

export default AnimatedRoutes;
