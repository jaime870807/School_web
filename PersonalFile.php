<title>審查資料表</title>
    <meta http-equiv="content-type" charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="css/PersonalFile.css">
    <body>
    <div id="container">
    <div id="banner">  </div>
    	<br><img src="images/56.jpg" width="930" height="60" alt="審查資料上傳">
    <div id="content1"> 

        <?php
            $personal=$_POST['personal'];
            $academic=$_POST['academic'];
            $autobiography=$_POST['autobiography'];
            $other=$_POST['other'];
            
            echo "1.個人基本資料表 Personal information form：".$personal.
            "<br /><br />2.學歷證明資料 Academic credentials ：".$academic.
            "<br /><br />3.自傳（申請碩、博士班須含讀書計畫）
            Autobiography (study plan should be included for application for doctoral <br>  or Master’s programs)：".$autobiography.
            "<br /><br />4.其他應繳資料 Other required documents：".$other;
            ?>
        </div>
</div>
</body>