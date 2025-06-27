import random
import math

class SigmaAutomaton:
    def __init__(self, size=64):
        self.size = size
        self.phase_field = [[random.uniform(0, 2*math.pi) for _ in range(size)] for _ in range(size)]
        self.constraint_field = [[0.0 for _ in range(size)] for _ in range(size)]
        self.memory_kernel = [
            [0.25, 0.5, 0.25],
            [0.5, 0.0, 0.5],
            [0.25, 0.5, 0.25]
        ]

    def dphi_inverse(self, neighborhood_phase):
        if not neighborhood_phase:
            return 0.0
        return -sum(neighborhood_phase) / len(neighborhood_phase) * 0.9

    def update(self):
        new_phase = [[0.0 for _ in range(self.size)] for _ in range(self.size)]
        new_constraint = [[0.0 for _ in range(self.size)] for _ in range(self.size)]
        for i in range(self.size):
            for j in range(self.size):
                coherence = 0j
                neighbor_phases = []
                for di in range(-1, 2):
                    for dj in range(-1, 2):
                        ni = (i + di) % self.size
                        nj = (j + dj) % self.size
                        weight = self.memory_kernel[di+1][dj+1]
                        if di == 0 and dj == 0:
                            continue
                        phase = self.phase_field[ni][nj]
                        coherence += weight * complex(math.cos(phase), math.sin(phase))
                        neighbor_phases.append(phase)
                angle = math.atan2(coherence.imag, coherence.real)
                amplitude = math.hypot(coherence.real, coherence.imag)
                new_constraint[i][j] = angle
                new_phase[i][j] = (self.phase_field[i][j] + amplitude * angle) % (2 * math.pi)
        self.phase_field = new_phase
        self.constraint_field = new_constraint

    def render_ascii(self):
        chars = ' .:-=+*#%@'
        lines = []
        for i in range(self.size):
            line = ''
            for j in range(self.size):
                h = (self.phase_field[i][j] / (2*math.pi)) % 1.0
                idx = int(h * (len(chars)-1))
                line += chars[idx]
            lines.append(line)
        return '\n'.join(lines)

if __name__ == '__main__':
    automaton = SigmaAutomaton(32)
    for _ in range(10):
        automaton.update()
    print(automaton.render_ascii())
