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
    minParticipants: 3,
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
    minParticipants: 3,
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
  }
];
