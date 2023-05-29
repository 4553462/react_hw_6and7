import React from "react";
import classes from "./styles.module.css";

const Loading = () => {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.book}>
        <div className={classes.page}></div>
      </div>
      <p className={classes.loadingText}>Loading...</p>
    </div>
  );
};

export default Loading;
