import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {contractsResponse} from '../../commonTypes'

export const contractsEndpoint = {
    name: 'Contracts',
    description: 'Get contract details including agents, battlepass, missions, and recent games',
    queryName: 'Contracts_Fetch',
    category: 'Contract Endpoints',
    type: 'pd',
    suffix: 'contracts/v1/contracts/{puuid}',
    riotRequirements: {
        token: true,
        entitlement: true,
        clientVersion: true,
        clientPlatform: true
    },
    responses: {
        '200':contractsResponse
    }
} as const satisfies ValorantEndpoint

export type ContractsResponse = z.input<typeof contractsEndpoint.responses['200']>