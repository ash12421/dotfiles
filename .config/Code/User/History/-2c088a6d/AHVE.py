# distance vector routing

n = int(input("Enter no. of routers: "));
m = int(input("Enter no. of edges: "));
adj = [[0 for _ in range(n+1)] for _ in range(n+1)];
dist = [float('inf') for _ in range(n+1)];
edges = [];

print("Enter edges in this format: router1 router2 distance");
for _ in range(m):
    x,y,w = map(int, input().split());
    adj[x][y] = adj[y][x] = w;
    edges.append([x,y,w]);

start = int(input("Enter starting router: "));
dist[start] = 0;

#bellman ford

for i in range(n):
    for [x,y,w] in edges:
        dist[y] = min(dist[y], dist[x] + w);

print(f"\nDistances from {start} node to all other nodes: ")
print("Node\tDistance")
for i in range(1,n+1):
    print(f"{i}\t{dist[i] if dist[i] != float('inf') else "impossible"}")