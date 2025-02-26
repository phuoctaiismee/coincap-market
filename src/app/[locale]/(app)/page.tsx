import Overview from "@/features/overview";
import { routing } from "@/i18n/routing";

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
