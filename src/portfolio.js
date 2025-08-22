const settings = {
  isSplash: false,
};

const seo = {
  title: "Haura's Portfolio",
  description:
    "Certified Human Capital Officer, Industrial Engineering graduate, skilled in HR solutions, competency modeling, performance management, and organizational improvement.",
  og: {
    title: "Haura Haya Santosa Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Haura Haya Santosa",
  logo_name: "HauraHayaSantosa",
  nickname: "Haya",
  subTitle:
    "Certified Human Capital Officer, Industrial Engineering graduate, skilled in HR solutions, competency modeling, performance management, and organizational improvement.",
  resumeLink:
    "https://drive.google.com/file/d/1GXCJsnUM-v4oHQ3-WSZKznqgvGkNZjvA/view?usp=sharing"
};

const socialMediaLinks = [

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/haura-haya-santosa/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:haura.hayasantosa@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
//  {
//    name: "X-Twitter",
//    link: "https://twitter.com/ashutosh_1919",
//    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
//    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
//  },
//  {
//    name: "Facebook",
//    link: "https://www.facebook.com/laymanbrother.19/",
//    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
//    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
//  },
//  {
//    name: "Instagram",
//    link: "https://www.instagram.com/layman_brother/",
//    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
//    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
//  },
];

const skills = {
  data: [
    {
      title: "Organization Development (OD)",
      fileName: "DataScienceImg",
      skills: [
        "🌟 Organization Design – Designing organizational structures, conducting job analysis and evaluation, developing career paths and succession planning, and optimizing workforce planning.",
        "🌟 Organization Process & System – Designing and streamlining business processes, conducting workload analysis, and integrating HRIS/policy development to enhance efficiency and alignment.",
        "🌟 Competency & Capability Framework – Building organizational competency frameworks to align people capability with strategic goals.",
        "🌟 Performance & Change Management – Designing performance management systems (KPI, OKR, 360° feedback), conducting organizational diagnosis, and facilitating change management initiatives.",
      ],
      softwareSkills: [
        {
          skillName: "Power Point",
          imageSrc: "powerpoint.png",
        },
        {
          skillName: "Word",
          imageSrc: "word.png",
        },
        {
          skillName: "Excel",
          imageSrc: "excel.png",
        },
                {
          skillName: "Visio",
          imageSrc: "visio.png",
        },
        {
          skillName: "Tableau",
          imageSrc: "tableau.png",
        },
        {
          skillName: "Draw.io",
          imageSrc: "drawio.png",
        },
      ],
    },
    {
      title: "People Development (PD / L&D)",
      fileName: "FullStackImg",
      skills: [
        "🌟 Learning Needs Analysis – Identifying skill gaps through TNA to ensure learning aligns with organizational priorities.",
        "🌟 Learning Design & Delivery – Creating learning programs using ADDIE, blended learning, and e-learning approaches.",
        "🌟 Growth Enablement – Developing Individual Development Plans (IDP), facilitating coaching & mentoring, and evaluating learning impact (Kirkpatrick).",
      ],
      softwareSkills: [
        {
          skillName: "Power Point",
          imageSrc: "powerpoint.png",
        },
        {
          skillName: "Word",
          imageSrc: "word.png",
        },
        {
          skillName: "Excel",
          imageSrc: "excel.png",
        },
      ],
    },
    {
      title: "Talent Management",
      fileName: "CloudInfraImg",
      skills: [
        "🌟 Talent Mapping & Succession Planning – Identifying high potentials, building succession pipelines, and preparing future leaders.",
        "🌟 Career Development & Engagement – Designing career pathing, fostering employee engagement, and implementing retention strategies.",
        "🌟 Recognition & Retention – Supporting reward and recognition initiatives to sustain long-term talent commitment and organizational performance.",
      ],
      softwareSkills: [
        {
          skillName: "Power Point",
          imageSrc: "powerpoint.png",
        },
        {
          skillName: "Word",
          imageSrc: "word.png",
        },
        {
          skillName: "Excel",
          imageSrc: "excel.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      skillName: "BNSP",
      imageSrc: "skills/bnsp.png",
    },
    {
      skillName: "LinkedIn Learning",
      imageSrc: "skills/linkedinlearning.png",
    },
    {
      skillName: "Udemy",
      imageSrc: "skills/udemy.png",
    },
    {
      skillName: "Human Capital University",
      imageSrc: "skills/hcu.png",
    },
    {
      skillName: "Kelas HR",
      imageSrc: "skills/kelashr.png",
    },
    {
      skillName: "Gadjian Academy",
      imageSrc: "skills/gadjian.png",
    },
        {
      skillName: "Pacmann Academy",
      imageSrc: "skills/pacman.png",
    },
    {
      skillName: "Quantum HR Indonesia",
      imageSrc: "skills/quantum.png",
    },
    {
      skillName: "Edugate",
      imageSrc: "skills/edugate.png",
    },
        {
      skillName: "Laksana Pedia",
      imageSrc: "skills/laksana.png",
    },
    {
      skillName: "Telkom University Language Center",
      imageSrc: "skills/tulc.png",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Telkom University",
      subtitle: "Industrial Engineering (Focused: Human Capital Management)",
      logo_path: "telkom.png",
      alt_name: "Telkom University",
      duration: "2019 - 2023",
      descriptions: [
        "🌟 GPA: 3.11 / 4.00",
        "🌟 Thesis: Proposed Design of Flexible Working Arrangement Based on Identification of Employee Characteristic using Cluster Analysis at XYZ Faculty",
        "🌟 ⁠Course Taken: Human Resource Management, Human Resource Planning, Talent Management, Industrial Organization Management System, Industrial Psychology, Work System Design and Ergonomic, Project Management",
      ],
      website_link: "https://telkomuniversity.ac.id/",
    },
    {
      title: "SMA Cipta Cendikia",
      subtitle: "Science and Mathematic (Focused: Physics)",
      logo_path: "smacendikia.png",
      alt_name: "SMA Cipta Cendikia",
      duration: "2016 - 2019",
      descriptions: [
        "🌟 Participant of National Science Olympiad in Physics (District Level – Bogor Regency) 2017–2018",
        "🌟 Achieved 1st rank in class every semester",
      ],
      website_link: "https://www.school.ciptacendikia.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified of Human Capital Officer",
      subtitle: "BNSP",
      logo_path: "bnsp.png",
      certificate_link:
        "https://drive.google.com/file/d/1SUZ48N4HFDbX8tIIsXHXrD58HsmoSqlf/view?usp=sharing",
      alt_name: "BNSP",
      color_code: "#fefefec8",
    },
    {
      title: "HR Competency",
      subtitle: "Human Capital University",
      logo_path: "hcu.png",
      certificate_link:
        "https://drive.google.com/file/d/1AZ3LKEkKfmdDbgqUYVhL7DjqXsZZlBp3/view?usp=sharing",
      alt_name: "Human Capital University",
      color_code: "#fefefec8",
    },
    {
      title: "Organization Development Strategy ",
      subtitle: "KelasHR",
      logo_path: "kelashr.png",
      certificate_link:
        "https://drive.google.com/file/d/1utle0w1hOKzMC9K6w13Q7_5rUjTwsGsw/view?usp=drive_link",
      alt_name: "KelasHR",
      color_code: "#fefefec8",
    },
    {
      title: "Organization Learning and Development",
      subtitle: "LinkedIn Learning",
      logo_path: "linkedinlearning.png",
      certificate_link:
        "https://drive.google.com/file/d/1CTohI8uLlzKG527vES4weHXChTycXvEV/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "#fefefec8",
    },
    {
      title: "Cara Restrukturisasi Organisasi",
      subtitle: "Gadjian Academy",
      logo_path: "gadjian.png",
      certificate_link:
        "https://drive.google.com/file/d/1LM66tcrmgqa2jy8d2wii4rTI-g7Huz0i/view?usp=sharing",
      alt_name: "Gadjian Academy",
      color_code: "#fefefec8",
    },
    {
      title: "Training Need Analysis",
      subtitle: "KelasHR",
      logo_path: "kelashr.png",
      certificate_link:
        "https://drive.google.com/file/d/1oOeupR7Bnc1DaEFKgCqLn6IIKbYsaWh_/view?usp=sharing",
      alt_name: "KelasHR",
      color_code: "#fefefec8",
    },
    {
      title: "Manajemen Perubahan untuk HR Navigasi Transformasi Organisasi",
      subtitle: "Laksana Pedia",
      logo_path: "laksana.png",
      certificate_link:
        "https://drive.google.com/file/d/1THXvYI2ci4mLMOzXteBVdQd9dVi_wFpk/view?usp=sharing",
      alt_name: "Laksana Pedia",
      color_code: "#fefefec8",
    },
    {
      title: "KPI Based on Job Desc",
      subtitle: "Quantum HR Indonesia",
      logo_path: "quantum.png",
      certificate_link:
        "https://drive.google.com/file/d/1xl4j7RYWGvZBNDtYkyiCHhY4PNeveD9T/view?usp=sharing",
      alt_name: "Quantum HR Indonesia",
      color_code: "#fefefec8",
    },
    {
      title: "Workload Analysis (Analisis Beban Kerja)",
      subtitle: "KelasHR",
      logo_path: "kelashr.png",
      certificate_link:
        "https://drive.google.com/file/d/1NuT7yUY43LT48Ge583nfPxU9A9U9bIOi/view?usp=sharing",
      alt_name: "KelasHR",
      color_code: "#fefefec8",
    },
    {
      title: "Six Sigma Implementation in HR Function",
      subtitle: "KelasHR",
      logo_path: "kelashr.png",
      certificate_link:
        "https://drive.google.com/file/d/16TvJYdFVyqPzsGu1PMq6CbKLtYdf_a9N/view?usp=sharing",
      alt_name: "KelasHR",
      color_code: "#fefefec8",
    },
    {
      title: "Basic Fundamental of HR Analytics",
      subtitle: "Gadjian Academy",
      logo_path: "gadjian.png",
      certificate_link:
        "https://drive.google.com/file/d/1gjNBFvwCbcxh17wUZ_1T4NFjf8D2lqg1/view?usp=sharing",
      alt_name: "Gadjian Academy",
      color_code: "#fefefec8",
    },
    {
      title: "HR as Strategic Business Partner",
      subtitle: "LinkedIn Learning",
      logo_path: "linkedinlearning.png",
      certificate_link:
        "https://drive.google.com/file/d/1St2SEiUlmzwElPFznU9LwDV2yNi0k8XZ/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "#fefefec8",
    },
        {
      title: "Membuat Dashboard HR dengan Tableau",
      subtitle: "Pacmann Academy",
      logo_path: "pacman.png",
      certificate_link:
        "https://drive.google.com/file/d/1hYzo4a_AkBh2VJXRzz-yXKU6E0f-kvri/view?usp=sharing",
      alt_name: "Pacmann Academy",
      color_code: "#fefefec8",
    },
    {
      title: "English Proficiency Test",
      subtitle: "Telkom University Language Center",
      logo_path: "tulc.png",
      certificate_link:
        "https://drive.google.com/file/d/1qCXrgMSFepwjRzwacys23_npTqzQM6uP/view?usp=sharing",
      alt_name: "Telkom University Language Center",
      color_code: "#fefefec8",
    },
    {
      title: "Compensation and Benefit",
      subtitle: "Human Capital University",
      logo_path: "hcu.png",
      certificate_link:
        "https://drive.google.com/file/d/1r8dAyznOCLZV_-4KlsjHaOmywZkmoBoe/view?usp=drive_link",
      alt_name: "Human Capital University",
      color_code: "#fefefec8",
    },
    {
      title: "Human Resource: Strategy Workforce",
      subtitle: "LinkedIn Learning",
      logo_path: "linkedinlearning.png",
      certificate_link:
        "https://drive.google.com/file/d/1gdgQX9D8Dyhgk76DVU6m7Q8LKUbUbNMp/view?usp=sharing",
      alt_name: "LinkedIn Learning",
      color_code: "#fefefec8",
    },
    {
      title: "SAP HR050 - Business Process in Human Capital Management",
      subtitle: "Edugate",
      logo_path: "edugate.png",
      certificate_link:
        "https://drive.google.com/file/d/12Vn9hBIPuLfOqYDy_1q08fkInjK2rPop/view?usp=sharing",
      alt_name: "Edugate",
      color_code: "#fefefec8",
    },
    {
      title: "Training and Development",
      subtitle: "Human Capital University",
      logo_path: "hcu.png",
      certificate_link:
        "https://drive.google.com/file/d/1gdgQX9D8Dyhgk76DVU6m7Q8LKUbUbNMp/view?usp=sharing",
      alt_name: "Human Capital University",
      color_code: "#fefefec8",
    },
        {
      title: "Organization Development - How to Diagnose Organization",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/12Vn9hBIPuLfOqYDy_1q08fkInjK2rPop/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#fefefec8",
    },
    {
      title: "Mendesign Evaluasi Jabatan & Penyusunan Struktur Gaji",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1gdgQX9D8Dyhgk76DVU6m7Q8LKUbUbNMp/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#fefefec8",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have hands-on experience in Human Capital with a strong focus on Organization and People Development, contributed to organizational transformation projects, competency framework design, career pathing, and HRIS development. I have also designed and implemented learning programs, training evaluations, and individual development plans to support employee growth. My internship at Telkomsel strengthened my skills in learning management, e-learning design, and benchmarking global training programs. Additionally, I have been actively involved in student organizations, where I supported event management, recruitment, and team leadership.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Human Capital – Organization and People Development Officer",
          company: "PT Indonesia Indicator.",
          company_url: "https://www.indonesiaindicator.com/",
          logo_path: "i2.png",
          duration: "Sept 2024 - Apr 2025",
          location: "South Tangerang, Indonesia",
          description:
            "Designed and implemented internal and intercompany business processes, organizational structures, job descriptions, and job evaluations to support strategic alignment and operational efficiency. Developed comprehensive technical skill assessments for 24 positions, integrating conceptual, case-based, and supported company-wide performance appraisals and skill mapping for over 200 employees, ensuring alignment between individual capabilities and organizational goals. Conducted learning needs analyses across divisions to identify competency gaps and enhance team and individual performance through development programs. Designed Individual Development Plans (IDP) to align employee growth with organizational goals. Contributed to the design and development of competency-based training modules using the ADDIE framework to support continuous learning and performance improvement. Participated in the end-to-end planning, coordination, execution, evaluation, and documentation of three training programs, ensuring smooth implementation and high participant engagement. Designed a project documentation system aligned with business processes and served as the person in charge for managing records of 70+ projects, ensuring proper integration into the company’s internal system.",
            color: "#000000",
        },
        {
          title: "Human Capital – Organization Development Officer",
          company: "PT Indonesia Indicator.",
          company_url: "https://www.indonesiaindicator.com/",
          logo_path: "i2.png",
          duration: "Feb 2024 - Sept 2024",
          location: "South Tangerang, Indonesia",
          description:
            "Supported complex organizational transformation initiatives aimed at enhancing operational efficiency and fostering innovation. Identified organizational performance barriers through interviews and surveys to drive productivity improvement. Conducted research and benchmarking on industry best practices to generate actionable recommendations tailored to the organization’s transformation objectives. Developed a comprehensive competency framework for 24 job positions, covering both technical and non-technical skills, aligned with organizational goals and employee development plans. Designed and implemented employee career path systems, including job rotation and promotion frameworks, integrated with competency assessments and performance appraisals. Designed, implemented, and led the development of an integrated Task Management System and Human Resource Information System (HRIS), incorporating workload calculation to optimize resource allocation and ensure seamless integration of organizational structure, job data, performance, and development metrics.",
            color: "#000000",
        },
        {
          title: "Human Capital – Organization Development Officer (Freelance)",
          company: "PT Indonesia Indicator.",
          company_url: "https://www.indonesiaindicator.com/",
          logo_path: "i2.png",
          duration: "Nov 2023 - Feb 2024",
          location: "South Tangerang, Indonesia",
          description:
            "Reviewed and researched methodologies to support organizational transformation in areas such as manpower planning, performance management, and talent development. Supported the planning and execution of four On-the-Job Training (OJT) programs and assisted in aligning team OKRs with strategic business priorities for two departments. Designed and implemented performance appraisal systems, utilizing 360-degree feedback for managerial levels and KPI/OKR-based evaluations for employee levels.",
            color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Learning Management",
          company: "PT Telekomunikasi Selular (Telkomsel)",
          company_url: "https://career.telkomsel.com/",
          logo_path: "tiktok_logo.png",
          duration: "July 2022 - Sept 2022",
          location: "Jakarta, Indonesia",
          description:
            "Curated and developed over 10 e-learning materials aligned with targeted employee competencies for internal staff and MBKM internship participants. Supported the data entry and management of academic transcripts for more than 500 MBKM program participants. Researched and analyzed 12 offline and hybrid course offerings from top 25 QS-ranked US universities to align training programs with critical corporate capabilities.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Organization",
      experiences: [
        {
          title: "Enterprise System Engineering (ENSYSE) Laboratory - Practicum and Laboratory Assistant",
          company: "Telkom University",
          company_url: "https://telkomuniversity.ac.id/",
          logo_path: "telkom.png",
          duration: "Feb 2022 - Juny 2023",
          location: "Bandung, Indonesia",
          description:
            "Assisted and assessed over 750 students in 14 practicum modules by utilizing a Learning Management System (LMS) for administering pre-tests, laboratory sessions, and conducting post-assessments. Led a team of 3–6 members to develop practicum modules for Information Systems Analysis and Design, Application Development, and Algorithm & Programming. Coordinated and conducted meetings with lecturers to ensure readiness and alignment across three practicum modules.",
          color: "#4285F4",
        },
        {
          title: "Industrial Event and Competition (INVENTION) - Secretary",
          company: "Telkom University",
          company_url: "https://telkomuniversity.ac.id/",
          logo_path: "telkom.png",
          duration: "July 2021 - Juny 2022",
          location: "Bandung, Indonesia",
          description:
            "Managed the preparation and administration of all formal documents, including 5 proposals, 4 MoUs, 100+ official letters, 3 Terms of Reference (TORs), and 50+ Minutes of Meeting (MoMs). Oversaw the recruitment administration of 200+ organizational committee members and outsourced personnel, including CV review, interview coordination, and conducting interviews. Supported executive leadership in strategic decision-making and management of over 100 committee members during an 11-month period.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Haura.png",
    description:
      "Passionate about helping people and organizations grow. I'm seeking opportunities to contribute in Organization Development, Learning, and People Development, and I'm enthusiastic to discuss how I can add value to growth and development initiatives.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
