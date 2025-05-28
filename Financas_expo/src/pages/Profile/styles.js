import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
   flex: 1;
   background-color: #f0f4ff;
   align-items: center;
`;

export const Message = styled.Text`
   font-size: 18px;
   font-weight: bold;
   margin-top: 60px;
`;

export const Name = styled.Text`
   font-size: 24px;
   margin-bottom: 24px;
   padding: 0 14px;
   color: #121212;
   margin-top: 8px;
`;

export const NewLink = styled.TouchableOpacity`
   width: 90%;
   height: 45px;
   background-color: #3b3dbf;
   border-radius: 4px;
   align-items: center;
   justify-content: center;
`;

export const NewText = styled.Text`
   font-size: 18px;
   font-weight: bold;
   color: #fff;
`;

export const LogoutBtn = styled.TouchableOpacity`
   width: 90%;
   height: 45px;
   background-color: #f0f4ff;
   border-radius: 4px;
   align-items: center;
   justify-content: center;
   margin-top: 13px;
   border-color: #c62c36;
   border-width: 2px;
`;

export const LogoutTxt = styled.Text`
   font-size: 18px;
   font-weight: bold;
   color: #c62c36;
`;


