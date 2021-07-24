import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();
const socket = io("http://localhost:5000")

const ContextProvider = ({ children }) => {

    const [call, setCall] = useState({});
    const [me, setMe] = useState("");
    const [stream, setStream] = useState(null);
    const myvideo = useRef();
    useEffect(() => {

        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentstream) => {
            setStream(currentstream);
            myvideo.current.srcobject = currentstream;
        });

        socket.on("me", (id) => setMe(id));
        socket.on("calluser", ({ from, name, signal }) => {
            setCall({ isReceivedCall: true, from, signal, name })
        })

    }, [])

    const answerCall = () => {}

    const callUser = () => {}

    const leaveCall = () => {}


}

export default ContextProvider;