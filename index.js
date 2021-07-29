const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
      details: "Exploring CS World",
      state: "www.counter-strike.net",
      startTimestamp: new Date(),
      largeImageKey: "lrg_img",
      largeImageText: "Counter Strike: Source v92",
      smallImageKey: "sml_img",
      smallImageText: "Powered by Steam Community"
    })

    console.log("Starting Counter Strike: Source Discord RPC Status...");
})

rpc.login({
    clientId: "870290051374919710"
})