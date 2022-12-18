import React from "react";
import { ArrayStore as rootStore } from "../Store/ArrayStore";

const ArrayPage = () => {
  return <div>{rootStore.test() + rootStore.a}</div>;
};

export default ArrayPage;
