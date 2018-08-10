import axios from 'axios'

export class Api {
  constructor () {
    this.instance = axios.create({
      baseURL: 'https://picsum.photos/200/300/?random'
    })
  }

  // Наши методы для обращения к api
  // Пример get запроса
  getEventType () {
    return this.instance.request({
      type: 'get',
      url: baseURL
    })
  };
  install (Vue) {
    Vue.prototype.api = this
  }
}
