import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { store } from 'configurations/redux/store';
import ApplicationRouter from 'configurations/routing/ApplicationRouter';
import { StylesProvider } from '@material-ui/core/styles';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <StylesProvider injectFirst>
          <ApplicationRouter />
        </StylesProvider>
      </Provider>
    );
  }
}

export default App;
