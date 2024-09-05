import { ButtonProps, Text, TouchableOpacity } from "react-native";
const getBgVarientStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286ff]";
  }
};
const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    className={`w-8/12 mb-10 p-2 rounded-sm flex flex-row justify-center items-center 
        shadow-md shadow-neutral-400/70 ${getBgVarientStyle(bgVariant)} ${className}`}
  >
    {IconLeft && <IconLeft />}
    {IconRight && <IconRight />}
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
