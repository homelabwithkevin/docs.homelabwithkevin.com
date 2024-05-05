---
Title: AWS
---

# Common Services
| Service | Acronym | Description |
| ------- | ------- | ----------- |
| EC2 | Elastic Compute Cloud | Virtual Machines |
| S3 | Simple Storage Service | Blob Storage |
| Cloudfront | | CDN |
| SNS | Simple Notification Service | |
| SQS | Simple Queue Service | |
| ECS | Elastic Container Service | |
| EKS | Elastic Kubernets Service | |
| ECR | Elastic Container Registry | |
| KMS | Key Management Service | |
| Secrets Manager |  | |
| ELB | Elastic Load Balancer | |
| Route53 | | DNS Hosting/Provider | 
| EBS | Elastic Block Storage | Block Storage | 
| EFS | Elastic File System | |

# EC2
Source: https://aws.amazon.com/ec2/instance-types/

| Instance Type | Description |
| ------------- | ----------- |
| t2            | General purpose, uses credits |
| t3            | General purpose, unlimited credits |
| m             | General purpose |
| c             | Compute optimized |
| r             | Memory optimized |

## Instance Stores
Source: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html
Some instance types have instance stores. These are effectively directly attached to the EC2 and are temporary storage. When you stop the EC2, any data on this temporary storage (instance store) is deleted.

