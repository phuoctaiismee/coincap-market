import Overview from "@/features/overview";

export default function Home() {
  return (
    <main className="w-full">
      <Overview />
    </main>
  );
}

// export async function getStaticProps() {
//   return routing.locales.map((locale) => ({ locale }));
// }
