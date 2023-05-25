import NavBar from "@ieeecs/components/navbar";
import "../app/globals.css"
import "../../fonts/fonts.css";

export default function Home() {
  return (
    <section className="dark:bg-blacky dark:text-white">
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="font-space text-2xl font-regular">
          "You don't know the power of the dark side!" - Darth Vader
        </section>
      </main>
    </section>
  );
}
