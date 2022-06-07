import React from 'react';
import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  const onClose = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };
  return (
    <section className={styles.titlebar}>
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Kaushal Patel - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <a href='https://google.com' target={"__blank"} className={styles.minimize}></a>
        <span className={styles.maximize}></span>
        <a onClick={onClose} className={styles.close}></a>
      </div>
    </section>
  );
};

export default Titlebar;
