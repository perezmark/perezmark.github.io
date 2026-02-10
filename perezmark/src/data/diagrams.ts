export const diagrams: Record<string, string> = {
  jenkins: `graph TB
    subgraph CI/CD Pipeline
      A["Source Code"] --> B["Jenkins Pipeline"]
      B --> C["Build & Test"]
      C --> D["Security Scan"]
      D --> E["Docker Build"]
      E --> F["Push to ECR"]
      F --> G["Deploy to ECS"]
    end
    subgraph Security
      D --> H["SonarQube"]
      D --> I["Trivy Scan"]
      H --> N["Notifications"]
      I --> N
    end
    subgraph AWS
      F --> J["Amazon ECR"]
      G --> K["Amazon ECS"]
    end`,

  bitbucket: `graph TB
    subgraph Bitbucket Pipeline
      A["Source Code"] --> B["Pipeline Trigger"]
      B --> C["Build & Test"]
      C --> D["Security Checks"]
      D --> E["Docker Build"]
      E --> F["Push to ECR"]
      F --> N["Notifications"]
      N --> G["Deploy to ECS"]
    end
    subgraph AWS Infrastructure
      F --> H["Amazon ECR"]
      G --> I["ECS Service"]
      I --> J["Target Group"]
      J --> K["ALB"]
    end`,

  github: `graph TB
    subgraph GitHub Actions
      A["Source Code"] --> B["Workflow Trigger"]
      B --> C["Build & Test"]
      C --> D["Security Scan"]
      D --> E["Docker Build"]
      E --> F["Push to ECR"]
      F --> N["Notifications"]
      N --> G["Deploy to ECS"]
    end
    subgraph AWS
      F --> H["Amazon ECR"]
      G --> I["ECS Cluster"]
      I --> J["Service"]
      J --> K["Task Definition"]
    end`,

  eks: `graph TB
    subgraph Terraform Infrastructure
      A["Terraform Code"] --> B["VPC"]
      B --> C["EKS Cluster"]
      C --> D["Node Groups"]
      D --> E["Security Groups"]
    end
    subgraph Kubernetes Components
      C --> F["Control Plane"]
      F --> G["Worker Nodes"]
      G --> H["Pods"]
    end
    subgraph AWS Services
      I["IAM Roles"] --> C
      J["KMS"] --> C
      K["CloudWatch"] --> C
    end`,

  aks: `graph TB
    subgraph Terraform Infrastructure
      A["Terraform Code"] --> B["Resource Group"]
      B --> C["Virtual Network"]
      C --> D["AKS Cluster"]
      D --> E["Node Pools"]
    end
    subgraph Azure Services
      F["Azure Monitor"] --> D
      G["Azure KeyVault"] --> D
      H["ACR"] --> D
    end
    subgraph Network
      I["Application Gateway"] --> D
      J["Private Link"] --> D
    end`,

  argocd: `graph LR
    subgraph Git Repositories
      A["App Manifests"] --> B["ArgoCD"]
      C["Config Repos"] --> B
    end
    subgraph ArgoCD
      B --> D["Application Controller"]
      D --> E["Repo Server"]
      E --> F["API Server"]
    end
    subgraph Kubernetes
      F --> G["Deployments"]
      F --> H["Services"]
      F --> I["ConfigMaps"]
    end`,

  karpenter: `graph TB
    subgraph Kubernetes
      A["Pending Pods"] --> B["Karpenter Controller"]
      B --> C["Node Provisioning"]
    end
    subgraph AWS
      C --> D["EC2 Fleet"]
      D --> E["Instance Types"]
      E --> F["Spot/On-Demand"]
    end
    subgraph Monitoring
      G["Prometheus"] --> B
      B --> H["CloudWatch"]
    end`,

  "toast-io": `graph TB
    subgraph Analysis Phase
      A["120+ Spring Boot Microservices"] --> B["Datadog Metrics Collection"]
      B --> C["CPU/Memory Usage Analysis"]
      C --> D["Right-Sizing Recommendations"]
    end
    subgraph Implementation
      D --> E["Resource Request Tuning"]
      E --> F["Resource Limit Adjustment"]
      F --> G["HPA Reconfiguration"]
    end
    subgraph Results
      G --> H["40-60% Cost Savings"]
      G --> I["Improved Pod Scheduling"]
      G --> J["Reduced Node Count"]
    end`,

  "interlink-iq": `graph TB
    subgraph Discovery
      A["AWS Account Audit"] --> B["Trusted Advisor Scan"]
      B --> C["Unused Resource Detection"]
      B --> D["Cost Explorer Analysis"]
    end
    subgraph Optimization
      C --> E["Remove Unused EIPs/EBSs"]
      D --> F["EBS GP2 to GP3 Migration"]
      D --> G["EC2 Right-Sizing"]
    end
    subgraph Savings
      E --> H["Eliminated Waste"]
      F --> I["20% Storage Savings"]
      G --> J["Compute Cost Reduction"]
    end`,

  flowerstore: `graph TB
    subgraph Application
      A["Laravel Microservices"] --> B["API Gateway"]
      B --> C["Order Service"]
      B --> D["Inventory Service"]
      B --> E["Payment Service"]
    end
    subgraph Infrastructure
      C --> F["ECS Fargate"]
      D --> F
      E --> F
      F --> G["ALB"]
    end
    subgraph Networking
      H["Tailscale VPN"] --> C
      H --> D
      H --> E
      I["CI/CD Pipeline"] --> F
    end`,
};
