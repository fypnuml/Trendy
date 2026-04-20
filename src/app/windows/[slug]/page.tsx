import { Metadata } from "next";
import CatalogDetail from "@/components/CatalogDetail";
import { getCatalogItem } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCatalogItem("windows", slug);

  if (!item) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${item.title} | Architectural Windows`,
    description: item.shortDescription,
  };
}

export default async function WindowDetailPage({ params }: Props) {
  const { slug } = await params;
  return <CatalogDetail category="windows" slug={slug} />;
}
