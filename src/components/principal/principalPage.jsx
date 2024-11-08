import React, { Fragment } from "react";
import PrincipalHeader from "./principalPageComponents/principal_header/principalHeader";
import Navbar from "../navbar/navbar";
import SecondHeader from "./principalPageComponents/second_header/second-header";
import ThreeHeader from "./principalPageComponents/three_header/three-header";
import FourHeader from "./principalPageComponents/four_header/fourHeader";

function PrincipalPage() {
  return (
    <Fragment>
      <Navbar />
      <PrincipalHeader />
      <SecondHeader />
      <ThreeHeader />
      <FourHeader />
    </Fragment>
  );
}

export default PrincipalPage;
