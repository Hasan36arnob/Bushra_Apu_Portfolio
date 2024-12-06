// import { useState, useEffect } from "react";
// import { Github, Linkedin, Mail, Menu, X, ExternalLink } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

import { useState, useEffect } from "react";
import { Linkedin, GraduationCap, Menu, X, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: false,
  //     mirror: true,
  //   });
  // }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const experiences = [
    {
      company: "WhiteDoor Partners Private Limited",
      position: "Senior Grant Consultant",

      duration: "Nov 2024 - Present ",
      description:
        " Fintech, e-commerce, agri tech, water and environment related tech, climate change finances ",
    },
    {
      company: "WaterAid",
      position: "Technical Specialist",
      duration: "Apr 2024 - Oct 2024 · 7 mos",
      description: "Water supply, Sanitation and Hygiene ",
    },

    {
      company: "THiNK · Contract",
      position: "Consultant",
      duration: "Jan 2024 - Mar 2024 · 3 mos",
      description:
        "IOT and AI based solutionCarbon Capture and Carbon Accounting IOT based monitoring and data collection system",
    },
    {
      company: "The University of Texas at Austin · Part-time",
      position: "Graduate Research Assistant",

      duration: "Sep 2022 - Dec 2022 · 4 mos",
      description:
        "Research Support · Python (Programming Language) · Data Analytics",
    },
    {
      company: "East West University · Part-time",
      position: "Adjunct Faculty- Civil Engineering ",

      duration: " Oct 2021 - May 2022 · 8 mos",
      description:
        " Public Speaking · Spoken English · Teaching · Hydrology · Microsoft PowerPoint · Project Management · Bill of Quantities (BOQ)",
    },
    {
      company: "Institute of Water Modelling",
      position: "Associate Specialist - Climate Change Cell ",

      duration: " Oct 2021 - May 2022 · 8 mos",
      description:
        "Spatial Planning · Training Courses · Coastal Processes · Environmental Policy · Policy Advice",
    },
    {
      company: "Institute of Water Modelling",
      position: "Junior Specialist, Climate Change Cell ",

      duration: " Full-time Mar 2019 - Aug 2019 · 6 mos",
      description:
        "Business Development · workshop arrangement · Strategic Planning · Problem Solving · Intercultural Skills · Teamwork · Leadership · Data Analytics · Technical Leadership · Project Implementation · Developing Countries ",
    },
    {
      company: "Institute of Water Modelling",
      position: "Junior Specialist, Coast-Port and Estuary Division ",

      duration: "Oct 2016 - Mar 2019 · 2 yrs 6 mos",
      description:
        "Spatial Planning · Training Courses · Coastal Processes · Environmental Policy · Policy Advice",
    },
    {
      company:
        "Center for Environmental and Geographic In formation Services (CEGIS) · Full-time",
      position: " Professional, Climate Change Study Division",

      duration: " Jan 2011 - Aug 2013 · 2 yrs 8 mos",
      description:
        " impact assessment of climate change induced hazards like drought, flood report preparation, climate data analysis, climate model data downscaling, impact model simulations (drought, flood) ",
    },
    {
      company:
        "Military Institute of Science and Technology (MIST) · Part-time ",
      position: "  Lecturer Civil Engineering Department",

      duration: " Jun 2011 - Dec 2011 · 7 mos",
      description:
        " Public Speaking · Spoken English · Teaching · Microsoft PowerPoint · Fluid Mechanics · Civil Engineering Drafting",
    },
  ];

  const education = [
    {
      school: "Independent University, Bangladesh",
      degree: " Master's of Science, Economics ",
      duration: "Sep 2023 - Sep 2025",
      description:
        "Development Economics · Macroeconomics · Microeconomics · Econometrics · Institutional Business Development",
    },
    {
      school: "IHE Delft (Institute for Water Education)",
      degree: "Short course, Coastal systems ",
      duration: "Feb 2020 - Mar 2020",
      description:
        "Coastal Processes · Coastal Zone Management · Coastal Engineering · Coastal Wetland Protection · Nature Based Solution (NBS)",
    },
    {
      school: "Ghent University",
      degree: "Postgraduate Degree, Weather and Climate Modelling",
      duration: " Sep 2015 - Sep 2016",
      description: "Mathematical Programming · Data Analytics",
    },
    {
      school: "KU Leuven",
      degree: "Master's Degree, Water Resource Engineering",
      duration: "2013-2016",
      description:
        "Grade: VLIR UOS scholarship holder ; graduation with distinction",
    },
    {
      school: "Military Institute of Science and Technology (MIST) ",
      degree: "BSc, Civil Engineering ",
      duration: "2007-2010",
      description: "Grade: 3.67/4.00",
    },
  ];

  const Certifications = [
    {
      title: "Graduate Record Examination (GRE)",
      description: "Credential ID 305 out of 340",
    },
    {
      title: " TOEFL iBT",
      description:
        "Credential ID 105 out of 120 (Reading 30/30, Listening 26/30, Writing 26/30, speaking 23/30)",
    },
    {
      title: "Dr. JSP Yadav Best Paper Award ",
      description:
        " Indian Society of Coastal Agricultural Research (ISCAR) ICAR-CSSRI, Regional Research Statio",
    },
  ];

  const projects = [
    {
      title: "Proposal Development- emerging contaminants in water",
      description: "PFAS detection in water sample",
      link: "#",
    },
    {
      title:
        "Quality Program Standard for WASH intervention in WaterAid Projects ",
      description: "Associated with WaterAid",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-400">
      {/* Navigation */}
      <nav className="bg-gray-300 shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold">Bushra M.D. </span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a
                href="#experience"
                className="text-gray-600 hover:text-gray-900"
              >
                Experience
              </a>
              <a
                href="#education"
                className="text-gray-600 hover:text-gray-900"
              >
                Education
              </a>
              <a
                href="#Certifications"
                className="text-gray-600 hover:text-gray-900"
              >
                Certifications
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <div
              className="px-2 pt-2 pb-3 space-y-1"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                About
              </a>
              <a
                href="#experience"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Experience
              </a>
              <a
                href="#education"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Education
              </a>
              <a
                href="#Certifications"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Certifications
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Projects
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 mt-16">
        {/* Hero Section */}
        <section
          id="about"
          className="text-center py-20 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-800">
            Bushra M.D.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experienced Water Resources Engineer with 12+ years in business
            development, project management, data analytics, and consultancy in
            water, environment, and climate, alongside expertise in education,
            proposal writing, and technical reporting.
          </p>
          <div
            className="flex justify-center space-x-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://www.linkedin.com/in/bushra-monowar-d-88b8091b/"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-transform"
            >
              <Linkedin size={36} />
            </a>
            <a
              href="https://scholar.google.com/citations?user=jkWVzUQAAAAJ&hl=en"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GraduationCap size={36} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bushra.monowar@gmail.com"
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={36} />
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <h3 className="text-2xl font-semibold text-gray-800">
                  {exp.position}
                </h3>
                <p className="text-gray-700 mb-2">
                  {exp.company} • {exp.duration}
                </p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.school}
                </h3>
                <p className="text-gray-700 mb-2">
                  {edu.degree} • {edu.duration}
                </p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="Certifications" className="py-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Licenses & Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-300 border-t">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © 2024 Bushra M.D. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;