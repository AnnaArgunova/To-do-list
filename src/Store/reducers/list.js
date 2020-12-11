
import {SELECT_LIST} from '../actions/list';

const initialState =  {
    list: [
        {
        id:1,
        date: "12.12.20",
        title: "Update somthing",
        text: "Update ....",
        important: true,

    },
    {
        id:2,
        date: "12.12.20",
        title: "Update somthing",
        text: "Update ....",
        important: false,

    },    {
        id:3,
        date: "12.12.20",
        title: "Update somthing",
        text: "Update ....",
        important: false,

    },    {
        id:4,
        date: "12.12.20",
        title: "Update somthing",
        text: "Update ....",
        important: false,

    }
],
    selectList: null
 }

export const lists =(state=initialState, action)=>{
    switch(action.type){
        case SELECT_LIST:{
            return{
                ...state,
                selectList: action.list
            }
    }
    default:
    return{
        ...state
    }
}
}

