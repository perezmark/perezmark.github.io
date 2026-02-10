export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Jenkins CI/CD Pipeline",
    description:
      "Enterprise CI/CD pipeline implementation using Jenkins with automated testing, security scanning, and deployment",
    link: "/projects/jenkins-pipeline",
  },
  {
    title: "Bitbucket CI/CD Workflow",
    description:
      "Automated deployment pipeline using Bitbucket Pipelines with integrated security scanning and infrastructure deployment",
    link: "/projects/bitbucket-cicd",
  },
  {
    title: "GitHub Actions Workflow",
    description:
      "Comprehensive CI/CD implementation using GitHub Actions with automated testing, building, and deployment processes",
    link: "/projects/github-actions",
  },
  {
    title: "EKS Infrastructure with Terraform",
    description:
      "Automated deployment of production-grade EKS clusters using Terraform, including VPC, node groups, and security configurations",
    link: "/projects/eks-terraform",
  },
  {
    title: "AKS Infrastructure with Terraform",
    description:
      "Infrastructure as Code implementation for Azure Kubernetes Service with advanced networking, security, and monitoring setup",
    link: "/projects/aks-terraform",
  },
  {
    title: "GitOps with ArgoCD",
    description:
      "Implementation of GitOps practices using ArgoCD for automated application deployment and configuration management",
    link: "/projects/argocd-gitops",
  },
  {
    title: "Karpenter Node Scaling",
    description:
      "Implementing efficient node scaling in Kubernetes clusters using Karpenter for optimized resource utilization",
    link: "/projects/karpenter-scaling",
  },
  {
    title: "Laravel ECS Deployment",
    description:
      "Deploy Laravel applications to AWS ECS using GitLab CI/CD, containerization with Docker, and infrastructure as code using Terraform",
    link: "/projects/laravel-ecs",
  },
];
