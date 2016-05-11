import sys,json
from sympy import *
from sympy.abc import * 

expr = x
variables = {}

def calc():
  f = lambdify((x, y), expr);
  ans = f(variables['x'], variables['y'])
   
  return { 'ans': ans }

for line in sys.stdin:
  input = json.loads(line)
  
  if input['command'] == 'set_expression':
    expr = sympify(input['args']['value'])
  
  if input['command'] == 'set_var':
    variables[input['args']['name']] = input['args']['value']
    
  if input['command'] == 'execute':
    print json.dumps(calc())