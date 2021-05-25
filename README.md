# Angular 

  * Angular is meant for Developing Single Page Application
  * What you develop in an application is  an Angular Module
  * An Angular Module is a collection of
  1. Components
  2. Services
  3. Directives
  4. Pipes
  5. Routing Configuration
 * Single page here is nothing but collection of Components


 ## Angular App Folder Structure

  |WORKSPACE CONFIG FILES	|   PURPOSE                             |
  |-------------------------|---------------------------------------|
  | .editorconfig	|Configuration for code editors. See EditorConfig.|
|.gitignore |	Specifies intentionally untracked files that Git should ignore.|
|README.md |	Introductory documentation for the root app.|
|angular.json |	CLI configuration defaults for all projects in the workspace, including configuration options for build, serve, and test tools that the CLI uses, such as TSLint, Karma, and Protractor. For details, see Angular Workspace Configuration.|
|package.json |	Configures npm package dependencies that are available to all projects in the workspace. See npm documentation for the specific format and contents of this file.|
|package-lock.json|Provides version information for all packages installed into node_modules by the npm client. See npm documentation for details. If you use the yarn client, this file will be yarn.lock instead.|
|src/ | 	Source files for the root-level application project. |
|node_modules/	| Provides npm packages to the entire workspace. Workspace-wide node_modules dependencies are visible to all projects.|
| tsconfig.json |	The base TypeScript configuration for projects in the workspace. All other configuration files inherit from this base file. For more information, see the Configuration inheritance with extends section of the TypeScript documentation.|
|tslint.json |	Default TSLint configuration for projects in the workspace.|


## Component

   Component is a UI Unit

   It has its own 
 * Template [html]
 * Styling [css]
 * data
 * Events

To create a component , we create a typescript class as follows

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
}

```

in the above class,
 
* @Component is a decorator
* the propery selector represent the element that would be created as custom html tag after a component is built
* templateUrl is used to specify the html associated with the component - only one
* styleUrls is used to specify the css files associated with the component

### To create a component by using CLI

```
ng g c <name of the component>

ex: ng g c box
```
## Directives

### Built-in directives

Directives are classes that add additional behavior to elements in your Angular applications. With Angular's built-in directives, you can manage forms, lists, styles, and what users see.


The different types of Angular directives are as follows:

* `Components—directives` with a template. This type of directive is the most common directive type.

* `Attribute directives` directives that change the appearance or behavior of an element, component, or another directive.

* `Structural directives` directives that change the DOM layout by adding and removing DOM elements


### Structural Directive

  * structural directives generate template, hide template, remove template, unhide template
  * all the structural directives are prefixed with asterisk (*)
  * they can be appliced on any html element and user defined components

  some inbuilt structural directives - ngFor,ngIf,ngSwitch

  ex:

  ```
     <li *ngFor="let x of people">{{x}}</li>
   
   ```

   ### Attribute Directives

    Attribute Directives are further classified into
    1. Input Directives
    2. Output Directives
    3. Input output Directives

    #### Input Directive

    * Input directive receives values
    * it can be applied on both html elements and angular components
    * it is enclosed with []
    * it changes the appearance and behaviour of the the component usually

some inbuilt input directives  ngClass, style,ngStyle

  example:

  ```
     <h1 [ngClass]="style1"></h1>
  ```

  #### Output directives

  * Output directives are event emitters
  * they are wrapped within ()
  * Generally they listen to events and call the function in the right when event occurs

 some inbuilt directives: click, mouseover, keyup, change

example
```
<button (click)="fun()">
```

