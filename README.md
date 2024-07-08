# A responsive web application that allows users to create and edit posts

## Description
1. A responsive web application created using ReactJS that helps users to create posts, edit posts and also delete posts.
2. It helps users for a seamless navigation through different routes.

## Tech Stacks Used
1. Html
2. CSS
3. ReactJS
4. Vercel for deployment.

## Routes
### Posts ("/")
1. This screen will showcase all the created posts.
2. A more button when clicked helps user to edit or delete the post.

### CreatePostForm
1. A form to create a new post with path ("/createpost")

### EditPostForm
1. A form to edit a created post when edit button from more options is clicked.
2. The path for this route is ("/editpost/:id) id is the unique id assigned to the post.

### Third Party Packages Used.
1. create-react-app : This library is a popular tool for setting up a new React project with a default configuration that includes everything you need to start building a React application.
2. react-router-dom : This is a popular library used in React applications for handling routing. It allows you to create single-page applications with navigation without the page refreshing as the user navigates.
3. react-icons : A library that provides a collection of popular icon packs for React applications. It allows you to easily include icons from various libraries like Font Awesome, Material Design, Ionicons, and many more in your React components.

### Prerequisites
Make sure you have Node.js and npm installed on your machine. You can download them from the [official Node.js website](https://nodejs.org/).
 
### Clone the Repository

1. Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Nageenask0786/PostApp.git
cd
```
2. Install Dependencies
Install the required dependencies using npm:
```
bash
npm install
```
3. Start the Development Server
Run the development server to see your application in action:

```bash

npm start
```
This command will open your default web browser and navigate to http://localhost:3000, where you can see your React application running.

### Deployed Link
https://nageena-shaik-posts-app.vercel.app/
