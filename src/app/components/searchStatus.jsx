import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    const lastOne = Number(number) % 10;

    if (lastOne === 1) return "человек хочет познакомиться";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека хочет познакомиться";

    return "человек хочет познакомиться";
  };

  return (
    <h2>
      <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
        {length > 0
          ? `${length + " " + renderPhrase(length)} с тобой сегодня`
          : "Никто не хочет с тобой знакомиться"}
      </span>
    </h2>
  );
};

export default SearchStatus;
