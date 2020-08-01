import React, { useState } from "react";
import {
  Animated,
  Easing,
  View,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import PropTypes from "prop-types";
import stylesheet from "./styles";

function LabeledSwitch({
  value,
  onChange,
  enabledLabel,
  disabledLabel,
  enabledColor,
  disabledColor,
  disabledLabelColor,
  enabledLabelColor,
  width,
  duration,
}) {
  const sliderWidth = 45;
  const [widthEnabled] = useState(
    new Animated.Value(value ? width : sliderWidth)
  );
  const [sliderPosition] = useState(
    new Animated.Value(value ? width - sliderWidth : 0)
  );
  const [fadeEnabled] = useState(new Animated.Value(value ? 1 : 0));
  const [fadeDisabled] = useState(new Animated.Value(value ? 0 : 1));

  function handleChange(data) {
    onChange(data);
  }

  function _startAnimation() {
    if (value) {
      handleChange(false);
      Animated.parallel([
        Animated.timing(widthEnabled, {
          toValue: sliderWidth,
          duration: duration,
          useNativeDriver: false,
          easing: Easing.ease,
        }),
        Animated.timing(sliderPosition, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
        Animated.timing(fadeEnabled, {
          toValue: 0,
          duration: duration,
          useNativeDriver: false,
        }),
        Animated.timing(fadeDisabled, {
          toValue: 1,
          duration: duration,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      handleChange(true);
      Animated.parallel([
        Animated.timing(widthEnabled, {
          toValue: width,
          duration: duration,
          useNativeDriver: false,
          easing: Easing.ease,
        }),
        Animated.timing(sliderPosition, {
          toValue: width - sliderWidth,
          duration: duration,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
        Animated.timing(fadeEnabled, {
          toValue: 1,
          duration: duration,
          useNativeDriver: false,
        }),
        Animated.timing(fadeDisabled, {
          toValue: 0,
          duration: duration,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={_startAnimation}>
        <View style={[{ width: width }, { ...stylesheet.content }]}>
          <Animated.View
            style={[
              { width: width, backgroundColor: disabledColor },
              stylesheet.disabledView,
            ]}
          >
            <Animated.View style={[{ opacity: fadeDisabled }]}>
              <Text
                style={[
                  stylesheet.disabledLabel,
                  { color: disabledLabelColor },
                ]}
              >
                {disabledLabel}
              </Text>
            </Animated.View>
          </Animated.View>
          <Animated.View
            style={[
              { width: widthEnabled, backgroundColor: enabledColor },
              stylesheet.enabledView,
            ]}
          >
            <Animated.View style={[stylesheet.slider]} />
            <Animated.View style={[{ opacity: fadeEnabled }]}>
              <Text
                style={[stylesheet.enabledLabel, { color: enabledLabelColor }]}
              >
                {enabledLabel}
              </Text>
            </Animated.View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

LabeledSwitch.defaultProps = {
  value: false,
  onChange: () => {},
  enabledLabel: "Enabled",
  disabledLabel: "Disabled",
  enabledColor: "#00b333",
  disabledColor: "#ff3333",
  disabledLabelColor: "#fff",
  enabledLabelColor: "#fff",
  width: 120,
  duration: 400,
};

LabeledSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  enabledLabel: PropTypes.string.isRequired,
  disabledLabel: PropTypes.string.isRequired,
  disabledLabelColor: PropTypes.string.isRequired,
  enabledLabelColor: PropTypes.string.isRequired,
  enabledColor: PropTypes.string.isRequired,
  disabledColor: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default LabeledSwitch;
