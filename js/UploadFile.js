 function test(){
            var check = 0;
            var file = $("#personal").val();
            if(file != "")
            {
                var strFileName1=file.replace(/^.+?\\([^\\]+?)(\.[^\.\\]*?)?$/gi,"$1");  //正则表达式获取文件名，不带后缀
                if ( strFileName1.search(RegExp("[一-"+String.fromCharCode(40869)+"]"))>-1 )
                {
                    alert('個人基本資料表 檔案名稱請不要使用中文字 (not use Chinese character)');
                    $("#personal").focus();
                    return false;
                }
                if(strFileName1.length > 20)
                {
                    alert('個人基本資料表 不可超過20個字 (exceed 20 characters)');
                    $("#personal").focus();
                    return false;
                }

                var file2 = document.getElementById("personal").files.item(0).size;
                if(file2>30720000)
                {
                    alert('個人基本資料表 不得超過30M Kbytes (exceed 30M Kbytes)');
                    $("#personal").focus();
                    return false;
                }
            }
            var file = $("#academic").val();
            if(file != "")
            {
                 var strFileName2=file.replace(/^.+?\\([^\\]+?)(\.[^\.\\]*?)?$/gi,"$1");  //正则表达式获取文件名，不带后缀
                if ( strFileName2.search(RegExp("[一-"+String.fromCharCode(40869)+"]"))>-1 )
                {
                    alert('學歷證明資料 檔案名稱請不要使用中文字 (not use Chinese character)');
                    $("#academic").focus();
                    return false;
                }
                 if(strFileName2.length > 20)
                 {
                     alert('學歷證明資料 不可超過20個字 (exceed 20 characters)');
                     $("#academic").focus();
                     return false;
                 }
                 var file2 = document.getElementById("academic").files.item(0).size;
                if(file2>30720000)
                {
                     alert('學歷證明資料 不得超過30M Kbytes (exceed 30M Kbytes)');
                     $("#academic").focus();
                     return false;
                }
            }

            var file = $("#autobiography").val();
            if(file != "")
            {
                var strFileName3=file.replace(/^.+?\\([^\\]+?)(\.[^\.\\]*?)?$/gi,"$1");  //正则表达式获取文件名，不带后缀
                if ( strFileName3.search(RegExp("[一-"+String.fromCharCode(40869)+"]"))>-1 )
                {
                    alert('自傳 檔案名稱請不要使用中文字 (not use Chinese character)');
                    $("#autobiography").focus();
                    return false;
                }
                if(strFileName3.length > 20)
                {
                    alert('自傳 不可超過20個字 (exceed 20 characters)');
                    $("#autobiography").focus();
                    return false;
                }
                var file2 = document.getElementById("autobiography").files.item(0).size;
                if(file2>30720000)
                {
                    alert('自傳 不得超過30M Kbytes (exceed 30M Kbytes)');
                    $("#autobiography").focus();
                    return false;
                }
            }

            var file = $("#other").val();
            if(file != "")
            {
                var strFileName4=file.replace(/^.+?\\([^\\]+?)(\.[^\.\\]*?)?$/gi,"$1");  //正则表达式获取文件名，不带后缀
                if ( strFileName4.search(RegExp("[一-"+String.fromCharCode(40869)+"]"))>-1 )
                {
                    alert('其他應繳資料 檔案名稱請不要使用中文字 (not use Chinese character)');
                    $("#other").focus();
                    return false;
                }
                if(strFileName4.length > 20)
                {
                    alert('其他應繳資料 不可超過20個字 (exceed 20 characters)');
                    $("#other").focus();
                    return false;
                }
                var file2 = document.getElementById("other").files.item(0).size;
                if(file2>30720000)
                {
                    alert('其他應繳資料 不得超過30M Kbytes (exceed 30M Kbytes)');
                     $("#other").focus();
                    return false;
                }
            }
            alert('上傳成功(success!)');
            return (true);
        }
