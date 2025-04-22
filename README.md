## Getting Started

This is a simple pokedex application that will look up a pokemon by id. To begin the project run:

```bash
npm i
npm run dev
```

## Run in Kind k8s cluster

If you would like to run this application inside a kubernetes cluster locally within kind, follow the below instructions:

### Install prereqs

To get start you will need to install kind, and docker however you see fit.

If you're running on mac OS, you can install both via:

```bash
brew install kind docker
```

### Build the image and create/load your kind cluster

After both docker and kind are up and running, you will need to build the docker image from the dockerfile in the root of this project:

```bash
docker buildx build -t <your-tag-here> .
```

This builds the image, once that's done, run the following to create a local kind k8s cluster, and to load our built image into it.

```bash
kind create cluster
kind load docker-image <your-tag-here>
```

### Deploy your image into the cluster

After the image has been loaded into your cluster, you need to deploy it, and expose the service so you can hit it from your local browser, run these commands:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

Once this is done, you will need to port forward traffic from your local machine to the k8s service, run this command:

```bash
kubectl port-forward service/pokedex-app-service 3000:80
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
