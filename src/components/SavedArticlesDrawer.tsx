import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface SavedArticlesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onOpenArticle: (articleId: string) => void;
  onRemoveSaved: (articleId: string) => void;
}

export const SavedArticlesDrawer: React.FC<SavedArticlesDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onOpenArticle,
  onRemoveSaved
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-[400px] h-full shadow-2xl flex flex-col border-l border-gray-300">
        {/* Header */}
        <div className="border-b border-gray-200 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-4 h-4 text-red-700 fill-current" />
            <h3 className="font-serif font-bold text-lg text-gray-900">
              Saved for Later ({savedArticles.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="overflow-y-auto px-5 py-4 space-y-4 flex-grow font-sans text-xs">
          {savedArticles.length === 0 ? (
            <div className="text-center py-12 text-gray-500 space-y-2">
              <Bookmark className="w-8 h-8 mx-auto text-gray-300" />
              <p className="font-semibold text-gray-700">No saved articles yet</p>
              <p className="text-[11px] text-gray-500">
                Click the bookmark icon on any article to save it to your reading list.
              </p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.id}
                className="border border-gray-200 rounded p-3 hover:border-black transition group relative bg-white"
              >
                <div className="flex items-center justify-between text-[10px] uppercase font-bold text-red-700 mb-1">
                  <span>{art.category}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveSaved(art.id);
                    }}
                    className="text-gray-400 hover:text-red-700 cursor-pointer"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h4
                  onClick={() => {
                    onOpenArticle(art.id);
                    onClose();
                  }}
                  className="font-serif font-bold text-sm text-gray-900 group-hover:underline cursor-pointer leading-snug"
                >
                  {art.title}
                </h4>

                <p className="font-serif text-xs text-gray-600 mt-1 line-clamp-2">
                  {art.summary}
                </p>

                <div className="mt-2 text-[10px] text-gray-400 flex items-center justify-between font-sans">
                  <span>{art.byline}</span>
                  <button
                    onClick={() => {
                      onOpenArticle(art.id);
                      onClose();
                    }}
                    className="text-[#326891] hover:underline flex items-center gap-0.5 cursor-pointer font-medium"
                  >
                    Read <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex-grow cursor-pointer" onClick={onClose} />
    </div>
  );
};
