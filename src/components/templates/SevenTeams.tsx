import React from "react";
import BracketCoupling from "../BracketCoupling";
import { WinnerBox, line } from "./util";

type FourTeamsProps = {
  teams: string[];
  setTeams: React.Dispatch<React.SetStateAction<string[]>>;
};
const SevenTeams = ({ teams, setTeams }: FourTeamsProps) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
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
      <div style={{ marginLeft: 60 }}>
        <BracketCoupling teams={teams} setTeams={setTeams} topTeamNum={1} />
        <svg className="svgContainer">
          {line("220px", "250px", "86.5px", "86.5px")}
          {line("250px", "250px", "46.5px", "86.5px")}
          {line("250px", "280px", "46.5px", "46.5px")}

          {line("220px", "260px", "243.5px", "243.5px")}
          {line("260px", "260px", "243.5px", "400.5px")}
          {line("220px", "260px", "400.5px", "400.5px")}
          {line("260px", "280px", "322px", "322px")}

          {/* {line("220px", "250px", "245.5px", "245.5px")}
              {line("250px", "250px", "245.5px", "205.5px")}
              {line("250px", "280px", "205.5px", "205.5px")} */}

          {line("500px", "540px", "46.5px", "46.5px")}
          {line("540px", "540px", "46.5px", "323.5px")}
          {line("500px", "540px", "323.5px", "323.5px")}
          {line("540px", "560px", "50%", "50%")}
        </svg>

        <div style={{ height: "180px" }}></div>

        <BracketCoupling teams={teams} setTeams={setTeams} />
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

export default SevenTeams;
