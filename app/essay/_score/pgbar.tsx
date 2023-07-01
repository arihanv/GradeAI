import React from 'react';

type Props = {
  value: number;
};

export default function PGBar({ value }: Props) {
  let colorClass = '';

 if (value <= 50) {
    colorClass = 'text-red-500'; 
  } else if (value <= 75) {
    colorClass = 'text-yellow-500';
  } else {
    colorClass = 'text-green-500'; 
  }

  return (
    <div
      className={`radial-progress ${colorClass} ${value}`}
      style={{ "--value": value, "--size": "9rem" }}
    >
      <div className="text-white font-semibold text-3xl">{value}%</div>
    </div>
  );
}
