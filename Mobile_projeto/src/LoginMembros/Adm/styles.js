import styled from "styled-components/native";

// Home Adm
export const HomeContainer = styled.View`
  flex: 1;
  background-color: #bbeef9;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const HomeTitulo = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 12px;
  text-align: center;
`;

export const HomeSubtitulo = styled.Text`
  font-size: 18px;
  color: #e0f7fa;
  text-align: center;
`;

// Gerenciar Usuários
export const UsuariosContainer = styled.View`
  flex: 1;
  background-color: #bbeef9;
  padding: 20px;
`;

export const UsuariosTitulo = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #00796b;
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
