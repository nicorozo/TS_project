import "./Panel.css";
import PanelMenu from "./PanelMenu";
import PanelForm from "./PanelDisplay/PanelForm";

const Panel = () => {
  return (
    <section className="panel-section">
      <div className="panel-menu-container">
        <PanelMenu></PanelMenu>
      </div>
      <div className="panel-display">
        <PanelForm></PanelForm>
      </div>
    </section>
  );
};

export default Panel;
