import styled from 'styled-components/native';
import theme from '../../theme';// 
export const Container = styled.View`
  margin-top: 30px;
  width: 451px;
  height: 120px;
  margin-left: 37px;
`;

export const TitleDeliveryStyle = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color:  ${theme.COLORS.BLACK_900};
`;

export const SectionDelivery = styled.View`
  width: 405px;
  height: 83px;
  margin-top: 16px;
`;

export const ContainerSlide = styled.ScrollView`
  flex-direction: row;
`;

export const SelectDelivery = styled.TouchableOpacity`
  height: 72px;
  width: 100px;
  margin-right: 20px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  elevation: 2;
  
`;

export const ImageStyle = styled.Image`
  width: 61px;
  height: 17px;
`;

export const MethodName = styled.Text`
  color: ${theme.COLORS.GRAY_500};
  font-size: ${theme.FONT_SIZE.SM}px;
`;
