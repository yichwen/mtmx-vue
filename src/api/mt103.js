import request from '@/utils/request'

export default {
  validate(data) {
    return request({
      url: `/mt103/validate`,
      method: 'post',
      data: { data }
    })
  },
  convert(data) {
    return request({
      url: `/mt103/convert`,
      method: 'post',
      data: { data }
    })
  }
}