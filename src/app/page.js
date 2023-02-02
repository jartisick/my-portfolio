import NavBar from "@/components/NavBar";
import { Inter } from "@next/font/google";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
      </main>
      <Main />
      <About />
      <Skills />
    </div>
  );
}
