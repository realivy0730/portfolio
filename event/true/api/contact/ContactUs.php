<?php
/**
 * 聯絡我們表單
 * {
 * "contactItem": "",
 * "name": "",
 * "phone": "",
 * "email": "",
 * "otherMessage": "",
 * }
 */

require_once(__DIR__.'/../include/header-control.php');
require_once(__DIR__.'/../../common/conf/ParametersException.php');
require_once(__DIR__.'/../../common/class/Functions.php');
require_once(__DIR__.'/../../common/class/sendMail.php');
require_once(__DIR__.'../../../securimage/securimage.php');

try{
	$functions = new Functions();

	$returnArr = array();
	$inputArray = array();
	$sendArr = array();

	//將傳入的 json 格式轉成 _POST
	$inputJson = file_get_contents('php://input');
	$inputArray = json_decode($inputJson, true);

    $securimage = new Securimage();

	//服務項目
	$sendArr['contactItem'] = '';
	
	//必填欄位未填 
	if ( !is_array($_POST['service']??'')){
		throw new ParametersException('諮詢項目 未填');
	}

	if ( $_POST['name'] == ''){
		throw new ParametersException('姓名 未填');
	}

	if ($_POST['phone'] == '' ){
		throw new ParametersException('聯絡電話 未填');
	}
	
	if(!preg_match( '/^(\+?886-?)?(\d{2}-?)?\d{3,4}-?\d{4}(\#\d+)?$/', $_POST['phone'])) {
		throw new ParametersException('聯絡電話 格式錯誤');
	}

	if ($_POST['email'] == ''){
		throw new ParametersException('聯絡信箱 未填');
	}

	if(!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
		throw new ParametersException('聯絡信箱 格式錯誤');
	}

	if ( $securimage->check($_POST['inputValidation']) == false ){
		throw new ParametersException("驗證碼錯誤", 1);
	}

    $sendArr['contactItem'] = implode(',',$_POST['service']);
	$sendArr['name'] = trim($_POST['name']??'');
	$sendArr['phone'] = trim($_POST['phone']??'');
	$sendArr['email'] = trim($_POST['email']??'');
	$sendArr['otherMessage'] = trim($_POST['otherMessage']??'');

	$sendMail = new SendMail();
	$mailContent = $sendMail->getConsultMailContent($sendArr);

	$receiverMailArr = array();
	$receiverMailArr[] = 'truearchi@truearchi.com.tw';
	$receiverMailArr[] = 'peichinlee@truearchi.com.tw';
	
    $path = "../../ajaxCourse/watchLog/";
    // 檢查目標資料夾是否存在
     if (!file_exists($path)) {
        // 如果資料夾不存在，則建立新的資料夾
        mkdir($path, 0777, true);
    }
    $fileName = date("Y")."emailLog.txt";
    $LOg_path = $path.$fileName;

	$subject = '真實建築諮詢信';
    
    error_log("time : ".$functions->getNowDateTime()."\nContent:".$functions->myEncrypt(implode(",",$sendArr),'E')."\n", 3, $LOg_path);

	$mailResult = $sendMail->sendMail($receiverMailArr, $subject, $mailContent);
	
	if ( !$mailResult ){
		throw new ParametersException('信件發送失敗');
	}
 
	http_response_code(200);
	
} catch ( ParametersException $pe ){
	http_response_code(400);
	$returnArr = $pe->getMessage();

} catch ( Exception $e ){
	http_response_code(500);
	$returnArr= $e->getMessage();
} finally {
	if ( !isset($returnArr) ){
		$returnArr = array();
	}
	echo json_encode($returnArr, JSON_UNESCAPED_UNICODE);
}

?>