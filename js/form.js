//下拉式選單
    $(function() {
       $('input[name="op"]').change(function() {
          $("#dept").empty();
          if ($('input[name="op"]:checked').val() == "學士 Bachelor") {
             $("#dept").append("<option value='輔導與諮商學系學校輔導與諮商組 Department of Guidance and Counseling(School Guidance and Counseling Program)'>輔導與諮商學系學校輔導與諮商組 Department of Guidance and Counseling(School Guidance and Counseling Program)</option>");
             $("#dept").append("<option value='輔導與諮商學系社區輔導與諮商組 Department of Guidance and Counseling (Community Guidance and Counseling Program)'>輔導與諮商學系社區輔導與諮商組 Department of Guidance and Counseling (Community Guidance and Counseling Program)</option>");
             $("#dept").append("<option value='特殊教育學系 Department of Special Education'>特殊教育學系 Department of Special Education</option>");
             $("#dept").append("<option value='數學系 Department of Mathematics'>數學系 Department of Mathematics</option>");
             $("#dept").append("<option value='物理學系物理組 Department of Physics (Pure Physics Program)'>物理學系物理組 Department of Physics (Pure Physics Program)</option>");
             $("#dept").append("<option value='物理學系光電組 Department of Physics (Photonics Program)'>物理學系光電組 Department of Physics (Photonics Program)</option>");
             $("#dept").append("<option value='生物學系 Department of Biology'>生物學系 Department of Biology</option>");
             $("#dept").append("<option value='化學系 Department of Chemistry'>化學系 Department of Chemistry</option>");
             $("#dept").append("<option value='工業教育與技術學系 Department of Industrial Education and Technology'>工業教育與技術學系 Department of Industrial Education and Technology</option>");
             $("#dept").append("<option value='財務金融技術學系 Department of Finance'>財務金融技術學系 Department of Finance</option>");
             $("#dept").append("<option value='英語學系 Department of English'>英語學系 Department of English</option>");
             $("#dept").append("<option value='國文學系 Department of Chinese'>國文學系 Department of Chinese</option>");
             $("#dept").append("<option value='地理學系 Department of Geography'>地理學系 Department of Geography</option>");
             $("#dept").append("<option value='美術學系 Department of Fine Arts'>美術學系 Department of Fine Arts</option>");
             $("#dept").append("<option value='機電工程學系 Department of Mechatronics Engineering'>機電工程學系 Department of Mechatronics Engineering</option>");
             $("#dept").append("<option value='電機工程學系 Department of Electrical Engineering'>電機工程學系 Department of Electrical Engineering</option>");
             $("#dept").append("<option value='電子工程學系 Department of Electronic Engineering'>電子工程學系 Department of Electronic Engineering</option>");
             $("#dept").append("<option value='資訊工程學系 Department of Computer Science and Information Engineering'>資訊工程學系 Department of Computer Science and Information Engineering</option>");
             $("#dept").append("<option value='企業管理學系 Department of Business Administration'>企業管理學系 Department of Business Administration</option>");
             $("#dept").append("<option value='會計學系 Department of Accounting'>會計學系 Department of Accounting</option>");
             $("#dept").append("<option value='資訊管理學系資訊管理組 Department of Information Management (Information Management Program)'>資訊管理學系資訊管理組 Department of Information Management (Information Management Program)</option>");
             $("#dept").append("<option value='資訊管理學系數位內容科技與管理組 Department of Information Management (Digital Content Technology and Management Program)'>資訊管理學系數位內容科技與管理組 Department of Information Management (Digital Content Technology and Management Program)</option>");
             $("#dept").append("<option value='運動學系 Department of Sports'>運動學系 Department of Sports</option>");
             $("#dept").append("<option value='公共事務與公民教育學系公共事務組 Department of Public Affairs and Civic Education (Public Affairs Program)'>公共事務與公民教育學系公共事務組 Department of Public Affairs and Civic Education (Public Affairs Program)</option>");
             $("#dept").append("<option value='公共事務與公民教育學系公民教育組 Department of Public Affairs and Civic Education (Civic Education Program)'>公共事務與公民教育學系公民教育組 Department of Public Affairs and Civic Education (Civic Education Program)</option>");
          }

          if ($('input[name="op"]:checked').val() == "碩士 Master") {
              $("#dept").append("<option value='輔導與諮商學系 Department of Guidance and Counseling'>輔導與諮商學系 Department of Guidance and Counseling</option>");
             $("#dept").append("<option value='輔導與諮商學系婚姻與家族治療碩士班 Department of Guidance and Counseling (Master’s Program in Marriage and Family Therapy)'>輔導與諮商學系婚姻與家族治療碩士班 Department of Guidance and Counseling (Master’s Program in Marriage and Family Therapy)</option>");
             $("#dept").append("<option value='特殊教育學系 Department of Special Education'>特殊教育學系 Department of Special Education</option>");
             $("#dept").append("<option value='特殊教育學系資賦優異教育碩士班 Department of Special Education (Master’s Program in Gifted Education)'>特殊教育學系資賦優異教育碩士班 Department of Special Education (Master’s Program in Gifted Education)</option>");
             $("#dept").append("<option value='教育研究所 Graduate Institute of Education'>教育研究所 Graduate Institute of Education</option>");
             $("#dept").append("<option value='復健諮商研究所 Graduate Institute of Rehabilitation Counseling'>復健諮商研究所 Graduate Institute of Rehabilitation Counseling</option>");
             $("#dept").append("<option value='科學教育研究所 Graduate Institute of Science Education'>科學教育研究所 Graduate Institute of Science Education</option>");
             $("#dept").append("<option value='數學系 Department of Mathematics'>數學系 Department of Mathematics</option>");
             $("#dept").append("<option value='物理學系 Department of Physics'>物理學系 Department of Physics</option>");
             $("#dept").append("<option value='生物學系 Department of Biology'>生物學系 Department of Biology</option>");
             $("#dept").append("<option value='生物學系生物技術碩士班 Department of Biology (Master’s Program in Biotechnology)'>生物學系生物技術碩士班 Department of Biology (Master’s Program in Biotechnology)</option>");
             $("#dept").append("<option value='化學系 Department of Chemistry'>化學系 Department of Chemistry</option>");
             $("#dept").append("<option value='光電科技研究所 Graduate Institute of Photonics'>光電科技研究所 Graduate Institute of Photonics</option>");
             $("#dept").append("<option value='統計資訊研究所 Graduate Institute of Statistics and Information Science'>統計資訊研究所 Graduate Institute of Statistics and Information Science</option>");
             $("#dept").append("<option value='工業教育與技術學系 Department of Industrial Education and Technology'>工業教育與技術學系 Department of Industrial Education and Technology</option>");
             $("#dept").append("<option value='工業教育與技術學系數位學習碩士班 Department of Industrial Education and Technology (Master’s Program in E-Learning)'>工業教育與技術學系數位學習碩士班 Department of Industrial Education and Technology (Master’s Program in E-Learning)</option>");
             $("#dept").append("<option value='財務金融技術學系 Department of Finance'>財務金融技術學系 Department of Finance</option>");
             $("#dept").append("<option value='人力資源管理研究所 Graduate Institute of Human Resource Management'>人力資源管理研究所 Graduate Institute of Human Resource Management</option>");
             $("#dept").append("<option value='車輛科技研究所 Graduate Institute of Vehicle Engineering'>車輛科技研究所 Graduate Institute of Vehicle Engineering</option>");
             $("#dept").append("<option value='英語學系 Department of English'>英語學系 Department of English</option>");
             $("#dept").append("<option value='國文學系 Department of Chinese'>國文學系 Department of Chinese</option>");
             $("#dept").append("<option value='地理學系 Department of Geography'>地理學系 Department of Geography</option>");
             $("#dept").append("<option value='地理學系環境暨觀光遊憩碩士班 Department of Geography (Master’s Program in Environment, Tourism and Recreation)'>地理學系環境暨觀光遊憩碩士班 Department of Geography (Master’s Program in Environment, Tourism and Recreation)</option>");
             $("#dept").append("<option value='美術學系 Department of Fine Arts'>美術學系 Department of Fine Arts</option>");
             $("#dept").append("<option value='美術學系藝術教育碩士班 Department of Fine Arts (Master’s Program in Art Education)'>美術學系藝術教育碩士班 Department of Fine Arts (Master’s Program in Art Education)</option>");
             $("#dept").append("<option value='兒童英語研究所 Graduate Institute of Children’s English'>兒童英語研究所 Graduate Institute of Children’s English</option>");
             $("#dept").append("<option value='翻譯研究所 Graduate Institute of Translation and Interpretation'>翻譯研究所 Graduate Institute of Translation and Interpretation</option>");
             $("#dept").append("<option value='台灣文學研究所 Graduate Institute of Taiwanese Literature'>台灣文學研究所 Graduate Institute of Taiwanese Literature</option>");
             $("#dept").append("<option value='歷史學研究所 Graduate Institute of History'>歷史學研究所 Graduate Institute of History</option>");
             $("#dept").append("<option value='機電工程學系 Department of Mechatronics Engineering'>機電工程學系 Department of Mechatronics Engineering</option>");
             $("#dept").append("<option value='電機工程學系 Department of Electrical Engineering'>電機工程學系 Department of Electrical Engineering</option>");
             $("#dept").append("<option value='電子工程學系 Department of Electronic Engineering'>電子工程學系 Department of Electronic Engineering</option>");
             $("#dept").append("<option value='資訊工程學系 Department of Computer Science and Information Engineering'>資訊工程學系 Department of Computer Science and Information Engineering</option>");
             $("#dept").append("<option value='資訊工程學系物聯網碩士班 Department of Computer Science and Information Engineering (Master’s Program in Internet of Things)'>資訊工程學系物聯網碩士班 Department of Computer Science and Information Engineering (Master’s Program in Internet of Things)</option>");
             $("#dept").append("<option value='電信工程學研究所 Graduate Institute of Communications Engineering'>電信工程學研究所 Graduate Institute of Communications Engineering</option>");
             $("#dept").append("<option value='企業管理學系 Department of Business Administration'>企業管理學系 Department of Business Administration</option>");
             $("#dept").append("<option value='企業管理學系行銷與流通管理碩士班 Department of Business Administration (Master’s Program in Marketing and Logistics Management)'>企業管理學系行銷與流通管理碩士班 Department of Business Administration (Master’s Program in Marketing and Logistics Management)</option>");
             $("#dept").append("<option value='會計學系 Department of Accounting'>會計學系 Department of Accounting</option>");
             $("#dept").append("<option value='資訊管理學系 Department of Information Management'>資訊管理學系 Department of Information Management</option>");
             $("#dept").append("<option value='資訊管理學系數位內容科技與管理碩士班 Department of Information Management (Master’s Program in Digital Content Technology and Management)'>資訊管理學系數位內容科技與管理碩士班 Department of Information Management (Master’s Program in Digital Content Technology and Management)</option>");
             $("#dept").append("<option value='運動學系應用運動科學碩士班 Department of Sports (Master’s Program in Applied Sports Science)'>運動學系應用運動科學碩士班 Department of Sports (Master’s Program in Applied Sports Science)</option>");
             $("#dept").append("<option value='運動健康研究所 Graduate Institute of Sports and Health'>運動健康研究所 Graduate Institute of Sports and Health</option>");
             $("#dept").append("<option value='公共事務與公民教育學系 Department of Public Affairs and Civic Education'>公共事務與公民教育學系 Department of Public Affairs and Civic Education</option>");
          }

          if ($('input[name="op"]:checked').val() == "博士 PhD") {
              $("#dept").append("<option value='輔導與諮商學系 Department of Guidance and Counseling'>輔導與諮商學系 Department of Guidance and Counseling</option>");
             $("#dept").append("<option value='特殊教育學系 Department of Special Education'>特殊教育學系 Department of Special Education</option>");
             $("#dept").append("<option value='教育研究所 Graduate Institute of Education'>教育研究所 Graduate Institute of Education</option>");
             $("#dept").append("<option value='科學教育研究所 Graduate Institute of Science Education'>科學教育研究所 Graduate Institute of Science Education</option>");
             $("#dept").append("<option value='數學系 Department of Mathematics'>數學系 Department of Mathematics</option>");
             $("#dept").append("<option value='物理學系 Department of Physics'>物理學系 Department of Physics</option>");
             $("#dept").append("<option value='光電科技研究所 Graduate Institute of Photonics'>光電科技研究所 Graduate Institute of Photonics</option>");
             $("#dept").append("<option value='工業教育與技術學系 Department of Industrial Education and Technology'>工業教育與技術學系 Department of Industrial Education and Technology</option>");
             $("#dept").append("<option value='財務金融技術學系 Department of Finance'>財務金融技術學系 Department of Finance</option>");
             $("#dept").append("<option value='人力資源管理研究所 Graduate Institute of Human Resource Management'>人力資源管理研究所 Graduate Institute of Human Resource Management</option>");
             $("#dept").append("<option value='英語學系 Department of English'>英語學系 Department of English</option>");
             $("#dept").append("<option value='國文學系 Department of Chinese'>國文學系 Department of Chinese</option>");
             $("#dept").append("<option value='地理學系地理暨環境資源博士班 Department of Geography'>地理學系地理暨環境資源博士班 Department of Geography</option>");
             $("#dept").append("<option value='機電工程學系 Department of Mechatronics Engineering'>機電工程學系 Department of Mechatronics Engineering</option>");
             $("#dept").append("<option value='電機工程學系 Department of Electrical Engineering'>電機工程學系 Department of Electrical Engineering</option>");
         }
       });

    });
    //先把error都隱藏
    $(function() {
        $(".error").hide();
    });
    function test()
    {
        var tmp = 0;
        if(!document.form1.op[0].checked&&!document.form1.op[1].checked&&!document.form1.op[2].checked)
        {
            $("#op_error").show();
             tmp = 1;
        }
        else
        {
            $("#op_error").hide();
        }

        if(!document.form1.bonus[0].checked&&!document.form1.bonus[1].checked)
        {
            $("#bonus_error").show();
             tmp = 1;
        }
        else
        {
            $("#bonus_error").hide();
        }

        if(!document.form1.gender[0].checked&&!document.form1.gender[1].checked)
        {
            $("#gender_error").show();
             tmp = 1;
        }
        else
        {
            $("#gender_error").hide();
        }

        if(!document.form1.money[0].checked&&!document.form1.money[1].checked&&!document.form1.money[2].checked&&!document.form1.money[3].checked&&!document.form1.money[4].checked)
        {
            $("#money_error").show();
             tmp = 1;
        }
        else
        {
            $("#money_error").hide();
        }

        if(!document.form1.health[0].checked&&!document.form1.health[1].checked&&!document.form1.health[2].checked)
        {
            $("#health_error").show();
             tmp = 1;
        }
        else
        {
            $("#health_error").hide();
        }

        if(!document.form1.listen[0].checked&&!document.form1.listen[1].checked&&!document.form1.listen[2].checked&&!document.form1.listen[3].checked&&!document.form1.listen[4].checked)
        {
            $("#listen_error").show();
             tmp = 1;
        }
        else
        {
            $("#listen_error").hide();
        }
        if(!document.form1.speak[0].checked&&!document.form1.speak[1].checked&&!document.form1.speak[2].checked&&!document.form1.speak[3].checked&&!document.form1.speak[4].checked)
        {
            $("#speak_error").show();
             tmp = 1;
        }
        else
        {
            $("#speak_error").hide();
        }

        if(!document.form1.read[0].checked&&!document.form1.read[1].checked&&!document.form1.read[2].checked&&!document.form1.read[3].checked&&!document.form1.read[4].checked)
        {
            $("#read_error").show();
             tmp = 1;
        }
        else
        {
            $("#read_error").hide();
        }

        if(!document.form1.write[0].checked&&!document.form1.write[1].checked&&!document.form1.write[2].checked&&!document.form1.write[3].checked&&!document.form1.write[4].checked)
        {
            $("#write_error").show();
             tmp = 1;
        }
        else
        {
            $("#write_error").hide();
        }

        if(document.form1.stud_chinese.value=="")
        {
            $("#stud_ch_error").show();
            $("#stud_ch_form_error").hide();
            tmp = 1;
        }
        else
        {
            var ch = /^[\u4E00-\u9FA5]+$/;
            if(ch.test(document.form1.stud_chinese.value))
            {
                $("#stud_ch_form_error").hide();
            }
            else
            {
                $("#stud_ch_form_error").show();
                tmp = 1;
            }
            $("#stud_ch_error").hide();
        }

        if(document.form1.stud_english.value=="")
        {
            $("#stud_en_error").show();
            $("#stud_en_form_error").hide();
            tmp = 1;
        }
        else
        {
            var eng = /^[A-Za-z]+$/;
            if(eng.test(document.form1.stud_english.value))
            {
                $("#stud_en_form_error").hide();
            }
            else
            {
                $("#stud_en_form_error").show();
                tmp = 1;
            }
            $("#stud_en_error").hide();
        }

        if(document.form1.nationality.value=="")
        {
            $("#nation_error").show();
            tmp = 1;
        }
        else
        {
            $("#nation_error").hide();
        }

        if(document.form1.year.value==""||document.form1.month.value==""||document.form1.day.value=="")
        {
            $("#date_error").show();
            $("#date_form_error").hide();
            tmp = 1;
        }
        else
        {
            var monthForm = /^(0?[1-9]|1[0-2])$/;
            var dayForm = /^((0?[1-9])|((1|2)[0-9])|30|31)$/;
            if(monthForm.test(document.form1.month.value) && dayForm.test(document.form1.day.value) 
                && document.form1.year.value > 1900 && document.form1.year.value < 2020)//格式正確
            {
                $("#date_form_error").hide();
            }
            else
            {
                $("#date_form_error").show();
                tmp = 1;
            }
            $("#date_error").hide();
        }

        if(document.form1.place.value=="")
        {
            $("#place_error").show();
            tmp = 1;
        }
        else
        {
            $("#place_error").hide();
        }

        if(document.form1.passport.value=="")
        {
            $("#pass_error").show();
            $("#pass_form_error").hide();
            tmp = 1;
        }
        else
        {
            var Form = /^[A-Za-z0-9]{5,12}$/;
            if(Form.test(document.form1.passport.value))
            {
                $("#pass_form_error").hide();
            }
            else
            {
                $("#pass_form_error").show();
                tmp = 1;
            }
            $("#pass_error").hide();
        }

        if(document.form1.language.value=="")
        {
            $("#lan_error").show();
            tmp = 1;
        }
        else
        {
            $("#lan_error").hide();
        }

        if(document.form1.address.value=="")
        {
            $("#add_error").show();
            tmp = 1;
        }
        else
        {
            $("#add_error").hide();
        }

        if(document.form1.phone.value=="")
        {
            $("#tele_error").show();
            $("#tele_form_error").hide();
            tmp = 1;
        }
        else
        {
            var Form = /^[0-9]{5,11}$/;
            if(Form.test(document.form1.phone.value))
            {
                $("#tele_form_error").hide();
            }
            else
            {
                $("#tele_form_error").show();
                tmp = 1;
            }
            $("#tele_error").hide();
        }

        if(document.form1.mail.value=="")
        {
            $("#mail_error").show();
            $("#mail_form_error").hide();
            tmp = 1;
        }
        else
        {
            var  reg = /^[^\s]+@[^\s]+\.[^\s]{2,3}$/;
            if(reg.test(document.form1.mail.value))//格式正確
            {
                $("#mail_form_error").hide();
            }
            else
            {
                $("#mail_form_error").show();
                tmp = 1;
            }
            $("#mail_error").hide();
        }

        if(document.form1.cellphone.value=="")
        {
            $("#cell_error").show();
            $("#cell_form_error").hide();
            tmp = 1;
        }
        else
        {
            var phoneForm = /^(09)[0-9]{8}$/;
            if( phoneForm.test(document.form1.cellphone.value) )
            {
                $("#cell_form_error").hide();
            }
            else
            {
                $("#cell_form_error").show();
                tmp = 1;
            }
            $("#cell_error").hide();
        }

        if(document.form1.fa_name.value=="")
        {
            $("#fa_name_error").show();
            tmp = 1;
        }
        else
        {
            $("#fa_name_error").hide();
        }

        if(document.form1.fa_add.value=="")
        {
            $("#fa_add_error").show();
            tmp = 1;
        }
        else
        {
            $("#fa_add_error").hide();
        }

        if(document.form1.fa_phone.value=="")
        {
            $("#fa_phone_error").show();
            tmp = 1;
        }
        else
        {
            $("#fa_phone_error").hide();
        }

        if(document.form1.ma_name.value=="")
        {
            $("#ma_name_error").show();
            tmp = 1;
        }
        else
        {
            $("#ma_name_error").hide();
        }

        if(document.form1.ma_add.value=="")
        {
            $("#ma_add_error").show();
            tmp = 1;
        }
        else
        {
            $("#ma_add_error").hide();
        }

        if(document.form1.ma_phone.value=="")
        {
            $("#ma_phone_error").show();
            tmp = 1;
        }
        else
        {
            $("#ma_phone_error").hide();
        }

        if(document.form1.sc_name.value=="")
        {
            $("#sc_name_error").show();
            tmp = 1;
        }
        else
        {
            $("#sc_name_error").hide();
        }

        if(document.form1.sc_place.value=="")
        {
            $("#sc_place_error").show();
            tmp = 1;
        }
        else
        {
            $("#sc_place_error").hide();
        }

        if(document.form1.sc_degree.value=="")
        {
            $("#sc_degree_error").show();
            tmp = 1;
        }
        else
        {
            $("#sc_degree_error").hide();
        }

        if(document.form1.sc_date.value=="")
        {
            $("#sc_date_error").show();
            tmp = 1;
        }
        else
        {
            $("#sc_date_error").hide();
        }

        if(document.form1.sc_maj.value=="")
        {
            $("#sc_maj_error").show();
            tmp = 1;
        }
        else
        {
            $("#sc_maj_error").hide();
        }

        if(document.form1.sc_min.value=="")
        {
            $("#sc_min_error").show();
            tmp = 1;
        }
        else
        {
            $("#sc_min_error").hide();
        }

        if(document.form1.learn_ch.value=="")
        {
            $("#learn_ch_error").show();
            tmp = 1;
        }
        else
        {
            $("#learn_ch_error").hide();
        }

        if(document.form1.ch_instructor.value=="")
        {
            $("#ch_instructor_error").show();
            tmp = 1;
        }
        else
        {
            $("#ch_instructor_error").hide();
        }

        if(tmp == 1)
        {
            alert("輸入錯誤! (Inpur Error!)");
             return false ;
         }
        else
            { return (true);}
    }