import { selectors } from "./menuOptions.ts";

const PanelMenu = () => {
  return (
    <ul className="panel-menu-ul">
      {/* list of elements for the menu */}
      {selectors.map((selector) => (
        <button className="panel-menu-selector"
        key={selector.name}
        >{selector.name}</button>
      ))}
    </ul>
  );
};

export default PanelMenu;
