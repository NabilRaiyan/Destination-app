import { images } from "@/constants";
import { Text, ScrollView, Image, View } from "react-native";

const SignIn = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text>Sign In</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
