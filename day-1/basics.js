fetch("https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user")
.then(async (res)=>{
    let data = await res.json();
    let findID = data.filter((data)=>{return data.id === '8'})
    console.log(findID);
})