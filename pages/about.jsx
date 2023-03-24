import styles from '../styles/AboutPage.module.css';


const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br />
      <p>
        Web designer from Gujarat, India. I have rich experience in website design and building, also I am good at Django and WordPress.
        I love to talk with you about the idea of our unique project.
      </p>
      <br />
      {/* Education */}
      <h2>Education</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img className={styles.left_img} src="/edu/charusat.jpg" alt="charusat" />
            <h3 className={styles.title}>CHARUSAT University, Anand</h3>
            <span className={styles.span}>B.Tech - Computer Science (2021 - 2024)</span>
          </div>
          <p className={styles.desc}><b>Grade: CGPA - 8.11</b><br/>I have attended the Blockchain Technology workshop, also participated in 30 Days of Google Cloud Challenge. I am also participating in hackathons and other events.<br /></p>
        </div>
        <div className={styles.card}>
          <div>
            <img className={styles.left_img} src="/edu/amity.png" alt="amity" />
            <h3 className={styles.title}>Amity University Online</h3>
            <span className={styles.span}>B.B.A. - General (2021 - 2024)</span>
          </div>
          <p className={styles.desc}><b>Grade: SGPA - 8.00</b><br />I have completed Advance Excel course from Amity University as a part of my B.B.A Career. I have also attended workshops that was being held by working professional<br /></p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img className={styles.left_img} src="/edu/gtu.png" alt="GTU" />
            <h3 className={styles.title}>Gujarat Technological University</h3>
            <span className={styles.span}>Diploma C.E. (2018 - 2021)</span>
          </div>
          <p className={styles.desc}><b>Grade: CGPA - 9.50</b><br />I have completed Diploma in computer engineering from OM Institute of Engineering & Technology, Junagadh, Gujarat. I have completed many projects and one of them is Hospital Management System using Django framework that works on Python.</p>
        </div>
        <br />
      </div>
      <br />
      {/* Experience */}
      <h2>Experience</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img className={styles.left_img} src="/exp/phpdots.jpg" alt="PHPDOTS" />
            <h3 className={styles.title}>PHP Dots Technologies</h3>
            <span className={styles.span}>Full-Stack Web Developer (2021)</span>
          </div>
          <p className={styles.desc}>
          As an intern at PHPdots Technologies in Ahmedabad, I had the opportunity to learn and work with a variety of technologies, including PHP and MySQL. During my time at the company, I gained valuable experience in web development, database management, and programming best practices.
          <br></br>
          Overall, my internship at PHPdots Technologies was a valuable learning experience. I gained technical skills in PHP and MySQL, as well as a deeper understanding of the importance of teamwork, communication, and innovation in the workplace. I am grateful for the opportunity to have worked with such a talented and supportive team, and I look forward to applying what I learned in future projects and opportunities.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>Freelancer</h3>
          <span className={styles.span}>Full-Stack Web Development (2019 - Present)</span>
          <p className={styles.desc}>I have been working as web developer and learned advanced topics.</p>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
