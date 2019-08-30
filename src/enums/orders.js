import createEnum from './index'

const order=createEnum({
    PRODUCTION: [1, '生产中'],
    WARNING: [-1, '报警中'],
    STOP: [0, '停止中'],
    PAUSE: [2, '暂停中'],
    STANDBY: [3, '未排产']
})


export{
    order
}