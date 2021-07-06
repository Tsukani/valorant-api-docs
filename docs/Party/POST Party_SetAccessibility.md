# POST Party_SetAccessibility

Changes the party accessibility to be open or closed  


Method: `POST`  
URL: `https://glz-{region}-1.{region}.a.pvp.net/parties/v1/parties/{party id}/accessibility`  
Headers:
 - `Authorization`: `Bearer {base64 encoded Riot token}`
 - `X-Riot-Entitlements-JWT`: `{Riot entitlement}`

Body:  
```
{
	"accessibility": "{accessibility}"
}
```
Variables:
 - `{base64 encoded Riot token}`: Read [Common Components - Riot Token](../common-components.md#riot-token)
 - `{Riot entitlement}`: Read [Common Components - Riot Entitlement](../common-components.md#riot-entitlement)
 - `{region}`: Read [Common Components - Region](../common-components.md#region)
 - `{party id}`: Read [Common Components - Party ID](../common-components.md#party-id)
 - `{accessibility}`: Can be either `OPEN` or `CLOSED`.
