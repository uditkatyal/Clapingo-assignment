import classes from "./BeginSection.module.css";
import { Fragment } from "react";
const BeginSection = () => {
  return (
    <Fragment>
      <div style={{ height: "600px" }}>
        <p className={classes.tagLine}>
          Hone your english speaking skills over a{" "}
          <span style={{ color: "#139980" }}> one-on-one </span>
          video call
        </p>
        <p className={classes.subLine}>
          Practice english conversation with excellent communuicators
          <br />
          across the country and speak like a PRO 😎.
        </p>
        <div className={classes.buttons}>
          <button className={classes.book}>Book a trial</button>
          <button className={classes.download}>Download Our App</button>
        </div>
      </div>
      <div className={classes.emptyDiv}></div>
    </Fragment>
  );
};
export default BeginSection;
