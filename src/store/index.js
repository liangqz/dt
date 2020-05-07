import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'


Vue.use(Vuex)

const state = {
	level: '肾脏', //活动周数
	itemNum: 1, // 第几题
	allTime: 0,  //总共用时
	timer: '', //定时器
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "你的头发健康吗？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 20,
			"topic_id": 20,
			"answer_name": "乌黑发亮",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 10,
			"topic_id": 20,
			"answer_name": "脱发",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 5,
			"topic_id": 20,
			"answer_name": "出现白发",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 0,
			"topic_id": 20,
			"answer_name": "既脱发又有白发",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "你的骨骼强壮吗？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 20,
			"topic_id": 21,
			"answer_name": "是",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 0,
			"topic_id": 21,
			"answer_name": "否",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "你的皮肤好吗？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 20,
			"topic_id": 21,
			"answer_name": "脸色红润",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 10,
			"topic_id": 21,
			"answer_name": "皮肤有点暗黄",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 5,
			"topic_id": 21,
			"answer_name": "眼眶发黑",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 0,
			"topic_id": 21,
			"answer_name": "无血色有眼袋",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "你的尿还好吗？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 20,
			"topic_id": 21,
			"answer_name": "每天排尿4-6次",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 10,
			"topic_id": 21,
			"answer_name": "尿液颜色异常",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 0,
			"topic_id": 21,
			"answer_name": "小便泡沫多",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "早起身体浮肿吗？",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 20,
			"topic_id": 21,
			"answer_name": "否",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 0,
			"topic_id": 21,
			"answer_name": "是",
			"is_standard_answer": 0
		}]
	}],
	answerid: [], //答案id
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})
