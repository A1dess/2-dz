console.log("client request to get data ...");
console.log("loading started...");

let promise = new Promise ((resolve, reject) =>{
    const person = {
        url: "https://example.com",
        status: 200,
      };

setTimeout(() => {

const JsonData = JSON.stringify(person)
  
    console.log( JsonData);
  resolve(JsonData);
  reject(()=> {
    console.log("error");
  })
    },2000);
})
promise
    .then((JsonData) => {
        setTimeout(() => {
           console.log("Parsed data");
           const JsonParsed = JSON.parse(JsonData)
           console.log(JsonParsed);
           console.log("loading ended");
         
    }, 3000);
    })
    .catch(()=>{
        console.log("error");
    })


