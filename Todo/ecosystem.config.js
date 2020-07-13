module.exports = {
  apps : [{
    name: "Todo",
    script: 'server.js',
    env: {
      DB_STRING: "mongodb+srv://user:passwd@cluster-4wbu5.mongodb.net/userAuth",
    },
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
