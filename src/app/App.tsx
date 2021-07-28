import dayjs from "dayjs";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

type Props = {
  isRtl: boolean;
};
function App(props: Props) {
  const { i18n } = useTranslation();

  i18n.on("languageChanged", () => {
    window.location.reload();
  });

  useEffect(() => {
    dayjs.locale(i18n.language);
  });

  return (
    <div
      className={`App lang-${i18n.language}`}
      dir={props.isRtl ? "rtl" : "ltr"}
    >
      <Router>
        <Switch>
          <Route path="/">
            <div>{i18n.t("welcomeMessage")}</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
