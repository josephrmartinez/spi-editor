import { PartialBlock } from "@blocknote/core";

export interface WritingPrompt {
  title: string;
  prompt: string;
}

export interface MentorText {
  title: string;
  subtitle?: string;
  summary?: string;
  author: string;
  source?: string;
  pages?: string;
  genre?: string;
  theme?: string;
  tone?: string;
  style?: string;
  structure?: string;
  length?: string;
  content?: PartialBlock[];
}

export const mentorTexts: MentorText[] = [
  {
    title: "Shitty First Drafts",
    author: "Anne Lamott",
    source: "Bird by Bird",
    summary:
      "Great writing begins with a messy, imperfect first draft that you must embrace and revise to transform raw ideas into polished work.",
    content: [
      {
        type: "paragraph",
        content:
          "Now, practically even better news than that of short assignments is the idea of shitty first drafts. All good writers write them. This is how they end up with good second drafts and terrific third drafts. People tend to look at successful writers who are getting their books published and maybe even doing well financially and think that they sit down at their desks every morning feeling like a million dollars, feeling great about who they are and how much talent they have and what a great story they have to tell; that they take in a few deep breaths, push back their sleeves, roll their necks a few times to get all the cricks out, and dive in, typing fully formed passages as fast as a court reporter. ",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content:
          "Vivid Imagery: Try reading this sentence out loud. What happens? What does this make you feel, in your body? Where? How can you use images like this in your piece?",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content:
          "But this is just the fantasy of the uninitiated. I know some very great writers, writers you love who write beautifully and have made a great deal of money, and not one of them sits down routinely feeling wildly enthusiastic and confident. Not one of them writes elegant first drafts. All right, one of them does, but we do not like her very much. We do not think that she has a rich inner life or that God likes her or can even stand her. (Although when I mentioned this to my priest friend Tom, he said you can safely assume you've created God in your own image when it turns out that God hates all the same people you do.)",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content:
          "Considering Audience: Who do you think this author's audience is? Why? What kinds of ways do you want to invite your audience in?",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content: `Very few writers really know what they are doing until they've done it. Nor do they go about their business feeling dewy and thrilled. They do not type a few stiff warm-up sentences and then find themselves bounding along like huskies across the snow. One writer I know tells me that he sits down every morning and says to himself nicely, "It's not like you don't have a choice, because you do -- you can either type, or kill yourself." We all often feel like we are pulling teeth, even those writers whose prose ends up being the most natural and fluid. The right words and sentences just do not come pouring out like ticker tape most of the time. Now, Muriel Spark is said to have felt that she was taking dictation from God every morning -- sitting there, one supposes, plugged into a Dictaphone, typing away, humming. But this is a very hostile and aggressive position. One might hope for bad things to rain down on a person like this.`,
      },
      {
        type: "paragraph",
        content:
          "For me and most of the other writers I know, writing is not rapturous. In fact, the only way I can get anything written at all is to write really, really shitty first drafts. In fact, the only way I can get anything written at all is to write really, really shitty first drafts.",
      },
      {
        type: "paragraph",
        content: `The first draft is the child's draft, where you let it all pour out and then let it romp all over the place, knowing that no one is going to see it and that you can shape it later. You just let this childlike part of you channel whatever voices and visions come through and onto the page. If one of the characters wants to say, "Well, so what, Mr. Poopy Pants?," you let her. No one is going to see it. If the kid wants to get into really sentimental, weepy, emotional territory, you let him. Just get it all down on paper because there may be something great in those six crazy pages that you would never have gotten to by more rational, grown-up means. There may be something in the very last line of the very last paragraph on page six that you just love, that is so beautiful or wild that you now know what you're supposed to be writing about, more or less, or in what direction you might go -- but there was no way to get to this without first getting through the first five and a half pages.`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `On the writing process: What do you think is the value of writing without worrying about knowing "what you're supposed to be writing about" to get started?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content: `I used to write food reviews for California magazine before it folded. (My writing food reviews had nothing to do with the magazine folding, although every single review did cause a couple of canceled subscriptions. Some readers took umbrage at my comparing mounds of vegetable puree with various ex-presidents' brains.) These reviews always took two days to write. First I'd go to a restaurant several times with a few opinionated, articulate friends in tow. I'd sit there writing down everything anyone said that was at all interesting or funny. Then on the following Monday I'd sit down at my desk with my notes and try to write the review. Even after I'd been doing this for years, panic would set in. I'd try to write a lead, but instead I'd write a couple of dreadful sentences, XX them out, try again, XX everything out, and then feel despair and worry settle on my chest like an x-ray apron. It's over, I'd think calmly. I'm not going to be able to get the magic to work this time. I'm ruined. I'm through. I'm toast. Maybe, I'd think, I can get my old job back as a clerk-typist. But probably not. I'd get up and study my teeth in the mirror for a while. Then I'd stop, remember to breathe, make a few phone calls, hit the kitchen and chow down. Eventually I'd go back and sit down at my desk, and sigh for the next ten minutes. Finally I would pick up my one-inch picture frame, stare into it as if for the answer, and every time the answer would come: all I had to do was to write a really shitty first draft of, say, the opening paragraph. And no one was going to see it.`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `Considering Tone: Tone is one of the places where purpose and audience work together most clearly. How would you describe the Author's tone in this paragraph? Why do you think they do this? What tone do you want to use in your piece?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content: `So I'd start writing without reigning myself in. It was almost just typing, just making my fingers move. And the writing would be terrible. I'd write a lead paragraph that was a whole page, even though the entire review could only be three pages long, and then I'd start writing up descriptions of the food, one dish at a time, bird by bird, and the critics would be sitting on my shoulders, commenting like cartoon characters. They'd be pretending to snore, or rolling their eyes at my overwrought descriptions, no matter how hard I tried to tone those descriptions down, no matter how conscious I was of what a friend said to me gently in my early days of restaurant reviewing. "Annie," she said, "it is just a piece of chicken. It is just a bit of cake."`,
      },
      {
        type: "paragraph",
        content: `But because by then I had been writing for so long, I would eventually let myself trust the process -- sort of, more or less. I'd write a first draft that was maybe twice as long as it should be, with a self-indulgent and boring beginning, stupefying descriptions of the meal, lots of quotes from my black-humored friends that made them sound more like the Manson girls than food lovers, and no ending to speak ofThe whole thing would be so long and incoherent and hideous that for the rest of the day I'd obsess about getting creamed by a car before I could write a decent second draft. I'd worry that people would read what I'd written and believe that the accident had really been a suicide, that I had panicked because my talent was waning and my mind was shot.`,
      },
      {
        type: "paragraph",
        content: `The next day, I'd sit down, go through it all with a colored pen, take out everything I possibly could, find a new lead somewhere on the second page, figure out a kicky place to end it, and then write a second draft. It always turned out fine, sometimes even funny and weird and helpful. I'd go over it one more time and mail it in.`,
      },
      {
        type: "paragraph",
        content: `Then, a month later, when it was time for another review, the whole process would start again, complete with the fears that people would find my first draft before I could rewrite it.`,
      },
      {
        type: "paragraph",
        content: `Almost all good writing begins with terrible first efforts. You need to start somewhere. Start by getting something -- anything -- down on paper. A friend of mine says that the first draft is the down draft -- you just get it down. The second draft is the up draft -- you fix it up. You try to say what you have to say more accurately.`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `Sentence variation: This section uses many shorter sentences rather than the longer sentences the author has been using much of the essay. Why do you think this is? How could you use techniques like this in your writing?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content: `And the third draft is the dental draft, where you check every tooth, to see if it's loose or cramped or decayed, or even, God help us, healthy.`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `Considering process: Based on this reading, what do you think will be helpful to your writing process?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
    ],
  },
  {
    title: "My Name",
    author: "Sandra Cisneros",
    source: "The House on Mango Street",
    summary:
      "Esperanza longs to escape the sorrow tied to her name and forge her own identity.",
    content: [
      {
        type: "paragraph",
        content:
          "In English my name means hope. In Spanish it means too many letters. It means sadness,  it means waiting. It is like the number nine. A muddy color. It is the Mexican records my  father plays on Sunday mornings when he is shaving, songs like sobbing.",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `Sentence Variation: These are a few short sentences and fragments together. Read them out loud. What do you hear? Now read the sentence immediately afterwards.  Why do you think the author would use this mix of long and short sentences?  How can you apply this to your writing?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content:
          "It was my great-grandmother's name and now it is mine. She was a horse woman too,  born like me in the Chinese year of the horse--which is supposed to be bad luck if you're  born female-but I think this is a Chinese lie because the Chinese, like the Mexicans, don't like their women strong.",
      },
      {
        type: "paragraph",
        content:
          "My great-grandmother. I would've liked to have known her, a wild, horse of a woman, so  wild she wouldn't marry. Until my great-grandfather threw a sack over her head and  carried her off. Just like that, as if she were a fancy chandelier. That's the way he did it.",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `Vivid Imagery: Can you picture a fancy chandelier being thrown in a sack and carried off? What strikes you about this image? What kinds of images do you want to use in your writing?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content:
          "And the story goes she never forgave him. She looked out the window her whole life, the  way so many women sit their sadness on an elbow. I wonder if she made the best with  what she got or was she sorry because she couldn't be all the things she wanted to be.  Esperanza. I have inherited her name, but I don't want to inherit her place by the window.",
      },
      {
        type: "paragraph",
        content:
          "At school they say my name funny as if the syllables were made out of tin and hurt the  roof of your mouth. But in Spanish my name is made out of a softer something, like  silver, not quite as thick as sister's name Magdalena--which is uglier than mine.",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `Vivid Imagery: Spend a moment with these images. Imagine tin or metal in your mouth. How does it feel? Taste? Smell? How can you bring these images into your own writing?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content:
          "Magdalena who at least can come home and become Nenny. But I am always  Esperanza. I would like to baptize myself under a new name, a name more like the real me,  the one nobody sees. Esperanza as Lisandra or Maritza or Zeze the X. Yes. Something  like Zeze the X will do.",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `Considering Form: Look at how this story begins and ends. What do you notice. Why? How do you want to tie together your beginning and ending?`,
      },
    ],
  },
  {
    title: "Sorry, Can you Repeat That?",
    author: "Unknown",
    summary:
      "After childhood hearing loss led to a speech impediment and deep insecurity, the author overcame their fear of speaking, ultimately gaining confidence and embracing public speaking.",
    content: [
      {
        type: "checkListItem",
        content: `Thinking about titles: Before we even read the essay, we already know a bit about it from the title. What does the title suggest about the story we are about to read? Why do you think the author put it in quotes?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content:
          "At first glance, you would not be able to point out my biggest insecurity: my speech.  After losing fifty percent of my hearing in my right ear, I developed a speech impediment.  Little did I know at four years old how bad hearing loss would affect my life. In hindsight, it  changed my life.",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `Considering Purpose: Why do you think the author would choose to write about her speech impediment?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content:
          "Flashback to 2005, I was wearing my favorite pink Minnie Mouse pajamas and latched  on to my stuffed hippopotamus, Hippo-y. I was bouncing on my parents’ bed, right before  bedtime, waiting for my mother to clean my ears. My mother always used q-tips, even though  they aren’t recommended. Being the impatient four-year-old that I was, I opened the glass jar of  q-tips and took one out for myself. Just like any other energetic child, I liked jumping up and  down on beds. You can probably tell where this story is heading.",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `Considering Audience: Here the author is speaking directly to her audience. Who do you think that is? Why do you think that?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content:
          "Jumping up and down, I stuck the q-tip in my right ear to attempt to clean it myself. I  thought I knew how because I watched my mother do it almost every week. Suddenly, there was  a sharp pain in my ear and blood started gushing out. The next few moments happen in a blur. I  did not understand what was happening. I thought I was dying.",
      },
      {
        type: "paragraph",
        content:
          "I laid in the back seat of my family’s Dodge Caravan, on my left side so blood would not  drip out, with a bundled towel as a headrest. My parents drove me to the closest hospital: York  Memorial Hospital. The emergency room doctor told us that my eardrum was punctured, but  there was not an otolaryngologist (a doctor specialized in the ear, nose, and throat) on site. We  would have to go elsewhere. They recommended The Johns Hopkins Hospital. By this point, it  was past midnight, but my father carried me back to the car and sped off to Baltimore, Maryland.  I recall crying in pain as we drove. I felt every bump and every pothole on the notorious  Pennsylvania highway roads. I can still feel the scratchy car seats. I just wanted to sleep.",
      },
      {
        type: "paragraph",
        content:
          "When we finally arrived, the emergency room took me to surgery right away. I counted  back from ten. I smelled bubblegum. The last thing I saw was my father dressed in a white gown  and hair net--he looked like a big marshmallow.",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `Vivid Imagery: Slow down here and sit in this imagery. Feel the scratchy seats. Count backward from 10. Can you smell the bubblegum? What does looking like a marshmallow look like? Can you place yourself in the surgery room? What does including these details make you feel? Why? How could you take this in your own writing?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content:
          "That night, the doctor replaced my eardrum. However, he did not mend any of the broken  ear bones. Therefore, my hearing was not completely healed. We would later go back to the ear  specialist who suggested a second surgery to repair the inner bones. In some cases, the operation  restores the hearing back to perfect. In some cases, it worsens. My parents did not want to take  the risk, so they settled with fifty percent hearing.",
      },
      {
        type: "paragraph",
        content:
          "For many years, I was insecure about the way I talked. I did not dare raise my hand in  school. Because of my muteness, I have had teachers ask me what is wrong.",
      },
      {
        type: "paragraph",
        content: "Are you depressed?",
      },
      {
        type: "paragraph",
        content: "Are you having family problems?",
      },
      {
        type: "paragraph",
        content: "Are you being bullied?",
      },

      {
        type: "paragraph",
        content:
          "I did not mean to come off as so shy and quiet, or as some have said, standoffish. I just  never wanted to talk for fear of being made fun of. Instances when I was called on in class, I  knew I knew the correct answer, but I remained quiet. When I did talk, I avoided words with any  r's. God forbid I ever had to say something like “horror” or “error”. Ironically, my first name has  an “r”. I would think to myself, “What kind of person cannot properly pronounce their own  name?”",
      },
      {
        type: "paragraph",
        content:
          "To my dismay, I never grew out of my speech impediment, or as some like to call it, my  “baby voice”. My speech impediment is not as bad as it used to be, but people still notice I sound  different. I was required to attend speech therapy classes during elementary and middle school.  About every other day, I would attend speech therapy classes either individually or in a small  group of other students with speech impediments. I was so embarrassed when I was pulled out of  class by myself. My classmates must have thought I was different.",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content:
          "Vivid Imagery: Can you hear the baby voice? What would help you hear it better? What kind of sensory descriptions could you use in your writing?",
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content:
          "In reality, no one around me cared about how I talked. No one ever bullied me. No one  ever laughed at me. Really, the only thing people did not like about the way I talked was how fast I spoke. Funnily enough, some people assumed I had a British accent. This whole time,  the humiliation was all in my head. I had assumed the worst of society, but at least this  realization freed me.",
      },
      {
        type: "paragraph",
        content: `Flash forward to high school, I mustered up the courage to run for leadership positions. I  was an officer in multiple clubs, actively engaged in discussions, and even volunteered to be the  Presidential Candidate in my government class’ mock election. In tenth grade, I decided I wanted  to pursue law. Not only did I want to become the next Elle Woods, but I loved arguing,  especially while playing devil’s advocate. In class debates, I was quick on my feet and ready to  shoot down any opposing sides. My teacher said I acted like a better Republican candidate thanmy real conservative classmates. Apparently, I already had two important characteristics of a  lawyer: “a heart of stone and excellent poker face”. There was one last missing piece: public speaking skills. All I needed was the confidence to speak up, which I finally acquired in high  school. Somehow, I had become one of the few students comfortable going in front of the class  
and presenting. A lot of people get butterflies in their stomachs and stage-fright, but not me. I have transformed so much (and for the better) that I do not think I could ever go back to the way  I was before. I barely recognize that shy, introverted middle-schooler. Instead, I get told I talk  too much. How funny is that? Of course, there are times when I need to collect myself and think  before I speak, but at last, I feel confident as I give my two cents. Speaking of advice, never use  q-tips to clean your ears. Trust me, I learned that the hard way.`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content:
          "Writing Conclusions. Here the author is tying us back to the beginning of her essay. If you had to change this concluding sentence to tie into the beginning, what would you write? Why?",
      },
    ],
  },
  {
    title: "So, There Wasn't a Power Outage?",
    author: "Meg",
    source: "First Year Writing Seminar",
    summary:
      "The author embraces the contrast between their book smarts and lack of common sense, finding humor and joy in their many amusing mishaps.",
    content: [
      {
        type: "paragraph",
        content: `One of my favorite quotes of all time comes straight from the mouth of my grandmother:  “Meg, for how smart you are, you are dumb.” `,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "checkListItem",
        content: `Just reading this sentence, what do you think this essay is going to be about? Why? What do you think this story hook is designed to do?`,
      },
      {
        type: "paragraph",
        content: "", // empty paragraph for spacing
      },
      {
        type: "paragraph",
        content: `My friends and family occasionally kid that I am  “the dumbest smart person you will ever meet.” This ongoing joke is a result of the stark  contrast between my level of “book-smarts” and my level of common sense. Often, people  presume that if you enjoy and do well in school, then you are smart in every other aspect of life.  For me, however, this is not the case. I can solve a math problem or conjugate a Latin verb with  ease, but when it comes to performing a basic task, such as giving directions to my mom while  she is driving or simply crossing a busy street, I tend to have a much more difficult time. Over  the past few months, my close friends have compiled an extensive list that logs any occurrence in  which my lack of common sense is apparent. Both the length and the content of this list attest to  the fact that, although some may label me as “book-smart”, my common sense is not always up  to par, and it tends to make for some pretty funny stories.`,
      },
      {
        type: "paragraph",
        content:
          "One night during this past summer, I was changing from my work clothes into a hoodie  and a pair of sweatpants. I pulled the sweatshirt over my head, but when I opened my eyes, I saw nothing but darkness. Assuming that the power had gone out, I used my hands to find the  door and make my way into my mom’s room, only a few feet from mine. I felt my way to the  foot of her bed, but being that it was still pitch black in her room, I jumped to the conclusion that  the power outage affected the whole house. I asked if she knew what could have caused this  sudden loss of power, and, to my surprise, she had no idea what I was talking about. In a  bewildered tone, she asked why the hood of my sweatshirt was covering my face. As it turns  out, the power was very much still working in every room of our house, and I was standing at the  foot of her bed with my hoodie on backwards.",
      },
      {
        type: "paragraph",
        content:
          "While in a conversation with my friends a few months back, the topic shifted to Zodiac, a  movie about the crimes and murders of the infamous Zodiac Killer. Although I had never seen  the film, I confidently contributed to the conversation with information I had accumulated  through various documentaries and YouTube videos. It was not until I mentioned my fascination  with the evidence leading to the Zodiac Killer’s arrest that my friends began to question the  validity of my knowledge. I held my ground, firmly believing that the Zodiac Killer had been  arrested as a result of modern DNA tracing technology. We decided to research whether the  identity of the Zodiac Killer had ever been discovered, and to my surprise, the answer was no.  My friends quickly put together that I had been thinking about the arrest of the Golden State  Killer, who apparently, is not the same as the Zodiac Killer.",
      },
      {
        type: "paragraph",
        content:
          "On the day before fall break of last year, my math teacher decided to hold a  Thanksgiving-themed trivia game for our class. The questions ranged from “Under which  president did Thanksgiving become a national holiday?” to “What is Mr. Marx’s (my math   teacher) favorite part of the traditional Thanksgiving meal?” Being that the questions were quite  difficult, this trivia was basically a guessing game. I had little confidence in my previous  answers, so I was beyond thrilled when a question appeared on the board that I was sure I knew  the answer to: “What is the dangling skin under a turkey’s neck called?” I quickly scribbled  “garble” on my paper, and I whispered my answer to three of my friends who were deciding between “garble” and “wattle”. I assured them that I was absolutely certain of my answer, and  due to my persuasion, they hesitantly followed my lead. Being that this was the final question,  Mr. Marx proceeded to read off the answers one by one. When it came time for the answer to the  last question, MY question, I was growing more and more excited to have my small, but  important victory. He repeated, “What is the dangling skin under a turkey’s neck called?”, and  with one click he revealed the correct answer. “Wattle” was plastered across the board in bold  letters, taunting me. Almost immediately, my friends whipped their heads in my direction,  shooting me glances of disapproval before we all broke out in laughter at my misplaced  confidence.",
      },
      {
        type: "paragraph",
        content:
          "In addition to the few stories that I have mentioned above, my friends’ list logs about  twenty more incidents that further emphasize my lack of common sense. To give an indication  of what the remainder of the list looks like, a few examples include:",
      },
      {
        type: "bulletListItem",
        content:
          "tried to use her car keys to lock her locker on the way out of school",
      },
      {
        type: "bulletListItem",
        content:
          "thought Ocean City, Maryland stayed warm year-round and did not get cold at night",
      },
      {
        type: "bulletListItem",
        content: "put the straw wrapper in her drink instead of the straw",
      },
      {
        type: "bulletListItem",
        content:
          "said she met Bill Clinton’s wife, but insisted she did not know her name- was actually  thinking of Joe Biden’s wife, Jill Biden, not Hilary Clinton",
      },
      {
        type: "bulletListItem",
        content:
          "when asked what number Superbowl was being held this year, said “Superbowl like  100”- it was Superbowl 54",
      },
      {
        type: "bulletListItem",
        content:
          "thought “Break My Stride” by Matthew Wilder was a song from Mamma Mia.",
      },
      {
        type: "paragraph",
        content:
          "My common sense, or lack thereof, is a huge part of who I am. It has been the cause of  countless hysterical fits of laughter with my closest friends, and it is the root of many of my  fondest memories with my family. However, to people who do not know me as well as my  friends and family, I may appear to be only a piece of the puzzle that is who I really am. In  reality, I am simultaneously “smart and dumb”, as my grandma once put it. No matter how  much I love school, I will always be the same girl who put her hoodie on backwards and was  convinced that the power went out.",
      },
    ],
  },
];

export default mentorTexts;
