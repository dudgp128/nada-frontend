import React from 'react';
import { InputBox, LoginBtn, TitleBox } from '../../../styles/Survey';
import { useSelector } from 'react-redux';

const NameForm = ({ onSubmit, order, dispatchField }) => {
  const name = useSelector(({ badge }) => badge.name);

  return (
    <>
      <TitleBox>
        뱃지 발급을 시작할게요!
        <br />
        뱃지 이름은 어떻게 할까요?
      </TitleBox>
      <form onSubmit={onSubmit} id={order}>
        <InputBox>
          <input
            name="name"
            placeholder="20자 이내로 입력해 주세요."
            onChange={dispatchField}
            value={name}
            required
          />
        </InputBox>
      </form>
      <LoginBtn form={order}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default NameForm;
