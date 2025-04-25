# Angular
This Repository is to store all the projects and learning that I do for Angular

Level - 1
1.Angular Basics and Project setup

    Q.What is Angular?
    Ans: Web application framework for Single Page Apps(SPAs)

    Q.Benifits of Angular
    Ans: Faster development,Faster Code generation(CLI),Unit tests ready, Opinionated - Similar architecture for many companies and teams

    Q.Angular vs React
    Ans: 
    Angular is a framework,Has built-in CLI,Has tools and packages included for small medium scale apps,Is opinionated(better code style consistency)
    React is library,does not have a CLI,requires to install additional packages even for small scale apps


Creating Angular Application:

1. Install Nodejs in your PC

2. ng new first-ng-app --dry-run //--dry-run to see what wil happen if the command ran no actual changes will be made

3. ng new first-ng-app
    files generated for the above command:
    CREATE first-ng-app/angular.json (2897 bytes)
    CREATE first-ng-app/package.json (1083 bytes)
    CREATE first-ng-app/README.md (1092 bytes)
    CREATE first-ng-app/tsconfig.json (936 bytes)
    CREATE first-ng-app/.editorconfig (290 bytes)
    CREATE first-ng-app/.gitignore (590 bytes)
    CREATE first-ng-app/tsconfig.app.json (277 bytes)
    CREATE first-ng-app/tsconfig.spec.json (287 bytes)
    CREATE first-ng-app/.vscode/extensions.json (134 bytes)
    CREATE first-ng-app/.vscode/launch.json (490 bytes)
    CREATE first-ng-app/.vscode/tasks.json (980 bytes)
    CREATE first-ng-app/src/main.ts (256 bytes)
    CREATE first-ng-app/src/favicon.ico (15086 bytes) 
    CREATE first-ng-app/src/index.html (309 bytes)
    CREATE first-ng-app/src/styles.scss (81 bytes)
    CREATE first-ng-app/src/app/app.component.html (20253 bytes)
    CREATE first-ng-app/src/app/app.component.spec.ts (963 bytes)
    CREATE first-ng-app/src/app/app.component.ts (385 bytes)
    CREATE first-ng-app/src/app/app.component.scss (0 bytes)
    CREATE first-ng-app/src/app/app.config.ts (235 bytes)
    CREATE first-ng-app/src/app/app.routes.ts (80 bytes)
    CREATE first-ng-app/src/assets/.gitkeep (0 bytes)

4.ng new first-ng-app --inline-style --inline-template
    files generated for the above command:
    CREATE first-ng-app/angular.json (2964 bytes)
    CREATE first-ng-app/package.json (1083 bytes)
    CREATE first-ng-app/README.md (1092 bytes)
    CREATE first-ng-app/tsconfig.json (936 bytes)
    CREATE first-ng-app/.editorconfig (290 bytes)
    CREATE first-ng-app/.gitignore (590 bytes)
    CREATE first-ng-app/tsconfig.app.json (277 bytes)
    CREATE first-ng-app/tsconfig.spec.json (287 bytes)
    CREATE first-ng-app/.vscode/extensions.json (134 bytes)
    CREATE first-ng-app/.vscode/launch.json (490 bytes)
    CREATE first-ng-app/.vscode/tasks.json (980 bytes)
    CREATE first-ng-app/src/main.ts (256 bytes)
    CREATE first-ng-app/src/favicon.ico (15086 bytes)
    CREATE first-ng-app/src/index.html (309 bytes)
    CREATE first-ng-app/src/styles.scss (81 bytes)
    CREATE first-ng-app/src/app/app.component.spec.ts (963 bytes)
    CREATE first-ng-app/src/app/app.component.ts (420 bytes)
    CREATE first-ng-app/src/app/app.config.ts (235 bytes)
    CREATE first-ng-app/src/app/app.routes.ts (80 bytes)
    CREATE first-ng-app/src/assets/.gitkeep (0 bytes)



1.1.Angular Overview - 

                       Angular vs AngularJS 

                       Advantages of angular

2.Typescript vs Javascript

2.1.Typescript essentials - 
                            Basic syntax,Variables and Datatypes

                            Functions,Arrow functions

                            OOPS(classes,interfaces) //not required as of now     


3.Angular Setup - 

                  Installation of NodeJs

                  NPM & CLI tool

                  angular.json,main.ts and index.html

                  JIT vs AOT Compilation                        

Level - 2
Angular Architecture:

1.Components - 

               Structure and Usage

               Selector and template

               Component lifecycle hooks - ngOnInit,ngOnDestroy,etc

2.Module - 

           app.module.ts

           Angular app Loading Process - index.html,app-root,main.ts

3.Directives - 

               Stuctural directives - *ngIf,*ngFor and *ngSwitch

               Attribute directives - [ngStyle] & [ngClass]

               Component vs stuctural directives vs attribute directives

Level - 3
Data binding,Decorators and Pipes

1.Data binding - 

                String Interpolation

                 Property binding

                 Event binding

                 2 way binding(ngModel)

2.Decorators - 

               @Component

               @Injectable

               @Output

               @Input

3.Pipes - Built in Pipes - 
        
          Datapipes,UpperCasePipe,LowerCasePipe,CurrencyPipe,etc

          Custom pipes

          Chaining Pipes (optional)


Level - 4

Services,Dependency injection & component communication

1.Angular Services - 
                    
                     Dependency Injection(imp) - Hierarchical Dependency Injection

                                                 @Injectable Decorator

2.Component Communication - 

                            Parent Child Communication - @Input and @Output decorators(imp)

                            Content Projection - <ngContent>

                            ViewChild vs ViewChildren(imp)

                            ContentChild vs ContentChildren

Level - 5

Routing,HttpClient, and RxJS

1.Routing - 

            RouterModule,Routes,RouterOutlet

            Navigation - RouterLinks

            Route Parameters

            Route Guards - CanActivate vs CanDeactivate

2.HttpClient

3.Reactive Programming & RxJS - RxJS - 

                                Operators(eg.map,filter and mergeMap)

                                Observables
                                
                                Promise vs Observables


Interview things above<------------------------------------------------------------------------------->