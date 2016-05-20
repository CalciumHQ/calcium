import * as path from 'path';
import * as express from 'express';
import InstanceDAO from '../dao/instance-dao';

export class InstanceController {
  static getAll(req: express.Request, res: express.Response):void {
      InstanceDAO
        ['getAll']()
        .then(instances => res.status(200).json(instances))
        .catch(error => res.status(400).json(error));
  }
  
  static getOne(req: express.Request, res: express.Response):void {
      let _id = req.params.id;
      
      InstanceDAO
        ['getOne']({ _id: req.params.id })
        .then(instance => res.status(200).json(instance))
        .catch(error => res.status(400).json(error));
  }

  static createInstance(req: express.Request, res: express.Response):void {
      let _instance = req.body;

      InstanceDAO
        ['createInstance'](_instance)
        .then(instance => res.status(201).json(instance))
        .catch(error => res.status(400).json(error));
  }

  static deleteInstance(req: express.Request, res: express.Response):void {
    let _id = req.params.id;

    InstanceDAO
      ['deleteInstance'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
  
  static getTemplate(req: express.Request, res: express.Response):void {
    let templatePath = path.resolve(__dirname + '/../templates/test/TestCalculation.html'); 
    res.status(200).sendFile(templatePath);   
  }
}