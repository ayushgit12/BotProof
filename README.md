# Bot Prediction using Mouse Pattern

This project is designed to predict bot activity using mouse movement patterns captured in real-time. It consists of three main components: a frontend built with React and Vite, a Flask backend for data processing and machine learning model training, and a Node.js backend for real-time data collection.

## Folder Structure

- **frontend**: Contains the React application used for user interaction and real-time data visualization.
- **flask-backend**: Includes the Flask server responsible for data processing, model training, and bot prediction.
- **nodejs-backend**: Houses the Node.js server that collects real-time mouse movement data from the frontend.

## Features

- **Real-time Mouse Pattern Analysis**: Captures and analyzes mouse movement data to detect patterns indicative of bot behavior.
- **Machine Learning Model**: Utilizes machine learning algorithms to train models based on historical mouse movement patterns and predict bot activities.
- **Interactive Visualization**: Provides interactive visualizations in the frontend to display real-time and historical data insights.
- **Scalable Architecture**: Uses separate backends for data processing and frontend interaction, ensuring scalability and modularity.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/devvv17i/sih_bot.git
   cd sih_bot
   ```

2. Start frontend
   ```bash
   cd frontend2
   npm i
   npm run dev
   ```

3. Start the backend
   ```bash
   cd backend
   npm i
   npm start
   ```

4. Start the flask server
   ```bash
   cd flask_backend
   pip install -r req.txt
   python server.py
   ```
   
