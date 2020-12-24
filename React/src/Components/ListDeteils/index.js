import {connect} from "react-redux";
import {ListDetalisToComponent} from './ListDatalisTo';

const mapStateToProps =(state)=>{
    return{
    item:state.lists.selectList
    }
}

export const ListDetalisTo = connect(mapStateToProps)(ListDetalisToComponent)

