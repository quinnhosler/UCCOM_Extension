(function() {
    
    debugger;
    // get arrays of grade elements
    var class_avgs = $('span[id*=gridGradeEntry_labelAverageScore]')
    var scores = $('span[id*= gridGradeEntry_labelWeightedScore]')
    var weights = $('span[id*=gridGradeEntry_labelPercentWeight]')

    // init counters
    var class_total = 0
    var score_total = 0
    var weight_sum = 0

    // loop and keep running tab
    for (var i = 0; i < class_avgs.length; i++) {
        var weight = parseFloat($(weights.get(i)).text())
        var class_avg = parseFloat($(class_avgs.get(i)).text())
        var score = parseFloat($(scores.get(i)).text())
        
        class_total += (weight*class_avg)
        score_total += (weight*score)
        weight_sum  += weight
    }

    // fill in class average, personal avg, and grade diff
    var class_avg = (class_total/weight_sum).toFixed(2)
    var personal_avg = (score_total/weight_sum).toFixed(2)
    $($('span#gridGradeEntry_labelRunningScore').parent().parent().children().get(5)).css('text-align','center')
    $($('span#gridGradeEntry_labelRunningScore').parent().parent().children().get(5)).text(class_avg+"%")

    $('span#gridGradeEntry_labelRunningScore').parent().css('text-align','center')
    $('span#gridGradeEntry_labelRunningScore').text(personal_avg+"%")

    $($('span#gridGradeEntry_labelRunningScore').parent().parent().children().get(6)).css('text-align','center')

    var diff = Math.abs(personal_avg-class_avg).toFixed(2)
    var prefix = (personal_avg >= class_avg ? "+" : "-");
    $($('span#gridGradeEntry_labelRunningScore').parent().parent().children().get(6)).text(prefix+diff+"%")
})();



