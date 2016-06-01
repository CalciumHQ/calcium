from sympy import *

def Calculate(inputs):

  # Geometry
  b = inputs['b']
  d = inputs['d']
  f_c = inputs['f_c']
  f_y = inputs['f_y']

  A_g = b * d
  d_o = d - 30
  
  Ast = inputs['A_st']
  d_n = symbols('d_n')
  
  
  #
  # Calculate ultimate moment capacity according to AS3600 (2009)
  #
  # We will use the Whitney stress block approximation of 
  # compressive stress in the concrete. Assumptions in analysis 
  # will be made in accordance with clauses 8.1.2 and 8.1.3.
  #
  
  # Strain
  epsilon_cu = 0.003
  epsilon_c = epsilon_cu                            # 8.1.3(a) Concrete fails by crushing when strain is 0.003
  
  # Stress
  f_s = f_y                                         # Assume tensile steel yields
  alpha_2 = max(0.67, min(0.85, 1 - 0.003 * f_c))   # 8.1.3(1)
  gamma = max(0.67, min(0.85, 1 - 0.003 * f_c))     # 8.1.3(1)
  
  a = (gamma * d_n)                                 # The depth of the stress block
  A_c = a * b
  sigma_cu = alpha_2 * f_c
  
  # Sum forces to find depth to neutral axis
  T = Ast * f_s
  C = A_c * sigma_cu
  d_n = solve(Eq(T, C), d_n)[0]
  
  # Substitute new value of d_n back into equations
  a = a.subs('d_n', d_n)
  A_c = A_c.subs('a', a)
  C = C.subs('A_c', A_c)
  
  # Sum moments to find the nominal moment strength
  M_u = T * (d_o - a/2)
  phi_M_u = 0.9 * M_u
  
  return ({
    'A_g': N(A_g),
    'd_o': N(d_o),
    'd_n': N(d_n),
    'alpha_2': N(alpha_2),
    'gamma': N(gamma),
    'T': N(T),
    'M_u': N(M_u),
    'phi_M_u': N(phi_M_u)
  })