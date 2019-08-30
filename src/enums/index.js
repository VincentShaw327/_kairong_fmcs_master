import {_Inj, _Robot, _Mold ,_Temp} from './device'
import {order} from './orders'


export default function createEnum(definition) {
    const strToValueMap = {}
    const numToDescMap = {}
    const numToType = {}
    for (const enumName of Object.keys(definition)) {
        const [value, desc] = definition[enumName]
        strToValueMap[enumName] = value
        numToDescMap[value] = desc
        numToType[value] = enumName
    }
    return {
        ...strToValueMap,
        getDesc(enumName) {
            return definition[enumName] && definition[enumName][1] || ''
        },
        getDescFromValue(value) {
            return numToDescMap[value] || ''
        },
        getTypeFromValue(value) {
            return numToType[value] || ''
        }
    }
}

export{
    _Inj, _Robot, _Mold,_Temp,
    order
}
