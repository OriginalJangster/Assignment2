import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class DetailedView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    changeHandler = (event) => {
        if (event.target.value === "") {
            this.setState({value: this.props.activeMessage});
        } else {
            this.setState({value: event.target.value});
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert('A message was added to the list: ' + this.state.value);
        this.updateMsg(this.state.value, this.props.activeMessage);
        this.setState({value: ""});
    }

    updateMsg = (text, item) => {
        this.setState({value: this.state.value});
        this.props.editItem(text, item);
    }

    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        return (
            <div className={"popup"}>
                <div className={"popup-inner"}>
                    <div className={"top"}>
                        {this.props.children}
                        <h2>{this.props.activeMessage}</h2>
                        <hr/>
                    </div>
                    <h5>Edit your message here!</h5>
                    <div className="footer">
                        <form onSubmit={this.submitHandler}>
                        <input defaultValue={this.props.activeMessage} onChange={this.changeHandler} />
                        <button className={"close-details-button"} onClick={this.props.onClose}>
                            Close
                        </button>
                        <button className={"save-button"} onClick={() => {this.updateMsg(this.state.value, this.props.activeMessage)}}>
                            Save
                        </button>
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
}

const mapStateToProps = (state) => {
    return {
        currentMessages: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        editItem: (text, item) => dispatch({ type: 'EDIT_ITEM', payload: text, item: item })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DetailedView);