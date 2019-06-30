import React from "react";
import { css } from "@emotion/core";
// First way to import
import { PulseLoader } from "react-spinners";

const override: any = css`
  bordercolor: red;
  margin-left: 45%;
  margin-top: 100px;
  margin-bottom: 100px;

`;


 const Loading = (loading: any): JSX.Element => {
  return (
    <div className="sweet-loading">
      <PulseLoader
        css={override}
        sizeUnit={"px"}
        size={15}
        color={"#5285C1"}
        loading={loading}
      />
    </div>
  );
};

export default Loading;
