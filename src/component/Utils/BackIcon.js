import React from "react";
import { View, TouchableWithoutFeedback, Image } from "react-native";
import PropTypes from "prop-types";

import Icon from "@expo/vector-icons/Ionicons";
const BackIcon = ({ style, navigation, color }) => {
  return (
    <View style={style}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <Icon name={"md-chevron-back"} size={32} color={"black"} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default BackIcon;

BackIcon.propTypes = {
  style: PropTypes.object,
  navigation: PropTypes.object,
  color: PropTypes.string,
};

