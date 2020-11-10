const FACTS = [
  "There are five different organisms that are responsible for causing sexually transmitted diseases (STDs): \n" +
  "ectoparasites, viruses, fungi, bacteria, and parasitic protoza.",
  "Chlamydia is the most common STD caused by bacteria.",
  "Teens and young adults is the age group most likely to get an STD.",
  "If you thing you might have an STD, you should: \n" +
  "get tested immediately, refrain from sexual activity, and communicate with your partner(s) as soon as possible.",
  "Some STD's, like herpes, do not have a cure, but many are treatable.",
  "Some things that contribute to condom ineffectiveness: \n" +
  "Not checking the expiration date, slipping during penetration, insufficient lubrication," +
  "not fitting properly, breakage when opening the package.",
  "Condoms are the only form of birth control that provided protection " +
  "against STD transmission.",
  "You should only use water-based lube or Silicone-based lube with condoms.",
  "When it comes to HIV,using a condom makes sex 10,000 times safer than not using a condom.",
  "There is no medical reason why someone can’t use a condom. Even people with latex allergies can use them — " +
  "there are latex-free condoms made of polyurethane and polyisoprene.",
  "Condoms have been around a long, long time. " +
  "The earliest known illustration of a man using a condom is a 12,000–15,000-year-old painting on the wall of a cave in France.",
  "One in four acts of vaginal intercourse is condom-protected in the U.S.  It is one in three among single people.",
  "Ninety-three percent of sexually active American women aged 15–44 have had a partner that used a male condom.",
  "The vast majority of American teens (68 percent of females and 82 percent of males) use a condom the first time they have sex.",
  "Only 39 percent of American high school students are taught how to correctly use a condom in their health classes." +
  " Programs that teach young people about abstinence as well as contraception, including condom use, " +
  "help youth to delay first sex and use condoms and other forms of contraception when they do have sex.",
  "Perpetrators of sexual assault are most often someone who is known by the victim.",
  "According to RAINN, every 73 seconds, an American is sexually assulted. And every 9 minutes, that victim is a child.",
  "Consent to some form of sexual activity does not necessarily imply consent to other forms of sexual activity.",
  "All people involved in sexual activity must be fully conscious and actively communicate their consent.",
  "Approximately 77% of sexual assaults go unreported.",
  "Perpetrators of sexual violence most often abuse people 18-34 years of age.",
  "Each year, 434,000 americans ages 12 and older are sexually assaulted.",
  "Nine out of every 10 sexual assault survivors in the US are female.",
];

export default () => { return FACTS[Math.floor(Math.random() * FACTS.length)]; };

