<?php
/*
 * 發送信件
 *
 */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require_once __DIR__.'/../composer/vendor/autoload.php';


class SendMail{
	public $mail;
	public $receiverMail;
	public $sender;

	function __construct(){
		date_default_timezone_set("Asia/Taipei");
		$this->mail = new PHPMailer;
		$this->receiverMail = '';
	}



	/**
	 * 發送信件
	 *
	 * @param array $sendEmail 發送的 email 帳號 多個 email 用,隔開
	 * @param string $subject 信件主旨
	 * @param string $content 信件內容
	 * @return string
	 */
	function sendMail($sendEmail, $subject = '', $content = ''){
		if ( !is_array($sendEmail) || trim($subject) == '' || trim($content) == '' ){
			return 'parameters empty';
		}
		//$this->mail->SMTPDebug = 2;                      //Enable verbose debug output
		$this->mail->isSMTP();
		$this->mail->Host = 'localhost';
		$this->mail->SMTPAuth = false;
		$this->mail->SMTPAutoTLS = false; 
		$this->mail->Port = 25; 
		$this->mail->CharSet = 'UTF-8';
		$this->mail->setFrom('service@chspace.com', '真實建築');
		foreach($sendEmail as $mails){
			$this->mail->addAddress($mails);
		}

		$this->mail->Subject = $subject;
		$this->mail->msgHTML($content, __DIR__);
		$this->mail->AltBody = 'This is a plain-text message body';


		if (!$this->mail->send()) {
			return $this->mail->ErrorInfo;
		}
		return 'success';

	}


	/**
	 * 取得 聯絡我們表單 信件內容
	 *
	 * @param array $contactArray 表單內容
	 * @return string
	 */
	function getConsultMailContent($contactArray){
		$contactStr = '
		<div style="margin-bottom:10px;">
		<p>-----------------</p>
		<p> 諮詢項目：'.$contactArray['contactItem'].'</p>
		<p> 姓名：'.$contactArray['name'].'</p>
		<p> 聯絡電話：'.$contactArray['phone'].'</p>
		<p> 聯絡信箱：'.$contactArray['email'].'</p>
		<p> 備註：'.$contactArray['otherMessage'].'</p>
		<p>-----------------</p>
		</div>
		';



		return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
		<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
			<title>Send Excel File</title>
		</head>
		<body>
		<div style="width: 640px; font-family: Arial, Helvetica, sans-serif; font-size: 12px;">
			'.$contactStr.'
			<p> ＊此信件為系統發出信件，請勿直接回覆，感謝您的配合！ </p>
		</div>

		</body>
		</html>';
	}


}

?>