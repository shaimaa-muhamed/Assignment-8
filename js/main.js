var mealContianer = document.getElementById("mealContianer");

var meals = [
  {
    name: "Spaghetti Bolognese",
    imgUrl: "../images/meal-1.jpg",
    description: "Classic Italian meat sauce slow-cooked with rich tomatoes",
    category: "Italian",
    level: "Intermediate",
    ratingAvg: 4.7,
    ratingQuantity: 318,
    prepTime: 15,
    cookTime: 90,
    serving: 4,
    ingredients: [
      "400g spaghetti",
      "500g ground beef",
      "400g canned crushed tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "2 tbsp tomato paste",
      "100ml red wine",
      "1 carrot, finely diced",
      "Olive oil, salt, and pepper",
    ],
    instructions: [
      "Sauté onion, garlic, and carrot in olive oil until softened, about 5 minutes.",
      "Add ground beef and cook until browned. Drain excess fat.",
      "Pour in red wine and simmer 5 minutes until mostly absorbed.",
      "Add crushed tomatoes and tomato paste. Stir well.",
      "Simmer on low heat for 60–75 minutes, stirring occasionally.",
      "Cook spaghetti al dente, toss with sauce, and serve with parmesan.",
    ],
    nutrition: {
      Calories: "610 kcal",
      Carbohydrates: "68g",
      Fiber: "5g",
      Protein: "38g",
      Fat: "18g",
      Sodium: "740mg",
    },
    chefTips: [
      "The longer it simmers, the richer the flavor",
      "Add a pinch of sugar to balance tomato acidity",
      "Always salt your pasta water generously",
      "Freeze leftover sauce in portions for easy meals",
    ],
  },
  {
    name: "Chicken Tikka Masala",
    imgUrl: "../images/meal-2.jpg",
    description: "Creamy tomato-based curry with tender grilled chicken",
    category: "Indian",
    level: "Intermediate",
    ratingAvg: 4.9,
    ratingQuantity: 512,
    prepTime: 20,
    cookTime: 40,
    serving: 4,
    ingredients: [
      "700g chicken breast, cubed",
      "200ml plain yogurt",
      "400g canned tomatoes",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "200ml heavy cream",
      "2 tbsp tikka masala spice blend",
      "1 tbsp ginger, grated",
      "2 tbsp vegetable oil",
    ],
    instructions: [
      "Marinate chicken in yogurt and half the spice blend for at least 1 hour.",
      "Grill or pan-fry chicken pieces until charred. Set aside.",
      "Sauté onion, garlic, and ginger in oil until golden.",
      "Add remaining spices and cook 1 minute. Add tomatoes and simmer 15 minutes.",
      "Blend sauce until smooth. Return to pan, add cream and chicken.",
      "Simmer 10 minutes. Serve with basmati rice or naan.",
    ],
    nutrition: {
      Calories: "490 kcal",
      Carbohydrates: "18g",
      Fiber: "3g",
      Protein: "42g",
      Fat: "28g",
      Sodium: "740mg",
    },
    chefTips: [
      "Marinate overnight for deeper flavor",
      "Char the chicken for authentic smoky taste",
      "Adjust cream amount for desired richness",
      "Freeze leftovers — the flavor improves over time",
    ],
  },
  {
    name: "Japanese Ramen",
    imgUrl: "../images/meal-3.jpg",
    description: "Rich tonkotsu broth with noodles, soft egg, and pork belly",
    category: "Japanese",
    level: "Advanced",
    ratingAvg: 4.7,
    ratingQuantity: 389,
    prepTime: 45,
    cookTime: 180,
    serving: 2,
    ingredients: [
      "200g ramen noodles",
      "400g pork belly",
      "2 soft-boiled eggs",
      "1L pork or chicken broth",
      "3 tbsp soy sauce",
      "2 tbsp mirin",
      "4 sheets nori",
      "2 stalks green onion, sliced",
      "1 tsp sesame oil",
    ],
    instructions: [
      "Simmer broth with soy sauce and mirin for 2 hours on low heat.",
      "Slice and sear pork belly until caramelized on all sides.",
      "Soft-boil eggs for 6.5 minutes, peel and marinate in soy sauce.",
      "Cook ramen noodles according to package. Drain well.",
      "Divide noodles into bowls, ladle hot broth over them.",
      "Top with pork, egg halves, nori, green onion, and a drizzle of sesame oil.",
    ],
    nutrition: {
      Calories: "620 kcal",
      Carbohydrates: "55g",
      Fiber: "4g",
      Protein: "38g",
      Fat: "24g",
      Sodium: "1200mg",
    },
    chefTips: [
      "The longer the broth simmers, the richer it gets",
      "Keep broth and noodles separate until serving",
      "Use a thermometer for perfect soft-boiled eggs",
      "Warm the bowls before serving to keep ramen hot longer",
    ],
  },
  {
    name: "Beef Tacos",
    imgUrl: "../images/meal-4.jpg",
    description: "Spiced ground beef tacos with fresh salsa and guacamole",
    category: "Mexican",
    level: "Easy",
    ratingAvg: 4.6,
    ratingQuantity: 670,
    prepTime: 15,
    cookTime: 20,
    serving: 4,
    ingredients: [
      "500g ground beef",
      "8 small corn tortillas",
      "2 tomatoes, diced",
      "1 onion, finely chopped",
      "2 avocados",
      "1 lime, juiced",
      "2 tbsp taco seasoning",
      "Shredded lettuce",
      "Sour cream",
    ],
    instructions: [
      "Brown ground beef in a skillet over medium-high heat.",
      "Add taco seasoning and 60ml water. Simmer until absorbed.",
      "Mash avocados with lime juice and salt to make guacamole.",
      "Mix tomatoes and onion with lime juice for salsa.",
      "Warm tortillas on a dry pan for 30 seconds each side.",
      "Assemble tacos with beef, salsa, guacamole, lettuce, and sour cream.",
    ],
    nutrition: {
      Calories: "430 kcal",
      Carbohydrates: "28g",
      Fiber: "6g",
      Protein: "30g",
      Fat: "22g",
      Sodium: "680mg",
    },
    chefTips: [
      "Double the tortillas to prevent tearing",
      "Let beef rest before filling to avoid soggy tacos",
      "Add jalapeño to salsa for extra heat",
      "Make guacamole last to prevent browning",
    ],
  },
  {
    name: "Margherita Pizza",
    imgUrl: "../images/meal-5.jpg",
    description:
      "Classic Italian pizza with tomato sauce, mozzarella, and basil",
    category: "Italian",
    level: "Intermediate",
    ratingAvg: 4.7,
    ratingQuantity: 891,
    prepTime: 90,
    cookTime: 15,
    serving: 2,
    ingredients: [
      "300g pizza dough",
      "150g fresh mozzarella, sliced",
      "200g crushed tomatoes",
      "2 cloves garlic, minced",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "1 tsp dried oregano",
      "Salt and pepper",
      "Semolina for dusting",
    ],
    instructions: [
      "Let dough rest at room temperature for 1 hour before shaping.",
      "Mix crushed tomatoes with garlic, olive oil, oregano, salt, and pepper.",
      "Preheat oven to 250°C (480°F) with a baking stone or tray inside.",
      "Stretch dough on a semolina-dusted surface to desired thickness.",
      "Spread sauce, then lay mozzarella slices evenly.",
      "Bake 12–15 minutes until crust is golden. Top with fresh basil and olive oil.",
    ],
    nutrition: {
      Calories: "520 kcal",
      Carbohydrates: "62g",
      Fiber: "3g",
      Protein: "22g",
      Fat: "18g",
      Sodium: "760mg",
    },
    chefTips: [
      "High heat is key for a crispy crust",
      "Don't overload with toppings",
      "Add basil after baking to keep it fresh",
      "Use a pizza stone for best results",
    ],
  },
  {
    name: "Pad Thai",
    imgUrl: "../images/meal-6.jpg",
    description: "Stir-fried rice noodles with shrimp, egg, and tamarind sauce",
    category: "Thai",
    level: "Intermediate",
    ratingAvg: 4.8,
    ratingQuantity: 447,
    prepTime: 20,
    cookTime: 15,
    serving: 2,
    ingredients: [
      "200g flat rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tbsp tamarind paste",
      "2 tbsp fish sauce",
      "1 tbsp palm sugar",
      "2 cloves garlic, minced",
      "100g bean sprouts",
      "Crushed peanuts and lime wedges to serve",
    ],
    instructions: [
      "Soak rice noodles in warm water for 20 minutes. Drain.",
      "Mix tamarind paste, fish sauce, and palm sugar into a sauce.",
      "Heat wok over high heat. Stir-fry garlic, then add shrimp.",
      "Push shrimp aside, scramble eggs in the same wok.",
      "Add noodles and sauce. Toss everything together quickly.",
      "Plate with bean sprouts, crushed peanuts, and lime wedges.",
    ],
    nutrition: {
      Calories: "510 kcal",
      Carbohydrates: "68g",
      Fiber: "3g",
      Protein: "28g",
      Fat: "12g",
      Sodium: "980mg",
    },
    chefTips: [
      "Use a very hot wok for authentic char",
      "Don't overcook the noodles before stir-frying",
      "Taste and balance sweet, sour, and salty before serving",
      "Substitute chicken or tofu instead of shrimp",
    ],
  },
  {
    name: "Shakshuka",
    imgUrl: "../images/meal-7.jpg",
    description: "Poached eggs in a spiced tomato and pepper sauce",
    category: "Middle Eastern",
    level: "Easy",
    ratingAvg: 4.6,
    ratingQuantity: 334,
    prepTime: 10,
    cookTime: 25,
    serving: 2,
    ingredients: [
      "4 large eggs",
      "400g canned crushed tomatoes",
      "1 red bell pepper, diced",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 tsp cumin",
      "1 tsp paprika",
      "1/2 tsp chili flakes",
      "Fresh parsley and crusty bread to serve",
    ],
    instructions: [
      "Sauté onion and pepper in olive oil until softened, about 5 minutes.",
      "Add garlic and spices, cook for 1 minute until fragrant.",
      "Pour in tomatoes, season with salt. Simmer 10 minutes.",
      "Make 4 wells in the sauce, crack an egg into each.",
      "Cover and cook 7–8 minutes until whites are set but yolks are runny.",
      "Garnish with parsley and serve with crusty bread.",
    ],
    nutrition: {
      Calories: "310 kcal",
      Carbohydrates: "22g",
      Fiber: "5g",
      Protein: "18g",
      Fat: "16g",
      Sodium: "590mg",
    },
    chefTips: [
      "Don't overcook the eggs — runny yolks are the goal",
      "Add feta cheese on top for extra richness",
      "Make the sauce ahead and just add eggs when ready",
      "Use a wide pan so eggs have room to cook evenly",
    ],
  },
  {
    name: "Beef Bulgogi",
    imgUrl: "../images/meal-8.jpg",
    description: "Korean marinated beef grilled with sweet soy glaze",
    category: "Korean",
    level: "Easy",
    ratingAvg: 4.9,
    ratingQuantity: 278,
    prepTime: 30,
    cookTime: 10,
    serving: 3,
    ingredients: [
      "500g beef sirloin, thinly sliced",
      "4 tbsp soy sauce",
      "2 tbsp sesame oil",
      "2 tbsp brown sugar",
      "4 cloves garlic, minced",
      "1 pear, grated (tenderizer)",
      "2 stalks green onion, chopped",
      "1 tbsp sesame seeds",
      "Cooked rice to serve",
    ],
    instructions: [
      "Mix soy sauce, sesame oil, brown sugar, garlic, and grated pear.",
      "Add beef to marinade, toss well. Marinate at least 30 minutes.",
      "Heat grill pan or BBQ over high heat.",
      "Cook beef in batches for 2–3 minutes per side until caramelized.",
      "Sprinkle with sesame seeds and green onion.",
      "Serve over steamed rice with kimchi on the side.",
    ],
    nutrition: {
      Calories: "460 kcal",
      Carbohydrates: "20g",
      Fiber: "1g",
      Protein: "38g",
      Fat: "24g",
      Sodium: "860mg",
    },
    chefTips: [
      "Freeze beef slightly before slicing for thinner cuts",
      "Grated pear or kiwi naturally tenderizes the meat",
      "Cook in batches to avoid steaming the beef",
      "Marinate overnight for maximum flavor",
    ],
  },
  {
    name: "French Onion Soup",
    imgUrl: "../images/meal-9.jpg",
    description: "Slow-caramelized onion soup topped with gruyère crouton",
    category: "French",
    level: "Intermediate",
    ratingAvg: 4.7,
    ratingQuantity: 196,
    prepTime: 15,
    cookTime: 75,
    serving: 4,
    ingredients: [
      "1kg yellow onions, thinly sliced",
      "3 tbsp unsalted butter",
      "1L beef broth",
      "150ml dry white wine",
      "4 slices baguette",
      "150g gruyère cheese, grated",
      "2 cloves garlic",
      "1 tbsp fresh thyme",
      "Salt and pepper",
    ],
    instructions: [
      "Melt butter in a heavy pot. Add onions and cook on low heat, stirring every 10 minutes for 60 minutes until deeply golden.",
      "Add wine and scrape up any browned bits. Cook 5 minutes.",
      "Add broth and thyme. Simmer 15 minutes. Season with salt and pepper.",
      "Preheat broiler. Rub baguette slices with garlic and toast.",
      "Ladle soup into oven-safe bowls, top with baguette and gruyère.",
      "Broil 3–4 minutes until cheese is bubbly and golden.",
    ],
    nutrition: {
      Calories: "390 kcal",
      Carbohydrates: "34g",
      Fiber: "4g",
      Protein: "16g",
      Fat: "18g",
      Sodium: "870mg",
    },
    chefTips: [
      "Low and slow is the secret to sweet caramelized onions",
      "Don't rush the caramelization step",
      "Use oven-safe bowls that can handle high broiler heat",
      "Gruyère can be replaced with Swiss or emmental",
    ],
  },
  {
    name: "Butter Chicken",
    imgUrl: "../images/meal-10.jpg",
    description: "Mild and creamy tomato-butter curry with tender chicken",
    category: "Indian",
    level: "Intermediate",
    ratingAvg: 4.8,
    ratingQuantity: 603,
    prepTime: 25,
    cookTime: 35,
    serving: 4,
    ingredients: [
      "700g chicken thighs, cubed",
      "3 tbsp butter",
      "400g canned tomatoes",
      "200ml heavy cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tsp garam masala",
      "1 tsp turmeric",
    ],
    instructions: [
      "Sear chicken in butter until golden. Set aside.",
      "Sauté onion, garlic, and ginger until soft and fragrant.",
      "Add spices and cook 1 minute. Add tomatoes and simmer 15 minutes.",
      "Blend sauce until completely smooth.",
      "Return sauce to pan, add cream and chicken. Simmer 10 minutes.",
      "Finish with a knob of butter. Serve with naan or basmati rice.",
    ],
    nutrition: {
      Calories: "520 kcal",
      Carbohydrates: "14g",
      Fiber: "2g",
      Protein: "40g",
      Fat: "34g",
      Sodium: "710mg",
    },
    chefTips: [
      "Use thighs instead of breast for juicier chicken",
      "Blend the sauce very well for a silky texture",
      "Add a pinch of sugar to balance the tomato acidity",
      "Kasuri methi (dried fenugreek) adds authentic flavor",
    ],
  },
  {
    name: "Spaghetti Carbonara",
    imgUrl: "../images/meal-11.jpg",
    description:
      "Classic Roman pasta with crispy pancetta, egg yolk, and pecorino",
    category: "Italian",
    level: "Intermediate",
    ratingAvg: 4.8,
    ratingQuantity: 724,
    prepTime: 10,
    cookTime: 20,
    serving: 2,
    ingredients: [
      "200g spaghetti",
      "150g pancetta or guanciale, diced",
      "3 egg yolks",
      "1 whole egg",
      "80g pecorino romano, grated",
      "1 tsp black pepper, coarsely ground",
      "Salt for pasta water",
      "1 clove garlic (optional)",
      "Fresh parsley to garnish",
    ],
    instructions: [
      "Cook spaghetti in heavily salted boiling water until al dente. Reserve 200ml pasta water.",
      "Fry pancetta in a dry pan until crispy. Remove from heat.",
      "Whisk egg yolks, whole egg, and pecorino into a smooth cream.",
      "Drain pasta and add to the pancetta pan off the heat.",
      "Add egg mixture and splash of pasta water. Toss vigorously to create a silky sauce.",
      "Plate immediately with extra pecorino, black pepper, and parsley.",
    ],
    nutrition: {
      Calories: "610 kcal",
      Carbohydrates: "58g",
      Fiber: "3g",
      Protein: "32g",
      Fat: "26g",
      Sodium: "790mg",
    },
    chefTips: [
      "Never add cream — real carbonara relies on eggs and cheese",
      "Remove pan from heat before adding egg mixture to avoid scrambling",
      "Use pasta water to loosen the sauce if too thick",
      "Freshly ground black pepper is non-negotiable",
    ],
  },
];

function chooseRandomMeal() {
  var randomIndex = Math.floor(Math.random() * meals.length);

  displayMeal(randomIndex);
}

function displayMeal(index) {
  var mealMarkup = `
    <div class="row p-0">
            <div class="col-lg-5 p-0">
              <div class="meal-img position-relative">
                <img
                  src="${meals[index].imgUrl}"
                  class="w-100 h-100"
                  id="mealImage"
                  alt="Greek Moussaka image"
                />

                <div class="meal-badge rounded-pill bg-white w-fit-content">
                  <i class="fa-solid fa-star text-warning"></i>
                  <span  id="ratingAvg" class="fw-bold mx-2">${meals[index].ratingAvg}</span>
                  <span id="ratingQuantity"  class="fw-normal fs-14 text-secondary">
                    (${meals[index].ratingQuantity} reviews)</span
                  >
                </div>
                <div
                  class="meal-info bg-white rounded-4 py-4 px-5 d-flex justify-content-between"
                >
                  <div
                    class="meal-prep-time d-flex flex-column align-items-center"
                  >
                    <i class="fa-solid fa-clock fs-4"></i>
                    <span class="text-secondary my-1">Prep Time </span>
                    <span class="fw-bold"  id="prepTime">${meals[index].prepTime} min </span>
                  </div>
                  <div 
                    class="meal-cook-time d-flex flex-column align-items-center"
                  >
                    <i class="fa-solid fa-clock fs-4"></i>
                    <span class="text-secondary my-1"> Cook Time </span>
                    <span class="fw-bold" id="cookTime">${meals[index].cookTime} min </span>
                  </div>
                  <div
                    class="meal-serving d-flex flex-column align-items-center"
                  >
                    <i class="fa-solid fa-clock fs-4"></i>
                    <span class="text-secondary my-1"> Servings </span>
                    <span class="fw-bold" id="serving">${meals[index].serving} people </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 p-0 meal-details-container">
              <div class="meal-details p-5 px-4 bg-white">
                <span class="badge" id="level">${meals[index].level}</span>
                <span class="badge blue--badge" id="category">${meals[index].category}</span>
                <div class="d-flex align-items-center justify-content-between">
                  <h2 class="fw-bold my-0" id="mealName">${meals[index].name}</h2>
                  <div class="save-shar-icon">
                    <a href="">
                      <span class="save-icon mx-2">
                        <i class="fa-solid fa-bookmark"></i>
                      </span>
                    </a>
                    <a href="">
                      <span class="share-icon">
                        <i class="fa-solid fa-share-nodes"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <p class="fs-5 my-0 text-secondary" id="description">
               ${meals[index].description}
                </p>
                
                ${
                  meals[index].cookTime + meals[index].prepTime > 45
                    ? `
                     <div
                  class="warning-time p-3 my-4 d-flex align-items-center gap-2"
                >
                  <div class="warning-icon">
                    <i class="fa-solid fa-triangle-exclamation fs-5"></i>
                  </div>
                  <div class="warning-text">
                    <p class="h6 my-1" id="">Extended Preparation Time</p>
                    <p class="fs-14 mb-0">
                      This recipe requires more than 45 minutes to prepare. Plan
                      accordingly!
                    </p>
                  </div>
                </div>`
                    : ``
                }

             
              
                <!-- ==================================== -->
                <ul class="nav nav-tabs mt-4 mb-3" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="ingredients-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ingredients-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="ingredients-tab-pane"
                      aria-selected="true"
                    >
                      ingredients
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="instructions-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#instructions-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="instructions-tab-pane"
                      aria-selected="false"
                    >
                      instructions
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="nutrition-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nutrition-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="nutrition-tab-pane"
                      aria-selected="false"
                    >
                      nutrition
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="chef-tips-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#chef-tips-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="chef-tips-tab-pane"
                      aria-selected="false"
                    >
                      chef-tips
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="ingredients-tab-pane"
                    role="tabpanel"
                    aria-labelledby="ingredients-tab"
                    tabindex="0"
                  >
                    <div class="ingredients p-3 py-4" >
                      <ul  class="list-unstyled ms-0 d-flex flex-column gap-3">
                        <li class="d-flex gap-2">
                          <div class="ingredient-num">1</div>
                          <span class="" id="mealIngredients" >${meals[index].ingredients[0]}</span>
                        </li>
                        <li class="d-flex gap-2">
                          <div class="ingredient-num">2</div>
                          <span class="" >${meals[index].ingredients[1]}</span>
                        </li>
                        <li class="d-flex gap-2">
                          <div class="ingredient-num">3</div>
                          <span class="">${meals[index].ingredients[2]}</span>
                        </li>
                        <li class="d-flex gap-2">
                          <div class="ingredient-num">4</div>
                          <span class=""> ${meals[index].ingredients[3]}</span>
                        </li>
                        <li class="d-flex gap-2">
                          <div class="ingredient-num">5</div>
                          <span class="">${meals[index].ingredients[4]}</span>
                        </li>
                        <li class="d-flex gap-2">
                          <div class="ingredient-num">6</div>
                          <span class=""> ${meals[index].ingredients[5]}</span>
                        </li>
                        <li class="d-flex gap-2">
                          <div class="ingredient-num">7</div>
                          <span class="" >${meals[index].ingredients[6]}</span>
                        </li>
                        <li class="d-flex gap-2">
                          <div class="ingredient-num">8</div>
                          <span class="">${meals[index].ingredients[7]}</span>
                        </li>
                        <li class="d-flex gap-2">
                          <div class="ingredient-num">9</div>
                          <span class="" >${meals[index].ingredients[8]} </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="instructions-tab-pane"
                    role="tabpanel"
                    aria-labelledby="instructions-tab"
                    tabindex="0"
                  >
                    <div class="instructions py-4">
                      <ul class="m-0 list-unstyled d-flex flex-column gap-3">
                        <li class="d-flex align-items-start gap-3">
                          <div class="instructions-num">1</div>
                          <span
                            >${meals[index].instructions[0]}
                          </span>
                        </li>
                        <li class="d-flex align-items-start gap-3">
                          <div class="instructions-num">2</div>
                          <span
                            > ${meals[index].instructions[1]}
                          </span>
                        </li>
                        <li class="d-flex align-items-start gap-3">
                          <div class="instructions-num">3</div>
                          <span>
                           ${meals[index].instructions[2]}
                          </span>
                        </li>
                        <li class="d-flex align-items-start gap-3">
                          <div class="instructions-num">4</div>
                          <span>${meals[index].instructions[3]} </span>
                        </li>
                        <li class="d-flex align-items-start gap-3">
                          <div class="instructions-num">5</div>
                          <span>
                          ${meals[index].instructions[4]}
                          </span>
                        </li>
                        <li class="d-flex align-items-start gap-3">
                          <div class="instructions-num">6</div>
                          <span>
                         ${meals[index].instructions[5]}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nutrition-tab-pane"
                    role="tabpanel"
                    aria-labelledby="nutrition-tab"
                    tabindex="0"
                  >
                    <div
                      class="nutrition d-flex flex-column flex-md-row gap-2 py-4"
                    >
                      <div
                        class="nutrition-left d-flex flex-grow-1 flex-column gap-3"
                      >
                        <div
                          class="nutrition-card p-4 py-3 d-flex justify-content-between align-items-center"
                        >
                          <div class="d-flex gap-3 align-items-center">
                            <div class="nutriton-icon">
                              <i class="fa-solid fa-fire fs-6"></i>
                            </div>
                            <span class="">Calories</span>
                          </div>
                          <p class="fw-bold m-0 fs-5 m-0">${meals[index].nutrition.Calories}</p>
                        </div>
                        <div
                          class="nutrition-card p-4 py-3 carbohydrates--card d-flex justify-content-between align-items-center"
                        >
                          <div class="d-flex gap-3 align-items-center">
                            <div class="nutriton-icon">
                              <i class="fa-brands fa-pagelines fs-6"></i>
                            </div>
                            <span class="">Carbohydrates</span>
                          </div>
                          <p class="fw-bold m-0 fs-5">${meals[index].nutrition.Carbohydrates}</p>
                        </div>
                        <div
                          class="nutrition-card p-4 py-3 fiber--card d-flex justify-content-between align-items-center"
                        >
                          <div class="d-flex gap-3 align-items-center">
                            <div class="nutriton-icon">
                              <i class="fa-solid fa-seedling fs-6"></i>
                            </div>
                            <span class="">Fiber</span>
                          </div>
                          <p class="fw-bold m-0 fs-5">${meals[index].nutrition.Fiber}</p>
                        </div>
                      </div>
                      <div
                        class="nutrition-right d-flex flex-grow-1 flex-column gap-3"
                      >
                        <div
                          class="nutrition-card protein--card p-4 py-3 d-flex justify-content-between align-items-center"
                        >
                          <div class="d-flex gap-3 align-items-center">
                            <div class="nutriton-icon">
                              <i class="fa-solid fa-dumbbell fs-6"></i>
                            </div>
                            <span class="">Protein</span>
                          </div>
                          <p class="fw-bold m-0 fs-5">${meals[index].nutrition.Protein}</p>
                        </div>
                        <div
                          class="nutrition-card fat--card p-4 py-3 d-flex justify-content-between align-items-center"
                        >
                          <div class="d-flex gap-3 align-items-center">
                            <div class="nutriton-icon">
                              <i class="fa-solid fa-droplet fs-6"></i>
                            </div>
                            <span class="">Fat</span>
                          </div>
                          <p class="fw-bold m-0 fs-5">${meals[index].nutrition.Fat}</p>
                        </div>
                        <div
                          class="nutrition-card sodium--card p-4 py-3 d-flex justify-content-between align-items-center"
                        >
                          <div class="d-flex gap-3 align-items-center">
                            <div class="nutriton-icon">
                              <i class="fa-solid fa-cube fs-6"></i>
                            </div>
                            <span class="">Sodium</span>
                          </div>
                          <p class="fw-bold m-0 fs-5">${meals[index].nutrition.Sodium}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="chef-tips-tab-pane"
                    role="tabpanel"
                    aria-labelledby="chef-tips-tab"
                    tabindex="0"
                  >
                    <div class="chef-tips d-flex flex-column gap-3 py-4">
                      <div class="meal-tip d-flex gap-2 align-items-center">
                        <i class="fa-solid fa-circle-check"></i>
                        <p class="mb-0">
                        ${meals[index].chefTips[0]}
                        </p>
                      </div>
                      <div class="meal-tip d-flex gap-2 align-items-center">
                        <i class="fa-solid fa-circle-check"></i>
                        <p class="mb-0">
                       ${meals[index].chefTips[1]}
                        </p>
                      </div>
                      <div class="meal-tip d-flex gap-2 align-items-center">
                        <i class="fa-solid fa-circle-check"></i>
                        <p class="mb-0">
                           ${meals[index].chefTips[2]}
                        </p>
                      </div>
                      <div class="meal-tip d-flex gap-2 align-items-center">
                        <i class="fa-solid fa-circle-check"></i>
                        <p class="mb-0">
                           ${meals[index].chefTips[3]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                type="button"
                onclick="chooseRandomMeal()"
                  id="try-btn"
                  class="text-capitalize text-white rounded-4"
                >
                  Try Another recipe
                </button>
                <!-- ==================================== -->
              </div>
            </div>
          </div>`;
  mealContianer.innerHTML = mealMarkup;
}
chooseRandomMeal()