source: https://www.udemy.com/course/rus-jenkins

Jenkins - автоматизація CI/CD
CI - continuous integration - commit > білд/компіляція > tests
CD - continuous deployment - commit > білд/компіляція > tests > deployment

Коли Jenkins запущено - його webUI буде на localhost:8080
Перший раз після інсталяції треба розблокувати Jenkins на web-сторінці на localhost:8080
    - треба ввести пароль з того файлу, який показує Jenkins
    - sudo cat /var/lib/jenkins/secrets/initialAdminPassword

=== Команди
    - service jenkins start
    - service jenkins stop
    - service jenkins status
