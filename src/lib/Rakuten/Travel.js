import axios from 'axios';

const URL_BASE = 'https://app.rakuten.co.jp/services/api/Travel/';
const SIMPLE_HOTEL_SERACH_ENDPOINT = `${URL_BASE}SimpleHotelSearch/20170426`;


export default {
  simpleHotelSearch: params =>
    axios.get(SIMPLE_HOTEL_SERACH_ENDPOINT, { params })
  ,
};
