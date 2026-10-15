/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { DevelopingTicker } from './components/DevelopingTicker';
import { FrontPage } from './components/FrontPage';
import { LifestyleStrip } from './components/LifestyleStrip';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { MiniCrosswordModal } from './components/MiniCrosswordModal';
import { SectionsDrawer } from './components/SectionsDrawer';
import { SearchModal } from './components/SearchModal';
import { SubscribeModal } from './components/SubscribeModal';
import { AuthModal } from './components/AuthModal';
import { SavedArticlesDrawer } from './components/SavedArticlesDrawer';
import { WeatherModal } from './components/WeatherModal';
import { ARTICLES, INITIAL_COMMENTS } from './data/newsData';
import { Article, Comment, Edition, SectionType } from './types';
import { ArrowLeft, Check, Bookmark, Share2 } from 'lucide-react';

export default function App() {
  const [currentEdition, setCurrentEdition] = useState<Edition>('U.S.');
  const [activeSection, setActiveSection] = useState<SectionType>('All');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [isMiniCrosswordOpen, setIsMiniCrosswordOpen] = useState(false);
  const [isSectionsOpen, setIsSectionsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isWeatherOpen, setIsWeatherOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Saved / Bookmarked articles (localStorage)
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('nyt_saved_articles');
      return stored ? JSON.parse(stored) : ['court-rebuffs-challenge'];
    } catch {
      return ['court-rebuffs-challenge'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nyt_saved_articles', JSON.stringify(savedArticleIds));
    } catch {
      // ignore
    }
  }, [savedArticleIds]);

  const toggleSaveArticle = (id: string) => {
    if (savedArticleIds.includes(id)) {
      setSavedArticleIds((prev) => prev.filter((item) => item !== id));
      showToast('Article removed from saved reading list');
    } else {
      setSavedArticleIds((prev) => [...prev, id]);
      showToast('Article saved to your reading list');
    }
  };

  // Comments state
  const [commentsMap, setCommentsMap] = useState<Record<string, Comment[]>>(INITIAL_COMMENTS);

  const handleAddComment = (articleId: string, text: string, author: string, location: string) => {
    const newComment: Comment = {
      id: `c_${Date.now()}`,
      author,
      location,
      timeAgo: 'Just now',
      text,
      recommendations: 0
    };
    setCommentsMap((prev) => ({
      ...prev,
      [articleId]: [newComment, ...(prev[articleId] || [])]
    }));
    showToast('Your comment was posted to the discussion');
  };

  const handleToggleRecommend = (articleId: string, commentId: string) => {
    setCommentsMap((prev) => {
      const currentComments = prev[articleId] || [];
      const updated = currentComments.map((c) => {
        if (c.id === commentId) {
          const userRecommended = !c.userRecommended;
          const recommendations = userRecommended
            ? c.recommendations + 1
            : Math.max(0, c.recommendations - 1);
          return { ...c, userRecommended, recommendations };
        }
        return c;
      });
      return { ...prev, [articleId]: updated };
    });
  };

  const handleNewsletterSuccess = (email: string) => {
    showToast(`Subscribed to The Morning with ${email}`);
  };

  // Find active article
  const currentArticle = selectedArticleId
    ? ARTICLES.find((a) => a.id === selectedArticleId) || null
    : null;

  // Filtered articles for section view
  const sectionArticles =
    activeSection === 'All'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category.toLowerCase() === activeSection.toLowerCase());

  const savedArticlesList = ARTICLES.filter((a) => savedArticleIds.includes(a.id));

  return (
    <div className="bg-white min-h-screen text-[#121212] flex flex-col justify-between selection:bg-[#326891] selection:text-white relative">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121212] text-white text-xs font-sans px-4 py-2.5 rounded shadow-xl flex items-center space-x-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* BEGIN: SiteHeader */}
      <Header
        currentEdition={currentEdition}
        onSelectEdition={(ed) => {
          setCurrentEdition(ed);
          showToast(`Switched to ${ed} Edition`);
        }}
        onOpenSections={() => setIsSectionsOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        savedCount={savedArticleIds.length}
        activeSection={activeSection}
        onSelectSection={(sec) => {
          if (sec === 'Games') {
            setIsMiniCrosswordOpen(true);
          } else {
            setActiveSection(sec);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onOpenWeather={() => setIsWeatherOpen(true)}
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
      />
      {/* END: SiteHeader */}

      {/* BEGIN: MainContent */}
      <main className="w-full max-w-[1240px] mx-auto px-4 py-4 flex-grow">
        {/* Top Trending Headline Bar / Thin Banner */}
        <DevelopingTicker
          onOpenArticle={(id) => setSelectedArticleId(id)}
          onSeeAllUpdates={() => setSelectedArticleId('court-rebuffs-challenge')}
        />

        {/* Section Headline Banner (if a specific section is selected) */}
        {activeSection !== 'All' && (
          <div className="border-b-2 border-black pb-2 mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setActiveSection('All')}
                className="text-xs font-sans text-gray-500 hover:text-black flex items-center gap-1 cursor-pointer font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Front Page
              </button>
              <span className="text-gray-300">/</span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl tracking-tight text-gray-900">
                {activeSection}
              </h2>
            </div>
            <span className="text-xs font-sans text-gray-500">
              Showing {sectionArticles.length} {sectionArticles.length === 1 ? 'story' : 'stories'}
            </span>
          </div>
        )}

        {/* Broadsheet 3-Column Layout (Front Page) */}
        {activeSection === 'All' ? (
          <FrontPage
            articles={ARTICLES}
            onOpenArticle={(id) => setSelectedArticleId(id)}
            onNewsletterSuccess={handleNewsletterSuccess}
          />
        ) : (
          /* Filtered Section View */
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {sectionArticles.map((art, idx) => (
                <article
                  key={art.id}
                  onClick={() => setSelectedArticleId(art.id)}
                  className={`cursor-pointer group ${
                    idx === 0 ? 'md:col-span-8 space-y-3' : 'md:col-span-4 space-y-2'
                  } border-b border-gray-200 pb-5`}
                >
                  {art.imageUrl && (
                    <div className="aspect-[16/10] bg-gray-100 overflow-hidden rounded-sm mb-2">
                      <img
                        src={art.imageUrl}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-red-700">
                    {art.subCategory || art.category}
                  </span>
                  <h3
                    className={`font-serif font-bold leading-snug group-hover:underline text-gray-900 ${
                      idx === 0 ? 'text-2xl sm:text-3xl' : 'text-base'
                    }`}
                  >
                    {art.title}
                  </h3>
                  <p className="summary-text text-sm">{art.summary}</p>
                  <div className="text-[11px] font-sans text-gray-500 pt-1 flex items-center space-x-2">
                    <span>{art.byline}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* BEGIN: LifestyleAndCultureStrip */}
        <LifestyleStrip
          articles={ARTICLES}
          onOpenArticle={(id) => setSelectedArticleId(id)}
          onOpenMiniCrossword={() => setIsMiniCrosswordOpen(true)}
          onExploreMore={() => setActiveSection('Lifestyle')}
        />
        {/* END: LifestyleAndCultureStrip */}
      </main>
      {/* END: MainContent */}

      {/* BEGIN: SiteFooter */}
      <Footer
        onSelectSection={(sec) => {
          setActiveSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenMiniCrossword={() => setIsMiniCrosswordOpen(true)}
      />
      {/* END: SiteFooter */}

      {/* Article Reader Modal */}
      {currentArticle && (
        <ArticleModal
          article={currentArticle}
          onClose={() => setSelectedArticleId(null)}
          isSaved={savedArticleIds.includes(currentArticle.id)}
          onToggleSave={toggleSaveArticle}
          comments={commentsMap[currentArticle.id] || []}
          onAddComment={handleAddComment}
          onToggleRecommend={handleToggleRecommend}
          onOpenArticle={(id) => setSelectedArticleId(id)}
          allArticles={ARTICLES}
        />
      )}

      {/* Playable Mini Crossword Modal */}
      {isMiniCrosswordOpen && (
        <MiniCrosswordModal onClose={() => setIsMiniCrosswordOpen(false)} />
      )}

      {/* Sections Drawer */}
      <SectionsDrawer
        isOpen={isSectionsOpen}
        onClose={() => setIsSectionsOpen(false)}
        onSelectSection={(sec) => {
          setActiveSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenMiniCrossword={() => setIsMiniCrosswordOpen(true)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={ARTICLES}
        onSelectArticle={(id) => setSelectedArticleId(id)}
      />

      {/* Subscribe Modal */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        onSuccess={() => {
          setIsLoggedIn(true);
          setUserEmail('subscriber@nytimes.com');
          showToast('Thank you! Your New York Times subscription is active.');
        }}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLogin={(email) => {
          setIsLoggedIn(true);
          setUserEmail(email);
          showToast(`Logged in as ${email}`);
        }}
        onLogout={() => {
          setIsLoggedIn(false);
          setUserEmail('');
          showToast('Signed out of your account');
        }}
      />

      {/* Saved Articles Drawer */}
      <SavedArticlesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedArticles={savedArticlesList}
        onOpenArticle={(id) => setSelectedArticleId(id)}
        onRemoveSaved={toggleSaveArticle}
      />

      {/* Weather and Market Modal */}
      <WeatherModal isOpen={isWeatherOpen} onClose={() => setIsWeatherOpen(false)} />
    </div>
  );
}
