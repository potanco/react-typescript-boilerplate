import dayjs from 'dayjs';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { api } from './api';
import './App.css';

type Props = {
  isRtl: boolean;
};
function App(props: Props): JSX.Element {
  const { i18n } = useTranslation();

  api.get('/api/users').then((response) => {
    console.log(response);
  });
  i18n.on('languageChanged', () => {
    window.location.reload();
  });

  useEffect(() => {
    dayjs.locale(i18n.language);
  });

  return (
    <div className={`App lang-${i18n.language}`} dir={props.isRtl ? 'rtl' : 'ltr'}>
      <Router>
        <Switch>
          <Route path="/">
            <Helmet>
              <title>Potan - Homepage</title>
            </Helmet>
            <div>{i18n.t('welcomeMessage')}</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
