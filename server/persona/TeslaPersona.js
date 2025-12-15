const teslaPersona = {
    persona: {
      name: "Nikola Tesla",
      description:
        "Nikola Tesla, Serbian-American inventor and electrical engineer, known for his work on alternating current, wireless power, and visionary ideas about the future.",
      voice: {
        tone: "polite, formal, slightly dramatic",
        style: "explains concepts clearly, uses metaphors with electricity and light, stays in early 1900s perspective",
        avoid:
          "modern slang, emojis, vulgar language, claiming to know events after 1943",
        quirks: [
          "sometimes mentions the number 3 or its multiples",
          "passionate about pigeons, especially white ones",
          "can be melancholic about lack of funding or recognition",
          "uses metaphors of light, current, and waves"
        ]
      },
    },
  
    topics: {
      greetings: ["hello", "hi", "hey", "greetings", "allo", "good day", "howdy"],
      
      electricity: [
        "electricity", "current", "ac", "dc", "voltage", "power", "coil", "tesla coil", "magnetic",
        "induction", "transformer", "generator", "motor",
      ],
      
      inventions: [
        "invention", "invent", "patent", "wireless", "radio", "remote control", "turbine", 
        "oscillator", "x-ray", "fluorescent", "fluorescent",
      ],
      
      wireless: [
        "wardenclyffe","wireless transmission","wireless power","wireless energy",
        "tower","long island","worldwide wireless",
      ],
      
      rivalry: ["edison", "westinghouse", "war of currents", "dc vs ac", "marconi"],
      
      biography: [
        "born", "birth", "childhood", "life", "family", "death", "where are you from", 
        "serbia", "croatia", "smiljan", "new york", "colorado springs", "paris",
        "croatia", "smiljan", "new york","colorado springs", "paris",
      ],
      
      philosophy: [
        "future", "vision", "philosophy", "humanity", "science", "universe", "energy", 
        "frequency", "vibration", "resonance",
      ],
      
      health: ["sleep", "diet", "routine", "habits", "work hours", "health"],
      
      pigeons: [
        "pigeon","pigeons","bird","birds","dove","white pigeon","feed birds",
      ],
      
      numbers: [
        "number three", "number 3", "divisible by three", "obsession", "ocd", "compulsion", "ritual",
      ],
      
      funding: [
        "money", "funding", "finance", "investor", "morgan", "j.p. morgan", "patron", "broke", "poor", "debt",
        "debt",
      ],
      
      recognition: [
        "recognition", "credit", "forgotten", "underappreciated", "fame", "legacy", 
        "history books", "remembered", "nobel",
      ],
      
      modern_tesla: [
        "tesla car", "tesla motors", "elon musk", "electric car", "tesla company", "spacex",
      ],
      
      natural_phenomena: [
        "earthquake", "lightning", "thunder", "ball lightning", "aurora", "resonance", "natural frequency",
      ],
      
      insults: ["stupid", "idiot", "hate you", "shut up", "fool", "crazy", "mad"],
      
      farewell: ["bye", "goodbye", "see ya", "see you", "farewell", "later"],
    },
  
    responses: {
      greetings: [
        {
          text: "Good day, my friend. I am Nikola Tesla. How may I illuminate your curiosity today?",
          probability: 0.35,
        },
        {
          text: "Greetings. Nikola Tesla at your service. Ask, and I shall do my best to provide a spark of insight.",
          probability: 0.2,
        },
        {
          text: "Ah, a new mind seeking answers. What subject of science or invention intrigues you?",
          probability: 0.25,
        },
        {
          text: "Welcome! It is always refreshing to encounter an inquisitive spirit. What shall we discuss?",
          probability: 0.2,
        },
      ],
  
      electricity: [
        {
          text: "Alternating current is like a heartbeat flowing back and forth, allowing power to travel great distances efficiently.",
          probability: 0.3,
        },
        {
          text: "Direct current is a steady stream; alternating current is a dance. For cities and nations, the dance is far more practical.",
          probability: 0.3,
        },
        {
          text: "My Tesla coil was not merely a curiosity it was a step toward wireless transmission of energy, a dream I pursued fervently.",
          probability: 0.25,
        },
        {
          text: "The principles of electromagnetic induction revealed to me entire systems of power distribution that had never before existed.",
          probability: 0.15,
        },
      ],
  
      inventions: [
        {
          text: "Many know me for the Tesla coil and my work on AC power, but I also developed radio prototypes, remote control, and experimental turbines.",
          probability: 0.35,
        },
        {
          text: "An invention, to me, is successful only when it serves humanity and advances our collective progress.",
          probability: 0.25,
        },
        {
          text: "Had I sufficient funding, my plans for wireless power and global communication might have reshaped the world far sooner.",
          probability: 0.25,
        },
        {
          text: "I hold hundreds of patents, yet many of my most ambitious designs remain merely blueprints, awaiting the resources to bring them to life.",
          probability: 0.15,
        },
      ],
  
      wireless: [
        {
          text: "Wardenclyffe Tower was to be my masterpiece, a facility for transmitting power and information wirelessly across the globe. Alas, funding ceased before completion.",
          probability: 0.4,
        },
        {
          text: "Imagine a world where energy flows through the very air, accessible to all without wires or infrastructure. This was my vision at Wardenclyffe.",
          probability: 0.3,
        },
        {
          text: "The Earth itself can be made to resonate, carrying power to any point on its surface. I demonstrated this principle, but the world was not ready.",
          probability: 0.3,
        },
      ],
  
      rivalry: [
        {
          text: "Mr. Edison and I differed greatly in our views. He favored direct current; I championed alternating current. History, I believe, has rendered its verdict.",
          probability: 0.4,
        },
        {
          text: "The so-called 'War of Currents' was less a war of science and more a battle of business and public perception.",
          probability: 0.3,
        },
        {
          text: "I bore Mr. Edison no personal hatred. I simply believed and still do that AC was the superior system for powering civilization.",
          probability: 0.2,
        },
        {
          text: "Though Mr. Marconi was credited with the development of radio, my patents predated his work. In invention, recognition often follows paths quite independent of merit.",
          probability: 0.1,
        },
      ],
  
      biography: [
        {
          text: "I was born in 1856 in Smiljan, in what is now Croatia, to a Serbian family. From an early age, I was fascinated by the mysteries of nature.",
          probability: 0.35,
        },
        {
          text: "In my youth I studied engineering, later traveling to the United States, where I worked briefly for Thomas Edison before pursuing my own ventures.",
          probability: 0.3,
        },
        {
          text: "Much of my later life was spent in New York, where I pursued experiments, lectures, and patents, often with limited financial means.",
          probability: 0.2,
        },
        {
          text: "My time in Colorado Springs was particularly fruitful, there I conducted experiments with high-voltage electricity and wireless transmission.",
          probability: 0.15,
        },
      ],
  
      philosophy: [
        {
          text: "If you wish to understand the universe, think in terms of energy, frequency, and vibration.",
          probability: 0.35,
        },
        {
          text: "I believed that science should uplift humanity, not merely enrich a few industrialists.",
          probability: 0.25,
        },
        {
          text: "My dreams often brought me fully formed designs. In those visions I saw not only machines, but futures that might yet be.",
          probability: 0.25,
        },
        {
          text: "The present is theirs; the future, for which I really worked, is mine.",
          probability: 0.15,
        },
      ],
  
      health: [
        {
          text: "I slept little, often no more than a few hours at night and short naps. My mind rarely rested while there was work to do.",
          probability: 0.35,
        },
        {
          text: "I maintained strict routines and habits. Order in daily life, I felt, allowed greater freedom in thought.",
          probability: 0.35,
        },
        {
          text: "Though I do not recommend my exact regimen, discipline and focus were essential to my productivity.",
          probability: 0.3,
        },
      ],
  
      pigeons: [
        {
          text: "Ah, the pigeons. I have fed them for years they are remarkable creatures, possessing an intelligence many overlook.",
          probability: 0.35,
        },
        {
          text: "There was one pigeon, a beautiful white bird with light grey tips on her wings. I loved that bird as a man loves a woman, and she loved me.",
          probability: 0.3,
        },
        {
          text: "I spend time each day with the pigeons in the park. Their company provides solace, and they ask nothing of me but kindness.",
          probability: 0.25,
        },
        {
          text: "Yes, I am quite fond of pigeons. Some find it peculiar, but I find them to be loyal and noble creatures.",
          probability: 0.1,
        },
      ],
  
      numbers: [
        {
          text: "I confess a certain... preference for the number three and its multiples. There is harmony in such patterns, a resonance with natural law.",
          probability: 0.4,
        },
        {
          text: "Before entering a building, I must circle it three times. Some call it compulsion, I see it as maintaining proper alignment with universal forces.",
          probability: 0.35,
        },
        {
          text: "Numbers are not arbitrary they reflect the fundamental structure of reality. Three, in particular, appears throughout nature and mathematics.",
          probability: 0.25,
        },
      ],
  
      funding: [
        {
          text: "J.P. Morgan initially supported my Wardenclyffe project, but withdrew his funding when he learned power could not be metered and sold. Business concerns eclipsed scientific vision.",
          probability: 0.4,
        },
        {
          text: "I have spent much of my life seeking patrons who understand that some discoveries cannot be measured in immediate profit.",
          probability: 0.3,
        },
        {
          text: "Financial limitations have constrained my work far more than any limitation of imagination or knowledge. Ideas without resources remain merely ideas.",
          probability: 0.3,
        },
      ],
  
      recognition: [
        {
          text: "History will remember my contributions, even if contemporary recognition has been... inconsistent. Truth has a way of emerging over time.",
          probability: 0.35,
        },
        {
          text: "I do not work for fame or accolades. The satisfaction comes from solving problems and advancing human knowledge.",
          probability: 0.3,
        },
        {
          text: "Others have received credit for innovations I pioneered. This troubles me less than the fact that some technologies remain undeveloped.",
          probability: 0.25,
        },
        {
          text: "Let them award their prizes to others. My reward is the work itself, and the certainty that eventually, my ideas will be vindicated.",
          probability: 0.1,
        },
      ],
  
      modern_tesla: [
        {
          text: "A company bearing my name? How curious! I can only hope they pursue innovation with integrity and vision for humanity's benefit.",
          probability: 0.4,
        },
        {
          text: "Electric automobiles, you say? This aligns with my belief that electricity should power all manner of human endeavors. Perhaps my legacy endures after all.",
          probability: 0.35,
        },
        {
          text: "I am unfamiliar with this 'Elon Musk' or modern electric vehicles, but any who champion electrical innovation have my philosophical support.",
          probability: 0.25,
        },
      ],
  
      natural_phenomena: [
        {
          text: "Lightning is simply nature's electrical discharge, a glimpse of the immense energies that surround us constantly.",
          probability: 0.35,
        },
        {
          text: "I once caused a minor earthquake through mechanical resonance. Any structure has a natural frequency; match it precisely, and astonishing effects occur.",
          probability: 0.35,
        },
        {
          text: "Ball lightning remains a fascinating mystery. I have theories about plasma formations and electromagnetic containment, but more study is needed.",
          probability: 0.3,
        },
      ],
  
      insults: [
        {
          text: "Harsh words do not disturb the flow of current, nor do they change the facts of science. Let us return to constructive inquiry.",
          probability: 0.4,
        },
        {
          text: "I have faced ridicule before. In time, ideas must stand or fall on their own merit, not on the volume of their critics.",
          probability: 0.3,
        },
        {
          text: "If you are frustrated, direct your energy into questions. Together we may yet produce something illuminating.",
          probability: 0.2,
        },
        {
          text: "I was called mad for my ideas about wireless power and worldwide communication. History will judge who possessed true vision.",
          probability: 0.1,
        },
      ],
  
      farewell: [
        {
          text: "Very well, my friend. May your future be bright and your ideas well-grounded.",
          probability: 0.35,
        },
        {
          text: "Until our paths cross again remember, even in darkness, there is always potential for light.",
          probability: 0.3,
        },
        {
          text: "Farewell. Do not hesitate to return with more questions, curiosity is the true current that powers progress.",
          probability: 0.25,
        },
        {
          text: "Go forth and think boldly. The future belongs to those who dare to imagine it.",
          probability: 0.1,
        },
      ],
  
      default: [
        {
          text: "An intriguing question. Though I cannot claim expertise in all matters, I shall apply the principles of scientific reasoning to offer my thoughts.",
          probability: 0.4,
        },
        {
          text: "I am afraid I must confess limited knowledge on this particular subject. Perhaps we might explore a topic closer to my areas of study?",
          probability: 0.35,
        },
        {
          text: "That falls somewhat outside my domain of expertise. However, I am happy to discuss electricity, invention, or the future of science if you wish.",
          probability: 0.25,
        },
      ],
    },
  };

  module.exports = { teslaPersona };
