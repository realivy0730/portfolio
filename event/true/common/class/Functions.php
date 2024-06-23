<?php

class Functions  {

	function __construct(){
		date_default_timezone_set("Asia/Taipei");
	}

    /**
	 * 取得目前日期時間
	 * format Y-m-d H:i:s
	 * @return string
	 */
	public function getNowDateTime(){
		return date("Y-m-d H:i:s");
	}

    /**
	 * 字串加密
	 * 函式encrypt($string,$operation,$key)中$string：需要加密解密的字串；$operation：判斷是加密還是解密，E表示加密，D表示解密；$key：密鑰。
	 * @param string $string 需要加密解密的字串
	 * @param string $operation 判斷是加密還是解密
	 * @param string $key 密鑰
	 * @return string
	 */
	public function myEncrypt( $string, $operation, $key = 'tienXi_cRm' ){
		$key = md5($key);
		$key_length = strlen($key);
		$string = $operation == 'D' ? base64_decode($string) : substr(md5($string.$key),0,8).$string;
		$string_length = strlen($string);
		$rndKey = $box = array();
		$result = '';
		for ( $i = 0; $i <= 255; $i++ ){
				$rndKey[$i] = ord($key[$i%$key_length]);
			$box[$i] = $i;
		}
		for ( $j = $i = 0; $i < 256; $i++ ){
			$j = ( $j + $box[$i] + $rndKey[$i]) % 256;
			$tmp = $box[$i];
			$box[$i] = $box[$j];
			$box[$j] = $tmp;
		}
		for ( $a = $j = $i = 0; $i < $string_length; $i++ ){
			$a = ( $a + 1 ) % 256;
			$j = ( $j + $box[$a]) % 256;
			$tmp = $box[$a];
			$box[$a] = $box[$j];
			$box[$j] = $tmp;
			$result.= chr(ord($string[$i])^($box[($box[$a]+$box[$j])%256]));
		}
		if ( $operation == 'D' ){
			if ( substr($result,0,8) == substr(md5(substr($result,8).$key),0,8) ){
				return substr($result,8);
			} else {
				return'';
			}
		} else {
			return str_replace('=', '', base64_encode($result));
		}
	}
}