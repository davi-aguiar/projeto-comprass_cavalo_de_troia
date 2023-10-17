import {
  Container,
  Title,
  TitleCont,
  BuyInfo,
  BuyText,
  BuyValue,
  BuyButton,
  ProductCont,
  ProductImage,
  BuyCont,
  BuyButtonText,
  ProductName,
  Counter,
  CounterButton,
  CounterText,
  InfoCont,
  ProductValue,
  TrashButton,
  EmptyCartText,
  EmptyCartCont
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

export function Cart({ navigation }: { navigation: any }) {
  const cartEmpty = false;
  return (
    <Container>
      <TitleCont>
        <Title>Cart</Title>
      </TitleCont>
      {!cartEmpty ? (
        <FlatList
          data={[0, 1, 2]}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <ProductCont style={styles.elev}>
              <ProductImage
                source={require("../../../assets/defProduct.png")}
              />
              <InfoCont>
                <ProductName>Pullover</ProductName>
                <Counter>
                  <CounterButton activeOpacity={0.8}>
                    <Ionicons name="remove-outline" size={30} color={"white"} />
                  </CounterButton>
                  <CounterText>1</CounterText>
                  <CounterButton activeOpacity={0.8}>
                    <Ionicons name="add-outline" size={30} color={"white"} />
                  </CounterButton>
                </Counter>
              </InfoCont>
              <InfoCont>
                <TrashButton activeOpacity={0.8}>
                  <Ionicons name="trash-outline" size={30} color={"white"} />
                </TrashButton>
                <ProductValue>51,00R$</ProductValue>
              </InfoCont>
            </ProductCont>
          )}
        />
      ) : (
        <ScrollView>
          <EmptyCartCont>
            <Ionicons name="cart-outline" size={60} color={"black"} />
            <EmptyCartText>
              Your cart is so empty and abandoned...
            </EmptyCartText>
          </EmptyCartCont>
        </ScrollView>
      )}
      <BuyCont>
        <BuyInfo>
          <BuyText>Total amount:</BuyText>
          <BuyValue>102,00R$</BuyValue>
        </BuyInfo>
        <BuyButton
          disabled={cartEmpty}
          onPress={() => navigation.navigate("CheckoutScreen")}
        >
          <BuyButtonText>BUY</BuyButtonText>
        </BuyButton>
      </BuyCont>
    </Container>
  );
}

const styles = StyleSheet.create({
  elev: {
    elevation: 0
  }
});
