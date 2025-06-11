import styled from "styled-components/native";

// Home Adm
export const HomeContainer = styled.View`
  flex: 1;
  background-color: #bbeef9;
  padding: 20px;
`;

export const HomeTitulo = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-bottom: 12px;
  text-align: center;
`;

export const HomeSubtitulo = styled.Text`
  font-size: 18px;
  color: #000;
  text-align: center;
`;

export const Subtitulo = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Texto = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #000;
  text-align: center;
  max-width: 70px;
`;

export const Texto2 = styled.Text`
  font-size: 17px;
  color: #000;
  text-align: center;
  max-width: 95px; 
`;

export const Texto3 = styled.Text`
  font-size: 17px;
  color: #000;
  text-align: center;
  max-width: 60px; 
`;

export const BtnArea = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const Btn = styled.TouchableOpacity`
  background-color: #14c5ec;
  border-radius: 5px;
  justify-content: center;
  width: 170px;
  height: 50px;
  margin: 5px;
`;

export const BtnTxt = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 19px;
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
  elevation: 5;
  align-items: center;
`;

export const Linha = styled.View`
   flex-direction: row;
   justify-content: space-between;
   padding: 10px;
   border-bottom-width: 1px;
   border-color: #ccc;
`;

export const BotaoArea = styled.View`
    align-items: center;
    flex-direction: row;
    padding: 2px;
    margin-left: 13px;
    justify-content: flex-end;
`;

export const Botao = styled.TouchableOpacity`
  border-radius: 5px;
  padding-horizontal: 12px;
  
`;

export const BotaoTxt = styled.Text`
  color: #000;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

// Gerenciar Usuários
export const UsuariosContainer = styled.View`
  flex: 1;
  background-color: #bbeef9;
  padding: 20px;
`;

export const AreaHeader = styled.View`
  flex-direction: row;
`;

export const UsuariosTitulo = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #000;
  text-align: center;
`;

export const UsuariosTitulo2 = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000;
  text-align: center;
`;

export const UsuarioSubtitulo = styled.Text`
  font-size: 18px;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
`;

export const UsuarioItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-offset: 0px 1px;
  shadow-radius: 3px;
  elevation: 2;
`;

export const UsuarioNome = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const UsuarioTipo = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const BtnRemover = styled.TouchableOpacity`
  background-color: #e53935;
  border-radius: 5px;
  padding-horizontal: 12px;
  justify-content: center;
`;

export const BtnRemoverTxt = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const AreaBtn = styled.View`
  align-items: center;
  flex-direction: collum;
  padding: 20px;
  margin-bottom: 30px;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #14c5ec;
  border-radius: 5px;
  justify-content: center;
  width: 170px;
  height: 50px;
  margin: 5px;
`;

export const TxtBtn = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 19px;
`;

export const Area = styled.View`
   flex: 1;
   margin-top: 20px;
`;

export const Tabela2 = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
`;

export const Linha2 = styled.View`
   flex-direction: row;
   justify-content: ;
   padding: 10px;
   border-bottom-width: 1px;
   border-color: #ccc;
`;

export const TextoUser = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const TextoTipo = styled.Text`
  font-size: 17px;
  color: #000;
  text-align: center;
  max-width: 65px; 
  font-weight: bold;
`;

export const TextoMotivo = styled.Text`
  font-size: 17px;
  color: #000;
  text-align: center;
  max-width: 205px;
`;

export const TextoUser2 = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #000;
  text-align: left;
  width: 100px;
`;

export const TextoTipo2 = styled.Text`
  font-size: 17px;
  color: #000;
  text-align: center;
  width: 170px;
  font-weight: bold;
`;

export const TextoMotivo2 = styled.Text`
  font-size: 17px;
  color: #000;
  text-align: center;
  width: 20px;
`;

export const Textoquan = styled.Text`
  font-size: 17px;
  color: #000;
  text-align: center;
  width: 90px;
`;


// Gerenciar Conteúdo
export const ConteudoContainer = styled.View`
  flex: 1;
  background-color: #bbeef9;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ConteudoTitulo = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ef6c00;
`;

export const ConteudoTexto = styled.Text`
  font-size: 16px;
  color: #6d4c41;
  text-align: center;
`;
