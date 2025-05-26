import styled from "styled-components/native";

export const Container = styled.View`
   background-color: #f0f3ff;
   border-radius: 5px;
   margin-left: 10px;
   margin-right: 10px;
   margin-bottom: 10px;
   padding: 12px;
`;

export const Tipo = styled.Text`
   flex-direction: row;
`;

export const TipoText = styled.Text`
   color: #fff;
   font-size: 16px;
   font-style: italic;
`;

//c62c36
export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props=> props.tipo === 'despesa' ? '#c62c36' : '#049301' };
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 5px;
  margin-bottom: 4px;
`;

export const ValorText = styled.Text`
  color: #121212;
  font-size: 22px;
`;