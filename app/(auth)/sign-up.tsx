import { Text, View, ScrollView, Image } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="font-JakartaSemiBold absolute text-gray-900 text-2xl bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="pl-5 pt-3 pr-5">
          <InputField
            label="User Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
        </View>

        <View className="pl-5 pt-2 pr-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
        </View>
        <View className="pl-5 pt-2 pr-5">
          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>
        <CustomButton
          title="Sign up"
          onPress={onSignUpPress}
          className="self-center mt-5 w-11/12"
        />

        {/* OAuth */}
        <Link
          href="/sign-in"
          className="text-lg text-center text-general-200 mb-7"
        >
          <Text>Already have an account? </Text>
          <Text className="text-primary-500">Log In</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignUp;
