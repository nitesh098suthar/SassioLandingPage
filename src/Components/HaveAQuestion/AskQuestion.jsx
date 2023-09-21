import React from "react";
import Title from "../shared/Title";
import QnA from "../shared/QnA";
import { qna } from "../../api/data";
const AskQuestion = () => {
  return (
    <div className="bg-white w-screen">
      <div>
        <Title head="Have a Question ?" />
      </div>
      <div className="py-10">
        {qna?.map((item) => (
          <QnA question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default AskQuestion;
