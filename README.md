Стартовый шаблон проекта, работающего на sass и jade. 
Плагины устанавливаются через bower, пути к ним прописываются автоматически, через wiredep. Изначально установлены jquery и modernizer.
В качестве livereload используется browsersync. 
При сборке проекта применяется минификация изображений, js, css.
Макет состоит из верхнего меню в шапке на всю ширина экрана. Далее контейнер шириной 960px и футер, прижатый к низу.

<h2>Установка</h2>
<p>1. Скопировать репозиторий: <i>git clone https://github.com/...</i></p>
<p>2. Развернуть проект, в командной строке наберите: <i>npm i</i>, затем <i>bower i</i></p>
<p>3. Запустить проект: <i>gulp</i></p>

При желании, верстку можно осуществлять на jade или sass. Компиляция производится автоматически, при выполнении команды gulp.

Для сборки проекта выполнить команду <i>gulp build</i>

Деплой проекта производится вручную.

