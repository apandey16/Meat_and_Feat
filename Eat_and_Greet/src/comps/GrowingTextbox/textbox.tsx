import React, { Component } from 'react';
import { TextInput} from 'react-native';

export default class GrowingTextbox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      value: '',
      height: 40
    }
  }

  updateSize = (height : number) => {
    this.setState({
      height
    });
  }

  handleText = (value: string) => {
    this.setState({value});
    this.props.onTextChange(value);
  }

  render () {
    const {value, height} = this.state;

    let newStyle = {
      height : height
    }

    return (
    <TextInput
      placeholder="Your Placeholder"
      onChangeText={(value) => this.handleText(value)}
      style={[newStyle]}
      editable={true}
      multiline={true}
      value={value}
      onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
    />
    )
  }

}