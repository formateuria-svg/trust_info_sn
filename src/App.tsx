import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation } from
"react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { MobileTabBar } from "./components/layout/MobileTabBar";
import { HomePage } from "./pages/HomePage";
import { DossierPage } from "./pages/DossierPage";
import { SignalementPage } from "./pages/SignalementPage";
import { RankingsPage } from "./pages/RankingsPage";
import { ReliabilityPage } from "./pages/ReliabilityPage";
import { MediaPage } from "./pages/MediaPage";
import { CartographyPage } from "./pages/CartographyPage";
import { SearchPage } from "./pages/SearchPage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { PremiumPage } from "./pages/PremiumPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen w-full flex-col bg-paper">
        <Header />
        <main className="flex-1 pb-24 md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dossier/:slug" element={<DossierPage />} />
            <Route path="/signalement" element={<SignalementPage />} />
            <Route path="/classements" element={<RankingsPage />} />
            <Route path="/fiabilite" element={<ReliabilityPage />} />
            <Route path="/media/:id" element={<MediaPage />} />
            <Route path="/cartographie" element={<CartographyPage />} />
            <Route path="/recherche" element={<SearchPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileTabBar />
      </div>
    </BrowserRouter>);

}