import Frame from "react-frame-component";
import logo from "./images/logo.svg";

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
        head={
          <>
            <script src="https://source.zoom.us/2.15.0/lib/vendor/react.min.js" />
            <script src="https://source.zoom.us/2.15.0/lib/vendor/react-dom.min.js" />
            <script src="https://source.zoom.us/2.15.0/lib/vendor/redux.min.js" />
            <script src="https://source.zoom.us/2.15.0/lib/vendor/redux-thunk.min.js" />
            <script src="https://source.zoom.us/2.15.0/lib/vendor/lodash.min.js" />
            <script src="https://source.zoom.us/zoom-meeting-2.15.0.min.js" />
          </>
        }
      >
        <div>todo</div>
      </Frame>
      <div className="footer">
        <div className="footerContent">
          Terms of Use | Privacy Policy | Contact Us
        </div>
      </div>
    </>
  );
}
