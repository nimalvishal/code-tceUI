import React from 'react'
import { Link } from 'react-router-dom';
import ListItem from '../Futurecomponents/components/list-item'
import Question1 from '../Futurecomponents/components/question11'
import Listbar from '../Futurecomponents/components/listbar'
import './leaderboard.css'
import "./Homepage.css";
export const LeaderBoard = (props) => {
  const handleFaqClick = () => {
    // Scroll to the FAQ section
    const faqSection = document.getElementById('home-faq');
    faqSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (

    <div className='homepg'>
      <nav style={{ margin: "15px" }}>
        <div className="intro" style={{ width: "100%", marginTop: "-16px", marginLeft: "-15px" }}>
          <h1 className='hed' style={{ width: "150px", marginLeft: "40px" }}>Code Hub</h1>
          <div className='lnk' style={{ marginLeft: "320px" }}>
            <Link to="/Homepage">Home</Link>
            <Link to="/Challenge">Challenges</Link>
            <Link to="/LeaderBoard">LeaderBoard</Link>
            <Link onClick={handleFaqClick}>FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Link to="/LoginPage" className='log'> Login </Link>
        </div>
      </nav>
      <div className="leaderboard-container">
        <div className="leaderboard-hero">
          <div className="leaderboard-hero1 heroContainer">
            <div className="leaderboard-leaderboard">
              <ul className="leaderboard-ul list">
                <ListItem
                  text1="25"
                  text5='Medium'
                  rootClassName="list-item-root-class-name"
                ></ListItem>
                <ListItem
                  text="Thiyagu"
                  text1="18"
                  text3="2."
                  text4={4}
                  rootClassName="list-item-root-class-name1"
                ></ListItem>
                <ListItem
                  text="Sibhi"
                  text1="17"
                  text3="3."
                  text4={3.8}
                  rootClassName="list-item-root-class-name2"
                ></ListItem>
                <ListItem
                  text="Suriya"
                  text1="15"
                  text3="4."
                  text4={3}
                  rootClassName="list-item-root-class-name3"
                ></ListItem>
                <ListItem
                  text="Chandra"
                  text1="13"
                  text3="5."
                  text4={2.8}
                  rootClassName="list-item-root-class-name4"
                ></ListItem>
              </ul>
              <div className="leaderboard-leaderrow">
                <h1 className="leaderboard-hero-heading heading1">
                  {' '}
                  Leaderboard
                </h1>
                <span className="leaderboard-hero-sub-heading">
                  The leaderboard will rank participants based on their coding
                  skills and problem-solving abilities.
                </span>
              </div>
              <span className="leaderboard-text">
                <span>Rank</span>
                <br></br>
                <br></br>
                <br></br>
              </span>
              <span className="leaderboard-text04">Name</span>
              <span className='leaderboard-text07'>Category</span>
              <span className="leaderboard-text05">Points</span>
              <svg viewBox="0 0 1024 1024" className="leaderboard-icon10">
                <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM480 928c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384zM512 512v-128h128v-64h-128v-64h-64v64h-128v256h128v128h-128v64h128v64h64v-64h128.002l-0.002-256h-128zM448 512h-64v-128h64v128zM576.002 704h-64.002v-128h64.002v128z"></path>
              </svg>
              <t><span className="leaderboard-text06">Credits</span></t>
            </div>
          </div>
        </div>
        <div className='bar'>
          <Listbar>
          </Listbar>
        </div>
        <div className="leaderboard-banner">
          <div className="bannerContainer leaderboard-banner1">
            <h1 className="leaderboard-banner-heading heading2">
              Compete, Learn, and Win
            </h1>
            <span className="leaderboard-banner-sub-heading bodySmall">
              <span>
                <span>
                  <span>
                    Join our community of passionate coders and showcase your
                    problem-solving skills. Compete in coding challenges, learn
                    from top performers, and win exciting prizes. Let your code
                    speak for itself!
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
            <button className="buttonFilled" ><Link to="/Challenge">Explore Challenges</Link></button>
          </div>
        </div>
        <div id="home-faq">
          <div className="faqContainer">
            <div className="home-faq1">
              <div className="home-container28">
                <span className="overline">
                  <span style={{ background: "#272727" }}>FAQ</span>
                  <br></br>
                </span>
                <h2 className="home-text84 heading2">Common questions</h2>
                <span className="home-text85 bodyLarge">
                  <span style={{ background: "#272727" }}>
                    Here are some of the most common questions that we get.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container29">
                <Question1
                  answer="You can participate by signing up on our platform and solving coding challenges to earn points."
                  question="How can I participate in the code solving leaderboard?"
                ></Question1>
                <Question1
                  answer="Yes, top performers on the leaderboard may be eligible for prizes or rewards."
                  question="Are there any prizes for the top performers on the leaderboard?"
                ></Question1>
                <Question1
                  answer="The leaderboard is updated regularly, typically on a daily or weekly basis."
                  question="How often is the leaderboard updated?"
                ></Question1>
                <Question1
                  answer="Yes, you can view your ranking and compare it to other participants on the leaderboard."
                  question="Can I see my ranking compared to other participants?"
                ></Question1>
                <Question1
                  answer="There is no limit to the number of challenges you can solve to earn points and improve your ranking on the leaderboard."
                  question="Is there a limit to the number of challenges I can solve to earn points?"
                ></Question1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
