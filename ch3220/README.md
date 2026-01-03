# Exercise 2.6 Configuring applications

## Folders

- cutlass-app Web UI part.
- cutlass-backend The API layer. Handles and stores todo's

### ENVIRONMENT variables for K8s and dev

| ENV variable     | Recommend value                 | Description                              |
|------------------|---------------------------------|------------------------------------------|
| TODO_URL_ADDRESS | http://cutlass-backend-svc:2346 | Address of the backend service           |
| IPSUM_PIC_SP_URL | https://picsum.photos           | Picsum service url                       |
| APP_PORT         | 3000                            | Socket port which app service listen     |
| BACKEND_PORT     | 3010                            | Socket port which backend service listen |

### Setup

1. Delete old cluster (if needed):
    - ` $ k3d cluster delete `
2. Create cluster with :
    - ` $ k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2 `
3. Create a directory the persistent volume :
    - ` $ docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube`
4. Create a namespace for the project :
    - ` $  kubectl create ns project`
5. Set up the exercise with the command :
    - ` $ kubectl apply -f manifest/ `
6. Verify that the project is running
    - ` $ kubectl get all -n project `

## Verify:

* Open the browser into http://localhost:8081

* Get all todo's : 'curl -X GET http://localhost:8080/api/todo'
* Add new todo to the system :  'curl -X POST -H 'Content-type: application/json' -d '{"todo":"Learn
  JavaScript"}' http://localhost:80801/api/todo'
