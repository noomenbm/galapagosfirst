<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler('New Yachts request');

$validator = $pp->getValidator();
$validator->fields(['Name','Email','Date','numtravelers','numnights','yachttype','yachtsbudget'])->areRequired()->maxLength(50);
$validator->field('Email')->isEmail();
$validator->field('Whatsapp')->maxLength(50);
$validator->field('Message')->maxLength(6000);

$mailer = $pp->getMailer();
$mailer->setFrom('forms@s737232254.onlinehome.us','Form',false);

$mailer = $pp->getMailer();

$pp = new FormHandler('New Yachts request');

$mailer->IsSMTP();
$mailer->SMTPAuth   = true;
$mailer->SMTPSecure = "tls";
$mailer->Host       = "smtp.1and1.com";
$mailer->Username   = "forms@s737232254.onlinehome.us";
$mailer->Password   = "Superman1354$";

$mailer->setFrom('froms@s737232254.onlinehome.us', 'Form');

$pp->requireReCaptcha();
$pp->getReCaptcha()->initSecretKey('6LcSglcUAAAAADUVc2bKfl7llUfgCtOoMsZsHKTN');

$pp->sendEmailTo('francisco.jarrin@galapagosfirst.com'); // ← Your email here

echo $pp->process($_POST);
