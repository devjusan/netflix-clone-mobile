import styled from 'styled-components/native';

export const ContainerView = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`;

export const InputView = styled.View`
  display: flex;
  width: 80%;
  height: 40%;
`;

export const Input = styled.TextInput`
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  display: flex;
  align-items: center;
  margin-bottom: 100;
`;

export default {ContainerView, InputView, Image, Input};
