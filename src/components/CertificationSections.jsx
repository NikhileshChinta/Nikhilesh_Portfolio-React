import React from "react";
import { useState } from "react";

const CertificationSections = () => {
  const [showPopup, setShowPopup] = useState(false);
  const certifications = [
    {
      id: 1,
      name: "BCG - GenAI Job Simulation",
      issudeOrganization: "Forge",
      issudeDate: "April 2025",
      credentials: "Fq8G5rTD2QsoPoB8d",
      skillsAquired: [
        "Financial Analysis",
        "Artificial Intelligence(AI)",
        "NLP",
        "Data Extraction",
        "Python",
        "Programming Logic Controller(PLC)",
        "Excel",
        "Jupitor",
        "Chatbot Development",
      ],
      image: "/Certifications/BCG.png",
    },
    {
      id: 2,
      name: "Citi - Technology Software Development Job Simulation",
      issudeOrganization: "Forge",
      issudeDate: "April 2025",
      credentials: "kkcoYfgdNyDeAx4Qv",
      skillsAquired: [
        "Java Development",
        "APIs",
        "Front-End Development",
        "System Design",
        "Flow Charts",
        "State Diagrams",
        "Machine Learning",
        "Data Visualization",
        "Risk Assessment",
        "Back-End Development",
      ],
      image: "/Certifications/Citi.png",
    },
    {
      id: 3,
      name: "Deloitte Australia - Data Analytics Job Simulation",
      issudeOrganization: "Forge",
      issudeDate: "April 2025",
      credentials: "CF5BZbvQL7bEepSYe",
      skillsAquired: [
        "Data Analysis",
        "Spreadsheets",
        "Data Modeling",
        "Amazon Web Services",
        "Tableau",
      ],
      image: "/Certifications/Deloitte.png",
    },
    {
      id: 4,
      name: "The Complete Full Stack Web Development Bootcamp",
      issudeOrganization: "Udemy",
      issudeDate: "April 2025",
      credentials: "UC-363aa8ff-fe37-45cc-ba80-570ea05d53db",
      skillsAquired: [
        "Bootstrap",
        "Express.js",
        "jQuery",
        "Redux.js",
        "Node.js",
        "APIs",
        "Web3",
        "React Native",
        "ES6 & ES6+",
        "HTML/CSS/JavaScript",
        "PostgreSQL",
        "RESTful Web services",
      ],
      image: "/Certifications/FullStack_Web_Development.jpg",
    },
    {
      id: 5,
      name: "Git Started with GitHub",
      issudeOrganization: "Udemy",
      issudeDate: "March 2025",
      credentials: "UC-97990a4c-eb70-4c5f-89b2-b8cce1f5cd84",
      skillsAquired: ["Git Version Control", "GitHub", "Git", "GitFlow"],
      image: "/Certifications/Git.jpg",
    },
    {
      id: 6,
      name: "Python for Absolute Beginners",
      issudeOrganization: "Udemy",
      issudeDate: "August 2024",
      credentials: "UC-2ae8e8f4-51e6-491a-b648-a45103bb6f13",
      skillsAquired: ["Python"],
      image: "/Certifications/python.jpg",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
          Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          "A showcase of industry-recognized certifications validating my skills
          and continuous learning in full stack development."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certificate, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-75 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {certificate.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-left text-primary">
                  {certificate.issudeDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSections;
