# Common Components
These variables show up in requests often. Here's how to get them.

### PUUID
To get the player's UUID, you can use the local [TEXT_CHAT_RNet_FetchSession](Useful%20Local/GET%20TEXT_CHAT_RNet_FetchSession.md) endpoint or the remote
[RSO_GetPlayerInfo](Riot/GET%20RSO_GetPlayerInfo.md) endpoint with a token.

### Riot Token
Riot tokens can be obtained through the auth flow or thorough the local API.
Currently, they expire one hour after generation.

Locally, use the endpoint [RSO_RNet_GetEntitlementsToken](Useful%20Local/GET%20RSO_RNet_GetEntitlementsToken.md).
This also gives you the entitlement.

### Riot Entitlement
If you have a token from the auth flow, you can get an entitlement from the url `https://entitlements.auth.riotgames.com/api/token/v1`

### Lockfile Data
When the game is running, the lockfile is located at `%LocalAppData%\Riot Games\Riot Client\Config\lockfile` and contains the info needed to connect to the local api.
It's a text file with a single line where the data is seperated by colons. The format is `name:pid:port:password:protocol`

### Region
The region is important for remote APIs and it can be found a couple ways locally.
One method is using the [RiotClientSession_FetchSessions](Useful%20Local/GET%20RiotClientSession_FetchSessions.md) endpoint then getting the value of the `-ares-deployment=` argument.
Another way is to scrape the ShooterGame log for requests that contain the region in the url.

Alternatively, you can ask the user what their region is. It can take the following values:

| Region ID | Region Name   |
| --------- | -----------   |
| na        | North America |
| eu        | Europe        |
| ap        | Asia Pacific  |
| ko        | Korea         |

### Client Version
This is the version the client is running.
It can be obtained locally through parsing the ShooterGame log or remotely with the third-party [Version](Third-Party%20API%20by%20Officer/GET%20Version.md) API. 

### Client Platform
A string representing the platform of the client.
`ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9` is a value that currently works.

### Pregame Match ID
The ID of the match while it's in the pre-game phase.
This can be obtained live with the `OnJsonApiEvent_riot-messaging-service_v1_message` local websocket event
(when the URI starts with `/riot-messaging-service/v1/message/ares-pregame/pregame/v1/matches/`)
or on request with the [Pregame_GetPlayer](Pre-Game/GET%20Pregame_GetPlayer.md) endpoint.

### Coregame Match ID
The ID of the match after it's passed the pre-game phase.
This can be obtained live with the `OnJsonApiEvent_riot-messaging-service_v1_message` local websocket event
(when the URI starts with `/riot-messaging-service/v1/message/ares-core-game/core-game/v1/matches/`)
or on request with the [CoreGame_FetchPlayer](Current%20Game/GET%20CoreGame_FetchPlayer.md) endpoint.

### Party ID
The ID of the party the player is in. To get this live, the `OnJsonApiEvent_chat_v4_presences` websocket event can be used.
On request, the remote [Party_FetchPlayer](Party/GET%20Party_FetchPlayer.md) or the local
[PRESENCE_RNet_GET_ALL](Useful%20Local/GET%20PRESENCE_RNet_GET_ALL.md) endpoint can be used.