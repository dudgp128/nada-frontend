import styled from 'styled-components';
// 회원가입, 로그인 페이지의 레이아웃을 담당하는 컴포넌트
const LogInPersonal = styled.div`
  text-align: left;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const AuthTemplate = ({ children }) => {
  return <LogInPersonal>{children}</LogInPersonal>;
};

export default AuthTemplate;
