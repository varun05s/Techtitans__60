import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>About Us</h2>
      <p>
        Community-based crime prevention is a website that strategizes and involves residents 
        and organizations in efforts to reduce crime and enhance public safety. The core idea 
        is that the community itself plays an active role in identifying and addressing the root 
        causes of criminal behavior, promoting social cohesion, and fostering a sense of 
        responsibility for the well-being of the neighborhood.
      </p>

      <h3>Disclaimer</h3>
      <ul>
        <li>The information provided is for general informational purposes only.</li>
        <li>It does not constitute professional advice or guarantee crime reduction.</li>
        <li>Crime prevention strategies should be customized to each community's needs.</li>
        <li>Consult with law enforcement, legal experts, or relevant authorities before implementing any initiatives.</li>
        <li>Effectiveness may vary due to social, economic, and environmental factors.</li>
        <li>We are not liable for any actions taken based on this information.</li>
      </ul>
    </section>
  );
};

export default AboutUs;
