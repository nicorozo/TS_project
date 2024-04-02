import "./Panel.css";
import PanelMenu from "./PanelMenu";

const Panel = () => {
  return (
    <section className="panel-section">
      <div className="panel-menu-container">
        <PanelMenu></PanelMenu>
      </div>
      <div className="panel-display">asdas</div>
    </section>
  );
};

export default Panel;
