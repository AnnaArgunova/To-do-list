import {connect} from "react-redux";
import {ListItemsComponent} from './ListItems';
import {selectListAction} from '../../Store/actions/list'

const actions ={
    selectListAction
}

export const ListItems = connect(null, actions)(ListItemsComponent)

