import ArticleCard from '../ArticlesNewsSection/ArticleCard/ArticleCard'
import styles from './ArticlesNewsSection.module.scss'
const ArticlesNewsSection = ({articlesNewsTitle}) => {
  return (
    
<div className={styles.container}>
    <div className={styles.articlesNewsTitleContainer}>
      <span className={styles.articlesNewsTitle}>{articlesNewsTitle}kkk</span>  
    </div>
  <div className={styles.articlesNewsSection}>
    <ArticleCard/>
    <ArticleCard/>
    <ArticleCard/>
  </div>
  <div className={styles.articlesNewsBtnContainer}>
    <button className={styles.articlesNewsBtn}>بیشتر</button>
  </div>
</div>

  )
}

export default ArticlesNewsSection


