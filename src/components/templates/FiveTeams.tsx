import React from "react";
import BracketCoupling from "../BracketCoupling";
import { WinnerBox, line } from "./util";

type FourTeamsProps = {
  teams: string[];
  setTeams: React.Dispatch<React.SetStateAction<string[]>>;
};
const FiveTeams = ({ teams, setTeams }: FourTeamsProps) => {
  return (
    <div style={{ display: "flex" }}>
      <BracketCoupling
        teams={teams}
        setTeams={setTeams}
        style={{ marginTop: 40 }}
        topTeamNum={4}
        bottomTeamNum={5}
      />
      <div style={{ marginLeft: 60 }}>
        <BracketCoupling teams={teams} setTeams={setTeams} topTeamNum={1} />
        <svg className="svgContainer">
          {line("220px", "250px", "86.5px", "86.5px")}
          {line("250px", "250px", "46.5px", "86.5px")}
          {line("250px", "280px", "46.5px", "46.5px")}

          {line("500px", "540px", "20%", "20%")}
          {line("540px", "540px", "20%", "80%")}
          {line("500px", "540px", "80%", "80%")}
          {line("540px", "560px", "50%", "50%")}
        </svg>

        <div style={{ height: "40px" }}></div>

        <BracketCoupling
          teams={teams}
          setTeams={setTeams}
          topTeamNum={2}
          bottomTeamNum={3}
        />
      </div>
      <BracketCoupling
        teams={teams}
        setTeams={setTeams}
        style={{
          position: "relative",
          justifyContent: "center",
          marginLeft: "60px",
        }}
        topTeamNum={0}
        bottomTeamNum={0}
      />
      <WinnerBox />
    </div>
  );
};

export default FiveTeams;
