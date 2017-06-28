import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Checkmark, Cross, ArrowLeft, Info } from '../Icons';
import { EE } from './index';
import * as actions from './actions';
import UltraWideContainer from '../UltraWideContainer/UltraWideContainer';

const NotificationBar = UltraWideContainer.extend`
  max-height: 0;
  overflow: hidden;
  color: #fff;
  &.error {
    background-color: #dc0451;
  }
  &.success {
    background-color: #4ea700;
  }
  &.neutral {
    background-color: #fff;
    color: #333;
  }
  .content {
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    .icon svg {
      height: 2em;
      padding: 0 1em;
    }
    .message {
      padding: 1.5em 0;
      display: flex;
      flex-direction: column;
      h3 {
        margin: 0;
        svg {
          padding-left: 0.5em;
        }
      }
    }
    .close-button {
      margin-left: auto;
      button {
        background-color: transparent;
        border: none;
        padding: 0 1em 0 0.5em;
      }
    }
  }
  `;

class NotificationRoot extends Component {
  constructor(props) {
    super(props);
    this.cleanWithAnimation = this.cleanWithAnimation.bind(this);
    this.cleanWithoutAnimation = this.cleanWithoutAnimation.bind(this);
  }
  componentDidMount() {
    EE.on('open', this.props.open);
    EE.on('clean', this.cleanWithAnimation);
    EE.on('cleanNow', this.cleanWithoutAnimation);
  }
  componentWillReceiveProps(nextProps) {
    if (!_.isEmpty(nextProps.notification)) {
      window.scrollTo(0, 0);
      this.notificationBar.animate(
        [
          { maxHeight: '0' },
          { maxHeight: '100vh' }
        ], {
          fill: 'forwards',
          duration: 800
        }
      );
    }
    if (nextProps.notification.timeout === true) {
      _.delay(this.cleanWithAnimation,
        _.has(nextProps.notification, 'timeoutDelay') ? nextProps.notification.timeoutDelay : this.props.timeoutDelay);
    }
  }
  componentWillUnmount() {
    EE.removeListener('open');
    EE.removeListener('clean');
    EE.removeListener('cleanNow');
  }
  cleanWithoutAnimation() {
    if (!_.isEmpty(this.props.notification)) {
      this.props.clean();
    }
  }
  cleanWithAnimation() {
    if (!_.isEmpty(this.props.notification)) {
      this.notificationBar.animate(
        [
          { maxHeight: `${this.notificationBar.clientHeight}px` },
          { maxHeight: '0' }
        ], {
          fill: 'forwards',
          duration: 100
        }
      );
      _.delay(() => this.props.clean(), 100);
    }
  }

  render() {
    const notification = this.props.notification;

    const renderNotificationMessage = (contentItem, idx) => {
      switch (contentItem.type) {
        case 'text':
          return (
            <span key={idx}>{contentItem.msg}</span>
          );
        case 'title':
          return (
            <h3 key={idx}>
              <span>{contentItem.msg}</span>
            </h3>
          );
        case 'link':
          return (
            <a href={contentItem.href} key={idx}>
              <h3>
                <span>{contentItem.msg}</span>
                <ArrowLeft className="type-icon" fill="#fff" height="1em" />
              </h3>
            </a>
          );
        default:
          return null;
      }
    };

    const renderTypeIcon = (type) => {
      switch (type) {
        case 'success':
          return <Checkmark fill={{ inner: '#fff', outer: '#4ea700' }} height="1em" />;
        case 'error':
          return <Info fill="#fff" height="1em" />;
        default:
          return null;
      }
    };

    const renderCloseButton = () =>
      <div className="close-button">
        <button onClick={this.cleanWithAnimation}>
          <Cross fill="#fff" height="1em" />
        </button>
      </div>;
    return (
      <NotificationBar
        innerRef={ref => (this.notificationBar = ref)}
        className={`${notification.type}`}
      >
        <div className="content">
          <div className="icon">
            {renderTypeIcon(notification.type)}
          </div>
          <div className="message">
            {notification.content && notification.content.map((contentItem, idx) =>
              renderNotificationMessage(contentItem, idx)
            )}
          </div>
          {notification.closeButton && renderCloseButton()}
        </div>
      </NotificationBar>
    );
  }
}

NotificationRoot.propTypes = {
  notification: PropTypes.objectOf(PropTypes.any).isRequired,
  open: PropTypes.func.isRequired,
  clean: PropTypes.func.isRequired,
  timeoutDelay: PropTypes.number.isRequired
};
const mapStateToProps = state => ({ notification: state.notification });
export default connect(mapStateToProps, actions)(NotificationRoot);
