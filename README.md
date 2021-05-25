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

## Component

   Component is a UI Unit

   It has its own 
 * Template [html]
 * Styling [css]
 * data
 * Events

 

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