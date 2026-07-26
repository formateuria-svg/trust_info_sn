import type { MediaOutlet } from "./types";

export const mediaOutlets: MediaOutlet[] = [
{
  id: "m1",
  name: "Le Quotidien SN",
  logoColor: "#007b49",
  initials: "LQ",
  type: "Journal",
  credibility: 88,
  fakeCount: 4,
  exactCount: 212,
  correctionRate: 92,
  avgCorrectionHours: 6,
  reactivity: 90,
  contested: 11,
  history: [
  { month: "Jan", score: 81 },
  { month: "Fév", score: 83 },
  { month: "Mar", score: 82 },
  { month: "Avr", score: 85 },
  { month: "Mai", score: 87 },
  { month: "Juin", score: 88 }],

  weakTopics: [
  { category: "Politique", disputes: 6 },
  { category: "Économie", disputes: 3 },
  { category: "Sport", disputes: 2 }],

  corrections: [
  { date: "2026-07-18", title: "Chiffres du chômage revus après vérification", dossierSlug: "chomage-jeunes-dakar" },
  { date: "2026-06-30", title: "Correction sur la date du sommet CEDEAO", dossierSlug: "sommet-cedeao-report" }]

},
{
  id: "m2",
  name: "Dakar Actu",
  logoColor: "#2b7fff",
  initials: "DA",
  type: "Presse en ligne",
  credibility: 74,
  fakeCount: 12,
  exactCount: 340,
  correctionRate: 78,
  avgCorrectionHours: 14,
  reactivity: 82,
  contested: 27,
  history: [
  { month: "Jan", score: 70 },
  { month: "Fév", score: 72 },
  { month: "Mar", score: 71 },
  { month: "Avr", score: 73 },
  { month: "Mai", score: 74 },
  { month: "Juin", score: 74 }],

  weakTopics: [
  { category: "Politique", disputes: 14 },
  { category: "Sécurité", disputes: 7 },
  { category: "International", disputes: 4 }],

  corrections: [
  { date: "2026-07-10", title: "Retrait d'une image non datée", dossierSlug: "video-manifestation-ancienne" }]

},
{
  id: "m3",
  name: "RTS Info",
  logoColor: "#8b5cf6",
  initials: "RT",
  type: "Télévision",
  credibility: 85,
  fakeCount: 6,
  exactCount: 290,
  correctionRate: 88,
  avgCorrectionHours: 9,
  reactivity: 86,
  contested: 15,
  history: [
  { month: "Jan", score: 82 },
  { month: "Fév", score: 83 },
  { month: "Mar", score: 84 },
  { month: "Avr", score: 84 },
  { month: "Mai", score: 85 },
  { month: "Juin", score: 85 }],

  weakTopics: [
  { category: "Politique", disputes: 8 },
  { category: "Santé", disputes: 4 }],

  corrections: [
  { date: "2026-07-05", title: "Précision sur un bilan sanitaire", dossierSlug: "epidemie-dengue-thies" }]

},
{
  id: "m4",
  name: "Buzz Sénégal",
  logoColor: "#e2333f",
  initials: "BS",
  type: "Réseau",
  credibility: 41,
  fakeCount: 58,
  exactCount: 96,
  correctionRate: 34,
  avgCorrectionHours: 62,
  reactivity: 48,
  contested: 71,
  history: [
  { month: "Jan", score: 46 },
  { month: "Fév", score: 44 },
  { month: "Mar", score: 45 },
  { month: "Avr", score: 43 },
  { month: "Mai", score: 42 },
  { month: "Juin", score: 41 }],

  weakTopics: [
  { category: "Politique", disputes: 31 },
  { category: "Sécurité", disputes: 18 },
  { category: "Santé", disputes: 12 }],

  corrections: [
  { date: "2026-05-22", title: "Aucune correction publiée sur un sujet contesté", dossierSlug: "faux-communique-ministere" }]

},
{
  id: "m5",
  name: "Sud Quotidien",
  logoColor: "#f5b70a",
  initials: "SQ",
  type: "Journal",
  credibility: 80,
  fakeCount: 8,
  exactCount: 244,
  correctionRate: 84,
  avgCorrectionHours: 11,
  reactivity: 79,
  contested: 19,
  history: [
  { month: "Jan", score: 77 },
  { month: "Fév", score: 78 },
  { month: "Mar", score: 79 },
  { month: "Avr", score: 79 },
  { month: "Mai", score: 80 },
  { month: "Juin", score: 80 }],

  weakTopics: [
  { category: "Économie", disputes: 9 },
  { category: "Justice", disputes: 5 }],

  corrections: [
  { date: "2026-06-12", title: "Rectification d'une citation", dossierSlug: "declaration-mal-citee" }]

},
{
  id: "m6",
  name: "Teranga News",
  logoColor: "#0f9d58",
  initials: "TN",
  type: "Presse en ligne",
  credibility: 68,
  fakeCount: 16,
  exactCount: 180,
  correctionRate: 71,
  avgCorrectionHours: 20,
  reactivity: 74,
  contested: 33,
  history: [
  { month: "Jan", score: 64 },
  { month: "Fév", score: 65 },
  { month: "Mar", score: 66 },
  { month: "Avr", score: 67 },
  { month: "Mai", score: 68 },
  { month: "Juin", score: 68 }],

  weakTopics: [
  { category: "Sport", disputes: 11 },
  { category: "International", disputes: 6 }],

  corrections: [
  { date: "2026-07-01", title: "Mise à jour d'un score sportif erroné", dossierSlug: "score-match-errone" }]

}];


export const getOutlet = (id: string) =>
mediaOutlets.find((m) => m.id === id);