import React from "react";
import { connect } from "react-redux";

class DetailedView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: this.props.currMessage}
    }

    openItem = (id) => {
        for (let i = 0; i < this.props.messages; i++) {
            if (this.props.currMessage.payload === id)
                this.setState({active: this.props.currMessage});
                return this.state;
        }
    }

    render() {
        return (
            <div>{this.openItem(this.props.uniqueID)}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currMessage: state.listItem.message,
        messages: state.list.messages
    }
}

export default connect(mapStateToProps) (DetailedView);