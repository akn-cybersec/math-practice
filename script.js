// Enhanced data storage with achievements
        const appData = {
            categories: [
                { id: 1, name: "Arithmetic Operations", icon: "fa-calculator", color: "#7986cb", viewed: false, progress: 0 },
                { id: 2, name: "Ratios & Proportions", icon: "fa-balance-scale", color: "#42a5f5", viewed: false, progress: 0 },
                { id: 3, name: "Profit & Loss", icon: "fa-chart-line", color: "#66bb6a", viewed: false, progress: 0 },
                { id: 4, name: "Percentages", icon: "fa-percentage", color: "#ab47bc", viewed: false, progress: 0 },
                { id: 5, name: "Logical Reasoning", icon: "fa-brain", color: "#ffa726", viewed: false, progress: 0 }
            ],
            
            // Achievements data
            achievements: [
                {
                    id: 1,
                    title: "First Steps",
                    description: "View your first topic",
                    icon: "fa-shoe-prints",
                    unlocked: false,
                    progress: 0,
                    target: 1,
                    type: "topics_viewed"
                },
                {
                    id: 2,
                    title: "Practice Makes Progress",
                    description: "Answer 5 questions",
                    icon: "fa-trophy",
                    unlocked: false,
                    progress: 0,
                    target: 5,
                    type: "questions_answered"
                },
                {
                    id: 3,
                    title: "Perfect Score",
                    description: "Get 3 correct answers in a row",
                    icon: "fa-star",
                    unlocked: false,
                    progress: 0,
                    target: 3,
                    type: "correct_streak"
                },
                {
                    id: 4,
                    title: "Topic Explorer",
                    description: "View 3 different topics",
                    icon: "fa-compass",
                    unlocked: false,
                    progress: 0,
                    target: 3,
                    type: "topics_viewed"
                },
                {
                    id: 5,
                    title: "Formula Master",
                    description: "Complete all formulas in one category",
                    icon: "fa-graduation-cap",
                    unlocked: false,
                    progress: 0,
                    target: 100,
                    type: "category_completion"
                },
                {
                    id: 6,
                    title: "Confidence Builder",
                    description: "Reach 80% confidence level",
                    icon: "fa-heart",
                    unlocked: false,
                    progress: 0,
                    target: 80,
                    type: "confidence_level"
                },
                {
                    id: 7,
                    title: "Maths Enthusiast",
                    description: "Answer 10 questions correctly",
                    icon: "fa-brain",
                    unlocked: false,
                    progress: 0,
                    target: 10,
                    type: "correct_answers"
                },
                {
                    id: 8,
                    title: "Learning Champion",
                    description: "Complete 2 full topics",
                    icon: "fa-crown",
                    unlocked: false,
                    progress: 0,
                    target: 2,
                    type: "topics_completed"
                }
            ],
            
            formulas: {
                1: [ // Arithmetic Operations
        {
            title: "Addition",
            formula: "a + b = c",
            explanation: "Adding two numbers gives their total. Think of it as combining groups of items.",
            example: "If you have 5 apples and get 3 more, you have 5 + 3 = 8 apples total."
        },
        {
            title: "Subtraction",
            formula: "a - b = c",
            explanation: "Subtracting one number from another gives the difference. It's like taking away items from a group.",
            example: "If you have 10 cookies and eat 4, you have 10 - 4 = 6 cookies left."
        },
        {
            title: "Multiplication",
            formula: "a × b = c",
            explanation: "Multiplying numbers gives the product. It's like adding the same number multiple times.",
            example: "If each box has 6 chocolates and you have 7 boxes, you have 6 × 7 = 42 chocolates total."
        },
        {
            title: "Division",
            formula: "a ÷ b = c",
            explanation: "Dividing one number by another gives the quotient. It's like sharing items equally among friends.",
            example: "If you have 20 stickers and want to share them equally among 5 friends, each gets 20 ÷ 5 = 4 stickers."
        },
        {
            title: "Even & Odd Numbers",
            formula: "Check remainder when divided by 2",
            explanation: "Even numbers are divisible by 2, odd numbers leave a remainder of 1.",
            example: "4 ÷ 2 = 2 (even), 7 ÷ 2 = 3 remainder 1 (odd)"
        },
        {
            title: "Square & Square Roots",
            formula: "x² and √x",
            explanation: "Square means multiplying a number by itself. Square root is the opposite.",
            example: "5² = 25, √25 = 5"
        },
        {
            title: "Simple Averages",
            formula: "(Sum of numbers) / (Number of numbers)",
            explanation: "Average tells you the central value of a set of numbers.",
            example: "Average of 4, 8, 12 = (4+8+12)/3 = 8"
        }
    ],
    2: [ // Ratios & Proportions
        {
            title: "Ratio",
            formula: "a : b",
            explanation: "A ratio compares two quantities. It shows how much of one thing there is compared to another.",
            example: "If a fruit basket has 3 apples and 2 oranges, the ratio of apples to oranges is 3:2."
        },
        {
            title: "Proportion",
            formula: "a/b = c/d",
            explanation: "A proportion states that two ratios are equal. If one ratio doubles, the other should too.",
            example: "2/3 = 4/6 because both simplify to the same ratio."
        },
        {
            title: "Part-to-Whole Ratio",
            formula: "Part / Total",
            explanation: "Shows what fraction a part is of the whole.",
            example: "If 3 students out of 10 like ice cream, ratio = 3/10"
        },
        {
            title: "Scaling Ratios",
            formula: "Multiply both terms by same number",
            explanation: "Scaling keeps the proportion the same while changing absolute numbers.",
            example: "2:3 scaled by 2 → 4:6"
        },
        {
            title: "Ratio to Percentage",
            formula: "(a / (a+b)) × 100%",
            explanation: "Convert a ratio into a percentage to understand part of whole.",
            example: "Ratio 3:2 → 3/(3+2)×100 = 60%"
        }
    ],
    3: [ // Profit & Loss
        {
            title: "Profit",
            formula: "Selling Price - Cost Price",
            explanation: "Profit is the money gained when selling something for more than it cost.",
            example: "Buy a book for $20, sell it for $25. Profit = $25 - $20 = $5."
        },
        {
            title: "Loss",
            formula: "Cost Price - Selling Price",
            explanation: "Loss occurs when you sell something for less than it cost.",
            example: "Buy a toy for $30, sell it for $27. Loss = $30 - $27 = $3."
        },
        {
            title: "Profit Percentage",
            formula: "(Profit / Cost Price) × 100%",
            explanation: "Shows profit relative to the original cost.",
            example: "Profit = $5, Cost = $20 → Profit% = (5/20)×100 = 25%"
        },
        {
            title: "Loss Percentage",
            formula: "(Loss / Cost Price) × 100%",
            explanation: "Shows loss relative to the original cost.",
            example: "Loss = $3, Cost = $30 → Loss% = (3/30)×100 = 10%"
        },
        {
            title: "Selling Price from Profit%",
            formula: "Selling Price = Cost Price × (1 + Profit%/100)",
            explanation: "Find selling price if profit percentage is known.",
            example: "Cost = $50, Profit% = 20 → SP = 50×(1+0.2)=60"
        }
    ],
    4: [ // Percentages
        {
            title: "Percentage Basics",
            formula: "(Part / Whole) × 100%",
            explanation: "A percentage is a fraction of 100. It's a way to express parts of a whole.",
            example: "3 out of 4 students passed. Percentage passed = (3/4)×100 = 75%."
        },
        {
            title: "Percentage Increase",
            formula: "[(New - Original) / Original] × 100%",
            explanation: "Calculates how much a value has increased as a percentage of the original.",
            example: "Original price: $80, New price: $100. Increase = [(100-80)/80]×100 = 25% increase."
        },
        {
            title: "Percentage Decrease",
            formula: "[(Original - New) / Original] × 100%",
            explanation: "Calculates decrease as a percentage of the original.",
            example: "Price $120 → $90. Decrease = [(120-90)/120]×100 = 25%"
        },
        {
            title: "Finding Original from Percentage",
            formula: "Original = Part / (Percentage / 100)",
            explanation: "Calculate original value when given part and percentage.",
            example: "20 is 25% → Original = 20/(25/100) = 80"
        },
        {
            title: "Percentage of Total",
            formula: "(Percentage × Total) / 100",
            explanation: "Find part when given total and percentage.",
            example: "50% of 200 = (50×200)/100 = 100"
        }
    ],
    5: [ // Logical Reasoning
        {
            title: "If-Then Statements",
            formula: "If A, then B",
            explanation: "If the first statement (A) is true, then the second statement (B) must also be true.",
            example: "If it's raining (A), then the ground is wet (B)."
        },
        {
            title: "Pattern Recognition",
            formula: "Identify the pattern to predict what comes next",
            explanation: "Look for repeating sequences, relationships, or rules in a series of items.",
            example: "2, 4, 6, 8, ... Each number increases by 2, so the next number is 10."
        },
        {
            title: "Series Completion",
            formula: "Observe sequence and fill the missing value",
            explanation: "Find missing number or letter in a series.",
            example: "A, C, E, ?, I → G"
        },
        {
            title: "Odd One Out",
            formula: "Find the item that doesn't belong",
            explanation: "Identify the element that breaks the pattern.",
            example: "2, 4, 6, 9 → 9 is odd one out"
        },
        {
            title: "Simple Logical Deduction",
            formula: "Use given facts to conclude",
            explanation: "Draw conclusions using the given statements.",
            example: "All cats are animals. Tom is a cat → Tom is an animal."
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
            question: "What is 50 ÷ 5?",
            options: ["10", "15", "5", "12"],
            correct: 0,
            explanation: "50 ÷ 5 = 10. You correctly divided the numbers!"
        },
        {
            question: "What is 100 - 37?",
            options: ["63", "67", "73", "60"],
            correct: 0,
            explanation: "100 - 37 = 63. Subtraction is all about finding the difference!"
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
            question: "The ratio of red to blue balls is 5:2. If there are 14 blue balls, how many red balls are there?",
            options: ["35", "30", "25", "28"],
            correct: 0,
            explanation: "5:2 = x:14 ⇒ x = 5×14/2 = 35. Perfect!"
        },
        {
            question: "If 3 pencils cost $6, what is the cost of 5 pencils?",
            options: ["$10", "$9", "$12", "$11"],
            correct: 0,
            explanation: "Cost per pencil = $6/3 = $2, so 5 pencils cost 5×2 = $10."
        }
    ],
    3: [
        {
            question: "If you buy a book for $10 and sell it for $13, what is your profit?",
            options: ["$3", "$2", "$4", "$1"],
            correct: 0,
            explanation: "Profit = $13 - $10 = $3. You calculated that perfectly!"
        },
        {
            question: "A toy costs $50 and is sold at $45. What is the loss?",
            options: ["$5", "$10", "$15", "$8"],
            correct: 0,
            explanation: "Loss = $50 - $45 = $5. Loss occurs when selling price is less than cost price."
        },
        {
            question: "Buy a pen for $8 and sell it for $12. Profit percentage = ?",
            options: ["50%", "40%", "25%", "33%"],
            correct: 0,
            explanation: "Profit = 12-8=4. Profit% = (4/8)*100 = 50%. Nice calculation!"
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
            question: "A dress originally costs $200. If price increases by 10%, what is the new price?",
            options: ["$220", "$210", "$215", "$225"],
            correct: 0,
            explanation: "Increase = 10% of 200 = 20. New price = 200+20 = $220."
        },
        {
            question: "If 40% of students passed an exam and there are 50 students, how many passed?",
            options: ["20", "25", "15", "30"],
            correct: 0,
            explanation: "40% of 50 = 0.4×50 = 20 students. Great job calculating percentages!"
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
            question: "If-Then: If it is snowing, then the ground is cold. It is snowing. What can we conclude?",
            options: ["The ground is cold", "It is sunny", "It is raining", "Nothing"],
            correct: 0,
            explanation: "If snowing, then ground is cold. Snowing is true, so the ground must be cold."
        },
        {
            question: "Find the next number in the series: 5, 10, 15, 20, ...",
            options: ["25", "24", "30", "22"],
            correct: 0,
            explanation: "The pattern increases by 5 each time: 5, 10, 15, 20, 25."
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

        // User progress tracking with achievements
        const userProgress = {
            topicsViewed: 0,
            questionsAnswered: 0,
            correctAnswers: 0,
            correctStreak: 0,
            topicsCompleted: {},
            achievementsUnlocked: 0,
            confidenceLevel: 100,
            
            // Save to local storage
            saveToStorage: function() {
                const data = {
                    topicsViewed: this.topicsViewed,
                    questionsAnswered: this.questionsAnswered,
                    correctAnswers: this.correctAnswers,
                    correctStreak: this.correctStreak,
                    topicsCompleted: this.topicsCompleted,
                    achievementsUnlocked: this.achievementsUnlocked,
                    confidenceLevel: this.confidenceLevel,
                    categories: appData.categories.map(cat => ({
                        id: cat.id,
                        viewed: cat.viewed,
                        progress: cat.progress
                    })),
                    achievements: appData.achievements.map(ach => ({
                        id: ach.id,
                        unlocked: ach.unlocked,
                        progress: ach.progress
                    }))
                };
                localStorage.setItem('mathsConfidenceProgress', JSON.stringify(data));
            },
            
            // Load from local storage
            loadFromStorage: function() {
                const saved = localStorage.getItem('mathsConfidenceProgress');
                if (saved) {
                    try {
                        const data = JSON.parse(saved);
                        
                        this.topicsViewed = data.topicsViewed || 0;
                        this.questionsAnswered = data.questionsAnswered || 0;
                        this.correctAnswers = data.correctAnswers || 0;
                        this.correctStreak = data.correctStreak || 0;
                        this.topicsCompleted = data.topicsCompleted || {};
                        this.achievementsUnlocked = data.achievementsUnlocked || 0;
                        this.confidenceLevel = data.confidenceLevel || 100;
                        
                        // Load categories
                        if (data.categories) {
                            data.categories.forEach(savedCat => {
                                const category = appData.categories.find(c => c.id === savedCat.id);
                                if (category) {
                                    category.viewed = savedCat.viewed || false;
                                    category.progress = savedCat.progress || 0;
                                }
                            });
                        }
                        
                        // Load achievements
                        if (data.achievements) {
                            data.achievements.forEach(savedAch => {
                                const achievement = appData.achievements.find(a => a.id === savedAch.id);
                                if (achievement) {
                                    achievement.unlocked = savedAch.unlocked || false;
                                    achievement.progress = savedAch.progress || 0;
                                }
                            });
                        }
                        
                        console.log('Progress loaded from storage');
                    } catch (e) {
                        console.log('Error loading from storage, starting fresh');
                    }
                }
            },
            
            // Update stats display
            updateStats: function() {
                document.getElementById('topicsViewed').textContent = this.topicsViewed;
                document.getElementById('questionsAnswered').textContent = this.questionsAnswered;
                document.getElementById('correctAnswers').textContent = this.correctAnswers;
                
                // Calculate confidence level
                let confidence = 100;
                if (this.questionsAnswered > 0) {
                    const accuracy = (this.correctAnswers / this.questionsAnswered) * 100;
                    const completion = Object.keys(this.topicsCompleted).length / appData.categories.length * 100;
                    confidence = Math.min(100, Math.max(70, (accuracy * 0.7 + completion * 0.3)));
                }
                this.confidenceLevel = Math.round(confidence);
                document.getElementById('confidenceLevel').textContent = `${this.confidenceLevel}%`;
                
                // Update achievements count
                const unlockedCount = appData.achievements.filter(a => a.unlocked).length;
                document.getElementById('achievementsCount').textContent = unlockedCount;
                this.achievementsUnlocked = unlockedCount;
                
                // Check for new achievements
                this.checkAchievements();
                
                // Save to storage
                this.saveToStorage();
            },
            
            // Check and update achievements
            checkAchievements: function() {
                let newAchievements = [];
                
                appData.achievements.forEach(achievement => {
                    if (!achievement.unlocked) {
                        let progress = 0;
                        let shouldUnlock = false;
                        
                        switch(achievement.type) {
                            case 'topics_viewed':
                                progress = this.topicsViewed;
                                shouldUnlock = progress >= achievement.target;
                                break;
                            case 'questions_answered':
                                progress = this.questionsAnswered;
                                shouldUnlock = progress >= achievement.target;
                                break;
                            case 'correct_streak':
                                progress = this.correctStreak;
                                shouldUnlock = progress >= achievement.target;
                                break;
                            case 'category_completion':
                                const completedCategories = Object.values(this.topicsCompleted).filter(p => p >= 100).length;
                                progress = completedCategories * 100;
                                shouldUnlock = progress >= achievement.target;
                                break;
                            case 'confidence_level':
                                progress = this.confidenceLevel;
                                shouldUnlock = progress >= achievement.target;
                                break;
                            case 'correct_answers':
                                progress = this.correctAnswers;
                                shouldUnlock = progress >= achievement.target;
                                break;
                            case 'topics_completed':
                                const completedTopics = Object.values(this.topicsCompleted).filter(p => p >= 100).length;
                                progress = completedTopics;
                                shouldUnlock = progress >= achievement.target;
                                break;
                        }
                        
                        achievement.progress = Math.min(progress, achievement.target);
                        
                        if (shouldUnlock && !achievement.unlocked) {
                            achievement.unlocked = true;
                            newAchievements.push(achievement);
                        }
                    }
                });
                
                // Show notifications for new achievements
                newAchievements.forEach(achievement => {
                    this.showAchievementNotification(achievement);
                });
                
                // Update achievements display
                if (newAchievements.length > 0) {
                    this.renderAchievements();
                }
            },
            
            // Show achievement notification
            showAchievementNotification: function(achievement) {
                const notification = document.createElement('div');
                notification.className = 'notification';
                notification.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="font-size: 2rem;">🏆</div>
                        <div>
                            <div style="font-weight: bold; font-size: 1.1rem;">Achievement Unlocked!</div>
                            <div>${achievement.title}</div>
                            <div style="font-size: 0.9rem; opacity: 0.9;">${achievement.description}</div>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(notification);
                
                // Remove notification after 4 seconds
                setTimeout(() => {
                    notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
                    setTimeout(() => notification.remove(), 300);
                }, 4000);
            },
            
            // Render achievements
            renderAchievements: function() {
                const grid = document.getElementById('achievementsGrid');
                grid.innerHTML = '';
                
                appData.achievements.forEach(achievement => {
                    const card = document.createElement('div');
                    card.className = `achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`;
                    
                    const progressPercent = achievement.target > 0 ? 
                        Math.min(100, Math.round((achievement.progress / achievement.target) * 100)) : 0;
                    
                    card.innerHTML = `
                        <div class="achievement-badge ${achievement.unlocked ? '' : 'locked'}">
                            <i class="fas ${achievement.icon}"></i>
                        </div>
                        <h3 style="font-size: 1.3rem; margin-bottom: 10px;">${achievement.title}</h3>
                        <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">${achievement.description}</p>
                        
                        ${!achievement.unlocked ? `
                            <div class="achievement-progress">
                                <div class="achievement-progress-bar" style="width: ${progressPercent}%"></div>
                            </div>
                            <div style="font-size: 0.8rem; color: #999; margin-top: 8px;">
                                ${achievement.progress}/${achievement.target}
                            </div>
                        ` : `
                            <div style="color: #4caf50; font-weight: bold; margin-top: 15px;">
                                <i class="fas fa-check-circle"></i> Unlocked!
                            </div>
                        `}
                    `;
                    
                    grid.appendChild(card);
                });
            }
        };

        // DOM elements
        const categoriesGrid = document.getElementById('categoriesGrid');
        const formulaViewer = document.getElementById('formulaViewer');
        const quizContainer = document.getElementById('quizContainer');
        const startBtn = document.getElementById('startBtn');
        const motivationBtn = document.getElementById('motivationBtn');
        const motivationMessage = document.getElementById('motivationMessage');
        const breathingGuideBtn = document.getElementById('breathingGuideBtn');
        const progressContainer = document.getElementById('progressContainer');
        const progressBar = document.getElementById('progressBar');
        const scrollTopBtn = document.getElementById('scrollTopBtn');

        // Current state
        let currentCategoryId = null;
        let selectedQuizAnswers = [];
        let quizSubmitted = false;
        let isBreathingGuideActive = false;
        let breathingInterval;

        // Initialize the app
        function initApp() {
            // Load saved progress
            userProgress.loadFromStorage();
            
            // Render categories
            renderCategories();
            
            // Render achievements
            userProgress.renderAchievements();
            
            // Setup event listeners
            setupEventListeners();
            setupScrollProgress();
            updateProgressBars();
            
            // Update stats
            userProgress.updateStats();
            
            // Show welcome message
            setTimeout(() => {
                showNotification("Welcome back! Your progress has been loaded.");
            }, 1000);
        }

        // Render category cards with progress
        function renderCategories() {
            categoriesGrid.innerHTML = '';
            
            appData.categories.forEach(category => {
                const card = document.createElement('div');
                card.className = 'category-card';
                card.dataset.id = category.id;
                
                const progress = category.progress || 0;
                const strokeDashoffset = 126 - (126 * progress) / 100;
                
                card.innerHTML = `
                    <div class="progress-ring">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <circle class="progress-ring-circle" cx="20" cy="20" r="18" 
                                    stroke-dasharray="126" stroke-dashoffset="${strokeDashoffset}"/>
                        </svg>
                    </div>
                    <i class="fas ${category.icon}"></i>
                    <h3>${category.name}</h3>
                    <p>Click to view formulas and practice</p>
                    <div style="margin-top: 15px; font-size: 0.9rem; color: #666;">
                        ${progress > 0 ? `${progress}% completed` : 'Not started yet'}
                    </div>
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
            
            // Update progress
            if (!appData.categories[categoryId-1].viewed) {
                appData.categories[categoryId-1].viewed = true;
                userProgress.topicsViewed++;
            }
            
            // Find category
            const category = appData.categories.find(cat => cat.id === categoryId);
            
            // Show formula viewer
            formulaViewer.style.display = 'block';
            formulaViewer.innerHTML = `
                <div class="formula-header">
                    <div>
                        <h2>${category.name}</h2>
                        <p style="color: #666;">Key formulas and explanations</p>
                    </div>
                    <div>
                        <button class="btn back-btn" id="backToCategories">
                            <i class="fas fa-arrow-left"></i> Back to Topics
                        </button>
                    </div>
                </div>
                <div class="formula-grid" id="formulaGrid"></div>
                <div style="text-align: center; margin-top: 40px;">
                    <button class="btn" id="startQuizBtn">
                        <i class="fas fa-play-circle"></i> Practice with Confidence-Building Questions
                    </button>
                </div>
            `;
            
            // Render formulas
            const formulaGrid = document.getElementById('formulaGrid');
            const formulas = appData.formulas[categoryId];
            
            formulas.forEach((formula, index) => {
                setTimeout(() => {
                    const formulaCard = document.createElement('div');
                    formulaCard.className = 'formula-card';
                    formulaCard.style.animationDelay = `${index * 0.1}s`;
                    formulaCard.style.animation = 'slideIn 0.5s ease-out forwards';
                    formulaCard.style.opacity = '0';
                    
                    formulaCard.innerHTML = `
                        <h3>${formula.title}</h3>
                        <div class="formula">${formula.formula}</div>
                        <p>${formula.explanation}</p>
                        <div class="example">
                            <strong>Example:</strong> ${formula.example}
                        </div>
                    `;
                    
                    formulaGrid.appendChild(formulaCard);
                }, index * 100);
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
            
            // Update stats
            userProgress.updateStats();
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
                    <button class="btn submit-btn" id="submitQuizBtn">
                        <i class="fas fa-check-circle"></i> Check Your Understanding
                    </button>
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
                    optionElement.innerHTML = `
                        <div class="option-number">${String.fromCharCode(65 + optionIndex)}</div>
                        <div>${option}</div>
                    `;
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
                    userProgress.correctStreak++;
                } else {
                    // Incorrect answer
                    options[selectedAnswer].classList.add('incorrect');
                    options[question.correct].classList.add('correct');
                    userProgress.correctStreak = 0;
                }
            });
            
            // Update progress
            userProgress.questionsAnswered += questions.length;
            userProgress.correctAnswers += correctCount;
            
            // Update topic progress
            const progress = Math.round((correctCount / questions.length) * 100);
            userProgress.topicsCompleted[currentCategoryId] = progress;
            appData.categories[currentCategoryId-1].progress = progress;
            
            // Update stats and achievements
            userProgress.updateStats();
            updateProgressBars();
            
            // Show feedback
            const feedbackElement = document.getElementById('quizFeedback');
            const resultElement = document.getElementById('quizResult');
            
            if (correctCount === questions.length) {
                feedbackElement.textContent = "Excellent! You answered all questions correctly. You're really understanding these concepts well!";
                feedbackElement.className = 'feedback positive-feedback';
                createConfetti();
                showNotification("Perfect score! You're mastering this topic!");
            } else if (correctCount >= questions.length / 2) {
                feedbackElement.textContent = "Good work! You're making solid progress. Every question you got right shows your growing understanding.";
                feedbackElement.className = 'feedback positive-feedback';
                showNotification("Great progress! You're getting the hang of this!");
            } else {
                feedbackElement.textContent = "Thank you for trying these questions! Remember that practice is about learning, not perfection. Let's review the formulas again when you're ready.";
                feedbackElement.className = 'feedback supportive-feedback';
                showNotification("You're building understanding! Every attempt makes you better.");
            }
            
            feedbackElement.style.display = 'block';
            
            // Show final result with confidence-building message
            resultElement.style.display = 'block';
            resultElement.innerHTML = `
                <h3>Practice Complete!</h3>
                <p>You answered ${correctCount} out of ${questions.length} questions correctly.</p>
                <p>Remember: The number isn't what matters most. What matters is that you're building your confidence and understanding.</p>
                <p>You're doing great by simply showing up and practicing. Ready to try another topic when you feel comfortable?</p>
                <div style="display: flex; gap: 15px; justify-content: center; margin-top: 25px;">
                    <button class="btn" id="reviewFormulasBtn">
                        <i class="fas fa-book-open"></i> Review Formulas
                    </button>
                    <button class="btn" id="tryAnotherTopicBtn">
                        <i class="fas fa-random"></i> Try Another Topic
                    </button>
                </div>
            `;
            
            // Scroll to result
            resultElement.scrollIntoView({ behavior: 'smooth' });
            
            // Set up event listeners
            document.getElementById('reviewFormulasBtn').addEventListener('click', () => {
                quizContainer.style.display = 'none';
                formulaViewer.scrollIntoView({ behavior: 'smooth' });
            });
            
            document.getElementById('tryAnotherTopicBtn').addEventListener('click', () => {
                quizContainer.style.display = 'none';
                formulaViewer.style.display = 'none';
                categoriesGrid.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // Create confetti animation
        function createConfetti() {
            const colors = ['#7986cb', '#42a5f5', '#66bb6a', '#ffa726', '#ba68c8'];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = confetti.style.width;
                confetti.style.opacity = '1';
                
                document.body.appendChild(confetti);
                
                // Animate confetti
                const animation = confetti.animate([
                    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
                ], {
                    duration: Math.random() * 3000 + 2000,
                    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
                });
                
                animation.onfinish = () => confetti.remove();
            }
        }

        // Show notification
        function showNotification(message) {
            // Remove existing notification
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) existingNotification.remove();
            
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            // Auto remove after 4 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
                setTimeout(() => notification.remove(), 300);
            }, 4000);
        }

        // Get a random motivational message
        function getMotivationalMessage() {
            const randomIndex = Math.floor(Math.random() * appData.motivationalMessages.length);
            return appData.motivationalMessages[randomIndex];
        }

        // Start guided breathing
        function startBreathingGuide() {
            if (isBreathingGuideActive) {
                clearInterval(breathingInterval);
                breathingGuideBtn.innerHTML = '<i class="fas fa-play-circle"></i> Start Guided Breathing';
                isBreathingGuideActive = false;
                showNotification("Breathing exercise paused. Return anytime.");
                return;
            }
            
            isBreathingGuideActive = true;
            breathingGuideBtn.innerHTML = '<i class="fas fa-pause-circle"></i> Pause Breathing Guide';
            
            const breathingText = document.querySelector('.breathing-text');
            const instructions = [
                "Breathe in... 2... 3... 4...",
                "Hold... 2... 3... 4...",
                "Breathe out... 2... 3... 4... 5... 6..."
            ];
            let instructionIndex = 0;
            
            // Initial instruction
            breathingText.textContent = instructions[0];
            
            // Cycle through instructions
            breathingInterval = setInterval(() => {
                instructionIndex = (instructionIndex + 1) % instructions.length;
                breathingText.textContent = instructions[instructionIndex];
            }, 4000); // Change instruction every 4 seconds
            
            showNotification("Guided breathing started. Focus on your breath.");
        }

        // Update progress bars on category cards
        function updateProgressBars() {
            appData.categories.forEach(category => {
                const progress = category.progress || 0;
                const strokeDashoffset = 126 - (126 * progress) / 100;
                
                const progressCircle = document.querySelector(`.category-card[data-id="${category.id}"] circle`);
                if (progressCircle) {
                    progressCircle.style.transition = 'stroke-dashoffset 0.8s ease';
                    progressCircle.style.strokeDashoffset = strokeDashoffset;
                }
            });
        }

        // Set up scroll progress bar
        function setupScrollProgress() {
            window.addEventListener('scroll', () => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                
                progressBar.style.width = scrolled + '%';
                progressContainer.style.display = scrolled > 0 ? 'block' : 'none';
                
                // Show/hide scroll to top button
                if (scrolled > 20) {
                    scrollTopBtn.classList.add('visible');
                } else {
                    scrollTopBtn.classList.remove('visible');
                }
            });
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
            
            // Breathing guide button
            breathingGuideBtn.addEventListener('click', startBreathingGuide);
            
            // Scroll to top button
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // Clear all progress button (for testing)
            const clearBtn = document.createElement('button');
            clearBtn.textContent = 'Clear Progress';
            clearBtn.style.position = 'fixed';
            clearBtn.style.bottom = '30px';
            clearBtn.style.left = '30px';
            clearBtn.style.padding = '10px 15px';
            clearBtn.style.background = '#f44336';
            clearBtn.style.color = 'white';
            clearBtn.style.border = 'none';
            clearBtn.style.borderRadius = '5px';
            clearBtn.style.cursor = 'pointer';
            clearBtn.style.zIndex = '999';
            clearBtn.style.opacity = '0.3';
            clearBtn.style.transition = 'opacity 0.3s';
            
            clearBtn.addEventListener('mouseenter', () => {
                clearBtn.style.opacity = '1';
            });
            
            clearBtn.addEventListener('mouseleave', () => {
                clearBtn.style.opacity = '0.3';
            });
            
            clearBtn.addEventListener('click', () => {
                if (confirm('Clear all progress and achievements?')) {
                    localStorage.removeItem('mathsConfidenceProgress');
                    location.reload();
                }
            });
            
            document.body.appendChild(clearBtn);
        }

        // Initialize the app when the page loads
        document.addEventListener('DOMContentLoaded', initApp);
