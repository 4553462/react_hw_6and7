import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import errorImage from "./img/error_img.png";

const Error404 = () => {
  let i = 0;
  let txt = "Oops! Error 404 - Page Not Found";
  let speed = 40;
  let dd = "";
  const [text, setText] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  function typeWriter() {
    if (i < txt.length) {
      setText((dd += txt.charAt(i)));
      i++;
      setTimeout(typeWriter, speed);
    } else {
      setShowDetails(true);
    }
  }

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div>
      <h1 id="demo">{text}</h1>
      <br />

      <div className={classes.container}>
        <img
          className={classes.image}
          src={errorImage}
          alt="Error 404"
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        />
        <div className={classes.overlay}>
          <div className={classes.text}>
            {showDetails && (
              <p>
               <h3 > We apologize, but the page you are looking for could not be
                found.</h3>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
