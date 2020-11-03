import React from 'react';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import cx from 'classnames';

const Template = (
  { text, path }: { text: string; path: string },
  pathname: string,
) => {
  return text === 'separator' ? (
    <div className="vertical-separator" />
  ) : (
    <div className={cx('item-detail', { active: path === pathname })}>
      <h6>{text}</h6>
    </div>
  );
};
interface PropsMenu {
  items: any;
  onSelect: any;
  pathname: string;
}
const Menu = ({ items, onSelect, pathname }: PropsMenu) => {
  return (
    <MenuComponent
      items={items}
      select={onSelect}
      template={(data: any) => Template(data, pathname)}
    />
  );
};

export default Menu;
