import { Metadata } from "next";
import CatalogDetail from "@/components/CatalogDetail";
import { getCatalogItem } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCatalogItem("kitchens", slug);

  if (!item) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${item.title} | Premium Kitchens`,
    description: item.shortDescription,
  };
}

export default async function KitchenDetailPage({ params }: Props) {
  const { slug } = await params;
  return <CatalogDetail category="kitchens" slug={slug} />;
}
