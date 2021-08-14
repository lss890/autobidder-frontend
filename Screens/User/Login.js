import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Error";
import StyledButton from "../../Shared/StyledComponents/StyledButton";
import Header from "../../Shared/Header";
import Request from "./Request";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    // useEffect(() =>{
    //   props.navigation.navigate("Request")
    // }, []);

    const handleSubmit = () => {
      const user = {
        username,
        password,
      };
  
      if (username === "" || password === "") {
        setError("Please fill in your credentials");
      } else {
        //loginUser(user, context.dispatch);
      }
    };
  
    return (
      <FormContainer>
        <Image
          source={require("../../assets/logo_text.png")}
          resizeMode="contain"
          style={{ marginTop: 60 }}
        />
        <Input
          placeholder={"Username"}
          name={"username"}
          id={"username"}
          value={username}
          onChangeText={(text) => setUsername(text.toLowerCase())}
        />
        <Input
          placeholder={"Password"}
          name={"password"}
          id={"password"}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
          {error ? <Error message={error} /> : null}
          <StyledButton large primary onPress={() => props.navigation.navigate("Request")}>
            <Text style={{ color: "white" }}>Log In</Text>
          </StyledButton>
        </View>
        <View style={[{ marginTop: 20 }, styles.buttonGroup]}>
          <StyledButton
          large
          secondary
          onPress={() => props.navigation.navigate("Register")}>
            <Text style={{ color: "white" }}>Sign Up</Text>
          </StyledButton>
        </View>
      </FormContainer>
    );
  };
  
  const styles = StyleSheet.create({
    buttonGroup: {
      width: "80%",
      alignItems: "center",
    },
    middleText: {
      marginBottom: 20,
      alignSelf: "center",
    },
  });
  
  export default Login;