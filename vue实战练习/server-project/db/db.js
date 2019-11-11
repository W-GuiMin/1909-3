const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = '1909';
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function (err, client) {
            err ? reject(err) : resolve(client)
            console.log("Connected successfully to server");
        });
    })
}
//查找操作
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(query ? query : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close();
    })
}


// db.getCollection('news').find({'content':/^.*120.77.215.34:9999.*$/})


//插入操作 多条[{"b": 3}, {'c': 4}]
const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query, function (err, result) {
            err ? reject(err) : resolve(result)
        })
        client.close();
    })
}

//修改操作
//如果query1和query2字段相同值不同就是修改字段值
//如果query1和query2字段不同就是给query1字段的数据，添加query2字段
const upOne = (col, query1, query2) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.updateOne(query1, { $set: query2 }, function (err, result) {
            err ? reject(err) : resolve(result)
        });
        client.close();
    })
}

//删除操作
const delOne = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.deleteOne(query, function (err, result) {
            err ? reject(err) : resolve(result)
        })
        client.close();
    })
}
module.exports = { find, insert, delOne, upOne }


