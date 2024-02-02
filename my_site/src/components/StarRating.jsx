// StarRating.jsx
import React from 'react';

const StarRating = ({ value, onChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          onClick={() => onChange(star)}
          style={{
            cursor: 'pointer',
            color: star <= value ? 'gold' : 'gray',
          }}
        >
          &#9733; {/* Unicode character for a solid star */}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
