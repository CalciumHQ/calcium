import * as express from 'express';
import * as Python from 'python-shell';

export class CalculationController {
  
  static createCalculation(req: express.Request, res: express.Response):void {
    
      let _expression = req.body.expression;
      let _values = req.body.values;
      var output = {};
      
      let py = new Python(
        './server/api/calculation/controller/calculation-engine.py', 
        { mode: 'json' }
      );      
      
      py.on('message', (m) => {
        
        for (var attrname in m) { output[attrname] = m[attrname]; }
      });
      
      py.on('close', () => {
        
        let _data = {
          status: 'success', 
          values: output
        };
        
        res.json(_data);
      });
      
      for (var name in _values) {
        
        py.send({
          command: 'set_var',
          args: {
            name: name,
            value: _values[name]
          }
        });
      }
      console.log(_expression);
      py
        .send({ command: 'set_expression', args: { value: _expression } })
        .send({ command: 'execute' })
        .end();
  }
}
