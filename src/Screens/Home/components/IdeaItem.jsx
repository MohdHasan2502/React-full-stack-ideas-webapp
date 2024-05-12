import React from "react";
import { db } from "./../../../../utils/index.js";
import { Ideas } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import { upvote } from "./../../../../src/Service";
import { downvote } from "./../../../../src/Service";
import { checkIsAlreadyUpVoted } from "./../../../../src/Service";
import { checkIsAlreadydownVoted } from "./../../../../src/Service";

function IdeaItem({ idea, index, refreshData }) {
  const upVoteHandler = async () => {
    if (upvote(idea.id)) {
      const result = await db
        .update(Ideas)
        .set({ vote: idea.vote + 1 })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
      }
    }
  };
  const downVoteHandler = async () => {
    if(downvote(idea.id)){

    const result = await db
      .update(Ideas)
      .set({ vote: idea.vote - 1 })
      .where(eq(Ideas.id, idea.id))
      .returning({ id: Ideas.id });
    if (result) {
      refreshData();
    }
  }
  };

  return (
    <div className="my-5  p-5 border shadow-lg rounded-lg ">
      <div className="  flex gap-7  ">
        <h2 className="flex gap-2">
          <span>{index + 1} </span> {idea?.content}
        </h2>
        <div className="flex flex-col items-center">
          <h2
            className={`text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2 ${checkIsAlreadyUpVoted(idea.id)&&'bg-slate-200'}` }
            onClick={() => upVoteHandler()}
          >
            🔥
          </h2>
          <h2 className="text-lg rounded-md p-1 font-bold ">{idea?.vote}</h2>
          <h2
            className={`text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer px-2 ${checkIsAlreadydownVoted(idea.id)&&'bg-slate-200'}`}
            onClick={() => downVoteHandler()}
          >
            👎
          </h2>
        </div>
      </div>
      <h2 className="mt-4 text-gray-400 text-sm flex gap-4">
        <span> </span>
        by @{idea.username} on {idea.createdAt}
      </h2>
    </div>
  );
}

export default IdeaItem;
