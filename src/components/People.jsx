import React from "react";
import ActionAreaCard from "./Card";
import person from "../assets/person.jpeg";
import peopleinfo from "./PeopleInfo.js";
import ResponsiveAppBar from "./Navbar";




function People() {
  return (
    <div className=" mx-auto ">
     

      <div >
        <h2 className="text-4xl font-bold text-center mt-4 mb-8">Patrons</h2>
        <div className="flex flex-wrap justify-center items-center -mx-2 space-x-4">
        {peopleinfo && peopleinfo[0].member.map((people) => ( 
          <ActionAreaCard
            imageSrc={people.image}
            typographyContent={people.name}
            designation={people.designation}
          />
          ))}
         
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-center mb-10">Faculty Members</h2>
        <div className="flex flex-wrap justify-center items-center -mx-2 space-x-4">

        {peopleinfo && peopleinfo[1].member.map((people) => ( 
          <ActionAreaCard
          imageSrc={people.image}
          typographyContent={people.name}
          designation={people.designation}
          />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center mb-10">Club Leads</h2>
        <div className="flex flex-wrap justify-center items-center -mx-2 space-x-4">

        {peopleinfo && peopleinfo[2].member.map((people) => ( 
          <ActionAreaCard
            imageSrc={people.image}
            typographyContent={people.name}
            designation={people.designation}
          />
          ))}
        </div>
        <div className="flex justify-center items-center space-x-4">
        {peopleinfo && peopleinfo[3].member.map((people) => ( 
          <ActionAreaCard
            imageSrc={people.image}
            typographyContent={people.name}
            designation={people.designation}
          />
          ))}
        </div>
        <div className="flex justify-center items-center space-x-4">
        {peopleinfo && peopleinfo[4].member.map((people) => ( 
          <ActionAreaCard
            imageSrc={people.image}
            typographyContent={people.name}
            designation={people.designation}
          />
          ))}
        </div>
        <div className="flex justify-center items-center space-x-4">
        {peopleinfo && peopleinfo[5].member.map((people) => ( 
          <ActionAreaCard
            imageSrc={people.image}
            typographyContent={people.name}
            designation={people.designation}
          />
          ))}
        </div>{" "}
        <div className="flex justify-center items-center space-x-4">
        {peopleinfo && peopleinfo[6].member.map((people) => ( 
          <ActionAreaCard
            imageSrc={people.image}
            typographyContent={people.name}
            designation={people.designation}
          />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center mb-10">Executive Committee Members</h2>
        <div className=" justify-center items-center space-x-4">
          <div className="flex  justify-center items-center space-x-4">
          {peopleinfo && peopleinfo[7].member.map((people) => ( 
          <ActionAreaCard
            imageSrc={people.image}
            typographyContent={people.name}
            designation={people.designation}
          />
          ))}
          </div>
          <div className="flex  justify-center items-center space-x-4">
          {peopleinfo && peopleinfo[8].member.map((people) => ( 
          <ActionAreaCard
            imageSrc={people.image}
            typographyContent={people.name}
            designation={people.designation}
          />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
