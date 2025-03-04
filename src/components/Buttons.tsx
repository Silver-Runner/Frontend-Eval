import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <Button variant="contained" onClick={() => navigate("/")} className="">
        Back
      </Button>
    </div>
  );
};
