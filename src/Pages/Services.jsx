import React from "react";
import ApplicationService from "../Sevices/ApplicationService";
import DigitalCommerce from "../Sevices/DigitalCommerce";
import ITConsulting from "../Sevices/ITConsulting";
import CustomerExperience from "../Sevices/CustomerExperience";
import InfrastructureServices from "../Sevices/InfrastructureServices";
import SecuritySolutions from "../Sevices/SecuritySolutions";
import SustainablityConsulting from "../Sevices/SustainablityConsulting";
import BespokeTeachnology from "../Sevices/BespokeTeachnology";
import Automated from "../Sevices/Automated";

const Services = () => {
  return (
    <div className="flex flex-col">
      <section className="mt-16 flex flex-col">
        {" "}
        <DigitalCommerce />
        {/* <ITConsulting /> */}
        <ApplicationService />
        <Automated />
        {/* <CustomerExperience />
        <InfrastructureServices />
        <SecuritySolutions />
        <SustainablityConsulting />
        <BespokeTeachnology /> */}
      </section>
    </div>
  );
};

export default Services;
