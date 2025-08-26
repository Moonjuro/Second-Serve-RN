import { StyleSheet, Platform, StatusBar } from "react-native";

const ANDROID_STATUSBAR = Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoHeader: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    resizeMode: "contain",
  },

  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  loggedInStateView: {
    backgroundColor: "#f1f5f1",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 18,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  loggedInState: {
    color: "#6b6b6b",
    fontSize: 12,
    fontWeight: "600",
  },

  gradient: {
    borderRadius: 12,
    overflow: "hidden",
  },

  partnerWithUsView: {
    minWidth: 120,
    paddingHorizontal: 14,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  partnerWithUs: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 18,
  },

  titleWrapper: {
    flexDirection: "column",
    justifyContent: "center",
  },

  titleLine1: {
    color: "#2a8a2a",
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 22,
  },

  titleLine2: {
    color: "#2a8a2a",
    fontSize: 28,
    fontWeight: "800",
    lineHeight: 35,
    marginTop: 2, // small overlap for compact look
  },

  rightSection: {
    flexDirection: "column",   // stack vertically
    alignItems: "flex-end",    // align to right edge
    justifyContent: "center",
  },
});

// <-- make sure this line exists:
export default styles;
