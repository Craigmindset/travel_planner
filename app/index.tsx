import { StatusBar, Text, View } from "react-native";
import Login from "@/components/Login";
import tw from "twrnc";
import { auth } from "@/configs/FirebaseConfig";
import { Redirect } from "expo-router/build/exports";

export default function Index() {
  const user = auth.currentUser;

  return (
    <View style={tw`  `}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* this is condition keeps the user already login */}

      {user ? <Redirect href="/(tab)/mytrip" /> : <Login />}
    </View>
  );
}
