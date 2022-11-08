FeelMe
==============================

An AI based platform designed to answer your human questions. 
It was created to gain insights on human feelings and
interactions, for learning and self reflection.

This project is a full-stack web app, which serves data analysis and visualization presentation
of emotions and face comparison.

Getting Started
------------

To use analysis functions, keep the photos in

`.backend/database`

From within the repo directory run:

`yarn run start-api`

In another terminal, run:

`npm start`

You can now load photos and use the different tools.

For analyzing emotions based on a photo, load a file and click Analyze. 

For comparing two people, and understand if they're the same - click Compare.

Demo videos
------------

### Frontend Overview

![Alt text](./feelme-frontend/src/assets/overview.gif?raw=true "Optional Title")

### Emotion Recognition

![Alt text](./feelme-frontend/src/assets/emotion.gif?raw=true "Optional Title")

### Face Comparison of Two Photos

![Alt text](./feelme-frontend/src/assets/verify.gif?raw=true "Optional Title")

Project Organization
------------

    ├── README.md                           <- The top-level README for developers using this project
    ├── LICENSE.md                          <- MIT
    ├── .gitignore                          <- 
    ├── backend                             <- Backend directory, api and FLASK configuration
    │   ├── database                        <- Photos directory
    │   └── api.py                          <- FLASK app file
    │
    ├── feelme-frontend                     <- Containing the frontend React Project
    │   ├── public                          <- Directory React initiation related files.
    │   │
    │   └── src                             <- Directory of files created for project.
    │   │   ├── assets                      <- Directory of photos for UI
    │   │   └── components                  <- Directory of all react components
    │   │       ├── BlockComponent.js       <- Component of a general block.
    │   │       ├── BlockComponent.css      <- BlockComponent.js CSS file
    │   │       ├── EmotionRecognition.js   <- Component of emotion analysis UI
    │   │       ├── FaceCompare.js          <- Component of face comparison UI
    │   │       ├── DoughnutComponent.js    <- Component of emotion doughnut
    │   │       └── VerifiedComponent.js    <- Component of face comparison doughnut
    │   │
    │   │   └── pages                       <- Directory of pages
    │   │       ├── Main.js                 <- main ui file
    │   │       └── Main.css                <- CSS file of Main.js
 
Dependencies
------------

- React.js
- DeepFace
- Python
- Flask
- Chart.js
--------
