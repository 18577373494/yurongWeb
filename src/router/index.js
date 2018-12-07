import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Index from '@/components/page/Index'
import About from '@/components/page/About'
import Beautiful from '@/components/page/Beautiful'
import Contact from '@/components/page/Contact'
import News from '@/components/page/News'
import NewsDetail from '@/components/page/NewsDetail'
import ServiceInfo from '@/components/page/ServiceInfo'
import PartVI from '@/components/page/PartVI'
import PlateDetail from '@/components/page/PlateDetail'
import Play from '@/components/page/Play'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path:'/',
			redirect:'/Index'
		},
	    {
	        path: '/',
	        name: 'Home',
	        component: Home,
	        meta: { title: '系统首页' },
	        children:[
		      	{
		      		path: '/Index',
				    name: 'Index',
				    component: Index,
				    meta: { title: '首页'}
		      	},
		      	{
		      		path: 'About',
				    name: 'About',
				    component: About,
				    meta: { title: '公司简介' }
		      	},
		      	{
		      		path: 'Beautiful',
				    name: 'Beautiful',
				    component: Beautiful,
				    meta: { title: '山湖美景' }
		      	},
		      	{
		      		path: 'Contact',
				    name: 'Contact',
				    component: Contact,
				    meta: { title: '联系我们' }
		      	},
		      	{
		      		path: 'News',
				    name: 'News',
				    component: News,
				    meta: { title: '公司新闻' }
		      	},
		      	{
		      		path: 'NewsDetail',
				    name: 'NewsDetail',
				    component: NewsDetail,
				    meta: { title: '新闻详情' }
		      	},
		      	{
		      		path: 'ServiceInfo',
				    name: 'ServiceInfo',
				    component: ServiceInfo,
				    meta: { title: '更多详情' }
		      	},
		      	{
		      		path: 'PartVI',
				    name: 'PartVI',
				    component: PartVI,
				    meta: { title: '风情岛' }
		      	},
		      	{
		      		path: 'PlateDetail',
				    name: 'PlateDetail',
				    component: PlateDetail,
				    meta: { title: '' }
		      	},
		      	{
		      		path: 'Play',
				    name: 'Play',
				    component: Play,
				    meta: { title: '游玩中心' }
		      	}

	        ]
	    },
	    {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403', 
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
	]
})
