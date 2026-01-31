
import { FactSection, Resource } from './types';

export const FACT_SECTIONS: FactSection[] = [
  {
    id: 'slavery-systems',
    category: 'Systems',
    title: "The 'All Slavery is Same' Fallacy",
    myth: "Slavery has existed since the beginning of time, so the American version was nothing new or unique.",
    fact: "New World Chattel Slavery was a legally distinct system where humans were defined as sub-human property for life, based specifically on racial identity.",
    icon: "fa-link-slash",
    tags: ["antiquity", "africa", "chattel", "property", "hereditary"],
    details: [
      "Chattel Slavery (Americas): Humans legally defined as 'chattel' (moveable property) for life. Status of 'slave' passed from mother to child indefinitely.",
      "Historical/Internal African Slavery: Often a consequence of war or debt, generally not permanent or hereditary. Enslaved people frequently retained rights to marry and own property.",
      "The Scale of Dehumanization: Built on Racial Integrity Laws, creating a permanent racial hierarchy, unlike Roman or ancient systems."
    ]
  },
  {
    id: 'african-complicity',
    category: 'Systems',
    title: "The 'Black People Sold Each Other' Myth",
    myth: "African people are just as responsible for slavery because they sold their own people to European traders.",
    fact: "There was no 'Black' or 'African' identity at the time; kingdoms were selling prisoners of war from rival nations under intense pressure.",
    icon: "fa-handshake-slash",
    tags: ["coercion", "tribal", "identity", "war", "guns", "middle passage"],
    details: [
      "Lack of Racial Identity: People identified as Ashanti, Kongo, or Yoruba. They sold prisoners of war from other nations, not 'their own people.'",
      "The Slaving Trap: European traders introduced firearms. Kingdoms that refused to participate were defenseless against neighbors who had traded for guns.",
      "Industrial Scale: The Trans-Atlantic trade transformed slavery into a global industrial enterprise of 12.5 million people, unlike domestic African systems."
    ]
  },
  {
    id: 'wealth-gap',
    category: 'Economic',
    title: "The Wealth Gap & Redlining",
    myth: "The wealth gap is simply a result of modern individual choices, not historical policy.",
    fact: "State-sponsored segregation and FHA mortgage denials (Redlining) systematically prevented Black wealth accumulation for generations.",
    icon: "fa-house-lock",
    tags: ["money", "fha", "mortgages", "housing", "segregation", "inheritance"],
    details: [
      "FHA Policies: Between 1934 and 1962, 98% of government-backed home loans went to white families.",
      "Redlining: Maps were explicitly drawn by the HOLC to mark Black neighborhoods as 'hazardous' for investment.",
      "Generational Loss: Because home equity is the primary driver of US middle-class wealth, these policies created a multi-trillion dollar gap."
    ]
  },
  {
    id: 'homestead-act',
    category: 'Economic',
    title: "The Homestead Act Exclusion",
    myth: "Every American had an equal chance to work hard and get land in the 19th century.",
    fact: "The 1862 Homestead Act gave away 270 million acres of land—nearly 10% of the US—almost exclusively to white settlers.",
    icon: "fa-map-location-dot",
    tags: ["land", "west", "property", "government", "subsidy"],
    details: [
      "Massive Subsidy: Up to 46 million living Americans are descendants of those who received free land under the Homestead Act.",
      "Exclusion: At the time of the peak land giveaways, millions of Black Americans were enslaved or restricted from filing claims by local codes.",
      "Impact: This provided a massive 'head start' in generational wealth that was denied to the formerly enslaved."
    ]
  },
  {
    id: 'jim-crow-laws',
    category: 'Legal',
    title: "Criminalizing Freedom (Black Codes)",
    myth: "After the Civil War, formerly enslaved people were given a fair chance to participate in the economy.",
    fact: "Southern states passed 'Black Codes' to criminalize unemployment (vagrancy) and force Black men into 'Convict Leasing' for free labor.",
    icon: "fa-gavel",
    tags: ["prison", "convict leasing", "vagrancy", "labor", "slavery by another name"],
    details: [
      "Vagrancy Laws: Made it a crime for Black men not to have written proof of employment, leading to immediate arrest and leasing to coal mines.",
      "Debt Peonage: Sharecropping contracts were often legally manipulated to keep workers in a permanent state of debt and forced labor.",
      "Civil Rights: These laws effectively re-enslaved tens of thousands of people for decades after the 13th Amendment."
    ]
  },
  {
    id: 'resilience',
    category: 'Cultural',
    title: "Black Wall Street & Resilience",
    myth: "Black communities have always struggled to be self-sufficient without outside help.",
    fact: "Black Americans built thriving, independent cities (like Greenwood in Tulsa) that were destroyed by external violence, not internal failure.",
    icon: "fa-seedling",
    tags: ["tulsa", "oklahoma", "greenwood", "entrepreneurship", "hbcu"],
    details: [
      "Tulsa Massacre (1921): The 'Black Wall Street' was a self-sufficient hub of doctors, lawyers, and banks until it was burned to the ground by white mobs.",
      "Agency: Despite zero access to public funding, Black Americans founded thousands of mutual aid societies and churches.",
      "Education: Founded HBCUs like Howard and Morehouse while public schools for Black children received only a fraction of white school funding."
    ]
  }
];

export const RESOURCES: Resource[] = [
  {
    title: "The Half Has Never Been Told",
    author: "Edward E. Baptist",
    description: "Examines how slavery and the making of American capitalism are inextricably linked.",
    link: "https://www.google.com/search?q=The+Half+Has+Never+Been+Told+Edward+Baptist"
  },
  {
    title: "The Color of Law",
    author: "Richard Rothstein",
    description: "A forgotten history of how our government segregated America.",
    link: "https://www.google.com/search?q=The+Color+of+Law+Richard+Rothstein"
  },
  {
    title: "Slave Voyages Database",
    author: "SlaveVoyages.org",
    description: "The most comprehensive database on the Trans-Atlantic Slave Trade.",
    link: "https://www.slavevoyages.org"
  }
];
