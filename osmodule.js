const os = require('os');

const user = os.userInfo();

const uptime= os.uptime();

console.log(`user: ${user.username}   uptime:${uptime}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOs);

