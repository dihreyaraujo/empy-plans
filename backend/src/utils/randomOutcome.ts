export function randomOutcome(): string {
  const rand = Math.random()
  if (rand < 0.2) return Math.random() < 0.5 ? 'recusado - sem limite' : 'não autorizado'
  return 'pago'
}
