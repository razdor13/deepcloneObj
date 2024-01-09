/* 

 arr----(shallow copy)            [1,2,3] // [..arr]  , arr.slice()           
 
 obj----(shallow copy)            {a : 1 , b: 'wqw' , c: true }  // { ...obj} ,object.assign({},obj)        




    arr = [ {a : { b : true } , b: 'wqw' , c: true }, {a : 32 , b: 'w132123' , c: true }]
*/

function deepClone(source, depth = 0) {
    const primitiveTypes = [
        "number",
        "string",
        "boolean",
        "undefined",
        "function",
        "bigint",
        "symbol",
    ];

    if (primitiveTypes.includes(typeof source) || source === null) {
        return source;
    }
    if (Array.isArray(source)) {
        const copy = [];
        for (const item of source) {
            copy.push(deepClone(item));
        }
        return copy;
    }
    if (typeof source === "object") {
        const copy = {};

        for (const propName in source) {
            copy[propName] = deepClone(source[propName]);
        }
        return copy;
    }
}

const obj = {
    a: { b: { m: { end: 66 } } },
    b: { c: true },
    g: { a: 32, b: "w132123", c: true },
};

console.log(deepClone(obj));
