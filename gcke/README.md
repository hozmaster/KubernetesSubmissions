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
 
```
   $ cd gcke
   $ kubectl apply -f postgresql-stset/   
```
   3. Add the pingpong application:

```
   $ kubectl apply -f scimitar/   
```

7. Verify :
 
   - Check ip address :
 
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

   - Open the browser url 'http://34.88.XX.XX:2345/'.
   - Increase the ping/pong counter using url address 'http://34.88.XX.XX:2345/pingpong'
   - Get the ping counter : 'http://34.88.XX.XX:2345/pings'
