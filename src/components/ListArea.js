import React from "react";
import { connect } from "react-redux";
import {clearList, closeItem, displayList} from "../actions";

class ListArea extends React.Component {
    render() {
        return (
            <div id="message-board-area" onLoad={() => this.props.displayList()}>
                <ul id="myUL" onClick="closeItem(event), addCheckMark()">
                </ul>
                <button className="clear-list-button clear-button" onClick="clearList()">Clear List</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.displayList
    }
}

export default connect(mapStateToProps, { displayList }, { closeItem }, {clearList}) (ListArea);