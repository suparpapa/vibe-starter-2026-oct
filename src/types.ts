export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string[];
  bullets?: string[];
  category: string;
  subCategory?: string;
  byline: string;
  readTime: string;
  publishedAt: string;
  imageUrl?: string;
  imageCaption?: string;
  imageCredit?: string;
  isLeadStory?: boolean;
  isDeveloping?: boolean;
  isOpinion?: boolean;
  columnistAvatar?: string;
  pullQuote?: string;
  recipeDetails?: {
    servings: number;
    prepTime: string;
    cookTime: string;
    ingredients: string[];
    steps: string[];
  };
  productReview?: {
    testedHours: number;
    topPick: string;
    runnersUp: string[];
    verdict: string;
    price: string;
  };
}

export interface Comment {
  id: string;
  author: string;
  location: string;
  timeAgo: string;
  text: string;
  recommendations: number;
  userRecommended?: boolean;
}

export type Edition = 'U.S.' | 'INTERNATIONAL' | 'CANADA' | 'ESPAÑOL' | '中文';

export type SectionType =
  | 'All'
  | 'U.S.'
  | 'World'
  | 'Business'
  | 'Arts'
  | 'Lifestyle'
  | 'Opinion'
  | 'Audio'
  | 'Games'
  | 'Cooking'
  | 'Wirecutter'
  | 'The Athletic';
