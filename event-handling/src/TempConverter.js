import React, { useState } from "react";
import TemptInputField from "./TempInputField";

const toCelsius = (f) => {
  return (f - 32) * 5 / 9;
}

const toFahrenheit = (c) => {
  return (c * 9 / 5) + 32;
}

export default function TempConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  function getValueF(number) {
    setFahrenheit(number);
    setCelsius(toCelsius(number));
  }

  function getValueC(number) {
    setCelsius(number);
    setFahrenheit(toFahrenheit(number));
  }
  return (
    <>
      <TemptInputField unitofmeasure={'C'} func={getValueC} value={celsius} />
      <TemptInputField unitofmeasure={'F'} func={getValueF} value={fahrenheit} />

    </>
  );
}