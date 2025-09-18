import React from "react";
import { FaBook } from "react-icons/fa";

export default function PublicationsTimeline() {
  const publications = [
    {
      venue: "Journal of Marketing Analytics",
      title:
        "New approach to customer segmentation based on changes in customer value",
      year: "2015",
      authors: "Hosseini, M., & Shabani, M. (2015)",
      description:
        "Introduced a novel method for customer segmentation by analyzing changes in customer lifetime value, providing actionable insights for marketing strategies",
    },
    {
      venue: "Kybernetes",
      title:
        "A new methodology for customer behavior analysis using time series clustering: A case study on a bank’s customers",
      year: "2021",
      authors: "Hossein Abbasimehr, Mostafa Shabani (2021)",
      description:
        "A new methodology is presented based on time series clustering to extract dominant behavioral patterns of customers over time. Implemented using bank customers’ transactions data",
    },
    {
      venue: "Pattern Recognition",
      title:
        "Augmented Bilinear Network for Incremental Multi-Stock Time-Series Classification",
      year: "2023",
      authors:
        "Mostafa Shabani, D. T. Tran, Juho Kanniainen, Alexandros Iosifidis (2023)",
      description:
        "Proposed an augmented bilinear neural network for incremental classification of stock market time series, improving the model's adaptability to new data and concept drift",
    },
    {
      venue: "EUSIPCO 2022",
      title:
        "Multi-head Temporal Attention-Augmented Bilinear Network for Financial Time Series Prediction",
      year: "2022",
      authors:
        "Mostafa Shabani, D. T. Tran, Marco Magris, Juho Kanniainen, Alexandros Iosifidis (2022)",
      description:
        "Introduced a novel bilinear neural network architecture enhanced with multi-head temporal attention for predicting financial time series",
    },
  ];

  return (
    <div
      className="md:col-span-1 px-8"
      style={{ textAlign: "left", direction: "ltr" }}
    >
      <h2
        className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white"
        style={{ color: "#f26b38" }}
      >
        <FaBook className="inline text-orange-500" /> Selected Publications
      </h2>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {publications.map((pub, index) => (
          <li key={index} className="mb-10 ml-6">
            {/* Circle marker */}
            <span
              className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900"
              style={{ backgroundColor: "#f26b38" }}
            >
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>

            {/* Venue */}
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {pub.venue}{" "}
              <span className="text-sm font-normal text-gray-400 dark:text-gray-500">
                ({pub.year})
              </span>
            </h3>

            {/* Paper title */}
            <p className="mb-1 text-base font-medium text-gray-700 dark:text-gray-300">
              {pub.title}
            </p>

            {/* Authors */}
            <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              {pub.authors}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {pub.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
