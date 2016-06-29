"use strict";

import * as express from 'express';
import * as fs from 'fs';

export class StaticDispatcher {
    static sendIndex(req: express.Request, res: express.Response):void {
      let _root = process.cwd();
      let _clientFiles = (process.env.NODE_ENV === 'local') ? '/client/.tmp/' : '/client/dist/';

      res.type('.html');

      fs.createReadStream(_root + _clientFiles + 'index.html')
        .pipe(res);
    }
}
