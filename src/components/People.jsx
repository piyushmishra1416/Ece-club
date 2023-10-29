import React from "react";
import ActionAreaCard from "./Card";
import quotationmark from "../assets/quotationmark.png";

function People() {
  return (
    <div>
      <h2 className="text-6xl flex justify-center items-center"> Patrons</h2>
      <div className="flex ">
        <ActionAreaCard
          imageSrc={quotationmark}
          typographyContent="Registrar"
        />
        <ActionAreaCard
          imageSrc={quotationmark}
          typographyContent="Registrar"
        />
        <ActionAreaCard
          imageSrc={quotationmark}
          typographyContent="Registrar"
        />
      </div>
    </div>
  );
}

export default People;
