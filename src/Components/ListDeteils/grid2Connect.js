import {connect} from "react-redux";
import {ListItems} from './ListItems';

import {selectListAction} from '../../Store/actions/list'

const actions ={
    selectListAction
}

//export const listConnect = connect(null, actions)(Grid2)

export const listConnect = connect(null, actions)(ListItems)


