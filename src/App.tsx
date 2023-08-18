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
                  sdkKey: "X9Bq5k1fRpe8HzRDgLxSLQ",
                  signature:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJYOUJxNWsxZlJwZThIelJEZ0x4U0xRIiwibW4iOiI4OTA1MzczNzg1OSIsInJvbGUiOjAsImlhdCI6MTY5MjMzNjI1NCwiZXhwIjoxNjkyNDIyNjU0LCJhcHBLZXkiOiJYOUJxNWsxZlJwZThIelJEZ0x4U0xRIiwidG9rZW5FeHAiOjE2OTI0MjI2NTR9.F3fHVWBJ0-IVnWsJkuw9Jhvg1Ez7G4vbjGZLNG2Iaz0",
                  meetingNumber: "89053737859",
                  passWord: "123456",
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
