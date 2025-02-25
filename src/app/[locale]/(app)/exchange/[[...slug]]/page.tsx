import {
  ExchangeDerivativesFeatures,
  ExchangeSpotFeatures,
  ExchangeDEXSpotFeatures,
} from "@/features/exchange";
import { ExchangeFinacialReservesFeatures } from "@/features/exchange-detail";
import { ExchangeAboutFeatures } from "@/features/exchange-detail";
import ExchangeSpotMarketsFeatures from "@/features/exchange-detail/pages/spot-markets";
import ExchangeTokenAllocationFeatures from "@/features/exchange-detail/pages/token-allocation";
import ExchangeDEXDerivativesFeatures from "@/features/exchange/pages/dex-derivatives";
import ExchangeLendingFeatures from "@/features/exchange/pages/lending";

import { notFound, redirect } from "next/navigation";
import { JSX } from "react";

interface ExchangeDynamicSlugPageProps {
  params: Promise<{ slug: string[] }>;
}

const ExchangeDynamicSlugPage = async ({
  params,
}: ExchangeDynamicSlugPageProps) => {
  const slug = await params;

  if (!slug.slug) {
    redirect("/exchange/spot");
  }

  const routes: Record<string, JSX.Element> = {
    // EXCHANGE
    spot: <ExchangeSpotFeatures />,
    derivatives: <ExchangeDerivativesFeatures />,
    "dex-spot": <ExchangeDEXSpotFeatures />,
    "dex-derivatives": <ExchangeDEXDerivativesFeatures />,
    lending: <ExchangeLendingFeatures />,
    // EXCHANGE DETAIL
    about: <ExchangeAboutFeatures />,
    "financial-reserves": <ExchangeFinacialReservesFeatures />,
    "token-allocation": <ExchangeTokenAllocationFeatures />,
    "spot-markets": <ExchangeSpotMarketsFeatures />,
  };

  const slugPath = slug.slug.join("/");

  return routes[slugPath] || notFound();
};

export default ExchangeDynamicSlugPage;
