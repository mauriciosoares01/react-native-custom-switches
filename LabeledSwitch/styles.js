import styled from "styled-components";
import { Animated } from "react-native";

export const Container = styled.View``;

export const Touch = styled.TouchableWithoutFeedback``;

export const Content = styled.View`
	height: 25px;
	width: ${({ width }) => `${width}px`};
`;

export const OpenedView = styled(Animated.View)`
	height: 25px;
	flex-direction: row;
	border-radius: 13px;
	background: ${({ color }) => color};
	align-items: center;
	position: absolute;
`;

export const ClosedView = styled.View`
	z-index: -1;
	flex: 1;
	flex-direction: row;
	border-radius: 13px;
	background: ${({ color }) => color};
	align-items: center;
	justify-content: flex-end;
`;

export const Slider = styled(Animated.View)`
	height: 25px;
	width: 45px;
	border-radius: 13px;
	background: #fff;
	border-width: 1px;
	border-color: #dcdcdc;
	z-index: 2;
	position: absolute;
	box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
`;

export const Fade = styled(Animated.View)``;

export const Label = styled.Text`
	font-family: "Nunito-Bold";
	font-size: 12px;
	color: #fff;
	padding: 0px 15px;
`;
