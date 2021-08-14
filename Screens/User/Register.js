import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Error";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StyledButton from "../../Shared/StyledComponents/StyledButton";

//import axios from "axios";
//import baseURL from "../../assets/common/baseUrl";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");

  const register = () => {
    if (email === "" || password === "" || passwordConfirm === "" || zipcode === "") {
      setError("Please fill in the form correctly");
    }

    let user = {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      zipcode: zipcode
    };
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer>
        <Image
          source={require("../../assets/logo_text.png")}
          resizeMode="contain"
          style={{ marginTop: 60 }}
        />
        <Input
          placeholder={"Email"}
          name={"email"}
          id={"email"}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
        <Input
          placeholder={"Password"}
          name={"password"}
          id={"password"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder={"Password Confirmation"}
          name={"passwordConfirm"}
          id={"passwordConfirm"}
          onChangeText={(text) => setPasswordConfirm(text)}
        />
        <Input
          placeholder={"Zipcode"}
          name={"zipcode"}
          id={"zipcode"}
          onChangeText={(text) => setZipcode(text)}
        />
        <View style={styles.buttonGroup}>
          {error ? <Error message={error} /> : null}
        </View>
        <View>
          <StyledButton large primary onPress={() => register()}>
            <Text style={{ color: "white" }}>Register</Text>
          </StyledButton>
        </View>
        <View>
          <StyledButton
            large
            secondary
            onPress={() => props.navigation.navigate("Login")}
          >
            <Text style={{ color: "white" }}>Back to Login</Text>
          </StyledButton>
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    margin: 10,
    alignItems: "center",
  },
});

export default Register;