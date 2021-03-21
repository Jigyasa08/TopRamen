import React from "react";
import { Button } from "@material-ui/core";

export const Pagination = ({ currentPage, totalPages, handlePage }) => {
  const btnArray = new Array(totalPages).fill(0).map((_, index) => index + 1);

  return (
    <>
      {btnArray.map((btn) => (
        <Button variant="outlined" onClick={() => handlePage(btn)}>
          {btn}
        </Button>
      ))}
    </>
  );
};
