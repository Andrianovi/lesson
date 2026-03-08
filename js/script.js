// Основной контейнер, в котором лежат все группы
//let groupsContainer = document.querySelector('.wrapper_ol)';
const groupsContainer = document.getElementById('groups-container');

// Кнопки
const createGroupBtn = document.getElementById('create-group');
const downloadBtn = document.getElementById('download');
const uploadBtn = document.getElementById('upload');
const fileInput = document.getElementById('file-input');

//Блоки
let attentionDelete = document.querySelector('.attention_delete');

//функция изменения размера порядкого номера ссылок, если их больше 99
function numberLink() {
	const linksMass = [...document.querySelectorAll('.link')];


	if (document.documentElement.clientWidth < 1) {
		// Проверяем количество ссылок в массиве
		// .length — это количество элементов в массиве
		if (linksMass.length > 99) {



			// Если ссылок больше 99, то запускаем перебор массива
			// forEach перебирает каждый элемент массива
			// link — текущая ссылка
			// index — её порядковый номер (начинается с 0)
			linksMass.forEach((link, index) => {

				// index < 99 означает:
				// первые 99 элементов массива
				// потому что индекс начинается с 0:
				// 0 ... 98 = 99 элементов
				if (index < 99) {

					// Делаем порядковый номер размером 50рх
					link.querySelector('.body-li').style.fontSize = '40px';

				} else {

					// иначе, если номер 3х значный , размер 30рх
					link.querySelector('.body-li').style.fontSize = '30px';
				}

			});

		} else {

			// Если ссылок 99 или меньше
			// просто делаем им порядковый номер 50px
			linksMass.forEach(link => {

				link.querySelector('.body-li').style.fontSize = '40px';

			});

		}
	} else {
		console.log('1');

		linksMass.forEach(link => {
			//link.querySelector('.body-li').style.fontSize = '30px';
			console.log('2');
			link.querySelector('.body-li').removeAttribute("style");
			link.querySelector('.link_button_name-delete').removeAttribute("style");
		});
	}
}

//@ Функция создания ссылки
// 🆕 Функция СОЗДАЁТ элемент "ссылка"
function createLink() {

	// 🆕 Создаём div для ссылки
	const linkDiv = document.createElement('div');

	// 🆕 Добавляем класс (нужен для делегирования событий)
	linkDiv.className = 'link';
	linkDiv.setAttribute('tabindex', '0');
	// 🔄 Вставляем HTML без JS-логики
	linkDiv.innerHTML = `
	<div class="wrapper_li">
		<li class="body-block body-li">
			<div class="org">
				<a class="body-block body-link tan"
					href="" target="_blank">
					<div class="rem">
						<p></p>
					</div>
				</a>
			</div>
		</li>

		<div class="link_button_name-delete">
			<span class="plank_name_span span1"></span>
			<span class="plank_name_span span2"></span>
			<span class="plank_name_span span3"></span>
		</div>
	</div>
	<div class="wrapper_button_link hidden">
		<div class="container_link_name">
			<div class="name">Название:</div>
			<p class="link-name"></p>
		</div>
		<div class="container_link_address">
			<div class="address">Адрес:</div>
			<p class="link-address"></p>
		</div>
		<button class="edit-name buttons" tabindex="0">изменить <br> название</button>
		<button class="edit-url buttons" tabindex="0">изменить <br> адрес </button>

		<button class="delete-link buttons" tabindex="0">удалить <br> ссылку</button>
	</div>`;

	// 🔄 ВАЖНО: здесь больше НЕТ onclick






	return linkDiv; // ✅ БЫЛО
}

//*@ Функция создания группы
// 🆕 Функция СОЗДАЁТ группу
//function createGroup(name = 'Новая группа') {
function createGroup(name = '') {

	groupDiv = document.createElement('div'); // ✅ БЫЛО
	groupDiv.className = 'group'; // 🆕 класс группы

	groupDiv.innerHTML = `
			<div class="plank" tabindex="0">
				<p class="group-name">${name}</p>
				<div class="plank_button_name-delete" tabindex="0">
							<span class="plank_name_span span1"></span>
							<span class="plank_name_span span2"></span>
							<span class="plank_name_span span3"></span>
						</div>
			</div>
			<div class="wrapper_button_plank" tabindex="0">
						<button class="edit-group buttons">изменить название</button>
						<button class="delete-group buttons">удалить группу</button>
					</div>
			<div class="below-plank">
						<div class="below-plank-container">
						
						
						<div class="wrapper_create_link" tabindex="0">
								<button class="create-link buttons tan">Создать ссылку</button>
							</div>
						</div>
					</div>
						`

	return groupDiv; // ✅ БЫЛО
}



//*@ Создание новой группы по кнопке
let groupDiv;
createGroupBtn.onclick = () => {
	groupsContainer.appendChild(createGroup());
	//Нужна для сохранения имени группы
	pNameGroup = groupDiv.querySelector('.plank p');
	const title = groupDiv.querySelector('.plank p');
	let titleParrent = groupDiv.querySelector('.plank');
	nameGroup0 = '';
	showTextareaGroup(title, title.textContent, titleParrent);
};






/* //*@ Редактирование через <textarea></textarea>
// 🆕 Показывает textarea для редактирования текста
function showTextarea(element, value, isUrl = false) {
	
	const textarea = document.createElement('textarea'); // поле ввода
	textarea.value = value; // текущее значение
	textarea.style.width = '100%'; // растягиваем по ширине
	
	const saveBtn = document.createElement('button'); // кнопка сохранения
	saveBtn.textContent = 'Сохранить';
	
	const wrapper = document.createElement('div'); // обёртка
	wrapper.append(textarea, saveBtn); // добавляем textarea и кнопку
	
	element.replaceWith(wrapper); // заменяем текст на поле ввода
	
	// 🆕 Сохранение данных
	saveBtn.onclick = () => {
		
		// если редактируем URL
		if (isUrl) {
			const a = document.createElement('a');
			a.href = textarea.value;
			a.textContent = nameGroup1;
			a.target = '_blank';
			wrapper.replaceWith(a);
		}
		// если редактируем обычный текст
		else {
			nameGroup1 = textarea.value
			//element.textContent = textarea.value;
			element.textContent = nameGroup1;
			wrapper.replaceWith(element);
			console.log(nameGroup1);
		}
	};
} */



//название которое сохранено, нужно для отмены изменения имени
let nameGroup0;
let nameLink0;
let linkURL0;
//название которое набрано в textarea группы
let nameGroup1;
let textareaNameGroup;
let nameLink1;
let textareaNameLink;
let linkURL1;
let textareaLinkURL;

//*@ Редактирование через <textarea></textarea>
// 🆕 Показывает textarea для редактирования текста группы
function showTextareaGroup
	(element, value, parent) {
	console.log(parent);
	//запоминаю высоту существующей планки с названием для группы
	let heightPlank = document.querySelector('.plank').getBoundingClientRect().height;


	textareaNameGroup = document.createElement('textarea'); // поле ввода
	textarea = textareaNameGroup;
	textarea.value = value; // текущее значение
	//textarea.style.width = '100%'; // растягиваем по ширине
	textarea.classList.add('plank');
	textarea.style.height = heightPlank + `px`;
	/* const saveBtn = document.createElement('button'); // кнопка сохранения
	saveBtn.textContent = 'Сохранить';
	saveBtn.classList.add('buttons');
	saveBtn.classList.add('save_name_group'); */
	const saveBtn = document.createElement('div');
	saveBtn.classList.add('wrapper_button_save_group');
	saveBtn.innerHTML = `
						<button class="save_name_group buttons">Сохранить</button>
						<button class="cancel_name_group buttons">Отмена</button>
	`;
	textarea.style.pointerEvents = 'auto';
	const wrapper = document.createElement('div'); // обёртка
	wrapper.classList.add('wrappertextarea');
	wrapper.append(textarea, saveBtn); // добавляем textarea и кнопку

	element.replaceWith(wrapper); // заменяем текст на поле ввода

	if (textarea.value.trim() === '') {
		textarea.value = '';
		textarea.focus();
		textarea.setSelectionRange(0, 0);
	} else {
		textarea.focus();
		textarea.setSelectionRange(textarea.value.length, textarea.value.length);
	}
	// 🆕 Сохранение данных
	saveBtn.querySelector('.save_name_group').onclick = () => {
		saveNameGroup(textarea, element, wrapper);


	};
	saveBtn.querySelector('.cancel_name_group').onclick = () => {


		cancelNameGroup(parent, wrapper);



		parent.insertBefore(p, parent.firstElementChild);
	}
}
function saveNameGroup(textarea, element, wrapper) {
	console.log(textarea);
	console.log(element);
	console.log(wrapper);
	if (!element) {
		element = document.createElement('p');
		element.classList.add('group-name');
	}
	nameGroup1 = textarea.value
	element.textContent = nameGroup1;

	wrapper.replaceWith(element);
	//переменная для блока с кнопками названия и удаления группы, нужна для сохранения названия
	wrapperButtonPlankTarget.classList.add('hidden');
}
function cancelNameGroup(parent, wrapper) {
	console.log(parent);
	console.log(wrapper);
	wrapper.remove();
	let p = document.createElement('p');
	p.textContent = nameGroup0;
	p.classList.add('group-name');


	console.log(p);
	parent.insertBefore(p, parent.firstElementChild);
}


//*@ Редактирование через <textarea></textarea>
// 🆕 Показывает textarea для редактирования текста ссылки
function showTextareaLinkName
	(element, value, parent) {
	console.log(parent);

	textareaNameLink = document.createElement('textarea'); // поле ввода
	textarea = textareaNameLink;
	textarea.value = value; // 
	textarea.classList.add('link-name');
	const saveBtn = document.createElement('div');
	saveBtn.classList.add('wrapper_button_save_link');
	saveBtn.innerHTML = `
						<button class="save_name_link buttons">Сохранить</button>
						<button class="cancel_name_link buttons">Отмена</button>
	`;
	textarea.style.pointerEvents = 'auto';
	const wrapper = document.createElement('div'); // обёртка
	wrapper.classList.add('wrappertextarea');

	element.closest('.wrapper_li').nextElementSibling.querySelector('.container_link_name').after(saveBtn);
	wrapper.append(textarea);
	element.closest('.wrapper_li').nextElementSibling.querySelector('.link-name').replaceWith(wrapper); // заменяем текст на поле ввода
	wrapper.style.width = '100%';
	if (textarea.value.trim() === '') {
		textarea.value = '';
		textarea.focus();
		textarea.setSelectionRange(0, 0);
	} else {
		textarea.focus();
		textarea.setSelectionRange(textarea.value.length, textarea.value.length);
	}
	// 🆕 Сохранение данных
	saveBtn.querySelector('.save_name_link').onclick = () => {
		saveNameLink(textarea, element, wrapper);
	};

	//Отмена изменений
	saveBtn.querySelector('.cancel_name_link').onclick = () => {
		cancelNameLink(parent, wrapper);
	}
}
function saveNameLink(textarea, element, wrapper) {
	nameLink1 = textarea.value;
	let p = document.createElement('p');
	p.classList.add('link-name');
	p.textContent = nameLink1;
	element.textContent = nameLink1;
	wrapper.replaceWith(p);
	//переменная для блока с кнопками названия и удаления группы, нужна для сохранения названия
	p.closest('.wrapper_button_link').querySelector('.wrapper_button_save_link').remove();
	//wrapperButtonLinkTarget.classList.add('hidden');
}
//@ Отмена изменения имени ссылки, где
// parent - targetLink.querySelector('.rem');
// wrapper - targetLink.querySelector('.container_link_name .wrappertextarea');
function cancelNameLink(parent, wrapper) {
	console.log(parent);
	console.log(wrapper);
	//wrapper.remove();
	let p = document.createElement('p');
	console.log(nameLink0);
	p.textContent = nameLink0;
	p.classList.add('link-name');
	wrapper.replaceWith(p);
	// p.classList.add('link-name');
	p.closest('.wrapper_button_link').querySelector('.wrapper_button_save_link').remove();

	console.log(p);
	//parent.insertBefore(p, parent.firstElementChild);
}


//*@ Редактирование через <textarea></textarea>
// 🆕 Показывает textarea для редактирования текста ссылки, где 
//element - targetLink.querySelector('a p'), 
//value - targetLink.querySelector('a').getAttribute('href')  
//parent - targetLink.querySelector('.rem') 

function showTextareaLinkURL
	(element, value, parent) {
	textareaLinkURL = document.createElement('textarea'); // поле ввода
	console.log(value);
	textarea = textareaLinkURL;
	textarea.value = value; // 
	textarea.classList.add('link-address');
	const saveBtn = document.createElement('div');
	saveBtn.classList.add('wrapper_button_save_URL');
	saveBtn.innerHTML = `
						<button class="save_URL_link buttons">Сохранить</button>
						<button class="cancel_URL_link buttons">Отмена</button>
	`;
	textarea.style.pointerEvents = 'auto';
	const wrapper = document.createElement('div'); // обёртка
	wrapper.classList.add('wrappertextarea');

	element.closest('.wrapper_li').nextElementSibling.querySelector('.container_link_address').after(saveBtn);
	wrapper.append(textarea);
	element.closest('.wrapper_li').nextElementSibling.querySelector('.link-address').replaceWith(wrapper); // заменяем текст на поле ввода
	wrapper.style.width = '100%';
	if (textarea.value.trim() === '') {
		textarea.value = '';
		textarea.focus();
		textarea.setSelectionRange(0, 0);
	} else {
		textarea.focus();
		textarea.setSelectionRange(textarea.value.length, textarea.value.length);
	}
	// 🆕 Сохранение данных
	saveBtn.querySelector('.save_URL_link').onclick = () => {
		saveURLLink(textarea, element, wrapper);
	};

	//Отмена изменений
	saveBtn.querySelector('.cancel_URL_link').onclick = () => {
		cancelURLLink(parent, wrapper);
	}
}

//@ Функция сохранения адреса ссылки, где
// textarea - targetLink.querySelector('textarea.link-address');
// element - targetLink.querySelector('a p');
// wrapper - textarea.closest('.wrappertextarea');
function saveURLLink(textarea, element, wrapper) {
	linkURL1 = textarea.value;
	let p = document.createElement('p');
	p.classList.add('link-address');
	p.textContent = linkURL1;
	element.closest('a').href = linkURL1;
	wrapper.replaceWith(p);
	//переменная для блока с кнопками названия и удаления группы, нужна для сохранения названия
	p.closest('.wrapper_button_link').querySelector('.wrapper_button_save_URL').remove();
	//wrapperButtonLinkTarget.classList.add('hidden');
}
//parent - targetLink.querySelector('.rem') 
// wrapper - textarea.closest('.wrappertextarea');
function cancelURLLink(parent, wrapper) {
	console.log(parent);
	console.log(wrapper);
	//wrapper.remove();
	let p = document.createElement('p');
	console.log(linkURL0);
	p.textContent = linkURL0;
	p.classList.add('link-address');
	wrapper.replaceWith(p);
	// p.classList.add('link-name');
	p.closest('.wrapper_button_link').querySelector('.wrapper_button_save_URL').remove();

	console.log(p);
	//parent.insertBefore(p, parent.firstElementChild);
}























































// группа для удаления
let groupForDelete;
//переменная для блока с кнопками названия и удаления группы, нужна для сохранения названия
let wrapperButtonPlankTarget;
let wrapperButtonLinkTarget;

let linkName;
let linkURl;
//Нужна для сохранения имени группы
let pNameGroup;
let pNameLink;

document.addEventListener('click', function (event) {
	let evt = getEvent(event);
	/* if (evt.target.closest('.all_header') || evt.target.closest('.footer-forewer')) {
		console.log('Not here');

		return;
		console.log('Dubble Not here');
	} */




	let targetPlank = event.target.closest('.plank');
	let targetBurger = event.target.closest('.burger');
	let targetPlankButtonNameDelete = event.target.closest('.plank_button_name-delete');
	let targetWrapperLi = event.target.closest('.wrapper_li');
	let targetLinkButtonNameDelete = event.target.closest('.link_button_name-delete');
	let conteinerAttentionDelete = event.target.closest('.conteiner_attention_delete');





	const target = event.target;
	if (targetPlank) {
		//меню на группе
		if (targetPlankButtonNameDelete) {
			console.log('button');
			targetPlank.nextElementSibling.classList.toggle('hidden');
		} else if (targetPlank.querySelector('.wrappertextarea')) {
			if (target.classList.contains('save_name_group')) {
				console.log('save');
				if (!pNameGroup) {
					pNameGroup = '';
				}
				let wrapper = target.closest('.wrappertextarea');
				let textareaNameGroup = wrapper.querySelector('textarea');
				//переменная для блока с кнопками названия и удаления группы, нужна для сохранения названия
				wrapperButtonPlankTarget = target.closest('.group').querySelector('.wrapper_button_plank');
				parent = targetPlank;


				saveNameGroup(textareaNameGroup, pNameGroup, wrapper);

			}
			if (target.classList.contains('cancel_name_group')) {
				let wrapper = targetPlank.querySelector('.wrappertextarea');
				let parent = targetPlank;
				cancelNameGroup(parent, wrapper);
			}
		} else {
			//развёртывание группы
			targetPlank.nextElementSibling.nextElementSibling.classList.toggle('active');
		}
	} else if (targetBurger) {
		targetBurger.classList.toggle('active');
		document.querySelector('.burger').classList.toggle('active');
		document.querySelector('.burger-menu').classList.toggle('active');
		document.querySelector('.burger_svg-wrapper').classList.toggle('active');
	}
	// Кнопка показа настроек на ссылке
	if (targetLinkButtonNameDelete) {
		targetWrapperLi.nextElementSibling.classList.toggle('hidden');
		linkURl = targetWrapperLi.querySelector('a').getAttribute('href');
		linkName = targetWrapperLi.querySelector('p').textContent;
		console.log(linkURl);

		targetWrapperLi.nextElementSibling.querySelector('.link-address').textContent = linkURl;
		targetWrapperLi.nextElementSibling.querySelector('.link-name').textContent = linkName;
		target.closest('.link').querySelector('.edit-name').focus();
	}

	// 🆕 Создание ссылки внутри группы
	if (target.classList.contains('create-link')) {
		const belowPlankContainer = target.closest('.below-plank-container'); // ищем родительскую группу
		const wrapperCreateLink = target.closest('.wrapper_create_link'); // 
		//console.log(belowPlankContainer);
		//console.log(target);
		belowPlankContainer.insertBefore(createLink(), wrapperCreateLink); // вставляем ссылку перед кнопкой
		numberLink();
	}

	// 🆕 Удаление группы
	// 1) Вызов предупреждения
	if (target.classList.contains('delete-group')) {
		attentionDelete.classList.remove('hidden');
		groupForDelete = target.closest('.group');
		//target.closest('.group').remove();
	}
	// предупреждение, перед удалением группы
	if (conteinerAttentionDelete) {
	} else {
		if (target.classList.contains('delete-group')) {
			attentionDelete.classList.remove('hidden');
		} else {
			attentionDelete.classList.add('hidden');
		}
	}
	// удаление группы
	if (target.classList.contains('attention_delete_yes')) {
		groupForDelete.remove();
		attentionDelete.classList.add('hidden');
	} else if (target.classList.contains('attention_delete_no')) {
		attentionDelete.classList.add('hidden');
	}

	// 🆕 Редактирование названия группы
	if (target.classList.contains('edit-group')) {
		//Блок с кнопками Сохранить и Отмена, для тех кто будеты тыкать Изменить название несколько раз
		let wrapperButtonSaveGroup = target.closest('.group').querySelector('.wrapper_button_save_group');

		if (!wrapperButtonSaveGroup) {


			//переменная для блока с кнопками названия и удаления группы, нужна для сохранения названия, нужна для сохранения названия
			wrapperButtonPlankTarget = target.closest('.wrapper_button_plank');
			//Нужна для сохранения имени группы
			pNameGroup = target.closest('.wrapper_button_plank').previousElementSibling.querySelector('p'); // <p>
			let title = pNameGroup;
			let titleParrent = target.closest('.wrapper_button_plank').previousElementSibling;// parent <p></p>
			nameGroup0 = title.textContent;
			console.log(nameGroup0);
			showTextareaGroup(title, title.textContent, titleParrent);
		}
	}
	// ===== КНОПКИ ССЫЛОК =====

	// 🆕 Удаление ссылки
	if (target.classList.contains('delete-link')) {
		target.closest('.link').remove();
	}

	// 🆕 Редактирование названия ссылки
	if (target.classList.contains('edit-name') || target.classList.contains('edit-url')) {
		wrapperButtonLinkTarget = target.closest('.wrapper_button_link');
		pNameLink = target.closest('.wrapper_button_link').previousElementSibling.querySelector('p');
		let title = pNameLink;
		let titleParrent = target.closest('.wrapper_button_link').previousElementSibling.querySelector('.rem');// parent <p></p>

		if (target.classList.contains('edit-name')) {
			let wrapperButtonSaveLink = target.closest('.link').querySelector('.wrapper_button_save_link');

			//linkURL0 = targetLink.querySelector('a').getAttribute('href');
			//nameLink0 = title.textContent;



			if (!wrapperButtonSaveLink) {

				nameLink0 = title.textContent;
				//const a = target.closest('.wrapper_button_link').previousElementSibling.querySelector('a');
				showTextareaLinkName(title, title.textContent, titleParrent);
			}
		}
		// 🆕 Редактирование адреса ссылки
		if (target.classList.contains('edit-url')) {

			let wrapperButtonSaveURL = target.closest('.link').querySelector('.wrapper_button_save_URL');

			if (!wrapperButtonSaveURL) {


				linkURL0 = target.closest('.wrapper_button_link').previousElementSibling.querySelector('a').getAttribute('href');
				//const a = target.closest('.wrapper_button_link').previousElementSibling.querySelector('a');
				showTextareaLinkURL(title, linkURL0, titleParrent);

			}
		}
	}
	//@ Сохранение изменений в названии ссылки
	if (target.classList.contains('save_name_link')) {
		pNameLink = target.closest('.link').querySelector('a p');

		let wrapper = target.closest('.link').querySelector('.container_link_name .wrappertextarea');

		wrapperButtonLinkTarget = target.closest('.wrapper_button_link');

		textarea = target.closest('.link').querySelector('textarea.link-name');
		element = pNameLink;
		let buttonEditName = target.closest('.link').querySelector('.edit-name');


		saveNameLink(textarea, element, wrapper);

		buttonEditName.focus();
	}
	//@ Отмена изменений в названии ссылки
	if (target.classList.contains('cancel_name_link')) {
		nameLink0 = target.closest('.link').querySelector('a p').textContent;
		let wrapper = target.closest('.link').querySelector('.container_link_name .wrappertextarea');

		let parent = target.closest('.link').querySelector('.rem');
		let buttonEditName = target.closest('.link').querySelector('.edit-name');
		// parent - targetLink.querySelector('.rem');
		// wrapper - targetLink.querySelector('.container_link_name .wrappertextarea');
		cancelNameLink(parent, wrapper);
		buttonEditName.focus();
	}
	//@ Сохранение изменений в адресе ссылки
	if (target.classList.contains('save_URL_link')) {
		pNameLink = target.closest('.link').querySelector('a p');

		let wrapper = target.closest('.link').querySelector('.container_link_address .wrappertextarea');

		wrapperButtonLinkTarget = target.closest('.wrapper_button_link');

		textarea = target.closest('.link').querySelector('textarea.link-address');
		element = pNameLink;
		let buttonEditUrl = target.closest('.link').querySelector('.edit-url');

		// textarea - targetLink.querySelector('textarea.link-address');
		// element - targetLink.querySelector('a p');
		// wrapper - textarea.closest('.wrappertextarea');
		saveURLLink(textarea, element, wrapper);

		buttonEditUrl.focus();
	}
	//@ Отмена изменений в адресе ссылки
	if (target.classList.contains('cancel_URL_link')) {
		linkURL0 = target.closest('.link').querySelector('a').getAttribute('href');
		let wrapper = target.closest('.link').querySelector('.container_link_address .wrappertextarea');

		let parent = target.closest('.link').querySelector('.rem');
		let buttonEditUrl = target.closest('.link').querySelector('.edit-url');
		//parent - targetLink.querySelector('.rem') 
		// wrapper - textarea.closest('.wrappertextarea');
		cancelURLLink(parent, wrapper);
		buttonEditUrl.focus();
	}
});



























































let holdTimer = null;





//@ Функция определения клика или касания
var getEvent = function (event) {

	//return (event.type.search('touch') !== -1) ? event.touches[0] : event;

	if (!event) return null; // защита от ошибок

	if (event.type && event.type.indexOf('touch') !== -1) {
		return event.touches[0] || event.changedTouches[0];
	}
	return event;
};
var example = function (event) {
	let evt = getEvent(event);
	console.log(evt);
}

//@ Функция перетаскивания
var dragStart = function (event) {
	let evt = getEvent(event);
	//let evt = event;
	console.log(event);

	evt.preventDefault();
	console.log('Not here');

	if (evt.target.closest('.all_header') || evt.target.closest('.footer-forewer')) {
		return;
	}

	//let gragItem = evt.target.closest('.link');
	let gragItem = null;
	// Так как, при перемещении, блок помещается в document, то его высота схлопывается, чтобы этого избежать и нужна эта переменная

	gragItem = event.target.closest('.link');
	//event.target.closest('.link_button_name-delete').style.backgroundColor = 'red';
	let gragItemButton = gragItem.querySelector('.wrapper_button_link');
	if (!gragItemButton.classList.contains('hidden')) {
		gragItemButton.classList.add('hidden');
	}


	let gragItemWidth = gragItem.offsetWidth + 'px';

	console.log(gragItem.getBoundingClientRect().left);
	// coordsItem X - расстояние от левого края окна! до курсора - расстояние от левого края окна! до gragItem = то есть расстояние от левого края gragItem до курсора
	let coordsItemX = evt.clientX - gragItem.getBoundingClientRect().left;

	// coordsItem Y - расстояние от верхнего края окна! до курсора - расстояние от верхнего края окна! до gragItem = то есть расстояние от верхнего края gragItem до курсора
	let coordsItemY = evt.clientY - gragItem.getBoundingClientRect().top;

	console.log(evt.clientY);
	console.log(gragItem.getBoundingClientRect().top);



	let gragItemSizes = {
		// width: gragItem.offsetWidth + scrollX,
		// height: gragItem.offsetHeight + scrollY
		//* ширина и высота gragItem
		width: gragItem.offsetWidth,
		height: gragItem.offsetHeight
	}
	console.log(gragItem.getBoundingClientRect().top);


	/* let coordsGragItemCenterX = coordsItemX + gragItemSizes.width / 2;
let coordsGragItemCenterY = coordsItemY + gragItemSizes.height / 2; */
	console.log(evt.pageY);


	//* coordsGragItemCenterY - расстояние от верха документа до центра gragItem 
	// расстояние от верха окна до gragItem + расстояние от верха документа до верха окна (то что промотано) + расстояние от курсора до верха gragItem - (расстояние от курсора до верха gragItem - половина высоты gragItem) 

	let coordsGragItemCenterY = gragItem.getBoundingClientRect().top + scrollY + coordsItemY - (coordsItemY - gragItem.offsetHeight / 2);

	//* координаты стенок ограничивающего контейнера
	let groupsContainerSizes = {
		left: groupsContainer.getBoundingClientRect().left + scrollX,
		top: groupsContainer.getBoundingClientRect().top + scrollY,
		right: groupsContainer.getBoundingClientRect().left + scrollX + groupsContainer.offsetWidth,
		bottom: groupsContainer.getBoundingClientRect().top + scrollY + groupsContainer.offsetHeight
	}




	//* создаём блок placeholder, который будет показывать куда мы вставим gragItem
	placeholder = document.createElement('div');
	// удаляет все классы какие были и оставляет только class='placeholder' у созданного блока
	placeholder.className = 'placeholder';
	// ширина созданного div = ширине перетаскиваемого объекта
	placeholder.style.width = gragItemSizes.width + 'px';
	// также и высота
	placeholder.style.height = gragItemSizes.height + 'px';
	placeholder.style.backgroundColor = 'rgba(239, 251, 11, 0.476)';
	placeholder.style.borderRadius = '10px';
	// вставляем созданный блок после перетаскиваемого
	gragItem.after(placeholder);





	//Эти две переменные контейнер, в group, в который нужно вставить gragItem, и блок следующий за gragItem (либо другой link, либо блок создания новой ссылки). Они нужны в конце, если не найдётся более подходящего места для вставки
	let parentGragItem = gragItem.closest('.below-plank-container');
	let afterGragItem = gragItem.nextElementSibling.nextElementSibling;
	console.log(parentGragItem);
	console.log(afterGragItem);


	//Эта переменная будет контейнером, в group, в который нужно вставить gragItem, если найдётся тот .link после которого нужно вставить gragItem
	let parentClosestLink;
	//Эта переменная будет группой в которую вставится link, если link перетащить на группу
	let closestGroupForLinkUp;
	let closestGroupForLinkDown;
	//Эта переменная будет контейнером если найдётся подходящий вставлять свёрнутый group, куда нужно вставить gragItem





	gragItem.style.position = 'absolute';
	gragItem.style.zIndex = 1000;
	document.body.append(gragItem);

	let currentX;
	let currentY;



	console.log(evt.pageY);

	moveGragItem(evt.pageX, evt.pageY);
	//moveGragItem(event.pageX, event.pageY);

	gragItem.style.width = gragItemWidth;







	function moveGragItem(pageX, pageY) {
		let evt = getEvent(event);
		console.log(evt);
		//* Координаты верхнего левого угла gragItem(таскаемого объекта)
		currentX = pageX - coordsItemX;
		console.log(pageY);
		// расстояние от верха документа до курсора - расстояние от верха gragItem до курсора, то есть расстояние от верха документа до верха gragItem
		currentY = pageY - coordsItemY;
		console.log(currentY);

		if (
			currentX + gragItemSizes.width <= groupsContainerSizes.right &&
			currentX >= groupsContainerSizes.left
		) {
			gragItem.style.left = `${currentX}px`;
		} else {
			if (currentX + gragItemSizes.width > groupsContainerSizes.right) {
				gragItem.style.left = `${groupsContainerSizes.right - gragItemSizes.width}px`;

			}
			if (currentX < groupsContainerSizes.left) {
				gragItem.style.left = `${groupsContainerSizes.left}px`;
			}
		}
		//* Если нижняя стенка gragItem находится выше или на уровне ограничивающего контейнера
		//Здесь нужно уточнить так как высота ограничивающего контейнера не фиксированная и при движении gragItem изымается из ограничивающего контейнера, то высота этого самого контейнера уменьшается ровно на высоту этого движимого блока и его отступа, то я отнимаю просто высоту, щас бы ещё с отступами ебаться
		if (
			currentY + gragItemSizes.height <=
			groupsContainerSizes.bottom - gragItemSizes.height &&
			currentY >= groupsContainerSizes.top
		) {
			if (currentY <= scrollY) {
				// setTimeout(() => {
				window.scrollTo({ top: scrollY - 20 });
				//window.scrollTo({ top: scrollY - 50, behavior: "smooth", });
				gragItem.style.top = `${scrollY - 20}px`;
				// }, 1000);

			}
			let gragItemParrent = gragItem.closest('.below-plank-container');
			gragItem.style.top = `${currentY}px`;

			//* расстояние от верха документа до центра gragItem
			coordsGragItemCenterY = currentY + gragItemSizes.height / 2;

			// модернизированная версия document.querySelectorAll('.link') в виде массива, позволяет пользоваться .(map) и .(filter) . Хрен знает что это но пусть будет так
			const linksMass = [...document.querySelectorAll('.link')];
			const groupsMass = [...document.querySelectorAll('.group')];

			//переменная под блок, из всех link, который нам подойдёт, чтобы вставить перед ним
			let closestLink = null;
			closestGroupForLinkUp = null;
			closestGroupForLinkDown = null;

			//gragItemRect - это удобный получатель значений для перетаскиваемого объекта dragged, то есть теперь, чтобы получить расстояние от таскаемого объекта до левого края окна браузера достаточно написать gragItemRect.left, а не gragItemRect.getBoundingClientRect().left
			let gragItemRect = gragItem.getBoundingClientRect();


			linksMass.forEach(link => {
				//если из перебираемых link натыкаемся на блок, который тащим, то сразу завершаем на нём проверку и переходим к следующему
				if (link === gragItem) return;

				// Очень удобная штука для определения координат перебираемых блоков
				const rect = link.getBoundingClientRect();
				// если конкретно этот блок, из цикла перебирания всех блоков, пересекается с перетаскиваемым блоком, то его граница становится красной

				console.log(placeholder);

				// в данной функции, елси верх gragItem ниже верха или выше низа блока из цикла, то вернёт true, если это не так, то false
				function isOverlappingLink(grag, r2) {
					// return !(
					// 	r1.right < r2.left ||
					// 	r1.left > r2.right ||
					// 	r1.bottom < r2.top ||
					// 	r1.top > r2.bottom
					// );
					return (
						grag.top >= r2.top && grag.top < r2.bottom
					);
				}
				if (isOverlappingLink(gragItemRect, rect)) {

					closestLink = link;
					closestGroupForLinkUp = null;
					closestGroupForLinkDown = null;
					placeholder.style.backgroundColor = 'rgba(239, 251, 11, 0.476)';
				} else {
					link.style.backgroundColor = 'transparent';
				}

			});
			// Если определился блок link под которым нужно разместить gragItem, то вставляем placeholder под ним
			if (closestLink) {
				closestLink.closest('.below-plank-container').insertBefore(placeholder, closestLink.nextElementSibling);
				//задаём контейнер для вставки и, за одно, условие для dragEnd, что нужный .link был найден
				parentClosestLink = closestLink.closest('.below-plank-container');
				//Если ближайший блок не определяется, упихиваем placeholder в конец контейнера со всеми div
			}

			groupsMass.forEach(group => {
				//если из перебираемых link натыкаемся на блок, который тащим, то сразу завершаем на нём проверку и переходим к следующему


				// Очень удобная штука для определения координат перебираемых блоков
				const rect = group.querySelector('.plank').getBoundingClientRect();
				// если конкретно этот блок, из цикла перебирания всех блоков, пересекается с перетаскиваемым блоком, то его граница становится красной


				// Если верх таскаемой ссылки, оказывается между верхом и низом планки группы, но при этом низ ссылки должен быть ниже низа планки группы, то true
				// grag - gragItem.getBoundingClientRect();
				// rect - group.getBoundingClientRect()
				function isOverlappingGroupUp(grag, rect) {
					return (
						grag.bottom > rect.bottom &&
						grag.top >= rect.top && grag.top < rect.bottom
					);
				}

				// Если низ таскаемой ссылки между низом и верхом планки группы, и даже если при этом и верх ссылки тоже в этих пределах, то true
				console.log(gragItemRect.bottom);
				console.log(rect.bottom);

				gragItemRect
				function isOverlappingGroupDown(grag, rect) {
					return (
						grag.bottom >= rect.top && grag.bottom < rect.bottom
					);
				}

				if (isOverlappingGroupUp(gragItemRect, rect)) {
					let groupBelowPlank = group.querySelector('.below-plank');
					if (groupBelowPlank.classList.contains('active')) {
						console.log('верх внутри, низ ниже');
						closestGroupForLinkUp = group;
						closestLink = null;
						closestGroupForLinkDown = null;
					}
				}
				if (isOverlappingGroupDown(gragItemRect, rect)) {


					console.log('низ внутри, либо целиком внутри');
					closestGroupForLinkDown = group;
					closestLink = null;
					closestGroupForLinkUp = null;
					group.querySelector('.plank').style.boxShadow = 'inset 0 0 50px 5px yellowgreen';
					//placeholder.style.backgroundColor = 'transparent';
				} else {
					//group.querySelector('.plank').style.boxShadow = 'inset 0 0 0px 0px transparent';
					group.querySelector('.plank').removeAttribute("style");
				}
				if (closestGroupForLinkUp) {
					closestGroupForLinkUp.querySelector('.below-plank-container').prepend(placeholder);
					placeholder.style.backgroundColor = 'rgba(239, 251, 11, 0.476)';
				}
				if (closestGroupForLinkDown) {
					closestGroupForLinkDown.querySelector('.below-plank-container').insertBefore(placeholder, closestGroupForLinkDown.querySelector('.wrapper_create_link'));

				}
			});
		} else {
			//* Иначе, если нижняя стенка gragItem опускается ниже ограничивающего контейнера
			if (currentY + gragItemSizes.height > groupsContainerSizes.bottom - gragItemSizes.height) {
				gragItem.style.top = `${groupsContainerSizes.bottom - gragItemSizes.height - gragItemSizes.height}px`;
			}
			//* Если верхняя стенка gragItem поднимается выше ограничивающего контейнера
			if (currentY < groupsContainerSizes.top) {
				gragItem.style.top = `${groupsContainerSizes.top}px`;
			}
		}
		//coordsGragItemCenterX = currentX + gragItemSizes.width / 2;
		//* расстояние от верха документа до центра gragItem
		coordsGragItemCenterY = currentY + gragItemSizes.height / 2;










	}

	function other(event) {
		evt = getEvent(event);
		moveGragItem(evt.pageX, evt.pageY);




	}

	document.addEventListener('touchmove', other);
	document.addEventListener('mousemove', other);


	let dragEnd = function () {
		// let evt = getEvent();
		if (!gragItem) return;

		// возвращаем стили
		gragItem.style.position = 'relative';
		gragItem.style.left = '';
		gragItem.style.top = '';
		gragItem.style.zIndex = '';
		gragItem.style.width = '';
		gragItem.style.height = '';
		console.log(parentGragItem);
		console.log(afterGragItem);
		if (parentClosestLink) {
			console.log("был найден нужный линк");
			parentClosestLink.insertBefore(gragItem, placeholder);
			placeholder.remove();
		} else if (closestGroupForLinkUp) {
			closestGroupForLinkUp.querySelector('.below-plank-container').insertBefore(gragItem, placeholder);
			placeholder.remove();
		} else if (closestGroupForLinkDown) {
			console.log('closestGroupForLinkDown');
			closestGroupForLinkDown.querySelector('.below-plank-container').insertBefore(gragItem, placeholder);
			placeholder.remove();
			//closestGroupForLinkDown.querySelector('.plank').style.boxShadow = 'inset 0px 0px 0px 0px transparent';
			closestGroupForLinkDown.querySelector('.plank').removeAttribute("style");
		} else {

			console.log(parentGragItem);
			console.log(afterGragItem);
			parentGragItem.insertBefore(gragItem, afterGragItem);
			placeholder.remove();
		}


		/* if (
			coordsGragItemCenterX > gragFieldBuffSizes.left && coordsGragItemCenterX < gragFieldBuffSizes.right && coordsGragItemCenterY > gragFieldBuffSizes.top && coordsGragItemCenterY < gragFieldBuffSizes.bottom
	) {
		gragFieldBuff.append(gragItem);
		gragItem.style.left = currentX - gragFieldBuffSizes.left + "px";
		gragItem.style.top = currentY - gragFieldBuffSizes.top + "px";
	} */
		/* if (
			coordsGragItemCenterX > workZoneSizes.left && coordsGragItemCenterX < workZoneSizes.right && coordsGragItemCenterY > workZoneSizes.top && coordsGragItemCenterY < workZoneSizes.bottom
		) {
			workZoneAreaDragDrop.append(gragItem);
			gragItem.style.left = currentX - workZoneAreaDragDropSizes.left + scrollX + "px";
			gragItem.style.top = currentY - workZoneAreaDragDropSizes.top + scrollY + "px";
		} */

		document.removeEventListener('touchmove', other);
		document.removeEventListener('mousemove', other);
	};
	document.addEventListener("touchend", dragEnd, { "once": true });
	document.addEventListener("mouseup", dragEnd, { "once": true });

	//}, 2000); // Выведет через 2 секунды

};

function dragDrop(event) {

	//document.addEventListener('touchstart', dragStart);
	//document.addEventListener('mousedown', dragStart);



	document.addEventListener('touchstart', function (event) {
		let evt = getEvent(event);


		let targetLink = event.target.closest('.link');
		if (evt.target.closest('.link_button_name-delete')) {
			// очистка таймера holdTimer
			//clearTimeout(holdTimer);
			//holdTimer = setTimeout(() => {
			//evt.target.closest('.link_button_name-delete').style.backgroundColor = 'red';
			console.log('Прошло 2 секунды');
			console.log(evt);
			example(event);
			dragStart(event);
			//dragStart(evt);
			console.log(event);
			//dragDrop8();
			//}, 2000); // Выведет через 2 секунды

		}
	});

	document.addEventListener('mousedown', function (event) {
		let evt = getEvent(event);


		let targetLink = event.target.closest('.link');
		if (evt.target.closest('.link_button_name-delete')) {
			// очистка таймера holdTimer
			clearTimeout(holdTimer);
			holdTimer = setTimeout(() => {
				console.log('Прошло 2 секунды');
				console.log(evt);
				example(event);
				dragStart(event);
				//dragStart(evt);
				console.log(event);
				//dragDrop8();
			}, 2000); // Выведет через 2 секунды

		}
	});

	document.addEventListener('touchend', function (event) {
		clearTimeout(holdTimer);
	});
	document.addEventListener('mouseup', function (event) {
		clearTimeout(holdTimer);
	});




	/* 	document.addEventListener('touchstart', function (event) {
			let targetLink = event.target.closest('.link');
			if (targetLink) {
				setTimeout(() => {
					console.log('Прошло 2 секунды');
					//dragStart();
					dragStart();
					//dragDrop8();
				}, 2000); // Выведет через 2 секунды
			}
		});
		document.addEventListener('mousedown', function (event) {
			let targetLink = event.target.closest('.link');
			if (targetLink) {
				setTimeout(() => {
					console.log('Прошло 2 секунды');
					//dragStart();
					dragStart(event);
					console.log(event);
					//dragDrop8();
				}, 2000); // Выведет через 2 секунды
			}
		}); */



	document.body.addEventListener("dragstart", function (event) {
		let evt = getEvent(event);
		evt.preventDefault();
	});
};

function dragDrop8() {
	console.log('dragDrop запущена');
}

dragDrop();















































document.addEventListener('keydown', function (event) {


	target1 = event.target;

	let targetPlankButtonNameDelete = event.target.closest('.plank_button_name-delete');
	let targetPlank = event.target.closest('div.plank');
	let targetTextareaNameGroup = event.target.closest('textarea.plank');
	let targetLink = event.target.closest('.link');
	let targetTextareaLinkName = event.target.closest('textarea.link-name');
	let targetTextareaLinkAddress = event.target.closest('textarea.link-address');
	let targetEditName = event.target.closest('.edit-name');
	let targetEditUrl = event.target.closest('.edit-url');
	let targetDeleteLink = event.target.closest('.delete-link');
	let targetWrapperCreateLink = event.target.closest('.wrapper_create_link');


	// console.log(targetLink);

	console.log(event.code);

	if (event.code === 'Enter') {
		console.log('Нажата клавиша Enter');

		if (targetPlank) {

			event.preventDefault();
			if (targetPlank.nextElementSibling.classList.contains('hidden')) {
				console.log(targetPlank.nextElementSibling);
				targetPlank.nextElementSibling.classList.remove('hidden');

			} else {
				console.log('без hidden');

				if (!targetTextareaNameGroup) {
					console.log('без textarea')
					if (!targetPlank.querySelector('.wrappertextarea')) {
						console.log('без обёртки textarea')
						//Нужна для сохранения имени группы
						pNameGroup = targetPlank.querySelector('p');
						const title = targetPlank.querySelector('p');
						console.log(title);
						console.log(targetPlank.querySelector('p'));

						let titleParrent = targetPlank;
						nameGroup0 = title.textContent;
						let element = title;
						let value = title.textContent;

						let parent = titleParrent;
						showTextareaGroup(element, value, parent);
					}
				} else {
					if (targetPlank.querySelector('.wrappertextarea')) {
						console.log('внутри обёртки textarea');

						if (!pNameGroup) {
							pNameGroup = '';
						}
						let wrapper = targetPlank.querySelector('.wrappertextarea');
						//переменная для блока с кнопками названия и удаления группы, нужна для сохранения названия
						wrapperButtonPlankTarget = targetPlank.closest('.group').querySelector('.wrapper_button_plank');

						textarea = targetPlank.querySelector('textarea');
						element = pNameGroup;
						parent = targetPlank;


						saveNameGroup(textarea, element, wrapper);

						parent.focus();
					}
				}
			}
			console.log(targetPlank);

			console.log(targetPlank.querySelector('.wrappertextarea'));

			// если планка с именем группы содержит блок с textarea, сохранить и отмена

		}
		if (targetLink) {
			event.preventDefault();
			if (targetLink.querySelector('.wrapper_button_link').classList.contains('hidden')) {
				targetLink.querySelector('.wrapper_button_link').classList.remove('hidden');
				targetLink.querySelector('.edit-name').focus();
			} else {

				if (targetEditName) {
					pNameLink = targetLink.querySelector('a p');
					// console.log(pNameLink);

					const title = targetLink.querySelector('a p');
					// console.log(title);
					// console.log(targetPlank.querySelector('p'));

					let titleParrent = targetLink.querySelector('.rem');
					nameLink0 = title.textContent;
					let element = title;
					let value = element.textContent;
					let parent = titleParrent;
					showTextareaLinkName(element, value, parent);
				}

				if (targetEditUrl) {
					pNameLink = targetLink.querySelector('a p');

					const title = targetLink.querySelector('a p');

					let titleParrent = targetLink.querySelector('.rem');
					linkURL0 = targetLink.querySelector('a').getAttribute('href');
					let element = title;
					let value = targetLink.querySelector('a').getAttribute('href');

					let parent = titleParrent;

					//element - targetLink.querySelector('a p'), 
					//value - targetLink.querySelector('a').getAttribute('href')  
					//parent - targetLink.querySelector('.rem') 
					showTextareaLinkURL(element, value, parent);
				}
				if (targetTextareaLinkName) {

					pNameLink = target1.closest('.link').querySelector('a p');

					let wrapper = target1.closest('.wrappertextarea');

					wrapperButtonLinkTarget = target1.closest('.wrapper_button_link');

					textarea = targetTextareaLinkName;
					element = pNameLink;
					let buttonEditName = targetLink.querySelector('.edit-name');
					console.log(targetLink);


					saveNameLink(textarea, element, wrapper);

					buttonEditName.focus();
				}
				if (targetTextareaLinkAddress) {
					pNameLink = target1.closest('.link').querySelector('a p');

					let wrapper = target1.closest('.wrappertextarea');

					wrapperButtonLinkTarget = target1.closest('.wrapper_button_link');

					textarea = targetTextareaLinkAddress;
					element = pNameLink;
					let buttonEditUrl = targetLink.querySelector('.edit-url');
					console.log(targetLink);

					// textarea - targetLink.querySelector('textarea.link-address');
					// element - targetLink.querySelector('a p');
					// wrapper - textarea.closest('.wrappertextarea');
					saveURLLink(textarea, element, wrapper);

					buttonEditUrl.focus();
				}
				if (targetDeleteLink) {
					let nextElement = targetLink.nextElementSibling;
					target1.closest('.link').remove();
					nextElement.focus();
				}
			}
		}
		if (targetWrapperCreateLink) {
			console.log('кнопка создания ссылки');
			const belowPlankContainer = target1.closest('.below-plank-container'); // ищем родительскую группу
			const wrapperCreateLink = targetWrapperCreateLink;
			belowPlankContainer.insertBefore(createLink(), wrapperCreateLink);
			numberLink();
		}














	}





	if (event.code === 'Escape') {
		console.log('Нажата клавиша Escape');
		if (targetPlank) {
			if (!targetPlank.nextElementSibling.classList.contains('hidden')) {
				targetPlank.nextElementSibling.classList.add('hidden');
			}
			if (targetPlank.querySelector('.wrappertextarea')) {
				let wrapper = targetPlank.querySelector('.wrappertextarea');

				let parent = targetPlank;


				cancelNameGroup(parent, wrapper);
				parent.focus();
				console.log(target1);

			}
		}
		if (targetLink) {

			if (targetTextareaLinkName) {
				nameLink0 = targetLink.querySelector('a p').textContent;
				let wrapper = target1.closest('.wrappertextarea');

				let parent = targetLink.querySelector('.rem');
				let buttonEditName = targetLink.querySelector('.edit-name');
				// parent - targetLink.querySelector('.rem');
				// wrapper - targetLink.querySelector('.container_link_name .wrappertextarea');
				cancelNameLink(parent, wrapper);
				buttonEditName.focus();

			} else if (targetTextareaLinkAddress) {

				linkURL0 = targetLink.querySelector('a').getAttribute('href');
				let wrapper = target1.closest('.wrappertextarea');

				let parent = targetLink.querySelector('.rem');
				let buttonEditUrl = targetLink.querySelector('.edit-url');
				//parent - targetLink.querySelector('.rem') 
				// wrapper - textarea.closest('.wrappertextarea');
				cancelURLLink(parent, wrapper);
				buttonEditUrl.focus();
			} else if (!targetLink.querySelector('.wrapper_button_link.hidden')) {
				targetLink.querySelector('.wrapper_button_link').classList.add('hidden');
				targetLink.focus();

			}
		}




















	}
	if (event.code === 'KeyA' || event.key === 'ArrowLeft') {
		if (event.target.classList.contains('delete-link') || event.target.classList.contains('edit-url')) {
			target1.previousElementSibling.focus();
		}
	}
	if (event.code === 'KeyD' || event.key === 'ArrowRight') {
		if (event.target.classList.contains('edit-name') || event.target.classList.contains('edit-url')) {
			target1.nextElementSibling.focus();
		}


	}
	if (event.code === 'KeyW' || event.key === 'ArrowUp') {
		console.log('вверх');
		// event.preventDefault();
		console.log(target1);

		if (event.target.classList.contains('link') || event.target.classList.contains('wrapper_create_link')) {
			// если предыдущий элемент содержит класс link или group, то фокус перемещается на него

			if (target1.previousElementSibling) {
				if (target1.previousElementSibling.classList.contains('link')) {

					target1.previousElementSibling.focus();
				}


			}
		} else if (targetPlank) {
			console.log('иначе группа');

			let parrentPlank = targetPlank.closest('.group');
			console.log(parrentPlank);

			if (targetPlank.querySelector('.wrappertextarea')) {


			} else if (parrentPlank.previousElementSibling) {
				console.log(target1);
				target1.closest('.group').previousElementSibling.querySelector('div.plank').focus();
				console.log(target1);
			}
		}
	}
	if (event.code === 'KeyS' || event.key === 'ArrowDown') {
		console.log('вниз');


		if (event.target.classList.contains('link')) {
			// если предыдущий элемент содержит класс link или group, то фокус перемещается на него
			if (target1.nextElementSibling.classList.contains('link') || target1.nextElementSibling.classList.contains('wrapper_create_link')) {
				target1.nextElementSibling.focus();
			}
		} else if (targetPlank) {
			console.log('иначе группа');

			let parrentPlank = targetPlank.closest('.group');
			console.log(parrentPlank);
			if (targetPlank.querySelector('.wrappertextarea')) {


			} else if (parrentPlank.nextElementSibling) {
				if (parrentPlank.nextElementSibling.classList.contains('group')) {

					console.log(target1);
					target1.closest('.group').nextElementSibling.querySelector('div.plank').focus();
					console.log(target1);
				}
			}
		}
		console.log(target1);
	}
});


// @ Удаление textarea, если где-то осталось
window.addEventListener('beforeunload', (event) => {
	let textarea = document.querySelectorAll('textarea');
	text1 = textarea;
	textarea.remove();
	console.log(textarea);
	textarea = document.querySelectorAll('textarea');
	text2 = textarea;
});

// @ сохраняем text1, text2 перед уходом со страницы
window.addEventListener('beforeunload', () => {
	localStorage.setItem('text1', text1);
	localStorage.setItem('text2', text2);
});

// @ после загрузки страницы восстанавливаем text1, text2
window.addEventListener('load', () => {
	const text1 = localStorage.getItem('text1');
	const text2 = localStorage.getItem('text2');

	console.log(text1);
	console.log(text2);

});


















//*@ Автосохранение каждые 2 секунды 
// Каждые 2 секунды сохраняем текущее состояние страницы
setInterval(() => {
	localStorage.setItem('pageData', groupsContainer.innerHTML);
	// console.log('2000');

}, 2000);


//*@ Восстановление при загрузке страницы
window.onload = () => {
	const savedData = localStorage.getItem('pageData');

	if (savedData) {
		groupsContainer.innerHTML = savedData;
		console.log(groupsContainer);
	}
};


// @ сохраняем позицию перед уходом со страницы
window.addEventListener('beforeunload', () => {
	localStorage.setItem('scrollPosition', window.scrollY);
});

// @ после загрузки страницы восстанавливаем позицию
window.addEventListener('load', () => {
	const scrollPosition = localStorage.getItem('scrollPosition');

	if (scrollPosition !== null) {
		window.scrollTo(0, parseInt(scrollPosition, 10));
	}
});



//*@ Скачивание файла
downloadBtn.onclick = () => {

	// Берём сохранённые данные
	const data = localStorage.getItem('pageData');

	// Создаём файл из текста
	const blob = new Blob([data], { type: 'text/html' });

	// Создаём временную ссылку для скачивания
	const a = document.createElement('a');
	a.href = URL.createObjectURL(blob);
	a.download = 'data.html';

	// "Нажимаем" на ссылку
	a.click();
};



//*@ Загрузка файла
// При нажатии "Загрузить файл" — открываем выбор файла
uploadBtn.onclick = () => {
	fileInput.click();
};

// Когда файл выбран
fileInput.onchange = () => {

	const file = fileInput.files[0];
	const reader = new FileReader();

	// Когда файл прочитан
	reader.onload = () => {

		// Вставляем данные на страницу
		groupsContainer.innerHTML = reader.result;

		// И сохраняем в localStorage
		localStorage.setItem('pageData', reader.result);
	};

	// Читаем файл как текст
	reader.readAsText(file);
};
