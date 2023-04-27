import axios from 'axios';
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const GET = 'GET';
export const FIND = 'FIND';
export const SAVE = 'POST';
export const UPDATE = 'PATCH';
export const DELETE = 'DELETE';
export const SAVE_WITH_FILE = 'SAVE_WITH_FILE';

export const BASEPATH = '/api';

const LOGINPATH = `${BASEPATH}/users/login`;

export const token = cookies.get('token')

const API = axios.create({
  baseURL: 'http://localhost:8080', // TODO: Change this later for .env variable
  headers: { 
    "Content-Type":"application/json",
    "Accept":"*/*",
  },
});


export async function loginApi (form) {
  return await API.post(LOGINPATH, form);
};

/**
 * Generic function to make api calls
 * @param {ENUM} operation - Consts FIND, GET, SAVE or UPDATE
 * @param {string} model - Model name in API
 * @param {object} payload - Data to send
 * @param {object} params - Object that can contain id of a model or queries and skip for find calls.
 */
export async function process(operation, model, payload = {}, params = {}) {
  const { id, queries, limit, skip } = params || {};

  const oAuth = {
    headers: {
      Authorization: `${token}`,
    },
  };

  switch (operation) {
    case FIND:
      return await API.get(`${BASEPATH}/${model}`, oAuth);
    case SAVE:
      return await API.post(`${BASEPATH}/${model}`, payload, oAuth);
    case SAVE_WITH_FILE:
      return await API.post(`${BASEPATH}/${model}`, payload, {
        headers: {
          ...oAuth.headers,
          'Content-Type': 'multipart/form-data',
        },
      });
    // case UPDATE:
    //   return await API.patch(`${BASEPATH}/${model}/${id}`, payload, oAuth);
      case UPDATE:
      return await API.patch(`${BASEPATH}/${model}`, payload, oAuth);
    case DELETE:
      return await API.delete(`${BASEPATH}/${model}/${id}`, oAuth);
    default:
      return null;
  }
};