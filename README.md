# My Portfolio Website

Welcome to my personal portfolio website! This project showcases my work as a front-end and software developer, highlighting my skills, projects, and experiences.

## Technologies Used

- **React**: For building the interactive UI.
- **Tailwind CSS**: For styling and creating a responsive design.
- **React Router**: For navigation between different sections of the website.
- **EmailJS**: For sending contact inquiries directly to my email.
- **react-icons**: For adding various icons to enhance the UI.

## Features

- **Home**: A welcoming page with a brief introduction and navigation links to other sections.
- **About Me**: Information about who I am, my skills, and my tech stack. Includes icons for different technologies that I use.
- **Projects**: A showcase of my projects, with details and links to the live versions.
- **Experience**: A section to display my professional experience and skills.
- **Education**: Information about my educational background and certifications.
- **Contact Me**: A modal that appears when you click the "Contact Me" button, allowing visitors to send inquiries to my email via EmailJS.

## Installation

To get started with this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Sonwabiso1/my-portfolio.git
    ```

2. **Navigate to the project folder:**

    ```bash
    cd my-portfolio
    ```

3. **Install dependencies:**

    Make sure you have `npm` or `yarn` installed. Then run:

    ```bash
    npm install
    # or
    yarn install
    ```

4. **Set up EmailJS:**

    To enable the contact form, you'll need to create an account on [EmailJS](https://www.emailjs.com/). Once registered:

    - Set up your email service and template.
    - Copy the **User ID**, **Service ID**, and **Template ID**.
    - Create a `.env` file in the root of your project and add the following environment variables:

    ```bash
    REACT_APP_EMAILJS_USER_ID=your_user_id
    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
    ```

5. **Run the development server:**

    Start the app locally by running:

    ```bash
    npm start
    # or
    yarn start
    ```

    This will launch the website on [http://localhost:3000](http://localhost:3000).

---

