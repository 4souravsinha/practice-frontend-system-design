import { useState } from "react";

const StarRating = ({size=5 , handleRatingChange=()=>{} , rating}) => {

  const [hoveredStar , setHoveredStar] = useState(0);
  const [isHovering , setIsHovering] = useState(false);

  const handleHover = (starno)=>{
    setHoveredStar(starno);
    setIsHovering(true);
  } 
  
  const handleRemoveHover = () => {
    setHoveredStar(0);
    setIsHovering(false);
  }

  const stars = Array(size).fill("");
 

  return (

       stars.map((_ , index)=>{

        let classes = "single-star";
        let starno = index + 1;
        
        if(starno <= hoveredStar){
          classes += ' hover-star'
        }
        if(starno <= rating && !isHovering){
          classes += ' selected-star'
        }

        return (
          <span
            key={index}
            className={classes}
            onMouseEnter={()=>handleHover(starno)}
            onMouseLeave={handleRemoveHover}
            onClick={()=>handleRatingChange(starno)}
          >
            {"★"}
          </span>
        );

       })
    
  )
}

export default StarRating
