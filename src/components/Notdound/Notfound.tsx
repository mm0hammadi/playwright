import styles from "./notfound.module.scss";

const Notfound = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        چیزی پیدا نشد
      </h1>
      <p className={styles.description}>
        متاسفانه این صفحه در فروشگاه اینترنتی ما موجود نیست
      </p>
    </div>
  );
};

export default Notfound;
