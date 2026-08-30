/* ============================================================
   THANGAMAGAL — Language system (English / Tamil)
   Persists selection in localStorage as 'tgm_lang'
   ============================================================ */

const translations = {
  en: {
    metaTitle: "Thangamagal Gold Loan | Up to 90% LTV Gold Loan in Trichy",
    metaDescription: "Thangamagal Gold Loan by Greenvill Associates at Chithra Complex, Chatram Bus Stand, Tiruchirappalli. Get up to 90% LTV loan against gold jewellery with instant cash and safe locker custody.",
    skipLink: "Skip to main content",
    navHome: "Home",
    navAbout: "About",
    navGoldLoan: "Gold Loan",
    navWhyUs: "Why Us",
    navHow: "Process",
    navFaq: "FAQ",
    navContact: "Contact",
    langCurrent: "English",
    langOther: "தமிழ்",

    heroEyebrow: "Thangamagal Gold Loan",
    heroName: "THANGAMAGAL",
    brandName: "Thangamagal",
    heroSub: "Gold Loan",
    heroTagline: "TRUST \u2022 SECURITY \u2022 PROSPERITY",
    heroLtvBadge: "<span class=\"pulse-dot\"></span><span>Get Up to <strong>90% Loan Value (LTV)</strong> on Your Gold</span>",
    heroLine: "Reliable gold loan assistance in Trichy \u2014 get up to 90% LTV on your gold jewellery with instant disbursement, bank-grade secure custody, and transparent evaluation.",
    ctaContact: "Get in Touch",
    ctaVisit: "Visit Us",

    trustEyebrow: "Why customers trust us",
    trust1Title: "Trusted Service",
    trust1Desc: "A customer-first approach built on honesty and transparency.",
    trust2Title: "Quick Disbursement",
    trust2Desc: "A simple process designed to save you time.",
    trust3Title: "Secure Your Gold",
    trust3Desc: "Your jewellery is handled with care and professional security.",
    trust4Title: "Up to 90% LTV Loan",
    trust4Desc: "Avail maximum loan up to 90% of your gold's total market value.",

    aboutEyebrow: "About Thangamagal",
    aboutHeading: "A gold-loan service built on trust",
    aboutP1: "Thangamagal Gold Loan is a premier financial product by Greenvill Associates, located at Chithra Complex, Chatram Bus Stand, Tiruchirappalli. We provide maximum loan value up to 90% LTV on your gold ornaments with complete transparency and bank-grade security.",
    aboutP2: "Every customer who walks in is treated with respect and clarity \u2014 from evaluation to disbursement. Our team is on hand to guide you through the process and answer any questions along the way.",
    aboutList1: "Transparent, easy-to-understand process",
    aboutList2: "Secure handling & insured vault storage",
    aboutList3: "Maximum loan value up to 90% LTV",
    aboutList4: "Conveniently located near Chatram Bus Stand",

    servicesEyebrow: "Our Services",
    servicesHeading: "Gold Loan Services",
    servicesSub: "Straightforward gold-backed finance assistance with up to 90% LTV, from first enquiry to instant disbursement.",
    service1Title: "Gold Loan Against Jewellery (Up to 90% LTV)",
    service1Desc: "Avail up to 90% Loan-to-Value against your gold ornaments with instant spot valuation and flexible tenure.",
    service2Title: "Quick Loan Assistance",
    service2Desc: "A simple enquiry and assistance process with fast cash or direct bank transfer within minutes.",
    service3Title: "Secure Gold Handling",
    service3Desc: "Pledged jewellery is sealed, insured, and stored in high-security bank-grade vaults.",
    service4Title: "Customer Support",
    service4Desc: "Guidance on the process, required documents, and flexible repayment options.",

    whyEyebrow: "Why Choose Us",
    whyHeading: "Built on Trust & Value",
    why1Title: "Up to 90% Loan Value (LTV)",
    why1Desc: "Receive maximum financing against the actual gold weight without arbitrary deductions.",
    why2Title: "Convenient Location",
    why2Desc: "Located in central Trichy near Chatram Bus Stand, easily accessible from across the city.",
    why3Title: "Transparent Evaluation",
    why3Desc: "Open valuation in your presence with no hidden deductions or surprises.",
    why4Title: "Insured Vault Security",
    why4Desc: "Your gold is held with full insurance coverage in high-security, fire-proof locker vaults.",
    why5Title: "Professional Assistance",
    why5Desc: "An experienced team that guides you step-by-step with clear answers.",
    why6Title: "Customer-First Focus",
    why6Desc: "Every customer is treated with patience, utmost privacy, and genuine care.",

    howEyebrow: "The Process",
    howHeading: "A Simple 4-Step Process",
    how1Title: "Visit Our Branch",
    how1Desc: "Bring your gold jewellery to our branch at Chithra Complex, Chatram Bus Stand, Trichy.",
    how2Title: "Gold Evaluation",
    how2Desc: "Our specialists evaluate the weight and purity of your gold openly in your presence.",
    how3Title: "Up to 90% LTV Offer",
    how3Desc: "Receive the maximum loan calculation based on prevailing market rates.",
    how4Title: "Instant Disbursement",
    how4Desc: "Complete minimal verification and receive your cash or bank transfer within 10 minutes.",

    navTakeover: "Loan Takeover",

    // Loan Takeover / Re-pledge
    takeoverEyebrow: "Gold Loan Takeover & Transfer",
    takeoverHeading: "Release Pledged Gold & Get Extra Cash (Up to 90% LTV)",
    takeoverDesc: "Pledged your gold at other banks, NBFCs, or pawn shops with low valuation or high interest? We clear your existing dues, safely release your ornaments, and offer you maximum value up to 90% LTV with instant extra cash in hand.",
    takeoverStep1Title: "1. Bring Your Pawn Ticket",
    takeoverStep1Desc: "Show us your existing gold loan receipt or pledge ticket.",
    takeoverStep2Title: "2. We Settle & Release",
    takeoverStep2Desc: "We arrange funds to settle the loan and safely retrieve your ornaments.",
    takeoverStep3Title: "3. Get 90% LTV & Extra Cash",
    takeoverStep3Desc: "We re-evaluate at up to 90% LTV and hand over the surplus cash in 10 mins.",
    takeoverCta: "Apply for Loan Takeover",
    takeoverBadgeSub: "Maximum Valuation",
    takeoverBadgeVal: "90%",
    takeoverBadgeLbl: "LTV Loan Transfer",
    takeoverBenefit1: "Zero Hassle Gold Release",
    takeoverBenefit2: "Spot Surplus Cash in Hand",
    takeoverBenefit3: "Lower Interest Rate Schemes",

    // Location & Branch Timings
    locEyebrow: "Visit Us",
    locHeading: "Find Thangamagal",
    locName: "Thangamagal Gold Loan",
    locAddrLine1: "Chithra Complex, Chatram Bus Stand,",
    locAddrLine2: "Tiruchirappalli, Tamil Nadu",
    ctaDirections: "Get Directions",
    openInGoogleMaps: "View on Google Maps",
    branchTimingsTitle: "Branch Working Hours",
    daysWeek: "Monday – Saturday",
    hoursWeek: "9:30 AM – 7:30 PM",
    daysSun: "Sunday",
    hoursSun: "10:00 AM – 2:00 PM (By Appt)",
    statusOpenNow: "Open Today: 9:30 AM – 7:30 PM",
    statusClosedNow: "Closed Now • Opens at 9:30 AM",
    statusOpenSunday: "Open Today (Sunday): 10:00 AM – 2:00 PM",

    contactEyebrow: "Contact Us",
    contactHeading: "Get in Touch",
    contactSub: "Reach out to us and our team will be glad to assist you.",
    callNow: "Call Now",
    callDesc: "Speak directly with our branch team",
    getDirections: "Get Directions",
    getDirectionsDesc: "Find us near Chatram Bus Stand",
    formNote: "Fill in your details below and our team will get in touch with you promptly.",
    formName: "Your Name",
    formPhone: "Phone Number",
    formMessage: "Message",
    sendEnquiry: "Send Enquiry",

    faqEyebrow: "FAQ",
    faqHeading: "Frequently Asked Questions",
    faqDisambigQ: "Is Thangamagal a jewellery purchase savings scheme or an instant cash loan service?",
    faqDisambigA: "Thangamagal Gold Loan is an instant cash gold loan and takeover service located at Chithra Complex, Chatram Bus Stand, Tiruchirappalli. We provide spot cash loans up to 90% LTV against pledged gold jewellery and transfer/settlement of existing loans. We are an independent financial product of Greenvill Associates, distinct from 11-month jewellery purchase or chit schemes.",
    faqLtvQ: "How much loan can I get for my gold jewellery? (What is the LTV?)",
    faqLtvA: "You can receive up to 90% of your gold jewellery's market value (90% LTV). The amount is calculated instantly based on the net gold weight, karat purity, and prevailing daily market rate.",
    faqTakeoverQ: "Can I transfer / release my gold loan from another bank or pawn shop to Thangamagal?",
    faqTakeoverA: "Yes, absolutely! We provide complete Gold Loan Takeover assistance. We arrange funds to clear your outstanding dues at your current bank or financier, safely release your jewellery, re-evaluate it at up to 90% LTV, and pay you the surplus cash balance immediately.",
    faqTimingsQ: "What are your branch working hours and location?",
    faqTimingsA: "We are open Monday to Saturday from 9:30 AM to 7:30 PM, and on Sundays from 10:00 AM to 2:00 PM (by prior appointment). We are located at Chithra Complex, Chatram Bus Stand, Tiruchirappalli.",
    faq1Q: "What is a gold loan?",
    faq1A: "A gold loan is finance obtained against gold jewellery pledged as security. The jewellery is evaluated and held safely in high-security vaults until the loan is repaid.",
    faq2Q: "What documents are required?",
    faq2A: "Basic government-issued photo ID and address proof (such as Aadhaar Card, Voter ID, PAN, or Driving License) are typically required. Our team will guide you on the exact requirements.",
    faq3Q: "How is gold valued?",
    faq3A: "Our team evaluates gold jewellery carefully and transparently right in front of you at the branch.",
    faq4Q: "How does repayment work?",
    faq4A: "Repayment terms, flexible tenure schedules, and interest rates are explained clearly by our team before disbursement.",
    faq5Q: "Where is Thangamagal located?",
    faq5A: "We are located at Chithra Complex, Chatram Bus Stand, Tiruchirappalli, Tamil Nadu.",

    footerLinksHeading: "Quick Links",
    footerLegalHeading: "Legal",
    footerLangHeading: "Language",
    privacyLink: "Privacy Policy",
    termsLink: "Terms & Conditions",
    poweredBy: "A Product of",
    poweredByBrand: "Greenvill",
    copyright: "\u00A9 2026 Thangamagal Gold Loan. All Rights Reserved.",
    legalDisclaimer: "<strong class=\"text-stone-300\">Statutory &amp; Regulatory Note:</strong> Gold Loan eligibility, interest rates, and Loan-to-Value (LTV up to 90%) are subject to purity verification, net weight evaluation, and prevailing regulatory guidelines. Pledged ornaments are safely held in insured bank-grade vaults. All loans are disbursed following fair practice codes and clear terms.",

    legalBack: "Back to Home",

    privacyTitle: "Privacy Policy | Thangamagal Gold Loan",
    privacyEyebrow: "Legal",
    privacyHeading: "Privacy Policy",
    privacyUpdated: "Last updated: August 2026",
    privacyBody: "\
      <h2>Information We Collect</h2>\
      <p>This website provides information about our gold loan services. Any information submitted via our contact enquiry form is used solely to respond to your request.</p>\
      <h2>Contact &amp; Enquiry Information</h2>\
      <p>If you contact us directly by phone, enquiry form, or in person at our branch, any information you choose to share (such as your name or phone number) is used solely to respond to your enquiry and assist you with your gold loan needs.</p>\
      <h2>Cookies &amp; Local Storage</h2>\
      <p>This website uses your browser's local storage only to remember your selected language (English or Tamil) so it persists as you navigate between pages. No tracking cookies are used.</p>\
      <h2>Analytics</h2>\
      <p>This website does not currently use any analytics or tracking scripts. If analytics tools are added in the future, this policy will be updated accordingly.</p>\
      <h2>Third-Party Services</h2>\
      <p>The location section of this website embeds a Google Maps view to help you find our branch. Google's own privacy policy governs any data handled by that embedded map.</p>\
      <h2>Data Usage</h2>\
      <p>We do not sell, rent, or share any information you share with us with third parties for marketing purposes.</p>\
      <h2>Data Retention</h2>\
      <p>Since this website does not collect data through automated forms, there is no automated data retention to describe. Any information shared directly with our branch is retained only as needed to assist you.</p>\
      <h2>Security</h2>\
      <p>We take reasonable steps to keep information you share with us secure and handled professionally.</p>\
      <h2>Your Rights</h2>\
      <p>You may contact us at any time to ask what information, if any, we hold about you, or to request that it be corrected or removed.</p>\
      <h2>Contact Information</h2>\
      <p>For any privacy-related questions, please reach out to us using the contact details on our Contact page.</p>\
      <h2>Policy Updates</h2>\
      <p>This policy may be updated from time to time as the website evolves. The date at the top of this page reflects the most recent update.</p>",

    termsTitle: "Terms & Conditions & Fair Lending Code | Thangamagal Gold Loan",
    termsEyebrow: "Legal & Regulatory Compliance",
    termsHeading: "Terms, Conditions & Fair Practices Code",
    termsUpdated: "Last updated: August 2026",
    termsBody: "\
      <div class=\"policy-intro-box\">\
        <p><strong>Thangamagal Gold Loan</strong> (a premier financial product powered by <strong>Greenvill Associates</strong>) operates in strict compliance with the <strong>Reserve Bank of India (RBI) Fair Lending Guidelines</strong>, the <strong>Tamil Nadu Pawn Brokers Act (1943)</strong>, the <strong>Income Tax Act (1961)</strong>, and applicable Consumer Protection regulations. All loans, gold valuations, and collateral custody transactions are governed by the binding terms set forth below.</p>\
      </div>\
      <h2>1. Fair Practices Code (FPC) &amp; Transparent Lending</h2>\
      <p>We are committed to fair, equitable, and transparent lending practices for every customer:</p>\
      <ul>\
        <li><strong>Non-Discrimination:</strong> Financial assistance is offered without discrimination based on gender, caste, religion, or community.</li>\
        <li><strong>Official Pawn Ticket &amp; Sanction Letter:</strong> Every borrower is issued an official Pawn Ticket detailing the gross weight, net gold weight, karat purity, sanctioned loan amount, agreed interest rate, tenure, and repayment schedule in clear language (English &amp; Tamil).</li>\
        <li><strong>Zero Hidden Charges:</strong> All applicable interest rates, appraiser fees, processing charges, and penal rates are disclosed upfront prior to gold pledge and disbursement. There are no concealed fees.</li>\
        <li><strong>Appraisal in Customer's Presence:</strong> Purity verification, stone deduction, and weight measurement are conducted openly in front of the customer using calibrated, certified electronic scales.</li>\
      </ul>\
      <h2>2. Loan-to-Value (LTV up to 90%) &amp; Gold Valuation Policy</h2>\
      <p>The maximum Loan-to-Value (LTV) offered is up to <strong>90% of the net market value</strong> of the pledged gold ornaments:</p>\
      <ul>\
        <li><strong>Net Weight Calculation:</strong> Valuation is calculated strictly on the net gold content after deducting non-precious stones, wax, lacquer, enamel, and foreign metals.</li>\
        <li><strong>Market Rate Benchmarking:</strong> Gold prices are benchmarked daily to prevailing spot market rates for 22K and 18K purity.</li>\
        <li><strong>Non-Destructive Testing:</strong> Gold testing is performed using touchstone and non-destructive electronic methods. No acid or destructive drilling is performed without customer consent.</li>\
      </ul>\
      <h2>3. Safe Locker Custody, Bank-Grade Vaults &amp; 100% Insurance Guarantee</h2>\
      <p>Protecting your treasured jewellery is our highest priority:</p>\
      <ul>\
        <li><strong>Tamper-Proof Sealing:</strong> Pledged jewellery is weighed, tagged, and sealed in tamper-evident security pouches in the borrower's presence.</li>\
        <li><strong>Bank-Grade Vault Storage:</strong> All ornaments are stored in high-security, fire-resistant, reinforced steel locker vaults with 24/7 CCTV surveillance and dual-custody access controls.</li>\
        <li><strong>Full Insurance Protection:</strong> 100% of the pledged gold stock is insured under a Comprehensive Jewellers Block Insurance Policy against burglary, fire, robbery, transit hazards, and external perils.</li>\
        <li><strong>Collateral Damage / Loss Compensation:</strong> In the unlikely event of loss or damage while in custody, the borrower is entitled to full replacement value or equivalent compensation based on the prevailing gold market rate of the net weight pledged.</li>\
      </ul>\
      <h2>4. Loan Disbursement &amp; Income Tax Compliance (Section 269SS &amp; 269T)</h2>\
      <p>In accordance with statutory tax laws (Income Tax Act, 1961):</p>\
      <ul>\
        <li><strong>Cash Disbursement Limit (Section 269SS):</strong> Cash loan disbursements are restricted to a maximum of <strong>₹20,000 per borrower/transaction</strong>.</li>\
        <li><strong>Bank Transfer Mandate:</strong> Any loan amount exceeding ₹20,000 is disbursed strictly via electronic banking channels (<strong>NEFT / RTGS / IMPS / UPI / Account Payee Cheque</strong>) directly to the borrower's verified bank account.</li>\
        <li><strong>Repayment (Section 269T):</strong> Loan repayments exceeding ₹20,000 must similarly be completed via bank transfer or banking instruments.</li>\
      </ul>\
      <h2>5. Repayment, Pre-Closure &amp; Same-Day Gold Release</h2>\
      <ul>\
        <li><strong>Flexible Schemes:</strong> Borrowers can choose flexible repayment plans, including monthly interest servicing, bullet repayments at term maturity, or regular principal pay-downs.</li>\
        <li><strong>Zero Foreclosure Penalty:</strong> Borrowers can close and settle their gold loan early at any time without any pre-closure or lock-in penalties.</li>\
        <li><strong>Same-Day Handover:</strong> Upon full clearance of the principal loan amount and accrued interest, the sealed jewellery pouch is retrieved, verified against the pawn ticket, and returned immediately on the same business day to the registered borrower.</li>\
      </ul>\
      <h2>6. Collateral Default, Notice Period &amp; Transparent Public Auction Policy</h2>\
      <p>If a borrower defaults on interest or principal repayments beyond the contracted grace period, the following statutory procedure is strictly adhered to:</p>\
      <ul>\
        <li><strong>Statutory 30-Day Written Notice:</strong> Before initiating any recovery auction, a mandatory written notice is dispatched to the borrower's registered postal address via Registered Post / Speed Post, granting a minimum of 30 days to regularize or redeem the loan.</li>\
        <li><strong>Telephonic &amp; SMS Reminders:</strong> Courteous telephonic and electronic reminders are provided. No coercive, harassing, or unethical recovery practices are permitted.</li>\
        <li><strong>Public Newspaper Notice:</strong> Notice of public auction is published in local Tamil and English daily newspapers specifying the date, time, and auction venue.</li>\
        <li><strong>Refund of Surplus Auction Proceeds:</strong> Following a public auction, the sale proceeds are first adjusted against the principal, interest, and statutory auction expenses. <strong>Any surplus / excess funds remaining are strictly and promptly refunded to the borrower</strong>.</li>\
      </ul>\
      <h2>7. KYC Verification &amp; Gold Ownership Self-Declaration</h2>\
      <ul>\
        <li><strong>Identity &amp; Address Verification (KYC):</strong> Valid government-issued photo ID (Aadhaar Card, Voter ID, PAN Card, Passport, or Driving License) is mandatory for every transaction.</li>\
        <li><strong>Lawful Ownership Self-Declaration:</strong> The borrower must sign a statutory declaration affirming lawful ownership and legal possession of the pledged jewellery. We do not accept or handle stolen, disputed, or counterfeit items.</li>\
      </ul>\
      <h2>8. Grievance Redressal Mechanism &amp; Customer Support</h2>\
      <p>We are dedicated to resolving any customer feedback, queries, or complaints with utmost speed and fairness:</p>\
      <div class=\"grievance-card\">\
        <h3>Grievance Redressal Officer (Customer Care Desk)</h3>\
        <p><strong>Designation:</strong> Branch Grievance Redressal Officer</p>\
        <p><strong>Office:</strong> Thangamagal Gold Loan (Greenvill Associates)</p>\
        <p><strong>Address:</strong> Chithra Complex, Chatram Bus Stand, Tiruchirappalli, Tamil Nadu – 620002</p>\
        <p><strong>Operating Hours:</strong> Monday – Saturday: 9:30 AM – 7:30 PM</p>\
        <p><strong>Resolution Turnaround Time (TAT):</strong> 7 to 14 business days from date of lodging grievance.</p>\
      </div>\
      <h2>9. Policy Modifications &amp; Governance</h2>\
      <p>These terms and fair practice codes are periodically reviewed to reflect regulatory amendments and business updates. For specific loan terms, visit our branch at Chithra Complex, Chatram Bus Stand, Tiruchirappalli.</p>",

    navReviews: "Reviews",
    reviewsEyebrow: "Customer Feedback",
    reviewsHeading: "What Our Customers Say",
    reviewsSub: "Real experiences from trusted customers across Tiruchirappalli.",
    reviewsRatingSummary: "4.9 / 5.0 Rating based on verified customer feedback",
    writeReviewBtn: "Write a Review",
    writeReviewModalTitle: "Share Your Feedback",
    writeReviewModalSub: "Tell us about your experience with Thangamagal Gold Loan",
    formReviewName: "Your Name",
    formReviewLocation: "Your Locality / Area (e.g. Chatram, Thillai Nagar)",
    formReviewRating: "Your Rating",
    formReviewComment: "Your Feedback / Experience",
    submitReviewBtn: "Submit Review",
    reviewSubmittedToast: "Thank you! Your review has been submitted and will appear on the website once approved by our team.",
    verifiedCustomer: "Verified Customer",
    adminPortalLink: "Admin Portal",

    // Live Gold Rate
    goldRateTitle: "Today's Gold Rate (Trichy)",
    goldRate22k: "22K (916)",
    goldRate24k: "24K Pure",
    goldRatePerGram: "/ g",
    goldRateUpdated: "Market Rate",

    // Eligible Jewellery & Checklist
    jewelleryEyebrow: "Accepted Items & Requirements",
    jewelleryHeading: "Eligible Jewellery & Easy Checklist",
    jewellerySub: "We accept all standard gold ornaments with transparent and fast evaluation.",
    itemRings: "Gold Rings",
    itemChains: "Gold Chains",
    itemBangles: "Bangles & Kangan",
    itemNecklaces: "Necklaces & Harams",
    itemCoins: "Gold Coins & Bars",
    itemEarrings: "Earrings & Studs",
    docHeading: "Simple 3-Step Process",
    docStep1Title: "1. Gold Jewellery",
    docStep1Desc: "Bring your gold jewellery for instant, transparent evaluation.",
    docStep2Title: "2. Valid ID Proof",
    docStep2Desc: "Aadhaar Card, Voter ID, PAN Card, or Driving License.",
    docStep3Title: "3. Instant Loan",
    docStep3Desc: "Receive cash or bank transfer in 10 minutes.",

    // Floating Action Bar
    floatCall: "Call Now",
    floatEnquire: "Enquire",
    floatDirections: "Directions",
  },

  ta: {
    metaTitle: "தங்கமகள் தங்கக் கடன் | திருச்சியில் 90% வரை தங்கக் கடன்",
    metaDescription: "Greenvill Associates-ன் முதன்மை நிதித் தயாரிப்பான தங்கமகள் தங்கக் கடன் — சித்ரா காம்ப்ளக்ஸ், சத்திரம் பேருந்து நிலையம், திருச்சிராப்பள்ளியில் உங்கள் தங்க நகைகளின் மதிப்பில் 90% வரை உடனடி கடன் மற்றும் பாதுகாப்பான பெட்டக வசதி.",
    skipLink: "முதன்மை உள்ளடக்கத்திற்குச் செல்ல",
    navHome: "முகப்பு",
    navAbout: "பற்றி",
    navGoldLoan: "தங்கக்கடன்",
    navWhyUs: "சிறப்புகள்",
    navHow: "செயல்முறை",
    navFaq: "கேள்விகள்",
    navContact: "தொடர்பு",
    langCurrent: "தமிழ்",
    langOther: "English",

    heroEyebrow: "தங்கமகள் தங்கக் கடன்",
    heroName: "தங்கமகள்",
    brandName: "தங்கமகள்",
    heroSub: "தங்கக் கடன்",
    heroTagline: "நம்பிக்கை \u2022 பாதுகாப்பு \u2022 வளம்",
    heroLtvBadge: "<span class=\"pulse-dot\"></span><span>உங்கள் தங்கத்திற்கு <strong>90% வரை கடன் மதிப்பு (LTV)</strong></span>",
    heroLine: "திருச்சியில் நம்பகமான தங்கக் கடன் உதவி \u2014 உங்கள் தங்க நகைகளின் மதிப்பில் 90% வரை அதிகபட்ச கடன் (90% LTV), உடனடி பண வழங்கல், பாதுகாப்பான பெட்டக வசதி மற்றும் வெளிப்படையான மதிப்பீடு.",
    ctaContact: "எங்களை தொடர்பு கொள்ளுங்கள்",
    ctaVisit: "எங்களை பார்வையிடுங்கள்",

    trustEyebrow: "வாடிக்கையாளர்கள் ஏன் நம்புகிறார்கள்",
    trust1Title: "நம்பகமான சேவை",
    trust1Desc: "நேர்மை மற்றும் வெளிப்படைத்தன்மையின் அடிப்படையிலான வாடிக்கையாளர் மைய அணுகுமுறை.",
    trust2Title: "விரைவான பண வழங்கல்",
    trust2Desc: "உங்கள் நேரத்தை மிச்சப்படுத்தும் எளிமையான செயல்முறை.",
    trust3Title: "உங்கள் தங்கத்திற்கு பாதுகாப்பு",
    trust3Desc: "உங்கள் நகைகள் கவனத்துடனும் தொழில்முறை பாதுகாப்புடனும் கையாளப்படுகின்றன.",
    trust4Title: "தங்கத்திற்கு 90% வரை கடன் (LTV)",
    trust4Desc: "உங்கள் தங்க நகைகளின் மொத்த சந்தை மதிப்பில் 90% வரை அதிகபட்ச கடன் தொகையைப் பெறுங்கள்.",

    aboutEyebrow: "தங்கமகள் பற்றி",
    aboutHeading: "நம்பிக்கையின் அடிப்படையில் அமைந்த தங்கக் கடன் சேவை",
    aboutP1: "தங்கமகள் தங்கக் கடன் என்பது Greenvill Associates நிறுவனத்தின் முதன்மை நிதித் தயாரிப்பாகும் (A Product of Greenvill). சித்ரா காம்ப்ளக்ஸ், சத்திரம் பேருந்து நிலையம், திருச்சிராப்பள்ளியில் அமைந்துள்ள எங்கள் கிளை மூலம் உங்கள் தங்க நகைகளுக்கு 90% LTV வரை அதிகபட்ச கடன் தொகையை வெளிப்படையான மற்றும் பாதுகாப்பான முறையில் வழங்குகிறோம்.",
    aboutP2: "உள்ளே வரும் ஒவ்வொரு வாடிக்கையாளரும் மதிப்பீடு முதல் பண வழங்கல் வரை மரியாதையுடனும் தெளிவுடனும் நடத்தப்படுகிறார்கள். எங்கள் குழு செயல்முறை முழுவதும் உங்களுக்கு வழிகாட்டவும் கேள்விகளுக்கு பதிலளிக்கவும் தயாராக உள்ளது.",
    aboutList1: "வெளிப்படையான, எளிதில் புரிந்துகொள்ளக்கூடிய செயல்முறை",
    aboutList2: "பாதுகாப்பான கையாளுதல் & காப்பீட்டு பெட்டக வசதி",
    aboutList3: "90% LTV வரை அதிகபட்ச கடன் தொகை",
    aboutList4: "சத்திரம் பேருந்து நிலையம் அருகே வசதியான இடம்",

    servicesEyebrow: "எங்கள் சேவைகள்",
    servicesHeading: "தங்கக் கடன் சேவைகள்",
    servicesSub: "முதல் விசாரணை முதல் உடனடி பண வழங்கல் வரை 90% LTV வரையிலான எளிமையான தங்கக் கடன் உதவி.",
    service1Title: "நகைகளுக்கு எதிரான தங்கக் கடன் (90% LTV வரை)",
    service1Desc: "உங்கள் தங்க நகைகளின் மதிப்பில் 90% வரை அதிகபட்ச கடன் உடனடி மதிப்பீட்டுடன் எளிதாகப் பெறுங்கள்.",
    service2Title: "விரைவான கடன் உதவி",
    service2Desc: "சில நிமிடங்களில் ரொக்கமாகவோ அல்லது வங்கிக் கணக்கிலோ உடனடி பண பரிமாற்ற வசதி.",
    service3Title: "பாதுகாப்பான தங்க கையாளுதல்",
    service3Desc: "அடகு வைக்கப்பட்ட நகைகள் சீலிடப்பட்டு, காப்பீட்டு பாதுகாப்புடன் கூடிய உயர்தர பெட்டகங்களில் வைக்கப்படுகின்றன.",
    service4Title: "வாடிக்கையாளர் ஆதரவு",
    service4Desc: "செயல்முறை, தேவையான ஆவணங்கள் மற்றும் திருப்பிச் செலுத்தும் எளிய திட்டங்கள் குறித்த வழிகாட்டுதல்.",

    whyEyebrow: "ஏன் எங்களை தேர்வு செய்ய வேண்டும்",
    whyHeading: "நம்பகமான சேவை",
    why1Title: "90% வரை அதிகபட்ச கடன் மதிப்பு (LTV)",
    why1Desc: "உங்கள் தங்கத்தின் மதிப்பிற்கு எவ்வித அநியாயக் கழிவுகளும் இன்றி அதிகபட்ச கடன் தொகை.",
    why2Title: "வசதியான இடம்",
    why2Desc: "திருச்சியின் மையத்தில் சத்திரம் பேருந்து நிலையம் அருகே எளிதில் அணுகக்கூடியது.",
    why3Title: "வெளிப்படையான செயல்முறை",
    why3Desc: "உங்கள் கண்முன்னே தெளிவான மதிப்பீடு — மறைமுக கட்டணங்கள் எதுவும் இல்லை.",
    why4Title: "காப்பீடு செய்யப்பட்ட பெட்டக பாதுகாப்பு",
    why4Desc: "உங்கள் நகைகள் முழு காப்பீட்டு பாதுகாப்புடன் அதிநவீன பெட்டகங்களில் வைக்கப்படுகின்றன.",
    why5Title: "தொழில்முறை உதவி",
    why5Desc: "ஒவ்வொரு விசாரணையிலும் உங்களுக்கு வழிகாட்ட அனுபவம் வாய்ந்த ஊழியர்கள்.",
    why6Title: "வாடிக்கையாளர் மைய அணுகுமுறை",
    why6Desc: "ஒவ்வொரு வருகையும் பொறுமையுடனும், தனிப்பட்ட பாதுகாப்புடனும், உண்மையான அக்கறையுடனும் கையாளப்படுகிறது.",

    howEyebrow: "செயல்முறை",
    howHeading: "இது எப்படி வேலை செய்கிறது",
    how1Title: "எங்களை அணுகுங்கள்",
    how1Desc: "உங்கள் தங்க நகைகளுடன் சித்ரா காம்ப்ளக்ஸ், சத்திரம் பேருந்து நிலையத்தில் உள்ள எங்கள் கிளைக்கு வாருங்கள்.",
    how2Title: "தங்க மதிப்பீடு",
    how2Desc: "எங்கள் குழு உங்கள் முன்னிலையிலேயே தங்கத்தின் எடை மற்றும் தூய்மையை வெளிப்படையாக மதிப்பீடு செய்கிறது.",
    how3Title: "90% LTV வரை கடன் வாய்ப்பு",
    how3Desc: "உங்கள் தங்கத்தின் மொத்த மதிப்பில் 90% வரை கடன் கணக்கீட்டுச் சலுகையைப் பெறுங்கள்.",
    how4Title: "உடனடி பண வழங்கல்",
    how4Desc: "10 நிமிடங்களில் ரொக்கமாகவோ அல்லது வங்கிக் கணக்கிலோ பணத்தைப் பெற்றுக்கொள்ளுங்கள்.",

    navTakeover: "அடகு நகை மீட்பு",

    // Loan Takeover / Re-pledge
    takeoverEyebrow: "அடகு நகை மீட்பு & மாற்று கடன்",
    takeoverHeading: "அடகு நகையை மீட்டு கூடுதல் ரொக்கப் பணம் பெறுங்கள் (90% LTV வரை)",
    takeoverDesc: "மற்ற வங்கிகள் அல்லது அடகு கடைகளில் குறைந்த மதிப்பீட்டில் நகைகளை அடகு வைத்துள்ளீர்களா? நாங்கள் உங்கள் முந்தைய நிலுவைத் தொகையை செலுத்தி, நகைகளை பாதுகாப்பாக மீட்டு, 90% LTV வரை அதிகபட்ச மதிப்பில் மீதி கூடுதல் ரொக்கப் பணத்தை உடனே வழங்குகிறோம்.",
    takeoverStep1Title: "1. அடகு ரசீதை காட்டுங்கள்",
    takeoverStep1Desc: "உங்கள் தற்போதைய வங்கி அல்லது அடகு சீட்டின் விவரங்களை எங்களிடம் காட்டுங்கள்.",
    takeoverStep2Title: "2. நாங்கள் மீட்டு தருகிறோம்",
    takeoverStep2Desc: "நாங்கள் பணத்தை செலுத்தி உங்கள் நகைகளை பாதுகாப்பாக மீட்டு தருகிறோம்.",
    takeoverStep3Title: "3. 90% LTV & கூடுதல் பணம்",
    takeoverStep3Desc: "90% LTV மதிப்பீட்டில் மீதி கூடுதல் பணத்தை 10 நிமிடங்களில் பெறுங்கள்.",
    takeoverCta: "நகை மீட்பு உதவிக்கு அணுகவும்",
    takeoverBadgeSub: "அதிகபட்ச கடன் மதிப்பு",
    takeoverBadgeVal: "90%",
    takeoverBadgeLbl: "LTV மாற்று கடன்",
    takeoverBenefit1: "சிரமமில்லாத நகை மீட்பு",
    takeoverBenefit2: "உடனடி கூடுதல் ரொக்கப் பணம்",
    takeoverBenefit3: "குறைந்த வட்டி விகிதங்கள்",

    // Location & Branch Timings
    locEyebrow: "எங்களை பார்வையிடுங்கள்",
    locHeading: "தங்கமகளை பார்வையிடுங்கள்",
    locName: "தங்கமகள் தங்கக் கடன்",
    locAddrLine1: "சித்ரா காம்ப்ளக்ஸ், சத்திரம் பேருந்து நிலையம்,",
    locAddrLine2: "திருச்சிராப்பள்ளி, தமிழ்நாடு",
    ctaDirections: "வழி பெறுங்கள்",
    openInGoogleMaps: "Google Maps-ல் பார்க்க",
    branchTimingsTitle: "கடை இயங்கும் நேரம்",
    daysWeek: "திங்கள் – சனி",
    hoursWeek: "காலை 9:30 – இரவு 7:30",
    daysSun: "ஞாயிறு",
    hoursSun: "காலை 10:00 – பிற்பகல் 2:00 (முன் அனுமதியுடன்)",
    statusOpenNow: "தற்போது இயங்குகிறது: காலை 9:30 – இரவு 7:30",
    statusClosedNow: "தற்போது மூடப்பட்டுள்ளது • காலை 9:30 மணிக்கு திறக்கும்",
    statusOpenSunday: "இன்று இயங்குகிறது (ஞாயிறு): காலை 10:00 – பிற்பகல் 2:00",

    contactEyebrow: "தொடர்பு கொள்ளுங்கள்",
    contactHeading: "எங்களை தொடர்பு கொள்ளுங்கள்",
    contactSub: "தொடர்பு கொள்ளுங்கள், எங்கள் குழு உங்களுக்கு உதவ மகிழ்ச்சியடையும்.",
    callNow: "இப்போது அழைக்கவும்",
    callDesc: "எங்கள் குழுவுடன் நேரடியாக பேசுங்கள்",
    getDirections: "வழி பெறுங்கள்",
    getDirectionsDesc: "சத்திரம் பேருந்து நிலையம் அருகே எங்களை கண்டறியவும்",
    formNote: "உங்கள் விவரங்களை கீழே உள்ள படிவத்தில் நிரப்பவும், எங்கள் குழு விரைவில் உங்களை தொடர்பு கொள்ளும்.",
    formName: "பெயர்",
    formPhone: "தொலைபேசி எண்",
    formMessage: "செய்தி",
    sendEnquiry: "விசாரணை அனுப்பு",

    faqEyebrow: "கேள்விகள்",
    faqHeading: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    faqDisambigQ: "தங்கமகள் என்பது நகை சேமிப்புத் திட்டமா அல்லது உடனடி தங்கக் கடன் சேவையா?",
    faqDisambigA: "தங்கமகள் தங்கக் கடன் என்பது திருச்சிராப்பள்ளி சத்திரம் பேருந்து நிலையம், சித்ரா காம்ப்ளக்ஸில் அமைந்துள்ள உடனடி ரொக்க தங்கக் கடன் மற்றும் அடகு நகை மீட்பு நிதி சேவையாகும். அடகு வைக்கும் தங்க நகைகளுக்கு 90% LTV வரை உடனடி பணக் கடன் மற்றும் பிற வங்கிகளின் அடகு நகைகளை மீட்கும் சேவைகளை வழங்குகிறோம். இது Greenvill Associates நிறுவனத்தின் முதன்மை நிதி தயாரிப்பு ஆகும். இது நகை சேமிப்பு அல்லது சீட்டு திட்டங்களில் இருந்து முற்றிலும் மாறுபட்ட நேரடி கடன் சேவையாகும்.",
    faqLtvQ: "என் தங்க நகைகளுக்கு எவ்வளவு கடன் கிடைக்கும்? (LTV விகிதம் என்ன?)",
    faqLtvA: "உங்கள் தங்க நகைகளின் மொத்த சந்தை மதிப்பில் 90% வரை (90% LTV) கடனாகப் பெறலாம். தங்கத்தின் நிகர எடை, காரட் தூய்மை மற்றும் அன்றைய சந்தை விலை அடிப்படையில் உடனடியாக கணக்கிடப்பட்டு வழங்கப்படும்.",
    faqTakeoverQ: "மற்ற வங்கிகள் அல்லது அடகு கடைகளில் உள்ள நகைகளை தங்கமகளுக்கு மாற்ற முடியுமா?",
    faqTakeoverA: "ஆம், நிச்சயமாக! நாங்கள் முழுமையான அடகு நகை மீட்பு (Takeover) சேவையை வழங்குகிறோம். உங்கள் தற்போதைய கடன் தொகையை செலுத்தி நகைகளை மீட்டு, 90% LTV அதிகபட்ச மதிப்பில் கணக்கிட்டு மீதி கூடுதல் ரொக்கத்தை உடனே வழங்குகிறோம்.",
    faqTimingsQ: "கடை இயங்கும் நேரம் மற்றும் முகவரி என்ன?",
    faqTimingsA: "எங்கள் கிளை திங்கள் முதல் சனிக்கிழமை வரை காலை 9:30 மணி முதல் இரவு 7:30 மணி வரையிலும், ஞாயிற்றுக்கிழமைகளில் காலை 10:00 மணி முதல் பிற்பகல் 2:00 மணி வரையிலும் (முன் அனுமதியுடன்) இயங்குகிறது. முகவரி: சித்ரா காம்ப்ளக்ஸ், சத்திரம் பேருந்து நிலையம், திருச்சி.",
    faq1Q: "தங்கக் கடன் என்றால் என்ன?",
    faq1A: "தங்கக் கடன் என்பது பாதுகாப்பாக அடகு வைக்கப்பட்ட தங்க நகைகளுக்கு எதிராக பெறப்படும் நிதியாகும். நகைகள் மதிப்பீடு செய்யப்பட்டு கடன் திருப்பிச் செலுத்தப்படும் வரை உயர்தர பெட்டகங்களில் பாதுகாப்பாக வைக்கப்படும்.",
    faq2Q: "என்னென்ன ஆவணங்கள் தேவை?",
    faq2A: "ஆதார் கார்டு, வாக்காளர் அடையாள அட்டை, பான் கார்டு அல்லது ஓட்டுநர் உரிமம் போன்ற அடிப்படை அடையாள சான்றிதழ்கள் போதுமானது. எங்கள் குழு உங்களுக்கு எளிதாக வழிகாட்டும்.",
    faq3Q: "தங்கத்தின் மதிப்பு எவ்வாறு மதிப்பிடப்படுகிறது?",
    faq3A: "எங்கள் குழு கிளையில் உங்கள் கண்முன்னே தங்க நகைகளை கவனமாகவும் வெளிப்படையாகவும் மதிப்பீடு செய்கிறது.",
    faq4Q: "திருப்பிச் செலுத்தும் முறை எப்படி?",
    faq4A: "கடன் வழங்கும் போதே திருப்பிச் செலுத்தும் எளிய முறைகள், தவணை வசதிகள் மற்றும் வட்டி விவரங்கள் எங்கள் குழுவால் தெளிவாக விளக்கப்படும்.",
    faq5Q: "தங்கமகள் எங்கு அமைந்துள்ளது?",
    faq5A: "நாங்கள் சித்ரா காம்ப்ளக்ஸ், சத்திரம் பேருந்து நிலையம், திருச்சிராப்பள்ளி, தமிழ்நாட்டில் அமைந்துள்ளோம்.",

    footerLinksHeading: "விரைவு இணைப்புகள்",
    footerLegalHeading: "சட்ட விதிமுறைகள்",
    footerLangHeading: "மொழி",
    privacyLink: "தனியுரிமைக் கொள்கை",
    termsLink: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    poweredBy: "தயாரிப்பு:",
    poweredByBrand: "Greenvill",
    copyright: "\u00A9 2026 தங்கமகள் தங்கக் கடன். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    legalDisclaimer: "<strong class=\"text-stone-300\">சட்டப்பூர்வ மற்றும் ஒழுங்குமுறை அறிவிப்பு:</strong> தங்கக் கடன் தகுதி, வட்டி விகிதங்கள் மற்றும் கடன் மதிப்பு (90% LTV வரை) தங்கத்தின் தூய்மை, எடை மற்றும் பொருந்தக்கூடிய விதிமுறைகளுக்கு உட்பட்டது. அடகு வைக்கப்பட்ட நகைகள் காப்பீட்டு பாதுகாப்புடன் கூடிய உயர்தர பெட்டகங்களில் பாதுகாப்பாக வைக்கப்படுகின்றன. அனைத்து கடன்களும் வெளிப்படையான நேர்மையான கொள்கைகளின் கீழ் வழங்கப்படுகின்றன.",

    legalBack: "முகப்புக்குத் திரும்பு",

    privacyTitle: "தனியுரிமைக் கொள்கை | தங்கமகள் தங்கக் கடன்",
    privacyEyebrow: "சட்ட விதிமுறைகள்",
    privacyHeading: "தனியுரிமைக் கொள்கை",
    privacyUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது: ஆகஸ்ட் 2026",
    privacyBody: "\
      <h2>நாங்கள் சேகரிக்கும் தகவல்</h2>\
      <p>இந்த இணையதளம் எங்கள் தங்கக் கடன் சேவைகள் பற்றிய தகவல்களை வழங்குகிறது. எங்கள் தொடர்பு படிவத்தின் மூலம் அனுப்பப்படும் எந்த தகவலும் உங்கள் விசாரணைக்கு பதிலளிக்க மட்டுமே பயன்படுத்தப்படும்.</p>\
      <h2>தொடர்பு &amp; விசாரணை தகவல்</h2>\
      <p>நீங்கள் தொலைபேசி, இணையதள படிவம் அல்லது நேரடியாக எங்கள் கிளையில் எங்களை தொடர்பு கொண்டால், நீங்கள் பகிரும் எந்த தகவலும் (பெயர் அல்லது தொலைபேசி எண் போன்றவை) உங்கள் விசாரணைக்கு பதிலளிக்கவும் உங்கள் தங்கக் கடன் தேவைகளுக்கு உதவவும் மட்டுமே பயன்படுத்தப்படும்.</p>\
      <h2>குக்கீகள் &amp; லோக்கல் ஸ்டோரேஜ்</h2>\
      <p>இந்த இணையதளம் உங்கள் தேர்ந்தெடுக்கப்பட்ட மொழியை (ஆங்கிலம் அல்லது தமிழ்) நினைவில் வைக்க மட்டுமே உங்கள் பிரவுசரின் லோக்கல் ஸ்டோரேஜைப் பயன்படுத்துகிறது. எந்த கண்காணிப்பு குக்கீகளும் பயன்படுத்தப்படவில்லை.</p>\
      <h2>பகுப்பாய்வு</h2>\
      <p>இந்த இணையதளம் தற்போது எந்த பகுப்பாய்வு அல்லது கண்காணிப்பு ஸ்கிரிப்ட்களையும் பயன்படுத்தவில்லை. எதிர்காலத்தில் பகுப்பாய்வு கருவிகள் சேர்க்கப்பட்டால், இந்தக் கொள்கை அதற்கேற்ப புதுப்பிக்கப்படும்.</p>\
      <h2>மூன்றாம் தரப்பு சேவைகள்</h2>\
      <p>எங்கள் கிளையைக் கண்டறிய உதவும் வகையில் இந்த இணையதளத்தின் இருப்பிடப் பகுதியில் Google Maps பொதிக்கப்பட்டுள்ளது. அந்த பொதிக்கப்பட்ட வரைபடத்தால் கையாளப்படும் எந்த தரவும் Google-இன் சொந்த தனியுரிமைக் கொள்கையால் நிர்வகிக்கப்படும்.</p>\
      <h2>தரவு பயன்பாடு</h2>\
      <p>நீங்கள் எங்களுடன் பகிரும் எந்த தகவலையும் மார்க்கெட்டிங் நோக்கங்களுக்காக மூன்றாம் தரப்பினருக்கு நாங்கள் விற்கவோ, வாடகைக்கு விடவோ, பகிரவோ மாட்டோம்.</p>\
      <h2>தரவு தக்கவைப்பு</h2>\
      <p>இந்த இணையதளம் தானியங்கு படிவங்கள் மூலம் தரவு சேகரிக்காததால், விவரிக்க தானியங்கு தரவு தக்கவைப்பு எதுவும் இல்லை. எங்கள் கிளையுடன் நேரடியாக பகிரப்படும் எந்த தகவலும் உங்களுக்கு உதவத் தேவையான வரை மட்டுமே வைக்கப்படும்.</p>\
      <h2>பாதுகாப்பு</h2>\
      <p>நீங்கள் எங்களுடன் பகிரும் தகவலை பாதுகாப்பாகவும் தொழில்முறையாகவும் வைத்திருக்க நாங்கள் நியாயமான நடவடிக்கைகளை எடுக்கிறோம்.</p>\
      <h2>உங்கள் உரிமைகள்</h2>\
      <p>உங்களைப் பற்றி நாங்கள் என்ன தகவலை வைத்திருக்கிறோம் என்பதைக் கேட்கவோ, அதைத் திருத்தவோ அல்லது அகற்றவோ கோர எப்போது வேண்டுமானாலும் எங்களை தொடர்பு கொள்ளலாம்.</p>\
      <h2>தொடர்பு தகவல்</h2>\
      <p>தனியுரிமை தொடர்பான எந்த கேள்விகளுக்கும், எங்கள் தொடர்பு பக்கத்தில் உள்ள தொடர்பு விவரங்களைப் பயன்படுத்தி எங்களை அணுகவும்.</p>\
      <h2>கொள்கை புதுப்பிப்புகள்</h2>\
      <p>இணையதளம் வளரும்போது இந்தக் கொள்கை அவ்வப்போது புதுப்பிக்கப்படலாம். இந்தப் பக்கத்தின் மேலே உள்ள தேதி மிக சமீபத்திய புதுப்பிப்பைக் குறிக்கிறது.</p>",

    termsTitle: "விதிமுறைகள் & நேர்மையான கடன் கொள்கை | தங்கமகள் தங்கக் கடன்",
    termsEyebrow: "சட்டப்பூர்வ ஒழுங்குமுறை விதிகள்",
    termsHeading: "விதிமுறைகள், நிபந்தனைகள் & நேர்மையான கடன் நடைமுறைக் குறியீடு",
    termsUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது: ஆகஸ்ட் 2026",
    termsBody: "\
      <div class=\"policy-intro-box\">\
        <p><strong>தங்கமகள் தங்கக் கடன்</strong> (<strong>Greenvill Associates</strong> நிறுவனத்தின் முதன்மை நிதி தயாரிப்பு) நிறுவனம், <strong>இந்திய ரிசர்வ் வங்கியின் (RBI) நேர்மையான கடன் வழிகாட்டுதல்கள்</strong>, <strong>தமிழ்நாடு அடகு பிடிப்போர் சட்டம் (TN Pawn Brokers Act, 1943)</strong>, <strong>வருமான வரிச் சட்டம் (1961)</strong> மற்றும் நுகர்வோர் பாதுகாப்பு விதிமுறைகளின் கீழ் முழுமையான சட்டப்பூர்வ வெளிப்படைத்தன்மையுடன் இயங்குகிறது.</p>\
      </div>\
      <h2>1. நேர்மையான நடைமுறைக் குறியீடு (Fair Practices Code - FPC)</h2>\
      <p>ஒவ்வொரு வாடிக்கையாளருக்கும் நேர்மையான, நியாயமான மற்றும் வெளிப்படையான நிதிச் சேவையை வழங்குவதில் நாங்கள் உறுதியாக உள்ளோம்:</p>\
      <ul>\
        <li><strong>பாகுபாடற்ற அணுகுமுறை:</strong> பாலினம், சாதி, மதம் அல்லது சமூக வேறுபாடின்றி அனைத்து வாடிக்கையாளர்களுக்கும் சமமான கடன் உதவி வழங்கப்படுகிறது.</li>\
        <li><strong>சட்டப்பூர்வ அடகு ரசீது (Pawn Ticket):</strong> அடகு வைக்கப்பட்ட நகைகளின் மொத்த எடை (Gross Weight), கற்கள் கழித்த நிகர எடை (Net Weight), காரட் தூய்மை, அனுமதிக்கப்பட்ட கடன் தொகை, வட்டி விகிதம் மற்றும் திருப்பிச் செலுத்தும் விதிகள் அடங்கிய தெளிவான ரசீது உடனுக்குடன் வழங்கப்படுகிறது.</li>\
        <li><strong>மறைமுகக் கட்டணங்கள் இல்லை:</strong> வட்டி விகிதங்கள், மதிப்பீட்டுக் கட்டணம், மற்றும் பிற விதிமுறைகள் கடன் வழங்கும் முன்பே வெளிப்படையாக விளக்கப்படும். எவ்வித மறைமுகக் கட்டணங்களும் இல்லை.</li>\
        <li><strong>நேரடி மதிப்பீடு:</strong> தங்கத்தின் தூய்மை சோதனை மற்றும் எடை சரிபார்ப்பு ஆகியவை வாடிக்கையாளரின் நேரடி முன்னிலையிலேயே அரசு அங்கீகரிக்கப்பட்ட மின்னணு தராசுகள் மூலம் செய்யப்படுகின்றன.</li>\
      </ul>\
      <h2>2. தங்க மதிப்பீடு மற்றும் 90% LTV கடன் கொள்கை</h2>\
      <p>அடகு வைக்கப்படும் தங்க நகைகளுக்கு சந்தை மதிப்பில் <strong>90% வரை கடன் மதிப்பு (Up to 90% LTV)</strong> வழங்கப்படுகிறது:</p>\
      <ul>\
        <li><strong>நிகர எடை கணக்கீடு:</strong> நகைகளில் உள்ள கற்கள், மெழுகு, அரக்கு மற்றும் தங்கமல்லாத பிற இணைப்புகள் துல்லியமாகக் கழிக்கப்பட்டு நிகர தங்க எடைக்கு மட்டுமே கடன் கணக்கிடப்படுகிறது.</li>\
        <li><strong>சந்தை விலை அடிப்படை:</strong> அன்றைய 22K மற்றும் 18K தங்கத்தின் நேரடி சந்தை விலையின் அடிப்படையில் கடன் தொகை கணக்கிடப்படுகிறது.</li>\
        <li><strong>பாதுகாப்பான சோதனை:</strong> தங்கத்திற்கு எவ்வித சேதாரமும் இன்றி உரைகல் மற்றும் மின்னணு முறைகள் மூலம் மட்டுமே தூய்மை சோதிக்கப்படுகிறது. வாடிக்கையாளர் அனுமதியின்றி அமிலச் சோதனைகளோ சேதப்படுத்தும் நடவடிக்கைகளோ செய்யப்படாது.</li>\
      </ul>\
      <h2>3. வங்கித் தரத்திலான பெட்டகப் பாதுகாப்பு &amp; 100% முழு காப்பீட்டு உத்தரவாதம்</h2>\
      <p>உங்கள் மதிப்புமிக்க தங்க நகைகளின் பாதுகாப்பே எங்கள் முதன்மை நோக்கம்:</p>\
      <ul>\
        <li><strong>சீலிடப்பட்ட பாதுகாப்பு பை (Tamper-Proof Seal):</strong> அடகு வைக்கப்பட்ட நகைகள் வாடிக்கையாளரின் கண்முன்னே தனித்தனி பாதுகாப்பு பைகளில் வைத்து சீல் செய்யப்படுகின்றன.</li>\
        <li><strong>அதிநவீன பெட்டக வசதி:</strong> அனைத்து நகைகளும் 24 மணி நேர CCTV கண்காணிப்பு மற்றும் தீ/கொள்ளை பாதுகாப்பு கொண்ட வங்கித் தரத்திலான எஃகு பெட்டகங்களில் (Safe Locker Vaults) வைக்கப்படுகின்றன.</li>\
        <li><strong>100% காப்பீடு:</strong> அடகு வைக்கப்பட்டுள்ள அனைத்து தங்க நகைகளும் தீ, திருட்டு, கொள்ளை மற்றும் இயற்கை சேதங்களுக்கு எதிராக முழு வணிக காப்பீட்டு (Comprehensive Insurance) பாதுகாப்புக்கு உட்பட்டவை.</li>\
        <li><strong>இழப்பீட்டு உத்தரவாதம்:</strong> எதிர்பாராத ஏதேனும் இழப்பு அல்லது சேதம் நேரிட்டால், நிகர தங்க எடைக்கு அன்றைய சந்தை மதிப்பின்படி முழுமையான இழப்பீடு அல்லது மாற்று நகை வழங்கப்படும்.</li>\
      </ul>\
      <h2>4. கடன் பண வழங்கல் மற்றும் வருமான வரிச் சட்டம் (பிரிவு 269SS &amp; 269T)</h2>\
      <p>மத்திய அரசின் வருமான வரிச் சட்ட விதிகளின்படி (Income Tax Act, 1961):</p>\
      <ul>\
        <li><strong>ரொக்கக் கடன் வரம்பு (Section 269SS):</strong> ஒரு வாடிக்கையாளருக்கு ரொக்கமாக (Cash) வழங்கப்படும் கடன் தொகை <strong>₹20,000 வரை மட்டுமே</strong> அனுமதிக்கப்படும்.</li>\
        <li><strong>வங்கி பரிவர்த்தனை கட்டாயம்:</strong> ₹20,000-க்கு அதிகமான கடன் தொகைகள் கட்டாயமாக வாடிக்கையாளரின் வங்கிக் கணக்கிற்கு நேரடியாக <strong>NEFT / RTGS / IMPS / UPI / காசோலை (Cheque)</strong> மூலமாக மட்டுமே வழங்கப்படும்.</li>\
        <li><strong>கடன் திருப்பிச் செலுத்துதல் (Section 269T):</strong> ₹20,000-க்கு அதிகமான கடன் தொகையை திருப்பிச் செலுத்தும் போதும் வங்கி வழிகளையே பயன்படுத்த வேண்டும்.</li>\
      </ul>\
      <h2>5. திருப்பிச் செலுத்துதல் &amp; உடனடி நகைகள் விடுவிப்பு</h2>\
      <ul>\
        <li><strong>நெகிழ்வான தவணைகள்:</strong> மாதாந்திர வட்டி செலுத்தும் திட்டம், கால முடிவில் செலுத்தும் திட்டம் (Bullet Repayment) அல்லது அசல் தொகையை சிறிது சிறிதாக குறைக்கும் வசதிகள் உள்ளன.</li>\
        <li><strong>முன்கூட்டியே முடிப்பதற்கான அபராதம் இல்லை (Zero Foreclosure Penalty):</strong> கடன் காலத்திற்கு முன்பே கடனை முழுமையாக முடித்து நகைகளை மீட்டுக்கொள்ள எவ்வித அபராதக் கட்டணமும் கிடையாது.</li>\
        <li><strong>அன்றைய தினமே நகை ஒப்படைப்பு:</strong> கடன் அசல் மற்றும் வட்டி முழுமையாக செலுத்தப்பட்டவுடன், சீலிடப்பட்ட நகை பை திறக்கப்பட்டு சரிபார்க்கப்பட்டு அன்றைய தினமே வாடிக்கையாளரிடம் ஒப்படைக்கப்படும்.</li>\
      </ul>\
      <h2>6. தவணை தவறிய கடன்கள், 30-நாள் முன் அறிவிப்பு &amp; வெளிப்படையான ஏலக் கொள்கை</h2>\
      <p>வாடிக்கையாளர் குறித்த காலத்தில் கடனைத் திருப்பிச் செலுத்தத் தவறினால் கடைபிடிக்கப்படும் சட்டப்பூர்வ நடவடிக்கைகள்:</p>\
      <ul>\
        <li><strong>30 நாட்கள் முன் அறிவிப்பு (Mandatory 30-Day Notice):</strong> ஏல நடவடிக்கைக்கு முன், வாடிக்கையாளரின் முகவரிக்கு பதிவுத் தபாலில் (Registered / Speed Post) குறைந்தபட்சம் 30 நாட்கள் கால அவகாசத்துடன் கட்டாய எழுத்துப்பூர்வ அறிவிப்பு அனுப்பப்படும்.</li>\
        <li><strong>தொலைபேசி மற்றும் குறுஞ்செய்தி நினைவூட்டல்:</strong> வாடிக்கையாளருக்கு மரியாதையான வழிகளில் நினைவூட்டல்கள் வழங்கப்படும். எவ்வித அத்துமீறல்களோ தவறான வசூல் முறைகளோ பின்பற்றப்படாது.</li>\
        <li><strong>செய்தித்தாளில் பொது அறிவிப்பு:</strong> ஏலம் நடைபெறும் தேதி, நேரம் மற்றும் இடம் உள்ளூர் தமிழ் மற்றும் ஆங்கில நாளிதழ்களில் விளம்பரமாக வெளியிடப்படும்.</li>\
        <li><strong>மீதித் தொகை திருப்பித் தரும் உத்தரவாதம் (Surplus Refund Guarantee):</strong> ஏலத்தில் கிடைக்கும் தொகையில் கடன் அசல், வட்டி மற்றும் அரசு விதித்த ஏலச் செலவுகள் போக <strong>மீதி பணம் இருப்பின், அது முழுமையாக வாடிக்கையாளருக்கே திருப்பி அளிக்கப்படும்</strong>.</li>\
      </ul>\
      <h2>7. KYC சரிபார்ப்பு &amp; நகையின் சட்டப்பூர்வ உரிமை அறிவிப்பு</h2>\
      <ul>\
        <li><strong>அரசு அடையாள சான்றுகள் (KYC):</strong> ஆதார் அட்டை, வாக்காளர் அடையாள அட்டை, பான் கார்டு, பாஸ்போர்ட் அல்லது ஓட்டுநர் உரிமம் போன்ற அரசு ஆவணங்கள் கட்டாயமாகும்.</li>\
        <li><strong>சுய உரிமை அறிவிப்பு:</strong> அடகு வைக்கப்படும் தங்கம் தன் சொந்த உழைப்பில் வாங்கியது மற்றும் சட்டப்பூர்வமானது என்பதற்கான சுய அறிவிப்பில் கையொப்பமிட வேண்டும். திருட்டு அல்லது சர்ச்சைக்குரிய நகைகள் ஏற்கப்படாது.</li>\
      </ul>\
      <h2>8. வாடிக்கையாளர் குறைதீர்க்கும் அதிகாரி விவரம் (Grievance Redressal Desk)</h2>\
      <p>வாடிக்கையாளர் கருத்துக்கள் மற்றும் புகார்களுக்கு விரைவான தீர்வு காண தனி அதிகாரி நியமிக்கப்பட்டுள்ளார்:</p>\
      <div class=\"grievance-card\">\
        <h3>குறைதீர்க்கும் அதிகாரி (Grievance Redressal Officer)</h3>\
        <p><strong>பதவி:</strong> கிளை குறைதீர்க்கும் அதிகாரி</p>\
        <p><strong>நிறுவனம்:</strong> தங்கமகள் தங்கக் கடன் (Greenvill Associates)</p>\
        <p><strong>முகவரி:</strong> சித்ரா காம்ப்ளக்ஸ், சத்திரம் பேருந்து நிலையம், திருச்சிராப்பள்ளி, தமிழ்நாடு – 620002</p>\
        <p><strong>பணி நேரம்:</strong> திங்கள் – சனி: காலை 9:30 முதல் இரவு 7:30 வரை</p>\
        <p><strong>தீர்வு கால அவகாசம் (TAT):</strong> புகார் பதிவு செய்த நாளிலிருந்து 7 முதல் 14 வணிக நாட்களுக்குள்.</p>\
      </div>\
      <h2>9. கொள்கை மாற்றங்கள்</h2>\
      <p>இந்த விதிமுறைகள் மற்றும் கொள்கைகள் அவ்வப்போது அரசு விதிகளுக்கு ஏற்ப புதுப்பிக்கப்படலாம். நேரடி கடன் விதிமுறைகளுக்கு சித்ரா காம்ப்ளக்ஸ், சத்திரம் பேருந்து நிலையத்தில் உள்ள எங்கள் கிளையை அணுகவும்.</p>",

    navReviews: "கருத்துக்கள்",
    reviewsEyebrow: "வாடிக்கையாளர் கருத்துக்கள்",
    reviewsHeading: "வாடிக்கையாளர் மதிப்பீடுகள்",
    reviewsSub: "திருச்சிராப்பள்ளி முழுவதும் உள்ள எங்கள் வாடிக்கையாளர்களின் நேரடி அனுபவங்கள்.",
    reviewsRatingSummary: "சரிபார்க்கப்பட்ட வாடிக்கையாளர் கருத்துகளின்படி 5-க்கு 4.9 மதிப்பீடு",
    writeReviewBtn: "கருத்தைப் பகிரவும்",
    writeReviewModalTitle: "உங்கள் கருத்தைப் பகிருங்கள்",
    writeReviewModalSub: "தங்கமகள் தங்கக் கடன் உடனான உங்கள் அனுபவத்தைப் பகிர்ந்து கொள்ளுங்கள்",
    formReviewName: "உங்கள் பெயர்",
    formReviewLocation: "உங்கள் பகுதி (எ.கா: சத்திரம், தில்லை நகர்)",
    formReviewRating: "உங்கள் மதிப்பீடு",
    formReviewComment: "உங்கள் கருத்து / அனுபவம்",
    submitReviewBtn: "கருத்தை சமர்ப்பிக்கவும்",
    reviewSubmittedToast: "நன்றி! உங்கள் கருத்து சமர்ப்பிக்கப்பட்டது. எங்கள் குழுவால் சரிபார்க்கப்பட்டதும் இணையதளத்தில் தோன்றும்.",
    verifiedCustomer: "சரிபார்க்கப்பட்ட வாடிக்கையாளர்",
    adminPortalLink: "நிர்வாகி உள்நுழைவு",

    // Live Gold Rate
    goldRateTitle: "இன்றைய தங்கம் விலை (திருச்சி)",
    goldRate22k: "22 காரட் (916)",
    goldRate24k: "24 காரட் தங்கம்",
    goldRatePerGram: "/ கிராம்",
    goldRateUpdated: "சந்தை விலை",

    // Eligible Jewellery & Checklist
    jewelleryEyebrow: "ஏற்றுக்கொள்ளப்படும் நகைகள் & ஆவணங்கள்",
    jewelleryHeading: "ஏற்றுக்கொள்ளப்படும் நகைகள் & ஆவண வழிகாட்டி",
    jewellerySub: "அனைத்து விதமான தங்க நகைகளுக்கும் வெளிப்படையான உடனடி மதிப்பீடு.",
    itemRings: "மோதிரங்கள்",
    itemChains: "செயின்கள்",
    itemBangles: "வளையல்கள் & காப்பு",
    itemNecklaces: "நெக்லஸ் & ஆரங்கள்",
    itemCoins: "தங்க நாணயங்கள் & கட்டிகள்",
    itemEarrings: "காதணிகள் & ஜிமிக்கி",
    docHeading: "எளிய 3-படி செயல்முறை",
    docStep1Title: "1. தங்க நகை",
    docStep1Desc: "உங்கள் தங்க நகைகளுடன் எங்கள் கிளைக்கு வாருங்கள்.",
    docStep2Title: "2. அடையாள அட்டை",
    docStep2Desc: "ஆதார் கார்டு, வாக்காளர் அடையாள அட்டை, பான் கார்டு அல்லது ஓட்டுநர் உரிமம்.",
    docStep3Title: "3. உடனடி கடன்",
    docStep3Desc: "10 நிமிடங்களில் ரொக்கமாகவோ அல்லது வங்கிக் கணக்கிலோ உடனடியாகப் பெறுங்கள்.",

    // Floating Action Bar
    floatCall: "அழைக்க",
    floatEnquire: "விசாரிக்க",
    floatDirections: "வழிகாட்டி",
  }
};

function getStoredLang() {
  try {
    return localStorage.getItem('tgm_lang') || 'en';
  } catch (e) {
    return 'en';
  }
}

function setStoredLang(lang) {
  try {
    localStorage.setItem('tgm_lang', lang);
  } catch (e) { /* ignore */ }
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    // format: data-i18n-attr="placeholder:formPhone|aria-label:someKey"
    const spec = el.getAttribute('data-i18n-attr');
    spec.split('|').forEach((pair) => {
      const [attr, key] = pair.split(':');
      if (attr && key && dict[key] !== undefined) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });

  const titleEl = document.querySelector('title');
  const titleKey = document.body.getAttribute('data-page-title-key') || 'metaTitle';
  if (titleEl && dict[titleKey]) titleEl.textContent = dict[titleKey];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.metaDescription) metaDesc.setAttribute('content', dict.metaDescription);

  document.querySelectorAll('.lang-current-label').forEach((el) => { el.textContent = dict.langCurrent; });
  document.querySelectorAll('.lang-other-label').forEach((el) => { el.textContent = dict.langOther; });

  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.textContent = lang === 'en' ? 'தமிழ்' : 'English';
  });

  // Toggle the hero logo asset between English / Tamil branding versions
  document.querySelectorAll('[data-logo-en][data-logo-ta]').forEach((img) => {
    img.src = lang === 'ta' ? img.getAttribute('data-logo-ta') : img.getAttribute('data-logo-en');
  });

  document.dispatchEvent(new CustomEvent('tgm:langchange', { detail: { lang } }));
}

function initLanguage() {
  const lang = getStoredLang();
  applyTranslations(lang);

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const newLang = btn.getAttribute('data-set-lang');
      setStoredLang(newLang);
      applyTranslations(newLang);
      document.querySelectorAll('.lang-menu.open').forEach((m) => m.classList.remove('open'));
      document.querySelectorAll('.lang-btn[aria-expanded="true"]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
    });
  });

  // Simple single-button toggle (used in mobile / footer contexts)
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = getStoredLang();
      const next = current === 'en' ? 'ta' : 'en';
      setStoredLang(next);
      applyTranslations(next);
    });
  });
}

document.addEventListener('DOMContentLoaded', initLanguage);
