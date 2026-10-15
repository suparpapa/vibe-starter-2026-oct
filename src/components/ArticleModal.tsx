import React, { useState } from 'react';
import {
  X,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  Play,
  Pause,
  MessageSquare,
  ThumbsUp,
  Minus,
  Plus,
  Clock,
  Printer,
  Check
} from 'lucide-react';
import { Article, Comment } from '../types';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
  comments: Comment[];
  onAddComment: (articleId: string, text: string, author: string, location: string) => void;
  onToggleRecommend: (articleId: string, commentId: string) => void;
  onOpenArticle?: (articleId: string) => void;
  allArticles?: Article[];
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  isSaved,
  onToggleSave,
  comments,
  onAddComment,
  onToggleRecommend,
  onOpenArticle,
  allArticles = []
}) => {
  // Reading mode state
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioSpeed, setAudioSpeed] = useState<'1x' | '1.25x' | '1.5x'>('1x');
  const [copiedLink, setCopiedLink] = useState(false);

  // Comments state
  const [showComments, setShowComments] = useState(false);
  const [commentName, setCommentName] = useState('');
  const [commentLocation, setCommentLocation] = useState('');
  const [commentText, setCommentText] = useState('');

  // Recipe scaling state (if cooking)
  const [recipeServings, setRecipeServings] = useState(
    article.recipeDetails?.servings || 4
  );
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleAudioToggle = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(
      article.id,
      commentText.trim(),
      commentName.trim() || 'Reader from NY',
      commentLocation.trim() || 'New York, NY'
    );
    setCommentText('');
  };

  const fontSizeClass = {
    normal: 'text-lg leading-relaxed',
    large: 'text-xl leading-relaxed',
    xlarge: 'text-2xl leading-loose'
  }[fontSize];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs overflow-y-auto flex justify-center p-2 sm:p-4 md:p-6"
    >
      <div className="bg-white text-[#121212] w-full max-w-[860px] rounded-sm shadow-2xl relative my-auto min-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Sticky Utility Bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs font-sans">
            <span className="font-bold uppercase tracking-wider text-red-700">
              {article.category}
            </span>
            {article.subCategory && (
              <>
                <span className="text-gray-300">/</span>
                <span className="text-gray-600 uppercase font-medium">
                  {article.subCategory}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Font Size Adjuster */}
            <div className="hidden sm:flex items-center space-x-1 border border-gray-200 rounded px-1.5 py-0.5 text-xs text-gray-700">
              <span className="text-[10px] uppercase font-bold text-gray-400 mr-1">Text:</span>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1 rounded ${fontSize === 'normal' ? 'bg-gray-200 font-bold' : ''}`}
                title="Default text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1 rounded text-sm ${fontSize === 'large' ? 'bg-gray-200 font-bold' : ''}`}
                title="Larger text"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-1 rounded text-base ${fontSize === 'xlarge' ? 'bg-gray-200 font-bold' : ''}`}
                title="Extra large text"
              >
                A++
              </button>
            </div>

            {/* Save / Bookmark Button */}
            <button
              onClick={() => onToggleSave(article.id)}
              className={`p-1.5 rounded hover:bg-gray-100 transition cursor-pointer ${
                isSaved ? 'text-red-700' : 'text-gray-600'
              }`}
              title={isSaved ? 'Remove from Saved' : 'Save article'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            {/* Share Button */}
            <button
              onClick={handleCopyLink}
              className="p-1.5 rounded hover:bg-gray-100 text-gray-600 transition cursor-pointer relative"
              title="Share article link"
            >
              <Share2 className="w-4 h-4" />
              {copiedLink && (
                <span className="absolute -bottom-8 right-0 bg-[#121212] text-white text-[10px] font-sans px-2 py-1 rounded shadow whitespace-nowrap">
                  Link copied!
                </span>
              )}
            </button>

            {/* Comments Counter */}
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-1 text-xs text-gray-600 hover:text-black p-1.5 rounded hover:bg-gray-100 transition cursor-pointer"
              title="View comments"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="font-semibold">{comments.length}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700 hover:text-black transition cursor-pointer ml-1"
              title="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audio Player Bar */}
        <div className="bg-[#f7f7f7] border-b border-gray-200 px-4 sm:px-6 py-2 flex items-center justify-between text-xs font-sans text-gray-700">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleAudioToggle}
              className="w-7 h-7 rounded-full bg-[#121212] hover:bg-gray-800 text-white flex items-center justify-center transition cursor-pointer"
            >
              {isPlayingAudio ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900">
                {isPlayingAudio ? 'Playing narration...' : 'Listen to this article'}
              </span>
              <span className="text-[11px] text-gray-500">Narrated by NYT Audio • 5:12 min</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                const speeds: ('1x' | '1.25x' | '1.5x')[] = ['1x', '1.25x', '1.5x'];
                const next = speeds[(speeds.indexOf(audioSpeed) + 1) % speeds.length];
                setAudioSpeed(next);
              }}
              className="px-2 py-0.5 text-[11px] font-bold border border-gray-300 rounded hover:bg-gray-200 cursor-pointer"
            >
              {audioSpeed}
            </button>
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center space-x-1 text-gray-500 hover:text-black cursor-pointer"
              title="Print article"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="text-[11px]">Print</span>
            </button>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="px-5 sm:px-10 py-6 sm:py-8 flex-grow">
          {/* Article Header */}
          <div className="space-y-4 mb-6">
            <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-[#121212] tracking-tight">
              {article.title}
            </h1>

            <p className="font-serif text-lg sm:text-xl text-gray-600 leading-snug">
              {article.summary}
            </p>

            {/* Author Byline & Timestamp */}
            <div className="border-t border-b border-gray-200 py-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-sans text-gray-600 gap-2">
              <div className="flex items-center space-x-3">
                {article.columnistAvatar && (
                  <img
                    src={article.columnistAvatar}
                    alt={article.byline}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-gray-300"
                  />
                )}
                <div>
                  <p className="font-bold text-gray-900">{article.byline}</p>
                  <p className="text-[11px] text-gray-500 flex items-center gap-1.5">
                    <span>{article.publishedAt}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-[11px]">
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono uppercase">
                  Edition: U.S.
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {article.imageUrl && (
            <figure className="mb-8">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-auto object-cover rounded-xs max-h-[500px]"
              />
              <figcaption className="text-xs font-sans text-gray-600 pt-2 flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-2">
                <span>{article.imageCaption || article.title}</span>
                {article.imageCredit && (
                  <span className="text-gray-400 shrink-0 sm:ml-4">{article.imageCredit}</span>
                )}
              </figcaption>
            </figure>
          )}

          {/* Bulleted Points */}
          {article.bullets && article.bullets.length > 0 && (
            <div className="bg-[#fcfcfc] border-l-4 border-red-700 p-4 mb-6 rounded-r-xs">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-red-700 mb-2">
                Key Developments
              </h4>
              <ul className="space-y-2 text-sm font-serif">
                {article.bullets.map((b, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-red-700 font-bold">•</span>
                    <span className="text-gray-800">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interactive Recipe View (If Cooking) */}
          {article.recipeDetails && (
            <div className="bg-[#faf8f5] border border-[#e8dfd3] p-5 rounded-sm my-6 font-serif">
              <div className="flex items-center justify-between border-b border-[#e8dfd3] pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-amber-800">
                    NYT Cooking Special
                  </span>
                  <h3 className="font-bold text-xl text-gray-900">Recipe Breakdown</h3>
                </div>
                <div className="flex items-center space-x-2 text-xs font-sans">
                  <span className="text-gray-600">Servings:</span>
                  <div className="flex items-center border border-gray-300 rounded bg-white">
                    <button
                      onClick={() => setRecipeServings((s) => Math.max(1, s - 1))}
                      className="px-2 py-0.5 hover:bg-gray-100 text-gray-700"
                    >
                      -
                    </button>
                    <span className="px-2 font-bold text-gray-900">{recipeServings}</span>
                    <button
                      onClick={() => setRecipeServings((s) => s + 1)}
                      className="px-2 py-0.5 hover:bg-gray-100 text-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-700 mb-2.5">
                    Ingredients Checklist
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-800 font-sans">
                    {article.recipeDetails.ingredients.map((ing, idx) => (
                      <li
                        key={idx}
                        onClick={() =>
                          setCheckedIngredients((prev) => ({
                            ...prev,
                            [idx]: !prev[idx]
                          }))
                        }
                        className="flex items-start space-x-2.5 cursor-pointer select-none group"
                      >
                        <input
                          type="checkbox"
                          checked={!!checkedIngredients[idx]}
                          onChange={() => {}}
                          className="mt-0.5 rounded text-amber-700 focus:ring-amber-500"
                        />
                        <span
                          className={`text-xs ${
                            checkedIngredients[idx] ? 'line-through text-gray-400' : 'text-gray-800'
                          }`}
                        >
                          {ing}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-700 mb-2.5">
                    Step-by-Step Method
                  </h4>
                  <ol className="space-y-3 text-sm text-gray-800 font-serif list-decimal pl-4">
                    {article.recipeDetails.steps.map((st, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {st}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Wirecutter Review Box */}
          {article.productReview && (
            <div className="bg-[#f4f7fa] border border-[#d2dce8] p-5 rounded-sm my-6 font-sans">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800">
                Wirecutter Pick &amp; Test Summary
              </span>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Our Pick: {article.productReview.topPick}
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Tested for {article.productReview.testedHours}+ hours across multi-leg flights
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 font-bold text-xl text-gray-900">
                  {article.productReview.price}
                </div>
              </div>
              <p className="text-sm text-gray-700 font-serif mt-3 italic">
                “{article.productReview.verdict}”
              </p>
              <div className="mt-3 text-xs text-gray-600">
                <span className="font-bold">Also Great:</span>{' '}
                {article.productReview.runnersUp.join(', ')}
              </div>
            </div>
          )}

          {/* Main Article Paragraphs */}
          <div className={`space-y-5 font-serif text-[#121212] ${fontSizeClass}`}>
            {article.content.map((paragraph, idx) => {
              // First paragraph gets classic NYT drop cap
              if (idx === 0) {
                return (
                  <p key={idx} className="first-letter:float-left first-letter:text-5xl first-letter:pr-2.5 first-letter:font-serif first-letter:leading-none first-letter:font-bold">
                    {paragraph}
                  </p>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* Pull Quote */}
          {article.pullQuote && (
            <blockquote className="my-8 pl-5 border-l-2 border-[#121212] italic font-serif text-xl sm:text-2xl text-gray-800">
              “{article.pullQuote}”
            </blockquote>
          )}

          {/* Comments Panel */}
          <div className="mt-12 pt-8 border-t-2 border-[#121212]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif font-bold text-2xl text-gray-900">
                Reader Discussion ({comments.length})
              </h3>
              <button
                onClick={() => setShowComments(!showComments)}
                className="text-xs font-sans font-semibold text-[#326891] hover:underline"
              >
                {showComments ? 'Hide Comments' : 'View All Comments'}
              </button>
            </div>

            {/* Post Comment Form */}
            <form onSubmit={handleCommentSubmit} className="bg-gray-50 border border-gray-200 p-4 rounded-sm mb-6 space-y-3 font-sans">
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700">
                Add to the conversation
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name (e.g. Sarah Jenkins)"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="text-xs p-2 border border-gray-300 rounded-sm bg-white focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  placeholder="Location (e.g. Brooklyn, NY)"
                  value={commentLocation}
                  onChange={(e) => setCommentLocation(e.target.value)}
                  className="text-xs p-2 border border-gray-300 rounded-sm bg-white focus:outline-none focus:border-black"
                />
              </div>
              <textarea
                placeholder="Share your perspective on this report..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={3}
                required
                className="w-full text-xs p-2.5 border border-gray-300 rounded-sm bg-white focus:outline-none focus:border-black"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#121212] hover:bg-gray-800 text-white text-xs font-bold px-4 py-1.5 rounded-sm transition cursor-pointer"
                >
                  Submit Comment
                </button>
              </div>
            </form>

            {/* Comment List */}
            {comments.length === 0 ? (
              <p className="text-xs text-gray-500 font-sans italic">
                Be the first to comment on this article.
              </p>
            ) : (
              <div className="space-y-4">
                {comments.map((c) => (
                  <div key={c.id} className="border-b border-gray-200 pb-4 space-y-1.5 font-sans">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-gray-900">{c.author}</span>
                        <span className="text-gray-500 text-[11px] ml-2">{c.location}</span>
                      </div>
                      <span className="text-gray-400 text-[10px]">{c.timeAgo}</span>
                    </div>
                    <p className="font-serif text-sm text-gray-800 leading-normal">{c.text}</p>
                    <div className="flex items-center space-x-2 pt-1 text-[11px] text-gray-500">
                      <button
                        onClick={() => onToggleRecommend(article.id, c.id)}
                        className={`flex items-center space-x-1 hover:text-black cursor-pointer transition ${
                          c.userRecommended ? 'text-red-700 font-bold' : ''
                        }`}
                      >
                        <ThumbsUp className={`w-3 h-3 ${c.userRecommended ? 'fill-current' : ''}`} />
                        <span>Recommend ({c.recommendations})</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Related Articles Footer */}
          {allArticles.length > 1 && (
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-500 mb-4">
                More from The New York Times
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {allArticles
                  .filter((a) => a.id !== article.id)
                  .slice(0, 3)
                  .map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onOpenArticle && onOpenArticle(rel.id)}
                      className="cursor-pointer group space-y-1.5"
                    >
                      {rel.imageUrl && (
                        <div className="aspect-[16/10] bg-gray-100 overflow-hidden rounded-xs mb-1">
                          <img
                            src={rel.imageUrl}
                            alt={rel.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-200"
                          />
                        </div>
                      )}
                      <span className="text-[10px] font-sans uppercase font-bold text-gray-500">
                        {rel.category}
                      </span>
                      <h5 className="font-serif font-bold text-xs leading-snug group-hover:underline text-gray-900">
                        {rel.title}
                      </h5>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
