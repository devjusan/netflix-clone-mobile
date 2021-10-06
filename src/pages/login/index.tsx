/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import Style from './styles';
import {Text} from '../../styles/global';

const Login: React.FC = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });
  return (
    <Style.ContainerView>
      <Style.Image source={require('../../assets/logo/logo.png')} />
      <Style.InputView>
        <TextInput
          mode="flat"
          style={{marginBottom: 20}}
          label="E-mail ou número de telefone"
          value={form.email}
          onChangeText={text => setForm({...form, email: text})}
        />
        <TextInput
          mode="flat"
          style={{marginBottom: 20}}
          label="Senha"
          secureTextEntry
          value={form.password}
          onChangeText={text => setForm({...form, password: text})}
        />
        <Button
          style={{marginBottom: 20}}
          mode="contained"
          onPress={() => console.log('a')}>
          <Text>Entrar</Text>
        </Button>
        <Button
          style={{marginBottom: 20}}
          onPress={() => console.log('a')}
          theme={{colors: {primary: '#fff'}}}>
          <Text>Recuperar Senha</Text>
        </Button>

        <Text
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            textAlign: 'center',
            marginTop: 30,
          }}>
          O acesso está protegido pelo Google reCAPTCHA para garantir que você
          não é um robo. Siba mais.
        </Text>
      </Style.InputView>
    </Style.ContainerView>
  );
};

export default Login;
