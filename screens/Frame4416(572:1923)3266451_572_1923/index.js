import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_572_1924}>
        <View style={styles.View_572_1925} />
        <View style={styles.View_572_1926}>
          <Text style={styles.Text_572_1926}>Edit the order</Text>
        </View>
        <View style={styles.View_572_1927}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba92/ac1d/b602308a9adba914e5cdbedf6061bbcb"
            }}
            style={styles.ImageBackground_572_1928}
          />
          <View source={{ uri: "null" }} style={styles.View_572_1931} />
        </View>
      </View>
      <View style={styles.View_572_1932}>
        <View style={styles.View_572_1933} />
        <View style={styles.View_572_1934}>
          <Text style={styles.Text_572_1934}>Pause feedbacks</Text>
        </View>
        <View style={styles.View_572_1935}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/819a/1739/ec35fea7c46c73147d7d098c12b0c1c1"
            }}
            style={styles.ImageBackground_572_1936}
          />
          <View source={{ uri: "null" }} style={styles.View_572_1939} />
          <View source={{ uri: "null" }} style={styles.View_572_1940} />
        </View>
      </View>
      <View style={styles.View_572_1941}>
        <View style={styles.View_572_1942} />
        <View style={styles.View_572_1943}>
          <View style={styles.View_572_1944}>
            <Text style={styles.Text_572_1944}>Cancel the order</Text>
          </View>
        </View>
        <View style={styles.View_572_1945}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/819a/1739/ec35fea7c46c73147d7d098c12b0c1c1"
            }}
            style={styles.ImageBackground_572_1946}
          />
          <View source={{ uri: "null" }} style={styles.View_572_1949} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_572_1924: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_572_1925: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_572_1926: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_572_1926: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_1927: {
    width: wp("9%"),
    height: hp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_572_1928: {
    width: wp("9%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_572_1931: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_572_1932: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_572_1933: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_572_1934: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_572_1934: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_1935: {
    width: wp("9%"),
    height: hp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_572_1936: {
    width: wp("9%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_572_1939: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_572_1940: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_572_1941: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_572_1942: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_572_1943: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("11%")
  },
  View_572_1944: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_572_1944: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_1945: {
    width: wp("9%"),
    height: hp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_572_1946: {
    width: wp("9%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_572_1949: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
