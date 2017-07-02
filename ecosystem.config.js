module.exports = {
    apps: [{
        name: 'awsnginxnode',
        script: './server.js'
  }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-54-201-127-201.us-west-2.compute.amazonaws.com',
            key: '~/.ssh/ubuntuawskey.pem',
            ref: 'origin/master',
            repo: 'git@github.com:vinodkottem/aws-nginx-node.git',
            path: '/home/ubuntu/awsnginxnode',
            restart: 'pm2 startOrRestart ecosystem.config.js',
            deploy: 'pm2 deploy ecosystem.config.js production',
            'post-deploy': 'npm install && npm run-script restart'
        }
    }
}
