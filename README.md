// README.md

# Poll Application API
# I HAVE ONLY IMPLEMENT CREATE A POLL AND GETALL POLLS DUE TO MISUSE OF CODE IN PROFESSIONAL ASSIGNMENTS. I WILL EXPLAIN OTHER SUBTASKS.
## Project Overview

This project implements a RESTful API for a poll application, allowing users to create, retrieve, and vote on polls.

## Setup Instructions

1. Clone the repository.
2. Install Node.js and MySQL.
3. Run `npm install` to install dependencies.
4. Set up the MySQL database using the provided SQL scripts.
5. Update the configuration in `config.js` with your database credentials.
6. Run the application using `npm start`.

## API Documentation

### Endpoints
#
- **Poll Creation**
  - `POST /polls`: Create a new poll.
  - `POST /polls/:pollId/questions`: Add a question set to an existing poll.

- **Fetching Polls**
  - `GET /polls`: Retrieve a list of all created polls.

- **Updating Polls**
  - `PATCH /polls/:pollId`: Update details of a particular poll.
  - `PATCH /polls/:pollId/questions/:questionId`: Update details of a particular question set.

- **Fetching User Polls and Serving Questions**
  - `GET /users/:userId/polls`: Fetch polls for a user and serve questions.

- **Submitting a Poll**
  - `POST /users/:userId/polls/:pollId/submit`: Submit a poll for a user.

- **Fetching Poll Analytics**
  - `GET /polls/:pollId/analytics`: Fetch analytics for a particular poll.
  - `GET /polls/analytics/overall`: Fetch overall poll analytics.

## Postman Collection

[Postman Collection Link](yttps://api.postman.com/collections/32704785-2dd98db9-3fbd-4525-beb7-71efc0dfebf8?access_key=PMAT-01HNHTZW441DPEXBM02JBE1XVY)

