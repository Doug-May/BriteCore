// Assuming you have already done "npm install fernet"
let fernet = require('fernet')
let secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=')
// Oh no! The code is going over the edge! What are you going to do?
let message = 'gAAAAABcEFCzKtj7xJi--yvQCO7JsD-AyXphp0D8GB7PyasqycguRHqx0BU9JwMJG4UOE_NiFdt5HF1LcEOrwzF5RPo5KFFFOw-dtTckRXeyOw4_yGIwW7ti0-XB1Zyb19S-XjsNInNbxEAqBBxtZqAQ7ipPGBYEMpCIM8p1LDYvtxpqkjAccaZJtEQ93PMjcOWd69KmTFxT'
let token = new fernet.Token({secret: secret, token: message, ttl:0})
console.log(token.decode())
    