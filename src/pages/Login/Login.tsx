import { useState } from 'react';
import OptixLogo from '../../assets/icons/optix-logo.svg';
import userIcon from '../../assets/icons/user.svg';
import passIcon from '../../assets/icons/pass.svg';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';
import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { useHistory } from 'react-router-dom';

const PROGRESS = {
  PERCENT: 100,
  DURATION: 1000,
};
const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage] = useState<string>('');
  const [isLoading] = useState<boolean>(true);
  const { t } = useTranslation();
  const history = useHistory();
  const onProgress = (args: any) => {
    if (!isLoading) {
      args.percent = PROGRESS.PERCENT;
    }
    history.push('/dashbroad');
  };
  return (
    <div className="login login-desktop">
      <div className="login-image" />
      <div className="login-group">
        <div className="login-container">
          <div className="login-logo">
            <img src={OptixLogo} alt="" />
          </div>
          <div className="login-title">
            <p className="title-cn">{t('login-please')}</p>
          </div>
          <div className="login-content">
            <div className="input-container">
              <img src={userIcon} alt="" className="input-icon" />
              <input
                type="text"
                placeholder="User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <img src={passIcon} alt="" className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {errorMessage ? (
            <div className="error-message">
              <p>{errorMessage}</p>
            </div>
          ) : null}
          <div className="login-btn">
            <ProgressButtonComponent
              isPrimary
              content="Login"
              className="btn-login"
              duration={PROGRESS.DURATION}
              disabled={!username || !password}
              progress={onProgress}
            />
          </div>
        </div>
        <div className="logo-footer">
          <img src={OptixLogo} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Login;
