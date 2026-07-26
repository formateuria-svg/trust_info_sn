import type { Dossier } from "./types";
import { contributors as C } from "./contributors";

const IMG = {
  politique: "/f7d463ba-741b-40d5-b244-75e796b23a63.jpg",
  sante: "/732ac744-7dab-4c7c-af5b-a571e6006390.jpg",
  economie: "/4755ff24-452a-4219-960f-b98cc803d610.jpg",
  sport: "/b778caaa-a7cb-4a70-ab4e-162dd6becd4a.jpg",
  securite: "/d62e4151-198d-4e37-8f4f-5f4587a46624.jpg",
  justice: "/e1944c43-944b-487e-97a0-d649b5acc775.jpg",
  international: "/d1a76cda-8426-4825-8239-292cb7c71d92.jpg",
  video: "/8399f3a4-c00d-4fb3-a895-da4c47b1ed3f.jpg"
};

export const dossiers: Dossier[] = [
{
  id: "d1",
  slug: "faux-communique-ministere",
  claim:
  "Un communiqué attribué au Ministère de la Santé annonce la fermeture de toutes les écoles dès lundi.",
  summary:
  "Une capture d'un prétendu communiqué officiel circule massivement sur WhatsApp. Le logo, la typographie et l'absence de numéro de référence interpellent les vérificateurs.",
  verdict: "faux",
  category: "Santé",
  platform: "WhatsApp",
  cover: IMG.sante,
  media: [
  { id: "d1m1", kind: "image", url: IMG.sante, caption: "Capture du communiqué partagé" },
  { id: "d1m2", kind: "video", url: IMG.video, caption: "Analyse vidéo du document", duration: "2:14" },
  { id: "d1m3", kind: "image", url: IMG.politique, caption: "Comparaison avec un vrai communiqué" },
  { id: "d1m4", kind: "audio", url: IMG.sante, caption: "Réaction audio du porte-parole", duration: "0:48" }],

  publishedAt: "2026-07-24T08:00:00Z",
  updatedAt: "2026-07-25T16:00:00Z",
  location: "Dakar",
  views: 48210,
  shares: 9120,
  virality: 94,
  votes: { vrai: 12, faux: 843, trompeur: 61, contexte: 28, indeterminable: 19 },
  arguments: [
  {
    id: "d1a1",
    side: "contre",
    text: "Le communiqué ne comporte aucun numéro de référence ni cachet officiel, contrairement à tous les documents authentiques du ministère.",
    author: C[0],
    sources: 3,
    upvotes: 214,
    createdAt: "2026-07-24T10:20:00Z"
  },
  {
    id: "d1a2",
    side: "contre",
    text: "Le porte-parole du ministère a démenti publiquement l'existence de ce communiqué lors du journal de 20h.",
    author: C[2],
    sources: 2,
    upvotes: 187,
    createdAt: "2026-07-24T21:05:00Z"
  },
  {
    id: "d1a3",
    side: "pour",
    text: "Certains utilisateurs affirment avoir reçu le message d'un enseignant, ce qui a semé le doute au départ.",
    author: C[4],
    sources: 0,
    upvotes: 24,
    createdAt: "2026-07-24T09:10:00Z"
  }],

  timeline: [
  { id: "d1t1", date: "2026-07-24T07:30:00Z", title: "Première apparition", description: "Le message est repéré dans plusieurs groupes WhatsApp de parents d'élèves." },
  { id: "d1t2", date: "2026-07-24T12:00:00Z", title: "Signalement citoyen", description: "Un membre publie le dossier et demande une vérification collaborative." },
  { id: "d1t3", date: "2026-07-24T21:00:00Z", title: "Démenti officiel", description: "Le ministère dément dans le journal télévisé du soir." },
  { id: "d1t4", date: "2026-07-25T16:00:00Z", title: "Verdict", description: "Le dossier est classé Faux après vérification des sources." }],

  sources: [
  { id: "d1s1", title: "Communiqué officiel du ministère (site gouvernemental)", outlet: "Gouv.sn", url: "#", reliable: true },
  { id: "d1s2", title: "Journal télévisé du 24 juillet", outlet: "RTS Info", url: "#", reliable: true },
  { id: "d1s3", title: "Groupe WhatsApp d'origine", outlet: "WhatsApp", url: "#", reliable: false }],

  mediaOutletId: "m4",
  trending: true
},
{
  id: "d2",
  slug: "chomage-jeunes-dakar",
  claim:
  "Le taux de chômage des jeunes à Dakar aurait dépassé 60 % selon un post viral.",
  summary:
  "Un chiffre spectaculaire est partagé sans source. Les vérificateurs confrontent les données officielles de l'agence nationale de la statistique.",
  verdict: "trompeur",
  category: "Économie",
  platform: "Facebook",
  cover: IMG.economie,
  media: [
  { id: "d2m1", kind: "image", url: IMG.economie, caption: "Le post d'origine sur Facebook" },
  { id: "d2m2", kind: "image", url: IMG.politique, caption: "Extrait du rapport statistique" },
  { id: "d2m3", kind: "video", url: IMG.video, caption: "Décryptage des chiffres", duration: "4:02" }],

  publishedAt: "2026-07-22T09:00:00Z",
  updatedAt: "2026-07-24T11:00:00Z",
  location: "Dakar",
  views: 22300,
  shares: 3410,
  virality: 71,
  votes: { vrai: 90, faux: 120, trompeur: 512, contexte: 143, indeterminable: 40 },
  arguments: [
  {
    id: "d2a1",
    side: "contre",
    text: "Le chiffre de 60 % mélange le sous-emploi et le chômage, deux indicateurs distincts. Le taux officiel est nettement plus bas.",
    author: C[1],
    sources: 4,
    upvotes: 156,
    createdAt: "2026-07-22T14:00:00Z"
  },
  {
    id: "d2a2",
    side: "pour",
    text: "Le chômage des jeunes reste préoccupant et certaines enquêtes locales avancent des taux élevés dans des quartiers précis.",
    author: C[3],
    sources: 2,
    upvotes: 98,
    createdAt: "2026-07-22T15:30:00Z"
  }],

  timeline: [
  { id: "d2t1", date: "2026-07-22T08:00:00Z", title: "Publication virale", description: "Le post cumule 3 400 partages en quelques heures." },
  { id: "d2t2", date: "2026-07-22T14:00:00Z", title: "Contre-analyse", description: "Un universitaire confronte le chiffre aux données officielles." },
  { id: "d2t3", date: "2026-07-24T11:00:00Z", title: "Verdict", description: "Classé Trompeur : chiffre réel confondu avec un autre indicateur." }],

  sources: [
  { id: "d2s1", title: "Rapport annuel sur l'emploi", outlet: "ANSD", url: "#", reliable: true },
  { id: "d2s2", title: "Note de synthèse économique", outlet: "Sud Quotidien", url: "#", reliable: true }],

  mediaOutletId: "m2",
  trending: true
},
{
  id: "d3",
  slug: "video-manifestation-ancienne",
  claim:
  "Une vidéo présentée comme une manifestation d'hier serait en réalité de 2021.",
  summary:
  "La vidéo est authentique mais sortie de son contexte temporel. La recherche d'image inversée révèle sa date d'origine.",
  verdict: "contexte",
  category: "Sécurité",
  platform: "TikTok",
  cover: IMG.securite,
  media: [
  { id: "d3m1", kind: "video", url: IMG.video, caption: "La vidéo virale sur TikTok", duration: "0:58" },
  { id: "d3m2", kind: "image", url: IMG.securite, caption: "Image d'origine de 2021" },
  { id: "d3m3", kind: "image", url: IMG.politique, caption: "Recherche inversée d'image" }],

  publishedAt: "2026-07-20T18:00:00Z",
  updatedAt: "2026-07-21T10:00:00Z",
  location: "Ziguinchor",
  views: 65400,
  shares: 15200,
  virality: 88,
  votes: { vrai: 60, faux: 88, trompeur: 120, contexte: 640, indeterminable: 55 },
  arguments: [
  {
    id: "d3a1",
    side: "contre",
    text: "La recherche d'image inversée montre que cette vidéo a été publiée pour la première fois en 2021.",
    author: C[0],
    sources: 3,
    upvotes: 302,
    createdAt: "2026-07-20T20:00:00Z"
  }],

  timeline: [
  { id: "d3t1", date: "2026-07-20T17:00:00Z", title: "Diffusion sur TikTok", description: "La vidéo est présentée comme récente." },
  { id: "d3t2", date: "2026-07-20T20:00:00Z", title: "Vérification", description: "L'image d'origine de 2021 est retrouvée." },
  { id: "d3t3", date: "2026-07-21T10:00:00Z", title: "Verdict", description: "Classé Sorti de son contexte." }],

  sources: [
  { id: "d3s1", title: "Archive vidéo de 2021", outlet: "Le Quotidien SN", url: "#", reliable: true }],

  mediaOutletId: "m2",
  trending: true
},
{
  id: "d4",
  slug: "sommet-cedeao-report",
  claim:
  "Le sommet de la CEDEAO prévu à Dakar aurait été confirmé pour le 15 août.",
  summary:
  "Après recoupement de sources officielles et diplomatiques, la date annoncée est correcte et documentée.",
  verdict: "vrai",
  category: "International",
  platform: "Presse en ligne",
  cover: IMG.international,
  media: [
  { id: "d4m1", kind: "image", url: IMG.international, caption: "Annonce officielle du sommet" },
  { id: "d4m2", kind: "video", url: IMG.video, caption: "Point presse diplomatique", duration: "3:20" }],

  publishedAt: "2026-07-19T12:00:00Z",
  updatedAt: "2026-07-19T18:00:00Z",
  location: "Dakar",
  views: 14200,
  shares: 980,
  virality: 42,
  votes: { vrai: 720, faux: 12, trompeur: 22, contexte: 18, indeterminable: 30 },
  arguments: [
  {
    id: "d4a1",
    side: "pour",
    text: "La date est confirmée par le communiqué officiel de la CEDEAO et repris par plusieurs médias fiables.",
    author: C[2],
    sources: 5,
    upvotes: 210,
    createdAt: "2026-07-19T13:00:00Z"
  }],

  timeline: [
  { id: "d4t1", date: "2026-07-19T11:00:00Z", title: "Annonce", description: "La date est publiée par la presse en ligne." },
  { id: "d4t2", date: "2026-07-19T18:00:00Z", title: "Verdict", description: "Confirmé par les sources officielles." }],

  sources: [
  { id: "d4s1", title: "Communiqué officiel CEDEAO", outlet: "CEDEAO", url: "#", reliable: true },
  { id: "d4s2", title: "Dépêche diplomatique", outlet: "RTS Info", url: "#", reliable: true }],

  mediaOutletId: "m1"
},
{
  id: "d5",
  slug: "score-match-errone",
  claim:
  "Le score final du match des Lions serait de 3-0 selon une publication sportive.",
  summary:
  "Le dossier est en cours d'analyse : les captures diffèrent et plusieurs comptes rapportent des scores contradictoires.",
  verdict: "encours",
  category: "Sport",
  platform: "X",
  cover: IMG.sport,
  media: [
  { id: "d5m1", kind: "image", url: IMG.sport, caption: "Capture du score annoncé" },
  { id: "d5m2", kind: "video", url: IMG.video, caption: "Résumé du match", duration: "5:10" }],

  publishedAt: "2026-07-25T20:00:00Z",
  updatedAt: "2026-07-25T22:00:00Z",
  location: "Diamniadio",
  views: 8900,
  shares: 640,
  virality: 55,
  votes: { vrai: 120, faux: 90, trompeur: 140, contexte: 60, indeterminable: 210 },
  arguments: [
  {
    id: "d5a1",
    side: "contre",
    text: "Les captures diffusées ne proviennent pas de la même rencontre et affichent des logos incohérents.",
    author: C[3],
    sources: 1,
    upvotes: 45,
    createdAt: "2026-07-25T21:00:00Z"
  }],

  timeline: [
  { id: "d5t1", date: "2026-07-25T20:30:00Z", title: "Signalement", description: "Publication contradictoire signalée par des supporters." },
  { id: "d5t2", date: "2026-07-25T22:00:00Z", title: "Analyse en cours", description: "Vérification des captures et du score officiel." }],

  sources: [
  { id: "d5s1", title: "Feuille de match officielle", outlet: "Fédération", url: "#", reliable: true }],

  mediaOutletId: "m6",
  trending: true
},
{
  id: "d6",
  slug: "declaration-mal-citee",
  claim:
  "Une personnalité politique aurait déclaré vouloir supprimer les bourses étudiantes.",
  summary:
  "La citation est tronquée. La déclaration complète, vidéo à l'appui, dit exactement l'inverse.",
  verdict: "trompeur",
  category: "Politique",
  platform: "Instagram",
  cover: IMG.politique,
  media: [
  { id: "d6m1", kind: "image", url: IMG.politique, caption: "La citation partagée" },
  { id: "d6m2", kind: "video", url: IMG.video, caption: "La déclaration complète", duration: "1:45" },
  { id: "d6m3", kind: "audio", url: IMG.politique, caption: "Extrait audio original", duration: "1:12" }],

  publishedAt: "2026-07-18T14:00:00Z",
  updatedAt: "2026-07-19T09:00:00Z",
  location: "Thiès",
  views: 33100,
  shares: 5600,
  virality: 77,
  votes: { vrai: 55, faux: 210, trompeur: 480, contexte: 260, indeterminable: 40 },
  arguments: [
  {
    id: "d6a1",
    side: "contre",
    text: "La vidéo complète montre que la phrase citée est sortie de son contexte : la personne défend au contraire les bourses.",
    author: C[0],
    sources: 3,
    upvotes: 178,
    createdAt: "2026-07-18T16:00:00Z"
  }],

  timeline: [
  { id: "d6t1", date: "2026-07-18T13:00:00Z", title: "Citation virale", description: "La phrase tronquée est partagée sur Instagram." },
  { id: "d6t2", date: "2026-07-19T09:00:00Z", title: "Verdict", description: "Classé Trompeur après visionnage de la vidéo complète." }],

  sources: [
  { id: "d6s1", title: "Vidéo intégrale du discours", outlet: "RTS Info", url: "#", reliable: true }],

  mediaOutletId: "m5"
},
{
  id: "d7",
  slug: "epidemie-dengue-thies",
  claim:
  "Une épidémie de dengue toucherait des milliers de personnes à Thiès sans réaction des autorités.",
  summary:
  "Des cas existent réellement, mais les chiffres avancés sont largement exagérés. Le dossier documente la situation réelle.",
  verdict: "trompeur",
  category: "Santé",
  platform: "Facebook",
  cover: IMG.sante,
  media: [
  { id: "d7m1", kind: "image", url: IMG.sante, caption: "Publication alarmiste" },
  { id: "d7m2", kind: "image", url: IMG.economie, caption: "Bilan sanitaire officiel" }],

  publishedAt: "2026-07-16T10:00:00Z",
  updatedAt: "2026-07-17T12:00:00Z",
  location: "Thiès",
  views: 19800,
  shares: 2100,
  virality: 63,
  votes: { vrai: 88, faux: 96, trompeur: 320, contexte: 110, indeterminable: 70 },
  arguments: [
  {
    id: "d7a1",
    side: "pour",
    text: "Des cas de dengue sont bien confirmés dans la région, la vigilance est justifiée.",
    author: C[3],
    sources: 2,
    upvotes: 64,
    createdAt: "2026-07-16T12:00:00Z"
  },
  {
    id: "d7a2",
    side: "contre",
    text: "Le nombre de cas est très inférieur aux 'milliers' annoncés et les autorités ont bien communiqué.",
    author: C[2],
    sources: 3,
    upvotes: 121,
    createdAt: "2026-07-16T15:00:00Z"
  }],

  timeline: [
  { id: "d7t1", date: "2026-07-16T09:00:00Z", title: "Alerte virale", description: "Une publication annonce des milliers de cas." },
  { id: "d7t2", date: "2026-07-17T12:00:00Z", title: "Verdict", description: "Classé Trompeur : réalité amplifiée." }],

  sources: [
  { id: "d7s1", title: "Bulletin épidémiologique régional", outlet: "Ministère de la Santé", url: "#", reliable: true }],

  mediaOutletId: "m3"
},
{
  id: "d8",
  slug: "verdict-tribunal-confirme",
  claim:
  "Un verdict de la cour d'appel dans une affaire suivie a été rendu et confirmé.",
  summary:
  "La décision est publique et vérifiable auprès du greffe. Le dossier compile les documents officiels.",
  verdict: "vrai",
  category: "Justice",
  platform: "Presse en ligne",
  cover: IMG.justice,
  media: [
  { id: "d8m1", kind: "image", url: IMG.justice, caption: "Le palais de justice" },
  { id: "d8m2", kind: "video", url: IMG.video, caption: "Compte-rendu de l'audience", duration: "2:40" }],

  publishedAt: "2026-07-14T15:00:00Z",
  updatedAt: "2026-07-14T19:00:00Z",
  location: "Dakar",
  views: 11200,
  shares: 720,
  virality: 38,
  votes: { vrai: 540, faux: 20, trompeur: 30, contexte: 22, indeterminable: 25 },
  arguments: [
  {
    id: "d8a1",
    side: "pour",
    text: "La décision est enregistrée au greffe et consultable, plusieurs médias fiables la confirment.",
    author: C[1],
    sources: 4,
    upvotes: 150,
    createdAt: "2026-07-14T16:00:00Z"
  }],

  timeline: [
  { id: "d8t1", date: "2026-07-14T14:00:00Z", title: "Verdict rendu", description: "La cour rend sa décision." },
  { id: "d8t2", date: "2026-07-14T19:00:00Z", title: "Vérification", description: "Confirmé auprès du greffe." }],

  sources: [
  { id: "d8s1", title: "Décision de la cour d'appel", outlet: "Greffe", url: "#", reliable: true }],

  mediaOutletId: "m1"
}];


export const getDossier = (slug: string) =>
dossiers.find((d) => d.slug === slug);