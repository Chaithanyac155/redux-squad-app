import CharactersList from "./CharactersList";
import HerosList from "./HerosList";
import StatusList from "./StatusList";
import "./styles.css";

export default function App() {
  return (
    <div className="container jumbotron">
      <h3>Super Squad</h3>
      <div className="content">
        <CharactersList />
        <HerosList />
        <StatusList />
      </div>
    </div>
  );
}
