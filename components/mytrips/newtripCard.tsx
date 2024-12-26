import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import tw from "twrnc";

const Newtrip = () => {
  return (
    <View style={tw``}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <Text
        style={tw`font-roboto font-regular text-center mt-10 text-[15px] text-black-200 `}
      >
        The world is a book, and those who do not travel read only one page.
      </Text>
      <View style={tw`bg-blue-300 shadow-sm mt-5 rounded-2xl`}>
        <Image
          source={require("@/assets/images/trip-banner.jpg")}
          style={tw`w-full h-45 `}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        style={tw`mt-10 w-full h-13 bg-black rounded-full justify-center items-center`}
      >
        <Text style={tw`font-roboto font-bold text-[15px] text-white `}>
          Start Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Newtrip;
