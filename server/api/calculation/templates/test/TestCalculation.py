from sympy import *

def Calculate(inputs):
  d = inputs['d']
  fy = inputs['fy']

  phi = 0.9
  Ag = pi * d**2 / 4

  Nt = Ag * fy
  phi_Nt = phi * Nt
  
  return ({
    'Nt': N(Nt), 
    'phi_Nt': N(phi_Nt) 
  })