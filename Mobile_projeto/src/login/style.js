import styled from "styled-components";

export const Background = styled.View`
   flex: 1;
   padding: 20px;
   justify-content: center;
   align-items: center;
   background-color: #bbeef9;
`;

export const Container = styled.View`
    width: 80%;
`;

export const Imagem = styled.Image`
    width: 200px;
    height: 200px;
    margin: 5px;
    margin-top: -60px;
    align-self: center;
`;

export const Titulo = styled.Text` 
   font-size: 20px; 
   font-weight: bold; 
   margin-bottom: 20px; 
   margin-top: 20px;
   text-align: center;
`;

export const Input = styled.TextInput` 
    border-bottom-width: 1px; 
    margin-bottom: 20px; 
    padding: 10px;
    width: 100%;
`;

export const Btn = styled.TouchableOpacity` 
    background-color: #14c5ec;
    padding: 15px;
    align-items: center;
    border-radius: 5px;
    margin-top: 10px;
`;

export const BtnTxt = styled.Text` 
    color: #fff;
    font-size: 18px;
`;
