import $ from 'jquery';
import WOW from "wowjs";

$(() => {
  const wow = new WOW.WOW({
		live: false,
		boxClass: "wow",
	});

	wow.init();
	$(".results").hide();
	
const DATA = {
    results: [
        { id: "А", title: "В круговороте ежедневных подвигов вам не хватает времени на самый главный и незаметный – заботу о себе. ", text: "Посмотреть любимый сериал, почитать книгу, принять ванну с солью. Даже нанесение дезодоранта может стать удовольствием. <span>Антиперспирант Dove Нежность пудры</span> содержит ¼ крема и не просто защищает, а питает и восстанавливает кожу, оберегая ее от раздражений. " },
        { id: "Б", title: "Пытаясь разложить вещи и дела по местам, вы тратите много сил. Но насладиться результатом не удается.", text: "Чтобы не испытывать раздражения от того, что что-то идет не так, научитесь прислушиваться к спонтанным желаниям и не гасить их. А чтобы ничего не беспокоило и не раздражало, используйте <span>дезодорант-антиперспирант Dove Гипоаллергенный</span>, созданным специально для деликатной кожи. 0% спирта, без отдушек и парабенов. Подойдет даже кормящим мамам." },
        { id: "В", title: "С вами удобно всем: близким и друзьям, начальству и коллегам, пассажирам в транспорте. Есть, правда, одна загвоздка: пытаясь угодить каждому, вы забываете о собственных желаниях. ", text: "Учиться отказывать без чувства вины. Начав делать это, вы постепенно вернете себе утраченную легкость. Главное, забыть про извиняющийся тон и помнить, что поход на танцы или в театр – это ваше право. А о том, чтобы вы идеально вышли в свет, позаботится <span>дезодорант Dove Pro-collagen</span>. Он восстанавливает кожу после бритья уже за 3 дня*, устраняя признаки раздражения.<br><br><span class='small'>*Способствует восстановлению кожи после бритья за 3 дня – значительное сокращение видимых признаков раздражения кожи через 3 дня (клинический тест, Unilever R&D, 2015</span> " }
    ]
};

let selectedImages = [];

$('.promo__wrap__card').click(function() {
    if ($(this).hasClass('select')) {
        $(this).removeClass('select');
        selectedImages = selectedImages.filter(img => img !== this);
    } else if (selectedImages.length < 5) {
        $(this).addClass('select');
        selectedImages.push(this);
        switch (selectedImages.length) {
            case 1:
                $(".promo__wrap__play-title").text("Выберите еще четыре стикера");
              break;
            case 2:
                $(".promo__wrap__play-title").text("Выберите еще три стикера");
              break;
            case 3:
                $(".promo__wrap__play-title").text("Выберите еще два стикера");
              break;
            case 4:
                $(".promo__wrap__play-title").text("Выберите еще один стикер");
              break;
            case 5:
                displayResults();
              break;
          }
    }
});

function displayResults() {
    let counts = { 'А': 0, 'Б': 0, 'В': 0 };
    selectedImages.forEach(img => {
        let id = $(img).attr('data-id');
        if (counts.hasOwnProperty(id)) {
            counts[id]++;
        }
    });
    $(".promo").hide();
    let maxId = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    let result = DATA.results.find(item => item.id === maxId);
    $(".results").show();
    $('html, body').animate({scrollTop: 0}, 'slow')
    if (result) {
        $(".results__wrap-text-1").html(result.title);
        $(".results__wrap-text-2").html(result.text);
    } else {
        $(".results__result-text").html("<p>Результат не найден.</p>");
    }
}
$('.results__button-text').click(function() {
    $('.promo__wrap__card').removeClass('select');
    selectedImages = [];
    $(".promo__wrap__play-title").text("выберите пять стикеров");
    $(".results").hide();
    $(".promo").show();
});
});
