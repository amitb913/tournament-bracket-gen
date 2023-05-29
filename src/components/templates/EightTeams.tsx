import React from "react";
import BracketCoupling from "../BracketCoupling";
import { WinnerBox, line } from "./util";

type FourTeamsProps = {
  teams: string[];
  setTeams: React.Dispatch<React.SetStateAction<string[]>>;
};
const EightTeams = ({ teams, setTeams }: FourTeamsProps) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <BracketCoupling
          teams={teams}
          setTeams={setTeams}
          topTeamNum={1}
          bottomTeamNum={8}
        />
        <BracketCoupling
          teams={teams}
          setTeams={setTeams}
          style={{ marginTop: 60 }}
          topTeamNum={4}
          bottomTeamNum={5}
        />
        <BracketCoupling
          teams={teams}
          setTeams={setTeams}
          style={{ marginTop: 60 }}
          topTeamNum={2}
          bottomTeamNum={7}
        />
        <BracketCoupling
          teams={teams}
          setTeams={setTeams}
          style={{ marginTop: 60 }}
          topTeamNum={3}
          bottomTeamNum={6}
        />
      </div>
      <div style={{ marginLeft: 60, marginTop: 78.5 }}>
        <BracketCoupling teams={teams} setTeams={setTeams} />
        <svg className="svgContainer">
          {line("220px", "250px", "46.5px", "46.5px")}
          {line("250px", "250px", "46.5px", "203.5px")}
          {line("220px", "250px", "203.5px", "203.5px")}
          {line("250px", "280px", "127px", "127px")}

          {line("220px", "250px", "362.5px", "362.5px")}
          {line("250px", "250px", "362.5px", "519.5px")}
          {line("220px", "250px", "519.5px", "519.5px")}
          {line("250px", "280px", "441px", "441px")}

          {line("500px", "530px", "127px", "127px")}
          {line("530px", "530px", "127px", "441px")}
          {line("500px", "530px", "441px", "441px")}
          {line("530px", "560px", "284px", "284px")}
        </svg>

        <div style={{ height: 217 }}></div>

        <BracketCoupling teams={teams} setTeams={setTeams} topTeamNum={1} />
      </div>
      <BracketCoupling
        teams={teams}
        setTeams={setTeams}
        style={{
          position: "relative",
          justifyContent: "center",
          marginLeft: "60px",
        }}
      />
      <WinnerBox />
    </div>
  );
};

export default EightTeams;
