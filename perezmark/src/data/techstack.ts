export interface TechCategory {
  name: string;
  tools: { name: string; logo: string }[];
}

export const techStack: TechCategory[] = [
  {
    name: "Cloud Platforms",
    tools: [
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Huawei", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/252px-Huawei_Standard_logo.svg.png?20190815073546" },
      { name: "DigitalOcean", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
    ],
  },
  {
    name: "CI/CD & Version Control",
    tools: [
      { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Bitbucket", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    ],
  },
  {
    name: "Containerization & Orchestration",
    tools: [
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Istio", logo: "https://raw.githubusercontent.com/cncf/artwork/2fedfc0ff2c021e394a53f92e3b1abe133f5939b/projects/istio/icon/color/istio-icon-color.svg" },
      { name: "Cilium", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cilium_Logo.svg/382px-Cilium_Logo.svg.png?20230403111557" },
      { name: "Karpenter", logo: "https://raw.githubusercontent.com/aws/karpenter-provider-aws/140ab172190d5a1c53d96fbbbedee94f3ae00a1b/website/static/full_logo.svg" },
      { name: "Helm", logo: "https://helm.sh/img/helm.svg" },
      { name: "ArgoCD", logo: "https://argo-cd.readthedocs.io/en/stable/assets/logo.png" },
      { name: "Crossplane", logo: "https://raw.githubusercontent.com/crossplane/artwork/ea00e915bc5d2be45ea775fb2bccce772bcba041/logo/icon.svg" },
      { name: "cert-manager", logo: "https://raw.githubusercontent.com/cert-manager/cert-manager/98b0bc5872688a89c2bd6f607cccc079baf7f6bf/logo/logo.svg" },
    ],
  },
  {
    name: "Infrastructure as Code",
    tools: [
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Terragrunt", logo: "https://seltonfiuza.gallerycdn.vsassets.io/extensions/seltonfiuza/terragrunt-easy-plan/0.1.0/1692128682569/Microsoft.VisualStudio.Services.Icons.Default" },
    ],
  },
  {
    name: "Security & Access Management",
    tools: [
      { name: "Keycloak", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Logo_of_Keycloak.svg/1460px-Logo_of_Keycloak.svg.png?20241003094230" },
      { name: "SonarQube", logo: "https://www.svgrepo.com/show/354365/sonarqube.svg" },
      { name: "Trivy", logo: "https://aquasecurity.github.io/trivy/latest/imgs/logo.png" },
      { name: "Snyk", logo: "https://snyk.io/style/asset/logo/snyk-print.svg" },
    ],
  },
  {
    name: "Artifact Management",
    tools: [
      { name: "Nexus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_of_Sonatype_Nexus_Repository.svg/1334px-Logo_of_Sonatype_Nexus_Repository.svg.png?20240909111743" },
      { name: "Harbor", logo: "https://goharbor.io/img/logos/harbor-icon-color.png" },
    ],
  },
  {
    name: "Monitoring & Observability",
    tools: [
      { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "Loki", logo: "https://grafana.com/static/img/logos/logo-loki.svg" },
      { name: "Thanos", logo: "https://raw.githubusercontent.com/thanos-io/thanos/main/docs/img/Thanos-logo_full.svg" },
      { name: "OpenTelemetry", logo: "https://opentelemetry.io/img/logos/opentelemetry-horizontal-color.svg" },
      { name: "Promtail", logo: "https://grafana.com/static/img/logos/logo-loki.svg" },
      { name: "Tempo", logo: "https://grafana.com/static/assets/img/logos/grafana-tempo.svg" },
      { name: "Mimir", logo: "https://grafana.com/static/img/logos/logo-mimir.svg" },
      { name: "Alloy", logo: "https://grafana.com/media/docs/alloy/alloy_icon.png" },
    ],
  },
  {
    name: "Operating Systems & Web Servers",
    tools: [
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    ],
  },
  {
    name: "Programming & Scripting",
    tools: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
      { name: "YAML", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Official_YAML_Logo.svg/1024px-Official_YAML_Logo.svg.png?20220206165621" },
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    ],
  },
];
