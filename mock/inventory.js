const Mock = require('mockjs')
const List = []
const count = 20

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    sku: "@string('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-',10, 15)",
    warehouse: 'SZ-DG-01',
    available_qty: '@integer(10, 30)',
    prepare_ship: '@integer(10, 30)',
    storage: '@integer(20, 30)',
    status: 'Ready'
  }))
}

module.exports = [
  {
    url: '/next-smart-ship/inventory/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20 } = config.query

      const mockList = List
      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  }
]
