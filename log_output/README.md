
1. Delete cluster: 'k3d cluster delete'
2. Create cluster with : 'k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2'
3. Create the deployment : 'kubectl apply -f https://raw.githubusercontent.com/kubernetes-hy/material-example/master/app2/manifests/deployment.yaml' 
4. Create the service with command : 'kubectl apply -f manifests/service.yaml' 
5. Verify : 'curl -X GET http://localhost:8082'