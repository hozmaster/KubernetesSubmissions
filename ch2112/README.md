# app3 - Exercise 1.10

## Folders

- cutlass-app       Shows content in the browsers 
- cutlass-feeder    Handles image download based on json files.        

## Setup

1. Delete cluster: 'k3d cluster delete'
2. Create cluster with : 'k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2'
3. Create a directory the persistent volume : 'docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube' 
4. Set up the exercise with the command : 'kubectl apply -f manifests/'
    
## Verify:

 * Open the browser into http://localhost:8081 
