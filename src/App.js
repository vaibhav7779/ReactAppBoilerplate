import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { store } from 'configurations/redux/store';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <h1>Hello World from React boilerplate</h1>;
      </Provider>
    );
  }
}

export default App;
