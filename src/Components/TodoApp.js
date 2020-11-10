import React, {useState} from 'react';
import {useOvermind} from './../Others/OvermindHelper';
import {NodeFetchHelper} from "../Others/NodeFetchHelper";
import {json} from "overmind";

const TodoApp = () => {
    const {state, actions} = useOvermind();
    var name;
    var _id;
    return (
        <div>
            <input id={'taskName'} type={'text'} placeholder={'Input Task Name'}/>
            <button onClick={function () {
                name = document.getElementById('taskName').value
                var randomNumber = Math.floor(Math.random() * 100) + 1;
                var email = "rayhan" + randomNumber + "@gmail.com";
                var user = {
                    name: name,
                    email: email
                }
                NodeFetchHelper.post("http://localhost:3001/users/",null, null, user, function (status, jsonData) {
                })
                NodeFetchHelper.get("http://localhost:3001/users/", null, null, function (status, jsonData) {
                    actions.setTodo(jsonData)
                })
            }}>Post</button>

            <button onClick={function () {
                if (state.editCondition == true){
                    name = document.getElementById('taskName').value
                    var user = {
                        name: name,
                        email: ""
                    }
                    console.log("_id: " + state.editid)
                    console.log("Condition: " + state.editCondition)
                    NodeFetchHelper.put("http://localhost:3001/users/" + _id, null, null, user, function (status, data) {
                        console.log(status)
                        console.log(data)
                    })
                    NodeFetchHelper.get("http://localhost:3001/users/", null, null, function (status, jsonData) {
                        actions.setTodo(jsonData)
                    })

                    actions.setEditCondition(false, null);
                }
            }}>Put</button>

            <button onClick={function () {
                NodeFetchHelper.get("http://localhost:3001/users/", null, null, function (status, jsonData) {
                    actions.setTodo(jsonData)
                })
            }}>Get
            </button>
            <button onClick={function () {
                NodeFetchHelper.delete("http://localhost:3001/users/", null, null, function (status, object) {
                    actions.setTodo([])
                })
            }}>Delete All</button>
            {
                state.todo.map(function (item, index) {
                    return <div>
                        <div>{item.name} -- {item._id}

                            <button onClick={function () {
                                NodeFetchHelper.delete("http://localhost:3001/users/" + item._id, null, null, function (status, data) {
                                })
                                NodeFetchHelper.get("http://localhost:3001/users/", null, null, function (status, jsonData) {
                                    actions.setTodo(jsonData)
                                })
                            }}>Delete</button>

                            <button onClick={function () {
                                document.getElementById('taskName').value = item.name;
                                _id = item._id;
                                actions.setEditCondition(true, item._id)
                            }}>Put</button>

                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default TodoApp;

