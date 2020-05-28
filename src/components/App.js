import React from "react";
import { useSelector} from "react-redux";
import InputField from "./InputField";
import ListArea from "./ListArea";

function App() {
    const messages = useSelector(state => state.messageList);
    return <div className="App">
        <h1>Messages {messages}</h1>
        <InputField>Input</InputField>
        <ListArea>Your List: </ListArea>
    </div>
}

export default App;