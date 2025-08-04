<summary>
<h2>Learning Goals</h2>
</summary>

<br>

Upon completion of this exercise, you will be able to:

- Set up a new React app using Vite and run it in development mode.
- Create and render React function components.
- Use JSX to render lists and forms within a React component.
- Use Props and State to render your list

<br>
<hr>

## Introduction

In this exercise, we will practice creating a basic movie listing page with a form to add a new movie. This exercise focuses on setting up the project, creating components, and rendering lists and forms without implementing any logic for adding movies yet.

## Instructions

### Iteration 1 | Create React App with Vite

First, let's start by creating a new React project using Vite.

1. Open your terminal.
2. Navigate to the directory where you want to create your project.
3. Run the command `npx create-vite@latest my-movie-app --template react` to create a new React project named `my-movie-app`.
4. Once the project is created, navigate to its directory by running `cd my-movie-app`.
5. Run `npm install` to install dependencies.
6. Start the development server by running `npm run dev`. Your new React app should now be running in development mode and accessible in the browser.

You can reference the Vite documentation here: [Vite.js - Getting Started](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

<br>

### Iteration 2 | Prepare the App Component

Let's clean up the `src/App.jsx` file a bit. Replace the content with the following structure:

```jsx
// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Movie List</h1>
      </header>
      {/* MovieList and AddMovieForm components will go here */}
    </div>
  );
}

export default App;
```

<br>

### Iteration 3 | Create the MovieList Component

Create a new file `MovieList.jsx` in the `src` directory. This component will display a list of movies. For now, you can use a static array of movie titles to render the list.

Don't forget to import and render `MovieList` in your `App` component.

<br>

### Iteration 4 | Create the AddMovieForm Component

Create another new file `AddMovieForm.jsx` in the `src` directory. This component will render a form where users can type in a movie name but won't handle form submission yet.

Import and render `AddMovieForm` in your `App` component below the `MovieList` component.

<br>

## Additional Instructions with Props and State

### Iteration 4 | Update the App Component

In this iteration, you'll modify the `App` component to manage the list of movies as a state. This will allow your app to dynamically update the movie list in response to user actions (in future iterations, such as adding a new movie).

Update the `App` component as follows:

### Iteration 5 | Update the MovieList Component to Use Props

Modify the `MovieList` component to accept `movies` as a prop and use it to render the list. This change will make `MovieList` more flexible and decouple it from its data source, adhering to best practices in React development.

Update the `MovieList` component as follows:


### Further Enhancements

To further practice with props and state, consider implementing the functionality to add a new movie through the `AddMovieForm` component. Here's a high-level overview of how you might approach this:

1. Add a method in the `App` component to update the state with a new movie.
2. Pass this method as a prop to the `AddMovieForm` component.
3. In the `AddMovieForm` component, handle form submissions to call this method and add the new movie to the list.

By incorporating these adjustments and enhancements, you'll gain practical experience with managing state and using props in React, which are foundational concepts for building dynamic applications.

### Final Step | Run and Review

Ensure that all components are correctly imported and rendered in the `App.jsx`. Run your React app using Vite (`npm run dev`), and you should see a basic movie listing page with a form to add a new movie.

**Happy Coding!** :heart:

<br>

## FAQs


<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>

  <br>

  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 

  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the error: "Cannot find module 'Node.js'". How can I resolve it?</summary>

  <br>

  The error "Cannot find module" in a Node.js application means that the module you are trying to import or use does not exist in your project or cannot be found by Node.js.

  There are a few things you can try to resolve the issue:

  1. **Dependencies are not installed**: Make sure that all dependencies are installed.
   
   To do this, run the command `npm install` in the root folder of your project.

   This will install all of the dependencies listed in the project's `package.json` file, and ensure that all of the modules that your Node'js application requires are available.

  2. **Module is not installed**: Make sure that the *package* you are trying to use is listed in the project's `package.json` and that it is installed.

   To do this, run the command `npm install <package_name>`, replacing the `<package_name>` with the name of the package.

   This will add the package to the list of dependencies in the `package.json` file, and install it in the project.

  3. **Module is not imported:** Make sure that you've imported the module/package correctly and that the `import` statement is spelled correctly and available in the correct place in your code.

  4. **Wrong file path:** If you are importing another file as a module, make sure that the file you are trying to *import* is located in the correct folder and that you are using the correct file path.

  5. **Wrong module/package name:** Check the spelling of the package name you are trying to import.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the message: "Something is already running at ... Would you like to run the app at another port instead? [Y/n]". What should I do?</summary>

  <br>

  This message means that another process is already using the specified port. This could be another instance of your React app, or it could be another application that is using that port.
  To resolve this, you can change the port your React app is running on by typing Y when prompted. This will kill the process and automatically start the server on another port.
  Another approach is to manually terminate the process using the port in question and then try running the app again.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the warning in my React app:" 'variable' is assigned a value but never used: no-unused-vars". What should I do?</summary>

  <br>
  
  This warning is a linting error thrown by a linting tool in your React project, and it is warning you that the variable is created, but that it is never being used in your code.

  To resolve this issue, you can either use the variable in your code, or you can simply remove the variable if you don't need it.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am getting an error: "not defined". How do I fix it?</summary>

  <br>

  The "ReferenceError: variable is not defined" error in JavaScript occurs when you try to access a variable or a function that has not been defined yet or is out of scope. 

  To fix the issue, check that you have defined the variable or function that you are trying to use and double-check the spelling to make sure you are using the correct name.

  In case the variable or a function is defined in another file, make sure that the file has been imported or loaded correctly.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>

  <br>

  This repository is read-only for students. You should create your own local project and work on it instead.

  1. **Create a new project:** Set up a new project using Vite or Create React App.
  
  2. **Copy the necessary files:** Copy only the files you need for your assignment into your new project.
  
  3. **Complete your work:** Work on your assignment in your own project.
  
  4. **Submit your work:** Follow your teacher's instructions for submitting your completed assignment.

  <br>

  [Back to top](#faqs)

</details>
