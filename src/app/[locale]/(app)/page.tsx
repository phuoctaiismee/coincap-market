import Overview from "@/features/overview";
type Props = {
    params: Promise<{ locale: string }>;
  };
export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <Overview />
    </main>
  );
}
