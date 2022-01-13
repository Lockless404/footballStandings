import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import TableLine from '../components/TableLine';

describe('Table Component test', () => {
  it('Renders table items', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <TableLine />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
