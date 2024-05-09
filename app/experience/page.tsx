import React from "react";

export default function Portfolio() {
  const salecycleSkills = [
    "TypeScript",
    "Azure Data Studio",
    "HandlebarJS",
    "AWS",
    "Bash",
  ];

  const mentorSkills = [
    "NextJS",
    "GatsbyJS",
    "GraphQL",
    "Basic C++",
    "Basic Python",
  ];

  const traineeSkills = [
    "Git",
    "GitHub",
    "JavaScript",
    "HTML",
    "CSS",
    "ReactJS",
    "React Native",
    "ExpressJS",
    "NodeJS",
    "Tailwind CSS",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
  ];

  return (
    <div className="opacity-0 animate-fade-in p-6 py-6 container mx-auto my-10">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="italic">Aug 2022 - Present</time>
            <div className="text-lg font-bold">SaleCycle | Developer</div>
            <div className="text-xs pb-2">
              Built and deployed custom web scraping scripts using JavaScript
              and TypeScript, overcoming dynamic content challenges, to optimize
              client onboarding and drive cart abandonment recovery for
              SaleCycle.
            </div>
            <div className="mb-2">
              {salecycleSkills.map((skill, ix) => (
                <span
                  className="badge badge-outline text-xs mx-1 my-2"
                  key={ix}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="italic">February 2022 – August 2022</time>
            <div className="text-lg font-bold">
              Northcoders | Junior Software Engineer & Mentor
            </div>
            <div className="text-xs pb-2">
              Mentored 50+ bootcamp students on JavaScript, React, NodeJS, and
              agile development practices. Provided expert guidance in
              troubleshooting, debugging, and code reviews, resulting in
              improved code quality and project success rates.
            </div>
            <div className="my-2">
              {mentorSkills.map((skill, ix) => (
                <span className="badge badge-outline text-xs mx-1" key={ix}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="italic">October 2021 – February 2022</time>
            <div className="text-lg font-bold">
              Northcoders | Trainee Software Developer
            </div>
            <div className="text-xs pb-2">
              Completed the intensive Northcoders full-stack development
              bootcamp (2021-2022), building a fitness gaming app using React
              Native, NodeJS, Firebase, and Jest for testing. Focused on
              industry-standard practices like Test-Driven Development (TDD) and
              agile collaboration.
            </div>
            <div className="my-2">
              {traineeSkills.map((skill, ix) => (
                <span
                  className="badge badge-outline text-xs mx-1 my-1"
                  key={ix}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}
