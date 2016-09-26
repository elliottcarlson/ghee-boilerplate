# ghee boilerplate

[![npm version](https://badge.fury.io/js/ghee-boilerplate.svg)](https://badge.fury.io/js/ghee-boilerplate)

This is a boilerplate setup for a ghee Slack bot.

For more information on how to use [ghee](https://github.com/elliottcarlson/ghee),
please visit the _ghee_ [wiki](https://github.com/elliottcarlson/ghee/wiki).

### Setup

Clone this repo or install via npm:

```sh
$ npm instal ghee-boilerplate
```

Go to your [Custom Integrations](https://www.slack.com/apps/manage/custom-integrations)
page for your Slack instance and set up a new Bot integration. Copy the API
token and save for later.

If running locally, copy `.env-sample` to `.env` and add your Slack API token to
the `.env` file.

If running on a server, you can set the `SLACK_API_TOKEN` to the value of the
Slack API token.

If running on a hosted service such as Heroku, you can set the Config Variables
on your apps Settings page.

### Run

Run `npm install` if you have just cloned the repo for the first time, to
install the required dependencies.

Run `npm start` to start the bot.

### Usage

The bot will now join your Slack instance if you specified the correct API
token. You can invite the bot to whatever channel you want it to be present in.

Since this is a boilerplate, the bot will not respond to any commands. Please
see the _ghee_ [wiki](https://github.com/elliottcarlson/ghee/wiki) or view the
[ghee sample bot](https://github.com/elliottcarlson/ghee-sample-bot) for more
information on how to use this boilerplate.

### Quick Deploy

You can quickly run the boilerplate bot via Heroku. Clicking this button will take
you to Heroku, where you will be able to enter your Slack API token and launch
the bot on a single worker dyno.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

