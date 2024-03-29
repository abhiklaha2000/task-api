-To install all the dependencies run the following command:
npm i

-To start the application run the following command and make sure a local MongoDB Instance is installed and running:
npm run start

-Following are the routes that you can check using an API client like Postman

1. Creat a task
Endpoint: '/create-task'
Method: 'POST'
Request Body Example: {
    "title": "My third task",
    "description":"Hii Something 3",
    "due_date":"2024-04-21" // In format YYYY-MM-DD
}

2. Get all tasks
Endpoint: '/get-all-task'
Method: 'GET'

3. Get task by id
Endpoint: '/get-task/:id' // The id in url refers to the task id
Method: 'GET'

4. Update task by id
Endpoint: '/update-task/:id' // The id in url refers to the task id
Method: 'PATCH'
Request Body Example: {
    "title": "I am a rapper",
    "due_date": "2024-04-22" // In format YYYY-MM-DD
}

5. Delete task by id
Endpoint: '/delete-task/:id' // The id in url refers to the task id,
Method: 'DELETE'

