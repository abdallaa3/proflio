import type { Locale } from "./i18n";

export type Campaign = {
  slug: string;
  image: string;
  width: number;
  height: number;
  platform: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  details: Record<Locale, string[]>;
};

export const campaigns: Campaign[] = [
  {
    slug: "govents-google-ads",
    image: "/assets/images/campaign-govents-google-ads.jpeg",
    width: 1529,
    height: 617,
    platform: "Google Ads",
    title: {
      ar: "تحسين حملات بحث لخدمات الفعاليات",
      en: "Search campaign optimization for events services",
    },
    description: {
      ar: "لقطة من لوحة أداء توضح متابعة دقيقة للنقرات والتكلفة والتحسين المستمر للحملة.",
      en: "A performance dashboard view showing close tracking of clicks, cost, and ongoing campaign optimization.",
    },
    details: {
      ar: ["هيكلة حملات بحث", "متابعة تكلفة النتيجة", "تحسين الكلمات والإعلانات"],
      en: ["Search campaign structure", "Cost-per-result tracking", "Keyword and ad optimization"],
    },
  },
  {
    slug: "achievement-google-ads",
    image: "/assets/images/campaign-achievement-google-ads.jpeg",
    width: 1600,
    height: 506,
    platform: "Google Ads",
    title: {
      ar: "حملة لخدمات الوساطة وإنجاز المعاملات",
      en: "Campaign for brokerage and processing services",
    },
    description: {
      ar: "نتائج حملة لخدمة موجهة لسوق الإمارات مع تركيز على جودة الزيارات وفرص التحويل.",
      en: "Campaign results for a UAE-focused service with emphasis on qualified traffic and conversion opportunities.",
    },
    details: {
      ar: ["سوق الإمارات", "زيارات مؤهلة", "تحسين التحويل"],
      en: ["UAE market", "Qualified visits", "Conversion optimization"],
    },
  },
  {
    slug: "meta-messaging-results",
    image: "/assets/images/campaign-meta-messaging-results.jpeg",
    width: 719,
    height: 1065,
    platform: "Meta Ads",
    title: {
      ar: "نتائج رسائل على فيسبوك وإنستجرام",
      en: "Facebook and Instagram messaging results",
    },
    description: {
      ar: "حملة رسائل مبنية على اختبار الجمهور والكرياتيف للوصول إلى محادثات أكثر جودة.",
      en: "A messaging campaign built around audience and creative testing to generate higher-quality conversations.",
    },
    details: {
      ar: ["حملات رسائل", "اختبار جماهير", "تحسين الكرياتيف"],
      en: ["Messaging campaigns", "Audience testing", "Creative optimization"],
    },
  },
  {
    slug: "meta-tailored-messages",
    image: "/assets/images/campaign-meta-tailored-messages.jpeg",
    width: 705,
    height: 1064,
    platform: "Meta Ads",
    title: {
      ar: "حملة رسائل مخصصة حسب نية العميل",
      en: "Tailored messages campaign by customer intent",
    },
    description: {
      ar: "استخدام رسائل مخصصة ومسارات تواصل واضحة لتحويل الاهتمام إلى محادثات قابلة للمتابعة.",
      en: "Custom message flows and clear follow-up paths designed to turn interest into actionable conversations.",
    },
    details: {
      ar: ["رسائل مخصصة", "مسار متابعة", "تحسين تكلفة المحادثة"],
      en: ["Tailored messages", "Follow-up flow", "Conversation cost optimization"],
    },
  },
];

export const dictionary = {
  ar: {
    meta: {
      homeTitle: "عبدالله قمر | مختص تسويق أداء وميديا باير",
      homeDescription:
        "موقع عبدالله قمر الشخصي: مختص تسويق أداء وميديا باير لإعلانات ميتا وجوجل وإنستجرام وتيك توك.",
      campaignsTitle: "نتائج الحملات | عبدالله قمر",
      campaignsDescription:
        "معرض منظم لنتائج الحملات الإعلانية ولوحات الأداء الخاصة بعبدالله قمر.",
      cvTitle: "السيرة الذاتية | عبدالله قمر",
      cvDescription:
        "السيرة الذاتية المهنية لعبدالله قمر، مختص تسويق أداء وميديا باير.",
    },
    nav: {
      about: "نبذة",
      services: "الخدمات",
      campaigns: "الحملات",
      cv: "السيرة الذاتية",
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
    },
    home: {
      heroTitle: "أحوّل الميزانيات الإعلانية إلى نمو قابل للقياس.",
      heroLead:
        "أنا عبدالله قمر، مختص تسويق أداء وميديا باير أعمل على بناء وتحسين حملات Meta وGoogle وTikTok للوصول إلى عملاء محتملين أفضل وتكلفة أكثر كفاءة.",
      heroPoints: ["Meta Ads", "Google Ads", "Instagram Ads", "TikTok Ads"],
      aboutTitle: "خبرة عملية خلف كل قرار إعلاني",
      aboutBody:
        "أركز على الصورة الكاملة: فهم السوق، بناء هيكل الحملة، اختبار الرسائل والكرياتيف، قراءة البيانات، ثم تحسين الإنفاق حتى يصبح كل قرار مبنيًا على رقم واضح.",
      servicesTitle: "خدمات تسويق أداء مصممة للنمو",
      servicesSubtitle:
        "من التخطيط إلى التحسين اليومي، الهدف هو بناء منظومة حملات قابلة للتوسع وليست مجرد إعلانات منفصلة.",
      brandsTitle: "علامات ومشروعات عملت عليها",
      campaignsTitle: "نتائج حملات حقيقية في عرض نظيف",
      campaignsSubtitle:
        "الصور محفوظة بنسبة أبعادها الأصلية حتى تظهر لوحات النتائج بوضوح بدون تمدد أو قص عشوائي.",
      cvTitle: "سيرة ذاتية مختصرة وسهلة الوصول",
      cvBody:
        "صفحة السيرة تعرض الخبرة، الأدوات، المهارات، ومعلومات التواصل، مع زر لتحميل ملف السيرة الأصلي.",
      contactTitle: "جاهز لتحسين نتائج حملاتك؟",
      contactBody:
        "أرسل تفاصيل نشاطك أو هدف الحملة، وسأعود لك بخطوات عملية لتحسين الأداء.",
    },
    services: [
      {
        title: "إعلانات Meta",
        body: "بناء حملات فيسبوك وإنستجرام، اختبار جماهير وكرياتيف، وتحسين تكلفة الرسائل أو التحويلات.",
      },
      {
        title: "إعلانات Google",
        body: "حملات بحث وعرض وPerformance Max تركز على الزيارات عالية النية وفرص التحويل.",
      },
      {
        title: "تحليل وتحسين الأداء",
        body: "متابعة مؤشرات التكلفة، جودة العملاء المحتملين، ونقاط الهدر لتحويل البيانات إلى قرارات.",
      },
    ],
    focus: ["Lead Generation", "Conversion Optimization", "Maximize ROI", "Data Analysis"],
    brands: [
      ["Flourite", "السعودية"],
      ["Achievement Services Broker", "الإمارات"],
      ["Juventus Car Rental", "الإمارات"],
      ["Code Wave", "مصر"],
    ],
    cv: {
      title: "السيرة الذاتية",
      summary:
        "مختص تسويق أداء وميديا باير يركز على حملات جلب العملاء المحتملين، تحسين تكلفة النتيجة، وبناء قرارات إعلانية مبنية على البيانات.",
      experienceTitle: "الخبرة",
      experience: [
        {
          role: "Performance Marketing Specialist & Media Buyer",
          company: "مشروعات عملاء متعددة",
          period: "2024 - الآن",
          bullets: [
            "إدارة وتحسين حملات Meta وGoogle وTikTok حسب هدف النشاط.",
            "تحليل النتائج اليومية واكتشاف فرص تقليل الهدر ورفع جودة العملاء المحتملين.",
            "اختبار الرسائل والكرياتيف والجماهير للوصول إلى تكلفة أفضل لكل نتيجة.",
          ],
        },
      ],
      skillsTitle: "المهارات",
      skills: [
        "Campaign Strategy",
        "Media Buying",
        "Lead Generation",
        "Conversion Tracking",
        "Creative Testing",
        "Reporting",
      ],
      toolsTitle: "الأدوات والمنصات",
      tools: ["Meta Ads Manager", "Google Ads", "TikTok Ads", "Google Analytics", "Looker Studio"],
      educationTitle: "التعليم",
      education: "خلفية عملية في التسويق الرقمي وتحليل أداء الحملات.",
      contactTitle: "معلومات التواصل",
    },
  },
  en: {
    meta: {
      homeTitle: "Abdullah Kmar | Performance Marketing Specialist",
      homeDescription:
        "Professional portfolio for Abdullah Kmar, performance marketing specialist and media buyer for Meta, Google, Instagram, and TikTok ads.",
      campaignsTitle: "Campaign Results | Abdullah Kmar",
      campaignsDescription:
        "A curated gallery of campaign result screenshots and performance marketing case studies by Abdullah Kmar.",
      cvTitle: "CV | Abdullah Kmar",
      cvDescription:
        "Professional CV for Abdullah Kmar, performance marketing specialist and media buyer.",
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
    },
    home: {
      heroTitle: "I turn ad budgets into measurable growth.",
      heroLead:
        "I am Abdullah Kmar, a performance marketing specialist and media buyer focused on building and optimizing Meta, Google, and TikTok campaigns for better leads and more efficient acquisition costs.",
      heroPoints: ["Meta Ads", "Google Ads", "Instagram Ads", "TikTok Ads"],
      aboutTitle: "Practical expertise behind every media decision",
      aboutBody:
        "I focus on the full picture: market context, campaign structure, message and creative testing, data reading, and spend optimization so every decision is tied to a clear metric.",
      servicesTitle: "Performance marketing services built for growth",
      servicesSubtitle:
        "From planning to daily optimization, the goal is a scalable campaign system rather than isolated ads.",
      brandsTitle: "Brands and projects I worked with",
      campaignsTitle: "Real campaign results, presented clearly",
      campaignsSubtitle:
        "Every result image keeps its original aspect ratio so dashboards stay readable with no stretching or random cropping.",
      cvTitle: "A concise CV with quick access",
      cvBody:
        "The CV page highlights experience, tools, skills, and contact information, with a direct download button for the original file.",
      contactTitle: "Ready to improve your campaign results?",
      contactBody:
        "Send your business context or campaign goal, and I will respond with practical next steps for performance improvement.",
    },
    services: [
      {
        title: "Meta Ads",
        body: "Facebook and Instagram campaign builds, audience and creative testing, and cost-per-message or conversion optimization.",
      },
      {
        title: "Google Ads",
        body: "Search, Display, and Performance Max campaigns focused on high-intent traffic and conversion opportunities.",
      },
      {
        title: "Performance analysis",
        body: "Tracking cost metrics, lead quality, and wasted spend to turn campaign data into decisions.",
      },
    ],
    focus: ["Lead Generation", "Conversion Optimization", "Maximize ROI", "Data Analysis"],
    brands: [
      ["Flourite", "Saudi Arabia"],
      ["Achievement Services Broker", "UAE"],
      ["Juventus Car Rental", "UAE"],
      ["Code Wave", "Egypt"],
    ],
    cv: {
      title: "CV",
      summary:
        "Performance marketing specialist and media buyer focused on lead generation campaigns, cost-per-result optimization, and data-driven media decisions.",
      experienceTitle: "Experience",
      experience: [
        {
          role: "Performance Marketing Specialist & Media Buyer",
          company: "Multiple client projects",
          period: "2024 - Present",
          bullets: [
            "Managed and optimized Meta, Google, and TikTok campaigns based on business goals.",
            "Analyzed daily performance to identify wasted spend and improve lead quality.",
            "Tested messaging, creatives, and audiences to improve cost per result.",
          ],
        },
      ],
      skillsTitle: "Skills",
      skills: [
        "Campaign Strategy",
        "Media Buying",
        "Lead Generation",
        "Conversion Tracking",
        "Creative Testing",
        "Reporting",
      ],
      toolsTitle: "Tools and platforms",
      tools: ["Meta Ads Manager", "Google Ads", "TikTok Ads", "Google Analytics", "Looker Studio"],
      educationTitle: "Education",
      education: "Practical background in digital marketing and campaign performance analysis.",
      contactTitle: "Contact information",
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
