import {
  SiJira,
  SiIntellijidea,
  SiVisualstudio,
  SiVisualstudiocode,
  SiEclipseide,
  SiPostman,
  SiConfluence
} from "react-icons/si";

function ToolStack() {
  return (
    <div className="row justify-content-center pb-5" style={{ display: 'flex', gap: '1rem' }}>
      <div className="col-4 col-md-2 tech-icon">
        <SiJira />
      </div>
      <div className="col-4 col-md-2 tech-icon">
        <SiConfluence />
      </div>
      <div className="col-4 col-md-2 tech-icon">
        <SiIntellijidea />
      </div>
      <div className="col-4 col-md-2 tech-icon">
        <SiEclipseide />
      </div>
      <div className="col-4 col-md-2 tech-icon">
        <SiVisualstudiocode />
      </div>
      <div className="col-4 col-md-2 tech-icon">
        <SiPostman />
      </div>
      <div className="col-4 col-md-2 tech-icon">
        <SiVisualstudio />
      </div>
    </div>
  );
}

export default ToolStack;
