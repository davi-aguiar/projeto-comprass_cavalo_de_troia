import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
  align-items: "center";
  justify-content: flex-start;
  padding: 30px;
`;

export const Title = styled.Text`
  font-weight: 800;
  font-size: 32px;
  align-items: flex-start;
  margin-left: 20px;
`;

export const Image = styled.Image`
  border-radius: 100px;
  margin: 20px;
  height: 144px;
`;
export const ImageConteiner = styled.View`
  align-items: center;
  justify-content: center;
`;
export const InfosConteiner = styled.View`
  align-items: center;
`;
export const ProfileName = styled.TextInput`
  font-weight: 600;
  font-size: 24px;
`;

export const ProfileEmail = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #9b9b9b;
`;

export const ProfileOptionsText = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;

export const ProfileOptions = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom-color: grey;
  border-bottom-width: 1px;
  height: 73px;
  padding: 20px;
  margin: 1px;
`;

export const ConteinerOptions = styled.View`
  width: auto;
`;

export const TitleConteiner = styled.View`
  align-items: flex-start;
  width: ${width}px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #2aa952;
  border-radius: 100px;
  height: 46px;
  width: 46px;
  margin: 20px;
`;

export const ConteinerConfirmButton = styled.View`
  width: ${width}px;
  align-items: flex-end;
  height: 80px;
`;

export const EditButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ff0024;
  border-radius: 100px;
  height: 46px;
  width: 46px;
  margin: 20px;
  position: absolute;
  right: 95px;
  bottom: 90px;
`;

export const CenteredView = styled.Pressable`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalOptions = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
  width: ${width}px;
  height: 200px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ModalTitle = styled.Text`
  margin: 20px;
  font-size: 18px;
  font-weight: 700;
`;

export const ModalTextsSelected = styled.Text`
  color: white;
`;

export const ModalButton = styled.TouchableOpacity<{ color: string }>`
  justify-content: center;
  height: 50px;
  background-color: ${(props) => props.color};
  width: ${width}px;
  padding-left: 20px;
`;

export const StyledText = styled.Text<{ color: string }>`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: ${(props) => props.color};
`;
export const ConteinerImage = styled.View`
  align-items: flex-end;
`;

export const ConteinerLogin = styled.View`
  height: 400px;
  align-items: center;
  justify-content: center;
`;

export const TextLogin = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin: 10px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #ff0024;
  width: 136px;
  height: 48px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 800;
`;
