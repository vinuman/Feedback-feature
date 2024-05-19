import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import AnswersPage from "./Anwers/AnswersPage";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <AnswersPage />
      </main>
    </>
  );
}
