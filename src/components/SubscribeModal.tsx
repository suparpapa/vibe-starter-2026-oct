import React, { useState } from 'react';
import { X, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'all-access' | 'basic'>('all-access');
  const [email, setEmail] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsCompleted(true);
      setTimeout(() => {
        onSuccess();
        onClose();
        setIsCompleted(false);
      }, 1500);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="bg-white text-[#121212] w-full max-w-[620px] rounded-sm shadow-2xl overflow-hidden border border-gray-300 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isCompleted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-gray-900">
              Welcome to The New York Times
            </h3>
            <p className="text-sm font-serif text-gray-600">
              Your unlimited digital subscription has been activated for <span className="font-bold">{email}</span>.
            </p>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2 border-b border-gray-200 pb-5">
              <span className="masthead-title text-2xl font-normal text-black block">
                The New York Times
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-gray-900 leading-tight">
                Independent journalism worth supporting.
              </h2>
              <p className="font-sans text-xs text-gray-600">
                Special introductory offer: <span className="font-bold text-black">$1/week</span> for your first year.
              </p>
            </div>

            {/* Plan selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
              <div
                onClick={() => setSelectedPlan('all-access')}
                className={`p-4 rounded border-2 cursor-pointer transition relative ${
                  selectedPlan === 'all-access'
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs uppercase tracking-wider text-black">
                    All Access
                  </span>
                  <span className="bg-emerald-700 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                    Best Value
                  </span>
                </div>
                <div className="mt-2 text-2xl font-bold font-serif">$1<span className="text-xs font-sans text-gray-500 font-normal">/week</span></div>
                <p className="text-[11px] text-gray-600 mt-1">
                  News, Games, Cooking, Wirecutter &amp; The Athletic.
                </p>
              </div>

              <div
                onClick={() => setSelectedPlan('basic')}
                className={`p-4 rounded border-2 cursor-pointer transition ${
                  selectedPlan === 'basic'
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="font-bold text-xs uppercase tracking-wider text-black block">
                  News Only
                </span>
                <div className="mt-2 text-2xl font-bold font-serif">$0.75<span className="text-xs font-sans text-gray-500 font-normal">/week</span></div>
                <p className="text-[11px] text-gray-600 mt-1">
                  Unlimited access to core News and Opinion reporting.
                </p>
              </div>
            </div>

            {/* Perks list */}
            <div className="bg-gray-50 p-3.5 rounded border border-gray-200 text-xs font-sans space-y-2 text-gray-700">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Unlimited reporting from 1,700+ journalists in 150+ countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full access to The Mini, Wordle, and Spelling Bee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cancel online anytime with no cancellation fees</span>
              </div>
            </div>

            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} className="space-y-3 font-sans">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to continue"
                required
                className="w-full text-xs p-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="w-full bg-[#567b95] hover:bg-[#326891] text-white font-bold text-xs py-2.5 rounded-sm tracking-wider uppercase transition cursor-pointer shadow-sm"
              >
                Activate Subscription for $1/Week
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
