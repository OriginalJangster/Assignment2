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
    };

    render() {
        return (
            <li>
                <div className={"message-displayed"}>
                    {this.props.obj.message}
                </div>
                <div className={"buttons-area"}>
                    <button onClick={() => this.props.removeMsg(this.props.obj._id)}>Delete</button>
                    <button className={"details-button"} onClick={() => this.toggleModal()}>See Details</button>
                </div>
                {this.state.isOpen ? <DetailedView activeMsg={this.props.obj} show={this.state.isOpen} onClose={this.toggleModal}/> : null}
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentMessages: state.list.messages
    }
};

export default connect(mapStateToProps) (Message);