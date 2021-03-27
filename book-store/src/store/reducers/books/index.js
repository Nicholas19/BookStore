import covers from 'assets/images/bookCovers';
import actions from 'store/actions/actionTypes';

let initialState = {
  items: getBooksList(),
  itemsPerPage: 3,
  activePage: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.Search: {
      const value = action.payload.toLowerCase();
      return {
        ...state, items: getBooksList().filter(book => book.title.toLowerCase().includes(value))
      }
    }
    case actions.SetPageNumber: {
      return {
        ...state, activePage: action.payload
      }
    }
    default:
      return state;
  }
};

export default reducer;


function getBooksList() {
  return [
    {
      id: 1,
      title: 'До встречи с тобой',
      author: 'Джоджо Мойес',
      genre: 'Роман',
      cover: covers.img1,
      price: 240,
      description: 'Лу Кларк знает, сколько шагов от автобусной остановки до ее дома. Она знает, что ей очень нравится работа в кафе и что, скорее всего, она не любит своего бойфренда Патрика. Но Лу не знает, что вот-вот потеряет свою работу и что в ближайшем будущем ей понадобятся все силы, чтобы преодолеть свалившиеся на нее проблемы. Уилл Трейнор знает, что сбивший его мотоциклист отнял у него желание жить. И он точно знает, что надо сделать, чтобы положить конец всему этому. Но он не знает, что Лу скоро ворвется в его мир буйством красок. И они оба не знают, что навсегда изменят жизнь друг друга. В первые месяцы после выхода в свет романа Джоджо Мойес «До встречи с тобой» было продано свыше полумиллиона экземпляров. Книга вошла в список бестселлеров «Нью-Йорк таймс», переведена на 31 язык. Права на ее экранизацию купила киностудия «Метро-Голдвин-Майер». Грустная история о маленькой жизни и больших мечтаниях, которая заставит вас плакать. Книга Джоджо Мойес — один из самых уникальных и эмоциональных рассказов о любви, написанных за последние годы.',
      current: 1,
      rest: 10
    },
    {
      id: 2,
      title: 'Наваждения',
      author: 'Макс Фрай',
      genre: 'Фэнтези',
      cover: covers.img2,
      price: 230,
      description: 'Новые приключения ироничного и бесстрашного детектива Макса в параллельных мирах. В повести «Зеленые воды Ишмы» вместе с коллегами из Тайного Сыска Макс расследует одно странное происшествие, потрясшее жителей Ехо, и успешно справляется с заданием, пуская в ход свой знаменитый Смертный шар, Мантию Смерти и… изрядную долю здорового земного юмора. Во второй повести Макс с приятелем отправляется в рискованное путешествие в Мир Бликов. Только благодаря мужеству и находчивости друзьям удается вырваться из города-призрака.',
      current: 1,
      rest: 4
    },
    {
      id: 3,
      title: 'Мастер и Маргарита',
      author: 'Михаил Булгаков',
      genre: 'Роман',
      cover: covers.img3,
      price: 500,
      description: 'Произведение «Мастер и Маргарита», жанр которого критики определяют как роман, имеет ряд признаков, присущих своему жанру. Это несколько сюжетных линий, много героев, развитие действия на протяжении длительного времени. Роман фантастический (иногда называют его фантасмагорическим). Но самая яркая особенность произведение, это его структура «романа в романе». Два параллельных мира – мастера и древние времена Пилата и Иешуа, здесь живут почти самостоятельно и пересекаются лишь в последних главах, когда визит Воланду наносит Левий – ученик  и близкий друг Иешуа. Здесь, две линии сливаются в одну, и удивляют читателя своей органичностью и близостью. Именно структура «романа в романе» дала возможность Булгакову так мастерски и полно показать два таких разных мира, события сегодня, и почти две тысячи лет назад.',
      current: 1,
      rest: 2
    },
    {
      id: 4,
      title: 'Война и мир',
      author: 'Лев Толстой',
      genre: 'Роман-эпопея',
      cover: covers.img5,
      price: 450,
      description: '«Война и мир» — роман-эпопея Льва Николаевича Толстого. Историко-философская мысль автора большей частью проникает в роман не в виде рассуждений, а в гениально схваченных подробностях и цельных картинах, истинный смысл которых нетрудно понять всякому вдумчивому читателю. Писатель старается в любом событии и явлении запечатлеть стихийное, бессознательное начало человеческой жизни. И вся идея романа сводится к тому, что успех и неуспех в исторической жизни зависит не от воли и талантов отдельных людей, а от того, насколько они отражают в своей деятельности стихийный ход исторических событий.',
      current: 1,
      rest: 4
    },
    {
      id: 5,
      title: 'Психология влияния',
      author: 'Роберт Чалдини',
      genre: 'Социальна психология',
      cover: covers.img4,
      price: 200,
      description: '«Психологию влияния» знают и рекомендуют в качестве одного из лучших учебных пособий по социальной психологии, конфликтологии, менеджменту все западные, а теперь уже и отечественные психологи. Книга Роберта Чалдини выдержала в США четыре издания, ее тираж превысил полтора миллиона экземпляров. Эта работа, подкупающая читателя легким стилем и эффектной подачей материала, является тем не менее серьезным трудом, в котором на самом современном научном уровне анализируются механизмы мотивации, усвоения информации и принятия решений.',
      current: 1,
      rest: 6
    }
  ];
}