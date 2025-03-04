import React, { useState } from "react";
import Button from "@mui/material/Button";
import { BackButton } from "../components/Buttons";

const ModalOverlay: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [acceptOffer, setAcceptOffer] = useState<boolean>(false);

  return (
    <div className="  m-auto flex justify-center items-center">
    {!showModal && <Button
      variant="outlined"
      onClick={() => setShowModal(true)}
      disabled={acceptOffer}
    >
      {!acceptOffer ? "Show Offer" : "Offer Accepted"}
    </Button>
}
    {showModal && (
      <div className="relative flex flex-col justify-evenly h-50 w-50 border border-blue-300 p-5 rounded">
        <span
          onClick={() => setShowModal(false)}
          className="absolute top-2 left-2 text-blue-600 border border-blue-300 p-1 hover:cursor-pointer hover:border-blue-500 text-center rounded-sm"
        >
          x
        </span>
        <p className="flex text-center">
          Click the button below to accept our amazing offer
        </p>

        <Button
          variant="outlined"
          onClick={() => {
            setAcceptOffer(true);
            setShowModal(false);
          }}
          disabled={acceptOffer}
        >
          Accept Offer
        </Button>
      </div>
    )}
    
  </div>
  );
};

export default ModalOverlay;
