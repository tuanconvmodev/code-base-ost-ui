import React from 'react';
import SubMenu from './view';
interface Props {
  items: any;
  onSelect: (item: any) => void;
  onCollapse: (item: any) => void;
  pathname: string;
}
const SubMenuContainer = ({ items, onSelect, onCollapse, pathname }: Props) => {
  return (
    <SubMenu
      items={items}
      onSelect={onSelect}
      onCollapse={onCollapse}
      pathname={pathname}
    />
  );
};

export default SubMenuContainer;
