import { MongoClient } from "https://deno.land/x/mongo@v0.11.1/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

const getAllAccounts = async ({ response }: { response: any }) => { 
    
    try {
        console.log('incomming request');

        const dbs = client.listDatabases()
        .then(d => {
            console.log(d);
        });

        const db = client.database("connecteddb");

        db.listCollectionNames()
        .then(c => {
            console.log(c);
        })

        const users = db.collection<any>("accounts");

        users.count()
        .then(count => {
            console.log(`Collection has ${count} entries.`);
        });
        

        const all_users = await users.find({});
        
        response.body =  {
            message: 'Hello World',
            accounts: all_users
        };
    } catch (err) {
        console.error(`failed to receive frame: ${err}`);
        response.body =  {
            error: err
        };
    }
}

export { getAllAccounts as getAccounts }