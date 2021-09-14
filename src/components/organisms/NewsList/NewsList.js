import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NewsWrapper } from './NewsList.styles';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import NewsItem from 'components/molecules/NewsItem/NewsItem';

export const query = `
{
  allArticles {
    id,
    title,
    category,
    content,
    image {
      url
    }
  }
}
`;

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError('Sorry, we could not load articles for you');
      });
  }, []);

  return (
    <NewsWrapper>
      <SectionTitle>University news feed</SectionTitle>
      {articles.length > 0 ? (
        articles.map((article) => (
          <NewsItem
            key={article.id}
            newsData={{
              title: article.title,
              category: article.category,
              content: article.content,
              featuredImage: article.image.url,
            }}
          />
        ))
      ) : (
        <SectionTitle>{error ? error : 'Loading'}</SectionTitle>
      )}
    </NewsWrapper>
  );
};

export default NewsList;
