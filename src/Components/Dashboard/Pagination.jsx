import React from "react";
import { Button } from "@material-ui/core";

export const Pagination = ({ currentPage, totalPages, handlePage }) => {
  const btnArray = new Array(totalPages).fill(0).map((_, index) => index + 1);

  return (
    <div style={{ textAlign: "right", marginRight: "45px" }}>
      {btnArray.map((btn) => (
        <button
          style={{ margin: "5px", border: "none" }}
          onClick={() => handlePage(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
