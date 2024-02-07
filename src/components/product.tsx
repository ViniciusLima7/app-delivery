import React, { forwardRef } from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageSourcePropType;
  price?: number;
  cover?: ImageSourcePropType;
  ingredients?: string[];
};
type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

export const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...rest}
        className="w-full flex-row items-center pb-4"
      >
        <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
        <View className="flex-1 ml-3">
          <Text className="text-slate-100 font-subtitle text-base flex-1">
            {data.title}
          </Text>
          <Text className="text-slate-400 text-xs leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);