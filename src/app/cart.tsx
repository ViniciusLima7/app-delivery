import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function Cart() {
  const cartStore = useCartStore();
  const total = formatCurrency(
    cartStore.products.reduce(
      (totalQuantity, product) =>
        totalQuantity + product.price * product.quantity,
      0
    )
  );
  return (
    <View className="flex-1 pt-8">
      <ScrollView>
        <Header title="Seu Carrinho" />
        {cartStore.products.length > 0 ? (
          <View className="p-5 flex-1">
            {cartStore.products.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </View>
        ) : (
          <Text className="font-body text-slate-400 text-center my8">
            Seu Carrinho está vazio
          </Text>
        )}
        <View className="flex-row gap-2 items-center mt-5 mb-4 ml-4">
          <Text className="text-white text-xl font-subtitle">Total:</Text>
          <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
