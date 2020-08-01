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
    right: 0,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  enabledView: {
    height: 25,
    flexDirection: "row",
    borderRadius: 25,
    position: "absolute",
  },
  disabledView: {
    zIndex: -1,
    borderRadius: 25,
    height: 25,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  disabledLabel: {
    paddingHorizontal: 12,
    fontSize: 12,
  },
  enabledLabel: {
    top: 5,
    left: 0,
    position: "absolute",
    paddingHorizontal: 12,
    fontSize: 12,
  },
});
