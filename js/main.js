/**
 * DR. THIMMEGOWDA M.K. (SANTHOSH) - BILINGUAL PORTFOLIO SCRIPT
 * Complete Kannada & English Language Switching, Counters, Scroll Reveals
 */

const translations = {
  en: {
    brandName: "Dr. Thimmegowda M.K. (Santhosh)",
    brandSub: "Agri-Entrepreneur • Agri Univ, ODP, RUDSETI & Private Faculty",
    navIntro: "Introduction",
    navAchievements: "Achievements",
    navTeaching: "Teaching & Mentorship",
    navLifeStory: "Life Story",
    navActivities: "Other Activities",
    navConnect: "Connect",
    getInTouchBtn: "Get in Touch",
    
    // Hero
    heroDevBadge: 'Designed & Built by <a href="https://nexgencodify.in" target="_blank" rel="noopener noreferrer" class="nexgen-brand-link">NexGenCodify</a>',
    heroTag: "✦ Progressive Agri-Entrepreneur & Agricultural Innovator",
    heroName: "Dr. Thimmegowda <span>M.K. (Santhosh)</span>",
    heroRole1: "Farmer",
    heroRole2: "Mushroom Cultivation Trainer",
    heroRole3: "Trainer at RUDSETI, ODP, Agriculture University, and Private Institutions",
    originTitle: "Roots & Origin",
    originDetails: "Born 1984 in Maradipura Village, Honakere Hobli, Nagamangala Taluk, Mandya District, Karnataka.",
    heroDesc: "Over 27 years of deep, hands-on immersion in agriculture, pioneering scientific transformations across Karnataka. A master mushroom farmer, innovator in organic bio-substrates, and trainer at National Academy of RUDSETI, Dr. Thimmegowda has served as esteemed faculty across Agricultural Universities and ODP Institution, mentoring thousands of educated unemployed youth, women, farmers, and retired officers in mushroom cultivation and scientific organic farming.",
    btnExploreAchievements: "Explore Achievements",
    btnReadLifeStory: "Read Complete Life Story",
    stat1Number: "27+",
    stat1Label: "Years in Agriculture",
    stat2Number: "1000+",
    stat2Label: "Students Trained",
    stat3Number: "100%",
    stat3Label: "Scientific & Chemical-Free",
    plinthName: "Dr. Thimmegowda (Santhosh)",
    plinthTitle: "27 Years in Scientific Farming • RUDSETI, ODP & Agri Univ Trainer",

    // Achievements & Awards Showcase
    achievementsBadge: "Part II • Prestigious Honors & Accolades",
    achievementsTitle: "Details of Prestigious Awards & State Felicitations",
    achievementsSub: "Honors conferred in recognition of 27 years of pioneering agricultural transformation and dedicated service to the farming community.",
    sliderLiveBadge: "Award Ceremony Moments",
    sliderIntervalNote: "Photos slide automatically every 6 seconds",
    slideCaption1: "Doctorate Degree Conferment Ceremony — German University & UN Body",
    slideCaption2: "University of Agricultural Sciences Bangalore — Krishi Mela State Honor",
    slideCaption3: "State Level Udyami Vokkaliga Award — Conferred by Revered Swamiji",
    slideCaption4: "State Level Vijaya Raita Award — Vijayavani Daily Newspaper",
    slideCaption5: "Canara Bank Rural Self Employment Training Institute (RSETI) Hassan Honor",
    slideCaption6: "Canara Bank Centenary Rural Development Trust (CBRSETI) Felicitation",
    slideCaption7: "Bhusiri Development Foundation — World Environment Day Krishi Felicitation",
    slideCaption8: "FC Krishi Technology Pavilion — Udyami Vokkaliga Honor with Farmers Team",
    slideCaption9: "State Felicitation by Paramapoojya Sri Sri Sri Nirmalanandanatha Mahaswamiji with Fresh Farm Produce Basket",
    inspirationTitle: "An Inspiration for All Farmers",
    inspirationDesc: "Through 27 years of tireless scientific innovation and selfless mentorship, Dr. Thimmegowda (Santhosh) stands as an inspiring beacon for the entire agricultural fraternity.",
    award1Title: "Doctorate Degree Honor",
    award1Org: "German University",
    award1Desc: "Honorary Doctorate conferred in recognition of distinguished service to agricultural sciences and organic bio-technological research.",
    award2Title: "District Level Progressive Farmer Award",
    award2Org: "GKVK Bengaluru",
    award2Desc: "Conferred by Gandhi Krishi Vigyana Kendra (GKVK) Bengaluru for innovative farm practices.",
    award3Title: "District Level Best Agriculturist Award",
    award3Org: "Mandya District",
    award3Desc: "Best Agriculturist Honor for pioneering contributions across Mandya district.",
    award4Title: "District Level Organic Farmer Award",
    award4Org: "Mysuru District",
    award4Desc: "Conferred for zero-chemical natural farming models and bio-technology in Mysuru.",
    award5Title: "State Level Udyami Vokkaliga Award",
    award5Org: "Bengaluru",
    award5Desc: "Prestigious state-level entrepreneur award conferred at Karnataka State Conference.",
    award6Title: "State Level Vijaya Raita Award",
    award6Org: "Vijayavani Daily, Mysuru",
    award6Desc: "Conferred by leading statewide daily newspaper 'Vijayavani' in Mysuru.",
    award7Title: "State Level Organic Farmer Award",
    award7Org: "Bengaluru",
    award7Desc: "State-level distinction for non-chemical circular agro-waste mushroom farming.",
    award8Title: "Excellence Award",
    award8Org: "National Rotary Club",
    award8Desc: "Conferred by National Rotary Club for dedicated agricultural leadership and community empowerment.",
    award9Title: "Felicitation at 87th All India Kannada Sahitya Sammelana",
    award9Org: "Mandya",
    award9Desc: "Historic state felicitation at the 87th All India Kannada Sahitya Sammelana in Mandya.",
    award10Title: "Super Dampati Award",
    award10Org: "Colors Super TV Channel",
    award10Desc: "Prestigious television honor conferred by Colors Super TV channel.",
    award11Title: "VK Superstar Farmer Award",
    award11Org: "Superstar Raita",
    award11Desc: "State recognition conferred for stellar agricultural innovation and farm leadership.",
    award12Title: "Modern Farmer Award",
    award12Org: "Modern Farmer Honor",
    award12Desc: "Recognized for modernizing farm sheds with scientific mushroom biotechnology.",
    award13Title: "Yuva Raita Ratna Award",
    award13Org: "Yuva Raita Ratna",
    award13Desc: "Conferred for inspiring youth to embrace profitable, self-reliant agro-enterprises.",
    award14Title: "UAS Bangalore Diamond Jubilee Honor",
    award14Org: "GKVK, UAS Bangalore",
    award14Desc: "Special agricultural honor conferred at University of Agricultural Sciences Bangalore Diamond Jubilee.",
    award15Title: "Kayaka Shri Award",
    award15Org: "Kalamandira Mandya • Harsha Samaj Seva Foundation",
    award15Desc: "Prestigious state honor conferred at Kalamandira Mandya by Harsha Samaj Seva Foundation for dedicated community and agricultural upliftment.",
    award16Title: "Karunada Chetana Award",
    award16Org: "Spoorthi Kala Trust Bengaluru",
    award16Desc: "Conferred by Spoorthi Kala Trust Bengaluru in recognition of exceptional service to Karnataka agriculture and farmer empowerment.",
    extraHonorsTitle: "And Felicitations by Numerous State Organizations & Academic Bodies",
    extraHonorsDesc: "Dozens of farmer federations, community councils, and academic trusts across Karnataka have felicitated Dr. Thimmegowda for his inspiring leadership.",
    pillTag1: "Udyami Vokkaliga",
    pillTag2: "State Progressive Farmer Award",
    pillTag3: "State Organic Farmer Award",

    // Teaching
    teachingBadge: "Part III • Educational Leadership & Mentorship",
    teachingTitle: "Their Teaching Achievements & Mentorship",
    teachingSub: "Transferring laboratory science into village livelihoods, empowering youth, women, and farmers across Karnataka.",
    teachingExpertBadge: "Specialist in Mushroom & Scientific Integrated Organic Farming",
    teachingMainHeading: "Practical Field Training for 1000+ Unemployed Youth, Farmers & Officers Across the State",
    teachingLead: "With over <strong>9 years of intensive mushroom cultivation</strong> mastery and certification from the <strong>National Academy of RUDSETI</strong>, Dr. Thimmegowda has served as esteemed faculty across Agricultural Universities and ODP Institution, mentoring thousands of educated unemployed youth, women, farmers, and retired officers in mushroom cultivation and scientific organic farming.",
    teachingP2: "He has illuminated their career paths through hands-on practical training in <strong>Value Addition</strong> and <strong>Direct Marketing</strong> of farm products. By utilizing agricultural waste and raw residues, he teaches how to achieve high yield and maximum profit with <em>minimum space, minimal water, and shortest turnaround time</em>, eliminating middlemen through direct sales.",
    teachingP3: "His signature teaching methodology centers on simple, easily graspable pedagogy combined with comprehensive practical execution—where students themselves perform all cultivation stages from scratch. Balancing rich theory with industry-leading hands-on sessions (<strong>Practical Best Classes</strong>), he has successfully transformed 1,000+ students into confident, independent agri-entrepreneurs.",
    teachingStat1Num: "1000+",
    teachingStat1Title: "Students Mentored",
    teachingStat1Sub: "Youth, Farmers, Retired Officers",
    teachingStat2Num: "9+",
    teachingStat2Unit: "Years",
    teachingStat2Title: "Mushroom Cultivation Expertise",
    teachingStat2Sub: "Scientific Organic Research",
    teachingStat3Num: "100%",
    teachingStat3Title: "Practical Immersion",
    teachingStat3Sub: "Hands-on Best Classes",
    highlight1Title: "Practical-First Classes & Theory",
    highlight1Desc: "Comprehensive theory blended with intensive practical exercises where students execute every cultivation step themselves.",
    highlight2Title: "High Profit from Farm Waste",
    highlight2Desc: "Converting agricultural residues into high-yielding mushroom beds with minimal water, space, and capital.",
    highlight3Title: "Low-Cost Shed Construction",
    highlight3Desc: "Practical blueprints to construct simple, traditional, low-investment climate-controlled growing sheds.",
    highlight4Title: "Value Addition & Direct Sales",
    highlight4Desc: "Direct marketing channels and processed mushroom products to secure maximum profit margins without middlemen.",
    teachingSliderLiveBadge: "Student Practical Training Sessions",
    teachingSlideCaption1: "Value-added mushroom products & direct marketing training at RSETI Hinkal, Mysuru",
    teachingSlideCaption2: "Classroom chalk & board session explaining scientific principles of mushroom farming",
    teachingSlideCaption3: "Large group practical workshop on straw substrate preparation from agricultural waste",
    teachingSlideCaption4: "Hands-on table session demonstrating pure spawn inoculation and substrate packing",
    teachingSlideCaption5: "Outdoor practical demonstration on mushroom straw bed management & watering",
    teachingSlideCaption6: "Student-centric interactive classroom guidance and theory session",
    teachingSlideCaption7: "Hands-on outdoor practical workshop on substrate preparation from agri-waste",
    teachingSlideCaption8: "Valedictory graduation batch with 30+ students, farmers & dignitaries",

    // Mushroom Blueprint & Practical Methodology
    methodBadge: "Part IV • Practical Technology & Video Masterclass",
    methodTitle: "Scientific Mushroom Cultivation & Live Blueprint",
    methodSub: "From straw selection to scientific pad & fan evaporative cooling chamber construction — Dr. Santhosh Thimmegowda's complete hands-on protocol.",
    step1Num: "01",
    step1Badge: "Raw Material Selection",
    step1Title: "Selection of Quality Paddy Straw",
    step1Desc: "Choosing disease-free, well-matured, unrotted golden paddy straw. High-quality dry straw ensures rapid mycelial run, zero fungal contamination, and bumper harvest.",
    step2Num: "02",
    step2Badge: "Chopping & Water Soaking",
    step2Title: "Straw Chopping & Water Soaking",
    step2Desc: "Chopping straw into 1–2 inch bits using a chaff cutter machine, followed by soaking in clean water to achieve optimum 65–70% moisture content for bed laying.",
    step3Num: "03",
    step3Badge: "Low-Cost Setup",
    step3Title: "Simple Low-Cost Room Construction",
    step3Desc: "Economical, accessible mushroom room construction using bamboo poles, green shade netting, and gunny cloth to sustain essential coolness and humidity on a shoestring budget.",
    step4Num: "04",
    step4Badge: "Hi-Tech Climate Control",
    step4Title: "Scientific Pad & Fan Climate Chamber",
    step4Desc: "High-tech automated cultivation room fitted with cellulose evaporative cooling pads and heavy-duty exhaust fans, sustaining 22–26°C and 85–90% humidity all year round.",
    krishiChakraBadge: "Zero-Waste Circular Economy",
    krishiChakraTitle: "Mushroom Cultivation Circular Flow: 'ಅಣಬೆ ಬೇಸಾಯ ಕೃಷಿ ಚಕ್ರ'",
    krishiChakraDesc: "The complete 9-stage circular bio-flow: Paddy crop ➔ Straw waste ➔ Mushroom spawning ➔ Mushroom harvest ➔ Direct retail marketing ➔ Value addition ➔ Spent substrate as livestock & poultry feed ➔ Organic waste composting ➔ Vermicompost enriching soil.",
    chakraPoint1: "<strong>1. Paddy Crop & Dry Residual Straw:</strong> Productive collection and utilization of dry paddy straw harvested from agricultural fields.",
    chakraPoint2: "<strong>2. Spawning, Harvesting & Value Addition:</strong> Scientific cultivation and harvesting of organic mushrooms with direct retail via Reliance Fresh and online supply chains.",
    chakraPoint3: "<strong>3. Livestock/Poultry Feed & Vermicompost:</strong> Spent moisture substrate utilized as nutritious feed for sheep and poultry, then re-converted into premium vermicompost returning organic vitality back to the soil!",
    chakraPoint4: "<strong>4. Integrated Zero-Waste Bio-Recycling & Soil Health:</strong> Moving beyond conventional farming under the guidance of agricultural scientists, officers, and ODP organisation, scientifically trained to integrate mushroom, sheep, poultry, apiculture (bees), azolla, and vermicompost under one roof. Value-adding all produce to establish direct consumer markets. Keeping future soil health and human wellness at heart, all farm biomass wastes are segregated from plastics, recycled harmoniously in an eco-friendly bio-cycle, and restored back to mother earth.",
    videoBadge: "Television Broadcast Feature • 10TV Kannada News",
    videoTitle: "10TV News Special Report: Agricultural Revolution by Dr. Santhosh Thimmegowda",
    videoDesc: "Watch the authentic television broadcast documentary featuring Dr. Santhosh Thimmegowda, his family, and their thriving integrated farm in Maradipura, Mandya.",
    pressBadge: "Media Recognition & Press Features",
    pressTitle: "Featured in Leading State Newspapers",
    pressSub: "Ground-level impact and farming excellence covered by Karnataka's premier publications.",
    press1Title: "Prajavani: Scientific Farming, Successful Santhosh",
    press1Desc: "Detailed investigative feature by Ullas U.V. highlighting organic mushroom market demand, multi-cropping, zero-budget farming, and direct retail.",
    press2Title: "Kannada Prabha: District Level Best Farmer Award",
    press2Desc: "Award feature on Santhosh generating lakhs of income on fallow land using waste recycling, drip irrigation, honey, poultry, and mushroom cultivation.",
    press3Title: "Vijayavani: 'Negila Yogi' Youth Farmer's Mushroom Success",
    press3Desc: "Special Digvijaya 24x7 Krishi Mela feature celebrating Santhosh's journey from overcoming adversity to inspiring hundreds across Karnataka.",

    // Life Story (Authentic 6 Chapters)
    lifeBadge: "Part IV • Authentic Biography, Mushroom Innovation & Memoirs",
    lifeTitle: "The Complete Life Story of Dr. Santhosh Thimmegowda",
    lifeSub: "A deeply moving true biography: from humble agrarian beginnings in Maradipura, Mandya, overcoming heartbreak and hardship, to creating a self-sustaining agricultural revolution, empowering thousands of farmers, and earning international doctorate honors.",
    
    ch1Badge: "Chapter I • Birth in Maradipura, Agrarian Roots & Education (1984)",
    ch1Title: "Roots in the Soil: Maradipura, Brahmadevarahalli & Bellur BGS",
    ch1Text1: "I, Santhosh Thimmegowda, was born on 15/05/1984 in the small rural village of Maradipura, Honakere Hobli, Nagamangala Taluk of Mandya District, to my beloved parents, Smt. Boramma and Sri Kuchele Gowda. Raised in a traditional farming family, the soil and the rhythm of rural life were my very first classroom.",
    ch1Text2: "I completed my early schooling at the Government Higher Primary and High School in Brahmadevarahalli with high marks. Eager to advance my knowledge, I subsequently pursued higher education at the revered BGS Educational Institutions in Bellur, Nagamangala Taluk.",
    ch1Quote: "\"Born into a farmer's home, the red soil and the lessons of nature were my first and truest teachers.\"",
    
    ch2Badge: "Chapter II • Tragic Loss of Mother, Family Duty & 5 Years of Traditional Struggle",
    ch2Title: "Heartbreaking Grief, Halting Education & Farming Beside Father",
    ch2Text1: "We were fundamentally a humble farming family striving to make ends meet. While I was pursuing my education, an unimaginable tragedy struck our home: my beloved mother, Smt. Boramma, was fatally bitten by a venomous snake while toiling in our agricultural fields and passed away...",
    ch2Text2: "With three elder sisters and a younger sister dependent on our home, I was compelled to cut short my higher studies due to unavoidable family circumstances. I realized there was only one path forward—like the enduring banyan tree planted by my father, our family had two acres of ancestral land and a single borewell. Under my father's guidance, I immersed myself in conventional traditional farming for five continuous years. While it provided two meals a day, crushing poverty and severe financial hardship persistently shadowed our household.",
    ch2Quote: "\"My mother's memory and the weight of family duty didn't break me; they forged an unyielding resolve to carve out my destiny right from this soil.\"",
    
    ch3Badge: "Chapter III • Scientific Breakthrough — Integrated Multi-Cropping (7-8 Income Streams)",
    ch3Title: "Abandoning Outdated Farming: Scientific Soil-Water Testing & Diverse Abundance",
    ch3Text1: "I realized that if I continued along the traditional path, I would never achieve meaningful progress or overcome poverty. So, I took a decisive step to abandon unscientific methods on our land. Adopting a rigorous scientific approach, I had our soil and water tested, made natural organic methods the cornerstone, and designed an Integrated Multi-Cropping System on our land.",
    ch3Text2: "Operating on the principle of 'Single Expenditure, Simultaneous Timing, and Single Water Utilization', I engineered the plot to yield 7 to 8 diversified, recurring income streams. By intercropping leafy greens, seasonal vegetables, coconut, arecanut, banana, fruit orchards, forestry timber, and medicinal plants, we attained bumper yields and handsome profits. Astonished by this transformation, local farmers and Agriculture Department officers visited our land in large numbers, celebrated our breakthrough, and guided other farmers across the region to adopt this model.",
    ch3Quote: "\"One piece of land, single water expenditure, seven to eight income streams — that is the true transformative magic of integrated organic farming.\"",
    
    ch4Badge: "Chapter IV • Transforming 10 Guntas into a 'Mini Krishi University' & Reliance Direct Retail",
    ch4Title: "Zero-Waste Compost, Viral Global Reach & Direct Retail Disruption",
    ch4Text1: "Seeing that our single change had illuminated a path for hundreds of struggling farmers, my passion to revolutionize agriculture burned even brighter. Drawing upon specialized advice and scientific training from agricultural officers and Agriculture University scientists, I transformed just 10 Guntas (0.25 acre) of barren wasteland into a vibrant bio-enterprise: mushroom cultivation, country poultry farming, sheep and goat rearing, apiculture (beekeeping), azolla cultivation, and dairy farming (cows and buffaloes).",
    ch4Text2: "We converted every shred of agricultural waste naturally into premium quality organic compost without harming the environment, recycling it back into our land. Eliminating exploitative middlemen, I initiated direct retail marketing for all our produce—greens, vegetables, mushrooms, poultry, sheep, pure honey, azolla, and compost—with Reliance Retail Limited and through online direct-to-consumer channels. Production costs plummeted, each sub-enterprise nurtured the other symbiotically, and income surged exponentially. When I shared video glimpses of our work on social media, they went viral across Karnataka, other states, and foreign countries. Visitors flocked to our fields to learn and replicate our methods, turning our modest holding into a living 'Mini Agricultural University'.",
    ch4Quote: "\"In true nature-inspired farming, waste does not exist; the byproduct of one life is the life-giving nourishment of another.\"",
    
    ch5Badge: "Chapter V • National RUDSETI Faculty, Statewide Acclaim & German University Doctorate",
    ch5Title: "Empowering Thousands Across Karnataka & Conferment of International Doctorate",
    ch5Text1: "Witnessing our consistent grassroots impact, agricultural scientists, department officials, and the Organization for the Development of People (ODP) recognized our work and invited me to become a Master Resource Person to train farming communities. Accredited as a Certified Lecturer at the National Academy of RUDSETI, for over three years I have traversed Karnataka training thousands of educated unemployed youth (men and women), farmers, and retired officials in mushroom cultivation and integrated farming.",
    ch5Text2: "On this sacred ancestral soil ('ನನ್ನ ಪುಣ್ಯಭೂಮಿ'), my father Sri Kuchele Gowda, my wife, and my daughter work joyfully together, experiencing profound happiness and dignity in agricultural toil. In recognition of these achievements, the Department of Agriculture and Agricultural Universities conferred Taluk, District, and State-Level Krishi Sadhaka Awards. We were felicitated on hundreds of distinguished stages, culminating in a German University conferring upon me an Honorary Doctorate Degree in Agriculture.",
    ch5Quote: "\"True education is giving someone the practical skill and confidence to stand on their own feet and feed their family with dignity; the German Doctorate belongs to every hardworking farmer.\"",
    
    ch6Badge: "Chapter VI • Creative Arts, Wholesome Celebrations & Selfless Philanthropy",
    ch6Title: "Ragi Cake Milestones, Vegetable Art, Tree Plantation & Direct Farmer Relief",
    ch6Text1: "Alongside farming, numerous creative and philanthropic expressions have blossomed in my life. I handcraft elegant floral bouquets using locally available wildflowers and leaves. For our birthdays and family anniversaries, we shun chemical bakery cakes and celebrate by making nutritious Ragi Cakes, fresh Watermelon Fruit Cakes, and Kesari Bath Cakes! Creating intricate portraits and artwork using vegetables, fruits, and grains is another cherished passion. At local conferences and cultural functions, we honor visiting dignitaries with decorated 'Vegetable Honor Baskets' composed of fresh farm harvest instead of artificial mementos.",
    ch6Text2: "Guided by the philosophy 'A Tree for Every Joyous Celebration' (ಸಂತೋಷ ಸಂಭ್ರಮಕ್ಕೊಂದು ಗಿಡ), we plant and nurture saplings in public spaces on our birthdays and commemorative occasions. We participate in environmental cleanliness drives, mobilize farmers to attend beneficial agricultural seminars, and visit rural schools during spare hours with headmasters' permission to spark agricultural curiosity and respect among school children. We organize educational exposure tours for farmers once or twice a year. Crucially, I conduct free training for distressed farmers and personally fund and distribute high-grade seeds and essential farm implements to struggling families, extending an open hand of support to anyone facing hardship.",
    ch6Quote: "\"A Tree for Every Joy — Wiping the tears of a distressed farmer and giving back green life to mother nature is the highest fulfillment of a human life.\"",

    // Other Activities & Leisure Time
    activitiesBadge: "Part V • Other Activities & Leisure Time",
    activitiesTitle: "Heritage Preservation, Harvest Art, Farmer Unity & Travel",
    activitiesSub: "A step-by-step glimpse into Dr. Thimmegowda's agrarian antiquities, creative harvest art, FPO leadership, green initiatives, farmer welfare, and annual travels.",
    act1Badge: "Heritage & Antiquities Preservation",
    act1Title: "Collection & Exhibition of 150-Year-Old Wooden Bullock Cart",
    act1Desc: "Dr. Santhosh has a deep passion for discovering and preserving ancient agricultural relics of our ancestors. He meticulously restored a 150-year-old historic wooden bullock cart, pairing it with pure white Hallikar draught bullocks. He exhibited it at mega state gatherings, including the historic 87th All India Kannada Sahitya Sammelana in Mandya, reviving the grandeur of Karnataka's rural agrarian legacy.",
    act1HlTitle: "Times of India & Statewide Media Acclaim",
    act1HlDesc: "Featured extensively in national dailies under 'Farmer & 150-Yr-Old Bullock Cart' at the 87th Sahitya Sammelana.",
    act1ImgCap1: "Dr. Santhosh proudly driving the 150-year-old historic wooden cart with native Hallikar bullocks.",
    act1Thumb1: "87th Sahitya Sammelana",
    act1Thumb2: "The Times of India",
    act1VideoTitle: "Live Video Chronicles of the 150-Year-Old Historic Bullock Cart",
    act1Video1Tag: "Village Procession Video",
    act1Video1Desc: "Dr. Santhosh, his wife, and daughter traveling joyfully on the 150-year-old decorated wooden cart driven by native Hallikar white oxen.",
    act1Video2Tag: "Sacred Puja Ritual & Highway March",
    act1Video2Desc: "Traditional auspicious puja ceremony and grand highway procession of the historic cart to the 87th Sahitya Sammelana in Mandya.",
    act2Badge: "Creative Harvest Art & Felicitation Baskets",
    act2Title: "Artwork from Fruits, Grains & Vegetables + Felicitation Baskets for Dignitaries",
    act2Desc: "Creating exquisite portraits and artworks using indigenous grains, seeds, pulses, fruits, and fresh farm vegetables is one of Dr. Santhosh's cherished artistic talents. Replacing artificial plastic bouquets and shawls, he pioneered handcrafting artistic 'Vegetable Honor Baskets' ('ಸನ್ಮಾನಿತ ಬುಟ್ಟಿ') arranged from farm-fresh organic produce to felicitate visiting dignitaries and national leaders at public events.",
    act2HlTitle: "Vegetable Carving of Former PM Shri H.D. Deve Gowda",
    act2HlDesc: "Hand-carved lifelike portrait of Former Prime Minister and presentation of organic felicitation basket to Former CM H.D. Kumaraswamy.",
    act2ImgCap1: "Intricate lifelike vegetable carving portrait of Former Prime Minister Shri H.D. Deve Gowda.",
    act2ImgCap2: "Exquisite organic vegetable felicitation basket presented to Former CM Shri H.D. Kumaraswamy.",
    act2ImgCap3: "State Stage Felicitation: Honoring Former Prime Minister Shri H.D. Deve Gowda on stage with Mysore Peta and floral garland.",
    act3Badge: "Farmer Solidarity & FPO Secretary Service",
    act3Title: "Organizing Farmers into FPO Groups & Direct Farm-to-Consumer Marketing",
    act3Desc: "Serving with integrity as the Secretary of Farmer Producer Organizations (FPO), Dr. Thimmegowda has organized small and marginal farmers into empowered producer groups. Eliminating exploitative middlemen entirely, he created direct sales channels with Reliance Retail Limited and consumer platforms, guaranteeing fair remunerative prices and sustainable financial resilience for hundreds of farming families.",
    act3HlTitle: "Integrated Organic Horticulture & Direct Consumer Access",
    act3HlDesc: "Tricolor harvest arrangements, organic papaya plantations, and direct profitable market links for rural growers.",
    act3ImgCap1: "Top: Tricolor national flag crafted from vegetables • Bottom: Dr. Santhosh in his organic papaya farm.",
    act4Badge: "Green Mission & Mandya Farmer Ambassador",
    act4Title: "Gifting Saplings at Gatherings & 'A Tree for Every Celebration' Mission",
    act4Desc: "At any formal meeting, cultural program, or celebration, Dr. Thimmegowda honors guests by gifting live tree saplings instead of ephemeral gifts. Under his personal movement 'A Tree for Every Celebration' (ಸಂತೋಷ ಸಂಭ್ರಮಕ್ಕೊಂದು ಗಿಡ), he plants and personally nurtures trees in public spaces and roadsides on birthdays and anniversaries. Across Karnataka, he serves as a proud goodwill ambassador voicing the interests and innovations of Mandya district farmers.",
    act4Hl1Title: "'A Tree for Every Celebration' Lifelong Care",
    act4Hl1Desc: "A steadfast commitment to not just plant saplings on milestones, but nurture them until they grow into grand trees.",
    act4Hl2Title: "Proud Goodwill Ambassador for Mandya Farmers",
    act4Hl2Desc: "Representing the voice, creativity, and scientific innovations of Mandya farmers at statewide platforms.",
    act5Badge: "Grassroots Relief & Farmer Welfare",
    act5Title: "Guiding Distressed Farmers & Self-Funded Seeds and Equipment Assistance",
    act5Desc: "When farmers face severe crop distress, debt anxiety, or market collapse, Dr. Thimmegowda provides free psychological counseling and scientific guidance. Furthermore, utilizing his own hard-earned savings, he donates certified quality seeds, mushroom cultivation spawn kits, and agricultural implements free of charge to distressed farmers, giving them a second chance to stand independently with pride.",
    act5HlTitle: "Personal Philanthropy to Wipe the Tears of Striving Farmers",
    act5HlDesc: "Providing free training, certified seeds, and essential equipment at his own expense to revive distressed agrarian households.",
    act6Badge: "Annual Study Tours & Family Flight Travel",
    act6Title: "Annual Agricultural Study & Family Flight Tours Across India",
    act6Desc: "To rejuvenate the mind and discover cutting-edge agricultural advancements, Dr. Thimmegowda embarks on annual study tours once or twice a year with his family and fellow farmers. Flying across diverse states, they explore agricultural research stations, historic monuments, and natural wonders—bringing back fresh scientific insights and cherished family memories that revitalize farming zeal.",
    act6HlTitle: "A Farmer's Dreams Flying Beyond Horizons",
    act6HlDesc: "Cherished moments boarding flights with family and fellow farmers, expanding horizons and discovering new agricultural paradigms.",
    act6ImgCap1: "Top: Boarding IndiGo aircraft with family • Bottom: Memorable family moments at airport terminal.",
    gratitudeBadge: "Heartfelt Gratitude • ತುಂಬು ಹೃದಯದ ಧನ್ಯವಾದಗಳು",
    gratitudeTitle: "Deepest Gratitude to Everyone Who Read Our Story & Continues to Support Us",
    gratitudeQuote: "\"Heartfelt gratitude to each one of you who took the time to read our story and understand our agricultural journey, and our deepest thanks to everyone encouraging and standing with us. Thank you 🎉💚 🥰 🙏\"",
    gratitudeSign: "- Dr. Thimmegowda M.K. (Santhosh), Family & Farming Fraternity",
    gratitudeSignSub: "Maradipura, Nagamangala, Mandya District, Karnataka",

    // Connect
    connectBadge: "Academic & Collaborative Exchange",
    connectTitle: "Connect with Dr. Thimmegowda M.K.",
    connectDesc: "Available for keynote lectures, agricultural entrepreneurship workshops, university lectures, ODP/RUDSETI sessions, and collaborative farming consultations.",
    whatsappDirect: "WhatsApp Direct",
    phoneContact: "Phone Contact",
    fieldBaseTitle: "Origin & Field Base",
    fieldBaseDesc: "Maradipura, Nagamangala, Mandya / Karnataka",
    formTitle: "Send Message to Dr. Thimmegowda",
    formSub: "Reach out to discuss training programs, farming consultations, or speaking invitations.",
    labelName: "Your Full Name",
    labelPurpose: "Purpose of Connection",
    opt1: "Agri Univ / ODP / RUDSETI Training Workshop",
    opt2: "Mushroom Farming Consultation",
    opt3: "Academic Lecture / Guest Invitation",
    opt4: "General Agricultural Inquiry",
    labelOrg: "Institution / Village / Organization",
    labelMsg: "Your Message",
    btnSendMsg: "Send Message via WhatsApp",

    // Footer
    footerDesc: "Dr. Thimmegowda M.K. (Santhosh) — Progressive Agri-Entrepreneur, Pioneer Mushroom Farmer, and Faculty at Agriculture Universities, ODP Institution, RUDSETI & Private Institutions from Maradipura, Nagamangala, Mandya.",
    footerNavTitle: "Quick Navigation",
    footerCollabTitle: "Collaborate",
    footerCopy: "© 2026 Dr. Thimmegowda M.K. (Santhosh). All rights reserved.",
    footerDevText: 'Designed & Built by <a href="https://nexgencodify.in" target="_blank" rel="noopener noreferrer" class="nexgen-brand-link">NexGenCodify</a>',
    footerBlessing: "Agriculture is Life • Prosperity Through Scientific Farming"
  },

  kn: {
    brandName: "ಡಾ. ತಿಮ್ಮೇಗೌಡ ಎಂ.ಕೆ. (ಸಂತೋಷ್)",
    brandSub: "ಕೃಷಿ ಉದ್ಯಮಿ • ಕೃಷಿ ವಿವಿ, ಒಡಿಪಿ, ರುಡ್ಸೆಟಿ ಮತ್ತು ಖಾಸಗಿ ಸಂಸ್ಥೆಗಳ ಬೋಧಕರು",
    navIntro: "ಪರಿಚಯ",
    navAchievements: "ಸಾಧನೆಗಳು",
    navTeaching: "ಬೋಧನೆ ಮತ್ತು ತರಬೇತಿ",
    navLifeStory: "ಜೀವನ ಚರಿತ್ರೆ",
    navActivities: "ಇತರೆ ಚಟುವಟಿಕೆಗಳು",
    navConnect: "ಸಂಪರ್ಕಿಸಿ",
    getInTouchBtn: "ಸಂಪರ್ಕಿಸಿ",
    
    // Hero
    heroDevBadge: 'Designed & Built by <a href="https://nexgencodify.in" target="_blank" rel="noopener noreferrer" class="nexgen-brand-link">NexGenCodify</a>',
    heroTag: "✦ ಪ್ರಗತಿಪರ ಕೃಷಿ ಸಂಶೋಧಕರು ಮತ್ತು ಉದ್ಯಮಿ",
    heroName: "ಡಾ. ತಿಮ್ಮೇಗೌಡ <span>ಎಂ.ಕೆ. (ಸಂತೋಷ್)</span>",
    heroRole1: "ರೈತರು (Farmer)",
    heroRole2: "ಅಣಬೆ ಕೃಷಿ ತರಬೇತಿದಾರರು",
    heroRole3: "ರುಡ್‌ಸೆಟ್‌, ಒಡಿಪಿ, ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ ಮತ್ತು ಖಾಸಗಿ ಸಂಸ್ಥೆಗಳ ತರಬೇತಿದಾರರು",
    originTitle: "ಹುಟ್ಟು ಮತ್ತು ಮೂಲ",
    originDetails: "ಹುಟ್ಟಿದ್ದು: 1984, ಮರಡಿಪುರ ಗ್ರಾಮ, ಹೊನಕೆರೆ ಹೋಬಳಿ, ನಾಗಮಂಗಲ ತಾಲೂಕು, ಮಂಡ್ಯ ಜಿಲ್ಲೆ.",
    heroDesc: "ಕಳೆದ ೨೭ ವರ್ಷಗಳಿಂದ ನಿರಂತರವಾಗಿ ಕೃಷಿಯಲ್ಲಿ ತೊಡಗಿಸಿಕೊಂಡು, ವೈಜ್ಞಾನಿಕವಾಗಿ ಹಲವಾರು ಕ್ರಾಂತಿಕಾರಿ ಬದಲಾವಣೆಗಳನ್ನು ತಂದಿರುವ ಅನುಭವಿ ಕೃಷಿಕರು ಮತ್ತು ಅಣಬೆ ಕೃಷಿ ತಜ್ಞರು. ನ್ಯಾಷನಲ್ ಅಕಾಡೆಮಿ ಆಫ್ ರುಡ್‌ಸೆಟ್, ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ ಹಾಗೂ ಒ.ಡಿ.ಪಿ. (ODP) ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಗೌರವಾನ್ವಿತ ತರಬೇತಿದಾರರಾಗಿ ಸಾವಿರಾರು ವಿದ್ಯಾವಂತ ನಿರುದ್ಯೋಗಿ ಯುವಕ-ಯುವತಿಯರಿಗೆ, ಮಹಿಳೆಯರಿಗೆ, ರೈತರಿಗೆ ಮತ್ತು ನಿವೃತ್ತ ಅಧಿಕಾರಿಗಳಿಗೆ ಅಣಬೆ ಬೇಸಾಯ ಹಾಗೂ ವೈಜ್ಞಾನಿಕ ಸಾವಯವ ಕೃಷಿಯಲ್ಲಿ ಯಶಸ್ವಿ ತರಬೇತಿ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ನೀಡಿದ್ದಾರೆ.",
    btnExploreAchievements: "ಸಾಧನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    btnReadLifeStory: "ಸಂಪೂರ್ಣ ಜೀವನ ಚರಿತ್ರೆ ಓದಿ",
    stat1Number: "27+",
    stat1Label: "ವರ್ಷಗಳ ಕೃಷಿ ಅನುಭವ",
    stat2Number: "1000+",
    stat2Label: "ತರಬೇತಿ ಪಡೆದ ವಿದ್ಯಾರ್ಥಿಗಳು",
    stat3Number: "100%",
    stat3Label: "ವೈಜ್ಞಾನಿಕ ಸಾವಯವ ಪದ್ಧತಿ",
    plinthName: "ಡಾ. ತಿಮ್ಮೇಗೌಡ (ಸಂತೋಷ್)",
    plinthTitle: "೨೭ ವರ್ಷಗಳ ಕೃಷಿ ಸಾಧಕರು • ರುಡ್‌ಸೆಟ್‌, ಒಡಿಪಿ ಮತ್ತು ಕೃಷಿ ವಿವಿ ತರಬೇತಿದಾರರು",

    // Achievements & Awards Showcase
    achievementsBadge: "ಭಾಗ ೨ • ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಗೌರವಗಳು",
    achievementsTitle: "ಇವರ ಕೃಷಿ ಚಟುವಟಿಕೆಯನ್ನು ಗುರುತಿಸಿ ಲಭಿಸಿರುವ ಪ್ರಶಸ್ತಿಗಳ ವಿವರ",
    achievementsSub: "ಕೃಷಿ ನಾವೀನ್ಯತೆ ಹಾಗೂ ೨೭ ವರ್ಷಗಳ ಸಾರ್ಥಕ ಸಾಧನೆಗೆ ಸಂದ ಪ್ರತಿಷ್ಠಿತ ಪುರಸ್ಕಾರಗಳು.",
    sliderLiveBadge: "ಸನ್ಮಾನ ಹಾಗೂ ಪ್ರಶಸ್ತಿ ಕ್ಷಣಗಳು",
    sliderIntervalNote: "ಚಿತ್ರಗಳು ಪ್ರತಿ ೬ ಸೆಕೆಂಡಿಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಬದಲಾಗುತ್ತವೆ",
    slideCaption1: "ಡಾಕ್ಟರೇಟ್ ಪದವಿ ಪುರಸ್ಕಾರ ಸಮಾರಂಭ — ಜರ್ಮನ್ ಯುನಿವರ್ಸಿಟಿ & ವಿಶ್ವಸಂಸ್ಥೆ ಸಂಸ್ಥೆ",
    slideCaption2: "ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ ಬೆಂಗಳೂರು — ರಾಜ್ಯಮಟ್ಟದ ಕೃಷಿ ಮೇಳ ಸನ್ಮಾನ",
    slideCaption3: "ರಾಜ್ಯಮಟ್ಟದ ಉದ್ಯಮಿ ಒಕ್ಕಲಿಗ ಪ್ರಶಸ್ತಿ — ಪೂಜ್ಯ ಸ್ವಾಮೀಜಿ ಅವರಿಂದ ಪ್ರದಾನ",
    slideCaption4: "ರಾಜ್ಯಮಟ್ಟದ ವಿಜಯ ರೈತ ಪ್ರಶಸ್ತಿ — ವಿಜಯವಾಣಿ ಪತ್ರಿಕೆ",
    slideCaption5: "ಕೆನರಾ ಬ್ಯಾಂಕ್ ಗ್ರಾಮೀಣ ಸ್ವ-ಉದ್ಯೋಗ ಸಂಸ್ಥೆ (RSETI) ಹಾಸನ — ಸನ್ಮಾನ",
    slideCaption6: "ಕೆನರಾ ಬ್ಯಾಂಕ್ ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ ಟ್ರಸ್ಟ್ (CBRSETI) ಸನ್ಮಾನ",
    slideCaption7: "ಭೂಸಿರಿ ಡೆವಲಪ್‌ಮೆಂಟ್ ಫೌಂಡೇಶನ್ — ಕೃಷಿ ಪುರಸ್ಕಾರ ಸನ್ಮಾನ",
    slideCaption8: "ಎಫ್.ಸಿ. ಕೃಷಿ ತಂತ್ರಜ್ಞಾನ ವಲಯ — ರೈತ ಮುಖಂಡರೊಂದಿಗೆ ಗೌರವ",
    slideCaption9: "ಪೂಜ್ಯ ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ ನಿರ್ಮಲಾನಂದನಾಥ ಮಹಾಸ್ವಾಮೀಜಿ ಅವರಿಂದ ವೇದಿಕೆ ಸನ್ಮಾನ ಹಾಗೂ ಹಣ್ಣು-ತರಕಾರಿ ಬುಟ್ಟಿ ಸಮರ್ಪಣೆ",
    inspirationTitle: "ಸಾವಿರಾರು ರೈತರಿಗೆ ಸ್ಪೂರ್ತಿಯ ಚಿಲುಮೆ",
    inspirationDesc: "ತಮ್ಮ ೨೭ ವರ್ಷಗಳ ಸತತ ಕೃಷಿ ನಾವೀನ್ಯತೆ ಹಾಗೂ ನಿಸ್ವಾರ್ಥ ತರಬೇತಿಯ ಮೂಲಕ ಡಾ. ತಿಮ್ಮೇಗೌಡ (ಸಂತೋಷ್) ಅವರು ಸಮಸ್ತ ಕೃಷಿ ಸಮುದಾಯಕ್ಕೆ ಆದರ್ಶಪ್ರಾಯರಾಗಿದ್ದಾರೆ.",
    award1Title: "ಡಾಕ್ಟರೇಟ್ ಪದವಿ ಪುರಸ್ಕಾರ",
    award1Org: "ಜರ್ಮನ್ ಯುನಿವರ್ಸಿಟಿ",
    award1Desc: "ಕೃಷಿ ವಿಜ್ಞಾನ ಮತ್ತು ಸಾವಯವ ನಾವೀನ್ಯತೆಯಲ್ಲಿನ ಅಪ್ರತಿಮ ಸೇವೆಗಾಗಿ ಗೌರವ ಡಾಕ್ಟರೇಟ್ ಪದವಿ ಪುರಸ್ಕಾರ.",
    award2Title: "ಜಿಲ್ಲಾ ಮಟ್ಟದ ಪ್ರಗತಿಪರ ರೈತ ಪ್ರಶಸ್ತಿ",
    award2Org: "GKVK ಬೆಂಗಳೂರು",
    award2Desc: "ಗಾಂಧಿ ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರ (GKVK) ಬೆಂಗಳೂರು ವತಿಯಿಂದ ಪ್ರದಾನ ಮಾಡಲಾದ ಪ್ರಶಸ್ತಿ.",
    award3Title: "ಜಿಲ್ಲಾ ಮಟ್ಟದ ಶ್ರೇಷ್ಠ ಕೃಷಿಕ ಪ್ರಶಸ್ತಿ",
    award3Org: "ಮಂಡ್ಯ ಜಿಲ್ಲೆ",
    award3Desc: "ಮಂಡ್ಯ ಜಿಲ್ಲಾ ಮಟ್ಟದಲ್ಲಿ ಕೃಷಿ ಕ್ಷೇತ್ರಕ್ಕೆ ನೀಡಿದ ಮಹೋನ್ನತ ಕೊಡುಗೆಗಾಗಿ ಶ್ರೇಷ್ಠ ಕೃಷಿಕ ಗೌರವ.",
    award4Title: "ಜಿಲ್ಲಾ ಮಟ್ಟದ ಸಾವಯವ ಕೃಷಿಕ ಪ್ರಶಸ್ತಿ",
    award4Org: "ಮೈಸೂರು ಜಿಲ್ಲೆ",
    award4Desc: "ರಾಸಾಯನಿಕ ಮುಕ್ತ ನೈಸರ್ಗಿಕ ಕೃಷಿ ಮತ್ತು ಸಾವಯವ ತಂತ್ರಜ್ಞಾನಕ್ಕಾಗಿ ಲಭಿಸಿದ ಪುರಸ್ಕಾರ.",
    award5Title: "ರಾಜ್ಯಮಟ್ಟದ ಉದ್ಯಮಿ ಒಕ್ಕಲಿಗ ಪ್ರಶಸ್ತಿ",
    award5Org: "ಬೆಂಗಳೂರು",
    award5Desc: "ಕರ್ನಾಟಕ ರಾಜ್ಯಮಟ್ಟದ ಪ್ರತಿಷ್ಠಿತ ಸಮಾರಂಭದಲ್ಲಿ ಪ್ರದಾನ ಮಾಡಲಾದ ಉದ್ಯಮಿ ಒಕ್ಕಲಿಗ ಗೌರವ.",
    award6Title: "ರಾಜ್ಯಮಟ್ಟದ ವಿಜಯ ರೈತ ಪ್ರಶಸ್ತಿ",
    award6Org: "ವಿಜಯವಾಣಿ ಪತ್ರಿಕೆ, ಮೈಸೂರು",
    award6Desc: "ಪ್ರಮುಖ ದಿನಪತ್ರಿಕೆ 'ವಿಜಯವಾಣಿ' ವತಿಯಿಂದ ರಾಜ್ಯಮಟ್ಟದಲ್ಲಿ ನೀಡಲಾದ ವಿಜಯ ರೈತ ಪುರಸ್ಕಾರ.",
    award7Title: "ರಾಜ್ಯಮಟ್ಟದ ಸಾವಯವ ಕೃಷಿಕ ಪ್ರಶಸ್ತಿ",
    award7Org: "ಬೆಂಗಳೂರು",
    award7Desc: "ಶೂನ್ಯ ರಾಸಾಯನಿಕ ಸಾವಯವ ಕೃಷಿ ಮಾದರಿಗಾಗಿ ರಾಜ್ಯಮಟ್ಟದ ಗೌರವ ಪ್ರಶಸ್ತಿ.",
    award8Title: "ಎಕ್ಸಲೆಂಟ್ ಅವಾರ್ಡ್ (Excellence Award)",
    award8Org: "ನ್ಯಾಷನಲ್ ರೋಟರಿ ಕ್ಲಬ್",
    award8Desc: "ನ್ಯಾಷನಲ್ ರೋಟರಿ ಕ್ಲಬ್ ವತಿಯಿಂದ ಗ್ರಾಮೀಣ ಹಾಗೂ ಕೃಷಿ ಸಮುದಾಯ ಸೇವೆಗಾಗಿ ಪ್ರದಾನ ಮಾಡಲಾದ ಉತ್ಕೃಷ್ಟ ಪ್ರಶಸ್ತಿ.",
    award9Title: "87ನೇ ಅಖಿಲ ಭಾರತ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನದಲ್ಲಿ ಸನ್ಮಾನ",
    award9Org: "ಮಂಡ್ಯ",
    award9Desc: "ಐತಿಹಾಸಿಕ 87ನೇ ಅಖಿಲ ಭಾರತ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನದ ವೇದಿಕೆಯಲ್ಲಿ ವಿಶೇಷ ಗೌರವ ಸನ್ಮಾನ.",
    award10Title: "ಸೂಪರ್ ದಂಪತಿ ಅವಾರ್ಡ್",
    award10Org: "ಕಲರ್ ಸೂಪರ್ ಟಿವಿ ವಾಹಿನಿ",
    award10Desc: "ಕಲರ್ ಸೂಪರ್ ದೂರದರ್ಶನ ವಾಹಿನಿಯ ವತಿಯಿಂದ ಪ್ರದಾನ ಮಾಡಲಾದ ಗೌರವ ಪುರಸ್ಕಾರ.",
    award11Title: "ವಿ ಕೆ ಸೂಪರ್ ಸ್ಟಾರ್ ರೈತ ಪ್ರಶಸ್ತಿ",
    award11Org: "Superstar Raita",
    award11Desc: "ಕೃಷಿಯಲ್ಲಿನ ಸಾಧನೆ ಹಾಗೂ ನಾಯಕತ್ವವನ್ನು ಗುರುತಿಸಿ ಲಭಿಸಿದ ಸೂಪರ್ ಸ್ಟಾರ್ ರೈತ ಬಿರುದು.",
    award12Title: "ಮಾಡ್ರನ್ ರೈತ ಪ್ರಶಸ್ತಿ",
    award12Org: "Modern Farmer Award",
    award12Desc: "ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನ, ಅಣಬೆ ಕೃಷಿ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ವಿಧಾನಗಳನ್ನು ಅಳವಡಿಸಿಕೊಂಡಿದ್ದಕ್ಕಾಗಿ ಸನ್ಮಾನ.",
    award13Title: "ಯುವ ರೈತರತ್ನ ಪ್ರಶಸ್ತಿ",
    award13Org: "Yuva Raita Ratna",
    award13Desc: "ಯುವ ಪೀಳಿಗೆಗೆ ಕೃಷಿಯಲ್ಲಿ ದಾರಿದೀಪವಾಗಿ ನಿಂತಿದ್ದಕ್ಕಾಗಿ ಪ್ರದಾನ ಮಾಡಲಾದ ಯುವ ರೈತರತ್ನ ಪ್ರಶಸ್ತಿ.",
    award14Title: "ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ ಬೆಂಗಳೂರು ವಜ್ರ ಮಹೋತ್ಸವ ಸನ್ಮಾನ",
    award14Org: "GKVK, UAS Bangalore",
    award14Desc: "ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ ಬೆಂಗಳೂರಿನ ಐತಿಹಾಸಿಕ ವಜ್ರ ಮಹೋತ್ಸವ ಸಮಾರಂಭದಲ್ಲಿ ಲಭಿಸಿದ ಕೃಷಿ ಸನ್ಮಾನ.",
    award15Title: "ಕಾಯಕ ಶ್ರೀ ಪ್ರಶಸ್ತಿ",
    award15Org: "ಕಲಾಮಂದಿರ ಮಂಡ್ಯ • ಹರ್ಷ ಸಮಾಜ ಸೇವಾ ಫೌಂಡೇಶನ್",
    award15Desc: "ಸಮಾಜ ಸೇವೆ ಹಾಗೂ ಕೃಷಿ ಕ್ಷೇತ್ರದಲ್ಲಿನ ನಿಸ್ವಾರ್ಥ ಶ್ರಮ ಮತ್ತು ರೈತ ಸಮುದಾಯದ ಏಳಿಗೆಗಾಗಿ ಮಂಡ್ಯದ ಕಲಾಮಂದಿರದಲ್ಲಿ ಪ್ರದಾನ ಮಾಡಲಾದ ಕಾಯಕ ಶ್ರೀ ಪ್ರಶಸ್ತಿ.",
    award16Title: "ಕರುನಾಡ ಚೇತನ ಪ್ರಶಸ್ತಿ",
    award16Org: "ಸ್ಪೂರ್ತಿ ಕಲಾ ಟ್ರಸ್ಟ್ ಬೆಂಗಳೂರು",
    award16Desc: "ಕರ್ನಾಟಕದ ಕೃಷಿ ಮತ್ತು ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿಗೆ ನೀಡಿದ ಅನನ್ಯ ಕೊಡುಗೆ ಹಾಗೂ ರೈತರ ಸಬಲೀಕರಣಕ್ಕಾಗಿ ಸಂದ ಗೌರವ.",
    extraHonorsTitle: "ಹಾಗೂ ಹತ್ತು ಹಲವು ಸಂಘ ಸಂಸ್ಥೆಗಳ ಸಭೆ ಸಮಾರಂಭಗಳಲ್ಲಿ ಗೌರವ ಸನ್ಮಾನ",
    extraHonorsDesc: "ರಾಜ್ಯಾದ್ಯಂತ ನೂರಾರು ರೈತ ಸಂಘಟನೆಗಳು, ಶೈಕ್ಷಣಿಕ ಪೀಠಗಳು ಹಾಗೂ ಸಾಮಾಜಿಕ ಟ್ರಸ್ಟ್‌ಗಳು ಡಾ. ತಿಮ್ಮೇಗೌಡರ ಕೃಷಿ ಸೇವೆಯನ್ನು ಮುಕ್ತಕಂಠದಿಂದ ಶ್ಲಾಘಿಸಿ ಸನ್ಮಾನಿಸಿವೆ.",
    pillTag1: "ಉದ್ಯಮಿ ಒಕ್ಕಲಿಗ",
    pillTag2: "ರಾಜ್ಯ ಮಟ್ಟದ ಪ್ರಗತಿಪರ ರೈತ ಪ್ರಶಸ್ತಿ",
    pillTag3: "ರಾಜ್ಯಮಟ್ಟದ ಸಾವಯವ ರೈತ ಪ್ರಶಸ್ತಿ",

    // Teaching
    teachingBadge: "ಭಾಗ ೩ • ಶೈಕ್ಷಣಿಕ ಸೇವೆ ಮತ್ತು ಬೋಧನೆ",
    teachingTitle: "ಅವರ ಬೋಧನಾ ಸಾಧನೆಗಳು ಮತ್ತು ಸಬಲೀಕರಣ",
    teachingSub: "ಪ್ರಯೋಗಾಲಯದ ವಿಜ್ಞಾನವನ್ನು ಯುವಕರು, ಮಹಿಳೆಯರು ಮತ್ತು ರೈತರಿಗೆ ತಲುಪಿಸಿ, ಸ್ವಾವಲಂಬಿ ಬದುಕಿಗೆ ದಾರಿ ತೋರಿದ ಶ್ರೇಷ್ಠ ಗುರು.",
    teachingExpertBadge: "ಅಣಬೆ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ಸಮಗ್ರ ಸಾವಯವ ಕೃಷಿ ತಜ್ಞರು ಹಾಗೂ ಶ್ರೇಷ್ಠ ಮಾರ್ಗದರ್ಶಕರು",
    teachingMainHeading: "ರಾಜ್ಯಾದ್ಯಂತ ೧೦೦೦+ ನಿರುದ್ಯೋಗಿ ಯುವಕ-ಯುವತಿಯರು, ರೈತರು & ಅಧಿಕಾರಿಗಳಿಗೆ ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ",
    teachingLead: "ಇವರು <strong>೯ ವರ್ಷಗಳಿಂದ ಅಣಬೆ ಬೇಸಾಯ</strong> ಮಾಡುವುದರ ಜೊತೆಗೆ, <strong>ನ್ಯಾಷನಲ್ ಅಕಾಡೆಮಿ ಆಫ್ ರುಡ್‌ಸೆಟ್ (RUDSETI)</strong> ನಲ್ಲಿ ಮಾನ್ಯತೆ ಪಡೆದು, ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯಗಳಲ್ಲಿ ಹಾಗೂ ಓ.ಡಿ.ಪಿ. (ODP) ಸಂಸ್ಥೆಯಲ್ಲಿ ರಾಜ್ಯಾದ್ಯಂತ ಸಾವಿರಾರು ವಿದ್ಯಾವಂತ ನಿರುದ್ಯೋಗಿ ಯುವಕ ಯುವತಿಯರಿಗೆ, ರೈತರಿಗೆ ಮತ್ತು ನಿವೃತ್ತ ಅಧಿಕಾರಿಗಳಿಗೆ ಅಣಬೆ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ಸಮಗ್ರ ಸಾವಯವ ಕೃಷಿ ಕುರಿತು ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶನ ನೀಡಿದ್ದಾರೆ.",
    teachingP2: "ಉತ್ಪನ್ನಗಳ <strong>ಮೌಲ್ಯವರ್ಧನೆ (Value Addition)</strong> ಹಾಗೂ <strong>ನೇರ ಮಾರುಕಟ್ಟೆ (Direct Marketing)</strong> ಬಗ್ಗೆ ಸ್ವತಃ ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿಯನ್ನು ನೀಡಿ ಅವರ ಬಾಳಿಗೆ ದಾರಿದೀಪವಾಗಿದ್ದಾರೆ. ಕೃಷಿ ಮೂಲಗಳಿಂದ ಬರುವ ತ್ಯಾಜ್ಯ ಕಚ್ಚಾ ವಸ್ತುಗಳ ಸಹಾಯದಿಂದ <em>ಕಡಿಮೆ ಜಾಗ, ಕಡಿಮೆ ನೀರು, ಕಡಿಮೆ ಸಮಯದಲ್ಲಿ</em> ಹೆಚ್ಚು ಇಳುವರಿಯನ್ನು ತೆಗೆದು ನೇರವಾಗಿ ಮಾರುಕಟ್ಟೆ ಮಾಡಿ ಅಧಿಕ ಲಾಭವನ್ನು ಗಳಿಸುವ ರಹಸ್ಯವನ್ನು ಕಲಿಸಿಕೊಡುತ್ತಿದ್ದಾರೆ.",
    teachingP3: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸರಳವಾಗಿ ಅರ್ಥವಾಗುವ ಬೋಧನೆ ಮತ್ತು ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಪ್ರಾಯೋಗಿಕವಾಗಿ ಅವರಿಂದಲೇ ಎಲ್ಲಾ ಬೇಸಾಯ ಕಾರ್ಯ ಚಟುವಟಿಕೆಗಳನ್ನು ಸರಳವಾಗಿ ಮಾಡಿಸುವುದು ಇವರ ಬೋಧನೆಯ ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯ. ಸೈದ್ಧಾಂತಿಕ (Theory) ಬೋಧನೆಯೊಂದಿಗೆ ಅಪಾರ ಪ್ರಮಾಣದ ಪ್ರಾಕ್ಟಿಕಲ್ (Practical Best Classes) ತರಗತಿಗಳನ್ನು ನಡೆಸಿ, ೧೦೦೦ಕ್ಕೂ ಹೆಚ್ಚು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸ್ವಯಂ ಉದ್ಯೋಗದ ಆತ್ಮವಿಶ್ವಾಸ ತುಂಬಿದ್ದಾರೆ.",
    teachingStat1Num: "1000+",
    teachingStat1Title: "ತರಬೇತಿ ಪಡೆದ ವಿದ್ಯಾರ್ಥಿಗಳು",
    teachingStat1Sub: "ಯುವಕರು, ರೈತರು, ನಿವೃತ್ತ ಅಧಿಕಾರಿಗಳು",
    teachingStat2Num: "9+",
    teachingStat2Unit: "ವರ್ಷ",
    teachingStat2Title: "ಅಣಬೆ ಕೃಷಿ ಪರಿಣತಿ",
    teachingStat2Sub: "ವೈಜ್ಞಾನಿಕ ಸಾವಯವ ಸಂಶೋಧನೆ",
    teachingStat3Num: "100%",
    teachingStat3Title: "ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ",
    teachingStat3Sub: "ಪ್ರಾಕ್ಟಿಕಲ್ ಬೆಸ್ಟ್ ಕ್ಲಾಸ್‌ಗಳು",
    highlight1Title: "ಪ್ರಾಕ್ಟಿಕಲ್ ಬೆಸ್ಟ್ ಕ್ಲಾಸ್ & ಸಿದ್ಧಾಂತ",
    highlight1Desc: "ಥಿಯರಿ ಜೊತೆಗೆ ವಿದ್ಯಾರ್ಥಿಗಳ ಕೈಯಿಂದಲೇ ಬೇಸಾಯದ ಪ್ರತಿಯೊಂದು ಹಂತವನ್ನು ಮಾಡಿಸಿ ಪರಿಪೂರ್ಣ ಕೌಶಲ್ಯ ನೀಡಲಾಗುತ್ತದೆ.",
    highlight2Title: "ಕೃಷಿ ತ್ಯಾಜ್ಯದಿಂದ ಅಧಿಕ ಲಾಭ",
    highlight2Desc: "ಕೃಷಿ ತ್ಯಾಜ್ಯ ಕಚ್ಚಾ ವಸ್ತುಗಳ ಬಳಕೆಯಿಂದ ಕಡಿಮೆ ಜಾಗ, ಕಡಿಮೆ ನೀರು, ಕಡಿಮೆ ಸಮಯದಲ್ಲಿ ಗರಿಷ್ಠ ಇಳುವರಿ ಮತ್ತು ಲಾಭ.",
    highlight3Title: "ಕಡಿಮೆ ವೆಚ್ಚದ ಕೊಠಡಿ ನಿರ್ಮಾಣ",
    highlight3Desc: "ಸರಳ ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕವಾಗಿ ಅಣಬೆ ಬೇಸಾಯಕ್ಕೆ ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ ನಿರ್ಮಿಸಿಕೊಳ್ಳಬಹುದಾದ ಕೊಠಡಿಗಳ ತಂತ್ರಜ್ಞಾನ.",
    highlight4Title: "ಮೌಲ್ಯವರ್ಧನೆ & ನೇರ ಮಾರುಕಟ್ಟೆ",
    highlight4Desc: "ಅಣಬೆ ಉತ್ಪನ್ನಗಳ ಪ್ಯಾಕಿಂಗ್, ಮೌಲ್ಯವರ್ಧನೆ ಮತ್ತು ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ನೇರವಾಗಿ ಗ್ರಾಹಕರಿಗೆ ಮಾರಿ ಅಧಿಕ ಲಾಭ ಗಳಿಸುವುದು.",
    teachingSliderLiveBadge: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರಾಯೋಗಿಕ ಬೋಧನೆ",
    teachingSlideCaption1: "ಮೈಸೂರಿನ ಹಿಂಕಲ್ ರುಡ್‌ಸೆಟ್‌ (RSETI) ನಲ್ಲಿ ಮೌಲ್ಯವರ್ಧಿತ ಅಣಬೆ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ನೇರ ಮಾರುಕಟ್ಟೆ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ",
    teachingSlideCaption2: "ತರಗತಿಯಲ್ಲಿ ಕಪ್ಪುಹಲಗೆಯ ಮೂಲಕ ಅಣಬೆ ಬೇಸಾಯದ ವೈಜ್ಞಾನಿಕ ತತ್ತ್ವಗಳ ಬೋಧನೆ",
    teachingSlideCaption3: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಹುಲ್ಲು ಹಾಗೂ ಕೃಷಿ ತ್ಯಾಜ್ಯದಿಂದ ಅಣಬೆ ಬೆಡ್ ತಯಾರಿಸುವ ಸಾಮೂಹಿಕ ಪ್ರಾಯೋಗಿಕ ಕಾರ್ಯಾಗಾರ",
    teachingSlideCaption4: "ಮೇಜಿನ ಮೇಲೆ ಅಣಬೆ ಬೀಜ ಬಿತ್ತನೆ ಹಾಗೂ ಕವಕಜಾಲ ಸಂವರ್ಧನೆಯ ನೇರ ತರಬೇತಿ",
    teachingSlideCaption5: "ಹೊರಾಂಗಣದಲ್ಲಿ ಸಿದ್ಧಪಡಿಸಿದ ಅಣಬೆ ಬೆಡ್‌ಗಳ ನಿರ್ವಹಣೆ ಹಾಗೂ ನೀರುಣಿಸುವ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ",
    teachingSlideCaption6: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸರಳವಾಗಿ ಅರ್ಥವಾಗುವ ಬೋಧನೆ ಮತ್ತು ಸೈದ್ಧಾಂತಿಕ-ಪ್ರಾಯೋಗಿಕ ಸಂವಾದ",
    teachingSlideCaption7: "ಕೃಷಿ ತ್ಯಾಜ್ಯ ಕಚ್ಚಾ ವಸ್ತುಗಳಿಂದ ಅಣಬೆ ಬೆಡ್ ತಯಾರಿಸುವ ನೇರ ಪ್ರಾಕ್ಟಿಕಲ್ ತರಬೇತಿ",
    teachingSlideCaption8: "೩೦ಕ್ಕೂ ಹೆಚ್ಚು ವಿದ್ಯಾವಂತ ಯುವಕರು, ರೈತರು ಹಾಗೂ ಅಧಿಕಾರಿಗಳೊಂದಿಗೆ ಯಶಸ್ವಿ ತರಬೇತಿ ಸಮಾರೋಪ",

    // Mushroom Blueprint & Practical Methodology
    methodBadge: "ಭಾಗ ೪ • ಪ್ರಾಯೋಗಿಕ ತಂತ್ರಜ್ಞಾನ & ವಿಡಿಯೋ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ",
    methodTitle: "ವೈಜ್ಞಾನಿಕ ಅಣಬೆ ಕೃಷಿ ವಿಧಾನ & ಲೈವ್ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ",
    methodSub: "ಹುಲ್ಲಿನ ಆಯ್ಕೆಯಿಂದ ಅತ್ಯಾಧುನಿಕ ಪ್ಯಾಡ್ & ಫ್ಯಾನ್ ಕೊಠಡಿ ನಿರ್ಮಾಣದವರೆಗೆ — ಡಾ. ಸಂತೋಷ್ ತಿಮ್ಮೇಗೌಡರ ಸಮಗ್ರ ಪ್ರಾಯೋಗಿಕ ಸೂತ್ರ.",
    step1Num: "೦೧",
    step1Badge: "ಕಚ್ಚಾ ಸಾಮಗ್ರಿ ಆಯ್ಕೆ",
    step1Title: "ಹುಲ್ಲಿನ ಆಯ್ಕೆ",
    step1Desc: "ರೋಗರಹಿತ, ಉತ್ತಮವಾಗಿ ಬಲಿತ, ಶುದ್ಧ ಹೊಂಬಣ್ಣದ ಒಣ ಭತ್ತದ ಹುಲ್ಲಿನ ಆಯ್ಕೆ. ಅಣಬೆಯ ಉತ್ತಮ ಕವಕಜಾಲ ಬೆಳವಣಿಗೆಗೆ ಸ್ವಚ್ಛ ಮತ್ತು ಶಿಲೀಂಧ್ರ ಮುಕ್ತ ಹುಲ್ಲು ಅತ್ಯಗತ್ಯ.",
    step2Num: "೦೨",
    step2Badge: "ಕತ್ತರಿಸುವುದು ಮತ್ತು ನೆನೆಸುವುದು",
    step2Title: "ಹುಲ್ಲನ್ನು ಚಿಕ್ಕ ಚಿಕ್ಕದಾಗಿ ಕತ್ತರಿಸಿ ನೀರಿನಲ್ಲಿ ನೆನೆಸುವುದು",
    step2Desc: "ಯಂತ್ರದ ಮೂಲಕ ಹುಲ್ಲನ್ನು ೧ ರಿಂದ ೨ ಇಂಚು ಸಣ್ಣದಾಗಿ ಕತ್ತರಿಸಿ, ನಂತರ ಶುದ್ಧ ನೀರಿನಲ್ಲಿ ನೆನೆಸಿ, ಹದವಾದ ತೇವಾಂಶ ಕಾಪಾಡಿಕೊಂಡು ಅಣಬೆ ಬೆಡ್‌ಗಳಿಗೆ ಸಿದ್ಧಪಡಿಸುವುದು.",
    step3Num: "೦೩",
    step3Badge: "ಕಡಿಮೆ ವೆಚ್ಚದ ಮಾದರಿ",
    step3Title: "ಸರಳ ಕೊಠಡಿ ನಿರ್ಮಾಣ ಮಾದರಿ",
    step3Desc: "ಕಡಿಮೆ ಬಂಡವಾಳದಲ್ಲಿ ಸ್ಥಳೀಯ ಬಿದಿರು, ಕಂಬಗಳು, ಗ್ರೀನ್ ಶೇಡ್ ನೆಟ್ ಮತ್ತು ಗೋಣಿ ಚೀಲಗಳನ್ನು ಬಳಸಿ ತೇವಾಂಶ ಮತ್ತು ತಂಪು ವಾತಾವರಣ ಕಾಪಾಡುವ ಸರಳ ಕೊಠಡಿ ನಿರ್ಮಾಣ.",
    step4Num: "೦೪",
    step4Badge: "ಹೈಟೆಕ್ ತಂತ್ರಜ್ಞಾನ",
    step4Title: "ವೈಜ್ಞಾನಿಕ ಪ್ಯಾಡ್ & ಫ್ಯಾನ್ ಕೊಠಡಿ ನಿರ್ಮಾಣ",
    step4Desc: "ಸೆಲ್ಯುಲೋಸ್ ಕೂಲಿಂಗ್ ಪ್ಯಾಡ್ ಮತ್ತು ಹೆವಿ ಎಕ್ಸಾಸ್ಟ್ ಫ್ಯಾನ್‌ಗಳನ್ನು ಅಳವಡಿಸಿ, ತಾಪಮಾನ (೨೨-೨೬°C) ಮತ್ತು ಆರ್ದ್ರತೆ (೮೫-೯೦%) ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಿಯಂತ್ರಿಸುವ ಹೈಟೆಕ್ ಕೊಠಡಿ ನಿರ್ಮಾಣ.",
    krishiChakraBadge: "ಶೂನ್ಯ ತ್ಯಾಜ್ಯ ಮರುಬಳಕೆ ಮಾದರಿ",
    krishiChakraTitle: "ಅಣಬೆ ಬೇಸಾಯ ಕೃಷಿ ಚಕ್ರ — Mushroom Cultivation Recycling",
    krishiChakraDesc: "ಭತ್ತದ ಬೆಳೆ ➔ ಒಣ ತ್ಯಾಜ್ಯ ಹುಲ್ಲು ➔ ಅಣಬೆ ಬೀಜ ಬಿತ್ತನೆ ➔ ಅಣಬೆ ಕಟಾವು ➔ ನೇರ ಮಾರಾಟ ➔ ಮೌಲ್ಯವರ್ಧನೆ ➔ ತ್ಯಾಜ್ಯವನ್ನು ಪ್ರಾಣಿ-ಪಕ್ಷಿಗಳಿಗೆ ಆಹಾರ ➔ ಕಾಂಪೋಸ್ಟ್ ಗೊಬ್ಬರ ತಯಾರಿ ➔ ವರ್ಮಿ ಕಾಂಪೋಸ್ಟ್ ಮಣ್ಣಿಗೆ ಮರುಬಳಕೆ.",
    chakraPoint1: "<strong>೧. ಭತ್ತದ ಬೆಳೆ & ಒಣ ತ್ಯಾಜ್ಯ ಹುಲ್ಲು:</strong> ಹೊಲದಲ್ಲಿ ಬೆಳೆದ ಭತ್ತದ ಕಟಾವಿನ ನಂತರ ಉಳಿಯುವ ಒಣ ಹುಲ್ಲಿನ ಸದ್ಬಳಕೆ.",
    chakraPoint2: "<strong>೨. ಬಿತ್ತನೆ, ಕಟಾವು & ಮೌಲ್ಯವರ್ಧನೆ:</strong> ಶುದ್ಧ ಸಾವಯವ ಅಣಬೆ ಕಟಾವು ಮಾಡಿ ರಿಲಯನ್ಸ್ ಮತ್ತು ಆನ್‌ಲೈನ್ ಮೂಲಕ ನೇರ ಮಾರಾಟ.",
    chakraPoint3: "<strong>೩. ಪಶು-ಪಕ್ಷಿ ಆಹಾರ & ಸಾವಯವ ಕಾಂಪೋಸ್ಟ್:</strong> ಅಣಬೆ ಕಟಾವಿನ ನಂತರದ ತೇವದ ಹುಲ್ಲು ಕುರಿ, ಕೋಳಿಗಳಿಗೆ ಪೌಷ್ಟಿಕ ಆಹಾರ; ನಂತರ ಉತ್ಕೃಷ್ಟ ವರ್ಮಿ ಕಾಂಪೋಸ್ಟ್ ಆಗಿ ಮಣ್ಣಿಗೆ ಮರುಪೂರಣ!",
    chakraPoint4: "<strong>೪. ಸಮಗ್ರ ಕೃಷಿ, ಶೂನ್ಯ ತ್ಯಾಜ್ಯ ಮರುಬಳಕೆ & ಮಣ್ಣಿನ ಆರೋಗ್ಯ:</strong> ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿಯನ್ನು ಬಿಟ್ಟು, ಕೃಷಿ ಅಧಿಕಾರಿ ವಿಜ್ಞಾನಿಗಳು ಮತ್ತು ಒಡಿಪಿ ಸಂಸ್ಥೆಯ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ, ವೈಜ್ಞಾನಿಕವಾಗಿ ತರಬೇತಿ ಪಡೆದು ಅಣಬೆ ಕುರಿ ಕೋಳಿ ಜೇನು ಅಜೋಲ ವರ್ಮಿ ಕಾಂಪೋಸ್ಟ್, ಒಂದೇ ಸೂರಿನಡಿ ನಮ್ಮ ಅನುಕೂಲಕ್ಕೆ ತಕ್ಕಂತೆ ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳನ್ನು, ಮೌಲ್ಯವರ್ಧನೆ ಮಾಡಿ ನೇರವಾಗಿ ಮಾರುಕಟ್ಟೆಯನ್ನು ಕಂಡುಕೊಂಡಿರುತ್ತೇವೆ. ಭವಿಷ್ಯದ ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಮತ್ತು ಮಾನವನ ಆರೋಗ್ಯವನ್ನು ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು, ಕೃಷಿ ಮೂಲದಿಂದ ಬರುವ ಎಲ್ಲಾ ತ್ಯಾಜ್ಯಗಳನ್ನು, ಪ್ಲಾಸ್ಟಿಕ್ ಬೇರ್ಪಡಿಸಿ ಒಂದರಿಂದ ಮತ್ತೊಂದಕ್ಕೆ ಪೂರಕವಾಗುವ ಹಾಗೆ ಪರಿಸರಕ್ಕೆ ಹಾನಿಯಾಗದಂತೆ ರಿಸೈಕ್ಲಿಂಗ್ ಪ್ಲಾನಿಂಗ್ ಮಾಡಿ, ಮತ್ತೆ ಮಣ್ಣಿಗೆ ಸೇರಿಸಿದ್ದೇವೆ.",
    videoBadge: "ದೂರದರ್ಶನ ವಿಶೇಷ ವರದಿ • 10TV Kannada News",
    videoTitle: "೧೦ ಟಿವಿ ನ್ಯೂಸ್ ವಿಶೇಷ ವರದಿ: ಡಾ. ಸಂತೋಷ್ ತಿಮ್ಮೇಗೌಡರ ಕೃಷಿ ಕ್ರಾಂತಿ & ಸಂದರ್ಶನ",
    videoDesc: "ಡಾ. ಸಂತೋಷ್ ತಿಮ್ಮೇಗೌಡ ಅವರ ತೋಟದಲ್ಲಿ ನಡೆದ ಸಮಗ್ರ ಕೃಷಿ, ಅಣಬೆ ಬೇಸಾಯ ಮತ್ತು ನೇರ ಮಾರುಕಟ್ಟೆ ಕ್ರಾಂತಿಯ ಅಧಿಕೃತ ಟೆಲಿವಿಷನ್ ವರದಿ ಮತ್ತು ನೇರ ಸಂದರ್ಶನ ವೀಕ್ಷಿಸಿ.",
    pressBadge: "ಮಾಧ್ಯಮ ಮನ್ನಣೆ ಮತ್ತು ಪತ್ರಿಕಾ ವರದಿಗಳು",
    pressTitle: "ಪ್ರಮುಖ ರಾಜ್ಯ ಪತ್ರಿಕೆಗಳಲ್ಲಿ ಪ್ರಕಟವಾದ ವಿಶೇಷ ವರದಿಗಳು",
    pressSub: "ಡಾ. ಸಂತೋಷ್ ತಿಮ್ಮೇಗೌಡರ ಕೃಷಿ ಸಾಧನೆ ಮತ್ತು ರೈತರಿಗೆ ನೀಡಿದ ತರಬೇತಿಯನ್ನು ಮುಕ್ತಕಂಠದಿಂದ ಶ್ಲಾಘಿಸಿದ ನಾಡಿನ ಪ್ರಮುಖ ದಿನಪತ್ರಿಕೆಗಳು.",
    press1Title: "ಪ್ರಜಾವಾಣಿ: ವೈಜ್ಞಾನಿಕ ಕೃಷಿ; ಯಶಸ್ವಿಯಾದ ಸಂತೋಷ",
    press1Desc: "ಉಲ್ಲಾಸ್ ಯು.ವಿ. ಅವರ ವಿಶೇಷ ತನಿಖಾ ವರದಿ: ಸಾವಯವ ಅಣಬೆಗೆ ಬಲು ಬೇಡಿಕೆ, ಶೂನ್ಯ ಬಂಡವಾಳ ಕೃಷಿಯಲ್ಲಿ ಯಶಸ್ಸು, ತೆಂಗಿನ ಸಸಿಗಳ ನಡುವೆ ತರಕಾರಿ ಮತ್ತು ನೇರ ಮಾರುಕಟ್ಟೆ.",
    press2Title: "ಕನ್ನಡಪ್ರಭ: ಸಂತೋಷ್‌ಗೆ ಜಿಲ್ಲಾ ಮಟ್ಟದ ಶ್ರೇಷ್ಠ ಕೃಷಿಕ ಪ್ರಶಸ್ತಿ",
    press2Desc: "ನೈಸರ್ಗಿಕ ತ್ಯಾಜ್ಯದಿಂದ ಬಂಜರು ಭೂಮಿಯಲ್ಲೂ ಲಕ್ಷಗಟ್ಟಲೆ ಆದಾಯ ಗಳಿಸಿ ಮಾದರಿಯಾದ ಯುವ ಕೃಷಿಕ ಸಂತೋಷ್‌ಗೆ ಕೃಷಿ ಇಲಾಖೆಯಿಂದ ಲಭಿಸಿದ ಜಿಲ್ಲಾ ಪ್ರಶಸ್ತಿ ವರದಿ.",
    press3Title: "ವಿಜಯವಾಣಿ: 'ನೇಗಿಲ ಯೋಗಿ' ಅಣಬೆ ಬೇಸಾಯದಲ್ಲಿ ಯುವ ರೈತ ಯಶಸ್ಸು",
    press3Desc: "ವಿಜಯವಾಣಿ ದಿಗ್ವಿಜಯ 24x7 ಕೃಷಿ ಮೇಳ ವಿಶೇಷ: ತಾಯಿಯ ಅಗಲಿಕೆ ನಂತರ ಛಲದಿಂದ ಮುನ್ನುಗ್ಗಿ ಅಣಬೆ ಬೇಸಾಯದಲ್ಲಿ ಸಾಧನೆಗೈದ ಯಶೋಗಾಥೆ.",

    // Life Story (Authentic 6 Chapters)
    lifeBadge: "ಭಾಗ ೪ • ಸತ್ಯ ಜೀವನ ಪಯಣ, ಅಣಬೆ ಕೃಷಿ ಕ್ರಾಂತಿ & ಆತ್ಮಕಥನ",
    lifeTitle: "ಸಂತೋಷ್ ತಿಮ್ಮೇಗೌಡ ಅವರ ಸಂಪೂರ್ಣ ಜೀವನ ಕಥೆ",
    lifeSub: "ನಾಗಮಂಗಲದ ಪುಟ್ಟ ಗ್ರಾಮ ಮರಡಿಪುರದಿಂದ ಪ್ರಾರಂಭವಾಗಿ, ಸಂಕಷ್ಟಗಳನ್ನು ಮೆಟ್ಟಿ ನಿಂತು, ರಾಜ್ಯ-ರಾಷ್ಟ್ರ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದಲ್ಲಿ ಪ್ರಸಿದ್ಧಿ ಪಡೆದ ಪ್ರೇರಣಾದಾಯಕ ಸತ್ಯ ಕಥಾನಕ.",
    
    ch1Badge: "ಅಧ್ಯಾಯ ೧ • ಮರಡಿಪುರದಲ್ಲಿ ಜನನ, ಕೃಷಿ ಹಿನ್ನೆಲೆ & ಬಾಲ್ಯದ ಶಿಕ್ಷಣ (1984)",
    ch1Title: "ಹುಟ್ಟು ಮತ್ತು ಬಾಲ್ಯದ ಶೈಕ್ಷಣಿಕ ಹೆಜ್ಜೆಗಳು: ಮರಡಿಪುರ, ಬೆಳ್ಳೂರು ಬಿಜಿಎಸ್",
    ch1Text1: "ಸಂತೋಷ್ ತಿಮ್ಮೇಗೌಡ ಎಂಬ ಹೆಸರಿನವನಾದ ನಾನು, ಮಂಡ್ಯ ಜಿಲ್ಲೆ ನಾಗಮಂಗಲ ತಾಲೂಕು, ಹೊಣಕೆರೆ ಹೋಬಳಿಯ ಮರಡಿಪುರ ಎಂಬ ಚಿಕ್ಕ ಗ್ರಾಮದಲ್ಲಿ ಶ್ರೀಮತಿ ಬೋರಮ್ಮ ಮತ್ತು ಶ್ರೀ ಕುಚೇಲೇ ಗೌಡ ಎಂಬ ದಂಪತಿಗಳ ಪುತ್ರನಾಗಿ 15/05/1984 ರಲ್ಲಿ ಜನಿಸಿದೆ.",
    ch1Text2: "ಬ್ರಹ್ಮದೇವರ ಹಳ್ಳಿಯ ಸರಕಾರಿ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಮತ್ತು ಪ್ರೌಢಶಾಲೆಯಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಅಂಕಗಳೊಂದಿಗೆ ಉತ್ತೀರ್ಣನಾಗಿ, ನಂತರ ಉನ್ನತ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ನಾಗಮಂಗಲ ತಾಲೂಕು ಬೆಳ್ಳೂರಿನ ಬಿಜಿಎಸ್ (BGS) ವಿದ್ಯಾಸಂಸ್ಥೆಯಲ್ಲಿ ಶಿಕ್ಷಣ ಪಡೆದಿರುತ್ತೇನೆ.",
    ch1Quote: "\"ಮಣ್ಣಿನ ಮಗನಾಗಿ ಜನಿಸಿದ ನನಗೆ ಹಳ್ಳಿಯ ಕೃಷಿ ಪರಿಸರವೇ ಬಾಲ್ಯದ ಮೊದಲ ಮತ್ತು ನಿಜವಾದ ಪಾಠಶಾಲೆಯಾಗಿತ್ತು.\"",
    
    ch2Badge: "ಅಧ್ಯಾಯ ೨ • ತಾಯಿಯ ಅಕಾಲಿಕ ಅಗಲಿಕೆ, ಕುಟುಂಬದ ಸಂಕಷ್ಟ & ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿಯ ದಿನಗಳು",
    ch2Title: "ಕಣ್ಣೀರಿನ ಸಂಕಷ್ಟ, ಶಿಕ್ಷಣ ಮೊಟಕು & ತಂದೆಯೊಂದಿಗೆ ಸಾಂಪ್ರದಾಯಿಕ ಬೇಸಾಯ",
    ch2Text1: "ನಾವು ಮೂಲತಃ ಬಡ ರೈತ ಕುಟುಂಬ. ಶಿಕ್ಷಣ ಪಡೆಯುತ್ತಿದ್ದ ಇದೇ ಸಂದರ್ಭದಲ್ಲಿ ನಮ್ಮ ತಾಯಿ ಶ್ರೀಮತಿ ಬೋರಮ್ಮನವರು ಕೃಷಿ ಕಾಯಕದಲ್ಲಿ ತೊಡಗಿದ್ದ ಸಂದರ್ಭ ಹಾವು ಕಚ್ಚಿ ಸಾವನ್ನಪ್ಪುತ್ತಾರೆ... ನನಗೆ ಮೂರು ಜನ ಅಕ್ಕಂದಿರು ಮತ್ತು ಒಬ್ಬಳು ತಂಗಿ ಇದ್ದರು. ಈ ತಾಯಿಯ ಅಕಾಲಿಕ ಅಗಲಿಕೆ ಹಾಗೂ ಕುಟುಂಬದ ಅನಿವಾರ್ಯ ಪರಿಸ್ಥಿತಿಯಿಂದ ನನ್ನ ವಿದ್ಯಾಭ್ಯಾಸವನ್ನು ಅರ್ಧಕ್ಕೇ ಮೊಟಕುಗೊಳಿಸಬೇಕಾಯಿತು.",
    ch2Text2: "ನಾನು ಅಂದೇ ಯೋಚಿಸಿದೆ—ನನಗಿರೋದು ಒಂದೇ ದಾರಿ, ಅಪ್ಪ ಹಾಕಿದ ಆಲದ ಮರದಂತೆ ನಮ್ಮ ತಂದೆಗೆ ಎರಡು ಎಕರೆ ಪಿತ್ರಾರ್ಜಿತ ಆಸ್ತಿ ಒಂದು ಕೊಳವೆ ಬಾವಿ ಇತ್ತು. ಅದರಲ್ಲಿ ನಮ್ಮ ತಂದೆ ಜೊತೆ ಸೇರಿ ಕೃಷಿ ಚಟುವಟಿಕೆಯಲ್ಲಿ ತಂದೆಯ ಮಾರ್ಗದರ್ಶನ ಪಡೆದು ಅವರ ಅನುಸರಿಸಿದ್ದ ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿಯನ್ನು ನಾನು ಸಹ ಐದು ವರ್ಷಗಳ ಕಾಲ ತೊಡಗಿದೆ. ಅದರಲ್ಲಿ ಊಟಕ್ಕೆ ತೊಂದರೆ ಇಲ್ಲದಿದ್ದರೂ, ಹಣಕಾಸಿಗೆ ತುಂಬಾ ಬಡತನ ನಮ್ಮನ್ನು ಕಾಡತೊಡಗಿತು.",
    ch2Quote: "\"ತಾಯಿಯ ನೆನಪು ಮತ್ತು ಕುಟುಂಬದ ಜವಾಬ್ದಾರಿ ನನ್ನನ್ನು ಎದೆಗುಂದಿಸದೆ, ಮಣ್ಣಿನಲ್ಲೇ ಬದುಕು ಕಟ್ಟಿಕೊಳ್ಳುವ ದೃಢ ಸಂಕಲ್ಪ ನೀಡಿತು.\"",
    
    ch3Badge: "ಅಧ್ಯಾಯ ೩ • ವೈಜ್ಞಾನಿಕ ಕ್ರಾಂತಿ — ಸಮಗ್ರ ಮಿಶ್ರ ಬೆಳೆ ಪದ್ಧತಿಯಲ್ಲಿ ೭-೮ ವಿಧದ ಆದಾಯ",
    ch3Title: "ಸಾಂಪ್ರದಾಯಿಕ ಪದ್ಧತಿ ತ್ಯಜಿಸಿ ಮಣ್ಣು-ನೀರು ಪರೀಕ್ಷೆ & ೭-೮ ವಿಧದ ನಿರಂತರ ಆದಾಯ",
    ch3Text1: "ಹೀಗೆ ಮುಂದುವರೆದರೆ ನಾನು ಕೃಷಿಯಲ್ಲಿ ಏನು ಸಾಧಿಸಲು ಸಾಧ್ಯವಾಗುವುದಿಲ್ಲ ಎಂದು ತಿಳಿದು, ಅಂದು ನಮ್ಮ ಜಮೀನಿನಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿಯನ್ನು ಬಿಟ್ಟು, ವೈಜ್ಞಾನಿಕವಾಗಿ, ಮಣ್ಣು ನೀರು ಪರೀಕ್ಷೆ ಆಧಾರದ ಮೇಲೆ ಸಾವಯವಕ್ಕೆ ಹೆಚ್ಚು ಹೊತ್ತುಕೊಟ್ಟು ಒಂದೇ ಜಮೀನಿನಲ್ಲಿ ಸಮಗ್ರ ಮಿಶ್ರ ಬೆಳೆ ಪದ್ಧತಿಯನ್ನು ಅಳವಡಿಸಿದೆ.",
    ch3Text2: "ಒಂದೇ ಸಮಯ, ಒಂದೇ ಖರ್ಚು, ಒಂದೇ ನೀರು ಖರ್ಚು ಮಾಡಿ, ಏಳರಿಂದ ಎಂಟು ವಿಧವಿಧದ ಆದಾಯ ಬರುವ ಹಾಗೆ ಸೊಪ್ಪು, ತರಕಾರಿ, ತೆಂಗು, ಅಡಿಕೆ, ಬಾಳೆ, ಹಣ್ಣಿನ ಗಿಡಗಳು, ಅರಣ್ಯ ಗಿಡಗಳು, ಔಷಧೀಯ ಗಿಡಗಳನ್ನು ಬೆಳೆದು ಉತ್ತಮ ಇಳುವರಿಯೊಂದಿಗೆ ಅಧಿಕ ಲಾಭವನ್ನು ಸಹ ಗಳಿಸಿದೆ. ಇದನ್ನು ಗಮನಿಸಿದ ಸ್ಥಳೀಯ ರೈತರು ಮತ್ತು ಕೃಷಿ ಅಧಿಕಾರಿಗಳು ನಮ್ಮ ಜಮೀನಿಗೆ ಭೇಟಿ ನೀಡಿ ನಾವು ಬೆಳೆದಿರುವ ಮಿಶ್ರ ಸಮಗ್ರ ಕೃಷಿ ಪದ್ಧತಿಯನ್ನು ನೋಡಿ ಅವರು ನನ್ನನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದರ ಜೊತೆಗೆ ಇತರೆ ರೈತರಿಗೂ ತಿಳಿಸಿ ಅವರು ಅಳವಡಿಸಿಕೊಳ್ಳುವಂತೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಿದರು.",
    ch3Quote: "\"ಒಂದೇ ಭೂಮಿ, ಒಂದೇ ಹನಿ ನೀರು, ಏಳೆಂಟು ಆದಾಯ — ಇದುವೇ ಸಮಗ್ರ ಮಿಶ್ರ ಬೇಸಾಯದ ನಿಜವಾದ ಚಮತ್ಕಾರ.\"",
    
    ch4Badge: "ಅಧ್ಯಾಯ ೪ • ೧೦ ಕುಂಟೆ ಬಂಜರು ಭೂಮಿಯಲ್ಲಿ 'ಮಿನಿ ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ'",
    ch4Title: "ಜೀರೋ-ವೇಸ್ಟ್ ಕಾಂಪೋಸ್ಟ್, ವೈರಲ್ ವಿಡಿಯೋಗಳು & ರಿಲಯನ್ಸ್ ರಿಟೇಲ್ ನೇರ ಮಾರುಕಟ್ಟೆ",
    ch4Text1: "ನಮ್ಮ ಒಂದು ಬದಲಾವಣೆ ನೂರಾರು ಜನರಿಗೆ ಮಾರ್ಗದರ್ಶನವಾಗಿದ್ದನ್ನು ಕಂಡು, ಕೃಷಿಯಲ್ಲಿ ಇನ್ನು ಹೆಚ್ಚು ಹೆಚ್ಚು ಬದಲಾವಣೆಯನ್ನು ತರಬೇಕೆಂಬುದು ನನ್ನಲ್ಲಿ ಹಂಬಲ ಹೆಚ್ಚಾಯಿತು. ಇದನ್ನೇ ಮೂಲ ಬಂಡವಾಳವನ್ನಾಗಿ ಇಟ್ಟುಕೊಂಡು, ಕೃಷಿ ಅಧಿಕಾರಿಗಳು ಮತ್ತು ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯದ ವಿಜ್ಞಾನಿಗಳ ಸಲಹೆ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ವೈಜ್ಞಾನಿಕವಾಗಿ ತರಬೇತಿ ಪಡೆದು, ೧೦ ಕುಂಟೆ ಬಂಜರು ಭೂಮಿಯಲ್ಲಿ, ಅಣಬೆ ಕೃಷಿ, ಕೋಳಿ ಸಾಕಾಣಿಕೆ, ಆಡು-ಕುರಿ ಸಾಕಾಣಿಕೆ, ಜೇನು ಸಾಕಾಣಿಕೆ, ಅಜೋಲ ಬೇಸಾಯ, ಹಸು-ಎಮ್ಮೆ ಸಾಕಾಣಿಕೆ ಪ್ರಾರಂಭಿಸಿದೆ.",
    ch4Text2: "ಜೊತೆಗೆ ಕೃಷಿ ಮೂಲದಿಂದ ಬರುವ ಎಲ್ಲಾ ತ್ಯಾಜ್ಯಗಳನ್ನು ಪರಿಸರಕ್ಕೆ ಹಾನಿಯಾಗದಂತೆ ನೈಸರ್ಗಿಕವಾಗಿ ಬಳಸಿ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಕಾಂಪೋಸ್ಟ್ ತಯಾರಿಕೆಯನ್ನು ಮಾಡಿ, ಈ ಗೊಬ್ಬರವನ್ನು ಮತ್ತೆ ನಮ್ಮ ಜಮೀನಿಗೆ ಮರುಬಳಕೆ ಆಗುವಂತೆ ಅಳವಡಿಸಿಕೊಂಡೆ. ನಮ್ಮಲ್ಲೇ ಉತ್ಪತ್ತಿಯಾಗುವ ಎಲ್ಲಾ ಸೊಪ್ಪು, ತರಕಾರಿ, ಅಣಬೆ, ಕೋಳಿ, ಕುರಿ, ಜೇನು, ಅಜೋಲ, ಕಾಂಪೋಸ್ಟ್ ಎಲ್ಲವನ್ನೂ ರಿಲಯನ್ಸ್ ರಿಟೇಲ್ ಲಿಮಿಟೆಡ್ ನಲ್ಲಿ ಮತ್ತು ಆನ್‌ಲೈನ್ ಮುಖಾಂತರ ನೇರ ಮಾರುಕಟ್ಟೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿದೆ. ಇದರಿಂದ ನನ್ನ ಬೇಸಾಯದಲ್ಲಿ ಖರ್ಚು ಕಡಿಮೆಯಾಗಿ, ಒಂದರಿಂದ ಒಂದು ಪೂರಕವಾಗಿ, ನಮ್ಮ ಆದಾಯ ಗಣನೀಯವಾಗಿ ಏರತೊಡಗಿತ್ತು. ಇದನ್ನು ನಾನು ಸಾಮಾಜಿಕ ಜಾಲತಾಣದ ಮುಖಾಂತರ ನಮ್ಮ ಖುಷಿಗಾಗಿ ಸಾರ್ವಜನಿಕವಾಗಿ ವಿಡಿಯೋ ಮುಖಾಂತರ ಹಂಚಿಕೊಂಡೆ. ಇದನ್ನು ಜಿಲ್ಲೆ, ರಾಜ್ಯ ಹಾಗೂ ಹೊರದೇಶಗಳಿಂದಲೂ ನೋಡಿ, ಅವರು ಸಹ ನಮ್ಮ ತೋಟಕ್ಕೆ ಭೇಟಿ ನೀಡಿ ನಮ್ಮ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಅವರ ಜಮೀನಿನಲ್ಲಿ ಅಳವಡಿಸಿಕೊಳ್ಳತೊಡಗಿದರು. ಹೀಗೆ ವರ್ಷದಿಂದ ವರ್ಷಕ್ಕೆ ನಮ್ಮ ಕೃಷಿಯಲ್ಲಿ ಹಲವಾರು ಬದಲಾವಣೆಗಳನ್ನು ಮಾಡುತ್ತಾ, ನಮ್ಮ ಚಿಕ್ಕ ಜಮೀನಿನಲ್ಲೇ ಒಂದು 'ಮಿನಿ ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ'ದಂತೆ ನನ್ನ ಅನುಕೂಲಕ್ಕೆ ತಕ್ಕಂತೆ ನಿರ್ಮಾಣವಾಗಿತ್ತು.",
    ch4Quote: "\"ಕೃಷಿಯಲ್ಲಿ ತ್ಯಾಜ್ಯ ಎಂಬ ಮಾತೇ ಇಲ್ಲ; ಒಂದರ ತ್ಯಾಜ್ಯವೇ ಇನ್ನೊಂದರ ಜೀವಪೋಷಕ ಅಮೃತ.\"",
    
    ch5Badge: "ಅಧ್ಯಾಯ ೫ • ರಾಷ್ಟ್ರೀಯ ರುಡ್‌ಸೆಟ್‌ ಬೋಧಕರು, ರಾಜ್ಯಮಟ್ಟದ ಪ್ರಶಸ್ತಿಗಳು & ಜರ್ಮನ್ ಡಾಕ್ಟರೇಟ್",
    ch5Title: "ಸಾವಿರಾರು ಯುವಕರಿಗೆ ಬದುಕು ಕಟ್ಟಿಕೊಟ್ಟ ಗುರು & ಅಂತರರಾಷ್ಟ್ರೀಯ ಡಾಕ್ಟರೇಟ್ ಗೌರವ",
    ch5Text1: "ಇದನ್ನೆಲ್ಲವನ್ನು ಆಲಿಸಿ ಕೃಷಿ ಅಧಿಕಾರಿ, ವಿಜ್ಞಾನಿಗಳು ಮತ್ತು ಓ.ಡಿ.ಪಿ. (ODP) ಎಂಬ ಸಂಸ್ಥೆ ನನ್ನನ್ನು ಗುರುತಿಸಿ, ರೈತರಿಗೆ ಕೃಷಿ ಬಗ್ಗೆ ಸಂಪನ್ಮೂಲ ವ್ಯಕ್ತಿಯಾಗಿ ತರಬೇತಿ ನೀಡಲು ಮಾರ್ಗದರ್ಶನ ನೀಡಿದರು. ದಿನದಿಂದ ದಿನಕ್ಕೆ ನಮ್ಮ ಬದಲಾವಣೆಯನ್ನು ಕಂಡು, ನ್ಯಾಷನಲ್ ಅಕಾಡೆಮಿ ಆಫ್ ರುಡ್‌ಸೆಟ್ ನಲ್ಲಿ ಉಪನ್ಯಾಸಕನಾಗಿ ಮಾನ್ಯತೆ ಪಡೆದು, ಕಳೆದ ಮೂರು ವರ್ಷಗಳಿಂದ ರಾಜ್ಯಾದ್ಯಂತ, ವಿದ್ಯಾವಂತ ನಿರುದ್ಯೋಗಿ ಯುವಕ-ಯುವತಿಯರಿಗೆ, ಮಹಿಳೆಯರಿಗೆ, ರೈತರಿಗೆ, ನಿವೃತ್ತ ಅಧಿಕಾರಿಗಳಿಗೆ, ಅಣಬೆ ಮತ್ತು ಸಮಗ್ರ ಕೃಷಿ ಬಗ್ಗೆ ಸಂಪನ್ಮೂಲ ವ್ಯಕ್ತಿಯಾಗಿ ತರಬೇತಿಯನ್ನು ನೀಡುತ್ತಿದ್ದೇನೆ.",
    ch5Text2: "ನನ್ನ ಪುಣ್ಯಭೂಮಿಯಲ್ಲಿ, ನಮ್ಮ ತಂದೆ, ನನ್ನ ಪತ್ನಿ ಮತ್ತು ನನ್ನ ಮಗಳು ಎಲ್ಲರೂ ಸಂತೋಷದಿಂದ ಕೃಷಿ ಕಾಯಕದಲ್ಲಿ ತೊಡಗಿ ಕೃಷಿಯಲ್ಲಿ ಖುಷಿಯನ್ನು ಕಂಡುಕೊಂಡಿದ್ದೇವೆ. ನಮ್ಮ ಎಲ್ಲಾ ಕೃಷಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಗಮನಿಸಿ, ಕೃಷಿ ಇಲಾಖೆ ಮತ್ತು ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯಗಳು, ತಾಲೂಕು, ಜಿಲ್ಲೆ, ರಾಜ್ಯ ಮಟ್ಟದ 'ಕೃಷಿ ಸಾಧಕ ಪ್ರಶಸ್ತಿ'ಯನ್ನು ನೀಡುವುದರ ಜೊತೆಗೆ, ಹಲವಾರು ಸಂಘ-ಸಂಸ್ಥೆಗಳು ನೂರಾರು ವೇದಿಕೆಗಳಲ್ಲಿ ಗೌರವಿಸಿ ಸನ್ಮಾನಿಸಿವೆ. ಜೊತೆಗೆ ಜರ್ಮನ್ ಯುನಿವರ್ಸಿಟಿಯಿಂದ ನಮ್ಮ ಕೃಷಿ ಬದಲಾವಣೆಯ ಸಾಧನೆಯನ್ನು ಕಂಡು ಕೃಷಿ ವಿಭಾಗದಿಂದ ಗೌರವಾನ್ವಿತ 'ಡಾಕ್ಟರೇಟ್ ಪದವಿ' ಪುರಸ್ಕಾರವನ್ನು ಕೊಟ್ಟು ಗೌರವಿಸಿದೆ.",
    ch5Quote: "\"ಒಬ್ಬ ವ್ಯಕ್ತಿಗೆ ಸ್ವಂತ ಕಾಲ ಮೇಲೆ ನಿಲ್ಲುವ ಕೌಶಲ್ಯ ನೀಡುವುದೇ ನಿಜವಾದ ಸೇವೆ; ಜರ್ಮನ್ ಡಾಕ್ಟರೇಟ್ ಇಡೀ ರೈತ ಸಮುದಾಯದ ಪರಿಶ್ರಮಕ್ಕೆ ಸಿಕ್ಕ ಮನ್ನಣೆ.\"",
    
    ch6Badge: "ಅಧ್ಯಾಯ ೬ • ಸೃಜನಶೀಲ ಹವ್ಯಾಸಗಳು, ರಾಗಿ ಕೇಕ್ ಸಂಭ್ರಮ & ನಿಸ್ವಾರ್ಥ ಸಮಾಜ ಸೇವೆ",
    ch6Title: "ರಾಗಿ ಕೇಕ್, ತರಕಾರಿ ಕಲೆ, ಗಿಡ ನೆಡುವ ಸಂಕಲ್ಪ & ಸಂಕಷ್ಟದಲ್ಲಿರುವ ರೈತರಿಗೆ ಆಸರೆ",
    ch6Text1: "ನನ್ನ ಕೃಷಿ ಕಾಯಕದ ಜೊತೆಗೆ ಇತರ ಚಟುವಟಿಕೆಗಳು ನನ್ನ ಜೀವನದಲ್ಲಿ ಗರಿಗೆದರಿವೆ. ಸ್ಥಳೀಯವಾಗಿ ಸಿಗುವ ಹೂ-ಎಲೆಗಳಿಂದ ಸುಂದರ ಹೂಗುಚ್ಛ ತಯಾರಿಸುವುದು, ನಮ್ಮ ಹುಟ್ಟುಹಬ್ಬ ಹಾಗೂ ಕುಟುಂಬದ ಸದಸ್ಯರ ಹುಟ್ಟುಹಬ್ಬಕ್ಕೆ ರಾಗಿ ಕೇಕ್, ಕಲ್ಲಂಗಡಿ ಹಣ್ಣಿನ ಕೇಕ್, ಕೇಸರಿ ಬಾತ್ ಕೇಕ್ ತಯಾರಿಸಿ ಸಂಭ್ರಮಿಸುವುದು, ಹಣ್ಣು-ತರಕಾರಿ ಮತ್ತು ಧಾನ್ಯಗಳನ್ನು ಬಳಸಿ ಕಲಾತ್ಮಕ ಚಿತ್ರ ಬಿಡಿಸುವುದು ನನ್ನ ಪ್ರೀತಿಯ ಹವ್ಯಾಸಗಳು. ಇವೆಲ್ಲವನ್ನೂ ಸ್ಥಳೀಯವಾಗಿ ನಡೆಯುವ ಸಭೆ-ಸಮಾರಂಭಗಳಲ್ಲಿ ಭಾಗವಹಿಸುವ ಗಣ್ಯರಿಗೆ ತರಕಾರಿಗಳನ್ನು ಒಗ್ಗೂಡಿಸಿ 'ಸನ್ಮಾನಿತ ಬುಟ್ಟಿ'ಯನ್ನು ನೀಡಿ ಗೌರವಿಸುತ್ತೇವೆ.",
    ch6Text2: "'ಸಂತೋಷ ಸಂಭ್ರಮಕ್ಕೊಂದು ಗಿಡ' ಎಂಬಂತೆ ನಮ್ಮ ಜನ್ಮದಿನ ಹಾಗೂ ವಿಶೇಷ ದಿನಗಳಲ್ಲಿ ಸಾರ್ವಜನಿಕವಾಗಿ ಅಲ್ಲಲ್ಲೇ ಗಿಡಗಳನ್ನು ನೆಟ್ಟು ಪೋಷಿಸುವುದು, ಪರಿಸರ ಸ್ವಚ್ಛಗೊಳಿಸುವ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಭಾಗವಹಿಸುವುದು, ರೈತರಿಗೆ ಅನುಕೂಲವಾಗುವ ಸಭೆ-ಸಮಾರಂಭಗಳಿಗೆ ನಾವು ಭಾಗವಹಿಸುವುದಲ್ಲದೆ ಇತರ ರೈತರನ್ನೂ ಕರೆದೊಯ್ಯುವುದು, ಬಿಡುವಿನ ಸಮಯದಲ್ಲಿ ಶಾಲೆಗಳಿಗೆ ತೆರಳಿ ಮುಖ್ಯೋಪಾಧ್ಯಾಯರ ಅನುಮತಿ ಪಡೆದು ಶಾಲಾ ಮಕ್ಕಳಲ್ಲಿ ಕೃಷಿ ಬಗ್ಗೆ ಅರಿವು ಮೂಡಿಸುವುದು, ವರ್ಷಕ್ಕೆ ಒಂದೆರಡು ಬಾರಿ ಕುಟುಂಬ ಹಾಗೂ ರೈತರೊಡನೆ ಕೃಷಿ ಪ್ರವಾಸ ಕೈಗೊಳ್ಳುವುದು, ಹಾಗೂ ಸಂಕಷ್ಟದಲ್ಲಿರುವ ರೈತರಿಗೆ ಉಚಿತವಾಗಿ ತರಬೇತಿಗಳನ್ನು ನೀಡಿ ಅವರಿಗೆ ಅವಶ್ಯಕತೆ ಇರುವ ಬಿತ್ತನೆ ಬೀಜ ಹಾಗೂ ಕೃಷಿ ಪರಿಕರಗಳನ್ನು ನನ್ನ ವೈಯಕ್ತಿಕ ಹಣದಿಂದಲೇ ಕೊಟ್ಟು ಸಾರ್ವಜನಿಕವಾಗಿ ಕಷ್ಟದಲ್ಲಿರುವವರಿಗೆ ಸಹಾಯ ಹಸ್ತ ಚಾಚುತ್ತಿದ್ದೇನೆ.",
    ch6Quote: "\"ಸಂತೋಷ ಸಂಭ್ರಮಕ್ಕೊಂದು ಗಿಡ — ನೊಂದ ರೈತನಿಗೆ ಆಸರೆಯಾಗಿ, ಮಣ್ಣಿಗೂ ಮನುಷ್ಯನಿಗೂ ನಿಸ್ವಾರ್ಥ ಪ್ರೀತಿ ನೀಡುವುದೇ ಬದುಕಿನ ನಿಜವಾದ ಸಾರ್ಥಕತೆ.\"",

    // Other Activities & Leisure Time
    activitiesBadge: "ಭಾಗ ೫ • ಇತರೆ ಚಟುವಟಿಕೆಗಳು & ಬಿಡುವಿನ ಸಮಯ",
    activitiesTitle: "ಸಾಂಪ್ರದಾಯಿಕ ಪರಂಪರೆ, ಸೃಜನಶೀಲ ಕಲೆ, ರೈತರ ಒಗ್ಗಟ್ಟು & ಪ್ರವಾಸ",
    activitiesSub: "ಕೃಷಿಯಷ್ಟೇ ಅಲ್ಲದೆ ಗ್ರಾಮೀಣ ಪಳೆಯುಳಿಕೆಗಳ ಸಂರಕ್ಷಣೆ, ತರಕಾರಿ-ಧಾನ್ಯ ಕಲೆ, ರೈತ ಸಂಘಟನೆ, ಗಿಡ ನೆಡುವ ಸಂಕಲ್ಪ ಮತ್ತು ಕುಟುಂಬ ಪ್ರವಾಸದ ಹೆಜ್ಜೆಗಳು.",
    act1Badge: "ಪ್ರಾಚೀನ ಪರಂಪರೆ & ಪಳೆಯುಳಿಕೆ ಸಂರಕ್ಷಣೆ",
    act1Title: "ಸಾಂಪ್ರದಾಯಿಕ ಪಳೆಯುಳಿಕೆಗಳ ಸಂಗ್ರಹ ಮತ್ತು ಪ್ರದರ್ಶನ (೧೫೦ ವರ್ಷದ ಮರದ ಬಂಡಿ ಗಾಡಿ)",
    act1Desc: "ನಮ್ಮ ಪೂರ್ವಜರ ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿ ಪಳೆಯುಳಿಕೆಗಳು ಮತ್ತು ಗ್ರಾಮೀಣ ಪುರಾತನ ಪರಿಕರಗಳನ್ನು ಶ್ರದ್ಧೆಯಿಂದ ಸಂಗ್ರಹಿಸಿ ಸಂರಕ್ಷಿಸುವುದು ಇವರ ವಿಶಿಷ್ಟ ಹವ್ಯಾಸ. ಬರೋಬ್ಬರಿ ೧೫೦ ವರ್ಷ ಹಳೆಯ ಐತಿಹಾಸಿಕ ಮರದ ಬಂಡಿ ಗಾಡಿಯನ್ನು (Bullock Cart) ಸುಸ್ಥಿತಿಯಲ್ಲಿ ಕಾಪಾಡಿಕೊಂಡು, ಶುದ್ಧ ಹಳ್ಳಿಕಾರ್ ಬಿಳಿ ಎತ್ತುಗಳೊಂದಿಗೆ ಸಿಂಗರಿಸಿ ಮಂಡ್ಯದಲ್ಲಿ ನಡೆದ ೮೭ನೇ ಅಖಿಲ ಭಾರತ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನ ಸೇರಿದಂತೆ ನಾಡಿನ ಬೃಹತ್ ಸಭೆ-ಸಮಾರಂಭಗಳಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿ ಗ್ರಾಮೀಣ ಸಂಸ್ಕೃತಿಯ ಗತವೈಭವವನ್ನು ಮರುಕಳಿಸಿದ್ದಾರೆ.",
    act1HlTitle: "ಟೈಮ್ಸ್ ಆಫ್ ಇಂಡಿಯಾ & ರಾಜ್ಯ ಮಾಧ್ಯಮಗಳ ಮೆಚ್ಚುಗೆ",
    act1HlDesc: "೮೭ನೇ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನದಲ್ಲಿ 'Farmer & 150-Yr-Old Bullock Cart' ಶೀರ್ಷಿಕೆಯಲ್ಲಿ ರಾಷ್ಟ್ರೀಯ ಪತ್ರಿಕೆಗಳ ಪ್ರಶಂಸೆ.",
    act1ImgCap1: "ಡಾ. ಸಂತೋಷ್ ಅವರು ಹಳ್ಳಿಕಾರ್ ಎತ್ತುಗಳೊಂದಿಗೆ ೧೫೦ ವರ್ಷದ ಐತಿಹಾಸಿಕ ಮರದ ಬಂಡಿ ಗಾಡಿ ನಡೆಸುತ್ತಿರುವ ಸಂಭ್ರಮ",
    act1Thumb1: "೮೭ನೇ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನ",
    act1Thumb2: "ಟೈಮ್ಸ್ ಆಫ್ ಇಂಡಿಯಾ",
    act1VideoTitle: "೧೫೦ ವರ್ಷದ ಮರದ ಬಂಡಿ ಗಾಡಿಯ ಜೀವಂತ ಸಾಕ್ಷ್ಯಚಿತ್ರ ವಿಡಿಯೋಗಳು",
    act1Video1Tag: "ಗ್ರಾಮ ಸಂಚಾರ ವಿಡಿಯೋ",
    act1Video1Desc: "ಡಾ. ಸಂತೋಷ್ ಅವರು ಕುಟುಂಬ ಸಮೇತ ೧೫೦ ವರ್ಷದ ಮರದ ಬಂಡಿ ಗಾಡಿಯಲ್ಲಿ ಹಳ್ಳಿಕಾರ್ ಎತ್ತುಗಳೊಂದಿಗೆ ಸಾಗುತ್ತಿರುವ ದೃಶ್ಯ.",
    act1Video2Tag: "ಪೂಜಾ ವಿಧಿವಿಧಾನ & ಹೆದ್ದಾರಿ ಮೆರವಣಿಗೆ",
    act1Video2Desc: "೮೭ನೇ ಅಖಿಲ ಭಾರತ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಸಮ್ಮೇಳನಕ್ಕೆ ತೆರಳುವ ಮುನ್ನ ಬಂಡಿ ಗಾಡಿಗೆ ನಡೆದ ಮಂಗಳಕರ ಪೂಜೆ ಹಾಗೂ ಹೆದ್ದಾರಿ ಮೆರವಣಿಗೆ.",
    act2Badge: "ಸೃಜನಶೀಲ ಹಣ್ಣು-ತರಕಾರಿ ಕಲೆ & ಸನ್ಮಾನಿತ ಬುಟ್ಟಿ",
    act2Title: "ಹಣ್ಣು, ತರಕಾರಿ, ಧಾನ್ಯಗಳಿಂದ ಕಲಾತ್ಮಕ ಚಿತ್ರ & ಗಣ್ಯರಿಗೆ 'ಸನ್ಮಾನಿತ ಬುಟ್ಟಿ' ಗೌರವ",
    act2Desc: "ಸ್ಥಳೀಯವಾಗಿ ಬೆಳೆದ ಕಾಳುಗಳು, ಧಾನ್ಯಗಳು, ಹಣ್ಣು ಮತ್ತು ತರಕಾರಿಗಳಿಂದ ಅದ್ಭುತ ಚಿತ್ರಗಳನ್ನು ಬಿಡಿಸುವುದು ಮತ್ತು ತರಕಾರಿ ಕೆತ್ತನೆಯ ಮೂಲಕ ಗಣ್ಯರ ಭಾವಚಿತ್ರಗಳನ್ನು ರಚಿಸುವುದು ಇವರ ಅಪೂರ್ವ ಕಲೆ. ಪ್ಲಾಸ್ಟಿಕ್ ಹೂಗುಚ್ಛ ಅಥವಾ ಶಾಲುಗಳ ಬದಲಿಗೆ, ತಮ್ಮ ತೋಟದಲ್ಲಿ ನೈಸರ್ಗಿಕವಾಗಿ ಬೆಳೆದ ತರಕಾರಿಗಳನ್ನು ಸುಂದರವಾಗಿ ಜೋಡಿಸಿ 'ಸನ್ಮಾನಿತ ಬುಟ್ಟಿ'ಯನ್ನಾಗಿ ಮಾಡಿ ಸಭೆ-ಸಮಾರಂಭಗಳಿಗೆ ಬರುವ ಗಣ್ಯರಿಗೆ ಗೌರವಪೂರ್ವಕವಾಗಿ ಅರ್ಪಿಸುವ ಪರಿಸರಸ್ನೇಹಿ ಸಂಪ್ರದಾಯವನ್ನು ಹುಟ್ಟುಹಾಕಿದ್ದಾರೆ.",
    act2HlTitle: "ಮಾಜಿ ಪ್ರಧಾನಿ ಶ್ರೀ ಹೆಚ್.ಡಿ. ದೇವೇಗೌಡರ ತರಕಾರಿ ಕೆತ್ತನೆ ಚಿತ್ರ",
    act2HlDesc: "ಹಣ್ಣು-ತರಕಾರಿಗಳಿಂದ ಮಾಜಿ ಪ್ರಧಾನಿಗಳ ಭಾವಚಿತ್ರ ಕೆತ್ತನೆ ಹಾಗೂ ಮಾಜಿ ಸಿಎಂ ಹೆಚ್.ಡಿ. ಕುಮಾರಸ್ವಾಮಿಯವರಿಗೆ ಸನ್ಮಾನಿತ ಬುಟ್ಟಿ ಸಲ್ಲಿಕೆ.",
    act2ImgCap1: "ಮಾಜಿ ಪ್ರಧಾನಿ ಶ್ರೀ ಹೆಚ್.ಡಿ. ದೇವೇಗೌಡರ ಮುಖಚಿತ್ರದ ಅದ್ಭುತ ತರಕಾರಿ ಕೆತ್ತನೆ ಕಲಾಕೃತಿ",
    act2ImgCap2: "ಮಾಜಿ ಸಿಎಂ ಶ್ರೀ ಹೆಚ್.ಡಿ. ಕುಮಾರಸ್ವಾಮಿ ಅವರಿಗೆ ಅರ್ಪಿಸಲಾದ ಸಾವಯವ ತರಕಾರಿಗಳ ಸುಂದರ ಸನ್ಮಾನಿತ ಬುಟ್ಟಿ",
    act2ImgCap3: "ಮಾಜಿ ಪ್ರಧಾನಿ ಶ್ರೀ ಹೆಚ್.ಡಿ. ದೇವೇಗೌಡರಿಗೆ ವೇದಿಕೆಯಲ್ಲಿ ಮೈಸೂರು ಪೇಟ ತೊಡಿಸಿ, ಪುಷ್ಪಮಾಲೆ ಅರ್ಪಿಸಿ ಗೌರವ ಸನ್ಮಾನ.",
    act3Badge: "ರೈತರ ಸಂಘಟನೆ & FPO ಕಾರ್ಯದರ್ಶಿ ಸೇವೆ",
    act3Title: "ರೈತರನ್ನು ಸಂಘಟಿಸಿ FPO ಮೂಲಕ ಉತ್ಪನ್ನಗಳ ನೇರ ಮಾರಾಟ (ಕಾರ್ಯದರ್ಶಿ ಸೇವೆ)",
    act3Desc: "ರೈತ ಉತ್ಪಾದಕ ಸಂಸ್ಥೆಗಳ (FPO) ಕಾರ್ಯದರ್ಶಿಯಾಗಿ ನಿಷ್ಠೆಯಿಂದ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿರುವ ಡಾ. ತಿಮ್ಮೇಗೌಡರು, ಸಣ್ಣ ಹಾಗೂ ಅತಿ ಸಣ್ಣ ರೈತರನ್ನು ಒಗ್ಗೂಡಿಸಿ ಗುಂಪುಗಳನ್ನು ರಚಿಸಿದ್ದಾರೆ. ಮಧ್ಯವರ್ತಿಗಳ ಶೋಷಣೆಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತಪ್ಪಿಸಿ, ರೈತರ ತಾಜಾ ಉತ್ಪನ್ನಗಳನ್ನು ನೇರವಾಗಿ ರಿಲಯನ್ಸ್ ರಿಟೇಲ್ ಹಾಗೂ ಗ್ರಾಹಕರಿಗೆ ನ್ಯಾಯಯುತ ಬೆಲೆಗೆ ಮಾರಾಟ ಮಾಡುವ ವ್ಯವಸ್ಥೆಯನ್ನು ಸೃಷ್ಟಿಸಿ ನೂರಾರು ರೈತ ಕುಟುಂಬಗಳ ಆರ್ಥಿಕ ಚೇತರಿಕೆಗೆ ಬೆನ್ನೆಲುಬಾಗಿ ನಿಂತಿದ್ದಾರೆ.",
    act3HlTitle: "ಸಾವಯವ ಸಮಗ್ರ ತೋಟಗಾರಿಕೆ & ನೇರ ಗ್ರಾಹಕ ಮಾರುಕಟ್ಟೆ",
    act3HlDesc: "ಪಪ್ಪಾಯಿ, ತರಕಾರಿ ಮತ್ತು ಧಾನ್ಯಗಳ ತ್ರಿವರ್ಣ ಧ್ವಜ ಕಲಾ ಸಂಯೋಜನೆ ಮತ್ತು ರೈತರಿಗೆ ನ್ಯಾಯಯುತ ಲಾಭ.",
    act3ImgCap1: "ಮೇಲೆ: ತರಕಾರಿಗಳಿಂದ ನಿರ್ಮಿಸಿದ ರಾಷ್ಟ್ರಧ್ವಜ • ಕೆಳಗೆ: ಸಮೃದ್ಧ ಸಾವಯವ ಪಪ್ಪಾಯಿ ತೋಟದಲ್ಲಿ ಡಾ. ಸಂತೋಷ್",
    act4Badge: "ಹಸಿರು ಸಂಕಲ್ಪ & ಮಂಡ್ಯ ರೈತರ ರಾಯಭಾರಿ",
    act4Title: "ಸಭೆ-ಸಮಾರಂಭಗಳಲ್ಲಿ ಗಿಡಗಳನ್ನು ಉಡುಗೊರೆಯಾಗಿ ನೀಡುವುದು & 'ಸಂಭ್ರಮಕ್ಕೊಂದು ಗಿಡ' ಸಂಕಲ್ಪ",
    act4Desc: "ಯಾವುದೇ ಸಭೆ, ಸಮಾರಂಭ, ಅತಿಥಿ ಸತ್ಕಾರವಿರಲಿ — ಡಾ. ತಿಮ್ಮೇಗೌಡರು ಗಿಡಗಳನ್ನು ಉಡುಗೊರೆಯಾಗಿ ನೀಡುವ ಹಸಿರು ಸಂಸ್ಕೃತಿಯನ್ನು ರೂಢಿಸಿಕೊಂಡಿದ್ದಾರೆ. ತಮ್ಮ ಜನ್ಮದಿನ, ವಿವಾಹ ವಾರ್ಷಿಕೋತ್ಸವ ಹಾಗೂ ಕುಟುಂಬದ ಪ್ರತಿಯೊಂದು ಶುಭ ಸಂದರ್ಭಗಳಲ್ಲಿ 'ಸಂತೋಷ ಸಂಭ್ರಮಕ್ಕೊಂದು ಗಿಡ' ಅಭಿಯಾನದಡಿ ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳಲ್ಲಿ, ರಸ್ತೆ ಬದಿಗಳಲ್ಲಿ ಗಿಡಗಳನ್ನು ನೆಟ್ಟು ಸ್ವತಃ ತಾವೇ ಪೋಷಿಸುತ್ತಿದ್ದಾರೆ. ಸಕ್ಕರೆ ನಾಡು ಮಂಡ್ಯ ಜಿಲ್ಲೆಯ ರೈತರ ಸದಾಶಯ ಮತ್ತು ಹಿತಾಸಕ್ತಿಯನ್ನು ರಾಜ್ಯಾದ್ಯಂತ ಹೆಮ್ಮೆಯಿಂದ ಪ್ರತಿನಿಧಿಸುವ ರೈತ ರಾಯಭಾರಿಯಾಗಿ ಗುರುತಿಸಿಕೊಂಡಿದ್ದಾರೆ.",
    act4Hl1Title: "'ಸಂಭ್ರಮಕ್ಕೊಂದು ಗಿಡ' ನಿರಂತರ ಪೋಷಣೆ",
    act4Hl1Desc: "ವಿಶೇಷ ದಿನಗಳಲ್ಲಿ ಕೇವಲ ಗಿಡ ನೆಡುವುದಷ್ಟೇ ಅಲ್ಲದೆ, ಅವು ಹೆಮ್ಮರವಾಗುವವರೆಗೆ ಸ್ವತಃ ಪೋಷಿಸುವ ಬದ್ಧತೆ.",
    act4Hl2Title: "ಮಂಡ್ಯ ಜಿಲ್ಲೆಯ ಹೆಮ್ಮೆಯ ರೈತ ರಾಯಭಾರಿ",
    act4Hl2Desc: "ರಾಜ್ಯ ಹಾಗೂ ರಾಷ್ಟ್ರಮಟ್ಟದ ವೇದಿಕೆಗಳಲ್ಲಿ ಮಂಡ್ಯ ಜಿಲ್ಲೆಯ ಸೃಜನಶೀಲ, ವೈಜ್ಞಾನಿಕ ರೈತರ ಧ್ವನಿಯಾಗಿ ಭಾಗಿ.",
    act5Badge: "ನಿಸ್ವಾರ್ಥ ಕೃಷಿ ಸಹಾಯ ಹಸ್ತ",
    act5Title: "ಸಂಕಷ್ಟದಲ್ಲಿರುವ ರೈತರಿಗೆ ಮಾರ್ಗದರ್ಶನ & ಸ್ವಂತ ಖರ್ಚಿನಲ್ಲಿ ಬಿತ್ತನೆ ಬೀಜ ಮತ್ತು ಪರಿಕರಗಳ ನೆರವು",
    act5Desc: "ಬೆಳೆ ನಷ್ಟ, ಸಾಲದ ಹೊರೆ ಅಥವಾ ಸೂಕ್ತ ಮಾರುಕಟ್ಟೆ ಸಿಗದೆ ಹತಾಶರಾಗಿರುವ ರೈತರಿಗೆ ಮಾನಸಿಕ ಧೈರ್ಯ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನವನ್ನು ಉಚಿತವಾಗಿ ನೀಡುತ್ತಾರೆ. ಅಷ್ಟೇ ಅಲ್ಲದೆ, ತಮ್ಮ ವೈಯಕ್ತಿಕ ದುಡಿಮೆಯ ಹಣದಿಂದಲೇ ಸಂಕಷ್ಟದಲ್ಲಿರುವ ಬಡ ರೈತರಿಗೆ ಗುಣಮಟ್ಟದ ಬಿತ್ತನೆ ಬೀಜಗಳು, ಅಣಬೆ ಸ್ಪಾನ್ ಕಿಟ್‌ಗಳು ಮತ್ತು ಕೃಷಿ ಪರಿಕರಗಳನ್ನು ಉಚಿತವಾಗಿ ನೀಡಿ, ಅವರು ಪುನಃ ಸ್ವಾವಲಂಬಿಯಾಗಿ ಬದುಕು ಕಟ್ಟಿಕೊಳ್ಳಲು ದಾರಿದೀಪವಾಗಿದ್ದಾರೆ.",
    act5HlTitle: "ಸ್ವಂತ ಖರ್ಚಿನಲ್ಲಿ ರೈತರ ಕಣ್ಣೀರು ಒರೆಸುವ ಕಾಯಕ",
    act5HlDesc: "ಉಚಿತ ತರಬೇತಿ, ಉಚಿತ ಬಿತ್ತನೆ ಬೀಜ ಹಾಗೂ ಉಪಕರಣಗಳನ್ನು ಒದಗಿಸಿ ನೊಂದ ರೈತನಿಗೆ ಬೆನ್ನೆಲುಬಾಗಿ ನಿಲ್ಲುವ ಮಾನವೀಯತೆ.",
    act6Badge: "ವಾರ್ಷಿಕ ಕೃಷಿ ಅಧ್ಯಯನ & ಕುಟುಂಬ ವಿಮಾನ ಪ್ರವಾಸ",
    act6Title: "ವರ್ಷಕ್ಕೆ ಒಂದೆರಡು ಬಾರಿ ಕೃಷಿ ಅಧ್ಯಯನ ಮತ್ತು ಕುಟುಂಬ ವಿಮಾನ ಪ್ರವಾಸ",
    act6Desc: "ಕೃಷಿಯ ನಿರಂತರ ಪರಿಶ್ರಮದ ನಡುವೆ ಮನಸ್ಸಿಗೆ ಉಲ್ಲಾಸ ಹಾಗೂ ನವೀನ ಕೃಷಿ ತಂತ್ರಜ್ಞಾನಗಳ ಪ್ರಾಯೋಗಿಕ ಜ್ಞಾನ ಪಡೆಯಲು ವರ್ಷಕ್ಕೆ ಒಂದೆರಡು ಬಾರಿ ಕುಟುಂಬ ಹಾಗೂ ಆಪ್ತ ರೈತರೊಂದಿಗೆ ಪ್ರವಾಸ ಕೈಗೊಳ್ಳುವುದು ಇವರ ವಾಡಿಕೆ. ವಿಮಾನದ ಮೂಲಕ ದೂರದ ರಾಜ್ಯಗಳ ಕೃಷಿ ಸಂಶೋಧನಾ ಕೇಂದ್ರಗಳು, ಪ್ರಸಿದ್ಧ ಐತಿಹಾಸಿಕ ತಾಣಗಳು ಹಾಗೂ ನೈಸರ್ಗಿಕ ತಾಣಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ ಹೊಸ ಅನುಭವಗಳನ್ನು ಮೈಗೂಡಿಸಿಕೊಂಡು ಕೃಷಿಗೆ ಹೊಸ ಚೈತನ್ಯ ತುಂಬುತ್ತಾರೆ.",
    act6HlTitle: "ಆಕಾಶದ ಎತ್ತರಕ್ಕೂ ಹಾರಿದ ಕೃಷಿಕನ ಕನಸು",
    act6HlDesc: "ಕುಟುಂಬದೊಂದಿಗೆ ವಿಮಾನ ಪ್ರಯಾಣ ಕೈಗೊಂಡು ಜ್ಞಾನ ವಿಸ್ತರಿಸುವ ಹಾಗೂ ಕುಟುಂಬದ ಜತೆಗೂಡಿ ಸಂಭ್ರಮಿಸುವ ಅಪರೂಪದ ಕ್ಷಣಗಳು.",
    act6ImgCap1: "ಮೇಲೆ: ಕುಟುಂಬ ಸಮೇತ ಇಂಡಿಗೋ ವಿಮಾನ ಬೋರ್ಡಿಂಗ್ • ಕೆಳಗೆ: ವಿಮಾನ ನಿಲ್ದಾಣದ ಟರ್ಮಿನಲ್ ಎದುರು ಕುಟುಂಬದ ಸಂಭ್ರಮ",
    gratitudeBadge: "ತುಂಬು ಹೃದಯದ ಧನ್ಯವಾದಗಳು • Heartfelt Gratitude",
    gratitudeTitle: "ಇದುವರೆಗೆ ನಮ್ಮ ಬಗ್ಗೆ ಓದಿ ವಿಷಯವನ್ನು ತಿಳಿದುಕೊಂಡ ನಿಮಗೂ ಮತ್ತು ನಮ್ಮನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತಿರುವ ಎಲ್ಲರಿಗೂ ತುಂಬು ಹೃದಯದ ಧನ್ಯವಾದಗಳು",
    gratitudeQuote: "\"ಇದುವರೆಗೆ ನಮ್ಮ ಬಗ್ಗೆ ಓದಿ ವಿಷಯವನ್ನು ತಿಳಿದುಕೊಂಡ ನಿಮಗೂ ಮತ್ತು ನಮ್ಮನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತಿರುವ ಎಲ್ಲರಿಗೂ ತುಂಬು ಹೃದಯದ ಧನ್ಯವಾದಗಳು Thank you 🎉💚 🥰 🙏\"",
    gratitudeSign: "- ಡಾ. ತಿಮ್ಮೇಗೌಡ ಎಂ.ಕೆ. (ಸಂತೋಷ್), ಕುಟುಂಬ ಮತ್ತು ಕೃಷಿ ಬಳಗ",
    gratitudeSignSub: "ಮರಡಿಪುರ, ನಾಗಮಂಗಲ, ಮಂಡ್ಯ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ",

    // Connect
    connectBadge: "ಸಂಪರ್ಕ ಮತ್ತು ಸಮಾಲೋಚನೆ",
    connectTitle: "ಡಾ. ತಿಮ್ಮೇಗೌಡ ಎಂ.ಕೆ. ಅವರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ",
    connectDesc: "ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ, ಒಡಿಪಿ ಹಾಗೂ ರುಡ್ಸೆಟಿ ತರಬೇತಿ ಕಾರ್ಯಾಗಾರಗಳು, ಅಣಬೆ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ, ಅತಿಥಿ ಉಪನ್ಯಾಸಕ್ಕಾಗಿ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.",
    whatsappDirect: "ನೇರ ವಾಟ್ಸಾಪ್ (WhatsApp)",
    phoneContact: "ದೂರವಾಣಿ ಸಂಪರ್ಕ",
    fieldBaseTitle: "ಹುಟ್ಟೂರು ಮತ್ತು ಕೇಂದ್ರ",
    fieldBaseDesc: "ಮರಡಿಪುರ, ನಾಗಮಂಗಲ, ಮಂಡ್ಯ / ಕರ್ನಾಟಕ",
    formTitle: "ಡಾ. ತಿಮ್ಮೇಗೌಡರಿಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ",
    formSub: "ತರಬೇತಿ ಕಾರ್ಯಾಗಾರ, ಅತಿಥಿ ಉಪನ್ಯಾಸ ಅಥವಾ ಕೃಷಿ ಸಮಾಲೋಚನೆಗಾಗಿ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
    labelName: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು",
    labelPurpose: "ಸಂಪರ್ಕದ ಉದ್ದೇಶ",
    opt1: "ಕೃಷಿ ವಿವಿ / ಒಡಿಪಿ / ರುಡ್ಸೆಟಿ ತರಬೇತಿ ಕಾರ್ಯಾಗಾರ",
    opt2: "ಅಣಬೆ ಕೃಷಿ ಸಮಾಲೋಚನೆ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ",
    opt3: "ಅತಿಥಿ ಉಪನ್ಯಾಸ / ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಆಹ್ವಾನ",
    opt4: "ಸಾಮಾನ್ಯ ಕೃಷಿ ಮಾಹಿತಿ",
    labelOrg: "ಸಂಸ್ಥೆ / ಗ್ರಾಮ / ತಾಲೂಕು",
    labelMsg: "ನಿಮ್ಮ ಸಂದೇಶ",
    btnSendMsg: "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸಂದೇಶ ಕಳುಹಿಸಿ",

    // Footer
    footerDesc: "ಡಾ. ತಿಮ್ಮೇಗೌಡ ಎಂ.ಕೆ. (ಸಂತೋಷ್) — ಪ್ರಗತಿಪರ ಕೃಷಿ ಉದ್ಯಮಿ, ಅಣಬೆ ಕೃಷಿ ತಜ್ಞರು ಹಾಗೂ ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ, ಒಡಿಪಿ, ರುಡ್ಸೆಟಿ ಮತ್ತು ಖಾಸಗಿ ಸಂಸ್ಥೆಗಳ ಬೋಧಕರು. ಮೂಲ: ಮರಡಿಪುರ, ನಾಗಮಂಗಲ, ಮಂಡ್ಯ.",
    footerNavTitle: "ಮುಖ್ಯ ಲಿಂಕ್‌ಗಳು",
    footerCollabTitle: "ಸಂಪರ್ಕ ವಿವರಗಳು",
    footerCopy: "© 2026 ಡಾ. ತಿಮ್ಮೇಗೌಡ ಎಂ.ಕೆ. (ಸಂತೋಷ್). ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    footerDevText: 'Designed & Built by <a href="https://nexgencodify.in" target="_blank" rel="noopener noreferrer" class="nexgen-brand-link">NexGenCodify</a>',
    footerBlessing: "ಕೃಷಿಯೇ ಬದುಕು • ವೈಜ್ಞಾನಿಕ ಕೃಷಿಯಿಂದ ಸಮೃದ್ಧಿ"
  }
};

let currentLang = localStorage.getItem('tmk_lang_selected') || 'en'; // Default to English!

function updateLanguage(lang, userAction = false) {
  currentLang = lang;
  if (userAction) {
    localStorage.setItem('tmk_lang_selected', lang);
  }
  const t = translations[lang] || translations.en;

  // Update HTML lang attribute and body class
  document.documentElement.lang = lang;
  if (lang === 'kn') {
    document.body.classList.add('lang-kn');
  } else {
    document.body.classList.remove('lang-kn');
  }

  // Update Toggle Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply Translations to elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update input placeholders
  if (document.getElementById('formName')) {
    document.getElementById('formName').placeholder = lang === 'kn' ? 'ಉದಾ: ರಮೇಶ್ ಕುಮಾರ್' : 'e.g. Ramesh Kumar';
  }
  if (document.getElementById('formQuantity')) {
    document.getElementById('formQuantity').placeholder = lang === 'kn' ? 'ಉದಾ: ಕೃಷಿ ಸಂಸ್ಥೆ, ಮಂಡ್ಯ' : 'e.g. Agri-Trust, Mandya';
  }
  if (document.getElementById('formMessage')) {
    document.getElementById('formMessage').placeholder = lang === 'kn' ? 'ನಿಮ್ಮ ಸಂದೇಶ ಅಥವಾ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...' : 'Share your message or questions here...';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Language Switcher Event Listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      updateLanguage(lang, true);
    });
  });

  // Initial Language Set (English default)
  updateLanguage(currentLang);

  // 1. SCROLL REVEAL ANIMATIONS
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 2. ANIMATED NUMBER COUNTERS
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsCounted = false;

  const statsSection = document.querySelector('.stats-strip');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const suffix = stat.getAttribute('data-suffix') || '';
            const duration = 1600;
            const start = 0;
            const startTime = performance.now();

            function updateCounter(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(start + (target - start) * easeOut);
              stat.textContent = current + suffix;

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                stat.textContent = target + suffix;
              }
            }

            requestAnimationFrame(updateCounter);
          });
        }
      });
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  }

  // 3. STICKY NAVBAR, BACK TO TOP & ACTIVE NAV HIGHLIGHTER (Optimized: Zero layout thrashing)
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('backToTop');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  let sectionPositions = [];
  function updateSectionPositions() {
    sectionPositions = Array.from(sections).map(sec => ({
      id: sec.getAttribute('id'),
      top: sec.offsetTop,
      bottom: sec.offsetTop + sec.offsetHeight
    }));
  }
  updateSectionPositions();
  window.addEventListener('resize', updateSectionPositions, { passive: true });
  window.addEventListener('load', updateSectionPositions, { passive: true });

  let isScrolling = false;
  let lastScrollY = window.scrollY || 0;
  const scrollDeltaThreshold = 8;

  function onScroll() {
    const scrollY = window.scrollY;

    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Hide menu bar on scroll down so no disturbance occurs; reveal on scroll up
      const isMobileNavOpen = navMenu && navMenu.classList.contains('open');
      if (scrollY > 150 && !isMobileNavOpen) {
        if (scrollY > lastScrollY + scrollDeltaThreshold) {
          // Scrolling down - smoothly hide navbar
          navbar.classList.add('nav-hidden');
        } else if (scrollY < lastScrollY - scrollDeltaThreshold) {
          // Scrolling up - smoothly reveal navbar
          navbar.classList.remove('nav-hidden');
        }
      } else {
        // At top of page - always visible
        navbar.classList.remove('nav-hidden');
      }
    }
    lastScrollY = Math.max(0, scrollY);

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active Section Highlight from cached positions (Zero Reflow)
    let currentId = '';
    const scrollMarker = scrollY + 140;
    for (let i = 0; i < sectionPositions.length; i++) {
      const pos = sectionPositions[i];
      if (scrollMarker >= pos.top && scrollMarker < pos.bottom) {
        currentId = pos.id;
        break;
      }
    }

    if (currentId) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    isScrolling = false;
  }

  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(onScroll);
      isScrolling = true;
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. MOBILE NAVIGATION DRAWER
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // 5. INTERACTIVE WHATSAPP COLLABORATION / INQUIRY BUILDER
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim() || 'Visitor';
      const purpose = document.getElementById('formVariety').value;
      const organization = document.getElementById('formQuantity').value.trim() || 'Independent';
      const message = document.getElementById('formMessage').value.trim();

      const salutation = currentLang === 'kn' ? 'ನಮಸ್ಕಾರ ಡಾ. ತಿಮ್ಮೇಗೌಡ (ಸಂತೋಷ್) ರವರೇ,' : 'Namaskara Dr. Thimmegowda (Santhosh),';
      const text = encodeURIComponent(
        `${salutation}\n\n` +
        `• ಹೆಸರು / Name: ${name}\n` +
        `• ಸಂಸ್ಥೆ / ಊರು / Organization: ${organization}\n` +
        `• ವಿಷಯ / Purpose: ${purpose}\n` +
        (message ? `• ವಿವರ / Message: ${message}\n\n` : '\n') +
        (currentLang === 'kn' ? 'ಧನ್ಯವಾದಗಳು!' : 'Looking forward to connecting with you. Dhanyavadagalu!')
      );

      window.open(`https://wa.me/919449617670?text=${text}`, '_blank');
    });
  }

  // 7. AWARDS PHOTO SLIDER CONTROLLER (Auto-slides every 6 seconds)
  function initAwardsSlider() {
    const slider = document.getElementById('awardSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const dots = document.querySelectorAll('#sliderDots .slider-dot');
    const counter = document.getElementById('slideCounter');
    const progressFill = document.getElementById('sliderProgress');
    const prevBtn = document.getElementById('sliderPrevBtn');
    const nextBtn = document.getElementById('sliderNextBtn');
    const sliderWrapper = slider.closest('.slider-wrapper');

    const totalSlides = slides.length;
    if (totalSlides === 0) return;

    let currentIndex = 0;
    const slideDuration = 6000; // 6 seconds (between 5 and 7 seconds as requested)
    let slideTimer = null;
    let progressStartTime = 0;
    let progressAnimFrame = null;
    let isPaused = false;

    function updateCounterDisplay(index) {
      if (counter) {
        const currentStr = String(index + 1).padStart(2, '0');
        const totalStr = String(totalSlides).padStart(2, '0');
        counter.textContent = `${currentStr} / ${totalStr}`;
      }
    }

    function animateProgress(timestamp) {
      if (!progressStartTime) progressStartTime = timestamp;
      const elapsed = timestamp - progressStartTime;
      const pct = Math.min((elapsed / slideDuration) * 100, 100);

      if (progressFill) {
        progressFill.style.width = pct + '%';
      }

      if (elapsed < slideDuration) {
        if (!isPaused) {
          progressAnimFrame = requestAnimationFrame(animateProgress);
        }
      } else {
        nextSlide();
      }
    }

    function startTimer() {
      stopTimer();
      isPaused = false;
      progressStartTime = 0;
      if (progressFill) {
        progressFill.style.width = '0%';
      }
      progressAnimFrame = requestAnimationFrame(animateProgress);
    }

    function stopTimer() {
      if (progressAnimFrame) {
        cancelAnimationFrame(progressAnimFrame);
        progressAnimFrame = null;
      }
      if (slideTimer) {
        clearTimeout(slideTimer);
        slideTimer = null;
      }
    }

    function showSlide(index) {
      slides.forEach((s, idx) => {
        if (idx === index) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });

      dots.forEach((d, idx) => {
        if (idx === index) {
          d.classList.add('active');
        } else {
          d.classList.remove('active');
        }
      });

      currentIndex = index;
      updateCounterDisplay(currentIndex);
      startTimer();
    }

    function nextSlide() {
      const nextIdx = (currentIndex + 1) % totalSlides;
      showSlide(nextIdx);
    }

    function prevSlide() {
      const prevIdx = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(prevIdx);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevSlide();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
      });
    });

    if (sliderWrapper) {
      sliderWrapper.addEventListener('mouseenter', () => {
        isPaused = true;
        stopTimer();
      });

      sliderWrapper.addEventListener('mouseleave', () => {
        isPaused = false;
        startTimer();
      });
    }

    // Touch Swipe Gestures
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      isPaused = true;
      stopTimer();
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      isPaused = false;
      startTimer();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }

    // Initialize
    updateCounterDisplay(0);
    startTimer();
  }

  // 8. TEACHING PHOTO SLIDER CONTROLLER (Auto-slides every 6 seconds)
  function initTeachingSlider() {
    const slider = document.getElementById('teachingPhotoSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const dots = document.querySelectorAll('#teachingSliderDots .slider-dot');
    const counter = document.getElementById('teachingSlideCounter');
    const progressFill = document.getElementById('teachingSliderProgress');
    const prevBtn = document.getElementById('teachingSliderPrevBtn');
    const nextBtn = document.getElementById('teachingSliderNextBtn');
    const sliderWrapper = slider.closest('.slider-wrapper');

    const totalSlides = slides.length;
    if (totalSlides === 0) return;

    let currentIndex = 0;
    const slideDuration = 6000; // 6 seconds (between 5 and 7 seconds as requested)
    let slideTimer = null;
    let progressStartTime = 0;
    let progressAnimFrame = null;
    let isPaused = false;

    function updateCounterDisplay(index) {
      if (counter) {
        const currentStr = String(index + 1).padStart(2, '0');
        const totalStr = String(totalSlides).padStart(2, '0');
        counter.textContent = `${currentStr} / ${totalStr}`;
      }
    }

    function animateProgress(timestamp) {
      if (!progressStartTime) progressStartTime = timestamp;
      const elapsed = timestamp - progressStartTime;
      const pct = Math.min((elapsed / slideDuration) * 100, 100);

      if (progressFill) {
        progressFill.style.width = pct + '%';
      }

      if (elapsed < slideDuration) {
        if (!isPaused) {
          progressAnimFrame = requestAnimationFrame(animateProgress);
        }
      } else {
        nextSlide();
      }
    }

    function startTimer() {
      stopTimer();
      isPaused = false;
      progressStartTime = 0;
      if (progressFill) {
        progressFill.style.width = '0%';
      }
      progressAnimFrame = requestAnimationFrame(animateProgress);
    }

    function stopTimer() {
      if (progressAnimFrame) {
        cancelAnimationFrame(progressAnimFrame);
        progressAnimFrame = null;
      }
      if (slideTimer) {
        clearTimeout(slideTimer);
        slideTimer = null;
      }
    }

    function showSlide(index) {
      slides.forEach((s, idx) => {
        if (idx === index) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });

      dots.forEach((d, idx) => {
        if (idx === index) {
          d.classList.add('active');
        } else {
          d.classList.remove('active');
        }
      });

      currentIndex = index;
      updateCounterDisplay(currentIndex);
      startTimer();
    }

    function nextSlide() {
      const nextIdx = (currentIndex + 1) % totalSlides;
      showSlide(nextIdx);
    }

    function prevSlide() {
      const prevIdx = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(prevIdx);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevSlide();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
      });
    });

    if (sliderWrapper) {
      sliderWrapper.addEventListener('mouseenter', () => {
        isPaused = true;
        stopTimer();
      });

      sliderWrapper.addEventListener('mouseleave', () => {
        isPaused = false;
        startTimer();
      });
    }

    // Touch Swipe Gestures
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      isPaused = true;
      stopTimer();
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      isPaused = false;
      startTimer();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }

    // Initialize
    updateCounterDisplay(0);
    startTimer();
  }

  // 5. LIGHTBOX MODAL FOR PRESS CLIPPINGS AND PHOTOS
  function initLightbox() {
    const modal = document.getElementById('imageLightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const modalCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.getElementById('lightboxCloseBtn');

    if (!modal || !modalImg) return;

    document.querySelectorAll('.zoomable-img, .press-card img, .blueprint-media img, .chakra-img').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        modalImg.src = img.getAttribute('data-full') || img.src;
        if (modalCaption) {
          modalCaption.textContent = img.alt || '';
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  initAwardsSlider();
  initTeachingSlider();
  initLightbox();
});
