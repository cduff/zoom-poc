import Frame, { FrameContextConsumer } from "react-frame-component";
import logo from "./images/logo.svg";
import { useAppHeightCssVariable } from "./useAppHeightCssVariable";

const version = "2.15.2";

export default function App() {
  useAppHeightCssVariable();
  return (
    <>
      <div className="headerContainer">
        <div className="header">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
      <Frame
        title="Praxhub Zoom"
        className="frame"
        initialContent={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Praxhub Zoom</title>
    <link type="text/css" rel="stylesheet" href="https://source.zoom.us/${version}/css/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="https://source.zoom.us/${version}/css/react-select.css" />
    <style>
      html, body {
        min-width: auto !important;
      }
    </style>
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
            const name = Date.now().toString();
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
            ZoomMtg.init({
              leaveUrl: "about:blank",
              disablePreview: true,
              enableFullHD: true,
              success: (success: any) => {
                console.log(success);
                ZoomMtg.join({
                  sdkKey: "3v8i6i0UTCiuKZ2cmL9lAg",
                  signature:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiIzdjhpNmkwVVRDaXVLWjJjbUw5bEFnIiwibW4iOiI0MzY0NzE0NDg2Iiwicm9sZSI6MCwiaWF0IjoxNjkyMzE3Mzk1LCJleHAiOjE2OTI0MDM3OTUsImFwcEtleSI6IjN2OGk2aTBVVENpdUtaMmNtTDlsQWciLCJ0b2tlbkV4cCI6MTY5MjQwMzc5NX0.VwiUzex_LDZRk1kL8hHc7s7yTqFCoaNgSl3hkblD-RQ",
                  meetingNumber: "4364714486",
                  passWord: "219675",
                  userName: name,
                  userEmail: `${name}@domain.com`,
                  success: (success: any) => {
                    console.log(success);
                  },
                  error: (error: any) => {
                    console.log(error);
                  },
                });
              },
              error: (error: any) => {
                console.log(error);
              },
            });
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
