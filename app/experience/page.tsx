import React from "react";

export default function Portfolio() {
  const experience = [
    {
      dateRange: {
        from: "December 2024",
        to: "Present",
      },
      company: "BBC",
      jobTitle: "Junior Software Engineer – Audience Portal Team",
      description:
        "Contributing to the BBC Audience Portal, a key platform for audience data analytics, by developing features, fixing bugs, and improving accessibility using React, NextJS, Node.js, and AWS. Collaborating across disciplines to deliver secure, performant, and user-friendly experiences of users.",
      skills: ["AWS", "React", "Node.js", "JavaScript", "TypeScript", "Jest"],
    },
    {
      dateRange: {
        from: "June 2024",
        to: "December 2024",
      },
      company: "Melius Cyber",
      jobTitle: "Software Developer",
      description:
        "Primary developer overhauling Melius CyberSafe's B2B SaaS platform with NextJS, NodeJS, and Prisma, collaborating with the Head of IT to implement features, optimise functionalities, and ensure cyber security standards.",
      skills: ["AWS", "NextJS", "AuthJS", "Prisma", "Material Tailwind CSS"],
    },
    {
      dateRange: {
        from: "August 2022",
        to: "April 2024",
      },
      company: "SaleCycle",
      jobTitle: "Developer",
      description:
        "Built and deployed custom web scraping scripts using JavaScript and TypeScript, overcoming dynamic content challenges, to optimize client onboarding and drive cart abandonment recovery for SaleCycle.",
      skills: ["TypeScript", "Azure Data Studio", "HandlebarJS", "AWS", "Bash"],
    },
    {
      dateRange: {
        from: "February 2022",
        to: "August 2022",
      },
      company: "Northcoders",
      jobTitle: "Junior Software Engineer & Mentor",
      description:
        "Mentored 50+ bootcamp students on JavaScript, React, NodeJS, and agile development practices. Provided expert guidance in troubleshooting, debugging, and code reviews, resulting in improved code quality and project success rates.",
      skills: ["NextJS", "GatsbyJS", "GraphQL", "Basic C++", "Basic Python"],
    },
    {
      dateRange: {
        from: "October 2021",
        to: "February 2022",
      },
      company: "Northcoders",
      jobTitle: "Trainee Software Developer",
      description:
        "Completed the intensive Northcoders full-stack development bootcamp (2021-2022), building a fitness gaming app using React Native, NodeJS, Firebase, and Jest for testing. Focused on industry-standard practices like Test-Driven Development (TDD) and agile collaboration.",
      skills: [
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
      ],
    },
  ];

  return (
    <div className="opacity-0 animate-fade-in p-6 py-6 container mx-auto my-10">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {experience.map((job, ix) => (
          <li key={`${job.company}-${ix}`}>
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
            <div
              className={`${
                ix % 2 === 0 ? "timeline-end" : "timeline-start md:text-end"
              } mb-10`}
            >
              <time className="italic">
                {job.dateRange.from} – {job.dateRange.to}
              </time>
              <div className="text-lg font-bold">
                {job.company} | {job.jobTitle}
              </div>
              <div className="text-xs pb-2">{job.description}</div>
              <div className="my-2">
                {job.skills.map((skill, ix) => (
                  <span className="badge badge-outline text-xs mx-1" key={ix}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
