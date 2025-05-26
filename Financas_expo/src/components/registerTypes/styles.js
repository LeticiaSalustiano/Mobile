import styled from "styled-components/native";

export const RegisterContainer = styled.View`
    flex-direction: row;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
    align-items: center;
`;

export const RegisterTypeBotao = styled.TouchableOpacity`
    background-color: ${props => props.checked ? '#fff' : '#E1E1E1'};
    width: 47%;
    height: 45px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 5px;
    border-width: 1px;
    border-color: ${props => props.checked ? '#3d3dbf' : 'transparent'};
    margin-bottom: 14px;
`;

export const RegisterLabel = styled.Text`
    font-size: 17px;
    margin-left: 5px;
`;