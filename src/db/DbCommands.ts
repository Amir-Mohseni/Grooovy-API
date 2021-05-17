import assert from 'assert'
// import { InsertWriteOpResult } from 'mongodb'
import { db } from './init'

export const find = () => {}

export const insertOne = () => {}

export const insertMany = ( collection: string, data: {}[], cb?: Function ) => {

  if( !db ) throw new Error()

  // Get the documents collection
  const Collection = db.collection(collection);

  // Insert some documents
  Collection.insertMany( data , function(err, result) {

    const dataLength = data.length

    assert.strictEqual(err, null);
    assert.strictEqual(dataLength, result.result.n);
    assert.strictEqual(dataLength, result.ops.length);
    console.log(`Inserted ${ dataLength } documents into the ${ collection }`);

    if( cb ) cb(result);

    return result;

  });

}

export const updateOne = () => {}

export const updateMany = () => {}

export const deleteOne = () => {}

export const deleteMany = () => {}

