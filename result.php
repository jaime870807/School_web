 <title>入學申請表</title>
    <meta http-equiv="content-type" charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="css/result.css">

    <body>
    <div id="container">
    <div id="banner">  </div>
    	<br><img src="images/5555.jpg" width="930" height="60" alt="入學申請表">
    <div id="content1"> 

        <?php
            $op=$_POST['op'];
            $dept=$_POST['dept'];
            $bonus=$_POST['bonus'];
            $stud_chinese=$_POST['stud_chinese'];
            $stud_english=$_POST['stud_english'];
            $gender=$_POST['gender'];
            $nationality=$_POST['nationality'];
            $year=$_POST['year'];
            $month=$_POST['month'];
            $day=$_POST['day'];
            $place=$_POST['place'];
            $passport=$_POST['passport'];
            $language=$_POST['language'];
            $mail=$_POST['mail'];
            $address=$_POST['address'];
            $phone=$_POST['phone'];
            $cellphone=$_POST['cellphone'];
            $gd_name=$_POST['gd_name'];
            $gd_relation=$_POST['gd_relation'];
            $gd_add=$_POST['gd_add'];
            $gd_phone=$_POST['gd_phone'];
            $tw_name=$_POST['tw_name'];
            $tw_relation=$_POST['tw_relation'];
            $tw_add=$_POST['tw_add'];
            $tw_phone=$_POST['tw_phone'];
            $fa_name=$_POST['fa_name'];
            $fa_add=$_POST['fa_add'];
            $fa_phone=$_POST['fa_phone'];
            $ma_name=$_POST['ma_name'];
            $ma_add=$_POST['ma_add'];
            $ma_phone=$_POST['ma_phone'];
            $sc_name=$_POST['sc_name'];
            $sc_place=$_POST['sc_place'];
            $sc_date=$_POST['sc_date'];
            $sc_degree=$_POST['sc_degree'];
            $sc_maj=$_POST['sc_maj'];
            $sc_min=$_POST['sc_min'];
            $money=$_POST['money'];
            $health=$_POST['health'];
            $health_describe=$_POST['health_describe'];
            $publications=$_POST['publications'];
            $experience=$_POST['experience'];
            $listen=$_POST['listen'];
            $speak=$_POST['speak'];
            $read=$_POST['read'];
            $write=$_POST['write'];
            $learn_ch=$_POST['learn_ch'];
            $ch_instructor=$_POST['ch_instructor'];
            $activity=$_POST['activity'];

            echo "✽擬攻讀之學位 Degree to be Pursued：".$op.
            "<br /><br />✽擬申請就讀之系所班（組）別名稱 Department/graduate institute/program (group) you are applying：<br />".$dept.
            "<br /><br />✽預計入學時間 Term of Enrollment：<br />107學年度第2學期入學（2019年2月）Second Semester of Academic Year 2018 (February 2019)
            <br /><br />✽是否申請本校外國學生入學獎勵金？Would you like to apply for International Student Enrollment Incentive?：<br />".$bonus.
            "<br /><br />---------個人基本資料 Personal Information-----------
            <br />✽中文姓名 Chinese Name：".$stud_chinese.
            "<br />✽英文姓名 English Name：".$stud_english.
            "<br />✽性別 Gender：".$gender.
            "<br />✽國籍 Nationality：".$nationality.
            "<br />✽出生日期 Date of Birth：".$year."年".$month."月".$day."日
            <br />✽出生地點 Place of Birth：".$place.
            "<br />✽護照號碼 Passport Numbe：".$passport.
            "<br />✽母語 Native Language：".$language.
            "<br />✽通訊地址 Postal Address：".$address.
            "<br />✽電話 Telephone：".$phone.
            "<br />✽E-Mail：".$mail.
            "<br />✽手機號碼 Mobile Number：".$cellphone.
            "<br /><br />--------監護人 Guardian--------
            <br />姓名 Name：".$gd_name.
            "<br />與申請人關係 Relationship with the Applicant：".$gd_relation.
            "<br />通訊地址 Postal Address：".$gd_add.
            "<br />聯絡電話 Contact Number：".$gd_phone.
            "<br /><br />-------在臺聯絡人 Contact person in Taiwan--------
            <br />姓名 Name：".$tw_name.
            "<br />與申請人關係 Relationship with the Applicant：".$tw_relation.
            "<br />通訊地址 Postal Address：".$tw_add.
            "<br />聯絡電話 Contact Number：".$tw_phone.
            "<br /><br />---------雙親資料  Information of Parents-----------
            <br />✽父親 Father
            <br />姓名 Name：".$fa_name.
            "<br />通訊地址 Postal Address：".$fa_add.
            "<br />聯絡電話 Contact Number：".$fa_phone.
            "<br /><br />✽母親 Mother
            <br />姓名 Name：".$ma_name.
            "<br />通訊地址 Postal Address：".$ma_add.
            "<br />聯絡電話 Contact Number：".$ma_phone.
            "<br /><br />---------教育背景  Educational Background-----------
            <br />✽最高學歷 Highest Academic Credential
            <br />學校名稱 Name of School：".$sc_name.
            "<br />學校所在地 Location of School：".$sc_place.
            "<br />學位 Degree：".$sc_degree.
            "<br />畢業年月 Month and Year of Graduation：".$sc_date.
            "<br />主修學門 Major：".$sc_maj.
            "<br />副修學門 Minor：".$sc_min.
            "<br /><br />✽敘明在臺期間各項費用來源 Financial resources for your stay in Taiwan：".$money.
            "<br /><br />✽健康狀況 Health Condition：".$health.
            "<br />如有疾病請敘明之 Please indicate the illness (if any)：".$health_describe.
            "<br /><br />著作（出版日期）Publications (Date Published)：".$publications.
            "<br />經歷 Experience：".$experience.
            "<br /><br />-------✽華語文程度 Proficiency of Chinese--------
            <br />✽聽 Listening：".$listen.
            "<br />✽說 Speaking：".$speak.
            "<br />✽讀 Reading：".$read.
            "<br />✽寫 Writing：".$write.
            "<br /><br />✽曾學習（研究）華語文幾年？How many years have you learned (studied) Chinese?：".$learn_ch.
            "<br /><br />✽學習華語文環境（高中、大學或語文機構）及受何人指導（講授）？ <br />Where did you study Chinese (High School, College or Language Institute) and who was the instructor?：".$ch_instructor.
            "<br /><br />課外活動 Extracurricular Activities：".$activity;
        ?>
        </div>
</div>
</body>

    