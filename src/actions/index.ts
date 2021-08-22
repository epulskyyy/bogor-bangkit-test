export function defaultActionCreator(type: any, ...argNames: any) {
    return function (...args: any) {
        const action: any = {type}
        argNames.forEach((arg: any, index: any) => {
            action[argNames[index]] = args[index];
        })
        return action;
    }
}

export function advancedActionCreator(type: any, definedValuesObj: any, ...argNames: any) {
    return function (...args: any) {
        const action: any = {type, ...definedValuesObj}
        argNames.forEach((arg: any, index: any) => {
            action[argNames[index]] = args[index];
        })
        return action;
    }
}