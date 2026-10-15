import React from 'react';
import { Menu, Search, Sun, Bookmark, User, TrendingUp } from 'lucide-react';
import { Edition, SectionType } from '../types';

interface HeaderProps {
  currentEdition: Edition;
  onSelectEdition: (edition: Edition) => void;
  onOpenSections: () => void;
  onOpenSearch: () => void;
  onOpenSubscribe: () => void;
  onOpenAuth: () => void;
  onOpenSaved: () => void;
  savedCount: number;
  activeSection: SectionType;
  onSelectSection: (section: SectionType) => void;
  onOpenWeather: () => void;
  isLoggedIn: boolean;
  userEmail?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentEdition,
  onSelectEdition,
  onOpenSections,
  onOpenSearch,
  onOpenSubscribe,
  onOpenAuth,
  onOpenSaved,
  savedCount,
  activeSection,
  onSelectSection,
  onOpenWeather,
  isLoggedIn,
  userEmail
}) => {
  const sections: SectionType[] = [
    'U.S.',
    'World',
    'Business',
    'Arts',
    'Lifestyle',
    'Opinion',
    'Audio',
    'Games',
    'Cooking',
    'Wirecutter',
    'The Athletic'
  ];

  const editions: Edition[] = ['U.S.', 'INTERNATIONAL', 'CANADA', 'ESPAÑOL', '中文'];

  return (
    <header className="w-full max-w-[1240px] mx-auto px-4 pt-2">
      {/* Top Meta & Controls Bar */}
      <div className="flex items-center justify-between text-[11px] font-sans border-b border-gray-200 pb-2 mb-2">
        {/* Left: Language Editions & Search/Menu triggers */}
        <div className="flex items-center space-x-3 text-gray-700">
          <button
            onClick={onOpenSections}
            className="flex items-center space-x-1 hover:text-black transition-colors focus:outline-none cursor-pointer"
            title="Open Sections"
          >
            <Menu className="w-4 h-4 text-gray-800" />
            <span className="font-bold text-[10px] tracking-wide uppercase">Sections</span>
          </button>

          <button
            onClick={onOpenSearch}
            className="flex items-center space-x-1 hover:text-black pl-2 transition-colors focus:outline-none cursor-pointer"
            title="Search the New York Times"
          >
            <Search className="w-3.5 h-3.5 text-gray-800" />
            <span className="font-bold text-[10px] tracking-wide uppercase">Search</span>
          </button>

          <div className="hidden md:flex items-center space-x-2 pl-3 border-l border-gray-300">
            {editions.map((ed) => (
              <button
                key={ed}
                onClick={() => onSelectEdition(ed)}
                className={`text-[10px] transition-colors cursor-pointer ${
                  currentEdition === ed
                    ? 'font-bold text-black border-b border-black'
                    : 'text-gray-500 hover:text-gray-900 hover:underline'
                }`}
              >
                {ed}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Subscriptions, Saved Articles & Auth */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          <button
            onClick={onOpenSaved}
            className="relative flex items-center space-x-1 px-2 py-1.5 text-gray-700 hover:text-black text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            title="View saved articles"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Saved</span>
            {savedCount > 0 && (
              <span className="ml-1 bg-red-700 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenSubscribe}
            className="bg-[#567b95] hover:bg-[#326891] text-white px-3 py-1.5 rounded-sm font-bold text-[10px] tracking-widest uppercase transition-colors shadow-sm cursor-pointer"
          >
            Subscribe for $1/Week
          </button>

          <button
            onClick={onOpenAuth}
            className="flex items-center space-x-1 border border-gray-400 hover:border-black font-semibold text-[10px] px-2.5 py-1.5 rounded-sm uppercase tracking-wider text-gray-800 transition-colors cursor-pointer"
          >
            <User className="w-3 h-3 text-gray-600" />
            <span>{isLoggedIn ? (userEmail ? userEmail.split('@')[0] : 'Account') : 'Log In'}</span>
          </button>
        </div>
      </div>

      {/* Date, Weather, and Today's Paper Subhead */}
      <div className="flex items-center justify-between text-[11px] font-serif text-gray-600 py-1">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-gray-900">Wednesday, October 23, 2024</span>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => onSelectSection('All')}
            className="hover:underline text-gray-700 cursor-pointer"
          >
            Today’s Paper
          </button>
        </div>

        <div className="hidden sm:flex items-center space-x-4 text-xs font-sans">
          <button
            onClick={onOpenWeather}
            className="flex items-center space-x-1 hover:text-black cursor-pointer group"
            title="Click for full weather report"
          >
            <Sun className="w-3.5 h-3.5 text-amber-500 group-hover:rotate-45 transition-transform" />
            <span className="font-medium text-gray-800">64°F</span>
            <span className="text-gray-400 text-[10px]">New York</span>
          </button>

          <button
            onClick={onOpenWeather}
            className="flex items-center space-x-1.5 border-l border-gray-300 pl-3 hover:text-black cursor-pointer"
            title="Markets: S&P 500"
          >
            <span className="text-gray-500">S&amp;P 500</span>
            <span className="font-medium text-emerald-700 flex items-center">
              +0.38% <TrendingUp className="w-3 h-3 ml-0.5" />
            </span>
          </button>
        </div>
      </div>

      {/* Iconic Masthead Title */}
      <div className="text-center py-2 sm:py-3 border-b border-gray-900">
        <button
          onClick={() => onSelectSection('All')}
          className="inline-block hover:opacity-95 transition cursor-pointer"
        >
          <h1 className="masthead-title text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#121212] select-none">
            The New York Times
          </h1>
        </button>
      </div>

      {/* Primary Navigation Bar */}
      <nav aria-label="Sections Navigation" className="border-b-2 border-[#121212] py-1.5 overflow-x-auto">
        <ul className="flex items-center justify-start md:justify-center gap-x-4 sm:gap-x-5 text-[11px] sm:text-xs font-sans tracking-tight text-gray-800 font-medium uppercase whitespace-nowrap min-w-max px-2 md:px-0">
          <li>
            <button
              onClick={() => onSelectSection('All')}
              className={`hover:underline cursor-pointer ${
                activeSection === 'All' ? 'font-bold text-black border-b-2 border-black pb-0.5' : ''
              }`}
            >
              Front Page
            </button>
          </li>
          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => onSelectSection(sec)}
                className={`hover:underline cursor-pointer ${
                  activeSection === sec ? 'font-bold text-black border-b-2 border-black pb-0.5' : ''
                }`}
              >
                {sec}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
