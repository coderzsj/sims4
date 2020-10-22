import routesContainer from '@/common/components/routesContainer'
// 模块part 声明导入
import N120101 from '../N120101/routes.js'
import N120102 from '../N120102/routes.js'

const innerRoutes = [
  ...N120101,
  ...N120102
]
// 导入路由声明
export default [
  {
    path: '/',
    component: routesContainer,
    children: innerRoutes.map((item) => ({
        ...item
      })
    )
  }
]
