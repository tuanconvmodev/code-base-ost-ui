import React from 'react';
import Menu from './Menu';
interface Props {
  items: any;
  onSelect: any;
  onCollapse: any;
  pathname: any;
}
const SubMenu = ({ items, onSelect, onCollapse, pathname }: Props) => {
  return (
    <div className="sub-menu-container">
      <div className="sub-menu">
        <Menu items={items} onSelect={onSelect} pathname={pathname} />
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className="sub-menu-collapse-overlay"
        onClick={onCollapse}
        role="button"
        tabIndex={-1}
      >
        <div className="collapse-button">
          <div className="e-icons e-up-arrow" />
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
