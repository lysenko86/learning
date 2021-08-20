/*
	source: https://www.youtube.com/watch?v=epFHC_4YI2M
	source: https://www.youtube.com/watch?v=EL5_oDQv_4w
	source: https://www.youtube.com/watch?v=WNy2x8ykWgA
	source: https://www.youtube.com/watch?v=c34P8-9YVMQ
	>>>source: https://habr.com/ru/post/351890/
		REST API - архітектурна надстройка HTTP, що має принципи:
			1) Клієнт-Серверна архітектура
			2) Сервер нічого не знає про клієнта
			3) Для передачі даних юзає JSON або XML
			4) Юзає конкретні HTTP-методи
		RESTful API - сервіс, написаний з врахуванням всіх правил REST
		REST API дозвлляє виконувати всі CRUD операції

		Базовий URL це http://google.com/api/1.0

		endPoints - ресурси, сущності (http://google.com/users; http://google.com/articles;
			http://google.com/categories) точки входу, тобто URL-и API. API-запит включає в себе:
				1) URL: "https://samuraiJS.com/api/users"
				2) http-request type: get / post / put / delete / patch
				3) request payload
				4) response data
				5) http codes: 404 - not found, 5xx - server errors, 3xx - redirect, 2xx - OK

		Методи REST:
			GET    - отримує дані
			POST   - зберігає дані
			PUT    - оновлює дані
			PATCH  - оновлює частково
			DELETE - видаляє дані

		Статуси запитів
			200 OK - успішно виконано GET / PUT / PATCH / DELETE
			201 Created - відповідь на POST
			400 Bad Request - запит не корректний, наприклад, коли тіло запиту не можна проаналізувати
			401 Unauthorized - порблема з аутентифікацією (не вірні credentials)
			403 Forbidden - аутентифікація пройшла успішно, але користувач не має прав доступу до ресурсу
			404 Not found - запит на не існуючий ресурс
			405 Method Not Allowed - коли запит HTTP-метода, який не дозволено для аутентифікованого юзера
			410 Gone
			415 Unsupported Media Type
			422 Unprocessable Entity
			429 Too Many Requests

		Приклад набору запитів RESTful API:
			GET    - http://google.com/api/v1.0/users
			GET    - http://google.com/api/v1.0/users/:id
			POST   - http://google.com/api/v1.0/users
			PUT    - http://google.com/api/v1.0/users/:id
			PATCH  - http://google.com/api/v1.0/users/:id
			DELETE - http://google.com/api/v1.0/users/:id
*/

console.log('GOOD');
