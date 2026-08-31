export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  return inventory.reduce((total,[,quantity,pricePerUnit]) => total + quantity * pricePerUnit, 0);
}
