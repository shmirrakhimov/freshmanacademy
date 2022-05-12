const headerBtn = document.querySelector('.header__btn');
const rightsideMenu = document.querySelector('.rightside-menu');
const rightsideMenuClose = document.querySelector('.rightside-menu__close');
const body = document.querySelector('body');
const links = document.querySelectorAll('.menu__list-link');
const dropdownBtns = document.querySelectorAll('.courses__filter');
const dropdowns = document.querySelectorAll('.courses__filter-button--dropdown');
const cardInfos = document.querySelectorAll('.courses__card-info');
const cardDetails = document.querySelectorAll('.courses__card-detail');
const cardSpans = document.querySelectorAll('.courses__card-div');
const cardTexts = document.querySelectorAll('.courses__card-text');
const cards = document.querySelectorAll('.courses__card');
const cardInners = document.querySelectorAll('.courses__card-image--inner');

// const rustamPost = {
//   href: ["news.html#post-rustam"],
//   title: ["From Karakalpakstan to Yale: incredible story of our alumni who got into Yale"],
//   author: ["Valera Arakelyan"],
//   date: ["April 26, 2022"],
//   photoSrc: ["images/acceptance/rustam-acceptance.jpg"],
//   text: ["Our second student at Yale!, Freshman's outstanding alumnus, Rustam Nuriev received a full scholarship at Yale University, an Ivy League school with an acceptance rate as low as 4.46%.",
//       "Rustam joined Freshman Community last summer, taking the Advanced English course for eight consecutive months. In November, he enrolled in our Admissions Program where we helped Rustam shape and effectively communicate his personal narrative to the admissions committee.",
//       "Reflecting on his involvement at Freshman, Rustam says:", "I appreciate how much my personal values have coincided with those of Freshman. 'Hope for the best but prepare for the worst' has long been my motto. However, Freshman helped me reinvigorate and act on this notion in my admissions preparation. I remember the many doubts I had when I wrote my essays last December. I thought that my second gap year was imminent, putting aside my Yale application as the task that seemed unreachable at the time. Yet, thanks to many hours of continuous personal guidance from Valera, I built a strong application for which I am very proud."
//   ]
// }

// const launchcoursePost = {
//   href: ["news.html#post-launch-courses"],
//   title: ["Launching new courses in May"],
//   author: ["Valera Arakelyan"],
//   date: ["April 22, 2022"],
//   photoSrc: ["images/courses/new-courses.jpg"],
//   text: ["Freshman's students got 8.5 and 1560 from IELTS and SAT from the first time.", 
//   "Were admitted to the most competitive summer programs like Yale Young Global Scholars.",
//   "Were admitted to the Ivy League and the top foreign universities with full funding.",
//   "All this was possible thanks to our programs, which we have been improving for the third year already.",
//   "Join Freshman and learn online from teachers who successfully study and work abroad.",
//   "Become part of the community of the most prepared students in the CIS.",
//   "Register for the program as early as possible because places are limited."
//   ]
// }
// const admissionsprogramPost = {
//   href: ["news.html#post-admissions-program"],
//   title: ["Freshman's Long-Awaited Admissions Program"],
//   author: ["Valera Arakelyan"],
//   date: ["April 19, 2022"],
//   photoSrc: ["images/programs/admission-program.jpg"],
//   text: ["Freshman's brand-new Admissions Program is a premium 3-month course that will lay the foundation for your future success in the admissions process.",
//   "With five years of experience and dozens of acceptances into high-ranked universities like Yale, UPenn, Brown, UChicago, Williams, and Duke, we are committed to providing you with the best educational opportunities for your future.",
//   "Freshman's international team hails from Austria, Brazil, Canada, Kazakhstan, Russia, Singapore, USA, and Uzbekistan. Our worldwide network of admissions mentors will support you in your university applications.",
//   "Starting 15th May, this three-month program will give you full access to:",
//   "Exclusive Admissions and Writing Workshops led by Higher Education Professionals",
//   "Academic Advising and Personalised Feedback Sessions for your Writing and Reflections",
//   "World-class International Opportunities and Diverse Extra-Curricular Activities",
//   "Full access to Freshman's Advanced English, SAT English, and SAT Math",
//   "Application Deadline: 27 April 2022",
//   "Duration of Program: 3 months (May 15 - August 15)",
//   "Total Price of the Program: $999",
//   "*We might extend partial financial aid on a case-by-case basis. However, it will be limited because of the substantial operating costs associated with running a premium admissions program.",
//   "The program will be limited to 14 exceptional students. The shortlisted candidates will be contacted for a free 30-minute consultation, which will happen in early May."
//   ]
// }
// const speakingclubPost = {
//   href: ["news.html#post-speaking-club"],
//   title: ["New Freshman Speaking Membership in May"],
//   author: ["Valera Arakelyan"],
//   date: ["April 18, 2022"],
//   photoSrc: ["images/programs/speaking-club.jpg"],
//   text: ["Last month, we were honoured to receive 90 registrations for only 30 membership spots in our international speaking club. We admitted a group of impressively accomplished students representing Yale, Williams, NYUAD, and UChicago, to name a few.",
//   "Each session will last for 1.5 hours with a short lecture, two breakout room discussions, and a Q&A session. Our international speakers and facilitators, representing the world’s best universities, will also send you readings and topic vocabulary in advance.",
//   "Duration: 1 month (four sessions starting from May 7th)",
//   "When: Sundays at 2 pm (Tashkent time)",
//   "Level: Strictly upper-Intermediate and higher",
//   "Price: Just $24.99 per month/$19.99 for Freshman Alumni",
//   "Seats will be limited, so reserve your spot today following the link: https://bit.ly/freshmanspeakingmay"
//   ]
// }
// const malikaPost = {
//   href: ["news.html#post-malika"],
//   title: ["Freshman at NYU AD, class of 2026, with $320k scholarship"],
//   author: ["Valera Arakelyan"],
//   date: ["April 14, 2022"],
//   photoSrc: ["images/acceptance/malika-acceptance.jpg"],
//   text: ["Freshman's notable alumna, Malika Khakimova has been admitted to NYU in Abu Dhabi, one of the most selective universities outside the US. She received a full scholarship of $320K that covers transportation and personal expenses.",
//   "Last summer, Malika joined Freshman and enrolled in several of our programs, including College Essay Mentorship. As such, she underwent an intensive program that helped her communicate her ideas clearly and eloquently. Malika also learned how to put together her narrative in a motivational essay. By attending Freshman's courses and workshops, Malika is academically and socially ready for her next four years at college.",
//   "Malika says: 'In Freshman Academy, I read academic texts, wrote reflections, and had extensive discussions with my peers. Such exposure to university-level materials truly made me a more educated and open-minded person. While euphoria from my acceptance soon faded away, I am confident in my readiness for this new life challenge. Daily browsing NYUAD's catalog for new students, I feel excited and frightened at the same time. However, Freshman's Advanced English classes taught me what to expect from my upcoming undergraduate experience.'",
//   "Learn more about the admission process and keep updated about new Freshman courses launching on May 15th!"
//   ]
// }
// const nurayPost = {
//   href: ["news.html#post-nuray"],
//   title: ["Congratulations to Nuray who made it to Minerv"],
//   author: ["Valera Arakelyan"],
//   date: ["May 09, 2021"],
//   photoSrc: ["images/acceptance/nuray-acceptance-letter.jpg"],
//   text: ["Minerva Schools at KGI is a startup university based in San Francisco. Last year, Minerva received 25000 from 180 countries, admitting only 2% of them. This makes Minerva the most selective university in the developed world. (The Guardian, 2020)",
//   "Nuray also received generous scholarships in Jacobs University, University of Georgia, and Stetson University.",
//   "Update: Nuray also adds that Freshman's teaching style helped her successfully pass Minerva's challenges as the university does not accept traditional test scores.",
//   ]
// }
// const umidPost = {
//   href: ["news.html#post-umid"],
//   title: ["Today, Freshman Academy got our first student into an Ivy League University"],
//   author: ["Valera Arakelyan"],
//   date: ["April 07, 2021"],
//   photoSrc: ["images/acceptance/umid-acceptance.jpg"],
//   text: ["Welcome to Yale!",
//   "The Bush and Clinton families, James Franco, Meryl Streep, John Kerry, Edward Norton, Oliver Stone, and now... our Umid Usmanov.",
//   "Today's victory is not only the victory of Umid or Freshman, it is the victory of the whole Uzbekistan. Umid will be the first undergraduate Ivy League student to graduate from a regular public school in our country. Everything seems impossible until it's done!",
//   "Two years ago, I promised Umid's parents that he had a great future in education and that we would not leave him. Today I am proud of the path that we have traveled together. As Umid's mentor, I have witnessed the incredible transformation he has gone through over the past two years, both in English and personally.",
//   "Umid, if even for a second it seems to you that you are on top of the world and you can relax, then this is far from the case - everything is just beginning for you. Major challenges, opportunities, setbacks and successes are yet to come. And now we need to push harder than ever to represent our family, our city and country on such a high platform with dignity.",
//   "As Newton wrote, “If I have seen further than others, it is because I have stood on the shoulders of giants.” Let me list some of these giants: Larisa Mikhailovna, Vladimir Anatolyevich, Ruslan Rinatovich, Elena Viktorovna, Lyudmila Mikhailovna, Lyudmila Leonovna, Natalya Mikhailovna, Alexei Grigoryevich Ulko and many, many others. Without you, there would be neither Yale-NUS, nor Freshman, nor our successes. Thank you!",
//   "Many thanks to Umid's parents, who completely entrusted their son to us. Thanks to Umid for his honesty, decency, loyalty, hard work, courage in the face of setbacks. Thanks to the entire Freshman Academy community.",
//   "When Beka Normatov and I started Freshman Academy in October 2019, a lot of things didn't work out. It was difficult to combine study and teaching. We were trying to deal with Zoom even before the pandemic. Everything worked purely on our enthusiasm and the feeling that we were doing the right thing. Today, knowing how far we have come, I understand that we simply have no way back.",
//   "Together with Umid, we will continue our educational and mentoring activities, making our contribution to building a new generation of successful youth in our region"
//   ]
// }
// const kristinaPost = {
//   href: ["news.html#post-kristina"],
//   title: ["From Moscow to NYU AD with full scholarship"],
//   author: ["Valera Arakelyan"],
//   date: ["March 11, 2021"],
//   photoSrc: ["images/team/kristina-small.jpg"],
//   text: ["Having attended Freshman's classes for about half a year, Kristina is one of our most prominent students. After scoring 1560 on her SAT exam on her first try, she applied early to NYU Abu Dhabi where she was admitted with a full scholarship.",
//   "Short Interview with Kristina Sargsyan",
//   "1. How did you learn about the SAT and the admissions process in general?",
//   "My elder sister Mary applied to American colleges a few years ago, and I watched her go through all the exams, applications, and essays. I knew, then, that I wanted to follow in her footsteps, but I was always unsure whether I would ever dare to since success was not guaranteed. When I finally decided to, I relied on her experience which was extremely helpful and saved me a lot of energy.",
//   "2. What skills and knowledge did you gain at Freshman?",
//   "I would have not even considered applying if it were not for Freshman. The biggest thing I learned is to look at education as a never-ending process that is not only about taking tests. I learned to pay attention to details and analyze concepts rather than just take in information without questioning it. Another thing that completely changed my thinking process was learning to be a better writer. I am not entirely there yet, but I am definitely way better than I have ever been at writing essays. Before, I used to write complex texts that would be designed to make an impression of me being smart but lacked depth and meaning - you cannot really do that at Freshman.",
//   "3. How did you feel when you opened the acceptance letter from NYU Abu Dhabi?",
//   "To be honest, I am not exactly sure yet. I did not feel the excitement I thought I would have, but that what usually happens when you achieve something that took much of your time and effort. It obviously made me really happy to get in, but I think I will only truly understand what is happening once I have a plane ticket."
//   ]
// }

function openMenu() {
    headerBtn.addEventListener('click', function () {
      rightsideMenu.classList.remove('rightside-menu--close');
      body.classList.add("fixed-position");
    })
}
function closeMenu() {
    rightsideMenuClose.addEventListener('click', function () {
      rightsideMenu.classList.add('rightside-menu--close');
      body.classList.remove("fixed-position");
    })
}

function changeLinkColor(items) {
    items.forEach((item, index, array) => {
      item.addEventListener('click', () => item.classList.add('menu__list-link--active'))
    });
} // should be overwritten

function dropdownMenu() {
  dropdownBtns.forEach((item, index, array) => {
    item.addEventListener('click', function() {
      if(dropdowns[index].classList.contains('hidden')) {
        dropdowns[index].classList.remove('hidden');
      } else{
        dropdowns[index].classList.add('hidden');
      }
    })
  })
}

function readMore() {
  cardInfos.forEach((item, index, array) => {
    item.addEventListener('click', function() {
      if(cardDetails[index].classList.contains('read-less')) {
        cardDetails[index].classList.remove('read-less');
        cardSpans[index].classList.remove('read-less');
        cardTexts[index].style.marginBottom = '10px';
        item.textContent = "Read less..";
      } else{
        cardDetails[index].classList.add('read-less');
        cardSpans[index].classList.add('read-less');
        cardTexts[index].style.marginBottom = '30px';
        item.textContent = "Read more.."
      }
    })
  })
}

function cardClick() {
  cards.forEach((item, index) => {
    item.addEventListener('click', function() {
      if (cardInners[index].classList.contains('opacity')) {
        cardInners[index].classList.remove('opacity');
        cardInners[index].style.opacity = '0';
      } else {
        cardInners[index].classList.add('opacity');
        cardInners[index].style.opacity = '1';
      }
    })
  })
}

function cardInnersHover() {
  cardInners.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
      if (item.classList.contains('opacity')) {
        item.classList.remove('opacity');
        item.style.opacity = '0';
      } else {
        item.classList.add('opacity');
        item.style.opacity = '1';
      }
    })
    item.addEventListener('mouseleave', function() {
      if (item.classList.contains('opacity')) {
        item.classList.remove('opacity');
        item.style.opacity = '0';
      } else {
        item.classList.add('opacity');
        item.style.opacity = '1';
      }
    })
  })
}

// function generatePost(object, back, title, author, date, image, text) {
//   back.href = object.href[0];
//   title.textContent = object.title[0];
//   author.textContent = object.author[0];
//   date.textContent = object.date[0];
//   image.src = object.photoSrc[0];
//   const len = object.text.length;
//   for (let i = 0; i < len; i++) {
//     const element = document.createElement('div');
//     element.classList.add('post__content-separate');
//     element.textContent = object.text[i];
//     text.appendChild(element);
//   }
// };


openMenu();
closeMenu();
changeLinkColor(links);
dropdownMenu();
readMore();
cardClick();
cardInnersHover();
