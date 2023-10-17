import styled from "styled-components/native";
import theme from "../../theme";
import { Dimensions } from "react-native";

const colors = theme.COLORS;
const fonts = theme.FONT_FAMILY;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Container = styled.View`
  height: ${windowHeight * 0.98}px;
  alignitems: center;
`;

export const TitleCont = styled.View`
  zindex: 1;
  width: ${windowWidth}px;
  height: ${windowHeight * 0.15}px;
  padding: 15px;
  justifycontent: flex-end;
  top: 0px;
`;

export const Title = styled.Text`
  fontsize: 34px;
  fontfamily: ${fonts.BOLD};
  color: black;
`;

export const ProductCont = styled.View`
  width: ${windowWidth * 0.9}px;
  height: 120px;
  flexdirection: row;
  backgroundcolor: white;
  borderradius: 12px;
  justifycontent: space-around;
  margin: 8px;
`;

export const InfoCont = styled.View`
  marginleft: 12px;
  justifycontent: space-around;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 120px;
  borderradius: 12px;
`;

export const ProductName = styled.Text`
  fontsize: 18px;
  fontfamily: ${fonts.BOLD};
  color: black;
`;

export const ProductValue = styled.Text`
  fontsize: 16px;
  fontfamily: ${fonts.SEMI_BOLD};
  color: black;
`;

export const Counter = styled.View`
  flexdirection: row;
  alignitems: center;
  width: 110px;
  justifycontent: space-between;
`;

export const CounterButton = styled.TouchableOpacity`
  backgroundcolor: ${colors.RED_500};
  borderradius: 100px;
  width: 36px;
  justifycontent: center;
  flexdirection: row;
`;
export const TrashButton = styled.TouchableOpacity`
  backgroundcolor: ${colors.RED_500};
  bordertoprightradius: 12px;
  borderbottomleftradius: 12px;
  width: 36px;
  justifycontent: center;
  flexdirection: row;
  top: -15px;
  right: -30px;
`;

export const CounterText = styled.Text`
  fontfamily: ${fonts.SEMI_BOLD};
  fontsize: 16px;
  color: black;
`;

export const BuyCont = styled.View`
  alignitems: center;
  height: ${windowHeight * 0.15}px;
`;

export const BuyInfo = styled.View`
  flexdirection: row;
  width: ${windowWidth}px;
  justifycontent: space-between;
  alignitems: center;
  padding: 10px;
`;

export const BuyText = styled.Text`
  fontsize: 16px;
  fontfamily: ${fonts.REGULAR};
  color: ${colors.GRAY_500};
`;

export const BuyValue = styled.Text`
  fontsize: 20px;
  fontfamily: ${fonts.SEMI_BOLD};
  color: black;
`;

export const BuyButton = styled.TouchableOpacity`
  backgroundcolor: ${({ disabled }) =>
    disabled ? colors.GRAY_900 : colors.RED_500};
  width: ${windowWidth * 0.9}px;
  height: 50px;
  alignitems: center;
  justifycontent: center;
  borderradius: 25px;
`;

export const BuyButtonText = styled.Text`
  fontsize: 16px;
  fontfamily: ${fonts.EXTRA_BOLD};
  color: white;
`;

export const EmptyCartCont = styled.View`
  alignitems: center;
  justifycontent: center;
  height: ${windowHeight * 0.5}px;
`;

export const EmptyCartText = styled.Text`
  fontsize: 26px;
  fontfamily: ${fonts.REGULAR};
  color: black;
  textalign: center;
`;
s;
