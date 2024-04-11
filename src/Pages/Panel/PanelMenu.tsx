import React from "react";
import { selectors } from "./menuOptions.ts";

type ButtonProps = {
  handleSelector: (event: React.MouseEvent) => void;
};

const PanelMenu = ({ handleSelector }: ButtonProps) => {
  return (
    <ul className="panel-menu-ul">
      {/* list of elements for the menu */}
      {selectors.map((selector) => (
        <button
          className="panel-menu-selector"
          name={selector.name}
          key={selector.name}
          onClick={handleSelector}
        >
          {selector.name}
        </button>
      ))}
    </ul>
  );
};

export default PanelMenu;
