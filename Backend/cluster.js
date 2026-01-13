const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log(`🚀 Master process ${process.pid} is running`);
    console.log(`🔥 Forking ${numCPUs} workers for maximum performance...`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Handle worker crashes
    cluster.on('exit', (worker, code, signal) => {
        console.log(`⚠️  Worker ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    });

    // Log worker startup
    cluster.on('online', (worker) => {
        console.log(`✅ Worker ${worker.process.pid} is online`);
    });

} else {
    // Workers share the same TCP connection
    require('./server.js');
    console.log(`👷 Worker ${process.pid} started`);
}
