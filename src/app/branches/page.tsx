import { Metadata } from "next";
import { getBranches, getSettings } from "@/lib/data";
import BranchContent from "./BranchContent";

export const metadata: Metadata = {
  title: "Our Branches | Grace Aluminium",
  description: "Explore Grace Aluminium's branch network across Pakistan. Visit our showrooms in Islamabad and Multan for premium aluminium solutions, windows, and kitchen designs.",
  keywords: ["Grace Aluminium Branches", "Aluminium Islamabad", "Aluminium Multan", "Trendy Kitchen Windows", "Mughals Aluminium"],
};

export default function BranchesPage() {
  const branches = getBranches();
  const settings = getSettings();

  return <BranchContent branches={branches} settings={settings} />;
}
