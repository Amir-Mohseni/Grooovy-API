import { MongoClient, Db } from 'mongodb'

export let db: Db | null = null

export const initMongoDB = () => {

  console.log('Initializing MongoDB')

  const client = new MongoClient('mongodb://localhost:27017/Grooovy', { useUnifiedTopology: true } );

  client.connect( function (err, client) {
    if (err) throw err
  
    db = client.db('Grooovy')
  
    db.collection('musics').find().toArray(function (err, result) {
      if (err) throw err
  
      console.log('MongoDB Client Initialized Successfuly')
    })
  })

}
