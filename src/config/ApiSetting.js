
const serviceModule = {  
	getNewsList: {    
		url: '/LuoShanHu/api/getNewsList',    
		method: 'get',
		dataType:'jsonp',
		headers: {
          'Content-type': 'application/json',
      	}  
	},
	getNewsListOrderByTime: {    
		url: '/LuoShanHu/api/getNewsListOrderByTime',    
		method: 'get',
		dataType:'jsonp',
		headers: {
          'Content-type': 'application/json',
      	}  
	},
	getNewsById: {    
		url: '/LuoShanHu/api/getNewsById',    
		method: 'get',
		dataType:'jsonp',
		headers: {
          'Content-type': 'application/json',
      	}  
	},
	getPlateList: {    
		url: '/LuoShanHu/api/getPlateList',    
		method: 'get',
		dataType:'jsonp',
		headers: {
          'Content-type': 'application/json',
      	}  
	},
	getPlateById: {    
		url: '/LuoShanHu/api/getPlateById',    
		method: 'get',
		dataType:'jsonp',
		headers: {
          'Content-type': 'application/json',
      	}  
	},
	getVPArticleById: {    
		url: '/LuoShanHu/api/getVPArticleById',    
		method: 'get',
		dataType:'jsonp',
		headers: {
          'Content-type': 'application/json',
      	}  
	},
	getSVList: {    
		url: '/LuoShanHu/api/getSVList',   
		method: 'get',
		dataType:'jsonp',
		headers: {
          'Content-type': 'application/json',
      	}  
	},
	getSVArticleById: {    
		url: '/LuoShanHu/api/getSVArticleById',   
		method: 'get',
		dataType:'jsonp',
		headers: {
          'Content-type': 'application/json',
      	}  
	}
	
}
const ApiSetting = {serviceModule } 
export default ApiSetting
