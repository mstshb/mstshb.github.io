import React from "react";
import {FaBriefcase } from "react-icons/fa";

export default function ExperienceTimeline() {
  // Define experience constant
  const experience = [
    {
      company: "Lind Capital",
      title: "Machine Learning Engineer",
      dateRange: "Sep 2023 - Present",
      bullets: [
        "Developing model-based trading strategies",
        "Deploying machine learning pipelines in AWS",
      ],
    },
    {
      company: "Aarhus University - JP Morgan AI",
      title: "Postdoctoral Researcher",
      dateRange: "Dec 2022 - Aug 2023",
      bullets: [
        "Developed an optimizer tailored for handling imbalanced datasets",
        "Applied deep learning techniques for financial prediction problems",
      ],
    },
    {
      company: "Aarhus University",
      title: "Doctoral Researcher",
      dateRange: "Dec 2019 - Nov 2022",
      bullets: [
        "Developed a neural network approach for incremental classification of time series",
        "Designed a custom neural network using attention mechanisms for time series classification",
        "Proposed a novel method for predicting synchronization states of time series",
        "Created specialized optimizers for time series prediction",
        "Published 7 research papers in leading machine learning journals and conferences",
      ],
    },
    {
      company: "Danske Bank",
      title: "Research Visit",
      dateRange: "Jun 2022 - Aug 2022",
      bullets: [
        "Designed a machine learning method leveraging customers' temporal behavior to detect fraud in transactions",
      ],
    },
    {
      company: "Bank Saderat",
      title: "Data Analyst",
      dateRange: "Feb 2016 - Dec 2019",
      bullets: [
        "Implemented machine learning algorithms for CRM behavioral analysis using transaction data",
        "Designed and developed a web application for visualizing ATM transaction data",
        "Created SSIS applications for processing and storing transactional data",
        "Built a web-based financial reporting application for corporate clients",
        "Published three research papers on customer segmentation using the RFM CLV model",
      ],
    },
    {
      company: "Dayamooz.co (E-learning Platform)",
      title: "Co-Founder",
      dateRange: "Sep 2014 - Feb 2016",
      bullets: [
        "Founded and scaled a web and mobile e-learning platform to 10,000 users",
        "Managed customer relationship management (CRM) strategies",
        "Worked as a Full-Stack Software Engineer using ASP.NET C#, jQuery, and JavaScript",
      ],
    },
  ];

  return (
    <div className="md:col-span-1" style={{ textAlign: 'left', direction: 'ltr' }}>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white" style={{ color: '#f26b38' }}>
        <FaBriefcase className="inline text-orange-500"/> Experience
      </h2>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {experience.map((exp, index) => (
          <li key={index} className="mb-10 ml-6">
            {/* Circle marker */}
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900" style={{ backgroundColor: '#f26b38' }}>
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </span>

            {/* Company name */}
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {exp.company}
            </h3>

            {/* Job title and date */}
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {exp.title} • {exp.dateRange}
            </time>

            {/* Bullets */}
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 text-sm">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
