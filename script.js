// script.js

const questions = [
    { question: "ما هو مصدر الطاقة الشمسية؟", options: ["الفحم", "الشمس", "الرياح", "الغاز"], answer: "الشمس" },
    { question: "ما الذي يحول ضوء الشمس إلى كهرباء في الألواح الشمسية؟", options: ["البطارية", "المحرك", "الخلايا الكهروضوئية", "الأسلاك"], answer: "الخلايا الكهروضوئية" },
    { question: "ما هو مقياس كفاءة اللوح الشمسي؟", options: ["السرعة", "الحجم", "المساحة", "نسبة التحويل"], answer: "نسبة التحويل" },
    { question: "ما الوحدة التي تُقاس بها الطاقة الكهربائية المنتجة من الألواح الشمسية؟", options: ["اللتر", "الواط", "الميل", "الباوند"], answer: "الواط" },
    { question: "ما هو التأثير الكهروضوئي؟", options: ["تحول الحرارة إلى ضوء", "توليد كهرباء من الضوء", "تحويل الكهرباء إلى ماء", "تبريد الهواء"], answer: "توليد كهرباء من الضوء" },
    { question: "أي من التالي يُعتبر من عيوب الطاقة الشمسية؟", options: ["التكاليف العالية", "توفير الكهرباء في الليل", "كفاءة عالية في الظل", "يحتاج إلى القليل من الصيانة"], answer: "التكاليف العالية" },
    { question: "كم يستغرق ضوء الشمس للوصول إلى الأرض؟", options: ["8 ثوانٍ", "8 دقائق", "8 ساعات", "8 أيام"], answer: "8 دقائق" },
    { question: "ما اسم الأداة المستخدمة لتخزين الكهرباء من الألواح الشمسية؟", options: ["المحرك", "البطارية", "العاكس", "المفتاح"], answer: "البطارية" },
    { question: "أي منطقة تفضل لتركيب الألواح الشمسية؟", options: ["الأماكن المظللة", "المناطق المشمسة", "المناطق الجبلية فقط", "المناطق البحرية فقط"], answer: "المناطق المشمسة" },
    { question: "ما هي تكلفة الكهرباء من الطاقة الشمسية مقارنة بالوقود الأحفوري؟", options: ["أعلى", "أقل", "متساوية", "غير مكلفة"], answer: "أقل" },
    { question: "هل تعتمد الألواح الشمسية على وجود ضوء الشمس المباشر؟", options: ["نعم", "لا"], answer: "نعم" },
    { question: "ما هي إحدى التطبيقات الشائعة للطاقة الشمسية؟", options: ["السيارات التقليدية", "السخانات الشمسية", "توليد الحرارة من الفحم", "طائرات الشحن"], answer: "السخانات الشمسية" },
    { question: "أي من التالي يمكن تشغيله باستخدام الطاقة الشمسية؟", options: ["المراوح", "الأفران", "المركبات الفضائية", "جميع ما سبق"], answer: "جميع ما سبق" },
    { question: "ما هي الميزة البيئية للطاقة الشمسية؟", options: ["تنتج غازات ضارة", "تنتج ضوضاء", "لا تطلق انبعاثات ضارة", "تحتاج إلى وقود"], answer: "لا تطلق انبعاثات ضارة" },
    { question: "ما هو المكون الذي يحول الطاقة الشمسية إلى تيار متردد؟", options: ["الخلية", "المحول", "العاكس", "البطارية"], answer: "العاكس" },
    { question: "ما هي إحدى العوائق الرئيسية للطاقة الشمسية؟", options: ["التكلفة العالية", "الوقود الأحفوري", "انخفاض الكفاءة ليلاً", "التلوث"], answer: "انخفاض الكفاءة ليلاً" },
    { question: "أي نوع من الطاقات تعتبر الطاقة الشمسية؟", options: ["متجددة", "غير متجددة"], answer: "متجددة" },
    { question: "ما الذي يحدد حجم الألواح الشمسية المطلوبة؟", options: ["حجم البطارية", "كمية الطاقة المطلوبة", "وزن اللوح", "عدد العاكسات"], answer: "كمية الطاقة المطلوبة" },
    { question: "ما هو الجهاز الذي يستخدم لحماية النظام الشمسي من الجهد الزائد؟", options: ["المبدل", "العاكس", "المنظم", "البطارية"], answer: "المنظم" },
    { question: "كم من الطاقة تنتج الشمس في يوم صافٍ؟", options: ["غير كافية", "كافية لتغطية احتياجات جميع الكائنات الحية"], answer: "كافية لتغطية احتياجات جميع الكائنات الحية" }
];

let score = 0;

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <ul class="options">
                ${q.options.map(option => `
                    <li>
                        <input type="radio" name="question${index}" value="${option}"> ${option}
                    </li>
                `).join('')}
            </ul>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    answers.forEach((answer, index) => {
        if (answer.value === questions[index].answer) {
            score++;
        }
    });

    document.getElementById('result').innerText = `إجابات صحيحة: ${score} من ${questions.length}`;

    // إرسال النتيجة إلى PHP
    fetch('save_score.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score: score })
    });
}

window.onload = loadQuiz;