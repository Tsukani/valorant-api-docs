import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {partySchema} from '../../commonTypes'

export const partySetMemberReadyEndpoint = {
    name: 'Party Set Member Ready',
    description: 'Set the ready status of a player in the current party',
    queryName: 'Party_SetMemberReady',
    category: 'Party Endpoints',
    type: 'glz',
    suffix: 'parties/v1/parties/{party id}/members/{puuid}/setReady',
    method: 'POST',
    riotRequirements: {
        token: true,
        entitlement: true,
        clientPlatform: true,
        clientVersion: true
    },
    body: z.object({
        ready: z.boolean().describe("Ready Status")
    }),
    responses: {
        '200': partySchema
    }
} as const satisfies ValorantEndpoint

export type PartySetMemberReadyResponse = z.input<typeof partySetMemberReadyEndpoint.responses['200']>