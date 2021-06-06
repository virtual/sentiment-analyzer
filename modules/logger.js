const log4js = require('log4js');

const LOG_PATH = './logs';

log4js.configure({
  appenders: {
    access: {
      type: 'dateFile',
      filename: `${LOG_PATH}/access.log`,
      pattern: '-yyyy-MM-dd',
      backups: 3,
    },
    debug: {
      type: 'dateFile',
      filename: `${LOG_PATH}/debug.log`,
      pattern: '-yyyy-MM-dd',
      backups: 3,
    },
    app: {
      type: 'dateFile',
      filename: `${LOG_PATH}/app.log`,
      pattern: '-yyyy-MM-dd',
      backups: 3,
    },
  },
  categories: {
    default: { appenders: ['access'], level: 'ALL' },
    app: { appenders: ['app'], level: 'ALL' },
    access: { appenders: ['access'], level: 'DEBUG' },
    debug: { appenders: ['debug'], level: 'DEBUG' }
  },
});

module.exports = {
  access: log4js.getLogger('access'),
  app: log4js.getLogger('app'),
  debug: log4js.getLogger('debug'),
  express: log4js.connectLogger(log4js.getLogger('access'), { level: log4js.levels.INFO }),
};