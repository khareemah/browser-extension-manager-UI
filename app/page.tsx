import ExtensionList from "./_components/ExtensionList";
import Nav from "./_components/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-center bg-linear-to-b from-[#EBF2FC] to-[#EEF8F9] dark:bg-linear-to-b dark:from-[#040918] dark:to-[#091540]">
      <section className="w-full flex flex-col gap-12 max-w-295 mx-auto my-10 px-5">
        <Nav />
        <ExtensionList />
      </section>
    </main>
  );
}
