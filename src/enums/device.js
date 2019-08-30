import createEnum from './index'

export const _Inj=createEnum({
    STANDBY: [0, '离线中'],
    RUNNING: [1, '运行中'],
    WARNING: [-1, '故障中'],
    DEBUG: [2, '调机中']
})
export const _Robot=createEnum({
    STANDBY: [0, '离线中'],
    RUNNING: [1, '运行中'],
    WARNING: [-1, '故障中'],
    DEBUG: [2, '调机中']
})
export const _Mold=createEnum({
    STANDBY: [0, '离线中'],
    RUNNING: [1, '运行中'],
    WARNING: [-1, '故障中'],
    DEBUG: [2, '调机中']
})

export const _Dry=createEnum({
    STANDBY: [0, '离线中'],
    RUNNING: [1, '运行中'],
    WARNING: [-1, '故障中'],
    DEBUG: [2, '调机中']
})
export const _Temp=createEnum({
    STANDBY: [0, '已关闭'],
    RUNNING: [1, '已开启'],
    WARNING: [-1, '故障中'],
    DEBUG: [2, '调机中']
})
