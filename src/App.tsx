import { useEffect } from "react";
import Frame, { useFrame } from "react-frame-component";
import logo from "./images/logo.svg";

function Zoom() {
  const { window } = useFrame();
  useEffect(() => {
    // @ts-ignore
    console.log(window.ZoomMtg);
  }, [window]);
  return <>todo</>;
}

export default function App() {
  return (
    <>
      <div className="headerContainer">
        <div className="header">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
      <Frame
        className="frame"
        initialContent={`<!DOCTYPE html><html lang="en"><head></head><body>
<script src="https://source.zoom.us/2.15.2/lib/vendor/react.min.js"></script>
<script src="https://source.zoom.us/2.15.2/lib/vendor/react-dom.min.js"></script>
<script src="https://source.zoom.us/2.15.2/lib/vendor/redux.min.js"></script>
<script src="https://source.zoom.us/2.15.2/lib/vendor/redux-thunk.min.js"></script>
<script src="https://source.zoom.us/2.15.2/lib/vendor/lodash.min.js"></script>
<script src="https://source.zoom.us/zoom-meeting-2.15.2.min.js"></script>
<div></div></body></html>`}
      >
        <Zoom />
      </Frame>
      <div className="footer">
        <div className="footerContent">
          Terms of Use | Privacy Policy | Contact Us
        </div>
      </div>
    </>
  );
}
