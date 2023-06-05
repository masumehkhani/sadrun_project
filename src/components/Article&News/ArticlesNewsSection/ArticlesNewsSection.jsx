import ArticleCard from "../ArticlesNewsSection/ArticleCard/ArticleCard";
import styles from "./ArticlesNewsSection.module.scss";
const ArticlesNewsSection = (props) => {
  return (

      <div className={styles.articlesNewsContainer}>
      <div className={styles.articlesNewsTitle}>
        <h5 className={styles.articlesNewsTitleText}>{props.articlesNewsTitle}</h5>
        </div>
        <div className={styles.articlesNewsSection}>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
        <div className={styles.articlesNewsBtnContainer}>
          <button className={styles.articlesNewsBtn}>بیشتر</button>
        </div>
      </div>
    
    
   
  );
};

export default ArticlesNewsSection;
