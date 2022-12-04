import { View, Text, StyleSheet } from "react-native";
import Avatar from "./Avatar";
import RenderHtml from "react-native-render-html";


export default Notification = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.outerContainer}>
          <Avatar src={props.data.account.avatar_static} style={styles.avatar} />
          <View style={styles.innerContainer}>
            <View style={styles.headerContainer}>
              <View style={styles.subHeaderContainer}>
                <Text style={styles.name}>
                  {props.data.account.display_name.substring(0, 18) +
                    (props.data.account.display_name.length > 18 ? "..." : "")}
                </Text>
                <Text style={styles.username}>
                  {"@" + props.data.account.username}
                </Text>
                <View style={styles.timeDivider} />
                <Text style={styles.time}>{"1h"}</Text>
              </View>
            </View>
            <View style={styles.contentContainer}>
            {/* <RenderHtml
                source={{
                  html:
                    "<div style='font-family: HelveticaNeue; font-size: 16px;'>" +
                    props.data.content
                      .replace("<p>", "<span>")
                      .replace("</p>", "</span>") +
                    "</div>",
                }} /> */}
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#f2f2f2",
          borderBottomWidth: 1,
          marginLeft: 0,
          marginRight: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 10, paddingHorizontal: 15 },
  name: { fontSize: 16, fontWeight: "500" },
  username: {
    paddingLeft: 5,
    color: "darkgray",
  },
  outerContainer: {
    flexDirection: "row",
  },
  innerContainer: {
    marginLeft: 10,
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 15,
  },
  headerContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  subHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  timeDivider: {
    backgroundColor: "darkgray",
    marginHorizontal: 4,
    width: 1.5,
    height: 1.5,
    borderRadius: 3,
  },
  time: {
    color: "darkgray",
  },
  contentContainer: {
    flex: 1,
  },
  Toot: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "HelveticaNeue",
  },
  TootHTML: {
    padding: 0,
    margin: 0,
    fontSize: 16,
    fontFamily: "HelveticaNeue",
    // backgroundColor: "yellow"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
});