import React from 'react'

function logProps(Component) {
  return class LogProps extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('prevProps', this.props);
      console.log('nextProps', nextProps);
    }

    render() {
      return <Component {...this.props} />;
    }
  }
}

export default logProps;