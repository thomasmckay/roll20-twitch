var _Roll20PingCommand = {
    run: function(self, userstate, message) {
        try {
            args = TwitchPingCommand.parseArgs(message.split(" "));
        } catch (e) {
            console.log("ERROR 'ping' argument parsing failed: " + e);
            return undefined;
        }
        if (args["--help"]) {
            var usage = TwitchPingCommand.usage(true, " // ");
            console.log(usage);
            client.say(config.twitch.channels[0], "@" + userstate.username + " " + usage);
            return undefined;
        }

        return("!twitch [#####,username=" + userstate["display-name"] + "] " + message);
    }
};


var Roll20PingCommand = (function () {
    return {
        run: _Roll20PingCommand.run
    }
}());
