export type NotifType = "enquete" | "vote" | "verifie" | "maj";

export interface Notification {
  id: string;
  type: NotifType;
  title: string;
  body: string;
  time: string;
  dossierSlug?: string;
  read: boolean;
}

export const notifications: Notification[] = [
{
  id: "n1",
  type: "vote",
  title: "Vote demandé",
  body: "Le dossier « Score final du match des Lions » attend votre vote.",
  time: "il y a 12 min",
  dossierSlug: "score-match-errone",
  read: false
},
{
  id: "n2",
  type: "verifie",
  title: "Information vérifiée",
  body: "Le communiqué attribué au Ministère de la Santé a été classé Faux.",
  time: "il y a 1 h",
  dossierSlug: "faux-communique-ministere",
  read: false
},
{
  id: "n3",
  type: "enquete",
  title: "Nouvelle enquête",
  body: "Une enquête a été ouverte sur une vidéo de manifestation datée de 2021.",
  time: "il y a 3 h",
  dossierSlug: "video-manifestation-ancienne",
  read: false
},
{
  id: "n4",
  type: "maj",
  title: "Mise à jour d'un dossier",
  body: "De nouvelles preuves ont été ajoutées au dossier sur le chômage des jeunes.",
  time: "il y a 6 h",
  dossierSlug: "chomage-jeunes-dakar",
  read: true
},
{
  id: "n5",
  type: "verifie",
  title: "Information vérifiée",
  body: "Le sommet de la CEDEAO à Dakar a été confirmé pour le 15 août.",
  time: "hier",
  dossierSlug: "sommet-cedeao-report",
  read: true
}];