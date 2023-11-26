// it's worked in browser
// fetch("/ping").then((resp)=>{
//     resp.json()
// }).then((res)=>{
//     alert(res.name);
// })


// it's worked in browser that follow console in browser
fetch("/hi",{
    method: "Post",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        name: "Jone"
    })
}).then((res)=>{
    console.log(res);
    res.json();
}).then((res)=>{
    console.log(res);
})
