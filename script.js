// Data storage for all app content
        const appData = {
            categories: [
                { id: 1, name: "Arithmetic Operations", icon: "fa-calculator" },
                { id: 2, name: "Ratios & Proportions", icon: "fa-balance-scale" },
                { id: 3, name: "Profit & Loss", icon: "fa-chart-line" },
                { id: 4, name: "Percentages", icon: "fa-percentage" },
                { id: 5, name: "Logical Reasoning", icon: "fa-brain" }
            ],
            
            formulas: {
                1: [
                    {
                        title: "Addition",
                        formula: "a + b = c",
                        explanation: "Adding two numbers gives their total.",
                        example: "5 + 3 = 8"
                    },
                    {
                        title: "Subtraction",
                        formula: "a - b = c",
                        explanation: "Subtracting one number from another gives the difference.",
                        example: "10 - 4 = 6"
                    },
                    {
                        title: "Multiplication",
                        formula: "a × b = c",
                        explanation: "Multiplying numbers gives the product.",
                        example: "6 × 7 = 42"
                    },
                    {
                        title: "Division",
                        formula: "a ÷ b = c",
                        explanation: "Dividing one number by another gives the quotient.",
                        example: "20 ÷ 5 = 4"
                    },
                    {
                        title: "Order of Operations",
                        formula: "PEMDAS: Parentheses, Exponents, Multiply/Divide, Add/Subtract",
                        explanation: "Follow this order when solving expressions with multiple operations.",
                        example: "2 + 3 × 4 = 14 (not 20)"
                    }
                ],
                2: [
                    {
                        title: "Ratio",
                        formula: "a : b",
                        explanation: "A ratio compares two quantities.",
                        example: "The ratio of apples to oranges is 3:2"
                    },
                    {
                        title: "Proportion",
                        formula: "a/b = c/d",
                        explanation: "A proportion states that two ratios are equal.",
                        example: "2/3 = 4/6"
                    },
                    {
                        title: "Direct Proportion",
                        formula: "y = kx",
                        explanation: "When one quantity increases, the other increases at the same rate.",
                        example: "If y = 2x, when x=3, y=6"
                    },
                    {
                        title: "Inverse Proportion",
                        formula: "y = k/x",
                        explanation: "When one quantity increases, the other decreases.",
                        example: "If y = 12/x, when x=3, y=4"
                    }
                ],
                3: [
                    {
                        title: "Profit",
                        formula: "Selling Price - Cost Price",
                        explanation: "Profit is the money gained when selling for more than the cost.",
                        example: "Cost: $20, Sell: $25, Profit: $5"
                    },
                    {
                        title: "Loss",
                        formula: "Cost Price - Selling Price",
                        explanation: "Loss occurs when selling for less than the cost.",
                        example: "Cost: $20, Sell: $18, Loss: $2"
                    },
                    {
                        title: "Profit Percentage",
                        formula: "(Profit / Cost Price) × 100%",
                        explanation: "The percentage of profit relative to the cost.",
                        example: "Cost: $20, Profit: $5, Profit% = (5/20)×100 = 25%"
                    },
                    {
                        title: "Loss Percentage",
                        formula: "(Loss / Cost Price) × 100%",
                        explanation: "The percentage of loss relative to the cost.",
                        example: "Cost: $20, Loss: $2, Loss% = (2/20)×100 = 10%"
                    }
                ],
                4: [
                    {
                        title: "Percentage",
                        formula: "(Part / Whole) × 100%",
                        explanation: "A percentage is a fraction of 100.",
                        example: "3 out of 4 = (3/4)×100 = 75%"
                    },
                    {
                        title: "Percentage Increase",
                        formula: "[(New - Original) / Original] × 100%",
                        explanation: "Calculates how much a value has increased.",
                        example: "Original: 50, New: 65, Increase = [(65-50)/50]×100 = 30%"
                    },
                    {
                        title: "Percentage Decrease",
                        formula: "[(Original - New) / Original] × 100%",
                        explanation: "Calculates how much a value has decreased.",
                        example: "Original: 80, New: 68, Decrease = [(80-68)/80]×100 = 15%"
                    },
                    {
                        title: "Finding a Percentage of a Number",
                        formula: "(Percentage / 100) × Number",
                        explanation: "Calculates what a certain percentage of a number is.",
                        example: "25% of 200 = (25/100)×200 = 50"
                    }
                ],
                5: [
                    {
                        title: "If-Then Statements",
                        formula: "If A, then B",
                        explanation: "If the first statement is true, the second must also be true.",
                        example: "If it's raining, then the ground is wet."
                    },
                    {
                        title: "Deductive Reasoning",
                        formula: "General → Specific",
                        explanation: "Applying a general rule to a specific case.",
                        example: "All squares have 4 sides. This is a square. Therefore, it has 4 sides."
                    },
                    {
                        title: "Pattern Recognition",
                        formula: "Identify the pattern to predict what comes next",
                        explanation: "Look for repeating sequences or relationships.",
                        example: "2, 4, 6, 8, ... next is 10 (adding 2 each time)"
                    },
                    {
                        title: "Logical Operators",
                        formula: "AND, OR, NOT",
                        explanation: "Words that connect or modify statements in logic.",
                        example: "If it's sunny AND warm, we'll go to the park."
                    }
                ]
            },
            
            quizQuestions: {
                1: [
                    {
                        question: "What is 15 + 27?",
                        options: ["42", "32", "37", "45"],
                        correct: 0,
                        explanation: "15 + 27 = 42. Well done! You added those numbers correctly."
                    },
                    {
                        question: "What is 8 × 6?",
                        options: ["48", "42", "54", "56"],
                        correct: 0,
                        explanation: "8 × 6 = 48. Great job remembering your multiplication!"
                    },
                    {
                        question: "What is 45 ÷ 9?",
                        options: ["5", "6", "4", "9"],
                        correct: 0,
                        explanation: "45 ÷ 9 = 5. Excellent! Division can be tricky but you've got it."
                    }
                ],
                2: [
                    {
                        question: "If the ratio of cats to dogs is 2:3 and there are 6 cats, how many dogs are there?",
                        options: ["9", "6", "4", "8"],
                        correct: 0,
                        explanation: "With 6 cats (2×3), dogs would be 3×3=9. You're thinking proportionally!"
                    },
                    {
                        question: "If 2 pens cost $6, how much do 5 pens cost?",
                        options: ["$15", "$12", "$10", "$18"],
                        correct: 0,
                        explanation: "Each pen costs $3, so 5 pens cost $15. You solved that proportion perfectly!"
                    },
                    {
                        question: "Are the ratios 3:5 and 12:20 equivalent?",
                        options: ["Yes", "No", "Sometimes", "Can't tell"],
                        correct: 0,
                        explanation: "Yes! 3:5 multiplied by 4 is 12:20. Great spot!"
                    }
                ],
                3: [
                    {
                        question: "If you buy a book for $10 and sell it for $13, what is your profit?",
                        options: ["$3", "$2", "$4", "$1"],
                        correct: 0,
                        explanation: "Profit = Selling Price - Cost Price = $13 - $10 = $3. You calculated that perfectly!"
                    },
                    {
                        question: "You buy a shirt for $25 and sell it for $20. What is your loss?",
                        options: ["$5", "$3", "$10", "$15"],
                        correct: 0,
                        explanation: "Loss = Cost Price - Selling Price = $25 - $20 = $5. You understand loss calculations well!"
                    },
                    {
                        question: "If you make $8 profit on a $40 item, what is the profit percentage?",
                        options: ["20%", "15%", "25%", "10%"],
                        correct: 0,
                        explanation: "Profit % = (Profit/Cost) × 100 = (8/40)×100 = 20%. You're mastering percentages too!"
                    }
                ],
                4: [
                    {
                        question: "What is 25% of 80?",
                        options: ["20", "25", "30", "15"],
                        correct: 0,
                        explanation: "25% of 80 = (25/100)×80 = 20. Perfect calculation!"
                    },
                    {
                        question: "If a price increases from $50 to $60, what is the percentage increase?",
                        options: ["20%", "10%", "15%", "25%"],
                        correct: 0,
                        explanation: "Increase = (60-50)/50 × 100 = 20%. You're getting the hang of percentage changes!"
                    },
                    {
                        question: "What is 3 out of 12 as a percentage?",
                        options: ["25%", "30%", "20%", "33%"],
                        correct: 0,
                        explanation: "3/12 = 1/4 = 25%. You're really good at converting fractions to percentages!"
                    }
                ],
                5: [
                    {
                        question: "What comes next: 2, 4, 8, 16, ...?",
                        options: ["32", "24", "20", "18"],
                        correct: 0,
                        explanation: "Each number doubles the previous: 2, 4, 8, 16, 32. Excellent pattern recognition!"
                    },
                    {
                        question: "If all birds have feathers, and a robin is a bird, then...",
                        options: ["A robin has feathers", "A robin can fly", "A robin builds nests", "All are true"],
                        correct: 0,
                        explanation: "Correct! This is deductive reasoning: All birds have feathers, robins are birds, so robins have feathers."
                    },
                    {
                        question: "If today is Monday, what day comes after tomorrow?",
                        options: ["Wednesday", "Tuesday", "Thursday", "Friday"],
                        correct: 0,
                        explanation: "Today is Monday, tomorrow is Tuesday, day after is Wednesday. Great logical thinking!"
                    }
                ]
            },
            
            motivationalMessages: [
                "You're doing enough just by being here and trying.",
                "Every small step is progress. Celebrate your effort.",
                "Your brain grows stronger every time you challenge it.",
                "Mistakes are just stepping stones to understanding.",
                "Take a deep breath. You've got this.",
                "You know more than you think you do. Trust yourself.",
                "It's okay to take breaks. Your mind needs rest too.",
                "Focus on progress, not perfection.",
                "You're becoming more capable with every problem you solve.",
                "Remember how far you've come, not just how far you have to go."
            ]
        };

        // DOM elements
        const categoriesGrid = document.getElementById('categoriesGrid');
        const formulaViewer = document.getElementById('formulaViewer');
        const quizContainer = document.getElementById('quizContainer');
        const startBtn = document.getElementById('startBtn');
        const motivationBtn = document.getElementById('motivationBtn');
        const motivationMessage = document.getElementById('motivationMessage');

        // Current state
        let currentCategoryId = null;
        let selectedQuizAnswers = [];
        let quizSubmitted = false;

        // Initialize the app
        function initApp() {
            renderCategories();
            setupEventListeners();
        }

        // Render category cards
        function renderCategories() {
            categoriesGrid.innerHTML = '';
            
            appData.categories.forEach(category => {
                const card = document.createElement('div');
                card.className = 'category-card';
                card.dataset.id = category.id;
                
                card.innerHTML = `
                    <i class="fas ${category.icon}"></i>
                    <h3>${category.name}</h3>
                    <p>Click to view formulas and practice</p>
                `;
                
                card.addEventListener('click', () => selectCategory(category.id));
                categoriesGrid.appendChild(card);
            });
        }

        // Select a category and show formulas
        function selectCategory(categoryId) {
            currentCategoryId = categoryId;
            selectedQuizAnswers = [];
            quizSubmitted = false;
            
            // Find category name
            const category = appData.categories.find(cat => cat.id === categoryId);
            
            // Show formula viewer
            formulaViewer.style.display = 'block';
            formulaViewer.innerHTML = `
                <div class="formula-header">
                    <h2>${category.name} - Key Formulas</h2>
                    <button class="btn back-btn" id="backToCategories">Back to Topics</button>
                </div>
                <div class="formula-grid" id="formulaGrid"></div>
                <div style="text-align: center; margin-top: 30px;">
                    <button class="btn" id="startQuizBtn">Practice with Confidence-Building Questions</button>
                </div>
            `;
            
            // Render formulas
            const formulaGrid = document.getElementById('formulaGrid');
            const formulas = appData.formulas[categoryId];
            
            formulas.forEach(formula => {
                const formulaCard = document.createElement('div');
                formulaCard.className = 'formula-card';
                
                formulaCard.innerHTML = `
                    <h3>${formula.title}</h3>
                    <div class="formula">${formula.formula}</div>
                    <p>${formula.explanation}</p>
                    <div class="example">
                        <strong>Example:</strong> ${formula.example}
                    </div>
                `;
                
                formulaGrid.appendChild(formulaCard);
            });
            
            // Scroll to formula viewer
            formulaViewer.scrollIntoView({ behavior: 'smooth' });
            
            // Set up event listeners
            document.getElementById('backToCategories').addEventListener('click', () => {
                formulaViewer.style.display = 'none';
                quizContainer.style.display = 'none';
                categoriesGrid.scrollIntoView({ behavior: 'smooth' });
            });
            
            document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
        }

        // Start the quiz for the selected category
        function startQuiz() {
            const questions = appData.quizQuestions[currentCategoryId];
            selectedQuizAnswers = new Array(questions.length).fill(null);
            
            // Show quiz container
            quizContainer.style.display = 'block';
            quizContainer.innerHTML = `
                <h2>Confidence-Building Practice</h2>
                <p>These questions are designed to help you feel more comfortable with the concepts. Take your time.</p>
                <div id="quizQuestionsContainer"></div>
                <div id="quizFeedback" class="feedback"></div>
                <div style="text-align: center;">
                    <button class="btn submit-btn" id="submitQuizBtn">Check Your Understanding</button>
                </div>
                <div id="quizResult" class="quiz-result"></div>
            `;
            
            // Render quiz questions
            const quizQuestionsContainer = document.getElementById('quizQuestionsContainer');
            
            questions.forEach((question, index) => {
                const questionElement = document.createElement('div');
                questionElement.className = 'quiz-question';
                questionElement.innerHTML = `
                    <h3>Question ${index + 1}</h3>
                    <p>${question.question}</p>
                    <div class="options" id="options-${index}"></div>
                `;
                
                quizQuestionsContainer.appendChild(questionElement);
                
                // Render options
                const optionsContainer = document.getElementById(`options-${index}`);
                question.options.forEach((option, optionIndex) => {
                    const optionElement = document.createElement('div');
                    optionElement.className = 'option';
                    optionElement.textContent = option;
                    optionElement.dataset.index = optionIndex;
                    
                    optionElement.addEventListener('click', () => {
                        if (quizSubmitted) return;
                        
                        // Remove selected class from all options in this question
                        const allOptions = optionsContainer.querySelectorAll('.option');
                        allOptions.forEach(opt => opt.classList.remove('selected'));
                        
                        // Add selected class to clicked option
                        optionElement.classList.add('selected');
                        
                        // Store the selected answer
                        selectedQuizAnswers[index] = optionIndex;
                    });
                    
                    optionsContainer.appendChild(optionElement);
                });
            });
            
            // Scroll to quiz
            quizContainer.scrollIntoView({ behavior: 'smooth' });
            
            // Set up submit button
            document.getElementById('submitQuizBtn').addEventListener('click', submitQuiz);
        }

        // Submit the quiz and show feedback
        function submitQuiz() {
            quizSubmitted = true;
            const questions = appData.quizQuestions[currentCategoryId];
            let correctCount = 0;
            
            // Check answers
            questions.forEach((question, index) => {
                const optionsContainer = document.getElementById(`options-${index}`);
                const options = optionsContainer.querySelectorAll('.option');
                const selectedAnswer = selectedQuizAnswers[index];
                
                if (selectedAnswer === null) {
                    // No answer selected
                    options.forEach(option => {
                        option.classList.add('incorrect');
                    });
                } else if (selectedAnswer === question.correct) {
                    // Correct answer
                    correctCount++;
                    options[selectedAnswer].classList.add('correct');
                } else {
                    // Incorrect answer
                    options[selectedAnswer].classList.add('incorrect');
                    options[question.correct].classList.add('correct');
                }
            });
            
            // Show feedback
            const feedbackElement = document.getElementById('quizFeedback');
            const resultElement = document.getElementById('quizResult');
            
            if (correctCount === questions.length) {
                feedbackElement.textContent = "Excellent! You answered all questions correctly. You're really understanding these concepts well!";
                feedbackElement.className = 'feedback positive-feedback';
            } else if (correctCount >= questions.length / 2) {
                feedbackElement.textContent = "Good work! You're making solid progress. Every question you got right shows your growing understanding.";
                feedbackElement.className = 'feedback positive-feedback';
            } else {
                feedbackElement.textContent = "Thank you for trying these questions! Remember that practice is about learning, not perfection. Let's review the formulas again when you're ready.";
                feedbackElement.className = 'feedback supportive-feedback';
            }
            
            feedbackElement.style.display = 'block';
            
            // Show final result with confidence-building message
            resultElement.style.display = 'block';
            resultElement.innerHTML = `
                <h3>Practice Complete!</h3>
                <p>You answered ${correctCount} out of ${questions.length} questions.</p>
                <p>Remember: The number isn't what matters most. What matters is that you're building your confidence and understanding.</p>
                <p>You're doing great by simply showing up and practicing. Ready to try another topic when you feel comfortable?</p>
                <button class="btn" id="tryAnotherTopicBtn">Try Another Topic</button>
            `;
            
            // Scroll to result
            resultElement.scrollIntoView({ behavior: 'smooth' });
            
            // Set up event listener for try another topic button
            document.getElementById('tryAnotherTopicBtn').addEventListener('click', () => {
                quizContainer.style.display = 'none';
                formulaViewer.style.display = 'none';
                categoriesGrid.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // Get a random motivational message
        function getMotivationalMessage() {
            const randomIndex = Math.floor(Math.random() * appData.motivationalMessages.length);
            return appData.motivationalMessages[randomIndex];
        }

        // Set up event listeners
        function setupEventListeners() {
            // Start button scrolls to categories
            startBtn.addEventListener('click', () => {
                document.getElementById('categoriesSection').scrollIntoView({ behavior: 'smooth' });
            });
            
            // Motivation button shows a random message
            motivationBtn.addEventListener('click', () => {
                motivationMessage.textContent = getMotivationalMessage();
                motivationMessage.style.animation = 'none';
                setTimeout(() => {
                    motivationMessage.style.animation = 'fadeIn 0.5s ease';
                }, 10);
            });
        }

        // Initialize the app when the page loads
        document.addEventListener('DOMContentLoaded', initApp);