import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";

const index = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const router = useRouter();

  {
    /*signin method created*/
  }
  const OnSignIn = () => {
    {
      /* signin logic */
    }

    if (!email && !password) {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.replace("/(tab)/mytrip");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        if (errorCode === "auth/invalid-credential") {
          alert("Incorrect email/password");
        } else if (errorCode === "auth/email-already-in-use") {
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

      <Text
        style={tw`font-Lato text-white font-extrabold text-3xl mx-3 text-center mt-40 `}
      >
        Welcome to Wanderlust
      </Text>
      <Text
        style={tw`font-Lato text-white font-small text-lg mx-3 text-center mt-3 `}
      >
        {" "}
        Welcome Back !
      </Text>
      {/*Email */}
      <View style={tw` mt-30`}>
        <View style={tw`flex-row mx-4 gap-1 mb-2`}>
          <Entypo name="email" size={15} color="white" style={tw``} />
          <Text style={tw` text-white font-medium`}> Email</Text>
        </View>

        <TextInput
          placeholder="Enter Email"
          style={tw`bg-white mx-4 rounded-full h-13 px-5 shadow-lg `}
          onChangeText={(value) => setEmail(value)}
        ></TextInput>
      </View>
      {/*Passeword */}
      <View style={tw`mt-4 mb-10`}>
        <View style={tw`flex-row mx-4 gap-1 mb-1`}>
          <Entypo name="lock" size={15} color="white" style={tw``} />
          <Text style={tw` text-white font-medium mb-1`}> Password</Text>
        </View>

        <TextInput
          style={tw`bg-white mx-4 rounded-full h-13 px-5 shadow-lg `}
          placeholder="Enter Password"
          secureTextEntry={true}
          keyboardType="numeric"
          onChangeText={(value) => setPassword(value)}
        ></TextInput>

        {/*buttons */}
        <TouchableOpacity
          onPress={OnSignIn}
          style={tw`bg-black mx-4 mt-8 h-13  shadow-lg rounded-full justify-center items-center `}
        >
          <Text style={tw`font-roboto font-regular text-[15px] text-white `}>
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace("/auth/sign-up")}>
          <Text style={tw`text-white mt-3 text-right mr-10 `}>
            Don't have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default index;
