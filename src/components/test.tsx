import React, { useState } from "react";
import StarRating from "./starRating";

const Test = () => {
  const [serviceRating, setServiceRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={7} onSetRating={setServiceRating} />
      <p>this service was rated {serviceRating} stars</p>
    </div>
  );
};

export default Test;
