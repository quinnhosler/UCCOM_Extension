$(document).ready(function() {
    var count1 = 0
    var interval1 = setInterval(function() { 
                        changeSize() 
                    }, 500);
        
    function changeSize() {
        count1 += 1
        console.log("changeSize: "+count1)
        if (count1 >= 10)
            clearInterval(interval1)
        var ribbons = $('span#ribbonWindow.ribbonWindow');
        if (!ribbons)
            return false
        $('span#ribbonWindow.ribbonWindow').css('max-height','75px')
        clearInterval(interval1)
        return true
    }


    // Code to insert titles into ribbons
    // // new class needed to override previous class css
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.ribbon-style { height:11px; padding:2px 0px 2px 10px; font-size: 1.3em; margin-bottom:-2px; background-repeat: repeat-x; overflow-y: hidden; }';
    document.getElementsByTagName('body')[0].appendChild(style);

    var count2 = 0
    var interval2 = setInterval(function() {
                        labelRibbons() 
                    }, 750);
        
    function labelRibbons() {
        count2 += 1
        console.log("labelRibbons: "+count2)
        if (count2 >= 10)
            clearInterval(interval2)
            
        var nav = $('div[id*=calNav], div.calSBIcon#goToToday')
        if (nav.length == 0)
            return false
        
        var count3 = 0
        nav.on('click', function() {
            var interval3 = setInterval(function () {
                if ( label() || count3 > 10)
                    clearInterval(interval3)
                else
                    count3 += 1
            }, 300);
        })
        
        if (!label())
            return false
        clearInterval(interval2)
        return true
    }

    function label() {
        var ribbons = $('span.ribbon')
        if (ribbons.length == 0)
            return false
            
        $.each(ribbons, function (index, value) {
            $(this).text($(this).attr('mname'))    
        })
        ribbons.addClass('ribbon-style')
        $('span.ribbon.blueGradient').css('color','white')
        $('span.ribbon.blackGradient').css('color','white')
        return true
    }
});

