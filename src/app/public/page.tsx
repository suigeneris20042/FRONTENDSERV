"use client";
import { Main } from "next/document";
import DynamicHeader from "./components/DynamicHeader";
import Filters from "./components/Filters";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import MenuGrid from "./components/MenuGrid";

export default function HomePage() {
  return (
    <>
      <DynamicHeader />
      <MenuGrid />
    </>
  );
}
