import React from "react";
interface Props {
  title: string;
  color?: string;
}
const SectionTitle: React.FC<Props> = ({ title, color }) => {
  return (
    <div className="h-[100px]  max-w-[900px] mx-auto flex items-center justify-center">
      <h2
        className={`text-center text-3xl underline underline-offset-8 ${color}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
