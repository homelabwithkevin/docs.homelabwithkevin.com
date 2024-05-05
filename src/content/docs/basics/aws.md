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

# Instance Stores
Source: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html
Some instance types have instance stores. These are effectively directly attached to the EC2 and are temporary storage. When you stop the EC2, any data on this temporary storage (instance store) is deleted.

# EBS
Source: 
- https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html
- https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html

There are a few different types of EBS volumes. Each have their performance and cost pros and cons. EBS Volumes can be `snapshotted`, very similar to VMWare Snapshots.

| Volume Type | Description | 
| ----------- | ----------- |
| gp3         | Solid state drive |
| gp2         | Solid state drive |
| io1         | Solid state drive |
| st1         | Hard disk drive |
| sc1         | Hard disk drive |