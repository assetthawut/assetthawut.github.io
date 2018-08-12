var formIoUrl = 'https://snrqukcfgehfrdt.form.io/githubpage';

 
$( document ).ready(function() {
  var formio = new Formio(formIoUrl);
  formio.loadSubmissions().then(function(submissions) {
   // Demo submissions
   //submissions = [{"owner":"59b0e45d6d85560007c28194","roles":[],"_vid":0,"_fvid":0,"state":"submitted","_id":"5b6f04bebfb78411b1382ad8","data":{"head":"ddddddd","content":"<p>ddddddddddddddddd</p>\n","submit":true},"access":[],"form":"5b6bdfb7d08f248cf67c4f17","externalIds":[],"created":"2018-08-11T15:46:06.246Z","modified":"2018-08-11T15:46:06.247Z"},{"owner":"59b0e45d6d85560007c28194","roles":[],"_vid":0,"_fvid":0,"state":"submitted","_id":"5b6efd65492219e4e2c3732a","data":{"head":"หกดหกดหกดหกดหกดหกดหกด","content":"<p><img alt=\"\" src=\"https://www.w3schools.com/images/w3schools_green.jpg\" style=\"height:142px; width:104px\" /></p>\n\n<p>ทาสหกดาบหกดสาบหยกสดบหสกดยบหกดหดหก</p>\n\n<h1>ฃ<strong>หกดหกดหกดหกดหกด<em>หกดหกดหกดหกดหกด</em></strong></h1>\n","submit":true},"access":[],"form":"5b6bdfb7d08f248cf67c4f17","externalIds":[],"created":"2018-08-11T15:14:45.039Z","modified":"2018-08-11T15:14:45.040Z"},{"owner":"59b0e45d6d85560007c28194","roles":[],"_vid":0,"_fvid":0,"state":"submitted","_id":"5b6ef68dbfb7840f59382abc","data":{"head":"dfgdfg","content":"<p>dfgdfgdg</p>\n","submit":true},"access":[],"form":"5b6bdfb7d08f248cf67c4f17","externalIds":[],"created":"2018-08-11T14:45:33.115Z","modified":"2018-08-11T14:45:33.116Z"},{"owner":"59b0e45d6d85560007c28194","roles":[],"_vid":0,"_fvid":0,"state":"submitted","_id":"5b6c4a0fd08f2474f47c53cf","data":{"head":"sdfsdfsdfsdfs","submit":true},"access":[],"form":"5b6bdfb7d08f248cf67c4f17","externalIds":[],"created":"2018-08-09T14:05:03.358Z","modified":"2018-08-09T14:05:03.358Z"},{"owner":"59b0e45d6d85560007c28194","roles":[],"_vid":0,"_fvid":0,"state":"submitted","_id":"5b6c46fed08f241f0c7c5398","data":{"head":"Yes","submit":true},"access":[],"form":"5b6bdfb7d08f248cf67c4f17","externalIds":[],"created":"2018-08-09T13:51:58.250Z","modified":"2018-08-09T13:51:58.250Z"}]
   loadBlogPost(submissions);
 });

 
  });   



   function loadBlogPost(data){

    for (var i = 0; i < data.length; i++) {
     $('.blog').append(
      '<div class="container post">'+
      '<div class="head"> <h1> '+ data[i].data.head +' </h1> </div>'+
     // '<div><small>'+ convertTimeZone(data[i].created) +' <i class="fas fa-bug"></i></small></div>'+
      '<div class="content"> <p> '+ data[i].data.content +' </p> </div>'+
      '</div>'

      ); 

   }


    function convertTimeZone(oldUtc){

             var formioTimeZone    = moment.tz(oldUtc, "America/New_York");
             
             var thaiTimeZone      = formioTimeZone.clone().tz("Asia/Bangkok");
             console.log(thaiTimeZone)
             return  thaiTimeZone._locale._weekdays[thaiTimeZone.days()] +' ' +thaiTimeZone.date() +' '+thaiTimeZone._locale._months[thaiTimeZone.months()] + ' ' + thaiTimeZone.year();

    }

   }
