import * as express from 'express';
import * as Python from 'python-shell';

export class CalculationController {
  
  static createCalculation(req: express.Request, res: express.Response):void {
    
      let _values = req.body.values;
      var output = {};
      
      let py = new Python(
        './server/api/calculation/controller/calculation-engine.py', 
        { mode: 'json' }
      );      
      
      py.on('message', (m) => {
        
        switch (m.status) {
          
          case 'success':
            for (var attrname in m.values) { output[attrname] = m.values[attrname]; }
            
            let _data = { 
              status: 'success',
              values: output 
            };
            
            res.json(_data);
            break;
            
          case 'error':
            console.error(`ERROR: ${m.message}`);
            res.json({ message: m.message }, 500);
            break;
            
          case 'log':
            console.log(`LOG: ${JSON.stringify(m.data)}`);
            break;
        } 
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
      
      try {
        
        py
          .send({ command: 'set_calculation', args: { value: 'ConcreteBeam' } })
          .send({ command: 'execute' })
          .end();
      }
      
      catch(e) {
        
        console.log('foooooo');
        console.log(e); 
      }
      
  }
}
