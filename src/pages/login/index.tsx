import React from 'react';
import {Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import Style from './styles';

const Login: React.FC = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });
  return (
    <Style.ContainerView>
      <Image source={require('../../assets/logo/logo.png')} />
      <Style.InputView>
        <TextInput
          label="E-mail"
          value={form.email}
          onChangeText={text => setForm({...form, email: text})}
        />
        <TextInput
          label="Senha"
          secureTextEntry
          value={form.password}
          onChangeText={text => setForm({...form, password: text})}
        />
      </Style.InputView>
    </Style.ContainerView>
  );
};

export default Login;
