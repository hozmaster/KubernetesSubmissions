# Exercise 1.11

## Setup

1. Delete cluster :

` $ k3d cluster delete `

2. Create cluster with :

` $ k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2 `

3. Setup the storage volume:

` $ docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube`

4. Create application to the K8s system:

` $ kubectl apply -f manifest/ `

5. Wait for while so everything downloaded and system is finalized. Verify that everything is ok.

` $ kubectl get all `

6. Increase the ping/pong counter using url address 'http://locahost:8081/pingpong'
7. Verify : Open the browser url 'http://localhost:8081/'.
