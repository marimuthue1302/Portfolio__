import React from "react";
import Header from "./components/Header/Header";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import TopContainer from "./components/TopContainer/TopContainer";

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
    </div>
  );
};

export default App;
