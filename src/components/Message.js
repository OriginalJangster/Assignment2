import React from "react";
import DetailedView from "./DetailedView";
import {connect} from 'react-redux';

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleModal = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <li key={this.props.message + (Math.floor(Math.random() * Math.floor(100)))}>
            {this.props.message}
            <div>
                <button onClick={() => this.props.removeItem(this.props.message)}>Delete</button>
                <button className={"details-button"} onClick={() => this.toggleModal()}>See Details</button>
            </div>
            {this.state.isOpen ? <DetailedView activeMessage={this.props.message} show={this.state.isOpen} onClose={this.toggleModal}/> : null}
        </li>
        );
    }
}

export default (Message);