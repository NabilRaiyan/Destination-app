import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  TextInput,
} from "react-native";

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
}) => (
  <KeyboardAvoidingView>
    <TouchableWithoutFeedback>
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
            className={`rounded-11/12 p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default InputField;
