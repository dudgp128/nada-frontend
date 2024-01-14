import RegisterForm from '../../containers/auth/register/RegisterForm';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { changeBarStatus } from '../../modules/redux/bar';
import { useDispatch } from 'react-redux';

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
      <RegisterForm type={registerMap[pathname]} />
    </>
  );
};
export default RegisterPage;
