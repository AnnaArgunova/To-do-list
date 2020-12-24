import {
    SELECT_LIST
} from '../actions/list';

import {createReducer} from '../helper/reducer'

const initialState = {
    list: [{
            id: 1,
            date: "12.12.20",
            title: "Update somthing",
            text: "Update .1..",
            important: true,

        },
        {
            id: 2,
            date: "12.12.20",
            title: "Update somthing",
            text: "Update .2..",
            important: false,

        }, {
            id: 3,
            date: "12.12.20",
            title: "Update somthing",
            text: "Update .3..",
            important: false,

        }, {
            id: 4,
            date: "12.12.20",
            title: "Update somthing",
            text: "Update .4..",
            important: false,

        }
    ],
    selectList: null
}

const lists ={
[SELECT_LIST]:(state=initialState, action)=>{
    return{
        ...state,
               selectList: action.list
    }
}
}

// export const lists = (state = initialState, action) => {

//     switch (action.type) {

//         case SELECT_LIST: {
            
//             return {
//                 ...state,
//                 selectList: action.list
//             }
//         }
//         default:
//             return state

//     }


// }

export default createReducer(initialState, lists)