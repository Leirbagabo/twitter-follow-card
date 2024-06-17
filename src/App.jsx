import "./assets/App.css";
import { Card } from "./assets/Card.jsx";

export function App() {
  const formatUsername = (userName) => `@${userName}`;
  return (
    <>
      <section className="App">
        <Card
          formatUsername={formatUsername}
          isFollowing
          userName="Pena"
          name="Es-pana quítese la cola"
        />
        <Card
          formatUsername={formatUsername}
          userName="Penita"
          name="Dimealgo"
        />
        <Card formatUsername={formatUsername} userName="Gab" name="boatarde" />
        <Card formatUsername={formatUsername} userName="midudev" name="kfhds" />
        <Card
          formatUsername={formatUsername}
          userName="Anastasia"
          name="nadadeso"
        />
      </section>
    </>
  );
}
