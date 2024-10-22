const services = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Simulating real-world attacks to identify vulnerabilities in your systems before hackers can exploit them."
    },
    {
      icon: Globe,
      title: "Web Application Security",
      description: "Comprehensive testing of web apps to ensure they are protected against vulnerabilities such as SQL injection, XSS, and more."
    },
    {
      icon: Network,
      title: "Network Security Assessment",
      description: "Identifying weaknesses in your network infrastructure and securing your internal and external network layers."
    },
    {
      icon: Cloud,
      title: "Cloud Security Testing",
      description: "Evaluating cloud environments to ensure they meet the highest security standards."
    },
    {
      icon: Smartphone,
      title: "Mobile App Security",
      description: "Testing mobile apps to prevent data leaks, unauthorized access, and other threats."
    },
    {
      icon: FileText,
      title: "Consulting & Security Audits",
      description: "Tailored advice and audits to ensure that your security practices are up-to-date."
    }
  ]

let a = services.map((key, value) => {
    return [key, value]
})

console.log(a)