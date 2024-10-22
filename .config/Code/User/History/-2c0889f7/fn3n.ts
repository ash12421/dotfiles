const n: number = parseInt(prompt("Enter number of routers: ") || '0');
const m: number = parseInt(prompt("Enter number of edges: ") || '0');
const adj: number[][] = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
const dist: number[] = Array(n + 1).fill(Infinity);
const edges: [number, number, number][] = [];

console.log("Enter edges in the format: router1 router2 distance");
for (let i = 0; i < m; i++) {
  const [x, y, w] = prompt(`Enter edge ${i + 1}:`)?.split(" ").map(Number) || [0, 0, 0];
  adj[x][y] = adj[y][x] = w;
  edges.push([x, y, w]);
}

const start: number = parseInt(prompt("Enter starting router: ") || '0');
dist[start] = 0;

// Bellman-Ford
for (let i = 0; i < n; i++) {
  for (const [x, y, w] of edges) {
    if (dist[x] + w < dist[y]) {
      dist[y] = dist[x] + w;
    }
  }
}

console.log(`\nDistances from node ${start} to all other nodes:`);
console.log("Node\tDistance");
for (let i = 1; i <= n; i++) {
  console.log(`${i}\t${dist[i] === Infinity ? "impossible" : dist[i]}`);
}
