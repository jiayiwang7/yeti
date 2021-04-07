# Yeti

[Yeti](https://github.com/butlrtechnologies/yeti/) is a demo project for practicing CI/CD, Kubernetes and Helm.

This chart bootstraps an yeti deployment on a [Kubernetes](http://kubernetes.io) cluster using the [Helm](https://helm.sh) package manager.

## TL;DR;

Clone the repo and run local install

```console
$ git clone git@github.com:butlrtechnologies/yeti.git
$ cd /PATH_TO/yeti/helm
$ helm install t1 .
```

## Prerequisites

- Kubernetes 1.18+
- PV provisioner support in the underlying infrastructure

## Install Chart

Clone the repo and run local install

```console
$ git clone git@github.com:butlrtechnologies/yeti.git
$ cd /PATH_TO/yeti/helm

# Helm 3
$ helm install [RELEASE_NAME] [flag] .

# Helm 2
$ helm install . --name [RELEASE_NAME] [flags]
```

_See [configuration](#configuration) below._

_See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation._

## Uninstall Chart

```console
# Helm 3
$ helm uninstall [RELEASE_NAME]

# Helm 2
# helm delete --purge [RELEASE_NAME]
```

This removes all the Kubernetes components associated with the chart and deletes the release.

_See [helm uninstall](https://helm.sh/docs/helm/helm_uninstall/) for command documentation._

## Upgrade Chart

```console
# Helm 3 or 2
$ helm upgrade . [RELEASE_NAME] [flags]
```

_See [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/) for command documentation._

Visit the chart's [CHANGELOG](./CHANGELOG.md) to view the chart's release history.
For migration between major version check [migration guide](#migration-guide).

## Configuration

See [Customizing the Chart Before Installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). To see all configurable options with detailed comments, visit the chart's [values.yaml](./values.yaml), or run these configuration commands:

```console
# Helm 3
$ helm show values jenkins/jenkins

# Helm 2
$ helm inspect values jenkins/jenkins
```
