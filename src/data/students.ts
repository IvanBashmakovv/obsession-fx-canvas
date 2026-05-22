export type Student = {
  id: number;
  cert: string;
  firstName: string;
  lastInitial: string;
  fullName: string;
  amount: string;
  country: string;
  flag: string;
  firm: string;
  accent: string;
  initials: string;
  bgColor: string;
  textColor: string;
  stars: number;
  tier: 'PRO' | 'EDU';
  timeframeEN: string;
  timeframeSK: string;
  reviewEN: string;
  reviewSK: string;
};

export const students: Student[] = [
  {
    id: 1, cert: '/certificates/cert-1.jpg',
    firstName: 'Blessing', lastInitial: 'O', fullName: 'Blessing Okonwo',
    amount: '$7,717.60', country: 'Nigeria', flag: '🇳🇬', firm: 'ThaurusGuru',
    accent: '#D4F000', initials: 'BO', bgColor: '#D4F000', textColor: '#0E0E0F',
    stars: 5, tier: 'PRO', timeframeEN: '3 months ago', timeframeSK: 'pred 3 mesiacmi',
    reviewEN: "I had tried learning trading on my own for almost a year — YouTube, free PDFs, random Telegram groups. I had so much information but none of it connected. After going through the group program everything finally made sense. The structure is logical, the mentors actually explain the why behind each concept. And the lifetime access means I can go back whenever I need to review something. Best investment I made.",
    reviewSK: "Skúšal som sa učiť trading sám takmer rok — YouTube, PDF-ká, Telegram skupiny. Mal som veľa informácií, ale nič sa nespájalo. Po skupinovom programe to konečne dávalo zmysel. Mentori vysvetľujú prečo za každým konceptom. A doživotný prístup je bonus navyše.",
  },
  {
    id: 2, cert: '/certificates/cert-2.jpg',
    firstName: 'Ishaan', lastInitial: 'I', fullName: 'Ishaan Iyer',
    amount: '$4,268.80', country: 'India', flag: '🇮🇳', firm: 'ThaurusGuru',
    accent: '#6B5FD4', initials: 'II', bgColor: '#6B5FD4', textColor: '#F0EDE6',
    stars: 5, tier: 'EDU', timeframeEN: '5 months ago', timeframeSK: 'pred 5 mesiacmi',
    reviewEN: "The self-study format works perfectly for me because I can go at my own pace. I work a full time job and study in the evenings. The material is organized so well that even 1 hour per day is enough to make real progress. The Order Flow and Bias Engineering modules were completely new to me — nothing like this in any free resource I had found before. Solid course.",
    reviewSK: "Samoštúdium mi sadlo perfektne — pracujem na plný úväzok a studujem večermi. Materiál je tak dobre organizovaný, že aj hodina denne stačí na pokrok. Order Flow a Bias Engineering sekcie boli pre mňa úplne nové. Solídny kurz.",
  },
  {
    id: 3, cert: '/certificates/cert-3.jpg',
    firstName: 'Oleksandr', lastInitial: 'S', fullName: 'Oleksandr Shevchenko',
    amount: '$2,728.00', country: 'Ukraine', flag: '🇺🇦', firm: 'ThaurusGuru',
    accent: '#F04E23', initials: 'OS', bgColor: '#F04E23', textColor: '#F0EDE6',
    stars: 5, tier: 'EDU', timeframeEN: '2 months ago', timeframeSK: 'pred 2 mesiacmi',
    reviewEN: "I appreciate that this course does not try to sell you a dream. No luxury lifestyle, no fake screenshots. Just methodology. The Static setup section taught me how to be patient and wait for the right conditions instead of chasing every move. I rewatched several modules multiple times — the lifetime access makes this very convenient. Clear, practical, no filler.",
    reviewSK: "Oceňujem, že kurz nepredáva sen. Žiadny luxusný životný štýl, žiadne falošné screenshoty. Len metodológia. Sekcia Static setupov ma naučila byť trpezlivý. Niektoré moduly som sledoval viackrát — doživotný prístup je veľmi praktický.",
  },
  {
    id: 4, cert: '/certificates/cert-4.jpg',
    firstName: 'Daria', lastInitial: 'K', fullName: 'Daria Kerchanova',
    amount: '$3,012.78', country: 'Ukraine', flag: '🇺🇦', firm: 'ThaurusGuru',
    accent: '#D4F000', initials: 'DK', bgColor: '#D4F000', textColor: '#0E0E0F',
    stars: 5, tier: 'PRO', timeframeEN: '1 month ago', timeframeSK: 'pred 1 mesiacom',
    reviewEN: "The group learning format was worth every cent. Having other students going through the same material at the same time — sharing charts, asking questions together — makes the learning completely different from doing it alone. The live sessions where we reviewed actual setups were the most valuable part for me. I can already see my analysis improving week by week.",
    reviewSK: "Skupinový formát stál za každý cent. Mať ostatných študentov v rovnakom čase — zdieľať grafy, pýtať sa spolu — je úplne iné ako učiť sa osamote. Živé sedenia s analýzou setupov boli pre mňa najcennejšie. Môj pokrok je viditeľný každý týždeň.",
  },
  {
    id: 5, cert: '/certificates/cert-5.jpg',
    firstName: 'Zdenek', lastInitial: 'S', fullName: 'Zdenek Samoroc',
    amount: '$402.40', country: 'Czech Republic', flag: '🇨🇿', firm: 'ThaurusGuru',
    accent: '#6B5FD4', initials: 'ZS', bgColor: '#6B5FD4', textColor: '#F0EDE6',
    stars: 4, tier: 'EDU', timeframeEN: '6 months ago', timeframeSK: 'pred 6 mesiacmi',
    reviewEN: "Good course with real substance. The risk management section alone made me rethink everything I was doing. I was risking too much per trade and had no real system for position sizing. After applying what they teach my drawdowns are much more controlled. I gave 4 stars because I am still working through some of the advanced modules — but the quality so far is clearly above average.",
    reviewSK: "Dobrý kurz s reálnym obsahom. Sekcia risk managementu ma prinútila prehodnotiť všetko. Risikoval som príliš veľa na obchod a nemal som systém. Po aplikovaní ich metodiky sú moje drawdowny oveľa kontrolovanejšie. Zatiaľ 4 hviezdy, stále prechádzam pokročilými modulmi.",
  },
  {
    id: 6, cert: '/certificates/cert-6.jpg',
    firstName: 'Tunde', lastInitial: 'B', fullName: 'Tunde Balogun',
    amount: '$3,217.60', country: 'Nigeria', flag: '🇳🇬', firm: 'ThaurusGuru',
    accent: '#F04E23', initials: 'TB', bgColor: '#F04E23', textColor: '#F0EDE6',
    stars: 5, tier: 'PRO', timeframeEN: '2 months ago', timeframeSK: 'pred 2 mesiacmi',
    reviewEN: "I came into this with some SMC knowledge from YouTube but it was all over the place — different creators contradict each other constantly. This program gave me one clear framework from start to finish. The sessions module finally explained why my timing was always off. The group format also meant I could ask questions and get real answers instead of searching for hours. Recommend it.",
    reviewSK: "Prišiel som s nejakými SMC znalosťami z YouTube, ale boli chaotické. Tento program mi dal jeden jasný rámec od začiatku do konca. Sekcia relácií konečne vysvetlila prečo bol môj timing vždy zlý. Odporúčam.",
  },
  {
    id: 7, cert: '/certificates/cert-7.jpg',
    firstName: 'Carlos', lastInitial: 'G', fullName: 'Carlos Garcia',
    amount: '$3,626.40', country: 'Spain', flag: '🇪🇸', firm: 'ThaurusGuru',
    accent: '#D4F000', initials: 'CG', bgColor: '#D4F000', textColor: '#0E0E0F',
    stars: 5, tier: 'EDU', timeframeEN: '4 months ago', timeframeSK: 'pred 4 mesiacmi',
    reviewEN: "What stands out is how well structured the content is. Each module builds directly on the previous one — nothing feels random or thrown in. I went through the whole program in about 8 weeks studying every evening and weekend. The Wyckoff and ICT sections at the end were a great bonus that tied everything together. The lifetime access is a real advantage — I go back to review modules regularly.",
    reviewSK: "Obsah je výborne štruktúrovaný. Každý modul nadväzuje priamo na predchádzajúci. Prešiel som celým programom za 8 týždňov. Wyckoff a ICT sekcie na konci boli skvelým bonusom. Doživotný prístup je skutočná výhoda.",
  },
  {
    id: 8, cert: '/certificates/cert-8.jpg',
    firstName: 'Matteo', lastInitial: 'R', fullName: 'Matteo Rossi',
    amount: '$3,701.56', country: 'Italy', flag: '🇮🇹', firm: 'ThaurusGuru',
    accent: '#6B5FD4', initials: 'MR', bgColor: '#6B5FD4', textColor: '#F0EDE6',
    stars: 5, tier: 'PRO', timeframeEN: '7 weeks ago', timeframeSK: 'pred 7 týždňami',
    reviewEN: "Three things I liked most: the depth of the material, the access to the community, and the fact that the group sessions pushed me to actually apply what I was learning. It is very easy to just watch videos passively — the homework and live reviews forced me to think actively. The feedback I received on my setups was specific and useful, not just generic comments.",
    reviewSK: "Tri veci, ktoré sa mi páčili najviac: hĺbka materiálu, prístup do komunity a skupinové sedenia. Je ľahké len pasívne sledovať videá — domáce úlohy ma prinútili myslieť aktívne. Feedback k mojim setupom bol konkrétny a užitočný.",
  },
  {
    id: 9, cert: '/certificates/cert-9.jpg',
    firstName: 'Davidson', lastInitial: 'N', fullName: 'Davidson Ndueso',
    amount: '$2,960.00', country: 'Nigeria', flag: '🇳🇬', firm: 'ThaurusGuru',
    accent: '#F04E23', initials: 'DN', bgColor: '#F04E23', textColor: '#F0EDE6',
    stars: 5, tier: 'EDU', timeframeEN: '3 months ago', timeframeSK: 'pred 3 mesiacmi',
    reviewEN: "The self-study option gives you everything you need to build a real edge. I studied at my own pace over about 10 weeks and covered every module. The content on Order Blocks, Fair Value Gaps and Bias Engineering is genuinely advanced — not the surface level stuff you find for free online. The community access also helped me stay motivated and see how other students were applying the concepts.",
    reviewSK: "Možnosť samoštúdia ti dá všetko potrebné na vybudovanie reálnej výhody. Študoval som vlastným tempom 10 týždňov. Obsah o Order Blocks, FVG a Bias Engineering je skutočne pokročilý. Komunitný prístup mi tiež pomohol zostať motivovaný.",
  },
];
