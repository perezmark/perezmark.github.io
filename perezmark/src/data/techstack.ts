export interface TechCategory {
  name: string;
  tools: string[];
}

export const techStack: TechCategory[] = [
  {
    name: "Cloud",
    tools: ["AWS", "Azure", "GCP", "Huawei", "DigitalOcean"],
  },
  {
    name: "CI/CD & Version Control",
    tools: ["GitLab", "GitHub", "Jenkins", "Bitbucket"],
  },
  {
    name: "Containers & Orchestration",
    tools: ["Kubernetes", "Docker", "Istio", "Cilium", "Karpenter", "Helm", "ArgoCD", "Crossplane", "cert-manager"],
  },
  {
    name: "Infrastructure as Code",
    tools: ["Terraform", "Terragrunt"],
  },
  {
    name: "Security",
    tools: ["Keycloak", "SonarQube", "Trivy", "Snyk"],
  },
  {
    name: "Artifacts",
    tools: ["Nexus", "Harbor"],
  },
  {
    name: "Monitoring & Observability",
    tools: ["Prometheus", "Grafana", "Loki", "Thanos", "OpenTelemetry", "Promtail", "Tempo", "Mimir", "Alloy"],
  },
  {
    name: "OS & Web Servers",
    tools: ["Linux", "Nginx"],
  },
  {
    name: "Languages",
    tools: ["Python", "Bash", "JavaScript", "Go", "YAML", "HCL"],
  },
];
