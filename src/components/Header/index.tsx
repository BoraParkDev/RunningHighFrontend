/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from './styles';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeProcess, RewardState } from 'src/reducers/rewards';
import back from 'src/assets/back.svg';
import coin from 'src/assets/coin.svg';
import logo from 'src/assets/logo.svg';

type clickFuncType = {
  onClick: () => {
    payload: any;
    type: string;
  };
};

export const Header = () => {
  const process = useSelector(
    (state: { rewards: RewardState }) => state.rewards.process
  );
  const dispatch = useDispatch();
  const handlePage = () => dispatch(changeProcess('start'));

  return (
    <nav css={styles.navStyle}>
      {
        {
          main: <HeaderContainer />,
          start: <HeaderContainer />,
          running: <CloseBox onClick={() => handlePage()} />,
          photo: <HeaderContainer />,
          complete: <CloseBox onClick={() => handlePage()} />,
        }[process]
      }
    </nav>
  );
};

const HeaderContainer = () => {
  const location = useLocation();
  return (
    <>
      <h1>
        {location.pathname.length > 1 ? (
          <a href="/" css={{ cursor: 'pointer' }}>
            <img src={back} alt="뒤로가기" />
          </a>
        ) : (
          <a href="/" css={{ cursor: 'pointer' }}>
            <img src={logo} alt="logo" />
          </a>
        )}
      </h1>
      <div css={{ display: 'flex' }}>
        <div css={styles.pointStyle}>
          <img
            src={coin}
            css={{ heihgt: '15px', objectFit: 'contain' }}
            alt="포인트"
          />
          <p className="myPoint">1,200</p>
        </div>
        <div css={styles.menuStyle} />
      </div>
    </>
  );
};

const CloseBox = (onClick?: clickFuncType) => {
  return <div css={styles.closeBtnStyle} />;
};
