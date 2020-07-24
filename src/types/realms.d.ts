import { core } from './core'

export as namespace realm

export namespace realm {

  export interface RealmBase {
        id: string;
        name: string;
        meta: {
          created_at: Date;
          updated_at: Date;
        }
        type: string;
  }


  /**
   * AuthenticationRealm Endpoints
   */
  export interface AuthenticationRealmsEndpoint extends core.CrudQueryableResource<RealmBase, null, null, null> {
    endpoint: 'authentication-realms'
    storage: Storage
  }

}