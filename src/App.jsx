import "./assets/App.css";
import { Card } from "./assets/Card.jsx";

export function App() {
  return (
    <>
      <section className="App">
        <Card userName="Pena" msg="Es-pana quítese la cola" />
        <Card userName="Penita" msg="Dimealgo" />
        <Card userName="Gab" msg="boatarde" />
        <Card userName="Yoquese" msg="kfhds" />
        <Card userName="Anastasia" msg="nadadeso" />
      </section>
    </>
  );
}
