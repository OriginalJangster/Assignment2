import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {editItem, getMessages} from "../actions";

class DetailedView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    changeHandler = (event) => {
        if (!event.target.value.replace(/\s/g, '').length) {
            this.setState({value: this.props.activeMsg.message});
        } else {
            this.setState({value: event.target.value});
        }
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.updateMsg(this.state.value, this.props.activeMsg._id);
        this.setState({value: ""});
        window.location.reload();
    };

    updateMsg = (text, id) => {
        if ((text !== this.props.activeMsg._id) && (text.replace(/\s/g, '').length)) {
            this.setState({value: this.state.value});
            this.props.editItem(text, id);
        }
        this.props.onClose();
    };

    UNSAFE_componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (event) => {
        if (this.node.contains(event.target)) {
            // do nothing
        } else {
            this.props.onClose();
        }
    };

    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        return (
            <div className={"popup"}>
                <div ref={node => this.node = node} className={"popup-inner"}>
                    <div className={"top"}>
                        {this.props.children}
                        <h2>{this.props.activeMsg.message}</h2>
                    </div>
                    <div className="footer">
                        <hr/>
                        <h5>Edit your message here!</h5>
                        <form onSubmit={this.submitHandler}>
                            <input defaultValue={this.props.activeMsg.message} onChange={this.changeHandler} />
                            <h6 className={"time-details"}>
                                <span className={"created-at"}>Created at: {this.props.activeMsg.createdAt} </span>
                                <span className={"updated-at"}>Updated at: {this.props.activeMsg.updatedAt}</span>
                            </h6>
                            <div>
                                <button type={"submit"} className={"save-button"}>
                                    Save
                                </button>
                                <button className={"close-details-button"} onClick={this.props.onClose}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

DetailedView.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

const mapStateToProps = (state) => {
    return {
        currentMessages: state.list.messages
    }
};

const mapDispatchToProps = {
    editItem,
    getMessages
};

export default connect(mapStateToProps, mapDispatchToProps) (DetailedView);