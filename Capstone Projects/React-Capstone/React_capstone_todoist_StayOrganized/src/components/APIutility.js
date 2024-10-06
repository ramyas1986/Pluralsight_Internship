const BASE_URL = "http://localhost:8083/api/"

// function to add the task
export async function createTodo(todoJSON) {
    return await sendPostCall(BASE_URL + "todos", JSON.stringify(todoJSON));
}

export async function createUser(userJSON) {
    return await sendPostCall(BASE_URL + "users", JSON.stringify(userJSON));
}

export async function isUserNameAvailable(userName) {
    let isAvailable = false;
    let jsonResp = await makeGetCall(BASE_URL + "username_available/" + userName);
    if (jsonResp) {
        isAvailable = jsonResp.available;
    }
    return isAvailable;
}

export async function getAllUsers() {
    let users = [];
    let jsonResp = await makeGetCall(BASE_URL + "users");
    if (jsonResp) {
        users = jsonResp;
    }
    return users;
}

export async function getAllCategories() {
    let categories = [];
    let jsonResp = await makeGetCall(BASE_URL + "categories");
    if (jsonResp) {
        categories = jsonResp;
    }
    return categories;
}

export async function getTodosByUser(userId) {
    let todos = [];
    let jsonResp = await makeGetCall(BASE_URL + "todos/byuser/" + userId);
    if (jsonResp) {
        todos = jsonResp;
    }
    return todos;
}

export async function deleteTodo(todoId) {
    let resp = false;
    let txtResp = await makeDeleteCall(BASE_URL + "todos/" + todoId);
    if (txtResp) {
        return true;
    }
    return resp;
}

export async function updateTodo(todoId, todoJSON) {
    return await makePutCall(BASE_URL + "todos/" + todoId, JSON.stringify(todoJSON));
}

/* Fetch call implementation */
async function sendPostCall(url, bodyData) {
    try {
        return await fetch(url, {
            method: "POST",
            body: bodyData,
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => {
                if (response.ok)
                    return response.json();
            })
            .then((jsonData) => {
                return (jsonData);
            })
    }
    catch (error) {
        // TypeError: Failed to fetch
        console.log('There was an error', error);
        return false;
    }
}

async function makeGetCall(url) {
    try {
        return await fetch(url)
            .then(response => {
                // if response ok return the response
                if (response.ok)
                    return response.json();
            })
            .then((jsonData) => {
                return (jsonData);
            })
    }
    catch (error) {
        // TypeError: Failed to fetch
        console.log('There was an error', error);
        return false;
    }
}

async function makePutCall(url, bodyData) {
    try {
        return await fetch(url, {
            method: "PUT",
            body: bodyData,
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return false;
            })
            .then(resp => {
                return resp;
            });

    } catch (error) {
        // TypeError: Failed to fetch
        console.log('There was an error', error);
        return false;
    }
}

async function makeDeleteCall(url) {
    try {
        // make fetch call to delete
        return await fetch(url, {
            method: "DELETE"
        })
            .then(res => res.text()) // or res.json()
            .then(res => {
                return res;
            })
    }
    catch (error) {
        // TypeError: Failed to fetch
        console.log('There was an error', error);
        return false;
    }

}





