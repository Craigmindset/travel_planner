import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import Newtrip from "@/components/mytrips/newtripCard";

const mytrip = () => {
  {
    /* this is for the user trips api data */
  }
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View style={tw` bg-white h-full mx-5`}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={tw`flex-row  mt-15 justify-between `}>
        <View style={tw`flex-row items-center`}>
          <Entypo name="map" size={24} color="purple" style={tw`mr-2`} />
          <Text
            style={tw`font-roboto font-extrabold text-[30px] text-black-200 `}
          >
            Start Explore
          </Text>
        </View>

        <Entypo name="circle-with-plus" size={40} color="black" />
      </View>
      {/* This is a conditinal Statement */}
      {userTrips?.length == 0 ? <Newtrip /> : null}
    </View>
  );
};

export default mytrip;
