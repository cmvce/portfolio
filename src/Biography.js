import React from "react";
import "./Biography.css";
export default function Biography(props) {
  return (
    <div className='Biography'>
      <h3>About me</h3>
      <p>
        My name is Coleene and I'm 30 y.o. <br />A year ago I wanted to change
        my career from being a Sous-Chef to a developer. Thanks to the{" "}
        <a
          className='shecodes-link'
          href='https://www.shecodes.io/bootcamp'
          target='blank_'
        >
          SheCodes bootcamp
        </a>
        , I can finally make it possible. <br />
        Thanks to the time spent in the kitchen, I am able to{" "}
        <strong>work in a team</strong>, be <strong>independent</strong> and{" "}
        <strong>can work in a stressful environement</strong>.
      </p>
    </div>
  );
}
