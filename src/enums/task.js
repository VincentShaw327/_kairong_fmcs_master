import createEnum from './index'

export const _Service=createEnum({
    STANDBY: [0, '未开始'],
    RUNNING: [1, '维修中'],
    WARNING: [-1, ''],
    DEBUG: [2, '已完成']
})
