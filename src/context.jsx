import React from "react";


const todos = [{task:"reading"},{task:"writing"},{task:"studying"}]


export const todo_context = React.createContext(todos);