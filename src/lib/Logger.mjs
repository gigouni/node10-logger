import bunyan from 'bunyan'

class Logger {
  /**
   * @description Construct a Logger.
   * @see https://www.npmjs.com/package/bunyan-rotating-file-stream
   */
  constructor() {
    this.logger = bunyan.createLogger({
      name: 'node10-logger',
      level: 'debug'
    })
  }

  /**
   * @description Detail on regular operation.
   * @param {String|Object} args - The content to log.
   */
  info(...args) {
    this.logger.info(...args)
  }
}

export default new Logger()
