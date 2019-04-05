import React from 'react';

export default class Alert extends React.Component {

  componentDidMount() {
    this.timer = setTimeout( () =>
      this.props.removeAlert(this.props.alert.id),
      4000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  alertClass (type) {
    let classes = {
      error: 'alert-danger',
      success: 'alert-success'
    };
    return classes[type] || classes.success;
  }

  render() {
    const { alert } = this.props;
    const alertClassName = `alert ${ this.alertClass(alert.type) } fade show`;
    return(
      <div className={ alertClassName }>
        <button className='close'
          onClick={ () => {this.props.removeAlert(alert.id)} }>
          <i className="far fa-times-circle"></i>
        </button>
        { alert.text }
      </div>
    );
  }
}
