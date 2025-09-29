import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';
import '../styles/error.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-page">
      {/* Animated Background */}
      <div className="error-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="error-container">
        {/* Animated 404 */}
        <div className="error-number">
          <span className="number-4 number-first">4</span>
          <div className="number-0-wrapper">
            <div className="number-0">
              <AlertCircle className="alert-icon" size={120} />
            </div>
          </div>
          <span className="number-4 number-last">4</span>
        </div>

        {/* Error Content */}
        <div className="error-content">
          <h1 className="error-title">Page Not Found</h1>
          <p className="error-message">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, we'll help you find your way back.
          </p>

          {/* Action Buttons */}
          <div className="error-actions">
            <button onClick={handleGoHome} className="error-button primary">
              <Home size={20} />
              <span>Go Home</span>
            </button>
            <button onClick={handleGoBack} className="error-button secondary">
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-shape shape-1">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="floating-shape shape-2">
            <svg viewBox="0 0 100 100" fill="none">
              <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="floating-shape shape-3">
            <svg viewBox="0 0 100 100" fill="none">
              <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="floating-shape shape-4">
            <svg viewBox="0 0 100 100" fill="none">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Additional Info */}
        <div className="error-footer">
          <p className="error-code">Error Code: 404</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage