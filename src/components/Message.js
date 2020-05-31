import React from "react";
import DetailedView from "./DetailedView";
import {connect} from "react-redux";

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
            <li>
                <div className={"message-displayed"}>
                    {this.props.message}
                </div>
                <div className={"buttons-area"}>
                    <button onClick={() => this.props.removeItem(this.props.message)}>Delete</button>
                    <button className={"details-button"} onClick={() => this.toggleModal()}>See Details</button>
                </div>
                {this.state.isOpen ? <DetailedView messages={this.props.currentMessages} activeMessage={this.props.message} show={this.state.isOpen} onClose={this.toggleModal}/> : null}
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentMessages: state.list
    }
}

export default connect(mapStateToProps) (Message);