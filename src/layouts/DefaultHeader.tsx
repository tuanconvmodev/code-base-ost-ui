import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg';
import { ReactComponent as SettingIcon } from '../assets/icons/settings.svg';
import Logo from '../assets/icons/optix-logo.png';
import { planningHeader } from './datasource';
interface Props {
  pathname: any;
  onSelectSettings: any;
  isPlanning: any;
  isRostering: any;
  rosteringHeader: any;
  planningHeader: any;
}
const DefaultHeader: React.FC<any> = (props: Props) => {
  const history = useHistory();
  const menuItem = (menu: any) => {
    return (
      <React.Fragment key={menu.url}>
        <li className="nav-item edit-disable">
          <NavLink className="nav-link" activeClassName="active" to={menu.url}>
            {menu.icon && <menu.icon className="navbar-nav-svg mr-3" />}
            {menu.text}
            {menu.text === 'Job Queue' ? (
              <div className="badge-block">
                <span className="e-badge e-badge-overlap e-badge-circle">
                  3
                </span>
              </div>
            ) : null}
          </NavLink>
        </li>
        <hr />
      </React.Fragment>
    );
  };

  const menuSetting = (isActive: boolean, onSelectSettings: any) => {
    const settingClassName = `nav-link btn-setting ${isActive ? 'active' : ''}`;
    return (
      <li className="nav-item edit-disable">
        <a href="# " className={settingClassName} onClick={onSelectSettings}>
          <SettingIcon className="navbar-nav-svg mr-3" />
          Settings
        </a>
      </li>
    );
  };

  const renderHeaderLeft = (title: any, listMenu: any) => {
    const { pathname, onSelectSettings } = props;
    const isPlanning = pathname.indexOf('/planning/settings/') === 0;
    const isRostering = pathname.indexOf('/rostering/settings/') === 0;
    const isActiveSetting = isPlanning || isRostering;

    return (
      <React.Fragment>
        <div className="navbar-title edit-disable">{title}</div>
        <ul
          key={'navbar-nav-left'}
          className="navbar-nav navbar-nav-left edit-disable"
        >
          {listMenu.map(menuItem)}
          {menuSetting(isActiveSetting, onSelectSettings)}
        </ul>
      </React.Fragment>
    );
  };

  const renderHeaderRight = () => {
    const onLogout = () => {
      history.push('/login');
    };
    return (
      <ul key={'navbar-nav'} className="navbar-nav">
        <li className="nav-item edit-disable">
          <a href="##" className="nav-link btn-logout" onClick={onLogout}>
            Logout
            <LogoutIcon className="navbar-nav-svg ml-3" />
          </a>
        </li>
      </ul>
    );
  };
  return (
    <header id="DefaultHeader" className="navbar">
      <NavLink
        className="navbar-brand edit-disable"
        to={'/site-map?tabIndex=' + (props.isPlanning ? '0' : '1')}
      >
        <img src={Logo} alt="" className="d-block" />
      </NavLink>

      {renderHeaderLeft('Planning', planningHeader)}
      {/* {props.isRostering &&
        renderHeaderLeft('Rostering', props.rosteringHeader)} */}

      {renderHeaderRight()}
    </header>
  );
};
export default DefaultHeader;
