import { StyleSheet } from "react-native";

export default StyleSheet.create({
	content: {
		height: 25,
	},
	slider: {
		height: 25,
		width: 45,
		borderRadius: 13,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#dcdcdc",
		zIndex: 2,
		position: "absolute",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 2,
	},
	openedView: {
		height: 25,
		flexDirection: "row",
		borderRadius: 25,
		alignItems: "center",
		position: "absolute",
	},
	closedView: {
		zIndex: -1,
		borderRadius: 25,
		height: 25,
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		flexDirection: "row",
	},
	label: {
		fontSize: 12,
		color: "#fff",
		paddingHorizontal: 15,
	},
});
