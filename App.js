import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Toast from "react-native-toast-message";

// Navigatiors
import Main from "./Navigators/Main";

import Header from "./Shared/Header";

/*
const RootStack = createStackNavigator ({
  Login: { screen: Login },
  Register: { screen: Register },
},
{
  initialRouteName: "Login"
});
*/

export default function App() {
  return (
      <NavigationContainer>
        <Header />
        <Main />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
  );
}

/*
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#18657f',
  },
};
*/

/*
export default class App extends Component {
  render() {
    return <UserNavigator />;
  }
}
*/
