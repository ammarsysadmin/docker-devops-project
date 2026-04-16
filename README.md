# 🚀 Full DevOps Project (Docker + Jenkins + Kubernetes + Helm)

## 📌 Overview

This project demonstrates a complete DevOps workflow including containerization, CI/CD pipeline, Kubernetes deployment, and Helm-based packaging.

---

## 🛠️ Tech Stack

* Docker
* Jenkins
* Kubernetes (Minikube)
* Helm
* Nginx Ingress
* Prometheus (monitoring ready)

---

## ⚙️ Features

* Containerized frontend & backend
* CI/CD pipeline using Jenkins
* Kubernetes deployment with services & ingress
* ConfigMap & Secret for configuration management
* Helm chart for reusable deployments

---

## 🚀 Architecture

User → Ingress → Frontend → Backend → ConfigMap/Secret

---

## 📦 Deployment Steps

### 1. Start Minikube

```
minikube start
```

### 2. Deploy using Helm

```
helm install devops-release ./devops-chart -n devops-project --create-namespace
```

---

## 🌐 Access Application

```
http://myapp.local
http://myapp.local/api
```

---

## 🔥 CI/CD Flow

GitHub → Jenkins → Docker Build → Docker Hub → Kubernetes Deploy

---

## 🧠 Learnings

* Kubernetes networking & ingress
* CI/CD pipeline automation
* Helm packaging and deployment
* Debugging production issues (502, port binding, etc.)

---

## 👨‍💻 Author

Ammar (DevOps Engineer)

