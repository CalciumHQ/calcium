import * as express from 'express';

export class CalculationController {
  
  static createCalculation(req: express.Request, res: express.Response):void {
    
      let _values = req.body.values;
      
      let _data = {
        status: 'success', 
        values: { ans: _values.x + _values.y } 
      };
      
      res.json(_data);
  }
}
