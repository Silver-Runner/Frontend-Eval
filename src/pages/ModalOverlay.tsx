import React, { useState } from "react";
import { Button, Box, Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Lables, Strings } from "../constants";

const ModalOverlay: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [acceptOffer, setAcceptOffer] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
      {!acceptOffer ? (
        !showModal && (
          <Button
            variant="contained"
            sx={{ backgroundColor: theme === "dark" ? "#B45309" : "#2563EB" }}
            onClick={() => setShowModal(true)}
          >
            {Lables.SHOW_OFFER}
          </Button>
        )
      ) : (
        <Typography variant="h6" fontWeight="bold" sx={{ color: theme === "dark" ? "white" : "black" }}>
          {Strings.OFFER_ACCEPTED}
        </Typography>
      )}

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 320,
            bgcolor: theme === "light" ? "white" : "grey.900",
            border: `2px solid ${theme === "light" ? "blue" : "orange"}`,
            boxShadow: 24,
            p: 3,
            borderRadius: 2,
          }}
        >
          <Box display="flex" justifyContent="flex-start">
            <IconButton onClick={() => setShowModal(false)} sx={{ color: theme === "light" ? "blue" : "orange" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="body1" textAlign="center" mb={2} sx={{ color: theme === "light" ? "black" : "white" }}>
            Click the button below to accept our amazing offer
          </Typography>

          <Button
            variant="contained"
            sx={{ backgroundColor: theme === "dark" ? "#B45309" : "#2563EB", width: "100%" }}
            onClick={() => {
              setAcceptOffer(true);
              setShowModal(false);
            }}
            disabled={acceptOffer}
          >
            Accept Offer
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalOverlay;
