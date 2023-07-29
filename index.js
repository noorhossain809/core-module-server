const express = require('express')
const userRoute = require("./router/v1/user.route")
const app = express()
const cors = require("cors");
const { limiter } = require('./middlewere/limiter');
const port = 6000


app.use(cors())
app.use(express.json())

// Apply the rate limiting middleware to all requests
app.use(limiter)

app.use("/api/v1/user", userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


















// const others = require('./other')
// const http = require('http');
// const PORT = 5000
// const result = others.add(4,3)
// const fs = require("fs")

// const result2 = others.odd(10, 7)
// //console.log(http)

// const server = http.createServer(function(req, res){

//     //write code here
//     if(req.url === '/'){
//       fs.readFile('first.txt', (err, data) => {
//         if(err){
//           res.write("Failed to Read Data!!!")
//           res.end()
//         }
//         else{
//           res.write(data)
//           res.end()
//         }
//       })
//     }

//     // if(req.url === '/write'){
//     //   fs.readFile('second.txt', (err, data) => {
//     //     if(err){
//     //       res.write("Failed to Read Data!!!")
//     //       res.end()
//     //     }
//     //     else{
//     //       res.write(data)
//     //       res.end()
//     //     }
//     //   })
//     // }

// if(req.url === '/append'){
//   fs.writeFile('second.txt', 'No! It will be full not pull ! 😑', (err)=> {
//     if(err){
//       res.write("Failed to read data!!!")
//       res.end()
//     }else{
//       res.write("Data read successfully")
//       res.end()
//     }
//   })
// }
    
  
//   });
  
//   server.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`)
//   }); 