<php

$address = '0x837ca59C72bDCc902Ae1aabf9B5E49caa628cd80'; // Aidan Cullen's Wallet

$url = 'https://deep-index.moralis.io/api/v2/'.$address.'/nft';

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'X-API-Key: <Key-Was-Here>'));

$res = curl_exec($ch);

curl_getinfo($ch, CURLINFO_HTTP_CODE);

$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

$responsecode = curl_getinfo($ch,CURLINFO_RESPONSE_CODE);

curl_close($ch);

echo "<p>Code = $httpcode<BR />Response = $responsecode</p>";

$data = json_decode($res,true);

echo '<pre>';

print_r($data);

echo '</pre>';

>
