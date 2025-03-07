import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import { Lables, Strings } from "../constants";
const ModalOverlay: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [acceptOffer, setAcceptOffer] = useState<boolean>(false);
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className="  m-auto flex justify-center items-center">
    {!acceptOffer ? (
  !showModal && (
    <Button
      variant="contained"
      sx={{
        background: theme === "dark" ? "#B45309" : "#2563EB",
      }}
      onClick={() => setShowModal(true)}
    >
      {Lables.SHOW_OFFER}
    </Button>
  )
) : <p className={`text-md font-bold ${theme === "dark" && "text-white"} `}>{Strings.OFFER_ACCEPTED}</p>}
      {showModal && (
        <div className={`relative flex flex-col justify-evenly h-50 w-50 border ${theme === "light"?"border-blue-300":"border-yellow-700"} p-5 rounded`}>
          <span
            onClick={() => setShowModal(false)}
            className={`absolute top-2 left-2  border pl-1 pr-1 hover:cursor-pointer  text-center rounded ${theme === "light"?"border-blue-300 text-blue-600 hover:border-blue-400":"border-yellow-700 text-yellow-700 hover:border-yellow-800"} `}
          >
            x
          </span>
          <p className={`flex text-center ${theme === "light"?"text-black":"text-white"}`}>
            Click the button below to accept our amazing offer
          </p>

          <Button
            variant="contained"
            sx={theme === "dark" ?{background: "#B45309"}:{background: "#2563EB"}}
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
