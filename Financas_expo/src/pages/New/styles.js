import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #f0f4ff;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    background-color: #fff;
    margin: 10px;
    border-width: 1px;
    font-size: 17px;
    padding: 0 8px;
    border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #00b94a;
    width: 90%;
    height: 50px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const BtnText = styled.Text`
   color: #fff;
   font-size: 20px;
`;