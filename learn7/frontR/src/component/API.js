
export function fetchAdd({nameNew, typeName}){

    fetch("/user",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            name : nameNew,
            type : typeName
        })
    })
    .then((resp) => console.log("ok create post"))
    .catch((err) => console.log(err));
}