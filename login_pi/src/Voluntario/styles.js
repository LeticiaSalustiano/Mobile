import styled from "styled-components";

export const Background = styled.View`
  flex: 1;
  padding: 20px;
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
  margin-bottom: 10px; 
  margin-top: 15px;
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
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 10px;
`;

export const BtnTxt = styled.Text` 
  color: #000;
  font-size: 18px;
`;

export const Texto = styled.Text` 
  color: #000;
  font-size: 17px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Subtitulo = styled.Text` 
  color: #000;
  font-size: 17px;
  font-weight: bold; 
  margin-top: 10px;
  text-align: center;
`;

export const Area = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const Tabela = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 12px 15px;
  border-radius: 8px;
  margin-bottom: 8px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
`;

export const Linha = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 5px;
`;

export const LinhaHorario = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 12px 15px;
  border-radius: 8px;
  margin-bottom: 8px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
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
  margin-top: 50px;
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