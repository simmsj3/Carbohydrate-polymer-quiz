// Ensure the button is connected to the startQuiz function after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('start-button').addEventListener('click', startQuiz);
});

const questions = [
  {
    question: "Which of the following is a homopolysaccharide?",
    options: ["Agar", "Glycogen", "Mucopolysaccharide", "None of the above"],
    correct: "Glycogen",
    explanation: `Polysaccharides are long chains of monosaccharides connected by glycosidic bonds. 
    These polysaccharides are essential for various biological processes, like energy storage and structural support. 
    There are two types of polysaccharides: homopolysaccharides and heteropolysaccharides. Homopolysaccharides consist of only one type of monosaccharide, 
    while heteropolysaccharides consist of different monosaccharides. Glycogen is a homopolysaccharide made up of glucose units and serves as the primary energy storage in animals. 
    Other examples of homopolysaccharides include starch and cellulose. Glycogen is highly branched and stored mainly in the liver and muscles. 
    In contrast, agar and mucopolysaccharides are examples of heteropolysaccharides. The ability of glycogen to store and release glucose quickly makes it ideal for regulating blood sugar levels. 
    The main difference between homopolysaccharides and heteropolysaccharides is their monosaccharide composition. Understanding the types of polysaccharides is crucial for grasping how organisms manage energy reserves.`
  },
  {
    question: "What type of glycosidic bond connects glucose units in amylose?",
    options: ["α-1,4", "α-1,6", "β-1,4", "β-1,6"],
    correct: "α-1,4",
    explanation: `Amylose is one of the two main components of starch. It consists of glucose units linked by α-1,4 glycosidic bonds, 
    forming long, unbranched chains. Amylose is less soluble in water compared to amylopectin due to its linear structure. 
    The α-1,4 glycosidic bonds give amylose its distinctive properties, allowing it to form a helical structure. 
    This helical shape contributes to its ability to store energy in plants. Unlike amylopectin, which is highly branched, 
    amylose is linear, making it more resistant to digestion. The α-1,4 linkage in amylose is specific to its structure and function in plants. 
    Starch molecules with higher amylose content tend to be more rigid and less prone to rapid digestion. 
    This is why foods with higher amylose content are often considered healthier, as they cause a slower rise in blood sugar. 
    When amylose is broken down, glucose is released, providing energy for cellular processes.`
  },
  {
    question: "Which component of starch is water soluble?",
    options: ["Amylose", "Amylopectin", "Glycogen", "Cellulose"],
    correct: "Amylose",
    explanation: `Starch is composed of two main components: amylose and amylopectin. Amylose is the linear, unbranched portion of starch and is soluble in water. 
    Amylopectin, on the other hand, is highly branched and insoluble in water. The solubility of amylose in water is due to its helical structure, which allows water molecules to interact with its hydroxyl groups. 
    When starch is heated in water, the amylose molecules dissolve, and this solubility is crucial for forming gels and pastes in cooking. 
    Amylose accounts for about 20-30% of starch, while amylopectin makes up the rest. Foods that contain higher amounts of amylose, like certain types of rice, tend to form firmer textures when cooked. 
    Amylose's ability to form gels makes it important in food processing and for products that require thickening. 
    Additionally, amylose is more resistant to digestion than amylopectin, which contributes to its classification as a resistant starch, often linked to health benefits such as improved gut health. 
    The role of amylose in plants is to store energy, and its structure allows it to be packed tightly in storage organs like seeds and tubers.`
  },
  {
    question: "What test is used to detect the presence of starch?",
    options: ["Biuret Test", "Iodine Test", "Benedict's Test", "Sudan III Test"],
    correct: "Iodine Test",
    explanation: `The iodine test is a simple and effective method used to detect the presence of starch. 
    When iodine comes into contact with starch, it binds to the helical structure of amylose, causing a deep blue or black color to appear. 
    This color change occurs because iodine molecules slip inside the helix of the amylose chains. The iodine test is very sensitive and can detect even small amounts of starch. 
    Heating the solution can cause the color to disappear, but it will reappear when the solution cools. This reversible color change is one of the key characteristics of the iodine test. 
    The test is commonly used in food science, biology, and chemistry to check for the presence of starch in various substances. 
    For example, a drop of iodine on a potato will turn blue-black, indicating the presence of starch. Other tests like the Benedict's test and Biuret test are used to detect sugars and proteins, respectively, but not starch. 
    The iodine test is quick, reliable, and widely used in educational settings to teach students about carbohydrate detection.`
  },
  {
    question: "Glycogen is primarily stored in which of the following organs?",
    options: ["Brain", "Liver and muscles", "Kidneys", "Stomach"],
    correct: "Liver and muscles",
    explanation: `Glycogen is the primary form of stored glucose in animals and is mainly found in the liver and muscles. 
    The liver stores glycogen to regulate blood sugar levels between meals, while muscle glycogen is used as a quick source of energy during physical activity. 
    Glycogen is a highly branched polysaccharide, which allows for rapid release of glucose when the body needs it. 
    Unlike fats, glycogen can be broken down quickly to provide energy, which is essential during periods of intense physical exertion or fasting. 
    When blood sugar levels drop, the liver converts glycogen back into glucose and releases it into the bloodstream to maintain a stable energy supply. 
    Muscle glycogen, however, is used locally and does not directly contribute to blood sugar regulation. 
    During exercise, muscle glycogen is rapidly depleted and must be replenished after physical activity. 
    Glycogen storage in the liver and muscles is limited, so it must be replenished regularly through diet. 
    Understanding how glycogen functions helps athletes and others optimize energy usage during performance.`
  },
  {
    question: "Which enzyme is lacking in humans, making cellulose indigestible?",
    options: ["Amylase", "Cellobiase", "Lactase", "Sucrase"],
    correct: "Cellobiase",
    explanation: `Humans lack the enzyme called cellobiase, which is responsible for breaking down cellulose. 
    Cellulose is a polysaccharide made up of glucose units, but it has β-1,4 glycosidic linkages that make it resistant to human digestion. 
    Most animals, including humans, cannot hydrolyze these linkages without the help of specific enzymes like cellobiase. 
    This enzyme is found in some herbivores, which allows them to digest cellulose-rich plants. 
    For humans, cellulose acts as dietary fiber, passing through the digestive system without being broken down. 
    Dietary fiber is important for digestive health, as it promotes regular bowel movements and prevents constipation. 
    It also has other health benefits, such as reducing the risk of certain diseases like heart disease and diabetes. 
    Cellulose is the most abundant organic compound on Earth, forming the primary structural component of plant cell walls. 
    Despite its indigestibility, cellulose plays an important role in the human diet by helping to regulate digestion and promote gut health.`
  },
  {
    question: "What type of bonds form the branching in amylopectin?",
    options: ["α-1,4 bonds", "β-1,4 bonds", "α-1,6 bonds", "β-1,6 bonds"],
    correct: "α-1,6 bonds",
    explanation: `Amylopectin is a branched polysaccharide found in starch. It consists of glucose units linked by α-1,4 glycosidic bonds in the main chain and α-1,6 glycosidic bonds at the branching points. 
    The α-1,6 bonds occur approximately every 24-30 glucose units and create the highly branched structure of amylopectin. 
    This branching is important because it allows amylopectin to be broken down more rapidly than amylose, which is unbranched. 
    The branched structure of amylopectin increases its surface area, making it more accessible to enzymes that break down starch into glucose. 
    This rapid breakdown is beneficial for plants, as it allows for quick mobilization of stored energy. 
    Amylopectin makes up the majority of starch, typically around 70-80%, and is responsible for the gelatinization of starch when heated in water. 
    The α-1,6 glycosidic linkages are crucial for the structure and function of amylopectin, differentiating it from other polysaccharides like amylose, which lacks branching.`
  },
  {
    question: "Which polysaccharide has no branching at all?",
    options: ["Amylopectin", "Glycogen", "Amylose", "Cellulose"],
    correct: "Amylose",
    explanation: `Amylose is an unbranched polysaccharide and one of the two main components of starch. 
    It consists of glucose units linked by α-1,4 glycosidic bonds, forming long, linear chains. 
    Amylose does not have any branching, which sets it apart from amylopectin, the other component of starch, which is highly branched. 
    The lack of branching in amylose makes it more resistant to digestion than amylopectin, as enzymes have fewer access points to break it down. 
    This resistance contributes to its classification as a resistant starch, which can have various health benefits, including improved digestion and blood sugar regulation. 
    Amylose typically makes up about 20-30% of starch, while amylopectin accounts for the rest. 
    Its unbranched structure allows it to form helical coils, which can trap water and other molecules, making it useful in food processing for thickening and gelling. 
    The linear, unbranched nature of amylose is what gives it its unique properties compared to other polysaccharides.`
  },
  
    {
    question: "Which test can identify the presence of reducing sugars?",
    options: ["Biuret Test", "Iodine Test", "Benedict's Test", "Sudan III Test"],
    correct: "Benedict's Test",
    explanation: `The Benedict's test is used to detect the presence of reducing sugars, such as glucose and fructose. 
    Reducing sugars have free aldehyde or ketone groups that can donate electrons to other molecules, which is the basis for this test. 
    When Benedict's reagent, which contains copper(II) ions, is added to a solution and heated, a positive result will cause the solution to change color from blue to green, yellow, orange, or red, depending on the amount of reducing sugar present. 
    The color change occurs because the copper(II) ions are reduced to copper(I) oxide, which precipitates out of the solution. 
    This test is often used in biology and chemistry labs to detect the presence of reducing sugars in foods and other substances. 
    The Benedict's test is different from the Biuret test, which detects proteins, and the iodine test, which detects starch. 
    Reducing sugars are important in nutrition and metabolism because they are easily absorbed and used by the body for energy.`
  },
  {
    question: "What type of polysaccharide is cellulose?",
    options: ["Homopolysaccharide", "Heteropolysaccharide", "Oligosaccharide", "Disaccharide"],
    correct: "Homopolysaccharide",
    explanation: `Cellulose is a homopolysaccharide composed entirely of glucose units linked by β-1,4 glycosidic bonds. 
    This structure gives cellulose its rigidity and makes it a key component of plant cell walls, providing structural support. 
    Although cellulose consists solely of glucose units, it cannot be digested by humans because we lack the enzyme cellulase, which is needed to break the β-1,4 linkages. 
    As a result, cellulose passes through the human digestive system as dietary fiber, promoting gut health and regular bowel movements. 
    Herbivores like cows and termites have symbiotic bacteria in their digestive systems that produce cellulase, allowing them to digest cellulose. 
    Cellulose is the most abundant organic compound on Earth and plays a crucial role in the carbon cycle. Its properties make it useful in various industries, such as paper and textiles.`
  },
  {
    question: "Which polysaccharide serves as the main structural component in the exoskeletons of insects?",
    options: ["Cellulose", "Glycogen", "Chitin", "Inulin"],
    correct: "Chitin",
    explanation: `Chitin is a polysaccharide that serves as the main structural component in the exoskeletons of insects, crustaceans, and some fungi. 
    It is similar to cellulose, but instead of being made entirely of glucose, chitin is composed of N-acetylglucosamine, a modified sugar. 
    The long chains of chitin are held together by hydrogen bonds, providing strength and flexibility to the exoskeletons of arthropods, which include insects and crustaceans like crabs and lobsters. 
    Chitin is also found in the cell walls of fungi, where it provides structural support. 
    Like cellulose, chitin is indigestible by humans, but it plays a vital role in ecosystems by contributing to the structure and function of various organisms. 
    The use of chitin and its derivatives in medicine, agriculture, and biotechnology is an area of growing research, with applications ranging from wound dressings to biodegradable plastics.`
  },
  {
    question: "Which type of polysaccharide is used in microbiological culture media?",
    options: ["Agar", "Amylose", "Glycogen", "Cellulose"],
    correct: "Agar",
    explanation: `Agar is a polysaccharide derived from red algae and is commonly used in microbiological culture media as a solidifying agent. 
    It is composed of two main components: agarose, a linear polymer, and agaropectin, a branched polymer. 
    Agar is ideal for culturing microorganisms because most bacteria cannot digest it, so it remains solid even as bacteria grow on its surface. 
    When agar is mixed with water and heated, it dissolves, but upon cooling, it forms a gel-like substance. 
    This property makes agar an essential tool in microbiology labs, where it is used to grow bacterial and fungal colonies for study. 
    Agar plates, which are petri dishes filled with agar, provide a stable environment for microbial growth and are a key technique in isolating and identifying microorganisms. 
    In addition to its role in science, agar is also used in the food industry as a thickener and gelling agent.`
  },
  {
    question: "What is the primary function of glycogen in animals?",
    options: ["Structural support", "Energy storage", "Protection", "Transport"],
    correct: "Energy storage",
    explanation: `Glycogen is the primary form of energy storage in animals. It is a highly branched polysaccharide made up of glucose units and is mainly stored in the liver and muscles. 
    In the liver, glycogen helps regulate blood sugar levels by releasing glucose into the bloodstream when energy is needed. 
    In muscles, glycogen provides a quick source of energy during physical activity. 
    Glycogen is synthesized from glucose during periods of food intake and broken down into glucose when energy is required, such as during fasting or exercise. 
    The branched structure of glycogen allows for rapid mobilization of glucose, making it an efficient form of energy storage. 
    The body can store only a limited amount of glycogen, which is why it must be replenished regularly through food consumption. 
    Glycogen's role in energy storage is crucial for maintaining metabolic processes and physical performance.`
  },
  {
    question: "What happens to starch when it interacts with iodine?",
    options: ["It turns blue-black", "It turns yellow", "It turns red", "It dissolves"],
    correct: "It turns blue-black",
    explanation: `When iodine interacts with starch, it forms a blue-black complex. This color change occurs because the iodine molecules insert themselves into the helical structure of amylose, one of the two components of starch. 
    The iodine test is a common laboratory method for detecting the presence of starch. When iodine is added to a solution or food containing starch, the appearance of a blue-black color indicates a positive result. 
    This test is useful in both food science and biology for identifying starch in different samples. 
    Heating the solution can cause the color to disappear, but it will reappear when cooled. 
    Amylose, the linear part of starch, is responsible for this reaction, while amylopectin, the branched component, does not react as strongly with iodine. 
    This test is commonly used in educational settings to teach students about carbohydrates and their properties.`
  },
  {
    question: "Which polysaccharide is the primary component of plant cell walls?",
    options: ["Glycogen", "Chitin", "Cellulose", "Inulin"],
    correct: "Cellulose",
    explanation: `Cellulose is the primary component of plant cell walls, providing structural support to plants. 
    It is a polysaccharide made up of glucose units linked by β-1,4 glycosidic bonds, which gives it a rigid, linear structure. 
    This structure allows cellulose to form strong fibers that can support the weight of the plant and provide protection against external forces. 
    Cellulose is the most abundant organic compound on Earth and plays a crucial role in the growth and stability of plants. 
    Although cellulose is composed of glucose, humans and many other animals cannot digest it because they lack the enzyme cellulase. 
    Instead, cellulose passes through the digestive system as dietary fiber, which is important for maintaining digestive health. 
    Herbivores, such as cows and termites, rely on symbiotic bacteria that produce cellulase, allowing them to break down cellulose and extract energy from it.`
  },
  {
    question: "Which polysaccharide is used as a thickening agent in foods and has prebiotic properties?",
    options: ["Inulin", "Chitin", "Glycogen", "Cellulose"],
    correct: "Inulin",
    explanation: `Inulin is a polysaccharide that is widely used as a thickening agent in the food industry and also has prebiotic properties, promoting gut health. 
    It is composed of fructose units linked by β-2,1 glycosidic bonds, which makes it resistant to digestion in the human small intestine. 
    Inulin passes into the large intestine, where it is fermented by beneficial bacteria, acting as a prebiotic. 
    This fermentation process promotes the growth of healthy gut bacteria, which can improve digestion and enhance immune function. 
    Inulin is naturally found in a variety of plants, including chicory root, garlic, onions, and bananas. 
    In the food industry, it is used to improve texture, add fiber, and act as a fat substitute in low-calorie products. 
    Inulin's health benefits, combined with its functional properties in food, make it a valuable ingredient in both nutrition and food science.`
  },
  {
    question: "Which of the following is indigestible by humans and functions as dietary fiber?",
    options: ["Glycogen", "Amylopectin", "Cellulose", "Amylose"],
    correct: "Cellulose",
    explanation: `Cellulose is a polysaccharide that is indigestible by humans and functions as dietary fiber. 
    It is composed of glucose units linked by β-1,4 glycosidic bonds, which humans cannot break down due to the lack of the enzyme cellulase. 
    As a result, cellulose passes through the human digestive system unchanged, contributing to the bulk of the stool and promoting healthy bowel movements. 
    Dietary fiber, including cellulose, is essential for maintaining digestive health and can help prevent constipation, reduce cholesterol levels, and regulate blood sugar. 
    Although humans cannot digest cellulose, it is a key structural component of plant cell walls and provides strength and rigidity to plants. 
    Cellulose is the most abundant organic compound on Earth and plays an important role in the carbon cycle. 
    In addition to its role in digestion, cellulose is used in a variety of industrial applications, including paper production and textiles.`
  },
  {
    question: "Which polysaccharide is the reserve carbohydrate in animals?",
    options: ["Starch", "Inulin", "Glycogen", "Cellulose"],
    correct: "Glycogen",
    explanation: `Glycogen is the reserve carbohydrate in animals, serving as the primary form of stored glucose. 
    It is a highly branched polysaccharide that is stored in the liver and muscles. 
    The liver uses glycogen to regulate blood sugar levels, while muscle glycogen is used as a quick source of energy during physical activity. 
    When blood glucose levels drop, the liver converts glycogen back into glucose and releases it into the bloodstream. 
    Muscle glycogen is broken down to provide energy directly to muscle cells during exercise. 
    Glycogen's highly branched structure allows it to be rapidly mobilized when energy is needed, making it an efficient storage form of glucose. 
    The body's glycogen stores are limited, so they must be replenished regularly through the diet. 
    Glycogen plays a crucial role in maintaining metabolic balance and supporting physical performance.`
  }
];

let currentQuestionIndex = 0;
let correctAttempts = 0;
let incorrectAttempts = 0;
let randomizedOptions = [];
let correctOptionIndex = 0;
let selectedQuestions = [];
let maxQuestions = 8;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  // Hide the intro screen and display the quiz screen
  document.getElementById('intro-container').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  
  // Shuffle and select the questions
  shuffle(questions);
  selectedQuestions = questions.slice(0, maxQuestions); // Select 8 random questions
  
  // Load the first question
  loadQuestion();
  
  // Initialize the progress bar
  updateProgressBar();
}

function loadQuestion() {
  const questionData = selectedQuestions[currentQuestionIndex];

  // Shuffle options and track correct answer position
  randomizedOptions = [...questionData.options];
  shuffle(randomizedOptions);
  correctOptionIndex = randomizedOptions.indexOf(questionData.correct);

  const container = document.getElementById('question-container');
  container.innerHTML = `
    <p>${questionData.question}</p>
    <ul>
      ${randomizedOptions.map((option, index) => `<li><button onclick="checkAnswer(${index})">${String.fromCharCode(65 + index)}) ${option}</button></li>`).join('')}
    </ul>
  `;

  // Hide any feedback or explanation when loading a new question
  document.getElementById('feedback-correct').classList.add('hidden');
  document.getElementById('feedback-incorrect').classList.add('hidden');
  document.getElementById('expanded-info').classList.add('hidden');
  updateProgressBar();
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === correctOptionIndex) {
    correctAttempts++;
    document.getElementById('feedback-correct').classList.remove('hidden');
    document.getElementById('question-container').classList.add('hidden');
  } else {
    incorrectAttempts++;
    document.getElementById('feedback-incorrect').classList.remove('hidden');
    document.getElementById('question-container').classList.add('hidden');
  }
}

function showExplanation() {
  const questionData = selectedQuestions[currentQuestionIndex];
  document.getElementById('feedback-incorrect').classList.add('hidden');
  document.getElementById('expanded-info').classList.remove('hidden');
  document.getElementById('expanded-text').innerText = questionData.explanation;
}

function retry() {
  document.getElementById('expanded-info').classList.add('hidden');
  document.getElementById('question-container').classList.remove('hidden');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / maxQuestions) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;
}

function endQuiz() {
  const endMessage = document.getElementById('end-message');
  document.getElementById('quiz-container').classList.add('hidden');
  endMessage.classList.remove('hidden');

  if (correctAttempts === 8) {
    endMessage.innerHTML = `
      <p>Well done! You got ${correctAttempts} out of 8 correct!</p>
      <div class="confetti">🎉</div>
    `;
  } else if (correctAttempts >= 6) {
    endMessage.innerHTML = `
      <p>Great work! You got ${correctAttempts} out of 8 correct!</p>
      <div class="balloons">
        <img src="balloon1.png" alt="Balloon">
        <img src="balloon2.png" alt="Balloon">
      </div>
    `;
  } else {
    endMessage.innerHTML = `
      <p>Don't worry! You got ${correctAttempts} out of 8 correct.</p>
      <p>Keep practicing and try the quiz again!</p>
    `;
  }
}
