/*

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

//------------- ga('send', 'event', 'category', 'action', 'label', value);
ga('create', 'UA-', 'auto');
ga('send', 'pageview');
*/

/*

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create','UA-54005280-1','auto');
ga('require', 'linkid', 'linkid.js'); //加強連結歸屬標記
ga('require','displayfeatures'); //客層和興趣報表標記
ga('send','pageview');

ga('create','UA-54005280-12','auto',{'name':'second'});
ga('second.require','displayfeatures');
ga('second.require', 'linkid', 'linkid.js'); //加強連結歸屬標記
ga('second.require','displayfeatures'); //客層和興趣報表標記
ga('second.send','pageview');

*/

/*
// DEMO
*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create',global_config.ga_id,'auto');
ga('require', 'linkid', 'linkid.js'); //加強連結歸屬標記
ga('require','displayfeatures'); //客層和興趣報表標記
ga('send','pageview');

function ga_prepare(ga_dataset, label)
{
    temp_ga_dataset = ga_dataset;
    temp_ga_dataset.label = label;
    return temp_ga_dataset;
}

function ga_send(ga_dataset)
{
    log2(ga_dataset);
    if(empty(ga_dataset)){ return false; }
    if(empty(ga_dataset.category) || empty(ga_dataset.action) || empty(ga_dataset.label)){
        return false;
    }
    ga('send', 'event', ga_dataset.category, ga_dataset.action, ga_dataset.label);
}
