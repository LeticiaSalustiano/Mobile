import styled from "styled-components/native";

export const Background = styled.View`
   flex: 1;
   background-color: #bbeef9;
   padding: 20px;
`;

export const Header = styled.Text`
   font-size: 22px;
   font-weight: bold;
   text-align: center;
   margin-bottom: 5px;
   color: #000;
`;

export const Texto = styled.Text`
   font-size: 17px;
   color: #000;
   text-align: center;
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

export const TextoStatus = styled.Text`
   font-size: 16px;
   font-weight: bold;
   margin-left: 6px;
   color: ${props => {
     if (props.status === "Resgatado") return "#2e7d32";
     if (props.status === "A caminho") return "#f9a825";
     return "red";
   }};
`;

export const BtnArea = styled.View`
   align-items: center;
   flex-direction: row;
   justify-content: space-around;
   margin-top: 10px;
   margin-bottom: 30px;
`;

export const Btn = styled.TouchableOpacity`
   background-color: #14c5ec;
   align-items: center;
   justify-content: center;
   border-radius: 8px;
   width: 170px;
   height: 70px;
`;

export const BtnTxt = styled.Text`
   color: #000;
   font-size: 18px;
`;

export const BtnTxt2 = styled.Text`
   color: #fff;
   font-size: 16px;
   font-weight: bold;
   margin-left: 8px;
`;

export const BtnRow = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;

export const StatusResumo = styled.View`
  background-color: #e0f7fa;
  padding: 15px;
  margin-vertical: 15px;
  border-radius: 8px;
  border-left-width: 5px;
  border-left-color: #e0f7fa;
`;

export const Icone = styled.View`
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
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

export const Perfil = styled.View`
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  border-radius: 50%;
  border: 3px;
  border-color: #14c5ec;
`;
