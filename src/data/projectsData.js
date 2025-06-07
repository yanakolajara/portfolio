export const projectData = [
  {
    name: 'Scriptum',
    route: 'scriptum',
    snapshot: 'project_scriptum.png',
    description:
      'An AI-powered journaling platform that transforms daily reflections into personalized entries through natural conversations with a digital assistant. Scriptum blends intelligent summarization, emotional support, and secure multi-factor authentication to help users remember, reflect, and grow.',
    version: 'Under development',
    variables: {
      collaborative: false,

      creationDate: '01-05-2025',
    },
    tools: [
      'React.js',
      'Express.js',
      'Node.js',
      'PostgreSQL',
      'Zod',
      'Socket.IO',
      // 'Firebase (Auth)',
      // 'Google Gemini API',
      // 'TailwindCSS',
      // 'Framer Motion',
    ],
    links: {
      live: 'https://scriptum-app.vercel.app',
      frontEndRepo: 'https://github.com/yanakolajara/Scriptum/tree/main/client',
      backEndRepo: 'https://github.com/yanakolajara/Scriptum/tree/main/server',
      wireframes:
        'https://www.figma.com/design/TiDNrdJ7KqqwAB6vD3AuEc/AI-Journal-Wireframes?node-id=0-1&p=f&t=ICA1iXmwfOrS8Z3I-0',
      managingTool:
        'https://www.notion.so/joinpursuit/Scriptum-15fd2512d7ba8051ac3cf98d95ead821?source=copy_link',
      other: [],
    },
  },
  {
    name: 'Reverb clone',
    route: 'reverb-clone',
    snapshot: 'project_reverb-clone.png',
    description:
      'A clone of the Reverb.com homepage, with a focus on replicating the front-end design using plain CSS. The backend is currently under development.',
    version: 'Under development',
    variables: {
      collaborative: false,
      creationDate: '04-01-2025',
    },
    tools: [
      'React.js',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Node.js',
      'Vite',
      'Axios',
      'React Router',
      'CSS',
    ],
    links: {
      live: '',
      frontEndRepo:
        'https://github.com/yanakolajara/l3_v3_e-commerce_site/tree/main/client',
      backEndRepo:
        'https://github.com/yanakolajara/l3_v3_e-commerce_site/tree/main/server',
      wireframes: '',
      managingTool: '',
      other: [],
    },
  },

  // {
  //   name: 'Get it done',
  //   route: 'get-it-done',
  //   snapshot: 'project_get-it-done.png',
  //   description: '',
  //   variables: {
  //     collaborative: false,

  //     creationDate: '03-12-2024',
  //   },
  //   tools: ['React.js', 'Express.js', 'Node.js', 'PostgreSQL', 'Sass'],
  //   links: {
  //     live: '',
  //     frontEndRepo: 'https://github.com/yanakolajara/get-it-done-app-frontend',
  //     backEndRepo: 'https://github.com/yanakolajara/get-it-done-app-backend',
  //     wireframes:
  //       'https://www.figma.com/design/ITvAgUjjnxyIyTQ4iqq8Qm/Untitled?node-id=0-1&t=bl5K0l3agfdE6jLN-0',
  //     managingTool: '',
  //     other: [],
  //   },
  // },
  {
    name: 'Habit Flow',
    route: 'habit-flow',
    snapshot: 'project_habit-flow.png',
    description:
      "Habit Flow is a web application designed to help users build and maintain healthy habits effortlessly. Upon creating an account, users are presented with a selection of pre-created healthy habits, such as drinking enough water or sleeping more than 8 hours. Users can choose any number of these habits to focus on. The application allows users to track their progress over time by logging whether they completed the task each day. A unique feature of Habit Flow is the option to log attempts, allowing users to mark tasks as 'tried', acknowledging their effort even if they didn't fully complete the task.",

    version: 'v1.0.0',
    variables: {
      collaborative: false,

      creationDate: '08-15-2023',
    },
    tools: [
      'React.js',
      'Express.js',
      'Node.js',
      'PostgreSQL',
      'Bootstrap',
      'Charts.css',
      'Bcryptjs',
      'Jsonwebtoken',
    ],
    links: {
      live: 'https://habit-flow.netlify.app/',
      frontEndRepo: 'https://github.com/yanakolajara/HabitFlow',
      backEndRepo: 'https://github.com/yanakolajara/HabitFlow-backend',
      wireframes: '',
      managingTool:
        'https://trello.com/invite/b/BkfRKqFG/ATTI847150401955e98740b3845450f3faebA21EFEC2/habit-flow-app',
      other: [],
    },
  },
  {
    name: 'Tuner App',
    route: 'tuner-app',
    snapshot: 'project_tuner-app.png',
    description:
      'A full-stack application that allows users to create and manage their own music playlists. The application features a front-end built with React and a back-end powered by Express.js and PostgreSQL. Users can perform CRUD operations (Create, Read, Update, Delete) on songs, view a list of all songs, and see detailed information for each song. The app also includes features for sorting songs alphabetically or by favorite status.',
    version: 'v1.0.0',
    variables: {
      collaborative: false,
      creationDate: '',
    },
    tools: [
      'React.js',
      'Express.js',
      'Node.js',
      'PostgreSQL',
      'React Router',
      'Axios',
      'Cypress',
      'Jest',
      'Dotenv',
      'Cors',
      'pg-promise',
    ],
    links: {
      live: '',
      frontEndRepo:
        'https://github.com/yanakolajara/tuner-app/tree/main/front-end',
      backEndRepo:
        'https://github.com/yanakolajara/tuner-app/tree/main/back-end',
      wireframes: '',
      managingTool: '',
      other: [],
    },
  },
  {
    name: 'Recipe App',
    route: 'recipe-app',
    snapshot: 'project_recipe-app.avif',
    description:
      'A web application that allows users to view a list of recipes, see detailed information for each recipe, and manage reviews, including adding, updating, and deleting them.',
    version: 'v1.0.0',
    variables: {
      collaborative: true,
      creationDate: '',
    },
    tools: [
      'React.js',
      'Express.js',
      'Node.js',
      'PostgreSQL',
      'Bootstrap',
      'Axios',
      'React Router',
    ],
    links: {
      live: 'https://dreamy-biscochitos-50f554.netlify.app/',
      frontEndRepo:
        'https://github.com/yanakolajara/single-resource-project-front-end',
      backEndRepo:
        'https://github.com/yanakolajara/single-resource-project-back-end',
      wireframes:
        'https://github.com/yanakolajara/single-resource-project-front-end/tree/main/src/erd-wireframes',
      managingTool: 'https://trello.com/b/JNnC505L/single-resource-project',
      other: [],
    },
  },
  {
    name: 'Budgrt App',
    route: 'budgrt-app',
    snapshot: 'project_budgrt-app.png',
    description:
      'Budgtr is an application where people can log their financial transactions.',
    version: 'v1.0.0',
    variables: {
      collaborative: false,
      creationDate: '',
    },
    tools: [
      'React.js',
      'Express.js',
      'Axios',
      'React Router',
      'HTML',
      'JavaScript',
      'CSS',
    ],
    links: {
      live: 'https://budgrt-ynk.netlify.app/',
      frontEndRepo: 'https://github.com/yanakolajara/budgrt-app-front-end',
      backEndRepo: 'https://github.com/yanakolajara/Budgrt-app',
      wireframes: '',
      managingTool: 'https://trello.com/b/1G7SjTeH/budgtr-app',
      other: [],
    },
  },
  {
    name: 'Youtube Clone',
    route: 'youtube-clone',
    snapshot: 'project_youtube-clone.png',
    description:
      'A clone of the popular video-sharing platform, YouTube. This project was created as the final lab for Module 3 at Pursuit, an intensive 12-month software engineering fellowship. It was built in 14 hours using React and the YouTube Data API V3.',
    version: '0.1.0',
    variables: {
      collaborative: false,
      creationDate: '',
    },
    tools: [
      'react',
      'react-dom',
      'react-router-dom',
      'gh-pages',
      'jest',
      'dotenv',
    ],
    links: {
      live: 'https://yanakolajara.github.io/youtube-clone',
      frontEndRepo: 'https://github.com/yanakolajara/youtube-clone',
      backEndRepo: null,
      wireframes: null,
      managingTool: null,
      other: [],
    },
  },
  // {
  //   name: 'Studio Ghibli',
  //   route: 'studio-ghibli',
  //   snapshot: 'project_studio_ghibli.png',
  //   description: '',
  //   version: 'v1.0.0',
  //   variables: {
  //     collaborative: false,

  //     creationDate: '',
  //   },
  //   tools: ['React.js', 'HTML', 'JavaScript', 'CSS', 'Cypress'],
  //   links: {
  //     live: '',
  //     frontEndRepo: 'https://github.com/yanakolajara/assessment-final-react',
  //     backEndRepo: null,
  //     wireframes: null,
  //     managingTool: null,
  //     other: [],
  //   },
  // },
  {
    name: 'Student Dashboard',
    route: 'student-dashboard',
    snapshot: 'project_student-dashboard.jpg',
    description:
      'A student dashboard that displays data in an easy-to-understand and user-friendly format. The project features a student list that can be filtered by cohort, with expandable sections for more detailed information about each student. It includes features like tracking codewars progress, certifications, and a 1-on-1 notes section.',
    version: '0.1.0',
    variables: {
      collaborative: false,
      creationDate: '',
    },
    tools: ['React.js', 'JavaScript', 'HTML', 'CSS', 'jest'],
    links: {
      live: '',
      frontEndRepo: 'https://github.com/yanakolajara/project-student-dashboard',
      backEndRepo: null,
      wireframes: null,
      managingTool: null,
      other: [],
    },
  },
  {
    name: 'Bird Sanctuary',
    route: 'bird-sanctuary',
    snapshot: 'project_bird-sanctuary.png',
    description:
      'A bird sanctuary donation app built with React. Users can view birds, add them to a cart, and receive discounts and bonus items based on the number of birds and the total cost. The project includes a checkout form that resets the cart upon successful submission.',
    version: '0.1.0',
    variables: {
      collaborative: false,
      creationDate: '06-03-2023',
    },
    tools: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Cypress'],
    links: {
      live: '',
      frontEndRepo: 'https://github.com/yanakolajara/project-bird-sanctuary',
      backEndRepo: null,
      wireframes: null,
      managingTool: null,
      other: [],
    },
  },
  {
    name: 'Luxury Guitars',
    route: 'luxury-guitars',
    snapshot: 'project_luxury-guitars.JPG',
    description:
      'Luxury Guitars is a guitar store management system build with pure HTML, CSS, and JavaScript.',
    version: 'v1.0.0',
    variables: {
      collaborative: false,

      creationDate: '05-22-2023',
    },
    tools: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live: 'https://luxuryguitars.netlify.app/',
      frontEndRepo:
        'https://github.com/yanakolajara/Luxury-guitars-inventory-app',
      backEndRepo: null,
      wireframes: null,
      managingTool: null,
      other: [],
    },
  },
];
