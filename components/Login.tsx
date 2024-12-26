import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { Colors } from "@/constant/Colors";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={tw` `}>
      <View style={tw``}>
        <Image
          source={require("@/assets/images/lady-standing.jpg")}
          style={tw`w-full h-[350px]`}
        />
      </View>

      <View style={tw`bg-purple-500  h-full py-5 my--2 rounded-t-2xl `}>
        <Text
          style={tw`font-roboto text-[50px] font-bold text-white text-center`}
        >
          Wanderlust
        </Text>

        <Text
          style={tw`font-roboto font-regular  text-[15px] text-white text-center px-5 mt-5 mx-3`}
        >
          Wanderlust is a comprehensive travel app designed to help you plan and
          manage your trips seamlessly.
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/auth/sign-in")}
          style={tw`bg-black mx-5 my-30 h-13  shadow-lg rounded-full justify-center items-center `}
        >
          <Text style={tw`font-roboto font-bold text-[15px] text-white `}>
            {" "}
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
