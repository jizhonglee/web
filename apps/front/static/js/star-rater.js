$(function() {
    var lecturer_pk = $('h1.lecturer-name').attr('data-lecturer-pk');
    var submitScore = function(category, score) {
        Dajaxice.apps.lecturers.rate_lecturer(
            lecturerRatingCallback, {
                'lecturer_pk': lecturer_pk, 'category': category, 'score': score
            }
        );
    };
    var lecturerRatingCallback = function(data) {
        var rating_count_text = data.rating_count == 1 ? ' Bewertung' : ' Bewertungen';
        $('label[for="rating_' + data.category +'"]').attr('title', data.rating_count + rating_count_text);
        $('.lrating-' + data.category + '-avg').text(data.rating_avg);
    };
    $('[name="rating_d"]').change(function() {
        submitScore("d", $(this).val());
    });
    $('[name="rating_m"]').change(function() {
        submitScore("m", $(this).val());
    });
    $('[name="rating_f"]').change(function() {
        submitScore("f", $(this).val());
    });
});


$(function() {
    $('.drating').each(function(){
        var rating = $(this);
        rating.find('[name="drating"]').change(function() {
            var score = $(this).val();
            var url = rating.attr('data-url');
            var summary_url = rating.attr('data-summary-url');
            $.ajax({
                type: 'POST',
                url: url,
                data: {'score': score},
                error: function(jqXHR, textStatus, errorThrown) {
                    // Couldn't complete ajax request.
                    // Reset raty and show error message.
                    alert(errorThrown + ': ' + jqXHR.responseText);
                },
                success: function(data, textStatus, jqXHR) {
                    // Update average rating etc...
                    var summary_label = rating.find('label[for="drating"]');
                    summary_label.load(summary_url)
                }
            });
        });
    });
});
