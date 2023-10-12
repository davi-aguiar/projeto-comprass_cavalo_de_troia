import React from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { StyledView, StyledContainerInput, StyledTextInput, StyledInputWithActivityIndicator, StyledCepInput } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface InputCepProps {
  zipCode: string;
  onZipCodeChange: (text: string) => void;
  text: string;
  maxLength: number;
  isLoading: boolean;
  isDisabled: boolean;
  showIcons: boolean;
}

export const CepInput: React.FC<InputCepProps> = ({
  zipCode,
  onZipCodeChange,
  text,
  maxLength,
  isLoading,
  isDisabled,
  showIcons,
}) => {
  return (
    <StyledView>
      <StyledContainerInput style={[
          isDisabled && { backgroundColor: 'gray', opacity: 0.6 },
        ]}>
        <StyledTextInput>{text}</StyledTextInput>
        <StyledInputWithActivityIndicator>
          <StyledCepInput
            value={zipCode}
            onChangeText={onZipCodeChange}
            maxLength={maxLength}
            editable={!isDisabled}
          />
          {showIcons && (
            <>
              <AntDesign name="check" style={{ color: 'green', fontSize: 17 }} />
            </>
          )}
          {isLoading && (
            <ActivityIndicator
              style={{ marginRight: 15 }}
              color="red"
              size="small"
            />
          )}
        </StyledInputWithActivityIndicator>
      </StyledContainerInput>
    </StyledView>
  );
}