import React from "react";

function Footer({ resume }) {
  const handleDownload = () => {
    if (resume) {
      const url = URL.createObjectURL(resume);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf"; // Set the desired filename
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a); 
      URL.revokeObjectURL(url);
    }
  };
  return (
    <div>
      <h2>Download Resume</h2>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
}

export default Footer;
