import styled from "styled-components";

export const Background = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: #bbeef9;
`;

export const Container = styled.View`
    width: 90%;
`;

export const Imagem = styled.Image`
    width: 250px;
    height: 250px;
    align-self: center;
`;

export const Titulo = styled.Text` 
   font-size: 20px; 
   margin-bottom: 10px; 
   margin-top: 10px;
   text-align: center;
`;

export const Input = styled.TextInput` 
    border-width: 1px;  
    padding: 10px;
    width: 100%;
`;

export const Btn = styled.TouchableOpacity` 
    background-color: #14c5ec;
    padding: 15px;
    align-items: center;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 90px;
`;

export const BtnTxt = styled.Text` 
    color: #000;
    font-size: 18px;
`;
