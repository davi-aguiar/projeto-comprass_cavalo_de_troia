import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ImageBackgroundStyled = styled.ImageBackground`
    flex: 1;
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
    height: 41px;
    width: 41px;
`;

export const LupaImage = styled.Image`
    top: 8px;
    right: 12px;
    width: 22px;
    height: 22px;
`;

export const LogoContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 115px;
`;

export const LogoImage = styled.Image`
    height: 56px;
`;


export const CartContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 110px;
    margin-bottom: 8px;
`;

export const TextStyled = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    margin-right: 16px;
    margin-left: 16px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
`;

export const CartImage = styled.Image`
    width: 46px;
    height: 46px;
`;

export const TextInput = styled.TextInput`
    background-color: white;
    border: 6px solid red;
    border-radius: 18px;
    padding: 2px 15px;
    margin: 22px;

    width: 90%;
    position: absolute;
    top: 55px;
    z-index: 10;
`;



export const ProductDropdown = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    

    position: absolute;
    top: 130px;
    z-index: 10;
`;

export const ProductDropdownItem = styled.TouchableOpacity`
    width: 90%;
    background-color: white;
    border: 1px solid grey;
    border-radius: 18px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    
`;

export const ProductImage = styled.Image`
    width: 40px;
    height: 55px;
    border-radius: 8px;
    
`;

export const ProductTitle = styled.Text`
    font-size: 16px;
    color: black;
    font-weight: bold;
    
`;

export const ProductPrice = styled.Text`
    font-size: 14px;
    color: red;
    font-weight: 800;
`;
