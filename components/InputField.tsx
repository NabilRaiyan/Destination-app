import { InputFieldProps } from "@/types/type";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  TextInput,
  Platform,
  Keyboard,
} from "react-native";

// Creating input fields
const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  iconStyle,
  inputStyle,
  className,
  ...props
}: InputFieldProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="my-2 w-full">
        <Text
          className={`text-lg font-JakartaSemiBold mb-3 text-black ${labelStyle}`}
        >
          {label}
        </Text>
        <View
          className={`flex flex-row justify-start relative bg-neutral-100 border items-center rounded-md focus:border-primary-500 ${containerStyle}`}
        >
          {icon && (
            <Image source={icon} className={`w-6 h-6 ml-6 ${iconStyle}`} />
          )}
          <TextInput
            className={`rounded-11/12 p-[12px] font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
            secureTextEntry={secureTextEntry}
            {...props}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

// exporting input fields
export default InputField;
