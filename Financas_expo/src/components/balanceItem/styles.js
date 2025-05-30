import styled from "styled-components/native";

export const Container = styled.View`
   background-color: #${props=>props.bg};
   margin-left: 14px;
   margin-right: 14px;
   border-radius: 5px;
   justify-content: center;
   align-items: flex-start;
   width: 300px;
   height: 150px;
   padding-left: 14px;
   margin-top: 20px;
`;

export const Label = styled.Text`
   color: #fff;
   font-size: 19px;
   font-weight: bold;
`;

export const Descricao = styled.Text`
   color: #000;
   font-size: 18px;
   margin-top: 10px;
`;

export const Balance = styled.Text`
   color: #fff;
   font-size: 30px;
   margin-top: 10px;
`;