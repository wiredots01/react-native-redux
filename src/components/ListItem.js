import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  showDescription() {
    const { expanded, library } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { library } = this.props;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibraryId(library.item.id)}
      >
        <View>
          <CardSection >
            <Text style={titleStyle}>{library.item.title}</Text>
          </CardSection>
          {this.showDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);