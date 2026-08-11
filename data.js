// محتوای قسمت‌ها؛ تصاویر واقعی را بعداً در poster قرار بده.
const EPISODES = [
  {id:'s6e26',season:6,episode:26,title:'نمسیس',poster:'s6e26.jpg',summary:'قسمت ۲۶ فصل ششم',release:'2026-08-08',languages:['sub'],status:'released',watch:'',downloads:{}},
  {id:'s6e25',season:6,episode:25,title:'پروتکل مخفی',poster:'s6e25.jpg',summary:'قسمت ۲۵ فصل ششم',release:'2026-08-01',languages:['sub'],status:'released',watch:'',downloads:{}},
  {id:'s6e24',season:6,episode:24,title:'ملکه شهر ترس',poster:'s6e24.jpg',summary:'قسمت ۲۴ فصل ششم',release:'2026-07-25',languages:['sub'],status:'released',watch:'',downloads:{}},
  {id:'s6e23',season:6,episode:23,title:'تریستانسی',poster:'s6e23.jpg',summary:'قسمت ۲۳ فصل ششم',release:'2026-07-18',languages:['sub'],status:'released',watch:'',downloads:{}},
{id:'s5e26',season:5,episode:26,title:'Re-Creation',poster:'s5e26.jpg',summary:'قسمت پایانی فصل پنجم',release:'2023-11-19',languages:['sub'],status:'released',watch:'',downloads:{}},
  {id:'s5e25',season:5,episode:25,title:'Conformation',poster:'s5e25.jpg',summary:'قسمت ۲۵ فصل پنجم',release:'2023-11-18',languages:['sub'],status:'released',watch:'',downloads:{}},
  {id:'s5e24',season:5,episode:24,title:'Representation',poster:'s5e24.jpg',summary:'قسمت ۲۴ فصل پنجم',release:'2023-11-17',languages:['sub'],status:'released',watch:'',downloads:{}},
  {id:'s4e26',season:4,episode:26,title:'Strike Back',poster:'s4e26.jpg',summary:'قسمت پایانی فصل چهارم',release:'2021-11-18',languages:['sub'],status:'released',watch:'',downloads:{}},
  {id:'s4e25',season:4,episode:25,title:'Risk',poster:'s4e25.jpg',summary:'قسمت ۲۵ فصل چهارم',release:'2021-11-17',languages:['sub'],status:'released',watch:'',downloads:{}},
  {id:'s3e26',season:3,episode:26,title:'Miracle Queen',poster:'s3e26.jpg',summary:'قسمت پایانی فصل سوم',release:'2019-11-14',languages:['sub'],status:'released',watch:'',downloads:{}},
  {id:'s2e26',season:2,episode:26,title:'A Christmas Special',poster:'s2e26.jpg',summary:'ویژه فصل دوم',release:'2017-12-11',languages:['sub'],status:'released',watch:'',downloads:{}},
  {id:'s1e26',season:1,episode:26,title:'The Origins - Part 2',poster:'s1e26.jpg',summary:'قسمت پایانی فصل اول',release:'2016-03-30',languages:['sub'],status:'released',watch:'',downloads:{}},
  {id:'sp1',season:'special',episode:1,title:'New York: United Heroez',poster:'sp1.jpg',summary:'ویژه',release:'2020-09-25',languages:['sub'],status:'released',watch:'',downloads:{}}
];
EPISODES.forEach(e => { if (!e.poster || e.poster === 'assets/placeholder.svg') e.poster = `${e.id}.jpg`; });
const NEWS = [
  {title:'قسمت‌های فصل ۶',text:'قسمت‌های جدید فصل ششم را از صفحه اصلی دنبال کنید.'},
  {title:'قسمت آینده',text:'تاریخ پخش احتمالی قسمت ۷ فصل ۶: ۲۹ آبان.'}
];
