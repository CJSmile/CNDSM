/**
 * SMILEDINING-SA19-0011      09/03/2019      Customize            1. E-Gift Card.
 * 
 */
$(cfrmTabGiftCardImage).on('click', function () {
    $(cfrmDivGiftCardImage).show();
    $(cfrmDivGiftCardValue).hide();
});

$(cfrmTabGiftCardValue).on('click', function () {
    $(cfrmDivGiftCardImage).hide();
    $(cfrmDivGiftCardValue).show();
});

$(cfrmUploadGiftCardImage).imageuploadify();

$(cfrmUploadNewGiftCardImage).imageuploadify();

function initGiftCardImageDragging(element) {
    var ckChange = false;
    var toPosition;
    var fromPosition;
    var toGiftCardImage;
    var fromGiftCardImage;

    $(element).sortable({
        cursor: 'move',
        forcePlaceholderSize: false,
        opacity: 0.4,
        placeholder: 'highlight',
        start: function (event, ui) {
            ui.item.toggleClass('highlight');
        },
        stop: function (event, ui) {
            ui.item.toggleClass('highlight');
        }
    });

    $(element).disableSelection();
};

function initGiftCardImageDragDrop(element, valueAccessor) {
    var ckChange = false;
    var startPosition;

    $(element).sortable({
        cursor: 'move',
        forcePlaceholderSize: false,
        opacity: 0.4,
        //placeholder: 'highlight',
        start: function (event, ui) {
            ui.item.toggleClass('highlight');

            startPosition = ui.item.index();
        },
        update: function (event, ui) {
        },
        change: function(event, ui) {
           ui.placeholder.toggleClass('slick-placeholder');
         },
        stop: function (event, ui) {
            ui.item.toggleClass('highlight');

            var endPosition = ui.item.index();

            vmViewIndex.giftCard.addGiftCard.lockEdit(true);

            if (startPosition < endPosition) {
                var tmp = vmViewIndex.giftCard.giftCardImageStorage()[startPosition];
                for (i = startPosition; i < endPosition ; i++) {
                    vmViewIndex.giftCard.giftCardImageStorage()[i] = vmViewIndex.giftCard.giftCardImageStorage()[i + 1];
                    vmViewIndex.giftCard.giftCardImageStorage()[i].sorting(i + 1);
                }

                vmViewIndex.giftCard.giftCardImageStorage()[endPosition] = tmp;
                vmViewIndex.giftCard.giftCardImageStorage()[endPosition].sorting(endPosition + 1);
            }
            else if (startPosition > endPosition) {
                var tmp = vmViewIndex.giftCard.giftCardImageStorage()[startPosition];
                for (i = startPosition; i > endPosition ; i--) {
                    vmViewIndex.giftCard.giftCardImageStorage()[i] = vmViewIndex.giftCard.giftCardImageStorage()[i - 1];
                    vmViewIndex.giftCard.giftCardImageStorage()[i].sorting(i + 1);
                }

                vmViewIndex.giftCard.giftCardImageStorage()[endPosition] = tmp;
                vmViewIndex.giftCard.giftCardImageStorage()[endPosition].sorting(endPosition + 1);
            }

        }
    });

    $(element).disableSelection();
};

function selectNextActivity(callback) {

    var giftCardValueDataCount = vmViewIndex.giftCard.showGuideLine.giftCardValueData().length;
    var customDiscountDataCount = vmViewIndex.giftCard.showGuideLine.customDiscountData().length;

    if (customDiscountDataCount > 0) {
        giftCardValueDataCount -= 1;
    }

    if (giftCardValueDataCount == 0) {

        swal({
            title: cMessage_GiftCardValue_Empty,
            type: 'question',
            showConfirmButton: false,
            showCancelButton: false,
            html:
                '<div class="row"><div class="col-12"><div class="form-group"><button id="btnAddGiftCardValue" class="btn btn-primary btn-swal-activity">Add new giftcard value</button></div></div></div>' +
                '<div class="row"><div class="col-12"><div class="form-group"><button id="btnNextProcess" class="btn theme default-button btn-swal-activity">Next Process</button></div></div></div>',
            onOpen: function(e) {
                $('#btnAddGiftCardValue').click(function () {
                    if (typeof callback == 'function') {
                        callback.call(this, "addGiftCardValue");
                    };
                    swal.close();
                }),
                $('#btnAddCustomDiscount').click(function() {
                    if (typeof callback == 'function') {
                        callback.call(this, "addCustomDiscount");
                    };
                    swal.close();
                }),
                $('#btnNextProcess').click(function () {
                    if (typeof callback == 'function') {
                        callback.call(this, "nextProcess");
                    };
                    swal.close();
                })
            }
        }).then(function() {

        }, function(dismiss){

        });
    }
    else if (customDiscountDataCount == 0) {

        swal({
            title: 'Your custom price is empty?',
            type: 'question',
            showConfirmButton: false,
            showCancelButton: false,
            html:
                '<div class="row"><div class="col-12"><div class="form-group"><button id="btnAddCustomDiscount" class="btn btn-primary btn-swal-activity">Add custom price</button></div></div></div>' +
                '<div class="row"><div class="col-12"><div class="form-group"><button id="btnNextProcess" class="btn theme default-button btn-swal-activity">Next Process</button></div></div></div>',
            onOpen: function(e){
                $('#btnAddGiftCardValue').click(function(){
                    if (typeof callback == 'function') {
                        callback.call(this, "addGiftCardValue");
                    };
                    swal.close();
                }),
                $('#btnAddCustomDiscount').click(function () {
                    if (typeof callback == 'function') {
                        callback.call(this, "addCustomDiscount");
                    };
                    swal.close();
                }),
                $('#btnNextProcess').click(function () {
                    if (typeof callback == 'function') {
                        callback.call(this, "nextProcess");
                    };
                    swal.close();
                })
            }
        }).then(function() {

        }, function(dismiss){

        });

    }

    return true;

};

function swalMessage(messageObject, callback) {
    swal({
        type: messageObject.msgType,
        title: messageObject.msgTitle,
        showConfirmButton: true
    }).then(function () {
        if (typeof callback == 'function') {
            callback.call(this);
        };
    }, function (dismiss) {

    });
};

function alerMessage(msg, status) {
    var objAlert = new ObjAlert('', msg, status);
    objAlert.getAlert();
};

function swalConfirmSubmitGifCard(formId, msgTitle) {
    swal({
        title: msgTitle,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm!',
        cancelButtonText: 'Cancel',
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true,
        showLoaderOnConfirm: true,
        allowEscapeKey: false,
        preConfirm: function () {

          if (formId == 'frmGiftCard') {
              vmViewIndex.giftCard.showGuideLine.prepareGiftCardData();
          }

            var objUrl = new ObjUrl(formId);
            var requestUrl = objUrl.getUrlSubmitForm();
            var serializedForm = $(getIdTag(formId)).serialize();
            return new Promise(function (resolve) {
                $.ajax({
                    url: requestUrl,
                    async: ajax_async,
                    cache: ajax_cache,
                    type: ajax_type_post,
                    data: serializedForm,
                    timeout: ajax_timeout,
                })
                .done(function (result) {
                    if (result.status) {
                        afterSubmitGiftCard(formId, result);
                        completeConfirm(formId, result);
                    }
                    else {
                        if (formId == 'frmDeleteGiftCardImage')
                            swal('Oops...', cError_DeleteImage_ForeignKey, cSwal_Icon_Error);
                        else
                            swal('Oops...', cError_Fail_TimeOut, cSwal_Icon_Error);
                    }
                })
                .fail(function () {
                    swal('Oops...', cError_Fail_TimeOut, cSwal_Icon_Error);
                    redirectMain();
                });
            });
        },
        allowOutsideClick: false
    });

};

function completeConfirm(formId, result) {
    setInvisible(getClassTag('open-navigation'));
    $(window).scrollTop(0);

    swal('Confirm Success!', result.message, cSwal_Icon_Success).then(function(){

        if (formId == 'frmGiftCard') {
            location.reload();
        }

    }, function(dismiss){

    });
};

function afterSubmitGiftCard(formId, result) {
    switch (formId) {
        case cfrmNewGiftCardImage:
            $(cModalAddGiftCardImage).modal('hide');
            clearNewGiftCardImage();
            //item = JSON.parse(result.obj);
            SetNewGiftCardImageAdd(JSON.parse(result.obj));
            break;
        case cfrmDeleteGiftCardImage:
            SetDeleteGiftCardImage(result.obj);
            break;
        default:
            break;
    }

};

function clearNewGiftCardImage() {

    $(cfrmTabNewGiftCardImage).find('.imageuploadify-container').remove();

    vmViewIndex.giftCard.addGiftCard.activeTab('upload-image');
    $(cfrmStep1GiftCardImage).addClass('active');
    $(cfrmTabNewGiftCardImage).addClass('active');

    $(cfrmStep2GiftCardImage).removeClass('active');
    $(cfrmTabNewImageDescription).removeClass('active');

    $(cfrmStep3GiftCardImage).removeClass('active');
    $(cfrmTabCompleteNewGiftCard).removeClass('active');
};

function onClickGiftCardForDetail(value, event) {

    $(cfrmGiftCardSlick).find('div .card-selected').removeClass('card-selected');
    $(event.currentTarget).addClass('card-selected');

    var addGiftCard = vmViewIndex.giftCard.addGiftCard;

    addGiftCard.giftCerValueId(value.giftCerValueId);
    addGiftCard.giftCerValueName(value.giftCerValueName);
    addGiftCard.getAmount(value.getAmount);
    addGiftCard.payAmount(value.payAmount);
    addGiftCard.discountAmount(value.discountAmount);
    addGiftCard.discountPercent(value.discountPercent);
    addGiftCard.getAsPay(value.getAsPay);
    addGiftCard.activateOnly(value.activateOnly);
    if (value.isDiscountAmount == false && value.isDiscountPercent == false) {
        addGiftCard.isDiscountAmount(true);
    } else {
        addGiftCard.isDiscountAmount(value.isDiscountAmount);
    }
    addGiftCard.isDiscountPercent(value.isDiscountPercent);
    addGiftCard.active(value.active);
    addGiftCard.lastGetAmount(value.getAmount);
    addGiftCard.calShowDiscount();

    if (value.getAsPay) {
        $(cfrmRowDetailCustomDiscount).find('.panel-selected').removeClass('panel-selected');
        addGiftCard.clearCustomDiscount();
        addGiftCard.showGiftCardValueDetail(false);
        addGiftCard.showCustomDiscountDetail(true);
    }
    else {
        addGiftCard.showGiftCardValueDetail(true);
        addGiftCard.showCustomDiscountDetail(false);
    }

};

function onClickGiftCardGuideLineForDetail(value, event) {

    $(cfrmGiftCardGuidelineSlick).find('div .card-selected').removeClass('card-selected');
    $(event.currentTarget).addClass('card-selected');

    var guideGiftCard = vmViewIndex.giftCard.showGuideLine;

    guideGiftCard.giftCerValueId(value.giftCerValueId);
    guideGiftCard.giftCerValueName(value.giftCerValueName);
    guideGiftCard.getAmount(value.getAmount);
    guideGiftCard.payAmount(value.payAmount);
    guideGiftCard.discountAmount(value.discountAmount);
    guideGiftCard.discountPercent(value.discountPercent);
    guideGiftCard.getAsPay(value.getAsPay);
    guideGiftCard.activateOnly(value.activateOnly);
    guideGiftCard.isDiscountAmount(value.isDiscountAmount);
    guideGiftCard.isDiscountPercent(value.isDiscountPercent);
    guideGiftCard.giftCerActive(value.active);
    guideGiftCard.lastGetAmount(value.getAmount);
    guideGiftCard.calShowDiscount();
    if (value.getAsPay) {
        $(cfrmRowGuidelineDetailCustomDiscount).find('.panel-selected').removeClass('panel-selected');
        guideGiftCard.clearCustom();
        guideGiftCard.showGiftCardValueDetail(false);
        guideGiftCard.showCustomDiscountDetail(true);
    }
    else {
        guideGiftCard.showGiftCardValueDetail(true);
        guideGiftCard.showCustomDiscountDetail(false);
    }
};

function clearCardSelected() {
    var guideGiftCard = vmViewIndex.giftCard.showGuideLine;
    $(cfrmGiftCardGuidelineSlick).find('div .card-selected').removeClass('card-selected');
    guideGiftCard.showGiftCardValueDetail(false);
    guideGiftCard.showCustomDiscountDetail(false);
};
