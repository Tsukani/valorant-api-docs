# GET MMR_FetchPlayer

Get the match making rating for a player  


Method: `GET`  
URL: `https://pd.{region}.a.pvp.net/mmr/v1/players/{puuid}`  
Headers:
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-ClientVersion`: `{client version}`
 - `X-Riot-ClientPlatform`: `{client platform}`

Variables:
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{client version}`: Read [Common Components - Client Version](../common-components.md#client-version)
 - `{client platform}`: Read [Common Components - Client Platform](../common-components.md#client-platform)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{puuid}`: Read [Common Components - PUUID](../common-components.md#puuid)
