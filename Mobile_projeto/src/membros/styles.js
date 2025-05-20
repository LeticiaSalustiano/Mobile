import styled from "styled-components";

export const Background = styled.View`
   flex: 1;
   background-color: #bbeef9;
   padding: 20px;    
   justify-content: center; 
`;

export const Imagem = styled.Image`
    width: 200px;
    height: 200px;
    margin: 5px;
    margin-top: -90px;
    align-self: center;
`;

export const Titulo = styled.Text` 
   font-size: 24px; 
   font-weight: bold; 
   margin-bottom: 20px; 
`;

export const Input = styled.TextInput` 
    border-bottom-width: 1px; 
    marginBottom: 20px; 
    padding: 10px  
`;

export const Btn = styled.TouchableOpacity` 
    background-color: #14c5ec; 
    padding: 15px; 
    align-items: center; 
    border-radius: 5px
`;

export const BtnTxt = styled.Text` 
    color: #fff; 
    fontSize: 18px
`;

