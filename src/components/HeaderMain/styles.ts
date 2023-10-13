import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
`;

export const ImageBackgroundStyled = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

export const SearchButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: flex-end;
    margin-top: 25px;
    margin-right: 20px;
`;

export const ElipseImage = styled.Image`
    top: 0;
    position: absolute;
    z-index: -1;
`;

export const LupaImage = styled.Image`
    top: 8px;
    right: 12px;
`;

export const LogoContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 115px;
`;

export const LogoImage = styled.Image``;

export const CartContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 110px;
    margin-bottom: 16px;
`;

export const TextStyled = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    margin-right: 16px;
    margin-left: 16px;
`;

export const CartImage = styled.Image`
    width: 46px;
    height: 46px;
`;
