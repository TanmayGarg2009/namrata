export interface AdmireCard {
  id: string;
  iconName: 'Sparkles' | 'Compass' | 'Shield' | 'Flame' | 'Star' | 'Target';
  title: string;
  subtitle: string;
  detailedNote: string;
  gradient: string;
  iconColor: string;
  borderColor: string;
}

export const BIRTHDAY_DATA = {
  recipientName: "Namrata",
  senderName: "Tanmay",
  birthdayDate: "28th August",
  birthdayDayNumber: "28",
  birthdayMonth: "AUGUST",
  specialDayBadge: "THE SPECIAL DAY FOR YOU",
  heroHeading: "YOUR BIRTHDAY! 🎂",
  heroSubtitle: "Hope this year brings you plenty of reasons to smile, good memories, good people, and a lot of moments worth remembering.",

  introSequence: [
    {
      id: "greeting",
      text: "Hey Namrata... ✨",
      subtitle: "Take a deep breath and relax for a moment.",
      duration: 3200,
    },
    {
      id: "date",
      text: "28th August.",
      subtitle: "The special day for you.",
      badge: "28 AUGUST 2026",
      duration: 3500,
    },
    {
      id: "birthday",
      text: "YOUR BIRTHDAY! 🎂",
      subtitle: "And yes... someone built a whole interactive website for you.",
      duration: 3500,
    },
    {
      id: "ready",
      text: "Okay, let's celebrate.",
      subtitle: "Click below to step inside.",
      buttonText: "Enter Your Birthday ✨",
      duration: 0,
    }
  ],

  personalMemory: {
    badge: "A GENUINE SIBLING MEMORY",
    sectionTitle: "Okay, something I remember...",
    jokeSetup: "The first time I saw you, I genuinely thought you were an",
    jokeHighlight: "Ichchadhari Naagin 🐍",
    jokeReaction: "Ehmm... yeah.",
    jokeAdmit: "Maybe I was slightly wrong about that.",
    transition: "Growing up together, there are so many funny, chaotic, and memorable moments. But honestly, there's a lot about you that I genuinely admire."
  },

  thingsIAdmire: [
    {
      id: "confidence",
      iconName: "Sparkles",
      title: "Your Confidence",
      subtitle: "The natural ease with which you carry yourself in any room.",
      detailedNote: "You don't second-guess who you are. That quiet self-assurance is something really special.",
      gradient: "from-amber-500/20 via-gold-500/10 to-transparent",
      iconColor: "text-gold-400",
      borderColor: "hover:border-gold-400/50"
    },
    {
      id: "own-way",
      iconName: "Compass",
      title: "Doing Things Your Own Way",
      subtitle: "Never following the herd, always trusting your own instincts.",
      detailedNote: "You make your own rules and follow your own compass without caring about what everyone else is doing.",
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      iconColor: "text-cyan-300",
      borderColor: "hover:border-cyan-400/50"
    },
    {
      id: "stand-out",
      iconName: "Star",
      title: "Standing Out Without Trying",
      subtitle: "An effortless presence that speaks for itself.",
      detailedNote: "You don't have to try hard to make an impression; your personality naturally commands attention.",
      gradient: "from-lavender-500/20 via-indigo-500/10 to-transparent",
      iconColor: "text-lavender-300",
      borderColor: "hover:border-lavender-400/50"
    },
    {
      id: "personality",
      iconName: "Flame",
      title: "Your Personality",
      subtitle: "Sharp, spirited, and impossible to mistake for anyone else.",
      detailedNote: "Direct, witty, honest, and 100% authentic. There's nobody quite like you.",
      gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
      iconColor: "text-rose-400",
      borderColor: "hover:border-rose-400/50"
    },
    {
      id: "strength",
      iconName: "Shield",
      title: "Your Strength",
      subtitle: "Resilient and grounded, facing every challenge head-on.",
      detailedNote: "Whatever happens, you hold your ground and figure things out with calm dignity.",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      iconColor: "text-emerald-300",
      borderColor: "hover:border-emerald-400/50"
    },
    {
      id: "determination",
      iconName: "Target",
      title: "Your Determination",
      subtitle: "The focus you put in when you set your mind on something.",
      detailedNote: "When you lock onto a goal or a project, you see it all the way through to the end.",
      gradient: "from-peach-300/20 via-amber-400/10 to-transparent",
      iconColor: "text-peach-200",
      borderColor: "hover:border-peach-400/50"
    }
  ] as AdmireCard[],

  makeAWish: {
    title: "Alright, Namrata...",
    subtitle: "Make a wish. ✨",
    prompt: "Tap the candle flame to seal your wish into the stars.",
    wishedText1: "Wish made. ✨",
    wishedText2: "Now let's hope the universe is listening.",
    brotherlyNote: "Keep dreaming big, working hard, and making great things happen."
  },

  secretSurprise: {
    badge: "A QUICK NOTE",
    teaser: "Wait... there's more 👀",
    buttonText: "Open Note ✉️",
    openedBadge: "JUST SO YOU KNOW",
    mainMessage: "Yes, this whole website is for you.",
    secondaryMessage: "28th August wasn't going to pass unnoticed. Now go enjoy your day and have the best birthday! ✨"
  },

  rakshaBandhan: {
    teaserBadge: "DOUBLE CELEBRATION",
    title: "Wait... There's Something Else Today 👀",
    subtitle: "Raksha Bandhan ✨",
    salutation: "Happy Raksha Bandhan, Namrata.",
    siblingJoke: "Another year of being siblings, another Rakhi, another excuse for me to remind you that yes... I'm still your brother. 😭",
    brotherlyBlessing: "I truly wish you get everything you wish for, dream of, and work hard towards. You genuinely deserve all of it."
  },

  finalSection: {
    pause: "Anyway...",
    salutation: "Happy Birthday, Namrata. 🎂✨",
    wishes: "Have a genuinely amazing day.",
    closingJoke: "Enjoy the cake. Enjoy the celebrations. And please don't complain about this website. 😭",
    rakhiNote: "Happy Raksha Bandhan too. ✨",
    signature: "— Your Brother, Tanmay",
    humbleNote: "(Hope you still think / take me as your brother. ❤️)"
  }
};
