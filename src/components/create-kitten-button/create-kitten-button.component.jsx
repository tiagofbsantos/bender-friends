import React from "react";

const CreateKittenButton = ({ addKitten, searchField }) => {
  return (
    <button
      onClick={() => addKitten(searchField)}
      className="b pa2 grow pointer mv2 bg-light-green b--black-20"
    >
      Create Kitten
    </button>
  );
};

export default CreateKittenButton;
