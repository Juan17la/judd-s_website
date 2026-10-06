import Window from "../molecules/Window";
import InfoTable from "../molecules/InfoTable";
import Polaroid from "../molecules/Polaroid";

export default function AboutCard() {
  return (
    <Window title="about me" small center>
      <div className="p-3">
        <Polaroid src="https://media1.tenor.com/m/dNLdIIk6QdIAAAAC/gawr-gura-gura.gif" className="mb-3 -rotate-3" />
        
      </div>
    </Window>
  );
}
