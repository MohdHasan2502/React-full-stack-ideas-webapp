import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  

  
  return (
    <div
      role="tablist"
      className='tabs tabs-borderer'>
      <a role="tab "href="/#hot"
        onClick={() => setActiveTab(0)}
        className={ `tab text-lg font-bold ${activeTab===0 && 'tab-active'}`}>
        🔥Hot</a>
      <a role="tab" href="/#new"  onClick={() => setActiveTab(1)}
        className={ `tab text-lg font-bold ${activeTab===1 && 'tab-active'}`} >
        ✨ New
      </a>
      <a role="tab" href="/#top" c onClick={() => setActiveTab(2)}
        className={ `tab text-lg font-bold ${activeTab===2 && 'tab-active'}`}>
        🏆 Top
      </a>
    </div>
  );
}

export default Tabs;
