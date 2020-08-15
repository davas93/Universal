<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$message = isset($_POST['message']) ? $_POST['message'] : null;
// отправка данных на подписку
$email = isset($_POST['email']) ? $_POST['email'] : null;

if (null === $email) {
	// Формирование самого письма на ответ комментариям
	$title = "You left a comment";
	$body = "
	<h2>New comment</h2>
	<b>Your comment:</b> $message<br>
	<b>Message:</b>
	Thank you for your comment! Your feedback is very important to us!
	";
} else {
	//Письмо на подписку новостей
	$title = "Subscribe to newsletter";
	$body = "
	<h2>Subscribe to our NEWSLETTER</h2>
	<b>Mail:</b> $email<br>
	<b>Message:</b>
	Thank you for subscribing to the latest newsletter!
	";
}
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'vasin.da93@yandex.ru'; // Логин на почте
    $mail->Password   = '_FwbF23Y4ZXrtdG'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('vasin.da93@yandex.ru', 'Денис Васин'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('vasin.da93@gmail.com');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if (null === $email) {
	echo file_get_contents('thanks01.html');
} else {
	echo file_get_contents('thanks.html');
}