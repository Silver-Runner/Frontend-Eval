import React, { useRef } from "react";
import Button from "@mui/material/Button";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import { Lables } from "../constants";

const TwofactorCode: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const inputRefs: React.RefObject<HTMLInputElement>[] = [
    useRef<HTMLInputElement>(null!),
    useRef<HTMLInputElement>(null!),
    useRef<HTMLInputElement>(null!),
    useRef<HTMLInputElement>(null!),
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let { value } = e.target;
    value = value.slice(0, 1);
    e.target.value = value;

    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && e.currentTarget.value === "") {
      inputRefs[index - 1].current?.focus();
    }
  };

  const submitCode = () => {
    const recode = inputRefs.map((ref) => ref.current?.value || "").join("");
    const code = "1234";

    if (recode === code) {
      alert("Code is correct");
    } else {
      alert("Code is incorrect");
    }

    inputRefs.forEach((ref) => {
      if (ref.current) ref.current.value = "";
    });
    inputRefs[0].current?.focus();
  };

  return (
    <div className="flex  items-center justify-center ">
      <div
        className={
          theme === "light"
            ? "flex flex-col gap-10 items-center justify-center border-2 border-gray-400 p-10 rounded"
            : "flex flex-col gap-10 items-center justify-center border-2 border-yellow-600 p-10 rounded"
        }
      >
        <div className="flex gap-2">
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              ref={ref}
              type="number"
              inputMode="numeric"
              maxLength={1}
              className={
                theme === "light"
                  ? "w-12 h-12 text-center text-xl border-2 border-gray-400 rounded focus:border-blue-500 outline-none hide-arrows"
                  : "w-12 h-12 text-center text-white text-xl border-2 border-yellow-600 rounded focus:border-yellow-500 outline-none hide-arrows"
              }
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <Button
          variant="contained"
          sx={theme === "dark" ?{background: "#B45309"}:{background: "#2563EB"}}
          className="w-full h-12 bg-gray-700"
          onClick={submitCode}
        >
          {Lables.SUBMIT_BUTTON}
        </Button>
      </div>
    </div>
  );
};

export default TwofactorCode;
