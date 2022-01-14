import '@testing-library/jest-dom/extend-expect';
import fetchLeagues from './Mock/fetchLeagues';

describe('test fetching data', () => {
  it('test fetching League name', async () => {
    await fetchLeagues().then((data) => expect(data.data[0].name).toBe('Argentine Liga Profesional de Fútbol'));
  });

  it('test fetching League code', async () => {
    await fetchLeagues().then((data) => expect(data.data[1].id).toBe('eng.1'));
  });
});
