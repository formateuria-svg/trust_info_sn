import React from "react";
import { motion } from "framer-motion";
import {
  FlameIcon,
  LoaderIcon,
  CheckCircle2Icon,
  XOctagonIcon,
  NewspaperIcon } from
"lucide-react";
import { Hero } from "../components/home/Hero";
import { CategoryStrip } from "../components/home/CategoryStrip";
import { SectionHeader } from "../components/ui/Section";
import { DossierCard } from "../components/cards/DossierCard";
import { CardRail } from "../components/cards/CardRail";
import { dossiers } from "../data/dossiers";

export function HomePage() {
  const trending = dossiers.filter((d) => d.trending);
  const enCours = dossiers.filter((d) => d.verdict === "encours");
  const confirmees = dossiers.filter((d) => d.verdict === "vrai");
  const fakes = dossiers.filter((d) => d.verdict === "faux" || d.verdict === "trompeur" || d.verdict === "contexte");
  const featured = trending[0];
  const secondaries = trending.slice(1, 4);

  return (
    <div>
      <Hero />

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-6 sm:px-6 sm:py-8">
        <CategoryStrip />

        {/* À la une */}
        <section>
          <SectionHeader
            icon={FlameIcon}
            color="#e2333f"
            title="Informations tendances"
            subtitle="Ce qui devient viral en ce moment" />
          
          <div className="grid gap-4 lg:grid-cols-2">
            {featured &&
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              
                <DossierCard dossier={featured} featured />
              </motion.div>
            }
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {secondaries.map((d, i) =>
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}>
                
                  <DossierCard dossier={d} />
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* En cours d'analyse */}
        <section>
          <SectionHeader
            icon={LoaderIcon}
            color="#2b7fff"
            title="En cours d'analyse"
            subtitle="Ces dossiers attendent votre vote et vos preuves"
            action={{ label: "Tout voir", to: "/recherche?verdict=encours" }} />
          
          <CardRail>
            {[...enCours, ...dossiers.filter((d) => d.verdict === "trompeur")].map(
              (d) =>
              <DossierCard key={d.id} dossier={d} />

            )}
          </CardRail>
        </section>

        {/* Confirmées */}
        <section>
          <SectionHeader
            icon={CheckCircle2Icon}
            color="#0f9d58"
            title="Informations confirmées"
            subtitle="Vérifiées et documentées par la communauté"
            action={{ label: "Tout voir", to: "/recherche?verdict=vrai" }} />
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {confirmees.map((d, i) =>
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}>
              
                <DossierCard dossier={d} />
              </motion.div>
            )}
          </div>
        </section>

        {/* Fake news détectées */}
        <section>
          <SectionHeader
            icon={XOctagonIcon}
            color="#e2333f"
            title="Fake news détectées"
            subtitle="Fausses, trompeuses ou sorties de leur contexte"
            action={{ label: "Tout voir", to: "/recherche?verdict=faux" }} />
          
          <CardRail>
            {fakes.map((d) =>
            <DossierCard key={d.id} dossier={d} />
            )}
          </CardRail>
        </section>

        {/* Actualités vérifiées */}
        <section>
          <SectionHeader
            icon={NewspaperIcon}
            color="#8b5cf6"
            title="Actualités vérifiées"
            subtitle="Le fil complet des dernières vérifications"
            action={{ label: "Rechercher", to: "/recherche" }} />
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dossiers.map((d, i) =>
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i % 4 * 0.05 }}>
              
                <DossierCard dossier={d} />
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>);

}