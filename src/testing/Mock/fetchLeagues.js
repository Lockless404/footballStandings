import data from './fetchedData';

const fetchLeagues = () => data().then((data) => (data));

export default fetchLeagues;