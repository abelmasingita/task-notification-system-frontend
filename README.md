# Task Notification System - Frontend

This is the frontend part of the Task Notification System, designed to provide real-time notifications for tasks assigned to users. 
The frontend communicates with the backend through WebSockets, displaying task updates as they occur.

# Table of Contents
* Overview
* Setup Instructions
* Design Decisions
* Architecture
* Running the Application
* Testing
* Contributing


# Overview

The Task Notification System frontend provides an interface for users to receive real-time updates on tasks assigned to them. 
It connects to the Spring Boot backend via WebSockets to display notifications instantly when new tasks are assigned, updated, or completed. This ensures a seamless, up-to-date experience for the user.

The frontend application is built with modern JavaScript frameworks (React) and makes use of WebSocket connections to receive task-related notifications.

# Setup Instructions

## Prerequisites

* Node.js (v16 or higher)
* npm (v7 or higher) or Yarn (v1.22 or higher)

## Step-by-Step Guide

*  git clone https://github.com/your-username/task-notification-system-frontend.git
* cd task-notification-system-frontend

# Install dependencies: If you're using npm, run:

* npm install

# Configure WebSocket connection:

Make sure to update the WebSocket connection settings in the frontend to match the backend WebSocket server URL. 

# Run Application:
* npm run dev

* Access the frontend: After starting the development server, you can access the frontend application at http://45.220.164.81:3000 (or the port specified in your configuration).

# Design Decisions

# WebSocket for Real-Time Notifications: 
* I chose to implement WebSockets for real-time communication between the backend and the frontend. This provides low-latency updates for task assignments and updates, ensuring users are always informed about their tasks.

# Frontend Framework:
* The frontend is built with React  to take advantage of its component-based architecture and ease of state management. React hooks and context are used for managing the WebSocket connection and task data.

# UI Framework: 
* The UI is styled using Material-UI  for consistent, responsive design. We aimed for a clean and intuitive interface to display task notifications clearly.

# State Management: 

* For managing the application state (such as active tasks and notifications), we used React Context API . This allows for a global state that can be accessed across components, making the notification system easier to implement.

# Task Notification System:
* Notifications are displayed in real-time on the frontend as users receive task assignments, updates, or completions.
* The notifications are styled using a toast notification system (Sweet Alerts) for easy integration.

# Architecture
* The frontend architecture follows the standard practices for modern web applications, with the main focus on communication with the backend via WebSockets for real-time updates. 

# Frontend: 

* The frontend is responsible for managing the UI and handling real-time updates via WebSocket communication. It displays task notifications as soon as they are pushed from the backend.
# WebSocket Connection:

* The frontend establishes a WebSocket connection to the Spring Boot backend to receive real-time notifications.

# Backend API: 
* The backend provides task data and handles WebSocket communication for broadcasting task updates.

# Demo

* Landing

![image](https://github.com/user-attachments/assets/c979fdc8-a588-4e0b-89c9-b8cd6f233b6e)


* Sign In

![image](https://github.com/user-attachments/assets/20747eb2-8dcf-46a4-a447-3012144418ef)


* Dashboard

![image](https://github.com/user-attachments/assets/84ae4c8a-c4a6-44d1-a282-962368a4d001)


* Notifications

![image](https://github.com/user-attachments/assets/a8defc91-f262-45a8-9573-2409e9b9067a)


* Preferences

![image](https://github.com/user-attachments/assets/3c560e44-6fcf-46ba-9e81-50775f000f80)


* Settings

![image](https://github.com/user-attachments/assets/d0a0bbd2-8dc5-4b1b-8a8f-8c180c456a40)


* Profile

![image](https://github.com/user-attachments/assets/2822e007-8a21-4e30-914f-f6637de73ab3)


