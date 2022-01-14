import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Leagues from '../components/Leagues';

describe('Leagues Component test', () => {
  it('Renders league items', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Leagues />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
