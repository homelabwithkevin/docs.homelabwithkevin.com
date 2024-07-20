---
title: API Gateway with yt-dlp
---

## Introduction

I'll be developing an API for retrieving information about a YouTube Channel or a YouTube Video.

You'll want to have and be familiar with the below technologies:
- AWS
- Python

And here's the software we'll be using:

- AWS
- API Gateway
- DynamoDB
- Lambda
- GitHub Copilot
- Python Packages
    - aws-sam-cli
    - Flask
    - yt-dlp

## Environment Setup
- python3 –m venv env
- pip install aws-sam-cli yt-dlp
- Get AWS credentials

## Basic Usage of yt-dlp with Flask
1. What information does the library retrieve?
2. What fields do we want?

## Create Initial Infrastructure
- sam init
- sam deploy

## Code Local Version for Flask
- Support query parameters
    - channel_id
    - video_id

## Add DynamoDB
- Create resource
- Update permissions

## Use Database
- Support below actions
    - scan
    - put_item
    - get_item

## Convert to AWS API Gateway
- Create resource
- Migrate code to lambda_handler

## Basic Security for AWS API Gateway
- Restrict by IP address
- Restrict by header

## Future Enhancements
- Create a Frontend (htmx, NextJS, Astro)
- Setup Authentication
    - AWS Cognito
    - Clerk
    - Supabase