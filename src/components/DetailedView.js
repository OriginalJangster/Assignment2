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
        if (!event.target.value.replace(/\s/g, '').length) {
            this.setState({value: this.props.activeMessage});
        } else {
            this.setState({value: event.target.value});
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.updateMsg(this.state.value, this.props.activeMessage);
        this.setState({value: ""});
    }

    updateMsg = (text, item) => {
        if ((text !== item) && (text.replace(/\s/g, '').length)) {
            this.setState({value: this.state.value});
            this.props.editItem(text, item);
        }
        this.props.onClose();
    }

    componentWillMount() {
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
    }

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
                        <h2>{this.props.activeMessage}</h2>
                    </div>
                    <div className="footer">
                        <hr/>
                        <h5>Edit your message here!</h5>
                        <form onSubmit={this.submitHandler}>
                        <input defaultValue={this.props.activeMessage} onChange={this.changeHandler} />
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