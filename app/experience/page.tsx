import React from "react";

export default function Portfolio() {
  return (
    <div className="opacity-0 animate-fade-in">
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
            <time className="font-mono italic">Aug 2022 - Present</time>
            <div className="text-lg font-black">
              SaleCycle | Junior Developer
            </div>
            Develops bespoke script implementations for onboarding clients,
            designed to function as web scrapers on their sites which enable the
            seamless execution of abandonment campaigns, facilitating targeted
            engagement strategies to enhance client retention and conversion
            rates.
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
            <time className="font-mono italic">
              February 2022 – August 2022
            </time>
            <div className="text-lg font-black">
              Northcoders | Junior Software Engineer & Mentor
            </div>
            Delivered comprehensive mentoring and code support to bootcamp
            students and candidates, offering expert guidance in
            troubleshooting, debugging, and conducting thorough code reviews.
            <br />
            <br />
            Provided pastoral support and fostered a supportive learning
            environment. Actively engaged in internal development initiatives,
            facilitating exploration of new technologies and fostering personal
            growth opportunities.
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
            <time className="font-mono italic">
              October 2021 – February 2022
            </time>
            <div className="text-lg font-black">
              Northcoders | Trainee Software Developer
            </div>
            Successfully completed an intensive 13-week full-stack development
            bootcamp within a dynamic and collaborative environment. Emphasized
            industry-leading practices, including the implementation of semantic
            and clean code, Continuous Integration/Continuous Deployment
            (CI/CD), Test-Driven Development (TDD), and honed soft skills
            crucial for professional growth.
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}
