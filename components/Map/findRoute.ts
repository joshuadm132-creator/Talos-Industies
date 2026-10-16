
type PathNode = {
  id: string;
  connectsTo: string[];
};

export function findRoute(
  startId: string,
  destinationId: string,
  nodes: PathNode[]
): string[] {
  const queue: string[][] = [[startId]];
  const visited = new Set([startId]);

  while (queue.length > 0) {
    const route = queue.shift()!;
    const currentId = route[route.length - 1];

    if (currentId === destinationId) {
      return route;
    }

    const currentNode = nodes.find(
      (node) => node.id === currentId
    );

    if (!currentNode) continue;

    // Include both outgoing and incoming connections.
    const neighbours = nodes
      .filter(
        (node) =>
          currentNode.connectsTo.includes(node.id) ||
          node.connectsTo.includes(currentId)
      )
      .map((node) => node.id);

    for (const nextId of neighbours) {
      if (visited.has(nextId)) continue;

      visited.add(nextId);
      queue.push([...route, nextId]);
    }
  }

  return [];
}
