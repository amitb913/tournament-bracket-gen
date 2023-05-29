import React from "react";
import "./MyBracketsScreen.scss";
import { BracketCard } from "../../components";
import { Grid } from "@mui/material";

const MyBracketsScreen = () => {
  const arr = [
    "Super Smash Bros Tournament",
    "Rocket League Rumble",
    "March Madness",
    "Downtown Boxing Match",
    "Volleyball Winter League",
    "Basketball Spring Meet",
    "Local Golf Open",
    "City Bowling Challenge",
    "Track and Field Day",
    "Dodgeball Championship",
    "Hockey Winter Classic",
  ];

  return (
    <div className="myBracketsScreenContainer">
      <h2>My Brackets</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {arr.map((bracket, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <BracketCard>{bracket}</BracketCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyBracketsScreen;
