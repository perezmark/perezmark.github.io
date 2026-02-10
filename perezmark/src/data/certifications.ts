export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiry?: string;
}

export const certifications: Certification[] = [
  {
    name: "CKAD: Certified Kubernetes Application Developer",
    issuer: "The Linux Foundation",
    date: "2024",
    expiry: "Apr 2027",
  },
  {
    name: "CKA: Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
    date: "2024",
    expiry: "Mar 2027",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "2023",
    expiry: "Dec 2026",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "2022",
    expiry: "Jun 2025",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    expiry: "Mar 2025",
  },
  {
    name: "Kubernetes and Cloud Native Essentials",
    issuer: "The Linux Foundation",
    date: "2022",
  },
];
