# Namaste React

...
# Parcel
 - Dev Build
 - Local Server
 - HMR= Hot Module Replacement
 - File Watching Algorithm - Written in C++
 - Caching - Faster Builds
 - Image Optimization
 - Minification
 - Bundling
 - Compress
 - Consistent Hashing
 - Differential Bundling - Support     Older Browser
 - Diagnostic
 - Error Handling
 - Tree Shaking - Remove UnUsed Code
 - HTTPs
 - Different Dev and prod Bundles
 - 


## What is `NPM`?
   -  npm is a package manager for Node.js with hundreds of thousands of packages. Although it does create some of your directory structure/organization, this is not the main purpose.
   -  The main goal, as you touched upon, is automated dependency and package management. This means that you can specify all of your project's dependencies inside your package.json file, 
   -  then any time you (or anyone else) needs to get started with your project they can just run npm install and immediately have all of the dependencies installed. On top of this, it is 
   -  also possible to specify what versions your project depends upon to prevent updates from breaking your project.

##  What is `Parcel/Webpack`? Why do we need it?
   Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application

## What is `.parcel-cache`?
   The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode. I think committing it to git would be a bad idea - it would add a large number of (unnecessary) changes to your commit history, and it could easily get out-of-sync with the code that generated it.
   Be sure to add .cache and dist to your .gitignore file to prevent committing these folders to Git. The .cache folder is used by Parcel as a temporary cache directory when building your app for development and production.

## What is `npx` ?
  it is A tool for executing Node packages.

## What is difference between `dependencies` vs `devDependencies`
  - both dependencies and devDependencies are listed in the package.json file to specify required packages, dependencies are necessary for the application to function in production, while devDependencies are only necessary during development and testing.

## What is Tree Shaking?
   Tree shaking refers to dead code elimination. It means that unused modules will not be included in the bundle during the build process. 

##  What is Hot Module Replacement?
  HMR is a way of exchanging modules in a running application (and adding/removing modules). You basically can update changed modules without a full page reload.

## - What is `.gitignore`? What should we add and not add into it?

 .gitignore is a configuration file used by Git to specify intentionally untracked files and directories that Git should ignore.
 It helps to avoid cluttering your repository with files that are generated during development, contain sensitive information, or are not relevant to the project's source code.
 Common things to include in a .gitignore file are dependencies (node_modules/, yarn.lock), build artifacts, editor and IDE files (*.vscode/, .idea/),
 configuration files (.env, *.env.*), logs, temporary files (*.log, *.tmp), and user-specific files (*.DS_Store, Thumbs.db).

 ## - What is the difference between `package.json` and `package-lock.json`
 package-lock.json: records the exact version of each installed package which allows you to re-install them. Future installs will be able to build an identical dependency tree.

package.json: records the minimum version you app needs. If you update the versions of a particular package, the change is not going to be reflected here.

## Why should I not modify `package-lock.json`?
   Consistency: Modifying package-lock.json can lead to inconsistencies in dependency versions across different development environments.
   This can cause unexpected behavior or errors when other developers or CI/CD systems try to install dependencies based on the modified lock file.

   Version Control: package-lock.json should be treated as a generated file and should not be manually edited. Instead, it should
   be checked into version control along with your source code. Modifying it directly defeats the purpose of having a lock file, 
   which is to ensure that every developer is working with the exact same dependency versions.

   Automatic Updates: When you run npm install, npm will automatically update package-lock.json to reflect any changes in dependencies 
   or their versions. Manually editing the file can disrupt this process and potentially introduce conflicts or inconsistencies.

   Security and Stability: The lock file helps ensure that your project uses known, stable versions of dependencies. 
   Modifying it may introduce security vulnerabilities or instability by allowing different versions of dependencies to be installed.

   it's best to let npm manage package-lock.json automatically. If you need to update dependencies or their versions, 
   you should use npm commands such as npm install, npm update, or npm audit rather than modifying the lock file directly.

## What is `node_modules` ? Is it a good idea to push that on git?

   node_modules is a directory created by npm (Node Package Manager) or yarn (another package manager commonly used with Node.js)
   to store all the dependencies (third-party libraries and packages) required by your Node.js project. When you run npm install or
   yarn install, these package managers create or update the node_modules directory based on the dependencies specified in your package.json file.

   As for whether it's a good idea to push node_modules to Git, the general recommendation is no, it's not a good idea. Here's why:
   
   Size: The node_modules directory can be quite large, especially for projects with many dependencies. Pushing it to Git can significantly increase the size of your repository, making it slower to clone and consume more storage space.

   Reproducibility:
   The purpose of package.json and package-lock.json (or yarn.lock) is to specify the dependencies and their exact versions.
   By committing these files to Git and ensuring that all developers use the same package manager (npm or yarn), you ensure that everyone gets 
   the same dependencies installed when they run npm install or yarn install. This makes your project more reproducible without the need to include the node_modules directory in version control.

   Maintenance: Keeping node_modules out of version control makes it easier to maintain your repository.
   You don't need to worry about conflicts or manual resolution of changes to the node_modules directory when working with collaborators.

## What is the `dist` folder?
   
   The dist folder, short for "distribution", is commonly used in software development projects, particularly those that involve building or compiling source code into a distributable format. Here's what the dist folder typically contains and its purpose:
      
   1. Compiled or Transpiled Code: The dist folder often holds compiled or transpiled code that has been transformed from its original source code into a
   2. format suitable for execution by a runtime environment. This could include JavaScript files that have been minified, concatenated, or bundled for production use.
   3.  In web development projects, the dist folder might contain HTML, CSS, and JavaScript files optimized for deployment to a web server.

  4.Packaged Assets: In addition to code, the dist folder may contain other assets needed for distribution, such as images, fonts, or configuration files. These assets are typically optimized and ready for deployment along with the compiled code.

   5.Finalized Output: The dist folder represents the final output of the build process and is often used for creating releases or deploying the application to production environments. 
   It should contain everything necessary to run the application without needing access to the original source code.

   6.Git Ignore: Generally, the dist folder is not included in version control systems like Git. Developers typically regenerate the dist folder as part of the build process
   on their local machines or through automated build pipelines. This approach keeps the repository clean and lightweight while ensuring that the latest compiled code is always available for deployment.

   5.Example Usage: For example, in a JavaScript project built with tools like Webpack or Babel, the dist folder might contain transpiled ES5 JavaScript files from modern ES6+ code.
   In a TypeScript project, the dist folder could hold compiled JavaScript files from TypeScript source code.

## What is `browserlists`?
  
   Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

## Why would we want it?
   
   During development we want to use the latest javascript features (e.g ES6) as it makes our jobs easier, leads to cleaner code, possibly better performance.
    As javascript evolves, browsers won't support new features at the same pace, for instance not all browsers have built-in support for ES6 (aka ES2015).
    By using browserslist, transpilers/bundlers know what browsers you want to support, so they can "group" browsers in different categories and generate separate bundles.

##  ^caret VS ~tilda
     
   Caret (^):

   When you specify a dependency with a caret (^), npm or yarn will update the package to the latest minor version (the middle number in semver) while keeping the major version fixed.
   For example, if you specify "dependencies": { "package-name": "^1.2.3" }, npm or yarn will install any version from 1.2.3 up to, but excluding, 2.0.0.
    The caret is suitable for projects where you want to automatically receive bug fixes and minor updates but avoid major updates that may introduce breaking changes.

   Tilde (~):

   When you specify a dependency with a tilde (~), npm or yarn will update the package to the latest patch version (the last number in semver) while keeping the major and minor versions fixed.
   For example, "dependencies": { "package-name": "~1.2.3" } will install any version from 1.2.3 up to, but excluding, 1.3.0.
   The tilde is useful for projects where you want to receive only bug fixes and avoid both minor updates (which may contain new features) and major updates (which may introduce breaking changes).
in Short-> 
    both caret and tilde are used to specify version ranges in package.json, 
    the caret allows for automatic updating of minor versions while keeping the major version fixed, 
    whereas the tilde allows for automatic updating of patch versions while keeping both the major and minor versions fixed.
   


      
