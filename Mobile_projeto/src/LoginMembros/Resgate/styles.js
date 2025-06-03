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
   margin-bottom: 5px;
   color: #000;
`;

export const Texto = styled.Text`
   font-size: 17px;
   color: #444;
   text-align: center;
`;

export const Texto2 = styled.Text`
   font-size: 14px;
   color: #444;
   text-align: center;
   margin-right: 34px
`;

export const Area = styled.View`
   flex-direction: column;
   justify-content: space-around;
   margin-top: 3px;
   margin-bottom: 20px;
`;

export const BtnArea = styled.View`
   flex-direction: row;
   justify-content: space-around;
   margin-top: 10px;
   margin-bottom: 20px;
`;

export const Btn = styled.TouchableOpacity`
   background-color: #14c5ec;
   padding: 15px;
   align-items: center;
   border-radius: 5px;
   flex: 1;
   margin: 0 5px;
`;

export const BtnTxt = styled.Text`
   color: #fff;
   font-size: 18px;
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

export const Tabela = styled.View`
   background-color: #fff;
   padding: 10px;
   border-radius: 8px;
   margin-bottom: 15px;
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


