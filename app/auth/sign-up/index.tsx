import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const router = useRouter();
  {
    /** remove header**/
  }
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  {
    /**Firease auth**/
  }

  const OncreateAccount = () => {
    if (email?.length < 1 && password?.length < 1 && nickname?.length < 1) {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }

    if (nickname.length < 3) {
      alert("Nickname must be at least 3 characters");
      return;
    }

    if (!email.includes("@")) {
      alert("invalid email");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (!email == !email.includes("@") && !password == password.length > 6) {
      ToastAndroid.show("successfully created an account", ToastAndroid.BOTTOM);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        router.replace("/(tab)/mytrip");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..

        if (errorCode === "auth/email-already-in-use") {
          alert(
            "Email is already in use. Please try a different email address."
          );
        } else {
          console.log(errorMessage, errorCode);
          // Handle other error messages
        }
      });
  };

  return (
    <ScrollView style={tw`bg-purple-500 h-full`}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <TouchableOpacity onPress={() => router.push("/auth/sign-in")}>
        <Entypo
          name="chevron-left"
          size={25}
          color="white"
          style={tw`mt-10 ml-5`}
        />
      </TouchableOpacity>

      <Text
        style={tw`font-Lato text-white font-extrabold text-3xl mx-3 text-center mt-17 `}
      >
        create an account
      </Text>

      {/*User name input*/}
      <View style={tw` mt-20`}>
        <View style={tw`flex-row mx-4 gap-2 mb-2`}>
          <Entypo name="user" size={15} color="white" style={tw``} />
          <Text style={tw` text-white font-medium`}> User Nickname</Text>
        </View>

        <TextInput
          placeholder="Nickname"
          onChangeText={(value) => setNickname(value)}
          style={tw`bg-white mx-4 rounded-full h-13 px-5 shadow-lg `}
        ></TextInput>
      </View>

      {/*Password input*/}
      <View style={tw` mt-3`}>
        <View style={tw`flex-row mx-4 gap-2 mb-2`}>
          <Entypo name="email" size={15} color="white" style={tw``} />
          <Text style={tw` text-white font-medium`}> Email </Text>
        </View>

        <TextInput
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
          style={tw`bg-white mx-4 rounded-full h-13 px-5 shadow-lg `}
        ></TextInput>
      </View>
      {/*Password input*/}
      <View style={tw` mt-3`}>
        <View style={tw`flex-row mx-4 gap-2 mb-2`}>
          <Entypo name="lock" size={15} color="white" style={tw``} />
          <Text style={tw` text-white font-medium`}> Create Password </Text>
        </View>

        <TextInput
          placeholder="Password"
          onChangeText={(value) => setPassword(value)}
          keyboardType="numeric"
          secureTextEntry={true}
          style={tw`bg-white mx-4 rounded-full h-13 px-5 shadow-lg `}
        ></TextInput>
      </View>
      {/*Password input*/}
      <View style={tw` mt-3`}>
        <View style={tw`flex-row mx-4 gap-1 mb-2`}>
          <Entypo name="lock" size={15} color="white" style={tw``} />
          <Text style={tw` text-white font-medium`}> Confirm Password </Text>
        </View>

        <TextInput
          placeholder="confirm Password"
          onChangeText={(value) => setConfirmPassword(value)}
          secureTextEntry={true}
          keyboardType="numeric"
          style={tw`bg-white mx-4 rounded-full h-13 px-5 shadow-lg `}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={tw`bg-black mx-3 mt-8 h-13  shadow-lg rounded-full justify-center items-center `}
        onPress={OncreateAccount}
      >
        <Text style={tw`font-roboto font-regular text-[15px] text-white `}>
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/auth/sign-in")}>
        <Text style={tw`text-white mt-3 text-right mr-10 mb-5 `}>
          Have an account? Sign in
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default index;
