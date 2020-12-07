import React from "react";
import "./styles.css";
import { useState } from "react";

var emojiDB = {
  "🙈": "Evil Monkey Eyes-Closed",
  "🙉": "Evil Monkey Ears-Closed",
  "🙊": "Evil Monkey Mouth-Closed",
  "🐶": "Dog Face",
  "🐱": "Cat Face",
  "🐷": "Piggy Face",
  "🐿️": "Chipmunk"
};
// Convert Dict To List To Iterate Using Map
var EmojiDbConverted = Object.keys(emojiDB);

// Handels Emoji Presses
export default function App() {
  const [emoji, setEmoji] = useState("");
  function onclickHandler(emoji) {
    var meaning = emojiDB[emoji];
    setEmoji(meaning + " " + emoji);
  }
  // Handels TextBox Changes
  function ChangeHandler(event) {
    var UserInput = event.target.value;
    //var meaning = emojiDB[UserInput];
    if (UserInput in emojiDB) {
      var meaning = emojiDB[UserInput];
      setEmoji(meaning + " " + UserInput);
    } else if (event.target.value === "") {
      setEmoji("");
    } else {
      meaning = "Sorry We Dont Have `" + UserInput + "` In Our DB 🥺 ";
      setEmoji(meaning);
    }
  }
  function mouseEnterHandler(event) {
    event.target.style.border = "1px solid #F59E0B";
  }
  function mouseLeaveHandler(event) {
    event.target.style.border = "1px solid black";
  }
  return (
    <div className="App">
      <h1>Recognize Emoji</h1>
      <input
        placeholder="Enter Animal Emoji Here 🐶"
        onChange={ChangeHandler}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      ></input>
      <div className="emoji-div">{emoji}</div>
      <ul>
        {EmojiDbConverted.map((emoji) => {
          return (
            <li key={emoji} onClick={() => onclickHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
