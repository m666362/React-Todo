import React, {useState} from 'react';
import {useOvermind} from "../Others/OvermindHelper";

const App = () => {
    // const {state, actions} = useOvermind();

    return (
        <div>
            <input id={"taskName"} type={'text'} placeholder={"Input Task"}/>
            <button onClick={function () {
                var taskName = document.getElementById("taskName").value
                // actions.addTask(taskName)
            }}>Add</button>

        </div>
    );
};

export default App;