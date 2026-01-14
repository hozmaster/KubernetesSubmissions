# Exercise 4.1 GCKE exercises

## Folders

   - postgresql-stset   K8s files for postgres
   - scimitar           Pingpong application   

## Prerequisites
   - Google Cloud account
   - Google SDK install and running in your local PC
   - Google project created. 

## Setup

   1.  Create a cluster:
    
```
   gcloud container clusters delete dwk-cluster --zone=europe-north1-b
```
   Wait until it finished

   2. Create stateful postgresql instance
 
### Deploy applications

```
   $ cd gcke
   $ kubectl apply -f postgresql-stset/   
```

   3.1  Deploy the pingpong-project (scimitar)

```
   $ cd scimitar
   $ kubectl apply -f manifests/
```
   3.2  Deploy the todo-project (cutlass)

```
   $ cd cutlass
   $ kubectl apply -f manifest/
```

### 4. Verify scimitar:
 
   - Check the deployment:
 
```
   $ kubectl get all -n exercises
.
.      
NAME                           TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)          AGE
service/scimitar-app-svc       LoadBalancer   34.118.XXX.XX   34.88.XX.XX     2345:30508/TCP   2m37s
service/scimitar-backend-svc   LoadBalancer   34.118.XXX.XX   34.88.XX.XX     2346:30282/TCP   2m37s
.
.    
```

   - Get ip address of the application inside of gcke: 

```
   kubectl get ing -n exercises
.
.   
NAME               CLASS    HOSTS   ADDRESS         PORTS   AGE
scimitar-ingress   <none>   *       34.120.XXX.XX   80      88m
.
.   
```

   - Open the browser url 'http://34.120.XX.XX/'.
   - Increase the ping/pong counter using url address 'http://34.120.XX.XXpingpong'
   - Get the ping counter : 'http://34.120.XX.XX/pings'

### 4.2 Verify cutlass:


- Check the deployment:

```
   $ kubectl get all -n project
.
.      
NAME                           TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)          AGE
service/scimitar-app-svc       LoadBalancer   34.118.XXX.XX   34.88.XX.XX     2345:30508/TCP   2m37s
service/scimitar-backend-svc   LoadBalancer   34.118.XXX.XX   34.88.XX.XX     2346:30282/TCP   2m37s
.
.    
```

- Get ip address of the application inside of gcke:

```
   kubectl get ing -n project
.
.   
NAME               CLASS    HOSTS   ADDRESS         PORTS   AGE
scimitar-ingress   <none>   *       34.111.XXX.XX   80      88m
.
.   
```

- Open the browser url 'http://34.111.XX.XX/'.
- Get todos : 'http://34.111.XX.XX/todos'
