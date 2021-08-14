import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Image, Button, SafeAreaView } from "react-native";
import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Error";
import StyledButton from "../../Shared/StyledComponents/StyledButton";
import Header from "../../Shared/Header"

import Slider from '@react-native-community/slider';

const Request = (props) => {
    const [location, setLocation] = useState("");
    const [range, setRange] = useState("");
    const [year, setYear] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [trim, setTrim] = useState("");
    const [exteriorColor, setExteriorColor] = useState("");
    const [error, setError] = useState("");

    const [sliderValue, setSliderValue] = useState(15);
  
    const handleSubmit = () => {
      const request = {
        location,
        range,
        year,
        make,
        model,
        trim,
        exteriorColor
      };
  
      if (location === "") {
        setError("Please fill in your credentials");
      } else {
        //loginUser(user, context.dispatch);
      }
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
      <View style={sliderStyles.container}>
        {/*Text to show slider value*/}
        <Text style={{color: 'black'}}>
           {sliderValue} mi
        </Text>

        {/*Slider with max, min, step and initial value*/}
        <Slider
          maximumValue={50}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
      </View>


      <FormContainer>
        
        <Input
          placeholder={"Enter location (city, ZIP"}
          name={"location"}
          id={"location"}
          value={location}
          onChangeText={(text) => setLocation(text.toLowerCase())}
        />

    

        <Input
          placeholder={"Year"}
          name={"year"}
          id={"year"}
          secureTextEntry={true}
          value={year}
          onChangeText={(text) => setYear(text)}
        />
        <Input
          placeholder={"Make"}
          name={"make"}
          id={"make"}
          secureTextEntry={true}
          value={make}
          onChangeText={(text) => setMake(text)}
        />
        <Input
          placeholder={"Year"}
          name={"year"}
          id={"year"}
          secureTextEntry={true}
          value={year}
          onChangeText={(text) => setYear(text)}
        />
        <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
          {error ? <Error message={error} /> : null}
          <StyledButton large primary onPress={() => handleSubmit()}>
            <Text style={{ color: "white" }}>Request</Text>
          </StyledButton>
        </View>
      </FormContainer>
    </SafeAreaView>
      
     
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
  
  const sliderStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center'
    },
  });

  export default Request;