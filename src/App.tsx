import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './context/ThemeContext';
import AuthGuard from './components/AuthGuard';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import LookbookPage from './pages/LookbookPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SuccessPage from './pages/SuccessPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import EmailConfirmationPage from './pages/EmailConfirmationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProfilePage from './pages/ProfilePage';
import InsightPage from './pages/InsightPage';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<AuthGuard requireAuth={false}><LoginPage /></AuthGuard>} />
                <Route path="/signup" element={<AuthGuard requireAuth={false}><SignupPage /></AuthGuard>} />
                <Route path="/forgot-password" element={<AuthGuard requireAuth={false}><ForgotPasswordPage /></AuthGuard>} />
                <Route path="/reset-password" element={<AuthGuard requireAuth={false}><ResetPasswordPage /></AuthGuard>} />
                <Route path="/confirm-email" element={<EmailConfirmationPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/lookbook" element={<LookbookPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/profile" element={<AuthGuard><ProfilePage /></AuthGuard>} />
                <Route path="/insights/:id" element={<InsightPage />} />
              </Routes>
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;