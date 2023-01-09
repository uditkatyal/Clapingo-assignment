import { Fragment } from "react";
import Header from "../../components/Header/Header";
import BeginSection from "../../components/BeginSection/BeginSection";
import BookATrial from "../../components/BookATrial/BookATrial";
import Offer from "../../components/Offer/Offer";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
const LandingPage = () => {
  return (
    <Fragment>
      <Header />
      <BeginSection />
      <BookATrial />
      <Offer />
      <HowItWorks />
    </Fragment>
  );
};
export default LandingPage;
