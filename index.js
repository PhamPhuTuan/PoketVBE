const express = require('express')
const app = express()
const http = require('http')
const mongoose=require("mongoose");
const Firebase=require("./routes/Firebase")
var cors = require('cors')
const server = http.createServer(app)
app.use(express.json());
app.use(cors())

mongoose.connect("mongodb+srv://phutuan:1234@cluster0.u0olj5k.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    .then(()=>console.log("connect DB successfull"))
    .catch((err)=>console.log(err));
const socketIo = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
  });

app.use("/api/Firebase",Firebase);
socketIo.on("connection", (socket) => {
  console.log("New client connected" + socket.id);

  socket.emit("getId", socket.id);

  socket.on("sendDataClient", function(data) {
    console.log(data)
    socketIo.emit("sendDataServer", { data });
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
//
server.listen( process.env.PORT || 3001, () => {
    console.log('listening on port 2999')
})
