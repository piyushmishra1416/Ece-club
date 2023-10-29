import React from "react";
import ActionAreaCard from "./Card";
import quotationmark from "../assets/quotationmark.png";
import person from "../assets/person.jpeg";

function People() {
  return (
    <div>
      <div>
        <h2 className="text-6xl text-center mb-10">Patrons</h2>
        <div className="flex justify-center items-center space-x-4">
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="NAME"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
        </div>
      </div>
      <div>
        <h2 className="text-6xl text-center mb-10">Faculty Members</h2>
        <div className="flex justify-center items-center space-x-4">
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="NAME"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
        </div>
      </div>
      <div>
        <h2 className="text-6xl text-center mb-10">Club Leads</h2>
        <div className=" justify-center items-center space-x-4">
          <div className="flex">
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="NAME"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
          </div>
          <div className="flex">
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-5xl text-center mb-10">Sub club Leads</h2>
        <div className="flex justify-center items-center space-x-4">
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="NAME"
            designation="designation"
          />
          <ActionAreaCard
            imageSrc={person}
            typographyContent="name"
            designation="designation"
          />
        </div>
      </div>
    </div>
  );
}

export default People;
