# Batch

> see https://aka.ms/autorest

This is the AutoRest configuration file for Compute.

---

## Getting Started

To build the SDK for Compute, simply [Install AutoRest](https://aka.ms/autorest/install) and in this folder, run:

> `autorest`

To see additional help and options, run:

> `autorest --help`

---

## Configuration

### Basic Information

These are the global settings for the Compute API.

``` yaml
openapi-type: arm
```

### All included files should be added here

``` yaml
input-file:
- D:\project\azure-rest-api-specs\specification\compute\resource-manager\Microsoft.Compute\stable\2019-07-01\compute.json
```

---

# Code Generation

## cli

These settings apply only when `--cli` is specified on the command line.

``` yaml $(cli)
cli:
  cli-name: compute
  azure-arm: true
  license-header: MICROSOFT_MIT_NO_VERSION
  payload-flattening-threshold: 2
  namespace: azure.mgmt.compute
  package-name: azure-mgmt-compute
  clear-output-folder: false
  disable-mm: false
  disable-azure-cli: true
```