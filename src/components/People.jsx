import React from "react";
import ActionAreaCard from "./Card";
import person from "../assets/person.jpeg";
import peopleinfo from "./PeopleInfo.js";
import ResponsiveAppBar from "./Navbar";




function People() {
  return (
    <div>
      <ResponsiveAppBar />

      <div>
        <h2 className="text-6xl text-center mb-10">Patrons</h2>
        <div className="flex justify-center items-center space-x-4">
        {peopleinfo && peopleinfo[0].member.map((people) => ( 
          <ActionAreaCard
            imageSrc={people.image}
            typographyContent={people.name}
            designation="designation"
          />
          ))}
         
        </div>
      </div>

      <div>
        <h2 className="text-6xl text-center mb-10">Faculty Members</h2>
        <div className="flex justify-center items-center space-x-4">
        {peopleinfo && peopleinfo[0].member.map((people) => ( 
          <ActionAreaCard
            imageSrc={people.name}
            typographyContent="name"
            designation="designation"
          />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-5xl text-center mb-10">Club Leads</h2>
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
        </div>
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
        </div>
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
        </div>{" "}
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
        <h2 className="text-6xl text-center mb-10">Executive Members</h2>
        <div className=" justify-center items-center space-x-4">
          <div className="flex  justify-center items-center space-x-4">
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
          <div className="flex  justify-center items-center space-x-4">
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
    </div>
  );
}

export default People;
