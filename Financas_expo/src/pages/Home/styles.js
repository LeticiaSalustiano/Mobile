import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f4ff;
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;
`;

export const Area = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-left: 14px;
  padding-right: 14px;
  align-items: baseline;
`;

export const Title = styled.Text`
  margin-left: 10px;
  color: #121212;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 18px;
`;

export const List = styled.FlatList`
  background-color: #fff;
  flex: 1;
`;