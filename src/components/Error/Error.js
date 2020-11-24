import React from 'react';
import './Error.css';

class Error extends React.Component {

    state = {
        show: true
    }

    handleClosing = () => {
        this.setState({
            show: false
        });
    }

    render(){
        return (
            this.state.show ? 
            (<div class="Alert" onClick={this.handleClosing}>
                <strong>{`Error${this.props.errorCode}`}</strong>
            </div>) : null
        );
    }
};

export default Error;