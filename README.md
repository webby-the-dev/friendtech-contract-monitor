# Friend.tech contract monitor

Simple monitor/scanner for new users on friend.tech.
It connects directly to friend.tech contract and listens to all `Trade` events. It checks if it is a new account and `console.log`'s it. That's it. Pretty simple.

### Running

1. Copy paste `.env.example` file, rename it to `.env` and put websocket url to `WEBSOCKET_PROVIDER=`. You can get it on [Quicknode](https://www.quicknode.com/) or [Blast API](https://blastapi.io/) for free.
2. `npm install`
3. `npm start`

Enjoy :)

### Issues

For some reason event listener stops getting new data after few hours and you have to restart it to make it work again. I've added "Heartbeat" pinging every two minutes but it does not work. It still closes websocket connection for unknown reason. I've tried different websocket providers but same result.

### Contact

If you have any questions or problems you can contact me on

[![Twitter](https://img.shields.io/twitter/follow/yourusername?label=Twitter&style=social)](https://twitter.com/webby_the_dev)

You can also join my discord server for more monitors and scanners

[![Discord](https://img.shields.io/badge/-Discord-blue?style=social&logo=Discord)](https://discord.gg/dgjwHfaMeR)

Buying my friend.tech key gives you access to alpha info

🔑 [Buy a key](https://www.friend.tech/rooms/0xFe0a69518CaE0174BF52481545A5c547DD3f252C)
