const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const port = process.env.PORT || 5000;
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
app.use(cors());

io.on("connection", (socket) => {
    socket.emit("me", socket.id);

    socket.on("disconnect", () => {
        socket.broadcast.emit("call Ended")
    })

    socket.on("calluser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("calluser", { signal: signalData, from, name });
    })
    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal)
    })
})

server.listen(port, () => console.log(`server started listening at port ${port}`));