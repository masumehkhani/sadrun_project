import styles from './ArticleNews.module.scss'
import ArticlesNewsSection from './ArticlesNewsSection/ArticlesNewsSection'
import boyPic from './images/boyIcon.svg';
import girlPic from './images/girlIcon.svg'
const ArticleNews = () => {

  return (
    <div className={styles.ArticleNewsContainer}>
      <div className={styles.ArticleNewsHeading}>
        <div className={styles.boyPic}>
          <img className={styles.boyPicImg} src={boyPic} alt="boyPic" />
        </div>
        <div className={styles.title}>
          <h1>اخبار و مقالات</h1>
        </div>
        <div className={styles.girlPic}>
          <img className={styles.girlPicImg} src={girlPic} alt="girlPic" />
        </div>
     
      </div>
      <div className={styles.ContentWrapper}>
           <div className={styles.ArticleNewsItem}>
            <ArticlesNewsSection articlesNewsTitle={'اخبار'}/>
          </div>
          <div className={styles.ArticleNewsItem}>
          <ArticlesNewsSection articlesNewsTitle={'مقالات'}/>
          </div>
      </div>
      <div className={styles.NewsletterSection}>
        <input
          className={styles.newsletterSubscription}
          type="email"
          placeholder="عضویت در خبرنامه: "
        />
      </div>
      
    </div>
  )
}

export default ArticleNews



// import React from 'react';
// import NewsSection from './NewsSection';
// import ArticlesSection from './ArticlesSection';
// import NewsletterSubscription from './NewsletterSubscription';
// import styles from './NewsPage.module.scss';
// import ArticlesNewsSection from './ArticlesNewsSection/ArticlesNewsSection';

// const NewsPage = () => {
//   return (
//     <div className={styles.NewsPage}>
//       <h1 className={styles.PageTitle}>عنوان صفحه</h1>
//       <div className={styles.ContentWrapper}>
//         <div className={styles.GridContainer}>
//           <div className={styles.GridItem}>
//             <ArticlesSection />
//           </div>
//           <div className={styles.GridItem}>
//             <NewsSection />
//           </div>
//         </div>
//         <div className={styles.NewsletterSection}>
//           <NewsletterSubscription />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsPage;
