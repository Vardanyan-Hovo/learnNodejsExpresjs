import {IUser} from "./User"

export function fetchAdd({name, type, password, email} : IUser)
{
    fetch("/user",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            name : name,
            email : email,
            type : type,
            password : password
        })
    })
    .then((resp) => console.log("ok create post"))
    .catch((err) => console.log(err));
}

export async function  fetchGetUsers(): Promise<IUser[]>
{
    try {
        const response = await fetch("/users", {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })

        if (!response.ok)
        {
            throw new Error("Network response was not ok")
        }
        const data = await response.json();
        return data as Promise<IUser[]>
    }
    catch (error){
        console.error("There was a problem fetching the user:", error);
        throw error;
    }
}


export async function fetchGetUserById({id}:{id : number}): Promise<IUser>
{
    try {
        const response = await fetch(`/user/${id}`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json() ;
        console.log("User data:", data);
        return data;
    }
    catch (error) {
        console.error("There was a problem fetching the user:", error);
        throw error;
    }
}

export async function fetchPutUser(user : IUser): Promise<IUser>
{
    try {
        const response = await fetch(`/user/${user.id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body : JSON.stringify({
                id : user.id,
                name: user.name,
                //and others informations
            })
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("User data:", data);
        return data;
    }
    catch (error) {
        console.error("There was a problem fetching the user:", error);
        throw error;
    }
}


export async function fetchDeleteUser(user : IUser):  Promise<string>
{
    try {
        const response = await fetch(`/user/${user.id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // Assuming the server sends a message upon successful deletion
        const deletionMessage = await response.text();
        console.log("Deletion message:", deletionMessage);
        return deletionMessage;
    }
    catch (error) {
        console.error("There was a problem deleting the user:", error);
        throw error;
    }
}


export async function fetchGetUserQuery({id}:{id : number}): Promise<IUser>
{
    try {
        const response = await fetch(`/user?type=Guardian&q=Armenia`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json() ;
        console.log("User data:", data);
        return data;
    }
    catch (error) {
        console.error("There was a problem fetching the user:", error);
        throw error;
    }
}