import React from "react";
import BracketCoupling from "../BracketCoupling";
import { WinnerBox, line } from "./util";

type FourTeamsProps = {
  teams: string[];
  setTeams: React.Dispatch<React.SetStateAction<string[]>>;
};
const FourTeams = ({ teams, setTeams }: FourTeamsProps) => {
  return (
    <div style={{ display: "flex" }}>
      {/* 4 teams */}
      <div>
        <BracketCoupling
          teams={teams}
          setTeams={setTeams}
          topTeamNum={1}
          bottomTeamNum={4}
        />
        <svg className="svgContainer">
          {line("220px", "260px", "20%", "20%")}
          {line("260px", "260px", "20%", "80%")}
          {line("220px", "260px", "80%", "80%")}
          {line("260px", "280px", "50%", "50%")}
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
      />
      <WinnerBox />
    </div>
  );
};

export default FourTeams;
