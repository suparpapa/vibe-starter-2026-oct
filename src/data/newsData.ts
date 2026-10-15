import { Article, Comment } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'court-rebuffs-challenge',
    isLeadStory: true,
    title: 'Court Rebuffs Challenge on Regulatory Scope, Reaffirming Oversight Powers',
    summary:
      'In a decisive ruling with wide-ranging economic stakes, the judges determined that federal authorities acted well within statutory mandates. The decision settles months of fierce debate among legal scholars and industry representatives.',
    category: 'U.S.',
    subCategory: 'Lead Story',
    byline: 'By Charlie Savage and Adam Liptak',
    readTime: '6 MIN READ',
    publishedAt: 'October 23, 2024, 1:45 p.m. ET',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHVGhYTwmz5gHqzICI7Gm5gD59cKEHLbz1Fxs9a2Raj7JBvNSWB9KfCOZNFWl9bNPWVkZ9hUcFahwZKv4l8dT34FZOdeMggFDp4iZ_2jPS3Hlw7torgqD-F88a2KBM5WtP_8K5cLOqzO2fUEx_uL0lzcMioPj7Nttmsc9WrDhKFiO5sFoJvOCMZnSdh2phoM2el1pHQQk2FPSQPFsJmIHXBe8FP3AUio0h0EZKqDZFuP_uIEj9IEWBrg',
    imageCaption: 'Judges seated in the federal appellate chamber hearing oral arguments over statutory delegation and agency mandates.',
    imageCredit: 'Doug Mills/The New York Times',
    bullets: [
      'How the decision reshapes energy sector compliance requirements for the decade ahead.',
      'Reaction from corporate coalitions points toward an expedited supreme appellate plea.'
    ],
    content: [
      'WASHINGTON — In a monumental ruling with sweeping implications for federal governance, a panel of appellate judges on Wednesday unanimously upheld the authority of federal regulatory bodies to enforce standard oversight metrics without explicit line-item congressional mandates for each technical standard.',
      'The 74-page decision represents a direct rebuff to an aggressive coalition of industrial trade groups and conservative legal foundations that had sought to curtail administrative agency discretion under the major questions doctrine.',
      'Writing for the court, the presiding judge emphasized that Congress deliberately designed regulatory statutes to accommodate evolving scientific and economic paradigms: "To constrain an agency to the static technological baseline of the enactment year would paralyze the government’s constitutional duty to ensure public welfare."',
      'Corporate lobbies immediately expressed sharp dissatisfaction, warning that the affirmation of oversight powers would impose billions of dollars in recurring compliance obligations across manufacturing, energy production, and financial services.',
      '"This decision blurs the boundaries of executive authority and hands unaccountable civil servants an open-ended mandate," argued Katherine Vance, chief counsel for the National Manufacturers Alliance.',
      'Legal scholars across the country, however, viewed the verdict as a pragmatic stabilizing measure. "Had the challenge succeeded, dozens of bedrock regulations governing clean air, workplace safety, and consumer banking protections would have been exposed to instant litigation," noted Professor Gerald Stern of Georgetown Law.'
    ]
  },
  {
    id: 'high-ranking-officials-leaving',
    title: 'High-Ranking Officials Are Leaving Ahead of Transition Deadlines',
    summary:
      'As the term nears its conclusion, federal agencies face sudden departures, testing institutional continuity and slowing regulatory actions in key bureaus.',
    category: 'U.S.',
    subCategory: 'Politics',
    byline: 'By Lisa Friedman',
    readTime: '4 MIN READ',
    publishedAt: '34m ago',
    content: [
      'WASHINGTON — Across key departments and independent regulatory bodies in the capital, an escalating wave of senior civil servants and political appointees have submitted resignations over the past two weeks, complicating efforts to finalize landmark rules before statutory deadlines close.',
      'The personnel exodus touches critical desks in environmental enforcement, foreign commerce, and antitrust oversight. Department heads are scrambling to designate interim directors to prevent operational bottlenecks.',
      '"When institutional memory walks out the door concurrently with compressed procedural timetables, agency productivity inherently decelerates," remarked a senior department chief speaking on background.',
      'Transition experts point out that while end-of-term turnover is customary, the current pace has been accelerated by lucrative private-sector recruitment and exhaustion following years of prolonged budget disputes.'
    ]
  },
  {
    id: 'sudden-rise-and-fall-house-alliances',
    title: 'The Sudden Rise and Fall of Key House Alliances',
    summary:
      'Fractures among party leadership deepened over vote scheduling for budget measures, complicating the path forward.',
    category: 'U.S.',
    subCategory: 'Congress',
    byline: 'By Carl Hulse and Luke Broadwater',
    readTime: '5 MIN READ',
    publishedAt: '34m ago',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2rQC8pLj3VVBXT8HmQqNkO-YxCHiSKOUqz0RjDRof9JZ5M34kBS61kegudyZ1ouJhco8W9ijv4iOuLWga0vlkQpEerq_Vucsj9o1i9EguJiEntVT6gsjvR_BpBm6O3tcrr5rffMPDRyfXabKkxlQNjLSL_kFZjIFUjd-V3xSYxzdvC0hydi2bCiLl_0b0KpWo-2q46IGwFuYVVoXhCzbzLYv8YCWvt9Y6ZVT62656addA1P1KUI7-wQ',
    imageCaption: 'Members of Congress and staff conferring along the statutory corridor of the United States Capitol.',
    imageCredit: 'The New York Times',
    content: [
      'WASHINGTON — What began as a cohesive voting bloc among pragmatic moderates and fiscal conservatives has splintered into competing factions, leaving legislative leaders without a reliable path to pass stopgap funding legislation before next week’s fiscal expiration.',
      'Closed-door conferences on Wednesday dissolved into heated shouting matches after an amendment package on international assistance was stripped without prior consultation with committee heads.',
      '"You cannot run a chamber through eleventh-hour ambushes," said one ranking member leaving the Republican cloakroom. "The trust that was assembled over seven grueling months evaporated in thirty minutes."',
      'With congressional recess looming, floor tacticians are examining alternative parliamentary maneuvers to avoid an embarrassing shutdown that neither caucus wishes to carry into the November ballot boxes.'
    ]
  },
  {
    id: 'economic-optimism-struggles',
    title: 'Why Economic Optimism Still Struggles to Reach Voters',
    summary:
      'Inflation figures have moderated, yet poll respondents consistently cite consumer grocery costs as their primary concern.',
    category: 'Business',
    subCategory: 'News Analysis',
    byline: 'By Ben Casselman and Lydia DePillis',
    readTime: '5 MIN READ',
    publishedAt: '1h ago',
    content: [
      'On paper, the American macroeconomic snapshot reflects resilient health: unemployment remains historically subdued, wage growth continues to edge out headline inflation, and GDP expansion has repeatedly defied recessionary projections.',
      'Yet inside supermarket aisles from Ohio to Arizona, consumer perceptions tell an entirely divergent story. In recent New York Times/Siena College polling, nearly two-thirds of voters characterized the national economy as "poor" or "only fair."',
      'The disconnect lies in the psychological reality of price levels versus rates of change. While inflation has cooled dramatically from its 9.1 percent peak to around 2.4 percent, prices at the checkout stand have not retreated; they simply stopped compounding as rapidly.',
      '"People do not measure their wellbeing against statistical derivatives," explained Princeton behavioral economist Sarah Thorne. "They remember paying $3.20 for eggs and $4.00 for ground beef. When those figures sit at $5.50 and $6.25 today, that feels like a permanent financial penalty."'
    ]
  },
  {
    id: 'european-summit-trade-shielding',
    title: 'European Summit Focuses on Trade Shielding Initiatives',
    summary:
      'Delegates gathered in Brussels to debate counter-measures against supply fluctuations and foreign tariffs.',
    category: 'World',
    subCategory: 'Europe',
    byline: 'By Matina Stevis-Gridneff',
    readTime: '4 MIN READ',
    publishedAt: '2h ago',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIiw-ZMeeQ62wwBMt9iLSSHtOHHz7icfBExh5RCIq9poZpRQJjEATif_Z3H6EUE5KUnT1uk5E7Jy0OZ6vLIcujw-Rb3Z4oQkky67LVIho4iz_WCAGYE1KlxYomnDZeMJh5vywsiou0mPQmuBATk7_UMR3n7YzPnavrgv1fiLc543w2ziNpvReWXN22EPJX48I4cuJUGNMlQySrtpjdVHz-8fpr5MEuFOBmMTJOlNECbjEGKGJFw0VNAQ',
    imageCaption: 'European heads of state convening at the Council building in Brussels for plenary sessions.',
    imageCredit: 'Pool photo by Reuters',
    content: [
      'BRUSSELS — European Union leaders gathered in Brussels on Wednesday to negotiate a synchronized economic defense strategy, seeking to shield the bloc’s heavy industries from subsidized foreign imports and unpredictable transatlantic trade policy.',
      'The negotiations highlighted tension between export-oriented northern member states, which caution against aggressive protectionism, and southern manufacturing hubs advocating for robust defensive subsidies and import duties.',
      '"Europe can no longer afford to remain a passive bystander in an era of aggressive geopolitical industrial policy," declared European Commission President Ursula von der Leyen during the morning plenary session.',
      'Key proposals on the agenda include sovereign investment facilities for critical mineral processing, accelerated clean-tech permitting, and streamlined joint procurement for strategic defense materials.'
    ]
  },
  {
    id: 'silicon-foundries-thermal-architecture',
    title: 'Silicon Foundries Bet Big on New Thermal Architecture',
    summary:
      'New microchip packaging methods claim up to forty percent gains in data center power efficiency.',
    category: 'Business',
    subCategory: 'Technology',
    byline: 'By Don Clark and Tripp Mickle',
    readTime: '4 MIN READ',
    publishedAt: '3h ago',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2xbV-Wls2Gqk4h3rb7OehxpAxUHVfORPg5sLbow2yszaft49PsW2fGO2dHJNmXIUECezFTxqEBK0rT0JQcz3Yi3hxEnln5-bpIPocCLTvqzBkTIP9iKADs0_Cdh4X7GrO4NzZlyLAItkM-ny1JZ8piNf5hLD1GuCqqyoFvjwVkYwu3P16pCsEKARN5EhOQ2MxTX2moy2M12wFhRsH3CoD0vEH0Nio8j-1e0WTiMNw_qQSqqDv6mT49w',
    imageCaption: 'Cleanroom technicians inspecting advanced wafer packaging in a specialized semiconductor foundry.',
    imageCredit: 'The New York Times',
    content: [
      'HSINCHU, Taiwan — As the power consumption of artificial intelligence accelerators threatens to outstrip available regional electrical grids, semiconductor foundries are pivoting from sheer transistor density toward revolutionary 3D thermal packaging.',
      'By embedding microscopic fluidic cooling channels directly into silicon interposers, engineers have demonstrated dramatic thermal dissipation gains, allowing servers to run at peak throughput without thermal throttling.',
      '"Thermal management has officially surpassed photolithography as the primary engineering bottleneck in cutting-edge computing," said Dr. Kelvin Wu, vice president of packaging research at TSMC.',
      'Commercial deployments of the new liquid-on-die architecture are scheduled to begin with tier-one hyperscale cloud providers late next quarter, potentially resetting efficiency standards across the global tech sector.'
    ]
  },
  {
    id: 'opinion-david-french',
    title: 'The Courage Needed in an Age of Political Zealotry',
    summary:
      '“Real leadership refuses to pander to partisan extremism.”',
    category: 'Opinion',
    subCategory: 'Columnists',
    byline: 'David French',
    readTime: '5 MIN READ',
    publishedAt: 'Today',
    isOpinion: true,
    columnistAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBm9NIFgYuj6LdcXHO977bVgOf9uwWDFdzcVvwSLiu7or2M-eIB4DtHBpHDM50cG4QG8vUx8kiPnuorjvsCghE4rhvUai6RNOK9hkFqSHOYog78Uv2PLsWBgHV9GMXoMOiRBmBIyzJ6hWE6SZJWsMrshXJ6xX8_kCpajuXNKHpePnslXjgUULoWh213Mwqt7VVMLDuprbJ60qe0ZJAG9DMj-t6Q5tCs8FWXwDtntjTAJeXCTzScyKDZQ',
    pullQuote: 'Real leadership refuses to pander to partisan extremism.',
    content: [
      'In moments of intense national tension, the easiest political path is almost invariably the most destructive: surrendering principle to appease the fever pitch of one’s own tribe.',
      'We are living through an era where moral clarity is frequently mislabeled as betrayal, and where ideological conformity is demanded with inquisitorial fervor. Yet our democratic experiment has survived only because, at decisive junctures, men and women of conscience chose fidelity to truth over tribal validation.',
      'To stand before one’s political family and say, "We have strayed, and this course will ruin us," requires an entirely different order of courage than attacking one’s political opponents.',
      'Until our civic leaders rediscover the backbone to champion truth when it costs them applause, the polarization degrading our institutions will continue unabated.'
    ]
  },
  {
    id: 'opinion-paul-krugman',
    title: 'The Real Reason Why Inflation Fears Won’t Dissolve',
    summary:
      '“Perception lags behind raw statistical milestones.”',
    category: 'Opinion',
    subCategory: 'Columnists',
    byline: 'Paul Krugman',
    readTime: '6 MIN READ',
    publishedAt: 'Today',
    isOpinion: true,
    columnistAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4lPj7RyXhSJ6vnPC5Y6zf2hRBT9UW6bIPn1Vz_cbCiCuHYtHpIpuhkuqObPRkQLQiGcd5hT5kesPDSdR1T-NVY0Xr2MZgD-OgDZNzoKw20Vo8NpSIkIxdMDaXdEs2AiUYC2eZDTzZBlp1TZPLya_KMMnH5VYZeF3ZDXEepVhRftBJIornwsBq1jSUfjH_fDyJSa3DOkM3aiu6gUdK-o03kC8VNDOBS6h5XN5MMcQsNZ6acFb7KIQCyw',
    pullQuote: 'Perception lags behind raw statistical milestones.',
    content: [
      'Economists love disinflationary charts. We look at the annualized three-month moving averages of core PCE, see a gentle glide down toward two percent, and declare the battle won.',
      'Ordinary consumers, however, don’t buy index baskets; they buy milk, chicken breasts, and auto insurance. And what they register every single weekend is that the weekly grocery tab that once ran $120 now regularly demands $165.',
      'Historically, it takes anywhere between eighteen months to two years after prices stabilize for the general public to stop feeling cheated by the new baseline. Price memories are remarkably stubborn.',
      'The lesson for policymakers is twofold: first, avoid victory laps when families are still adjusting; second, recognize that real wage growth over sustained time is the only reliable remedy to macroeconomic anxiety.'
    ]
  },
  {
    id: 'opinion-pamela-paul',
    title: 'Can We Please Bring Back Phone Calls Already?',
    summary:
      '“There was once a technology that allowed human voices to meet instantaneously without asynchronous ambiguity.”',
    category: 'Opinion',
    subCategory: 'Columnists',
    byline: 'Pamela Paul',
    readTime: '4 MIN READ',
    publishedAt: 'Today',
    isOpinion: true,
    columnistAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7HrEWeXexy6nxKoBnLnpzllUiamnfo8CLeOsAvKXZHdo4HR7NC0LcsC8EJqcvYEYbdUEXxww7lwV8ZI2HPv7jCUE9uUuTY8cGdavKRKnzm5U8hFbSS0PPfPyXVwXfND0hV43L6S2AflBwNrXxbKyGX0UUYVxEyYQJ9ganfE-GF0vVVLaPwdGNzWZH7h0dQXCjNXnlNvI81Y4xiV5PosJ7wAiacLjLxBeVQnKbDcxPO1R8tlmAJeXz2w',
    pullQuote: 'There was once a technology that allowed human voices to meet instantaneously.',
    content: [
      'Somewhere around 2014, an unspoken social contract was signed declaring that calling someone on the telephone without a preliminary text requesting permission was an act of egregious aggression.',
      'We replaced the spontaneous ten-minute voice chat with seventy-five disjointed text messages spread across four hours, rife with misread tones, ambiguous emojis, and agonizing ellipsis bubbles.',
      'It’s time to overthrow the tyranny of the async text thread. The human voice carries inflection, irony, warmth, and relief in ways no string of characters can ever replicate.',
      'Pick up the phone. Dial your friend. Let it ring. I promise the world will not end.'
    ]
  },
  {
    id: 'cooking-crispy-roast-salmon',
    title: 'Crispy Roast Salmon With Herby Tahini and Warm Citrus',
    summary:
      'A brilliant 25-minute sheet-pan dinner combining caramelized citrus slices, nutty tahini sauce, and shatteringly crisp salmon skin.',
    category: 'Cooking',
    subCategory: 'Cooking',
    byline: 'By Ali Slagle',
    readTime: '25 MIN PREP & COOK',
    publishedAt: 'Today',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdDhOoZD_1NKyhqCVQKaFWf_B9bEcKU8IlXmSRuTH5eXD3PW_p5kJtDEI1UFWriWpn0NlFlZWrzxDLE3iV0E7dAOL5CMyK4KngOELfT2lIbzuiTdJ0MeA1amMe2Il93PEY7AOS1Vijz8UQZNCdrObQrCzcArpbIu0L-0osOAO6Vd5SkfbINbll9YPh6UuHZzgYq2dPUaMfkg1vFunsx9GF2nL2faxvGGbwE7Q9g29R_eARbEoSw_EO3g',
    imageCaption: 'Crispy roast salmon served with fresh dill, caramelized lemon slices, and a luscious herb tahini drizzle.',
    imageCredit: 'Linda Xiao for The New York Times',
    recipeDetails: {
      servings: 4,
      prepTime: '10 minutes',
      cookTime: '15 minutes',
      ingredients: [
        '4 center-cut skin-on salmon fillets (about 6 ounces each), patted very dry',
        '3 tablespoons extra-virgin olive oil',
        'Kosher salt and freshly ground black pepper',
        '1 lemon, very thinly sliced into wheels and seeded',
        '1/3 cup well-stirred tahini',
        '1 garlic clove, finely grated or pressed',
        '3 tablespoons warm water (plus more to thin)',
        '1 cup mixed fresh tender herbs (dill, cilantro, parsley), roughly chopped',
        '1/2 teaspoon ground sumac or Aleppo pepper for serving'
      ],
      steps: [
        'Preheat your oven to 450°F (232°C). Line a heavy rimmed baking sheet with parchment paper.',
        'Arrange lemon wheels on one side of the sheet, drizzle lightly with 1 tablespoon olive oil, and season with salt.',
        'Rub salmon fillets all over with remaining 2 tablespoons olive oil, seasoning generously with kosher salt and black pepper. Place skin-side up next to the lemons.',
        'Roast until salmon skin is blistered and crisp and flesh is just opaque throughout, 12 to 15 minutes depending on thickness.',
        'Meanwhile, whisk tahini, grated garlic, lemon juice squeezed from one roasted slice, and warm water until velvety smooth and pale. Stir in half of the fresh herbs.',
        'To serve, spoon herby tahini onto a wide platter or individual plates, top with crispy salmon and roasted lemon wheels, and scatter generously with remaining fresh herbs and sumac.'
      ]
    },
    content: [
      'Salmon cooked at high heat on a sheet pan delivers the ideal contrast: golden, crispy skin that snaps beneath a fork, alongside meltingly tender, moist fish.',
      'The magic in this recipe is the warm herb tahini: the nutty sesame paste softens the richness of the fish, while the roasted lemon slices become sweet, jammy, and entirely edible—peel and all.',
      'Serve alongside steamed basmati rice, warm pita bread, or a crunchy cucumber salad for an effortless weeknight dinner worthy of a weekend dinner party.'
    ]
  },
  {
    id: 'wirecutter-best-headphones',
    title: 'The Best Noise-Cancelling Over-Ear Headphones for Travel',
    summary:
      'After more than 60 hours of real-world testing on flights, subways, and bustling coffee shops, our top pick remains unrivaled.',
    category: 'Wirecutter',
    subCategory: 'Wirecutter',
    byline: 'By Lauren Dragan and Brent Butterworth',
    readTime: 'Tested over 60 hours',
    publishedAt: 'Updated October 2024',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQt3tL_GQRE9xJGWzfNMz93bx-ZBii2rkBO7EmEkTOblgXfeMfHwGFLp0f2W68-TVxROEa4m-EkBqT1yNAjFZVsM72PGOzD6gOiF6UUhYpuSFlf5hU3GRcC4P1GP3ty4iqvvLNq7GoBcw5KCi-a1zwzxcbky7tXp8ZJqUKyw0kP8J3o_-kthoko7tux3s8_QxLuJFTAPRmhV1YqHdcd_8l7MKECBrOOL9c73UgrI-rSYsEQYYHxEslWA',
    imageCaption: 'Over-ear noise-cancelling headphones tested during transcontinental transit.',
    imageCredit: 'Wirecutter',
    productReview: {
      testedHours: 60,
      topPick: 'Bose QuietComfort Ultra',
      runnersUp: ['Sony WH-1000XM5', 'Apple AirPods Max'],
      verdict: 'Superior active noise cancellation that silences low airplane cabin drone and voices alike, with supreme all-day ear cup comfort.',
      price: '$429'
    },
    content: [
      'If you spend any significant time in airplanes, trains, or noisy shared workspaces, high-performance noise-cancelling headphones are not a luxury—they are a sanity preserver.',
      'Our team tested 14 pairs of premier active noise-cancelling (ANC) headphones, measuring acoustic attenuation using a calibrated dummy head, as well as conducting blind listening tests for frequency accuracy and long-haul wearability.',
      'The Bose QuietComfort Ultra emerged as our clear top choice for travel. Its ANC algorithm is simply the most capable at eliminating both low-frequency engine rumbles and erratic mid-frequency voices.',
      'For listeners who prioritize customizable EQ and cutting-edge microphone beamforming for calls, the Sony WH-1000XM5 remains an exceptional runner-up at a slightly lower price point.'
    ]
  },
  {
    id: 'arts-revival-on-broadway',
    title: 'Revival on Broadway Brings Timeless Nuance to the Stage',
    summary:
      'A thrilling, deeply intimate reimagining proves that great dramatic literature never loses its sting.',
    category: 'Arts',
    subCategory: 'Theater',
    byline: 'By Jesse Green',
    readTime: 'Critic’s Notebook',
    publishedAt: 'Today',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoeStoPhrM7cuH1vBU-9gAY95CVSlwoBHPJ5KRTu7w6pLbfWuD9r4gcbeBBhUYZF_kP1GLXjaZUSRo4NUmd7FhHhosfzZnGgLESZ0_herCPV4hxYRUVz2gUD3FM2R7-zCK04WHzh9TzvtQ9Gcli_mQthmtjEvecRPu4TnpFRilDG1ZMrvjqc0C_ZRnHUcYEg-jgWvviNJI5K5i3civCHqwQoN-gDaZQl8mEaKb9HOCZ1YtXlChjlUyiQ',
    imageCaption: 'The ensemble cast on stage under dramatic warm lighting during the third act climax.',
    imageCredit: 'Sara Krulwich/The New York Times',
    content: [
      'NEW YORK — Broadway revivals often suffer from the museum curse: meticulously curated, gorgeously costumed, and completely dead on arrival.',
      'What makes this new production electrifying from its very first entrance is a fierce, uncompromising refusal to treat the classic text like amber. The director strips away decorative Victorian sentimentality, exposing the raw, palpitating nerve of human jealousy beneath.',
      'The lead performance is a revelation—simultaneously fragile and ferocious, refusing easy audience sympathy while demanding complete emotional surrender.',
      'It is the rare theatrical achievement that respects the playwright’s original cadences while speaking directly to our present moment of psychological dislocation.'
    ]
  }
];

export const INITIAL_COMMENTS: Record<string, Comment[]> = {
  'court-rebuffs-challenge': [
    {
      id: 'c1',
      author: 'Marcus Vance',
      location: 'Philadelphia, PA',
      timeAgo: '42m ago',
      text: 'This is a sensible ruling. The notion that every single technical emission metric must be specifically delineated by an act of Congress was always an impractical theory designed to paralyze clean air standards.',
      recommendations: 142
    },
    {
      id: 'c2',
      author: 'Elena Rostova',
      location: 'Chicago, IL',
      timeAgo: '1h ago',
      text: 'While I appreciate regulatory stability, the real test will be when this invariably arrives on the Supreme Court docket next spring. The lower appellate circuits have held the line, but the high bench may have a very different doctrine in mind.',
      recommendations: 89
    },
    {
      id: 'c3',
      author: 'Thomas G.',
      location: 'Austin, TX',
      timeAgo: '2h ago',
      text: 'As an engineer in the energy sector, regulatory uncertainty is the worst enemy of capital planning. Settling these rules allows us to actually model capital expenditures for the next five years.',
      recommendations: 56
    }
  ],
  'high-ranking-officials-leaving': [
    {
      id: 'c4',
      author: 'David L.',
      location: 'Washington, DC',
      timeAgo: '20m ago',
      text: 'This happens at the end of every administration, but the difference now is the sheer volume of delayed rulemakings that still need signatures.',
      recommendations: 34
    }
  ],
  'cooking-crispy-roast-salmon': [
    {
      id: 'c5',
      author: 'Claire B.',
      location: 'Seattle, WA',
      timeAgo: '3h ago',
      text: 'Made this tonight! The roasted lemon wheels are an absolute game changer—I had never eaten the rind before, but it completely caramelizes into candy.',
      recommendations: 215
    }
  ]
};

export const MINI_CROSSWORD_DATA = {
  dimensions: 5,
  acrossClues: [
    { number: 1, clue: 'First double-digit number', answer: 'TEN', row: 0, col: 0 },
    { number: 4, clue: 'Broadsheet print medium', answer: 'PAPER', row: 1, col: 0 },
    { number: 5, clue: 'Distinctive personal atmosphere', answer: 'AURA', row: 2, col: 1 },
    { number: 6, clue: 'Long, heroic narrative poem', answer: 'EPIC', row: 3, col: 1 },
    { number: 7, clue: 'Color of raw honey or fossil resin', answer: 'AMBER', row: 4, col: 0 }
  ],
  downClues: [
    { number: 1, clue: 'Piece of folded fabric for drying', answer: 'TOWEL', row: 0, col: 0 },
    { number: 2, clue: 'Grand or vast in scope', answer: 'EPIC', row: 0, col: 1 },
    { number: 3, clue: 'Central, crucial point of a topic', answer: 'NUB', row: 0, col: 2 },
    { number: 4, clue: 'Equal balance in sports or voting', answer: 'PAR', row: 1, col: 0 },
    { number: 5, clue: 'Acidity scale reading for citrus', answer: 'ACID', row: 1, col: 3 }
  ]
};
