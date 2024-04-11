import "./Panel.css";
import PanelMenu from "./PanelMenu";
import PanelForm from "./PanelDisplay/PanelForm";
import { MouseEventHandler, useState } from "react";
import EmailForm from "../../Components/Forms/EmailForm";
import PanelViewMessages from "./PanelDisplay/PanelViewMessages";

const Panel = () => {
  const [selector, setSelector] = useState("");

  /* Handle click and transfers name of selected button */
  const handleClick: MouseEventHandler = (event) => {
    if (event.target instanceof HTMLButtonElement) {
      const name = event.target.name;
      console.log("name:", name);
      setSelector(name);
    } else console.log("No name:", name);
  };

  return (
    <section className="panel-section">
      <div className="panel-menu-container">
        <PanelMenu handleSelector={handleClick}></PanelMenu>
      </div>
      <div className="panel-display">
        {/* render display section on 'selector' */}
        {selector === "Message" && (
          <PanelForm>
            <EmailForm></EmailForm>
          </PanelForm>
        )}
        {selector === "Texts" && <PanelViewMessages></PanelViewMessages>}
      </div>
    </section>
  );
};

export default Panel;
