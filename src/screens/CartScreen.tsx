import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function CartScreen({ navigation }) {
  return (
    <View>
      <SafeAreaView>
        <Text>CartScreen</Text>
      </SafeAreaView>
    </View>
  );
}

export default CartScreen;
