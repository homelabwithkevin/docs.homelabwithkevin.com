---
title: AWS
---

## Common Services and Terms
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
| TGW | Transit Gateway | |

## S3
Source: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html

- Enable Life Cycle rules to delete old versions and move objects between storage tiers
- Enable Object Lock when first creating the bucket to allow you to create a "write once, read many" bucket
  - Governance is when root can override objects
  - Compliance is when no one can override the objects

## VPC Endpoints for S3
Source: https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints-for-s3

| Gateway Endpoint | Interface Endpoint |
| ---------------- | ------------------ |
| Use Amazon S3 Public IP addresses | Use private IP address from your VPC to access Amazon S3 |
| Use the same Amazon S3 DNS Names | Require endpoint-specific Amazon S3 DNS Names |
| Do not allow access from on-premises | Allow access from on-premises |
| Do not allow access from another AWS Region | Allow access from a VPC in another AWS Region by using VPC Peering or AWS Transit Gateway |
| Not Billed | Billed

## Storage Classes
Source: 
- https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html
- https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-compare

| Class | Minimum Storage Duration | Description |
| ----- | ------------------------ | ----------- |
| Standard | None | Default |
| Express One Zone | None | High-performance, single zone |
| Intelligent Tiering | None | Automatically move objects, based on their access pattern. Small overhead cost | 
| Standard-IA | 30-days | Long-lived infrequently accessed data, Minimum storage duration of 30-days |
| One Zone-IA | 30-days | Long-lived infrequently accessed data, Minimum storage duration of 30-days |
| Express One Zone | None | Single AZ for latency-sensitive applications |
| Glacier Instant Retrieval | 90-days | Milisecond retrieval |
| Glacier Flexible Retrieval | 90-days | 1-5 minute access with expedited retrieval, 5-12 hours with bulk retrieval |
| Glacier Deep Archive | 180-days | 12-hour retrieval time |


## EC2
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

## EBS
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

## ELB
Source: https://docs.aws.amazon.com/elasticloadbalancing/

| Load Balancer Type | Description | 
| ------------------ | ----------- |
| Application | Operates at layer 7 of the OSI model |
| Network | Operates at layer 4 of the OSI model |
| Gateway | Operates at layer 3 of the OSI model |
