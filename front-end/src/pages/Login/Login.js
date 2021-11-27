import { useContext, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { firebase, auth } from '../../service/firebase'


import ButtonCustom from '../../components/index'
import { colors } from '../../assets/colors'

import * as S from './styles'


const Login = () => {
  const { user, setUser } = useAuth();


  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName, photoURL } = user;
        if (!displayName || !photoURL) throw new Error("Usuário sem nome de identificação ou foto");

        setUser({
          id: uid,
          avatar: photoURL,
          name: displayName,
        })

      }
    })
  }, []);


  const handleClickButtonLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { uid, displayName, photoURL } = result.user;
      if (!displayName || !photoURL) throw new Error("Usuário sem nome de identificação ou foto");

      setUser({
        id: uid,
        avatar: photoURL,
        name: displayName,

      })
    }

  }
  return (
    <>
      <S.MainLoginContainer>
        <S.LoginContainer>
          < S.HeaderLoginForm>
            <h1>
              Seja bem vindo!
            </h1>
            <small> Faça login com uma das opções abaixo</small>
          </S.HeaderLoginForm>
          <S.FormContainer>
            <form action="logar">
              <S.InputFormLogin>
                <label htmlFor="email">E-mail  </label>
                <input type="text" />
              </S.InputFormLogin>
              <S.InputFormLogin>
                <label htmlFor="Senha">Senha  </label>
                <input type="password" />

                <ButtonCustom
                  width='100%'
                  height='25px'

                  onClick={handleClickButtonLogin}
                  color={colors.purple}
                >
                  Entrar
                </ButtonCustom>

              </S.InputFormLogin>
            </form>
          </S.FormContainer>

          <S.FooterLoginForm>
            <ButtonCustom
              onClick={handleClickButtonLogin}
              color={colors.purple}
            >
              Logar com Google
            </ButtonCustom>
            <ButtonCustom
              onClick={handleClickButtonLogin}
              color={colors.purple}

            >
              Criar conta
            </ButtonCustom>
          </S.FooterLoginForm>
        </S.LoginContainer>

      </S.MainLoginContainer >
    </>
  );
};
export default Login;