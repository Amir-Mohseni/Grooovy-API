import { 
  Collection, FindOneOptions, FilterQuery, InsertWriteOpResult,
   InsertOneWriteOpResult, UpdateOneOptions, 
   UpdateManyOptions, UpdateWriteOpResult,
   DeleteWriteOpResultObject
  }
from 'mongodb'

import { db } from './init'

export const findOne = async ( Collection: Collection, search: FindOneOptions<any> ) => {

  if( !db ) throw new Error()

  try {
  
    // Insert some documents
    const results = await Collection.findOne( search );

    return results

  } catch(err) {
    console.log(err);
  }

}

export const findMany = async ( Collection: Collection, search: FilterQuery<any> | undefined ) => {

  if( !db ) throw new Error()

  try {
  
    // Insert some documents
    const results = await Collection.find( search ).toArray();

    return results

  } catch(err) {
    console.log(err);
  }

}

export const insertOne = async ( Collection: Collection, data: {}[] ) => {

  if( !db ) throw new Error()

  try {
  
    // Insert some documents
    const results: InsertOneWriteOpResult<any> = await Collection.insertOne( data );

    return results

  } catch(err) {
    console.log(err);
  }

}

export const insertMany = async ( Collection: Collection, data: {}[] ) => {

  if( !db ) throw new Error()

  try {
  
    // Insert some documents
    const results: InsertWriteOpResult<any> = await Collection.insertMany( data );

    return results

  } catch(err) {
    console.log(err);
  }

}

export const updateOne = async ( Collection: Collection, search: UpdateOneOptions, data: {} ) => {

  if( !db ) throw new Error()

  try {
  
    // Insert some documents
    const results: UpdateWriteOpResult = await Collection.updateOne( search, data );

    return results

  } catch(err) {
    console.log(err);
  }

}

export const updateMany = async ( Collection: Collection, search: UpdateManyOptions, data: {}[] ) => {

  if( !db ) throw new Error()

  try {
  
    // Insert some documents
    const results: UpdateWriteOpResult = await Collection.updateMany( search, data );

    return results

  } catch(err) {
    console.log(err);
  }

}

export const deleteOne = async ( Collection: Collection, search: FilterQuery<any> ) => {

  if( !db ) throw new Error()

  try {
  
    // Insert some documents
    const results: DeleteWriteOpResultObject = await Collection.deleteOne( search );

    return results

  } catch(err) {
    console.log(err);
  }

}

export const deleteMany = async ( Collection: Collection, search: FilterQuery<any> ) => {

  if( !db ) throw new Error()

  try {
  
    // Insert some documents
    const results: DeleteWriteOpResultObject = await Collection.deleteMany( search );

    return results

  } catch(err) {
    console.log(err);
  }

}

