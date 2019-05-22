import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAlertMessage } from '../.././actions/alertsActions';
import Alert from './Alert';

class AlertsList extends Component {

  removeAlert = (id) => {
    this.props.deleteAlertMessage(id)
  }

  render() {
    const alerts = this.props.alerts.map(alert => <Alert key={alert.id} alert={alert} removeAlert={ this.removeAlert }/>)
    return (
      <>
        { alerts }
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    alerts: state.alerts
  }
}

export default connect(mapStateToProps, { deleteAlertMessage })(AlertsList);
