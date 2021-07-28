import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import store from "./app/store";
import "./i18n";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

export const lang = localStorage.getItem("lang")
  ? localStorage.getItem("lang")
  : localStorage.setItem("lang", "en");

export const isRtl = lang !== undefined ? lang !== "en" : false;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {lang !== null && (
        <Suspense fallback={<div>Loading...</div>}>
          <App isRtl={isRtl} />
        </Suspense>
      )}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
