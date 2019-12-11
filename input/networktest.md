# Network

> see https://aka.ms/autorest

This is the AutoRest configuration file for Network.

---

## Getting Started

To build the SDK for Network, simply [Install AutoRest](https://aka.ms/autorest/install) and in this folder, run:

> `autorest`
 
To see additional help and options, run:

> `autorest --help`

---

## Configuration

### Basic Information

These are the global settings for the Network API.

``` yaml
openapi-type: arm
```

### All included files should be added here

``` yaml
input-file:
  - d:\project\azure-rest-api-specs\specification\network\resource-manager\Microsoft.Network\stable\2018-11-01\azureFirewall.json
```

---

# Code Generation

## cli

These settings apply only when `--cli` is specified on the command line.

``` yaml $(cli)
cli:
  cli-name: network
  azure-arm: true
  license-header: MICROSOFT_MIT_NO_VERSION
  payload-flattening-threshold: 2
  namespace: azure.mgmt.network
  package-name: azure-mgmt-network
  clear-output-folder: false
  adjustments:
    "/properties/ipconfigurations/properties/subnet": "*/"
    "/properties/ipconfigurations/properties/publicipaddress": "*/"
    "/properties/networkrulecollections/id": "hide"
    "/properties/natrulecollections/id": "hide"
    "/properties/applicationrulecollections/id": "hide"
    "/properties/applicationrulecollections/properties/action/type": "/*"
    "/properties/ipconfigurations/id": "hide"
    "/id":
      response: true
    "/properties/provisioningstate":
      response: true
    "/etag":
      response: false
    "/name":
      response: false
    "/type":
      response: false
  debug: true
  disable-mm: false
  disable-azure-cli: true
```
