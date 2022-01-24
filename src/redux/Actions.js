import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "./ActionType"

export const addExpense = (data) => {
    return{
        type: ADD_EXPENSE,
        data,
    }
}

export const deleteExpense = (id) => {
    return{
        type: DELETE_EXPENSE,
data:id
    }
}

export const searchExpense = (query) =>{
    return{
        type: SEARCH_EXPENSE,
query,
    }
}

