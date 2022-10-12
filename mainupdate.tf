terraform {
  required_providers {
    IBM = {
      source  = "CLUSTER2"
      version = "1.21.11"
    }
  }
}
resource "ibm_resource_group" "Global-Event-Solution-Tools-Suite" {
  name = "Global-Event-Solution-Tools-Suite"
}

provider "Global-Event-Solution-Tools-Suite" {
  ibmcloud_api_key = "Key 2"
  region           = "us-south"
}

resource "ibm_container_cluster" "CLUSTER2" {
  name              = "CLUSTER2"
  datacenter        = "Data Center 2"
  hardware          = "hardware 2"
  default_pool_size = "Pool size 2"
  kube_version      = "1.21.11"
}
