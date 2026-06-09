# StartupIQ AI

An AI-powered startup validation platform that helps founders evaluate startup ideas before investing significant time and resources.

StartupIQ AI uses a multi-agent AI architecture to perform market research, competitor analysis, SWOT analysis, revenue modeling, risk assessment, business plan generation, and investor pitch creation. The platform generates a comprehensive startup validation report in minutes and stores results for future reference.

---

## Features

### AI Startup Validation

* Submit startup ideas through an interactive dashboard
* Receive AI-generated startup assessments
* Analyze startup viability and growth potential

### Multi-Agent AI Pipeline

The platform uses specialized AI agents:

1. Market Research Agent
2. Competitor Analysis Agent
3. SWOT Analysis Agent
4. Revenue Model Agent
5. Risk Assessment Agent
6. Business Plan Agent
7. Investor Pitch Agent

### Analytics & Reporting

* Startup scoring system
* Business viability reports
* Market opportunity analysis
* Risk evaluation
* PDF report export

### User Management

* User registration and login
* JWT-based authentication
* Protected routes
* Secure project storage

### Dashboard

* Project management
* Historical reports
* Validation tracking
* Startup analytics

---

## Architecture

StartupIQ AI follows a full-stack architecture:

Frontend (HTML/CSS/JavaScript)
↓
Express.js API
↓
AI Agent Pipeline
↓
MongoDB Database

Each AI agent performs a specialized analysis and contributes to the final startup report.

---

## Tech Stack

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript
* Chart.js
* jsPDF

### Backend

* Node.js
* Express.js
* JWT Authentication

### Database

* MongoDB
* Mongoose

### AI

* Groq API
* Llama 3.3 70B Versatile

---

## Project Structure

StartupIQ-AI/

backend/

* agents/
* middleware/
* models/
* routes/
* server.js

frontend/

* css/
* js/
* pages/
* index.html

.env
package.json
README.md

---

## Installation

Clone the repository:

git clone https://github.com/yourusername/StartupIQ-AI.git

Move into the project folder:

cd StartupIQ-AI

Install dependencies:

npm install

---

## Environment Variables

Create a `.env` file in the root directory.

Example:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GROQ_API_KEY=your_groq_api_key

---

## Running the Project

### Step 1: Start MongoDB

Open a terminal and run:

mongod

Keep this terminal running.

---

### Step 2: Start the Backend Server

Open a second terminal:

node backend/server.js

Expected output:

MongoDB connected

StartupIQ running on http://localhost:5000

---

### Step 3: Open the Application

Open:

http://localhost:5000

Create an account and begin validating startup ideas.

---

## Sample Workflow

1. Register/Login
2. Create a new startup validation project
3. Enter startup details
4. Run AI analysis
5. Generate startup report
6. Export report as PDF
7. Save results to dashboard

---

## Design Highlights

The interface uses a custom earth-tone design system featuring:

* Forest green theme
* Warm brown accents
* Amber highlights
* Glassmorphism effects
* Animated gradient orbs
* Scroll reveal animations
* Bento-grid feature layout
* Interactive dashboard cards

This visual design differentiates the project from traditional SaaS dashboards.

---

## Future Enhancements

* Real-time market data integration
* Investor recommendation engine
* Team collaboration features
* Startup benchmarking
* Pitch deck generation
* AI financial forecasting
* Deployment on AWS/Vercel

---

## Author

Aastha Deep

Computer Science Student

Built as a portfolio project to explore AI-powered startup validation systems and multi-agent architectures.
