
import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function EducationTimeline() {
  // Define education constant
  const education = [
    {
      school: "Aarhus University, Aarhus, Denmark",
      degree: "PhD in Machine Learning",
      dateRange: "Nov 2022",
      achievements: [
        "Deep learning",
        "Financial Time Series Prediction",
        "Recurrence Analysis",
        "Bayesian Optimization",
      ],
    },
    {
      school: "K. N. Toosi University of Technology, Tehran, Iran",
      degree: "MSc in Information Systems",
      dateRange: "Sept 2014",
      achievements: [
        "Time Series Segmentation",
        "Churn Prediction",
        "Customer Lifetime Value Analysis",
      ],
    },
    {
      school: "Sadjad University, Mashhad, Iran",
      degree: "BSc in Information Technology Engineering",
      dateRange: "Sept 2010",
      achievements: [
        "Data Mining",
        "Ant Colony Optimization (ACO)",
      ],
    },
  ];

  return (
    <div className="md:col-span-1" style={{textAlign:'left', direction:'ltr'}}>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white" style={{color:'#f26b38'}}>
        <FaGraduationCap className="inline text-orange-500"/> Education 
      </h2>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {education.map((edu, index) => (
          <li key={index} className="mb-10 ml-6">
            {/* Circle marker */}
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900" style={{backgroundColor:'#f26b38'}}>
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

            {/* School name */}
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {edu.school}
            </h3>

            {/* Degree and date */}
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {edu.degree} • {edu.dateRange}
            </time>

            {/* Achievements */}
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 text-sm">
              {edu.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
