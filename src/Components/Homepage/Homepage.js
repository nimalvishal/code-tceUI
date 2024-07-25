import React from 'react';
import { Link } from 'react-router-dom';
import "./Homepage.css";
import FeatureCard from '../Featurecard/feature-card';
import Question1 from '../Featurecard/question1';

export const Homepage = () => {
  const handleFaqClick = () => {
    // Scroll to the FAQ section
    const faqSection = document.getElementById('home-faq');
    faqSection.scrollIntoView({ behavior: 'smooth' });
  };
    return (
        <div className='homepg'>
          <div className='top'>
            <nav style={{ marginTop: '-97px' }}>
                <div className="intro" style={{width:"100%"}}>
                <h1 className='hed'>Code Hub</h1>
                <div className='lnk'style={{marginLeft:"388px"}}>
                    <Link to="#">Home</Link> 
                    <Link to="/Challenge">Challenges</Link> 
                    <Link to="/LeaderBoard">LeaderBoard</Link> 
                    <Link onClick={handleFaqClick}>FAQ</Link> 
                    <Link to="/Contact">Contact</Link>
                </div>
                <Link to="/Loginpage" className='log' style={{marginRight:" 128px",marginLeft:"372px"}}> Login </Link> 
                </div>
            </nav>
          </div>
            <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              TCE_CSE_CodeChallenge_Hub
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Interactive Coding Problem-Solving for Students</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <Link to="/Challenge" className="buttonFilled">Join the Challenge Now!</Link>
              <Link to="/Learn" className="buttonFlat">Learn More →</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <h2 className="home-features-heading heading2">
                Empowering Features for Code Challenge Hub
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Elevate your coding journey with our innovative features
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <Link to="/Challenge">
              <FeatureCard
                heading="Problem-Solving"
                subHeading="Join our platform and engage in real-time coding challenges to enhance your skills and elevate your expertise"
              ></FeatureCard></Link>
              <Link to="/Leaderboard">
              <FeatureCard
                heading="Leaderboard"
                subHeading="Compete with peers and monitor your progress in real-time through a dynamic live leaderboard."
              ></FeatureCard></Link>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div id="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container28">
              <span className="overline">
                <span style={{background:"#272727"}}>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text84 heading2">Common questions</h2>
              <span className="home-text85 bodyLarge">
                <span style={{background:"#272727"}}>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container29">
              <Question1
                answer="To participate in coding challenges, simply create an account on the platform and start solving the available problems."
                question="How can I participate in coding challenges on TCE_CSE_CodeChallenge_Hub?"
              ></Question1>
              <Question1
                answer="Yes, you can view your ranking on the dynamic leaderboard that showcases top performers within the student community."
                question="Can I view my ranking on the leaderboard?"
              ></Question1>
              <Question1
                answer="Yes, the coding problems are updated regularly to provide fresh challenges for students to solve."
                question="Are the coding problems on TCE_CSE_CodeChallenge_Hub updated regularly?"
              ></Question1>
              <Question1
                answer="Yes, you can track your progress by monitoring your performance on coding challenges and comparing it with other students."
                question="Is there a way to track my progress on the platform?"
              ></Question1>
              <Question1
                answer="Yes, you can seamlessly integrate your HackerRank account with TCE_CSE_CodeChallenge_Hub to enhance your coding experience."
                question="Can I connect my HackerRank account to TCE_CSE_CodeChallenge_Hub?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>

        </div>
        )
};
