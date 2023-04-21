// local reviews data
const reviews = [
  {
    id: 1,
    name: '黃恩浩',
    job: '全端工程師',
    img: 'https://berldygauswlplpidqun.supabase.co/storage/v1/object/public/demo-99/W03/123.png?t=2023-03-02T12%3A10%3A17.682Z',
    text: "覺得工程師好辛苦，實習生教育訓練啥都沒教直接進專案開發，有夠硬不對ㄟ",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;
const showReview =(person)=>{
  const item = reviews[person];
  console.log('item',item);
  img.src = item.img;
  author.textContent = item.name;
  job.textContent =item.job;
  info.textContent=item.text;
}


window.addEventListener('DOMContentLoaded',()=>{
showReview(currentItem);
});

nextBtn.addEventListener('click',()=>{
  currentItem++;
  if(currentItem >= reviews.length){
    currentItem=0;
  }
  showReview(currentItem);
});

prevBtn.addEventListener('click',()=>{
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length-1;
  }
  showReview(currentItem);
});

randomBtn.addEventListener('click',()=>{
  currentItem =Math.floor(Math.random()*reviews.length);
  showReview(currentItem);
  console.log("test");
});