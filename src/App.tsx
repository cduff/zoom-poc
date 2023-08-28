import logo from "./images/logo.svg";
import { useAppHeightCssVariable } from "./useAppHeightCssVariable";

const version = "2.15.2";
const sdkKey = "X9Bq5k1fRpe8HzRDgLxSLQ";
const signature =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJYOUJxNWsxZlJwZThIelJEZ0x4U0xRIiwibW4iOiI4NjAyMjI4NDU1NSIsInJvbGUiOjAsImlhdCI6MTY5MzE4MjQyOSwiZXhwIjoxNjkzMjY4ODI5LCJhcHBLZXkiOiJYOUJxNWsxZlJwZThIelJEZ0x4U0xRIiwidG9rZW5FeHAiOjE2OTMyNjg4Mjl9.gCdhlQppNLF7ON0WkewZlzDvVtULkbuhHV3DW8euYUc";
const meetingNumber = 86022284555;
const passWord = "123456";
const userName = Date.now().toString();
const userEmail = `${userName}@domain.com`;

export default function App() {
  useAppHeightCssVariable();
  return (
    <>
      <div className="headerContainer">
        <div className="header">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
      <iframe
        title="Praxhub Zoom"
        className="iframe"
        srcDoc={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Praxhub Zoom</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
    />
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
    <script>
      ZoomMtg.setZoomJSLib(
        "https://source.zoom.us/${version}/lib",
        "/av"
      );
      ZoomMtg.preLoadWasm();
      ZoomMtg.prepareWebSDK();
      ZoomMtg.i18n.load("en-US");
      ZoomMtg.i18n.reload("en-US");
      ZoomMtg.init({
        disablePreview: true,
        enableFullHD: true,
        enableHD: true,
        isLockBottom: false,
        leaveUrl: "about:blank",
        meetingInfo: [],
        success: (success) => {
          console.log(success);
          ZoomMtg.join({
            sdkKey: "${sdkKey}",
            signature: "${signature}",
            meetingNumber: ${meetingNumber},
            passWord: "${passWord}",
            userName: "${userName}",
            userEmail: "${userEmail}",
            success: (success) => {
              console.log(success);
            },
            error: (error) => {
              console.log(error);
            },
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
    </script>
  </body>
</html>`}
      />
      <div className="footer">
        <div className="footerContent">
          Terms of Use | Privacy Policy | Contact Us
        </div>
      </div>
    </>
  );
}
