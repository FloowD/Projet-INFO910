@echo off
echo Building backend image...
docker build -t backend-image:v1 ./back

echo Building frontend image...
docker build -t frontend-image:v1 ./front

echo Starting minikube...
minikube start --addons=ingress

echo Loading images into minikube...
minikube image load backend-image:v1 frontend-image:v1

echo Deploying frontend and backend...
kubectl apply -f k8s

echo Setting up port forwarding...
minikube tunnel

echo End of script.
