import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Dimensions } from 'react-native';

const SLIDERWIDTH = Dimensions.get('window').width;

class ExpandingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.toggleExpand}>
        <View
          style={{
            padding: 1,
            margin: 1,
            width:SLIDERWIDTH,
          }}
        >
          <Text style={{ fontSize: 18 }}>{this.props.title}</Text>
          {this.state.expanded && (
            <Text style={{ marginTop: 10 }}>{this.props.text}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export default ExpandingBox;
