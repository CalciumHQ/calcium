import sys,os,importlib,json
from sympy import *
from sympy.abc import *

variables = {}

# A JSON encoder for Sympy data types
class SympyEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, Float):
            return float(o)
        return super(SympyEncoder, self).default(o)

# Perform the calculation
def calc():
  return Calculation.Calculate(variables)
  
# Success handler
def success(values):
  print json.dumps({
    "status": "success", 
    "values": values
  }, cls=SympyEncoder)
  
# Error handler
def error(message):
  print json.dumps({
    "status": "error", 
    "message": message
  })
  
# Log handler
def log(data):
  print json.dumps({
    "status": "log", 
    "data": data
  })

# Parse stdin messages from the caller
for line in sys.stdin:
  input = json.loads(line)
  
  if input['command'] == 'set_calculation':
    sys.path.append("./server/api/calculation/templates/test")
    Calculation = importlib.import_module(input['args']['value'])
  
  if input['command'] == 'set_var':
    variables[input['args']['name']] = input['args']['value']
    
  if input['command'] == 'execute':
    try:
      result = calc()
      success(result)
      break;
      
    except TypeError, Message:
      error(str(Message))
    