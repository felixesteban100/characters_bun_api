import { Hono } from 'hono'
import { collectionCharacters, collectionPowers, collectionTeams, collectionUniverses } from './mongodb/connect'

const app = new Hono()


app.get('/', (c) => {
    return c.json({ message: 'Hello Hono!' })
})

app.get('/characters', async (c) => {
    const allCharacters = await collectionCharacters.find({}).toArray()
    return c.json(allCharacters)
})

app.get('/universes', async (c) => {
    const universes = await collectionUniverses.find({}).toArray()
    return c.json(universes)
})

app.get('/teams', async (c) => {
    const teams = await collectionTeams.find({}).toArray()
    return c.json(teams)
})

app.get('/powers', async (c) => {
    const powers = await collectionPowers.find({}).toArray()
    return c.json(powers)
})

export default app