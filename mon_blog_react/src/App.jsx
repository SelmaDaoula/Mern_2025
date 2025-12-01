import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import Badge from './components/Badge';
import ProductCard from './components/ProductCard';
import CommentList from './components/CommentList';

function App() {
  // Données des articles existants
  const articles = [
    {
      id: 1,
      title: "Introduction à React",
      author: "Alice",
      content:
        "React est une bibliothèque JavaScript pour construire des interfaces utilisateur modernes et réactives.",
    },
    {
      id: 2,
      title: "Qu'est-ce que Vite ?",
      author: "Bob",
      content:
        "Vite est un outil de build ultra-rapide qui améliore drastiquement l'expérience de développement.",
    },
    {
      id: 3,
      title: "Les Composants en React",
      author: "Charlie",
      content:
        "Les composants sont les briques de base de React. Ils permettent de diviser l'interface en morceaux réutilisables.",
    },
    {
      id: 4,
      title: "Le JSX en Pratique",
      author: "Alice",
      content:
        "JSX est une syntaxe qui ressemble à HTML mais qui est en fait du JavaScript transformé.",
    },
  ];

  // Exercice 1 : Données des badges
  const badges = [
    { id: 1, text: "Nouveau", color: "green" },
    { id: 2, text: "Populaire", color: "red" },
    { id: 3, text: "Promo", color: "orange" }
  ];

  // Exercice 2 : Données des produits
  const products = [
    { id: 1, name: "Laptop", price: 1200, category: "Électronique" },
    { id: 2, name: "Souris", price: 25, category: "Accessoires" },
    { id: 3, name: "Clavier", price: 75, category: "Accessoires" },
    { id: 4, name: "Écran", price: 350, category: "Électronique" },
    { id: 5, name: "Webcam", price: 89, category: "Électronique" }
  ];

  // Exercice 3 : Données des commentaires
  const comments = [
    {
      id: 1,
      author: "Sophie Martin",
      text: "Excellent cours sur React ! Les explications sont claires et les exemples très pertinents.",
      likes: 24
    },
    {
      id: 2,
      author: "Thomas Dubois",
      text: "J'ai enfin compris le concept des props grâce à ce tutoriel. Merci beaucoup !",
      likes: 18
    },
    {
      id: 3,
      author: "Marie Bernard",
      text: "Les exercices pratiques sont vraiment utiles pour consolider les connaissances.",
      likes: 31
    },
    {
      id: 4,
      author: "Lucas Petit",
      text: "Super formation ! J'attends avec impatience la suite sur le State.",
      likes: 15
    }
  ];

  const currentYear = new Date().getFullYear();

  // Styles
  const sectionStyle = {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const sectionTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2c3e50',
    borderBottom: '3px solid #3498db',
    paddingBottom: '10px'
  };

  const badgeContainerStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  };

  const productsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ecf0f1'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          flex: 1,
          width: '100%'
        }}
      >
        {/* Header principal */}
        <Header
          title="Mon Blog React"
          subtitle="Apprendre React avec des exemples pratiques"
        />

        {/* Section Articles (Travail existant) */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📚 Articles du Blog</h2>
          <div
            style={{
              marginBottom: '20px',
              padding: '15px',
              backgroundColor: '#f0f9ff',
              borderRadius: '8px',
            }}
          >
            <strong>{articles.length}</strong> articles disponibles
          </div>

          {articles.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              author={article.author}
              content={article.content}
            />
          ))}
        </section>

        {/* Exercice 1 : Badges */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📌 Exercice 1 : Badges</h2>
          <div style={badgeContainerStyle}>
            {badges.map((badge) => (
              <Badge key={badge.id} text={badge.text} color={badge.color} />
            ))}
          </div>
        </section>

        {/* Exercice 2 : Liste de Produits */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🛍️ Exercice 2 : Liste de Produits</h2>
          <div style={productsGridStyle}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
              />
            ))}
          </div>
        </section>

        {/* Exercice 3 : Commentaires */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>💬 Exercice 3 : Système de Commentaires</h2>
          <CommentList comments={comments} />
        </section>
      </div>

      {/* Footer */}
      <Footer author="École Polytechnique Sousse" year={currentYear} />
    </div>
  );
}

export default App;