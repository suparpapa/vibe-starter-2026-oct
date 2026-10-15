import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  userEmail?: string;
  onLogin: (email: string) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  isLoggedIn,
  userEmail,
  onLogin,
  onLogout
}) => {
  const [emailInput, setEmailInput] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      onLogin(emailInput.trim());
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white text-[#121212] w-full max-w-[440px] rounded-sm shadow-2xl p-6 sm:p-8 relative border border-gray-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 border-b border-gray-200 pb-5 mb-5">
          <span className="masthead-title text-2xl font-normal text-black block">
            The New York Times
          </span>
          <h2 className="font-serif font-bold text-2xl text-gray-900">
            {isLoggedIn ? 'Your NYT Account' : 'Log in or create an account'}
          </h2>
        </div>

        {isLoggedIn ? (
          <div className="space-y-4 font-sans text-xs">
            <div className="bg-gray-50 p-4 rounded border border-gray-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-gray-500">Logged in as</span>
              <p className="font-bold text-sm text-gray-900">{userEmail || 'reader@nytimes.com'}</p>
              <div className="flex items-center space-x-1.5 text-emerald-700 text-[11px] pt-1">
                <Check className="w-3.5 h-3.5" />
                <span>All Access Subscriber</span>
              </div>
            </div>

            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full border border-gray-400 hover:border-black text-gray-800 font-bold py-2 rounded-sm uppercase tracking-wider transition cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="you@example.com"
                className="w-full p-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-black text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#121212] hover:bg-gray-800 text-white font-bold py-2.5 rounded-sm uppercase tracking-wider transition cursor-pointer text-xs"
            >
              Continue with Email
            </button>

            <p className="text-[11px] text-gray-500 text-center">
              By continuing, you agree to the Terms of Service and acknowledge our Privacy Policy.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
