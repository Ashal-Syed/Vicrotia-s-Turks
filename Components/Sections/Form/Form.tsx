import Button from "@/Components/UI/Button/Button";
import Input from "@/Components/UI/Input/Input";
import React from "react";

const Form = () => {
  return (
    <section id="form" className="big-card flex flex-col gap-6 mt-10">
      <h1 className="heading-text font-medium text-3xl">Get Involved</h1>
      <p className="text-neutral-600">
        Volunteer, donate, or join our programs to help us grow a stronger
        community.
      </p>
      <div className="flex flex-col lg:flex-row gap-5">
        <Input src="/assets/User.svg" alt="Name" title="Name" placeholder="Enter Your Name" />
        <Input src="/assets/Email.svg" alt="Email" title="Email Address" placeholder="Enter Your Email Address" />
        <Input src="/assets/Phone.svg" alt="Phone" title="Contact Number" placeholder="Enter Your Contact Number" />
        <Button text="Submit" size="large" />
      </div>
    </section>
  );
};

export default Form;
