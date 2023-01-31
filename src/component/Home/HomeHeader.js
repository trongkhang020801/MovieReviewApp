import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableWithoutFeedback, Image, StyleSheet } from "react-native"; 
import Icon from "@expo/vector-icons/Ionicons";

import MenuIcon from "../../assets/icons/open_menu.png";

class HomeHeader extends Component {
  searchIcon = () => {
    const { navigation, type } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Search", { type: type })}>
        <Icon name={"search"} size={30} style={_styles.searchIcon}/>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return (
      <View style={{ margin: 16, flexDirection: "row", justifyContent: "space-between" }}>
        {this.searchIcon()}
      </View>
    );
  }
}

export default HomeHeader;

HomeHeader.propTypes = {
  navigation: PropTypes.object,
  type: PropTypes.oneOf(["tv", "movie"]),
};
const _styles = StyleSheet.create({
  searchIcon: {
    marginLeft: 280
  }
});

