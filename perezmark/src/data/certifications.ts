export interface Certification {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  expiry?: string;
}

export const certifications: Certification[] = [
  {
    name: "CKAD: Certified Kubernetes Application Developer",
    issuer: "The Linux Foundation",
    date: "2024",
    logo: "https://www.cncf.io/wp-content/uploads/2021/09/kubernetes-ckad-color.svg",
    expiry: "Apr 2027",
  },
  {
    name: "CKA: Certified Kubernetes Administrator",
    issuer: "The Linux Foundation",
    date: "2024",
    logo: "https://www.cncf.io/wp-content/uploads/2021/09/kubernetes-cka-color.svg",
    expiry: "Mar 2027",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "2023",
    logo: "https://d1.awsstatic.com/certification/badges/AWS-Certified-Developer-Associate_badge_150x150.a8973e238efb2d1b0b24f5282e1ad87eb554e6ef.png",
    expiry: "Dec 2026",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "2022",
    logo: "https://d1.awsstatic.com/certification/badges/AWS-Certified-Solutions-Architect-Associate_badge_150x150.e359ae4a6d4d82c3e31d4f9104c8d389b56a2423.png",
    expiry: "Jun 2025",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    logo: "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    expiry: "Mar 2025",
  },
  {
    name: "Kubernetes and Cloud Native Essentials",
    issuer: "The Linux Foundation",
    date: "2022",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
];
