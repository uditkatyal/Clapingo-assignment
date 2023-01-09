import { Fragment } from "react";
import Subscription from "../../assets/subscription.svg";
import classes from "./HowItWorks.module.css";
import overlay2 from "../../assets/overlay2.svg";
const HowItWorks = () => {
  return (
    <Fragment>
      <div>
        <div className={classes.works}>How It Works?</div>
        <div className={classes.workMain}>
          <div className={classes.stepMain}>
            <div className={classes.steps}>
              <h2>1. Create Account</h2>
              <p>
                Create your account using phone number or email and take a free
                trial at ₹1.
              </p>
            </div>
            <div className={classes.steps}>
              <h2>3. Select time slot</h2>
              <p>
                Subscribe & select any time slot between 10 AM to 12 midnight.
              </p>
            </div>
          </div>
          <div className={classes.subsImg}>
            <img src={Subscription} alt="" />
            <img className={classes.overlayImg} src={overlay2} alt="" />
          </div>
          <div className={classes.stepMain}>
            <div className={classes.steps}>
              <h2>2. Subscribe</h2>
              <p>
                Choose your preferred duration and select subscription package
                for your sessions.
              </p>
            </div>
            <div className={classes.steps}>
              <h2>4. You are done</h2>
              <p>
                That’s it! Start practicing and reach your learning goal in
                speaking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default HowItWorks;
