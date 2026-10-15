import React, { useState } from 'react';
import { Article } from '../types';
import { Check, Mail } from 'lucide-react';

interface FrontPageProps {
  articles: Article[];
  onOpenArticle: (articleId: string) => void;
  onNewsletterSuccess?: (email: string) => void;
}

export const FrontPage: React.FC<FrontPageProps> = ({
  articles,
  onOpenArticle,
  onNewsletterSuccess
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Retrieve specific articles by id
  const leadStory = articles.find((a) => a.id === 'court-rebuffs-challenge');
  const officialsStory = articles.find((a) => a.id === 'high-ranking-officials-leaving');
  const houseAlliancesStory = articles.find((a) => a.id === 'sudden-rise-and-fall-house-alliances');
  const economicStory = articles.find((a) => a.id === 'economic-optimism-struggles');
  const europeanSummit = articles.find((a) => a.id === 'european-summit-trade-shielding');
  const siliconFoundries = articles.find((a) => a.id === 'silicon-foundries-thermal-architecture');
  const davidFrench = articles.find((a) => a.id === 'opinion-david-french');
  const paulKrugman = articles.find((a) => a.id === 'opinion-paul-krugman');
  const pamelaPaul = articles.find((a) => a.id === 'opinion-pamela-paul');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      if (onNewsletterSuccess) {
        onNewsletterSuccess(newsletterEmail);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
      {/* LEFT COLUMN: Political Analysis & Secondary Headlines (Col 1 to 3) */}
      <section className="md:col-span-3 lg:col-span-3 flex flex-col space-y-6 md:border-r border-nyt md:pr-5">
        {/* Story 1: Left Lead Article */}
        {officialsStory && (
          <article className="space-y-2">
            <h2
              onClick={() => onOpenArticle(officialsStory.id)}
              className="font-serif font-bold text-xl leading-snug tracking-tight text-black hover:text-gray-700 cursor-pointer"
            >
              {officialsStory.title}
            </h2>
            <p
              onClick={() => onOpenArticle(officialsStory.id)}
              className="summary-text cursor-pointer hover:text-gray-900"
            >
              {officialsStory.summary}
            </p>
            <div className="text-[11px] font-sans text-gray-500 pt-1 flex items-center space-x-2">
              <span>{officialsStory.byline}</span>
              <span>•</span>
              <span>{officialsStory.readTime}</span>
            </div>
          </article>
        )}

        <hr className="border-t border-gray-200" />

        {/* Story 2: Secondary with Thumbnail */}
        {houseAlliancesStory && (
          <article className="space-y-2">
            <div
              onClick={() => onOpenArticle(houseAlliancesStory.id)}
              className="aspect-[16/10] bg-gray-100 overflow-hidden rounded-sm mb-2 cursor-pointer"
            >
              <img
                alt="Capitol Building hallway"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src={houseAlliancesStory.imageUrl}
                loading="lazy"
              />
            </div>
            <h3
              onClick={() => onOpenArticle(houseAlliancesStory.id)}
              className="font-serif font-bold text-base leading-snug cursor-pointer hover:underline text-gray-900"
            >
              {houseAlliancesStory.title}
            </h3>
            <p
              onClick={() => onOpenArticle(houseAlliancesStory.id)}
              className="summary-text text-sm cursor-pointer"
            >
              {houseAlliancesStory.summary}
            </p>
            <span className="text-[10px] font-sans text-gray-400 uppercase">34m ago</span>
          </article>
        )}

        <hr className="border-t border-gray-200" />

        {/* Story 3: Brief Analysis */}
        {economicStory && (
          <article className="space-y-1.5">
            <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-gray-500">
              News Analysis
            </span>
            <h3
              onClick={() => onOpenArticle(economicStory.id)}
              className="font-serif font-semibold text-base leading-snug cursor-pointer hover:underline text-gray-900"
            >
              {economicStory.title}
            </h3>
            <p
              onClick={() => onOpenArticle(economicStory.id)}
              className="summary-text text-sm text-gray-600 cursor-pointer"
            >
              {economicStory.summary}
            </p>
            <span className="text-[10px] font-sans text-gray-400 uppercase">1h ago</span>
          </article>
        )}
      </section>

      {/* CENTER LEAD COLUMN: Major Breaking Lead Story (Col 4 to 9) */}
      <section className="md:col-span-6 lg:col-span-6 flex flex-col space-y-4 md:border-r border-nyt md:pr-5">
        {/* Main Lead Story Feature */}
        {leadStory && (
          <article className="space-y-3">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-sans font-bold tracking-widest uppercase text-red-700">
                Lead Story
              </span>
              <h2
                onClick={() => onOpenArticle(leadStory.id)}
                className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl headline-lead text-black hover:text-gray-700 cursor-pointer"
              >
                {leadStory.title}
              </h2>
            </div>

            {/* Lead Editorial Image */}
            <div
              onClick={() => onOpenArticle(leadStory.id)}
              className="relative bg-gray-100 overflow-hidden rounded-sm cursor-pointer group"
            >
              <img
                alt="Judicial building proceedings"
                className="w-full h-auto object-cover max-h-[380px] group-hover:scale-[1.01] transition-transform duration-300"
                src={leadStory.imageUrl}
              />
              <p className="text-[10px] font-sans text-gray-500 pt-1 text-right">
                {leadStory.imageCredit || 'Doug Mills/The New York Times'}
              </p>
            </div>

            {/* Lead Article Body Snippet */}
            <p
              onClick={() => onOpenArticle(leadStory.id)}
              className="summary-text text-base sm:text-lg text-gray-900 leading-relaxed cursor-pointer"
            >
              {leadStory.summary}
            </p>

            {/* Bulleted Follow-Up Sub-Headlines */}
            {leadStory.bullets && leadStory.bullets.length > 0 && (
              <div className="border-t border-b border-gray-100 py-2.5 my-2">
                <ul className="space-y-2 text-xs sm:text-sm font-serif">
                  {leadStory.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      onClick={() => onOpenArticle(leadStory.id)}
                      className="flex items-start space-x-2 cursor-pointer group"
                    >
                      <span className="text-gray-500 mt-1">•</span>
                      <span className="group-hover:underline font-medium text-gray-800">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        )}

        {/* Secondary Mid-Grid 2-Column Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {europeanSummit && (
            <div
              onClick={() => onOpenArticle(europeanSummit.id)}
              className="space-y-2 cursor-pointer group"
            >
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                <img
                  alt="European summit leaders"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={europeanSummit.imageUrl}
                  loading="lazy"
                />
              </div>
              <h4 className="font-serif font-bold text-sm leading-snug group-hover:underline text-gray-900">
                {europeanSummit.title}
              </h4>
              <p className="text-xs text-gray-600 font-serif">{europeanSummit.summary}</p>
            </div>
          )}

          {siliconFoundries && (
            <div
              onClick={() => onOpenArticle(siliconFoundries.id)}
              className="space-y-2 cursor-pointer group"
            >
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                <img
                  alt="Semiconductor fabrication lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={siliconFoundries.imageUrl}
                  loading="lazy"
                />
              </div>
              <h4 className="font-serif font-bold text-sm leading-snug group-hover:underline text-gray-900">
                {siliconFoundries.title}
              </h4>
              <p className="text-xs text-gray-600 font-serif">{siliconFoundries.summary}</p>
            </div>
          )}
        </div>
      </section>

      {/* RIGHT COLUMN: Opinion, Columnists & The Morning Newsletter (Col 9 to 12) */}
      <aside className="md:col-span-3 lg:col-span-3 flex flex-col space-y-5">
        {/* Opinion Header Tag */}
        <div className="border-b-2 border-[#121212] pb-1 flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg tracking-tight text-gray-900">Opinion</h3>
          <span className="text-[10px] font-sans uppercase font-bold text-gray-500">Columnists</span>
        </div>

        {/* Columnist 1: David French */}
        {davidFrench && (
          <article
            onClick={() => onOpenArticle(davidFrench.id)}
            className="space-y-1 pb-3 border-b border-gray-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between space-x-2">
              <div>
                <p className="text-xs font-sans font-bold text-gray-900">{davidFrench.byline}</p>
                <h4 className="font-serif font-bold text-sm leading-snug text-gray-900 pt-0.5 group-hover:underline">
                  {davidFrench.title}
                </h4>
              </div>
              <img
                alt={davidFrench.byline}
                className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-gray-200"
                src={davidFrench.columnistAvatar}
              />
            </div>
            <p className="text-xs font-serif text-gray-600 italic">
              “{davidFrench.pullQuote || davidFrench.summary}”
            </p>
          </article>
        )}

        {/* Columnist 2: Paul Krugman */}
        {paulKrugman && (
          <article
            onClick={() => onOpenArticle(paulKrugman.id)}
            className="space-y-1 pb-3 border-b border-gray-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between space-x-2">
              <div>
                <p className="text-xs font-sans font-bold text-gray-900">{paulKrugman.byline}</p>
                <h4 className="font-serif font-bold text-sm leading-snug text-gray-900 pt-0.5 group-hover:underline">
                  {paulKrugman.title}
                </h4>
              </div>
              <img
                alt={paulKrugman.byline}
                className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-gray-200"
                src={paulKrugman.columnistAvatar}
              />
            </div>
            <p className="text-xs font-serif text-gray-600 italic">
              “{paulKrugman.pullQuote || paulKrugman.summary}”
            </p>
          </article>
        )}

        {/* Columnist 3: Pamela Paul */}
        {pamelaPaul && (
          <article
            onClick={() => onOpenArticle(pamelaPaul.id)}
            className="space-y-1 pb-3 border-b border-gray-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between space-x-2">
              <div>
                <p className="text-xs font-sans font-bold text-gray-900">{pamelaPaul.byline}</p>
                <h4 className="font-serif font-bold text-sm leading-snug text-gray-900 pt-0.5 group-hover:underline">
                  {pamelaPaul.title}
                </h4>
              </div>
              <img
                alt={pamelaPaul.byline}
                className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-gray-200"
                src={pamelaPaul.columnistAvatar}
              />
            </div>
          </article>
        )}

        {/* The Morning Box */}
        <div className="bg-gray-50 p-4 border border-gray-200 rounded-sm space-y-2">
          <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-red-700">
            The Morning
          </span>
          <h4 className="font-serif font-bold text-base text-gray-900">
            Make Sense of the Day's Essential News
          </h4>
          <p className="text-xs font-serif text-gray-600">
            Get David Leonhardt's analysis delivered directly to your inbox every weekday morning.
          </p>
          {newsletterSubscribed ? (
            <div className="pt-2 flex items-center space-x-2 text-emerald-800 text-xs font-sans bg-emerald-50 p-2 rounded border border-emerald-200">
              <Check className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>You're subscribed! Check your inbox for tomorrow's edition.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="pt-1 space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full text-xs font-sans px-2.5 py-1.5 border border-gray-300 rounded-sm focus:outline-none focus:border-black bg-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#121212] hover:bg-gray-800 text-white font-sans text-xs font-bold py-1.5 rounded-sm transition cursor-pointer"
              >
                Sign Up for Newsletter
              </button>
            </form>
          )}
        </div>
      </aside>
    </div>
  );
};
