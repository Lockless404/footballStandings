import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

describe('Leagues Component test', () => {
  it('Renders league items', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
