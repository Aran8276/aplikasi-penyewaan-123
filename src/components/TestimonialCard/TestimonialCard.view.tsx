import React, { FC } from "react";
import { Card } from "../ui/card";
import { TestimonialCardProps } from "./TestimonialCard.type";
import { Star } from "lucide-react";

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="flex flex-col space-y-2 p-5 bg-green-50 h-[180px]">
      <h2 className="text-lg font-bold">{testimonial.person}</h2>
      <div className="flex space-x-2">
        {Array.from({ length: testimonial.stars }).map((_, index) => (
          <Star className="fill-yellow-300 stroke-yellow-300" key={index} />
        ))}
      </div>
      <p className="text-justify text-gray-500">{testimonial.body}</p>
    </Card>
  );
};

export default TestimonialCard;
