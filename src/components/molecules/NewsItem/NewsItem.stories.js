import NewsItem from './NewsItem';

const Story = {
  title: 'Components/Molecules/NewsItem',
  component: NewsItem,
};

export default Story;

const Template = (args) => <NewsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  newsData: {
    title: 'Nowe komputery w sali nr. 9',
    category: 'Student news',
    content:
      'Troska organizacji a szczególnie, stały wzrost ilości i zakresu naszej aktywności pociąga za sobą proces wdrażania i unowocześniania form oddziaływania. Praktyka dnia codziennego dowodzi że, realizacja nakreślonych zadań programowych pociąga za sobą proces wdrażania i unowocześniania kierunków postępu prac. Wagi i znaczenia tych problemów nie trzeba szerzej uzasadniać, realizacja nakreślonych zadań programowych przedstawia interesującą próbę sprawdzenia nowych propozycji. Założenia naszej misji, a także realizacja nakreślonych zadań programowych pociąga za sobą proces wdrażania i unowocześniania systemu szkolenia kadr odpowiadającego potrzebom. Róznorodne i bogate doświadczenia, zakres i miejsce szkolenia kadr pomaga w przygotowaniu i realizacji dalszych kierunków rozwoju. Założenia naszej misji, a także realizacja nakreślonych zadań programowych powoduje docenienie wagi odpowiednich warunków aktywizacji.',
    featuredImage: 'https://www.datocms-assets.com/40821/1610661781-3.jpeg',
  },
};

export const NoFeaturedImage = Template.bind({});
NoFeaturedImage.args = {
  newsData: {
    title: 'Nowe komputery w sali nr. 9',
    category: 'Student news',
    content:
      'Troska organizacji a szczególnie, stały wzrost ilości i zakresu naszej aktywności pociąga za sobą proces wdrażania i unowocześniania form oddziaływania. Praktyka dnia codziennego dowodzi że, realizacja nakreślonych zadań programowych pociąga za sobą proces wdrażania i unowocześniania kierunków postępu prac. Wagi i znaczenia tych problemów nie trzeba szerzej uzasadniać, realizacja nakreślonych zadań programowych przedstawia interesującą próbę sprawdzenia nowych propozycji. Założenia naszej misji, a także realizacja nakreślonych zadań programowych pociąga za sobą proces wdrażania i unowocześniania systemu szkolenia kadr odpowiadającego potrzebom. Róznorodne i bogate doświadczenia, zakres i miejsce szkolenia kadr pomaga w przygotowaniu i realizacji dalszych kierunków rozwoju. Założenia naszej misji, a także realizacja nakreślonych zadań programowych powoduje docenienie wagi odpowiednich warunków aktywizacji.',
  },
};
