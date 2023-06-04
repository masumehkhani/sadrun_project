
import styles from './ArticleCard.module.scss'
import articleImage from './imges/articleImage.png'
const ArticleCard = () => {
  return (
    <div className={styles.CourseArticleCard}>
        <div className={styles.CourseArticleImage}>
            <img src={articleImage} alt="articleImage" />
        </div>
        <p className={styles.CourseArticleNews}>
        آموزشگاه در تدارک دوره های جدید برنامه نویسی است</p> 
    </div>
  )
}

export default ArticleCard



// هم تصویر هم متن رو میشه داینامیک کرد 

// import React from 'react';
// import styles from './ArticleCard.module.scss';

// const ArticleCard = ({ imagePath, text }) => {
//   return (
//     <div className={styles.CourseArticleCard}>
//       <div className={styles.CourseArticleImage}>
//         <img src={imagePath} alt="" />
//       </div>
//       <p className={styles.CourseArticleNews}>{text}</p>
//     </div>
//   );
// };

// export default ArticleCard;

