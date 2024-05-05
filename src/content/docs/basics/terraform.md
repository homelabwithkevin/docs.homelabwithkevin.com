---
title: Terraform
---

Sources: 
- https://github.com/devops-cheat-sheets/terraform-cheat-sheet
- https://www.pluralsight.com/resources/blog/cloud/the-ultimate-terraform-cheatsheet

| Command | Description | Example |
| --------- | ------------------ | ---- |
| terraform init | Initialize working directory (install modules, providers) | |
| terraform plan | Create execution plan | |
| terraform apply | Applies changes to reach desired state | |
| terraform apply -target=<resource> | Apply specific resource/target | |
| terraform apply -auto-approve | Applies changes, no approval required | |
| terraform fmt | Format .tf files | |
| terraform import <resource> | Import existing infrastracture into Terraform State | |
| terraform output | Show output variables from Terraform State | |
| terraform state | Advanced Terraform State Management | |