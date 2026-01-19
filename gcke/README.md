# Chapter 4. GCKE exercises

## 3.5. The project, step 14

-  Target: Configure the project (cutlass) to use Kustomize

## Folders

   - postgresql-stset   Postgres setup
   - cutlass            The project 

## Prerequisites
   - Google Cloud account
   - Google SDK install and running in your local PC
   - Google project created.

## Setup

   1.  Create a cluster to GCKE (with Gateway):
    
```
   $ gcloud container clusters create dwk-cluster --location=europe-north1-b --gateway-api=standard
```
 
### Setup 

```
   $ cd gcke
   $ kubectl apply -f postgresql-stset/   
```

### Deploying

   3.1  Deploy the todo-project (cutlass)

```
   $ cd cutlass
   $ kubectl apply -k .
```

### 4.2 Verify results


- Wait a while and check the deployment:

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
