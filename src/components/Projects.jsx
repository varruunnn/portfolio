import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Gaming Website</h3>
          <img src="" alt="" />
                    <p>
                      At <strong>BigGameWars</strong>, we bring the most
                      intense online tournaments for <span style={{ color: "#FF4655" }}>Valorant</span> and{" "}
                      <span style={{ color: "#00A896" }}>BGMI</span> players who are hungry for victory.
                      <strong>
                        {" "}
                        Secure your spot, sharpen your skills, and get ready to dominate—because at BigGameWars, every
                        match could makse you a legend.
                        <br />
                        NOTE: Payment is under development but you can check the website ":)".
                        <br />
                        FOR MORE CHECKOUT READMEfile
                        <br />
                        MADE WITH MERN STACK
                      </strong>
                    </p>

          <a className="links" href="https://github.com/varruunnn/GamingArena">GITHUB</a>
          <a className="links" href="https://biggamewars.com">DEMO</a>
        </div>
        <div className="project-card">
          <h3>Video Player</h3>
          <img src="" alt="" />
          <p>🚀 Just built a video player app with MERN & MongoDB! 🎬 Upload, play, and your videos stay saved even after reloading with all videoplayer features (eg double click fullscreen etc). Check it out!</p>
          <a className="links" href="https://github.com/varruunnn/videoPlayer">GITHUB</a>
          <a className="links" href="https://private-user-images.githubusercontent.com/143994029/384676413-0fc14560-7dbe-416e-b7e8-2dd09665d8cf.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQ4NjUwODMsIm5iZiI6MTczNDg2NDc4MywicGF0aCI6Ii8xNDM5OTQwMjkvMzg0Njc2NDEzLTBmYzE0NTYwLTdkYmUtNDE2ZS1iN2U4LTJkZDA5NjY1ZDhjZi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIyMlQxMDUzMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MzdlMDQyMTMzNzgyMWI1YTcwYTU1N2Y3MGMxYjU3ZTdhNzUwMjI3ODIwNTJmM2UzZThlZDMwMmNhOWZhYjk0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.NzFUhTicKg2DsLiVhHQfAzZvz8NP7SXtT0hZCb0MDoM">DEMO</a>
        </div>
        <div className="project-card">
          <h3> Weather App</h3>
          <img src="" alt="" />
          <p>Just launched my weather app built with #React #MERN in this it can by this I have Learned about async API calls & managing state and Dynamic UI updates based on weather conditions</p>
          <a className="links" href="https://github.com/varruunnn/WeatherApp/tree/main">GITHUB</a>
          <a className="links" href="https://t.co/DCwFwRwNcF">DEMO</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
