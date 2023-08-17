import Frame, { FrameContextConsumer } from "react-frame-component";
import logo from "./images/logo.svg";

const version = "2.15.2";

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
        initialContent={`<!DOCTYPE html>
<html lang="en">
  <head>
    <link type="text/css" rel="stylesheet" href="https://source.zoom.us/${version}/css/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="https://source.zoom.us/${version}/css/react-select.css" />
  </head>
  <body>
    <script src="https://source.zoom.us/${version}/lib/vendor/react.min.js"></script>
    <script src="https://source.zoom.us/${version}/lib/vendor/react-dom.min.js"></script>
    <script src="https://source.zoom.us/${version}/lib/vendor/redux.min.js"></script>
    <script src="https://source.zoom.us/${version}/lib/vendor/redux-thunk.min.js"></script>
    <script src="https://source.zoom.us/${version}/lib/vendor/lodash.min.js"></script>
    <script src="https://source.zoom.us/zoom-meeting-${version}.min.js"></script>
  </body>
</html>`}
      >
        <FrameContextConsumer>
          {({ window }) => {
            if (!window) return;
            // @ts-ignore
            const ZoomMtg = window.ZoomMtg;
            ZoomMtg.setZoomJSLib(
              `https://source.zoom.us/${version}/lib`,
              "/av"
            );
            ZoomMtg.preLoadWasm();
            ZoomMtg.prepareWebSDK();
            ZoomMtg.i18n.load("en-US");
            ZoomMtg.i18n.reload("en-US");
            return null;
          }}
        </FrameContextConsumer>
      </Frame>
      <div className="footer">
        <div className="footerContent">
          Terms of Use | Privacy Policy | Contact Us
        </div>
      </div>
    </>
  );
}
