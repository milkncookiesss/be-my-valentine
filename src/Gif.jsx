import { useState } from "react";

function Gif({ count, valentineBool }) {
  const gifList = {
    question: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFlZ2EwYTNyN25vaGdhb21mZTU0cGR1aXQ4bnIxNHBkNTZvOGlxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JlVkLKuxRSvLy/giphy.gif"
  };
  let gif = gifList.question;
  if (valentineBool === true) {
    gif = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3JvOHdkZzZuMWptOG8xa2RwY2lkanA4Mjl4NTgyYWkzbXcwdXo3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fWj2TR9mfYJ56/giphy.gif"
  };
  if (valentineBool === false) {
    gif = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2dtZXkxbGF6YmZvOW9wYWxiOTNsNzlpa3ptNzB6emtzcm9nanY0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10QQkXs4wThaF2/giphy.gif"
  };
  return (
    <div className="flex content-center">
      <img src={ gif } alt="loading..." ></img>
    </div>
  )
}

export default Gif;
