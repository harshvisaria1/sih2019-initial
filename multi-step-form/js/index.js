$(document).ready(function () {

    var next = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = ' <div id="field'+ next +'" name="field'+ next +'">' +
            '<!-- Text input-->' +
            '<div class="form-group">' +
                 '<div class="col-md-5"> ' +
            '           <input id="action_id" name="action_id" type="text" placeholder="Add email here.." class="form-control input-md"> ' +
                '</div></div>' +
            '<!-- Text input-->' +
            // '<div class="form-group"> ' +
            //     '<label class="col-md-4 control-label" for="action_name">Action Name</label> ' +
            //     '<div class="col-md-5"> ' +
            //         '<input id="action_name" name="action_name" type="text" placeholder="" class="form-control input-md"> ' +
            // '   </div>' +
            // '</div>' +
            // '<br><br>' +
            '<!-- File Button --> ' +
            // '<div class="form-group">' +
            //     '<div class="col-md-4"> ' +
            //         '<input id="action_json" name="action_json" class="input-file" type="file"> ' +
            // '</div></div>' +
            '</div>';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-me').click(function(e){
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length-1);
            var fieldID = "#field" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });


    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');

    });

    // next step
    $('.registration-form .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

        parent_fieldset.find('input[type="text"],input[type="email"]').each(function () {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });

    // previous step
    $('.registration-form .btn-previous').on('click', function () {
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });

    // submit
    $('.registration-form').on('submit', function (e) {

        $(this).find('input[type="text"],input[type="email"]').each(function () {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

    });



});