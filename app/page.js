"use client";
import NavBar from "./components/NavBar";
import AnswersPage from "./Anwers/AnswersPage";
import Feedback from "./components/Feedback/Feedback";
import { LogoutProvider } from "./Contexts/LogoutContext";

export default function Home() {
  return (
    <>
      <LogoutProvider>
        <NavBar />
        <main>
          <AnswersPage />
        </main>
        <Feedback />
      </LogoutProvider>
    </>
  );
}
