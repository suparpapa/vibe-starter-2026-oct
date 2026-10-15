import React from 'react';
import { Grid3X3, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface LifestyleStripProps {
  articles: Article[];
  onOpenArticle: (articleId: string) => void;
  onOpenMiniCrossword: () => void;
  onExploreMore: () => void;
}

export const LifestyleStrip: React.FC<LifestyleStripProps> = ({
  articles,
  onOpenArticle,
  onOpenMiniCrossword,
  onExploreMore
}) => {
  const salmonArticle = articles.find((a) => a.id === 'cooking-crispy-roast-salmon');
  const headphonesArticle = articles.find((a) => a.id === 'wirecutter-best-headphones');
  const theaterArticle = articles.find((a) => a.id === 'arts-revival-on-broadway');

  return (
    <section className="mt-10 pt-6 border-t-2 border-[#121212]">
      <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
        <h3 className="font-serif font-bold text-xl tracking-tight text-gray-900">
          Lifestyle, Culture &amp; Wirecutter
        </h3>
        <button
          onClick={onExploreMore}
          className="text-xs font-sans font-semibold text-[#326891] hover:underline flex items-center gap-1 cursor-pointer"
        >
          Explore More <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {/* Cooking Card */}
        {salmonArticle && (
          <article
            onClick={() => onOpenArticle(salmonArticle.id)}
            className="group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="aspect-video bg-gray-100 overflow-hidden rounded-sm mb-2">
                <img
                  alt="Crispy Roast Salmon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={salmonArticle.imageUrl}
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-sans uppercase font-bold text-amber-700 tracking-wider">
                Cooking
              </span>
              <h4 className="font-serif font-bold text-sm leading-snug group-hover:underline text-gray-900 mt-1">
                {salmonArticle.title}
              </h4>
            </div>
            <p className="text-xs text-gray-500 font-serif mt-1">By Ali Slagle</p>
          </article>
        )}

        {/* Wirecutter Card */}
        {headphonesArticle && (
          <article
            onClick={() => onOpenArticle(headphonesArticle.id)}
            className="group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="aspect-video bg-gray-100 overflow-hidden rounded-sm mb-2">
                <img
                  alt="Top noise cancelling headphones"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={headphonesArticle.imageUrl}
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-sans uppercase font-bold text-blue-800 tracking-wider">
                Wirecutter
              </span>
              <h4 className="font-serif font-bold text-sm leading-snug group-hover:underline text-gray-900 mt-1">
                {headphonesArticle.title}
              </h4>
            </div>
            <p className="text-xs text-gray-500 font-serif mt-1">Tested over 60 hours</p>
          </article>
        )}

        {/* Games Card */}
        <article className="group cursor-pointer border border-gray-200 p-3 bg-gray-50 flex flex-col justify-between rounded-sm hover:shadow-sm transition-all duration-200">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-sans uppercase font-bold text-gray-700 tracking-wider">
                NYT Games
              </span>
              <Grid3X3 className="w-4 h-4 text-gray-700" />
            </div>
            <h4
              onClick={onOpenMiniCrossword}
              className="font-serif font-bold text-base leading-tight group-hover:underline text-gray-900"
            >
              The Mini Crossword
            </h4>
            <p className="text-xs text-gray-600 font-serif mt-1">
              Solve the quick 5x5 grid in under two minutes.
            </p>
          </div>
          <div className="pt-4">
            <button
              onClick={onOpenMiniCrossword}
              className="inline-block bg-[#121212] hover:bg-gray-800 text-white text-[11px] font-sans font-bold px-3 py-1 rounded transition-colors cursor-pointer"
            >
              Play Now
            </button>
          </div>
        </article>

        {/* Arts & Culture Card */}
        {theaterArticle && (
          <article
            onClick={() => onOpenArticle(theaterArticle.id)}
            className="group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="aspect-video bg-gray-100 overflow-hidden rounded-sm mb-2">
                <img
                  alt="Broadway performance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={theaterArticle.imageUrl}
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-sans uppercase font-bold text-purple-800 tracking-wider">
                Theater
              </span>
              <h4 className="font-serif font-bold text-sm leading-snug group-hover:underline text-gray-900 mt-1">
                {theaterArticle.title}
              </h4>
            </div>
            <p className="text-xs text-gray-500 font-serif mt-1">Critic's Notebook</p>
          </article>
        )}
      </div>
    </section>
  );
};
