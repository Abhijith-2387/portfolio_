# Personal Portfolio | Abhijith Mohan R

This repository contains the source code for my personal portfolio website, published with GitHub Pages.

The website presents my profile, education, technical skills, projects, experience, certifications, resume, and contact information in a responsive single-page layout.

## Live Website

Visit the published portfolio here:

[https://abhijith-2387.github.io/portfolio_/](https://abhijith-2387.github.io/portfolio_/)

## Repository

[https://github.com/Abhijith-2387/portfolio_](https://github.com/Abhijith-2387/portfolio_)

## Features

- Responsive single-page portfolio design
- Hero section with typing animation
- Scroll progress indicator
- Smooth section reveal animations
- Animated statistics counters
- Mobile-friendly navigation menu
- Projects, experience, certifications, and contact sections
- Resume download support
- Contact form integration using FormSubmit

## Technology Stack

- HTML5
- CSS3
- JavaScript
- React
- Vite
- Node.js
- Express
- MongoDB
- Mongoose
- Google Fonts

## MERN Backend Features

- React portfolio frontend
- Express REST API
- MongoDB contact message storage
- Mongoose contact message model
- Protected admin message-list endpoint
- Local development scripts for frontend and backend

## Project Structure

```text
.
|-- client/
|   |-- public/
|   |   `-- assets/
|   |-- src/
|   |   |-- main.jsx
|   |   `-- styles.css
|   |-- index.html
|   `-- package.json
|-- server/
|   |-- src/
|   |   |-- app.js
|   |   |-- server.js
|   |   |-- config/
|   |   |-- controllers/
|   |   |-- middleware/
|   |   |-- models/
|   |   `-- routes/
|   |-- .env.example
|   `-- package.json
|-- assets/
|   |-- images/
|   |   |-- favicon.svg
|   |   `-- profile-photo.jpeg
|   `-- resume/
|       `-- ABHIJITH-MOHAN-R-Resume.pdf
|-- css/
|   |-- style.css
|   `-- custom.css
|-- js/
|   `-- script.js
|-- .env.example
|-- package.json
|-- index.html
`-- README.md
```

## Running Locally

Install dependencies:

```bash
npm run install:all
```

Create your local environment:

```bash
copy .env.example .env
```

Start MongoDB locally, then run the React frontend and Express backend together:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

The API runs at:

```text
http://localhost:5000
```

Useful API routes:

```text
GET  /api/health
POST /api/contact
GET  /api/contact
```

For `GET /api/contact`, send:

```text
Authorization: Bearer local-admin-token
```

Production build:

```bash
npm run build
npm start
```

Then open:

```text
http://localhost:5000
```

## Ownership and Usage Restrictions

This project is the personal portfolio of Abhijith Mohan R.

All source code, design, layout, text content, images, resume files, and other assets in this repository are protected and may not be copied, modified, redistributed, reused, published, or claimed as someone else's work without prior written permission from the owner.

You may view this repository for reference only.

You are not allowed to:

- Use this code as a template for your own portfolio
- Copy or reuse the design, layout, sections, or styling
- Use, edit, download, redistribute, or republish files from the `assets` folder
- Use the profile photo, resume, personal details, or branding
- Modify and publish this project as your own
- Use this repository or its contents for commercial purposes

If you want to use any part of this project, you must request permission first.

## License

All Rights Reserved.

Copyright (c) Abhijith Mohan R.

No license is granted for reuse, modification, distribution, or commercial use.

## Contact

- Email: [jithu5231w@gmail.com](mailto:jithu5231w@gmail.com)
- LinkedIn: [abhijith-mohan-r](https://www.linkedin.com/in/abhijith-mohan-r)
- GitHub: [Abhijith-2387](https://github.com/Abhijith-2387)
