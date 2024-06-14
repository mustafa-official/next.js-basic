import React from "react";
import Meals from "../components/Meals";

export const metadata = {
  title: {
    absolute: "Meals",
  },
  description: "Meals Page",
  keywords: ["about vivo phone, about page, about us"]
};

const MealsPage = () => {
  return (
    <div>
      <Meals></Meals>
    </div>
  );
};

export default MealsPage;
