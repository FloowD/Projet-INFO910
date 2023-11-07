# Projet-INFO910

## Commandes déployement du projet

### Construire les images docker

```bash
docker build -t backend-image:v1 ./back

docker build -t frontend-image:v1 ./front
```

### Lancer minikube

```bash
minikube start --addons=ingress
```

### Charger les images dans minikube

```bash
minikube image load backend-image:v1 frontend-image:v1
```

### Déployer les pods et services et l'ingress

```bash
kubectl apply -f k8s
```

### Lancer le tunnel

```bash
minikube tunnel
```