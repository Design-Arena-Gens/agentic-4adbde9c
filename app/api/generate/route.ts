import { NextResponse } from 'next/server'

const postTemplates: Record<string, any> = {
  fashion: {
    titles: [
      "Transform Your Wardrobe with These Must-Have Pieces",
      "Effortless Style: 5 Fashion Essentials You Need Now",
      "Elevate Your Look with These Trending Fashion Finds",
      "Timeless Fashion Pieces That Never Go Out of Style",
      "Your Ultimate Guide to Chic and Affordable Fashion"
    ],
    descriptions: [
      "Discover amazing fashion finds that will revolutionize your style! From versatile basics to statement pieces, these carefully curated items are perfect for creating stunning outfits. Click the link to explore exclusive deals and transform your wardrobe today!",
      "Ready to upgrade your fashion game? These handpicked essentials combine quality, style, and affordability. Whether you're dressing up or keeping it casual, these pieces work for every occasion. Shop now and enjoy exclusive discounts!",
      "Looking for fashion that makes a statement? These trending pieces are flying off the shelves! From office-ready outfits to weekend casual, find everything you need to look fabulous. Limited time offers available!"
    ],
    hashtags: [
      "#FashionFinds", "#StyleInspiration", "#OOTD", "#FashionDeals", "#TrendyStyle",
      "#AffordableFashion", "#WardrobeEssentials", "#FashionAddict", "#ShopTheLook", "#StyleTips"
    ],
    ctas: [
      "Click the link in bio to shop these amazing deals! 🛍️",
      "Tap to discover more and get exclusive discounts! 💎",
      "Shop now before they sell out! Limited stock available! ⚡",
      "Save this post and click the link to start shopping! 💕"
    ]
  },
  "home-decor": {
    titles: [
      "Transform Your Space with These Home Decor Gems",
      "Cozy Home Essentials That Make a Difference",
      "Budget-Friendly Ways to Elevate Your Home",
      "Create Your Dream Home with These Decor Ideas",
      "Stunning Home Decor Finds You'll Love"
    ],
    descriptions: [
      "Make your house feel like home with these gorgeous decor pieces! From cozy throws to elegant wall art, these items will transform any space. Discover affordable luxury and create the home you've always dreamed of. Shop now for the best deals!",
      "Your perfect home is just a click away! These carefully selected decor items combine style and functionality. Whether you're redecorating or just adding finishing touches, these pieces will make your space shine. Don't miss out on these amazing finds!",
      "Ready to refresh your living space? These trending home decor items are perfect for creating a warm and inviting atmosphere. From modern minimalist to cozy farmhouse, find your style and shop exclusive deals today!"
    ],
    hashtags: [
      "#HomeDecor", "#InteriorDesign", "#HomeInspo", "#DecorIdeas", "#CozyHome",
      "#HomeStyling", "#DreamHome", "#HomeGoals", "#DecorLovers", "#HomeImprovement"
    ],
    ctas: [
      "Link in bio to shop these beautiful pieces! 🏡",
      "Transform your space today - click to explore! ✨",
      "Tap the link to get these home decor must-haves! 🛋️",
      "Save and shop later - link in bio! 💫"
    ]
  },
  beauty: {
    titles: [
      "Glow Up: Beauty Products That Actually Work",
      "Skincare Secrets for Radiant, Healthy Skin",
      "Must-Have Beauty Products for Your Routine",
      "Achieve That Perfect Glow with These Beauty Finds",
      "Beauty Essentials Every Woman Needs"
    ],
    descriptions: [
      "Unlock your natural beauty with these amazing products! From skincare to makeup, these tried-and-tested items deliver real results. Get that glow you've always wanted with exclusive deals on premium beauty products. Shop now and treat yourself!",
      "Your best skin is waiting! These beauty essentials are game-changers for your daily routine. Whether you're looking for anti-aging solutions or everyday staples, find everything you need to look and feel beautiful. Limited time offers!",
      "Ready to elevate your beauty routine? These top-rated products are loved by thousands! From natural skincare to glamorous makeup, discover what works and shop with confidence. Click to explore exclusive beauty deals!"
    ],
    hashtags: [
      "#BeautyFinds", "#Skincare", "#MakeupLovers", "#BeautyRoutine", "#GlowUp",
      "#BeautyTips", "#SkincareTips", "#BeautyProducts", "#SelfCare", "#BeautyObsessed"
    ],
    ctas: [
      "Glow up now - click the link to shop! ✨",
      "Your beauty journey starts here - tap to explore! 💄",
      "Link in bio for exclusive beauty deals! 💅",
      "Save this post and shop your favorites! 🌟"
    ]
  },
  fitness: {
    titles: [
      "Level Up Your Fitness Game with These Must-Haves",
      "Essential Workout Gear for Maximum Results",
      "Achieve Your Fitness Goals with These Tools",
      "Transform Your Workouts with These Products",
      "Fitness Essentials That Make a Difference"
    ],
    descriptions: [
      "Take your fitness journey to the next level! These essential workout products are designed to help you achieve your goals faster. From comfortable activewear to innovative fitness tools, find everything you need to stay motivated and see results. Shop now!",
      "Ready to crush your fitness goals? These top-rated products make working out easier and more effective. Whether you're a beginner or pro, these essentials will transform your routine. Get exclusive deals on premium fitness gear today!",
      "Your strongest self is waiting! These fitness must-haves combine quality and performance. From home workouts to gym sessions, these items help you stay consistent and achieve amazing results. Limited time offers - don't miss out!"
    ],
    hashtags: [
      "#FitnessMotivation", "#WorkoutEssentials", "#FitnessGoals", "#GymLife", "#HealthyLifestyle",
      "#FitnessJourney", "#WorkoutGear", "#FitLife", "#GetFit", "#FitnessAddict"
    ],
    ctas: [
      "Start your transformation - link in bio! 💪",
      "Click to shop and reach your goals! 🎯",
      "Get fit with these essentials - tap the link! 🏋️",
      "Shop now and save on fitness gear! ⚡"
    ]
  },
  tech: {
    titles: [
      "Tech Gadgets That Will Simplify Your Life",
      "Must-Have Tech Products for 2025",
      "Innovative Gadgets You Didn't Know You Needed",
      "Upgrade Your Tech Game with These Finds",
      "Smart Tech Solutions for Everyday Life"
    ],
    descriptions: [
      "Discover the tech gadgets that are changing the game! From productivity tools to entertainment essentials, these innovative products make life easier and more enjoyable. Shop the latest tech at unbeatable prices and stay ahead of the curve!",
      "Level up your tech collection with these must-have gadgets! Whether you're working from home or on the go, these products combine functionality with cutting-edge design. Explore exclusive deals on the hottest tech items today!",
      "Ready for a tech upgrade? These game-changing gadgets are perfect for tech enthusiasts and casual users alike. From smart home devices to portable accessories, find everything you need to stay connected and productive!"
    ],
    hashtags: [
      "#TechGadgets", "#TechLovers", "#Innovation", "#SmartTech", "#GadgetLife",
      "#TechDeals", "#TechEssentials", "#FutureTech", "#TechReview", "#GadgetGoals"
    ],
    ctas: [
      "Shop the latest tech - link in bio! 📱",
      "Upgrade now - click to explore! 💻",
      "Tech deals you can't miss - tap the link! ⚡",
      "Get these gadgets today - link in bio! 🔧"
    ]
  },
  food: {
    titles: [
      "Kitchen Essentials That Make Cooking a Breeze",
      "Must-Have Kitchen Tools for Home Cooks",
      "Transform Your Cooking with These Gadgets",
      "Foodie Favorites: Kitchen Items You'll Love",
      "Essential Kitchen Products for Delicious Meals"
    ],
    descriptions: [
      "Elevate your cooking game with these amazing kitchen essentials! From time-saving gadgets to professional-quality tools, these items make preparing delicious meals easier than ever. Perfect for home cooks and food enthusiasts. Shop now for exclusive deals!",
      "Ready to create restaurant-quality meals at home? These kitchen must-haves combine functionality with style. Whether you're meal prepping or hosting dinner parties, these products help you cook with confidence. Discover amazing deals today!",
      "Your dream kitchen awaits! These top-rated cooking tools and gadgets are loved by foodies everywhere. From baking essentials to innovative appliances, find everything you need to make cooking enjoyable and efficient. Limited time offers!"
    ],
    hashtags: [
      "#KitchenEssentials", "#CookingTools", "#FoodieLife", "#KitchenGadgets", "#HomeCooking",
      "#CookingMadeEasy", "#KitchenGoals", "#FoodPrep", "#CulinaryTools", "#KitchenFinds"
    ],
    ctas: [
      "Cook like a pro - link in bio! 👨‍🍳",
      "Shop kitchen essentials - tap to explore! 🍳",
      "Upgrade your kitchen today - click the link! 🔪",
      "Get these must-haves - link in bio! 🥘"
    ]
  },
  travel: {
    titles: [
      "Travel Essentials for Your Next Adventure",
      "Must-Pack Items for Every Traveler",
      "Make Travel Easier with These Products",
      "Travel Smarter with These Must-Haves",
      "Essential Travel Gear for Stress-Free Trips"
    ],
    descriptions: [
      "Planning your next adventure? Don't leave without these travel essentials! From space-saving organizers to comfort must-haves, these products make traveling smoother and more enjoyable. Shop now and prepare for your best trip yet!",
      "Travel like a pro with these game-changing products! Whether you're a frequent flyer or weekend explorer, these essentials ensure stress-free journeys. From luggage accessories to travel comfort items, find everything you need here!",
      "Make every trip unforgettable with the right gear! These carefully selected travel products combine practicality with innovation. Perfect for adventurers, business travelers, and vacation lovers. Explore exclusive deals today!"
    ],
    hashtags: [
      "#TravelEssentials", "#TravelGear", "#Wanderlust", "#TravelTips", "#TravelLife",
      "#AdventureReady", "#TravelMustHaves", "#PackingList", "#TravelSmart", "#TravelGoals"
    ],
    ctas: [
      "Pack smart - link in bio! ✈️",
      "Shop travel essentials - tap to explore! 🌍",
      "Get ready for adventure - click the link! 🎒",
      "Travel in style - link in bio! 🧳"
    ]
  },
  crafts: {
    titles: [
      "DIY Craft Supplies for Creative Projects",
      "Essential Crafting Tools for Every Artist",
      "Unleash Your Creativity with These Supplies",
      "Must-Have Craft Materials for Your Projects",
      "Crafting Made Easy with These Essentials"
    ],
    descriptions: [
      "Bring your creative visions to life with these amazing craft supplies! From beginner-friendly tools to professional-grade materials, find everything you need for your next DIY project. Shop quality supplies at great prices and start creating today!",
      "Ready to dive into your next craft project? These essential supplies make crafting easier and more enjoyable. Whether you're into scrapbooking, painting, or handmade gifts, these items help you create beautiful masterpieces. Explore deals now!",
      "Your creative journey starts here! These top-rated craft supplies are perfect for hobbyists and serious artists alike. From basic essentials to unique specialty items, discover everything you need to express your creativity. Limited time offers!"
    ],
    hashtags: [
      "#CraftSupplies", "#DIYProjects", "#CraftingLife", "#CreativeLife", "#HandmadeWithLove",
      "#CraftLovers", "#DIYCrafts", "#ArtSupplies", "#CraftingCommunity", "#MakerMovement"
    ],
    ctas: [
      "Get crafting - link in bio! 🎨",
      "Shop supplies - tap to explore! ✂️",
      "Create something amazing - click the link! 🖌️",
      "Start your project today - link in bio! 🧵"
    ]
  },
  gardening: {
    titles: [
      "Garden Essentials for a Thriving Paradise",
      "Must-Have Tools for Every Gardener",
      "Transform Your Garden with These Products",
      "Gardening Made Easy with These Essentials",
      "Create Your Dream Garden with These Tools"
    ],
    descriptions: [
      "Grow the garden of your dreams with these essential tools and supplies! From beginner-friendly basics to expert-level equipment, these products help you create a beautiful, thriving outdoor space. Shop now for green thumb essentials!",
      "Ready to level up your gardening game? These must-have items make planting, maintaining, and harvesting easier and more rewarding. Whether you have a backyard garden or balcony plants, these essentials are perfect for you. Explore deals today!",
      "Your garden paradise awaits! These top-rated gardening products help you grow healthier plants and create stunning landscapes. From soil prep to harvest, find everything you need for successful gardening. Limited time offers available!"
    ],
    hashtags: [
      "#GardeningLife", "#GardenTools", "#PlantLover", "#GreenThumb", "#GardenGoals",
      "#UrbanGardening", "#GardenEssentials", "#PlantParent", "#GrowYourOwn", "#GardenInspiration"
    ],
    ctas: [
      "Grow your garden - link in bio! 🌱",
      "Shop gardening essentials - tap to explore! 🌿",
      "Get growing today - click the link! 🌻",
      "Create your paradise - link in bio! 🌺"
    ]
  },
  pets: {
    titles: [
      "Pet Essentials Your Furry Friend Will Love",
      "Must-Have Products for Happy, Healthy Pets",
      "Spoil Your Pet with These Amazing Finds",
      "Essential Pet Products Every Owner Needs",
      "Keep Your Pet Happy with These Must-Haves"
    ],
    descriptions: [
      "Give your furry friend the best with these amazing pet products! From cozy beds to interactive toys, these essentials keep your pet happy, healthy, and entertained. Shop now for quality pet supplies at unbeatable prices!",
      "Your pet deserves the best! These carefully selected products combine quality, safety, and fun. Whether you have dogs, cats, or other pets, find everything you need to keep them healthy and happy. Explore exclusive deals today!",
      "Ready to spoil your pet? These top-rated products are loved by pets and owners everywhere! From grooming essentials to training tools, discover items that make pet parenting easier and more enjoyable. Limited time offers!"
    ],
    hashtags: [
      "#PetEssentials", "#DogLover", "#CatLover", "#PetLife", "#FurBaby",
      "#PetProducts", "#HappyPets", "#PetCare", "#PetLovers", "#PetParent"
    ],
    ctas: [
      "Spoil your pet - link in bio! 🐾",
      "Shop pet essentials - tap to explore! 🐶",
      "Get these must-haves - click the link! 🐱",
      "Make your pet happy - link in bio! 💕"
    ]
  }
}

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

function getRandomHashtags(hashtags: string[], count: number = 10): string[] {
  const shuffled = [...hashtags].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export async function POST(request: Request) {
  const { niche } = await request.json()

  const template = postTemplates[niche] || postTemplates.fashion

  const post = {
    title: getRandomElement(template.titles),
    description: getRandomElement(template.descriptions),
    hashtags: getRandomHashtags(template.hashtags),
    callToAction: getRandomElement(template.ctas),
    date: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return NextResponse.json(post)
}
