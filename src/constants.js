export default Object.freeze({
  CONFIG: {
    COMMAND_COOLDOWN_TIME: 1.0,
    CLEANUP_NUMBER_TO_DELETE: 10000,
    TIMEZONE: 'Asia/Hong_Kong'
  },
  MESSAGE: {
    TOP_TEN_TITLE: 'Top 10 冗員s in the last 7 days (last 荃灣 time):\n\n',
    ALL_JUNG_TITLE: 'All 冗員s in the last 7 days (last 荃灣 time):\n\n',
    LIMIT: 3800
  },
  CRON: {
    OFF_JOB: '夠鐘收工~~',
	OFF_JOB_PATTERN: '00 30 18 * * 1-5',
	LUNCH: '夠鐘食飯~~',
	LUNCH_PATTERN: '00 30 13 * * 1-5',
    DB_CLEANUP_PATTERN: '0 0 0-17,19-23 * * *'
  },
  HELP: {
    MESSAGE: '冗員[jung2jyun4] Excess personnel in Cantonese' + '\n' +
    '\n' +
    'This bot is created for counting the number of message per participant in the group.' + '\n' +
    '\n' +
    'Rules:' + '\n' +
    '1. Repeated messages will only be counted as ONE message.' + '\n' +
    '2. Commands can only be used for ONCE per minute.' + '\n' +
    '\n' +
    'Commands:' + '\n' +
    '/topten  show top ten 冗員s' + '\n' +
    '/alljung  show all 冗員s' + '\n' +
    '/junghelp  show help message' + '\n' +
    '\n'
  }
})
