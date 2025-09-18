import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/avatar.jpeg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Roboto_Mono } from "next/font/google";
import EducationTimeline from "@/components/education";
import ExperienceTimeline from "@/components/experiences";
import PublicationsTimeline from "@/components/publications";

export default function Home() {
  return (
    <>
      <Head>
        <title>Glitche - Resume</title>
        <meta name="description" content="Resume page for Glitche" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />
      </Head>
      <div className="container">
        <main>
          <div className="flex flex-col items-center px-8 gap-6">
            {/* Top row - centered greeting */}
            <h2 className="text-xl font-bold text-center">
              Hi, I’m Mostafa Shabani 👋
            </h2>

            {/* Bottom row - responsive layout */}
            <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-3xl">
              {/* Left - Image */}
              <div className="flex justify-center md:justify-center">
                <Image
                  src={profilePic}
                  alt="Profile"
                  className="rounded-full"
                  width={150}
                  height={150}
                />
              </div>

              {/* Right - Text */}
              <div className="text-gray-200 flex-1">
                <p className="text-lg text-justify">
                  Hi! I’m Mostafa Shabani, passionate about applying machine
                  learning to real-world problems. I hold a Ph.D. in Machine
                  Learning from Aarhus University.
                </p>
                <div
                  className="flex flex-wrap gap-4 mt-4"
                  style={{ justifyContent: "center" }}
                >
                  {/* Denmark */}
                  <div className="flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-md">
                    <span>🇩🇰</span>
                    <span>Live in Denmark</span>
                  </div>

                  {/* Education */}
                  <div className="flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-md">
                    <span>🎓</span>
                    <span>Studied at Aarhus University</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "10px",
              color: "#fff",
              padding: "10px",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <a
              href="https://github.com/MSTSHB"
              target="_blank"
              className="flex flex-col items-center text-white no-underline text-xs"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
              <span>MSTSHB</span>
            </a>

            <a
              href="https://scholar.google.com/citations?user=_hu2c7MAAAAJ&hl=en#d=gs_hdr_drw&t=1758132923585"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white no-underline text-xs"
            >
              <FontAwesomeIcon icon={faGraduationCap} className="icon" />
              <span>Google Scholar</span>
            </a>

            <a
              href="https://www.linkedin.com/in/Mostafa-Shabani"
              target="_blank"
              className="flex flex-col items-center text-white no-underline text-xs"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
              <span>Mostafa-Shabani</span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center text-white no-underline text-xs"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>mst.[last_name][at]gmail.com</span>
            </a>

            <span className="flex flex-col items-center text-white text-xs">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <span
                style={{
                  backgroundColor: "#f26b38",
                  borderRadius: "4px",
                  padding: "2px 2px",
                }}
              >
                Aarhus, Denmark
              </span>
            </span>
          </div>

          <div className="my-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <EducationTimeline />
              <div>
                <ExperienceTimeline />
              </div>
              <div>
                <PublicationsTimeline />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="bg-gray-500/50">
            © 2025 MstShb. All rights reserved.
          </div>
        </footer>
        <div className="line top"></div>
        <div className="line bottom"></div>
        <div className="line left"></div>
        <div className="line right"></div>
        {/* Empty 3-column grid for future use */}
      </div>
    </>
  );
}
