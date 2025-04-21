export function fixGiftList(
  received: string[],
  expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
  const receivedMap = new Map<string, number>();
  const missingMap = new Map<string, number>();

  for (const gift of received) {
    receivedMap.set(gift, (receivedMap.get(gift) ?? 0) + 1);
  }

  for (const gift of expected) {
    const expectedInReceived = receivedMap.get(gift);
    switch (expectedInReceived) {
      case undefined:
        missingMap.set(gift, (missingMap.get(gift) ?? 0) + 1);
        break;
      case 1:
        receivedMap.delete(gift);
        break;
      default:
        receivedMap.set(gift, expectedInReceived - 1);
    }
  }

  return {
    missing: Object.fromEntries(missingMap),
    extra: Object.fromEntries(receivedMap),
  };
}
