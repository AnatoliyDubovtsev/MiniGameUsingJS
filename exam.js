const tdWidth = 79;
		const tdHeight = 79;
		const maxLevel = 10;
		
		var refToImg = ['0', "SHpipe.png", "SVpipe.png", "A0pipe.png", "A90pipe.png", "A180pipe.png", "A270pipe.png", "Crane.png", "OutPipe.png", "OutPipe90.png", "OutPipe180.png", "OutPipe270.png"];  // массив ссылок на картинки
		
		//Массивы для уровней (Начало)
		var firstLevelElements = [7,1,3,3,0,1,8,1,4];  // элементы первого уровня
		var firstLevelCorrectValues = [1,6,2,1,3]; //Во время проверки брать элементы с тегом img и сравнивать их value
		var firstLevelUsedTd = [1, 2, 5,7,8]; //Используемые ячейки
		
		var secondLevelElements = [7, 1, 3, 1, 0, 4, 4, 1, 0, 1, 0, 0, 0, 5, 1, 10];
		var secondLevelCorrectValues = [1, 6, 5, 3, 2, 4, 1];
		var secondLevelUsedTd = [1, 2, 5, 6, 9, 13, 14];
		
		var thirdLevelElements = [3, 1, 3, 1, 7, 4, 1, 1, 0, 0, 3, 3, 5, 0, 0, 3, 1, 3, 3, 0, 8, 3, 1, 0, 0];
		var thirdLevelCorrectValues = [5, 1, 2, 5, 3, 2, 3];
		var thirdLevelUsedTd = [2, 3, 7, 11, 12, 16, 21];
		
		var fourthLevelElements = [0, 4, 3, 5, 2, 0, 3, 5, 5, 1, 2, 5, 6, 5, 0, 6, 2, 1, 7, 5, 5, 6, 5, 6, 4, 4, 2, 0, 6, 10, 4, 5, 6, 0, 3, 2];
		var fourthLevelCorrectValues = [5, 6, 5, 3, 4, 1, 1, 6, 4, 6, 2, 3, 5, 3, 4];
		var fourthLevelUsedTd = [1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 17, 19, 22, 23, 28];
		
		var fifthLevelElements = [6, 1, 2, 2, 2, 1, 3, 5, 5, 1, 2, 0, 6, 1, 6, 6, 2, 1, 0, 5, 1, 6, 5, 6, 4, 4, 2, 2, 2, 2, 4, 5, 0, 4, 3, 0, 1, 0, 0, 0, 1, 0, 8, 3, 0, 0, 0, 3, 7];
		var fifthLevelCorrectValues = [5, 1, 1, 1, 1, 1, 6, 4, 6, 2, 5, 3, 2, 4, 6, 2, 2, 5, 3, 2, 2, 3, 4];
		var fifthLevelUsedTd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 20, 21, 22, 27, 29, 33, 34, 36, 40, 43, 47];

		var sixthLevelElements = [1, 0, 3, 1, 2, 2, 1, 3, 5, 6, 1, 3, 2, 6, 0, 2, 0, 6 ,6, 2, 0, 1, 0, 2, 0, 5, 3, 2, 0, 3, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 7, 3, 1, 3, 1, 3, 6, 10, 0, 1, 5, 3, 0, 1, 5, 5, 0, 4, 2, 4, 0, 4, 1, 5];
		var sixthLevelCorrectValues = [5, 1, 1, 1, 1, 6, 2, 5, 1, 6, 2, 5, 3, 2, 2, 2, 4, 6, 2, 4, 1, 3, 2, 2, 6, 2, 4, 1, 6, 5, 2, 4, 6, 2, 4, 6, 4, 1, 3, 4, 1, 3];
		var sixthLevelUsedTd = [2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 15, 17, 18, 19, 21, 23, 25, 26, 27, 29, 30, 31, 34, 35, 41, 42 ,43, 44, 45, 46, 49, 50, 51, 53, 54, 55, 57, 58, 59, 61, 62, 63];

		var seventhLevelElements = [4, 1, 2, 1, 5, 0, 0, 0, 0, 1, 2, 1, 2, 1, 0, 4, 1, 7, 6, 1, 2, 3, 1, 0, 5, 3, 0, 8, 3, 0, 1, 4, 3, 0, 2, 0, 0, 1, 5, 6, 0, 1, 6, 5, 0, 3, 4, 1, 0, 4, 6, 1, 0, 0, 2, 0, 4, 5, 2, 0, 4, 2, 3, 4, 4, 0, 2, 5, 5, 0, 5, 5, 0, 3, 1, 3, 0, 5, 1, 3, 0];
		var seventhLevelCorrectValues = [5, 1, 1, 1, 6, 2, 2, 5, 1, 4, 1, 1, 6, 2, 4, 6, 6, 2, 4, 6, 2, 2, 5, 3, 2, 5, 3, 5, 3, 2, 5, 3, 2, 2, 4, 6, 2, 4, 1, 6, 4, 6, 2, 4, 6, 5, 3, 4, 1, 3, 4, 1, 3];
		var seventhLevelUsedTd = [0, 1, 2, 3, 4, 9, 13, 15, 16, 18, 19, 20, 21, 22, 24, 25, 28, 30, 31, 32, 34, 37, 38, 39, 41, 42, 43, 45, 46, 47, 49, 50, 51, 54, 56, 57, 58, 60, 61, 62, 63, 64, 66, 67, 68, 70, 71, 73, 74, 75, 77, 78, 79];
		
		var eighthLevelElements = [3, 1, 3, 0, 3, 2, 5, 0, 5, 7, 1, 0, 2, 0, 5, 3, 4, 1, 3, 4, 2, 0, 4, 2, 1, 4, 0, 0, 0, 2, 4, 5, 0, 5, 4, 0, 0, 0, 5, 5, 0, 1, 0, 2, 1, 0, 4, 2, 3, 0, 0, 4, 1, 4, 1, 0, 1, 0, 3, 4, 5, 1, 2, 1, 3, 0, 4, 1, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 4, 0, 0, 6, 5, 5, 6, 0, 0, 0, 3, 1, 2, 3, 5, 5, 6, 10];
		var eighthLevelCorrectValues = [5, 1, 6, 5, 1, 6, 5, 2, 2, 4, 6, 4, 1, 3, 2, 4, 1, 1, 3, 4, 6, 5, 6, 2, 2, 2, 4, 1, 3, 2, 5, 1, 1, 1, 3, 2, 4, 1, 6, 5, 6, 5, 6, 4, 1, 1, 3, 4, 3, 4];
		var eighthLevelUsedTd = [0, 1, 2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 17, 18, 20, 22, 23, 24, 25, 30, 31, 33, 34, 41, 43, 44, 51, 52, 53, 54, 60, 61, 62, 63, 64, 70, 80, 81, 82, 85, 86, 87, 88, 92, 93, 94, 95, 96, 97, 98];

		var ninthLevelElements = [7, 3, 0, 0, 4, 1, 2, 2, 4, 0, 0, 0, 1, 0, 3, 4, 0, 5, 0, 2, 3, 3, 5, 5, 1, 3, 0, 0, 6, 0, 1, 2, 2, 1, 0, 0, 0, 0, 4, 1, 3, 4, 5, 1, 3, 3, 0, 4, 1, 5, 0, 2, 0, 4, 4, 0, 1, 0, 1, 0, 0, 2, 2, 0, 4, 0, 0, 2, 4, 5, 6, 1, 4,  5, 5, 6, 10, 0, 4, 4, 0, 2, 0, 3, 2, 0, 3, 3, 5, 2, 5, 2, 5, 0, 0, 1, 3, 2, 3, 3, 4, 0, 4, 2, 1, 3, 0, 4, 5, 0, 0, 5, 1, 5, 0, 0, 6, 2, 1, 6, 0];
		var ninthLevelCorrectValues = [6, 2, 5, 3, 2, 4, 6, 2, 2, 5, 4, 6, 4, 6, 5, 1, 3, 5, 1, 3, 4, 6, 5, 1, 1, 6, 4, 6, 4, 1, 3, 4, 1, 1, 3];
		var ninthLevelUsedTd = [1, 12, 22, 23, 33, 44, 45, 56, 67, 75, 78, 79, 86, 87, 88, 89, 90, 96, 97, 98, 99, 100, 102, 103, 104, 105, 107, 108, 111, 112, 113, 116, 117, 118, 119];

		var tenthLevelElements = [0, 3, 2, 3, 0, 4, 1, 2, 2, 2, 2, 3, 8, 6, 0, 2, 1, 1, 3, 0, 4, 5, 0, 2, 0, 1, 3, 3, 2, 1, 0, 0, 2, 0, 0, 1, 0, 1, 6, 2, 3, 0, 2, 1, 3, 3, 0, 2, 5, 4, 0, 0, 5, 5, 0, 0, 2, 1, 0, 1, 1, 0, 0, 3, 0, 1, 0, 0, 1, 4, 5, 1, 5, 2, 3, 2, 0, 4, 1, 4, 1, 0, 1, 2, 0, 0, 4, 4, 0, 0, 5, 4, 2, 0, 0, 2, 5, 5, 0, 1, 0, 0, 2, 4, 4, 0, 6, 5, 1, 4, 2, 3, 0, 0, 4, 2, 1, 4, 2, 0, 2, 0, 0, 3, 4, 0, 0, 4, 0, 1, 4, 7, 6, 1, 2, 3, 4, 2, 1, 3, 0, 4, 4, 0];
		var tenthLevelCorrectValues = [5, 1, 6,   3, 2,    5, 3,    4, 1, 6,    4, 6,   2,   4, 1, 6,   5, 3,   2,   4, 1, 1, 6,    2, 5,    4, 3];
		var tenthLevelUsedTd = [1, 2, 3,    13, 15,     26, 27,    38, 39, 40,   52, 53,    65,   77, 78, 79,   90, 91,   102,   114, 115, 116, 117,    129, 130,    141, 142];
		//Массивы для уровней (Конец)

		var level = 'level_1'; //id уровня
		var numberOfLevel; //числовое значение уровня
		var countClick = 0; //Счетчик нажатий на картинку
		
		//Функция, берущая числовую часть из ID уровня
		function takeNumberPart(levelId)
		{
			let splittedLevel = levelId.split("_");
			numberOfLevel = +splittedLevel[1];
		}
		
		function goToLevel(event)     //Функция для кнопок вперед-назад
		{
			let element = event.target;
			takeNumberPart(element.getAttribute('value'));
			
			let thisLevel = document.getElementById(level);
			
			if(element.id == "previousLevel" && numberOfLevel == 1)
			{
				return;
			}
			else if (element.id == "previousLevel")
			{
				level = "level_" + (numberOfLevel - 1);
				updateLevel(level);
			}
			else if (element.id == "nextLevel" && thisLevel.getAttribute('value') == "unpassed")
			{
				alert('Пройдите предыдущий уровень');
				return;
			}
			else if (element.id == "nextLevel" && numberOfLevel == 10)
			{
				return;
			}
			else if (element.id == "nextLevel")
			{
				level = "level_" + (numberOfLevel + 1);
				updateLevel(level);
			}
			drawLevel(null);
		}
		
		function updateLevel(level) //Обновление номера уровня для кнопок вперед-назад
		{
			let prevButton = document.getElementById('previousLevel');
			prevButton.setAttribute('value', level);
			
			let nextButton = document.getElementById('nextLevel');
			nextButton.setAttribute('value', level);
			if(nextButton.hasAttribute('onclick') == false)
				nextButton.setAttribute('onclick', 'goToLevel(event)');
		}
		
		function drawLevel(event)  //Прорисовка уровня (создаем таблицу и ячейки)
		{
			clickCounter(0); //Обнуляем счетчик нажатий
			removeOldPage();
			startTimer();
			
			if(event != null)
			{
				level = event.target.id;  //Id элемента, на который кликнули
				updateLevel(level);		//Обновляем уровень
			}
			
			let myTable = document.createElement('table'); 
			
			takeNumberPart(level);
			let myCounter = numberOfLevel + 2;
			console.log(myCounter);
			
			for(let i = 0; i < myCounter; i++)
			{
				let myTR = document.createElement('tr');
				for(let j = 0; j < myCounter; j++)
				{
					let myTD = document.createElement('td');
					myTD.setAttribute('id', 'part' + (j+1));
					myTR.appendChild(myTD);
				}
				myTable.appendChild(myTR);
			}
			let blockGame = document.getElementsByClassName('game')[0];
			blockGame.appendChild(myTable);
			
			arrangeObjects(level); // Вызываем функцию распределения объектов по уровню
		}
		
		function arrangeObjects(level)  //Функция распределения объектов
		{
			let myArr;
			switch (level)   //Выбираем массив в зависимости от уровня 
			{
				case 'level_1': myArr = [...firstLevelElements];
				break;
				case 'level_2': myArr = [...secondLevelElements];
				break;
				case 'level_3': myArr = [...thirdLevelElements];
				break;
				case 'level_4': myArr = [...fourthLevelElements];
				break;
				case 'level_5': myArr = [...fifthLevelElements];
				break;
				case 'level_6': myArr = [...sixthLevelElements];
				break;
				case 'level_7': myArr = [...seventhLevelElements];
				break;
				case 'level_8': myArr = [...eighthLevelElements];
				break;
				case 'level_9': myArr = [...ninthLevelElements];
				break;
				case 'level_10': myArr = [...tenthLevelElements];
				break;
			}
			
			let tds = document.getElementsByTagName('td');
			
			for(let i = 0; i < tds.length; i++)
			{
				if(myArr[i] != 0)	//Если ячейка не пустая, то создаем картинку, добавляем ей аттрибуты
				{
					let image = document.createElement('img');
					
					image.setAttribute('src', refToImg[myArr[i]]);
					image.setAttribute('id', i);
					image.setAttribute('value', myArr[i]);

					if (myArr[i] == 7)	//Событие проверки при клике на кран
					{
						image.setAttribute('onclick', 'checkObjects()');
					}
					
					if(myArr[i] < 7)
					image.addEventListener('click', function(event) {	//Добавляем ответ на событие click
						
						clickCounter(1);	//Вызываем функцию, обрабатывающую нажатие на картинку					
						let clickedImage = event.target;
						console.log(event.target.id);
						switch(clickedImage.getAttribute('src'))
						{
							case 'SHpipe.png':
								clickedImage.setAttribute('src', 'SVpipe.png');   //Меняем картинку
								clickedImage.setAttribute('value', 2);				//Меняем value (по value будем отслеживать корректность позиции
								break;
							case 'SVpipe.png':
								clickedImage.setAttribute('src', 'SHpipe.png');
								clickedImage.setAttribute('value', 1);
								break;
							case 'A270pipe.png':
								clickedImage.setAttribute('src', 'A0pipe.png');
								clickedImage.setAttribute('value', 3);
								break;
							case 'A0pipe.png':
								clickedImage.setAttribute('src', 'A90pipe.png');
								clickedImage.setAttribute('value', 4);
								break;
							case 'A90pipe.png':
								clickedImage.setAttribute('src', 'A180pipe.png');
								clickedImage.setAttribute('value', 5);
								break;
							case 'A180pipe.png':
								clickedImage.setAttribute('src', 'A270pipe.png');
								clickedImage.setAttribute('value', 6);
								break;
						}
						}, true);
						
					tds[i].appendChild(image);
				}
			}
		}
		
		//Работа со счетчиком кликов
		function clickCounter(condition)
		{
			if(condition == 1)
			{
				countClick++;
				//console.log("countClick: " + countClick);
			}
			else if (condition == 0)
			{
				countClick = 0;
			}
			let clickCounterPlace = document.getElementById('clickCounter');
			clickCounterPlace.innerHTML = countClick;
		}
		
		function checkObjects() //Проверка расстановки объектов
		{
			let tds = document.getElementsByTagName('td');
			let levelKeys;
			let tdForCheck;
			switch(level) //В зависимости от уровня выбираются 2 массива: массив использующихся ячеек таблицы и массив правильных положений рисунков
			{
				case 'level_1': 
					levelKeys = [...firstLevelCorrectValues];
					tdForCheck = [...firstLevelUsedTd];
					break;
				case 'level_2':
					levelKeys = [...secondLevelCorrectValues];
					tdForCheck = [...secondLevelUsedTd];
					break;
				case 'level_3':
					levelKeys = [...thirdLevelCorrectValues];
					tdForCheck = [...thirdLevelUsedTd];
					break;
				case 'level_4':
					levelKeys = [...fourthLevelCorrectValues];
					tdForCheck = [...fourthLevelUsedTd];
					break;
				case 'level_5':
					levelKeys = [...fifthLevelCorrectValues];
					tdForCheck = [...fifthLevelUsedTd];
					break;
				case 'level_6':
					levelKeys = [...sixthLevelCorrectValues];
					tdForCheck = [...sixthLevelUsedTd];
					break;
				case 'level_7':
					levelKeys = [...seventhLevelCorrectValues];
					tdForCheck = [...seventhLevelUsedTd];
					break;
				case 'level_8':
					levelKeys = [...eighthLevelCorrectValues];
					tdForCheck = [...eighthLevelUsedTd];
					break;
				case 'level_9':
					levelKeys = [...ninthLevelCorrectValues];
					tdForCheck = [...ninthLevelUsedTd];
					break;	
				case 'level_10':
					levelKeys = [...tenthLevelCorrectValues];
					tdForCheck = [...tenthLevelUsedTd];
					break;	
			}
			for(let i = 0; i < tdForCheck.length; i++)
			{
				if(tds[tdForCheck[i]].getElementsByTagName('img')[0].getAttribute('value') != levelKeys[i])  //Здесь выводится номер ячейки в массиве используемых ячеек
				{
					console.log("td: " + i); 
					alert('Ошибка');
					return;
				}
			}
			
			if(numberOfLevel < maxLevel)  //Если уровень не последний, то отрисовываем кнопку для нового уровня
			{
				drawNewLevelButton();
			}
			if(numberOfLevel == maxLevel) //Если последний уровень пройден, то выдать поздравление о прохождении игры
			{
				alert("Вы прошли игру!");
			}
			updateButtonColor(); //Обновление цвета кнопки текущего уровня
			addAchievementImage(); //Добавляем картинку достижения
			
			alert('Все верно');
		}
		
		//Функция для обновления цвета кнопки текущего уровня
		function updateButtonColor()
		{
			let thisLevel = document.getElementById(level);
			thisLevel.setAttribute('value', 'passed');
			thisLevel.style.background = "green";
			clearTimeout(timer);
		}
		
		//Функция, добавляющая новые кнопки для уровней по мере прохождения игры
		function drawNewLevelButton()
		{
			if(document.getElementById('level_' + (numberOfLevel + 1)) != null)
				return;
			let newButton = document.createElement('button');
			newButton.setAttribute('id', 'level_' + (numberOfLevel + 1));
			
			let onclickValue = 'drawLevel(event)';
			console.log(onclickValue);
			newButton.setAttribute('onclick', 'drawLevel(event)');
			newButton.setAttribute('value', 'unpassed');
			newButton.innerHTML = "Уровень " + (numberOfLevel + 1);
			newButton.style.background = "red";
			
			let nextLevelButton = document.getElementById('nextLevel');
			let parent = document.getElementById('levelButtons');
			
			parent.insertBefore(newButton, nextLevelButton);
		}
		
		//Очищаем страницу
		function removeOldPage()
		{
			let oldTable = document.getElementsByTagName('table')[0];
			if(oldTable != null)
				oldTable.remove();
		}	
		
		//Функция для добавление картинки в достижения
		function addAchievementImage()
		{
			if(document.getElementById('image' + numberOfLevel) != null)
				return;
			let achievementBlock = document.getElementsByClassName('achievements')[0];
			let image = document.createElement('img');
			image.setAttribute('src', 'Доге.png');
			image.setAttribute('id', 'image' + numberOfLevel);
			image.setAttribute('width', "100px");
			image.setAttribute('hegiht', '100px');
			achievementBlock.appendChild(image);
		}

		//Работа с таймером
		var timer;
		
		function startTimer()  //Старт таймера при переходе на новый уровень
		{
			clearTimeout(timer);
			ctx.clearRect(0,0,100,400);
			ctx.beginPath();
			y = 400;
			timeLine();
		}
		
		var canvas = document.getElementById('myCanvas'); //Канвас для отрисовки шкалы времени
		var ctx = canvas.getContext('2d');
		let y = 400;
		
		function timeLine()		//Работа с таймлайном
		{
			ctx.moveTo(0, y);
			ctx.lineTo(100,y);
			y--;
			ctx.fillStyle = "rgb(51,102,153)";
			ctx.strokeStyle = "rgb(51,102,153)";
			ctx.stroke();
			ctx.fill();
			timer = setTimeout(timeLine, 300);
			if(y < 0)
			{
				clearTimeout(timer);
				alert('Вы проиграли');
				removeOldPage();
				if(prompt('Try again? (y/n)') == 'y')
					drawLevel();
			}
		}