
const tokens = {
  admin: {
    token: 'admin-token'
  },
  sales: {
    token: 'sales-token'
  },
  support: {
    token: 'support-token'
  },
  warehouse: {
    token: 'warehouse-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'sales-token': {
    roles: ['sales'],
    introduction: 'I am a sales person',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Sales Person'
  },
  'support-token': {
    roles: ['support'],
    introduction: 'I am a support',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Support man'
  },
  'warehouse-token': {
    roles: ['warehouse'],
    introduction: 'I am a warehouse employee',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Warehouse Person'
  }
}

const contacts = [
  {
    id: 1,
    name: 'Tom',
    messages: ['帮我发货', '下午六点半前处理完，谢谢']
  },
  {
    id: 2,
    name: 'Jacky',
    messages: ['记得入仓']
  },
  {
    id: 3,
    name: 'Tony',
    messages: ['晚上一起吃饭']
  }
]

module.exports = [
  // user login
  {
    url: '/next-smart-ship/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/next-smart-ship/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/next-smart-ship/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  {
    url: '/next-smart-ship/user/messages',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          contacts
        }
      }
    }
  }
]
