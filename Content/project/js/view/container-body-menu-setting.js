/*
 * container-body-menu-setting
 *
 * SMILEDINING-SA19-0004      03/13/2019      Customize      1. Add new tab menu 'Announcement' to 'Menu Setting' of SmileOwner
                                                             2. Move 'Broad Text' of Menu Setting to 'Announcement'
                                                             3. Create ''Announcement' module that include Header, Description, Badge.
                                                             4. Add 'broad-active'  status for enable/disable on SmileDining (1=enable, 0=disable)
                                                             5. Announcement must collaborative with active and close time of setup on SmileOwner.
                                                             6. Upload/Delete AnnounceImage
                                                             7. Delete Shop Logo
   SMILEDINING-SA19-0005      03/25/2019      Customize      1. Gennerate sql script for create table 'tbdeliveryfreetime'
                                                             2. Add Delivery Free Time UI for Draw Maps and Set Mile at MySetting menu
                                                             3. Delivery Free Time can separate date between Zone1, Zone2 and Zone3
                                                             4. Control delivery charge of SmileDining depending on Shop map code and Zone of delivery
   SMILEDINING-SA19-0020      08/27/2019      FixBug         1. Fix Announce Description for insert New Line and Free Space.
   SMILEDINING-SA20-0028      21/10/2020      Customize      1.Upload/show Image Announcement(Lightbox)
                                                             2.Add GlobalConfig image-annonce/image-announce-size/image-announce-active
   SMILEDINING-SA20-0031      02/12/2020      Customize      1. Adjust shop close period date and time.
   SMILEDINING-SA20-0043      15/12/2017      Customize      1. Custom map zone mile price.
   SMILEDINING-SA20-0043#2    06/01/2021      Customize      1. Add validate before save mapZoneMile.
   SMILEDINING-SA20-0048      28/12/2020      Customize      1. Discount code one time use.
   SMILEDINING-SA21-0035      02/08/2021      Customize      1. Add upload background image in webOwner only Smile Contactless Dining. (Smile On Table P1)
                                                             2. Create new Views following UI frame 1 and frame 2. (Smile On Table P1)
   WEB-SA22-0040              26/09/2022      Customize      1. New feature minimum order delivery charge.
   WEB-SA23-0001              09/01/2023      Customize      1. Use MQTT send data to kiosk  in webOwner.
   WEB-SA23-0001#6            18/01/2023      Customize      1. Fix bug delete custom shopclose MQTT in webOwner.
   WEB-SA24-0012#1            03/05/2024      Customize      1. Fix bug promotion condition on webOwner, webDining, webOnTable.
 */

$(document).on('click', cfrmEditRestaurant_ShopName, function () {
    disableErrMsg($(this))
});

$('.slide-left-tabSetting').click(function () {
    slideLeftTabSetting();
});

$('.slide-right-tabSetting').click(function () {
    slideRightTabSetting();
});

function slideLeftTabSetting() {
    var leftPos = $('.tab-mysetting').scrollLeft();
    $('.tab-mysetting').animate({ scrollLeft: leftPos - 300 }, 200);
    };

function slideRightTabSetting() {
    var leftPos = $('.tab-mysetting').scrollLeft();
    $('.tab-mysetting').animate({ scrollLeft: leftPos + 300 }, 200);
    };

$(function () {
    $('#divSetting-Restaurant').show();
    $('#divSetting-MapZone').hide();
    $('#divMenu-Index').hide();
    $('#divSetting-Setting').hide();
});

$("#divSetting-Restaurant").on("click", "input[type='text']", function () {
    $(this).select();
});

$("#divSetting-MapZone").on("click", "input[type='text']", function () {
    $(this).select();
});

$("#divMenu-Index").on("click", "input[type='text']", function () {
    $(this).select();
});

$("#divSetting-Setting").on("click", "input[type='text']", function () {
    $(this).select();
});

//Added By SMILEDINING-SA19-0005
$('#uploadImageLogo').change(function () {
    $('#showUploadImageLogo').html($(this).val()); 
});

$('#frmUploadAnnounceImage #uploadAnnounceImage').change(function () {
    const data = $(this).val()
    $('#showUploadAnnounceImage').html(data);
    vmViewIndex.globalConfig.shopAnnounceImage(data)
});
//End Added By SMILEDINING-SA19-0005

//Added by SMILEDINING-SA20-0028
$('#frmUploadAnnounceCustomImage #uploadAnnounceCustomImage').change(function (e) {
    const data = $(this).val()
    var files = e.currentTarget.files;
    if (files != null && files.length > 0) {
        if (files[0].size > 1048576) {            
            swal('File size limit (1MB)', '', cSwal_Icon_Error);
            $(this).val('');
            vmViewIndex.globalConfig.shopAnnounceCustomImage('');
        } else {
            $('#showUploadAnnounceCustomImage').html(data);
            vmViewIndex.globalConfig.shopAnnounceCustomImage(data)
        }
    }
});
//End Added by SMILEDINING-SA20-0028

//Added by SMILEDINING-SA21-0035
$(document).on('change', '#frmUploadImageBackgroundSetting #uploadImageBackground', function () {
    var data = $(this).val();
    $('#showUploadImageBackground').html(data); 
});
//End Added by SMILEDINING-SA21-0035
//Added by SMILEDINING-SA20-0048
$('#uploadDiscountFile').change(function () {
    $('#showUploadDiscountFile').html($(this).val());
});
//End Added by SMILEDINING-SA20-0048

//Added by SMILEDINING-SA19-0004
$("#divAnnouncement").on("click", "input[type='text']", function () {
    $(this).select();
});
//End Added by SMILEDINING-SA19-0004

$('#tabRestaurant').on('click', function () {
    $('#divSetting-Restaurant').show();
    $('#divSetting-MapZone').hide();
    $('#divMenu-Index').hide();
    $('#divSetting-Setting').hide();
    $('#divAnnouncement').hide(); // Added and End by SMILEDINING-SA19-0004
});

$('#tabMap').on('click', function () {
    $('#divSetting-MapZone').show();
    $('#divSetting-Restaurant').hide();
    $('#divMenu-Index').hide();
    $('#divSetting-Setting').hide();
    $('#divAnnouncement').hide(); // Added and End by SMILEDINING-SA19-0004
    $('#btn-ClickArea-Zone1').trigger("click");
});

$('#tabDeliveryTime').on('click', function () {
    $('#divMenu-Index').show();
    $('#divSetting-Restaurant').hide();
    $('#divSetting-MapZone').hide();
    $('#divSetting-Setting').hide();
    $('#divAnnouncement').hide(); // Added and End by SMILEDINING-SA19-0004
});

$('#tabSetting').on('click', function () {
    $('#divSetting-Restaurant').hide();
    $('#divSetting-MapZone').hide();
    $('#divMenu-Index').hide();
    $('#divSetting-Setting').show();
    $('#divAnnouncement').hide(); // Added and End by SMILEDINING-SA19-0004
});

//Added by SMILEDINING-SA19-0004
$('#tabAnnouncement').on('click', function () {
    $('#divSetting-Restaurant').hide();
    $('#divSetting-MapZone').hide();
    $('#divMenu-Index').hide();
    $('#divSetting-Setting').hide();
    $('#divAnnouncement').show();
});
//End Added by SMILEDINING-SA19-0004

//Added by SMILEDINING-SA19-0020
function onAnnouncementKeyDown(element) {
    var key = window.event.keyCode;
    if (key === 32) {
        var cursorPosition = $(element).prop("selectionStart");
        var tempStart = element.value.substring(0, cursorPosition);
        var tempEnd = element.value.substring(cursorPosition, element.value.lenght);
        element.value = tempStart + "\ " + tempEnd;
        element.selectionEnd = cursorPosition + 1;
        return false;
    }
    else if (key === 13) {
        var cursorPosition = $(element).prop("selectionStart");
        var tempStart = element.value.substring(0, cursorPosition);
        var tempEnd = element.value.substring(cursorPosition, element.value.lenght);
        element.value = tempStart + "\n" + tempEnd;
        element.selectionEnd = cursorPosition + 1;
        return false;
    }

    return true;
};
//End Added by SMILEDINING-SA19-0020

//Added by SMILEDINING-SA20-0043
function verifyMaxMile() {
    if (vmViewIndex.allMapZone.activeCustomMile()) {
        var zoneId = parseInt(vmViewIndex.allMapZone.customMileZone());
        var endMile = parseFloat(vmViewIndex.allMapZone.listMapZoneMile()[zoneId - 1].endMile());
        var filter = ko.utils.arrayFilter(vmViewIndex.allMapZone.listValueCustom(), function (item) {
            return parseFloat(item.maxMile()) <= endMile;
        });
        if (filter.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    return true;
};
function verifyMaxMileDuplicate() {
    var valuesAlreadySeen = []
    var array = vmViewIndex.allMapZone.listValueCustom.slice(0);
    for (var i = 0; i < array.length; i++) {
        var value = array[i].maxMile();
        var index = valuesAlreadySeen.findIndex(function (element) {
            return element == value;
        });
        if (index !== -1) {
            return false;
        }
        valuesAlreadySeen.push(value)
    }
    return true;
}
function swalConfirmSaveOverMile(jsonObj, mapZoneId) {
    var text = 'If you save "Custom mile" on Set Mile Zone' + mapZoneId + ', value in next Zone will be lost';
    swal({
        title: "Are you sure?",
        text: text,
        type: "question",
        showCancelButton: true,
        confirmButtonText: "Save",
        cancelButtonText: "Cancel",
        closeOnConfirm: false,
        closeOnCancel: false,
        confirmButtonClass: "btn theme default-button",
        cancelButtonClass: "btn btn-danger",
        preConfirm: function () {
            return new Promise(function (resolve) {
                $('#' + jsonObj).submit();
            });
        }
    }).then(function () {
    },
    function (dismiss) {
        if (dismiss === 'cancel') {

        };
    });
};
//End Added by SMILEDINING-SA20-0043

//Added by SMILEDINING-SA20-0043#2
function swalConfirmSaveMapZoneMile(jsonObj, mapZoneId) {
    var text = 'If you delete "Start Mile and End Mile" on Deliver Zone ' + mapZoneId + ', value in Custom mile will be lost.';
    swal({
        title: "Are you sure?",
        text: text,
        type: "question",
        showCancelButton: true,
        confirmButtonText: "Save",
        cancelButtonText: "Cancel",
        closeOnConfirm: false,
        closeOnCancel: false,
        confirmButtonClass: "btn theme default-button",
        cancelButtonClass: "btn btn-danger",
        preConfirm: function () {
            return new Promise(function (resolve) {
                $('#' + jsonObj).submit();
            });
        }
    }).then(function () {
    },
    function (dismiss) {
        if (dismiss === 'cancel') {

        };
    });
};
function verifyMapZoneMile() {
    var zoneId = parseInt(vmViewIndex.allMapZone.tempCustomMileZone());
    var dataMapZone = vmViewIndex.allMapZone.listMapZoneMile()[zoneId - 1];
    if (parseFloat(dataMapZone.startMile()) == 0 && parseFloat(dataMapZone.endMile()) == 0) {
        return false;
    }
    return true;
};
//End Added by SMILEDINING-SA20-0043#2

//Added by SMILEDINING-SA20-0031
function swalConfirmDeleteShopClose(jsonObj, id) {
    swal({
        title: "Are you sure you want to delete this record?",
        type: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: false,
        confirmButtonClass: "btn theme default-button",
        cancelButtonClass: "btn btn-danger",
        preConfirm: function () {
            var objUrl = new ObjUrl(jsonObj);
            var requestUrl = objUrl.getUrlSubmitForm();
            var passData = {
                'id': id,
                'key': vmViewIndex.allSetting.isSmileDining()
            };
            return new Promise(function (resolve) {
                $.ajax({
                    url: requestUrl,
                    async: ajax_async,
                    cache: ajax_cache,
                    type: ajax_type_post,
                    data: passData,
                    timeout: ajax_timeout,
                })
                .done(function (result) {
                    var filterShopClose = ko.utils.arrayFilter(vmViewIndex.allSetting.dataShopClose(), function (shopClose) {
                        return shopClose.time()[0].shopCloseId() == result.obj;
                    });
                    vmViewIndex.allSetting.dataShopClose.remove(_.first(filterShopClose));
                    refreshGrid('gridShopClose');
                    //Added by WEB-SA23-0001
                    if (result.status) {
                        var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                        //if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) { //Modified and End by WEB-SA23-0001#6
                        if (vmViewIndex.isKiosk() && itemKiosk != null) { //Added and End by WEB-SA23-0001#6
                            sendMqtt(itemKiosk, getTopicMqtt('stShopClose'));
                        }
                    }
                    vmViewIndex.isKiosk(false);
                    //End Added by WEB-SA23-0001
                    var objAlert = new ObjAlert("", result.message, result.status);
                    objAlert.getAlert();

                })
                .fail(function (result) {
                    var objAlert = new ObjAlert("", result.message, result.status);
                    objAlert.getAlert();
                    vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
                });
            });
        }
    }).then(function () {
        refreshGrid('gridShopClose');
    },
    function (dismiss) {
        if (dismiss === 'cancel') {
            vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
        };
    });
};
//End Added by SMILEDINING-SA20-0031

//Added by WEB-SA22-0040
function verifyRangeMinimumOrderDeliveryCharge() {
    var message = [];
    _.forEach(vmViewIndex.allMapZone.minimumOrderDeliveryChargeList(), function (item, index) { 
        if (item.active()) {
            var indexMin = _.findIndex(vmViewIndex.allMapZone.minimumOrderDeliveryChargeList(), function (v, i) {
                if ((item.minimumOrderDeliveryChargeId() != v.minimumOrderDeliveryChargeId() || index != i) && v.active())
                    return _.inRange(parseFloat(item.minimumOrder()), parseFloat(v.minimumOrder()), (parseFloat(v.maximumOrder()) + 0.01));
                else
                    return false;
            });

            var indexMax = _.findIndex(vmViewIndex.allMapZone.minimumOrderDeliveryChargeList(), function (v, i) {
                if ((item.minimumOrderDeliveryChargeId() != v.minimumOrderDeliveryChargeId() || index != i) && v.active())
                    return _.inRange(parseFloat(item.maximumOrder()), parseFloat(v.minimumOrder()), (parseFloat(v.maximumOrder()) + 0.01));
                else
                    return false;
            });

            if (indexMin >= 0) {
                message.push(includeNewLine('- Minimum Order value of #' + (index + 1) + ' should not in range of #' + (indexMin + 1)));
            }

            if (indexMax >= 0) {
                message.push(includeNewLine('- Maximum Order value of #' + (index + 1) + ' should not in range of #' + (indexMax + 1)));
            }
        }
    });
    return message;
};
//End Added by WEB-SA22-0040

//Added by WEB-SA24-0012#1
function verifyMainPromotionAvoidDuplicates() {    
    var dataMainPrice = vmViewIndex.allSetting.dataConditionMainPrice();
    var dataMainFood = vmViewIndex.allSetting.dataConditionMainFood();
    var dataSetUpCondition = vmViewIndex.allSetting.dataSetUpCondition;
    var dataSetUpConditionStartDate = moment(dataSetUpCondition.startDate(), 'L');
    var dataSetUpConditionEndDate = moment(dataSetUpCondition.endDate(), 'L');

    var message = [];
    if (dataSetUpCondition.promotionTypeId() == cConditionPrice) {
        ko.utils.arrayForEach(dataMainPrice, function (mainPrice) {
            if (mainPrice.promotionId() != dataSetUpCondition.promotionId() && mainPrice.active() && dataSetUpCondition.active()) {
                if (mainPrice.promotionMainPriceId() == dataSetUpCondition.promotionMainPriceId()) {
                    var startDate = moment(moment(new Date(mainPrice.startDate())).format('L'), 'L');
                    var endDate = moment(moment(new Date(mainPrice.endDate())).format('L'), 'L');
                    if ((dataSetUpConditionStartDate.isBetween(startDate, endDate) || dataSetUpConditionStartDate.isSame(startDate) || dataSetUpConditionStartDate.isSame(endDate))
                        || (dataSetUpConditionEndDate.isBetween(startDate, endDate) || dataSetUpConditionEndDate.isSame(startDate) || dataSetUpConditionEndDate.isSame(endDate))) {
                        message.push(includeNewLine(`- Select Main Price "${mainPrice.strMainPriceName()}" should not be inside promotion "${mainPrice.promotionName()}"`));
                    }
                }
            }
        });
    } else {
        ko.utils.arrayForEach(dataMainFood, function (mainFood) {
            if (mainFood.promotionId() != dataSetUpCondition.promotionId() && mainFood.active() && dataSetUpCondition.active()) {
                ko.utils.arrayForEach(dataSetUpCondition.listPromotionGroupMainFood(), function (setUpGroupMainFoodId) {
                    if (mainFood.listPromotionGroupMainFood().indexOf(setUpGroupMainFoodId) > -1) {
                        var startDate = moment(moment(new Date(mainFood.startDate())).format('L'), 'L');
                        var endDate = moment(moment(new Date(mainFood.endDate())).format('L'), 'L');
                        if ((dataSetUpConditionStartDate.isBetween(startDate, endDate) || dataSetUpConditionStartDate.isSame(startDate) || dataSetUpConditionStartDate.isSame(endDate))
                            || (dataSetUpConditionEndDate.isBetween(startDate, endDate) || dataSetUpConditionEndDate.isSame(startDate) || dataSetUpConditionEndDate.isSame(endDate))) {
                            var firstGroupMainFood = ko.utils.arrayFirst(dataSetUpCondition.tempListGroupMainFood(), function (tempGroupMainFood) {
                                return tempGroupMainFood.promotionGroupMainFoodId() == setUpGroupMainFoodId;
                            });
                            message.push(includeNewLine(`- Select Main Food "${firstGroupMainFood.promotionGroupMainFoodName()}" should not be inside promotion "${mainFood.promotionName()}"`));
                        }
                    }
                });
            }
        });
    }
    return message;
}
//End Added by WEB-SA24-0012#1