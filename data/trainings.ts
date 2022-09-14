import { Training } from '../models/common.model';

export const Trainings: Training[] = [
  {
    slug: 'angular',
    title: 'Angular',
    prerequisites: [
      'Experience with Javascript, HTML, and CSS is required.',
      'Experience with Typescript is recommended.',
      'Knowledge of Node.js/NPM is highly recommended.'
    ],
    duration: 3,
    dailyRate: 500,
    minParticipants: 2,
    nextSessions: [
      { start: '2022-10-10', end: '2022-10-12' },
      { start: '2022-11-07', end: '2022-11-09' },
      { start: '2022-12-05', end: '2022-12-07' },
      { start: '2023-01-09', end: '2023-01-11' },
      { start: '2023-02-06', end: '2023-02-08' },
      { start: '2023-03-06', end: '2023-03-08' },
      { start: '2023-04-17', end: '2023-04-19' },
      { start: '2023-05-15', end: '2023-05-17' },
      { start: '2023-06-19', end: '2023-06-21' }
    ],
    meta: {
      title: 'Angular training for beginners',
      description:
        'Get more information about our Angular training for beginners and discover the content of the course'
    },
    intro: `During this training, you will learn how to build an application with the Angular framework.
    Angular is one of the most popular front-end frameworks on the market and offers numerous features helping create well-designed, easy to maintain, and scalable applications. <br/>The training covers the following topics both theoretically and practically by building your application:`,
    tableOfContent: [
      {
        title: 'Angular presentation',
        items: [
          'Angular presentation',
          'Angular vs AngularJS',
          "Angular's architecture overview",
          'Typescript overview'
        ]
      },
      {
        title: 'Structure of an application',
        items: [
          'The CLI',
          'Creating your first application',
          'The entry point and the module system'
        ]
      },
      {
        title: 'Components',
        items: [
          'The components structure',
          'HTML templates',
          'Styles',
          'Creating a component (with and without the CLI)',
          'Component lifecycle',
          'Nested components and content projection',
          'Inter-components communication (@Input/@Output)'
        ]
      },
      { title: 'Templates', items: ['Interpolation', 'Event binding'] },
      {
        title: 'Directives',
        items: [
          'Attribute vs structural directives',
          'Available directives',
          'Creating a custom attribute directive'
        ]
      },
      {
        title: 'Pipes',
        items: [
          'Pipes presentation',
          'Available pipes',
          'Creating a custom pipe'
        ]
      },
      {
        title: 'Routing',
        items: [
          'Presentation of the RouterModule',
          'Creating a simple routing setup',
          'Using route parameters'
        ]
      },
      {
        title: 'Services',
        items: [
          'Creating and using a service',
          'Dependency injection overview',
          'Using HttpClient to load data'
        ]
      },
      {
        title: 'Introduction to RxJS',
        items: [
          'Introduction to reactive programming',
          'Relation between Angular and RxJS',
          'Introduction to Observables',
          'Introduction to the operators'
        ]
      },
      {
        title: 'Forms',
        items: [
          'Presentation of the different possibilities: ngModel, template driven forms, reactive forms',
          'Presentation of the reactive forms (FormControl, FormGroup, FormArray)',
          'Building a reactive form',
          'Watching for changes in a reactive form',
          'Handling errors'
        ]
      }
    ]
  },
  {
    slug: 'angular-advanced',
    title: 'Angular: advanced level',
    prerequisites: [
      'Experience with Javascript, HTML, and CSS is required.',
      'Experience with Angular and Typescript is required.'
    ],
    duration: 3,
    dailyRate: 500,
    minParticipants: 2,
    nextSessions: [
      { start: '2022-10-17', end: '2022-10-19' },
      { start: '2022-11-14', end: '2022-11-16' },
      { start: '2022-12-13', end: '2022-12-15' },
      { start: '2023-01-16', end: '2023-01-18' },
      { start: '2023-02-20', end: '2023-02-22' },
      { start: '2023-03-13', end: '2023-03-15' },
      { start: '2023-04-24', end: '2023-04-26' },
      { start: '2023-05-22', end: '2023-05-24' },
      { start: '2023-06-26', end: '2023-06-28' }
    ],
    meta: {
      title: 'Angular advanced training',
      description:
        'Get more information about our Angular advanced training for experienced developers and discover the content of the course'
    },
    intro: `During this training, you will learn how to use Angular's most advanced features and techniques.
    Angular is one of the most popular front-end frameworks on the market and offers numerous features helping create well-designed, easy to maintain, and scalable applications. This training covers Angular's most advanced features used to improve the application performance and maintainability.<br/>The following topics are studied both theoretically and practically by building your application:`,
    tableOfContent: [
      {
        title: 'Optimizing the change detection',
        items: [
          'The change detection strategies',
          'Switching to OnPush',
          'Reacting to changes with the OnPush strategy'
        ]
      },
      {
        title: 'RxJS Observables',
        items: [
          'Revisiting the use of Observables with the OnPush strategy',
          'Use the async pipe',
          'Observable composition',
          'Observables vs Subjects'
        ]
      },
      {
        title: 'Introduction to the state management',
        items: [
          'State management strategies',
          'Presentation of some libraries',
          'Using RxJS to manage the application state'
        ]
      },
      {
        title: 'Dependency injection',
        items: [
          'Modules and dependency injection',
          'Using providedIn',
          'Component level injection',
          'Dependency injection providers'
        ]
      },
      {
        title: 'Advanced routing',
        items: ['Routing modules', 'Multi-level routing', 'Lazy loading']
      },
      {
        title: 'Advanced reactive forms',
        items: [
          'Working with FormArray',
          'Using and composing validators',
          'Creating a custom validator',
          'Creating a custom async validator'
        ]
      },
      {
        title: 'Testing',
        items: [
          'Testing components',
          'Testing services',
          'Writing end-to-end tests with Protractor'
        ]
      }
    ]
  },
  {
    slug: 'introduction-rest-apis',
    title: 'Introduction to REST APIs',
    prerequisites: [
      'Basic knowledge of web technologies',
      'Basic knowledge of programming tools (VSCode, terminal, etc.)',
      'Knowledge of the JavaScript programming language is recommended'
    ],
    duration: 3,
    dailyRate: 500,
    minParticipants: 2,
    nextSessions: [],
    meta: {
      title: 'REST APIs',
      description:
        'Get more information about our REST APIs training for developers of all levels and discover the content of the course'
    },
    intro: `During this training, you will learn more about REST APIs, how they work, and how to code and test your API.
    It covers most topics, from the creation or design of an API to its management. It will also teach valuable information about API testing or mocking and the most used standards in the industry.
    `,
    tableOfContent: [
      {
        title: 'APIs',
        items: [
          'Introduction: how the web works?',
          'Presentation of APIs',
          'Presentation of Web APIs',
          'Benefits and real-life use cases'
        ]
      },
      {
        title: 'REST APIs',
        items: [
          'Presentation of REST APIs',
          'REST APIs principles',
          'API design best practices',
          'The OpenAPI standard'
        ]
      },
      {
        title: 'Authentication introduction',
        items: [
          'Authentication and authorization',
          'API tokens',
          'OAuth and scopes'
        ]
      },
      {
        title: 'Anatomy of an API call',
        items: [
          'Request components (URL, method, params, etc.)',
          'Response components (status code, body, etc.)',
          'Overview of the JSON format'
        ]
      },
      {
        title: 'Creating your first API',
        items: [
          'Running a Node.js and Express server',
          'Declaring routes',
          'Serving different types of content',
          'Adding headers',
          'Adding a basic token authentication'
        ]
      },
      {
        title: 'APIs tooling',
        items: [
          'Calling/testing APIs',
          'API mocking',
          'API design',
          'API documentation'
        ]
      },
      {
        title: 'Calling and testing your API',
        items: ['Using CURL', 'Using Postman']
      },
      {
        title: 'Mocking an API',
        items: [
          'Benefits of API mocking',
          'Presentation of Mockoon',
          'Creation of a simple mock using Mockoon'
        ]
      },
      {
        title: 'API management',
        items: ['Usage metering', 'API gateways']
      }
    ]
  }
];
