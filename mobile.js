// Sample reviews data
const reviews = [
    "Je suis extrêmement satisfait du site web créé par cette équipe. Ils ont écouté mes exigences et les ont traduites en un site Web visuellement attrayant et convivial. L'attention portée aux détails et le professionnalisme sont remarquables. Hautement recommandé !",    
    "Le site web créé par cette équipe a dépassé mes attentes. Ils ont non seulement capturé l'essence de ma marque, mais ils ont également veillé à ce que l'expérience de l'utilisateur soit transparente. La communication tout au long du processus a été excellente et ils ont livré à temps. Je ne pourrais pas être plus heureux !",
    "Travailler avec cette équipe a été un plaisir du début à la fin. Ils ont compris les objectifs de mon entreprise et ont créé un site web qui met parfaitement en valeur mes produits. Le design est moderne et attrayant, et les fonctionnalités sont de premier ordre. J'ai reçu de nombreux compliments sur mon site web",    
    "J'ai eu une excellente expérience avec cette équipe de développement web. Ils ont été réactifs, bien informés et très compétents. Ils ont pris mes idées et les ont transformées en un site web époustouflant qui s'aligne parfaitement avec ma marque. Je suis impressionné par leur créativité et leur expertise technique",
    "Le choix de cette société pour la création de mon site web a été la meilleure décision que j'ai prise. Leur expertise et leur souci du détail sont inégalés. Ils se sont surpassés pour s'assurer que chaque aspect du site Web était adapté à mes besoins. Je suis ravi du résultat final !",    
    "Je recommande vivement ce service de développement web. Il s'agit d'une équipe de professionnels qui ont vraiment à cœur de fournir des résultats exceptionnels. Ils ont créé un site web qui est non seulement très beau, mais qui fonctionne aussi parfaitement. Le niveau de service et d'assistance que j'ai reçu tout au long du projet a été exceptionnel."
];
  
  // Function to update review content and trigger animation
  function updateReviews() {
    const mainReview = document.querySelector(".main-review");
    const upperReview = document.querySelector(".upper-review");
    const lowerReview = document.querySelector(".lower-review");
  
    // Get the first review from the array
    const review = reviews.shift();
  
    // Animate the reviews
    mainReview.style.animation = "review-animation 1s forwards";
    upperReview.style.animation = "review-animation 1s forwards";
    lowerReview.style.animation = "review-animation 1s forwards";
  
    // Set a delay before updating the review content
    setTimeout(() => {
      mainReview.textContent = review;
      upperReview.textContent = reviews[1];
      lowerReview.textContent = reviews[2];
    }, 500);
  
    // Add the main review to the end of the array
    reviews.push(review);
  }
  
  // Call the updateReviews function to start the animation
  updateReviews();
  
  // Repeat the animation every 5 seconds
  setInterval(updateReviews, 5000);
  







