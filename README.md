# Demo Website

A responsive web application built using Next.js and Tailwind CSS, based on the provided Figma design. The project showcases the implementation of modern web design principles and ensures functionality across different devices.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Deployment](#deployment)
- [Challenges and Learnings](#challenges-and-learnings)

## Overview

This project is a demo website designed to implement a Figma design using Next.js as the primary framework. The site is responsive, optimized for performance, and follows best practices for web development.

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices.
- **Optimized Images**: Uses `next/image` for image optimization.
- **Modern UI**: Tailored UI components with Tailwind CSS.
- **Cross-browser Compatibility**: Ensures a consistent experience across major browsers.

## Technologies

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Images**: `next/image` for optimized image handling.
- **Version Control**: [Git](https://git-scm.com/) & [GitHub](https://github.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sajadaliismail/demoWebsite.git
   ```
2. Navigate to the project directory:

   ```bash
   cd demoWebsite
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

To run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Testing

While this project does not have unit or integration tests implemented, you can manually test the functionality by running the local server and interacting with the site across various devices and browsers.

## Deployment

This project is hosted on Vercel. You can view the live site at: [WebsiteDemo](https://demo-website-eight-rho.vercel.app/)

[**Live Demo on Vercel**](#)

To deploy your own version:

1. Push your changes to GitHub.
2. Link the repository to Vercel by following these steps:
   - Go to [Vercel](https://vercel.com/).
   - Import your GitHub repository.
   - Deploy the project. Vercel will automatically detect the Next.js framework.

## Challenges and Learnings

### Implementation of Figma Design

- The main challenge was translating the Figma design into a functional web app while ensuring responsiveness. Tailwind CSS made it easier to achieve the desired layout by providing utility classes for different screen sizes.

### Responsiveness

- Ensuring that the design scales perfectly across different devices required careful usage of media queries, flexbox, and grid. Tailwind CSS's responsive utilities (`sm:`, `md:`, `lg:`, etc.) helped simplify this process.

### Image Optimization

- Leveraging Next.js's `next/image` component for automatic image optimization was a significant learning point, helping to improve performance by reducing image size based on the device type.

---

## Contact

For any inquiries or feedback, feel free to reach out at:

- **GitHub**: [Sajadaliismail](https://github.com/Sajadaliismail)
