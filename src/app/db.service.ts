import { Injectable } from  '@angular/core';
import {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential,
    RemoteMongoCollection,
    RemoteMongoDatabase,
    StitchAppClient
} from 'mongodb-stitch-browser-sdk' ;

@Injectable({'providedIn': 'root'})
export class DBService {
   db: RemoteMongoDatabase;
   client: StitchAppClient;
    initDB() {
        this.client = Stitch.initializeDefaultAppClient('ng-database-demo-nbeep');
        this.db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('ng-db');
    }
      getDetails() {
        // // this.client.auth.loginWithCredential(new AnonymousCredential()).then(() => {
        // //     return this.db.collection<{title: string}>('student').find().asArray();
        // });
        //  this.client.auth.loginWithCredential(new AnonymousCredential());
        //  return this.db
        //      .collection<{ Name: string; }>('todos')
        //      .find()
        //      .asArray();
        return this.client.auth
        .loginWithCredential(new AnonymousCredential())
        .then(() => {
            return this.db
            .collection<{Name: string}>('todos')
            .find()
            .asArray();
        })
    }
}