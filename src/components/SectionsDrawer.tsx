import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { SectionType } from '../types';

interface SectionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (section: SectionType) => void;
  onOpenMiniCrossword: () => void;
}

export const SectionsDrawer: React.FC<SectionsDrawerProps> = ({
  isOpen,
  onClose,
  onSelectSection,
  onOpenMiniCrossword
}) => {
  if (!isOpen) return null;

  const sectionGroups = [
    {
      title: 'News',
      items: [
        { label: 'Front Page', section: 'All' as SectionType },
        { label: 'U.S. News', section: 'U.S.' as SectionType },
        { label: 'World News', section: 'World' as SectionType },
        { label: 'Politics', section: 'U.S.' as SectionType },
        { label: 'Business & Economy', section: 'Business' as SectionType },
        { label: 'Technology', section: 'Business' as SectionType },
        { label: 'Science & Health', section: 'U.S.' as SectionType }
      ]
    },
    {
      title: 'Opinion',
      items: [
        { label: 'Today’s Opinion', section: 'Opinion' as SectionType },
        { label: 'Columnists', section: 'Opinion' as SectionType },
        { label: 'Editorials', section: 'Opinion' as SectionType },
        { label: 'Guest Essays', section: 'Opinion' as SectionType }
      ]
    },
    {
      title: 'Arts & Lifestyle',
      items: [
        { label: 'Arts & Theater', section: 'Arts' as SectionType },
        { label: 'Books & Culture', section: 'Arts' as SectionType },
        { label: 'Style & Fashion', section: 'Lifestyle' as SectionType },
        { label: 'Travel & Escapes', section: 'Lifestyle' as SectionType },
        { label: 'Real Estate', section: 'Lifestyle' as SectionType }
      ]
    },
    {
      title: 'Features & Living',
      items: [
        { label: 'NYT Cooking', section: 'Cooking' as SectionType },
        { label: 'Wirecutter Product Reviews', section: 'Wirecutter' as SectionType },
        { label: 'The Athletic Sports', section: 'The Athletic' as SectionType },
        { label: 'NYT Audio & Podcasts', section: 'Audio' as SectionType },
        {
          label: 'The Mini Crossword & Games',
          action: () => {
            onClose();
            onOpenMiniCrossword();
          }
        }
      ]
    }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-[360px] h-full shadow-2xl flex flex-col border-r border-gray-300">
        {/* Drawer Header */}
        <div className="border-b border-gray-200 px-5 py-4 flex items-center justify-between">
          <span className="masthead-title text-xl font-normal text-black">
            The New York Times
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sections Scrollable List */}
        <div className="overflow-y-auto px-5 py-4 space-y-6 flex-grow font-sans text-xs">
          {sectionGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-2">
              <h4 className="font-bold uppercase tracking-wider text-gray-500 text-[10px] border-b border-gray-100 pb-1">
                {group.title}
              </h4>
              <ul className="space-y-1">
                {group.items.map((item, iIdx) => (
                  <li key={iIdx}>
                    <button
                      onClick={() => {
                        if (item.action) {
                          item.action();
                        } else if (item.section) {
                          onSelectSection(item.section);
                          onClose();
                        }
                      }}
                      className="w-full text-left py-1.5 px-2 rounded hover:bg-gray-100 text-gray-800 hover:text-black flex items-center justify-between transition cursor-pointer font-medium"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-gray-200 p-4 bg-gray-50 text-[11px] font-sans text-gray-600 space-y-2">
          <p className="font-bold text-gray-900">Experience journalism you can trust.</p>
          <p className="text-[10px] text-gray-500">
            Delivering fearless, independent reporting worldwide since 1851.
          </p>
        </div>
      </div>

      <div className="flex-grow cursor-pointer" onClick={onClose} />
    </div>
  );
};
