import React from "react";
import '../../App.css';

const Loading = () => {
  return(
    <div 
      className="loaderContainer"         
      data-testid="loading"
    >
      <div className="loader"></div>
    </div>
  )
}

export default Loading;