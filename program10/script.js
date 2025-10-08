function loaduser(){
    const result = document.getElementById("res")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        if(!response){
            throw new Error("internet issue")
        }
        return response.json()
    })
    .then((data)=>{
        data.map((value)=>{
            console.log(value.username,value.email,value.address.city)
            result.innerHTML+=`<li><strong>${value.username}</strong>-${value.email}-${value.address.city}</li>`
        })
    }).catch(()=>{
        throw new Error("no data found",err)
    })
}