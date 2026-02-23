import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

// Module Imports
import LoginPage from '../modules/login/LoginPage';
import RegisterPage from '../modules/register/RegisterPage';
import DashboardPage from '../modules/dashboard/DashboardPage';
import StoryBuilderPage from '../modules/story-builder/StoryBuilderPage';
import PracticePage from '../modules/practice/PracticePage';
import FeedbackPage from '../modules/feedback/FeedbackPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Default Route */}
        <Route index element={<Navigate to="/login" replace />} />
        
        {/* Module Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="story-builder" element={<StoryBuilderPage />} />
        <Route path="practice" element={<PracticePage />} />
        <Route path="feedback" element={<FeedbackPage />} />
        
        {/* Catch All */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  );
}
