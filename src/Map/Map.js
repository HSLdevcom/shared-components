import React from 'react';
import PropTypes from 'prop-types';
import { StaticMap } from 'react-map-gl';
import hslMapStyle from 'hsl-map-style';
import { fromJS } from 'immutable';
import isEqual from 'lodash/isEqual';

export default class Map extends React.Component {
  constructor(props) {
    super();

    this.state = {
      style: fromJS(hslMapStyle.generateStyle({
        sourcesUrl: 'http://api.digitransit.fi/map/v1/',
        glyphsUrl: 'http://kartat.hsl.fi/',
        components: props.components
      }))
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.components, this.props.components)) {
      this.setState({
        style: fromJS(hslMapStyle.generateStyle({
          sourcesUrl: 'http://api.digitransit.fi/map/v1/',
          glyphsUrl: 'http://kartat.hsl.fi/',
          components: nextProps.components
        }))
      });
    }
  }

  render() {
    return (
      <StaticMap
        width={this.props.width}
        height={this.props.height}
        latitude={this.props.latitude}
        longitude={this.props.longitude}
        zoom={this.props.zoom}
        mapStyle={this.state.style}
      />
    );
  }
}

Map.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  components: PropTypes.objectOf(
    PropTypes.shape({ enabled: PropTypes.bool.isRequired }).isRequired
  )
};
