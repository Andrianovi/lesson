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

//@ Функция создания ссылки
// 🆕 Функция СОЗДАЁТ элемент "ссылка"
function createLink(name = 'Новая ссылка', url = '#') {

	// 🆕 Создаём div для ссылки
	const linkDiv = document.createElement('div');

	// 🆕 Добавляем класс (нужен для делегирования событий)
	linkDiv.className = 'link';

	// 🔄 Вставляем HTML без JS-логики
	linkDiv.innerHTML = `
			<a href="${url}" target="_blank">${name}</a>
			<button class="edit-name">изменить название</button>
			<button class="edit-url">изменить адрес</button>
			<button class="delete-link">удалить ссылку</button>
	;`

	// 🔄 ВАЖНО: здесь больше НЕТ onclick

	return linkDiv; // ✅ БЫЛО
}

//*@ Функция создания группы
// 🆕 Функция СОЗДАЁТ группу
//function createGroup(name = 'Новая группа') {
function createGroup(name = '') {

	const groupDiv = document.createElement('div'); // ✅ БЫЛО
	groupDiv.className = 'group'; // 🆕 класс группы

	/* groupDiv.innerHTML = `
				<p class="group-name">${name}</p>
				<button class="edit-group">изменить название</button>
				<button class="delete-group">удалить группу</button>
				<br><br>
				<button class="create-link">Создать ссылку</button>
		;` */
	groupDiv.innerHTML = `
			<div class="plank">
				<p class="group-name">${name}</p>
				<div class="plank_button_name-delete">
							<span class="plank_name_span span1"></span>
							<span class="plank_name_span span2"></span>
							<span class="plank_name_span span3"></span>
						</div>
			</div>
			<div class="wrapper_button_plank">
						<button class="edit-group buttons">изменить название</button>
						<button class="delete-group buttons">удалить группу</button>
					</div>
			<div class="below-plank">
						<div class="below-plank-container">
						
						
						<div class="wrapper_create_link">
								<button class="create-link buttons tan">Создать ссылку</button>
							</div>
						</div>
					</div>
						;`

	return groupDiv; // ✅ БЫЛО
}



//*@ Создание новой группы по кнопке
createGroupBtn.onclick = () => {
	groupsContainer.appendChild(createGroup());
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
			a.textContent = name1;
			a.target = '_blank';
			wrapper.replaceWith(a);
		}
		// если редактируем обычный текст
		else {
			name1 = textarea.value
			//element.textContent = textarea.value;
			element.textContent = name1;
			wrapper.replaceWith(element);
			console.log(name1);
		}
	};
} */



//название которое сохранено
let name0;
//название которое набрано в textarea
let name1;
//*@ Редактирование через <textarea></textarea>
// 🆕 Показывает textarea для редактирования текста группы
function showTextareaGroup
	(element, value, parent) {
	console.log(parent);

	let heightPlank = document.querySelector('.plank').getBoundingClientRect().height;
	// let heightTextarea = groupDiv.getBoundingClientRect().height;
	console.log(heightPlank);

	const textarea = document.createElement('textarea'); // поле ввода
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
		//textarea.;
		name1 = textarea.value
		element.textContent = name1;
		wrapper.replaceWith(element);
		console.log(wrapperButtonPlankTarget);

		wrapperButtonPlankTarget.classList.add('hidden');
	};
	saveBtn.querySelector('.cancel_name_group').onclick = () => {
		wrapper.remove();
		let p = document.createElement('p');
		p.textContent = name0;
		p.classList.add('group-name');

		//parent.outerHTML = `<p class="group-name">${name0}</p>`;
		console.log(p);
		parent.insertBefore(p, parent.firstElementChild);
	}
}

// 🆕 Показывает textarea для редактирования текста ссылки
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
			a.textContent = name1;
			a.target = '_blank';
			wrapper.replaceWith(a);
		}
		// если редактируем обычный текст
		else {
			name1 = textarea.value
			//element.textContent = textarea.value;
			element.textContent = name1;
			wrapper.replaceWith(element);
			console.log(name1);
		}
	};
}
























































// группа для удаления
let groupForDelete;
let wrapperButtonPlankTarget;
let linkURl;

document.addEventListener('click', function (event) {
	let targetPlank = event.target.closest('.plank');
	let targetBurger = event.target.closest('.burger');
	let targetPlankButtonNameDelete = event.target.closest('.plank_button_name-delete');
	let targetWrapperLi = event.target.closest('.wrapper_li');
	let targetLinkButtonNameDelete = event.target.closest('.link_button_name-delete');
	let conteinerAttentionDelete = event.target.closest('.conteiner_attention_delete');





	const target = event.target;


	if (targetPlank) {
		if (targetPlankButtonNameDelete) {
			console.log('button');
			targetPlank.nextElementSibling.classList.toggle('hidden');
		} else {
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
		// console.log('button');
		targetWrapperLi.nextElementSibling.classList.toggle('hidden');
		linkURl = targetWrapperLi.querySelector('a').href;
		console.log(linkURl);
		targetWrapperLi.nextElementSibling.querySelector('.link-address').textContent = linkURl;
	}

	// 🆕 Создание ссылки внутри группы
	if (target.classList.contains('create-link')) {
		const group = target.closest('.group'); // ищем родительскую группу
		group.insertBefore(createLink(), target); // вставляем ссылку перед кнопкой
	}

	// 🆕 Удаление группы
	// 1) Вызов предупреждения
	if (target.classList.contains('delete-group')) {
		attentionDelete.classList.remove('hidden');
		groupForDelete = target.closest('.group');
		//target.closest('.group').remove();
	}

	if (conteinerAttentionDelete) {
	} else {
		if (target.classList.contains('delete-group')) {
			attentionDelete.classList.remove('hidden');
		} else {
			attentionDelete.classList.add('hidden');
		}
	}

	if (target.classList.contains('attention_delete_yes')) {
		groupForDelete.remove();
		attentionDelete.classList.add('hidden');
	} else if (target.classList.contains('attention_delete_no')) {
		attentionDelete.classList.add('hidden');
	}

	// 🆕 Редактирование названия группы
	if (target.classList.contains('edit-group')) {
		wrapperButtonPlankTarget = target.closest('.wrapper_button_plank');
		const title = target.closest('.wrapper_button_plank').previousElementSibling.querySelector('p'); // <p>
		let titleParrent = target.closest('.wrapper_button_plank').previousElementSibling;// parent <p></p>
		name0 = title.textContent;
		console.log(name0);
		showTextareaGroup(title, title.textContent, titleParrent);
	}

	// ===== КНОПКИ ССЫЛОК =====

	// 🆕 Удаление ссылки
	if (target.classList.contains('delete-link')) {
		target.closest('.link').remove();
	}

	// 🆕 Редактирование названия ссылки
	if (target.classList.contains('edit-name')) {
		const a = target.parentElement.querySelector('a');
		showTextarea(a, a.textContent);
	}

	// 🆕 Редактирование адреса ссылки
	if (target.classList.contains('edit-url')) {
		const a = target.parentElement.querySelector('a');
		showTextarea(a, a.href, true);
	}
});


//*@ Автосохранение каждые 2 секунды 
// Каждые 2 секунды сохраняем текущее состояние страницы
setInterval(() => {
	localStorage.setItem('pageData', groupsContainer.innerHTML);
	// console.log('2000');

}, 2000);

/* 
//*@ Восстановление при загрузке страницы
window.onload = () => {
	const savedData = localStorage.getItem('pageData');

	if (savedData) {
		groupsContainer.innerHTML = savedData;
		console.log(groupsContainer);
	}
};
	*/


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
