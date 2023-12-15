import React from "react";
import Button from "./Button";

const items = ["All", "Cricket", "Football", "News", "Cooking", "Tech","Cricket1", "Football1", "News1", "Cooking1", "Tech1","Cricket2", "Football2", "News2", "Cooking2", "Tech2","Football3", "News3", "Cooking4", "Tech5","Football6", "News6", "Cooking7", "Tech7"];

const ButtonList = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex overflow-auto  ">
      {items.map((item) => (
        <Button
          key={item}
          className="mx-5 px-5 bg-red-300 rounded-full"
          name={item}
        />
      ))}
    </div>
  );
};

export default ButtonList;
