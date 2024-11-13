/*
    SMILEDINING-SA18-0003      01/12/2018      Customize        1. Holiday, AutoCharge, Special instructions.
    SMILEDINING-SA18-0031      09/27/2018      Customize        1. Create function CopyChoice
    SMILEDINING-SA19-0005      03/25/2019      Customize        1. Gennerate sql script for create table 'tbdeliveryfreetime'
                                                                2. Add Delivery Free Time UI for Draw Maps and Set Mile at MySetting menu
                                                                3. Delivery Free Time can separate date between Zone1, Zone2 and Zone3
                                                                4. Control delivery charge of SmileDining depending on Shop map code and Zone of delivery
    SMILEDINING-SA19-0008      04/19/2019      Customize        1. Create Table tbcoupondelivery.
                                                                2. Create UI on My Setting menu at WebOwner.
                                                                3. Assign total usable coupon option.
                                                                4. Assign minimum order option.
                                                                5. Assign discount delivery charge option.
                                                                6. Assign start and end date for available coupon.
                                                                7. Check and Calculate delivery charge and tax when order food.
    SMILEDINING-SA19-0011      09/03/2019      Customize        1. E-Gift Card.
    SMILEDINING-SA20-0007      07/07/2020      Customize        1. New feature Gift Card.
    SMILEDINING-SA20-0006      06/23/2020      Customize        1. Add checkbox Smile Contactless Dining on Menu Setup and update ProductID in database when update,add,copy food 
                                                                2. Add filter Product on Menu Setup
    SMILEDINING-SA20-0018      01/09/2020      Customize        1. Edit Config Setup for Choice Group,Choice Option,Choice Modify and Add Gratuity Charge.
                                                                2. Add Setting Gratuity Charge to My Setting.
    SMILEDINING-SA20-0016      21/10/2020      Customize        1. Promotion free food.
    SMILEDINING-SA20-0043      15/12/2017      Customize        1. Custom map zone mile price.
    SMILEDINING-SA20-0031      02/12/2020      Customize        1. Adjust shop close period date and time.
    SMILEDINING-SA20-0031#3    04/01/2021      Customize        1. Modified shopclose model.
    SMILEDINING-SA20-0043#2    06/01/2021      Customize        1. Add validate before save mapZoneMile.
    SMILEDINING-SA21-0001      08/01/2021      Customize        1. Setting Choice New Line.
    SMILEDINING-SA21-0006      12/02/2021      Customize        1. Add eGift card to SmileDining.
    SMILEDINING-SA21-0014      08/03/2021      Customize        1. Add new product 'Smile Third Party Integrations' used Deliverect.
    SMILEDINING-SA20-0048      28/12/2020      Customize        1. Discount code one time use.
    SMILEDINING-SA20-0048#1    19/03/2021      Customize        1. Modified excel file DiscountOneTimeUse. 
    SMILEDINING-SA21-0018      21/05/2021      Customize        1. Setting food detail by third party to deliverect.
    SMILEDINING-SA21-0018#1    24/05/2021      Customize        1. Edit third party integration.
    SMILEDINING-SA21-0018#2    27/05/2021      Customize        1. Fixed bug setting Third Party Integrations.
    SMILEDINING-SA21-0018#3    28/05/2021      Customize        1. Fixed bug save choice and save image.
    SMILEDINING-SA21-0018#6    01/06/2021      Customize        1. Fix bug update thirdParty.
    SMILEDINING-SA21-0021      11/06/2021      Customize        1. Setting icon image for show in smileDining.
    SMILEDINING-SA21-0018#8    08/07/2021      Customize        1. Fixed bug select foodset and update food sorting.
    SMILEDINING-SA21-0028      30/07/2021      Customize        1. Edit UI Smile Dining and Contactless (Layout P2) and  edit webOwner can upload food Image for Desktop and Mobile. 
    SMILEDINING-SA21-0060      23/09/2021      Customize        1. Fix bug Menu Setup when move FoodSet or FoodCat for change sorting.
                                                                2. Fix bug Menu Setup when click FoodSet and show invalid data.
                                                                3. Fix bug Menu Setup when click collapse FoodCat and collapse invalid data.
    SMILEDINING-SA21-0063      07/10/2021      Customize        1. Add menu Marketing on web owner and Add menu Log on web support.
    SMILEDINING-SA22-0005#2    21/02/2022      Customize        1. Fix bug add and edit delivery free time in webowner.
    SMILEDINING-SA21-0066#20   25/02/2022      Customize        1. Fix bug food imageThirdparty when edit image for food in WebOwner.
    SMILEDINING-SA21-0066#24   15/03/2022      Customize        1. Add unlock food, choice and choiceOption from Deliverect in webOwner.
    SMILEDINING-SA21-0066#25   31/03/2022      Customize        1. Fix bug unlock choice and choiceOption in WebOwner.
    SMILEDINING-SA22-0013#5    30/05/2022      Customize        1. Edit format print delivery billing.
    SMILEDINING-SA22-0020      14/06/2022      Customize        1. Add new charge name 'Payment Fee' apply to order online.
    SMILEDINING-SA22-0033      25/08/2022      Customize        1. Add amount deposit and email customer for delivery billing in WebSupport and WebOwner.
    WEB-SA22-0045              29/09/2022      Customize        1. Fix bug choice and choiceOption sorting duplicate in webOwner.
    WEB-SA23-0007              24/01/2023      Customize        1. Fix bug discount code duplicate and max length discount name in webOwner.
    WEB-SA23-0041              27/07/2023      Customize        1. New feature member discount on webDining, webOwner.
    WEB-SA23-0045              23/08/2023      Customize        1. Add setting discount time on webOwner, webDining, webOnTable.
    WEB-SA23-0048              11/09/2023      Customize        1. Add setting Otter on webOwner, webSupport.
    WEB-SA23-0048#5            24/10/2023      Customize        1. Fix bug filter menu on webOwner.
    WEB-SA23-0048#13           05/02/2024      Customize        1. Fix bug food update and adjust rate limit for API Otter on webOwner.
    WEB-SA24-0012              22/04/2024      Customize        1. New requriement - Add setting promotion "Day Of Week" on webOwner, webDining, webOnTable.
                                                                2. Fix bug promotion shippping type and maximum uses on webOwner, webDining, webOnTable.
                                                                3. Fix bug clear discount code when don't use on webDining.
*/
/*
 * Event Click to change page render by sammy action (can use sammy to hide Container page)
 */

function Event() {
    var self = this;

    self.enableIndex = function () {
        $('.side-nav-memu').css('z-index', '1');
        $('.card ').css('z-index', '-1');
        $('.card-menu').css('z-index', '1');
        $('.panel-cart').css('z-index', '2');
    };

    self.disableIndex = function () {
        $('.side-nav-memu').css('z-index', '-1');
        $('.card ').css('z-index', '1');
        $('.card-menu').css('z-index', '1');
        $('.panel-cart').css('z-index', '2');
    };

    self.clickTabConfig = function (data, event) {
        if (vmViewIndex.configSetUp.chkDrag() == true && vmViewIndex.configSetUp.chkSave() == false) {
            swal(setupAlert).then(function () {
                var selfChoiceOption = vmViewIndex.configSetUp.choiceOption;
                undoDragging(selfChoiceOption);
                $('#gridChoiceOption').dxDataGrid('instance').refresh();
                var selfChoice = vmViewIndex.configSetUp.choice;
                undoDragging(selfChoice);
                $('#gridChoice').dxDataGrid('instance').refresh();
                //Added by SMILEDINING-SA20-0018
                //var selfChoiceModify = vmViewIndex.configSetUp.choice;
                var selfChoiceModify = vmViewIndex.configSetUp.choiceModify;
                undoDragging(selfChoiceModify);
                $('#gridChoiceModify').dxDataGrid('instance').refresh();
                var selfFoodPrefix = vmViewIndex.configSetUp.foodPrefix;
                undoDragging(selfFoodPrefix);
                $('#gridFoodPrefix').dxDataGrid('instance').refresh();
                //End Added by SMILEDINING-SA20-0018
                vmViewIndex.configSetUp.chkDrag(false);

                var index = $(event.target).data('id');
                $('.tab-config').find('label').removeClass('theme default-background-color-dark force');
                setTab(data, event, index);
                setVisibleCart(index);  //Added and End by SMILEDINING-SA20-0018
            });
        } else {
            var index = $(event.target).data('id');
            $('.tab-config').find('label').removeClass('theme default-background-color-dark force');
            setTab(data, event, index);
            setVisibleCart(index);      //Added and End by SMILEDINING-SA20-0018
        }
    };
    //Added by SMILEDINING-SA21-0063
    self.clickTabMarketing = function (data, event) {
        var index = $(event.target).data('id');
        $('.tab-Marketing').find('label').removeClass('theme default-background-color-dark force');
        setTab(data, event, index);
        setVisibleCart(index);
    };
    //End Added by SMILEDINING-SA21-0063


    self.clickTabMySetting = function (data, event) {
        var index = $(event.target).data('id');
        vmViewIndex.allSetting.tabSettingIndexClick(index);
        $('.tab-mysetting').find('label').removeClass('theme default-background-color-dark force');
        setTab(data, event, index);
    };

    //Added by SMILEDINING-SA20-0048
    self.clickTabDiscountFile = function (data, event) {
        var index = $(event.target).data('id');
        $('.tab-discountfile').find('label').removeClass('theme default-background-color-dark force');
        $(event.target).next('label').addClass('theme default-background-color-dark force');
        $('.owner-tabs-wrapper').find('.tab-discount-body').each(function () {
            if ($(this).data('id') == index) {
                $(this).css('opacity', 1);
                $(this).css('position', 'relative');
                $(this).show();
            } else {
                $(this).css('opacity', 0);
                $(this).css('position', 'absolute');
                $(this).hide();
            }
        });
    };
    //End Added by SMILEDINING-SA20-0048

    self.clickFoodSet = function (data, event) {
        if (vmViewIndex.menu.chkDrag() == true && vmViewIndex.menu.chkSave() == false) {
            swal(setupAlert).then(function () {
                vmViewIndex.menu.chkDrag(false);
                vmViewIndex.menu.tempDataDragging([]);
                vmViewIndex.menu.tempItemDragging([]);

                $(".foodSetDrag").sortable("enable");
                $(".foodCatDrag").sortable("enable");
                $(".foodDrag").sortable("enable");

                var index = $(event.target).data('id');
                $('.touch-slide').find('label').removeClass('theme default-background-color-dark force');
                setTab(data, event, index);
            });
        } else {
            var index = $(event.target).data('id');
            $('.touch-slide').find('label').removeClass('theme default-background-color-dark force');
            setTab(data, event, index);
        }
    };

    self.clickFoodCategory = function (data, event) {
        //var id = '#' + data.foodSet.foodSetSorting() + '_' + data.foodCategory.foodCatSorting(); //Modified and End by SMILEDINING-SA21-0060
        //Added by SMILEDINING-SA21-0060
        var context = ko.contextFor(event.target);
        var index = context.$index();
        var id = '#' + data.foodSet.foodSetSorting() + '_' + data.foodCategory.foodCatSorting() + '_' + index;
        //End Added by SMILEDINING-SA21-0060
        var collapse = $(id).attr('class');
        if (collapse === 'collapse') {
            $(id).collapse('show');
            $(document).find(id).addClass('show');
            $(event.target).parent().find('.fa-arrow-down').addClass('gb_hidden');
            $(event.target).parent().find('.fa-arrow-up').removeClass('gb_hidden');
        } else {
            $(id).collapse('hide');
            $(event.target).parent().find('.fa-arrow-up').addClass('gb_hidden');
            $(event.target).parent().find('.fa-arrow-down').removeClass('gb_hidden');
        }
    };

    ko.bindingHandlers.foodSetDrag = {
        init: function (element, valueAccessor) {
            initMenuDragging(element, 'foodSetDrag', 'span', 'foodSet', 'foodSetId', 'foodSetSorting', vmViewIndex.menu.dataMenu, vmViewIndex.menu.tempDataDragging, vmViewIndex.menu.tempItemDragging);
        }
    };

    ko.bindingHandlers.foodCatDrag = {
        init: function (element, valueAccessor) {
            initMenuDragging(element, 'foodCatDrag', 'span', 'foodCategory', 'foodCatId', 'foodCatSorting', vmViewIndex.menu.dataMenu, vmViewIndex.menu.tempDataDragging, vmViewIndex.menu.tempItemDragging);
        }
    };

    ko.bindingHandlers.foodDrag = {
        init: function (element, valueAccessor) {
            initMenuDragging(element, 'foodDrag', 'div', 'food', 'foodId', 'foodSorting', vmViewIndex.menu.dataMenu, vmViewIndex.menu.tempDataDragging, vmViewIndex.menu.tempItemDragging);
        }
    };

    //Added by SMILEDINING-SA19-0011
    ko.bindingHandlers.giftCardSlick = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).empty();
            var giftCardImage = ko.unwrap(viewModel.giftCard.giftCardImageStorage());
            var values = ko.unwrap(valueAccessor());
            var imageIndex = 0;
            var valueSorting = '';

            if (values.length > 0) {
                values.forEach(function (item) {
                    if (viewModel.giftCard.giftCardValueSorting().length > 0) {
                        var giftCerValue = _.find(viewModel.giftCard.giftCardValueSorting(), function (o) {
                            return o.giftCerValueId == item.giftCerValueId();
                        });
                        if (giftCerValue != undefined) {
                            item.sorting(giftCerValue.sorting);
                        }
                    }
                });
                valueSorting = _.sortBy(values, function (o) {
                    return o.sorting();
                });
            }

            if (valueSorting.length > 0) {
                valueSorting.forEach(function (item) {
                    $(element).attr('class', 'center-slick slider');
                    var div = $('<div>');
                    var cardName = $('<span>');
                    cardName.attr('class', 'card-name text-truncate');
                    cardName.append(item.giftCerValueName());
                    div.append(cardName);

                    div.attr('onclick', 'onClickGiftCardForDetail(' + ko.toJSON(item) + ' , event)');
                    div.attr('class', 'card card-giftcard');

                    if (!item.active()) {
                        var inactive = $('<span>');
                        inactive.attr('class', 'txt-inactive-detail');
                        inactive.append('Inactive');
                        div.append(inactive);
                        div.css('opacity', '0.8');
                    }

                    div.attr('id', item.giftCerValueId());

                    var image = $('<img>');

                    if (giftCardImage.length > 0) {
                        image.attr('src', giftCardImage[imageIndex].giftCerImagesName());
                        div.append(image);
                        imageIndex++;

                        if (imageIndex >= giftCardImage.length) imageIndex = 0;
                    }
                    else {
                        image.attr('src', cDummyImage);
                        div.append(image);
                    }

                    var cardGetAmount = $('<span>');
                    cardGetAmount.attr('class', 'card-getamount');

                    if (item.getAsPay())
                        cardGetAmount.append('custom discount');
                    else
                        cardGetAmount.append('$' + item.getAmount());

                    div.append(cardGetAmount);

                    $(element).append(div);
                });

                //$('.center-slick').slick({
                //    centerMode: false,
                //    centerPadding: '60px',
                //    infinite: false,
                //    slidesToShow: 3,
                //    accessibility: true,
                //    variableWidth: true,
                //    arrows: true,
                //    responsive: [
                //    {
                //        breakpoint: 480,
                //        settings: {
                //            centerMode: false,
                //            infinite: true,
                //            centerPadding: '40px',
                //            arrows: false,
                //            slidesToShow: 1
                //        }
                //    }
                //    ]
                //});

                $('.center-slick').slick({
                    arrows: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    mobileFirst: true,
                });

                $(function () {
                    var startPosition;

                    $('*[sortable!=true]', '.slick-track').unbind('sortstart');

                    $('.slick-track').sortable({
                        cursor: 'move',
                        forcePlaceholderSize: false,
                        opacity: 0.4,
                        start: function (event, ui) {
                            ui.item.toggleClass('slick-highlight');
                            startPosition = ui.item.index();
                        },
                        change: function (event, ui) {
                            ui.placeholder.toggleClass('slick-placeholder');
                        },
                        update: function (event, ui) {
                            vmViewIndex.giftCard.addGiftCard.slickMove(true);
                        },
                        stop: function (event, ui) {
                            ui.item.toggleClass('slick-highlight');
                            var endPosition = ui.item.index();
                            if (startPosition < endPosition) {
                                var tmp = vmViewIndex.giftCard.giftCardValueSorting()[startPosition];
                                for (i = startPosition; i < endPosition ; i++) {
                                    vmViewIndex.giftCard.giftCardValueSorting()[i] = vmViewIndex.giftCard.giftCardValueSorting()[i + 1];
                                    vmViewIndex.giftCard.giftCardValueSorting()[i].sorting = i + 1;
                                }

                                vmViewIndex.giftCard.giftCardValueSorting()[endPosition] = tmp;
                                vmViewIndex.giftCard.giftCardValueSorting()[endPosition].sorting = endPosition + 1;
                            }
                            else if (startPosition > endPosition) {
                                var tmp = vmViewIndex.giftCard.giftCardValueSorting()[startPosition];
                                for (i = startPosition; i > endPosition ; i--) {
                                    vmViewIndex.giftCard.giftCardValueSorting()[i] = vmViewIndex.giftCard.giftCardValueSorting()[i - 1];
                                    vmViewIndex.giftCard.giftCardValueSorting()[i].sorting = i + 1;
                                }
                                vmViewIndex.giftCard.giftCardValueSorting()[endPosition] = tmp;
                                vmViewIndex.giftCard.giftCardValueSorting()[endPosition].sorting = endPosition + 1;
                            }
                        }

                    });

                });

            }
        }
    };

    ko.bindingHandlers.giftCardGuidelineSlick = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).empty();
            var giftCardImage = ko.unwrap(viewModel.giftCard.showGuideLine.giftCardImageData());
            var values = ko.unwrap(valueAccessor());
            var imageIndex = 0;
            var valueSorting = '';

            if (values.length > 0) {
                values.forEach(function (item) {
                    if (viewModel.giftCard.showGuideLine.giftCardValueDataSorting().length > 0) {
                        var giftCerValue = _.find(viewModel.giftCard.showGuideLine.giftCardValueDataSorting(), function (o) {
                            return o.giftCerValueId == item.giftCerValueId();
                        });
                        if (giftCerValue != undefined) {
                            item.sorting(giftCerValue.sorting);
                        }
                    }
                });
                valueSorting = _.sortBy(values, function (o) {
                    return o.sorting();
                });
            }

            if (valueSorting.length > 0) {
                valueSorting.forEach(function (item) {
                    $(element).attr('class', 'center-slick slider');
                    var div = $('<div>');

                    var cardName = $('<span>');
                    cardName.attr('class', 'card-name text-truncate');
                    //cardName.append(item.giftCerValueName() + ' - ' + item.sorting());
                    cardName.append(item.giftCerValueName());
                    div.append(cardName);

                    div.attr('onclick', 'onClickGiftCardGuideLineForDetail(' + ko.toJSON(item) + ' , event)');
                    div.attr('class', 'card card-giftcard');
                    if (!item.active()) {
                        var inactive = $('<span>');
                        inactive.attr('class', 'txt-inactive-detail');
                        inactive.append('Inactive');
                        div.append(inactive);
                        div.css('opacity', '0.8');
                    }

                    div.attr('id', item.giftCerValueId());

                    var image = $('<img>');

                    if (giftCardImage.length > 0) {
                        image.attr('src', giftCardImage[imageIndex].giftCerImagesName());
                        div.append(image);
                        imageIndex++;

                        if (imageIndex >= giftCardImage.length) imageIndex = 0;
                    }
                    else {
                        image.attr('src', cDummyImage);
                        div.append(image);
                    }

                    var cardGetAmount = $('<span>');
                    cardGetAmount.attr('class', 'card-getamount');

                    if (item.getAsPay())
                        cardGetAmount.append('custom');
                    else
                        cardGetAmount.append('$' + item.getAmount());


                    div.append(cardGetAmount);

                    $(element).append(div);
                });

                //    $('.center-slick').slick({
                //        centerMode: false,
                //        centerPadding: '60px',
                //        infinite: false,
                //        slidesToShow: 3,
                //        accessibility: true,
                //        variableWidth: true,
                //        variableHeight: true,
                //        arrows: true,
                //        responsive: [
                //         {
                //             breakpoint: 480,
                //             settings: {
                //                 centerMode: false,
                //                 infinite: true,
                //                 centerPadding: '40px',
                //                 arrows: false,
                //                 slidesToShow: 1
                //             }
                //         }
                //        ]
                //    });

                $('.center-slick').slick({
                    arrows: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    accessibility: true,
                    variableWidth: true,
                    variableHeight: true,
                    mobileFirst: true,
                });

            }

            $(function () {
                var startPosition;

                $('*[sortable!=true]', '.slick-track').unbind('sortstart');

                $('.slick-track').sortable({
                    cursor: 'move',
                    forcePlaceholderSize: false,
                    opacity: 0.4,
                    start: function (event, ui) {
                        ui.item.toggleClass('slick-highlight');
                        startPosition = ui.item.index();
                    },
                    update: function (event, ui) {

                    },
                    change: function (event, ui) {
                        ui.placeholder.toggleClass('slick-placeholder');
                    },
                    stop: function (event, ui) {
                        ui.item.toggleClass('slick-highlight');
                        var endPosition = ui.item.index();
                        if (startPosition < endPosition) {
                            var tmp = vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[startPosition];
                            for (i = startPosition; i < endPosition ; i++) {
                                vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[i] = vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[i + 1];
                                vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[i].sorting = i + 1;
                            }
                            vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[endPosition] = tmp;
                            vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[endPosition].sorting = endPosition + 1;
                        }
                        else if (startPosition > endPosition) {
                            var tmp = vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[startPosition];
                            for (i = startPosition; i > endPosition ; i--) {
                                vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[i] = vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[i - 1];
                                vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[i].sorting = i + 1;
                            }
                            vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[endPosition] = tmp;
                            vmViewIndex.giftCard.showGuideLine.giftCardValueDataSorting()[endPosition].sorting = endPosition + 1;
                        }
                    }
                });
            });

        }
    };

    ko.bindingHandlers.giftCardImageDrag = {
        init: function (element, valueAccessor) {
            initGiftCardImageDragging(element);
        }
    };

    ko.bindingHandlers.giftCardImageDragDrop = {
        init: function (element, valueAccessor) {
            initGiftCardImageDragDrop(element, valueAccessor);
        }
    };

    self.clickGiftCardValueTab = function (data, event) {
        var index = $(event.target).data('id');
        $('.tab-GiftCard').find('label').removeClass('theme default-background-color-dark force');
        setTab(data, event, index);
    };

    self.clickGiftCardImageTab = function (data, event) {
        var index = $(event.target).data('id');
        $('.tab-GiftCard').find('label').removeClass('theme default-background-color-dark force');
        setTab(data, event, index);
    };

    self.clickGiftCardGuideTab = function (data, event) {
        var index = $(event.target).data('id');
        $('.tab-GiftCard').find('label').removeClass('theme default-background-color-dark force');
        setTab(data, event, index);
    };
    //End Added by SMILEDINING-SA19-0011
    //Added by SMILEDINING-SA21-0006
    self.clickGiftCardSettingTab = function (data, event) {
        var index = $(event.target).data('id');
        $('.tab-GiftCard').find('label').removeClass('theme default-background-color-dark force');
        setTab(data, event, index);
    };
    //End Added by SMILEDINING-SA21-0006
    //Added by SMILEDINING-SA20-0016
    self.isMainPrice = ko.observable(false);
    self.isMainFood = ko.observable(false);
    self.clickCondition = function (data, event) {
        var index = $(event.target).data('id');
        self.showGridSettingPromotion(self.showGridSettingPromotion() + 1);
        if (index == 1) {
            self.isMainPrice(true);
            self.isMainFood(false);
        } else {
            self.isMainPrice(false);
            self.isMainFood(true);
        }
    };
    self.showGridSettingPromotion = ko.observable(cStepFree);
    self.clickNextSettingPromotion = function (data, event) {
        self.showGridSettingPromotion(self.showGridSettingPromotion() + 1);
    };
    self.clickBackSettingPromotion = function (data, event) {
        self.showGridSettingPromotion(self.showGridSettingPromotion() - 1);
    };
    self.clickClosePromotion = function (data, event) {
        $('#modalShowSetUpPromotion').modal('hide');
        self.showGridSettingPromotion(cStepFree);
    };
    //End Added by SMILEDINING-SA20-0016
};

//Added by SMILEDINING-SA20-0018
function setVisibleCart(index) {
    if (index == cTabChoiceOptionId) {
        vmViewIndex.configSetUp.isClickTabChoiceOption(true);
        vmViewIndex.configSetUp.isClickTabChoiceModify(false);
        vmViewIndex.configSetUp.isClickTabChoice(true);
    } else if (index == cTabChoiceModifyId) {
        vmViewIndex.configSetUp.isClickTabChoiceOption(false);
        vmViewIndex.configSetUp.isClickTabChoiceModify(true);
        vmViewIndex.configSetUp.isClickTabChoice(true);
    }
    else {
        vmViewIndex.configSetUp.isClickTabChoiceOption(false);
        vmViewIndex.configSetUp.isClickTabChoiceModify(false);
        vmViewIndex.configSetUp.isClickTabChoice(false);
    }
};
//End Added by SMILEDINING-SA20-0018

//Added By SMILEDINING-SA19-0011
function SetAllGiftCardImageUpdate(item) {

    for (i = 0; i < item.length; i++) {
        var v = item[i];

        v.giftCerImagesName = cPathGiftCardImage + v.giftCerImagesName;
        var itemModel = new DataGiftCardImageViewModel(v);

        var filterImage = ko.utils.arrayFilter(vmViewIndex.giftCard.giftCardImageStorage(), function (img) {
            return (img.giftCerImagesId() == itemModel.giftCerImagesId());
        });

        vmViewIndex.giftCard.giftCardImageStorage.replace(_.first(filterImage), itemModel);
    }

    vmViewIndex.giftCard.addGiftCard.lockEdit(false);
};

function SetNewGiftCardImageAdd(item) {

    for (i = 0; i < item.length; i++) {
        var v = item[i];
        v.giftCerImagesName = cPathGiftCardImage + v.giftCerImagesName;
        var itemModel = new DataGiftCardImageViewModel(v);

        vmViewIndex.giftCard.giftCardImageStorage.push(itemModel);
    }

};

function SetDeleteGiftCardImage(item) {
    var filterImage = ko.utils.arrayFilter(vmViewIndex.giftCard.giftCardImageStorage(), function (img) {
        return (img.giftCerImagesId() == item);
    });

    vmViewIndex.giftCard.giftCardImageStorage.removeAll(filterImage);
};

function SetNewGifCardValueAdd(item, val) {
    $(cModalShowAddNewGiftCardValue).modal('hide');
    var giftCardValueViewModel = new DataGiftCardValueViewModel({
        giftCerValueId: item.giftCerValueId,
        giftCerValueName: item.giftCerValueName,
        getAmount: item.getAmount,
        payAmount: item.payAmount,
        isDiscountAmount: item.isDiscountAmount,
        isDiscountPercent: item.isDiscountPercent,
        discountAmount: item.discountAmount,
        discountPercent: item.discountPercent,
        getAsPay: item.getAsPay,
        activateOnly: item.activateOnly,
        sorting: item.sorting,
        active: item.active
    });

    if (val == statusAdd) {
        vmViewIndex.giftCard.giftCardValueStorage.push(giftCardValueViewModel);

        vmViewIndex.giftCard.giftCardValueSorting.push({
            giftCerValueId: giftCardValueViewModel.giftCerValueId(),
            sorting: giftCardValueViewModel.sorting()
        });
    }
    else {
        var filterValue = ko.utils.arrayFilter(vmViewIndex.giftCard.giftCardValueStorage(), function (value) {
            return value.giftCerValueId() == giftCardValueViewModel.giftCerValueId();
        });
        vmViewIndex.giftCard.giftCardValueStorage.replace(_.first(filterValue), giftCardValueViewModel);

        var slickId = item.giftCerValueId;
        document.getElementById(slickId).click();
        var selectDataSet = $(document.getElementById(slickId).dataset);
        var selectIndex = _.first(selectDataSet).slickIndex;
        $('.center-slick').slick('slickGoTo', selectIndex, true);
    }
};

function SetNewCustomDiscountAdd(item, val) {

    var setCustomDiscountData = new DataCustomDiscountViewModel({
        refGiftCardValueId: item.refGiftCerValueId,
        giftCerCustomDiscountId: item.giftCerCustomDiscountId,
        discountValueName: item.discountValueName,
        discountName: item.discountName,
        discountDesc: item.discountDesc,
        min: item.min,
        max: item.max,
        allDate: item.allDate,
        startDate: item.startDate,
        endDate: item.endDate,
        allTime: item.allTime,
        startTime: item.startTime,
        endTime: item.endTime,
        isCustomDiscountAmount: item.isCustomDiscountAmount,
        isCustomDiscountPercent: item.isCustomDiscountPercent,
        amountOff: item.amountOff,
        percentOff: item.percentOff,
        active: item.active,
        refGiftCerValueActive: item.refGiftCerValueActive
    });

    var filterValue = ko.utils.arrayFilter(vmViewIndex.giftCard.giftCardValueStorage(), function (value) {
        return value.giftCerValueId() == setCustomDiscountData.refGiftCardValueId();
    });

    var setGiftCardValueData = new DataGiftCardValueViewModel({
        giftCerValueId: setCustomDiscountData.refGiftCardValueId(),
        giftCerValueName: 'Custom',
        getAmount: 0,
        payAmount: 0,
        isDiscountAmount: false,
        isDiscountPercent: false,
        discountAmount: 0,
        discountPercent: 0,
        getAsPay: true,
        activateOnly: true,
        active: setCustomDiscountData.refGiftCerValueActive()
    });


    if (val == statusAdd) {

        vmViewIndex.giftCard.customDiscountStorage.push(setCustomDiscountData);

        if (filterValue.length <= 0) {

            //vmViewIndex.giftCard.giftCardValueData.push(setGiftCardValueData);
            vmViewIndex.giftCard.giftCardValueStorage.push(setGiftCardValueData);
            vmViewIndex.giftCard.addGiftCard.haveDiscountData(true)
            vmViewIndex.giftCard.addGiftCard.refGiftCardValueId(setGiftCardValueData.giftCerValueId());

        }
        else {

            vmViewIndex.giftCard.giftCardValueStorage.replace(_.first(filterValue), setGiftCardValueData);
        }

    }
    else {

        var filterDiscountValue = ko.utils.arrayFilter(vmViewIndex.giftCard.customDiscountStorage(), function (value) {
            return value.giftCerCustomDiscountId() == setCustomDiscountData.giftCerCustomDiscountId();
        });
        vmViewIndex.giftCard.customDiscountStorage.replace(_.first(filterDiscountValue), setCustomDiscountData);

        vmViewIndex.giftCard.giftCardValueStorage.replace(_.first(filterValue), setGiftCardValueData);


        var slickId = item.refGiftCerValueId;
        document.getElementById(slickId).click();
        var selectDataSet = $(document.getElementById(slickId).dataset);
        var selectIndex = _.first(selectDataSet).slickIndex;
        $('.center-slick').slick('slickGoTo', selectIndex, true);

    }

    $(cModalShowAddNewCustomDiscount).modal('hide');

};
//End Added By SMILEDINING-SA19-0011

function setTab(data, event, index) {
    $(event.target).next('label').addClass('theme default-background-color-dark force');
    $('.owner-tabs-wrapper').find('.tab-body').each(function () {
        if ($(this).data('id') == index) {
            $(this).css('opacity', 1);
            $(this).css('position', 'relative');
            $(this).show();
            if (typeof data.foodSetId != 'undefined') {
                vmViewIndex.menu.selectFoodSetId(data.foodSetId());
                vmViewIndex.menu.selectFoodSetName(data.foodSetName());
                vmViewIndex.menu.selectFoodSetActive(data.active());
                vmViewIndex.menu.selectFoodSetSorting(data.foodSetSorting());
                vmViewIndex.menu.selectFoodSetIsThirdParty(data.isThirdParty());    //Added and End by SMILEDINING-SA21-0018
                vmViewIndex.menu.selectFoodSetThirdPartyIntegProviderId(data.thirdPartyIntegrationsProviderId());    //Added and End by WEB-SA23-0048
                DataShowTimeViewModel(vmViewIndex.menu.tempDataShowTime());
            }
        } else {
            $(this).css('opacity', 0);
            $(this).css('position', 'absolute');
            $(this).hide();
        }
    });
};

//Added By SMILEDINING-SA19-0005
function afterUpdateDeliveryFreeTime(item) {

    if (item.shopMapCode == "0") // Draw Map Zone
    {
        if (item.mapZoneID == vmViewIndex.allMapZone.mapZone1Id()) {
            vmViewIndex.allMapZone.deliveryFreeTimeIdDrawMapZone1(item.deliveryFreeTimeID);
            vmViewIndex.allMapZone.mapZoneIdDrawMapZone1(item.mapZoneID);
            vmViewIndex.allMapZone.valShopMapCodeDrawMapZone1(item.shopMapCode);
            vmViewIndex.allMapZone.valStartTimeDrawMapZone1(moment(item.startTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.valEndTimeDrawMapZone1(moment(item.endTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.activeDeliveryFreeTimeDrawMapZone1(item.active);
        }
        else if (item.mapZoneID == vmViewIndex.allMapZone.mapZone2Id()) {
            vmViewIndex.allMapZone.deliveryFreeTimeIdDrawMapZone2(item.deliveryFreeTimeID);
            vmViewIndex.allMapZone.mapZoneIdDrawMapZone2(item.mapZoneID);
            vmViewIndex.allMapZone.valShopMapCodeDrawMapZone2(item.shopMapCode);
            vmViewIndex.allMapZone.valStartTimeDrawMapZone2(moment(item.startTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.valEndTimeDrawMapZone2(moment(item.endTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.activeDeliveryFreeTimeDrawMapZone2(item.active);
        }
        else if (item.mapZoneID == vmViewIndex.allMapZone.mapZone3Id()) {
            vmViewIndex.allMapZone.deliveryFreeTimeIdDrawMapZone3(item.deliveryFreeTimeID);
            vmViewIndex.allMapZone.mapZoneIdDrawMapZone3(item.mapZoneID);
            vmViewIndex.allMapZone.valShopMapCodeDrawMapZone3(item.shopMapCode);
            vmViewIndex.allMapZone.valStartTimeDrawMapZone3(moment(item.startTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.valEndTimeDrawMapZone3(moment(item.endTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.activeDeliveryFreeTimeDrawMapZone3(item.active);
        }

    }
    else if (item.shopMapCode == "1") // Set Mile Zone
    {
        if (item.mapZoneID == vmViewIndex.allMapZone.mapZone1Id()) {
            vmViewIndex.allMapZone.deliveryFreeTimeIdSetMileZone1(item.deliveryFreeTimeID);
            vmViewIndex.allMapZone.mapZoneIdSetMileZone1(item.mapZoneID);
            vmViewIndex.allMapZone.valShopMapCodeSetMileZone1(item.shopMapCode);
            vmViewIndex.allMapZone.valStartTimeSetMileZone1(moment(item.startTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.valEndTimeSetMileZone1(moment(item.endTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.activeDeliveryFreeTimeSetMileZone1(item.active);
        }
        else if (item.mapZoneID == vmViewIndex.allMapZone.mapZone2Id()) {
            vmViewIndex.allMapZone.deliveryFreeTimeIdSetMileZone2(item.deliveryFreeTimeID);
            vmViewIndex.allMapZone.mapZoneIdSetMileZone2(item.mapZoneID);
            vmViewIndex.allMapZone.valShopMapCodeSetMileZone2(item.shopMapCode);
            vmViewIndex.allMapZone.valStartTimeSetMileZone2(moment(item.startTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.valEndTimeSetMileZone2(moment(item.endTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.activeDeliveryFreeTimeSetMileZone2(item.active);
        }
        else if (item.mapZoneID == vmViewIndex.allMapZone.mapZone3Id()) {
            vmViewIndex.allMapZone.deliveryFreeTimeIdSetMileZone3(item.deliveryFreeTimeID);
            vmViewIndex.allMapZone.mapZoneIdSetMileZone3(item.mapZoneID);
            vmViewIndex.allMapZone.valShopMapCodeSetMileZone3(item.shopMapCode);
            vmViewIndex.allMapZone.valStartTimeSetMileZone3(moment(item.startTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.valEndTimeSetMileZone3(moment(item.endTime, moment_time_format_hhmmss));
            vmViewIndex.allMapZone.activeDeliveryFreeTimeSetMileZone3(item.active);
        }
    }
    //Added by SMILEDINING-SA22-0005#2
    vmViewIndex.allMapZone.editDeliveryFreeTimeID(item.deliveryFreeTimeID);
    vmViewIndex.allMapZone.editMapZoneID(item.mapZoneID);
    vmViewIndex.allMapZone.editShopMapCode(item.shopMapCode);
    vmViewIndex.allMapZone.editStartTime(item.startTime);
    vmViewIndex.allMapZone.editEndTime(item.endTime);
    vmViewIndex.allMapZone.editActiveDeliveryFreeTime(item.active);
    //End Added by SMILEDINING-SA22-0005#2
}
//End Added By SMILEDINING-SA19-0005

//Added by SMILEDINING-SA20-0043#2
function setUpdateMapZoneMile(item) {
    var zoneId = parseInt(vmViewIndex.allMapZone.tempCustomMileZone());
    var dataMapZone = item[zoneId - 1];
    if (parseFloat(dataMapZone.startMile) == 0 && parseFloat(dataMapZone.endMile) == 0) {
        vmViewIndex.allMapZone.tempActiveCustomMile(true);
        vmViewIndex.allMapZone.tempCustomMileZone("1");
        vmViewIndex.allMapZone.tempListValueCustom([]);
    }
};
//End Added by SMILEDINING-SA20-0043#2

//Added By SMILEDINING-SA19-0008
function setCouponDelivery(item, val) {
    var itemModel = new DataCouponDeliveryUpdate(item);
    if (val == statusAdd) {
        vmViewIndex.allSetting.CouponDeliveryData.push(itemModel);
    }
    else {
        var filterCoupon = ko.utils.arrayFilter(vmViewIndex.allSetting.CouponDeliveryData(), function (coupon) {
            return (coupon.couponDeliveryId() == itemModel.couponDeliveryId());
        });
        vmViewIndex.allSetting.CouponDeliveryData.replace(_.first(filterCoupon), itemModel);
    }

    $('#modalSetupCouponDelivery').modal('hide');
    vmViewIndex.allSetting.dataViewModelCouponDelivery.clearSetUp();
}
//End Added By SMILEDINING-SA19-0008

function setDiscount(item, val) {
    var itemModel = new DataDiscountSetUpViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.allSetting.data.push(itemModel);
    } else {
        var filterDiscount = ko.utils.arrayFilter(vmViewIndex.allSetting.data(), function (discount) {
            return (discount.discountId() == itemModel.discountId());
        });
        vmViewIndex.allSetting.data.replace(_.first(filterDiscount), itemModel);
    }
    $('#modalSetUpDiscount').modal('hide');
    //vmViewIndex.allSetting.dataSetUpModal.clearSetUpDiscount();   //Modified by SMILEDINING-SA20-0011
    vmViewIndex.allSetting.dataSetUpModal.btnCloseSetUpDiscount();  //Added and End by  SMILEDINING-SA20-0011
};

//Added by WEB-SA23-0041
function setMemberDiscount(item, val) {
    var itemModel = new DataMemberDiscountSetUpViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.allSetting.dataMemberDiscount.push(itemModel);
    } else {
        var filterDiscount = ko.utils.arrayFilter(vmViewIndex.allSetting.dataMemberDiscount(), function (discount) {
            return (discount.discountId() == itemModel.discountId());
        });
        vmViewIndex.allSetting.dataMemberDiscount.replace(_.first(filterDiscount), itemModel);
    }
    $(cModalSetupMemberDiscount).modal('hide');
    vmViewIndex.allSetting.dataSetUpModalMemberDiscount.btnCloseSetUpMemberDiscount();
};
//End Added by WEB-SA23-0041

//Added by WEB-SA23-0045
function setDiscountTimeMap(item, discountId, discountOneTimeUseId, couponDeliveryId) {
    var filterDiscountTimeMap = ko.utils.arrayFilter(vmViewIndex.allSetting.dataDiscountTimeMap(), function (discountTimeMap) { 
        if (discountId > 0)
            return discountTimeMap.discountId() == discountId;
        else if (discountOneTimeUseId > 0)
            return discountTimeMap.discountOneTimeUseId() == discountOneTimeUseId;
        else if (couponDeliveryId > 0)
            return discountTimeMap.couponDeliveryId() == couponDeliveryId;
    });

    if (!isEmpty(filterDiscountTimeMap)) {
        vmViewIndex.allSetting.dataDiscountTimeMap.removeAll(filterDiscountTimeMap);
    }

    if (!isEmpty(item)) {
        var itemModel = ko.observableArray([]);
        ko.mapping.fromJS(item, {}, itemModel);
        ko.utils.arrayForEach(itemModel(), function (discountTimeMap) {
            vmViewIndex.allSetting.dataDiscountTimeMap.push(discountTimeMap);
        });
    }
    DataSetUpDiscountTimeMap();
};
//End Added by WEB-SA23-0045

//Added by SMILEDINING-SA20-0048
function setDiscountOneTimeUse(item, val) {
    var itemModel = new DataDiscountOneTimeUseSetUpViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.allSetting.dataDiscountOneTimeUse.push(itemModel);
    } else {
        var filterDiscount = ko.utils.arrayFilter(vmViewIndex.allSetting.dataDiscountOneTimeUse(), function (discount) {
            return (discount.discountOneTimeUseId() == itemModel.discountOneTimeUseId());
        });
        vmViewIndex.allSetting.dataDiscountOneTimeUse.replace(_.first(filterDiscount), itemModel);
    }
    var arrSortGroup = _.sortBy(vmViewIndex.allSetting.dataDiscountOneTimeUse(), [function (item) { return item.group(); }]);

    vmViewIndex.allSetting.dataDiscountOneTimeUse(arrSortGroup)

    var group = _.groupBy(arrSortGroup, function (item) {
        return item.group();
    });
    var newArray = [];
    newArray.push({ id: 0, value: "Create New" });
    _.forEach(group, function (value, key) {
        newArray.push({ id: parseInt(key), value: key });
    });
    vmViewIndex.allSetting.discountGroup(newArray.slice(0));

    var filterGroup = ko.utils.arrayFilter(newArray, function (item) {
        return item.id != 0;
    });

    //vmViewIndex.allSetting.groupDiscountDownload(filterGroup.slice(0));       //Modified and End by SMILEDINING-SA20-0048#1
    vmViewIndex.allSetting.groupDiscountDownload(newArray.slice(0)); //Added and End by SMILEDINING-SA20-0048#1
    vmViewIndex.allSetting.group(_.first(vmViewIndex.allSetting.groupDiscountDownload()).id);

    //Added by SMILEDINING-SA20-0048#1
    vmViewIndex.allSetting.groupDiscountFilter(filterGroup.slice(0));
    vmViewIndex.allSetting.groupDiscountFilterSelect(itemModel.group());
    var dataSource = ko.utils.arrayFilter(vmViewIndex.allSetting.dataDiscountOneTimeUse(), function (items) {
        return items.group() == vmViewIndex.allSetting.groupDiscountFilterSelect();
    });
    vmViewIndex.allSetting.dataSourceDiscountOneTimeUse(dataSource.slice(0));
    refreshGrid('gridDiscountOneTimeUse')
    //End Added by SMILEDINING-SA20-0048#1

    $('#modalSetUpDiscountOneTimeUse').modal('hide');
    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.btnCloseSetUpDiscountOneTimeUse();
};

function setUploadDiscountOneTimeUse(item, val) {

    var group = _.first(item).group;

    var filterDiscount = ko.utils.arrayFilter(vmViewIndex.allSetting.dataDiscountOneTimeUse(), function (discount) {
        return (discount.group() != group);
    });

    ko.utils.arrayForEach(item, function (val) {
        filterDiscount.push(new DataDiscountOneTimeUseSetUpViewModel(val));
    });

    var arrSortGroup = _.sortBy(filterDiscount, [function (item) { return item.group(); }]);

    vmViewIndex.allSetting.dataDiscountOneTimeUse(arrSortGroup)

    var group = _.groupBy(arrSortGroup, function (item) {
        return item.group();
    });
    var newArray = [];
    newArray.push({ id: 0, value: "Create New" });
    _.forEach(group, function (value, key) {
        newArray.push({ id: parseInt(key), value: key });
    });
    vmViewIndex.allSetting.discountGroup(newArray.slice(0));

    var filterGroup = ko.utils.arrayFilter(newArray, function (item) {
        return item.id != 0;
    });

    //vmViewIndex.allSetting.groupDiscountDownload(filterGroup.slice(0));   /Modified and End by SMILEDINING-SA20-0048#1
    vmViewIndex.allSetting.groupDiscountDownload(newArray.slice(0)); //Added and End by SMILEDINING-SA20-0048#1
    vmViewIndex.allSetting.group(_.first(vmViewIndex.allSetting.groupDiscountDownload()).id);

    //Added by SMILEDINING-SA20-0048#1
    vmViewIndex.allSetting.groupDiscountFilter(filterGroup.slice(0));
    vmViewIndex.allSetting.groupDiscountFilterSelect(_.first(vmViewIndex.allSetting.groupDiscountFilter()).id);
    //End Added by SMILEDINING-SA20-0048#1

    $('#modalShowDiscountOneTimeUse').modal('hide');
    $('#uploadAnnounceImage').val('');
    //Added by WEB-SA23-0007
    $('#uploadDiscountFile').val('');
    $('#showUploadDiscountFile').text('Choose file');
    var filter = ko.utils.arrayFilter(vmViewIndex.allSetting.dataDiscountOneTimeUse(), function (items) {
        return (items.group() == vmViewIndex.allSetting.groupDiscountFilterSelect());
    });
    vmViewIndex.allSetting.dataSourceDiscountOneTimeUse(filter.slice(0));
    refreshGrid('gridDiscountOneTimeUse');
    //End Added by WEB-SA23-0007
};
//End Added by SMILEDINING-SA20-0048

//Added by SMILEDINING-SA18-0003
function setAutoCharge(item, val) {
    var itemModel = new DataAutoChargeViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.allSetting.dataAutoCharge.push(itemModel);
    } else {
        var filterAutoCharge = ko.utils.arrayFilter(vmViewIndex.allSetting.dataAutoCharge(), function (autoCharge) {
            return (autoCharge.autoChargeId() == itemModel.autoChargeId());
        });
        vmViewIndex.allSetting.dataAutoCharge.replace(_.first(filterAutoCharge), itemModel);
    }
    $('#modalSetUpAutoCharge').modal('hide');
    vmViewIndex.allSetting.dataSetUpModalAutoCharge.clearSetUpAutoCharge();
};

//Added by SMILEDINING-SA22-0020
function setPaymentFee(item, val) {
    var itemModel = new DataPaymentFeeViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.allSetting.dataPaymentFee.push(itemModel);
    } else {
        var filter = ko.utils.arrayFilter(vmViewIndex.allSetting.dataPaymentFee(), function (data) {
            return (data.paymentFeeId() == itemModel.paymentFeeId());
        });
        vmViewIndex.allSetting.dataPaymentFee.replace(_.first(filter), itemModel);
    }
    $('#modalSetUpPaymentFee').modal('hide');
    vmViewIndex.allSetting.dataSetUpModalPaymentFee.clearSetUpPaymentFee();
};
//End Added by SMILEDINING-SA22-0020

function setHoliday(item, val) {
    var itemModel = new DataHolidayViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.allSetting.dataHoliday.push(itemModel);
    } else {
        var filterHoliday = ko.utils.arrayFilter(vmViewIndex.allSetting.dataHoliday(), function (holiday) {
            return (holiday.holidayId() == itemModel.holidayId());
        });
        vmViewIndex.allSetting.dataHoliday.replace(_.first(filterHoliday), itemModel);
    }
    $('#modalSetUpHoliday').modal('hide');
    vmViewIndex.allSetting.dataSetUpModalHoliday.clearSetUpHoliday();
};
//End Added by SMILEDINING-SA18-0003

//Added by SMILEDINING-SA20-0031
function setShopClose(item, val) {
    var data = _.first(item);
    //var itemModel = new DataShopCloseViewModel(data);     //Modifeid and End by SMILEDINING-SA20-0031#3
    var itemModel = new DataShopCloseViewModel(item);   //Added and End by SMILEDINING-SA20-0031#3
    if (val == statusAdd) {
        vmViewIndex.allSetting.dataShopClose.push(itemModel);
    } else {
        var filterShopClose = ko.utils.arrayFilter(vmViewIndex.allSetting.dataShopClose(), function (shopClose) {
            return shopClose.time()[0].shopCloseId() == data.shopCloseIdFirst;
        });
        vmViewIndex.allSetting.dataShopClose.replace(_.first(filterShopClose), itemModel);
    }
    $('#modalSetUpShopClose').modal('hide');
    vmViewIndex.allSetting.dataSetUpModalShopClose.clearSetUpShopClose();
};
//End Added by SMILEDINING-SA20-0031

//Added by SMILEDINING-SA20-0016
function setMainPrice(item, val) {
    var itemModel = new DataMainPriceViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.allSetting.dataMainPrice.push(itemModel);
    } else {
        var filterMainPrice = ko.utils.arrayFilter(vmViewIndex.allSetting.dataMainPrice(), function (mainPrice) {
            return (mainPrice.promotionMainPriceId() == itemModel.promotionMainPriceId());
        });
        vmViewIndex.allSetting.dataMainPrice.replace(_.first(filterMainPrice), itemModel);
        //Added by WEB-SA24-0012
        var priceMin = parseFloat(itemModel.priceMin()).toFixed(2);
        var priceMax = parseFloat(itemModel.priceMax()).toFixed(2);
        ko.utils.arrayForEach(vmViewIndex.allSetting.dataConditionMainPrice(), function (condition) { 
            if (condition.promotionMainPriceId() == itemModel.promotionMainPriceId()) {
                condition.strMainPriceName(priceMin + ' - ' + priceMax);
            }           
        });
        //End Added by WEB-SA24-0012
    }
    $('#modalMainPriceSetup').modal('hide');
    vmViewIndex.allSetting.dataSetUpMainPrice.clearSetUpMainPrice();
};

function setGrpMainFood(item, val) {
    var itemModel = new DataGroupMainFoodViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.allSetting.dataGroupMainFood.push(itemModel);
    } else {
        var filterGrpMainFood = ko.utils.arrayFilter(vmViewIndex.allSetting.dataGroupMainFood(), function (grpMainFood) {
            return (grpMainFood.promotionGroupMainFoodId() == itemModel.promotionGroupMainFoodId());
        });
        vmViewIndex.allSetting.dataGroupMainFood.replace(_.first(filterGrpMainFood), itemModel);
        //Added by WEB-SA24-0012
        ko.utils.arrayForEach(vmViewIndex.allSetting.dataConditionMainFood(), function (condition) { 
            if ((condition.listPromotionGroupMainFood() != null) && (condition.listPromotionGroupMainFood().indexOf(itemModel.promotionGroupMainFoodId()) > -1)) {
                var listNameGrpMainFood = [];
                ko.utils.arrayForEach(condition.listPromotionGroupMainFood(), function (val) {
                    var main = ko.utils.arrayFilter(vmViewIndex.allSetting.dataGroupMainFood(), function (item) {
                        return item.promotionGroupMainFoodId() == val;
                    });
                    listNameGrpMainFood.push(_.first(main).promotionGroupMainFoodName());
                });
                condition.strGrpMainFoodName(listNameGrpMainFood.join(','));
            }
        });
        //End Added by WEB-SA24-0012
    }
    $('#modalGroupMainFoodSetup').modal('hide');
    vmViewIndex.allSetting.dataSetUpGroupMainFood.clearSetUpGroupMainFood();
};

function setGrpFreeFood(item, val) {
    var itemModel = new DataGroupFreeFoodViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.allSetting.dataGroupFreeFood.push(itemModel);
    } else {
        var filterGrpFreeFood = ko.utils.arrayFilter(vmViewIndex.allSetting.dataGroupFreeFood(), function (grpFreeFood) {
            return (grpFreeFood.promotionGroupFreeFoodId() == itemModel.promotionGroupFreeFoodId());
        });
        vmViewIndex.allSetting.dataGroupFreeFood.replace(_.first(filterGrpFreeFood), itemModel);
        //Added by WEB-SA24-0012
        setGrpFreeFoodName(itemModel, vmViewIndex.allSetting.dataConditionMainPrice());
        setGrpFreeFoodName(itemModel, vmViewIndex.allSetting.dataConditionMainFood());
        //End Added by WEB-SA24-0012
    }
    $('#modalGroupFreeFoodSetup').modal('hide');
    vmViewIndex.allSetting.dataSetUpGroupFreeFood.clearSetUpGroupFreeFood();
};

//Added by WEB-SA24-0012
function setGrpFreeFoodName(itemModel, dataCondition) {
    ko.utils.arrayForEach(dataCondition, function (condition) { 
        if ((condition.listPromotionGroupFreeFood() != null) && (condition.listPromotionGroupFreeFood().indexOf(itemModel.promotionGroupFreeFoodId()) > -1)) {
            var listNameGrpFreeFood = [];
            ko.utils.arrayForEach(condition.listPromotionGroupFreeFood(), function (val) {
                var free = ko.utils.arrayFilter(vmViewIndex.allSetting.dataGroupFreeFood(), function (item) {
                    return item.promotionGroupFreeFoodId() == val;
                });
                listNameGrpFreeFood.push(_.first(free).promotionGroupFreeFoodName());
            });
            condition.strGrpFreeFoodName(listNameGrpFreeFood.join(','));
        }
    });
};
//End Added by WEB-SA24-0012

function setCondition(item, val) {
    if (item.promotionTypeId == cConditionPrice) {
        var itemModel = new DataConditionViewModel(item, true);
        if (val == statusAdd) {
            vmViewIndex.allSetting.dataConditionMainPrice.push(itemModel);
        } else {
            var filterCondition = ko.utils.arrayFilter(vmViewIndex.allSetting.dataConditionMainPrice(), function (condition) {
                return (condition.promotionId() == itemModel.promotionId());
            });
            vmViewIndex.allSetting.dataConditionMainPrice.replace(_.first(filterCondition), itemModel);
        }
    } else {
        var itemModel = new DataConditionViewModel(item, false);
        if (val == statusAdd) {
            vmViewIndex.allSetting.dataConditionMainFood.push(itemModel);
        } else {
            var filterCondition = ko.utils.arrayFilter(vmViewIndex.allSetting.dataConditionMainFood(), function (condition) {
                return (condition.promotionId() == itemModel.promotionId());
            });
            vmViewIndex.allSetting.dataConditionMainFood.replace(_.first(filterCondition), itemModel);
        }
    }

    $('#modalConditionSetup').modal('hide');
    vmViewIndex.allSetting.dataSetUpCondition.clearSetUpCondition();
};
//End Added by SMILEDINING-SA20-0016

//Added by WEB-SA24-0012
function setPromotionTimeMap(item, promotionId) {
    var filterPromotionTimeMap = ko.utils.arrayFilter(vmViewIndex.allSetting.dataPromotionTimeMap(), function (promotionTimeMap) { 
        return promotionTimeMap.promotionId() == promotionId;
    });

    if (!isEmpty(filterPromotionTimeMap)) {
        vmViewIndex.allSetting.dataPromotionTimeMap.removeAll(filterPromotionTimeMap);
    }

    if (!isEmpty(item)) {
        var itemModel = ko.observableArray([]);
        ko.mapping.fromJS(item, {}, itemModel);
        ko.utils.arrayForEach(itemModel(), function (promotionTimeMap) {
            vmViewIndex.allSetting.dataPromotionTimeMap.push(promotionTimeMap);
        });
    }
    DataSetUpPromotionTimeMap();
};
//End Added by WEB-SA24-0012

//Added by SMILEDINING-SA20-0043
function setUpdateCustomMapZoneMile(item) {
    ko.mapping.fromJS(item.active, {}, vmViewIndex.allMapZone.tempActiveCustomMile);
    ko.mapping.fromJS(item.mapZoneId, {}, vmViewIndex.allMapZone.tempCustomMileZone);
    ko.mapping.fromJS(item.listCustomMile, {}, vmViewIndex.allMapZone.tempListValueCustom);

    if (item.mapZoneId == '1') {
        vmViewIndex.allMapZone.listMapZoneMile()[1].startMile(0);
        vmViewIndex.allMapZone.listMapZoneMile()[1].endMile(0);
        vmViewIndex.allMapZone.listMapZoneMile()[1].price(0);
        vmViewIndex.allMapZone.listMapZoneMile()[2].startMile(0);
        vmViewIndex.allMapZone.listMapZoneMile()[2].endMile(0);
        vmViewIndex.allMapZone.listMapZoneMile()[2].price(0);
    } else if (item.mapZoneId == '2') {
        vmViewIndex.allMapZone.listMapZoneMile()[2].startMile(0);
        vmViewIndex.allMapZone.listMapZoneMile()[2].endMile(0);
        vmViewIndex.allMapZone.listMapZoneMile()[2].price(0);
    }
    $('#modalCustomMapZoneMile').modal('hide');
};
//End Added by SMILEDINING-SA20-0043

function getDataJs() {
    ko.mapping.fromJSON(vmViewIndex.menu.foodSetJs(), {}, vmViewIndex.menu.foodSet);
    ko.mapping.fromJSON(vmViewIndex.menu.foodCategoryJs(), {}, vmViewIndex.menu.foodCategory);
    ko.mapping.fromJSON(vmViewIndex.menu.foodJs(), {}, vmViewIndex.menu.food);
};

//function setFoodSet(item, val) { //Modified and End by WEB-SA23-0048
function setFoodSet(item, val, itemFoodUpdateList) { //Added and End by WEB-SA23-0048
    //var itemModel = new DataFoodSetViewModel(item);   //Modified and End by SMILEDINING-SA21-0018
    if (val == statusAdd) {
        var itemModel = new DataFoodSetViewModel(item); //Added and End by SMILEDINING-SA21-0018
        vmViewIndex.menu.foodSetJs.push(item);
        vmViewIndex.menu.foodSet.push(itemModel);
        //vmViewIndex.menu.optionSelectPickerFoodSet.push(new optionSelectFoodSet(itemModel.foodSetId(), itemModel.foodSetName())); //Modified and End by SMILEDINING-SA21-0018#8
        //Added by SMILEDINING-SA21-0018#8
        if (!itemModel.isThirdParty()) {
            vmViewIndex.menu.optionSelectPickerFoodSet.push(new optionSelectFoodSet(itemModel.foodSetId(), itemModel.foodSetName()));
        } else {
            vmViewIndex.menu.optionSelectPickerFoodSetThirdParty.push(new optionSelectFoodSet(itemModel.foodSetId(), itemModel.foodSetName()));
        }
        //End Added by SMILEDINING-SA21-0018#8
        vmViewIndex.menu.dataMenu.push(new DataMenuViewModel(itemModel, "", []));
        vmViewIndex.menu.selectFoodSetId(itemModel.foodSetId());
        vmViewIndex.menu.selectFoodSetName(itemModel.foodSetName());
        vmViewIndex.menu.selectFoodSetSorting(itemModel.foodSetSorting());
        vmViewIndex.menu.selectFoodSetActive(itemModel.active());
        vmViewIndex.menu.selectFoodSetIsThirdParty(itemModel.isThirdParty());   //Added and End by SMILEDINING-SA21-0018
        vmViewIndex.menu.selectFoodSetThirdPartyIntegProviderId(itemModel.thirdPartyIntegrationsProviderId());   //Added and End by WEB-SA23-0048
    } else {
        var itemModel = new DataFoodSetViewModel(_.first(item.listFoodSet)); //Added and End by SMILEDINING-SA21-0018
        var filterFoodSetJs = ko.utils.arrayFilter(vmViewIndex.menu.foodSetJs(), function (foodSetJs) {
            return (foodSetJs.foodSetId == item.foodSetId);
        });
        if (!isEmpty(filterFoodSetJs)) {
            vmViewIndex.menu.foodSetJs.replace(_.first(filterFoodSetJs), item);
        }

        var filterFoodSet = ko.utils.arrayFilter(vmViewIndex.menu.foodSet(), function (foodSet) {
            return (foodSet.foodSetId() == itemModel.foodSetId());
        });
        if (!isEmpty(filterFoodSet)) {
            vmViewIndex.menu.foodSet.replace(_.first(filterFoodSet), itemModel);
        }
        var filterSelectFoodSet = ko.utils.arrayFilter(vmViewIndex.menu.optionSelectPickerFoodSet(), function (itemFoodSet) {
            return itemFoodSet.foodSetId() == itemModel.foodSetId();
        });
        if (!isEmpty(filterSelectFoodSet)) {
            vmViewIndex.menu.optionSelectPickerFoodSet.replace(_.first(filterSelectFoodSet), new optionSelectFoodSet(itemModel.foodSetId(), itemModel.foodSetName()));
        }
        //Added by SMILEDINING-SA21-0018#8
        var filterSelectFoodSetThirdParty = ko.utils.arrayFilter(vmViewIndex.menu.optionSelectPickerFoodSetThirdParty(), function (itemFoodSet) {
            return itemFoodSet.foodSetId() == itemModel.foodSetId();
        });
        if (!isEmpty(filterSelectFoodSetThirdParty)) {
            vmViewIndex.menu.optionSelectPickerFoodSetThirdParty.replace(_.first(filterSelectFoodSetThirdParty), new optionSelectFoodSet(itemModel.foodSetId(), itemModel.foodSetName()));
        }
        //End Added by SMILEDINING-SA21-0018#8

        ko.utils.arrayForEach(vmViewIndex.menu.dataMenu(), function (dataMenu) {
            if (dataMenu.foodSet.foodSetId() == itemModel.foodSetId()) {
                dataMenu.foodSet = itemModel;
            }
        });

        vmViewIndex.menu.selectFoodSetId(itemModel.foodSetId());
        vmViewIndex.menu.selectFoodSetName(itemModel.foodSetName());
        vmViewIndex.menu.selectFoodSetSorting(itemModel.foodSetSorting());
        vmViewIndex.menu.selectFoodSetActive(itemModel.active());
        vmViewIndex.menu.selectFoodSetIsThirdParty(itemModel.isThirdParty());   //Added and End by SMILEDINING-SA21-0018
        //Added by WEB-SA23-0048
        vmViewIndex.menu.selectFoodSetThirdPartyIntegProviderId(itemModel.thirdPartyIntegrationsProviderId()); 

        if (!isEmpty(itemFoodUpdateList)) {
            _.forEach(itemFoodUpdateList, function (itemFood) {
                var itemFoodModel = new DataFoodViewModel(itemFood);
                var foodJs = ko.utils.arrayFirst(vmViewIndex.menu.foodJs(), function (itemFoodJs) {
                    return itemFoodJs.foodId == itemFoodModel.foodId();
                });
                if (!isEmpty(foodJs)) {
                    foodJs.active = itemFoodModel.active();
                    foodJs.thirdPartyIntegrationsProviderId = itemFoodModel.thirdPartyIntegrationsProviderId();
                }
                var food = ko.utils.arrayFirst(vmViewIndex.menu.food(), function (itemFood) {
                    return itemFood.foodId() == itemFoodModel.foodId();
                });
                if (!isEmpty(food)) {
                    food.active(itemFoodModel.active());
                    food.thirdPartyIntegrationsProviderId(itemFoodModel.thirdPartyIntegrationsProviderId());
                }
            });
        }
        //End Added by WEB-SA23-0048
        //Added by SMILEDINING-SA21-0018
        if (item.listFoodSet.length > 1) {
            var tempDataMenu = ko.observableArray([]);
            var tempItemModel = ko.observableArray([]);

            var itemListFood = item.listFood;
            var itemGroupChoiceOption = item.groupChoiceOptionId;
            var itemFoodChoiceMap = item.listFoodChoiceMap;

            ko.utils.arrayForEach(itemListFood, function (value) {
                var arrProductId = value.productId.split(',');
                value.arrProduct = new Array();
                ko.utils.arrayForEach(arrProductId, function (arrProductIdVal) {
                    value.arrProduct.push(arrProductIdVal);
                });
                vmViewIndex.menu.foodJs.push(value); //Added and End by WEB-SA23-0048#5
            });
            ko.mapping.fromJS(itemListFood, {}, tempItemModel);
            ko.utils.arrayForEach(tempItemModel(), function (itemFood) {
                //vmViewIndex.menu.foodJs.push(itemListFood); //Modified and End by WEB-SA23-0048#5
                vmViewIndex.menu.food.push(itemFood);
                vmViewIndex.menu.optionSelectPickerCopyFood.push(new optionSelectFood(itemFood.foodId(), itemFood.foodName()));
            });

            ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
                ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
                    var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
                        return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
                    });
                    if (!isEmpty(filterFood)) {
                        tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
                    }
                });
            });
            vmViewIndex.menu.dataMenu(tempDataMenu().slice());

            if (itemFoodChoiceMap.length > 0 && !isEmpty(itemFoodChoiceMap)) {
                for (var i = 0 ; i < itemFoodChoiceMap.length ; i++) {
                    var filterFoodChoiceMap = ko.utils.arrayFilter(vmViewIndex.menu.foodChoiceMap(), function (foodChoiceMap) {
                        return foodChoiceMap.foodId() == itemFoodChoiceMap[i].foodId;
                    });
                    vmViewIndex.menu.foodChoiceMap.removeAll(filterFoodChoiceMap);
                    vmViewIndex.menu.choiceOptions.removeAll();
                }

                ko.utils.arrayForEach(itemFoodChoiceMap, function (itemFoodChoiceMap) {
                    vmViewIndex.menu.foodChoiceMap.push(new DataFoodChoiceMapViewModel(itemFoodChoiceMap));
                });
            } else {
                for (var i = 0 ; i < itemListFood.length ; i++) {
                    var filterFoodChoiceMap = ko.utils.arrayFilter(vmViewIndex.menu.foodChoiceMap(), function (foodChoiceMap) {
                        return foodChoiceMap.foodId() == itemListFood[i].foodId;
                    });
                    vmViewIndex.menu.foodChoiceMap.removeAll(filterFoodChoiceMap);
                }
            }
            ko.utils.arrayForEach(itemGroupChoiceOption, function (itemGroupChoice) {
                var choiceOption = ko.utils.arrayFilter(vmViewIndex.menu.dataSetupFoodModal.groupChoiceOptionId(), function (valueChoiceOptionId) {
                    return (itemGroupChoice == valueChoiceOptionId);
                });
                if (choiceOption.length == 0) {
                    vmViewIndex.menu.dataSetupFoodModal.groupChoiceOptionId.push(itemGroupChoice);
                }
            });

            var itemModelAdd = new DataFoodSetViewModel(item.listFoodSet[1]);
            vmViewIndex.menu.foodSetJs.push(item.listFoodSet[1]);
            vmViewIndex.menu.foodSet.push(itemModelAdd);
            //vmViewIndex.menu.optionSelectPickerFoodSet.push(new optionSelectFoodSet(itemModelAdd.foodSetId(), itemModelAdd.foodSetName()));//Modified and End by SMILEDINING-SA21-0018#8
            //Added by SMILEDINING-SA21-0018#8
            if (!itemModelAdd.isThirdParty()) {
                vmViewIndex.menu.optionSelectPickerFoodSet.push(new optionSelectFoodSet(itemModelAdd.foodSetId(), itemModelAdd.foodSetName()));
            } else {
                vmViewIndex.menu.optionSelectPickerFoodSetThirdParty.push(new optionSelectFoodSet(itemModelAdd.foodSetId(), itemModelAdd.foodSetName()));
            }
            //End Added by SMILEDINING-SA21-0018#8
            vmViewIndex.menu.dataMenu.push(new DataMenuViewModel(itemModelAdd, "", []));
            vmViewIndex.menu.selectFoodSetId(itemModelAdd.foodSetId());
            vmViewIndex.menu.selectFoodSetName(itemModelAdd.foodSetName());
            vmViewIndex.menu.selectFoodSetSorting(itemModelAdd.foodSetSorting());
            vmViewIndex.menu.selectFoodSetActive(itemModelAdd.active());
            vmViewIndex.menu.selectFoodSetIsThirdParty(itemModelAdd.isThirdParty());
            vmViewIndex.menu.selectFoodSetThirdPartyIntegProviderId(itemModelAdd.thirdPartyIntegrationsProviderId()); //Added and End by WEB-SA23-0048

            _.forEach(item.listFoodCategory, function (value) {
                var tempDataMenu = ko.observableArray([]);
                var itemModel = new DataFoodCategoryViewModel(value);
                vmViewIndex.menu.foodCategoryJs.push(value);
                vmViewIndex.menu.foodCategory.push(itemModel);
                vmViewIndex.menu.tempDataFoodCategory.push(new optionSelectFoodCategory(itemModel.foodCatId(), itemModel.foodCatName(), itemModelAdd.foodSetId()));

                ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
                    ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
                        var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
                            return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
                        });
                        if (!isEmpty(filterFood)) {
                            tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
                        }
                    });
                });
                vmViewIndex.menu.dataMenu(tempDataMenu().slice());
            });
        }
        //Modified by SMILEDINING-SA21-0018#1
        //item.listFoodSet
        //item.listFoodCategory
        //End Modified by SMILEDINING-SA21-0018#1
        //End Added by SMILEDINING-SA21-0018
    }
    $('#modalSetupFoodSet').modal('hide');
    foodSetClick();
    vmViewIndex.menu.dataSetupFoodSetModal.clearSetupFoodSet();
};

function setFoodCategory(item, item2, val) {
    var tempDataMenu = ko.observableArray([]);
    var itemModel = new DataFoodCategoryViewModel(item);
    var tempScrollTop = document.documentElement.scrollTop;
    if (val == statusAdd) {
        item2.arrProduct = item2.productId.split(','); //Added and End by WEB-SA23-0048#5
        var itemModel2 = new DataFoodViewModel(item2);
        itemModel2.arrProduct(itemModel2.productId().split(','));   //Added and End by SMILEDINING-SA20-0006
        vmViewIndex.menu.foodCategoryJs.push(item);
        vmViewIndex.menu.foodCategory.push(itemModel);
        vmViewIndex.menu.foodJs.push(item2);
        vmViewIndex.menu.food.push(itemModel2);
        vmViewIndex.menu.tempDataFoodCategory.push(new optionSelectFoodCategory(itemModel.foodCatId(), itemModel.foodCatName(), itemModel2.foodSetId()));

        ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
            ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
                var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
                    return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
                });
                if (!isEmpty(filterFood)) {
                    tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
                }
            });
        });
        vmViewIndex.menu.dataMenu(tempDataMenu().slice());
    } else {
        var filterFoodCatJs = ko.utils.arrayFilter(vmViewIndex.menu.foodCategoryJs(), function (itemFoodCategoryJs) {
            return (itemFoodCategoryJs.foodCatId == item.foodCatId);
        });
        if (!isEmpty(filterFoodCatJs)) {
            vmViewIndex.menu.foodCategoryJs.replace(_.first(filterFoodCatJs), item);
        }

        var filterFoodCat = ko.utils.arrayFilter(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
            return (itemFoodCategory.foodCatId() == itemModel.foodCatId());
        });
        if (!isEmpty(filterFoodCat)) {
            vmViewIndex.menu.foodCategory.replace(_.first(filterFoodCat), itemModel);
        }

        var filterSelectFoodCat = ko.utils.arrayFilter(vmViewIndex.menu.tempDataFoodCategory(), function (itemFoodCat) {
            return itemFoodCat.foodCatId() == itemModel.foodCatId();
        });
        if (!isEmpty(filterSelectFoodCat)) {
            vmViewIndex.menu.tempDataFoodCategory.replace(_.first(filterSelectFoodCat), new optionSelectFoodCategory(itemModel.foodCatId(), itemModel.foodCatName(), _.first(filterSelectFoodCat).foodSetId()));
        }

        vmViewIndex.menu.optionSelectPickerFoodCategory(vmViewIndex.menu.tempDataFoodCategory());
        ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
            ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
                var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
                    return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
                });
                if (!isEmpty(filterFood)) {
                    tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
                }
            });
        });
        vmViewIndex.menu.dataMenu(tempDataMenu().slice());
    }
    document.documentElement.scrollTop = tempScrollTop;
    $('#modalSetupFoodCategory').modal('hide');
    foodSetClick();
    vmViewIndex.menu.dataSetupFoodCategoryModal.clearSetupFoodCategory();
};

function setFoodImage(item, val) {
    var tempDataMenu = ko.observableArray([]);
    var itemModel = new DataFoodViewModel(item);
    var tempScrollTop = document.documentElement.scrollTop;
    //Added by WEB-SA23-0048#13
    var arrProductId = item.productId.split(',');
    item.arrProduct = new Array();
    ko.utils.arrayForEach(arrProductId, function (arrProductIdVal) {
        item.arrProduct.push(arrProductIdVal);
    });
    itemModel.arrProduct(item.productId.split(','));
    //End Added by WEB-SA23-0048#13
    var filterFoodJs = ko.utils.arrayFilter(vmViewIndex.menu.foodJs(), function (itemFoodJs) {
        return (itemFoodJs.foodId == item.foodId);
    });
    if (!isEmpty(filterFoodJs)) {
        vmViewIndex.menu.foodJs.replace(_.first(filterFoodJs), item);
    }
    var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
        return (itemFood.foodId() == item.foodId);
    });
    if (!isEmpty(filterFood)) {
        vmViewIndex.menu.food.replace(_.first(filterFood), itemModel);
    }

    //ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
    //    ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
    //        var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
    //            return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
    //        });
    //        if (!isEmpty(filterFood)) {
    //            tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
    //        }
    //    });
    //});
    //vmViewIndex.menu.dataMenu(tempDataMenu().slice());

    var filterFoodSet = ko.utils.arrayFilter(vmViewIndex.menu.dataMenu(), function (itemDataMenu) {
        return (itemDataMenu.foodSet.foodSetId() == item.foodSetId) && (itemDataMenu.foodCategory.foodCatId() == item.foodCatId);
    });

    var filterFood = ko.utils.arrayFilter(_.first(filterFoodSet).food, function (itemFood) {
        return itemFood.foodId() == item.foodId;
    });

    _.first(filterFood).image(item.image);
    _.first(filterFood).imageThirdParty(""); //Added and End by SMILEDINING-SA21-0066#20

    document.documentElement.scrollTop = tempScrollTop;
    foodSetClick();
}

//Added by SMILEDINING-SA21-0028
function setFoodCustomImage(item) {
    if (item.imageName != '' ){
        item.imageName = cPathFileBase + item.imageName;
    }
    
    var tempDataMenu = ko.observableArray([]);
    var itemModel = new DataFoodViewModel(item);
    var filterFoodJs = ko.utils.arrayFilter(vmViewIndex.menu.foodJs(), function (itemFoodJs) {
        return (itemFoodJs.foodId == item.foodId);
    });
    if (!isEmpty(filterFoodJs)) {
        _.first(filterFoodJs).image = item.imageName;
    }
    var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
        return (itemFood.foodId() == item.foodId);
    });
    if (!isEmpty(filterFood)) {
        _.first(filterFood).image(itemModel.image());
    }
    var filterFoodSet = ko.utils.arrayFilter(vmViewIndex.menu.dataMenu(), function (itemDataMenu) {
        return (itemDataMenu.foodSet.foodSetId() == item.foodSetId) && (itemDataMenu.foodCategory.foodCatId() == item.foodCatId);
    });

    var filterFood = ko.utils.arrayFilter(_.first(filterFoodSet).food, function (itemFood) {
        return itemFood.foodId() == item.foodId;
    });

    _.first(filterFood).image(item.imageName);

    $('#modalSetUpFoodImage').modal('hide');
};

//End Added by SMILEDINING-SA21-0028

//function setFood(item, itemGroupChoiceOption, itemFoodChoiceMap, val) {   //Modified and End by SMILEDINING-SA21-0021
function setFood(item, itemGroupChoiceOption, itemFoodChoiceMap, itemFoodIconMap, val) {    //Added and End by SMILEDINING-SA21-0021
    var tempDataMenu = ko.observableArray([]);
    var itemModel = new DataFoodViewModel(item);
    var tempScrollTop = document.documentElement.scrollTop;
    //Added by SMILEDINING-SA20-0006
    var arrProductId = item.productId.split(',');
    item.arrProduct = new Array();
    ko.utils.arrayForEach(arrProductId, function (arrProductIdVal) {
        item.arrProduct.push(arrProductIdVal);
    });
    itemModel.arrProduct(item.productId.split(','));
    //End Added by SMILEDINING-SA20-0006

    if (val == statusAdd) {
        vmViewIndex.menu.foodJs.push(item);
        vmViewIndex.menu.food.push(itemModel);
        vmViewIndex.menu.optionSelectPickerCopyFood.push(new optionSelectFood(itemModel.foodId(), itemModel.foodName()));

        ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
            ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
                var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
                    return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
                });
                if (!isEmpty(filterFood)) {
                    tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
                }
            });
        });
        vmViewIndex.menu.dataMenu(tempDataMenu().slice());

        if (itemFoodChoiceMap.length > 0) {
            var filterFoodChoiceMap = ko.utils.arrayFilter(vmViewIndex.menu.foodChoiceMap(), function (foodChoiceMap) {
                return foodChoiceMap.foodId() == _.first(itemFoodChoiceMap).foodId;
            });
            if (filterFoodChoiceMap.length > 0) {
                vmViewIndex.menu.foodChoiceMap.removeAll(filterFoodChoiceMap);
            }
            vmViewIndex.menu.choiceOptions.removeAll();
            ko.utils.arrayForEach(itemFoodChoiceMap, function (itemFoodChoiceMap) {
                vmViewIndex.menu.foodChoiceMap.push(new DataFoodChoiceMapViewModel(itemFoodChoiceMap));
            });
        } else {
            var filterFoodChoiceMap = ko.utils.arrayFilter(vmViewIndex.menu.foodChoiceMap(), function (foodChoiceMap) {
                return foodChoiceMap.foodId() == item.foodId;
            });
            if (filterFoodChoiceMap.length > 0) {
                vmViewIndex.menu.foodChoiceMap.removeAll(filterFoodChoiceMap);
            }
        }
        ko.utils.arrayForEach(itemGroupChoiceOption, function (itemGroupChoice) {
            var choiceOption = ko.utils.arrayFilter(vmViewIndex.menu.dataSetupFoodModal.groupChoiceOptionId(), function (valueChoiceOptionId) {
                return (itemGroupChoice == valueChoiceOptionId);
            });
            if (choiceOption.length == 0) {
                vmViewIndex.menu.dataSetupFoodModal.groupChoiceOptionId.push(itemGroupChoice);
            }
        });
    } else {
        var filterFoodJs = ko.utils.arrayFilter(vmViewIndex.menu.foodJs(), function (itemFoodJs) {
            return (itemFoodJs.foodId == item.foodId);
        });
        if (!isEmpty(filterFoodJs)) {
            vmViewIndex.menu.foodJs.replace(_.first(filterFoodJs), item);
        }
        var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
            return (itemFood.foodId() == itemModel.foodId());
        });
        if (!isEmpty(filterFood)) {
            vmViewIndex.menu.food.replace(_.first(filterFood), itemModel);
        }
        var filterDataCopyFood = ko.utils.arrayFilter(vmViewIndex.menu.optionSelectPickerCopyFood(), function (itemFood) {
            return itemFood.foodId() == itemModel.foodId();
        });
        if (!isEmpty(filterDataCopyFood)) {
            vmViewIndex.menu.optionSelectPickerCopyFood.replace(_.first(filterDataCopyFood), new optionSelectFood(itemModel.foodId(), itemModel.foodName()));
        }

        ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
            ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
                var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
                    return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
                });
                if (!isEmpty(filterFood)) {
                    tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
                }
            });
        });
        vmViewIndex.menu.dataMenu(tempDataMenu().slice());

        if (itemFoodChoiceMap.length > 0) {
            var filterFoodChoiceMap = ko.utils.arrayFilter(vmViewIndex.menu.foodChoiceMap(), function (foodChoiceMap) {
                return foodChoiceMap.foodId() == _.first(itemFoodChoiceMap).foodId;
            });
            if (filterFoodChoiceMap.length > 0) {
                vmViewIndex.menu.foodChoiceMap.removeAll(filterFoodChoiceMap);
            }
            vmViewIndex.menu.choiceOptions.removeAll();
            ko.utils.arrayForEach(itemFoodChoiceMap, function (itemFoodChoiceMap) {
                vmViewIndex.menu.foodChoiceMap.push(new DataFoodChoiceMapViewModel(itemFoodChoiceMap));
            });
        } else {
            var filterFoodChoiceMap = ko.utils.arrayFilter(vmViewIndex.menu.foodChoiceMap(), function (foodChoiceMap) {
                return foodChoiceMap.foodId() == item.foodId;
            });
            if (filterFoodChoiceMap.length > 0) {
                vmViewIndex.menu.foodChoiceMap.removeAll(filterFoodChoiceMap);
            }
        }
        ko.utils.arrayForEach(itemGroupChoiceOption, function (itemGroupChoice) {
            var choiceOption = ko.utils.arrayFilter(vmViewIndex.menu.dataSetupFoodModal.groupChoiceOptionId(), function (valueChoiceOptionId) {
                return (itemGroupChoice == valueChoiceOptionId);
            });
            if (choiceOption.length == 0) {
                vmViewIndex.menu.dataSetupFoodModal.groupChoiceOptionId.push(itemGroupChoice);
            }
        });
        //Added by SMILEDINING-SA21-0018#2
        if (item.isThirdParty) {
            var filterFoodInThirdParty = ko.utils.arrayFilter(vmViewIndex.menu.listFoodThirdPartyStore(), function (item) {
                return item.foodBaseId() == item.foodId;
            });
            vmViewIndex.menu.listFoodThirdPartyStore.removeAll(filterFoodInThirdParty);
        }
        //End Added by SMILEDINING-SA21-0018#2
        //Added by SMILEDINING-SA21-0021
        var filterFoodIconeMap = ko.utils.arrayFilter(vmViewIndex.menu.listFoodIconMap(), function (foodIconMap) {
            return foodIconMap.foodId() == item.foodId;
        });
        if (filterFoodIconeMap.length > 0) {
            vmViewIndex.menu.listFoodIconMap.removeAll(filterFoodIconeMap);
        }
        //End Added by SMILEDINING-SA21-0021
    }

    //Added by SMILEDINING-SA21-0021
    if (itemFoodIconMap.length > 0) {
        var dataAdd = ko.observableArray([]);
        ko.mapping.fromJS(itemFoodIconMap, {}, dataAdd);
        ko.utils.arrayForEach(dataAdd(), function (data) {
            vmViewIndex.menu.listFoodIconMap.push(data);
        });
    }
    //End Added by SMILEDINING-SA21-0021

    document.documentElement.scrollTop = tempScrollTop;
    $('#modalSetupFood').modal('hide');
    foodSetClick();
    vmViewIndex.menu.dataSetupFoodModal.clearSetupFood();
};

//function setCopyFood(item, itemGroupChoiceOption, itemFoodChoiceMap) {    //Modified and End by SMILEDINING-SA21-0021
function setCopyFood(item, itemGroupChoiceOption, itemFoodChoiceMap, itemFoodIconMap) {       //Modified and End by SMILEDINING-SA21-0021
    var tempDataMenu = ko.observableArray([]);
    var tempItemModel = ko.observableArray([]);
    var tempScrollTop = document.documentElement.scrollTop;
    //Added by SMILEDINING-SA20-0006	
    ko.utils.arrayForEach(item, function (value) {
        var arrProductId = value.productId.split(',');
        value.arrProduct = new Array();
        ko.utils.arrayForEach(arrProductId, function (arrProductIdVal) {
            value.arrProduct.push(arrProductIdVal);
        });
        vmViewIndex.menu.foodJs.push(value);   //Added and End by SMILEDINING-SA21-0018
    });
    //Added and End by SMILEDINING-SA20-0006
    ko.mapping.fromJS(item, {}, tempItemModel);
    ko.utils.arrayForEach(tempItemModel(), function (itemFood) {
        //vmViewIndex.menu.foodJs.push(item);   //Modified and End by SMILEDINING-SA21-0018
        vmViewIndex.menu.food.push(itemFood);
        vmViewIndex.menu.optionSelectPickerCopyFood.push(new optionSelectFood(itemFood.foodId(), itemFood.foodName()));
    });

    ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
        ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
            var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
                return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
            });
            if (!isEmpty(filterFood)) {
                tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
            }
        });
    });
    vmViewIndex.menu.dataMenu(tempDataMenu().slice());

    if (itemFoodChoiceMap.length > 0 && !isEmpty(itemFoodChoiceMap)) {
        for (var i = 0 ; i < itemFoodChoiceMap.length ; i++) {
            var filterFoodChoiceMap = ko.utils.arrayFilter(vmViewIndex.menu.foodChoiceMap(), function (foodChoiceMap) {
                return foodChoiceMap.foodId() == itemFoodChoiceMap[i].foodId;
            });
            vmViewIndex.menu.foodChoiceMap.removeAll(filterFoodChoiceMap);
            vmViewIndex.menu.choiceOptions.removeAll();
        }

        ko.utils.arrayForEach(itemFoodChoiceMap, function (itemFoodChoiceMap) {
            vmViewIndex.menu.foodChoiceMap.push(new DataFoodChoiceMapViewModel(itemFoodChoiceMap));
        });
    } else {
        for (var i = 0 ; i < item.length ; i++) {
            var filterFoodChoiceMap = ko.utils.arrayFilter(vmViewIndex.menu.foodChoiceMap(), function (foodChoiceMap) {
                return foodChoiceMap.foodId() == item[i].foodId;
            });
            vmViewIndex.menu.foodChoiceMap.removeAll(filterFoodChoiceMap);
        }
    }
    ko.utils.arrayForEach(itemGroupChoiceOption, function (itemGroupChoice) {
        var choiceOption = ko.utils.arrayFilter(vmViewIndex.menu.dataSetupFoodModal.groupChoiceOptionId(), function (valueChoiceOptionId) {
            return (itemGroupChoice == valueChoiceOptionId);
        });
        if (choiceOption.length == 0) {
            vmViewIndex.menu.dataSetupFoodModal.groupChoiceOptionId.push(itemGroupChoice);
        }
    });

    //Added by SMILEDINING-SA21-0021
    if (itemFoodIconMap.length > 0) {
        var dataAdd = ko.observableArray([]);
        ko.mapping.fromJS(itemFoodIconMap, {}, dataAdd);
        ko.utils.arrayForEach(dataAdd(), function (data) {
            vmViewIndex.menu.listFoodIconMap.push(data);
        });
    }
    //End Added by SMILEDINING-SA21-0021

    clearCopyFood();
    vmViewIndex.showLoading(false);
    document.documentElement.scrollTop = tempScrollTop;
    foodSetClick();
};


//Added by SMILEDINING-SA21-0018
function setFoodThirdParty(items) {
    var item = items.listFood;
    var itemFoodChoiceMap = items.listFoodChoiceMap;
    var itemGroupChoiceOption = items.groupChoiceOptionId;
    var itemGroupThirdParty = items.listThirdPartyGroup;    //Added and End by SMILEDINING-SA21-0018#6

    if (item.length == 1) {
        var idDelete = _.first(item).foodId;
        //Modified by SMILEDINING-SA21-0018#3
        //var filterFoodJs = ko.utils.arrayFilter(vmViewIndex.menu.foodJs(), function (data) {
        //    return data.foodId == idDelete;
        //});
        //if (filterFoodJs.length > 0)
        //    vmViewIndex.menu.foodJs.remove(_.first(filterFoodJs));

        //var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (data) {
        //    return data.foodId() == idDelete;
        //});
        //if (filterFood.length > 0)
        //    vmViewIndex.menu.food.remove(_.first(filterFood));

        //var filterOptionSelectPickerCopyFood = ko.utils.arrayFilter(vmViewIndex.menu.optionSelectPickerCopyFood(), function (data) {
        //    return data.foodId() == idDelete;
        //});
        //if (filterOptionSelectPickerCopyFood.length > 0)
        //    vmViewIndex.menu.optionSelectPickerCopyFood.remove(_.first(filterOptionSelectPickerCopyFood));
        //End Modified by SMILEDINING-SA21-0018#3
        //Added by SMILEDINING-SA21-0018#3
        ko.utils.arrayForEach(item, function (value) {
            var arrProductId = value.productId.split(',');
            value.arrProduct = new Array();
            ko.utils.arrayForEach(arrProductId, function (arrProductIdVal) {
                value.arrProduct.push(arrProductIdVal);
            });
        });
        var tempDataMenu = ko.observableArray([]);
        var tempItemModel = ko.observableArray([]);
        ko.mapping.fromJS(item, {}, tempItemModel);
        var dataFoodJs = _.first(item);
        var dataFood = _.first(tempItemModel());
        var dataCopyFood = new optionSelectFood(dataFood.foodId(), dataFood.foodName());

        var filterFoodJs = ko.utils.arrayFilter(vmViewIndex.menu.foodJs(), function (data) {
            return data.foodId == idDelete;
        });
        if (filterFoodJs.length > 0)
            vmViewIndex.menu.foodJs.replace(_.first(filterFoodJs), dataFoodJs);

        var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (data) {
            return data.foodId() == idDelete;
        });
        if (filterFood.length > 0)
            vmViewIndex.menu.food.replace(_.first(filterFood), dataFood);

        var filterOptionSelectPickerCopyFood = ko.utils.arrayFilter(vmViewIndex.menu.optionSelectPickerCopyFood(), function (data) {
            return data.foodId() == idDelete;
        });
        if (filterOptionSelectPickerCopyFood.length > 0)
            vmViewIndex.menu.optionSelectPickerCopyFood.replace(_.first(filterOptionSelectPickerCopyFood), dataCopyFood);

        ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
            ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
                var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
                    return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
                });
                if (!isEmpty(filterFood)) {
                    tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));

                }
            });
        });
        vmViewIndex.menu.dataMenu(tempDataMenu().slice());
        //End Added by SMILEDINING-SA21-0018#3

    } else {
        var idDelete = _.first(item).foodBaseId;
        var filterListFoodThirdPartyStore = ko.utils.arrayFilter(vmViewIndex.menu.listFoodThirdPartyStore(), function (data) {
            return data.foodBaseId() == idDelete;
        });
        //Modified by SMILEDINING-SA21-0018#2
        //ko.utils.arrayForEach(filterListFoodThirdPartyStore, function (data) {
        //    vmViewIndex.menu.listFoodThirdPartyStore.remove(data);
        //});
        //End Modified by SMILEDINING-SA21-0018#2
        vmViewIndex.menu.listFoodThirdPartyStore.removeAll(filterListFoodThirdPartyStore);      //Added and End by SMILEDINING-SA21-0018#2
        //Added by SMILEDINING-SA21-0018#3
        ko.utils.arrayForEach(item, function (data) {
            vmViewIndex.menu.listFoodThirdPartyStore.push(new DataFoodViewModel(data));
        });
        var foodId = _.first(item).foodBaseId;
        var filterFoodJs = ko.utils.arrayFilter(vmViewIndex.menu.foodJs(), function (itemFoodJs) {
            return (itemFoodJs.foodId == foodId);
        });

        if (!isEmpty(filterFoodJs)) {
            var foodJs = _.first(filterFoodJs.slice(0));
            foodJs.isThirdParty = false;
            vmViewIndex.menu.foodJs.replace(_.first(filterFoodJs), foodJs);
        }

        var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
            return (itemFood.foodId() == foodId);
        });

        if (!isEmpty(filterFood)) {
            var food = _.first(filterFood.slice(0));
            food.isThirdParty(false);
            vmViewIndex.menu.food.replace(_.first(filterFood), food);
        }
        var tempDataMenu = ko.observableArray([]);

        ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
            ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
                var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
                    return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
                });
                if (!isEmpty(filterFood)) {
                    tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
                }
            });
        });
        vmViewIndex.menu.dataMenu(tempDataMenu().slice());
        //End Added by SMILEDINING-SA21-0018#3
    }

    //Modified by SMILEDINING-SA21-0018#3
    //if (item.length == 1) {
    //    var tempDataMenu = ko.observableArray([]);
    //    var tempItemModel = ko.observableArray([]);
    //    ko.utils.arrayForEach(item, function (value) {
    //        var arrProductId = value.productId.split(',');
    //        value.arrProduct = new Array();
    //        ko.utils.arrayForEach(arrProductId, function (arrProductIdVal) {
    //            value.arrProduct.push(arrProductIdVal);
    //        });
    //    });
    //    ko.mapping.fromJS(item, {}, tempItemModel);
    //    ko.utils.arrayForEach(tempItemModel(), function (itemFood) {
    //        vmViewIndex.menu.foodJs.push(item);
    //        vmViewIndex.menu.food.push(itemFood);
    //        vmViewIndex.menu.optionSelectPickerCopyFood.push(new optionSelectFood(itemFood.foodId(), itemFood.foodName()));
    //    });

    //    ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
    //        ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
    //            var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
    //                return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
    //            });
    //            if (!isEmpty(filterFood)) {
    //                tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
    //            }
    //        });
    //    });
    //    vmViewIndex.menu.dataMenu(tempDataMenu().slice());
    //} else {
    //    ko.utils.arrayForEach(item, function (data) {
    //        //vmViewIndex.menu.listFoodThirdPartyStore.push(data);      //Modified and End by SMILEDINING-SA21-0018#2
    //        vmViewIndex.menu.listFoodThirdPartyStore.push(new DataFoodViewModel(data)); //Added and End by SMILEDINING-SA21-0018#2
    //    });
    //    //Added by SMILEDINING-SA21-0018#2
    //    var foodId = _.first(item).foodBaseId;
    //    var filterFoodJs = ko.utils.arrayFilter(vmViewIndex.menu.foodJs(), function (itemFoodJs) {
    //        return (itemFoodJs.foodId == foodId);
    //    });

    //    if (!isEmpty(filterFoodJs)) {
    //        var foodJs = _.first(filterFoodJs.slice(0));
    //        foodJs.isThirdParty = false;
    //        vmViewIndex.menu.foodJs.replace(_.first(filterFoodJs), foodJs);
    //    }

    //    var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
    //        return (itemFood.foodId() == foodId);
    //    });

    //    if (!isEmpty(filterFood)) {
    //        var food = _.first(filterFood.slice(0));
    //        food.isThirdParty(false);
    //        vmViewIndex.menu.food.replace(_.first(filterFood), food);
    //    }
    //    var tempDataMenu = ko.observableArray([]);

    //    ko.utils.arrayForEach(vmViewIndex.menu.foodSet(), function (itemFoodSet) {
    //        ko.utils.arrayForEach(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
    //            var filterFood = ko.utils.arrayFilter(vmViewIndex.menu.food(), function (itemFood) {
    //                return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
    //            });
    //            if (!isEmpty(filterFood)) {
    //                tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
    //            }
    //        });
    //    });
    //    vmViewIndex.menu.dataMenu(tempDataMenu().slice());
    //    //End Added by SMILEDINING-SA21-0018#2
    //}
    //End Modified by SMILEDINING-SA21-0018#3

    if (itemFoodChoiceMap.length > 0 && !isEmpty(itemFoodChoiceMap)) {
        for (var i = 0 ; i < itemFoodChoiceMap.length ; i++) {
            var filterFoodChoiceMap = ko.utils.arrayFilter(vmViewIndex.menu.foodChoiceMap(), function (foodChoiceMap) {
                return foodChoiceMap.foodId() == itemFoodChoiceMap[i].foodId;
            });
            vmViewIndex.menu.foodChoiceMap.removeAll(filterFoodChoiceMap);
            vmViewIndex.menu.choiceOptions.removeAll();
        }

        ko.utils.arrayForEach(itemFoodChoiceMap, function (itemFoodChoiceMap) {
            vmViewIndex.menu.foodChoiceMap.push(new DataFoodChoiceMapViewModel(itemFoodChoiceMap));
        });
    } else {
        for (var i = 0 ; i < item.length ; i++) {
            var filterFoodChoiceMap = ko.utils.arrayFilter(vmViewIndex.menu.foodChoiceMap(), function (foodChoiceMap) {
                return foodChoiceMap.foodId() == item[i].foodId;
            });
            vmViewIndex.menu.foodChoiceMap.removeAll(filterFoodChoiceMap);
        }
    }
    ko.utils.arrayForEach(itemGroupChoiceOption, function (itemGroupChoice) {
        var choiceOption = ko.utils.arrayFilter(vmViewIndex.menu.dataSetupFoodModal.groupChoiceOptionId(), function (valueChoiceOptionId) {
            return (itemGroupChoice == valueChoiceOptionId);
        });
        if (choiceOption.length == 0) {
            vmViewIndex.menu.dataSetupFoodModal.groupChoiceOptionId.push(itemGroupChoice);
        }
    });
    //Added by SMILEDINING-SA21-0018#6
    var thirdPartyGroup = ko.observableArray([]);
    ko.mapping.fromJS(itemGroupThirdParty, {}, thirdPartyGroup);
    vmViewIndex.menu.thirdPartyGroupStore(thirdPartyGroup());
    //End Added by SMILEDINING-SA21-0018#6
    vmViewIndex.menu.dataSetupFoodModal.clearSetupFood();
    vmViewIndex.showLoading(false);
    foodSetClick();
};

//End Added b SMILEDINING-SA21-0018

function setChoiceOption(item, val) {
    var itemModel = new DataChoiceOptionViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.configSetUp.choiceOption.dataArrayStore()._array.push(itemModel);
        vmViewIndex.configSetUp.choice.dataChoiceOption.push(item);
    } else {
        var filterChoiceOption = ko.utils.arrayFilter(vmViewIndex.configSetUp.choiceOption.dataArrayStore()._array, function (choiceOption) {
            return (choiceOption.choiceOptionId() == itemModel.choiceOptionId());
        });
        vmViewIndex.configSetUp.choiceOption.dataArrayStore().update(_.first(filterChoiceOption).choiceOptionId(), {
            choiceOptionName: itemModel.choiceOptionName(), choiceOptionNameAlt: itemModel.choiceOptionNameAlt(),
            //choiceMulti: itemModel.choiceMulti(), choiceRequire: itemModel.choiceRequire(), active: itemModel.active(),       //Modified and End by SMILEDINING-SA21-0001
            choiceMulti: itemModel.choiceMulti(), choiceNewLine: itemModel.choiceNewLine(), choiceRequire: itemModel.choiceRequire(), active: itemModel.active(), //Added and End by SMILEDINING-SA21-0001
            arrange: itemModel.arrange(), maxChoice: itemModel.maxChoice(), //Added and End by SMILEDINING-SA18-0003
            //listProductTag: itemModel.listProductTag()  //Added and End by SMILEDINING-SA21-0014 //Modified and End by SMILEDINING-SA21-0066#24
            listProductTag: itemModel.listProductTag(), plu: itemModel.plu(),  //Added and End by SMILEDINING-SA21-0066#24
        });
        var filterSelectChoiceOption = ko.utils.arrayFilter(vmViewIndex.configSetUp.choice.dataChoiceOption(), function (choiceOptionSelect) {
            return (choiceOptionSelect.choiceOptionId == item.choiceOptionId);
        });
        vmViewIndex.configSetUp.choice.dataChoiceOption.replace(_.first(filterSelectChoiceOption), item);
    }
    $('#modalSetUpChoiceOption').modal('hide');
    vmViewIndex.configSetUp.choiceOption.dataSetUpModal.clearSetUpChoiceOption();
    refreshGrid('gridChoiceOption');
};

function setChoice(item, val, prevItem) {
    var itemModel = new DataChoiceViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.configSetUp.choice.dataArrayStore()._array.push(itemModel);
        vmViewIndex.configSetUp.choice.dataChoice().push(itemModel);
    } else {
        var prevItemModel = new DataChoiceViewModel(prevItem);
        if (prevItemModel.choiceOptionId() != itemModel.choiceOptionId()) {
            var filterChoice = ko.utils.arrayFilter(vmViewIndex.configSetUp.choice.dataChoice(), function (choice) {
                return (choice.choiceOptionId() == prevItemModel.choiceOptionId() && choice.choiceId() == prevItemModel.choiceId());
            });
            vmViewIndex.configSetUp.choice.dataChoice.replace(_.first(filterChoice), itemModel);
            vmViewIndex.configSetUp.choice.dataArrayStore()._array.push(itemModel);
        } else {
            var filterChoice = ko.utils.arrayFilter(vmViewIndex.configSetUp.choice.dataArrayStore()._array, function (choice) {
                return (choice.choiceOptionId() == itemModel.choiceOptionId() && choice.choiceId() == itemModel.choiceId());
            });
            vmViewIndex.configSetUp.choice.dataArrayStore().update(_.first(filterChoice).choiceId(), {
                choiceName: itemModel.choiceName(), choiceNameAlt: itemModel.choiceNameAlt(), choiceOptionId: itemModel.choiceOptionId(),
                choicePrice: itemModel.choicePrice(), choiceWeight: itemModel.choiceWeight(), active: itemModel.active(),
                //listProductTag: itemModel.listProductTag()  //Added and End by SMILEDINING-SA21-0014 //Modified and End by SMILEDINING-SA21-0066#24
                listProductTag: itemModel.listProductTag(), plu: itemModel.plu(),  //Added and End by SMILEDINING-SA21-0066#24
            });
            var filterAllChoice = ko.utils.arrayFilter(vmViewIndex.configSetUp.choice.dataChoice(), function (choiceAll) {
                return (choiceAll.choiceOptionId() == itemModel.choiceOptionId() && choiceAll.choiceId() == itemModel.choiceId());
            });
            vmViewIndex.configSetUp.choice.dataChoice.replace(_.first(filterAllChoice), itemModel);
        }
    }
    vmViewIndex.configSetUp.choice.currentChoiceOptionSelect(itemModel.choiceOptionId());   //Added and End by SMILEDINING-SA20-0018
    ko.mapping.fromJS(vmViewIndex.configSetUp.choice.dataArrayStore()._array, {}, vmViewIndex.configSetUp.choice.cloneDataArrayStore);
    $('#modalSetUpChoice').modal('hide');
    //vmViewIndex.configSetUp.choice.dataSetUpModal.clearSetUpChoice(); //Modified and End by SMILEDINING-SA20-0018
    vmViewIndex.configSetUp.choice.dataSetUpModal.clearSetUpChoice(vmViewIndex.configSetUp.choice.dataSetUpModal);  //Added and End by SMILEDINING-SA20-0018
    refreshGrid('gridChoice');
};

//Added by SMILEDINING-SA18-0031
function setChoiceCopy(item) {
    _.forEach(item, function (value) {
        var itemModel = new DataChoiceViewModel(value);
        vmViewIndex.configSetUp.choice.dataArrayStore()._array.push(itemModel);
        vmViewIndex.configSetUp.choice.dataChoice().push(itemModel);
    });
    ko.mapping.fromJS(vmViewIndex.configSetUp.choice.dataArrayStore()._array, {}, vmViewIndex.configSetUp.choice.cloneDataArrayStore);
    vmViewIndex.configSetUp.choice.listCopyChoice([]);
    vmViewIndex.configSetUp.choice.visibleListCopyChoice(false);
    refreshGrid('gridChoice');
};
//End Added by SMILEDINING-SA18-0031

//Added by SMILEDINING-SA21-0066#25
function setChoiceUnlock(items) {
    _.forEach(items, function (value) {
        var itemModel = new DataChoiceViewModel(value);
        var filterAllChoice = ko.utils.arrayFilter(vmViewIndex.configSetUp.choice.dataChoice(), function (choiceAll) {
            return (choiceAll.choiceOptionId() == itemModel.choiceOptionId() && choiceAll.choiceId() == itemModel.choiceId());
        });
        var choiceUnlock = _.first(filterAllChoice);
        choiceUnlock.plu('');
        vmViewIndex.configSetUp.choice.dataChoice.replace(choiceUnlock, itemModel);
    });
    refreshGrid('gridChoice');
}
//End Added by SMILEDINING-SA21-0066#25

//Added by WEB-SA22-0045
function setChoiceUpDateSortable(items) {
    _.forEach(items, function (value) {
        var itemModel = new DataChoiceViewModel(value);
        var filterAllChoice = ko.utils.arrayFilter(vmViewIndex.configSetUp.choice.dataChoice(), function (choiceAll) {
            return (choiceAll.choiceOptionId() == itemModel.choiceOptionId() && choiceAll.choiceId() == itemModel.choiceId());
        });
        vmViewIndex.configSetUp.choice.dataChoice.replace(_.first(filterAllChoice), itemModel);
    });
}
//End Added by WEB-SA22-0045

//Added by SMILEDINING-SA20-0018
function setChoiceModify(item, val, prevItem) {
    var itemModel = new DataChoiceViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.configSetUp.choiceModify.dataArrayStore()._array.push(itemModel);
        vmViewIndex.configSetUp.choiceModify.dataChoice().push(itemModel);
    } else {
        var prevItemModel = new DataChoiceViewModel(prevItem);
        if (prevItemModel.choiceOptionId() != itemModel.choiceOptionId()) {
            var filterChoice = ko.utils.arrayFilter(vmViewIndex.configSetUp.choiceModify.dataChoice(), function (choice) {
                return (choice.choiceOptionId() == prevItemModel.choiceOptionId() && choice.choiceId() == prevItemModel.choiceId());
            });
            vmViewIndex.configSetUp.choiceModify.dataChoice.replace(_.first(filterChoice), itemModel);
            vmViewIndex.configSetUp.choiceModify.dataArrayStore()._array.push(itemModel);
        } else {
            var filterChoice = ko.utils.arrayFilter(vmViewIndex.configSetUp.choiceModify.dataArrayStore()._array, function (choiceModify) {
                return (choiceModify.choiceOptionId() == itemModel.choiceOptionId() && choiceModify.choiceId() == itemModel.choiceId());
            });
            vmViewIndex.configSetUp.choiceModify.dataArrayStore().update(_.first(filterChoice).choiceId(), {
                choiceName: itemModel.choiceName(), choiceNameAlt: itemModel.choiceNameAlt(), choiceOptionId: itemModel.choiceOptionId(),
                choicePrice: itemModel.choicePrice(), choiceWeight: itemModel.choiceWeight(), active: itemModel.active()
                 , choiceOperator: itemModel.choiceOperator()
                 , listProductTag: itemModel.listProductTag()  //Added and End by SMILEDINING-SA21-0014
            });
            var filterAllChoice = ko.utils.arrayFilter(vmViewIndex.configSetUp.choiceModify.dataChoice(), function (choiceAll) {
                return (choiceAll.choiceOptionId() == itemModel.choiceOptionId() && choiceAll.choiceId() == itemModel.choiceId());
            });
            vmViewIndex.configSetUp.choiceModify.dataChoice.replace(_.first(filterAllChoice), itemModel);
        }
    }
    vmViewIndex.configSetUp.choiceModify.currentChoiceOptionSelect(itemModel.choiceOptionId());
    ko.mapping.fromJS(vmViewIndex.configSetUp.choiceModify.dataArrayStore()._array, {}, vmViewIndex.configSetUp.choiceModify.cloneDataArrayStore);
    $('#modalSetUpChoiceModify').modal('hide');
    vmViewIndex.configSetUp.choiceModify.dataSetUpModal.clearSetUpChoice(vmViewIndex.configSetUp.choiceModify.dataSetUpModal);
    refreshGrid('gridChoiceModify');
};
function setChoiceModifyCopy(item) {
    _.forEach(item, function (value) {
        var itemModel = new DataChoiceViewModel(value);
        vmViewIndex.configSetUp.choiceModify.dataArrayStore()._array.push(itemModel);
        vmViewIndex.configSetUp.choiceModify.dataChoice().push(itemModel);
    });
    ko.mapping.fromJS(vmViewIndex.configSetUp.choiceModify.dataArrayStore()._array, {}, vmViewIndex.configSetUp.choiceModify.cloneDataArrayStore);
    vmViewIndex.configSetUp.choice.listCopyChoice([]);
    vmViewIndex.configSetUp.choice.visibleListCopyChoice(false);  
    refreshGrid('gridChoiceModify');
};
function setGraguityCharge(item, val) {
    var itemModel = new DataGraguityChargeViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.configSetUp.graguityCharge.data.push(itemModel);
    } else {
        var filterGraguityCharge = ko.utils.arrayFilter(vmViewIndex.configSetUp.graguityCharge.data(), function (graguityCharge) {
            return (graguityCharge.graguityId() == itemModel.graguityId());
        });
        vmViewIndex.configSetUp.graguityCharge.data.replace(_.first(filterGraguityCharge), itemModel);
    }
    $('#modalSetUpGraguityCharge').modal('hide');
    vmViewIndex.configSetUp.graguityCharge.dataSetUpModal.clearSetUpGraguityCharge();
    refreshGrid('gridGraguityCharge');
};
function setFoodPrefix(item, val) {
    var itemModel = new DataFoodPrefixViewModel(item);
    itemModel.active(itemModel.prefixStatus() == 'A' ? true : false);
    itemModel.isPrefixCal(itemModel.prefixCal() == 1 ? true : false);

    if (val == statusAdd) {
        vmViewIndex.configSetUp.foodPrefix.dataArrayStore()._array.push(itemModel);
    } else {
        var filter = ko.utils.arrayFilter(vmViewIndex.configSetUp.foodPrefix.dataArrayStore()._array, function (foodPrefix) {
            return (foodPrefix.prefixId() == itemModel.prefixId());
        });
        vmViewIndex.configSetUp.foodPrefix.dataArrayStore().update(_.first(filter).prefixId(), {
            prefixName: itemModel.prefixName(), prefixDesc: itemModel.prefixDesc(),
            prefixCal: itemModel.prefixCal(), prefixColorRed: itemModel.prefixColorRed(), prefixStatus: itemModel.prefixStatus(),
            prefixSorting: itemModel.prefixSorting(), isPrefixCal: itemModel.isPrefixCal(), active: itemModel.active()
        });
    }
    $('#modalSetUpFoodPrefix').modal('hide');
    vmViewIndex.configSetUp.foodPrefix.dataSetUpModal.clearSetUpFoodPrefix();
    refreshGrid('gridFoodPrefix');
};
function setGraguityChargeSetting() {
    vmViewIndex.allSetting.dataGratuity.btnCloseGratuityCharge();
};
//End Added by SMILEDINING-SA20-0018

function setTaxRate(item, val) {
    var itemModel = new DataTaxRateViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.configSetUp.taxRate.data.push(itemModel);
        vmViewIndex.configSetUp.revenueClass.dataTaxRate.push(itemModel);
    } else {
        var filterTaxRate = ko.utils.arrayFilter(vmViewIndex.configSetUp.taxRate.data(), function (taxRate) {
            return (taxRate.taxRateId() == itemModel.taxRateId());
        });
        vmViewIndex.configSetUp.taxRate.data.replace(_.first(filterTaxRate), itemModel);
        var filterTaxRateSelect = ko.utils.arrayFilter(vmViewIndex.configSetUp.revenueClass.dataTaxRate(), function (taxRateSelect) {
            return (taxRateSelect.taxRateId() == itemModel.taxRateId());
        });
        vmViewIndex.configSetUp.revenueClass.dataTaxRate.replace(_.first(filterTaxRateSelect), itemModel);
    }
    $('#modalSetUpTaxRate').modal('hide');
    vmViewIndex.configSetUp.taxRate.dataSetUpModal.clearSetUpTaxRate();
    refreshGrid('gridTaxRate');
};

function setRevenueClass(item, val, prevItem) {
    var itemModel = new DataRevenueClassViewModel(item);
    if (val == statusAdd) {
        vmViewIndex.configSetUp.revenueClass.data.push(itemModel);
        vmViewIndex.configSetUp.revenueClass.dataRevenueClass.push(itemModel);
    } else {
        var prevItemModel = new DataRevenueClassViewModel(prevItem);
        if (prevItemModel.taxRateId() != itemModel.taxRateId()) {
            var filterRevenueClass = ko.utils.arrayFilter(vmViewIndex.configSetUp.revenueClass.dataRevenueClass(), function (revenueClass) {
                return (revenueClass.taxRateId() == prevItemModel.taxRateId() && revenueClass.revenueClassId() == prevItemModel.revenueClassId());
            });
            vmViewIndex.configSetUp.revenueClass.data.push(itemModel);
            vmViewIndex.configSetUp.revenueClass.dataRevenueClass.replace(_.first(filterRevenueClass), itemModel);
        } else {
            var filterRevenueClass = ko.utils.arrayFilter(vmViewIndex.configSetUp.revenueClass.data(), function (revenueClass) {
                return (revenueClass.taxRateId() == itemModel.taxRateId() && revenueClass.revenueClassId() == itemModel.revenueClassId());
            });
            vmViewIndex.configSetUp.revenueClass.data.replace(_.first(filterRevenueClass), itemModel);
            var filterAllRevenueClass = ko.utils.arrayFilter(vmViewIndex.configSetUp.revenueClass.dataRevenueClass(), function (revenueClassAll) {
                return (revenueClassAll.taxRateId() == itemModel.taxRateId() && revenueClassAll.revenueClassId() == itemModel.revenueClassId());
            });
            vmViewIndex.configSetUp.revenueClass.dataRevenueClass.replace(_.first(filterAllRevenueClass), itemModel);
        }
    }
    $('#modalSetUpRevenueClass').modal('hide');
    vmViewIndex.configSetUp.revenueClass.dataSetUpModal.clearSetUpRevenueClass();
    refreshGrid('gridRevenueClass');
};

//Added by SMILEDINING-SA21-0021
function setIcon(item, val) {
    var itemModel = new DataIconViewModel(item);

    if (val == statusAdd) {
        vmViewIndex.configSetUp.iconSetup.dataArrayStore.push(itemModel);
    } else {
        var filterIcon = ko.utils.arrayFilter(vmViewIndex.configSetUp.iconSetup.dataArrayStore(), function (icon) {
            return (icon.iconId() == itemModel.iconId());
        });
        vmViewIndex.configSetUp.iconSetup.dataArrayStore.replace(_.first(filterIcon), itemModel);
    }
    $('#modalSetUpIcon').modal('hide');
    vmViewIndex.configSetUp.iconSetup.dataSetUpModal.clearSetUpIcon();
    refreshGrid('gridIcon');
};
//End Added by SMILEDINING-SA21-0021

function clickPrint(item, event) {
    var id = $('#' + event.target.value + '');
    var divContents = id.html();
    var removeMobile = removeTag('.phone', divContents);
    var removeCollapse = removeTag('#collapseBill', removeMobile);
    var removeH6 = removeTag('.h6', removeCollapse);
    var removeNoData = removeTag('.dx-datagrid-nodata', removeH6);
    var removePageSizes = removeTag('.dx-page-sizes', removeNoData);
    var dataResult = removeTag('.dx-pages', removePageSizes);
    printWindow(dataResult);
};
//Added by SMILEDINING-SA22-0013#5
function clickPrintDeliveryBilling(item, event) {
    //$('#gridDeliveryBilling tbody').css('font-size', 14 + 'px'); //Modified and End by SMILEDINING-SA22-0033
    //Added by SMILEDINING-SA22-0033
    var tagTbody = $('#gridDeliveryBilling tbody');
    tagTbody.css('font-size', '14px');
    var tagShopStreet = $('#divDeliveryBillingPrint .shop-street');
    tagShopStreet.css({ 'width': '20rem', 'margin': '0'});
    var tagTableColumn_1 = $('#divDeliveryBillingPrint .table-head-color .column-1');
    tagTableColumn_1.css('width', '7.9rem');
    //End Added by SMILEDINING-SA22-0033
    var id = $('#' + event.target.value + '');
    var divContents = id.html();
    var removeCollapse = removeTag('#collapseBill', divContents);
    var removeNoData = removeTag('.dx-datagrid-nodata', removeCollapse);
    var removePageSizes = removeTag('.dx-page-sizes', removeNoData);
    var dataResult = removeTag('.dx-pages', removePageSizes);
    
    printWindow(dataResult);
    //Added by SMILEDINING-SA22-0033
    tagTbody.css('font-size', '');
    tagShopStreet.css({ 'width': '', 'margin': ''});
    tagTableColumn_1.css('width', '');
    //End Added by SMILEDINING-SA22-0033
};
//End Added by SMILEDINING-SA22-0013#5

function clickPrintBill(item) {
    //var getId = item.restaurantAndTicketId();     //Modified and End by SMILEDINING-SA20-0007
    var getId = item.ticketId();                    //Added and End by SMILEDINING-SA20-0007
    var divContents = $('div.btnPrintBill#' + getId + '');
    var removeDivGb = removeTag('div.gb_margin-printbill', divContents.html());
    var removeBtn = removeTag('button', removeDivGb);
    var dataResult = removeTag('tr.hidden-md-up', removeBtn);
    printWindow(dataResult);
};

function printWindow(dataResult) {
    var printWindow = window.open('', '_blank', 'resizable=yes, width=800, height=768');
    printWindow.document.write('<html><head><title></title>');
    printWindow.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" type="text/css" />');
    printWindow.document.write('<style type="text/css">' +
                               '@page {size: 21cm 29.7cm;margin: 10mm 6mm 10mm 10mm;}' +
                               '</style>'
    );
    printWindow.document.write('</head><body><div class="row"><div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block">');
    printWindow.document.write(dataResult);
    printWindow.document.write('</div></div></body></html>');
    printWindow.document.close();
    setTimeout(function () {
        printWindow.print();
    }, 1000);
};

function foodSetClick() {
    $('#tabFoodSet' + vmViewIndex.menu.selectFoodSetSorting()).click();
};


