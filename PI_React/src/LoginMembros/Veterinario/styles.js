import styled from "styled-components";

export const Background = styled.View`
   flex: 1;
   background-color: #bbeef9;
   padding: 20px;
`;

export const Header = styled.Text`
   font-size: 22px;
   font-weight: bold;
   text-align: center;
   margin-bottom: 2px;
   color: #000;
`;

export const Subtitulo = styled.Text`
  font-size: 18px;
  color: #000;
  text-align: center;
  margin-bottom: 12px;
`;

export const Tabela = styled.View`
   background-color: #fff;
   padding: 10px;
   border-radius: 8px;
   margin-bottom: 10px;
   shadow-color: #000;
   shadow-offset: 0px 2px;
   shadow-opacity: 0.2;
   shadow-radius: 4px;
   elevation: 3;
`;

export const Linha = styled.View`
   flex-direction: row;
   justify-content: space-between;
   padding: 10px;
   border-bottom-width: 1px;
   border-color: #ccc;
`;

export const Texto = styled.Text`
   font-size: 16px;
   color: #444;
`;

export const BtnArea = styled.View`
   flex-direction: row;
   justify-content: space-around;
   margin-top: 10px;
   margin-bottom: 10px;
`;

export const Btn = styled.TouchableOpacity`
   background-color: #14c5ec;
   align-items: center;
   border-radius: 5px;
   width: 48%;
   height: 50px;
   justify-content: center;
`;

export const BtnTxt = styled.Text`
   color: #000;
   font-size: 17px;
`;

export const Input = styled.TextInput`
   border-color: #000;
   border-width: 1px;
   margin-bottom: 13px;
   padding: 10px;
   font-size: 16px;
   background-color: #fff;
   border-radius: 5px;
`;

export const BtnArea2 = styled.View`
   flex-direction: row;
   justify-content: space-around;
   margin-top: 20px;
`;

export const HorariosArea = styled.View`
   margin-top: 10px;
`;

export const HorarioBtn = styled.TouchableOpacity`
   background-color: ${(props) => (props.selecionado ? "#14c5ec" : "#fff")};
   padding: 10px;
   border-radius: 5px;
   margin-bottom: 10px;
   elevation: 3;
`;

export const HorarioTxt = styled.Text`
   font-size: 16px;
   color: ${(props) => (props.selecionado ? "#fff" : "#121212")};
   text-align: center;
`;

export const BotaoSair = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  background-color: #14c5ec;
  align-self: flex-end;
  border-radius: 50px;
`;