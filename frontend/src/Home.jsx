import "./Home.css";
import { AuroraText } from "@/components/ui/aurora-text";

function Home() {
  return (
    <div className="home-container animate-in">
      <div style={{
        height: "60px",
        backgroundColor: "#edfffe"
      }}></div>
      <div className="home-content">
        <h1 className="home-title">
          <AuroraText colors={["#20ddce", "#125774", "#9f2b2b", "#ff5a58"]}>
            AI powered Healthcare Intelligence System
          </AuroraText>
        </h1>
        
        <section className="home-section">
          <h2>What is it?</h2>
          <p>An intelligent healthcare assistant built using Artificial Intelligence and Machine Learning that:</p>
          <ul className="home-list">
            <li>Performs AI-driven symptom analysis to estimate possible health conditions.</li>
            <li>Provides structured drug information including usage, side effects, and safety warnings.</li>
            <li>Generates personalized health insights based on user inputs and risk factors.</li>
            <li>Conducts image-based skin condition assessment using machine learning models.</li>
            <li>Offers a conversational AI assistant (Medibot) for interactive medical guidance and query resolution.</li>
          </ul>
          <p className="home-note">This platform is designed as a clinical decision-support tool, not a replacement for licensed medical professionals.</p>
        </section>

        <section className="home-section">
          <h2>Why is it?</h2>
          <p>To build a centralized AI-driven system that:</p>
          <ul className="home-list">
            <li>Provides structured symptom analysis</li>
            <li>Offers reliable pharmaceutical information</li>
            <li>Encourages informed medical decisions</li>
            <li>Promotes early health awareness</li>
          </ul>
        </section>

        <div className="home-disclaimer">
          <h3>Disclaimer</h3>
          <p>This platform provides AI-generated health insights intended for informational and educational purposes only.</p>
          <ul className="disclaimer-list">
            <li>It does not provide medical diagnosis.</li>
            <li>It does not replace professional healthcare consultation.</li>
            <li>It should not be used in emergencies.</li>
            <li>Always consult a certified medical professional before making medical decisions.</li>
          </ul>
          <p className="security-note">All user inputs are processed securely. No personal health data is stored without explicit consent.</p>
        </div>

        <div className="home-actions">
          <a href="https://github.com/shivam-paul-19/major_project" className="github-btn" target="_blank" rel="noopener noreferrer">
            <span>Source Code</span>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.435 9.797 8.188 11.311.6.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      <footer className="home-footer">
        <p>Made by <strong><a href="https://www.linkedin.com/in/shivam-paul-545790281/" target="_blank">Shivam</a>, <a href="https://www.linkedin.com/in/abhay-singh-050a5b293/" target="_blank">Abhay</a></strong> and <strong><a href="https://www.linkedin.com/in/yogeshkumar05/" target="_blank">Yogesh</a></strong></p>
      </footer>
    </div>
  );
}

export default Home;