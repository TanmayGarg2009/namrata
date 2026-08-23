export interface AdmireCard {
  id: string;
  iconName: 'Sparkles' | 'Compass' | 'Shield' | 'Flame' | 'Star' | 'Target';
  title: string;
  subtitle: string;
  gradient: string;
  iconColor: string;
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

  introSequence: {
    greeting: "Hey Namrata... ✨",
    date: "28th August.",
    special: "The special day for you.",
    birthday: "YOUR BIRTHDAY!!! 🎂",
    celebrate: "Okay, let's celebrate.",
    buttonText: "Enter Your Birthday ✨",
  },

  personalMemory: {
    sectionTitle: "Okay, something I remember...",
    jokeSetup: "The first time I saw you, I genuinely thought you were an",
    jokeHighlight: "Ichchadhari Naagin 🐍",
    jokeReaction: "Ehmm... yeah.",
    jokeAdmit: "Maybe I was slightly wrong about that.",
    transition: "But honestly, there's a lot about you that I admire."
  },

  thingsIAdmire: [
    {
      id: "confidence",
      iconName: "Sparkles",
      title: "Your Confidence",
      subtitle: "The natural ease with which you carry yourself in any room.",
      gradient: "from-amber-500/20 via-gold-500/10 to-transparent",
      iconColor: "text-gold-400",
    },
    {
      id: "own-way",
      iconName: "Compass",
      title: "Doing Things Your Own Way",
      subtitle: "Never following the herd, always trusting your own instincts.",
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      iconColor: "text-cyan-300",
    },
    {
      id: "stand-out",
      iconName: "Star",
      title: "Standing Out Without Trying",
      subtitle: "An effortless presence that speaks for itself.",
      gradient: "from-lavender-500/20 via-indigo-500/10 to-transparent",
      iconColor: "text-lavender-300",
    },
    {
      id: "personality",
      iconName: "Flame",
      title: "Your Personality",
      subtitle: "Sharp, spirited, and impossible to mistake for anyone else.",
      gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
      iconColor: "text-rose-400",
    },
    {
      id: "strength",
      iconName: "Shield",
      title: "Your Strength",
      subtitle: "Resilient and grounded, facing every challenge head-on.",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      iconColor: "text-emerald-300",
    },
    {
      id: "determination",
      iconName: "Target",
      title: "Your Determination",
      subtitle: "The focus you put in when you set your mind on something.",
      gradient: "from-peach-300/20 via-amber-400/10 to-transparent",
      iconColor: "text-peach-200",
    }
  ] as AdmireCard[],

  makeAWish: {
    title: "Alright, Namrata...",
    subtitle: "Make a wish. ✨",
    prompt: "Tap the candle flame to seal your wish into the stars.",
    wishedText1: "Wish made. ✨",
    wishedText2: "Now let's hope the universe is listening."
  },

  secretSurprise: {
    badge: "A QUICK NOTE",
    teaser: "Wait... there's more 👀",
    buttonText: "Open Note ✉️",
    openedBadge: "JUST SO YOU KNOW",
    mainMessage: "Yes, this whole website is for you.",
    secondaryMessage: "28th August wasn't going to pass unnoticed. Now go enjoy your day."
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
