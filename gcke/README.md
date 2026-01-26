
# Exercise 3.8 The project, step 16 (GCKE & Github actions)

Task: Do a pros/cons comparison of the solutions in terms of meaningful differences. This includes at least 

## Response 

Required work and costs to initialize

DBaaS
Low: Create via console, gcloud, or Terraform in minutes. Google handles provisioning, high availability setup (regional/multi-zone), networking, and basic config.

DIY

High: Deploy StatefulSet, PersistentVolumeClaims using storage, configure replication/failover set up secrets, networking (Services, Ingress), and monitoring. Requires Kubernetes expertise.

Maintenance 

DBasS:
Google automates patching, minor/major version upgrades, vacuuming (AlloyDB uses ML), scaling (vertical + read replicas), monitoring, and failure recovery. Operators can focus mainly on app logic.

DIY

Handle patching/OS updates, version upgrades (potentially disruptive), tuning parameters, vacuuming, replication health, failover testing, resource scaling, and dealing with Kubernetes-specific issues (e.g., Pod evictions, storage re-attachment). Requires ongoing DevOps/DBA time.

Backups:

DBaaS:
Fully automated & easy: automated daily backups, on-dem
and backups, export to service providers' storage. Built-in, no extra setup. Recovery is point-and-click or API-driven.

DIY:
Manual or scripted: Use tools like pg_dump, volume snapshots, or operator-specific backups. Requires configuring schedules, storage destinations (e.g., Cloud Storage buckets), testing restores, and handling consistency. More flexible but error-prone.

## Setup 

* Source repository : [dwk-cutlass](https://github.com/hozmaster/dwk-cutlass)
* TAG : 3.7

## Folders

- cutlass-app Web UI part.
- cutlass-backend The API layer. Handles and stores todo's. Limit max todo length to 140 chars.
- cutlass-feeder : Go project to fetch a random wiki page and store it toto system

### ENVIRONMENT variables for K8s and dev

| ENV variable      | Recommend value                  | Description                              |
|-------------------|----------------------------------|------------------------------------------|
| TODO_URL_ADDRESS  | http://cutlass-backend-svc:80    | Address of the backend service           |
| IPSUM_PIC_SP_URL  | https://picsum.photos            | Picsum service url                       |
| APP_PORT          | 3000                             | Socket port which app service listen     |
| BACKEND_PORT      | 3010                             | Socket port which backend service listen |     
| TODO_BACKEND_HOST | cutlass-backend-svc              |                                          |
| TODO_BACKEND_PORT | "80"                             |                                          |

### Setup

- Setup GCKE cluster with Gateway API. Setup artifact repositories to subprojects
- Set action secrets for : GKE_SA_KEY and GKE_PROJECT-keys.
-
- See KubernetesSubmissions/gcke/README.md for more details.

### Verification

Get Gateway ip address (`kubectl get gateway -n project`) and enter it to browser.


### Curl
* Get all todo's : 'curl -X GET http://<ip_address>/todos'
* Add new todo to the system :

  ` curl -X POST -H 'Content-type: application/json' -d '{"todo":"Learn JavaScript"}' http://<ip_address>/todos'  `
