/* global Twitch:true */
/* exported TwitchQueryCommand */

var TwitchQueryCommand = {
    run: function(msg, linkid, args) {
        var value;
        var obj = getObj(msg.selected[0]._type, msg.selected[0]._id);
        if (args.length === 0 || obj === undefined) {
            Twitch.write("Usage: query $property WITH selected object", msg.who, "", "twitch query");
            return;
        }

        value = obj.get(args[0]);

        Twitch.write(Twitch.sprintf("Property: '%s' = '%s'", args[0], value), msg.who, "", "twitch query");
    }
};