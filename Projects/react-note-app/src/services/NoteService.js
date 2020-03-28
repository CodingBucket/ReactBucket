import http from '../utils/http';
import config from '../config'

export default class NoteService {
  static list() {
    return http.get(config.API_ENDPOINT + '/notes.json').then(response => response.data);
  }

  static create(payload) {
    return http.post(config.API_ENDPOINT + '/notes.json', payload).then(response => response.data);
  }

  static delete(id) {
    return http.delete(config.API_ENDPOINT + `/notes${id}.json`).then(response => response.data);
  }
}
