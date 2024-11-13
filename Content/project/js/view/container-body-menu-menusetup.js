/*
    SMILEDINING-SA18-0012     05/21/2018      Customize     1. Add FoodNameAlt
    SMILEDINING-SA18-0019     07/11/2018      Customize     1. Fixbug Drag FoodCategory Sorting
    SMILEDINING-SA20-0006     06/23/2020      Customize     1. Add checkbox Smile Contactless Dining on Menu Setup and update ProductID in database when update,add,copy food 
                                                            2. Add filter Product on Menu Setup
    SMILEDINING-SA20-0010     16/07/2020      Customize     1. New feature set Out of Stock.
    SMILEDINING-SA20-0016     21/10/2020      Customize     1. Promotion free food.
    SMILEDINING-SA21-0014     08/03/2021      Customize     1. Add new product 'Smile Third Party Integrations' used Deliverect.
    SMILEDINING-SA21-0018     21/05/2021      Customize     1. Setting food detail by third party to deliverect.
    SMILEDINING-SA21-0018#2   27/05/2021      Customize     1. Fixed bug setting Third Party Integrations.
    SMILEDINING-SA21-0018#3   28/05/2021      Customize     1. Fixed bug save choice and save image.
    SMILEDINING-SA21-0018#5   31/05/2021      Customize     1. Fixed bug split group and copy foodSet.
    SMILEDINING-SA21-0021     11/06/2021      Customize     1. Setting icon image for show in smileDining.
    SMILEDINING-SA21-0024#1   25/06/2021      Customize     1. Fixed bug copy choice can not copying food with duplicate choices.
    SMILEDINING-SA21-0060     23/09/2021      Customize     1. Fix bug Menu Setup when move FoodSet or FoodCat for change sorting.
                                                            2. Fix bug Menu Setup when click FoodSet and show invalid data.
                                                            3. Fix bug Menu Setup when click collapse FoodCat and collapse invalid data.
    SMILEDINING-SA21-0066#6   17/11/2021      Customize     1. Fix bug WebOwner disable edit food and choice and choiceOption from deliverect, and edit path food image from deliverect.
                                                            2. Fix bug WebDining edit path food image and plu from deliverect, and alert confirm payment when channel is busy mode.
    SMILEDINING-SA21-0060#1   18/11/2021      Customize     1. Fix bug WebOwner in Menu Setup when move FoodCat for sorting and edit collapse show to don't show.
    SMILEDINING-SA21-0066#7   22/11/2021      Customize     1. Fix bug disable edit choice and choiceOption from deliverect and copy food in webOwner.
    SMILEDINING-SA21-0066#20  25/02/2022      Customize     1. Fix bug food imageThirdparty when edit image for food in WebOwner.
    SMILEDINING-SA21-0066#21  04/03/2022      Customize     1. Fix bug edit food for disable choice and choiceOption from Deliverect and copy food in webOwner.
    SMILEDINING-SA21-0066#23  07/03/2022      Customize     1. Fix bug disable click clear copy food for Deliverect in webOwner.
    SMILEDINING-SA21-0066#24  15/03/2022      Customize     1. Add unlock food, choice and choiceOption from Deliverect in webOwner.
    WEB-SA23-0001             09/01/2023      Customize     1. Use MQTT send data to kiosk  in webOwner.
    WEB-SA23-0026#1           15/05/2023      Customize     1. Fix bug auto sync product deliverect when log out and close browser on webOwner.
    WEB-SA23-0044             04/08/2023      Customize     1. Fix bug copy food from third party foodset to Smile Dining foodset and drag foodset on webOwner.
*/

function swalConfirmSaveMenuDragging(jsonObj, dataItem, dataItemDrag) {
    swal({
        title: "Are you sure, you want to save?",
        type: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: false,
        confirmButtonClass: "btn theme default-button",
        cancelButtonClass: "btn btn-danger",
        preConfirm: function (e) {
            var objUrl = new ObjUrl(jsonObj);
            var requestUrl = objUrl.getUrlFromJson();
            var passData = { 'model': dataItem, 'modelDrag': dataItemDrag };
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
                    vmViewIndex.menu.foodSetJs(ko.mapping.toJS(vmViewIndex.menu.foodSet));
                    vmViewIndex.menu.foodCategoryJs(ko.mapping.toJS(vmViewIndex.menu.foodCategory));
                    vmViewIndex.menu.foodJs(ko.mapping.toJS(vmViewIndex.menu.food));

                    vmViewIndex.menu.tempDataDragging([]);
                    vmViewIndex.menu.tempItemDragging([]);
                    vmViewIndex.menu.chkDrag(false);

                    MapDataMenu(vmViewIndex.menu.foodSetJs(), vmViewIndex.menu.foodCategoryJs(), vmViewIndex.menu.foodJs(), vmViewIndex.menu.foodSetTimeMapJs()
                    //, vmViewIndex.menu.valueFilterMenuFoodSet(), vmViewIndex.menu.valueFilterMenuFoodCat(), vmViewIndex.menu.valueFilterMenuFood());  //Modified by SMILEDINING-SA20-0006
                    , vmViewIndex.menu.valueFilterMenuFoodSet(), vmViewIndex.menu.valueFilterMenuFoodCat(), vmViewIndex.menu.valueFilterMenuFood(), products.cAllProduct); //Added and End by SMILEDINING-SA20-0006

                    $(".foodSetDrag").sortable("enable");
                    $(".foodCatDrag").sortable('enable');
                    $(".foodDrag").sortable("enable");
                    //Added by WEB-SA23-0001
                    if (result.status) {
                        switch (jsonObj) {
                            case cFoodSetUpdateDragging:
                                var itemKiosk = !isEmpty(result.obj) ? JSON.parse(result.obj) : null;
                                if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) { 
                                    var itemFoodSetKiosk = [];
                                    _.forEach(itemKiosk, function (item) {
                                        var foodFilter = ko.utils.arrayFirst(vmViewIndex.menu.food(), function (food) {
                                            return item.foodSetId == food.foodSetId() && food.active() && food.productId().includes(products.cSmileContactless)
                                        });
                                        if (!isEmpty(foodFilter))
                                            itemFoodSetKiosk.push(item);
                                    });
                                    if (!isEmpty(itemFoodSetKiosk)) {
                                        sendMqtt(itemFoodSetKiosk, getTopicMqtt('foodSet'));
                                    }
                                }
                                break;
                            case cFoodCategoryUpdateDragging:
                                var itemKiosk = !isEmpty(result.obj) ? JSON.parse(result.obj) : null;
                                if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) { 
                                    sendMqtt(itemKiosk, getTopicMqtt('foodCategory'));
                                }
                                break;
                            case cFoodUpdateDragging:
                                var item = !isEmpty(result.obj) ? JSON.parse(result.obj) : null;
                                if (vmViewIndex.isKiosk() && !isEmpty(item)) {
                                    var itemKiosk = _.filter(item, function (v) {
                                        return v.productId.includes(products.cSmileContactless) && v.active;
                                    });
                                    if (!isEmpty(itemKiosk)) {
                                        sendMqtt(itemKiosk, getTopicMqtt('food'));
                                    }
                                }
                                break;
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
    }
    , function (dismiss) {
        if (dismiss === 'cancel') {
            vmViewIndex.showLoading(true);
            undoMenuDragging();
            swal('Cancelled', '', cSwal_Icon_Error);
            vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
        };
    });
};

function undoMenuDragging() {
    vmViewIndex.menu.chkDrag(false);
    MapDataMenu(vmViewIndex.menu.foodSetJs(), vmViewIndex.menu.foodCategoryJs(), vmViewIndex.menu.foodJs(), vmViewIndex.menu.foodSetTimeMapJs()
            //, vmViewIndex.menu.valueFilterMenuFoodSet(), vmViewIndex.menu.valueFilterMenuFoodCat(), vmViewIndex.menu.valueFilterMenuFood());  //Modified by SMILEDINING-SA20-0006
            , vmViewIndex.menu.valueFilterMenuFoodSet(), vmViewIndex.menu.valueFilterMenuFoodCat(), vmViewIndex.menu.valueFilterMenuFood(), products.cAllProduct); //Added and End by SMILEDINING-SA20-0006

    vmViewIndex.menu.dataMenu.valueHasMutated();
    vmViewIndex.menu.tempDataDragging([]);
    vmViewIndex.menu.tempItemDragging([]);
    $(".foodSetDrag").sortable("enable");
    $(".foodCatDrag").sortable('enable');
    $(".foodDrag").sortable("enable");
    vmViewIndex.showLoading(false);
};

function initMenuDragging(element, foodClass, dragHandle, foodType, key, columnIndex, dataStore, tempData, tempItem) {
    var draggingRowKey;
    var targetRowKey;
    var draggingSorting;
    var targetSorting;
    var indexDrag = 0;
    var indexDrop = 0;
    var isChange = 0;
    var ckChange = false;
    var oldIndex;
    var oldFoodSetId;

    $(element).sortable({
        handle: dragHandle,
        cursor: 'move',
        forcePlaceholderSize: false,
        opacity: 0.4,
        placeholder: 'placeholder',
        cursorAt: { top: 0, left: 0 },
        start: function (event, ui) {
            oldIndex = ui.item.index();
            oldFoodSetId = _.first(ui.item).id;
        },
        update: function (event, ui) {
            ckChange = true;
            oldFoodSetId = _.first(ui.item).id;
        },
        stop: function (event, ui) {
            var newFoodSetId = _.first(ui.item).id;
            if (ckChange != false) {   //New Position
                var newIndex = ui.item.index();
                var items = $('.' + foodClass + '> div');
                if (foodType == "foodSet") {
                    //Modified by WEB-SA23-0044
                    //items = $('.' + foodClass + '> label');
                    //oldIndex = Math.ceil(oldIndex / 2) - 1;
                    //newIndex = Math.ceil(newIndex / 2) - 1;
                    //End Modified by WEB-SA23-0044
                    items = $('.' + foodClass + '> span'); //Added and End by WEB-SA23-0044
                }
                var movingForward = newIndex > oldIndex;
                var nextIndex = newIndex + (movingForward ? -1 : 1);
                var draggingDirection = (newIndex < oldIndex) ? 1 : -1;

                if (oldIndex != newIndex) {
                    // Find the element to move
                    var itemToMove = items.get(nextIndex);
                    if (itemToMove) {

                        indexDrag = oldIndex;
                        indexDrop = newIndex;

                        switch (foodType) {
                            case "foodSet":
                                // Find the element at the index where we want to move the itemToMove
                                var newLocation = $(items.get(oldIndex));
                                // Decide if it goes before or after
                                if (movingForward) {
                                    $(itemToMove).insertBefore(newLocation);
                                } else {
                                    $(itemToMove).insertAfter(newLocation);
                                }

                                $(".foodCatDrag").sortable("disable");
                                $(".foodDrag").sortable("disable");

                                draggingRowKey = items.get(newIndex).id;
                                filterDragging = ko.utils.arrayFilter(dataStore(), function (item) {
                                    return (item.foodSet.foodSetId() == draggingRowKey);
                                });

                                targetRowKey = items.get(nextIndex).id;
                                var filterDropping = ko.utils.arrayFilter(dataStore(), function (item) {
                                    return (item.foodSet.foodSetId() == targetRowKey);
                                });

                                draggingSorting = _.first(filterDragging).foodSet.foodSetSorting();
                                targetSorting = _.first(filterDropping).foodSet.foodSetSorting();
                                //Added by SMILEDINING-SA21-0060
                                if (draggingSorting == targetSorting) {
                                    if (indexDrag > indexDrop) {
                                        if (targetSorting == 1) {
                                            draggingSorting += 1;
                                        } else {
                                            targetSorting -= 1;
                                        }                                        
                                    } else {
                                        targetSorting += 1;
                                    }
                                }
                                //End Added by SMILEDINING-SA21-0060

                                var executedDrag = false;
                                var executedDrop = false;

                                ko.utils.arrayForEach(dataStore(), function (item) {
                                    if (item.foodSet.foodSetId() == draggingRowKey) {
                                        item.foodSet.foodSetSorting(targetSorting);
                                        if (!executedDrag) {
                                            executedDrag = true;
                                            tempData.push(item.foodSet);
                                            tempItem.push(item.foodSet);
                                        }
                                    }
                                    else if (item.foodSet.foodSetId() == targetRowKey) {
                                        item.foodSet.foodSetSorting(draggingSorting);
                                        if (!executedDrop) {
                                            executedDrop = true;
                                            tempData.push(item.foodSet);
                                        }
                                    }
                                });
                                break;

                            case "foodCategory":
                                $(".foodSetDrag").sortable("disable");
                                $(".foodDrag").sortable("disable");
                                draggingRowKey = dataStore()[indexDrag][foodType][key]();
                                targetRowKey = dataStore()[indexDrop][foodType][key]();
                                draggingSorting = dataStore()[indexDrag][foodType][columnIndex];
                                targetSorting = dataStore()[indexDrop][foodType][columnIndex];
                                //Added by SMILEDINING-SA21-0060
                                if (draggingSorting() == targetSorting()) {
                                    var indexTarget = targetSorting();
                                    var indexDragging = draggingSorting();
                                    if (indexDrag > indexDrop) {
                                        if (indexTarget == 1) {
                                            indexDragging += 1;
                                            draggingSorting(indexDragging);
                                        } else {
                                            indexTarget -= 1;
                                        }                                        
                                    } else {
                                        indexTarget += 1;
                                    }
                                    targetSorting(indexTarget);
                                }
                                //End Added by SMILEDINING-SA21-0060

                                var targetIndexOld = ko.observable();
                                var tempDataItemOld = ko.observableArray([]);
                                ko.mapping.fromJS(targetSorting(), {}, targetIndexOld);
                                ko.mapping.fromJS(dataStore(), {}, tempDataItemOld);
                                var dataItemOld = ko.mapping.toJS(tempDataItemOld);

                                if ((Math.max(indexDrag, indexDrop) - Math.min(indexDrag, indexDrop)) > 1) {
                                    //for (var i = 0; i < dataStore().length; i++) {    //Modified and End by SMILEDINING-SA18-0019
                                    for (var i = Math.min(indexDrag, indexDrop) ; i < Math.max(indexDrag, indexDrop) ; i++) {  //Added and End by SMILEDINING-SA18-0019
                                        if ((dataStore()[i][foodType][columnIndex]() < Math.max(draggingSorting(), targetSorting()))
                                        && (dataStore()[i][foodType][columnIndex]() > Math.min(targetSorting(), draggingSorting()))) {
                                            dataStore()[i][foodType][columnIndex](dataItemOld[i + draggingDirection][foodType][columnIndex]);
                                            tempData.push(dataStore()[i][foodType]);
                                        }
                                    }
                                }

                                for (var i = 0; i < dataStore().length; i++) {
                                    if (dataStore()[i][foodType][key]() == draggingRowKey) {
                                        dataStore()[i][foodType][columnIndex](targetSorting());
                                        tempData.push(dataStore()[i][foodType]);
                                        tempItem.push(dataStore()[i][foodType]);
                                    }
                                }

                                for (var i = 0; i < dataStore().length; i++) {
                                    if (dataStore()[i][foodType][key]() == targetRowKey) {
                                        dataStore()[i][foodType][columnIndex](dataItemOld[i + draggingDirection][foodType][columnIndex]);
                                        tempData.push(dataStore()[i][foodType]);
                                    }
                                }

                                var itemsDrag = dataStore()[indexDrag];
                                $("div[data-id='foodCat" + indexDrag + "']").remove();
                                dataStore.remove(function (item) {
                                    return item.foodCategory.foodCatId() == draggingRowKey;
                                });
                                dataStore.splice(indexDrop, 0, itemsDrag);
                                //Added by SMILEDINING-SA21-0060#1
                                var foodCatHeadId = '#head' + itemsDrag.foodSet.foodSetSorting() + '_' + itemsDrag.foodCategory.foodCatSorting();
                                $(foodCatHeadId).find('a.link-zoom').click();
                                //End Added by SMILEDINING-SA21-0060#1
                                break;

                            case "food":
                                $(".foodSetDrag").sortable("disable");
                                $(".foodCatDrag").sortable("disable");

                                var foodCatIndexDrag = _.first(ui.item).offsetParent.id;
                                draggingRowKey = dataStore()[foodCatIndexDrag][foodType][indexDrag][key]();
                                targetRowKey = dataStore()[foodCatIndexDrag][foodType][indexDrop][key]();
                                draggingSorting = dataStore()[foodCatIndexDrag][foodType][indexDrag][columnIndex];
                                targetSorting = dataStore()[foodCatIndexDrag][foodType][indexDrop][columnIndex];

                                var targetIndexOld = ko.observable();
                                var tempDataItemOld = ko.observableArray([]);
                                ko.mapping.fromJS(targetSorting(), {}, targetIndexOld);
                                ko.mapping.fromJS(dataStore(), {}, tempDataItemOld);
                                var dataItemOld = ko.mapping.toJS(tempDataItemOld);

                                for (var i = 0; i < dataStore()[foodCatIndexDrag][foodType].length; i++) {
                                    if ((dataStore()[foodCatIndexDrag][foodType][i][columnIndex]() < Math.max(draggingSorting(), targetSorting()))
                                    && (dataStore()[foodCatIndexDrag][foodType][i][columnIndex]() > Math.min(targetSorting(), draggingSorting()))) {
                                        dataStore()[foodCatIndexDrag][foodType][i][columnIndex](dataItemOld[foodCatIndexDrag][foodType][i + draggingDirection][columnIndex]);
                                        tempData.push(dataStore()[foodCatIndexDrag][foodType][i]);
                                    }
                                }

                                for (var i = 0; i < dataStore()[foodCatIndexDrag][foodType].length; i++) {
                                    if (dataStore()[foodCatIndexDrag][foodType][i][key]() == draggingRowKey) {
                                        dataStore()[foodCatIndexDrag][foodType][i][columnIndex](targetSorting());
                                        tempData.push(dataStore()[foodCatIndexDrag][foodType][i]);
                                        tempItem.push(dataStore()[foodCatIndexDrag][foodType][i]);
                                    }
                                }

                                for (var i = 0; i < dataStore()[foodCatIndexDrag][foodType].length; i++) {
                                    if (dataStore()[foodCatIndexDrag][foodType][i][key]() == targetRowKey) {
                                        dataStore()[foodCatIndexDrag][foodType][i][columnIndex](dataItemOld[foodCatIndexDrag][foodType][i + draggingDirection][columnIndex]);
                                        tempData.push(dataStore()[foodCatIndexDrag][foodType][i]);
                                    }
                                }

                                var itemFoodCatDrag = dataStore()[foodCatIndexDrag].foodCategory.foodCatId();
                                var itemsDrag = dataStore()[foodCatIndexDrag][foodType][indexDrag];

                                dataStore()[foodCatIndexDrag][foodType].splice(indexDrag, 1);
                                dataStore()[foodCatIndexDrag][foodType].splice(indexDrop, 0, itemsDrag);
                                break;
                        }
                        //check foodType
                    }
                    vmViewIndex.menu.foodTypeDragging = foodType;
                    vmViewIndex.menu.chkDrag(true);
                }//drag!=drop
            }
            event.stopImmediatePropagation();
            vmViewIndex.menu.dataMenu.valueHasMutated();
        } //end stop
    });  //sortable
    //End Sort
};

//function CopyfoodInFoodCategory(foodId, tempId, foodName, foodDesc        //Modified and End by SMILEDINING-SA18-0012
//function CopyfoodInFoodCategory(foodId, tempId, foodName, foodNameAlt, foodDesc     //Added and End by SMILEDINING-SA18-0012  //Modified and End by SMILEDINING-SA20-0006
function CopyfoodInFoodCategory(foodId, tempId, foodName, foodNameAlt, foodDesc, productId    //Added and End by SMILEDINING-SA20-0006
                       , foodPrice, image
                       , active, revenueClassId, taxRateId
                       //, foodCatId, foodSetId, option) { //Modified and End by SMILEDINING-SA20-0010
                       //Added by SMILEDINING-SA20-0010
                       , foodCatId, foodSetId, option, isOutStock
                       , isFree, isShow //Add and End by SMILEDINING-SA20-0016
                       , listProductTag //Added and End by SMILEDINING-SA21-0014
                       , plu, imageThirdParty //Added and End by SMILEDINING-SA21-0066#20
                       ) {
                       //End Added by SMILEDINING-SA20-0010
    var self = this;
    self.FoodId = ko.observable(foodId);
    self.TempId = ko.observable(tempId);
    self.FoodName = ko.observable(foodName);
    self.FoodNameAlt = ko.observable(foodNameAlt); //Added and End by SMILEDINING-SA18-0012
    self.FoodDesc = ko.observable(foodDesc);
    self.FoodPrice = ko.observable(foodPrice);
    self.Image = ko.observable(image);
    self.Active = ko.observable(active);
    self.RevenueClassId = ko.observable(revenueClassId);
    self.TaxRateId = ko.observable(taxRateId);
    self.FoodCatId = ko.observable(foodCatId);
    self.FoodSetId = ko.observable(foodSetId);
    self.AllChoiceOptions = ko.observable(option);
    self.ProductId = ko.observable(productId()); //Added and End by SMILEDINING-SA20-0006
    self.IsOutStock = ko.observable(isOutStock); // Added and End by SMILEDINING-SA20-0010
    //Added by SMILEDINING-SA20-0016
    self.IsFree = ko.observable(isFree);
    self.IsShow = ko.observable(isShow);
    //End Added by SMILEDINING-SA20-0016
    self.ProductTagMap = ko.observable(ko.toJSON(listProductTag)); //Added and End by SMILEDINING-SA21-0014
    //Added by SMILEDINING-SA21-0066#20
    self.Plu = ko.observable(plu);
    self.ImageThirdParty = ko.observable(imageThirdParty);
    //End Added by SMILEDINING-SA21-0066#20
};

function getChoiceOptions(checkData) {
    var self = this;
    self.ChoiceOptionId = ko.observable('');
    self.ChoiceOptionName = ko.observable('');
    self.Active = ko.observable(true);
    self.CheckData = ko.observable(checkData);
    self.Choice = ko.observableArray([]);
    self.Plu = ko.observable(''); //Added and End by SMILEDINING-SA21-0066#21
};

//function getChoice(choiceId, choiceName, choicePrice, choiceOptionId, isDefault, checkedIsDefault) { //Modified and End by SMILEDINING-SA21-0066#21
function getChoice(choiceId, choiceName, choicePrice, choiceOptionId, isDefault, checkedIsDefault, plu) { //Added and End by SMILEDINING-SA21-0066#21
    var self = this;
    self.ChoiceId = ko.observable(choiceId);
    self.ChoiceName = ko.observable(choiceName);
    self.ChoicePrice = ko.observable(choicePrice).extend({ numeric: 2 });
    self.ChoiceOptionId = ko.observable(choiceOptionId);
    self.IsDefault = ko.observable(isDefault);
    self.checkedIsDefault = ko.observable(checkedIsDefault);
    self.Plu = ko.observable(plu); //Added and End by SMILEDINING-SA21-0066#21
};

function optionSelectFoodSet(id, name) {
    var self = this;
    self.foodSetId = ko.observable(id);
    self.foodSetName = ko.observable(name);
};

function optionSelectFoodCategory(id, name, foodSetId) {
    var self = this;
    self.foodCatId = ko.observable(id);
    self.foodCatName = ko.observable(name);
    self.foodSetId = ko.observable(foodSetId);
};

function optionSelectFood(id, name) {
    var self = this;
    self.foodId = ko.observable(id);
    self.foodName = ko.observable(name);
};

function optionSelectRevenue(id, name, taxRateId) {
    var self = this;
    self.revenueClassId = ko.observable(id);
    self.revenueClassName = ko.observable(name);
    self.taxRateId = ko.observable(taxRateId);
};

//function optionSelectChoiceOption(id, name) { //Modified and End by SMILEDINING-SA21-0066#21
function optionSelectChoiceOption(id, name, plu) { //Added and End by SMILEDINING-SA21-0066#21
    var self = this;
    self.choiceOptionId = ko.observable(id);
    self.choiceOptionName = ko.observable(name);
    self.plu = ko.observable(plu); //Added and End by SMILEDINING-SA21-0066#21
};

function optionSelectChoiceOptionTemp(id, name) {
    var self = this;
    self.choiceOptionId = ko.observable(id);
    self.choiceOptionName = ko.observable(name);
    self.choice = ko.observableArray([]);
};

//function optionSelectChoice(id, name, price) { //Modified and End by SMILEDINING-SA21-0066#21
function optionSelectChoice(id, name, price, plu) { //Added and End by SMILEDINING-SA21-0066#21
    var self = this;
    self.choiceId = ko.observable(id);
    self.choiceName = ko.observable(name);
    self.choicePrice = ko.observable(price);
    self.plu = ko.observable(plu); //Added and End by SMILEDINING-SA21-0066#21
};

//Added by SMILEDINING-SA21-0018
function getThirdPartyGroup(listThirdParty) {
    var self = this;
    self.listThirdParty = ko.observableArray(listThirdParty);
};
function mapDataFoodToModal(data, event, isClickSelect) {
    var self = vmViewIndex.menu;
    self.dataSetupFoodModal.foodId(data.foodId());
    self.dataSetupFoodModal.foodName(data.foodName());
    self.dataSetupFoodModal.foodNameAlt(data.foodNameAlt());
    self.dataSetupFoodModal.foodPrice(data.foodPrice());
    self.dataSetupFoodModal.foodDesc(data.foodDesc());
    self.dataSetupFoodModal.active(data.active());
    self.dataSetupFoodModal.foodSetId(data.foodSetId());
    self.dataSetupFoodModal.foodCatId(data.foodCatId());
    self.dataSetupFoodModal.revenueClassId(data.revenueClassId());
    self.dataSetupFoodModal.taxRateId(data.taxRateId());
    var filterFoodCategory = ko.utils.arrayFilter(self.tempDataFoodCategory(), function (itemFoodCategory) {
        return itemFoodCategory.foodSetId() == data.foodSetId();
    });
    self.optionSelectPickerFoodCategory(filterFoodCategory);
    self.dataSetupFoodModal.isOutStock(data.isOutStock());

    self.dataSetupFoodModal.isFree(data.isFree());
    self.dataSetupFoodModal.isShow(data.isShow());

    self.dataSetupFoodModal.tempId(data.tempId());
    self.dataSetupFoodModal.image(data.image());
    //Added by SMILEDINING-SA21-0066#6
    self.dataSetupFoodModal.imageThirdParty(data.imageThirdParty());
    self.dataSetupFoodModal.plu(data.plu());
    //End Added by SMILEDINING-SA21-0066#6
    self.dataSetupFoodModal.listProductTag(data.listProductTag());

    self.dataSetupFoodModal.isThirdParty(data.isThirdParty());
    self.dataSetupFoodModal.foodBaseId(data.foodBaseId());
    self.dataSetupFoodModal.thirdPartyGroupId(data.thirdPartyGroupId());

    self.dataSetupFoodModal.productId(data.productId());
    if (data.productId != null) {
        var arr = data.productId().split(',');
    };
    self.dataSetupFoodModal.arrProduct(arr);

    self.dataSetupFoodModal.isShowProductTags(self.dataSetupFoodModal.arrProduct().includes('5') ? true : false);

    if (vmViewIndex.globalConfig.orderLimit() === '1' || vmViewIndex.globalConfig.orderLimit() === '2')
        self.dataSetupFoodModal.showLimit(true);
    else
        self.dataSetupFoodModal.showLimit(false);
    self.dataSetupFoodModal.qtyLimit(data.qtyLimit());

    //Modified by SMILEDINING-SA21-0018#3
    //if (!isClickSelect) {
    //    var target = $(event.target).parent().parent().parent();
    //} else {
    //    var target = $('#modalSetupFoodThirdParty');
    //}
    //End Modified by SMILEDINING-SA21-0018#3
    var target = $('#modalSetupFoodThirdParty');    //Added and End by SMILEDINING-SA21-0018#3
    var image = target.find('img').attr('src');
    if (typeof image != 'undefined') {
        if (image.trim().length > 0) {
            $('#modalSetupFoodThirdParty').find('img').attr('src', image);
            $('#modalSetupFoodThirdParty').find('img').attr('width', target.find('img').width());
            $('#modalSetupFoodThirdParty').find('img').attr('height', target.find('img').height());
        } else {
            self.dataSetupFoodModal.image('');
            self.dataSetupFoodModal.imageThirdParty(''); //Added and End by SMILEDINING-SA21-0066#6
            $('#modalSetupFoodThirdParty').find('img').attr('src', '');
            $('#modalSetupFoodThirdParty').find('img').removeAttr('src');
            $('#uploaderEdit' + data.tempId()).val('');
        }
    } else {
        self.dataSetupFoodModal.image('');
        self.dataSetupFoodModal.imageThirdParty(''); //Added and End by SMILEDINING-SA21-0066#6
        $('#modalSetupFoodThirdParty').find('img').attr('src', '');
        $('#modalSetupFoodThirdParty').find('img').removeAttr('src');
        $('#uploaderEdit' + data.tempId()).val('');
    }
    copyFoodThirdParty(self.dataSetupFoodModal.foodId(), event, 0);

};
function linkThirdParty(data, event) {
    var self = vmViewIndex.menu;

    for (var i = 0; i < self.thirdPartyGroups().length; i++) {
        $('#group_' + i).removeClass('select-group');
    }
    self.baseFoodThirdParty(data.foodId());
    if (data.isThirdParty()) {
        var dataListThirdParty = [];
        ko.utils.arrayForEach(self.thirdPartyStore(), function (data) {
            dataListThirdParty.push(data.thirdPartyId());
        });
        self.thirdPartyGroups.push(new getThirdPartyGroup(dataListThirdParty));
        mapDataFoodToModal(data, event, false);
        data.allChoiceOptions(self.dataSetupFoodModal.dataOptionFood());
        var filterFood = ko.utils.arrayFilter(self.food(), function (item) {
            return item.foodId() == data.foodId();
        });
        self.foodInThirdPartyGroup.push(_.first(filterFood));
        self.choiceOptionsInThirdPartyGroup.push(new thirdPartyGroupChoiceOptionModel(self.choiceOptions(), self.optionSelectPickerChoiceOptionTemp()));    //Added and End by SMILEDINING-SA21-0018#2
    } else {
        var filterFood = ko.utils.arrayFilter(self.listFoodThirdPartyStore(), function (item) {
            return item.foodBaseId() == data.foodId();
        });
        ko.utils.arrayForEach(filterFood, function (item) {
            var dataGroupThirdParty = ko.utils.arrayFilter(self.thirdPartyGroupStore(), function (group) {
                return group.thirdPartyGroupId() == item.thirdPartyGroupId();
            });
            var dataListThirdParty = _.first(dataGroupThirdParty).thirdPartyId().split(',');
            var listTthird = [];
            _.forEach(dataListThirdParty, function (items) {
                listTthird.push(parseInt(items));
            });
            self.thirdPartyGroups.push(new getThirdPartyGroup(listTthird));
            mapDataFoodToModal(item, event, false);
            item.allChoiceOptions(self.dataSetupFoodModal.dataOptionFood());
            self.foodInThirdPartyGroup.push(item);
            self.choiceOptionsInThirdPartyGroup.push(new thirdPartyGroupChoiceOptionModel(self.choiceOptions(), self.optionSelectPickerChoiceOptionTemp()));    //Added and End by SMILEDINING-SA21-0018#2
        });
        mapDataFoodToModal(_.first(filterFood), event, false);
        //Added by SMILEDINING-SA21-0018#2
        self.choiceOptions(_.first(self.choiceOptionsInThirdPartyGroup()).choiceOptions());
        self.optionSelectPickerChoiceOptionTemp(_.first(self.choiceOptionsInThirdPartyGroup()).optionSelectPickerChoiceOptionTemp());
        //End Added by SMILEDINING-SA21-0018#2
    }

    self.listThirdPartyGroups(ko.toJSON(self.thirdPartyGroups()));
    self.listFoodInThirdPartyGroup(ko.toJSON(self.foodInThirdPartyGroup()));

    $('#group_0').addClass('select-group');
};

function onClickThirdParty(item) {
    var self = vmViewIndex.menu;
    var count = vmViewIndex.menu.thirdPartyGroups().length;
    var oldIndex = $('#modalSetupFoodThirdParty .select-group')[0].attributes.id.value.split('_')[1];
    for (var i = 0; i < count; i++) {
        $('#group_' + i).removeClass('select-group');
    }
    var id = item.element.context.attributes.id.value;
    $('#' + id).addClass('select-group');


    var newIndex = id.split('_')[1];
    if (oldIndex != newIndex) {
        replaceDataFoodInArray(oldIndex);

        var newIndex = id.split('_')[1];
        mapDataFoodToModal(self.foodInThirdPartyGroup()[newIndex], event, true);
        //Added by SMILEDINING-SA21-0018#2
        if (self.dataSetupFoodModal.foodId() == self.baseFoodThirdParty() && self.choiceOptionsInThirdPartyGroup()[newIndex].choiceOptions().length == 0) {
            self.choiceOptionsInThirdPartyGroup()[newIndex].choiceOptions(self.choiceOptions().slice(0));
            self.choiceOptionsInThirdPartyGroup()[newIndex].optionSelectPickerChoiceOptionTemp(self.optionSelectPickerChoiceOptionTemp.slice(0));
        }
        else {
            //Modified by SMILEDINING-SA21-0018#3
            //self.choiceOptions(self.choiceOptionsInThirdPartyGroup()[newIndex].choiceOptions());
            //self.opionSelectPickerChoiceOptionTemp(self.choiceOptionsInThirdPartyGroup()[newIndex].optionSelectPickerChoiceOptionTemp());
            //End Modified by SMILEDINING-SA21-0018#3
            //Added by SMILEDINING-SA21-0018#3
            if (self.choiceOptionsInThirdPartyGroup()[newIndex].optionSelectPickerChoiceOptionTemp().length == 0) {
                self.choiceOptions(self.choiceOptionsInThirdPartyGroup()[newIndex].choiceOptions());
                self.optionSelectPickerChoiceOptionTemp(self.choiceOptionsInThirdPartyGroup()[newIndex].optionSelectPickerChoiceOptionTemp());
            } else {
                self.optionSelectPickerChoiceOptionTemp(self.choiceOptionsInThirdPartyGroup()[newIndex].optionSelectPickerChoiceOptionTemp());
                self.choiceOptions(self.choiceOptionsInThirdPartyGroup()[newIndex].choiceOptions());
            }
            //End Added by SMILEDINING-SA21-0018#3
            chkChoiceOption();
            self.dataSetupFoodModal.dataOptionFood(ko.toJSON(self.choiceOptions()));
            self.dataSetupFoodModal.valCopyFood(null);
        }
        //End Added by SMILEDINING-SA21-0018#2

        self.listThirdPartyGroups(ko.toJSON(self.thirdPartyGroups()));
        self.listFoodInThirdPartyGroup(ko.toJSON(self.foodInThirdPartyGroup()));
    }
};

function replaceDataFoodInArray(index) {

    var self = vmViewIndex.menu.dataSetupFoodModal;
    var data = new foodReplaceModel(self);
    vmViewIndex.menu.foodInThirdPartyGroup.replace(vmViewIndex.menu.foodInThirdPartyGroup()[index], data);
};

function foodReplaceModel(data) {
    var self = this;
    self.active = ko.observable(data.active());
    self.allChoiceOptions = ko.observable(data.dataOptionFood());
    self.arrProduct = ko.observableArray([]);
    self.choiceOption = ko.observable();
    self.createOn = ko.observable();
    self.foodBaseId = ko.observable(0);
    self.foodCatId = ko.observable(data.foodCatId());
    self.foodDesc = ko.observable(data.foodDesc());
    self.foodId = ko.observable(data.foodId());
    self.foodName = ko.observable(data.foodName());
    self.foodNameAlt = ko.observable(data.foodNameAlt());
    self.foodPrice = ko.observable(data.foodPrice());
    self.foodSetId = ko.observable(data.foodSetId());
    self.foodSorting = ko.observable(data.foodSorting());
    self.foodThirdParty = ko.observable();
    self.groupThirdParty = ko.observable();
    self.image = ko.observable(data.image());
    self.isFree = ko.observable(data.isFree());
    self.isLimit = ko.observable(false);
    self.isOutStock = ko.observable(data.isOutStock());
    self.isShow = ko.observable(data.isShow());
    self.isShowInstruction = ko.observable(false);
    self.isThirdParty = ko.observable(true);
    self.listProductTag = ko.observableArray(data.listProductTag());
    self.modifyOn = ko.observable();
    self.productId = ko.observable(data.productId());
    self.productTagMap = ko.observable();
    self.qtyLimit = ko.observable(data.qtyLimit());
    self.revenueClassId = ko.observable(data.revenueClassId());
    self.taxRateId = ko.observable(data.taxRateId());
    self.tempId = ko.observable(data.tempId());
    self.thirdPartyGroupId = ko.observable(data.thirdPartyGroupId());
    self.productTagMap = ko.observable(data.productTagSelect());
};
function onChangeThirdParty(item) {
    var self = vmViewIndex.menu;
    if (!(item.value.length == 0 && self.thirdPartyGroups().length == 1)) {
        if (item.previousValue.length > item.value.length) {
            var filter = ko.utils.arrayFilter(item.previousValue, function (items) {
                return !item.value.includes(items);
            });
            var findIndexThirdPartyGroup = _.findIndex(self.thirdPartyGroups(), function (items) {
                return items.listThirdParty().join(',') == item.value.join(',');
            });

            var itemModelPrevious = new getThirdPartyGroup(item.value);

            var indexGroupNext = findIndexThirdPartyGroup + 1;

            if (indexGroupNext == self.thirdPartyGroups().length) {
                if (item.value.length == 0) {
                    var dataNewArray = self.thirdPartyGroups()[findIndexThirdPartyGroup - 1].listThirdParty().slice(0);
                    dataNewArray.push(_.first(filter));
                    var itemModelNew = new getThirdPartyGroup(sortArrayInt(dataNewArray));
                    self.thirdPartyGroups.replace(self.thirdPartyGroups()[findIndexThirdPartyGroup - 1], itemModelNew);
                    self.thirdPartyGroups.splice(findIndexThirdPartyGroup, 1);
                    self.foodInThirdPartyGroup.splice(findIndexThirdPartyGroup, 1);
                    self.choiceOptionsInThirdPartyGroup.splice(findIndexThirdPartyGroup, 1);  //Added and End by SMILEDINING-SA21-0018#2
                    for (var i = 0; i < self.thirdPartyGroups().length; i++) {
                        $('#group_' + i).removeClass('select-group');
                    }
                    var id = findIndexThirdPartyGroup - 1;
                    $('#group_' + id).addClass('select-group');
                    mapDataFoodToModal(self.foodInThirdPartyGroup()[id], event, true);
                    //Added by SMILEDINING-SA21-0018#2
                    self.choiceOptions(self.choiceOptionsInThirdPartyGroup()[id].choiceOptions());
                    self.optionSelectPickerChoiceOptionTemp(self.choiceOptionsInThirdPartyGroup()[id].optionSelectPickerChoiceOptionTemp());
                    //End Added by SMILEDINING-SA21-0018#2
                } else {
                    var itemModelNew = new getThirdPartyGroup(filter);
                    self.thirdPartyGroups.push(itemModelNew);
                    var filterFood = ko.utils.arrayFilter(self.food(), function (item) {
                        return item.foodId() == self.dataSetupFoodModal.foodId();
                    });
                    self.foodInThirdPartyGroup.push(_.first(filterFood));
                    self.choiceOptionsInThirdPartyGroup.push(new thirdPartyGroupChoiceOptionModel([], []));     //Added and End by SMILEDINING-SA21-0018#2
                }

            } else if (indexGroupNext < self.thirdPartyGroups().length) {
                if (item.value.length == 0) {
                    var dataNewArray = self.thirdPartyGroups()[indexGroupNext].listThirdParty().slice(0);
                    dataNewArray.push(_.first(filter));
                    var itemModelNew = new getThirdPartyGroup(sortArrayInt(dataNewArray));
                    self.thirdPartyGroups.replace(self.thirdPartyGroups()[indexGroupNext], itemModelNew);
                    self.thirdPartyGroups.splice(findIndexThirdPartyGroup, 1);
                    self.foodInThirdPartyGroup.splice(findIndexThirdPartyGroup, 1);
                    self.choiceOptionsInThirdPartyGroup.splice(findIndexThirdPartyGroup, 1);  //Added and End by SMILEDINING-SA21-0018#2
                    for (var i = 0; i < self.thirdPartyGroups().length; i++) {
                        $('#group_' + i).removeClass('select-group');
                    }
                    $('#group_' + findIndexThirdPartyGroup).addClass('select-group');
                    mapDataFoodToModal(self.foodInThirdPartyGroup()[findIndexThirdPartyGroup], event, true);
                    //Added by SMILEDINING-SA21-0018#2
                    self.choiceOptions(self.choiceOptionsInThirdPartyGroup()[findIndexThirdPartyGroup].choiceOptions());
                    self.optionSelectPickerChoiceOptionTemp(self.choiceOptionsInThirdPartyGroup()[findIndexThirdPartyGroup].optionSelectPickerChoiceOptionTemp());
                    //End Added by SMILEDINING-SA21-0018#2
                } else {
                    var dataNewArray = self.thirdPartyGroups()[indexGroupNext].listThirdParty().slice(0);
                    dataNewArray.push(_.first(filter));
                    var itemModelNew = new getThirdPartyGroup(sortArrayInt(dataNewArray));
                    self.thirdPartyGroups.replace(self.thirdPartyGroups()[indexGroupNext], itemModelNew);
                }
            }
        } else {
            var filter = ko.utils.arrayFilter(item.value, function (items) {
                return !item.previousValue.includes(items);
            });
            ko.utils.arrayForEach(filter, function (val) {
                var findIndexThirdPartyGroupDel = _.findIndex(self.thirdPartyGroups(), function (items) {
                    return items.listThirdParty().includes(val) && items.listThirdParty().join(',') != item.value.join(',');
                });
                if (findIndexThirdPartyGroupDel != -1) {

                    var listThirdParty = self.thirdPartyGroups()[findIndexThirdPartyGroupDel].listThirdParty().slice(0);

                    //Modified by SMILEDINING-SA21-0018#5
                    //ko.utils.arrayForEach(filter, function (data) {
                    //    var findIndexValueDel = _.findIndex(listThirdParty, function (items) {
                    //        return items == data;
                    //    });
                    //    listThirdParty.splice(findIndexValueDel, 1);
                    //});
                    //End Modified by SMILEDINING-SA21-0018#5
                    //Added by SMILEDINING-SA21-0018#5
                    var findIndexValueDel = _.findIndex(listThirdParty, function (items) {
                        return items == val;
                    });
                    listThirdParty.splice(findIndexValueDel, 1);
                    //End Added by SMILEDINING-SA21-0018#5

                    var itemModelNewDel = new getThirdPartyGroup(listThirdParty);
                    self.thirdPartyGroups.replace(self.thirdPartyGroups()[findIndexThirdPartyGroupDel], itemModelNewDel);

                    if (self.thirdPartyGroups()[findIndexThirdPartyGroupDel].listThirdParty().length == 0) {
                        self.thirdPartyGroups.splice(findIndexThirdPartyGroupDel, 1);
                        self.foodInThirdPartyGroup.splice(findIndexThirdPartyGroupDel, 1);
						self.optionSelectPickerChoiceOptionTemp.splice(findIndexThirdPartyGroupDel, 1);	//Added and End by SMILEDINING-SA21-0018#2
                    }

                    if (val == filter[filter.length - 1]) {  //Added and End by SMILEDINING-SA21-0018#5
                        var findIndexThirdPartyGroup = _.findIndex(self.thirdPartyGroups(), function (items) {
                            return items.listThirdParty().join(',') == item.value.join(',');
                        });

                        var dataNewArray = self.thirdPartyGroups()[findIndexThirdPartyGroup].listThirdParty().slice(0);
                        var itemModelNew = new getThirdPartyGroup(sortArrayInt(dataNewArray));
                        self.thirdPartyGroups.replace(self.thirdPartyGroups()[findIndexThirdPartyGroup], itemModelNew);
                        for (var i = 0; i < self.thirdPartyGroups().length; i++) {
                            $('#group_' + i).removeClass('select-group');
                        }
                        $('#group_' + findIndexThirdPartyGroup).addClass('select-group');
                        mapDataFoodToModal(self.foodInThirdPartyGroup()[findIndexThirdPartyGroup], event, true);
                        //Added by SMILEDINING-SA21-0018#2
                        self.choiceOptions(self.choiceOptionsInThirdPartyGroup()[findIndexThirdPartyGroup].choiceOptions());
                        self.optionSelectPickerChoiceOptionTemp(self.choiceOptionsInThirdPartyGroup()[findIndexThirdPartyGroup].optionSelectPickerChoiceOptionTemp());
                        //End Added by SMILEDINING-SA21-0018#2
                    }   //Added and End by SMILEDINING-SA21-0018#5 
                } else {
                    var dataListThirdParty = [];
                    ko.utils.arrayForEach(self.thirdPartyStore(), function (data) {
                        dataListThirdParty.push(data.thirdPartyId());
                    });
                    var arrayAdd = [];
                    ko.utils.arrayForEach(dataListThirdParty, function (items) {
                        if (!filter.includes(items)) {
                            arrayAdd.push(items);
                        }
                    });

                    if (arrayAdd.length != 0) {
                        var itemModelNew = new getThirdPartyGroup(sortArrayInt(arrayAdd));
                        self.thirdPartyGroups.push(itemModelNew);
                        var filterFood = ko.utils.arrayFilter(self.food(), function (item) {
                            return item.foodId() == self.dataSetupFoodModal.foodId();
                        });
                        self.foodInThirdPartyGroup.push(_.first(filterFood));
                        self.choiceOptionsInThirdPartyGroup.push(new thirdPartyGroupChoiceOptionModel([], []));     //Added and End by SMILEDINING-SA21-0018#2
                    }
                }
            });
        }
        self.listThirdPartyGroups(ko.toJSON(self.thirdPartyGroups()));
        self.listFoodInThirdPartyGroup(ko.toJSON(self.foodInThirdPartyGroup()));
    }
};
function copyFoodThirdParty(foodId, event, checkData) {
    var self = vmViewIndex.menu;
    var optionSelectPickerChoiceOptionTemp = ko.observableArray([]);
    var choiceOptions = ko.observableArray([]);

    if (self.dataSetupFoodModal.groupChoiceOptionId().length > 0) {
        ko.utils.arrayForEach(self.dataSetupFoodModal.groupChoiceOptionId(), function (valueChoiceOptionId) {
            var arrDataFilter = ko.utils.arrayFilter(self.foodChoiceMap(), function (foodChoiceMap) {
                return foodChoiceMap.choiceOptionId() == valueChoiceOptionId && foodChoiceMap.foodId() == foodId;
            });

            if (arrDataFilter.length > 0) {
                choiceOptions.push(new getChoiceOptions(checkData));
                optionSelectPickerChoiceOptionTemp.push(new optionSelectChoiceOptionTemp(0, ''));
                var parentIndex = choiceOptions().length - 1;

                optionSelectPickerChoiceOptionTemp()[parentIndex].choiceOptionId(valueChoiceOptionId);
                optionSelectPickerChoiceOptionTemp()[parentIndex].choiceOptionName(_.first(arrDataFilter).choiceOptionName());
                ko.utils.arrayFilter(self.dataSetupFoodModal.dataAllChoice(), function (allChoice) {
                    if (allChoice.choiceOptionId == valueChoiceOptionId) {
                        optionSelectPickerChoiceOptionTemp()[parentIndex].choice.push(new optionSelectChoice(allChoice.choiceId, allChoice.choiceName, allChoice.choicePrice));
                    }
                });

                choiceOptions()[parentIndex].ChoiceOptionId(valueChoiceOptionId);
                choiceOptions()[parentIndex].ChoiceOptionName(_.first(arrDataFilter).choiceOptionName());
                ko.utils.arrayForEach(arrDataFilter, function (itemChoice) {
                    choiceOptions()[parentIndex].Choice.push(new getChoice(itemChoice.choiceId(), itemChoice.choiceName(), itemChoice.choicePrice(), itemChoice.choiceOptionId(), itemChoice.isDefault(), itemChoice.isDefault()));
                });
            }
        });
    }
    //Modified by SMILEDINING-SA21-0018#2
    //chkChoiceOption();
    //self.dataSetupFoodModal.dataOptionFood(ko.toJSON(self.choiceOptions()));
    //vmViewIndex.menu.dataSetupFoodModal.valCopyFood(null);

    //self.optionSelectPickerChoiceOptionTemp(optionSelectPickerChoiceOptionTemp.slice(0));
    //self.choiceOptions(choiceOptions.slice(0));
    //End Modified by SMILEDINING-SA21-0018#2
    self.choiceOptions([]); //Added and End by SMILEDINING-SA21-0018#3
    //Added by SMILEDINING-SA21-0018#2
    self.optionSelectPickerChoiceOptionTemp(optionSelectPickerChoiceOptionTemp().slice(0));
    self.choiceOptions(choiceOptions().slice(0));


    chkChoiceOption();
    self.dataSetupFoodModal.dataOptionFood(ko.toJSON(self.choiceOptions()));
    vmViewIndex.menu.dataSetupFoodModal.valCopyFood(null);
    //End Added by SMILEDINING-SA21-0018#2
};
//End Added by SMILEDINING-SA21-0018

//Added by SMILEDINING-SA21-0018#2
function thirdPartyGroupChoiceOptionModel(choiceOptions, optionSelectPickerChoiceOptionTemp) {
    var self = this;
    self.choiceOptions = ko.observableArray(choiceOptions);
    self.optionSelectPickerChoiceOptionTemp = ko.observableArray(optionSelectPickerChoiceOptionTemp);
};
function replaceChoiceOptionThirdParty() {
    var self = vmViewIndex.menu;
    if (self.choiceOptionsInThirdPartyGroup().length > 0) {
        var index = $('#modalSetupFoodThirdParty .select-group')[0].attributes.id.value.split('_')[1];
        self.choiceOptionsInThirdPartyGroup()[index].choiceOptions(self.choiceOptions().slice(0));
        self.choiceOptionsInThirdPartyGroup()[index].optionSelectPickerChoiceOptionTemp(self.optionSelectPickerChoiceOptionTemp.slice(0));
    }
};
//End Added by SMILEDINING-SA21-0018#2

//function copyFood(foodId, event, checkData) { //Modified and End by SMILEDINING-SA21-0066#21
function copyFood(foodId, event, checkData, isCopyFoodDetail) { //Added and End by SMILEDINING-SA21-0066#21
    var self = vmViewIndex.menu;
    if (self.dataSetupFoodModal.groupChoiceOptionId().length > 0) {
        ko.utils.arrayForEach(self.dataSetupFoodModal.groupChoiceOptionId(), function (valueChoiceOptionId) {
            var arrDataFilter = ko.utils.arrayFilter(self.foodChoiceMap(), function (foodChoiceMap) {
                return foodChoiceMap.choiceOptionId() == valueChoiceOptionId && foodChoiceMap.foodId() == foodId;
            });

            if (arrDataFilter.length > 0) {
                //Added by SMILEDINING-SA21-0066#21
                var choiceOptionFilter = ko.utils.arrayFilter(self.dataSetupFoodModal.dataAllChoiceOption(), function (allChoiceOption) { 
                    return (allChoiceOption.choiceOptionId == valueChoiceOptionId);
                });
                if (!isCopyFoodDetail || (isCopyFoodDetail && isEmpty(choiceOptionFilter[0].plu))) {
                //End Added by SMILEDINING-SA21-0066#21
                    self.choiceOptions.push(new getChoiceOptions(checkData));
                    self.optionSelectPickerChoiceOptionTemp.push(new optionSelectChoiceOptionTemp(0, ''));
                    var parentIndex = self.choiceOptions().length - 1;

                    self.optionSelectPickerChoiceOptionTemp()[parentIndex].choiceOptionId(valueChoiceOptionId);
                    self.optionSelectPickerChoiceOptionTemp()[parentIndex].choiceOptionName(_.first(arrDataFilter).choiceOptionName());
                    ko.utils.arrayFilter(self.dataSetupFoodModal.dataAllChoice(), function (allChoice) {
                        if (allChoice.choiceOptionId == valueChoiceOptionId) {
                            //self.optionSelectPickerChoiceOptionTemp()[parentIndex].choice.push(new optionSelectChoice(allChoice.choiceId, allChoice.choiceName, allChoice.choicePrice)); //Modified and End by SMILEDINING-SA21-0066#21
                            self.optionSelectPickerChoiceOptionTemp()[parentIndex].choice.push(new optionSelectChoice(allChoice.choiceId, allChoice.choiceName, allChoice.choicePrice, allChoice.plu)); //Added and End by SMILEDINING-SA21-0066#21
                        }
                    });

                    self.choiceOptions()[parentIndex].ChoiceOptionId(valueChoiceOptionId);
                    self.choiceOptions()[parentIndex].ChoiceOptionName(_.first(arrDataFilter).choiceOptionName());
                    self.choiceOptions()[parentIndex].Plu(choiceOptionFilter[0].plu); //Added and End by SMILEDINING-SA21-0066#21
                    ko.utils.arrayForEach(arrDataFilter, function (itemChoice) {
                        //Added by SMILEDINING-SA21-0066#21
                        var choiceFilter = ko.utils.arrayFilter(self.dataSetupFoodModal.dataAllChoice(), function (allChoice) { 
                            return (allChoice.choiceId == itemChoice.choiceId());
                        });
                        if (!isCopyFoodDetail || (isCopyFoodDetail && isEmpty(choiceFilter[0].plu))) {
                            self.choiceOptions()[parentIndex].Choice.push(new getChoice(itemChoice.choiceId(), itemChoice.choiceName(), itemChoice.choicePrice(), itemChoice.choiceOptionId(), itemChoice.isDefault(), itemChoice.isDefault(), choiceFilter[0].plu));
                        }
                        //End Added by SMILEDINING-SA21-0066#21
                        //self.choiceOptions()[parentIndex].Choice.push(new getChoice(itemChoice.choiceId(), itemChoice.choiceName(), itemChoice.choicePrice(), itemChoice.choiceOptionId(), itemChoice.isDefault(), itemChoice.isDefault())); //Modified and End by SMILEDINING-SA21-0066#21
                    });
                } //Added and End by SMILEDINING-SA21-0066#21
            }
        });
    }
    chkChoiceOption();
    self.dataSetupFoodModal.dataOptionFood(ko.toJSON(self.choiceOptions()));
    vmViewIndex.menu.dataSetupFoodModal.valCopyFood(null);
};

function updateCart() {
    var self = vmViewIndex.menu;
    var cart = $('.card').find('.card-block .cart');
    if (self.arrModelCopyFood().length <= 0) {
        cart.hide();
        self.chkClickCopyFood(false);
    } else {
        cart.show();
    }
};

function clearCopyFood() {
    var self = vmViewIndex.menu;
    self.arrModelCopyFood([]);
    $('.border-food').removeClass('border-copy-food');
    //Modified by SMILEDINING-SA21-0066#21
    //$('.link-copy-food').removeClass('copy-not-active');
    //$('.link-copy-food').addClass('copy-active');
    //End Modified by SMILEDINING-SA21-0066#21
};

function chkChoiceOption() {
    var self = vmViewIndex.menu;
    for (var i = 0; i < self.choiceOptions().length - 1; i++) {
        //Modified by SMILEDINING-SA21-0024#1
        //if (self.choiceOptions()[i + 1].ChoiceOptionId() == self.choiceOptions()[i].ChoiceOptionId()) {
        //    swal(cError_ChoiceOption_Invalid, cError_ChoiceOptionName_Duplicate, cSwal_Icon_Error);
        //    self.chkSelectedChoiceOption(false);
        //}
        //End Modified by SMILEDINING-SA21-0024#1
        //Added by SMILEDINING-SA21-0024#1
        var filter = ko.utils.arrayFilter(self.choiceOptions(), function (item) {
            return item.ChoiceOptionId() == self.choiceOptions()[i].ChoiceOptionId();
        });
        if (filter.length > 1) {
            swal(cError_ChoiceOption_Invalid, cError_ChoiceOptionName_Duplicate, cSwal_Icon_Error);
            self.chkSelectedChoiceOption(false);
        }
        //End Added by SMILEDINING-SA21-0024#1
    }
    //Added by SMILEDINING-SA21-0066#23
    if (self.choiceOptions().length > 0) {
        self.disableClickClearCopyFood(false);
        ko.utils.arrayFirst(self.choiceOptions(), function (choiceOption) {
            if (!isEmpty(choiceOption.Plu())) {
                self.disableClickClearCopyFood(true);
                return true;
            } else {
                if (choiceOption.Choice().length > 0) {
                    return ko.utils.arrayFirst(choiceOption.Choice(), function (choice) {
                        if (!isEmpty(choice.Plu())) {
                            self.disableClickClearCopyFood(true);
                            return true;
                        }
                    });
                }
            }
        });
    }
    //End Added by SMILEDINING-SA21-0066#23
};

function onChangeFoodSet(item) {
    var self = vmViewIndex.menu;
    var value = item.itemData.foodSetId();
    if (value.trim().length > 0) {
        var filterFoodCategory = ko.utils.arrayFilter(self.tempDataFoodCategory(), function (itemFoodCategory) {
            return itemFoodCategory.foodSetId() == value;
        });
        self.optionSelectPickerFoodCategory(filterFoodCategory);
    }
};

function onChangeRevenue(item) {
    var self = vmViewIndex.menu;
    var value = item.itemData.revenueClassId();
    if (value.trim().length > 0) {
        for (var i = 0; i < self.optionSelectPickerRevenue().length; i++) {
            if (self.optionSelectPickerRevenue()[i].revenueClassId() == value) {
                self.dataSetupFoodModal.taxRateId(self.optionSelectPickerRevenue()[i].taxRateId());
                break;
            }
        }
    } else {
        self.dataSetupFoodModal.taxRateId(ko.observable());
    }
};

//Added by SMILEDINING-SA21-0066#21
function itemTemplateChoiceOptionAndChoice(item, isChoiceOption) {
    var choiceName = !isChoiceOption ? item.choicePrice() != 0 ? item.choiceName() + ' $' + item.choicePrice() : item.choiceName() : '';
    return `<div class = '${!isEmpty(item.plu()) ? 'deliverect' : ''}'>${isChoiceOption ? item.choiceOptionName() : choiceName}&nbsp&nbsp<img src='${!isEmpty(item.plu()) ? cDeliverectLogo : ''}' /></div>`;
};
//End Added by SMILEDINING-SA21-0066#21

function onChangeChoiceOption(item) {
    var self = vmViewIndex.menu;
    var value = item.itemData.choiceOptionId();
    var id = _.first(item.element).dataset.id;
    //var text = item.component._options.displayValue; //Modified and End by SMILEDINING-SA21-0066#21
    var text = item.itemData.choiceOptionName(); //Added and End by SMILEDINING-SA21-0066#21
    var parentIndex = _.first(item.element.parent().parent().find('span input:eq(0)')).id;
    if (value.trim().length > 0) {
        parentIndex = parseInt(_.first(parentIndex.match(/\d+/)));
        self.choiceOptions()[parentIndex].ChoiceOptionId("");

        for (var i = 0; i < self.choiceOptions().length; i++) {
            if (self.choiceOptions()[i].ChoiceOptionId() == value) {
                if (self.choiceOptions()[i].Active()) {
                    swal(cError_ChoiceOption_Invalid, cError_ChoiceOptionName_Duplicate, cSwal_Icon_Error);
                    value = -1;
                    return true;
                }
            }
        }
        //Added by SMILEDINING-SA21-0066#21
        if (item.itemData.plu() != '') {
            swal(cError_ChoiceOption_Invalid, cError_ChoiceOptionName_Deliverect, cSwal_Icon_Error);
            return true;
        }
        //End Added by SMILEDINING-SA21-0066#21

        self.optionSelectPickerChoiceOptionTemp()[parentIndex].choiceOptionId(value);
        self.optionSelectPickerChoiceOptionTemp()[parentIndex].choiceOptionName(text);
        self.optionSelectPickerChoiceOptionTemp()[parentIndex].choice([]);

        self.choiceOptions()[parentIndex].ChoiceOptionId(value);
        self.choiceOptions()[parentIndex].ChoiceOptionName(text);
        self.choiceOptions()[parentIndex].Choice([]);

        ko.utils.arrayFilter(self.dataSetupFoodModal.dataAllChoice(), function (allChoice) {
            if (allChoice.choiceOptionId == value) {
                self.optionSelectPickerChoiceOptionTemp()[parentIndex].choice.push(new optionSelectChoice(allChoice.choiceId, allChoice.choiceName, allChoice.choicePrice, allChoice.plu)); //Added and End by SMILEDINING-SA21-0066#21
                //Modified by SMILEDINING-SA21-0066#21
                //if (isEmpty(allChoice.plu)) { //Added and End by SMILEDINING-SA21-0066#7
                    //self.optionSelectPickerChoiceOptionTemp()[parentIndex].choice.push(new optionSelectChoice(allChoice.choiceId, allChoice.choiceName, allChoice.choicePrice));
                //} //Added and End by SMILEDINING-SA21-0066#7
                //End Modified by SMILEDINING-SA21-0066#21
            }
        });
        replaceChoiceOptionThirdParty();    //Added and End by SMILEDINING-SA21-0018#2
    }
};

function onChangeChoice(item) {
    var self = vmViewIndex.menu;
    var value = item.itemData.choiceId();
    //var text = item.component._options.displayValue; //Modified and End by SMILEDINING-SA21-0066#21
    var text = item.itemData.choiceName(); //Added and End by SMILEDINING-SA21-0066#21
    var parentIndex = _.first(item.element.parent().parent().parent().parent().parent().parent().find('.card-header span input:eq(0)')).id;
    if (value.trim().length > 0) {
        var countDuplicateChoice = 0;
        var currentIndex = _.first(item.element.next().find('input:eq(0)')).id;
        parentIndex = parseInt(_.first(parentIndex.match(/\d+/)));
        currentIndex = parseInt(_.first(currentIndex.match(/(\d+)(?!.*\d)/)));
        self.choiceOptions()[parentIndex].Choice()[currentIndex].ChoiceId("");

        for (var i = 0; i < self.choiceOptions()[parentIndex].Choice().length; i++) {
            if (self.choiceOptions()[parentIndex].Choice()[i].ChoiceId() != undefined) {
                if (self.choiceOptions()[parentIndex].Choice()[i].ChoiceId() == value) {
                    for (var j = 0; j < self.optionSelectPickerChoiceOptionTemp()[parentIndex].choice().length; j++) {
                        if (self.optionSelectPickerChoiceOptionTemp()[parentIndex].choice()[j].choiceId() == value) {
                            var choicePrice = self.optionSelectPickerChoiceOptionTemp()[parentIndex].choice()[j].choicePrice();
                            choicePrice = '0.00';
                            $('#ChoiceOption_' + parentIndex + '_Choice_' + currentIndex + '_ChoicePrice').val(Number2Digit(choicePrice));
                            swal(cError_ChoiceOption_Invalid, cError_ChoiceOptionName_Duplicate, cSwal_Icon_Error);
                            value = -1;
                            break;
                        }
                    }
                    return true;
                }
            }
        }
        //Added by SMILEDINING-SA21-0066#21
        if (item.itemData.plu() != '') {
            swal(cError_ChoiceOption_Invalid, cError_ChoiceOptionName_Deliverect, cSwal_Icon_Error);
            return true;
        }
        //End Added by SMILEDINING-SA21-0066#21

        self.choiceOptions()[parentIndex].Choice()[currentIndex].ChoiceId(value);
        self.choiceOptions()[parentIndex].Choice()[currentIndex].ChoiceName(text);
        self.dataSetupFoodModal.dataOptionFood(ko.toJSON(self.choiceOptions()));

        //get Price
        for (var j = 0; j < self.optionSelectPickerChoiceOptionTemp()[parentIndex].choice().length ; j++) {
            if (self.optionSelectPickerChoiceOptionTemp()[parentIndex].choice()[j].choiceId() == value) {
                var choicePrice = self.optionSelectPickerChoiceOptionTemp()[parentIndex].choice()[j].choicePrice();
                $('#ChoiceOption_' + parentIndex + '_Choice_' + currentIndex + '_ChoicePrice').val(Number2Digit(choicePrice));
                break;
            }
        }

        replaceChoiceOptionThirdParty();    //Added and End by SMILEDINING-SA21-0018#2
    }
};

function changeActiveFoodCategory(jsonObj, dataItem) {
    swal({
        title: "Are you sure, you want to change active this foodcategory?",
        type: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: false,
        confirmButtonClass: "btn theme default-button",
        cancelButtonClass: "btn btn-danger",
        preConfirm: function (e) {
            var objUrl = new ObjUrl(jsonObj);
            var requestUrl = objUrl.getUrlFromJson();
            var passData = { 'model': dataItem.foodCategory, 'modelFoodSet': dataItem.foodSet };
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
                    if (result.status) {
                        var tempDataMenu = ko.observableArray([]);
                        var dataDisableFoodCategory = JSON.parse(result.obj);
                        var itemModel = new DataFoodCategoryViewModel(dataDisableFoodCategory);
                        var foodCatFilter = ko.utils.arrayFilter(vmViewIndex.menu.foodCategory(), function (itemFoodCategory) {
                            return (itemFoodCategory.foodCatId() == itemModel.foodCatId());
                        });
                        if (!isEmpty(foodCatFilter)) {
                            vmViewIndex.menu.foodCategory.replace(_.first(foodCatFilter), itemModel);
                        }

                        var foodCatFilterJs = ko.utils.arrayFilter(vmViewIndex.menu.foodCategoryJs(), function (itemFoodCategoryJs) {
                            return (itemFoodCategoryJs.foodCatId == itemModel.foodCatId());
                        });
                        if (!isEmpty(foodCatFilterJs)) {
                            vmViewIndex.menu.foodCategoryJs.replace(_.first(foodCatFilterJs), dataDisableFoodCategory);
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
                        //Added by WEB-SA23-0001
                        if (vmViewIndex.isKiosk() && !isEmpty(dataDisableFoodCategory)) {
                            sendMqtt(dataDisableFoodCategory, getTopicMqtt('foodCategory'));
                        }
                        //End Added by WEB-SA23-0001
                        checkUpdateThirdParty(jsonObj, result); //Added and End by WEB-SA23-0026#1
                        var objAlert = new ObjAlert("", result.message, result.status);
                        objAlert.getAlert();
                        foodSetClick();
                    } else {
                        var objAlert = new ObjAlert("", result.message, result.status);
                        objAlert.getAlert();
                    }
                    vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
                })
                .fail(function (result) {
                    var objAlert = new ObjAlert("", result.message, result.status);
                    objAlert.getAlert();
                    foodSetClick();
                    vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
                });
            });
        }
    })
    //Added by WEB-SA23-0001
    .then({}, function (dismiss) {
        if (dismiss === 'cancel') {
            vmViewIndex.isKiosk(false); 
        };
    });
    //End Added by WEB-SA23-0001
};


//Added by SMILEDINING-SA21-0021
function iconSortable(element, dataStore) {

    var startPosition;

    $(element).find('tbody').sortable({
        cursor: 'move',
        forcePlaceholderSize: false,
        opacity: 0.4,
        placeholder: 'highlight',
        start: function (event, ui) {
            ui.item.toggleClass("highlight");
            startPosition = ui.item.index();
        },
        update: function (event, ui) {
        },
        stop: function (event, ui) {
            ui.item.toggleClass("highlight");
            var endPosition = ui.item.index();
            if (startPosition != endPosition) {
                //vmViewIndex.configSetUp.chkDrag(true);
                if (startPosition < endPosition) {
                    var sortable = [];
                    var dataItems = null;

                    dataStore.load().done(function (data) {
                        dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['sorting'], ['asc']))();
                    });


                    var tmpStartId = dataItems[startPosition].iconId();
                    var tmpEndSorting = dataItems[endPosition].sorting();

                    for (i = startPosition; i < endPosition ; i++) {
                        sortable.push({
                            iconId: dataItems[i + 1].iconId(),
                            sorting: dataItems[i].sorting()
                        });
                    }
                    sortable.push({
                        iconId: tmpStartId,
                        sorting: tmpEndSorting
                    });
                }
                else if (startPosition > endPosition) {
                    var sortable = [];
                    var dataItems = null;
                    dataStore.load().done(function (data) {
                        dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['sorting'], ['asc']))();
                    });

                    var tmpStartId = dataItems[startPosition].iconId();
                    var tmpEndSorting = dataItems[endPosition].sorting();

                    for (i = startPosition; i > endPosition; i--) {
                        sortable.push({
                            iconId: dataItems[i - 1].iconId(),
                            sorting: dataItems[i].sorting()
                        });
                    }
                    sortable.push({
                        iconId: tmpStartId,
                        sorting: tmpEndSorting
                    });
                }

                setTimeout(function () {
                    ko.utils.arrayForEach(sortable, function (data) {
                        vmViewIndex.menu.dataSetupFoodModal.listIconForDrag().update(data.iconId, { sorting: data.sorting });
                    });
                    element.dxDataGrid('instance').refresh();
                }, 1000);
            }
        }
    });
};

function iconSortingModel(data, sorting) {
    var self = this;
    self.iconId = ko.observable(data.iconId());
    self.iconName = ko.observable(data.iconName());
    self.iconImage = ko.observable(data.iconImage());
    self.hexColor = ko.observable(data.iconName());
    self.isFocus = ko.observable(data.isFocus());
    self.isShowText = ko.observable(data.isShowText());
    self.active = ko.observable(data.active());
    self.sorting = ko.observable(sorting);
};
//End Added by SMILEDINING-SA21-0021

$('.po-link_showTime').popover({
    trigger: 'hover',
    html: true,  // must have if HTML is contained in popover

    // get the title and conent
    title: function () {
        return $(this).parent().find('.po-title_showTime').html();
    },
    content: function () {
        return $(this).parent().find('.po-body_showTime').html();
    },

    container: 'body',
    placement: 'bottom'

});

//Added by SMILEDINING-SA20-0016
$("#popoverContainer").dxPopover({
    target: "#btnSetupFood",
    showEvent: "dxclick",
    title: function () {
        return $(this).parent().find('.popover-setupfood-title-show').html();
    },
    content: function () {
        return $(this).parent().find('.popover-setupfood-body-show').html();
    },
    container: 'body',
    showCloseButton: true
});
var popupElement = '<div id="switch-on"></div>';

$('#popbutton').popover({
    animation: true,
    content: popupElement,
    html: true
});
$("#switch-on").dxSwitch({
    value: true
});
//End Added by SMILEDINING-SA20-0016

//Number
function Number2Digit(text) {
    return parseFloat(text).toFixed(2);
};

//Time
function setTimeAMPM(stringTime) {
    return moment(stringTime, 'hh:mm').format('hh:mm A');
};

/*
 * Image resizing
 */
var imageResize = (function (canvas) {
    // (C) WebReflection Mit Style License

    function imageResize(elt, img, width, height, onresample) {
        var

         load = typeof img == "string",
         i = load || img;

        // if string, a new Image is needed
        if (load) {
            i = new Image;
            i.onload = onload;
            i.onerror = onerror;
        }

        i._onresample = onresample;
        i._width = width;
        i._height = height;
        i._elt = elt;
        load ? (i.src = img) : onload.call(img);
    }

    function onerror() {
        throw ("not found: " + this.src);
    }

    function onload() {
        var img = this,
         width = img._width,
         height = img._height,
         onresample = img._onresample;

        img._elt.data('original-width', img.width);
        img._elt.data('original-height', img.height);
        // if width and height are both specified
        // the resample uses these pixels
        // if width is specified but not the height
        // the resample respects proportions
        // accordingly with orginal size
        // same is if there is a height, but no width
        var minValue = Math.min(img.height, img.width);
        var imgRatio = img.width / img.height;
        var targetRatio = height / width;
        var targetWidth = imgRatio <= 1 ? width : round(img.width * height / img.height);
        var targetHeight = imgRatio > 1 ? height : round(img.height * width / img.width);

        targetWidth = 115;
        targetHeight = 115;

        img._elt.data('width', targetWidth);
        img._elt.data('height', targetHeight);

        delete img._onresample;
        delete img._width;
        delete img._height;

        // when we reassign a canvas size
        // this clears automatically
        // the size should be exactly the same
        // of the final image
        // so that toDataURL ctx method
        // will return the whole canvas as png
        // without empty spaces or lines
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        // drawImage has different overloads
        // in this case we need the following one ...
        context.drawImage(
         // original image
         img,
         // starting x point
         0,
         // starting y point
         0,
         // image width
         img.width,
         // image height
         img.height,
         // destination x point
         0,
         // destination y point
         0,
         // destination width
         targetWidth,
         // destination height
         targetHeight
        );
        // retrieve the canvas content as
        // base4 encoded PNG image
        // and pass the result to the callback
        onresample(canvas.toDataURL("image/png"), targetWidth, targetHeight);
    }

    var context = canvas.getContext("2d"),
     // local scope shortcut
     round = Math.round
    ;

    return imageResize;

}(this.document.createElement("canvas")));

//Added by SMILEDINING-SA21-0066#24
function swalUnlockFoodDeliverect(data) {
    swal({
        title: cMessage_Unlock_Deliverect,
        type: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: false,
        confirmButtonClass: "btn theme default-button",
        cancelButtonClass: "btn btn-danger",
    }).then(function () {
        var self = vmViewIndex.menu;
        self.dataSetupFoodModal.plu('');
        self.choiceOptions([]);
        self.optionSelectPickerChoiceOptionTemp([]);
        var foodId = data.menu.dataSetupFoodModal.foodId();
        copyFood(foodId, event, 1, true);
        $('#modalSetupFood #selectPickerSection, #modalSetupFood #selectPickerRevenue, #modalSetupFood #selectCopyFood').dxSelectBox({ disabled: false, });
        $('#modalSetupFood #tagFood, #modalSetupFood #iconFood').dxTagBox({ disabled: false, });
        $('#modalSetupFood #grid-icon').dxDataGrid({ disabled: false, });
    },
    function (dismiss) {
        if (dismiss === 'cancel') {

        };
    });
};
//End Added by SMILEDINING-SA21-0066#24