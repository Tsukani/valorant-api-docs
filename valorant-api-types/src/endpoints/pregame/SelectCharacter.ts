import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'
import {pregameMatchSchema, weakUUIDSchema} from '../../commonTypes'

export const selectCharacterEndpoint = {
    name: 'Select Character',
    description: 'Select an agent  \n' +
        '**DO NOT USE THIS FOR INSTALOCKING**  \n' +
        'Riot doesn\'t like this. You may get banned or get the API restricted for the rest of us.  ',
    queryName: 'Pregame_SelectCharacter',
    category: 'Pre-Game Endpoints',
    type: 'glz',
    method: 'POST',
    suffix: 'pregame/v1/matches/{pre-game match id}/select/{agent id}',
    variables: new Map([
        ['{agent id}', weakUUIDSchema.describe('The agent ID to select')]
    ]),
    riotRequirements: {
        token: true,
        entitlement: true,
        clientPlatform: true,
        clientVersion: true
    },
    responses: {
        '200': pregameMatchSchema
    }
} as const satisfies ValorantEndpoint

export type SelectCharacterResponse = z.infer<typeof selectCharacterEndpoint.responses['200']>