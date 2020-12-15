import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var headingText = "inside outt";

  var emojiDictionary = {
    "😘": "kissing",
    "😉": "winking",
    "🤩": "star-face",
    "😇": "smiling-face-halo",
    "😂": "smiling-face-tears"
  };

  var emojiWeKnow = Object.keys(emojiDictionary);

  // var [userInput , setUserInput] = useState("")

  // function inputChangehandler(event){

  //   console.log(event.target.value);
  //   setUserInput(event.target.value);

  // }

  // const [likeCounter, setLikeCounter] = useState(0);

  // function likeclickHandler() {
  //   var newLikeCounterValue = likeCounter + 1;
  //   //
  //   setLikeCounter(newLikeCounterValue);
  // }

  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not in our database";
    }

    setMeaning(meaning);
  }

  // function emojiClickHandler(emoji) {
  //   var meaning = emojiDictionary[emoji];
  //   setMeaning(meaning);

  //   console.log(emoji);

  // }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    console.log(emoji);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      {/* <button onClick={likeclickHandler}>Like me</button>
      {likeCounter} */}
      {/* <input onChange={inputChangehandler}/> */}

      {/* <div>welcome {userInput} </div> */}

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3>Emoji We Know</h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
