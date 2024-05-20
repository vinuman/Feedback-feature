"use client";
import NavBar from "./components/NavBar";
import AnswersPage from "./Anwers/AnswersPage";
import Feedback from "./components/Feedback/Feedback";
import { LogoutProvider } from "./Contexts/LogoutContext";
import { FeedbackProvider } from "./Contexts/FeedBackContext";

export default function Home() {
  return (
    <>
      <FeedbackProvider>
        <LogoutProvider>
          <NavBar />
          <main>
            <AnswersPage />
          </main>
          <Feedback />
        </LogoutProvider>
      </FeedbackProvider>
    </>
  );
}
