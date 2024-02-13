import React from "react";

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<any> = (
  props
) => {
  //   console.log(props.match);
  //return <h1>Tour ID: {props.match.params.touristRouteId}</h1>;
  return <h1>Detail Tour ID</h1>;
};
