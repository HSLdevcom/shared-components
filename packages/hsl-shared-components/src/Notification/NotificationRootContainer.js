import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import * as actions from './actions';
import NotificationRoot from './NotificationRoot';

const mapStateToProps = state => ({ notification: state.notification });
const NotificationRootContainer = connect(mapStateToProps, actions)(NotificationRoot);

NotificationRootContainer.propTypes = {
  timeoutDelay: PropTypes.number.isRequired
};

export default NotificationRootContainer;
