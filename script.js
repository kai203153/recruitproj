// --- シミュレーション用のナレッジベース ---
const knowledgeBase = [
    {
        id: 5,
        questioner: {
            age: "20代後半",
            industry: "Webサービス",
            job: "マーケター",
        },
        question: "リクルートの働き方について。残業は多いですか？ワークライフバランスは取れますか？",
        answer: `
            <p class="mb-4">働き方に関するご質問ですね。リクルートは「スマートワーク」を掲げており、働き方改革には全社で力を入れています。</p>
            <p class="mb-3"><strong>【結論】</strong><br>部署や時期による、というのが実態ですが、全社的には残業時間は減少傾向にあります。月平均で20〜30時間程度の部署が多い印象です。</p>
            <div class="p-4 bg-indigo-50 rounded-lg">
                <h4 class="font-bold text-indigo-800">働き方のリアル</h4>
                <ul class="list-disc list-inside mt-2 text-sm space-y-2">
                    <li><strong>残業:</strong> 繁忙期（四半期末など）は一時的に増えることもありますが、深夜残業や休日出勤が常態化している部署はほとんどありません。PCのログで労働時間は厳密に管理されています。</li>
                    <li><strong>有給休暇:</strong> 取得率は非常に高いです。年に数回、長期休暇（5営業日以上）を取得することが推奨されており、多くの社員が旅行などを楽しんでいます。</li>
                    <li><strong>リモートワーク:</strong> 多くの部署でリモートと出社のハイブリッドワークが浸透しています。チームの方針によりますが、週2〜3日のリモート勤務が一般的です。</li>
                </ul>
            </div>
            <p class="mt-4 text-sm text-gray-600">「自分はどう働きたいか」という意思を尊重してくれる文化なので、面接で希望の働き方を率直に伝えてみるのが良いでしょう。</p>
            <div class="mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <p class="text-xs text-gray-600"><strong>情報源:</strong> 2024年</p>
            </div>
        `,
        tags: ["リクルート", "働き方", "残業", "ワークライフバランス", "WLB"],
        views: 421,
        likes: 58,
    },
    {
        id: 6,
        questioner: {
            age: "30代前半",
            industry: "不動産",
            job: "営業",
        },
        question: "リクルートの給与体系について。ミッショングレード制とは具体的にどういうものですか？",
        answer: `
            <p class="mb-4">給与体系、特にミッショングレード制についての質問ですね。これはリクルートの大きな特徴の一つです。</p>
            <p class="mb-3"><strong>【結論】</strong><br>年齢や社歴ではなく「担うミッション（職務）の価値」によって報酬が決まる制度です。半期ごとにミッションの見直しがあり、その内容によって給与が変動します。</p>
             <div class="p-4 bg-gray-100 rounded-lg">
                <h4 class="font-bold">ミッショングレード制のポイント</h4>
                <ul class="list-disc list-inside mt-2 text-sm space-y-2">
                    <li><strong>グレード定義:</strong> 全社で職務の価値に応じたグレードが設定されています。例えば、事業の根幹を担う戦略的なミッションはグレードが高く、定型的な業務は相対的にグレードが低くなります。</li>
                    <li><strong>半期ごとの査定:</strong> 上長との面談を通じて、次の半期で担うミッションとその難易度をすり合わせ、グレードが決定します。</li>
                    <li><strong>昇給・降給:</strong> より難易度の高いミッションに挑戦すれば大幅な昇給も可能ですし、逆も起こり得ます。この透明性と変動性が特徴です。</li>
                    <li><strong>インセンティブ:</strong> グレードに応じた基本給とは別に、目標達成度に応じたインセンティブ（賞与）が支給されます。</li>
                </ul>
            </div>
            <p class="mt-4 text-sm text-gray-600">年功序列ではなく、常に挑戦し続ける人に報いるための制度と言えます。安定よりも変化や成長を求める方にはフィットしやすいでしょう。</p>
            <div class="mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <p class="text-xs text-gray-600"><strong>情報源:</strong> 2024年</p>
            </div>
        `,
        tags: ["リクルート", "給与", "年収", "評価制度", "ミッショングレード"],
        views: 589,
        likes: 72,
    },
    {
        id: 7,
        questioner: {
            age: "20代後半",
            industry: "IT",
            job: "エンジニア",
        },
        question: "リクルートの社内異動制度「ミッショングラブ」は、本当に機能していますか？希望は通りやすいですか？",
        answer: `
            <p class="mb-4">「ミッショングラブ」についてですね。キャリアの自律性を重んじるリクルートを象徴する制度です。</p>
            <p class="mb-3"><strong>【結論】</strong><br>はい、非常に活発に機能しています。多くの社員がこの制度を使ってキャリアチェンジを実現しています。</p>
            <div class="p-4 bg-teal-50 rounded-lg">
                <h4 class="font-bold text-teal-800">ミッショングラブの実態</h4>
                <ul class="list-disc list-inside mt-2 text-sm space-y-2">
                    <li><strong>仕組み:</strong> 社内のイントラネットに、様々な部署の募集ポジションが公開されています。社員は現上司の許可なく、自由に応募することができます。</li>
                    <li><strong>実現可能性:</strong> もちろん、異動には募集部署との面接があり、スキルや経験が求められます。しかし、「今の部署で成果を出していること」が前提にはなりますが、未経験の職種への異動も十分に可能です。</li>
                    <li><strong>活用例:</strong> 営業から企画職へ、メディアの担当から新規事業開発へ、といった異動が日常的に行われています。</li>
                </ul>
            </div>
            <p class="mt-4 text-sm text-gray-600">「自分のキャリアは自分で決める」という意思が強い人にとっては、社内にいながら多様な経験を積める、非常に魅力的な制度です。</p>
            <div class="mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <p class="text-xs text-gray-600"><strong>情報源:</strong> 2023-2024年</p>
            </div>
        `,
        tags: ["リクルート", "キャリアパス", "社内異動", "ミッショングラブ", "キャリアチェンジ"],
        views: 350,
        likes: 41,
    },
    {
        id: 4,
        questioner: {
            age: "20代前半",
            industry: "広告・メディア",
            job: "企画職",
        },
        question: "リクルートって、体育会系の文化が強いって本当ですか？飲み会とかも激しいんでしょうか？",
        answer: `
            <p class="mb-4">「リクルートの社風」に関するご質問、ありがとうございます。これは昔からよく聞かれる質問ですね。</p>
            <p class="mb-3"><strong>【結論】</strong><br>「体育会系」という言葉のイメージによりますが、「目標達成への意識が非常に高く、エネルギッシュな文化」という意味では、その側面は今でも存在します。ただし、一昔前の「飲み会が激しい」「上下関係が絶対」といったイメージとは大きく異なってきています。</p>
            <div class="p-4 bg-yellow-50 rounded-lg">
                <h4 class="font-bold text-yellow-800">リクルートの「体育会系」文化のリアル</h4>
                <ul class="list-disc list-inside mt-2 text-sm space-y-2">
                    <li><strong>目標達成（G）への圧倒的当事者意識:</strong> チームや個人で設定した目標（Goal）に対して、どうすれば達成できるかを全員が考え、行動に移す文化が根付いています。この熱量が「体育会系」と表現されることが多いです。</li>
                    <li><strong>称賛の文化:</strong> 目標を達成した際には、チーム全体で盛大に称賛し合います。キックオフや表彰式などは非常に盛り上がります。</li>
                    <li><strong>飲み会や社内イベント:</strong> 昔に比べて強制的な参加は全くなく、多様な働き方が尊重されています。もちろん、イベント好きな社員も多いですが、参加は完全に任意です。</li>
                    <li><strong>ロジカルさも重視:</strong> 根性論だけでなく、データに基づいた議論やロジカルな思考も同様に重視されます。特に最近はその傾向が強まっています。</li>
                </ul>
            </div>
            <p class="mt-4 text-sm text-gray-600">結論として、エネルギッシュな環境で目標達成にコミットしたい方には非常にフィットする文化ですが、いわゆる「体育会系のノリ」が苦手な方でも、ロジカルさや個人の意思が尊重されるため、活躍できる土壌は十分にあります。</p>
            <div class="mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <p class="text-xs text-gray-600"><strong>情報源:</strong> 2024年</p>
            </div>
        `,
        tags: ["リクルート", "社風", "体育会系", "文化", "飲み会"],
        views: 312,
        likes: 45,
    },
    {
        id: 1,
        questioner: {
            age: "20代後半",
            industry: "IT・通信",
            job: "営業職",
        },
        question: "A社とB社、若手の裁量権と成長環境って、ぶっちゃけどう違いますか？",
        answer: `
            <p class="mb-4">ご質問ありがとうございます。A社とB社の若手育成に関するリアルな情報ですね。多くの候補者様が気にされるポイントです。</p>
            <p class="mb-3"><strong>【結論】</strong><br>早くから挑戦したいならA社、じっくり育ててほしいならB社、というのが元社員や現役社員から聞くリアルな声です。</p>
            <div class="p-4 bg-blue-50 rounded-lg mb-4">
                <h4 class="font-bold text-blue-800">A社：実践で学ぶ！挑戦環境</h4>
                <ul class="list-disc list-inside mt-2 text-sm space-y-1">
                    <li>入社1年目からでも、手を挙げればプロジェクトの重要部分を任される。</li>
                    <li>「まずやってみろ」の文化。失敗から学ぶ姿勢が評価される。</li>
                    <li><strong>注意点：</strong>受け身だと放置される可能性も。自走力が求められます。</li>
                </ul>
            </div>
            <div class="p-4 bg-green-50 rounded-lg">
                <h4 class="font-bold text-green-800">B社：丁寧な育成！安心環境</h4>
                <ul class="list-disc list-inside mt-2 text-sm space-y-1">
                    <li>3年目頃まで手厚いOJTと研修制度が充実。</li>
                    <li>先輩がしっかりサポートしてくれるので、未経験分野でも安心。</li>
                    <li><strong>注意点：</strong>独り立ちのスピードはA社に比べると緩やかです。</li>
                </ul>
            </div>
            <p class="mt-4 text-sm text-gray-600">※上記は多数のヒアリングに基づく傾向であり、部署やチームによって異なる場合があります。</p>
            <div class="mt-4 p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <p class="text-xs text-gray-600"><strong>情報源:</strong> 2023-2024年</p>
            </div>
        `,
        tags: ["A社", "B社", "裁量権", "成長環境", "若手"],
        views: 128,
        likes: 15,
    }
];

// --- DOM要素の取得 ---
const searchInput = document.getElementById('search-input');
const qaFeed = document.getElementById('qa-feed');
const modal = document.getElementById('qa-modal');
const modalContent = document.getElementById('modal-content');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal-btn');
const newQuestionBtn = document.getElementById('new-question-btn');

// --- 関数定義 ---

// Q&Aカードを描画する
const renderFeed = (items) => {
    qaFeed.innerHTML = '';
    if (items.length === 0) {
        qaFeed.innerHTML = `<div class="text-center p-10 bg-white rounded-lg shadow-sm"><p class="text-gray-500">該当する質問が見つかりませんでした。</p></div>`;
        return;
    }
    items.forEach(item => {
        const card = document.createElement('article');
        card.className = 'q-card bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer';
        card.onclick = () => openModal(item);
        
        const answerExcerpt = item.answer.split('</p>')[0].replace(/<p class="mb-4">/g, '') + '...</p>';

        card.innerHTML = `
            <div class="flex items-start mb-3">
                <div class="flex-shrink-0 mr-3">
                    <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                </div>
                <div>
                    <p class="font-semibold text-gray-800">${item.questioner.age}, ${item.questioner.job}</p>
                    <p class="text-sm text-gray-500">${item.questioner.industry}業界</p>
                </div>
            </div>
            <h2 class="text-xl font-bold mb-3 text-gray-900">${item.question}</h2>
            <div class="text-gray-600 text-sm mb-4">${answerExcerpt}</div>
            <div class="flex justify-between items-center text-sm text-gray-500">
                <div class="flex flex-wrap gap-2">
                    ${item.tags.map(tag => `<span class="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">#${tag}</span>`).join('')}
                </div>
                <div class="flex items-center space-x-4 flex-shrink-0 mt-2 md:mt-0">
                    <span class="flex items-center"><svg class="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fill-rule="evenodd" d="M.458 10C3.732 4.943 7.523 3 10 3s6.268 1.943 9.542 7c-3.274 5.057-7.03 7-9.542 7S3.732 15.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" /></svg>${item.views}</span>
                    <span class="flex items-center"><svg class="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg>${item.likes}</span>
                </div>
            </div>
        `;
        qaFeed.appendChild(card);
    });
};

// Q&A詳細モーダルを開く
const openModal = (item) => {
    modalBody.innerHTML = `
        <div class="flex items-start mb-4">
            <div class="flex-shrink-0 mr-4">
                <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
            </div>
            <div>
                <p class="font-bold text-lg text-gray-800">${item.questioner.age}, ${item.questioner.job}</p>
                <p class="text-md text-gray-500">${item.questioner.industry}業界</p>
            </div>
        </div>
        <h2 class="text-2xl font-bold mb-6 text-gray-900">${item.question}</h2>
        <div class="border-t border-gray-200 pt-6">
            <div class="flex items-center mb-4">
                 <div class="flex-shrink-0 mr-4">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                </div>
                <p class="font-bold text-lg text-gray-800">AIの回答</p>
            </div>
            <div class="prose max-w-none text-gray-700">${item.answer}</div>
        </div>
    `;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('opacity-100');
        modalContent.classList.remove('opacity-0', 'scale-95');
        modalContent.classList.add('opacity-100', 'scale-100');
    }, 10);
};

// 新規質問モーダルを開く（シミュレーション）
const openNewQuestionModal = () => {
     modalBody.innerHTML = `
        <h2 class="text-2xl font-bold mb-4 text-gray-900">新しい質問を投稿する</h2>
        <p class="text-sm text-gray-600 mb-6">ご質問は匿名で公開され、他の転職活動中の方の参考になります。個人が特定できる情報は含めないようご注意ください。</p>
        
        <div class="space-y-4">
            <div>
                <label for="question-title" class="block text-sm font-medium text-gray-700 mb-1">質問（タイトル）</label>
                <input type="text" id="question-title" class="w-full p-2 border border-gray-300 rounded-md" placeholder="例：A社の残業時間の実態について">
            </div>
            <div>
                <label for="question-detail" class="block text-sm font-medium text-gray-700 mb-1">質問の詳細（任意）</label>
                <textarea id="question-detail" rows="4" class="w-full p-2 border border-gray-300 rounded-md" placeholder="背景や特に知りたい点など"></textarea>
            </div>
             <div class="text-right">
                <button class="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">この内容で質問する</button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('opacity-100');
        modalContent.classList.remove('opacity-0', 'scale-95');
        modalContent.classList.add('opacity-100', 'scale-100');
    }, 10);
}

// モーダルを閉じる
const closeModal = () => {
    modal.classList.remove('opacity-100');
    modalContent.classList.remove('opacity-100', 'scale-100');
    modalContent.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
};

// 検索入力に基づいてフィードをフィルタリングする
const filterFeed = () => {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        renderFeed(knowledgeBase);
        return;
    }
    const filtered = knowledgeBase.filter(item => {
        const searchableText = [item.question, ...item.tags].join(' ').toLowerCase();
        return searchableText.includes(query);
    });
    renderFeed(filtered);
};

// --- イベントリスナーの設定 ---
searchInput.addEventListener('input', filterFeed);
closeModalBtn.addEventListener('click', closeModal);
newQuestionBtn.addEventListener('click', openNewQuestionModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// --- 初期描画 ---
renderFeed(knowledgeBase);
