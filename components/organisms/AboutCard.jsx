import Window from "../molecules/Window";
import InfoTable from "../molecules/InfoTable";
import Polaroid from "../molecules/Polaroid";

export default function AboutCard({ t }) {
  return (
    <Window title={t.aboutMe} small>
      <div className="p-3">
        <Polaroid src="https://media1.tenor.com/m/dNLdIIk6QdIAAAAC/gawr-gura-gura.gif" className="mb-3" />
        <InfoTable rows={t.rows} />
      </div>
    </Window>
  );
}
