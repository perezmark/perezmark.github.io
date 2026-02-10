export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    title: "Cloud Landing Zone Creation",
    description:
      "Design and implementation of secure, scalable cloud landing zones following industry best practices and organizational requirements.",
    features: [
      "Multi-account architecture design",
      "Security controls and compliance",
      "Network architecture setup",
      "Identity and access management",
      "Governance and guardrails",
    ],
    icon: "Cloud",
  },
  {
    title: "CI/CD Pipeline Implementation",
    description:
      "Design and implementation of secure CI/CD pipelines with integrated security controls, vulnerability scanning, and compliance checks using industry-leading tools.",
    features: [
      "Multi-environment pipeline setup",
      "SAST, DAST & container security scanning",
      "Secrets management & access control",
      "Automated testing and quality gates",
      "Secure deployment strategies",
    ],
    icon: "GitBranch",
  },
  {
    title: "Cloud Cost Optimization",
    description:
      "Comprehensive analysis and optimization of cloud infrastructure costs across AWS, Azure, and GCP to reduce spending while maintaining performance.",
    features: [
      "Resource utilization analysis",
      "Cost allocation and tagging strategies",
      "Reserved instance optimization",
      "Workload right-sizing",
      "Budget alerts and forecasting",
    ],
    icon: "DollarSign",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Design and implementation of infrastructure using modern IaC tools to ensure consistency, version control, and automated provisioning of cloud resources.",
    features: [
      "Terraform module development",
      "Multi-environment setup",
      "State management",
      "Custom provider development",
      "Infrastructure testing",
    ],
    icon: "Code",
  },
  {
    title: "Platform Architecture Design",
    description:
      "Expert design and implementation of scalable, secure cloud-native platforms and tooling ecosystems tailored to your organization's needs.",
    features: [
      "Kubernetes platform design",
      "Microservices architecture",
      "Security architecture",
      "Monitoring and observability",
      "Disaster recovery planning",
    ],
    icon: "Layers",
  },
  {
    title: "Infrastructure Security Assessment",
    description:
      "Comprehensive security assessment of cloud infrastructure, Kubernetes clusters, and CI/CD pipelines to identify vulnerabilities and improve security posture.",
    features: [
      "Cloud infrastructure security audit",
      "Kubernetes security assessment",
      "Compliance gap analysis",
      "Security best practices review",
      "Remediation roadmap",
    ],
    icon: "ShieldCheck",
  },
];
