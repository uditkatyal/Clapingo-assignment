import { Fragment } from "react";
import classes from "./Header.module.css";
import ClapingoLogo from "../../assets/ClapingoLogo.svg";
import UserLogo from "../../assets/user.svg";
const header = () => {
  return (
    <Fragment>
      <div className={classes.mainHeader}>
        <div>
          <img src={ClapingoLogo} alt="logo" />
        </div>
        <div>
          <ul className={classes.subHeader}>
            <li>Plans & Pricing</li>
            <li>Teach with us</li>
            <li>Affiliate Program</li>
            <li>Kids</li>
          </ul>
        </div>
        <div>
          <button className={classes.loginButton}>
            <img src={UserLogo} alt="" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default header;
