@echo off
echo Starting minikube...
minikube start

echo Deploying frontend and backend...
kubectl apply -f k8s

echo Setting up port forwarding...
minikube tunnel

echo Application deployed and ready for testing.
