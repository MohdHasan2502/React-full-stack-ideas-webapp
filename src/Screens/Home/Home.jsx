import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import { useLocation } from "react-router-dom";
import { db } from "./../../../utils/index";
import { Ideas } from "./../../../utils/schema";
import { desc } from "drizzle-orm";
import { useState } from "react";
import IdeaList from "./components/IdeaList";
import ideaList from "./components/IdeaItem";



function Home() {
  const params = useLocation();
  const [ideaList, setIdeas] = useState([]);

  useEffect(() => {
    GetAllIdeas();
  }, [params]);
  const GetAllIdeas = async () => {
    const result = await db
      .select()
      .from(Ideas)
      .orderBy(
        desc(
          params.hash == "#hot" || params.hash == "#top" ? Ideas.vote : Ideas.id
        )
      )
      .limit(20);
    console.log(result);
    setIdeas(result);
  };
  return (
    <div>
      <Header />
      <Hero />
      <Tabs />
      <IdeaList ideaList={ideaList}
      refreshData={GetAllIdeas}
      />
    </div>
  );
}

export default Home;
