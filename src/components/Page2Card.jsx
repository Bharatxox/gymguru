import React from "react";
import PropTypes from "prop-types";
import dumbell from "../assets/dumbell.png";

const Page2Card = ({ name, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-10 mb-4 w-[200px] h-[200px]"
      onClick={() => onClick(name)}
    >
      <div className="flex flex-col items-center mb-2 cursor-pointer">
        <img src={dumbell} alt={name} className="h-8 w-8 mr-2" />
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>
    </div>
  );
};
Page2Card.propTypes = {
  name: PropTypes.string,
};
export default Page2Card;
