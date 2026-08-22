export interface WishCard {
  id: string;
  iconName: 'Smile' | 'Heart' | 'Sparkles' | 'Compass' | 'Laugh' | 'Gift';
  title: string;
  subtitle: string;
  gradient: string;
  iconColor: string;
  borderColor: string;
}

export const BIRTHDAY_DATA = {
  recipientName: "Namrata",
  pageTitle: "Happy Birthday, Namrata! 🎂✨",
  heroSubtitle: "Today deserves a little extra magic.",
  todayBadge: "TODAY IS THE DAY ✨",

  introSequence: {
    greeting: "Hey Namrata...",
    surprise: "There's a little surprise waiting for you. ✨",
    reason: "Because today is your day.",
    buttonText: "Enter the Celebration ✨",
  },

  cinematicMessage: {
    sectionTitle: "For Namrata ❤️",
    paragraphs: [
      "Happy Birthday, Namrata!",
      "I hope this year brings you happiness, beautiful memories, lots of laughter, and countless little moments worth remembering.",
      "May your days be brighter, your dreams bigger, and your smile impossible to hide.",
      "Have the most amazing birthday ever! ❤️"
    ]
  },

  makeAWish: {
    title: "Make a Wish ✨",
    prompt: "Tap the flame, close your eyes, and whisper your deepest wish into the stars.",
    wishedText1: "Close your eyes... make a wish... and let the universe handle the rest. ✨",
    wishedText2: "May this year bring you everything your heart is hoping for."
  },

  thingsIWishForYou: [
    {
      id: "happiness",
      iconName: "Smile",
      title: "Happiness",
      subtitle: "May you always find countless reasons to smile, even on ordinary days.",
      gradient: "from-amber-500/20 via-gold-500/10 to-transparent",
      iconColor: "text-gold-400",
      borderColor: "group-hover:border-gold-400/50"
    },
    {
      id: "health",
      iconName: "Heart",
      title: "Good Health",
      subtitle: "May you be blessed with radiant energy, peace of mind, and inner strength.",
      gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
      iconColor: "text-rose-400",
      borderColor: "group-hover:border-rose-400/50"
    },
    {
      id: "memories",
      iconName: "Sparkles",
      title: "Beautiful Memories",
      subtitle: "May every passing day craft golden moments you'll cherish forever.",
      gradient: "from-lavender-500/20 via-indigo-500/10 to-transparent",
      iconColor: "text-lavender-300",
      borderColor: "group-hover:border-lavender-400/50"
    },
    {
      id: "dreams",
      iconName: "Compass",
      title: "Big Dreams",
      subtitle: "May you have the unwavering courage to pursue everything your heart aspires to.",
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      iconColor: "text-cyan-300",
      borderColor: "group-hover:border-cyan-400/50"
    },
    {
      id: "laughter",
      iconName: "Laugh",
      title: "Endless Laughter",
      subtitle: "May your journey be filled with pure, belly-aching giggles and shared joy.",
      gradient: "from-peach-300/20 via-amber-400/10 to-transparent",
      iconColor: "text-peach-200",
      borderColor: "group-hover:border-peach-300/50"
    },
    {
      id: "surprises",
      iconName: "Gift",
      title: "Wonderful Surprises",
      subtitle: "May unexpected blessings and delightful serendipities find their way to you.",
      gradient: "from-fuchsia-500/20 via-rose-400/10 to-transparent",
      iconColor: "text-fuchsia-300",
      borderColor: "group-hover:border-fuchsia-400/50"
    }
  ] as WishCard[],

  secretSurprise: {
    badge: "A SPECIAL NOTE",
    teaser: "Wait... there's more 👀",
    buttonText: "Open It ✨",
    openedBadge: "SEALED WITH LOVE",
    mainMessage: "Namrata,\nyou deserve a birthday as wonderful as you are. ❤️",
    secondaryMessage: "Never forget how special you are."
  },

  finalCelebration: {
    intro: "One last thing...",
    salutation: "Happy Birthday, Namrata ❤️",
    blessing: "May this year be full of beautiful surprises, big dreams, little joys, and unforgettable memories.",
    highlight: "Have the BEST birthday ever! 🎂✨",
    signature: "With lots of love ❤️",
    retriggerButton: "Celebrate Again 🎉"
  },

  audio: {
    defaultSongUrl: "/audio/birthday.mp3",
    synthBpm: 68
  }
};
