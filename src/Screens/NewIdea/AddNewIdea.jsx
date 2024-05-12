import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../Home/components/Header";
import { ChevronLeft, Info, Send } from "lucide-react";
import { Ideas } from "../../../utils/schema";
import moment from "moment";
import { db } from "../../../utils/index";
import { useNavigate } from "react-router-dom";

function AddNewIdea() {

  const navigation = useNavigate();
  const [idea, setIdea] = useState();
  const [username, setUsername] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [existingUser, setExistingUser] = useState(false);

  //useEffect to check if user is already present
  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
      setExistingUser(true);
    }
  }, []);

  //logic over here
  const onSavehandler = async () => {
    const result = await db
      .insert(Ideas)
      .values({
        content: idea,
        username: username,
        createdAt: moment().format("DD-MM-YYYY HH:mm:ss"),
      })
      .returning({ id: Ideas.id });

    if (result) {
      localStorage.setItem("username", username);
      setUsername("");
      setIdea("");
      console.log("Idea added successfully");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  return (
    <div>
      <Header />
      {showAlert && (
        <div role="alert" className="alert alert-success shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="">Congratulations your idea is added</span>
        </div>
      )}
      <button className="btn mt-7" onClick={() => navigation("/")}>
        <ChevronLeft />
        Back
      </button>
      <h2 className="font-bold text-2xl mt-5">
        From Concept to Creation: Emporwering your ideas
      </h2>
      <div className="flex flex-col mt-7 gap-2 ">
        <label>Your Idea</label>
        <textarea
          value={idea}
          onChange={(e) => {
            setIdea(e.target.value);
          }}
          className="textarea border-primary"
          placeholder="Write your thoughts.."
        ></textarea>
      </div>
      {!existingUser && (
        <div className="flex flex-col mt-7 gap-2 ">
          <label className="flex justify-between">
            Your Username
            <span className="flex items-center gap-2 text-sm">
              <Info className="h-4 w-4" /> No Account needed
            </span>
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="username"
            className="input input-bordered w-full  border-primary"
          />
        </div>
      )}
      <button
        className="btn w-full btn-primary mt-7"
        disabled={!(idea && username)}
        onClick={() => onSavehandler()}
      >
        Send
        <Send className="h-4 w-4" />
      </button>
    </div>
  );
}

export default AddNewIdea;
