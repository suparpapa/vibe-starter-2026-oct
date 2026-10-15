import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Clock } from 'lucide-react';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (articleId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.summary.toLowerCase().includes(query.toLowerCase()) ||
          a.byline.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase()) ||
          (a.subCategory && a.subCategory.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-150"
    >
      <div className="bg-white text-[#121212] w-full max-w-[650px] rounded-sm shadow-2xl h-fit max-h-[85vh] flex flex-col overflow-hidden border border-gray-300">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
          <Search className="w-5 h-5 text-gray-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news, analysis, columnists, reviews..."
            className="w-full text-base font-serif focus:outline-none placeholder:font-sans placeholder:text-gray-400 placeholder:text-sm"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-gray-400 hover:text-black px-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-600 hover:text-black cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="overflow-y-auto p-4 space-y-3 flex-grow font-sans text-xs">
          {query.trim() === '' ? (
            <div className="text-gray-500 py-6 text-center space-y-2">
              <p className="font-semibold text-gray-700">Popular Searches Today</p>
              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {['Regulatory Scope', 'Transition Deadlines', 'Salmon Recipe', 'Headphones', 'Inflation'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-800 cursor-pointer"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p className="font-medium text-gray-700">No results found for “{query}”</p>
              <p className="text-[11px] mt-1">Try searching with broader terms or keywords.</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
                {filtered.length} {filtered.length === 1 ? 'Result' : 'Results'} Found
              </p>
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectArticle(item.id);
                    onClose();
                  }}
                  className="p-3 border border-gray-200 rounded hover:border-black hover:bg-gray-50 transition cursor-pointer group"
                >
                  <div className="flex items-center space-x-2 text-[10px] uppercase font-bold text-red-700 mb-1">
                    <span>{item.category}</span>
                    {item.subCategory && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-600">{item.subCategory}</span>
                      </>
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-base text-gray-900 group-hover:underline leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 font-serif line-clamp-2 mt-1">
                    {item.summary}
                  </p>
                  <div className="mt-2 text-[10px] text-gray-500 flex items-center justify-between">
                    <span>{item.byline}</span>
                    <span className="flex items-center gap-1 font-sans text-black group-hover:translate-x-0.5 transition-transform">
                      Read article <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
