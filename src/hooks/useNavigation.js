import { useNavigate } from 'react-router-dom';
import { useTransition } from '../context/TransitionContext';

/**
 * useNavigation Hook
 * Provides enhanced navigation with transition support
 */
export const useNavigation = () => {
  const navigate = useNavigate();
  const { startTransition, endTransition } = useTransition();

  const navigateTo = (path) => {
    startTransition();
    setTimeout(() => {
      navigate(path);
      endTransition();
    }, 100);
  };

  return { navigateTo };
};

export default useNavigation;
