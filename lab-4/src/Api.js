import axios from 'axios'

export class Api {
  constructor () {
    this.instance = axios.create({
      baseURL: 'https://5b16451ca1c7e300147c86a2.mockapi.io/api/v1/'
    })
  }

  // Наши методы для обращения к api
  // Пример get запроса
  getEventType () {
    return this.instance.request({
      type: 'get',
      url: '/event-types'
    })
  };
  getEvents () {
    return this.instance.request({
      type: 'get',
      url: '/events'
    })
  };
  eventDelete (id) {
    return this.instance.delete({
      url: '/events/' + id
    })
  };
  // Метод для регистрации класса в прототипе Vue
  // После чего экземпляр будет доступен в любом компоненте через this.api
  install (Vue) {
    Vue.prototype.api = this
  }
}
