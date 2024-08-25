import React, { useState } from "react";
import Star from "./star";

type StarRatingProps = {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
  defaultRating?: number;
  onSetRating?: (rating: number) => void;
};

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}: StarRatingProps) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div
      className={`flex justify-center items-center gap-16  text-2xl ${className} text-[${color}]`}
    >
      <div className="flex gap-6 justify-center items-center  ">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            size={size}
            onRate={() => {
              setRating(i + 1);
              if (onSetRating) {
                onSetRating(i + 1);
              }
            }}
            full={tempRating ? i < tempRating : i < rating}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
          />
        ))}
        <p className="leading-none m-0">
          {messages.length === maxRating
            ? messages[tempRating ? tempRating - 1 : rating - 1]
            : tempRating || rating || ""}
        </p>
      </div>
    </div>
  );
};

export default StarRating;
