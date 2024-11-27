"use client";

import React from "react";
import PublicLayout from "@/layouts/PublicLayout";
import DynamicHeader from "@/shared/DynamicHeader";
import MenuGrid from "@/shared/MenuGrid";

const HomePage: React.FC = () => {
  return (
    <PublicLayout>
      <DynamicHeader />
      <MenuGrid />
    </PublicLayout>
  );
};

export default HomePage;
