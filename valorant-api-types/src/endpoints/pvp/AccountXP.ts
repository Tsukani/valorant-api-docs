import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {dateSchema, matchIDSchema, playerUUIDSchema} from '../../commonTypes'

const progressSchema = z.object({
    Level: z.number(),
    XP: z.number()
})

export const accountXPEndpoint = {
    name: 'Account XP',
    description: 'Get the account level, XP, and XP history for the current player. This endpoint only works with the authenticated player\'s PUUID.',
    queryName: 'AccountXP_GetPlayer',
    category: 'PVP Endpoints',
    type: 'pd',
    suffix: 'account-xp/v1/players/{puuid}',
    riotRequirements: {
        token: true,
        entitlement: true,
        clientPlatform: true,
        clientVersion: true
    },
    responses: {
        '200': z.object({
            Version: z.number(),
            Subject: playerUUIDSchema,
            Progress: progressSchema,
            History: z.array(z.object({
                ID: matchIDSchema,
                MatchStart: dateSchema,
                StartProgress: progressSchema,
                EndProgress: progressSchema,
                XPDelta: z.number(),
                XPSources: z.array(z.object({
                    ID: z.enum(['time-played', 'match-win', 'first-win-of-the-day']),
                    Amount: z.number()
                })),
                XPMultipliers: z.array(z.unknown())
            })),
            LastTimeGrantedFirstWin: dateSchema,
            NextTimeFirstWinAvailable: dateSchema
        })
    }
} as const satisfies ValorantEndpoint

export type AccountXPResponse = z.input<typeof accountXPEndpoint.responses['200']>