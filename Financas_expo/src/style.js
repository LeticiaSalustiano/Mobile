//Estilização do CSS pelo Mobile:
import styled from "styled-components/native";

export const Background = styled.View`
   flex: 1;
   background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
`;

export const InputArea = styled.View`
    flex-direction: row;
`;

export const TextoInput = styled.TextInput`
    background-color: #fff;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    color: #121212,
`;

export const SubmitBtn = styled.TouchableOpacity`
   background-color: #3b3dbf;
   width: 90%;
   height: 45px;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
   border-radius: 3px;
`;

export const SubmitTxt = styled.Text`
   font-size: 20px;
   color: #fff;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkTxt = styled.Text`
  color: #171717;
`;
