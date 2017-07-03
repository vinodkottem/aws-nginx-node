module.exports = {
    apps: [{
        name: 'awsnginxnode',
        script: './server.js'
  }],
    deploy: {
        production: {
            'user': 'ubuntu',
            'host': 'ec2-34-211-50-208.us-west-2.compute.amazonaws.com',
            'key': '~/.ssh/ubuntuawskey.pem',
            'ref': 'origin/master',
            'repo': 'git@github.com:vinodkottem/aws-nginx-node.git',
            'path': '/home/ubuntu/awsnginxnode',
            'post-deploy': 'npm install && npm run-script restart'
        }
    }
}
