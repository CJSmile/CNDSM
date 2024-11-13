/*
    SMILEDINING-SA19-0002     02/11/2019      Customize     1. Add field to custom text button pay at store and pay credit
                                                            2. Edit button pay at store and pay credit get text data from database
                                                            3. Add field to custom text placeholder special instruction
                                                            4. Edit textarea special instruction get data placeholder from database
                                                            5. Add field to set show/hide tips description (from pay at store and pay credit page)
                                                            6. Edit and Add show/hide tips description (from pay at store and pay credit page)
    SMILEDINING-SA19-0011      09/03/2019      Customize    1. E-Gift Card.
    SMILEDINING-SA20-0006      07/06/2020      Customize    1. Add filter Product on Mysetting
    SMILEDINING-SA20-0048      28/12/2020      Customize    1. Discount code one time use. 
    SMILEDINING-SA21-0015      09/03/2021      Customize    1. Fix bug validate setting promotion price.
                                                            2. Fix bug smileDining disable button add to cart when invalid time.
                                                            3. Fix bug mask input phone number don't working in mobile.
                                                            4. Fix bug button pickup/delivery invalid color in mobile.
															5. Fix bug selectBox in Config setup Choice Option and Choice Modify don't close when scroll window after open selectBox.
                                                            6. Fix bug scroll window when open or close modal.
                                                            7. Edit globalconfigservice.cs and globalconfigcontactlessservice.cs save value.
                                                            8. Edit view of setupGiftCard webOwner and Fix bug of giftcard. 
    SMILEDINING-SA21-0018      21/05/2021      Customize    1. Setting food detail by third party to deliverect.
    SMILEDINING-SA21-0018#1    24/05/2021      Customize    1. Edit third party integration.
    SMILEDINING-SA21-0028      30/07/2021      Customize    1. Edit UI Smile Dining and Contactless (Layout P2) and  edit webOwner can upload food Image for Desktop and Mobile.
    SMILEDINING-SA21-0028#3    05/08/2021      Customize    1. Edit UI Smile Dining and Contactless (Layout P2).
    SMILEDINING-SA22-0037      14/09/2022      Customize    1. New feature setting delivery driver in WebOwner.
    WEB-SA22-0062              29/11/2022      Customize    1. Add PromotionName, ShippingType, TotalUse in WebOwner
    WEB-SA22-0066              06/12/2022      Customize    1. Use MQTT send to kiosk for discount contactless in webOwner.
    WEB-SA22-0072              26/12/2022      Customize    1. Use MQTT send data add and update food contactless to kiosk  in webOwner.
    WEB-SA23-0001              09/01/2023      Customize    1. Use MQTT send data to kiosk  in webOwner.
    WEB-SA23-0001#2            10/01/2023      Customize    1. Fix bug foodChoiceMap MQTT in webOwner.
    WEB-SA23-0001#3            11/01/2023      Customize    1. Fix bug foodChoiceMap and foodSetTimeMap MQTT in webOwner.
    WEB-SA23-0001#6            18/01/2023      Customize    1. Fix bug delete custom shopclose MQTT in webOwner.
    WEB-SA23-0026              29/03/2023      Customize    1. Fix bug auto sync product deliverect on webOwner.
    WEB-SA23-0026#1            15/05/2023      Customize    1. Fix bug auto sync product deliverect when log out and close browser on webOwner.
    WEB-SA23-0026#2            22/05/2023      Customize    1. Fix bug error setting menu hour on webOwner.
 */

/*
 * function
 */

function filterGlobalConfig(data, filter) {
    var values = ko.utils.arrayFilter(data, function (item) {
        return filter == item.globalConfigKey
    });
    //return _.first(values).globalConfigValue;     //Modified and End by SMILEDINING-SA19-0002
    //Added by SMILEDINING-SA19-0002
    if (isEmpty(values))
        return "";
    else
        return _.first(values).globalConfigValue;
    //End Added by SMILEDINING-SA19-0002
};

function findActiveDayAfterFilterData(data) {
    var values = ko.utils.arrayFilter(data, function (item) {
        return item.active == true
    });
    if (values.length > 0) {
        return true;
    } else {
        return false;
    }
};

function getShippingType(shippingType) {
    switch (shippingType) {
        case "0":
            return ['Pickup'];
        case "1":
            return ['Delivery'];
        case "2":
        default:
            return ['Pickup', 'Delivery'];
    }
};

function checkVersionIE() {
    if (document.documentMode) {
        return document.documentMode;
    } else {
        for (var i = 7; i > 0; i--) {
            var div = document.createElement("div");
            div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
            if (div.getElementsByTagName("span").length) {
                return i;
            }
        }
    }
    return undefined;
};

function shopStatus(status) {
    if (status == 'OPEN') {
        return true;
    } else {
        return false;
    }
};

function disableErrMsg(tag) {
    tag.parent().parent().parent().parent().find('.panel-messsage-error').hide();
    tag.removeClass(cCssInputValidateError);
};

function redirectMain() {
    var link = $('#divHomeViewIndex').data('request-url');
    location.href = link;
};

function setScrollTop() {
    $(window).scrollTop(0);
};

function setMaskPhone() {
    $('.mask-phone').inputmask({
        mask: '(999) 999-9999'
    });
};

ko.extenders.numeric = function (target, precision) {
    var result = ko.computed({
        read: function () {
            return parseFloat(target()).toFixed(precision);
        },
        write: target
    });

    result.raw = target;
    return result;
};

function refreshGrid(id) {
    var dataGrid = getIdTag(id).dxDataGrid('instance');
    dataGrid.refresh();
};

function removeClassValidationError(id) {
    $(id).removeClass('input-validation-error');
};

function removeTag(theTarget, theString) {
    return $("<div/>").append(
        $(theTarget, theString).remove().end()
    ).html();
};

function removeCursorDateBox(v, id) {
    v.component._keyboardProcessor._element[0].id = "";
    v.component._keyboardProcessor._element.addClass("cursor-datebox");
    v.component._keyboardProcessor._element[0].id = id;
    noCursor(id);
};

function autochargeHasScroll() {
    $('#modalShowAutoCharge').css({ 'overflow-x': 'hidden', 'overflow-y': 'auto' });
    $('html').css({ 'overflow-x': 'hidden', 'overflow-y': 'hidden' });
};

//Added by SMILEDINING-SA20-0006
//Modified by SMILEDINING-SA21-0015
//function modalHiddenHasScroll(id) {
//    //$('id').css({ 'overflow-x': 'hidden', 'overflow-y': 'auto' });        //Modified and End by SMILEDINING-SA20-0048
//    $(id).css({ 'overflow-x': 'hidden', 'overflow-y': 'auto' });            //Added and End by SMILEDINING-SA20-0048
//    $('html').css({ 'overflow-x': 'hidden', 'overflow-y': 'hidden' });
//};
//End Modified by SMILEDINING-SA21-0015

function modalHasScoll() {
    //$('html').css({ 'overflow-x': 'hidden', 'overflow-y': 'auto' });      //Modified and End by SMILEDINING-SA21-0015
};
//End Added by SMILEDINING-SA20-0006

function noCursor(a) {
    var a = document.getElementById(a),
        b = document.createElement('input');
    b.setAttribute("style", "position: absolute; right: 101%;");
    a.parentNode.insertBefore(b, a);

    if (a.addEventListener) {
        a.addEventListener("focus", function () { b.focus() });
    } else {
        a.attachEvent("onfocus", function () { b.focus() });
        b.attachEvent("onpropertychange", function () { a.value = b.value });
    }
};

//Added by SMILEDINING-SA18-0039
function checkSizeShopNameWidth(shopNameWidth, fontSize, navbarWidth, down) {
    if (navbarWidth == 0 && shopNameWidth == 0 && fontSize == 0) {
        navbarWidth = $('.nav-bar').outerWidth() - 97;
        shopNameWidth = $('.logo-mobile .navbar-brand p span').innerWidth();
        //fontSize = $(".logo-mobile .navbar-brand p span").css('font-size').match(/\d+/) / 16;
        //fontSize = parseInt($(".logo-mobile .navbar-brand p span").css('font-size'), 10) / 16;
        fontSize = (parseInt($('.logo-mobile .navbar-brand p span').css('font-size'), 10) / 16);
    }
    var shopNameResize = $('.logo-mobile .navbar-brand p span');
    if (down) {
        //shopname fontsize Down
        if (shopNameWidth > navbarWidth) {
            fontSize = fontSize - 0.05;
            shopNameResize.css('font-size', fontSize + 'rem');
            shopNameWidth = $('.logo-mobile .navbar-brand p span').width();
            navbarWidth = $('.nav-bar').outerWidth() - 97;
            //return checkSizeShopNameWidth(shopNameWidth, fontSize, navbarWidth, down);    //Modified and End by SMILEDINING-SA19-0011
        }
        else return;
    }
    else {
        //shopname fontsize Up
        if (shopNameWidth + 10 < navbarWidth && fontSize <= 1.3) {
            fontSize = fontSize + 0.05;
            shopNameResize.css('font-size', fontSize + 'rem');
            shopNameWidth = $('.logo-mobile .navbar-brand p span').width();
            navbarWidth = $('.nav-bar').outerWidth() - 97;
            //return checkSizeShopNameWidth(shopNameWidth, fontSize, navbarWidth, down);    //Modified and End by SMILEDINING-SA19-0011
        }
        else return;
    }
};
//End Added by SMILEDINING-SA18-0039

//Added by SMILEDINING-SA19-0011
function convertFormatTime(timeData, formatTime) {    
    return moment(timeData).format(formatTime);
}

function convertFormatDate(dateData, formatDate) {
    return moment(dateData).format(formatDate);
}

function getValueWithDollar(value){
    return '$' + value;
}

function getValueWithPercent(value){
    return value + '%';
}
//End Added by SMILEDINING-SA19-0011

//Added by SMILEDINING-SA21-0018
function sortArrayInt(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    return array;
};
function fixedTwo(data) {
    var num = parseFloat(data).toFixed(2);
    return num;
};
//End Added by SMILEDINING-SA21-0018

//Added by SMILEDINING-SA21-0018#1
function enableOrDisableCheckBox(element, isDisable) {
    if (isDisable) {
        $(element).attr('disabled', true);
    } else {
        $(element).removeAttr('disabled');
    }
};
//End Added by SMILEDINING-SA21-0018#1

//Added by SMILEDINING-SA20-0006
function getObjFormAjax(jsonObj, id) {
    var objUrl = new ObjUrl(jsonObj);
    var requestUrl = objUrl.getUrlFromJson();
    var passData = JSON.parse('{"key" : "' + id + '"}');
    return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
};
//End Added by SMILEDINING-SA20-0006

//Added by SMILEDINING-SA21-0015
function closeModalWhenDupplicate() {
    $('#modalSetUpShopClose'
      + ',#modalSetUpHoliday'
      + ',#modalSetUpAutoCharge'
      + ',#modalSetUpDiscount'
      + ',#modalSetupCouponDelivery'
      + ',#modalSetUpDiscountOneTimeUse'
      + ',#modalGroupFreeFoodSetup'
      + ',#modalMainPriceSetup'
      + ',#modalConditionSetup'
      + ',#modalGroupMainFoodSetup'
      + ',#modalSetUpFoodImage' //Added and End by SMILEDINING-SA21-0028
      ).on('hidden.bs.modal', function () {
          $('body').addClass('modal-open').css({ 'padding-right': '17px' });
      });
};
//End Added by SMILEDINING-SA21-0015

//Added by SMILEDINING-SA22-0037
function getDispatchTypeDesc(globalConfig) {
    var dispatchTypeDescArr = [];
    var globalConfigFilter = ko.utils.arrayFirst(globalConfig, function (item) {
            return item.globalConfigKey == 'dispatch-type';
    });
    var globalConfigDesc = globalConfigFilter != null ? globalConfigFilter.globalConfigDesc : null;
    var globalConfigDescSplit = globalConfigDesc != null ? globalConfigDesc.split('|') : null;
    _.forEach(globalConfigDescSplit, function (item) {
        var itemSplit = item.split('=');
        dispatchTypeDescArr.push({
            id: ko.observable(itemSplit[0].trim()),
            name: ko.observable(itemSplit[1].trim())
        });
    });
    return dispatchTypeDescArr
}

//Added by WEB-SA22-0062
function positiveNumber(evt) {   
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
//End Added by WEB-SA22-0062

//End Added by SMILEDINING-SA22-0037

//Added by WEB-SA22-0066
function checkBrowserName() {
    switch (true) {
        case isEdage():
            return 'Edge';
            break;
        case isEdageChromium():
            return 'Edge';
            break;
        case isChrome():
            return 'Chrome';
            break;
        case isSafari():
            return 'Safari';
            break;
        case isFireFox():
            return 'FireFox';
            break;
        default:
            return 'Other';
            break;
    }
}

function connectMqtt(message) {
    try {
        if (isEmpty(vmViewIndex.mqttServer()) || isEmpty(vmViewIndex.mqttUser()) || isEmpty(vmViewIndex.mqttPsw()) || isEmpty(vmViewIndex.mqttClientId())) {
            var data = JSON.parse(getObjFormAjax(cJsonGetDataMqtt));
            vmViewIndex.mqttServer(data.mqttServer);
            vmViewIndex.mqttUser(data.mqttUser);
            vmViewIndex.mqttPsw(data.mqttPsw);
            vmViewIndex.mqttClientId(vmViewIndex.globalConfig.shopCode() + '/' + checkBrowserName() + '/' + parseInt(Math.random() * 100, 10));
        }
        if (!isEmpty(vmViewIndex.mqttServer()) && !isEmpty(vmViewIndex.mqttUser()) && !isEmpty(vmViewIndex.mqttPsw()) && !isEmpty(vmViewIndex.mqttClientId())) {
            var port = 8083;
            mqtt = new Paho.MQTT.Client(vmViewIndex.mqttServer(), Number(port), vmViewIndex.mqttClientId());
            mqtt.onConnectionLost = onConnectionLost;

            var connectOptions = {
                onSuccess: onConnect,
                onFailure: onFailure,
                useSSL: true,
                userName: vmViewIndex.mqttUser(),
                password: vmViewIndex.mqttPsw(),
            };
            mqtt.connect(connectOptions);

            function onConnect() {
                if (!isEmpty(message))
                    mqtt.send(message);
            }

            function onFailure() {
                setTimeout(function () {
                    if (!mqtt.isConnected())
                        connectMqtt(message);
                }, reconnectTimeoutMqtt);
            }

            function onConnectionLost(responseObject) {
                if (responseObject.errorCode !== 0) {
                    console.log("onConnectionLost:" + responseObject.errorMessage);
                }
                setTimeout(function () {
                    if (!mqtt.isConnected())
                        connectMqtt(message);
                }, reconnectTimeoutMqtt);
            }
        }
    } catch (e) {
        console.log('Exception : ' + e.message);
    }
}

function sendMqtt(data, topic) {
    //var message = new Paho.MQTT.Message(createJsonMqtt(data)); //Modified and End by WEB-SA23-0001#2
    //Added by WEB-SA23-0001#2
    var isFoodChoiceMap = topic.includes('foodChoiceMap');
    var message = new Paho.MQTT.Message(isFoodChoiceMap ? data : createJsonMqtt(data));
    //End Added by WEB-SA23-0001#2
    message.destinationName = topic;
    message.qos = 1;
    //message.retained = true; // Modified and End by WEB-SA22-0072
    message.retained = false; // Added and End by WEB-SA22-0072
    if (mqtt.isConnected())
        mqtt.send(message);
    else
        setTimeout(function () { connectMqtt(message); }, reconnectTimeoutMqtt);
}

function createJsonMqtt(data) {
    var jsonDataList = [];
    if (data.length > 0) {
        _.forEach(data, function (val) {
            jsonDataList.push(JSON.stringify(val));
        });
    }
    //Added by WEB-SA22-0072
    //else { //Modified and End by WEB-SA23-0001#6
    else if (!isEmpty(data)) { //Added and End by WEB-SA23-0001#6
        jsonDataList.push(JSON.stringify(data));
    }
    //End Added by WEB-SA22-0072
    var results = {
        result: {
            product: 'owner',
            values: jsonDataList
        },
        message: vmViewIndex.mqttClientId(),
        status: 1
    }
    return JSON.stringify(results);
}
//End Added by WEB-SA22-0066

//Added by WEB-SA23-0001#2
function createJsonMqttFoodChoiceMap(data, foodIds) {
    var jsonDataList = [];
    if (data.length > 0) {
        _.forEach(data, function (val) {
            jsonDataList.push(JSON.stringify(val));
        });
    }
    else if (!isEmpty(data)) {
        jsonDataList.push(JSON.stringify(data));
    }
    var results = {
        result: {
            product: 'owner',
            //Added by WEB-SA23-0001#3
            values: {
                foodIds: foodIds,
                foodChoiceMap: jsonDataList,
            },
            //End Added by WEB-SA23-0001#3
            //Modified by WEB-SA23-0001#3
            //foodIds: foodIds,
            //values: jsonDataList
            //End Modified by WEB-SA23-0001#3
        },
        message: vmViewIndex.mqttClientId(),
        status: 1
    }
    return JSON.stringify(results);
}
//End Added by WEB-SA23-0001#2

//Added by WEB-SA23-0001
function checkMqttConnection(formId, status) {
    var isConnected = true;
    vmViewIndex.isKiosk(false);
    if (!vmViewIndex.allSetting.productIds().includes(products.cSmileContactless))
        return true;
    switch (formId) {
        case cfrmFoodSetSetup:
            if (status == statusAdd) {
                vmViewIndex.isKiosk(vmViewIndex.menu.dataSetupFoodSetModal.active() && !vmViewIndex.menu.dataSetupFoodSetModal.isThirdParty());
            } else {
                var foodFilter = ko.utils.arrayFirst(vmViewIndex.menu.food(), function (item) {
                    return item.foodSetId() == vmViewIndex.menu.dataSetupFoodSetModal.foodSetId() && item.active() && item.productId().includes(products.cSmileContactless);
                });
                vmViewIndex.isKiosk(!isEmpty(foodFilter));
            }
            if (vmViewIndex.isKiosk())
                isConnected = mqtt.isConnected();
            break;
        case cFoodSetUpdateDragging:
            if (!isEmpty(vmViewIndex.menu.tempDataDragging())) {
                var foodFilter = ko.utils.arrayFirst(vmViewIndex.menu.food(), function (item) {
                    var isFoodKiosk = false;
                    ko.utils.arrayForEach(vmViewIndex.menu.tempDataDragging(), function (foodSet) {
                        if (item.foodSetId() == foodSet.foodSetId() && item.active() && item.productId().includes(products.cSmileContactless))
                            isFoodKiosk = true;
                    });
                    return isFoodKiosk;
                });
                vmViewIndex.isKiosk(!isEmpty(foodFilter));
                if (vmViewIndex.isKiosk())
                    isConnected = mqtt.isConnected();
            }
            break;
        case cfrmFoodImageSetup:
        case cfrmFoodSetup:
            if (status == statusAdd) {
                vmViewIndex.isKiosk(vmViewIndex.menu.dataSetupFoodModal.active() && vmViewIndex.menu.dataSetupFoodModal.productId().includes(products.cSmileContactless));
            } else {
                var foodFilter = ko.utils.arrayFirst(vmViewIndex.menu.food(), function (item) {
                    return item.foodId() == vmViewIndex.menu.dataSetupFoodModal.foodId() && item.productId().includes(products.cSmileContactless) && (item.active() || item.active() != vmViewIndex.menu.dataSetupFoodModal.active());
                });
                vmViewIndex.isKiosk(!isEmpty(foodFilter) || (vmViewIndex.menu.dataSetupFoodModal.active() && vmViewIndex.menu.dataSetupFoodModal.productId().includes(products.cSmileContactless)));
            }
            if (vmViewIndex.isKiosk())
                isConnected = mqtt.isConnected();
            break;
        case cFoodUpdateDragging:
            if (!isEmpty(vmViewIndex.menu.tempDataDragging())) {
                var foodFilter = ko.utils.arrayFirst(vmViewIndex.menu.tempDataDragging(), function (item) {
                    return item.productId().includes(products.cSmileContactless) && item.active();
                });
                vmViewIndex.isKiosk(!isEmpty(foodFilter));
                if (vmViewIndex.isKiosk())
                    isConnected = mqtt.isConnected();
            }
            break;
        case cfrmChangeImage:
            var foodFilter = ko.utils.arrayFirst(vmViewIndex.menu.food(), function (item) {
                return item.foodId() == vmViewIndex.menu.foodIdImage() && item.productId().includes(products.cSmileContactless) && item.active();
            });
            vmViewIndex.isKiosk(!isEmpty(foodFilter));
            if (vmViewIndex.isKiosk())
                isConnected = mqtt.isConnected();
            break;
        case cfrmAddCopyFood:
        case cfrmFoodCategorySetup:
        case cFoodCategoryUpdateDragging:
        case cDisableFoodCategory:
        case cfrmChoiceOptionSetUp:
        case cChoiceOptionUpDateSortable:
        case cfrmChoiceSetUp:
        case cfrmLinkToFood: //Added and End by WEB-SA23-0001#2
        case cChoiceUpDateSortable:
        case cfrmCopyChoice:
        case cfrmTaxRateSetUp:
        case cfrmGraguityChargeSetup:
            vmViewIndex.isKiosk(true);
            isConnected = mqtt.isConnected();
            break;
        case cfrmUpdateRestaurant:
        case cfrmShopClose:
        case cfrmDeleteShopClose:
        case cfrmUpdateMenuSetting:
        case cfrmUpdateSetting:
        case cfrmInstructionLinkToFoodUpdate:
        case cfrmUpdateSetTimeMenu:
        case cfrmAutoCharge:
        case cfrmDiscount:
        case cfrmGraguityCharge:
        case cfrmPaymentFee:
        case cfrmPromotionGroupFreeFood:
        case cfrmPromotionMainPrice:
        case cfrmPromotionGroupMainFood:
        case cfrmPromotionCondition:
            vmViewIndex.isKiosk(!vmViewIndex.allSetting.isSmileDining());
            if (vmViewIndex.isKiosk()) 
                isConnected = mqtt.isConnected();
            break;
        case cJsonUpdateGlobalConfig:
            isConnected = mqtt.isConnected();
            break;
    }
    return isConnected;
};

function getTopicMqtt(name) {
    return vmViewIndex.globalConfig.shopCode() + cTopicTable + name;
};
//End Added by WEB-SA23-0001

//Added by WEB-SA23-0026#1
function checkUpdateThirdParty(frmName, result) {
    if (!vmViewIndex.allSetting.productIds().includes(products.cSmileThirdPartyIntegrations)) {
        vmViewIndex.isUpdateThirdParty(false);
        return;
    }

    //Modified by WEB-SA23-0026#2
    //var item = !isEmpty(result.obj) ? JSON.parse(result.obj) : null;
    //var val = !isEmpty(result.txtValue) ? result.txtValue : null;
    //End Modified by WEB-SA23-0026#2
    switch (frmName) {
        case cfrmFoodSetSetup:
            //Added by WEB-SA23-0026#2
            var item = !isEmpty(result.obj) ? JSON.parse(result.obj) : null;
            var val = !isEmpty(result.txtValue) ? result.txtValue : null;
            //End Added by WEB-SA23-0026#2
            if (!isEmpty(item) && !vmViewIndex.isUpdateThirdParty()) {
                if (val == statusAdd) {
                    vmViewIndex.isUpdateThirdParty(item.isThirdParty);
                } else {
                    var foodSetThirdParty = _.find(item.listFoodSet, function (foodSet) {
                        return foodSet.isThirdParty;
                    });
                    vmViewIndex.isUpdateThirdParty(!isEmpty(foodSetThirdParty));
                }
            }
            break;
        case cfrmFoodCategorySetup:
        case cDisableFoodCategory:
            var item = !isEmpty(result.obj) ? JSON.parse(result.obj) : null; //Added and End by WEB-SA23-0026#2
            if (!isEmpty(item) && !vmViewIndex.isUpdateThirdParty()) {
                ko.utils.arrayFirst(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
                    if (itemFoodSet.isThirdParty()) {
                        var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
                            return (itemFood.foodCatId() == item.foodCatId) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
                        });

                        if (!isEmpty(filterFood)) {
                            vmViewIndex.isUpdateThirdParty(true);
                            return true;
                        }
                    }
                    return false;
                });
            }
            break;
        case cfrmFoodSetup:
        case cfrmFoodImageSetup:        
        case cfrmChangeImage:
            var item = !isEmpty(result.obj) ? JSON.parse(result.obj) : null; //Added and End by WEB-SA23-0026#2
            if (!isEmpty(item) && !vmViewIndex.isUpdateThirdParty()) { 
                vmViewIndex.isUpdateThirdParty(item.productId.includes(products.cSmileThirdPartyIntegrations));
            }
            break;
        case cfrmAddCopyFood:
            var item = !isEmpty(result.obj) ? JSON.parse(result.obj) : null; //Added and End by WEB-SA23-0026#2
            if (!isEmpty(item) && !vmViewIndex.isUpdateThirdParty()) { 
                var foodThirdParty = _.find(item.listFood, function (food) {
                    return food.productId.includes(products.cSmileThirdPartyIntegrations);
                });
                vmViewIndex.isUpdateThirdParty(!isEmpty(foodThirdParty));
            }
            break;
        case cfrmChoiceOptionSetUp:
        case cChoiceOptionUpDateSortable:
        case cfrmChoiceSetUp:
        case cfrmLinkToFood:
        case cChoiceUpDateSortable:
        case cfrmCopyChoice:
        case cfrmTaxRateSetUp:
        case cfrmRevenueClassSetUp:
            var item = !isEmpty(result.obj) ? JSON.parse(result.obj) : null; //Added and End by WEB-SA23-0026#2
            if (!isEmpty(item) && !vmViewIndex.isUpdateThirdParty()) { 
                vmViewIndex.isUpdateThirdParty(true);
            }
            break;
    }
    return;
}

function checkSyncProductAuto() {
    return vmViewIndex.globalConfig.autoSyncProduct() && vmViewIndex.tabSyncProduct() && vmViewIndex.isUpdateThirdParty();
};
//End Added by WEB-SA23-0026#1

//Added by WEB-SA23-0026
function syncProductAuto(isAsync) {
    var objUrl = new ObjUrl(cJsonGetSyncProduct);
    var requestUrl = objUrl.getUrlFromJson();
    $.ajax({
        url: requestUrl,
        async: isAsync,
        cache: ajax_cache,
        type: ajax_type_post,
        data: null,
        timeout: ajax_timeout,
    })
    .done(function (result) {
        vmViewIndex.showLoading(false);
        vmViewIndex.isUpdateThirdParty(false); //Added and End by WEB-SA23-0026#1
    })
    .fail(function (result) {
        vmViewIndex.showLoading(false);
        vmViewIndex.isUpdateThirdParty(false); //Added and End by WEB-SA23-0026#1
    });
};
//End Added by WEB-SA23-0026

//Modified by SMILEDINING-SA21-0028#3
////Added by SMILEDINING-SA21-0028
//function imageExists(image_url) {
//    //image_url = 'https://localhost:44337/' + image_url;
//    var http = new XMLHttpRequest();
//    http.open('HEAD', image_url, false);
//    http.send();
//    return http.status == 200;
//}
////End Added by SMILEDINING-SA21-0028
//End Modified by SMILEDINING-SA21-0028#3