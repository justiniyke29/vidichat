import React from "react";

interface Iprops {
  text: string;
}
const NoResults = ({ text }: Iprops) => {
  return <div>NoResults</div>;
};

export default NoResults;
