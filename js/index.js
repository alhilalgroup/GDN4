jQuery(document).ready(function () {

    var rownum = 0;
    jQuery.getJSON('http://cdn.gdnonline.com/homenews?jsoncallback=?', function (data) {
        var contenthtml = '';

        

        jQuery.each(data, function (key, value) {
            contenthtml += '<div style="clear:both" class="container no-bottom"> ';
            contenthtml += '<img onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"   src="http://www.gdnonline.com/gdnimages/' + data[key].mime_type_source.replace('.jpg', '_t.jpg').replace('.JPG', '_t.jpg') + '" alt="img" class="timg left"> ';
            contenthtml += ' <div class="ttitle oswald"  onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"   >' + data[key].title + '</div> ';
            if (data[key].StandFirst != null) {
                contenthtml += '     <div class="standfirst"  onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"   > ' + data[key].StandFirst + ' </div> ';
            }
            contenthtml += '<br class="clear"></div><div class="clear decoration"></div> ';

            if (rownum == 4) {
                contenthtml += '<div class="clear" align="center" style="width:100%;background-color:red" ><iframe marginheight="0" marginwidth="0" align="left" src="topbanner.html" width="310" height="260" frameborder=0></iframe></div>';
                
            }


            rownum++;
        });

        



        jQuery('#pagecontent').append(contenthtml);
         
        


        jQuery.getJSON('http://cdn.gdnonline.com/slider?jsoncallback=?', function (data) {

            var count = 0;

            jQuery.each(data, function (key, value) {
                jQuery('#H' + count).append(data[key].title);
                jQuery('#H' + count).attr('onclick', 'javascript:window.location.href=\'details.html?id=' + data[key].article_id + '\'');
                jQuery('#img' + count).attr('src', 'http://www.gdnonline.com/gdnimages/' + data[key].mime_type_source.replace('.jpg', '_t.jpg').replace('.JPG', '_t.jpg'));
                jQuery('#img' + count).attr('onclick', 'javascript:window.location.href=\'details.html?id=' + data[key].article_id + '\'');
                count++;
            });

        });


        var name = localStorage.getItem("gdnonlineuser");
        if (name != null && name != 'null') {
            jQuery("#salute").append("Welcome " + name + " &nbsp;&nbsp;|&nbsp;&nbsp; <a onclick=window.location.href='logout.html'>Logout</a>");
        }
        else {
            jQuery("#salute").hide();
        }



        function querystring(key) {
            var re = new RegExp('(?:\\?|&)' + key + '=(.*?)(?=&|jQuery)', 'gi');
            var r = [], m;
            while ((m = re.exec(document.location.search)) != null) r.push(m[1]);
            return r;
        }

        function ParseJsonDate(dateString) {
            var milli = dateString.replace(/\/Date\((-?\d+)\)\//, '$1');
            var date = new Date(parseInt(milli));
            var date2 = String(date).substring(0, 16);
            return date2;
        }
    });
});