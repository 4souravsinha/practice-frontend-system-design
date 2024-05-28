import { useState } from "react";
import StarRating from "./star-rating";

const StarRatingPage = () => {
  const [currRating , setCurrRating] = useState(0)

  const handleRating = (newRating) => {
    setCurrRating(newRating)
  }

  return (
    <div>
      <div>{"Star Rating"}</div>
      <StarRating size={5} handleRatingChange={handleRating} rating={currRating} />
    </div>
  );
}

export default StarRatingPage
