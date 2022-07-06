import Config from 'react-native-config';

const api = () => fetch(`https://${Config.APP_HOST}/users/spartalabs`);

export default api;
