import log from 'log-to-file-and-console-node'

export default class Bot {

  constructor (bot) {
    this.bot = bot
  }

  root () {
    return (req, res) => {
      log.i(`req.body: ${JSON.stringify(req.body)}`)
      this.bot.processUpdate(req.body)
      res.sendStatus(200)
    }
  }

}
