export function getInventoryValue (
  inventory: Array<[string, number, number]>,
): number {
  return inventory
  .filter(([, quantity]) => quantity > 5)
  .reduce((total,[,quantity,pricePerUnit]) => total + quantity * pricePerUnit, 0);
}
