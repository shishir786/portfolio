export async function downloadCV() {
  const pdfUrl = '/resume.pdf';

  try {
    // Check if the PDF file exists in the public directory
    const response = await fetch(pdfUrl, { method: 'HEAD' });
    if (response.ok) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', 'Md_Abdullah_Shishir_Resume.pdf');
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
  } catch (error) {
    console.warn('PDF resume not found, falling back to text resume. Error:', error);
  }

  // Fallback to beautiful text resume dynamic download
  const content = `===========================================================
MD ABDULLAH SHISHIR - FULL STACK DEVELOPER
===========================================================
Email: abdullahshishir786@gmail.com
Location: Dhaka, Bangladesh
Portfolio: ${window.location.origin}
Expected Graduation: 2025

-----------------------------------------------------------
SUMMARY
-----------------------------------------------------------
Detail-oriented software engineer specializing in scalable 
backend systems and responsive frontend architectures. Focused
on delivering performant, maintainable, and robust code.

-----------------------------------------------------------
EDUCATION
-----------------------------------------------------------
B.Sc. in Computer Science & Engineering (2021 - 2025)
American International University-Bangladesh (AIUB)
Focus: Software engineering, algorithms, architectures,
and data structures.

-----------------------------------------------------------
PROFESSIONAL EXPERIENCE
-----------------------------------------------------------
Trainee Full Stack Developer (Present)
Sparktech Agency
Developing responsive frontends and backend rest services
utilizing modern React, Node.js, and Express stack.

-----------------------------------------------------------
TECHNICAL EXPERTISE
-----------------------------------------------------------
- Frontend: React.js, Next.js, Tailwind CSS, Redux
- Backend: Node.js, Express, NestJS
- Database: PostgreSQL, MongoDB, Prisma
- Languages: JavaScript, TypeScript, C++
- Tools: Git, Docker, Postman, Figma
- Learning focus: AWS, GraphQL, Microservices

-----------------------------------------------------------
CERTIFICATIONS
-----------------------------------------------------------
- AWS Certified Cloud Practitioner (2023)
- Full Stack Open - University of Helsinki (2023)
- React - The Complete Guide - Udemy (2022)
- Backend Development and APIs - freeCodeCamp (2022)

===========================================================
Note: To download your resume as a PDF, simply place your
actual PDF file as "resume.pdf" inside the "/public" folder
of this project. It will automatically detect and download it!
===========================================================
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Md_Abdullah_Shishir_Resume_Fallback.txt');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

