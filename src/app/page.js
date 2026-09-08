"use client";

import { useState } from "react";

import HeaderNavigation from "../components/organisms/HeaderNavigation";
import HeroSection from "../components/organisms/HeroSection";
import CategorySection from "../components/organisms/CategorySection";
import HeritageGrid from "../components/organisms/HeritageGrid";
import Footer from "../components/organisms/Footer";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <HeaderNavigation />

      <main>
        <HeroSection />

  

        <HeritageGrid
          selectedCategory={selectedCategory}
        />
      </main>

      <Footer />
    </>
  );
}