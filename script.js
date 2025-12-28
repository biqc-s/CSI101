// --- DATA STORE ---
let questions = [
    // --- MCQs (26 Questions) ---
    {
        id: "Q1", type: "MCQ",
        text: "An object of 20 kg mass moving at 3 m/s, its kinetic energy is:",
        options: { a: "40 J", b: "70 J", c: "80 J", d: "90 J" },
        correct: "d",
        formula: "K = ½mv²",
        exp_ar: "الطاقة الحركية تعتمد على الكتلة ومربع السرعة. K = 0.5 * 20 * 3^2 = 90 J",
        exp_en: "Kinetic Energy depends on mass and velocity squared. K = 0.5 * 20 * 9 = 90 J"
    },
    {
        id: "Q2", type: "MCQ",
        text: "Two objects of identical masses at different heights. Which has more gravitational potential energy?",
        options: { a: "The object at smaller height", b: "The object at greater height", c: "Same potential energy", d: "Not enough information" },
        correct: "b",
        formula: "U = mgy",
        exp_ar: "طاقة الوضع (الجهد) تزداد بزيادة الارتفاع (y).",
        exp_en: "Potential energy is directly proportional to height. Higher object = More Energy."
    },
    {
        id: "Q3", type: "MCQ",
        text: "Initial velocity vᵢ=5 m/s, m=2 kg, Work done W=11 J. Find final velocity vf.",
        options: { a: "1.0 m/s", b: "6.0 m/s", c: "16.0 m/s", d: "3.0 m/s" },
        correct: "b",
        formula: "W = ΔK = ½m(vf² - vᵢ²)",
        exp_ar: "باستخدام نظرية الشغل والطاقة: 11 = 0.5*2*(vf^2 - 25) => vf^2 = 36 => vf = 6",
        exp_en: "Using Work-Energy Theorem: W = ΔK. Solving for vf gives 6 m/s."
    },
    {
        id: "Q4", type: "MCQ",
        text: "A 5 kg object lifted 2 m high. Find the increase in Potential Energy (g=10 m/s²).",
        options: { a: "50 J", b: "75 J", c: "100 J", d: "150 J" },
        correct: "c",
        formula: "ΔU = mgh",
        exp_ar: "التغير في طاقة الوضع = الكتلة × الجاذبية × الارتفاع = 5 × 10 × 2 = 100 جول",
        exp_en: "ΔU = mgh = 5 * 10 * 2 = 100 J"
    },
    {
        id: "Q5", type: "MCQ",
        text: "Force of 20N pushes object 3m (force parallel to displacement). Calculate work done.",
        options: { a: "40 J", b: "50 J", c: "60 J", d: "70 J" },
        correct: "c",
        formula: "W = F d",
        exp_ar: "الشغل = القوة × المسافة = 20 × 3 = 60 جول",
        exp_en: "Work = Force * Distance = 20 * 3 = 60 J"
    },
    {
        id: "Q6", type: "MCQ",
        text: "Two 5000 kg cars: one moving at 20 m/s, one at rest. After collision, they lock together. Find common speed.",
        options: { a: "0 m/s", b: "10 m/s", c: "12 m/s", d: "20 m/s" },
        correct: "b",
        formula: "m₁v₁ + m₂v₂ = (m₁+m₂)v_f",
        exp_ar: "حفظ الزخم: (5000*20) + 0 = 10000 * vf => vf = 10 m/s",
        exp_en: "Conservation of Momentum: Initial momentum = Final momentum. 100,000 / 10,000 = 10 m/s"
    },
    {
        id: "Q7", type: "MCQ",
        text: "Two bodies: m₁=4 kg at x₁=3, m₂=5 kg at x₂=6. Find center of mass Xcom.",
        options: { a: "4.7", b: "5.5", c: "6.0", d: "7.2" },
        correct: "a",
        formula: "Xcom = ∑mx / ∑m",
        exp_ar: "Xcom = (4*3 + 5*6) / (4+5) = (12+30)/9 = 42/9 ≈ 4.67",
        exp_en: "Weighted average of positions: (12 + 30) / 9 = 4.67"
    },
    {
        id: "Q8", type: "MCQ",
        text: "Force of 100N acts for 0.2s. Calculate impulse.",
        options: { a: "10 N·s", b: "15 N·s", c: "20 N·s", d: "25 N·s" },
        correct: "c",
        formula: "J = F Δt",
        exp_ar: "الدفع = القوة × الزمن = 100 × 0.2 = 20",
        exp_en: "Impulse = Force * Time = 100 * 0.2 = 20 N·s"
    },
    {
        id: "Q9", type: "MCQ",
        text: "Two objects (3kg, 7kg) collide elastically. Which is conserved?",
        options: { a: "Only momentum", b: "Only kinetic energy", c: "Both momentum and Kinetic Energy", d: "Neither" },
        correct: "c",
        formula: "Elastic Collision",
        exp_ar: "في التصادم المرن، يتم حفظ كل من الزخم والطاقة الحركية.",
        exp_en: "In Elastic collisions, BOTH Momentum and Kinetic Energy are conserved."
    },
    {
        id: "Q10", type: "MCQ",
        text: "Object completes a circle in 4 seconds. Find angular velocity.",
        options: { a: "π/4 rad/s", b: "π/2 rad/s", c: "π rad/s", d: "2π rad/s" },
        correct: "b",
        formula: "ω = 2π / T",
        exp_ar: "السرعة الزاوية = 2 باي / الزمن الدوري = 2π / 4 = π/2",
        exp_en: "Angular velocity = 2π / Period = 2π/4 = π/2 rad/s"
    },
    {
        id: "Q11", type: "MCQ",
        text: "Car on curve: v=20m/s, r=100m. Find centripetal acceleration.",
        options: { a: "2 m/s²", b: "3 m/s²", c: "4 m/s²", d: "5 m/s²" },
        correct: "c",
        formula: "a_c = v² / r",
        exp_ar: "التسارع المركزي = مربع السرعة / نصف القطر = 400 / 100 = 4",
        exp_en: "Centripetal Acc = v² / r = 20² / 100 = 4 m/s²"
    },
    {
        id: "Q12", type: "MCQ",
        text: "Wheel rotates from rest with α=3 rad/s² for 4s. Find angular displacement.",
        options: { a: "12 rad", b: "18 rad", c: "24 rad", d: "30 rad" },
        correct: "c",
        formula: "Δθ = ½αt²",
        exp_ar: "الإزاحة الزاوية = نصف × التسارع × الزمن تربيع = 0.5 × 3 × 16 = 24",
        exp_en: "Displacement = 0.5 * 3 * 4² = 24 rad"
    },
    {
        id: "Q13", type: "MCQ",
        text: "Two charges +2μC and -3μC separated by 0.1m. The force is:",
        options: { a: "Attractive", b: "Repulsive", c: "Zero", d: "Cannot determine" },
        correct: "a",
        formula: "Coulomb's Law",
        exp_ar: "الشحنات المختلفة (+ و -) تتجاذب.",
        exp_en: "Opposite charges attract each other."
    },
    {
        id: "Q14", type: "MCQ",
        text: "Force F=15N on wrench with lever arm r=0.25m at angle θ=30°. Calculate torque τ.",
        options: { a: "3.70 N·m", b: "2.80 N·m", c: "1.88 N·m", d: "-1.88 N·m" },
        correct: "c",
        formula: "τ = r F sin(θ)",
        exp_ar: "العزم = 0.25 × 15 × sin(30) = 3.75 × 0.5 = 1.875",
        exp_en: "Torque = r F sin(theta) = 0.25 * 15 * 0.5 = 1.875 Nm"
    },
    {
        id: "Q15", type: "MCQ",
        text: "Double distance between two charges. The force becomes:",
        options: { a: "½ F", b: "¼ F", c: "2 F", d: "4 F" },
        correct: "b",
        formula: "F ∝ 1/r²",
        exp_ar: "القوة تتناسب عكسياً مع مربع المسافة. مضاعفة المسافة (2r) تعني القوة تصبح 1/4.",
        exp_en: "Force is inverse square law. Doubling distance reduces force by factor of 4."
    },
    {
        id: "Q16", type: "MCQ",
        text: "Which physical quantity has the SI unit N·m?",
        options: { a: "Work / Torque", b: "Power", c: "Momentum", d: "Impulse" },
        correct: "a",
        formula: "Units",
        exp_ar: "الجول (للشغل) والعزم كلاهما وحدته N·m.",
        exp_en: "Work (Joules) and Torque are measured in Newton-meters."
    },
    {
        id: "Q17", type: "MCQ",
        text: "Projectile launched at 45°. Maximum range is obtained when v₀ is:",
        options: { a: "Maximum", b: "Minimum", c: "Moderate", d: "Zero" },
        correct: "a",
        formula: "R = v₀²sin(2θ)/g",
        exp_ar: "المدى يعتمد طردياً على مربع السرعة الابتدائية.",
        exp_en: "Range is proportional to v₀ squared. Max velocity gives max range."
    },
    {
        id: "Q18", type: "MCQ",
        text: "Friction coefficient μ=0.3, Normal force N=50N. Find kinetic friction force.",
        options: { a: "10 N", b: "15 N", c: "20 N", d: "25 N" },
        correct: "b",
        formula: "f_k = μ_k N",
        exp_ar: "قوة الاحتكاك = المعامل × القوة العمودية = 0.3 × 50 = 15",
        exp_en: "Friction = 0.3 * 50 = 15 N"
    },
    {
        id: "Q19", type: "MCQ",
        text: "Point charge Q=3×10⁻⁶C at r=0.4m (k=9×10⁹). Calculate Electric Field E.",
        options: { a: "3.00×10⁵ N/C", b: "1.69×10⁵ N/C", c: "2.50×10⁵ N/C", d: "4.00×10⁵ N/C" },
        correct: "b",
        formula: "E = kQ / r²",
        exp_ar: "E = (9e9 * 3e-6) / 0.4^2 = 27000 / 0.16 = 168750",
        exp_en: "E = kQ/r^2. Calculation yields approx 1.69 x 10^5 N/C"
    },
    {
        id: "Q20", type: "MCQ",
        text: "Two α-particles: q=4×10⁻¹⁹C each, separated by r=10⁻¹²m. Find Force.",
        options: { a: "57.6×10⁻¹⁴ N", b: "28.8×10⁻⁴ N", c: "14.4×10⁻⁴ N", d: "3.6×10⁻⁴ N" },
        correct: "c",
        formula: "F = kq₁q₂ / r²",
        exp_ar: "بتطبيق قانون كولوم: F = (9e9 * (4e-19)^2) / (1e-12)^2 = 14.4e-4 N",
        exp_en: "Coulomb Law calculation: 9e9 * 16e-38 / 1e-24 = 144e-5 = 1.44e-3 N"
    },
    {
        id: "Q21", type: "MCQ",
        text: "Which of the following is a scalar quantity?",
        options: { a: "Velocity", b: "Displacement", c: "Kinetic Energy", d: "Force" },
        correct: "c",
        formula: "Vectors vs Scalars",
        exp_ar: "الطاقة كمية قياسية (ليس لها اتجاه)، بينما البقية متجهات.",
        exp_en: "Energy is a scalar. Velocity, displacement, and force are vectors."
    },
    {
        id: "Q22", type: "MCQ",
        text: "A 10kg object is at rest. Net force = 0. What is its momentum?",
        options: { a: "0 kg m/s", b: "10 kg m/s", c: "100 kg m/s", d: "Cannot determine" },
        correct: "a",
        formula: "p = mv",
        exp_ar: "السرعة صفر، إذن الزخم (p=mv) يساوي صفر.",
        exp_en: "Rest means v=0, so Momentum p=mv=0."
    },
    {
        id: "Q23", type: "MCQ",
        text: "Power is defined as the rate of change of:",
        options: { a: "Force", b: "Momentum", c: "Work/Energy", d: "Velocity" },
        correct: "c",
        formula: "P = W/t",
        exp_ar: "القدرة هي المعدل الزمني لبذل الشغل أو استهلاك الطاقة.",
        exp_en: "Power is the rate at which work is done."
    },
    {
        id: "Q24", type: "MCQ",
        text: "The value of gravitational acceleration 'g' near Earth's surface is approx:",
        options: { a: "1 m/s²", b: "9.8 m/s²", c: "100 m/s²", d: "32 m/s²" },
        correct: "b",
        formula: "Constant",
        exp_ar: "قيمة تسارع الجاذبية الأرضية هي 9.8 م/ث².",
        exp_en: "Standard gravity is approx 9.8 m/s²."
    },
    {
        id: "Q25", type: "MCQ",
        text: "Electrostatic force is a:",
        options: { a: "Contact Force", b: "Conservative Force", c: "Fictitious Force", d: "None of the above" },
        correct: "b",
        formula: "Force Types",
        exp_ar: "القوة الكهربائية هي قوة محافظة مثل قوة الجاذبية.",
        exp_en: "Electrostatic force is Conservative (Work depends only on endpoints)."
    },
    {
        id: "Q26", type: "MCQ",
        text: "Object with kinetic energy 100J collides and loses 40J. Final KE?",
        options: { a: "40 J", b: "50 J", c: "60 J", d: "140 J" },
        correct: "c",
        formula: "Kf = Ki - Loss",
        exp_ar: "KE_final = 100 - 40 = 60 J",
        exp_en: "Final Energy = Initial - Loss = 60 J."
    },
    {
        id: "Q27", type: "MCQ", text: "What is the negative of a vector?",
        options: { a: "A vector with the same magnitude but opposite direction", b: "A vector with zero magnitude", c: "A vector with the opposite direction but zero magnitude", d: "None of the given answers" },
        correct: "a", formula: "Vectors",
        exp_ar: "معكوس المتجه له نفس المقدار وعكس الاتجاه.", exp_en: "Negative vector has same magnitude, opposite direction."
    },
    {
        id: "Q28", type: "MCQ", text: "The dot product between the vector u=(2,-3,5) and v=(1,6,4) is equal",
        options: { a: "4", b: "40", c: "-4", d: "-40" },
        correct: "a", formula: "Vectors",
        exp_ar: "u.v = (2)(1) + (-3)(6) + (5)(4) = 2 - 18 + 20 = 4", exp_en: "u.v = 2(1) - 18 + 20 = 4."
    },
    {
        id: "Q29", type: "MCQ", text: "Which of the following equations represents the dot product of vectors u = (0,2) and v = (3,3)?",
        options: { a: "u.v = 0 + 6 = 6", b: "u.v = 3 + 3 = 6", c: "u.v = 6 + 6 = 12", d: "u.v = 9" },
        correct: "a", formula: "Vectors",
        exp_ar: "u.v = (0)(3) + (2)(3) = 0 + 6 = 6", exp_en: "u.v = 0*3 + 2*3 = 6."
    },
    {
        id: "Q30", type: "MCQ", text: "The angle formed by the vector v=1.0 î + 1.0 ĵ with respect to the x-axis is:",
        options: { a: "45 degree", b: "90 degree", c: "Zero degree", d: "30 degree" },
        correct: "a", formula: "Vectors",
        exp_ar: "tanθ = y/x = 1/1 = 1 -> θ = 45", exp_en: "tanθ = 1 -> θ = 45 degrees."
    },
    {
        id: "Q31", type: "MCQ", text: "The magnitude of the vector i+2j-2k is",
        options: { a: "3", b: "10", c: "square root of 10", d: "square root of 38" },
        correct: "a", formula: "Vectors",
        exp_ar: "|v| = √(1² + 2² + (-2)²) = √(1+4+4) = √9 = 3", exp_en: "Magnitude = sqrt(1+4+4) = 3."
    },
    {
        id: "Q32", type: "MCQ", text: "Find the cross product A×B where the vectors A= (3,0,2) and B= (-2,5,0)",
        options: { a: "(-10,-4,15)", b: "(10,4,15)", c: "(0,3,0)", d: "(15,0,10)" },
        correct: "a", formula: "Vectors",
        exp_ar: "استخدم المحددات لحساب الضرب الاتجاهي.", exp_en: "Use determinant rule for cross product."
    },
    {
        id: "Q33", type: "MCQ", text: "A stone is dropped from rest from the top of a 500 m tower. How far will it have fallen after 3 seconds?",
        options: { a: "44.1 m", b: "40.2 m", c: "9.8 m", d: "4.9 m" },
        correct: "a", formula: "Kinematics",
        exp_ar: "d = 0.5 g t² = 0.5 * 9.8 * 9 = 44.1 m", exp_en: "d = 0.5 * 9.8 * 3^2 = 44.1 m"
    },
    {
        id: "Q34", type: "MCQ", text: "A car travels along a straight line at a constant speed of 60.0 km/h for a distance d=240 km. What is the time with which the car moved?",
        options: { a: "4 hours", b: "5 hours", c: "10 hours", d: "6 hours" },
        correct: "a", formula: "Kinematics",
        exp_ar: "t = d/v = 240/60 = 4 hours", exp_en: "Time = Dist/Speed = 240/60 = 4 hr."
    },
    {
        id: "Q35", type: "MCQ", text: "For an object in free fall, which of the following is true?",
        options: { a: "Its acceleration is 9.8 m/s²", b: "Its velocity remains constant", c: "Its acceleration is zero", d: "Its motion depends on its mass" },
        correct: "a", formula: "Free Fall",
        exp_ar: "في السقوط الحر التسارع ثابت 9.8.", exp_en: "Free fall acceleration is g = 9.8 m/s²."
    },
    {
        id: "Q36", type: "MCQ", text: "Consider a ball thrown vertically upward with an initial velocity of 25.0 m/s. Time to reach max height?",
        options: { a: "2.55 s", b: "3.50 s", c: "4.55 s", d: "5.50 s" },
        correct: "a", formula: "Kinematics",
        exp_ar: "v = v0 - gt -> at max height v=0 -> t = v0/g = 25/9.8 ≈ 2.55s", exp_en: "t = v0/g = 25/9.8 = 2.55s."
    },
    {
        id: "Q37", type: "MCQ", text: "A stone is thrown from the top of a building horizontally (angle 0) with speed 35 m/s. The y-component of velocity is:",
        options: { a: "zero", b: "35", c: "5", d: "10" },
        correct: "a", formula: "Projectile",
        exp_ar: "السرعة الابتدائية رأسياً (y) صفر لأن القذف أفقي.", exp_en: "Initial vertical velocity is zero for horizontal launch."
    },
    {
        id: "Q38", type: "MCQ", text: "What will be the average acceleration of a truck if it accelerates from stop to 60 m/s in 3 seconds?",
        options: { a: "20 m/s²", b: "30 m/s²", c: "40 m/s²", d: "60 m/s²" },
        correct: "a", formula: "Kinematics",
        exp_ar: "a = Δv/Δt = 60/3 = 20 m/s²", exp_en: "a = 60/3 = 20 m/s²."
    },
    {
        id: "Q39", type: "MCQ", text: "Which of the following describes kinetic friction?",
        options: { a: "A force that acts between two surfaces when one moves relative to the other", b: "A force that acts only when object is at rest", c: "Does not depend on surfaces", d: "Increases with speed" },
        correct: "a", formula: "Forces",
        exp_ar: "قوة تنشأ عند حركة سطح على آخر.", exp_en: "Force acting during relative motion."
    },
    {
        id: "Q40", type: "MCQ", text: "An object is rotating counterclockwise. If it is slowing down, its angular acceleration is:",
        options: { a: "negative", b: "positive", c: "zero", d: "unknown" },
        correct: "a", formula: "Rotation",
        exp_ar: "عكس عقارب الساعة (+) ويتباطأ => التسارع سالب (-).", exp_en: "CCW is positive. Slowing down implies negative acceleration."
    },
    {
        id: "Q41", type: "MCQ", text: "Which factors determine the maximum height of a projectile?",
        options: { a: "Initial speed and launch angle", b: "Only speed", c: "Only angle", d: "Mass" },
        correct: "a", formula: "Projectile",
        exp_ar: "يعتمد على السرعة والزاوية.", exp_en: "Depends on v0 and angle."
    },
    {
        id: "Q42", type: "MCQ", text: "Weight of a person on Earth is 500N. Weight on moon (g=1.69 m/s²) is:",
        options: { a: "86.2 N", b: "89 N", c: "100 N", d: "200 N" },
        correct: "a", formula: "Forces",
        exp_ar: "m = 500/9.8 = 51kg. W_moon = 51 * 1.69 ≈ 86.2 N.", exp_en: "Find mass, then mult by moon gravity."
    },
    {
        id: "Q43", type: "MCQ", text: "If a 5-kg object accelerates at (2i + 4j) m/s², the force is:",
        options: { a: "22.4 N", b: "30.0 N", c: "10.2 N", d: "15.6 N" },
        correct: "a", formula: "Newton's Laws",
        exp_ar: "F = ma. F = 5(2i+4j) = 10i + 20j. |F| = √(100+400) = √500 ≈ 22.4.", exp_en: "F=ma. Magnitude is approx 22.4 N."
    },
    {
        id: "Q44", type: "MCQ", text: "Find force of friction for 5kg mass on rough surface (μs=0.9).",
        options: { a: "44.1 N", b: "32 N", c: "42 N", d: "9.8 N" },
        correct: "a", formula: "Friction",
        exp_ar: "f = μN = 0.9 * (5*9.8) = 0.9 * 49 = 44.1 N.", exp_en: "f = 0.9 * mg = 44.1 N."
    },
    {
        id: "Q45", type: "MCQ", text: "A longer lever arm is helpful in rotating objects because:",
        options: { a: "it causes larger torque", b: "it causes smaller torque", c: "larger force", d: "smaller velocity" },
        correct: "a", formula: "Torque",
        exp_ar: "ذراع القوة الأطول يزيد العزم.", exp_en: "Longer arm = Larger torque."
    },
    {
        id: "Q46", type: "MCQ", text: "Circular platform rotated from rest to 20 rad/s in 30s. Average angular acceleration?",
        options: { a: "0.67 rad/s²", b: "20 rad/s²", c: "6 rad/s²", d: "600 rad/s²" },
        correct: "a", formula: "Rotation",
        exp_ar: "α = Δω/t = 20/30 = 0.67.", exp_en: "20 shared by 30 is 0.67."
    },
    {
        id: "Q47", type: "MCQ", text: "If final KE is 20J and work of 6J was done ON the system, what was initial KE?",
        options: { a: "14 J", b: "26 J", c: "3.3 J", d: "120 J" },
        correct: "a", formula: "Work-Energy",
        exp_ar: "W = ΔK. 6 = 20 - Ki. Ki = 14.", exp_en: "Work = Change in KE. Ki = 20 - 6 = 14 J."
    },
    {
        id: "Q48", type: "MCQ", text: "How much kinetic energy does a 0.16 kg cricket ball have if speed is 22 m/s?",
        options: { a: "38.72 J", b: "58.72 J", c: "20 J", d: "10 J" },
        correct: "a", formula: "Energy",
        exp_ar: "K = 0.5 * 0.16 * 22² = 38.72 J.", exp_en: "K = 0.5mv²."
    },
    {
        id: "Q49", type: "MCQ", text: "If electric force between two charges is 8N. If one charge is doubled, force becomes:",
        options: { a: "16 N", b: "32 N", c: "2 N", d: "8 N" },
        correct: "a", formula: "Electrostatics",
        exp_ar: "القوة تتناسب طردياً مع الشحنة. ضعف الشحنة = ضعف القوة (16).", exp_en: "Force proportional to charge. Double q = Double F."
    },
    {
        id: "Q50", type: "MCQ", text: "Electric flux through a surface of 20 m² in field 300 N/C (parallel to plane)?",
        options: { a: "zero", b: "6000", c: "15", d: "1.8x10^6" },
        correct: "a", formula: "Flux",
        exp_ar: "المجال يوازي السطح، إذن لا يخترقه. التدفق صفر.", exp_en: "Field parallel to plane = Zero Flux."
    },
    {
        id: "Q51", type: "MCQ", text: "Gauss’s law relates electric flux to net charge ______",
        options: { a: "enclosed in that surface", b: "out of surface", c: "part of surface", d: "larger" },
        correct: "a", formula: "Gauss Law",
        exp_ar: "الشحنة المحصورة داخل السطح.", exp_en: "Enclosed charge."
    },

    // --- True/False (12 Questions) ---
    {
        id: "T1", type: "TF",
        text: "Work done is zero when force is parallel to the displacement.",
        correct: "False",
        exp_ar: "خطأ. الشغل يكون صفر عندما تكون القوة عمودية (90 درجة). عندما تكون موازية يكون الشغل أقصى ما يمكن.",
        exp_en: "False. Work is zero when Perpendicular. Max when Parallel."
    },
    {
        id: "T2", type: "TF", text: "If an object is falling from a height of 0.5 m, then its displacement is 0.5 m downward.",
        correct: "True", exp_ar: "صحيح، الإزاحة للأسفل.", exp_en: "True, displacement is downward."
    },
    {
        id: "T3", type: "TF", text: "An object thrown upward will have zero velocity at its maximum height.",
        correct: "True", exp_ar: "صحيح، عند أقصى ارتفاع السرعة صفر.", exp_en: "True, velocity is zero at max height."
    },
    {
        id: "T4", type: "TF", text: "Acceleration is defined as the rate of change of velocity over time.",
        correct: "True", exp_ar: "التعريف الصحيح للتسارع.", exp_en: "Correct definition of acceleration."
    },
    {
        id: "T5", type: "TF", text: "An object is moving in the direction of negative x-axis. If the object is slowing down then its acceleration must be negative.",
        correct: "False", exp_ar: "خطأ. إذا كان يتباطأ في الاتجاه السالب، فالتسارع موجب (عكس الحركة).", exp_en: "False. Slowing down in negative direction means positive acceleration."
    },
    {
        id: "T6", type: "TF", text: "The dot product of vectors a=(3,5) and b=(1,6) is 30.",
        correct: "False", exp_ar: "3*1 + 5*6 = 3+30 = 33 (Not 30).", exp_en: "False. Dot product is 33."
    },
    {
        id: "T7", type: "TF", text: "The vector (3/5, -4/5) is a unit vector.",
        correct: "True", exp_ar: "√(9/25 + 16/25) = √25/25 = 1. صحيح.", exp_en: "True. Magnitude is 1."
    },
    {
        id: "T8", type: "TF", text: "The magnitude of the vector v=3i+4j is 5.",
        correct: "True", exp_ar: "√(3² + 4²) = √25 = 5.", exp_en: "True. 3-4-5 triangle."
    },
    {
        id: "T9", type: "TF", text: "The vectors u=(2,0,1) and v=(-2,0,4) are perpendicular.",
        correct: "True", exp_ar: "u.v = -4 + 0 + 4 = 0. نعم متعامدان.", exp_en: "True. Dot product is zero."
    },
    {
        id: "T10", type: "TF", text: "The SI unit of weight is kg.",
        correct: "False", exp_ar: "وحدة الوزن هي نيوتن (N). الكيلوجرام للكتلة.", exp_en: "False. Weight is Newtons, Mass is kg."
    },
    {
        id: "T11", type: "TF", text: "If a body is in equilibrium then its velocity is always zero.",
        correct: "False", exp_ar: "خطأ. قد يتحرك بسرعة ثابتة.", exp_en: "False. Can be moving at constant velocity."
    },
    {
        id: "T12", type: "TF", text: "The Horizontal range for projectile travel is maximum when the launch angle is 60 degrees.",
        correct: "False", exp_ar: "خطأ. أقصى مدى عند 45 درجة.", exp_en: "False. Max range is at 45 degrees."
    },
    {
        id: "T13", type: "TF", text: "Angular velocity remains constant in a uniform circular motion.",
        correct: "True", exp_ar: "في الحركة الدائرية المنتظمة، السرعة الزاوية ثابتة.", exp_en: "True. Constant angular velocity."
    },
    {
        id: "T14", type: "TF", text: "Impulse is a scalar quantity.",
        correct: "False", exp_ar: "الدفع كمية متجهة.", exp_en: "False. Impulse is a vector."
    },
    {
        id: "T15", type: "TF", text: "A body at rest has zero momentum.",
        correct: "True", exp_ar: "صحيح. الزخم يعتمد على السرعة.", exp_en: "True. p = mv, if v=0 then p=0."
    },
    {
        id: "T16", type: "TF", text: "Coulomb's force is always attractive.",
        correct: "False", exp_ar: "خطأ. قد تكون تنافرية بين الشحنات المتشابهة.", exp_en: "False. Like charges repel."
    }
];

const formulas = [
    {
        id: 1, code: "v = v₀ + at", name: "Velocity Equation", ar: "معادلة السرعة", topic: "الحركة - Kinematics",
        vars: ["v = سرعة نهائية (m/s)", "v₀ = سرعة ابتدائية (m/s)", "a = تسارع (m/s²)", "t = زمن (s)"],
        example: { vals: "v₀=5, a=2, t=3", req: "v = 5 + 2(3)", steps: "AC → 5 + 2 × 3 = (Result: 11)" }
    },
    {
        id: 2, code: "x = x₀ + v₀t + ½at²", name: "Displacement Equation", ar: "معادلة الإزاحة", topic: "الحركة - Kinematics",
        vars: ["x = موقع نهائي", "x₀ = موقع ابتدائي", "v₀ = سرعة ابتدائية", "a = تسارع", "t = زمن"],
        example: { vals: "x₀=0, v₀=10, a=2, t=5", req: "Find x", steps: "AC → 0 + 10 × 5 + 0.5 × 2 × 5 x² = (Result: 75)" }
    },
    {
        id: 3, code: "v² = v₀² + 2a(x - x₀)", name: "Velocity-Position Eq", ar: "معادلة السرعة-الموقع", topic: "الحركة - Kinematics",
        vars: ["v = سرعة نهائية", "v₀ = سرعة ابتدائية", "a = تسارع", "x-x₀ = إزاحة"],
        example: { vals: "v₀=0, a=4, Δx=10", req: "Find v", steps: "AC → 2 × 4 × 10 = (Result: 80) → √ Ans = (Result: 8.94)" }
    },
    {
        id: 4, code: "fₖ = μₖN", name: "Kinetic Friction", ar: "الاحتكاك الحركي", topic: "القوى - Forces",
        vars: ["fₖ = احتكاك حركي (N)", "μₖ = معامل احتكاك", "N = قوة عمودية (N)"],
        example: { vals: "μₖ=0.3, N=50", req: "Find fₖ", steps: "AC → 0.3 × 50 = (Result: 15)" }
    },
    {
        id: 5, code: "ω = 2π/T", name: "Angular Velocity", ar: "السرعة الزاوية", topic: "الدوران - Rotational",
        vars: ["ω = سرعة زاوية (rad/s)", "T = زمن دوري (s)"],
        example: { vals: "T=4", req: "Find ω", steps: "AC → 2 × SHIFT × (π) ÷ 4 = (Result: 1.57)" }
    },
    {
        id: 6, code: "aᵣ = v²/r", name: "Centripetal Accel", ar: "التسارع المركزي", topic: "دائري - Circular",
        vars: ["aᵣ = تسارع مركزي", "v = سرعة خطية", "r = نصف قطر"],
        example: { vals: "v=20, r=100", req: "Find aᵣ", steps: "AC → 20 x² ÷ 100 = (Result: 4)" }
    },
    {
        id: 7, code: "I = FΔt", name: "Impulse", ar: "الدفع", topic: "الزخم - Momentum",
        vars: ["I = دفع (N·s)", "F = قوة", "Δt = زمن"],
        example: { vals: "F=30, t=0.3", req: "Find I", steps: "AC → 30 × 0.3 = (Result: 9)" }
    },
    {
        id: 8, code: "Xcom = Σ(mi xi)/M", name: "Center of Mass", ar: "مركز الكتلة", topic: "الزخم - Momentum",
        vars: ["Xcom = موقع المركز", "mi = كتل", "xi = مواقع"],
        example: { vals: "m1=4@3, m2=5@6", req: "Find Xcom", steps: "AC → ( 4 × 3 + 5 × 6 ) ÷ ( 4 + 5 ) = (Result: 4.66)" }
    },
    {
        id: 9, code: "E = k|q|/r²", name: "Electric Field", ar: "المجال الكهربائي", topic: "كهرباء - Electrostatics",
        vars: ["E = مجال (N/C)", "k = 9×10⁹", "q = شحنة", "r = مسافة"],
        example: { vals: "q=3e-6, r=0.4", req: "Find E", steps: "AC → 9 EXP 9 × 3 EXP (-) 6 ÷ 0.4 x² = (Result: 168750)" }
    },
    {
        id: 10, code: "Φ = Q_enc/ε₀", name: "Gauss's Law", ar: "قانون غاوس", topic: "كهرباء - Electrostatics",
        vars: ["Φ = تدفق", "Q = شحنة داخلية", "ε₀ = 8.85×10⁻¹²"],
        example: { vals: "Q=5e-6", req: "Find Φ", steps: "AC → 5 EXP (-) 6 ÷ 8.85 EXP (-) 12 = (Result: 5.65e5)" }
    },
    {
        id: 11, code: "K = ½mv²", name: "Kinetic Energy", ar: "طاقة الحركة", topic: "الطاقة - Energy",
        vars: ["K = طاقة (J)", "m = كتلة", "v = سرعة"],
        example: { vals: "m=20, v=3", req: "Find K", steps: "AC → 0.5 × 20 × 3 x² = (Result: 90)" }
    },
    {
        id: 12, code: "W = F d cosθ", name: "Work", ar: "الشغل", topic: "الطاقة - Energy",
        vars: ["W = شغل", "F = قوة", "d = إزاحة", "θ = زاوية"],
        example: { vals: "F=20, d=5, θ=60", req: "Find W", steps: "AC → 20 × 5 × cos 60 ) = (Result: 50)" }
    },
    {
        id: 13, code: "fₛ = μₛN", name: "Static Friction", ar: "الاحتكاك السكوني", topic: "القوى - Forces",
        vars: ["fₛ = احتكاك سكوني", "μₛ = معامل", "N = قوة عمودية"],
        example: { vals: "μₛ=0.5, N=40", req: "Find fₛ", steps: "AC → 0.5 × 40 = (Result: 20)" }
    },
    {
        id: 14, code: "Ug = mgy", name: "Grav Potential", ar: "طاقة الوضع", topic: "الطاقة - Energy",
        vars: ["Ug = طاقة وضع", "m = كتلة", "g = 9.8", "y = ارتفاع"],
        example: { vals: "m=5, g=10, y=2", req: "Find Ug", steps: "AC → 5 × 10 × 2 = (Result: 100)" }
    },
    {
        id: 15, code: "h = (v₀² sin²θ)/(2g)", name: "Max Height", ar: "أقصى ارتفاع", topic: "مقذوفات - Projectile",
        vars: ["h = ارتفاع", "v₀ = سرعة", "θ = زاوية", "g = جاذبية"],
        example: { vals: "v₀=20, θ=30, g=10", req: "Find h", steps: "AC → 20 x² × ( sin 30 ) x² ÷ ( 2 × 10 ) = (Result: 5)" }
    },
    {
        id: 16, code: "R = (v₀² sin2θ)/g", name: "Range", ar: "المدى الأفقي", topic: "مقذوفات - Projectile",
        vars: ["R = مدى", "v₀ = سرعة", "θ = زاوية"],
        example: { vals: "v₀=20, θ=45, g=10", req: "Find R", steps: "AC → 20 x² × sin ( 2 × 45 ) ) ÷ 10 = (Result: 40)" }
    },
    {
        id: 17, code: "τ = r F sinθ", name: "Torque", ar: "عزم الدوران", topic: "الدوران - Rotational",
        vars: ["τ = عزم", "r = ذراع", "F = قوة", "θ = زاوية"],
        example: { vals: "r=0.25, F=15, θ=30", req: "Find τ", steps: "AC → 0.25 × 15 × sin 30 ) = (Result: 1.875)" }
    },
    {
        id: 18, code: "F = k|q₁q₂|/r²", name: "Coulomb Force", ar: "قوة كولوم", topic: "كهرباء - Electrostatics",
        vars: ["F = قوة", "k = 9×10⁹", "q = شحنة", "r = مسافة"],
        example: { vals: "q1=q2=4e-19, r=1e-12", req: "Find F", steps: "AC → 9 EXP 9 × 4 EXP (-) 19 x² ÷ ( 1 EXP (-) 12 ) x² = (Res: 1.44e-3)" }
    },
    {
        id: 19, code: "Φ = EA cosθ", name: "Electric Flux", ar: "التدفق الكهربائي", topic: "كهرباء - Electrostatics",
        vars: ["Φ = تدفق", "E = مجال", "A = مساحة"],
        example: { vals: "E=500, A=0.02, θ=30", req: "Find Φ", steps: "AC → 500 × 0.02 × cos 30 ) = (Result: 8.66)" }
    },
    {
        id: 20, code: "τ = Iα", name: "Newton 2nd Rot", ar: "نيوتن الثاني للدوران", topic: "الدوران - Rotational",
        vars: ["τ = عزم", "I = قصور ذاتي", "α = تسارع زاوي"],
        example: { vals: "τ=50, I=10", req: "Find α", steps: "AC → 50 ÷ 10 = (Result: 5)" }
    }
];

// --- STATE ---
const state = {
    currentTab: 'home',
    examActive: false,
    timeLeft: 3600, // 60 mins
    timerId: null,
    answers: {}, // { qId: selectedOption }
    darkMode: false,
    currentExamQuestions: [] // Added to keep track of questions in the current exam
};

// --- DOM ELEMENTS ---
// (Will be selected after DOMContentLoaded)
let mainContent;
let themeBtn;
let navBtns;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    mainContent = document.getElementById('mainContent');
    themeBtn = document.getElementById('themeBtn');
    navBtns = document.querySelectorAll('.nav-btn');

    init();
});

function init() {
    renderTab('home');
    setupEventListeners();
    loadProgress();
}

function setupEventListeners() {
    // Navigation
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTab(btn.dataset.tab);
        });
    });

    // Theme Toggle
    themeBtn.addEventListener('click', () => {
        state.darkMode = !state.darkMode;
        document.body.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
        themeBtn.textContent = state.darkMode ? '☀️' : '🌙';
    });
}

// --- RENDERING VIEWS ---
function renderTab(tabName) {
    state.currentTab = tabName;
    mainContent.innerHTML = ''; // Clear current

    // Highligth active tab
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    switch (tabName) {
        case 'home': renderHome(); break;
        case 'guide': renderGuide(); break;
        case 'terms': renderTerms(); break;
        case 'mock-exam': renderExamStart(); break;
        case 'q-bank': renderQuestionBank(); break;
        case 'stats': renderStats(); break;
        case 'about': renderAbout(); break;
        case 'exam': renderExamStart(); break; // Alias
        default: renderHome();
    }
    window.scrollTo(0, 0);
}

function renderHome() {
    const html = `
        <section class="hero">
            <h2>أهلاً بك في منصة التحضير للفيزياء</h2>
            <p>موقع تفاعلي للتحضير لمادة الفيزياء SCI 101.</p>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-value">${questions.length || '38'}</span>
                    <span class="stat-label">سؤال تدريبي</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value">100%</span>
                    <span class="stat-label">شرح ثنائي اللغة</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value">Free</span>
                    <span class="stat-label">مفتوح المصدر</span>
                </div>
            </div>

            <div class="actions-grid">
                <button class="action-btn" onclick="document.querySelector('[data-tab=mock-exam]').click()">
                    <span>📝</span> ابدأ الاختبار التجريبي
                </button>
                <button class="action-btn" onclick="document.querySelector('[data-tab=guide]').click()">
                    <span>📖</span> الدليل الشامل للقوانين والحاسبة
                </button>
                <button class="action-btn" onclick="document.querySelector('[data-tab=terms]').click()">
                    <span>📑</span> المصطلحات والمقارنات
                </button>
            </div>
        </section>
    `;
    mainContent.innerHTML = html;
}

function renderGuide() {
    let html = `
        <div class="card">
            <h2>📖 الدليل الشامل: القوانين ومفتاح الآلة الحاسبة</h2>
            <p>جميع القوانين المطلوبة (20 قانون) مرتبة حسب المنهج، مع خطوات الحل بالآلة الحاسبة.</p>
        </div>
        <div class="guide-grid">
    `;

    formulas.forEach(item => {
        html += `
            <div class="guide-item card">
                <div class="gi-header">
                    <span class="gi-id">#${item.id}</span>
                    <div class="gi-title">
                        <strong>${item.name}</strong>
                        <small>${item.ar}</small>
                    </div>
                </div>
                
                <div class="gi-topic">${item.topic}</div>
                
                <div class="gi-eq ltr">${item.code}</div>
                
                <div class="gi-vars">
                    <ul>${item.vars.map(v => `<li>${v}</li>`).join('')}</ul>
                </div>
                
                <div class="gi-calc">
                    <strong>🧮 Calculator Method:</strong>
                    <div class="calc-example-box">
                        <div style="font-size:0.9rem; margin-bottom:5px;">
                            <span style="color:#666;">Given:</span> ${item.example.vals} <br> 
                            <span style="color:#666;">Find:</span> ${item.example.req}
                        </div>
                        <div class="calc-steps">${item.example.steps}</div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>
    <style>
        .guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem; }
        .guide-item { display: flex; flex-direction: column; gap: 0.8rem; border-left: 4px solid var(--primary-color); }
        .gi-header { display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #eee; padding-bottom: 8px; }
        .gi-id { background: var(--primary-color); color: white; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-family: monospace; }
        .gi-title { display: flex; flex-direction: column; }
        .gi-topic { font-size: 0.8rem; color: #666; background: #eee; padding: 2px 6px; border-radius: 4px; width: fit-content; }
        .gi-eq { background: #222; color: #0f0; padding: 12px; border-radius: 6px; text-align: center; font-family: monospace; font-size: 1.25rem; letter-spacing: 1px; }
        .gi-vars ul { list-style: none; padding: 0; font-size: 0.9rem; color: #444; margin: 0; }
        .gi-vars li { margin-bottom: 2px; }
        .gi-vars li::before { content: "• "; color: var(--primary-color); font-weight: bold; }
        .gi-calc { background: #f8f9fa; padding: 10px; border-radius: 6px; border: 1px solid #e9ecef; }
        .calc-steps { background: #333; color: #0f0; padding: 10px; border-radius: 4px; font-family: monospace; margin-top: 5px; direction: ltr; text-align: left; font-size: 1.05rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.3); }
        [data-theme="dark"] .gi-topic { background: #444; color: #ccc; }
        [data-theme="dark"] .gi-calc { background: #2c2c2c; border-color: #444; }
        [data-theme="dark"] .guide-item { border-left-color: var(--primary-color); }
    </style>`;

    mainContent.innerHTML = html;
}



function renderExamStart() {
    mainContent.innerHTML = `
        <div class="card" style="text-align:center; padding:3rem;">
            <div style="font-size:4rem; margin-bottom:1rem;">📝</div>
            <h2>الاختبار التجريبي الشامل</h2>
            <p style="margin:1rem 0;">الزمن: 60 دقيقة • عدد الأسئلة: 38 (26 MCQ + 12 T/F)</p>
            <button class="action-btn" style="margin:0 auto; background:var(--primary-color); color:white;" onclick="startExam()">
                ابدأ الاختبار الآن
            </button>
        </div>
    `;
}

function renderAbout() {
    mainContent.innerHTML = `
        <div class="card about-card" style="text-align:center; padding:3rem 1rem;">
            <div style="width:100px; height:100px; background:var(--primary-color); color:white; border-radius:50%; margin:0 auto 1.5rem; display:flex; align-items:center; justify-content:center; font-size:3rem; border:4px solid var(--secondary-color);">
                👨‍💻
            </div>
            <h2>Saeed Jahash</h2>
            <p class="dev-bio" style="color:var(--text-secondary); margin-bottom:2rem;">
                Full-Stack Developer | مطور تطبيقات
            </p>
            
            <a href="https://discordapp.com/users/i5i55" target="_blank" style="display:inline-flex; align-items:center; gap:10px; background:#5865F2; color:white !important; padding:12px 24px; border-radius:30px; text-decoration:none; font-weight:bold; font-size:1.1rem; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                <span style="font-size:1.4rem;">🛠️</span>
                <span>تواصل للدعم الفني (Discord)</span>
            </a>
            
            <div class="project-info" style="margin-top:3rem; text-align:right; background:#f9f9f9; padding:1.5rem; border-radius:12px;">
                <h4 style="color:var(--primary-color); margin-bottom:1rem;">عن المشروع</h4>
                <p>
                    منصة تفاعلية لمقرر الفيزياء العامة 101.
                    تم التصميم والتطوير لتقديم تجربة سهلة تجمع بين النظرية والتطبيق.
                </p>
            </div>
        </div>
    `;
}

// New Function: Render Clean Formula Sheet (Laws Only)
function renderFormulas() {
    let html = `
        <div class="card">
            <h2>📜 ملخص القوانين الفيزيائية</h2>
            <p>جميع القوانين والمعادلات المقررة في المنهج (بدون شرح الآلة).</p>
        </div>
    `;

    // Filter out "Calculator Basics" (Category 0)
    const lawsCategories = formulas.filter((cat, index) => index !== 0);

    lawsCategories.forEach(cat => {
        html += `<div class="card"><h3>${cat.category}</h3><div class="formulas-grid">`;
        cat.items.forEach(item => {
            html += `
                <div class="formula-item">
                    <div class="f-name">${item.ar} <span class="en-text ltr">(${item.name})</span></div>
                    <div class="f-eq ltr">${item.eq.replace(/@/g, ', ')}</div>
                    <div class="f-desc">${item.desc}</div>
                </div>
            `;
        });
        html += `</div></div>`;
    });

    // Add styles just for this view
    html += `
        <style>
            .formulas-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-top:1rem; }
            .formula-item { background: #f8f9fa; border: 1px solid #ddd; padding: 1rem; border-radius: 8px; transition: transform 0.2s; }
            .formula-item:hover { transform: translateY(-3px); box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-color: var(--primary-color); }
            .f-name { font-weight: bold; color: var(--primary-color); margin-bottom: 0.5rem; }
            .f-eq { background: #333; color: #0f0; padding: 0.5rem; border-radius: 4px; font-family: monospace; text-align: center; margin-bottom: 0.5rem; font-size: 1.1rem; }
            .f-desc { font-size: 0.9rem; color: #555; }
            [data-theme="dark"] .formula-item { background: #2c2c2c; border-color: #444; }
            [data-theme="dark"] .f-desc { color: #ccc; }
        </style>
    `;

    mainContent.innerHTML = html;
}

function renderStats() {
    const saved = JSON.parse(localStorage.getItem('sci101_progress') || '{"correct":0, "total":0}');
    const pct = saved.total > 0 ? Math.round((saved.correct / saved.total) * 100) : 0;

    mainContent.innerHTML = `
      <div class="card">
         <h2>إحصائيات التقدم</h2>
         <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-value">${saved.total}</span>
                <span class="stat-label">أسئلة مجابة</span>
            </div>
            <div class="stat-card" style="background:var(--success-color);">
                <span class="stat-value">${saved.correct}</span>
                <span class="stat-label">إجابات صحيحة</span>
            </div>
            <div class="stat-card" style="background:${pct > 50 ? 'var(--primary-color)' : 'var(--error-color)'}">
                <span class="stat-value">${pct}%</span>
                <span class="stat-label">معدل النجاح</span>
            </div>
         </div>
      </div>
   `;
}

// --- EXAM LOGIC ---
function startExam() {
    state.examActive = true;
    state.timeLeft = 60 * 60; // 60 mins
    state.answers = {};
    state.currentExamQuestions = []; // Reset current exam questions

    // Build Exam HTML
    let html = `
        <div class="exam-header">
           <div>الاختبار التجريبي</div>
           <div class="timer" id="timerDisplay">60:00</div>
           <button onclick="finishExam()" style="background:white; color:red; border:none; padding:5px 10px; border-radius:4px; font-weight:bold; cursor:pointer;">إنهاء</button>
        </div>
        <div id="questionsList">
    `;

    if (questions.length === 0) {
        html += `<div class="card"><p>جارٍ تحميل الأسئلة... (يرجى الانتظار لتحديث البيانات)</p></div>`;
    }

    // Generate Random Exam Questions
    // Shuffle all questions and pick first 30
    const shuffled = questions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, 30); // Pick 30 random questions
    state.currentExamQuestions = selectedQuestions; // Store for grading

    selectedQuestions.forEach((q, index) => {
        html += buildQuestionCard(q, index + 1);
    });

    html += `
        <div style="text-align:center; margin-top:2rem; padding-bottom:3rem;">
            <button onclick="finishExam()" class="action-btn" style="background:var(--success-color); color:white; border-color:var(--success-color); width:100%; max-width:400px; margin:0 auto;">
                ✅ إرسال الإجابات وعرض النتيجة
            </button>
        </div>
    </div>`;
    mainContent.innerHTML = html;

    // Start Timer
    if (state.timerId) clearInterval(state.timerId);
    state.timerId = setInterval(updateTimer, 1000);
}

function buildQuestionCard(q, num) {
    const isTF = q.type === 'TF';
    let optionsHtml = '';

    if (isTF) {
        optionsHtml = `
            <label class="option-label" onclick="selectAnswer('${q.id}', 'True')">
                <input type="radio" name="${q.id}" value="True"> <span>True</span>
            </label>
             <label class="option-label" onclick="selectAnswer('${q.id}', 'False')">
                <input type="radio" name="${q.id}" value="False"> <span>False</span>
            </label>
         `;
    } else {
        ['a', 'b', 'c', 'd'].forEach(opt => {
            if (q.options[opt]) {
                optionsHtml += `
                   <label class="option-label" onclick="selectAnswer('${q.id}', '${opt}')">
                       <input type="radio" name="${q.id}" value="${opt}"> <span class="ltr en-text">${opt}) ${q.options[opt]}</span>
                   </label>
                `;
            }
        });
    }

    const formulaBox = q.formula && q.formula !== 'General Concept'
        ? `<div style="background:#222; color:#0f0; padding:0.8rem; border-radius:6px; margin-bottom:1rem; font-family:monospace; text-align:center; direction:ltr; font-size:1.1rem; box-shadow:inset 0 2px 5px rgba(0,0,0,0.3);">
             💡 Use: ${q.formula}
           </div>`
        : '';

    return `
        <div class="question-card card" id="card-${q.id}">
            <div class="q-header-bar">
                <span>Question ${num}</span>
            </div>
            <div class="q-body">
                ${formulaBox}
                <div class="q-text ltr">${q.text}</div>
                <div class="options-list">${optionsHtml}</div>
                

                <div id="explanation-${q.id}" class="explanation-box hidden">
                    <div class="result-feedback" style="font-weight:bold; font-size:1.2rem; margin-bottom:1rem;"></div>
                    
                    <div style="background:#E3F2FD; padding:1rem; border-radius:8px; margin-bottom:1rem;">
                        <strong>💡 الشرح بالعربي:</strong>
                        <p>${q.exp_ar}</p>
                    </div>
                    
                    <div class="ltr en-text" style="background:#F5F5F5; padding:1rem; border-radius:8px;">
                        <strong>💡 English Explanation:</strong>
                        <p>${q.exp_en}</p>
                    </div>
                </div>
            </div>
        </div>
     `;
}

function selectAnswer(qId, value) {
    state.answers[qId] = value;
    // Visual feedback for selection
    const card = document.getElementById(`card-${qId}`);
    const inputs = card.querySelectorAll('input');
    inputs.forEach(input => {
        const label = input.parentElement;
        if (input.value === value) {
            input.checked = true;
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
}

function updateTimer() {
    state.timeLeft--;
    const m = Math.floor(state.timeLeft / 60);
    const s = state.timeLeft % 60;
    const display = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    const el = document.getElementById('timerDisplay');
    if (el) el.textContent = display;

    if (state.timeLeft <= 0) finishExam();
}

function finishExam() {
    clearInterval(state.timerId);
    let correctCount = 0;

    // Use the questions from the current session, or all if not set (fallback)
    const examQuestions = state.currentExamQuestions && state.currentExamQuestions.length > 0
        ? state.currentExamQuestions
        : questions;

    examQuestions.forEach(q => {
        const userAns = state.answers[q.id];
        const card = document.getElementById(`card-${q.id}`);
        if (!card) return;

        const labels = card.querySelectorAll('.option-label');
        const expBox = document.getElementById(`explanation-${q.id}`);
        const feedback = expBox.querySelector('.result-feedback');

        // Show Correct logic
        labels.forEach(l => {
            const val = l.querySelector('input').value;
            if (val === q.correct) l.classList.add('correct');
            if (val === userAns && val !== q.correct) l.classList.add('wrong');
        });

        // Content
        expBox.classList.remove('hidden');
        if (userAns === q.correct) {
            correctCount++;
            feedback.textContent = "✅ إجابة صحيحة!";
            feedback.style.color = "var(--success-color)";
        } else {
            feedback.textContent = `❌ إجابة خاطئة - الصحيح هو (${q.correct})`;
            feedback.style.color = "var(--error-color)";
        }
    });

    // Save Progress
    const prev = JSON.parse(localStorage.getItem('sci101_progress') || '{"correct":0, "total":0}');
    const newStats = {
        correct: prev.correct + correctCount,
        total: prev.total + examQuestions.length
    };
    localStorage.setItem('sci101_progress', JSON.stringify(newStats));

    // Show overall score
    alert(`انتهى الاختبار!\nالنتيجة: ${correctCount} من ${examQuestions.length}`);
    window.scrollTo(0, 0);
}

function renderQuestionBank() {
    // Same as exam but no timer and instant feedback
    mainContent.innerHTML = `<div class="card"><h2>بنك الأسئلة</h2><p>تصفح جميع الأسئلة وتدرب عليها.</p></div><div id="bankList"></div>`;
    const bankList = document.getElementById('bankList');

    questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.innerHTML = buildQuestionCard(q, i + 1);
        // Add "Check Answer" button for Bank Mode
        const btn = document.createElement('button');
        btn.className = 'action-btn';
        btn.style.padding = '0.5rem 1rem';
        btn.style.marginTop = '1rem';
        btn.style.fontSize = '1rem';
        btn.textContent = 'تحقق من الإجابة';
        btn.onclick = () => {
            // Trigger finish logic just for this card
            const card = div.querySelector('.question-card');
            const userAns = state.answers[q.id];
            if (!userAns) { alert('الرجاء اختيار إجابة أولاً'); return; }

            const labels = card.querySelectorAll('.option-label');
            const expBox = document.getElementById(`explanation-${q.id}`);
            const feedback = expBox.querySelector('.result-feedback');

            labels.forEach(l => {
                const val = l.querySelector('input').value;
                if (val === q.correct) l.classList.add('correct');
                if (val === userAns && val !== q.correct) l.classList.add('wrong');
            });

            expBox.classList.remove('hidden');
            if (userAns === q.correct) {
                feedback.textContent = "✅ إجابة صحيحة!";
                feedback.style.color = "var(--success-color)";
            } else {
                feedback.textContent = `❌ إجابة خاطئة - الصحيح هو (${q.correct})`;
                feedback.style.color = "var(--error-color)";
            }
        };
        div.querySelector('.q-body').appendChild(btn);
        bankList.appendChild(div);
    });
}

function loadProgress() {
    // Check localstorage
}


function renderTerms() {
    mainContent.innerHTML = `
        <div class="card">
            <h2>📑 دليل المصطلحات والمقارنات</h2>
            <p>مراجعة شاملة لجميع المصطلحات، القوانين، والمقارنات في المقرر.</p>
        </div>

        <!-- Week 1-2: Motion -->
        <div class="card">
            <h3>📌 Week 1-2: Motion in One Dimension (الحركة في بُعد واحد)</h3>
            
            <div class="formula-category">
                <h4>🔹 المصطلحات الأساسية:</h4>
                <ul style="list-style:none; padding:0; line-height:1.8;">
                    <li class="term-item">
                        <div class="en-text ltr"><strong>Speed:</strong> Scalar quantity (Total distance / Total time)</div>
                        <div class="ar-text"><strong>السرعة:</strong> كمية قياسية (المسافة الكلية / الزمن الكلي)</div>
                    </li>
                    <li class="term-item">
                        <div class="en-text ltr"><strong>Velocity:</strong> Vector quantity (Displacement / Time)</div>
                        <div class="ar-text"><strong>السرعة المتجهة:</strong> كمية متجهة (إزاحة / زمن)</div>
                    </li>
                    <li class="term-item">
                        <div class="en-text ltr"><strong>Average Speed:</strong> Total distance / Total time</div>
                        <div class="ar-text"><strong>متوسط السرعة:</strong> المسافة الكلية / الزمن الكلي</div>
                    </li>
                    <li class="term-item">
                        <div class="en-text ltr"><strong>Average Velocity:</strong> Displacement / Total time = (x₂ - x₁) / t</div>
                        <div class="ar-text"><strong>متوسط السرعة المتجهة:</strong> الإزاحة / الزمن</div>
                    </li>
                    <li class="term-item">
                        <div class="en-text ltr"><strong>Instantaneous Velocity:</strong> Velocity at a specific instant (dx/dt)</div>
                        <div class="ar-text"><strong>السرعة اللحظية:</strong> السرعة عند لحظة معينة</div>
                    </li>
                    <li class="term-item">
                        <div class="en-text ltr"><strong>Acceleration:</strong> Rate of change of velocity ((v₂ - v₁) / t)</div>
                        <div class="ar-text"><strong>التسارع:</strong> معدل تغير السرعة بالنسبة للزمن</div>
                    </li>
                </ul>
            </div>

            <h4>🔹 مقارنات هامة:</h4>
            <div class="comparison-container">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>المفهوم (Concept)</th>
                            <th class="ltr">Distance</th>
                            <th class="ltr">Displacement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>الترجمة</td>
                            <td>المسافة</td>
                            <td>الإزاحة</td>
                        </tr>
                        <tr>
                            <td>النوع (Type)</td>
                            <td class="ltr">Scalar (Quantity)</td>
                            <td class="ltr">Vector (Quantity)</td>
                        </tr>
                        <tr>
                            <td>الوصف</td>
                            <td>طول المسار الكلي</td>
                            <td>أقصر مسافة بين البداية والنهاية</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="comparison-container">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>المفهوم (Concept)</th>
                            <th class="ltr">Speed</th>
                            <th class="ltr">Velocity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>الترجمة</td>
                            <td>السرعة</td>
                            <td>السرعة المتجهة</td>
                        </tr>
                        <tr>
                            <td>النوع (Type)</td>
                            <td class="ltr">Scalar</td>
                            <td class="ltr">Vector</td>
                        </tr>
                        <tr>
                            <td>القانون (Formula)</td>
                            <td class="ltr">Distance / Time</td>
                            <td class="ltr">Displacement / Time</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="highlight-box" style="background:#fff3cd; padding:10px; border-radius:5px; margin:1rem 0;">
                <div style="margin-bottom:5px;"><strong>⚠️ Note:</strong></div>
                <div class="term-item">
                    <div class="ltr en-text"><strong>Negative Acceleration:</strong> Acceleration in negative direction.</div>
                    <div class="ar-text">تسارع في الاتجاه السالب.</div>
                </div>
                <div class="term-item">
                    <div class="ltr en-text"><strong>Deceleration:</strong> Acceleration opposite to velocity.</div>
                    <div class="ar-text">تباطؤ (التسارع عكس اتجاه الحركة).</div>
                </div>
            </div>

            <h4>📝 معادلات الحركة بتسارع ثابت (Constant Acceleration Eqs):</h4>
            <div style="background:#333; color:#0f0; padding:15px; border-radius:8px; direction:ltr; font-family:monospace; text-align:center; font-size:1.1rem;">
                v = v₀ + at<br>
                Δx = v₀t + ½at²<br>
                v² = v₀² + 2aΔx<br>
                v_avg = (v₀ + v) / 2
            </div>

            <h4 style="margin-top:1.5rem;">⬇️ السقوط الحر (Free Fall):</h4>
            <ul style="list-style:none; padding:0;">
                <li class="term-item">
                    <div class="ltr en-text"><strong>g = 9.8 m/s²</strong> (Always downwards)</div>
                    <div>تسارع الجاذبية دائماً للأسفل.</div>
                </li>
                <li class="term-item">
                    <div class="ltr en-text">At max height: <strong>v = 0</strong></div>
                    <div>عند أقصى ارتفاع تكون السرعة صفراً.</div>
                </li>
                 <li class="term-item">
                    <div class="ltr en-text">Going up/down: <strong>a = -g</strong></div>
                    <div>التسارع دائماً سالب (-g) سواء صعوداً أو هبوطاً.</div>
                </li>
            </ul>
        </div>

        <!-- Week 3: Vectors -->
        <div class="card">
            <h3>📌 Week 3: Vectors (المتجهات)</h3>
            
             <div class="formula-category">
                <div class="term-item">
                    <div class="ltr en-text"><strong>Vector:</strong> Has magnitude AND direction.</div>
                    <div class="ar-text"><strong>المتجه:</strong> له مقدار واتجاه.</div>
                </div>
                <div class="term-item">
                    <div class="ltr en-text"><strong>Scalar:</strong> Has magnitude ONLY.</div>
                    <div class="ar-text"><strong>الكمية القياسية:</strong> لها مقدار فقط.</div>
                </div>
            </div>

            <div class="comparison-container">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th class="ltr">Vector Quantities</th>
                            <th class="ltr">Scalar Quantities</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Displacement (الإزاحة)</td>
                            <td>Distance (المسافة)</td>
                        </tr>
                        <tr>
                            <td>Velocity (السرعة المتجهة)</td>
                            <td>Speed (السرعة)</td>
                        </tr>
                        <tr>
                            <td>Force (القوة)</td>
                            <td>Mass (الكتلة)</td>
                        </tr>
                         <tr>
                            <td>Momentum (الزخم)</td>
                            <td>Time (الزمن) / Energy (الطاقة)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>🔹 Unit Vectors & Components (مركبات المتجه):</h4>
            <div class="formula-item">
                 <div class="f-eq ltr">î, ĵ, k̂ (Unit vectors, magnitude = 1)</div>
            </div>
            <div class="formula-item">
                <div class="f-name ltr">Components</div>
                <div class="f-eq ltr">Aₓ = A cos θ , Aᵧ = A sin θ</div>
            </div>
            <div class="formula-item">
                 <div class="f-name ltr">Magnitude & Angle</div>
                 <div class="f-eq ltr">|A| = √(Aₓ² + Aᵧ²), θ = tan⁻¹(Aᵧ/Aₓ)</div>
            </div>

             <h4>🔹 Angle Conversion (تحويل الزوايا):</h4>
            <div class="formula-item">
                 <div class="f-eq ltr">Degrees = Radians × (180°/π)</div>
                 <div class="f-eq ltr">Radians = Degrees × (π/180°)</div>
            </div>

            <h4>🔹 Vector Operations (العمليات):</h4>
            <div class="formula-item">
                <div class="f-name ltr">Dot Product (Scalar Product)</div>
                <div class="f-eq ltr">A⃗ · B⃗ = AB cos φ = AₓBₓ + AᵧBᵧ</div>
                <div class="f-desc">النتيجة رقم قياسي (Scalar). Condition for perpendicular: Dot product = 0.</div>
            </div>
            <div class="formula-item">
                <div class="f-name ltr">Cross Product (Vector Product)</div>
                <div class="f-eq ltr">A⃗ × B⃗ = AB sin φ (n̂)</div>
                <div class="f-desc">النتيجة متجه (Vector). A×B ≠ B×A.</div>
            </div>
        </div>

        <!-- Week 4: Motion in 2D -->
        <div class="card">
            <h3>📌 Week 4: Motion in Two Dimensions</h3>
            
            <h4>🚀 المقذوفات (Projectile Motion):</h4>
            <ul style="list-style:disc; padding-right:20px;">
                <li>
                    <span class="ltr en-text" style="display:inline-block; font-weight:bold;">Horizontal:</span> 
                    <span>No acceleration (a=0), vₓ = v₀ cos θ = constant.</span>
                </li>
                <li>
                    <span class="ltr en-text" style="display:inline-block; font-weight:bold;">Vertical:</span> 
                    <span>Free fall (a = -g), vᵧ = v₀ sin θ - gt.</span>
                </li>
            </ul>
            <div style="background:#e3f2fd; padding:10px; border-radius:5px; margin:10px 0;">
                <div class="ltr en-text"><strong>Max Range:</strong> at θ = 45°.</div>
                <div class="ltr en-text"><strong>Range Eq:</strong> R = (v₀² sin 2θ) / g</div>
                <div class="ltr en-text"><strong>Max Height:</strong> H = (v₀² sin² θ) / (2g)</div>
            </div>

            <h4>🔄 الحركة الدائرية المنتظمة (Uniform Circular):</h4>
            <ul style="list-style:none; padding:0;">
                 <li class="term-item">
                    <div class="ltr en-text"><strong>Centripetal Acceleration:</strong> aᶜ = v² / r</div>
                    <div>تسارع مركزي (اتجاهه نحو المركز).</div>
                </li>
                <li class="term-item">
                    <div class="ltr en-text"><strong>Period (T):</strong> T = 2πr / v</div>
                    <div>الزمن الدوري.</div>
                </li>
                 <li class="term-item">
                    <div class="ltr en-text"><strong>Angular Speed:</strong> ω = 2π / T = v / r (rad/s)</div>
                </li>
            </ul>
        </div>

        <!-- Week 5-6: Newton's Laws -->
        <div class="card">
            <h3>📌 Week 5-6: Newton's Laws (قوانين نيوتن)</h3>
            
            <div class="formula-category">
                <div class="term-item">
                    <div class="ltr en-text"><strong>1st Law (Inertia):</strong> Object at rest stays at rest... UNLESS acted upon by external force.</div>
                    <div>قانون القصور الذاتي.</div>
                </div>
                 <div class="term-item">
                    <div class="ltr en-text"><strong>2nd Law:</strong> F⃗ = ma⃗</div>
                    <div>القوة (Newton) = الكتلة (kg) × التسارع (m/s²).</div>
                </div>
                 <div class="term-item">
                    <div class="ltr en-text"><strong>3rd Law:</strong> F₁₂ = -F₂₁</div>
                    <div>لكل فعل رد فعل مساوٍ له في المقدار ومعاكس في الاتجاه (Action-Reaction Pair).</div>
                </div>
            </div>

             <h4>🔹 Types of Forces (أنواع القوى):</h4>
             <ul style="list-style:none; padding:0;">
                <li class="term-item">
                    <div class="ltr en-text"><strong>Weight (W):</strong> W = mg (Vector, varies with g).</div>
                </li>
                 <li class="term-item">
                    <div class="ltr en-text"><strong>Normal Force (N):</strong> Perpendicular to surface.</div>
                </li>
                 <li class="term-item">
                    <div class="ltr en-text"><strong>Tension (T):</strong> Force in strings/ropes.</div>
                </li>
            </ul>

            <h4>⚖️ مقارنة: الكتلة vs الوزن</h4>
            <div class="comparison-container">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th class="ltr">Mass</th>
                            <th class="ltr">Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>الكتلة</td>
                            <td>الوزن</td>
                        </tr>
                        <tr>
                            <td class="ltr">Scalar (kg)</td>
                            <td class="ltr">Vector (N)</td>
                        </tr>
                        <tr>
                            <td>Constant anywhere</td>
                            <td>Changes with gravity</td>
                        </tr>
                         <tr>
                            <td>Property of matter</td>
                            <td>Force due to gravity</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>🚦 الاحتكاك (Friction):</h4>
             <div class="comparison-container">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th class="ltr">Static Friction (ساكن)</th>
                            <th class="ltr">Kinetic Friction (حركي)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="ltr">fₛ ≤ μₛN</td>
                            <td class="ltr">fₖ = μₖN</td>
                        </tr>
                        <tr>
                            <td>Before motion (Preventing)</td>
                            <td>During motion</td>
                        </tr>
                         <tr>
                            <td class="ltr">μₛ > μₖ (usually)</td>
                            <td class="ltr">Smaller than static</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Week 7: Work and Energy -->
        <div class="card">
            <h3>📌 Week 7: Work & Energy (الشغل والطاقة)</h3>
            
            <div class="formula-category">
                <div class="f-eq ltr">Work W = F · d · cos θ</div>
                 <div class="f-desc ltr">Unit: Joule (J). Scalar.</div>
                <ul style="list-style:none; padding:0;">
                    <li class="ltr en-text">θ = 0° → Max Positive Work (Fd)</li>
                    <li class="ltr en-text">θ = 90° → Zero Work (0)</li>
                    <li class="ltr en-text">θ = 180° → Negative Work (-Fd)</li>
                </ul>
            </div>

             <div class="formula-category">
                 <div class="term-item">
                    <div class="ltr en-text"><strong>Kinetic Energy:</strong> K = ½mv²</div>
                 </div>
                 <div class="term-item">
                    <div class="ltr en-text"><strong>Potential Energy:</strong> U_g = mgy</div>
                 </div>
                 <div class="term-item">
                    <div class="ltr en-text"><strong>Work-Energy Theorem:</strong> W_net = ΔK = K_f - K_i</div>
                 </div>
                 <div class="term-item">
                    <div class="ltr en-text"><strong>Conservation (Isolated):</strong> K_i + U_i = K_f + U_f</div>
                 </div>
            </div>
            
            <div class="comparison-container">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th class="ltr">Conservative Forces</th>
                            <th class="ltr">Non-Conservative</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>قوى محافظة</td>
                            <td>قوى غير محافظة</td>
                        </tr>
                        <tr>
                            <td class="ltr">Work independent of path</td>
                            <td class="ltr">Work depends on path</td>
                        </tr>
                         <tr>
                            <td class="ltr">Round trip work = 0</td>
                            <td class="ltr">Round trip work ≠ 0</td>
                        </tr>
                        <tr>
                            <td class="ltr">Gravity, Spring</td>
                            <td class="ltr">Friction, Air resistance</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Week 9-10: Momentum -->
        <div class="card">
            <h3>📌 Week 9-10: Momentum & Collisions (الزخم والتصادمات)</h3>
            
            <div class="term-item">
                <div class="ltr en-text"><strong>Linear Momentum:</strong> p⃗ = mv⃗ (kg·m/s, Vector)</div>
            </div>
             <div class="term-item">
                <div class="ltr en-text"><strong>Newton's 2nd (Alt):</strong> F⃗ = dp⃗/dt</div>
            </div>
            <div class="term-item">
                <div class="ltr en-text"><strong>Impulse:</strong> J⃗ = F⃗Δt = Δp⃗ (N·s)</div>
            </div>
             <div class="term-item">
                <div class="ltr en-text"><strong>Conservation:</strong> p⃗_total = constant (Isolated System)</div>
            </div>

            <h4>💥 أنواع التصادمات (Collisions):</h4>
            <div class="comparison-container">
                 <table class="comparison-table">
                    <thead>
                        <tr>
                            <th class="ltr">Type</th>
                            <th class="ltr">Momentum</th>
                            <th class="ltr">Kinetic Energy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="ltr">Elastic (مرن)</td>
                            <td class="ltr">Conserved ✅</td>
                            <td class="ltr">Conserved ✅</td>
                        </tr>
                         <tr>
                            <td class="ltr">Inelastic (غير مرن)</td>
                            <td class="ltr">Conserved ✅</td>
                            <td class="ltr">Not Conserved ❌</td>
                        </tr>
                         <tr>
                            <td class="ltr">Perfectly Inelastic</td>
                            <td class="ltr">Conserved ✅</td>
                            <td class="ltr">Not Conserved (Stick)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

             <h4>⚖️ Center of Mass (مركز الكتلة):</h4>
            <div class="formula-item">
                <div class="f-eq ltr">x_cm = (m₁x₁ + m₂x₂) / (m₁ + m₂)</div>
            </div>
        </div>

        <!-- Week 11: Rotation -->
        <div class="card">
            <h3>📌 Week 11: Rotational Motion (الحركة الدورانية)</h3>
            
             <div class="formula-category">
                 <div class="term-item">
                    <div class="ltr en-text"><strong>Torque (τ):</strong> τ = r F sin θ (N·m)</div>
                     <div>العزم (كمية متجهة). Right-Hand Rule applies.</div>
                 </div>
                  <div class="term-item">
                    <div class="ltr en-text"><strong>Newton's 2nd Law (Rot):</strong> Στ = Iα</div>
                 </div>
                 <div class="term-item">
                    <div class="ltr en-text"><strong>Moment of Inertia (I):</strong> I = Σmr² (kg·m²)</div>
                    <div>عزم القصور الذاتي (مقاومة الجسم للدوران).</div>
                 </div>
             </div>

             <h4>🔹 Rotational Kinematics (معادلات الحركة الدورانية):</h4>
             <div class="f-eq ltr">
                ω = ω₀ + αt<br>
                θ = ω₀t + ½αt²<br>
                ω² = ω₀² + 2αθ
             </div>

            <div class="comparison-container">
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th class="ltr">Linear</th>
                            <th class="ltr">Rotational</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="ltr">x (Pos)</td>
                            <td class="ltr">θ (Angle)</td>
                        </tr>
                        <tr>
                            <td class="ltr">v (Velocity)</td>
                            <td class="ltr">ω (Ang. Velocity)</td>
                        </tr>
                        <tr>
                            <td class="ltr">a (Accel)</td>
                            <td class="ltr">α (Ang. Accel)</td>
                        </tr>
                        <tr>
                            <td class="ltr">m (Mass)</td>
                            <td class="ltr">I (Inertia)</td>
                        </tr>
                         <tr>
                            <td class="ltr">F (Force)</td>
                            <td class="ltr">τ (Torque)</td>
                        </tr>
                        <tr>
                            <td class="ltr">p = mv</td>
                            <td class="ltr">L = Iω</td>
                        </tr>
                    </tbody>
                </table>
            </div>
             <div class="highlight-box" style="margin-top:10px; font-size:0.9rem;">
                <div class="ltr en-text">v = rω  |  a_t = rα  |  a_c = rω²</div>
             </div>
        </div>

        <!-- Week 12-14: Electrostatics -->
        <div class="card">
            <h3>📌 Week 12-14: Electrostatics (الكهرباء السكونية)</h3>
            
            <ul style="list-style:none; padding:0;">
                <li class="term-item">
                    <div class="ltr en-text"><strong>Like charges REPEL, Unlike charges ATTRACT.</strong></div>
                    <div>الشحنات المتشابهة تتنافر، والمختلفة تتجاذب.</div>
                </li>
                 <li class="term-item">
                    <div class="ltr en-text"><strong>Charge is Conserved & Quantized.</strong></div>
                </li>
                <li class="term-item">
                     <div class="ltr en-text"><strong>Electric Field Lines:</strong> Out of Positive, Into Negative.</div>
                     <div>خطوط المجال: تخرج من الموجب، تدخل في السالب، لا تتقاطع.</div>
                </li>
            </ul>

            <div class="formula-item">
                <div class="f-name ltr">Coulomb's Law</div>
                <div class="f-eq ltr">F = k |q₁q₂| / r²</div>
            </div>

            <div class="formula-item">
                <div class="f-name ltr">Electric Field</div>
                <div class="f-eq ltr">E⃗ = F⃗/q₀ = k|q|/r²</div>
                 <div class="f-desc ltr">Force on charge in field: F⃗ = qE⃗</div>
            </div>

             <h4>🔹 Charge Distributions (توزيعات الشحنة):</h4>
             <div class="formula-item">
                <div class="ltr en-text">Linear: λ = Q/L | Surface: σ = Q/A | Volume: ρ = Q/V</div>
            </div>

            <div class="formula-item">
                <div class="f-name ltr">Electric Flux & Gauss's Law</div>
                <div class="f-eq ltr">Φ = EA cos θ = Q_enclosed / ε₀</div>
                <div class="f-desc">Use Gauss for Symmetry.</div>
            </div>
        </div>

        <!-- Key Comparisons Summary -->
        <div class="card">
             <h3>🔑 مقارنات شاملة مهمة (Key Comparisons)</h3>
             
             <div class="comparison-container">
                <table class="comparison-table">
                    <thead>
                        <tr><th colspan="3">1. Scalar vs Vector</th></tr>
                    </thead>
                     <tbody>
                        <tr><td>Direction</td><td>Vector: ✓</td><td>Scalar: ✗</td></tr>
                         <tr><td>Examples</td><td class="ltr">Velocity, Force</td><td class="ltr">Mass, Energy</td></tr>
                    </tbody>
                </table>
                 <table class="comparison-table">
                    <thead>
                        <tr><th colspan="3">2. Work vs Energy vs Power</th></tr>
                    </thead>
                     <tbody>
                        <tr><td class="ltr">Work</td><td class="ltr">W = Fd</td><td class="ltr">Unit: Joule</td></tr>
                        <tr><td class="ltr">Energy</td><td class="ltr">Capacity to do work</td><td class="ltr">Unit: Joule</td></tr>
                        <tr><td class="ltr">Power</td><td class="ltr">Rate (P = W/t)</td><td class="ltr">Unit: Watt</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Constants -->
        <div class="card">
             <h3>📝 Important Constants (ثوابت هامة)</h3>
             <div class="constants-box">
                g = 9.8 m/s²<br>
                k = 9 × 10⁹ N·m²/C²<br>
                e (charge) = 1.6 × 10⁻¹⁹ C<br>
                ε₀ = 8.85 × 10⁻¹² C²/(N·m²)
             </div>
        </div>
        
        <style>
            .term-item {
                border-bottom: 1px solid #eee;
                padding: 10px 0;
                margin-bottom: 5px;
            }
            .term-item:last-child { border-bottom: none; }
            .comparison-container {
                overflow-x: auto;
            }
            .comparison-table th.ltr, .comparison-table td.ltr {
                direction: ltr;
                text-align: left;
            }
        </style>
    `;
    window.scrollTo(0, 0);
}

