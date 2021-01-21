
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section
import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Fahmi Al-Najjar",
  title: "Hi all, I'm Fahmi",
  subTitle: emoji("A passionate Full Stack Software Engineer 🚀 having an experience of building Web Applications with Python / Django / JavaScript / ReactJS / and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/14-GoMNy38Vxnp_JbtowYTu92iPewqVI2/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/Fahminajjar/",
  linkedin: "https://www.linkedin.com/in/fahminajjar/",
  gmail: "fahmi.najjar@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/fahminajjar/",
  twitter: "https://twitter.com/fahminajjar",
  medium: "https://medium.com/@fahmi.najjar",
  stackoverflow: "https://stackoverflow.com/users/5335642/fahmi-najjar",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK AND SOLVE REAL-WORLD PROBLEMS!",
  skills: [
    emoji("⚡ Develop full-stack web applications"),
    emoji("⚡ Design and develop RESTful APIs"),
    emoji("⚡ Develop highly interactive Frontend / User Interfaces for your web applications"),
    emoji("⚡ Design micro-services and find efficient client-server solutions"),
    emoji("⚡ Automate repetitive work"),
    emoji("⚡ Solve real-world problems")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Ruby",
      fontAwesomeClassname: "far fa-gem"
    },
    {
      skillName: "Rails",
      fontAwesomeClassname: "far fa-gem"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your education background

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Princess Sumaya University for Technology",
      logo: require("./assets/images/psutLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "October 2013 - August 2017",
      desc: "ABET accredited",
      descBullets: [
        "Taught Introduction to Programming using Python course (30 hours) for kids (9th - 11th grades) in the IT labs (codability.net)."
      ]
    },
    {
      schoolName: "European Innovation Academy",
      logo: require("./assets/images/eia-logo.svg"),
      subHeader: "Entrepreneurship",
      duration: "2016",
      desc: "Extreme entrepreneurship program where students from all over the world get the real life experience of building their startup and being an entrepreneur.",
      descBullets: []
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend / Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "90%"
    },
    {
      Stack: "Convert Great Ideas Into Reality",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "Edraak.org",
      companylogo: require("./assets/images/edraakLogo.png"),
      bannerBackground: [70, 164, 166],
      date: "Jan 2018 – Present",
      desc: "Edraak is a massive open online course portal, it offers courses for free to learners worldwide.",
      descBullets: [
        "Develop and maintain Full-Stack web applications in Python3, Django, Flask, HTML & CSS, ReactJS, MySQL, Mongo, and Elasticsearch",
        "Architect micro-services and find efficient client-server solutions"
      ]
    },
    {
      role: "Full Stack Software Engineer (AI)",
      company: "Mawdoo3",
      companylogo: require("./assets/images/mwdoo3Logo.png"),
      date: "July 2017 – Dec 2017",
      desc: "Mawdoo3 AI is a division of Mawdoo3 that specializes in providing Arabic language APIs as a service like Arabic Text-To-Speech, Named Entity, etc.",
      descBullets: [
        "Design and develop applications and APIs using Python3, Flask, Angular, Docker, and AWS",
        "Automate processes and develop scripts to collect and clean data for the AI services"
      ]
    },
    {
      role: "Co-Founder and Software Engineer / Technical Lead",
      company: "Gattaa",
      companylogo: require("./assets/images/gattaaLogo.png"),
      date: "July 2016 – Aug 2017",
      desc: "A peer-to-peer tutoring service that connects students who're struggling with their subjects with other available bright students to help them overcome their struggle.",
      descBullets: [
        "Design and develop RESTful APIs (Ruby on Rails) for the mobile app (IOS & Android)",
        "Design and develop the platform's dashboards and admin panel (AngularJS)",
        "Lead the development team (2 mobile developers and 1 web developer) and make informed decisions on the platform UX and end product"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Jawaker",
      companylogo: require("./assets/images/jawakerLogo.png"),
      date: "May 2015 – Sep 2015",
      desc: "The most popular Middle Eastern card games website.",
      descBullets: [
        "Training on Linux, Git, MVC applications (Ruby on Rails), JavaScript, jQuery, and Elasticsearch"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Fahminajjar", // Change to your github username to view your profile in Contact Section.
  showGithubProfile : "true",  // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/mofkraLogo.png"),
      link: "https://mofkra.com/"
    },
    {
      image: require("./assets/images/dotpngLogo.png"),
      link: "https://dot-png.com/"
    },
    {
      image: require("./assets/images/kaderLogo.jpeg"),
      link: "https://kaderapp.com/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "NYUAD Hackathon 2017, 3rd place",
      subtitle: "The Annual NYUAD International Hackathon is a three-day programming marathon, during which renowned international computer science professors, founders of successful startups, technology professionals, and venture capitalists come together at NYUAD to lead teams of talented computer science students from all over the world (the majority of the students will be from the Arab world), to create mobile and web applications. The teams will develop innovative applications relevant to diverse fields such as HEALTH, education, film, music, business, and science for the benefit of social good in the Arab World. We developed a gamified platform, TARAKEEB is an automated grammar checker to teach Arabic Language.",
      image: require("./assets/images/nyuLogo.png"),
      footerLink: [
        { name: "NYUAD News", url: "https://nyuad.nyu.edu/en/news/latest-news/honors-and-awards/2017/april/networking-app-for-skilled-refugees-wins-first-prize-hackathon.html" },
        { name: "The National News", url: "https://www.thenationalnews.com/business/technology/app-for-syrian-refugee-job-seekers-among-winners-at-abu-dhabi-hackathon-1.82415" }
      ]
    },
    {
      title: "AngelHack Hackathon Amman, 1st place",
      subtitle: "It challenge participants to create/code/design/build a feasible business model for a tech product within only 24 hours. " +
        "With it's 2016 Amman edition we won the 1st place. " +
        "We created \"Afraan\", a marketplace for home cooks to promote their meals and earn revenue. ",
      image: require("./assets/images/angelhackLogo.png"),
      footerLink: [
        { name: "Wamda Blog", url: "https://www.wamda.com/2016/04/foodlancing-app-wins-angelhack-amman-2016" }
      ]
    },
    {
      title: "Medal of Excellence (PSUT)",
      subtitle: "Awarded to students who are academically excellent and had won programming competitions.",
      image: require("./assets/images/psutLogo.png"),
      footerLink: []
    },
    {
      title: "Graduation Project Competition, 1st place",
      subtitle: "descriptionMy graduation project (ZeroToOne) was about developing and assessing student programming skills through a gamified platform.",
      image: require("./assets/images/psutLogo.png"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/edraak-engineering/how-to-build-restful-apis-the-unknown-hero-under-the-hood-part-1-4c1df16c0258",
      title: "How to Build RESTful APIs? The Unknown Hero Under The Hood (Part 1)",
      description: "The Unknown Hero Under The Hood"
    },
    {
      url: "https://medium.com/edraak-engineering/how-to-build-restful-apis-the-unknown-hero-under-the-hood-part-2-fd2190455d4a",
      title: "How to Build RESTful APIs? (Part 2)",
      description: "Nine easy steps to build your RESTful API using Flask"
    },
    {
      url: "https://medium.com/edraak-engineering/personalization-in-online-learning-platforms-67519cf8d49d",
      title: "Personalization on Online Learning Platforms",
      description: "The Art of Recommendation Systems"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+962 797371710",
  emailAddress: "fahmi.najjar@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName : "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
