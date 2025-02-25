import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {
    characterIDSchema,
    itemIDSchema,
    itemTypeIDSchema,
    loadoutsSchema,
    playerUUIDSchema,
    weakUUIDSchema
} from '../../commonTypes'

export const pregameLoadoutsEndpoint = {
    name: 'Pre-Game Loadouts',
    description: 'Get Pre-Game loadout data',
    queryName: 'Pregame_GetMatchLoadouts',
    category: 'Pre-Game Endpoints',
    type: 'glz',
    suffix: 'pregame/v1/matches/{pre-game match id}/loadouts',
    riotRequirements: {
        token: true,
        entitlement: true,
        clientPlatform: true,
        clientVersion: true
    },
    responses: {
        '200': z.object({
            Loadouts: z.array(loadoutsSchema),
            LoadoutsValid: z.boolean()
        })
    }
} as const satisfies ValorantEndpoint

export type PregameLoadoutsResponse = z.infer<typeof pregameLoadoutsEndpoint.responses['200']>