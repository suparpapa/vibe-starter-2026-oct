import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Bell } from 'lucide-react';
import { Article } from '../types';

interface DevelopingTickerProps {
  onOpenArticle: (articleId: string) => void;
  onSeeAllUpdates?: () => void;
}

export const DevelopingTicker: React.FC<DevelopingTickerProps> = ({
  onOpenArticle,
  onSeeAllUpdates
}) => {
  const updates = [
    {
      id: 'court-rebuffs-challenge',
      text: 'Key developments as election approaches in battleground states',
      tag: 'Developing'
    },
    {
      id: 'high-ranking-officials-leaving',
      text: 'Federal agencies face sudden departures ahead of transition deadlines',
      tag: 'Update'
    },
    {
      id: 'sudden-rise-and-fall-house-alliances',
      text: 'House leadership struggles over emergency stopgap funding measures',
      tag: 'Live Analysis'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextUpdate = () => {
    setCurrentIndex((prev) => (prev + 1) % updates.length);
  };

  const current = updates[currentIndex];

  return (
    <div className="border-b border-gray-200 pb-2 mb-4 text-xs font-sans flex items-center justify-between">
      <div className="flex items-center space-x-2.5 overflow-hidden">
        <span className="font-bold text-red-700 uppercase tracking-widest text-[10px] shrink-0">
          {current.tag}
        </span>
        <span className="text-gray-300">|</span>
        <button
          onClick={() => onOpenArticle(current.id)}
          className="hover:underline text-gray-800 font-serif italic text-sm text-left truncate cursor-pointer transition-colors"
        >
          {current.text}
        </button>
      </div>

      <div className="flex items-center space-x-2 shrink-0">
        <button
          onClick={nextUpdate}
          className="text-gray-400 hover:text-black p-1 text-[11px] rounded transition-colors hidden sm:inline-flex items-center cursor-pointer"
          title="Next update"
          aria-label="Next news update"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => {
            if (onSeeAllUpdates) {
              onSeeAllUpdates();
            } else {
              onOpenArticle(current.id);
            }
          }}
          className="text-[#326891] hover:underline text-[11px] hidden md:inline-flex items-center gap-1 cursor-pointer font-medium"
        >
          See all updates <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
