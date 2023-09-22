import React from "react";
import { reviewData } from "../../api/data";
import Title from "../shared/Title";
import Card from "../shared/Card";

const Review = () => {
  return (
    <div className="bg-white  w-full pt-4 pb-10">
      <div className="title py-14">
        <Title head="User Review & Feedback" />
      </div>
      <div className="flex w-[82%]  mx-auto">
        {reviewData?.map((data) => (
          <Card key={data.name} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Review;
