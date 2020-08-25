import React from "react";
import Skills from "../components/Skills";
import WhatIKnow from "../components/WhatIKnow";
import Tabs from "../components/Tabs";

export const SkillsPg = () => {
  return (
    <div className='skills-container'>
      <Skills />
      <Tabs />
      <br />
      <WhatIKnow />
    </div>
  );
};
export default SkillsPg;
