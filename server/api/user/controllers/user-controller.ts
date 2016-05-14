import * as express from 'express';

export class UserController {
  
  static me(req: express.Request, res: express.Response):void {
    
    if (!req.user) {
      
      return res.json(null, 403);
    }
    
    res.json(req.user, 200);
  }
}
