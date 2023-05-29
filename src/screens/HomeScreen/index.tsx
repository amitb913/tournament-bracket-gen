import React from "react";
import "./HomeScreen.scss";
import { Grid, Stack } from "@mui/material";
import trophyAnimation from "../../assets/trophyAnimation.gif";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <Stack className="homeScreenContainer">
      <h1 id="homeScreenHeading">Tournament Bracket Generator</h1>
      <img src={trophyAnimation} alt="trophy" />
      <h3>
        Welcome to the Tournament Bracket Generator, the ultimate tool for
        creating and managing tournament brackets. Whether you're organizing a
        local e-sports competition or just a lighthearted competition among
        friends at game night, this tool makes it easy and fun to handle the
        brackets.
      </h3>
      <h3>
        Just input the competitors, and we'll generate a customized bracket for
        your tournament. As the competition progresses, you can easily update
        the bracket with the results of each match. Share your tournament
        progress with others and celebrate the champions effectively."
      </h3>
      <Stack direction={"row"}>
        <Button onClick={() => navigate("/brackets")}>My Brackets</Button>
        <Button onClick={() => navigate("/create-bracket")}>
          Create New Bracket
        </Button>
      </Stack>
    </Stack>
  );
};

export default HomeScreen;
