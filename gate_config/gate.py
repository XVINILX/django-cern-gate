import opengate as gate

cm = gate.g4_units.cm
eV = gate.g4_units.eV
MeV = gate.g4_units.MeV
x = 32 * cm
energy = 150 * MeV
print(f'The energy is {energy/eV} eV')

sim = gate.Simulation()
ui = sim.user_info
print(ui)
# ui.verbose_level = gate.LOG_DEBUG
# ui.running_verbose_level = gate.LOG_EVENT
ui.g4_verbose = False
ui.g4_verbose_level = 1
ui.visu = False
ui.visu_verbose = False
ui.random_engine = 'MersenneTwister'
ui.random_seed = 'auto'
ui.number_of_threads = 1
output = sim.start()