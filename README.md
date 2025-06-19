React Q&A Collection
A beautifully designed, mobile-responsive web application displaying common React questions and answers in a simple, paragraph-based format. Built with HTML, CSS, and JavaScript, it features dynamic filtering by question number, difficulty, and topic.
Features

Question & Answer Display: Presents React-related questions and answers as paragraphs, sorted from Easy to Super Hard.
Dynamic Filtering: Filter content by question number, difficulty (Easy, Medium, Hard, Super Hard), or topic (e.g., Core Concepts, Hooks).
Mobile-Responsive Design: Adapts seamlessly to all screen sizes using media queries.
Engaging UI: Includes animated background particles, gradient text, and subtle hover effects.
Lightweight: Uses only HTML, CSS, and JavaScript with minimal external dependencies (Font Awesome, Google Fonts).

Project Structure

index.html: Main HTML file containing the structure and inline JavaScript for rendering and filtering.
styles.css: CSS file with styles and media queries for responsive design.
data.js: JavaScript file containing the Q&A data (questions, answers, difficulty, topic).

Setup Instructions

Clone or Download: Download the project files or clone the repository.
Place Files: Ensure index.html, styles.css, and data.js are in the same directory.
Open in Browser: Open index.html in a modern web browser (Chrome, Firefox, etc.).
No server is required as it runs locally.


Dependencies: The project uses CDN links for:
Font Awesome (https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css)
Google Fonts (https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap)



Usage

Browse all questions and answers, displayed in a single-column layout.
Use the filter dropdowns to narrow down content by:
Question Number: Select a specific question (e.g., Question 1).
Difficulty: Choose from Easy, Medium, Hard, or Super Hard.
Topic: Filter by topics like Core Concepts, Hooks, State Management, etc.


The UI is touch-friendly and adapts to mobile, tablet, and desktop screens.

Customization

Add Questions: Edit data.js to include new questions with id, question, answer, difficulty, and topic.
Style Adjustments: Modify styles.css to change colors, fonts, or layout.
Filter Options: Update filter logic in index.html (inline script) to add new filter criteria.

License
© 2025 React Q&A Collection. All rights reserved.
