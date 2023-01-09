import { Fragment } from "react";
import classes from "./BookATrial.module.css";
const BookATrial = () => {
  return (
    <Fragment>
      <div className={classes.mainTrial}>
        <div className={classes.grad}>
          <div className={`${classes.divSection}  ${classes.divSection1}`}>
            <h2>
              50K <span style={{ color: "#18C0A6" }}>+</span>
            </h2>
            <p>Mobile Downloads</p>
          </div>
          <div className={`${classes.divSection}  ${classes.divSection2}`}>
            <h2>
              80K <span style={{ color: "#18C0A6" }}>+</span>
            </h2>
            <p>Happy Learners</p>
          </div>
          <div className={`${classes.divSection}  ${classes.divSection3}`}>
            <h2>
              53K <span style={{ color: "#18C0A6" }}>+</span>
            </h2>
            <p>Sessions per month</p>
          </div>
          <div className={`${classes.divSection}  ${classes.divSection4}`}>
            <h2>
              200 <span style={{ color: "#18C0A6" }}>+</span>{" "}
            </h2>
            <p>Speakers around the globe</p>
          </div>
        </div>
        <div>
          <span className={classes.bookATrial}>Book A trail</span>
          <h2 className={classes.start}>
            Start your English speaking journey today!
          </h2>
          <p className={classes.startText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            pellentesque praesent vitae sit sagittis venenatis.
          </p>
          <button className={classes.book_a_trial}>Book A Trial</button>
        </div>
      </div>
    </Fragment>
  );
};
export default BookATrial;
