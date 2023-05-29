import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import "./App.scss";
import { HomeScreen, MyBracketsScreen, CreateBracketScreen } from "./screens";

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomeScreen} />
      <Route path="/brackets" Component={MyBracketsScreen} />
      <Route path="/create-bracket" Component={CreateBracketScreen} />
    </Routes>
  );
}

export default App;
