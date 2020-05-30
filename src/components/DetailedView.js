import React from "react";
import { connect } from "react-redux";

class DetailedView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    changeHandler = (event) => {
        if (event.target.value === "") {
            alert("You must write something!");
        } else {
            this.setState({text: event.target.value});
        }
    }

    submitHandler = (event) => {
        if (this.state.text === "") {
            event.preventDefault();
            alert("You must write something!");
        } else {
            event.preventDefault();
            alert('A message was updated: ' + this.props.activeMsg);
            console.log(event.target.value);
            this.props.editItem(event.target.value, this.props.activeMsg);
            this.setState({text: ""});
        }
    }

    render() {
        console.log('INSIDE DETAIL RENDER');
        return (
            <div>
            <h2>Item Details:
                <div>{this.props.activeCurr}</div>
            </h2>
            {/*<form onSubmit={this.submitHandler}>*/}
            {/*    <textarea value={this.state.value} placeholder={"Write additional notes for this message!"} onChange={this.changeHandler} rows="4" cols="50" />*/}
            {/*    <button type="submit">Save</button>*/}
            {/*</form>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeMsg: state.item
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        editItem: (text, item) => dispatch({type: 'EDIT_ITEM', payload: text, item: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DetailedView);