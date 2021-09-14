import React from 'react';

import { NewsItemWrapper, Title, Content } from './NewsItem.styles';
import Button from 'components/atoms/Button/Button';
import { ItemMeta } from 'components/atoms/ItemMeta/ItemMeta';

const NewsItem = ({
  newsData: { id, title, category, content, featuredImage },
}) => {
  return (
    <NewsItemWrapper>
      <Title>{title}</Title>
      <ItemMeta>{category}</ItemMeta>
      <Content>
        <p>{content}</p>
        {featuredImage && <img src={featuredImage} alt={title} />}
      </Content>
      <Button>Read more</Button>
    </NewsItemWrapper>
  );
};

export default NewsItem;
