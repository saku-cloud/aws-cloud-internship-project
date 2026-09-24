AWS Cloud Internship Project

Custom VPC + EC2 Web Application + S3 Storage + IAM Roles + CloudWatch Monitoring + Automated Backup & Cost Control

A hands-on AWS Cloud project completed as part of my AWS Internship at Internship Studio.

The project demonstrates the deployment, security, monitoring, backup, and cost-control aspects of a cloud-based web application using core AWS services.

---

📌 Project Overview

This project implements an AWS cloud environment consisting of:

- Custom VPC and public subnet
- Internet Gateway and route table
- EC2 Linux web server
- Apache web server
- Student Portal web application
- Amazon S3 storage
- IAM users, groups, policies, and EC2 IAM role
- CloudWatch monitoring and alarms
- Amazon SNS email notifications
- EBS snapshot backup and restore validation
- AWS Budget for cost monitoring
- Web access log dataset and Python analysis
- Least-privilege access testing

The project was designed with AWS Free Tier and cost-control considerations in mind.

---

🏗️ Architecture

"AWS Architecture" (architecture/aws-architecture.png)

Architecture Flow

                         INTERNET
                             │
                             ▼
                    ┌─────────────────┐
                    │ Internet Gateway│
                    └────────┬────────┘
                             │
                             ▼
              ┌──────────────────────────┐
              │      Custom VPC           │
              │      10.0.0.0/16          │
              │                           │
              │   Public Subnet           │
              │   10.0.1.0/24             │
              │        │                  │
              │        ▼                  │
              │   ┌──────────────┐        │
              │   │ EC2 Ubuntu   │        │
              │   │ Apache       │        │
              │   │ Student      │        │
              │   │ Portal       │        │
              │   └──────┬───────┘        │
              │          │                │
              └──────────┼────────────────┘
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
          Amazon S3             IAM Role
              │                     │
              └──────────┬──────────┘
                         │
                    CloudWatch
                         │
                         ▼
                       SNS
                         │
                         ▼
                    Email Alerts

              EC2 EBS ──► Snapshot
              
              AWS Budget ──► Cost Monitoring

---

☁️ AWS Services Used

AWS Service| Purpose
Amazon VPC| Custom network environment
Amazon EC2| Linux web server
Amazon S3| Project storage
AWS IAM| Identity and access management
Amazon CloudWatch| Monitoring and alarms
Amazon SNS| Email notifications
Amazon EBS| EC2 storage and backup
AWS Budgets| Cost monitoring
Internet Gateway| Internet connectivity
Route Tables| Network routing
Security Groups| Instance-level network security

---

🔐 IAM & Security

The project follows the principle of least privilege.

IAM Components

- "InternDevelopers" IAM group
- "CloudOperators" IAM group
- "sakshi-cloud-admin" IAM user
- "InternshipProjectPolicy"
- "InternshipEC2S3Role"
- "InternshipS3AccessPolicy"

The EC2 instance uses an IAM role to access the project S3 bucket without storing AWS access keys on the server.

Least-Privilege Validation

The EC2 instance successfully:

- Listed the project S3 bucket
- Uploaded an object to the project bucket
- Accessed permitted S3 resources

An access attempt against an unrelated S3 bucket returned:

AccessDenied

This demonstrated restricted S3 permissions.

---

🌐 Network Configuration

VPC

VPC CIDR: 10.0.0.0/16

Public Subnet

Subnet CIDR: 10.0.1.0/24
Availability Zone: ap-south-1a

Internet Gateway

The Internet Gateway provides internet connectivity to the public subnet.

Route Table

Destination: 0.0.0.0/0
Target: Internet Gateway

Security Group

Inbound access:

HTTP - Port 80 - 0.0.0.0/0
SSH  - Port 22 - Administrator IP (/32)

---

🖥️ EC2 Web Server

The project uses an Ubuntu Linux EC2 instance running Apache.

Configuration

Instance Type: t3.micro
Operating System: Ubuntu
Root Volume: 8 GiB gp3
Region: ap-south-1 (Mumbai)

Student Portal

The web application contains:

student-portal/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── web-access-logs.csv

Health Check

A dedicated health endpoint was implemented:

/student-portal/health

The endpoint returned:

HTTP 200 OK

with:

OK - AWS Internship Student Portal is healthy

---

🪣 Amazon S3

Project bucket:

internship-aws-project-sakshi-2026

Security configuration:

- Block Public Access enabled
- Bucket Owner Enforced
- Private bucket
- Default S3-managed encryption

The EC2 IAM role provides controlled access to the project bucket.

---

📊 CloudWatch Monitoring

Two CloudWatch alarms were configured.

High CPU Alarm

Metric: CPUUtilization
Statistic: Average
Period: 5 minutes
Threshold: > 70%

EC2 Status Check Alarm

Metric: StatusCheckFailed
Statistic: Maximum
Period: 5 minutes
Threshold: >= 1

Both alarms were configured to send notifications through:

InternshipProject-Alerts

---

📧 Amazon SNS

An email subscription was configured for project alerts.

The subscription was confirmed successfully.

CloudWatch alarms can therefore notify the configured email endpoint when monitored conditions are triggered.

---

💾 EBS Backup & Restore

An EBS snapshot was created for the project EC2 instance.

Snapshot:

InternshipProject-EC2-Backup

A temporary EBS volume was restored from the snapshot to validate the restore process.

After validation, the temporary restored volume was deleted to avoid unnecessary resource usage.

---

💰 Cost Control

The project was designed with cost awareness.

AWS Budget

Budget: InternshipProject-Monthly-Budget
Amount: $1/month
Alert: 80% actual spend

The budget provides an early warning for unexpected AWS charges.

Cost-Control Measures

- No NAT Gateway
- No Load Balancer
- No RDS
- No Auto Scaling
- Small S3 storage
- One project EC2 instance
- One EBS backup snapshot
- Temporary restored EBS volume removed
- Budget alert configured

---

📈 Web Access Log Analysis

A 500-row sample web access log dataset was analyzed using Python.

Dataset fields:

timestamp
ip
method
path
status
bytes
user_agent

Analysis Results

Total Requests: 500
4xx Errors: 21
5xx Errors: 6
Unique IP Addresses: 35
Peak Traffic Hour: 16:00 - 16:59
Peak Requests: 63

Top 5 Requested Paths

Path| Requests
"/"| 82
"/health"| 59
"/architecture"| 56
"/student-portal/"| 55
"/projects"| 54

The analysis script is available at:

scripts/analyze_logs.py

---

📸 Project Evidence

Implementation screenshots are available in:

screenshots/

The evidence covers:

1. IAM security configuration
2. IAM group and policy
3. EC2 IAM role and S3 policy
4. Custom VPC
5. Public subnet
6. Route table and Internet Gateway
7. Security Group
8. EC2 configuration
9. Student Portal
10. S3 storage
11. CloudWatch alarms
12. SNS subscription
13. EBS snapshot
14. AWS Budget
15. S3 least-privilege test
16. Health check
17. Log analysis
18. EC2 resource check
19. Free Tier and billing check

---

📜 Internship Certifications

As part of the AWS Internship, I received two certificates from Internship Studio:

AWS Training Certificate

Certificate confirming completion of the AWS Internship training at iStudio.

AWS Internship Completion Certificate

Certificate confirming completion of the AWS Internship at Internship Studio from 25 May 2026 to 27 September 2026.

Certificates are stored in:

certificates/
├── AWS_Cloud_Training_Certificate.pdf
└── AWS_Cloud_Internship_Completion_Certificate.pdf

---

📚 Documentation

Detailed project documentation is available in:

documentation/

Contents include:

- Complete project report
- Project documentation in PDF format
- Project documentation in Word format

---

🧠 Skills Demonstrated

Through this project, I practiced:

- AWS VPC networking
- Linux server administration
- Apache web server configuration
- IAM and least-privilege access
- EC2 administration
- S3 storage management
- CloudWatch monitoring
- SNS notifications
- EBS backup and restore
- AWS cost management
- Python log analysis
- Troubleshooting
- Cloud security fundamentals
- Infrastructure documentation

---

🎯 Project Outcome

The AWS Cloud Internship project was successfully implemented, documented, submitted, and approved by Internship Studio.

The project provided practical experience in designing, deploying, monitoring, securing, backing up, and managing a cloud-based web application on AWS.

---

👩‍💻 Author

Sakshi Nangare

BCS Student | AWS Cloud | Linux | DevOps

GitHub: "Saku-cloud" (https://github.com/Saku-cloud)

LinkedIn: "Sakshi Nangare" (https://linkedin.com/in/sakshi-nangare-406b51363)

---

🔒 Security Notice

This repository does not contain:

- AWS access keys
- AWS secret keys
- Passwords
- Private SSH keys
- Authentication tokens
- Sensitive credentials

Sensitive account information should be redacted from screenshots before publishing.