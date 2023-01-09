import { Fragment } from "react";
import offerImg1 from "../../assets/offerImg1.svg";
import offerImg2 from "../../assets/offerImg2.svg";
import offerImg3 from "../../assets/offerImg3.svg";
import overlay1 from "../../assets/overlay1.svg";
import classes from "./Offer.module.css";
const Offer = () => {
  return (
    <Fragment>
      <div>
        <h1 className={classes.whatWeOffer}>What We Offer ?</h1>
      </div>
      <div className={classes.offerMain}>
        <div className={classes.offer}>
          <img src={offerImg1} alt="" />
          <div className={classes.subOffer}>
            <img src={overlay1} alt="" />
            <h2>Customised Curriculum</h2>
            <p>
              Customised sessions and module for Basic, Intermediate and
              Advanced learners.
            </p>
          </div>
        </div>
        <div className={classes.offer}>
          <img src={offerImg2} alt="" />
          <div className={classes.subOffer}>
            <img src={overlay1} alt="" />
            <h2>Customised Curriculum</h2>
            <p>
              Customised sessions and module for Basic, Intermediate and
              Advanced learners.
            </p>
          </div>
        </div>
        <div className={classes.offer}>
          <img src={offerImg3} alt="" />
          <div className={classes.subOffer}>
            <img src={overlay1} alt="" />
            <h2>Customised Curriculum</h2>
            <p>
              Customised sessions and module for Basic, Intermediate and
              Advanced learners.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Offer;
