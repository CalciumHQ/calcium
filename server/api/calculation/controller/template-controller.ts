import * as path from 'path';
import * as express from 'express';
import TemplateDAO from '../dao/template-dao';

export class TemplateController {
  static getAll(req: express.Request, res: express.Response):void {
      TemplateDAO
        ['getAll']()
        .then(templates => res.status(200).json(templates))
        .catch(error => res.status(400).json(error));
  }
  
  static getOne(req: express.Request, res: express.Response):void {
      let _id = req.params.id;
      
      TemplateDAO
        ['getOne']({ _id: req.params.id })
        .then(template => res.status(200).json(template))
        .catch(error => res.status(400).json(error));
  }
}