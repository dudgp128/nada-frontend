import RegisterForm from '../../containers/auth/register/RegisterForm';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { changeBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import { RegisterBox } from '../../styles/Auth';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const registerMap = {
    '/register/personal': 'personal',
    '/register/team': 'team',
  };

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <>
      <RegisterBox>
        <RegisterForm type={registerMap[pathname]} />
      </RegisterBox>
    </>
  );
};
export default RegisterPage;
