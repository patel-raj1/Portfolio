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
            <img className={styles.left_img} src="/edu/gtu.png" alt="GTU" />
            <h3 className={styles.title}>Gujarat Technological University</h3>
            <span className={styles.span}>Diploma C.E. (2018 - 2021)</span>
          </div>
          <p className={styles.desc}><b>Grade: CGPA - 9.50</b><br />I have completed Diploma in computer engineering from OM Institute of Engineering & Technology, Junagadh, Gujarat. I have completed many projects and one of them is Hospital Management System using Django framework that works on Python.</p>
        </div>
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
          <p className={styles.desc}>
            As a freelancer with expertise in Shopify, Python, Django, PHP, and machine learning, I am committed to providing customized solutions to clients. I have experience working on various projects in these areas and am able to adapt to different programming languages and technologies. I take pride in delivering high-quality work and building long-term relationships with my clients. My ability to understand clients' needs and tailor solutions to meet those needs is one of my greatest strengths. I am passionate about staying up-to-date with the latest developments in these areas and constantly improving my skills to deliver exceptional results.
          </p>
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
