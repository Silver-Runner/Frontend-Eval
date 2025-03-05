import React from "react";

interface FilterProps {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
}

const Filter: React.FC<FilterProps> = ({ difficulty, setDifficulty }) => {
  const difficultyOptions = [
    { label: "All", value: "all" },
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDifficulty = e.target.value;
    setDifficulty(newDifficulty);
  };

  return (
    <div className="absolute top-20 right-5">
      <select
        value={difficulty}
        onChange={handleChange}
        className="p-1 text-sm shadow-lg focus:outline-none"
      >
        {difficultyOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
