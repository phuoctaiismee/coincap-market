import { routing } from "@/i18n/routing";
import Overview from "@/features/overview";
type Props = {
  params: Promise<{ locale: string }>;
};
export default function Home() {
  return (
    <main className="w-full">
      <Overview />
    </main>
  );
}
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
