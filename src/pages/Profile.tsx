import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, isLoading } = useAuth();
  const plan = false; // Replace with actual plan check
  if (!user && !isLoading) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  if (!plan) {
    return <Navigate to="/onboarding" replace />;
  }
  return <div>Profile Page</div>;
}
