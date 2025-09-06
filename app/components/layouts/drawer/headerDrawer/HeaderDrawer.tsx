import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
// import AutoScroll from "@homielab/react-native-auto-scroll";
// import { Fontisto, FontAwesome5 } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native'
// // LAYOUTS
// import { Switch_DarkMode, TitleStyles } from "../../../components/layouts";
// // FUNCTIONS
// import { messageForTheUserIfItTheirBirthday } from "../../../utils/functions/currentDate/messageForTheUserIfItTheirBirthday/messageForTheUserIfItTheirBirthday";
// import {
//   CurrentDate,
//   CurrentTime,
//   TheWeatherAtTheUserCurrentLocation,
// } from "../../../utils/functions";
// STYLES
import { stylesHeaderDrawer } from './StylesHeaderDrawer'
// CONTEXTS
// import {
//   BottomSheet_User_Layout_Context,
//   LoggedInUser_Context,
//   ThemeContext,
// } from "../../../utils/contexts";

// const URL_ImgProfile =
//   "../../../utils/assets/imgs/screens/drawer_stacksWithoutDropdowMenu/auth/imgMyProfile.jpg";

const dateBirthDay_User = '25 mai'

export default function HeaderDrawer({ active }) {
  // Styles
  const { root } = stylesHeaderDrawer

  // States
  const [darkMode, setDarkMode] = useState(false)

  // Use Context
  // const { toggleTheme, theme } = useContext(ThemeContext);
  // const { handleShow_BottomSheet_User_Layout } = useContext(
  //   BottomSheet_User_Layout_Context
  // );
  // const { loggedInUser } = useContext(LoggedInUser_Context);

  // Navigation
  const navigation = useNavigation()

  const IsDrawerNotDisplayWeatherDesc = true

  function name(params) {
    // handleShow_BottomSheet_User_Layout();
    // active.value = false;
  }

  // Return
  return (
    <View style={root}>
      {/* <ImageBackground
        source={
          dateBirthDay_User === messageForTheUserIfItTheirBirthday
            ? `${require("./animation_balloonForBirthdays.gif")}`
            : null
        }
        style={{
          // alignItems: "center",
          height: 100,
          // justifyContent: "center",
          width: 200,
        }}
      > */}
      {/* ICONES */}
      {/* <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Switch_DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Parameters_GlobalApp_Screen")}
          >
            <FontAwesome5 color='#000' name='user-cog' size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              active.value = false;
            }}
          >
            <Fontisto color={"#F00"} name='close-a' size={25} />
          </TouchableOpacity>
        </View> */}

      {/* INFO USER */}
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={name}>
          <Text style={styles.textName}>CROGUENNEC Yoann</Text>
          <Text style={{ fontSize: 16 }}>Développeur FullStack</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16 }}>CONTACT</Text>
      </View>

      {/* DATE + WEATHER */}
      <View>
        {/* <CurrentDate customFontSize={18} />
          <CurrentTime customFontSize={18} />
          <TheWeatherAtTheUserCurrentLocation
            customFontSize={18}
            IsDrawerNotDisplayWeatherDesc={IsDrawerNotDisplayWeatherDesc}
          /> */}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Contact_Screen')}>
        {/* <TitleStyles subTitle title='Nous Contactez' /> */}
      </TouchableOpacity>
      {/* // </ImageBackground> */}
    </View>
  )
}

const styles = StyleSheet.create({
  imageProfile: {
    borderRadius: 50,
    marginRight: 10,
    height: 60,
    width: 60,
  },
  textName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  scrolling1: {
    width: 400,
    // padding: 10,
    // marginBottom: 10,
  },
  scrolling2: {
    width: 400,
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
})
