import React from 'react';
import { SectionType } from '../types';

interface FooterProps {
  onSelectSection: (section: SectionType) => void;
  onOpenSubscribe: () => void;
  onOpenMiniCrossword: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSection,
  onOpenSubscribe,
  onOpenMiniCrossword
}) => {
  return (
    <footer className="w-full border-t-2 border-[#121212] mt-12 bg-white font-sans text-xs text-gray-700">
      <div className="max-w-[1240px] mx-auto px-4 py-6">
        {/* Footer Masthead Top Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-4 mb-6 gap-3">
          <button
            onClick={() => onSelectSection('All')}
            className="masthead-title text-2xl font-normal text-[#121212] cursor-pointer hover:opacity-90"
          >
            The New York Times
          </button>
          <div className="flex flex-wrap items-center justify-center space-x-3 text-xs">
            <button
              onClick={onOpenSubscribe}
              className="hover:underline font-semibold cursor-pointer text-gray-800"
            >
              Home Delivery
            </button>
            <button
              onClick={onOpenSubscribe}
              className="hover:underline font-semibold cursor-pointer text-gray-800"
            >
              Digital Subscriptions
            </button>
            <button
              onClick={onOpenMiniCrossword}
              className="hover:underline font-semibold cursor-pointer text-gray-800"
            >
              Crosswords
            </button>
            <button
              onClick={() => onSelectSection('Cooking')}
              className="hover:underline font-semibold cursor-pointer text-gray-800"
            >
              Cooking
            </button>
          </div>
        </div>

        {/* Broadsheet Sitemap Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 pb-8 border-b border-gray-200 text-[11px]">
          <div>
            <h5 className="font-bold uppercase tracking-wider text-black mb-2">News</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li>
                <button onClick={() => onSelectSection('All')} className="hover:underline cursor-pointer">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('U.S.')} className="hover:underline cursor-pointer">
                  U.S.
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('World')} className="hover:underline cursor-pointer">
                  World
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('U.S.')} className="hover:underline cursor-pointer">
                  Politics
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Business')} className="hover:underline cursor-pointer">
                  Business
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Business')} className="hover:underline cursor-pointer">
                  Tech
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('U.S.')} className="hover:underline cursor-pointer">
                  Science
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-wider text-black mb-2">Opinion</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li>
                <button onClick={() => onSelectSection('Opinion')} className="hover:underline cursor-pointer">
                  Today's Opinion
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Opinion')} className="hover:underline cursor-pointer">
                  Columnists
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Opinion')} className="hover:underline cursor-pointer">
                  Editorials
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Opinion')} className="hover:underline cursor-pointer">
                  Guest Essays
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Opinion')} className="hover:underline cursor-pointer">
                  Letters
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-wider text-black mb-2">Arts</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li>
                <button onClick={() => onSelectSection('Arts')} className="hover:underline cursor-pointer">
                  Today's Arts
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Arts')} className="hover:underline cursor-pointer">
                  Books
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Arts')} className="hover:underline cursor-pointer">
                  Movies
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Arts')} className="hover:underline cursor-pointer">
                  Music
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Arts')} className="hover:underline cursor-pointer">
                  Television
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Arts')} className="hover:underline cursor-pointer">
                  Theater
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-wider text-black mb-2">Living</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li>
                <button onClick={() => onSelectSection('Lifestyle')} className="hover:underline cursor-pointer">
                  Style
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Cooking')} className="hover:underline cursor-pointer">
                  Food
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Lifestyle')} className="hover:underline cursor-pointer">
                  Travel
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Lifestyle')} className="hover:underline cursor-pointer">
                  Love
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Lifestyle')} className="hover:underline cursor-pointer">
                  Real Estate
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-wider text-black mb-2">More</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li>
                <button onClick={() => onSelectSection('Audio')} className="hover:underline cursor-pointer">
                  Audio
                </button>
              </li>
              <li>
                <button onClick={onOpenMiniCrossword} className="hover:underline cursor-pointer">
                  Games
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Cooking')} className="hover:underline cursor-pointer">
                  Cooking
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('Wirecutter')} className="hover:underline cursor-pointer">
                  Wirecutter
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('The Athletic')} className="hover:underline cursor-pointer">
                  The Athletic
                </button>
              </li>
              <li>
                <span className="text-gray-400">Live Events</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-wider text-black mb-2">Subscriptions</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li>
                <button onClick={onOpenSubscribe} className="hover:underline cursor-pointer text-left">
                  All Access Subscription
                </button>
              </li>
              <li>
                <button onClick={onOpenSubscribe} className="hover:underline cursor-pointer text-left">
                  Gift Subscriptions
                </button>
              </li>
              <li>
                <button onClick={onOpenSubscribe} className="hover:underline cursor-pointer text-left">
                  Corporate Subscriptions
                </button>
              </li>
              <li>
                <button onClick={onOpenSubscribe} className="hover:underline cursor-pointer text-left">
                  Education Rates
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between text-[10px] text-gray-500 space-y-2 md:space-y-0">
          <div>
            <p>© 2024 The New York Times Company</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="hover:underline cursor-pointer">NYTCo</span>
            <span className="hover:underline cursor-pointer">Contact Us</span>
            <span className="hover:underline cursor-pointer">Accessibility</span>
            <span className="hover:underline cursor-pointer">Work with us</span>
            <span className="hover:underline cursor-pointer">Advertise</span>
            <span className="hover:underline cursor-pointer">T Brand Studio</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Terms of Sale</span>
            <span className="hover:underline cursor-pointer">Site Map</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
