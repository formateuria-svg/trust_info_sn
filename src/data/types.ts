export type Verdict =
"vrai" |
"faux" |
"trompeur" |
"contexte" |
"indeterminable" |
"encours";

export type Category =
"Politique" |
"Sport" |
"Économie" |
"Santé" |
"Justice" |
"Sécurité" |
"International";

export type Platform =
"Facebook" |
"TikTok" |
"WhatsApp" |
"X" |
"Instagram" |
"Presse en ligne";

export type MediaKind = "image" | "video" | "audio";

export interface MediaItem {
  id: string;
  kind: MediaKind;
  url: string; // thumbnail / poster for video & audio
  caption: string;
  duration?: string; // for video / audio
}

export type VoteOption =
"vrai" |
"faux" |
"trompeur" |
"contexte" |
"indeterminable";

export interface VoteTally {
  vrai: number;
  faux: number;
  trompeur: number;
  contexte: number;
  indeterminable: number;
}

export interface Contributor {
  id: string;
  name: string;
  role: "Journaliste" | "ONG" | "Universitaire" | "Expert" | "Citoyen";
  certified: boolean;
  avatarColor: string;
  initials: string;
}

export interface Argument {
  id: string;
  side: "pour" | "contre";
  text: string;
  author: Contributor;
  sources: number;
  upvotes: number;
  createdAt: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface SourceRef {
  id: string;
  title: string;
  outlet: string;
  url: string;
  reliable: boolean;
}

export interface Dossier {
  id: string;
  slug: string;
  claim: string;
  summary: string;
  verdict: Verdict;
  category: Category;
  platform: Platform;
  cover: string;
  media: MediaItem[];
  publishedAt: string;
  updatedAt: string;
  location: string;
  views: number;
  shares: number;
  virality: number; // 0-100
  votes: VoteTally;
  arguments: Argument[];
  timeline: TimelineEvent[];
  sources: SourceRef[];
  mediaOutletId: string;
  trending?: boolean;
}

export interface MediaOutlet {
  id: string;
  name: string;
  logoColor: string;
  initials: string;
  type: "Télévision" | "Radio" | "Presse en ligne" | "Journal" | "Réseau";
  credibility: number; // 0-100
  fakeCount: number;
  exactCount: number;
  correctionRate: number; // %
  avgCorrectionHours: number;
  reactivity: number; // 0-100
  contested: number;
  history: {month: string;score: number;}[];
  weakTopics: {category: Category;disputes: number;}[];
  corrections: {date: string;title: string;dossierSlug: string;}[];
}