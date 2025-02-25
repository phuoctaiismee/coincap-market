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
