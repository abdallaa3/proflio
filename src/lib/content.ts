import type { Locale } from "./i18n";

export type Campaign = {
  slug: string;
  image: string;
  width: number;
  height: number;
  alt?: Record<Locale, string>;
  platform: string;
  business: Record<Locale, string>;
  goal: Record<Locale, string>;
  optimized: Record<Locale, string>;
  result: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  details: Record<Locale, string[]>;
};

export type Brand = {
  name: string;
  market: Record<Locale, string>;
  context: Record<Locale, string>;
};

export const campaigns: Campaign[] = [
  {
    slug: "meta-messaging-table-results",
    image: "/assets/images/campaign-meta-messaging-table-results.png",
    width: 1805,
    height: 420,
    alt: {
      ar: "لقطة نظيفة من جدول مدير إعلانات Meta تعرض نتائج حملات رسائل متعددة مع المحادثات والوصول والظهور والإنفاق",
      en: "Clean Meta Ads Manager table screenshot showing multiple messaging campaign results, reach, impressions, and spend",
    },
    platform: "Meta Ads / Messaging Campaigns",
    business: {
      ar: "حملات رسائل على فيسبوك وإنستجرام",
      en: "Facebook and Instagram messaging campaigns",
    },
    goal: {
      ar: "توليد محادثات ورسائل مؤهلة مع متابعة تكلفة النتيجة وحجم الوصول والظهور.",
      en: "Generate qualified message conversations while tracking cost per result, reach, and impressions.",
    },
    optimized: {
      ar: "اختبار الرسائل والجمهور، مراقبة تكلفة النتيجة، وتحسين الحملات حسب حجم المحادثات وجودتها.",
      en: "Messaging angles, audience testing, cost per result, and campaign performance by conversation volume and quality.",
    },
    result: {
      ar: "التقرير الظاهر يعرض 5 حملات بإجمالي 1,544 نتيجة، 358,116 ظهورًا، 148,297 وصولًا، وإنفاقًا تقريبيًا 163.59 دولار.",
      en: "The visible report shows 5 campaigns with 1,544 total results, 358,116 impressions, 148,297 reach, and approximately $163.59 spent.",
    },
    title: {
      ar: "حملات رسائل على Meta بأكثر من 1,500 نتيجة",
      en: "Meta messaging campaigns with 1,500+ visible results",
    },
    description: {
      ar: "إدارة وتحسين مجموعة حملات رسائل على فيسبوك/إنستجرام مع متابعة تكلفة النتيجة، الوصول، مرات الظهور، وحجم المحادثات الناتجة. تُظهر النتائج قدرة الحملات على توليد محادثات مؤهلة بتكلفة منخفضة لكل نتيجة.",
      en: "Managed and optimized multiple Meta messaging campaigns with a focus on cost per result, reach, impressions, and conversation volume. The visible report highlights efficient message generation and strong campaign testing across audiences and creatives.",
    },
    details: {
      ar: [
        "1,544+ نتيجة/محادثة ظاهرة",
        "358K+ ظهور ظاهر",
        "148K+ وصول ظاهر",
        "أفضل حملة: 665 نتيجة بتكلفة تقريبية 0.08 دولار",
        "تحسين مستمر للرسائل والجمهور والتكلفة",
      ],
      en: [
        "1,544+ visible results/conversations",
        "358K+ visible impressions",
        "148K+ visible reach",
        "Best campaign: 665 results at around $0.08",
        "Continuous messaging, audience, and cost optimization",
      ],
    },
  },
  {
    slug: "swimming-coach-uae-meta-ads",
    image: "/assets/images/swimming-coach-uae-meta-ads.png",
    width: 715,
    height: 1438,
    alt: {
      ar: "لقطة من تطبيق Meta Ads تعرض حملة رسائل لمدرب سباحة في الإمارات مع الإنفاق والنتائج وتوصية تحسين تكلفة المحادثة",
      en: "Meta Ads mobile screenshot showing a UAE swimming coach messaging campaign with spend, results, and a conversation cost optimization recommendation",
    },
    platform: "Meta Ads / Local Services",
    business: {
      ar: "مدرب سباحة وخدمة تدريب محلية في الإمارات",
      en: "Swimming coach and local training service in the UAE",
    },
    goal: {
      ar: "جذب محادثات مباشرة من أشخاص مهتمين بخدمة تدريب السباحة داخل السوق المحلي.",
      en: "Generate direct conversations from people interested in swimming training in the local market.",
    },
    optimized: {
      ar: "متابعة تكلفة المحادثة، الإنفاق، نتيجة الحملة، وتوصيات Meta لتحسين تكلفة المحادثات حسب إعدادات الحملة ونطاق التاريخ المحدد.",
      en: "Cost per conversation, spend, campaign results, and Meta recommendations based on the selected date range and campaign settings.",
    },
    result: {
      ar: "التقرير الظاهر يعرض 360 نتيجة/محادثة، تكلفة تقريبية 0.39 دولار لكل نتيجة، وإنفاقًا ظاهرًا 139.19 دولار.",
      en: "The visible report shows 360 results/conversations, approximately $0.39 cost per result, and $139.19 visible spend.",
    },
    title: {
      ar: "حملة رسائل لمدرب سباحة في الإمارات",
      en: "Messaging campaign for a swimming coach in the UAE",
    },
    description: {
      ar: "حملة Meta Ads موجهة لخدمة تدريب سباحة في الإمارات، ركزت على جذب محادثات مهتمة بتكلفة مناسبة لكل نتيجة، مع متابعة توصيات التحسين داخل مدير الإعلانات.",
      en: "A Meta Ads campaign for a UAE-based swimming training service, focused on generating interested conversations at an efficient cost per result while monitoring optimization recommendations inside Ads Manager.",
    },
    details: {
      ar: [
        "360 نتيجة/محادثة ظاهرة",
        "تكلفة تقريبية 0.39 دولار لكل نتيجة",
        "إنفاق ظاهر 139.19 دولار",
        "توصية Meta: تكلفة محادثة أقل بنسبة محتملة 7%",
        "مناسب لخدمات التدريب المحلي والاستفسارات المباشرة",
      ],
      en: [
        "360 visible results/conversations",
        "Approx. $0.39 cost per result",
        "$139.19 total visible spend",
        "Meta recommendation: potential 7% lower cost per conversation",
        "Suitable for local coaching and direct inquiry generation",
      ],
    },
  },
  {
    slug: "govents-google-ads",
    image: "/assets/images/campaign-govents-google-ads.jpeg",
    width: 1529,
    height: 617,
    platform: "Google Ads",
    business: {
      ar: "خدمات فعاليات وتجهيزات في سوق الإمارات",
      en: "Events and production services in the UAE market",
    },
    goal: {
      ar: "جذب زيارات عالية النية من البحث وتحويلها إلى فرص تواصل قابلة للمتابعة.",
      en: "Capture high-intent search traffic and turn it into follow-up opportunities.",
    },
    optimized: {
      ar: "هيكل الحملة، الكلمات المفتاحية، تكلفة النقرة، ومؤشرات التفاعل داخل لوحة الأداء.",
      en: "Campaign structure, keywords, cost per click, and engagement signals inside the dashboard.",
    },
    result: {
      ar: "تُظهر اللقطة 7.57 ألف نقرة، 4.11 ألف تفاعل، ومتوسط تكلفة نقرة 1.35 درهم.",
      en: "The screenshot shows 7.57K clicks, 4.11K interactions, and a 1.35 AED average CPC.",
    },
    title: {
      ar: "تحسين حملة بحث لخدمات الفعاليات",
      en: "Search campaign optimization for events services",
    },
    description: {
      ar: "حملة بحث مبنية على قراءة الطلب الفعلي، مع متابعة دقيقة للتكلفة وجودة الزيارات بدل الاكتفاء بحجم النقرات.",
      en: "A search campaign shaped around real demand, with cost and traffic quality tracked beyond click volume.",
    },
    details: {
      ar: ["المنصة: Google Ads", "النشاط: فعاليات", "الهدف: زيارات مؤهلة", "التحسين: الكلمات والتكلفة"],
      en: ["Platform: Google Ads", "Industry: Events", "Goal: Qualified visits", "Optimized: Keywords and cost"],
    },
  },
  {
    slug: "achievement-google-ads",
    image: "/assets/images/campaign-achievement-google-ads.jpeg",
    width: 1600,
    height: 506,
    platform: "Google Ads",
    business: {
      ar: "خدمات وساطة وإنجاز معاملات في الإمارات",
      en: "Brokerage and processing services in the UAE",
    },
    goal: {
      ar: "الوصول إلى باحثين لديهم نية واضحة وقياس تكلفة الزيارة وجودة الزيارات الناتجة.",
      en: "Reach searchers with clear intent while measuring visit cost and traffic quality.",
    },
    optimized: {
      ar: "المجموعات الإعلانية، مناطق الاستهداف، الكلمات، ومراقبة التكلفة مقابل الزيارات.",
      en: "Ad groups, location targeting, keywords, and cost control against visit volume.",
    },
    result: {
      ar: "تُظهر اللقطة 409 نقرة، 2,425 ظهورًا، ومتوسط تكلفة نقرة 37.52 ج.م.",
      en: "The screenshot shows 409 clicks, 2,425 impressions, and a 37.52 EGP average CPC.",
    },
    title: {
      ar: "حملة بحث لخدمات الوساطة وإنجاز المعاملات",
      en: "Search campaign for brokerage and processing services",
    },
    description: {
      ar: "حملة موجهة لسوق الإمارات مع تركيز على نية البحث، جودة الزيارات، وفرص التحويل التي يمكن متابعتها بعد النقر.",
      en: "A UAE-focused search campaign centered on intent, qualified visits, and post-click conversion opportunities.",
    },
    details: {
      ar: ["المنصة: Google Ads", "السوق: الإمارات", "الهدف: زيارات مؤهلة", "التحسين: الاستهداف والتكلفة"],
      en: ["Platform: Google Ads", "Market: UAE", "Goal: Qualified visits", "Optimized: Targeting and cost"],
    },
  },
  {
    slug: "meta-messaging-results",
    image: "/assets/images/campaign-meta-messaging-results.jpeg",
    width: 719,
    height: 1065,
    platform: "Meta Ads",
    business: {
      ar: "حملة رسائل عبر فيسبوك وإنستجرام",
      en: "Facebook and Instagram messaging campaign",
    },
    goal: {
      ar: "تحويل الاهتمام إلى محادثات فعلية يمكن لفريق المبيعات متابعتها.",
      en: "Turn attention into real conversations the sales team can follow up with.",
    },
    optimized: {
      ar: "الجمهور، الرسالة، الكرياتيف، وتكلفة بدء المحادثة.",
      en: "Audience, message, creative, and cost per messaging conversation started.",
    },
    result: {
      ar: "تُظهر اللقطة 1,541 محادثة بدأت بتكلفة 0.0883 دولار للمحادثة وإنفاق 136.03 دولار.",
      en: "The screenshot shows 1,541 messaging conversations started at $0.0883 each with $136.03 spent.",
    },
    title: {
      ar: "نتائج حملة رسائل على فيسبوك وإنستجرام",
      en: "Facebook and Instagram messaging results",
    },
    description: {
      ar: "اختبار رسائل وجماهير بهدف الوصول إلى محادثات أكثر قابلية للمتابعة، مع قراءة واضحة للتكلفة والحجم.",
      en: "Message and audience testing designed to drive conversations that are easier to qualify and follow up.",
    },
    details: {
      ar: ["المنصة: Meta Ads", "الهدف: رسائل", "التحسين: الجمهور والكرياتيف", "النتيجة: 1,541 محادثة"],
      en: ["Platform: Meta Ads", "Goal: Messages", "Optimized: Audience and creative", "Result: 1,541 conversations"],
    },
  },
  {
    slug: "meta-tailored-messages",
    image: "/assets/images/campaign-meta-tailored-messages.jpeg",
    width: 705,
    height: 1064,
    platform: "Meta Ads",
    business: {
      ar: "حملة رسائل مخصصة حسب نية العميل",
      en: "Intent-based tailored messaging campaign",
    },
    goal: {
      ar: "رفع عدد المحادثات المؤهلة عبر رسالة مباشرة ومسار تواصل واضح.",
      en: "Increase qualified conversations through a clear message and follow-up path.",
    },
    optimized: {
      ar: "صياغة الرسالة، جودة الجمهور، الميزانية اليومية، وتكلفة بدء المحادثة.",
      en: "Message angle, audience quality, daily budget, and cost per messaging conversation started.",
    },
    result: {
      ar: "تُظهر اللقطة 1,300 محادثة بدأت بتكلفة 0.0822 دولار للمحادثة وإنفاق 106.90 دولار.",
      en: "The screenshot shows 1,300 messaging conversations started at $0.0822 each with $106.90 spent.",
    },
    title: {
      ar: "حملة رسائل مخصصة حسب نية العميل",
      en: "Tailored messages campaign by customer intent",
    },
    description: {
      ar: "مسار رسائل مختصر يربط بين الإعلان والمحادثة، مع تحسين مستمر للتكلفة وجودة الجمهور.",
      en: "A focused messaging flow connecting the ad to the conversation, with steady cost and audience-quality optimization.",
    },
    details: {
      ar: ["المنصة: Meta Ads", "الهدف: رسائل", "التحسين: الرسالة والتكلفة", "النتيجة: 1,300 محادثة"],
      en: ["Platform: Meta Ads", "Goal: Messages", "Optimized: Message and cost", "Result: 1,300 conversations"],
    },
  },
];

export const dictionary = {
  ar: {
    meta: {
      homeTitle: "عبدالله قمر | ميديا باير ومتخصص تسويق أداء",
      homeDescription:
        "بورتفوليو عبدالله قمر، ميديا باير ومتخصص تسويق أداء لحملات Meta وGoogle وInstagram وTikTok مع تركيز على العملاء المحتملين والتحسين القابل للقياس.",
      campaignsTitle: "نتائج الحملات | عبدالله قمر",
      campaignsDescription:
        "دراسات حالة مختصرة ولقطات أداء حقيقية لحملات إعلانية يديرها عبدالله قمر عبر Google وMeta.",
      cvTitle: "السيرة الذاتية | عبدالله قمر",
      cvDescription:
        "السيرة المهنية لعبدالله قمر، متخصص تسويق أداء وميديا باير يركز على حملات جلب العملاء والتحسين المبني على البيانات.",
    },
    nav: {
      about: "نبذة",
      services: "الخدمات",
      campaigns: "الحملات",
      cv: "السيرة",
      contact: "تواصل",
      language: "English",
    },
    common: {
      brand: "Abdullah",
      brandSuffix: ".",
      viewCampaigns: "استعرض نتائج الحملات",
      downloadCv: "تحميل السيرة الذاتية",
      contactMe: "تواصل معي",
      email: "البريد الإلكتروني",
      whatsapp: "واتساب",
      openPreview: "فتح المعاينة",
      close: "إغلاق",
      pageIntro: "Portfolio",
      caseStudy: "دراسة حالة مختصرة",
      business: "النشاط",
      goal: "الهدف",
      optimized: "ما تم تحسينه",
      result: "نتيجة ظاهرة",
      primaryCta: "ابدأ عبر واتساب",
      secondaryLinks: "روابط أخرى",
    },
    home: {
      heroTitle: "إعلانات مدفوعة مصممة لجلب عملاء ونتائج قابلة للقياس",
      heroLead:
        "أساعد الأنشطة التجارية على إطلاق وتحسين حملات ميتا وجوجل وتيك توك وإنستجرام بتركيز واضح على جودة العملاء المحتملين، تكلفة النتيجة، تتبع التحويلات، وتحسين الأداء خطوة بخطوة.",
      heroPoints: ["Meta Ads", "Google Ads", "Instagram Ads", "TikTok Ads"],
      aboutTitle: "قرارات إعلانية مبنية على البيانات لا الانطباعات",
      aboutBody:
        "أتعامل مع الحملة كنظام كامل: فهم السوق، بناء الهيكل، اختيار الرسالة، اختبار الجمهور والكرياتيف، قراءة الأرقام، ثم تحسين الإنفاق حتى يصبح كل قرار مرتبطًا بهدف تجاري واضح.",
      servicesTitle: "خدمات تسويق أداء واضحة وقابلة للقياس",
      servicesSubtitle:
        "من التخطيط إلى التحسين اليومي، أركز على بناء منظومة حملات تجلب فرصًا أفضل وتقلل الهدر في الميزانية.",
      brandsTitle: "خبرات عبر أسواق ومشروعات مختلفة",
      campaignsTitle: "نتائج حملات حقيقية بصيغة دراسات حالة",
      campaignsSubtitle:
        "كل بطاقة توضح المنصة، نوع النشاط، الهدف، ما تم تحسينه، والنتيجة الظاهرة في الصورة عندما تكون الأرقام واضحة.",
      campaignsCtaTitle: "هل تريد نتائج مشابهة؟",
      campaignsCtaBody: "تواصل معي لمراجعة حملتك الحالية وتحديد فرص تحسين عملية في الاستهداف، الرسالة، والتكلفة.",
      cvTitle: "سيرة مهنية مختصرة تعرض ما يهم فعلًا",
      cvBody:
        "ملخص واضح للمهارات والمنصات والخبرة العملية، مع ملف PDF جاهز للتحميل ومعلومات تواصل مباشرة.",
      contactTitle: "هل لديك حملة تحتاج إلى تحسين؟",
      contactBody:
        "أرسل تفاصيل نشاطك أو حملتك الحالية، وسأقترح لك خطوات عملية لتحسين النتائج.",
    },
    services: [
      {
        title: "حملات Meta Ads",
        body: "بناء وتحسين حملات فيسبوك وإنستجرام للرسائل، العملاء المحتملين، أو التحويلات مع اختبار الجمهور والكرياتيف.",
      },
      {
        title: "إعلانات Google Search",
        body: "حملات بحث تستهدف نية شراء أو طلب واضحة، مع تحسين الكلمات، الإعلانات، وتكلفة الزيارة المؤهلة.",
      },
      {
        title: "مسارات جلب العملاء",
        body: "ربط الإعلان برسالة أو صفحة أو واتساب بطريقة تقلل الاحتكاك وتزيد فرص المتابعة من فريق المبيعات.",
      },
      {
        title: "التتبع وتحليل الحملات",
        body: "مراجعة مؤشرات الأداء، تكلفة النتيجة، جودة الرسائل، ونقاط الهدر لتحويل البيانات إلى قرارات تنفيذية.",
      },
      {
        title: "تحسين التحويلات",
        body: "تحسين الرسائل والعروض ونقاط التواصل بعد النقر لرفع جودة العملاء وتقليل تكلفة الفرصة.",
      },
      {
        title: "إعادة الاستهداف واختبار الجمهور",
        body: "تقسيم الجماهير، اختبار النوايا، وبناء حملات إعادة استهداف تساعد على استرجاع العملاء الأكثر اهتمامًا.",
      },
    ],
    focus: ["Lead Generation", "Conversion Tracking", "Cost Per Result", "Audience Testing"],
    brands: [
      {
        name: "Flourite",
        market: { ar: "السعودية", en: "Saudi Arabia" },
        context: {
          ar: "حملات أداء لزيادة الطلب وتحسين جودة فرص التواصل.",
          en: "Performance campaigns focused on demand generation and lead quality.",
        },
      },
      {
        name: "Achievement Services Broker",
        market: { ar: "الإمارات", en: "UAE" },
        context: {
          ar: "إعلانات بحث لخدمات وساطة وإنجاز معاملات داخل سوق تنافسي.",
          en: "Search ads for brokerage and processing services in a competitive market.",
        },
      },
      {
        name: "Juventus Car Rental",
        market: { ar: "الإمارات", en: "UAE" },
        context: {
          ar: "حملات لجذب طلبات تأجير سيارات وتحسين جودة الاستفسارات.",
          en: "Campaigns to generate car-rental inquiries and improve lead quality.",
        },
      },
      {
        name: "Code Wave",
        market: { ar: "مصر", en: "Egypt" },
        context: {
          ar: "دعم تسويقي لمشروع خدمات رقمية مع تركيز على وضوح العرض.",
          en: "Marketing support for a digital-services project with clearer positioning.",
        },
      },
    ] satisfies Brand[],
    cv: {
      title: "السيرة الذاتية",
      profileTitle: "ملخص مهني",
      summary:
        "ميديا باير ومتخصص تسويق أداء أعمل على حملات جلب العملاء وتحسين تكلفة النتيجة عبر Meta وGoogle وTikTok، مع اهتمام خاص بجودة الرسائل، تتبع التحويلات، وتحويل البيانات اليومية إلى قرارات قابلة للتنفيذ.",
      coreSkillsTitle: "المهارات الأساسية",
      coreSkills: [
        "استراتيجية الحملات",
        "شراء الوسائط",
        "جلب العملاء المحتملين",
        "تحسين تكلفة النتيجة",
        "اختبار الجمهور والكرياتيف",
        "تحليل التقارير",
      ],
      platformsTitle: "منصات الإعلانات",
      platforms: ["Meta Ads Manager", "Google Ads", "TikTok Ads", "Instagram Ads"],
      highlightsTitle: "أبرز الخبرات",
      highlights: [
        "إطلاق وتحسين حملات رسائل وتحويلات وزيارات حسب هدف كل نشاط.",
        "مراجعة جودة العملاء المحتملين وليس عددهم فقط لضبط الاستهداف والرسائل.",
        "تحليل التكلفة اليومية واكتشاف فرص تقليل الهدر وتحسين العائد.",
        "اختبار زوايا إعلانية وجماهير متعددة للوصول إلى تكلفة أفضل لكل نتيجة.",
      ],
      toolsTitle: "الأدوات",
      tools: ["Google Analytics", "Looker Studio", "Meta Events Manager", "Google Tag Manager", "Sheets"],
      downloadTitle: "تحميل السيرة",
      downloadBody: "يمكنك تحميل نسخة PDF للاطلاع السريع أو مشاركتها مع فريقك.",
      contactTitle: "التواصل",
      contactBody: "أفضل طريقة للبدء هي إرسال تفاصيل النشاط أو الحملة الحالية عبر واتساب.",
    },
  },
  en: {
    meta: {
      homeTitle: "Abdullah Kmar | Performance Marketing Specialist",
      homeDescription:
        "Portfolio for Abdullah Kmar, a performance marketing specialist and media buyer for Meta, Google, Instagram, and TikTok campaigns focused on measurable lead generation.",
      campaignsTitle: "Campaign Results | Abdullah Kmar",
      campaignsDescription:
        "Short case studies and real performance screenshots from Google and Meta campaigns managed by Abdullah Kmar.",
      cvTitle: "CV | Abdullah Kmar",
      cvDescription:
        "Professional CV for Abdullah Kmar, a performance marketing specialist focused on lead generation and data-led campaign optimization.",
    },
    nav: {
      about: "About",
      services: "Services",
      campaigns: "Campaigns",
      cv: "CV",
      contact: "Contact",
      language: "العربية",
    },
    common: {
      brand: "Abdullah",
      brandSuffix: ".",
      viewCampaigns: "View campaign results",
      downloadCv: "Download CV",
      contactMe: "Contact me",
      email: "Email",
      whatsapp: "WhatsApp",
      openPreview: "Open preview",
      close: "Close",
      pageIntro: "Portfolio",
      caseStudy: "Mini case study",
      business: "Business",
      goal: "Goal",
      optimized: "What was optimized",
      result: "Visible result",
      primaryCta: "Start on WhatsApp",
      secondaryLinks: "Other links",
    },
    home: {
      heroTitle: "Performance campaigns built for measurable growth",
      heroLead:
        "I help businesses launch and optimize Meta, Google, TikTok, and Instagram campaigns with a clear focus on qualified leads, cost per result, conversion tracking, and steady performance improvement.",
      heroPoints: ["Meta Ads", "Google Ads", "Instagram Ads", "TikTok Ads"],
      aboutTitle: "Media decisions guided by data, not guesswork",
      aboutBody:
        "I treat each campaign as a full system: market context, account structure, message angles, audience and creative testing, data analysis, and budget optimization tied to a clear business goal.",
      servicesTitle: "Clear performance marketing services",
      servicesSubtitle:
        "From planning to daily optimization, I focus on campaign systems that create better opportunities and reduce wasted spend.",
      brandsTitle: "Experience across markets and projects",
      campaignsTitle: "Real campaign results as short case studies",
      campaignsSubtitle:
        "Each card explains the platform, business type, goal, what was optimized, and the visible result when the screenshot clearly shows numbers.",
      campaignsCtaTitle: "Want similar results?",
      campaignsCtaBody: "Contact me to review your current campaign and identify practical improvements in targeting, messaging, and cost.",
      cvTitle: "A concise CV focused on what matters",
      cvBody:
        "A clear summary of skills, ad platforms, practical experience, and direct contact details, with a downloadable PDF version.",
      contactTitle: "Have a campaign that needs improvement?",
      contactBody:
        "Share your business or campaign details, and I’ll suggest practical steps to improve performance.",
    },
    services: [
      {
        title: "Meta Ads Campaigns",
        body: "Facebook and Instagram campaigns for messages, leads, or conversions with audience and creative testing.",
      },
      {
        title: "Google Search Ads",
        body: "Search campaigns built around clear buying or inquiry intent, with keyword, ad, and qualified-visit cost optimization.",
      },
      {
        title: "Lead Generation Funnels",
        body: "Connecting ads to WhatsApp, landing pages, or message flows that reduce friction and improve follow-up quality.",
      },
      {
        title: "Campaign Tracking & Analysis",
        body: "Reviewing cost metrics, result quality, message quality, and wasted spend to turn data into decisions.",
      },
      {
        title: "Conversion Optimization",
        body: "Improving messages, offers, and post-click touchpoints to increase lead quality and reduce opportunity cost.",
      },
      {
        title: "Retargeting & Audience Testing",
        body: "Segmenting audiences, testing intent, and building retargeting campaigns for users most likely to convert.",
      },
    ],
    focus: ["Lead Generation", "Conversion Tracking", "Cost Per Result", "Audience Testing"],
    brands: [
      {
        name: "Flourite",
        market: { ar: "السعودية", en: "Saudi Arabia" },
        context: {
          ar: "حملات أداء لزيادة الطلب وتحسين جودة فرص التواصل.",
          en: "Performance campaigns focused on demand generation and lead quality.",
        },
      },
      {
        name: "Achievement Services Broker",
        market: { ar: "الإمارات", en: "UAE" },
        context: {
          ar: "إعلانات بحث لخدمات وساطة وإنجاز معاملات داخل سوق تنافسي.",
          en: "Search ads for brokerage and processing services in a competitive market.",
        },
      },
      {
        name: "Juventus Car Rental",
        market: { ar: "الإمارات", en: "UAE" },
        context: {
          ar: "حملات لجذب طلبات تأجير سيارات وتحسين جودة الاستفسارات.",
          en: "Campaigns to generate car-rental inquiries and improve lead quality.",
        },
      },
      {
        name: "Code Wave",
        market: { ar: "مصر", en: "Egypt" },
        context: {
          ar: "دعم تسويقي لمشروع خدمات رقمية مع تركيز على وضوح العرض.",
          en: "Marketing support for a digital-services project with clearer positioning.",
        },
      },
    ] satisfies Brand[],
    cv: {
      title: "CV",
      profileTitle: "Profile Summary",
      summary:
        "Performance marketing specialist and media buyer working across lead generation and cost-per-result optimization on Meta, Google, and TikTok, with a strong focus on message quality, conversion tracking, and turning daily data into practical decisions.",
      coreSkillsTitle: "Core Skills",
      coreSkills: [
        "Campaign strategy",
        "Media buying",
        "Lead generation",
        "Cost-per-result optimization",
        "Audience and creative testing",
        "Performance reporting",
      ],
      platformsTitle: "Advertising Platforms",
      platforms: ["Meta Ads Manager", "Google Ads", "TikTok Ads", "Instagram Ads"],
      highlightsTitle: "Experience Highlights",
      highlights: [
        "Launched and optimized messaging, conversion, and traffic campaigns around each business goal.",
        "Reviewed lead quality, not just lead volume, to improve targeting and messaging.",
        "Analyzed daily cost trends to identify wasted spend and performance improvement opportunities.",
        "Tested ad angles and audience segments to reach a better cost per result.",
      ],
      toolsTitle: "Tools",
      tools: ["Google Analytics", "Looker Studio", "Meta Events Manager", "Google Tag Manager", "Sheets"],
      downloadTitle: "Download CV",
      downloadBody: "Download the PDF version for a quick review or to share with your team.",
      contactTitle: "Contact",
      contactBody: "The fastest way to start is to send your business or current campaign details on WhatsApp.",
    },
  },
} as const;

export function getContent(locale: Locale) {
  return dictionary[locale];
}

export const contact = {
  email: "abdallaamoe@gmail.com",
  phone: "01037158561",
  whatsappHref: "https://wa.me/201037158561",
  facebook: "https://facebook.com/abdullahkmar",
  instagram: "https://instagram.com/abdullahkmar",
  linkedin: "https://linkedin.com/in/abdullahkmar",
  linktree: "https://linktr.ee/abdullah_kmar",
  cvHref: "/assets/files/abdullah-mohammed-dm-cv.pdf",
};
