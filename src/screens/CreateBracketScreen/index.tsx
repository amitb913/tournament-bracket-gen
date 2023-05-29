import React, { useState } from "react";
import "./CreateBracketScreen.scss";
import { Play } from "react-feather";
import { BracketCoupling, Button } from "../../components";
import trophy from "../../assets/trophy.png";
import FourTeams from "../../components/templates/FourTeams";
import FiveTeams from "../../components/templates/FiveTeams";
import SixTeams from "../../components/templates/SixTeams";
import SevenTeams from "../../components/templates/SevenTeams";
import EightTeams from "../../components/templates/EightTeams";

const CreateBracketScreen = () => {
  const [bracketName, setBracketName] = useState<string>("");
  const [numPlayers, setNumPlayers] = useState<number>(4);
  const [teams, setTeams] = useState<string[]>(Array(8).fill(""));

  const handleNumPlayersChange = (operation: "add" | "subtract") => {
    if (operation === "add") {
      if (numPlayers < 8) {
        setNumPlayers(numPlayers + 1);
      }
    } else {
      if (numPlayers > 4) {
        setNumPlayers(numPlayers - 1);
      }
    }
  };

  // const line = (x1: string, x2: string, y1: string, y2: string) => {
  //   return (
  //     <line
  //       x1={x1}
  //       x2={x2}
  //       y1={y1}
  //       y2={y2}
  //       style={{ stroke: "black", strokeWidth: 2 }}
  //     />
  //   );
  // };

  // const WinnerBox = () => (
  //   <div
  //     style={{
  //       display: "flex",
  //       flexDirection: "column",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       alignSelf: "center",
  //       width: 200,
  //       height: 140,
  //       border: "2px solid black",
  //       borderRadius: 10,
  //       marginLeft: 5,
  //       paddingLeft: 10,
  //       paddingRight: 10,
  //     }}
  //   >
  //     <h3 style={{ margin: 0 }}>Winner</h3>
  //     <img src={trophy} />
  //   </div>
  // );

  return (
    <div className="createBracketScreenContainer">
      <div id="createBracketScreenHeaderRow">
        <h2>Create New Bracket</h2>
        <Button style={{ marginTop: 30 }}>Save Bracket</Button>
      </div>

      <input
        id="bracketNameInput"
        type="text"
        value={bracketName}
        placeholder="Tournament Name"
        maxLength={28}
        onChange={(e) => setBracketName(e.target.value)}
      ></input>
      <div className="numPlayersRow">
        <h3>Number of Players (4-8):</h3>
        <div className="numPlayersControlRow unselectable">
          <Play
            onClick={() => handleNumPlayersChange("subtract")}
            className="arrowButton"
            color="#212121"
            fill="#FFFAD1"
            style={{ transform: "rotate(180deg)" }}
          />
          <h3 className="unselectable">{numPlayers}</h3>
          <Play
            onClick={() => handleNumPlayersChange("add")}
            className="arrowButton"
            color="#212121"
            fill="#FFFAD1"
          />
        </div>
      </div>

      <div className="bracketContainer">
        {numPlayers === 4 ? (
          <FourTeams teams={teams} setTeams={setTeams} />
        ) : numPlayers === 5 ? (
          <FiveTeams teams={teams} setTeams={setTeams} />
        ) : numPlayers === 6 ? (
          <SixTeams teams={teams} setTeams={setTeams} />
        ) : numPlayers === 7 ? (
          <SevenTeams teams={teams} setTeams={setTeams} />
        ) : numPlayers === 8 ? (
          <EightTeams teams={teams} setTeams={setTeams} />
        ) : null}
      </div>
    </div>
  );
};

export default CreateBracketScreen;
