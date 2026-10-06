import Window from "../molecules/Window";
import InfoTable from "../molecules/InfoTable";
import Polaroid from "../molecules/Polaroid";
const ROWS = [["Name", "Juan Diego"],  ["Age", "19"], ["Country", "Colombia"],["Into", "Linux & AI"]];

export default function AboutCard() {
  return (
    <Window title="about me" small center>
      <div className="p-3">
        <Polaroid src="https://media1.tenor.com/m/dNLdIIk6QdIAAAAC/gawr-gura-gura.gif" className="mb-3" />
        <InfoTable rows={ROWS} />
      </div>
    </Window>
  );
}
