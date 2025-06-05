import styled from "styled-components";

export const Background = styled.View`
   flex: 1;
   padding: 20px;
   justify-content: center;
   align-items: center;
   background-color: #bbeef9;
`;

export const Container = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const Header = styled.Text`
   font-size: 22px;
   font-weight: bold;
   text-align: center;
   margin-bottom: 5px;
   color: #000;
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
   margin-bottom: 6px; 
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

export const Texto = styled.Text` 
    color: #000;
    font-size: 18px;
`;

export const Area = styled.View`
   flex: 1;
   margin-top: 20px;
`;

export const Tabela = styled.View`
   background-color: #fff;
   padding: 15px;
   border-radius: 10px;
   margin-bottom: 15px;
   shadow-color: #000;
   shadow-offset: 0px 2px;
   shadow-opacity: 0.1;
   shadow-radius: 4px;
   elevation: 3;
   border-left-width: 5px;
   border-left-color: #fff;
`;

export const Linha = styled.View`
   flex-direction: row;
   align-items: center;
   padding-vertical: 5px;
`;
