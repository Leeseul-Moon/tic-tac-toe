import React from "react";

type Player = "x" | "o" | "BOTH" | null;

interface Props {
  winner: Player;
  value: Player;
  onClick: () => void;
}

export default function Square({ value, onClick, winner }: Props) {
  if (!value) {
    return <button className="square" onClick={onClick} disabled={Boolean(winner)} />;
  }
  return (
    <button className={`square square_${value.toLocaleLowerCase()}`} disabled>
      {value}
    </button>
  );
}
