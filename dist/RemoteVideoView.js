import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';
const RemoteVideoView = {
  name: 'PjSipRemoteVideoView',
  propTypes: {
    windowId: PropTypes.string.isRequired,
    objectFit: PropTypes.oneOf(['contain', 'cover'])
  }
};
const View = requireNativeComponent('PjSipRemoteVideoView');
export default View;
//# sourceMappingURL=RemoteVideoView.js.map