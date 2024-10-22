const services = [
    {
      title: "Penetration Testing",
      description: "Simulating real-world attacks to identify vulnerabilities in your systems before hackers can exploit them."
    },

    {

      title: "Web Application Security",
      description: "Comprehensive testing of web apps to ensure they are protected against vulnerabilities such as SQL injection, XSS, and more."
    },
    {

      title: "Network Security Assessment",
      description: "Identifying weaknesses in your network infrastructure and securing your internal and external network layers."
    },
    {

      title: "Cloud Security Testing",
      description: "Evaluating cloud environments to ensure they meet the highest security standards."
    },
    {

      title: "Mobile App Security",
      description: "Testing mobile apps to prevent data leaks, unauthorized access, and other threats."
    },
    {

      title: "Consulting & Security Audits",
      description: "Tailored advice and audits to ensure that your security practices are up-to-date."
    }
  ]

let a = services.map((value, key) => (
    [key, value.title, value.description]
)

console.log(a)