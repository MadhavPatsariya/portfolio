import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiMysql,
  } from "react-icons/di";
  import {
    SiRedis,
    SiFirebase,
    SiPostgresql,
    SiMicrosoftazure,
    SiApachekafka,
    SiDocker,
    SiBlazor,
    SiSpring,
    SiGradle,
    SiKotlin,
    SiTypescript
  } from "react-icons/si";

  import { RiJavaLine } from "react-icons/ri";
  
  function TechStack() {
    return (
      <div className="row justify-content-center pb-5" style={{display: 'flex', gap: '1rem'}}>
        <div className="col-4 col-md-2 tech-icon">
          <DiJavascript1 />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <SiMicrosoftazure />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <SiKotlin />
        </div><div className="col-4 col-md-2 tech-icon">
          <SiTypescript/>
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <SiGradle />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <SiApachekafka/>
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <DiNodejs />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <DiMysql />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <DiReact />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <SiSpring />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <SiBlazor />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <DiMongodb />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <DiGit />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <SiFirebase />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <SiRedis />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <SiPostgresql />
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <SiDocker/>
        </div>
        <div className="col-4 col-md-2 tech-icon">
          <RiJavaLine/>
        </div>
      </div>
    );
  }
  
  export default TechStack;
  