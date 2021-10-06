export const EncryptionUtil = {
    encodeHex:function (data:string){
        return new Buffer(data).toString('hex'); // encoded === 54686973206973206d7920737472696e6720746f20626520656e636f6465642f6465636f646564
    },
    decodeHex:function (data:string){
        return new Buffer(data, 'hex').toString();
    }
}