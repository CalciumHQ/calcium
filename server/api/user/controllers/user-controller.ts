import * as express from 'express';
import UserDAO from '../dao/user-dao';

export class UserController {
  
  static me(req: express.Request, res: express.Response):void {
    
    if (!req.user) {
      
      return res.json(null, 403);
    }
    
    res.json(req.user, 200);
  }
  
  static saveUser(req: express.Request, res: express.Response):void {
    let _id = req.params.id;
    let _user = req.body; 
    
    UserDAO
      ['saveUser'](_id, _user)
      .then((instance) => res.status(200).json(instance))
      .catch(error => res.status(400).json(error));
  }
}
