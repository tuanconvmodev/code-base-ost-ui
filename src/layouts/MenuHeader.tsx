import React, { Suspense, useState } from 'react';
import { planningSubMenuItems, rosteringSubMenuItems } from './datasource';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import DefaultHeader from './DefaultHeader';
import { useHistory } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import DefaultSubMenu from '../components/SubMenu';

const MenuHeader: React.FC = (props: any) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(true);
  const [isHidePopupLogout, setIsHidePopupLogout] = useState<boolean>(true);
  const {
    location: { pathname },
  } = props;
  const token = localStorage.getItem('access_token');
  const isPlanning = pathname.indexOf('/planning/') === 0;
  const isRostering = pathname.indexOf('/rostering/') === 0;
  const subMenuItems = isRostering
    ? rosteringSubMenuItems
    : isPlanning
    ? planningSubMenuItems
    : [];
  const history = useHistory();
  const onCollapse = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCollapse(!isCollapse);
  };
  const onSelect = ({ item }: { item: any }) => {
    if (item.properties.text === 'Settings') {
      props.history.push(item.path);
    } else {
      props.history.push(item.path);
    }
    setIsCollapse(true);
  };

  const onLogout = (isLogout: boolean) => {
    setIsHidePopupLogout(true);
    if (isLogout) {
      // clear user data & go to login
      // localStorage.removeItem("access_token");
      localStorage.clear();
    }
    history.push('/login');
  };

  const onShowLogout = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHidePopupLogout(false);
  };
  return (
    <>
      {token && pathname.indexOf('/login') !== 0 && (
        <Suspense fallback={<Spinner />}>
          <DefaultHeader
            pathname={pathname}
            isPlanning={isPlanning}
            isRostering={isRostering}
            history={props.history}
            onLogout={onShowLogout}
            onSelectSettings={onCollapse}
          />
        </Suspense>
      )}
      {isCollapse ? null : (
        <div className="sub-menu-wrapper">
          <DefaultSubMenu
            pathname={pathname}
            items={subMenuItems}
            onSelect={onSelect}
            onCollapse={onCollapse}
          />
        </div>
      )}

      {isHidePopupLogout ? null : (
        <DialogComponent
          id="PopupLogout"
          header="Logout"
          content="Are you sure you want to logout?"
          visible={!isHidePopupLogout}
          isModal
          width="400px"
          buttons={[
            {
              click: () => onLogout(false),
              buttonModel: {
                content: 'Cancel',
                cssClass: 'btn-cancel',
              },
            },
            {
              click: () => onLogout(true),
              buttonModel: {
                content: 'Confirm',
                cssClass: 'btn-confirm',
              },
            },
          ]}
          close={() => onLogout(false)}
        />
      )}
    </>
  );
};
export default MenuHeader;
