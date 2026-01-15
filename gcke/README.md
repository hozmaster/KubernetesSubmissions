# Chapter 4. GCKE exercises

## 3.4. Rewritten routing

## Folders

   - postgresql-stset   Postgres setup
   - scimitar           Pingpong application
   - cutlass            The project 

## Prerequisites
   - Google Cloud account
   - Google SDK install and running in your local PC
   - Google project created.

## Setup

   1.  Create a cluster to GCKE:
    
```
   $ gcloud container clusters delete dwk-cluster --zone=europe-north1-b
   $ gcloud container clusters update dwk-cluster --location=europe-north1-b --gateway-api=standard
```
 
### Setup 

```
   $ cd gcke
   $ kubectl apply -f postgresql-stset/   
```

### Deploying

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
```

   - Get ip address of the application inside of gcke: 

```
   kubectl get gateway -n exercises
.
.   
NAME               CLASS                            ADDRESS           PROGRAMMED   AGE
scimitar-gateway   gke-l7-global-external-managed   136.XXX.XXX.XXX   True         40m.
.   
```

   - Open the browser url 'http://136.XXX.XXX.XXX/'.
   - Increase the ping/pong counter using url address 'http://136.XXX.XXX.XXXX/pingpong'  --> Redirects now to '/' 
   - Get the ping counter : 'http://136.XXX.XXX.XXX/pings'

### 4.2 Verify cutlass:


- Check the deployment:

```
   $ kubectl get all -n project
```

- Get ip address of the application inside of gcke:

```
   kubectl get gatway -n project
.
.   
NAME              CLASS                            ADDRESS          PROGRAMMED   AGE
cutlass-gateway   gke-l7-global-external-managed   34.149.XXX.XXX   True         12m.
.   
```

- Open the browser url 'http://34.149.XX.XX/'.
- Get todos : 'http://34.149.XX.XX/todos'
