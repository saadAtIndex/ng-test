module.exports = {
    apps : [
        {
          name: 'NG-TEST',
          script: 'dist/index.js',
          watch: false,
        //   instance_var: 'INSTANCE_ID',
          env: {
              'PORT': 3007,
              'NODE_ENV': 'development'
          },
          env_production: {
              'PORT': 3007,
              'NODE_ENV': 'production'
          }
        }
    ]
  }