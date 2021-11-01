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
      <View style={styles.View_684_12012} />
      <View style={styles.View_684_12013} />
      <View style={styles.View_684_12014} />
      <View style={styles.View_684_12015} />
      <View style={styles.View_684_12016} />
      <View style={styles.View_684_12017} />
      <View style={styles.View_684_12018} />
      <View style={styles.View_684_12019} />
      <View style={styles.View_684_12020} />
      <View style={styles.View_684_12021} />
      <View style={styles.View_684_12022} />
      <View style={styles.View_684_12023} />
      <View style={styles.View_684_12024} />
      <View style={styles.View_684_12025} />
      <View style={styles.View_684_12026} />
      <View style={styles.View_684_12027} />
      <View style={styles.View_684_12028} />
      <View style={styles.View_684_12029} />
      <View style={styles.View_684_12030} />
      <View style={styles.View_684_12031} />
      <View style={styles.View_684_12032} />
      <View style={styles.View_684_12033} />
      <View style={styles.View_684_12034} />
      <View style={styles.View_684_12035} />
      <View style={styles.View_684_12036} />
      <View style={styles.View_684_12037} />
      <View style={styles.View_684_12038} />
      <View style={styles.View_684_12039} />
      <View style={styles.View_684_12040} />
      <View style={styles.View_684_12041} />
      <View style={styles.View_684_12042} />
      <View style={styles.View_684_12043} />
      <View style={styles.View_684_12044} />
      <View style={styles.View_684_12045} />
      <View style={styles.View_684_12046} />
      <View style={styles.View_684_12047} />
      <View style={styles.View_684_12048} />
      <View style={styles.View_684_12049} />
      <View style={styles.View_684_12050} />
      <View style={styles.View_684_12051} />
      <View style={styles.View_684_12052} />
      <View style={styles.View_684_12053} />
      <View style={styles.View_684_12054} />
      <View style={styles.View_684_12055} />
      <View style={styles.View_684_12056} />
      <View style={styles.View_684_12057} />
      <View style={styles.View_684_12058} />
      <View style={styles.View_684_12059} />
      <View style={styles.View_684_12060} />
      <View style={styles.View_684_12061} />
      <View style={styles.View_684_12062} />
      <View style={styles.View_684_12063} />
      <View style={styles.View_684_12064} />
      <View style={styles.View_684_12065} />
      <View style={styles.View_684_12066} />
      <View style={styles.View_684_12067} />
      <View style={styles.View_684_12068} />
      <View style={styles.View_684_12069} />
      <View style={styles.View_684_12070} />
      <View style={styles.View_684_12071} />
      <View style={styles.View_684_12072} />
      <View style={styles.View_684_12073} />
      <View style={styles.View_684_12074} />
      <View style={styles.View_684_12075} />
      <View style={styles.View_684_12076} />
      <View style={styles.View_684_12077} />
      <View style={styles.View_684_12078} />
      <View style={styles.View_684_12079} />
      <View style={styles.View_684_12080} />
      <View style={styles.View_684_12081} />
      <View style={styles.View_684_12082} />
      <View style={styles.View_684_12083} />
      <View style={styles.View_684_12084} />
      <View style={styles.View_684_12085} />
      <View style={styles.View_684_12086} />
      <View style={styles.View_684_12087} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4e6/6e6f/4c7b3ddbb092f4ba621f6d2c3930e45f"
        }}
        style={styles.ImageBackground_684_12088}
      />
      <View style={styles.View_684_12090}>
        <Text style={styles.Text_684_12090}>×</Text>
      </View>
      <View style={styles.View_684_12091}>
        <Text style={styles.Text_684_12091}>Product</Text>
      </View>
      <View style={styles.View_684_12092}>
        <Text style={styles.Text_684_12092}>Use Cases</Text>
      </View>
      <View style={styles.View_684_12093}>
        <Text style={styles.Text_684_12093}>Pricing</Text>
      </View>
      <View style={styles.View_684_12094}>
        <Text style={styles.Text_684_12094}>Developers</Text>
      </View>
      <View style={styles.View_684_12095}>
        <Text style={styles.Text_684_12095}>Resources</Text>
      </View>
      <View style={styles.View_684_12096}>
        <Text style={styles.Text_684_12096}>Company</Text>
      </View>
      <View style={styles.View_684_12097}>
        <Text style={styles.Text_684_12097}>Get Started</Text>
      </View>
      <View style={styles.View_684_12098}>
        <Text style={styles.Text_684_12098}>Login</Text>
      </View>
      <View style={styles.View_684_12099}>
        <Text style={styles.Text_684_12099}>☰</Text>
      </View>
      <View style={styles.View_684_12100}>
        <Text style={styles.Text_684_12100}>For Business Users</Text>
      </View>
      <View style={styles.View_684_12101}>
        <Text style={styles.Text_684_12101}>For Developers</Text>
      </View>
      <View style={styles.View_684_12102}>
        <Text style={styles.Text_684_12102}>Visually build on</Text>
      </View>
      <View style={styles.View_684_12103}>
        <Text style={styles.Text_684_12103}>your tech stack</Text>
      </View>
      <View style={styles.View_684_12104}>
        <Text style={styles.Text_684_12104}>Empower your entire team to</Text>
      </View>
      <View style={styles.View_684_12105}>
        <Text style={styles.Text_684_12105}>visually</Text>
      </View>
      <View style={styles.View_684_12106}>
        <Text style={styles.Text_684_12106}>
          create and optimize high-speed experiences on your sites and apps.
          Provide whole-team autonomy with a platform that is developer approved
        </Text>
      </View>
      <View style={styles.View_684_12107}>
        <Text style={styles.Text_684_12107}>.</Text>
      </View>
      <View style={styles.View_684_12108}>
        <Text style={styles.Text_684_12108}>Get Started Free</Text>
      </View>
      <View style={styles.View_684_12109}>
        <Text style={styles.Text_684_12109}>Builder plugs into</Text>
      </View>
      <View style={styles.View_684_12110}>
        <Text style={styles.Text_684_12110}>your tech stack</Text>
      </View>
      <View style={styles.View_684_12111}>
        <Text style={styles.Text_684_12111}>to</Text>
      </View>
      <View style={styles.View_684_12112}>
        <Text style={styles.Text_684_12112}>create landing pages</Text>
      </View>
      <View style={styles.View_684_12113}>
        <Text style={styles.Text_684_12113}>drive more conversions</Text>
      </View>
      <View style={styles.View_684_12114}>
        <Text style={styles.Text_684_12114}>customize experiences</Text>
      </View>
      <View style={styles.View_684_12115}>
        <Text style={styles.Text_684_12115}>acquire more customers</Text>
      </View>
      <View style={styles.View_684_12116}>
        <Text style={styles.Text_684_12116}>manage content</Text>
      </View>
      <View style={styles.View_684_12117}>
        <Text style={styles.Text_684_12117}>remove dependencies</Text>
      </View>
      <View style={styles.View_684_12118}>
        <Text style={styles.Text_684_12118}>build headless storefronts</Text>
      </View>
      <View style={styles.View_684_12119}>
        <Text style={styles.Text_684_12119}>improve site performance</Text>
      </View>
      <View style={styles.View_684_12120}>
        <Text style={styles.Text_684_12120}>run A/B tests</Text>
      </View>
      <View style={styles.View_684_12121}>
        <Text style={styles.Text_684_12121}>optimize your site</Text>
      </View>
      <View style={styles.View_684_12122}>
        <Text style={styles.Text_684_12122}>Visual Editor</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("1845%") },
  View_684_12012: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(203, 202, 183, 1)"
  },
  View_684_12013: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 243, 233, 1)"
  },
  View_684_12014: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_684_12015: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("120%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_684_12016: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("64%"),
    backgroundColor: "rgba(56, 152, 236, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_684_12017: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("72%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_684_12018: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126%"),
    minHeight: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_684_12019: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%"),
    backgroundColor: "rgba(69, 183, 207, 1)",
    opacity: 0.75,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 5
  },
  View_684_12020: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("19%"),
    backgroundColor: "rgba(32, 117, 147, 1)",
    opacity: 0.75,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  View_684_12021: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("67%"),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_684_12022: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("86%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12023: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("86%"),
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_684_12024: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("125%")
  },
  View_684_12025: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("125%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_684_12026: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("157%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_684_12027: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("309%")
  },
  View_684_12028: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12029: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12030: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12031: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12032: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("138%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12033: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("138%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12034: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("203%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12035: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("203%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12036: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("268%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12037: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("268%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12038: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("333%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12039: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("333%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12040: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("398%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12041: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("398%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12042: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("463%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12043: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("463%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12044: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("528%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12045: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("528%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12046: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("593%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12047: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("593%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12048: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("658%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12049: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("658%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12050: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("723%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12051: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("723%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12052: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("788%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12053: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("788%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12054: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("853%"),
    top: hp("350%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_684_12055: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("853%"),
    top: hp("350%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_684_12056: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("381%"),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_684_12057: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("401%")
  },
  View_684_12058: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("401%")
  },
  View_684_12059: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("449%")
  },
  View_684_12060: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("478%"),
    minHeight: hp("478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("462%"),
    backgroundColor: "rgba(14, 32, 26, 1)"
  },
  View_684_12061: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("521%"),
    backgroundColor: "rgba(151, 209, 177, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_684_12062: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("688%"),
    backgroundColor: "rgba(236, 174, 149, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_684_12063: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("829%"),
    backgroundColor: "rgba(156, 211, 215, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_684_12064: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("925%"),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_684_12065: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("940%")
  },
  View_684_12066: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("940%")
  },
  View_684_12067: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("999%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_684_12068: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1008%")
  },
  View_684_12069: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1050%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_684_12070: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1101%")
  },
  View_684_12071: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1134%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_684_12072: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1186%")
  },
  View_684_12073: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1219%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_684_12074: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1271%")
  },
  View_684_12075: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1301%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(244, 243, 233, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_684_12076: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1353%")
  },
  View_684_12077: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("139%"),
    minHeight: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1392%")
  },
  View_684_12078: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("136%"),
    minHeight: hp("136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1395%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_684_12079: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1538%"),
    backgroundColor: "rgba(156, 211, 215, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_684_12080: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1597%"),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_684_12081: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1626%"),
    borderColor: "rgba(203, 202, 183, 1)",
    borderWidth: 1
  },
  View_684_12082: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1662%"),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_684_12083: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1722%"),
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  View_684_12084: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1814%"),
    borderColor: "rgba(203, 202, 183, 1)",
    borderWidth: 1
  },
  View_684_12085: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1836%"),
    backgroundColor: "rgba(244, 243, 233, 1)",
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75
  },
  View_684_12086: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_684_12087: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("98%"),
    backgroundColor: "rgba(15, 166, 220, 1)"
  },
  ImageBackground_684_12088: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_684_12090: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("209%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_684_12090: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12091: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_684_12091: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12092: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_684_12092: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12093: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_684_12093: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12094: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_684_12094: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12095: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_684_12095: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12096: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_684_12096: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12097: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("159%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_684_12097: {
    color: "rgba(244, 243, 233, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12098: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("165%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_684_12098: {
    color: "rgba(189, 56, 39, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12099: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_684_12099: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12100: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_684_12100: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12101: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_684_12101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12102: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_684_12102: {
    color: "rgba(244, 243, 233, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.2599999904632568,
    textTransform: "none"
  },
  View_684_12103: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_684_12103: {
    color: "rgba(244, 243, 233, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.2599999904632568,
    textTransform: "none"
  },
  View_684_12104: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_684_12104: {
    color: "rgba(244, 243, 233, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12105: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_684_12105: {
    color: "rgba(244, 243, 233, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12106: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_684_12106: {
    color: "rgba(244, 243, 233, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12107: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_684_12107: {
    color: "rgba(244, 243, 233, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12108: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_684_12108: {
    color: "rgba(244, 243, 233, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12109: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("208%"),
    justifyContent: "flex-start"
  },
  Text_684_12109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12110: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("208%"),
    justifyContent: "flex-start"
  },
  Text_684_12110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12111: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("208%"),
    justifyContent: "flex-start"
  },
  Text_684_12111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12112: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("189%"),
    justifyContent: "flex-start"
  },
  Text_684_12112: {
    color: "rgba(224, 119, 72, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12113: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("194%"),
    justifyContent: "flex-start"
  },
  Text_684_12113: {
    color: "rgba(224, 119, 72, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12114: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("200%"),
    justifyContent: "flex-start"
  },
  Text_684_12114: {
    color: "rgba(224, 119, 72, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12115: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("205%"),
    justifyContent: "flex-start"
  },
  Text_684_12115: {
    color: "rgba(224, 119, 72, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12116: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("211%"),
    justifyContent: "flex-start"
  },
  Text_684_12116: {
    color: "rgba(224, 119, 72, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12117: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("217%"),
    justifyContent: "flex-start"
  },
  Text_684_12117: {
    color: "rgba(224, 119, 72, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12118: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("222%"),
    justifyContent: "flex-start"
  },
  Text_684_12118: {
    color: "rgba(224, 119, 72, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12119: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("228%"),
    justifyContent: "flex-start"
  },
  Text_684_12119: {
    color: "rgba(224, 119, 72, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12120: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("233%"),
    justifyContent: "flex-start"
  },
  Text_684_12120: {
    color: "rgba(224, 119, 72, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12121: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("239%"),
    justifyContent: "flex-start"
  },
  Text_684_12121: {
    color: "rgba(224, 119, 72, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_12122: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("236%"),
    justifyContent: "flex-start"
  },
  Text_684_12122: {
    color: "rgba(189, 56, 39, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.47999998927116394,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
