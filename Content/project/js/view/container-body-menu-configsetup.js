/*
    SMILEDINING-SA18-0019      07/12/2018      Customize      1. Fixbug Drag Choice Sorting
    SMILEDINING-SA18-0031      09/27/2018      Customize      1. Create function CopyChoice
    SMILEDINING-SA19-0001      01/28/2019      Fixbug         1. Fixbug on safari browser can not click save
                                                              2. Fixbug ChoiceOptionName can not use special alphabet.
                                                              3. Fixbug add ChoiceOption in Food and delete can not save after delete.
							                                  4. Fixbug configSetUp Drag change sorting save same sorting
    SMILEDINING-SA19-0019      08/26/2019      Customize      1. Modified Drag&Drop list of ChoiceOption to Sortable.
					                                          2. Modified Drag&Drop list of Choice to Sortable.
    SMILEDINING-SA20-0009      15/07/2020      Customize      1. Fix bug Config setup drag choice and choice option same place error loading.
    SMILEDINING-SA20-0018      01/09/2020      Customize      1. Edit Config Setup for Choice Group,Choice Option,Choice Modify and Add Gratuity Charge.
                                                              2. Add Setting Gratuity Charge to My Setting.
    SMILEDINING-SA21-0021     11/06/2021      Customize       1. Setting icon image for show in smileDining.
    SMILEDINING-SA21-0066#24  15/03/2022      Customize       1. Add unlock food, choice and choiceOption from Deliverect in webOwner.
    WEB-SA22-0045             29/09/2022      Customize       1. Fix bug choice and choiceOption sorting duplicate in webOwner.
    WEB-SA23-0001             09/01/2023      Customize       1. Use MQTT send data to kiosk  in webOwner.
    WEB-SA23-0001#1           10/01/2023      Customize       1. Fix bug data MQTT in webOwner.
    WEB-SA23-0026#1           15/05/2023      Customize       1. Fix bug auto sync product deliverect when log out and close browser on webOwner.
    WEB-SA24-0013             10/04/2024      Customize       1. Fix bug can't save discount for ios on webOwner.
*/

$("input[type='number']").click(function () {
    $(this).select();
});

$('.touch').swipe({
    swipeLeft: function () {
        var leftPos = $('.touch-slide').scrollLeft();
        $('.touch-slide').animate({ scrollLeft: leftPos + 200 }, 300);
    },
    swipeRight: function () {
        var leftPos = $('.touch-slide').scrollLeft();
        $('.touch-slide').animate({ scrollLeft: leftPos - 200 }, 300);
    },
    allowPageScroll: 'horizontal',
    preventDefaultEvents: false
});

$('.slideLeft').click(function () {
    slideLeft();
});

$('.slideRight').click(function () {
    slideRight();
});

function slideLeft() {
    var positionTab = $('.tab-config').scrollLeft();
    $('.tab-config').animate({ scrollLeft: positionTab - 300 }, 200);
};

function slideRight() {
    var positionTab = $('.tab-config').scrollLeft();
    //$('.tab-config').animate({ scrollLeft: positionTab + 300 }, 200);     //Modified and End by SMILEDINING-SA20-0018
    $('.tab-config').animate({ scrollLeft: positionTab + 700 }, 200);   //Added and End by SMILEDINING-SA20-0018
};

//Added by WEB-SA24-0013
function slideLeftByClassTag(text) {
    var $tag = $('.' + text);
    var positionTab = $tag.scrollLeft();
    $tag.animate({ scrollLeft: positionTab - 300 }, 200);
};

function slideRightByClassTag(text) {
    var $tag = $('.' + text);
    var positionTab = $tag.scrollLeft();
    $tag.animate({ scrollLeft: positionTab + 700 }, 200);
};
//End Added by WEB-SA24-0013

//Added by SMILEDINING-SA21-0021
$('.slideLeftTabConfig').click(function () {
    var positionTab = $('.tab-config.tab-config-setup').scrollLeft();
    $('.tab-config.tab-config-setup').animate({ scrollLeft: positionTab - 300 }, 200);
});

$('.slideRightTabConfig').click(function () {
    var positionTab = $('.tab-config.tab-config-setup').scrollLeft();
    $('.tab-config.tab-config-setup').animate({ scrollLeft: positionTab + 300 }, 200);
});
//End Added by SMILEDINING-SA21-0021

//Added by SMILEDINING-SA18-0031
function swalConfirmSaveCopyChoice(jsonObj, dataItem, choiceOptionId) {
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
            var requestUrl = objUrl.getUrlSubmitForm();
            var jsonItem = ko.toJSON(dataItem);
            var passData = {
                'JsonListCopyChoice': jsonItem,
                'choiceOptionId': choiceOptionId,
                'choiceTypeId': cChoiceType.option
            };
            vmViewIndex.showLoading(true);
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
                    var itemChoice = JSON.parse(result.obj);
                    val = result.txtValue;
                    setChoiceCopy(itemChoice);
                    //Added by WEB-SA23-0001
                    if (result.status) {
                        if (vmViewIndex.isKiosk() && !isEmpty(itemChoice)) {
                            sendMqtt(itemChoice, getTopicMqtt('choice'));
                        }
                        checkUpdateThirdParty(cfrmCopyChoice, result); //Added and End by WEB-SA23-0026#1
                    }
                    vmViewIndex.isKiosk(false);
                    //End Added by WEB-SA23-0001
                    vmViewIndex.showLoading(false);
                    var objAlert = new ObjAlert("", result.message, result.status);
                    objAlert.getAlert();
                })
                .fail(function (result) {
                    vmViewIndex.showLoading(false);
                    var objAlert = new ObjAlert("", result.message, result.status);
                    objAlert.getAlert();
                    vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
                });
            });
        }
    }).then(function () {
        refreshGrid('gridChoice');
    }
    , function (dismiss) {
        if (dismiss === 'cancel') {
            undoCopyChoiceConfigSetup();
            swal('Cancelled', '', 'error');
            vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
        };
    });
};

function undoCopyChoiceConfigSetup() {
    vmViewIndex.configSetUp.choice.listCopyChoice([]);
    vmViewIndex.configSetUp.choice.visibleListCopyChoice(false);
    refreshGrid('gridChoice');
};
//End Added by SMILEDINING-SA18-0031

//Added by SMILEDINING-SA20-0018
function swalConfirmSaveCopyChoiceModify(jsonObj, dataItem, choiceOptionId) {
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
            var requestUrl = objUrl.getUrlSubmitForm();
            var jsonItem = ko.toJSON(dataItem);
            var passData = {
                'JsonListCopyChoice': jsonItem,
                'choiceOptionId': choiceOptionId,
                'choiceTypeId': cChoiceType.modify
            };
            vmViewIndex.showLoading(true);
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
                    var itemChoice = JSON.parse(result.obj);
                    val = result.txtValue;
                    setChoiceModifyCopy(itemChoice);

                    vmViewIndex.showLoading(false);
                    var objAlert = new ObjAlert("", result.message, result.status);
                    objAlert.getAlert();
                })
                .fail(function (result) {
                    vmViewIndex.showLoading(false);
                    var objAlert = new ObjAlert("", result.message, result.status);
                    objAlert.getAlert();
                });
            });
        }
    }).then(function () {
        refreshGrid('gridChoiceModify');
    }
    , function (dismiss) {
        if (dismiss === 'cancel') {
            undoCopyChoiceModifyConfigSetup();
            swal('Cancelled', '', 'error');
        };
    });
};

function undoCopyChoiceModifyConfigSetup() {
    vmViewIndex.configSetUp.choiceModify.listCopyChoice([]);
    vmViewIndex.configSetUp.choiceModify.visibleListCopyChoice(false);
    refreshGrid('gridChoiceModify');
};
//End Added by SMILEDINING-SA20-0018

//Modified by SMILEDINING-SA19-0019

//     function swalConfirmSaveDragging(jsonObj, dataItem, dataItemDrag) {
//    swal({
//        title: "Are you sure, you want to save?",
//        type: "question",
//        showCancelButton: true,
//        confirmButtonText: "Yes",
//        cancelButtonText: "No",
//        closeOnConfirm: false,
//        closeOnCancel: false,
//        confirmButtonClass: "btn theme default-button",
//        cancelButtonClass: "btn btn-danger",
//        preConfirm: function (e) {
//            var objUrl = new ObjUrl(jsonObj);
//            var requestUrl = objUrl.getUrlFromJson();
//            var passData = { 'model': dataItem, 'modelDrag': dataItemDrag };
//            return new Promise(function (resolve) {
//                $.ajax({
//                    url: requestUrl,
//                    async: ajax_async,
//                    cache: ajax_cache,
//                    type: ajax_type_post,
//                    data: passData,
//                    timeout: ajax_timeout,
//                })
//                .done(function (result) {
//                    vmViewIndex.configSetUp.choice.dataChoiceOption(ko.mapping.toJS(vmViewIndex.configSetUp.choiceOption.dataArrayStore()._array));
//                    vmViewIndex.configSetUp.choiceOption.cloneDataArrayStore(ko.mapping.toJS(vmViewIndex.configSetUp.choiceOption.dataArrayStore()._array));
//                    vmViewIndex.configSetUp.choiceOption.tempDataDragging([]);
//                    vmViewIndex.configSetUp.choiceOption.tempItemDragging([]);
//                    refreshGrid('gridChoiceOption');
//                    //Added by SMILEDINING-SA18-0019
//                    ko.utils.arrayForEach(vmViewIndex.configSetUp.choice.tempDataDragging(), function (dataDragging) {
//                        var filter = ko.utils.arrayFilter(vmViewIndex.configSetUp.choice.dataChoice(), function (itemChoice) {
//                            return (itemChoice.choiceId() == dataDragging.choiceId());
//                        });
//                        if (!isEmpty(filter))
//                            _.first(filter).choiceSorting(dataDragging.choiceSorting());
//                    });
//                    //End Added by SMILEDINING-SA18-0019
//                    vmViewIndex.configSetUp.choice.cloneDataArrayStore(ko.mapping.toJS(vmViewIndex.configSetUp.choice.dataArrayStore()._array));
//                    vmViewIndex.configSetUp.choice.tempDataDragging([]);
//                    vmViewIndex.configSetUp.choice.tempItemDragging([]);
//                    refreshGrid('gridChoice');
//                    vmViewIndex.configSetUp.chkDrag(false);
//                    var objAlert = new ObjAlert("", result.message, result.status);
//                    objAlert.getAlert();
//                })
//                .fail(function (result) {
//                    var objAlert = new ObjAlert("", result.message, result.status);
//                    objAlert.getAlert();
//                });
//            });
//        }
//    }).then(function () {
//        refreshGrid('gridChoiceOption');
//        refreshGrid('gridChoice');
//    }
//    , function (dismiss) {
//        if (dismiss === 'cancel') {
//            undoDraggingConfigSetup();
//            swal('Cancelled', '', 'error');
//        };
//    });
//};

//     function initDragging(gridElement, key, columnIndex, dataStore, tempData, tempItem, type) {
//         gridElement.find('.myRow').draggable({
//             helper: 'clone',
//             start: function (event, ui) {
//                 var originalRow = $(this),
//                 clonedRow = ui.helper;
//                 var originalRowCells = $(gridElement).dxDataGrid('instance').getView('rowsView').getCellElements(originalRow.index());
//                 clonedRow.empty();
//                 originalRowCells.clone().appendTo(clonedRow);
//                 var clonedRowCells = clonedRow.children();
//                 for (var i = 0; i < originalRowCells.length; i++) {
//                     $(clonedRowCells.get(i)).width($(originalRowCells.get(i)).width());
//                 }
//                 clonedRow.width(originalRow.width()).addClass('drag-helper');
//             }
//         });
//         gridElement.find('.myRow').droppable({
//             drop: function (event, ui) {            
//                 var draggingRowKey = ui.draggable.data('keyValue');
//                 var targetRowKey = $(this).data('keyValue');
//                 var draggingIndex = null,
//                     targetIndex = null;
//                 //Added by SMILEDINING-SA19-0001
//                 //get dragging index
//                 dataStore.byKey(draggingRowKey).done(function (item) {
//                     draggingIndex = item[columnIndex];
//                 });
//                 //get target index
//                 dataStore.byKey(targetRowKey).done(function (item) {
//                     targetIndex = item[columnIndex];
//                 });
//                 var dataItems = null;
//                 //load data before drag
//                 dataStore.load().done(function (data) {
//                     dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['choiceSorting'], ['asc']))();
//                 });
//                 //check temp has value
//                 if (tempData().length > 0) {
//                     var tempDataForDelete = ko.observableArray();
//                     ko.utils.arrayForEach(tempData(), function (item) {
//                         //check data drag same key drag/drop again
//                         if (type == 'choiceOption') {
//                             if (item.choiceOptionId() == targetRowKey || item.choiceOptionId() == draggingRowKey) {
//                                 tempDataForDelete.push(item);
//                             }
//                         }
//                         else if (type == 'choice') {
//                             if (item.choiceId() == targetRowKey || item.choiceId() == draggingRowKey) {
//                                 tempDataForDelete.push(item);
//                             }
//                         }
//                     });
//                     //check for delete item drag/drop again
//                     if (tempDataForDelete().length > 0) {
//                         ko.utils.arrayForEach(tempDataForDelete(), function (item) {
//                             tempData.remove(item);
//                         });
//                     }
//                 }
//                 for (var dataIndex = 0; dataIndex < dataItems.length; dataIndex++) {
//                     //check data same drag and add data to controller
//                     if (dataItems[dataIndex][key]() == draggingRowKey) {
//                         dataItems[dataIndex][columnIndex](targetIndex());
//                         tempData.push(dataItems[dataIndex]);
//                         tempItem.push(dataItems[dataIndex]);
//                     }
//                         //check data same drop and add data to controller
//                     else if (dataItems[dataIndex][key]() == targetRowKey) {
//                         dataItems[dataIndex][columnIndex](draggingIndex());
//                         tempData.push(dataItems[dataIndex]);
//                     }
//                 }
//                 //End Added by SMILEDINING-SA19-0001
//                 //Modified by SMILEDINING-SA19-0001
//                 //dataStore.byKey(draggingRowKey).done(function (item) {
//                 //    draggingIndex = item[columnIndex];
//                 //});
//                 //dataStore.byKey(targetRowKey).done(function (item) {
//                 //    targetIndex = item[columnIndex];
//                 //});
//                 //var draggingDirection = (targetIndex() < draggingIndex()) ? 1 : -1;
//                 //var dataItems = null;
//                 //dataStore.load().done(function (data) {
//                 //    dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['choiceSorting'], ['asc']))();
//                 //});
//                 //var targetIndexOld = ko.observable();
//                 //var tempDataItemOld = ko.observableArray([]);
//                 //ko.mapping.fromJS(targetIndex(), {}, targetIndexOld);
//                 //ko.mapping.fromJS(dataItems, {}, tempDataItemOld);
//                 //var dataItemOld = _.orderBy(ko.mapping.toJS(tempDataItemOld), ['choiceSorting'], ['asc']);
//                 //for (var dataIndex = 0; dataIndex < dataItems.length; dataIndex++) {
//                 //    if ((dataItems[dataIndex][columnIndex]() > Math.min(targetIndex(), draggingIndex())) && (dataItems[dataIndex][columnIndex]() < Math.max(targetIndex(), draggingIndex()))) {
//                 //        dataItems[dataIndex][columnIndex](dataItemOld[dataIndex + draggingDirection][columnIndex]);
//                 //        tempData.push(dataItems[dataIndex]);
//                 //    }
//                 //}
//                 //for (var dataIndex = 0; dataIndex < dataItems.length; dataIndex++) {
//                 //    if (dataItems[dataIndex][key]() == draggingRowKey) {
//                 //        dataItems[dataIndex][columnIndex](targetIndexOld());
//                 //        tempData.push(dataItems[dataIndex]);
//                 //        tempItem.push(dataItems[dataIndex]);
//                 //    }
//                 //}
//                 //for (var dataIndex = 0; dataIndex < dataItems.length; dataIndex++) {
//                 //    if (dataItems[dataIndex][key]() == targetRowKey) {
//                 //        dataItems[dataIndex][columnIndex](dataItemOld[dataIndex + draggingDirection][columnIndex]);
//                 //        tempData.push(dataItems[dataIndex]);
//                 //    }
//                 //}
//                 //End Modified by SMILEDINING-SA19-0001
//                 vmViewIndex.showLoading(true);
//                 setTimeout(function () {
//                     updateDragging(tempData, type);
//                     gridElement.dxDataGrid('instance').refresh();
//                 }, 1000);
//             }
//         });
//     }

//     function updateDragging(tempData, type) {
//         if (type == "choiceOption") {
//             ko.utils.arrayForEach(tempData(), function (dataDragging) {
//                 vmViewIndex.configSetUp.choiceOption.dataArrayStore().update(dataDragging.choiceOptionId(), { choiceSorting: dataDragging.choiceSorting() });
//             });
//         } else {
//             ko.utils.arrayForEach(tempData(), function (dataDragging) {            
//                 vmViewIndex.configSetUp.choice.dataArrayStore().update(dataDragging.choiceId(), { choiceSorting: dataDragging.choiceSorting() });
//             });
//         }
//         vmViewIndex.showLoading(false);
//     } 

//End Modified by SMILEDINING-SA19-0019

//Added by SMILEDINING-SA19-0019
function swalConfirmSaveSortableChoice(jsonObj, sortData) {
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
        preConfirm: function () {
            //Added by SMILEDINING-SA20-0018
            var cfrm = jsonObj;
            if (jsonObj == cChoiceModifyUpDateSortable) {
                cfrm = cChoiceUpDateSortable;
            }
            var objUrl = new ObjUrl(cfrm);
            //End Added by SMILEDINING-SA20-0018
            //var objUrl = new ObjUrl(jsonObj);     //Modified and End by SMILEDINING-SA20-0018
            var requestUrl = objUrl.getUrlFromJson();
            var passData = { 'model': sortData };
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

                    if (jsonObj == cChoiceUpDateSortable) {
                        //Added by WEB-SA22-0045
                        if (result.status) {
                            var itemChoice = JSON.parse(result.obj);
                            setChoiceUpDateSortable(itemChoice);
                            //Added by WEB-SA23-0001
                            //Modified by WEB-SA23-0001#1
                            //if (vmViewIndex.isKiosk() && !isEmpty(itemChoice)) { 
                            //    sendMqtt(itemChoice, getTopicMqtt('choice'));
                            //}
                            //End Modified by WEB-SA23-0001#1
                            //End Added by WEB-SA23-0001
                            //Added by WEB-SA23-0001#1
                            var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                            if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) { 
                                sendMqtt(itemKiosk, getTopicMqtt('choice'));
                            }
                            //End Added by WEB-SA23-0001#1
                            checkUpdateThirdParty(cChoiceUpDateSortable, result); //Added and End by WEB-SA23-0026#1
                        }
                        //End Added by WEB-SA22-0045
                        vmViewIndex.configSetUp.choice.cloneDataArrayStore(ko.mapping.toJS(vmViewIndex.configSetUp.choice.dataArrayStore()._array));
                        refreshGrid('gridChoice');
                    }
                    else if (jsonObj == cChoiceOptionUpDateSortable) {
                        vmViewIndex.configSetUp.choiceOption.cloneDataArrayStore(ko.mapping.toJS(vmViewIndex.configSetUp.choiceOption.dataArrayStore()._array));
                        vmViewIndex.configSetUp.choice.dataChoiceOption(ko.mapping.toJS(vmViewIndex.configSetUp.choiceOption.dataArrayStore()._array));
                        refreshGrid('gridChoiceOption');
                        //Added by WEB-SA23-0001
                        if (result.status) { 
                            var itemKiosk = !isEmpty(result.obj) ? JSON.parse(result.obj) : null;
                            if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) { 
                                sendMqtt(itemKiosk, getTopicMqtt('choiceOption'));
                            }
                            checkUpdateThirdParty(cChoiceOptionUpDateSortable, result); //Added and End by WEB-SA23-0026#1
                        }
                        //End Added by WEB-SA23-0001
                    }
                    //Added by SMILEDINING-SA20-0018
                    else if (jsonObj == cChoiceModifyUpDateSortable) {
                        vmViewIndex.configSetUp.choiceModify.cloneDataArrayStore(ko.mapping.toJS(vmViewIndex.configSetUp.choiceModify.dataArrayStore()._array));
                        refreshGrid('gridChoiceModify');
                    }
                    else if (jsonObj == cFoodPrefixUpDateSortable) {
                        vmViewIndex.configSetUp.foodPrefix.cloneDataArrayStore(ko.mapping.toJS(vmViewIndex.configSetUp.foodPrefix.dataArrayStore()._array));
                        refreshGrid('gridFoodPrefix');
                    }
                    //End Added by SMILEDINING-SA20-0018
                    vmViewIndex.configSetUp.chkDrag(false);
                    var objAlert = new ObjAlert("", result.message, result.status);
                    objAlert.getAlert();
                    vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
                })
                .fail(function (result) {
                    var objAlert = new ObjAlert("", result.message, result.status);
                    objAlert.getAlert();
                    vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
                });
            });
        }
    }).then(function () {
        refreshGrid('gridChoiceOption');
        refreshGrid('gridChoice');
        //Added by SMILEDINING-SA20-0018
        refreshGrid('gridChoiceModify');
        refreshGrid('gridFoodPrefix');
        //End Added by SMILEDINING-SA20-0018
    },
    function (dismiss) {
        if (dismiss === 'cancel') {
            undoDraggingConfigSetup();
            swal('Cancelled', '', 'error');
            vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
        };
    });
};

function choiceSortable(element, dataStore) {
    var startPosition;
    var pageSize = vmViewIndex.configSetUp.choice.pageSize();
    var pageIndex = vmViewIndex.configSetUp.choice.pageIndex() - 1;

    $(element).find('tbody').sortable({
        cursor: 'move',
        forcePlaceholderSize: false,
        opacity: 0.4,
        placeholder: 'highlight',
        start: function (event, ui) {
            ui.item.toggleClass("highlight");
            startPosition = (pageSize * pageIndex) + ui.item.index();
        },
        update: function (event, ui) {
        },
        stop: function (event, ui) {
            ui.item.toggleClass("highlight");
            //vmViewIndex.configSetUp.chkDrag(true);        //Modified and End by SMILEDINING-SA20-0009
            var endPosition = (pageSize * pageIndex) + ui.item.index();
            //Added By SMILEDINING-SA20-0009
            if (startPosition != endPosition) {
                vmViewIndex.configSetUp.chkDrag(true);
            //End Added By SMILEDINING-SA20-0009
                if (startPosition < endPosition) {
                    var sortableChoice = [];
                    var dataItems = null;
                    dataStore.load().done(function (data) {
                        dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['choiceSorting'], ['asc']))();
                    });

                    var tmpStartId = dataItems[startPosition].choiceId();
                    var tmpEndSorting = dataItems[endPosition].choiceSorting();

                    for (i = startPosition; i < endPosition ; i++) {
                        sortableChoice.push({
                            choiceId: dataItems[i + 1].choiceId(),
                            choiceSorting: dataItems[i].choiceSorting()
                        });
                    }
                    sortableChoice.push({
                        choiceId: tmpStartId,
                        choiceSorting: tmpEndSorting
                    });
                }
                else if (startPosition > endPosition) {
                    var sortableChoice = [];
                    var dataItems = null;
                    dataStore.load().done(function (data) {
                        dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['choiceSorting'], ['asc']))();
                    });

                    var tmpStartId = dataItems[startPosition].choiceId();
                    var tmpEndSorting = dataItems[endPosition].choiceSorting();

                    for (i = startPosition; i > endPosition; i--) {
                        sortableChoice.push({
                            choiceId: dataItems[i - 1].choiceId(),
                            choiceSorting: dataItems[i].choiceSorting()
                        });
                    }
                    sortableChoice.push({
                        choiceId: tmpStartId,
                        choiceSorting: tmpEndSorting
                    });
                }

                vmViewIndex.showLoading(true);

                setTimeout(function () {
                    updateSortableChoice(sortableChoice, 'choice');
                    element.dxDataGrid('instance').refresh();
                }, 1000);
            } //Added and End by SMILEDINING-SA20-0009
        }
    });
};

function choiceOptionSortable(element, dataStore) {
    var startPosition;
    var pageSize = vmViewIndex.configSetUp.choiceOption.pageSize();
    var pageIndex = vmViewIndex.configSetUp.choiceOption.pageIndex() - 1;

    $(element).find('tbody').sortable({
        cursor: 'move',
        forcePlaceholderSize: false,
        opacity: 0.4,
        placeholder: 'highlight',
        start: function (event, ui) {
            ui.item.toggleClass("highlight");
            startPosition = (pageSize * pageIndex) + ui.item.index();
        },
        update: function (event, ui) {
        },
        stop: function (event, ui) {
            ui.item.toggleClass("highlight");
            //vmViewIndex.configSetUp.chkDrag(true);        //Modified and End by SMILEDINING-SA20-0009
            var endPosition = (pageSize * pageIndex) + ui.item.index();
            //Added By SMILEDINING-SA20-0009
            if (startPosition != endPosition) {
                vmViewIndex.configSetUp.chkDrag(true);
            //End Added By SMILEDINING-SA20-0009
                if (startPosition < endPosition) {
                    var sortableChoice = [];
                    var dataItems = null;
                    dataStore.load().done(function (data) {
                        dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['choiceSorting'], ['asc']))();
                    });

                    var tmpStartId = dataItems[startPosition].choiceOptionId();
                    var tmpEndSorting = dataItems[endPosition].choiceSorting();

                    for (i = startPosition; i < endPosition ; i++) {
                        sortableChoice.push({
                            choiceOptionId: dataItems[i + 1].choiceOptionId(),
                            choiceSorting: dataItems[i].choiceSorting()
                        });
                    }
                    sortableChoice.push({
                        choiceOptionId: tmpStartId,
                        choiceSorting: tmpEndSorting
                    });
                }
                else if (startPosition > endPosition) {
                    var sortableChoice = [];
                    var dataItems = null;
                    dataStore.load().done(function (data) {
                        dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['choiceSorting'], ['asc']))();
                    });

                    var tmpStartId = dataItems[startPosition].choiceOptionId();
                    var tmpEndSorting = dataItems[endPosition].choiceSorting();

                    for (i = startPosition; i > endPosition; i--) {
                        sortableChoice.push({
                            choiceOptionId: dataItems[i - 1].choiceOptionId(),
                            choiceSorting: dataItems[i].choiceSorting()
                        });
                    }
                    sortableChoice.push({
                        choiceOptionId: tmpStartId,
                        choiceSorting: tmpEndSorting
                    });
                }

                vmViewIndex.showLoading(true);

                setTimeout(function () {
                    updateSortableChoice(sortableChoice, 'choiceOption');
                    element.dxDataGrid('instance').refresh();
                }, 1000);
            } //Added and End by SMILEDINING-SA20-0009
        }
    });
};

//Added by SMILEDINING-SA20-0018
function choiceModifySortable(element, dataStore) {
    var startPosition;
    var pageSize = vmViewIndex.configSetUp.choiceModify.pageSize();
    var pageIndex = vmViewIndex.configSetUp.choiceModify.pageIndex() - 1;

    $(element).find('tbody').sortable({
        cursor: 'move',
        forcePlaceholderSize: false,
        opacity: 0.4,
        placeholder: 'highlight',
        start: function (event, ui) {
            ui.item.toggleClass("highlight");
            startPosition = (pageSize * pageIndex) + ui.item.index();
        },
        update: function (event, ui) {
        },
        stop: function (event, ui) {
            ui.item.toggleClass("highlight");
            var endPosition = (pageSize * pageIndex) + ui.item.index();
            if (startPosition != endPosition) {
                vmViewIndex.configSetUp.chkDrag(true);
                if (startPosition < endPosition) {
                    var sortableChoice = [];
                    var dataItems = null;
                    dataStore.load().done(function (data) {
                        dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['choiceSorting'], ['asc']))();
                    });

                    var tmpStartId = dataItems[startPosition].choiceId();
                    var tmpEndSorting = dataItems[endPosition].choiceSorting();

                    for (i = startPosition; i < endPosition ; i++) {
                        sortableChoice.push({
                            choiceId: dataItems[i + 1].choiceId(),
                            choiceSorting: dataItems[i].choiceSorting()
                        });
                    }
                    sortableChoice.push({
                        choiceId: tmpStartId,
                        choiceSorting: tmpEndSorting
                    });
                }
                else if (startPosition > endPosition) {
                    var sortableChoice = [];
                    var dataItems = null;
                    dataStore.load().done(function (data) {
                        dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['choiceSorting'], ['asc']))();
                    });

                    var tmpStartId = dataItems[startPosition].choiceId();
                    var tmpEndSorting = dataItems[endPosition].choiceSorting();

                    for (i = startPosition; i > endPosition; i--) {
                        sortableChoice.push({
                            choiceId: dataItems[i - 1].choiceId(),
                            choiceSorting: dataItems[i].choiceSorting()
                        });
                    }
                    sortableChoice.push({
                        choiceId: tmpStartId,
                        choiceSorting: tmpEndSorting
                    });
                }

                vmViewIndex.showLoading(true);

                setTimeout(function () {
                    updateSortableChoice(sortableChoice, 'choiceModify');
                    element.dxDataGrid('instance').refresh();
                }, 1000);
            }
        }
    });
};


function foodPrefixSortable(element, dataStore) {
    var startPosition;
    var pageSize = vmViewIndex.configSetUp.foodPrefix.pageSize();
    var pageIndex = vmViewIndex.configSetUp.foodPrefix.pageIndex() - 1;

    $(element).find('tbody').sortable({
        cursor: 'move',
        forcePlaceholderSize: false,
        opacity: 0.4,
        placeholder: 'highlight',
        start: function (event, ui) {
            ui.item.toggleClass("highlight");
            startPosition = (pageSize * pageIndex) + ui.item.index();
        },
        update: function (event, ui) {
        },
        stop: function (event, ui) {
            ui.item.toggleClass("highlight");
            var endPosition = (pageSize * pageIndex) + ui.item.index();
            if (startPosition != endPosition) {
                vmViewIndex.configSetUp.chkDrag(true);
                if (startPosition < endPosition) {
                    var sortablePrefix = [];
                    var dataItems = null;
                    dataStore.load().done(function (data) {
                        dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['prefixSorting'], ['asc']))();
                    });

                    var tmpStartId = dataItems[startPosition].prefixId();
                    var tmpEndSorting = dataItems[endPosition].prefixSorting();

                    for (i = startPosition; i < endPosition ; i++) {
                        sortablePrefix.push({
                            prefixId: dataItems[i + 1].prefixId(),
                            prefixSorting: dataItems[i].prefixSorting()
                        });
                    }
                    sortablePrefix.push({
                        prefixId: tmpStartId,
                        prefixSorting: tmpEndSorting
                    });
                }
                else if (startPosition > endPosition) {
                    var sortablePrefix = [];
                    var dataItems = null;
                    dataStore.load().done(function (data) {
                        dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['prefixSorting'], ['asc']))();
                    });

                    var tmpStartId = dataItems[startPosition].prefixId();
                    var tmpEndSorting = dataItems[endPosition].prefixSorting();

                    for (i = startPosition; i > endPosition; i--) {
                        sortablePrefix.push({
                            prefixId: dataItems[i - 1].prefixId(),
                            prefixSorting: dataItems[i].prefixSorting()
                        });
                    }
                    sortablePrefix.push({
                        prefixId: tmpStartId,
                        prefixSorting: tmpEndSorting
                    });
                }

                vmViewIndex.showLoading(true);

                setTimeout(function () {
                    updateSortableChoice(sortablePrefix, 'foodPrefix');
                    element.dxDataGrid('instance').refresh();
                }, 1000);
            }
        }
    });
};
//End Added by SMILEDINING-SA20-0018

function updateSortableChoice(sortData, type) {
    if (type == "choiceOption") {
        ko.utils.arrayForEach(sortData, function (data) {
            vmViewIndex.configSetUp.choiceOption.dataArrayStore().update(data.choiceOptionId, { choiceSorting: data.choiceSorting });
        });
    //} else {  //Modified and End by SMILEDINING-SA20-0018
    } else if (type == "choice") {  //Added and End by SMILEDINING-SA20-0018
        ko.utils.arrayForEach(sortData, function (data) {
            vmViewIndex.configSetUp.choice.dataArrayStore().update(data.choiceId, { choiceSorting: data.choiceSorting });
        });
    }
        //Added by SMILEDINING-SA20-0018
    else if (type == "choiceModify") {
        ko.utils.arrayForEach(sortData, function (data) {
            vmViewIndex.configSetUp.choiceModify.dataArrayStore().update(data.choiceId, { choiceSorting: data.choiceSorting });
        });
    }
    else if (type == "foodPrefix") {
        ko.utils.arrayForEach(sortData, function (data) {
            vmViewIndex.configSetUp.foodPrefix.dataArrayStore().update(data.prefixId, { prefixSorting: data.prefixSorting });
        });
    }
    //End Added by SMILEDINING-SA20-0018
    vmViewIndex.showLoading(false);
};
//End Added by SMILEDINING-SA19-0019



function undoDragging(self) {
    var cloneData = ko.observableArray([]);
    ko.mapping.fromJS(self.cloneDataArrayStore, {}, cloneData);
    self.dataArrayStore()._array = cloneData();
    self.tempDataDragging([]);
    self.tempItemDragging([]);
    vmViewIndex.showLoading(false);
};

function undoDraggingConfigSetup(data) {
    var selfChoiceOption = vmViewIndex.configSetUp.choiceOption;
    undoDragging(selfChoiceOption);
    refreshGrid('gridChoiceOption');

    var selfChoice = vmViewIndex.configSetUp.choice;
    undoDragging(selfChoice);
    refreshGrid('gridChoice');

    //Added by SMILEDINING-SA20-0018
    var selfChoiceModify = vmViewIndex.configSetUp.choiceModify;
    undoDragging(selfChoiceModify);
    refreshGrid('gridChoiceModify');

    var selfFoodPrefix = vmViewIndex.configSetUp.foodPrefix;
    undoDragging(selfFoodPrefix);
    refreshGrid('gridFoodPrefix');
    //End Added by SMILEDINING-SA20-0018

    vmViewIndex.configSetUp.chkDrag(false);
};

//Added by SMILEDINING-SA18-0031
function UpdateCartCopyChoice() {
    var self = vmViewIndex.configSetUp.choice;
    var cart = $('.card').find('.card-block .cart');
    if (self.listCopyChoice().length <= 0) {
        cart.hide();
        self.visibleListCopyChoice(false);
    } else {
        cart.show();
    }
};

//Added by SMILEDINING-SA20-0018
function UpdateCartCopyChoiceModify() {
    var self = vmViewIndex.configSetUp.choiceModify;
    var cart = $('.card').find('.card-block .cart');
    if (self.listCopyChoice().length <= 0) {
        cart.hide();
        self.visibleListCopyChoice(false);
    } else {
        cart.show();
    }
};
//End Added by SMILEDINING-SA20-0018

function CopyChoice(choiceId, choiceName, choiceGuid) {
    var self = this;
    self.choiceId = ko.observable(choiceId);
    self.choiceName = ko.observable(choiceName);
    self.choiceGuid = ko.observable(choiceGuid);
};
//End Added by SMILEDINING-SA18-0031

//Added by SMILEDINING-SA21-0066#24
function swalUnlockChoiceOptionAndChoiceDeliverect(isChoiceOption) {
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
        var self = vmViewIndex.configSetUp;
        if (isChoiceOption) {
            self.choiceOption.dataSetUpModal.plu('');
            $('#modalSetUpChoiceOption .switch-custom').dxSwitch({ disabled: false, });
            $('#modalSetUpChoiceOption #tagChoiceOption').dxTagBox({ disabled: false, });
            $('#modalSetUpChoiceOption #selectArrange, #modalSetUpChoiceOption #selectMaxChoice').dxSelectBox({ disabled: false, });
            $('#modalSetUpChoiceOption input').removeAttr('disabled');
        } else {
            self.choice.showBtnUnlockChoice(false);
            self.choice.dataSetUpModal.plu('');
            $('#modalSetUpChoice .switch-custom').dxSwitch({ disabled: false, });
            $('#modalSetUpChoice #tagChoice').dxTagBox({ disabled: false, });
            $('#modalSetUpChoice #txtChoiceSetUp_ChoiceOptionID').dxSelectBox({ disabled: false, });
            $('#modalSetUpChoice input').removeAttr('disabled');
        }
    },
    function (dismiss) {
        if (dismiss === 'cancel') {

        };
    });
};
//End Added by SMILEDINING-SA21-0066#24