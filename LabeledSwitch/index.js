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
import { OpenedView, ClosedView, Slider, Label, Fade } from "./styles";

function LabeledSwitch({
	value,
	onChange,
	leftLabel,
	rightLabel,
	leftColor,
	rightColor,
	width,
}) {
	const sliderWidth = 45;
	const [widthOpen] = useState(new Animated.Value(value ? width : sliderWidth));
	const [sliderPosition] = useState(
		new Animated.Value(value ? width - sliderWidth : 0)
	);
	const [fadeOpened] = useState(new Animated.Value(value ? 1 : 0));
	const [fadeClosed] = useState(new Animated.Value(value ? 0 : 1));
	const styles = {
		slider: {
			transform: [{ translateX: sliderPosition }],
		},
	};

	function handleChange(data) {
		onChange(data);
	}

	function _startAnimation() {
		if (value) {
			handleChange(false);
			Animated.parallel([
				Animated.timing(widthOpen, {
					toValue: sliderWidth,
					duration: 350,
					useNativeDriver: false,
					easing: Easing.ease,
				}),
				Animated.timing(sliderPosition, {
					toValue: 0,
					duration: 400,
					useNativeDriver: true,
					easing: Easing.ease,
				}),
				Animated.timing(fadeOpened, {
					toValue: 0,
					duration: 400,
					useNativeDriver: false,
				}),
				Animated.timing(fadeClosed, {
					toValue: 1,
					duration: 400,
					useNativeDriver: false,
				}),
			]).start();
		} else {
			handleChange(true);
			Animated.parallel([
				Animated.timing(widthOpen, {
					toValue: width,
					duration: 450,
					useNativeDriver: false,
					easing: Easing.ease,
				}),
				Animated.timing(sliderPosition, {
					toValue: width - sliderWidth,
					duration: 400,
					useNativeDriver: true,
					easing: Easing.ease,
				}),
				Animated.timing(fadeOpened, {
					toValue: 1,
					duration: 400,
					useNativeDriver: false,
				}),
				Animated.timing(fadeClosed, {
					toValue: 0,
					duration: 400,
					useNativeDriver: false,
				}),
			]).start();
		}
	}

	return (
		<View>
			<TouchableWithoutFeedback onPress={_startAnimation}>
				<View style={[{ width: width }, { ...stylesheet.content }]}>
					<Animated.View style={[styles.slider, stylesheet.slider]} />
					<Animated.View
						style={[
							{ width: width, backgroundColor: rightColor },
							stylesheet.closedView,
						]}
					>
						<Animated.View style={[{ opacity: fadeClosed }]}>
							<Text style={stylesheet.label}>{rightLabel}</Text>
						</Animated.View>
					</Animated.View>
					<Animated.View
						style={[
							{ width: widthOpen, backgroundColor: leftColor },
							stylesheet.openedView,
						]}
					>
						<Animated.View style={[{ opacity: fadeOpened }]}>
							<Text style={stylesheet.label}>{leftLabel}</Text>
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
	leftLabel: "Opened",
	rightLabel: "Closed",
	leftColor: "#00b333",
	rightColor: "#ff3333",
	width: 120,
};

LabeledSwitch.propTypes = {
	value: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	leftLabel: PropTypes.string.isRequired,
	rightLabel: PropTypes.string.isRequired,
	leftColor: PropTypes.string.isRequired,
	rightColor: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
};

export default LabeledSwitch;
