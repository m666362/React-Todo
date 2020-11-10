// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {createHook} from "overmind-react";

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        todo: [],
        editCondition: false,
        editid: "5faaddbfd082f0261c5fa466"
    },
    actions: {
        setTodo({state}, data){
            state.todo = data;
            console.log(state.editid)
        },
        setEditCondition({state}, bole, id){
            state.editCondition = bole;
        }
    }
});
