export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Jenkins CI/CD Pipeline",
    description:
      "Enterprise CI/CD pipeline implementation using Jenkins with automated testing, security scanning, and deployment",
    tags: ["Jenkins", "CI/CD", "Docker", "Infrastructure as Code", "DevOps"],
    link: "/projects/jenkins-pipeline",
  },
  {
    title: "Bitbucket CI/CD Workflow",
    description:
      "Automated deployment pipeline using Bitbucket Pipelines with integrated security scanning and infrastructure deployment",
    tags: ["Bitbucket", "CI/CD", "DevOps", "Infrastructure as Code", "Security"],
    link: "/projects/bitbucket-cicd",
  },
  {
    title: "GitHub Actions Workflow",
    description:
      "Comprehensive CI/CD implementation using GitHub Actions with automated testing, building, and deployment processes",
    tags: ["GitHub Actions", "CI/CD", "DevOps", "Docker", "Infrastructure as Code"],
    link: "/projects/github-actions",
  },
  {
    title: "EKS Infrastructure with Terraform",
    description:
      "Automated deployment of production-grade EKS clusters using Terraform, including VPC, node groups, and security configurations",
    tags: ["AWS EKS", "Terraform", "Kubernetes", "AWS", "Infrastructure as Code"],
    link: "/projects/eks-terraform",
  },
  {
    title: "AKS Infrastructure with Terraform",
    description:
      "Infrastructure as Code implementation for Azure Kubernetes Service with advanced networking, security, and monitoring setup",
    tags: ["Azure AKS", "Terraform", "Kubernetes", "Azure", "Infrastructure as Code"],
    link: "/projects/aks-terraform",
  },
  {
    title: "GitOps with ArgoCD",
    description:
      "Implementation of GitOps practices using ArgoCD for automated application deployment and configuration management",
    tags: ["ArgoCD", "GitOps", "Kubernetes", "CI/CD", "Infrastructure as Code"],
    link: "/projects/argocd-gitops",
  },
  {
    title: "Karpenter Node Scaling",
    description:
      "Implementing efficient node scaling in Kubernetes clusters using Karpenter for optimized resource utilization",
    tags: ["Karpenter", "Kubernetes", "AWS", "Auto Scaling", "Infrastructure"],
    link: "/projects/karpenter-scaling",
  },
  {
    title: "Laravel ECS Deployment",
    description:
      "Deploy Laravel applications to AWS ECS using GitLab CI/CD, containerization with Docker, and infrastructure as code using Terraform",
    tags: ["AWS ECS", "Laravel", "Docker", "Terraform", "GitLab CI/CD"],
    link: "/projects/laravel-ecs",
  },
];
