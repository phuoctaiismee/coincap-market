
import { redirect } from "next/navigation";

interface ExchangeDynamicSlugPageProps {
  params: Promise<{ slug: string }>;
}

const ExchangeDynamicSlugPage = async ({
  params,
}: ExchangeDynamicSlugPageProps) => {
  const slug = (await params).slug;
    redirect(`/exchange/${slug}/about`);
};
export default ExchangeDynamicSlugPage;
