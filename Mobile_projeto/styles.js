import styled from "styled-components";

export const Background = styled.View`
   flex: 1;
   background-color: #bbeef9;
   align-items: center;
   justify-content: center       
`;

export const Imagem = styled.Image`
    width: 200px;
    height: 200px;
    margin: 5px;
    margin-top: -90px;
`;

export const Titulo = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
`;

export const Texto = styled.Text`
    font-size: 17px;
    text-align: center;
`;

export const BtnArea = styled.View`
    margin-top: 40px;
`;

export const Btn = styled.TouchableOpacity`
    margin: 5px;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: #14c5ec;
`;

export const BtnTxt = styled.Text`
    color: #000;
    font-weight: bold;
    font-size: 20px
`;

export const Container = styled.ScrollView`
   flex: 1;
   background-color: #bbeef9;  
`;