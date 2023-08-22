import logo from "./images/logo.svg";
import { useAppHeightCssVariable } from "./useAppHeightCssVariable";

const version = "2.15.2";
const sdkKey = "3v8i6i0UTCiuKZ2cmL9lAg";
const signature =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiIzdjhpNmkwVVRDaXVLWjJjbUw5bEFnIiwibW4iOiI0MzY0NzE0NDg2Iiwicm9sZSI6MCwiaWF0IjoxNjkyNjk0Mjg3LCJleHAiOjE2OTI3ODA2ODcsImFwcEtleSI6IjN2OGk2aTBVVENpdUtaMmNtTDlsQWciLCJ0b2tlbkV4cCI6MTY5Mjc4MDY4N30.H9MSEr4CxtHnXktdAzVHZUMrL3jOQH__VF7IHJXSKP8";
const meetingNumber = 4364714486;
const passWord = "219675";
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
