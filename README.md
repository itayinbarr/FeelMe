FeelMe
==============================

An AI based platform designed to answer your human questions. 
It was created to gain insights on human feelings and
interactions, for learning and self reflection.

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


Project Organization
------------

    ├── README.md                    <- The top-level README for developers using this project
    ├── LICENSE.md                   <- MIT
    ├── .gitignore                   <- For envornment directories
    ├── data                         <- Data directories, containing both raw and preprocessed (recommended to store here)
    │   ├── processed                <- Preprocessed files directory
    │   └── raw                      <- Raw files directory
    │
    ├── EEGDataPrep                  <- Containing the software itself
    │   ├── dataprep                 <- Directory of all functions of the software
    │   │   └── dataprep.py          <- All functions of the software
    │   │
    │   └── front                    <- Directory of GUI code
    │   │   └── front.py             <- Frontend code
    │   │
    │   ├── __init__.py              <- For syntax purposes
    │   └── runner.py                <- Running the software
    │
    └── tests                        <- Tests directory
        └── backend_tests.py         <- Unit tests of backend
 
Dependencies
------------

- Python
- MNE Python
- TKInter
--------
