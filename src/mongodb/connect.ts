import { MongoClient, type Document, /* ChangeStream */ } from "mongodb";

export function connectToCluster<CollectionType extends Document>(collectionName: string) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(process.env.MONGODB_URI!);
        mongoClient.connect();

        const db = mongoClient.db('test');
        const collection = db.collection<CollectionType>(collectionName);

        return collection
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        throw new Error(`Connection to MongoDB Atlas failed! ${error}`)
    }
}

export const collectionCharacters = connectToCluster<Character>('characters')
export const collectionTeams = connectToCluster<Team>('teams')
export const collectionUniverses = connectToCluster<Universe>('universes')
export const collectionPowers = connectToCluster<Power>('powers')