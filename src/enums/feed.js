import createEnum from './index'

export const _PA=createEnum({
    STANDBY: [0, '离线中'],
    RUNNING: [1, '正常'],
    WARNING: [-1, '缺料'],
    DEBUG: [2, '调机中'],
    OFFLINE: [3, '离线中']
})
export const _ABS=createEnum({
    STANDBY: [0, '离线中'],
    RUNNING: [1, '正常'],
    WARNING: [-1, '缺料'],
    DEBUG: [2, '调机中']
})
export const _POM=createEnum({
    STANDBY: [0, '离线中'],
    RUNNING: [1, '正常'],
    WARNING: [-1, '缺料'],
    DEBUG: [2, '调机中']
})
