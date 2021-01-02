import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
class AlertStatus extends Component {
    handleDismiss = () => {
        this.props.alertOff();
    }
    checkAlert = () => {
        if (this.props.alertStatus) {
            return <Alert position={this.props.positionAlert} type={this.props.typeAlert} onDismiss={() => this.handleDismiss()} timeout={1000}>
                {this.props.alertContent}
            </Alert>
        }
    }
    render() {
        console.log(this.props.positionAlert);
        return (
            <AlertContainer>
                {this.checkAlert()}
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertStatus: state.alertStatus,
        alertContent: state.alertContent,
        typeAlert: state.typeAlert,
        positionAlert: state.positionAlert
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
                type: "CHANGE_ALERT_STATUS_OFF"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertStatus)