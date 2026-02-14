import "./Home.css";

function Home() {
  return (
    <div className="home-container animate-in">
      <div className="home-content">
        <h1 className="home-title">Ai powered Healthcare Intelligence System</h1>
        
        <section className="home-section">
          <h2>What is it?</h2>
          <p>
            An advanced medical assistance platform that leverages Artificial Intelligence 
            to provide health insights, symptom assessments, and pharmaceutical information 
            in one cohesive interface.
          </p>
        </section>

        <section className="home-section">
          <h2>Why is it?</h2>
          <p>
            To empower users with preliminary medical knowledge and tools, 
            bridging the gap between initial concerns and professional consultation 
            through state-of-the-art AI analysis.
          </p>
        </section>

        <div className="home-disclaimer">
          <p><strong>Disclaimer:</strong> Your data is not being stored or used for training. 
          This tool provides AI-generated assessments and does not constitute 
          actual medical expertise. Always consider seeing a doctor for final advice.</p>
        </div>

        <div className="home-actions">
          <a href="#" className="github-btn" target="_blank" rel="noopener noreferrer">
            <span>Source Code</span>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.435 9.797 8.188 11.311.6.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      <footer className="home-footer">
        <p>Made by <strong>Shivam, Abhay</strong> and <strong>Yogesh</strong></p>
      </footer>
    </div>
  );
}

export default Home;
