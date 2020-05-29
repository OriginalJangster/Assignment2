import React from "react";
import InputField from "./InputField";
import ListArea from "./ListArea";
import DetailedView from "./DetailedView";

function App() {
    return (
        <div className="App">
            <InputField>Input</InputField>
            <ListArea>Your List: </ListArea>
            <DetailedView></DetailedView>
        </div>
    );
}

export default App;