/*
    SMILEDINING-SA18-0003      01/12/2018      Customize   1. Holiday, AutoCharge, Special instructions.
    SMILEDINING-SA18-0006      01/19/2018      Customize   1. Check discount code expired , Show foodset menu hours , Add discount type
    SMILEDINING-SA18-0012      05/21/2018      Customize   1. Add FoodNameAlt
    SMILEDINING-SA18-0024      08/04/2018      FixBug      1. Fixbug submit in modal layout Smaller
                                                           2. Fixbug after dialog close combobox not reset
    SMILEDINING-SA18-0026      09/12/2018      Customize   1. Create function LinkToFood
    SMILEDINING-SA18-0030      09/19/2018      Customize   1. Disable close button on runtime
                                                           2. Disable mouse pointer on runtime
                                                           3. Fixbug Revenue class edit and save same data return error
    SMILEDINING-SA18-0033      10/08/2018      Customize   1. Edit Copy food name not have "Copy"
                                                           2. Edit Copy food Save function to working in one Transaction
                                                           3. Edit concept insert Log LinkToFood
                                                           4. Edit CopyFood one food can copy multiple
                                                           5. Fixbug copy ChoiceOption Set in menu food delete Option Set and Save but not Delete
                                                           6. Edit concept insert log Copyfood to copyChoice concept 
                                                           7. Edit Insert Log ChoiceOption on Food (Insert, Update, Delete)
                                                           8. Fixbug Delete ChoiceOption Set on Food and Insert ChoiceOption Set Same Data bug data multiple
    SMILEDINING-SA18-0036      11/15/2018      Customize   1. Add button Delete Logo Shop in smiledining
                                                           2. smiledining mobile device nameshop to longer
                                                           3. modal Autocharge after edit can't scroll in modal
                                                           4. edit function GetDataOrderHistory in smiledining to new concept
                                                           5. add new theme color (Red, Yellow, Navy, Gold, Beige, Pink, Black)
    SMILEDINING-SA18-0038      11/20/2018      Customize   1. Edit get data timeZone (Add one timezone Mountain Time)
                                                           2. Fixbug Uploadimage don't choose path return error
                                                           3. Fixbug Timezone don't choose return error
    SMILEDINING-SA18-0039      11/21/2018      Customize   1. webowner mobile device nameshop to longer
    SMILEDINING-SA18-0045      12/24/2018      Customize   1. Fixbug smiledining tablet device shop name longer menu Login have multiple line
                                                           2. Fixbug smiledining mobile device scroll top after click Login and Register
                                                           3. add function check shipping-type to show delivery and pickup (0 = showPickUp, 1=showDelivery, 2=showAll)
                                                           4. change GetAll to get data with parameter Owner
                                                           5. Refresh in owner add choose menu liveOrder
                                                           6. Check and Remove div not using
                                                           7. Edit function RemoveRange public to private (Service)
                                                           8. Fixbug add maxlength tipDesc
                                                           9. Fixbug linkToFood after click linkToFood modal choiceSetup can not reset
    SMILEDINING-SA19-0001      01/28/2019      Fixbug      1. Fixbug on safari browser can not click save
                                                           2. Fixbug ChoiceOptionName can not use special alphabet.
                                                           3. Fixbug add ChoiceOption in Food and delete can not save after delete.
							                               4. Fixbug configSetUp Drag change sorting save same sorting
    SMILEDINING-SA19-0004      03/13/2019      Customize   1. Add new tab menu 'Announcement' to 'Menu Setting' of SmileOwner
                                                           2. Move 'Broad Text' of Menu Setting to 'Announcement'
                                                           3. Create ''Announcement' module that include Header, Description, Badge.
                                                           4. Add 'broad-active'  status for enable/disable on SmileDining (1=enable, 0=disable)
                                                           5. Announcement must collaborative with active and close time of setup on SmileOwner.
                                                           6. Upload/Delete AnnounceImage
                                                           7. Delete Shop Logo
    SMILEDINING-SA19-0005      03/25/2019      Customize   1. Gennerate sql script for create table 'tbdeliveryfreetime'
                                                           2. Add Delivery Free Time UI for Draw Maps and Set Mile at MySetting menu
                                                           3. Delivery Free Time can separate date between Zone1, Zone2 and Zone3
                                                           4. Control delivery charge of SmileDining depending on Shop map code and Zone of delivery  
    SMILEDINING-SA19-0008      04/19/2019      Customize    1. Create Table tbcoupondelivery.
                                                            2. Create UI on My Setting menu at WebOwner.
                                                            3. Assign total usable coupon option.
                                                            4. Assign minimum order option.
                                                            5. Assign discount delivery charge option.
                                                            6. Assign start and end date for available coupon.
                                                            7. Check and Calculate delivery charge and tax when order food.
    SMILEDINING-SA19-0012      06/05/2019      FixBug       1. Fix menu hours (user can pay order when out of time of menu hour ).
                                                            2. Fix 'modalSelectRestaurant' not close after submition.
    SMILEDINING-SA19-0021      09/02/2019      Customize    1. Change Design Menu Setting.
    SMILEDINING-SA19-0011      09/03/2019      Customize    1. E-Gift Card.
    SMILEDINING-SA20-0003      24/02/2020      Customize    1. New feature Limit Order and fix Bug food set time.
    SMILEDINING-SA20-0006      06/23/2020      Customize    1. Add checkbox Smile Contactless Dining on Menu Setup and update ProductID in database when update,add,copy food 
                                                            2. Add filter Product on Menu Setup
                                                            3. Add filter Product on Mysetting
                                                            4. Added button for switch shop status more one products
    SMILEDINING-SA20-0007      07/07/2020      Customize    1. New feature Gift Card.
    SMILEDINING-SA20-0010      16/07/2020      Customize    1. New feature set Out of Stock.
    SMILEDINING-SA20-0018      01/09/2020      Customize    1. Edit Config Setup for Choice Group,Choice Option,Choice Modify and Add Gratuity Charge.
                                                            2. Add Setting Gratuity Charge to My Setting.
    SMILEDINING-SA20-0011      23/07/2020      Customize    1. New feature auto apply discount SmileDining.
    SMILEDINING-SA20-0016      21/10/2020      Customize    1. Promotion free food.
    SMILEDINING-SA20-0032      10/29/2020      Customize    1. Add Tip Auto setting in Web Owner /Add field tip-auto globalConfig. 
                                                            2. Add radio button tip guide auto/Modal Custom Amount tip in Web Dining.
                                                            3. Config setting Service to keep data tbglobalconfig , tbglobalconfig_contactless.  
    SMILEDINING-SA20-0028      21/10/2020      Customize    1. Upload/show Image Announcement(Lightbox)
                                                            2. Add GlobalConfig image-annonce/image-announce-size/image-announce-active
    SMILEDINING-SA20-0043      15/12/2020      Customize    1. Custom map zone mile price.
    SMILEDINING-SA20-0031      02/12/2020      Customize    1. Adjust shop close period date and time.
    SMILEDINING-SA20-0043#2    06/01/2021      Customize    1. Add validate before save mapZoneMile.
    SMILEDINING-SA21-0006      12/02/2021      Customize    1. Add eGift card to SmileDining.
    SMILEDINING-SA21-0014      08/03/2021      Customize    1. Add new product 'Smile Third Party Integrations' used Deliverect.
    SMILEDINING-SA20-0048      28/12/2020      Customize    1. Discount code one time use.
    SMILEDINING-SA21-0014#1    15/03/2021      Customize    1. Fix bug 'Smile Third Party Integrations'.
    SMILEDINING-SA21-0015      09/03/2021      Customize    1. Fix bug validate setting promotion price.
                                                            2. Fix bug smileDining disable button add to cart when invalid time.
                                                            3. Fix bug mask input phone number don't working in mobile.
                                                            4. Fix bug button pickup/delivery invalid color in mobile.
															5. Fix bug selectBox in Config setup Choice Option and Choice Modify don't close when scroll window after open selectBox.
                                                            6. Fix bug scroll window when open or close modal.
                                                            7. Edit globalconfigservice.cs and globalconfigcontactlessservice.cs save value.
                                                            8. Edit view of setupGiftCard webOwner and Fix bug of giftcard. 
    SMILEDINING-SA20-0048#1    19/03/2021      Customize    1. Modified excel file DiscountOneTimeUse.
    SMILEDINING-SA21-0014#4    25/03/2021      Customize    1. Add IsAllergen to ProductTags. 
    SMILEDINING-SA20-0048#2    01/04/2021      Customize    1. Fix bug download excel file DiscountOneTimeUse.
    SMILEDINING-SA21-0014#7    09/04/2021      Customize    1. Modified deliverect sync product and added new feature snooze product. 
    SMILEDINING-SA21-0018      21/05/2021      Customize    1. Setting food detail by third party to deliverect.
    SMILEDINING-SA21-0018#1    24/05/2021      Customize    1. Edit third party integration.
    SMILEDINING-SA21-0018#2    27/05/2021      Customize    1. Fixed bug setting Third Party Integrations.
    SMILEDINING-SA21-0018#3    28/05/2021      Customize    1. Fixed bug save choice and save image.
    SMILEDINING-SA21-0021      11/06/2021      Customize    1. Setting icon image for show in smileDining.
    SMILEDINING-SA21-0021#3    21/06/2021      Customize    1. Fixed bug when add new food.
    SMILEDINING-SA21-0028     30/07/2021      Customize     1. Edit UI Smile Dining and Contactless (Layout P2) and  edit webOwner can upload food Image for Desktop and Mobile. 
    SMILEDINING-SA21-0035      02/08/2021      Customize    1. Add upload background image in webOwner only Smile Contactless Dining. (Smile On Table P1)
                                                            2. Create new Views following UI frame 1 and frame 2. (Smile On Table P1)
    SMILEDINING-SA21-0028#3    05/08/2021      Customize    1. Edit UI Smile Dining and Contactless (Layout P2).
    SMILEDINING-SA21-0028#5    23/08/2021      Customize    1. Fix bug Layout p2 upload and show image.
    SMILEDINING-SA21-0059      22/09/2021      Customize    1. Fix bug Menu Setup when edit food and image of food don't correct.
    SMILEDINING-SA21-0063      07/10/2021      Customize    1. Add menu Marketing on web owner and Add menu Log on web support.
    SMILEDINING-SA21-0063#4    26/10/2021      Customize    1. Add download export customer excel file and Remove library ExcelJs,FileSaver.
    SMILEDINING-SA21-0063#5    01/11/2021      Customize    1. Fix marketing view menu on mobile and Fix download file.
    SMILEDINING-SA21-0075      22/11/2021      Customize    1. Add crop image before upload.
    SMILEDINING-SA21-0075#5    01/12/2021      Customize    1. Add switch active crop image and Fix bug custom image can't upload.
    SMILEDINING-SA21-0035#11   07/12/2021      Customize    1. Fix bug UI upload background image in webOwner only Smile Contactless Dining.
    SMILEDINING-SA21-0075#6    07/12/2021      Customize    1. Fix cropimage affect to icon upload image.
    SMILEDINING-SA22-0009      30/03/2022      Customize    1. Add setting utensils for contactless in webOwner (useing in kiosk).
    SMILEDINING-SA21-0066#25   31/03/2022      Customize    1. Fix bug unlock choice and choiceOption in WebOwner.
    SMILEDINING-SA22-0013      23/05/2022      Customize    1. Add menu Delivery Billing for show report in webowner.
    SMILEDINING-SA22-0013#4    26/05/2022      Customize    1. Edit all code controller and service and edit print report.
    SMILEDINING-SA21-0066#26   26/05/2022      Customize    1. Fix bug cannot save choice option.
    SMILEDINING-SA22-0020      14/06/2022      Customize    1. Add new charge name 'Payment Fee' apply to order online.
    WEB-SA22-0040              26/09/2022      Customize    1. New feature minimum order delivery charge.
    WEB-SA22-0061              23/11/2022      Customize    1. Fix bug can't save choice for ios in webOwner.
    WEB-SA22-0064              29/11/2022      Customize    1. Fix bug setting product in webSupport.
                                                            2. Call Api in webOwner (AccountController, JsonController).
    WEB-SA22-0066              06/12/2022      Customize    1. Use MQTT send to kiosk for discount contactless in webOwner.
    WEB-SA22-0064#1            16/12/2022      Customize    1. Fix bug shop status in webOwner and fix bug food productId when setting product in webSupport.
    WEB-SA22-0072              26/12/2022      Customize    1. Use MQTT send data add and update food contactless to kiosk  in webOwner.
    WEB-SA23-0001              09/01/2023      Customize    1. Use MQTT send data to kiosk  in webOwner.
    WEB-SA23-0001#1            10/01/2023      Customize    1. Fix bug data MQTT in webOwner.
    WEB-SA23-0001#2            10/01/2023      Customize    1. Fix bug foodChoiceMap MQTT in webOwner.
    WEB-SA23-0001#3            11/01/2023      Customize    1. Fix bug foodChoiceMap and foodSetTimeMap MQTT in webOwner.
    WEB-SA23-0001#4            13/01/2023      Customize    1. Fix bug foodChoiceMap MQTT of choice and choiceOption in webOwner.
    WEB-SA23-0001#8            23/01/2023      Customize    1. Fix bug change choice group of choice in webOwner.
    WEB-SA23-0011              01/02/2023      Customize    1. Fix bug shop status in webOwner.
    WEB-SA23-0026              29/03/2023      Customize    1. Fix bug auto sync product deliverect on webOwner.
    WEB-SA23-0026#1            15/05/2023      Customize    1. Fix bug auto sync product deliverect when log out and close browser on webOwner.
    WEB-SA23-0038              13/06/2023      Customize    1. Fix bug UI shop name overlap navbar toggler on webOwner.
    WEB-SA23-0041              27/07/2023      Customize    1. New feature member discount on webDining, webOwner.
    WEB-SA23-0045              23/08/2023      Customize    1. Add setting discount time on webOwner, webDining, webOnTable.
    WEB-SA23-0048              11/09/2023      Customize    1. Add setting Otter on webOwner, webSupport.
    WEB-SA24-0012              22/04/2024      Customize    1. New requriement - Add setting promotion "Day Of Week" on webOwner, webDining, webOnTable.
                                                            2. Fix bug promotion shippping type and maximum uses on webOwner, webDining, webOnTable.
                                                            3. Fix bug clear discount code when don't use on webDining.
    WEB-SA24-0016              05/06/2024      Customize    1. New requirement - Add pay at store only and notification for Smile On Table on webOwner, webSupport, webOnTable.
    WEB-SA24-0030              04/11/2024      Customize    1. Fix bug product dropdown selection in My Setting tab on webOwner.
*/

$(document).ready(function () {
    //Knockout
    function viewModel(pModelGlobalConfig, pModelTimeZone) {
        var self = this;
        //Model
        self.showLoading = ko.observable(false);
        self.showLogin = ko.observable(true);
        self.showMobile = ko.observable(false);
        self.showMenu = ko.observable(false);
        self.showLiveOrder = ko.observable(false);
        self.showMenuSetUp = ko.observable(false);
        self.showConfigSetUp = ko.observable(false);
        self.showMySetting = ko.observable(false);
        self.showTemplate = ko.observable(false);
        self.showReport = ko.observable(false);
        self.showBalance = ko.observable(false);
        self.showStatement = ko.observable(false);
        //Added by SMILEDINING-SA19-0011
        self.showGiftCard = ko.observable(false);
        self.showGiftCardView = ko.observable(false);
        //End Added by SMILEDINING-SA19-0011
        //Added by SMILEDINING-SA21-0063
        self.showMarketing = ko.observable(false);
        self.showDeliveryBilling = ko.observable(false);    //Added and End by SMILEDINING-SA22-0013
        self.marketing = new MarketingViewModel();
        //End Added by SMILEDINING-SA21-0063
        //Added by SMILEDINING-SA18-0030
        self.disableButtonCloseModal = ko.observable(false);
        self.disablePointer = ko.observable('pointer');
        //End Added by SMILEDINING-SA18-0030
        self.tabSyncProduct = ko.observable(false); //Added and End by SMILEDINING-SA21-0014
        self.autoSyncProduct = ko.observable(false); //Added and End by SMILEDINING-SA21-0014#1
        self.isUpdateThirdParty = ko.observable(false); //Added and End by WEB-SA23-0026#1
        //Added by WEB-SA22-0066
        self.mqttServer = ko.observable('');
        self.mqttUser = ko.observable('');
        self.mqttPsw = ko.observable('');
        self.mqttClientId = ko.observable('');
        self.isKiosk = ko.observable(false); //Added and End by WEB-SA23-0001
        //End Added by WEB-SA22-0066
        //self.currentDatetime = ko.observable();
        //self.currentDay = ko.observable();        
        self.customer = new CustomerViewModel();
        self.allRestaurant = new AllRestaurantViewModel();
        self.globalConfig = new GlobalConfigViewModel(pModelGlobalConfig, pModelTimeZone);
        self.allMapZone = new AllMapViewModel();
        self.allSetTime = new AllTimeViewModel();
        //self.allSetting = new AllSettingViewModel(); //Modified and End by SmileDining-SA19-0008
        self.allSetting = new AllSettingViewModel(pModelGlobalConfig); //Added and End by SmileDining-SA19-0008
        self.allTemplate = new AllTemplateViewModel();
        self.giftCard = new GiftCardViewModel(pModelGlobalConfig); //Added and End by SMILEDINING-SA19-0011
        self.event = new Event();
        self.menu = new MenuSetupViewModel();
        self.liveOrder = new LiveOrderViewModel();
        self.configSetUp = new ConfigSetUpViewModel();
        self.contextPath = ko.observable();
        self.report = new ReportViewModel();
        self.balance = new BalanceViewModel();
        self.statement = new StatementViewModel();
        self.deliveryBilling = new DeliveryBillingViewModel();  //Added and End by SMILEDINING-SA22-0013
        //View
        self.mobile = new Mobile();
    };

    //var varAuthenticated = $('#divVarAuthenticated').val(); //Modified and End by WEB-SA22-0064
    var varShowResetPasswordForm = convertStrToBool($('#divVarShowResetPasswordForm').val());
    var serverMaintenance = $('#divErrorServerMaintenance').data('request-url');

    var modelAllRestaurant = null;
    var modelSetting = null;
 
    //if (!isEmpty(varAuthenticated)) { //Modified and End by WEB-SA22-0064
    //Added by WEB-SA22-0064
    var checkAuthentication = JSON.parse(getObjFormAjax(cJsonCheckAuthentication));
    if (checkAuthentication) {
    //End Added by WEB-SA22-0064
        var customerProfile = null;
        var customerAddress = null;
        //var modelGlobalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, ""))      //Modified and End by SMILEDINING-SA20-0006
        var modelGlobalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileDining)) //Added and End by SMILEDINING-SA20-0006
        var modelTimeZone = JSON.parse(getObjFormAjax(cJsonGetAllTimeZone, ""));
        vmViewIndex = new viewModel(modelGlobalConfig, modelTimeZone
                                );
        vmViewIndex.showLogin(false);
        vmViewIndex.showMenu(true);
        //Modified by SMILEDINING-SA20-0006
        ////Added by SMILEDINING-SA19-0021
        //var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, ""));
        //DataGlobalConfigViewModel(globalConfig);
        //setShopStatus();
        //setPositionShopStatus()
        ////End Added by SMILEDINING-SA19-0021
        //End Modified by SMILEDINING-SA20-0006
        //Added by SMILEDINING-SA20-0006
        DataSettingViewModel(modelGlobalConfig);
        //if (vmViewIndex.allSetting.isMultiProduct() == true) {
        //    var globalConfigContactless = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileContactless));
        //    vmViewIndex.globalConfig.shopOpenContactless(shopStatus(filterGlobalConfig(globalConfigContactless, gcShopStatus)));
        //}
        //if (vmViewIndex.allSetting.isSmileDining() == true || vmViewIndex.allSetting.isMultiProduct() == true) {
        //    DataGlobalConfigViewModel(modelGlobalConfig);
        //    setShopStatus();
        //}
        //if (vmViewIndex.allSetting.isSmileDining() == false || vmViewIndex.allSetting.isMultiProduct() == true) {
        //    var globalConfigContactless = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileContactless));
        //    var smileContactless = ko.observableArray([
        //                {
        //                    globalConfigKey: 'smileContactless',
        //                    globalConfigValue: true,
        //                    globalConfigDesc: null
        //                }]);
        //    globalConfigContactless.push(smileContactless()[0]);
        //    DataGlobalConfigViewModel(globalConfigContactless);
        //    setShopStatusContactless();
        //}

        var globalConfigContactless = null;
        if (vmViewIndex.allSetting.isSmileDining() == false || vmViewIndex.allSetting.isMultiProduct() == true) {
            globalConfigContactless = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileContactless));
        }
        if (vmViewIndex.allSetting.isMultiProduct() == true) {
            //SmileDining
            DataGlobalConfigViewModel(modelGlobalConfig);
            setShopStatus();
            //Contactless
            vmViewIndex.globalConfig.shopOpenContactless(shopStatus(filterGlobalConfig(globalConfigContactless, gcShopStatus)));
            var smileContactless = ko.observableArray([
                        {
                            globalConfigKey: 'smileContactless',
                            globalConfigValue: true,
                            globalConfigDesc: null
                        }]);
            globalConfigContactless.push(smileContactless()[0]);
            DataGlobalConfigViewModel(globalConfigContactless);
            setShopStatusContactless();
        } else {
            if (vmViewIndex.allSetting.isSmileDining() == true) {
                DataGlobalConfigViewModel(modelGlobalConfig);
                setShopStatus();
            } else {
                var smileContactless = ko.observableArray([
                            {
                                globalConfigKey: 'smileContactless',
                                globalConfigValue: true,
                                globalConfigDesc: null
                            }]);
                globalConfigContactless.push(smileContactless()[0]);
                DataGlobalConfigViewModel(globalConfigContactless);
                setShopStatusContactless();
            }
        }

        setPositionShopStatus()
        //End Added By SMILEDINING-SA20-0006
        connectMqtt(); //Added and End by WEB-SA22-0066
        setSideBar(); //Added and End by WEB-SA22-0064#1
        showAllMenu();  //Added and End by SMILEDINING-SA19-0011
    } else {
        vmViewIndex = new viewModel(modelGlobalConfig, modelTimeZone);
        //Added by SMILEDINING-SA20-0006
        if (vmViewIndex.allSetting.isMultiProduct() == true) {
            vmViewIndex.globalConfig.shopOpenContactless(shopStatus(filterGlobalConfig(globalConfigContactless, gcShopStatus)));
        }
        //End Added by SMILEDINING-SA20-0006
    }

    ko.applyBindings(vmViewIndex, document.getElementById('koMenuView'));

    Sammy(function () {
        this.get('#:view', function (context) {
            setActiveLink(context.path);
            setDefaultMenu();
            alertOnChangeSideBar(context.path);
        });
    }).run('');

    //Submit Form
    $(document).on('submit', 'form', function (e) {
        if (!checkInternetConnection()) {
            var objAlert = new ObjAlert(formId, cError_Fail_NoInternet, false);
            objAlert.getAlert();
            return false;
        };

        var form = $(this);
        var formId = form.attr('id');
        var parent = $(this).parent();
        var objValidate = new ObjValidateForm(formId, parent);
        //var status = $(document.activeElement).val();     //Modified and End by SMILEDINING-SA19-0001

        //Added by SMILEDINING-SA19-0001
        var status = '';
        if (isSafari()) {
            var linkToFood = $(e.target).find('button[value=Link]');
            //if (linkToFood.length > 0) { //Modified and End by WEB-SA22-0061
            if (linkToFood.length > 0 && vmViewIndex.configSetUp.choice.isClickLinkToFood()) { //Added and End by WEB-SA22-0061
                status = 'Link';
            } else {
                var targetButton = $(e.target).find('button[type=submit]');
                ko.utils.arrayForEach(targetButton, function (item) {
                    //if ($(item).is(":visible") == true && (item.value == statusAdd || item.value == statusUpdate || item.value == statusLink)) { //Modified and End by WEB-SA22-0061
                    if ($(item).is(":visible") == true && (item.value == statusAdd || item.value == statusUpdate || (item.value == statusLink && vmViewIndex.configSetUp.choice.isClickLinkToFood()))) { //Added and End by WEB-SA22-0061
                        status = item.value;
                    }
                });
            }
        }
        else {
            status = $(document.activeElement).val();
        }
        //End Added by SMILEDINING-SA19-0001
        vmViewIndex.configSetUp.choice.isClickLinkToFood(false); //Added and End by WEB-SA22-0061
        //Added by SMILEDINING-SA18-0030
        vmViewIndex.disableButtonCloseModal(true);
        vmViewIndex.disablePointer('default');
        //End Added by SMILEDINING-SA18-0030
        objValidate.verifyData();
        //if (objValidate.error.length > 10) { //Modified and End by SMILEDINING-SA18-0038
        if (objValidate.error.length > 0) { //Added and End by SMILEDINING-SA18-0038
            if (objValidate.showAlert) {
                var messageError = convertArrToString(objValidate.error);
                swal(cSwal_Alert_Error, replaceNewLineToBr(messageError), cSwal_Icon_Error);
            }
            //Added By SMILEDINING-SA19-0008
            vmViewIndex.disableButtonCloseModal(false);
            vmViewIndex.disablePointer('pointer');
            //End Added By SMILEDINING-SA19-0008
            return false;
        } else {

            addSpinButton(formId);
            var serializedForm = $(this).serialize();
            var formPassImage = false;
            //if (formId == cfrmUploadImageSetting || formId == cfrmUploadImageTemplate || formId == cfrmChangeImage || formId == cfrmFoodSetup)  //pass file don't processData ajax  //Modified and End by SMILEDINING-SA18-0026
            //if (formId == cfrmUploadImageSetting || formId == cfrmUploadImageTemplate || formId == cfrmChangeImage || formId == cfrmFoodSetup || formId == cfrmLinkToFood)  //pass file don't processData ajax //Added and End by SMILEDINING-SA18-0026   SMILEDINING-SA19-0004
            //if (formId == cfrmUploadImageSetting || formId == cfrmUploadImageTemplate || formId == cfrmChangeImage || formId == cfrmFoodSetup || formId == cfrmLinkToFood || formId == cfrmUploadAnnounceImage) // Added and End By SMILEDINING-SA19-0004 //Modified and End by SMILEDINING-SA20-0006
            //if (formId == cfrmUploadImageSetting || formId == cfrmUploadImageTemplate || formId == cfrmChangeImage || formId == cfrmFoodSetup || formId == cfrmLinkToFood || formId == cfrmUploadAnnounceImage || formId == cfrmDeleteImageLogo || formId == cfrmDeleteAnnounceImage) // Added and End By SMILEDINING-SA20-0006   //Modified and End by SMILEDINING-SA20-0028
            //Modified by SMILEDINING-SA20-0048
            //if (formId == cfrmUploadImageSetting
            // || formId == cfrmUploadImageTemplate
            // || formId == cfrmChangeImage
            // || formId == cfrmFoodSetup
            // || formId == cfrmLinkToFood
            // || formId == cfrmUploadAnnounceImage
            // || formId == cfrmDeleteImageLogo
            // || formId == cfrmDeleteAnnounceImage
            ////Added by SMILEDINING-SA20-0028
            // || formId == cfrmUploadAnnounceCustomImage
            // || formId == cfrmDeleteAnnounceCustomImage
            ////End Added by SMILEDINING-SA20-0028
            //)
            //End Modified by SMILEDINING-SA20-0048
            //Added by SMILEDINING-SA20-0048
            if (formId == cfrmUploadImageSetting
                || formId == cfrmUploadImageTemplate
                || formId == cfrmChangeImage
                || formId == cfrmFoodSetup
                || formId == cfrmLinkToFood
                || formId == cfrmUploadAnnounceImage
                || formId == cfrmDeleteImageLogo
                || formId == cfrmDeleteAnnounceImage
                || formId == cfrmUploadAnnounceCustomImage
                || formId == cfrmDeleteAnnounceCustomImage
                || formId == cfrmUploadDisCountOneTimeUse
                || formId == cfrmFoodThirdPartySetup    //Added and End by SMILEDINING-SA21-0018#2
                || formId == cfrmIconSetup  //Added and End by SMILEDINING-SA21-0021
                || formId == cfrmFoodImageSetup //Added and End by SMILEDINING-SA21-0028
                //|| formId == cfrmUploadImageBackgroundSetting //Added and End by SMILEDINING-SA21-0035 //Modified and End by SMILEDINING-SA21-0035#11
                || formId == cfrmDeleteImageBackground //Added and End by SMILEDINING-SA21-0035
                || formId == cfrmLogOff //Added and End by WEB-SA23-0026#1
                )
            //End Added by SMILEDINING-SA20-0048
            {
                formPassImage = true;
                var serializedForm = new FormData();
                switch (formId) {
                    case cfrmUploadImageSetting:
                        serializedForm.append("uploadImageLogo", jQuery("#uploadImageLogo").get(0).files[0]);
                        //Added by SMILEDINING-SA20-0006
                        var data = vmViewIndex.allSetting;
                        serializedForm.append("isSmileDining", data.isSmileDining());
                        serializedForm.append("isMultiProduct", data.isMultiProduct());
                        //End Added by SMILEDINING-SA20-0006
                        break
                    case cfrmUploadImageTemplate:
                        serializedForm.append("uploadImage", jQuery("#uploadImage").get(0).files[0]);
                        break;
                    case cfrmChangeImage:
                        return false;
                        //Added by SMILEDINING-SA18-0026
                    case cfrmLinkToFood:
                        vmViewIndex.showLoading(true); //Added and End by SMILEDINING-SA18-0033
                        getDataTreeListLinkToFood();
                        data = vmViewIndex.configSetUp.linkToFood;
                        serializedForm.append("ChoiceId", data.choiceId());
                        serializedForm.append("ChoiceOptionId", data.choiceOptionId());
                        serializedForm.append("SelectedLinkToFood", data.selectedLinkToFood());
                        break;
                        //End Added by SMILEDINING-SA18-0026
                    case cfrmFoodSetup:
                        var data = vmViewIndex.menu.dataSetupFoodModal;
                        if (typeof data.tempId() === 'string') {
                            //serializedForm.append("uploader", jQuery("#uploaderEdit" + data.tempId()).get(0).files[0]); //Modified and End by SMILEDINING-SA21-0059
                            serializedForm.append("tempId", data.tempId()); //Added and End by SMILEDINING-SA21-0059
                        } else {
                            serializedForm.append("uploader", data.tempId());
                        }
                        serializedForm.append("foodId", data.foodId());
                        serializedForm.append("foodName", data.foodName());
                        serializedForm.append("foodNameAlt", data.foodNameAlt()); //Added and End by SMILEDINING-SA18-0012
                        serializedForm.append("foodPrice", data.foodPrice());
                        serializedForm.append("foodDesc", data.foodDesc());
                        serializedForm.append("active", data.active());
                        serializedForm.append("foodSetId", data.foodSetId());
                        serializedForm.append("foodCatId", data.foodCatId());
                        serializedForm.append("revenueClassId", data.revenueClassId());
                        serializedForm.append("taxRateId", data.taxRateId());
                        serializedForm.append("image", data.image());
                        serializedForm.append("allChoiceOptions", data.dataOptionFood());
                        serializedForm.append("qtyLimit", data.qtyLimit());     //Adde and End by SMILEDINING-SA20-0003
                        //Added By SMILEDINING-SA19-0004
                        //Added by SMILEDINING-SA20-0006
                        serializedForm.append("arrProduct", data.arrProduct());
                        serializedForm.append("productId", data.productId());
                        //End Added by SMILEDINING-SA20-0006
                        serializedForm.append("isOutStock", data.isOutStock()); //Added and End by SMILEDINING-SA20-0010
                        //Added by SMILEDINING-SA20-0016
                        serializedForm.append("isFree", data.isFree());
                        serializedForm.append("isShow", data.isShow());
                        //End Added by SMILEDINING-SA20-0016
                        serializedForm.append("productTagMap", data.productTagSelect()); //Added and End by SMILEDINING-SA21-0014
                        serializedForm.append("thirdPartyIntegrationsProviderId", data.thirdPartyIntegrationsProviderId()); //Added and End by WEB-SA23-0048
                        //Added by SMILEDINING-SA21-0021
                        var dataSortable = null;
                        if (data.listIconForDrag().length != 0) {   //Added and End by SMILEDINING-SA21-0021#3
                            data.listIconForDrag().load().done(function (item) {
                                dataItems = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(item), ['sorting'], ['asc']))();
                            });
                            serializedForm.append("icon", ko.toJSON(dataItems));
                        }   //Added and End by SMILEDINING-SA21-0021#3 
                        break;  //Added and End by SMILEDINING-SA21-0021#3
                        //End Added by SMILEDINING-SA21-0021
                    //Added by SMILEDINING-SA21-0028
                    case cfrmFoodImageSetup:
                        var data = vmViewIndex.menu.dataSetupFoodModal;
                        if (typeof data.tempIdDesktopMenu() === 'string') {
                            serializedForm.append("uploaderDesktopMenu", jQuery("#uploaderEdit" + data.tempIdDesktopMenu()).get(0).files[0]);
                        } else {
                            serializedForm.append("uploaderDesktopMenu", data.tempIdDesktopMenu());
                        }

                        if (typeof data.tempIdDesktopFood() === 'string') {
                            serializedForm.append("uploaderDesktopFood", jQuery("#uploaderEdit" + data.tempIdDesktopFood()).get(0).files[0]);
                        } else {
                            serializedForm.append("uploaderDesktopFood", data.tempIdDesktopFood());
                        }

                        if (typeof data.tempIdMobileMenu() === 'string') {
                            serializedForm.append("uploaderMobileMenu", jQuery("#uploaderEdit" + data.tempIdMobileMenu()).get(0).files[0]);
                        } else {
                            serializedForm.append("uploaderMobileMenu", data.tempIdMobileMenu());
                        }

                        if (typeof data.tempIdMobileFood() === 'string') {
                            serializedForm.append("uploaderMobileFood", jQuery("#uploaderEdit" + data.tempIdMobileFood()).get(0).files[0]);
                        } else {
                            serializedForm.append("uploaderMobileFood", data.tempIdMobileFood());
                        }
                        serializedForm.append("foodId", data.foodId());
                        //serializedForm.append("image", data.image());   //Modified and End by SMILEDINING-SA21-0028#3
                        //Added by SMILEDINING-SA21-0028#3
                        //var dataImgae = data.imageDesktopMenu() == '' || data.imageDesktopFood() == '' || data.imageMobileMenu() == '' || data.imageMobileFood() == '' ? '' : data.image(); //Modified and End by SMILEDINING-SA21-0028#5
                        var dataImgae = data.tempIdDesktopMenu() == '' || data.tempIdDesktopFood() == '' || data.tempIdMobileMenu() == '' || data.tempIdMobileFood() == '' ? '' : data.image(); //Added and End by SMILEDINING-SA21-0028#5
                        serializedForm.append("image", dataImgae);
                        //End Added by SMILEDINING-SA21-0028#3
                        break;
                        //End Added by SMILEDINING-SA21-0028
                    case cfrmUploadAnnounceImage:
                        serializedForm.append("uploadAnnounceImage", jQuery("#uploadAnnounceImage").get(0).files[0]);
                        //Added by SMILEDINING-SA20-0006
                        var data = vmViewIndex.allSetting;
                        serializedForm.append("isSmileDining", data.isSmileDining());
                        //End Added by SMILEDINING-SA20-0006
                        break;
                        //End Added By SMILEDINING-SA19-0004
                        //Added by SMILEDINING-SA20-0006
                    //Added by SMILEDINING-SA20-0028
                    case cfrmUploadAnnounceCustomImage:
                        serializedForm.append("uploadAnnounceCustomImage", jQuery("#uploadAnnounceCustomImage").get(0).files[0]);
                        var data = vmViewIndex.allSetting;
                        serializedForm.append("isSmileDining", data.isSmileDining());
                        break;
                    case cfrmDeleteAnnounceCustomImage:
                        var data = vmViewIndex.allSetting;
                        serializedForm.append("isSmileDining", data.isSmileDining());
                        break;
                    //End Added by SMILEDINING-SA20-0028
                    case cfrmDeleteImageLogo:
                        var data = vmViewIndex.allSetting;
                        serializedForm.append("isSmileDining", data.isSmileDining());
                        serializedForm.append("isMultiProduct", data.isMultiProduct());
                        break;
                    case cfrmDeleteAnnounceImage:
                        var data = vmViewIndex.allSetting;
                        serializedForm.append("isSmileDining", data.isSmileDining());
                        break;
                    //End Added by SMILEDINING-SA20-0006
                    //Added by SMILEDINING-SA20-0048
                    case cfrmUploadDisCountOneTimeUse:
                        serializedForm.append("uploadDiscountFile", jQuery("#uploadDiscountFile").get(0).files[0]);
                        var data = vmViewIndex.allSetting;
                        serializedForm.append("isSmileDining", data.isSmileDining());
                        break
                        //End Added by SMILEDINING-SA20-0048
                    //Added by SMILEDINING-SA21-0018#2
                    case cfrmFoodThirdPartySetup:
                        var index = $('#modalSetupFoodThirdParty .select-group')[0].attributes.id.value.split('_')[1];
                        replaceDataFoodInArray(index);
                        //Added by SMILEDINING-SA21-0018#3
                        var tempId = ko.utils.arrayFilter(vmViewIndex.menu.foodInThirdPartyGroup(), function (item) {
                            return typeof item.tempId() !== 'string';
                        });
                        if (tempId.length > 0) {
                            serializedForm.append('uploader', _.first(tempId).tempId());
                            ko.utils.arrayForEach(vmViewIndex.menu.foodInThirdPartyGroup(), function (item) {
                                if (typeof item.tempId() !== 'string') {
                                    item.tempId('');
                                }
                            });
                        }
                        //End Added by SMILEDINING-SA21-0018#3
                        vmViewIndex.menu.listThirdPartyGroups(ko.toJSON(vmViewIndex.menu.thirdPartyGroups()));
                        vmViewIndex.menu.listFoodInThirdPartyGroup(ko.toJSON(vmViewIndex.menu.foodInThirdPartyGroup()));

                        var data = vmViewIndex.menu;
                        serializedForm.append("FoodId", data.baseFoodThirdParty());
                        serializedForm.append("GroupThirdParty", data.listThirdPartyGroups());
                        serializedForm.append("FoodThirdParty", data.listFoodInThirdPartyGroup());
                        break;
                        //End Added by SMILEDINING-SA21-0018#2
                        //Added by SMILEDINING-SA21-0021
                    case cfrmIconSetup:

                        var data = vmViewIndex.configSetUp.iconSetup.dataSetUpModal;
                        if (typeof jQuery("#iconUploaderEdit").get(0) != 'undefined') {
                            serializedForm.append("uploaderIconImage", jQuery("#iconUploaderEdit").get(0).files[0]);
                        } else {
                            serializedForm.append("uploaderIconImage", data.iconImage());
                        }

                        serializedForm.append("iconId", data.iconId());
                        serializedForm.append("iconName", data.iconName());
                        serializedForm.append("iconImage", data.iconImage());
                        serializedForm.append("hexColor", data.hexColor());
                        serializedForm.append("isFocus", data.isFocus());
                        serializedForm.append("isShowText", data.isShowText());
                        serializedForm.append("active", data.active());
                        //End Added by SMILEDINING-SA21-0021
                        //Added by SMILEDINING-SA21-0035 
                        break;
                    //Modified by SMILEDINING-SA21-0035#11
                    //case cfrmUploadImageBackgroundSetting:
                    //    var files = jQuery("#uploadImageBackground").get(0).files;
                    //    for (var i = 0; i < files.length; i++) {
                    //        serializedForm.append("uploadImageBackground", files[i]);
                    //    }                        
                    //    var data = vmViewIndex.allSetting;
                    //    serializedForm.append("isSmileDining", data.isSmileDining());
                    //    break;
                    //End Modified by SMILEDINING-SA21-0035#11
                    case cfrmDeleteImageBackground:
                        var data = vmViewIndex.allSetting;
                        serializedForm.append("isSmileDining", data.isSmileDining());
                        break;
                        //End Added by SMILEDINING-SA21-0035
                    //Added by WEB-SA23-0026#1
                    case cfrmLogOff:
                        if (checkSyncProductAuto()) { 
                            vmViewIndex.showLoading(true);
                            syncProductAuto(false);
                            vmViewIndex.tabSyncProduct(false);
                        }
                        break;
                    //End Added by WEB-SA23-0026#1
                    default:
                        break; //Added and End by SMILEDINING-SA21-0035
                }
            }
            //Modified by SMILEDINING-SA21-0018#2
            ////Added by SMILEDINING-SA21-0018
            //if (formId == cfrmFoodThirdPartySetup) {
            //    var index = $('#modalSetupFoodThirdParty .select-group')[0].attributes.id.value.split('_')[1];
            //    replaceDataFoodInArray(index);
            //    vmViewIndex.menu.listThirdPartyGroups(ko.toJSON(vmViewIndex.menu.thirdPartyGroups()));
            //    vmViewIndex.menu.listFoodInThirdPartyGroup(ko.toJSON(vmViewIndex.menu.foodInThirdPartyGroup()));
            //}
            ////End Added by SMILEDINING-SA21-0048
            //End Modified by SMILEDINING-SA21-0018#2
            //Added by WEB-SA23-0001
            if (!checkMqttConnection(formId, status)) {
                swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
                removeSpinButton(formId);
                vmViewIndex.showLoading(false);
                vmViewIndex.disableButtonCloseModal(false);
                vmViewIndex.disablePointer('pointer');
                vmViewIndex.isKiosk(false);
                return false;
            }
            //End Added by WEB-SA23-0001

            var objUrl = new ObjUrl(formId, status);
            var requestUrl = objUrl.getUrlSubmitForm();
            if (isEmpty(requestUrl)) {
                swal(cSwal_Alert_Error, cError_Dev_Url, cSwal_Icon_Error);
                return false;
            }

            if (formPassImage) {
                var ajaxForm = $.ajax({
                    url: requestUrl,
                    async: ajax_async,
                    cache: ajax_cache,
                    type: ajax_type_post,
                    data: serializedForm,
                    processData: false,
                    contentType: false,
                    timeout: ajax_timeout, // timeout after 60 seconds
                });

            } else {
                var ajaxForm = $.ajax({
                    url: requestUrl,
                    async: ajax_async,
                    cache: ajax_cache,
                    type: ajax_type_post,
                    data: serializedForm,
                    timeout: ajax_timeout, // timeout after 60 seconds
                });
            }

            ajaxForm.done(function (result) {
                //Modified by SMILEDINING-SA20-0003
                //removeSpinButton(formId);
                //vmViewIndex.showLoading(false);
                //End Modified by SMILEDINING-SA20-0003
                if (result.status) {
                    afterSubmitForm(formId, result);
                }
                if (objValidate.showAlert) {
                    if (formId == cfrmLogIn) {
                        if (result.status && result.message.toLowerCase() == "support") {
                            //$('#modalSelectRestaurant').modal({ backdrop: false, keyboard: false }); //Modified and End by SMILEDINING-SA19-0012
                            $('#modalSelectRestaurant').modal('show'); //Added and End by SMILEDINING-SA19-0012
                        } else {
                            if (result.status) {
                                //$("#LiveOrderSideBar").click();   //Modified and End by SMILEDINING-SA19-0011
                                showAllMenu();     //Added and End by SMILEDINING-SA19-0011
                            } else {
                                //Added by WEB-SA22-0064
                                if (result.isAccountAccess) {
                                    swal(cSwal_Alert_InvalidLogIn, result.message, cSwal_Icon_Warning);
                                } else {
                                //End Added by WEB-SA22-0064
                                    var objAlert = new ObjAlert(formId, result.message, result.status);
                                    objAlert.getAlert();
                                } //Added and End by WEB-SA22-0064
                            }
                        }
                    }
                    else if (formId == cfrmChangeRestaurant) {
                        if (result.status) {
                            //$("#LiveOrderSideBar").click();       //Modified and End by SMILEDINING-SA19-0011
                            showAllMenu();     //Added and End by SMILEDINING-SA19-0011
                        } else {
                            //Added by WEB-SA22-0064
                            if (result.isAccountAccess) {
                                swal(cSwal_Alert_InvalidLogIn, result.message, cSwal_Icon_Warning);
                            } else {
                            //End Added by WEB-SA22-0064
                                var objAlert = new ObjAlert(formId, result.message, result.status);
                                objAlert.getAlert();
                            } //Added and End by WEB-SA22-0064
                        }
                    }
                    else if (formId == cfrmSearchReport || formId == cfrmSearchBalance) {
                        if (!result.status) {
                            var objAlert = new ObjAlert(formId, result.message, result.status);
                            objAlert.getAlert();
                        }
                        /* not alert */
                    }
                    else if (formId == cfrmResetPassword) {
                        vmViewIndex.showLoading(false);
                        swal({
                            text: result.message,
                            type: 'success',
                            confirmButtonText: 'OK',
                            preConfirm: function (e) {
                                window.location = "https://webowner.smiledining.com";
                            }
                        });
                    }
                        //Added by SMILEDINING-SA18-0026
                        //else if (formId == cfrmChoiceSetUp) {     //Modified and End by SMILEDINING-SA20-0018
                    else if (formId == cfrmChoiceSetUp || formId == cfrmChoiceModifySetUp) {    //Added and End by SMILEDINING-SA20-0018
                        if (result.message != cMenuLinkToFood) {
                            vmViewIndex.showLoading(false);
                            var objAlert = new ObjAlert(formId, result.message, result.status);
                            objAlert.getAlert();
                            vmViewIndex.configSetUp.disableButtonSubmit(false);      //Added and End by SMILEDINING-SA21-0014#4
                        }
                    }
                        //End Added by SMILEDINING-SA18-0026
                        //Added by SMILEDINING-SA20-0007
                    else if (formId == cfrmSearchStatement) {
                        if (!result.status) {
                            var objAlert = new ObjAlert(formId, result.message, result.status);
                            objAlert.getAlert();
                        }
                    }
                        //End Added by SMILEDINING-SA20-0007
                    else {
                        vmViewIndex.showLoading(false);
                        var objAlert = new ObjAlert(formId, result.message, result.status);
                        objAlert.getAlert();
                        vmViewIndex.allSetting.disableButtonSubmit(false);      //Added and End by SMILEDINING-SA20-0011
                        vmViewIndex.configSetUp.disableButtonSubmit(false);      //Added and End by SMILEDINING-SA21-0014#4
                    }
                }
                //Added by SMILEDINING-SA20-0003
                removeSpinButton(formId);
                vmViewIndex.showLoading(false);
                //End Added by SMILEDINING-SA20-0003
                //Added by SMILEDINING-SA18-0030
                vmViewIndex.disableButtonCloseModal(false);
                vmViewIndex.disablePointer('pointer');
                //End Added by SMILEDINING-SA18-0030
                vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
            });

            ajaxForm.fail(function (result) {
                removeSpinButton(formId);
                vmViewIndex.showLoading(false);
                var objAlert = new ObjAlert(formId, cError_Fail_TimeOut, false);
                objAlert.getAlert();
                //Added by SMILEDINING-SA18-0030
                vmViewIndex.disableButtonCloseModal(false);
                vmViewIndex.disablePointer('pointer');
                //End Added by SMILEDINING-SA18-0030
                vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
            });
        }
        return false;
    });

    //Add Slide Swipe
    $('nav.nav-mobile').slideAndSwipe();

    /*Back to top*/
    $('.backToTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $('.backToTop').addClass('show');
        } else {
            $('.backToTop').removeClass('show');
        }
    });

    setMaskPhone();

    $('.mask-expiry').inputmask({
        mask: '99/9999'
    });

    /*Force Backgroud Color FoodSet*/
    $('.touch-slide').find('radio:eq(0)').prop('checked', true);
    $('.touch-slide').find('label:eq(0)').addClass('theme default-background-color-dark force');

    /*Validation*/
    $('form').bind("invalid-form.validate", onValidationHandler);
    function onValidationHandler(form, validator) {
        if (validator.errorList.length > 0) {
            $(document).find('#' + form.target.id + ' .panel-messsage-error').show();
        }
    };

    //Loading Success
    setTimeout(function () {
        $('body').addClass('loaded');
        $('.viewLoading').removeClass('gb_hidden');
        //Show Reset Modal
        if (varShowResetPasswordForm) {
            $('#modalResetPassword').modal({ backdrop: 'static', keyboard: false });
            $('#modalResetPassword').modal('hide');
            $('#modalResetPassword').modal('show');
        };

        var ie = checkVersionIE();
        if (!isEmpty(ie)) {
            if (ie < 11) {
                $('#browserVerionModel').modal('show');
            }
        }
    }, 1000);

    setUpKeepAlive();      

    function afterSubmitForm(frmName, result) {
        var item;
        var val;
        switch (frmName) {
            case cfrmLogIn:
                vmViewIndex.mobile.logInSuccessed(true);
                ko.mapping.fromJSON(result.objAllTimeZone, {}, vmViewIndex.globalConfig.allTimeZone);

                //Check Role
                if (result.objAllRestaurant) { //Support           
                    //dropdown
                    ko.mapping.fromJSON(result.objAllRestaurant, {}, vmViewIndex.allRestaurant.data);

                    var model = vmViewIndex.allRestaurant;
                    model.selectBoxDomainId(model.data()[0].domainId());
                    model.selectBoxAllRestaurant({
                        dataSource: new DevExpress.data.ArrayStore({
                            data: model.data(),
                            key: 'domainId'
                        }),

                        displayExpr: 'domainName',
                        valueExpr: 'domainId',
                        value: model.selectBoxDomainId(),
                        searchEnabled: true,
                        showPopupTitle: false,  //forDxLookup
                        placeholder: "Select Restaurant",
                        onValueChanged: function (v) {
                            var filterData = ko.utils.arrayFilter(model.data(), function (item) {
                                return item.domainId() == v.value;
                            });
                            var data = _.first(filterData);
                            model.selectBoxDomainId(data.domainId());
                            model.selectBoxAllRestaurant().value = v.value;
                        }
                    });

                }
                else //owner
                {
                    //GlobalConfig
                    //Modified by SMILEDINING-SA20-0006
                    //var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, ""));
                    //DataGlobalConfigViewModel(globalConfig);
                    //End Modified by SMILEDINING-SA20-0006
                    if (frmName == cfrmLogIn) {
                        vmViewIndex.showLogin(false);
                    }
                    vmViewIndex.showMenu(true);
                    vmViewIndex.showLiveOrder(true);
                    //Added by SMILEDINING-SA19-0011
                    //setSmileDining(result.showSmileDining);   //Modified and End by SMILEDINING-SA20-0006
                    //Added by SMILEDINING-SA20-0006
                    if (result.showSmileDining == false && result.showSmileContactlessDining == true) {
                        setSmileContactlessDining(result.showSmileContactlessDining);
                    }
                    else {
                        setSmileDining(result.showSmileDining);
                    }

                    var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileDining));
                    DataSettingViewModel(globalConfig);
                    if (vmViewIndex.allSetting.isSmileDining() == true || vmViewIndex.allSetting.isMultiProduct() == true) {
                        DataGlobalConfigViewModel(globalConfig);
                        setShopStatus();
                    }
                    if (vmViewIndex.allSetting.isSmileDining() == false || vmViewIndex.allSetting.isMultiProduct() == true) {
                        var globalConfigContactless = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileContactless));
                        var smileContactless = ko.observableArray([
                            {
                                globalConfigKey: 'smileContactless',
                                globalConfigValue: true,
                                globalConfigDesc: null
                            }]);
                        globalConfigContactless.push(smileContactless()[0]);
                        DataGlobalConfigViewModel(globalConfigContactless);
                        setShopStatusContactless();
                    }

                    //End Added by SMILEDINING-SA20-0006
                    setEgiftCard(result.showEgiftCard);
                    //Added by WEB-SA22-0064
                    if (!result.showSmileDining && !result.showSmileContactlessDining && result.showSmileThirdPartyIntegrations)
                        setSmileThirdPartyIntegrations(result.showSmileThirdPartyIntegrations);
                    //End Added by WEB-SA22-0064
                    setDeliveryBilling(result.showDeliveryBilling);    //Added and End by SMILEDINING-SA22-0013
                    //End Added by SMILEDINING-SA19-0011
                    //Added by SMILEDINING-SA19-0021
                    //setShopStatus();      //Modified and End by SMILEDINING-SA20-0006
                    setPositionShopStatus();
                    //End Added by SMILEDINING-SA19-0021
                    connectMqtt(); //Added and End by WEB-SA22-0066
                }

                break;
            case cfrmChangeRestaurant:  //Support                     
                //GlobalConfig
                //Modified by SMILEDINING-SA20-0006
                //var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, ""));
                //DataGlobalConfigViewModel(globalConfig);
                //End Modified by SMILEDINING-SA20-0006
                //Added by SMILEDINING-SA20-0006
                var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileDining));
                DataSettingViewModel(globalConfig);
                if (vmViewIndex.allSetting.isSmileDining() == true || vmViewIndex.allSetting.isMultiProduct() == true) {
                    DataGlobalConfigViewModel(globalConfig);
                    setShopStatus();
                }
                if (vmViewIndex.allSetting.isSmileDining() == false || vmViewIndex.allSetting.isMultiProduct() == true) {
                    var globalConfigContactless = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileContactless));
                    var smileContactless = ko.observableArray([
                        {
                            globalConfigKey: 'smileContactless',
                            globalConfigValue: true,
                            globalConfigDesc: null
                        }]);
                    globalConfigContactless.push(smileContactless()[0]);
                    DataGlobalConfigViewModel(globalConfigContactless);
                    setShopStatusContactless();

                }
                //End Added by SMILEDINING-SA20-0006
                if (frmName == cfrmChangeRestaurant) {
                    $('#modalSelectRestaurant').modal('hide');
                    vmViewIndex.showLogin(false);
                }
                vmViewIndex.showMenu(true);
                vmViewIndex.showLiveOrder(true);
                //checkSizeShopNameWidth(0, 0, 0, true); //Added and End by SMILEDINING-SA18-0039   //Modified and End by SMILEDINING-SA19-0011
                //Added by SMILEDINING-SA19-0011
                //setSmileDining(result.showSmileDining);       //Modified and End by SMILEDINING-SA20-0006
                //Added by SMILEDINING-SA20-0006
                if (result.showSmileDining == false && result.showSmileContactlessDining == true) {
                    setSmileContactlessDining(result.showSmileContactlessDining);
                }
                else {
                    setSmileDining(result.showSmileDining);
                }
                //End Added by SMILEDINING-SA20-0006
                setEgiftCard(result.showEgiftCard);
                //Added by WEB-SA22-0064
                if (!result.showSmileDining && !result.showSmileContactlessDining && result.showSmileThirdPartyIntegrations)
                    setSmileThirdPartyIntegrations(result.showSmileThirdPartyIntegrations);
                //End Added by WEB-SA22-0064
                setDeliveryBilling(result.showDeliveryBilling);    //Added and End by SMILEDINING-SA22-0013
                //End Added by SMILEDINING-SA19-0011
                //Added by SMILEDINING-SA19-0021
                //setShopStatus();          //Modified and End by SMILEDINING-SA20-0006
                setPositionShopStatus();
                //End Added by SMILEDINING-SA19-0021
                connectMqtt(); //Added and End by WEB-SA22-0066
                break;
            case cfrmUpdateMapZone:
                break;
            case cfrmUpdateMapZoneMile:
                //Added by SMILEDINING-SA20-0043#2
                item = JSON.parse(result.obj);
                setUpdateMapZoneMile(item);
                //End Added by SMILEDINING-SA20-0043#2
                vmViewIndex.allMapZone.listMapZoneMile();
                break;
            case cfrmUpdateSetTimeMenu:
                //var data = JSON.parse(getObjFormAjax(cJsonGetAllTime, "")); //tabTime     //Modified and End by SMILEDINING-SA20-0006

                var data = vmViewIndex.allSetting.isSmileDining() ? JSON.parse(getObjFormAjax(cJsonGetAllTime, products.cSmileDining)) : JSON.parse(getObjFormAjax(cJsonGetAllTime, products.cSmileContactless)); //Added and End by  SMILEDINING-SA20-0006

                switch (result.obj.toLowerCase()) {
                    case "timemenu":
                        ko.mapping.fromJS(data.listTimeMenu, {}, vmViewIndex.allSetTime.dataListTimeMenu);
                        DataTimeMenu(vmViewIndex.allSetTime.dataListTimeMenu());
                        hiddenShowTimeMenuEdit();
                        //Added by WEB-SA23-0001
                        var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                        if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) {
                            sendMqtt(itemKiosk, getTopicMqtt('stTimeMenu'));
                        }
                        //End Added by WEB-SA23-0001
                        break;
                    case "timepickup":
                        ko.mapping.fromJS(data.listTimePickUp, {}, vmViewIndex.allSetTime.dataListTimePickUp);
                        DataTimeMenu(vmViewIndex.allSetTime.dataListTimePickUp());
                        hiddenShowTimeMenuEdit();
                        break;
                    case "timedelivery":
                        ko.mapping.fromJS(data.listTimeDelivery, {}, vmViewIndex.allSetTime.dataListTimeDelivery);
                        DataTimeMenu(vmViewIndex.allSetTime.dataListTimeDelivery());
                        hiddenShowTimeMenuEdit();
                        break;
                    case "foodsettimemap":
                        ko.mapping.fromJS(data.listFoodSetTimeMap, {}, vmViewIndex.allSetTime.dataListFoodSetTimeMap);
                        DataTimeMenu(vmViewIndex.allSetTime.dataListFoodSetTimeMap());
                        //Add by SMILEDINING-SA18-0024
                        vmViewIndex.allSetTime.selectFoodSet({
                            value: _.first(vmViewIndex.allSetTime.foodsetidkey())
                        });
                        //End Add by SMILEDINING-SA18-0024
                        hiddenShowTimeMenuEdit();
                        //Added by WEB-SA23-0001
                        var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                        if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) {
                            sendMqtt(itemKiosk, getTopicMqtt('stFoodSetTimeMap'));
                        }
                        //End Added by WEB-SA23-0001
                        break;
                }
                //$('#modalEditTimeMenu').modal('hide');
                break;
            case cfrmUploadImageSetting:
                //Added by SMILEDINING-SA19-0004
                vmViewIndex.globalConfig.shopLogo(result.filename);
                vmViewIndex.globalConfig.delShopLogo(true);
                //End Added by SMILEDINING-SA19-0004
                break;
                //Added by SMILEDINING-SA21-0035 
            //Modified by SMILEDINING-SA21-0035#11
            //case cfrmUploadImageBackgroundSetting:
            //    vmViewIndex.globalConfig.shopBackground(result.filename);
            //    vmViewIndex.globalConfig.delShopBackground(true);
            //    break;
            //End Modified by SMILEDINING-SA21-0035#11
            case cfrmDeleteImageBackground:
                vmViewIndex.globalConfig.shopBackground("");
                vmViewIndex.globalConfig.delShopBackground(false);
                break;
                //End Added by SMILEDINING-SA21-0035
            case cfrmUploadImageTemplate:
                var jsonTemplateImage = JSON.parse(result.obj);
                var copyTemplateImage = vmViewIndex.allTemplate.data.templateImage();
                copyTemplateImage.push(new TemplateImage(jsonTemplateImage.templateImageId, jsonTemplateImage.image, vmViewIndex.allTemplate.data.templateImageUrl()));
                vmViewIndex.allTemplate.data.templateImage.valueHasMutated();
                break;
            case cfrmUpdateTemplate:
                DataTemplateViewModel(JSON.parse(result.obj))
                break;
            case cfrmLogOff:
                location.replace(result.url);
                break;
            case cfrmForgotPassword:
                $('#modalForgotPassword').modal('hide');
                break;
            case cfrmResetPassword:
                $('#modalResetPassword').modal('hide');
                break;
                //Modified by SMILEDINING-SA18-0045
                //case cfrmCustomerProfileUpdate:
                //break;
                //End Modified by SMILEDINING-SA18-0045
            case cfrmChangePassword:
                vmViewIndex.changePassword.oldPassword('');
                vmViewIndex.changePassword.newPassword('');
                vmViewIndex.changePassword.confirmPassword('');
                break;
            case cfrmDiscount:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setDiscount(item, val);
                //Added by WEB-SA23-0045
                var itemDiscountTimeMap = !isEmpty(result.objDiscountTimeMap) ? JSON.parse(result.objDiscountTimeMap) : null;
                setDiscountTimeMap(itemDiscountTimeMap, item.discountId);
                //End Added by WEB-SA23-0045
                //Added by WEB-SA22-0066
                //Modified by WEB-SA23-0001
                //if (result.status && !result.isDining) {
                //    var topic = vmViewIndex.globalConfig.shopCode() + cTopicTable + 'stDiscount';
                //    sendMqtt(JSON.parse(result.objKiosk), topic)
                //}
                //End Modified by WEB-SA23-0001
                //End Added by WEB-SA22-0066
                //Added by WEB-SA23-0001
                if (vmViewIndex.isKiosk() && !isEmpty(item)) {
                    //sendMqtt(itemKiosk, getTopicMqtt('stDiscount')); //Modified and End by WEB-SA23-0001#1
                    sendMqtt(item, getTopicMqtt('stDiscount')); //Added and End by WEB-SA23-0001#1
                }
                //End Added by WEB-SA23-0001
                //modalHiddenHasScroll('#modalShowDiscount'); //Added and End by  SMILEDINING-SA20-0006     //Modified and End by SMILEDINING-SA21-0015
                break;
                //Added by SMILEDINING-SA18-0003
            //Added by WEB-SA23-0041
            case cfrmMemberDiscount:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setMemberDiscount(item, val);
                //Added by WEB-SA23-0045
                if (val == statusAdd) {
                    var itemDiscountTimeMap = !isEmpty(result.objDiscountTimeMap) ? JSON.parse(result.objDiscountTimeMap) : null;
                    setDiscountTimeMap(itemDiscountTimeMap, item.discountId);
                }
                //End Added by WEB-SA23-0045
                break;
            //End Added by WEB-SA23-0041
            case cfrmAutoCharge:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setAutoCharge(item, val);
                //Added by WEB-SA23-0001
                //Modified by WEB-SA23-0001#1
                //if (vmViewIndex.isKiosk() && !isEmpty(item)) { 
                //    sendMqtt(item, getTopicMqtt('stAutoCharge'));
                //}
                //End Modified by WEB-SA23-0001#1
                //End Added by WEB-SA23-0001
                //Added by WEB-SA23-0001#1
                var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) { 
                    sendMqtt(itemKiosk, getTopicMqtt('stAutoCharge'));
                }
                //End Added by WEB-SA23-0001#1
                //Added by SMILEDINING-SA18-0036
                //autochargeHasScroll();        //Modified and End by  SMILEDINING-SA20-0006
                //End Added by SMILEDINING-SA18-0036
                //modalHiddenHasScroll('#modalShowAutoCharge'); //Added and End by  SMILEDINING-SA20-0006   //Modified and End by SMILEDINING-SA21-0015
                break;
            //Added by SMILEDINING-SA22-0020
            case cfrmPaymentFee:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setPaymentFee(item, val);
            //End Added by SMILEDINING-SA22-0020
            case cfrmHoliday:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setHoliday(item, val);
                //modalHiddenHasScroll('#modalShowHoliday'); //Added and End by  SMILEDINING-SA20-0006      //Modified and End by SMILEDINING-SA21-0015
                break;
                //End Added by SMILEDINING-SA18-0003
            case cfrmFoodSetSetup:
                if (result.obj != "") {
                    item = JSON.parse(result.obj);
                    val = result.txtValue;
                    //setFoodSet(item, val); //Modified and End by WEB-SA23-0048
                    //Added by WEB-SA23-0048
                    var itemFoodUpdateList = !isEmpty(result.objFoodUpdateList) ? JSON.parse(result.objFoodUpdateList) : null;
                    setFoodSet(item, val, itemFoodUpdateList);
                    //End Added by WEB-SA23-0048
                    //Added by WEB-SA23-0001
                    if (vmViewIndex.isKiosk() && !isEmpty(item)) {
                        var objKiosk = (val == statusAdd) ? item : _.first(item.listFoodSet);
                        sendMqtt(objKiosk, getTopicMqtt('foodSet'));
                        //Added by WEB-SA23-0001#3
                        var itemFoodSetTimeMapKiosk = !isEmpty(result.objFoodSetTimeMapKiosk) ? JSON.parse(result.objFoodSetTimeMapKiosk) : null;
                        if (!isEmpty(itemFoodSetTimeMapKiosk)) {
                            sendMqtt(itemFoodSetTimeMapKiosk, getTopicMqtt('stFoodSetTimeMap'));
                        }
                        //End Added by WEB-SA23-0001#3
                    }
                    //End Added by WEB-SA23-0001
                } else {
                    $('#modalSetupFoodSet').modal('hide');
                    //document.getElementById('chkFoodSetSetUp_IsthirdParty').disabled = false;   //Added and End by SMILEDINING-SA21-0018      //Added and End by SMILEDINING-SA21-0018  //Modified and End by SMILEDINING-SA21-0018#1
                    enableOrDisableCheckBox(cfrmFoodSetUp_ThirdParty, false); //Added and End by SMILEDINING-SA21-0018#1
                }
                break;
            case cfrmFoodCategorySetup:
                if (result.obj != "") {
                    item = JSON.parse(result.obj);
                    if (result.obj2 != undefined && result.obj2 != "") {
                        var item2 = JSON.parse(result.obj2);
                    } else {
                        var item2 = null;
                    }
                    val = result.txtValue;
                    setFoodCategory(item, item2, val);
                    //Added by WEB-SA23-0001
                    if (vmViewIndex.isKiosk() && !isEmpty(item)) { 
                        sendMqtt(item, getTopicMqtt('foodCategory'));
                        var itemFoodKiosk = !isEmpty(result.objFoodKiosk) ? JSON.parse(result.objFoodKiosk) : null;
                        if (!isEmpty(itemFoodKiosk) && itemFoodKiosk.productId.includes(products.cSmileContactless)  && itemFoodKiosk.active) {
                            sendMqtt(itemFoodKiosk, getTopicMqtt('food'));
                        }
                    }
                    //End Added by WEB-SA23-0001
                } else {
                    $('#modalSetupFoodCategory').modal('hide');
                }
                break;
            case cfrmFoodSetup:
                var itemAddFood = JSON.parse(result.obj);
                var itemGroupChoiceOption = JSON.parse(result.jsonGroupChoiceOption);
                var itemAddFoodChoiceMap = JSON.parse(result.jsonFoodChoiceMap);
                var itemFoodIconMap = JSON.parse(result.jsonFoodIconMap);   //Added and End by SMILEDINING-SA21-0021
                val = result.txtValue;
                //setFood(itemAddFood, itemGroupChoiceOption, itemAddFoodChoiceMap, val);   //Modified and End by SMILEDINING-SA21-0021
                setFood(itemAddFood, itemGroupChoiceOption, itemAddFoodChoiceMap, itemFoodIconMap, val);     //Added and End by SMILEDINING-SA21-0021
                //Added by WEB-SA22-0072
                //Modified by WEB-SA23-0001
                //if (result.status && result.isSmileContactless) {
                //    var topic = vmViewIndex.globalConfig.shopCode() + cTopicTable + 'Food'; 
                //    sendMqtt(itemAddFood, topic)
                //}
                //End Modified by WEB-SA23-0001
                //End Added by WEB-SA22-0072
                //Added by WEB-SA23-0001
                var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) {
                    sendMqtt(itemKiosk, getTopicMqtt('food'));
                    //Modified by WEB-SA23-0001#1
                    //if (!isEmpty(itemAddFoodChoiceMap)) {
                    //    sendMqtt(itemAddFoodChoiceMap, getTopicMqtt('foodChoiceMap'));
                    //}
                    //End Modified by WEB-SA23-0001#1
                    //Added by WEB-SA23-0001#1
                    var itemFoodChoiceMapKiosk = !isEmpty(result.objFoodChoiceMapKiosk) ? JSON.parse(result.objFoodChoiceMapKiosk) : null;
                    //Added by WEB-SA23-0001#2
                    var foodIds = [itemKiosk.foodId];
                    sendMqtt(createJsonMqttFoodChoiceMap(itemFoodChoiceMapKiosk, foodIds), getTopicMqtt('foodChoiceMap'));
                    //End Added by WEB-SA23-0001#2
                    //Modified by WEB-SA23-0001#2
                    //if (!isEmpty(itemFoodChoiceMapKiosk)) {
                    //    sendMqtt(itemFoodChoiceMapKiosk, getTopicMqtt('foodChoiceMap'));
                    //}
                    //End Modified by WEB-SA23-0001#2
                    //End Added by WEB-SA23-0001#1
                }
                //End Added by WEB-SA23-0001
                break;
            case cfrmChangeImage:
                var itemAddFood = JSON.parse(result.obj);
                var itemGroupChoiceOption = JSON.parse(result.jsonGroupChoiceOption);
                var itemAddFoodChoiceMap = JSON.parse(result.jsonFoodChoiceMap);
                var itemFoodIconMap = JSON.parse(result.jsonFoodIconMap);   //Added and End by SMILEDINING-SA21-0021
                val = result.txtValue;
                //setFood(itemAddFood, itemGroupChoiceOption, itemAddFoodChoiceMap, val);   //Modified and End by SMILEDINING-SA21-0021
                setFood(itemAddFood, itemGroupChoiceOption, itemAddFoodChoiceMap, itemFoodIconMap, val);     //Added and End by SMILEDINING-SA21-0021
                break;
            //Added by SMILEDINING-SA21-0028
            case cfrmFoodImageSetup:
                var item = JSON.parse(result.obj);
                setFoodCustomImage(item);
                //Added by WEB-SA23-0001
                var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) { 
                    sendMqtt(itemKiosk, getTopicMqtt('food'));
                }
                //End Added by WEB-SA23-0001
                break;
                //End Added by SMILEDINING-SA21-0028
            //Added by SMILEDINING-SA21-0018
            case cfrmFoodThirdPartySetup:
                var itemAdd = JSON.parse(result.obj);
                setFoodThirdParty(itemAdd);
                $('#modalSetupFoodThirdParty').modal('hide');
                break;
            //End Added by SMILEDINING-SA21-0018
            case cfrmAddCopyFood:
                var itemAddCopyFood = JSON.parse(result.obj);
                //setCopyFood(itemAddCopyFood.listFood, itemAddCopyFood.groupChoiceOptionId, itemAddCopyFood.listFoodChoiceMap);    //Modified and End by SMILEDINING-SA21-0021
                setCopyFood(itemAddCopyFood.listFood, itemAddCopyFood.groupChoiceOptionId, itemAddCopyFood.listFoodChoiceMap, itemAddCopyFood.listFoodIconMap);  //Added and End by SMILEDINING-SA21-0021
                //Added by WEB-SA23-0001
                var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) { 
                    var itemFoodChoiceMapKiosk = [];
                    var foodIds = []; //Added and End by WEB-SA23-0001#2
                    var listFoodChoiceMapKiosk = !isEmpty(result.objFoodChoiceMapKiosk) ? JSON.parse(result.objFoodChoiceMapKiosk) : null; //Added and End by WEB-SA23-0001#1
                    var itemFoodsKiosk = _.filter(itemKiosk, function (food) {
                        //if (food.productId.includes(products.cSmileContactless)) { //Modified and End by WEB-SA23-0001#2
                        //Added by WEB-SA23-0001#2
                        if (food.productId.includes(products.cSmileContactless) && food.active) { 
                            foodIds.push(food.foodId);
                        //End Added by WEB-SA23-0001#2
                            //_.forEach(itemAddCopyFood.listFoodChoiceMap, function (item) { //Modified and End by WEB-SA23-0001#1
                            _.forEach(listFoodChoiceMapKiosk, function (item) { //Added and End by WEB-SA23-0001#1
                                if (food.foodId == item.foodId) {
                                    itemFoodChoiceMapKiosk.push(item);
                                }
                            });
                            return true;
                        }
                        return false;
                    });
                    if (!isEmpty(itemFoodsKiosk)) {
                        sendMqtt(itemFoodsKiosk, getTopicMqtt('food'));
                        //Added by WEB-SA23-0001#2
                        if (!isEmpty(itemFoodChoiceMapKiosk) || !isEmpty(foodIds)) {
                            sendMqtt(createJsonMqttFoodChoiceMap(itemFoodChoiceMapKiosk, foodIds), getTopicMqtt('foodChoiceMap'));
                        }
                        //End Added by WEB-SA23-0001#2
                        //Modified by WEB-SA23-0001#2
                        //if (!isEmpty(itemFoodChoiceMapKiosk)) {
                        //    sendMqtt(itemFoodChoiceMapKiosk, getTopicMqtt('foodChoiceMap'));
                        //}
                        //End Modified by WEB-SA23-0001#2
                    }
                }
                //End Added by WEB-SA23-0001
                break;
            case cfrmChoiceOptionSetUp:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                //Added by SMILEDINING-SA21-0066#25
                var choices = []; //Added and End by WEB-SA23-0001
                if (val != statusAdd) { //Added and End by SMILEDINING-SA21-0066#26
                    //var choices = JSON.parse(result.choices); //Modified and End by WEB-SA23-0001
                    choices = JSON.parse(result.choices); //Added and End by WEB-SA23-0001
                    if (choices.length > 0) {
                        setChoiceUnlock(choices);
                    };
                }   //Added and End by SMILEDINING-SA21-0066#26
                //End Added by SMILEDINING-SA21-0066#25
                setChoiceOption(item, val);
                //Added by WEB-SA23-0001
                if (vmViewIndex.isKiosk() && !isEmpty(item)) { 
                    sendMqtt(item, getTopicMqtt('choiceOption'));
                    //Added by WEB-SA23-0001#4
                    var itemFoodChoiceMapKiosk = !isEmpty(result.objFoodChoiceMapKiosk) ? JSON.parse(result.objFoodChoiceMapKiosk) : null;
                    if (!isEmpty(itemFoodChoiceMapKiosk)) {
                        //if (!isEmpty(itemFoodChoiceMapKiosk.foodChoiceMap)) { //Modified and End by WEB-SA23-0001#8
                        if (!isEmpty(itemFoodChoiceMapKiosk.foodChoiceMap) || !isEmpty(itemFoodChoiceMapKiosk.foodIds)) { //Added and End by WEB-SA23-0001#8
                            sendMqtt(createJsonMqttFoodChoiceMap(itemFoodChoiceMapKiosk.foodChoiceMap, itemFoodChoiceMapKiosk.foodIds), getTopicMqtt('foodChoiceMap'));
                        }
                    }
                    //End Added by WEB-SA23-0001#4
                    //Modified by WEB-SA23-0001#1
                    //if (!isEmpty(choices)) {
                    //    sendMqtt(choices, getTopicMqtt('choice'));
                    //}
                    //End Modified by WEB-SA23-0001#1
                    //Added by WEB-SA23-0001#1
                    var itemChoicesKiosk = !isEmpty(result.objChoicesKiosk) ? JSON.parse(result.objChoicesKiosk) : null;
                    if (!isEmpty(itemChoicesKiosk)) {
                        sendMqtt(itemChoicesKiosk, getTopicMqtt('choice'));
                    }
                    //End Added by WEB-SA23-0001#1
                }
                //End Added by WEB-SA23-0001
                break;
            case cfrmChoiceSetUp:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                if (result.objPrev != undefined) {
                    var prevItem = JSON.parse(result.objPrev);
                } else {
                    var prevItem = null;
                }
                //setChoice(item, val, prevItem);   //Modified and End by SMILEDINING-SA18-0026
                //Added by SMILEDINING-SA18-0026
                if (result.message == cMenuLinkToFood) {
                    bindDataGridLinkToFood(item);
                    //vmViewIndex.configSetUp.choice.dataSetUpModal.clearSetUpChoice(); //Added and End by SMILEDINING-SA18-0045    //Modified and End by SMILEDINING-SA20-0018
                    vmViewIndex.configSetUp.choice.dataSetUpModal.clearSetUpChoice(vmViewIndex.configSetUp.choice.dataSetUpModal);  //Added and End by SMILEDINING-SA20-0018
                }
                else {
                    vmViewIndex.configSetUp.choice.showBtnLinkToFood(false);
                    setChoice(item, val, prevItem);
                    //Added by WEB-SA23-0001
                    //Modified by WEB-SA23-0001#1
                    //if (vmViewIndex.isKiosk() && !isEmpty(item)) { 
                    //    sendMqtt(item, getTopicMqtt('choice'));
                    //}
                    //End Modified by WEB-SA23-0001#1
                    //End Added by WEB-SA23-0001
                    //Added by WEB-SA23-0001#1
                    var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                    if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) { 
                        sendMqtt(itemKiosk, getTopicMqtt('choice'));
                        //Added by WEB-SA23-0001#4
                        var itemFoodChoiceMapKiosk = !isEmpty(result.objFoodChoiceMapKiosk) ? JSON.parse(result.objFoodChoiceMapKiosk) : null;
                        if (!isEmpty(itemFoodChoiceMapKiosk)) {
                            //if (!isEmpty(itemFoodChoiceMapKiosk.foodChoiceMap)) { //Modified and End by WEB-SA23-0001#8
                            if (!isEmpty(itemFoodChoiceMapKiosk.foodChoiceMap) || !isEmpty(itemFoodChoiceMapKiosk.foodIds)) { //Added and End by WEB-SA23-0001#8
                                sendMqtt(createJsonMqttFoodChoiceMap(itemFoodChoiceMapKiosk.foodChoiceMap, itemFoodChoiceMapKiosk.foodIds), getTopicMqtt('foodChoiceMap'));
                            }
                        }
                        //End Added by WEB-SA23-0001#4
                    }
                    //End Added by WEB-SA23-0001#1
                }
                //End Added by SMILEDINING-SA18-0026
                break;
                //Added by SMILEDINING-SA20-0018
            case cfrmChoiceModifySetUp:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                if (result.objPrev != undefined) {
                    var prevItem = JSON.parse(result.objPrev);
                } else {
                    var prevItem = null;
                }
                if (result.message == cMenuLinkToFood) {
                    bindDataGridLinkToFood(item);
                    vmViewIndex.configSetUp.choiceModify.dataSetUpModal.clearSetUpChoice(vmViewIndex.configSetUp.choiceModify.dataSetUpModal);
                }
                else {
                    vmViewIndex.configSetUp.choiceModify.showBtnLinkToFood(false);
                    setChoiceModify(item, val, prevItem);
                }
                break;
            case cfrmGraguityChargeSetup:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setGraguityCharge(item, val);
                //Added by WEB-SA23-0001
                //Modified by WEB-SA23-0001#1
                //if (vmViewIndex.isKiosk() && !isEmpty(item)) { 
                //    sendMqtt(item, getTopicMqtt('graguityCharge'));
                //}
                //End Modified by WEB-SA23-0001#1
                //End Added by WEB-SA23-0001
                //Added by WEB-SA23-0001#1
                var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) { 
                    sendMqtt(itemKiosk, getTopicMqtt('graguityCharge'));
                }
                //End Added by WEB-SA23-0001#1
                break;
            case cfrmFoodPrefix:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setFoodPrefix(item, val);
                break;
            case cfrmGraguityCharge:
                setGraguityChargeSetting();
                $('#modalShowGratuityCharge').modal('hide');
                //Added by WEB-SA23-0001
                item = !isEmpty(result.obj) ? JSON.parse(result.obj) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(item)) {
                    sendMqtt(item, getTopicMqtt('stGlobalConfig'));
                }
                //End Added by WEB-SA23-0001
                break;
                //End Added by SMILEDINING-SA20-0018
                //Added by SMILEDINING-SA21-0021
            case cfrmIconSetup:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setIcon(item, val);
                break;
                //End Added by SMILEDINING-SA21-0021
                //Added by SMILEDINING-SA18-0026
            case cfrmLinkToFood:
                var itemFoodChoiceMap = JSON.parse(result.obj);
                val = result.txtValue;
                vmViewIndex.configSetUp.linkToFood.listFoodChoiceMap(itemFoodChoiceMap);
                vmViewIndex.configSetUp.choice.showBtnLinkToFood(false);
                vmViewIndex.configSetUp.choiceModify.showBtnLinkToFood(false); //Added and End by SMILEDINING-SA20-0018
                var gridInstance = $('#gridLinkToFood').dxTreeList('instance');
                gridInstance.deselectAll();
                $('#modalSetLinkToFood').modal('hide');
                //Added by WEB-SA23-0001#2
                var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) { 
                    var itemFoodChoiceMapKiosk = [];
                    var foodIds = [];
                    ko.utils.arrayForEach(vmViewIndex.configSetUp.linkToFood.listFood(), function (food) {
                        if (food.active() && food.productID().includes(products.cSmileContactless)) {
                            _.forEach(itemKiosk.foodIds, function (id) {
                                if (food.foodId() == id)
                                    foodIds.push(id);
                            });
                            
                            _.forEach(itemKiosk.foodChoiceMap, function (item) {
                                if (food.foodId() == item.foodId)
                                    itemFoodChoiceMapKiosk.push(item);
                            });
                        }
                    });
                    if (!isEmpty(itemFoodChoiceMapKiosk) || !isEmpty(foodIds)) {
                        sendMqtt(createJsonMqttFoodChoiceMap(itemFoodChoiceMapKiosk, foodIds), getTopicMqtt('foodChoiceMap'));
                    }
                }
                //End Added by WEB-SA23-0001#2
                break;
                //End Added by SMILEDINING-SA18-0026
            case cfrmTaxRateSetUp:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setTaxRate(item, val);
                //Added by WEB-SA23-0001
                if (vmViewIndex.isKiosk() && !isEmpty(item)) {
                    sendMqtt(item, getTopicMqtt('taxRate'));
                }
                //End Added by WEB-SA23-0001
                break;
            case cfrmRevenueClassSetUp:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                if (result.objPrev != undefined) {
                    var prevItem = JSON.parse(result.objPrev);
                } else {
                    var prevItem = null;
                }
                setRevenueClass(item, val, prevItem);
                break;
            case cfrmSearchReport:
                if (result.obj != "" && result.obj != undefined) {
                    item = JSON.parse(result.obj);
                    vmViewIndex.report.chart.updateChart(true);
                    DataReportViewModel(item);
                }
                break;
            case cfrmSearchBalance:
                item = JSON.parse(result.obj);
                if (item != null) DataBalanceViewModel(item);
                break;
                //Added By SMILEDINING-SA19-0004
            case cfrmUploadAnnounceImage:
                vmViewIndex.globalConfig.shopAnnounceImage(result.filename);
                vmViewIndex.globalConfig.delAnnounceImage(true);
                break;
            case cfrmDeleteAnnounceImage:
                vmViewIndex.globalConfig.shopAnnounceImage("");
                vmViewIndex.globalConfig.delAnnounceImage(false);
                break;
            case cfrmDeleteImageLogo:
                vmViewIndex.globalConfig.shopLogo("");
                vmViewIndex.globalConfig.delShopLogo(false);
                break;
                //End Added By SMILEDINING-SA19-0004
                //Added by SMILEDINING-SA20-0028
            case cfrmUploadAnnounceCustomImage:
                vmViewIndex.globalConfig.shopAnnounceCustomImage(result.filename);
                vmViewIndex.globalConfig.delAnnounceCustomImage(true);
                break;
            case cfrmDeleteAnnounceCustomImage:
                vmViewIndex.globalConfig.shopAnnounceCustomImage('');
                vmViewIndex.globalConfig.delAnnounceCustomImage(false);
                break;
                //End Added by SMILEDINING-SA20-0028
            //Added by WEB-SA23-0001
            case cfrmUpdateRestaurant:
            case cfrmUpdateMenuSetting:
            case cfrmUpdateSetting:
                item = !isEmpty(result.obj) ? JSON.parse(result.obj) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(item)) {
                    sendMqtt(item, getTopicMqtt('stGlobalConfig'));
                }
                //Added by WEB-SA24-0016
                var itemCustomerNotifications = !isEmpty(result.objCustomerNotifications) ? JSON.parse(result.objCustomerNotifications) : null;
                if (itemCustomerNotifications != null) {
                    DataCustomerNotificationsSetUpViewModel(itemCustomerNotifications);
                }
                //End Added by WEB-SA24-0016
                break;
            //End Added by WEB-SA23-0001
                //Added by SMILEDINING-SA19-0005
            case cfrmUpdateDeliveryFreeTime:
                item = JSON.parse(result.obj);
                afterUpdateDeliveryFreeTime(item);
                break;
                //End Added by SMILEDINING-SA19-0005  
                //Added By SMILEDINING-SA19-0008
            case cfrmCouponDelivery:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setCouponDelivery(item, val);
                //Added by WEB-SA23-0045
                var itemDiscountTimeMap = !isEmpty(result.objDiscountTimeMap) ? JSON.parse(result.objDiscountTimeMap) : null;
                setDiscountTimeMap(itemDiscountTimeMap, null, null, item.couponDeliveryId);
                //End Added by WEB-SA23-0045
                //modalHiddenHasScroll('#modalShowCouponDelivery'); //Added and End by SMILEDINING-SA20-0006    //Modified and End by SMILEDINING-SA21-0015
                break;
                //End Added By SMILEDINING-SA19-0008
                //Added By SMILEDINING-SA19-0011
                //case cfrmEditGiftCardImage:
                //    item = JSON.parse(result.obj);
                //    SetGiftCardImageUpdate(item);
                //    break;
            case cfrmEditAllGiftCardImage:
                item = JSON.parse(result.obj);
                SetAllGiftCardImageUpdate(item);
                break;
            case cfrmAddNewGiftCardValue:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                SetNewGifCardValueAdd(item, val);
                break;
            case cfrmAddNewCustomDiscount:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                SetNewCustomDiscountAdd(item, val);
                break;
            case cfrmGetGiftCardView:
                item = JSON.parse(result.obj);
                DataGiftCardViewViewModel(item);
                break;
                //End Added SMILEDINING-SA19-0011
                //Added by SMILEDINING-SA20-0007
            case cfrmSearchStatement:
                item = JSON.parse(result.obj);
                DataStatementViewModel(item);
                break;
                //End Added by SMILEDINING-SA20-0007
                //Added by SMILEDINING-SA20-0016
            case cfrmPromotionMainPrice:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setMainPrice(item, val);
                //Added by WEB-SA23-0001
                if (vmViewIndex.isKiosk() && !isEmpty(item)) {
                    sendMqtt(item, getTopicMqtt('stPromotionMainPrice'));
                }
                //End Added by WEB-SA23-0001
                break;
            case cfrmPromotionGroupMainFood:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setGrpMainFood(item, val);
                //Added by WEB-SA23-0001
                if (vmViewIndex.isKiosk() && !isEmpty(item)) {
                    //Modified by WEB-SA23-0001#1
                    //var itemGroupMainFood = !isEmpty(item.listGrpMainFood) ? JSON.parse(item.listGrpMainFood) : null;
                    //var itemMainFood = !isEmpty(item.listMainFood) ? JSON.parse(item.listMainFood) : null;
                    //End Modified by WEB-SA23-0001#1
                    //Added by WEB-SA23-0001#1
                    var itemGroupMainFood = !isEmpty(item.listGrpMainFood) ? item.listGrpMainFood : null;
                    var itemMainFood = !isEmpty(item.listMainFood) ? item.listMainFood : null;
                    //End Added by WEB-SA23-0001#1
                    if (!isEmpty(itemGroupMainFood)) {
                        sendMqtt(itemGroupMainFood, getTopicMqtt('stPromotionGroupMainFood'));
                    }
                    if (!isEmpty(itemMainFood)) {
                        sendMqtt(itemMainFood, getTopicMqtt('stPromotionMainFood'));
                    }
                }
                //End Added by WEB-SA23-0001
                break;
            case cfrmPromotionGroupFreeFood:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setGrpFreeFood(item, val);
                //Added by WEB-SA23-0001
                if (vmViewIndex.isKiosk() && !isEmpty(item)) {
                    //Modified by WEB-SA23-0001#1
                    //var itemGroupFreeFood = !isEmpty(item.listGrpFreeFood) ? JSON.parse(item.listGrpFreeFood) : null;
                    //var itemFreeFood = !isEmpty(item.listFreeFood) ? JSON.parse(item.listFreeFood) : null;
                    //End Modified by WEB-SA23-0001#1
                    //Added by WEB-SA23-0001#1
                    var itemGroupFreeFood = !isEmpty(item.listGrpFreeFood) ? item.listGrpFreeFood: null;
                    var itemFreeFood = !isEmpty(item.listFreeFood) ? item.listFreeFood : null;
                    //End Added by WEB-SA23-0001#1
                    if (!isEmpty(itemGroupFreeFood)) {
                        sendMqtt(itemGroupFreeFood, getTopicMqtt('stPromotionGroupFreeFood'));
                    }
                    if (!isEmpty(itemFreeFood)) {
                        sendMqtt(itemFreeFood, getTopicMqtt('stPromotionFreeFood'));
                    }
                }
                //End Added by WEB-SA23-0001
                break;
            case cfrmPromotionCondition:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setCondition(item, val);
                //Added by WEB-SA24-0012
                var itemPromotionTimeMap = !isEmpty(result.objPromotionTimeMap) ? JSON.parse(result.objPromotionTimeMap) : null;
                setPromotionTimeMap(itemPromotionTimeMap, item.promotionId);
                //End Added by WEB-SA24-0012
                //Added by WEB-SA23-0001
                //Modified by WEB-SA23-0001#1
                //if (vmViewIndex.isKiosk() && !isEmpty(item)) {
                //    sendMqtt(item, getTopicMqtt('stPromotion'));
                //}
                //End Modified by WEB-SA23-0001#1
                //End Added by WEB-SA23-0001
                //Added by WEB-SA23-0001#1
                var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) {
                    sendMqtt(itemKiosk, getTopicMqtt('stPromotion'));
                }
                //End Added by WEB-SA23-0001#1
                break;
                //End Added by SMILEDINING-SA20-0016
            //Added by SMILEDINING-SA20-0031
            case cfrmShopClose:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setShopClose(item, val);
                //Added by WEB-SA23-0001
                var itemKiosk = !isEmpty(result.objKiosk) ? JSON.parse(result.objKiosk) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(itemKiosk)) {
                    sendMqtt(itemKiosk, getTopicMqtt('stShopClose'));
                }
                //End Added by WEB-SA23-0001
                break;
            //End Added by SMILEDINING-SA20-0031
            //Added by WEB-SA22-0040
            case cfrmUpdateMinimumOrderDeliveryCharge:
                item = JSON.parse(result.obj);
                ko.mapping.fromJS(item, {}, vmViewIndex.allMapZone.tempMinimumOrderDeliveryChargeList);
                $('#modalMinimumOrderDeliveryCharge').modal('hide');
                break;
            //End Added by WEB-SA22-0040
            //Added by SMILEDINING-SA20-0043
            case cfrmUpdateCustomMapZoneMile:
                item = JSON.parse(result.obj);
                setUpdateCustomMapZoneMile(item);
                break;
                //End Added by SMILEDINING-SA20-0043
                //Added by SMILEDINING-SA20-0048
            case cfrmUpdateDisCountOneTimeUse:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setDiscountOneTimeUse(item, val);
                //Added by WEB-SA23-0045
                var itemDiscountTimeMap = !isEmpty(result.objDiscountTimeMap) ? JSON.parse(result.objDiscountTimeMap) : null;
                setDiscountTimeMap(itemDiscountTimeMap, null, item.discountOneTimeUseId, null);
                //End Added by WEB-SA23-0045
                break;
            case cfrmUploadDisCountOneTimeUse:
                item = JSON.parse(result.obj);
                val = result.txtValue;
                setUploadDiscountOneTimeUse(item, val);
                break;
                //End Added by SMILEDINING-SA20-0048
                //Added by SMILEDINING-SA20-0048#2
            case cfrmDownloadDisCountOneTimeUse:
                window.location = '/Setting/Download?fileGuid=' + result.fileGuid + '&filename=' + result.fileName;
                break;
                //End Added by SMILEDINING-SA20-0048#2
            //Added by SMILEDINING-SA21-0063#4
            case cfrmExportCustomer:
                var itemFile = JSON.parse(result.obj);
                //Modified by SMILEDINING-SA21-0063#5
                //const delay = milliseconds => new Promise(resolve => {
                //    setTimeout(resolve, milliseconds);
                //});
                //const download = async (url, name) => {
                //    const tagDownload = document.createElement('a');
                //    tagDownload.download = name;
                //    tagDownload.href = url;
                //    tagDownload.style.display = 'none';
                //    document.body.append(tagDownload);
                //    tagDownload.click();
                //    await delay(1000);
                //    tagDownload.remove();
                //};
                //for (let item = 0; item < itemFile.length; item++) {
                //    var url = '/Marketing/Download?fileGuid=' + itemFile[item].guid + '&filename=' + itemFile[item].fileName;
                //    download(url, itemFile[item].fileName);
                //}
                //End Modified by SMILEDINING-SA21-0063#5
                //Added by SMILEDINING-SA21-0063#5
                if (itemFile.length == 1) {
                    window.location = '/Marketing/Download?fileGuid=' + itemFile[0].guid + '&filename=' + itemFile[0].fileName;
                }
                else {
                    const delay = milliseconds => new Promise(resolve => {
                        setTimeout(resolve, milliseconds);
                    });
                    const download = (url, name) => {
                        const tagDownload = document.createElement('a');
                        tagDownload.download = name;
                        tagDownload.href = url;
                        tagDownload.style.display = 'none';
                        document.body.append(tagDownload);
                        tagDownload.click();
                        delay(1000);
                        tagDownload.remove();
                    };
                    for (let item = 0; item < itemFile.length; item++) {
                        var url = '/Marketing/Download?fileGuid=' + itemFile[item].guid + '&filename=' + itemFile[item].fileName;
                        download(url, itemFile[item].fileName);
                    }
                }
                //End Added by SMILEDINING-SA21-0063#5
                break;
            //End Added by SMILEDINING-SA21-0063#4
            default:
                break;
        }
        checkUpdateThirdParty(frmName, result); //Added and End by WEB-SA23-0026#1
        $('body').removeAttr('style');          //Add and End by SMILEDINING-SA18-0024
    };

    //Added by SMILEDINING-SA19-0011
    function showAllMenu() {
        var showMenuSmileDining = store.get(cMenuSmileDining);
        var showMenuGiftCard = store.get(cMenuEgiftCard);
        var showMenuSmileContactlessDining = store.get(cMenuSmileContactlessDining); //Added and End by SMILEDINING-SA20-0006
        var showMenuSmileThirdPartyIntegrations = store.get(cMenuSmileThirdPartyIntegrations); //Added and End by WEB-SA22-0064#1

        //if (showMenuSmileDining) {            //Modified and End by SMILEDINING-SA20-0006  
        if (showMenuSmileDining || showMenuSmileContactlessDining) {  //Added and End by SMILEDINING-SA20-0006
            $("#LiveOrderSideBar").click();
        } else {
            //if (showMenuGiftCard) { //Modified and End by WEB-SA22-0064#1
            //Added by WEB-SA22-0064#1
            if (showMenuSmileThirdPartyIntegrations) {
                $('.shopOpen').addClass('hidden');
                $("#MenuSetupSideBar").click();
            } else if (showMenuGiftCard) {
            //End Added by WEB-SA22-0064#1
                $('.shopOpen').addClass('hidden');
                $("#GiftCardSideBar").click();
            }
        }
    };

    //Added by WEB-SA22-0064#1
    function setSideBar() {
        var showMenuSmileDining = store.get(cMenuSmileDining);
        var showMenuSmileContactlessDining = store.get(cMenuSmileContactlessDining);
        var showMenuSmileThirdPartyIntegrations = store.get(cMenuSmileThirdPartyIntegrations);
        var showMenuGiftCard = store.get(cMenuEgiftCard);
        var showMenuDeliveryBilling = store.get(cMenuDeliveryBilling);
        setEgiftCard(showMenuGiftCard);
        setDeliveryBilling(showMenuDeliveryBilling);
        if (showMenuSmileDining == false && showMenuSmileContactlessDining == true) {
            setSmileContactlessDining(showMenuSmileContactlessDining);
        }
        else {
            setSmileDining(showMenuSmileDining);
        }
        if (!showMenuSmileDining && !showMenuSmileContactlessDining && showMenuSmileThirdPartyIntegrations)
            setSmileThirdPartyIntegrations(showMenuSmileThirdPartyIntegrations);
    };
    //End Added by WEB-SA22-0064#1

    function setSmileDining(status) {
        if (!status) {
            $('#LiveOrderSideBar').parent().hide();
            $('#MenuSetupSideBar').parent().hide();
            $('#ConfigSetupSideBar').parent().hide();
            $('#MySettingSideBar').parent().hide();
            $('#TemplateSideBar').parent().hide();
            $('#ReportsSideBar').parent().hide();
            $('#BalanceSideBar').parent().hide();
            $('#StatementsSideBar').parent().hide();
            $('#MarketingViewSideBar').parent().hide(); //Added and End by WEB-SA22-0064

            $('#LiveOrderMenuMobile').hide();
            $('#MenuSetupMenuMobile').hide();
            $('#ConfigSetupMenuMobile').hide();
            $('#MySettingMenuMobile').hide();
            $('#TemplateMenuMobile').hide();
            $('#ReportsMenuMobile').hide();
            $('#BalanceMenuMobile').hide();
            $('#StatementMenuMobile').hide();
            $('#MarketingMenuMobile').hide(); //Added and End by SMILEDINING-SA21-0063#5
        }
        store.set(cMenuSmileDining, status);
    };

    // Added by SMILEDINING-SA20-0006
    function setSmileContactlessDining(status) {
        setSmileDining(status);
        store.set(cMenuSmileContactlessDining, status);
    };
    //End added by SMILEDINING-SA20-0006

    function setEgiftCard(status) {
        var giftCardSideBar = $('#GiftCardSideBar');
        var giftCardMenuMobile = $('#GiftCardMenuMobile');
        var giftCardViewSideBar = $('#GiftCardViewSideBar');
        var giftCardViewMenuMobile = $('#GiftCardViewMenuMobile');
        if (status) {
            giftCardSideBar.parent().show();
            giftCardViewSideBar.parent().show();
            giftCardMenuMobile.show();
            giftCardViewMenuMobile.show();
        } else {
            giftCardSideBar.parent().hide();
            giftCardViewSideBar.parent().hide();
            giftCardMenuMobile.hide();
            giftCardViewMenuMobile.hide();
        }
        store.set(cMenuEgiftCard, status);
    };
    //End Added by SMILEDINING-SA19-0011

    //Added by WEB-SA22-0064
    function setSmileThirdPartyIntegrations(status) {
        var menuSetupSideBar = $('#MenuSetupSideBar');
        var menuSetupMenuMobile = $('#MenuSetupMenuMobile');
        var configSetupSideBar = $('#ConfigSetupSideBar');
        var configSetupMenuMobile = $('#ConfigSetupMenuMobile');
        if (status) {
            menuSetupSideBar.parent().show();
            configSetupSideBar.parent().show();
            menuSetupMenuMobile.show();
            configSetupMenuMobile.show();
        } else {
            menuSetupSideBar.parent().hide();
            configSetupSideBar.parent().hide();
            menuSetupMenuMobile.hide();
            configSetupMenuMobile.hide();
        }
        store.set(cMenuSmileThirdPartyIntegrations, status);
    };
    //End Added by WEB-SA22-0064

    //Added by SMILEDINING-SA22-0013
    function setDeliveryBilling(status) {
        var deliveryBillingSideBar = $('#DeliveryBillingSideBar');
        var deliveryBillingMenuMobile = $('#DeliveryBillingMenuMobile');
        if (status) {
            deliveryBillingSideBar.parent().show();
            deliveryBillingMenuMobile.show();
        } else {
            deliveryBillingSideBar.parent().hide();
            deliveryBillingMenuMobile.hide();
        }
        store.set(cMenuDeliveryBilling, status);
    };
    //End Added by SMILEDINING-SA22-0013

    //Added by SMILEDINING-SA19-0021
    function setShopStatus() {
        vmViewIndex.globalConfig.switchShopOpenUtils({
            offText: 'Close',
            onText: 'Open',
            value: vmViewIndex.globalConfig.isShopOpen,
            width: 80,
            onValueChanged: function (item) {
                if (item.value == true) {
                    vmViewIndex.globalConfig.txtShopOpen('OPEN');
                    vmViewIndex.globalConfig.isShopOpen(true);
                } else {
                    vmViewIndex.globalConfig.txtShopOpen('CLOSE');
                    vmViewIndex.globalConfig.isShopOpen(false);
                }
                //if (!vmViewIndex.showMySetting()) {
                //var data = 'shop-status:' + vmViewIndex.globalConfig.txtShopOpen();       //Modified and End by SMILEDINING-SA20-0006
                var data = 'shop-status:' + vmViewIndex.globalConfig.txtShopOpen() + ',' + 'productId:' + products.cSmileDining;      //Added and End by SMILEDINING-SA20-0006
                var verify = JSON.parse(getObjFormAjax(cJsonUpdateGlobalConfig, data));
                //if (verify) { //Modified and End by WEB-SA23-0001
                if (!isEmpty(verify)) { //Added and End by WEB-SA23-0001
                    swal('Success...', "Save successfully", cSwal_Icon_Success);
                } else {
                    swal(cSwal_Alert_Error, "Try again", cSwal_Icon_Error);
                    //if (vmViewIndex.globalConfig.isShopOpen(true)) { //Modified and End by WEB-SA23-0011
                    if (vmViewIndex.globalConfig.isShopOpen()) { //Added and End by WEB-SA23-0011
                        vmViewIndex.globalConfig.txtShopOpen('CLOSE');
                        vmViewIndex.globalConfig.isShopOpen(false);
                    } else {
                        vmViewIndex.globalConfig.txtShopOpen('OPEN');
                        vmViewIndex.globalConfig.isShopOpen(true);
                    }
                }
                //}
            }
        });
    };

    //Added by SMILEDINING-SA20-0006
    function setShopStatusContactless() {
        vmViewIndex.globalConfig.switchShopOpenUtilsContactless({
            offText: 'Close',
            onText: 'Open',
            value: vmViewIndex.globalConfig.isShopOpenContactless,
            width: 80,
            onValueChanged: function (itemContact) {
                if (checkMqttConnection(cJsonUpdateGlobalConfig)) { //Added and End by WEB-SA23-0001
                    if (itemContact.value == true) {
                        vmViewIndex.globalConfig.txtShopOpenContactless('OPEN');
                        vmViewIndex.globalConfig.isShopOpenContactless(true);
                    } else {
                        vmViewIndex.globalConfig.txtShopOpenContactless('CLOSE');
                        vmViewIndex.globalConfig.isShopOpenContactless(false);
                    }
                    var data = 'shop-status:' + vmViewIndex.globalConfig.txtShopOpenContactless() + ',productId:' + products.cSmileContactless;
                    var verify = JSON.parse(getObjFormAjax(cJsonUpdateGlobalConfig, data));
                    //if (verify) { //Modified and End by WEB-SA23-0001
                    if (!isEmpty(verify)) { //Added and End by WEB-SA23-0001
                        swal('Success...', "Save successfully", cSwal_Icon_Success);
                        sendMqtt(verify, getTopicMqtt('stGlobalConfig')); //Added and End by WEB-SA23-0001
                    } else {
                        swal(cSwal_Alert_Error, "Try again", cSwal_Icon_Error);
                        //if (vmViewIndex.globalConfig.isShopOpenContactless(true)) { //Modified and End by WEB-SA23-0011
                        if (vmViewIndex.globalConfig.isShopOpenContactless()) { //Added and End by WEB-SA23-0011
                            vmViewIndex.globalConfig.txtShopOpenContactless('CLOSE');
                            vmViewIndex.globalConfig.isShopOpenContactless(false);
                        } else {
                            vmViewIndex.globalConfig.txtShopOpenContactless('OPEN');
                            vmViewIndex.globalConfig.isShopOpenContactless(true);
                        }
                    }
                //Added by WEB-SA23-0001
                } else {
                    if (vmViewIndex.globalConfig.txtShopOpenContactless() == 'CLOSE' && vmViewIndex.globalConfig.isShopOpenContactless()) {
                        vmViewIndex.globalConfig.txtShopOpenContactless('CLOSE');
                        vmViewIndex.globalConfig.isShopOpenContactless(false);
                    } else if (vmViewIndex.globalConfig.txtShopOpenContactless() == 'OPEN' && !vmViewIndex.globalConfig.isShopOpenContactless()) {
                        vmViewIndex.globalConfig.txtShopOpenContactless('OPEN');
                        vmViewIndex.globalConfig.isShopOpenContactless(true);
                    }
                    swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
                }
                //End Added by WEB-SA23-0001
            }
        });
    };
    //End Added by SMILEDINING-SA20-0006

    function setPositionShopStatus() {
        var shopOpen = $('.shopOpen');
        //if ($(window).width() <= 783) { //Modified and End by WEB-SA23-0038
        if ($(window).width() <= 767) { //Added and End by WEB-SA23-0038
            shopOpen.removeClass('d-none').removeClass('d-lg-block');
            shopOpen.addClass('d-lg-none').addClass('switch-floating-bottom');
            $('#smilecontactless').text(products.mapName[products.cSmileContactless].shotName + ' : ');     //Added and End by SMILEDINING-SA20-0006          
        } else {
            shopOpen.removeClass('d-lg-none').removeClass('switch-floating-bottom');
            shopOpen.addClass('d-none').addClass('d-lg-block');
            $('#smilecontactless').text(products.mapName[products.cSmileContactless].name + ' : ');         //Added and End by SMILEDINING-SA20-0006     
        }
    };
    //End Added by SMILEDINING-SA19-0021

    function getObjFormAjax(jsonObj, id) {
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData = JSON.parse('{"key" : "' + id + '"}');
        return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
    };

    function hasScroll() {
        if ($(document).height() > $(window).height()) {
            return true;
        }
        return false;
    };

    function switchCaseSideBar(path) {

        //Added by SMILEDINING-SA19-0021
        //var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, ""));      //Modified and End by SMILEDINING-SA20-0006
        //var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileDining));     //Added and End by SMILEDINING-SA20-0006
        //DataGlobalConfigViewModel(globalConfig);
        //setShopStatus();
        //End Added by SMILEDINING-SA19-0021
        //Modified by WEB-SA22-0064#1
        ////Added by SMILEDINING-SA19-0011
        //var showMenuSmileDining = store.get(cMenuSmileDining);
        //var showMenuSmileContactlessDining = store.get(cMenuSmileContactlessDining);     //Added and End by SMILEDINING-SA20-0006
        //var showMenuGiftCard = store.get(cMenuEgiftCard);
        //var showMenuDeliveryBilling = store.get(cMenuDeliveryBilling);  //Added and End by SMILEDINING-SA22-0013
        //setEgiftCard(showMenuGiftCard);
        //setDeliveryBilling(showMenuDeliveryBilling);    //Added and End by SMILEDINING-SA22-0013
        ////setSmileDining(showMenuSmileDining);   //Modified and End by SMILEDINING-SA20-0006
        ////End Added by SMILEDINING-SA19-0011
        //var autoSyncProduct = false;    //Added and End by SMILEDINING-SA21-0014
        ////Added by SMILEDINING-SA20-0006
        //if (showMenuSmileDining == false && showMenuSmileContactlessDining == true) {
        //    setSmileContactlessDining(showMenuSmileContactlessDining);
        //}
        //else {
        //    setSmileDining(showMenuSmileDining);
        //    //Added by SMILEDINING-SA21-0014
        //    var dataGlobalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileDining));
        //    autoSyncProduct = filterGlobalConfig(dataGlobalConfig, 'deliverect-autosync-product') == '1' ? true : false;
        //    //End Added by SMILEDINING-SA21-0014
        //    vmViewIndex.autoSyncProduct(autoSyncProduct);  //Added and End by SMILEDINING-SA21-0014#1
        //}
        ////End Added by SMILEDINING-SA20-0006
        //End Modified by WEB-SA22-0064#1
        //Added by SMILEDINING-SA21-0014
        //Modified by WEB-SA22-0064
        //if (autoSyncProduct) {
        //    if (vmViewIndex.tabSyncProduct()) {
        //        getObjFormAjax(cJsonGetSyncProduct, "");   //Sync Product
        //    }
        //}
        //End Modified by WEB-SA22-0064
        //Added by WEB-SA23-0026
        //if (vmViewIndex.globalConfig.autoSyncProduct() && vmViewIndex.tabSyncProduct()) { //Modified and End by WEB-SA23-0026#1
        if (checkSyncProductAuto()) { //Added and End by WEB-SA23-0026#1
            syncProductAuto(false);
        }
        //End Added by WEB-SA23-0026
        vmViewIndex.tabSyncProduct(false);
        //End Added by SMILEDINING-SA21-0014
        setSideBar(); //Added and End by WEB-SA22-0064#1

        switch (path) {
            case '/#LiveOrder':
                var dataLiveOrder = JSON.parse(getObjFormAjax(cJsonGetLiveOrder, ""));
                DataLiveOrderViewModel(dataLiveOrder);
                vmViewIndex.showLiveOrder(true);
                break;
            case '/#MenuSetup':
                if (vmViewIndex.menu.chkDrag() == false && vmViewIndex.menu.chkSave() == false) {
                    var dataMenu = JSON.parse(getObjFormAjax(cJsonGetDataMenu, ""));
                    //var dataFoodSettimeMap = JSON.parse(getObjFormAjax(cJsonGetFoodSettimeMap, "")); //Modified and End by WEB-SA23-0048
                    //Added by SMILEDINING-SA21-0014#7
                    var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileDining));
                    var productId = filterGlobalConfig(globalConfig, 'productID');
                    //End Added by SMILEDINING-SA21-0014#7
                    //DataMenuSetupViewModel(dataMenu, dataFoodSettimeMap); //Modified and End by SMILEDINING-SA21-0014#7
                    //DataMenuSetupViewModel(dataMenu, dataFoodSettimeMap, productId);   //Added and End by SMILEDINING-SA21-0014#7 //Modified and End by WEB-SA23-0048
                    DataMenuSetupViewModel(dataMenu, productId);   //Added and End by WEB-SA23-0048
                    foodSetClick();
                }
                vmViewIndex.showMenuSetUp(true);
                vmViewIndex.tabSyncProduct(true);   //Added and End by SMILEDINING-SA21-0014

                break;
            case '/#ConfigSetup':
                if (vmViewIndex.configSetUp.chkDrag() == false && vmViewIndex.configSetUp.chkSave() == false) {
                    var dataConfigSetup = JSON.parse(getObjFormAjax(cJsonGetConfigSetUp, ""));
                    DataConfigSetUpViewModel(dataConfigSetup);
                    //Added by SMILEDINING-SA18-0031
                    vmViewIndex.configSetUp.choice.listCopyChoice([]);
                    vmViewIndex.configSetUp.choice.visibleListCopyChoice(false);
                    //End Added by SMILEDINING-SA18-0031
                    //Added by SMILEDINING-SA20-0018
                    vmViewIndex.configSetUp.choiceModify.listCopyChoice([]);
                    vmViewIndex.configSetUp.choiceModify.visibleListCopyChoice(false);
                    //End Added by SMILEDINING-SA20-0018
                    //$('#tabChoiceOption').click();        //Modified and End by SMILEDINING-SA20-0018
                    $('#tabChoiceGroup').click();   //Added and End by SMILEDINING-SA20-0018
                }
                vmViewIndex.showConfigSetUp(true);
                vmViewIndex.tabSyncProduct(true);   //Added and End by SMILEDINING-SA21-0014

                break;
            case '/#MySetting':
                //tabMap
                var dataMap = JSON.parse(getObjFormAjax(cJsonGetMap, ""));
                DataAllMapViewModel(dataMap);

                //Added by SMILEDINING-SA19-0005
                var noDeleiveryFreeTimeTable = _.head(dataMap.listDeliveryFreeTime);
                if (noDeleiveryFreeTimeTable != undefined && noDeleiveryFreeTimeTable.shopMapCode == "noTable") {
                    vmViewIndex.allMapZone.hasDeliveryFreeTime(false)
                }
                //Added by SMILEDINING-SA19-0005

                //Modified by SMILEDINING-SA20-0006
                ////tabTime
                //var dataTime = JSON.parse(getObjFormAjax(cJsonGetAllTime, ""));
                //AllTimeViewModel(dataTime);

                //var dataDiscount = JSON.parse(getObjFormAjax(cJsonGetDiscount, ""));
                //var dataDiscountType = JSON.parse(getObjFormAjax(cJsonGetDiscountType, "")); //Added and End by SMILEDINING-SA18-0006
                ////DataDiscountViewModel(dataDiscount); //Modified and End by SMILEDINING-SA18-0006
                //DataDiscountViewModel(dataDiscount, dataDiscountType); //Added and End by SMILEDINING-SA18-0006

                ////Added By SMILEDINING-SA18-0003
                //var dataAutoCharge = JSON.parse(getObjFormAjax(cJsonGetAutoCharge, ""));
                //DataAutoChargeSetUpViewModel(dataAutoCharge);

                //var dataHoliday = JSON.parse(getObjFormAjax(cJsonGetHoliday, ""));
                //DataHolidaySetUpViewModel(dataHoliday);

                //var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, ""));
                //DataGlobalConfigViewModel(globalConfig);
                ////End Added By SMILEDINING-SA18-0003
                //End Modified by SMILEDINING-SA20-0006

                //Added by SMILEDINING-SA20-0006
                var globalConfigData = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileDining));
                DataSettingViewModel(globalConfigData);
                if (vmViewIndex.allSetting.isSmileDining()) {
                    var dataTime = JSON.parse(getObjFormAjax(cJsonGetAllTime, products.cSmileDining));
                    var dataDiscount = JSON.parse(getObjFormAjax(cJsonGetDiscount, products.cSmileDining));
                    var dataDiscountOneTimeUse = JSON.parse(getObjFormAjax(cJsonGetDisCountOneTimeUse, products.cSmileDining));   //Added and End by SMILEDINING-SA20-0048
                    var dataDiscountType = JSON.parse(getObjFormAjax(cJsonGetDiscountType, products.cSmileDining));
                    var dataDiscountTimeMap = JSON.parse(getObjFormAjax(cJsonGetDiscountTimeMap, products.cSmileDining)); //Added and End by WEB-SA23-0045
                    var dataAutoCharge = JSON.parse(getObjFormAjax(cJsonGetAutoCharge, products.cSmileDining));
                    var dataHoliday = JSON.parse(getObjFormAjax(cJsonGetHoliday, products.cSmileDining));
                    //var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileDining));
                    var globalConfig = globalConfigData;
                    var dataPromotion = JSON.parse(getObjFormAjax(cJsonGetDataPromotion, products.cSmileDining)); //Added and End by SMILEDINING-SA20-0016
                    var dataShopClose = JSON.parse(getObjFormAjax(cJsonGetShopClose, products.cSmileDining));  //Added and End by SMILEDINING-SA20-0031
                    var dataPaymentFee = JSON.parse(getObjFormAjax(cJsonGetPaymentFee, products.cSmileDining));  //Added and End by SMILEDINING-SA22-0020
                    var dataCustomerNotifications = []; //Added and End by WEB-SA24-0016
                    $('#tabMapLabel').show();
                    //$('#tabMenuSettingLabel').show(); //Modified and End by SMILEDINING-SA22-0009
                }
                else {
                    var dataTime = JSON.parse(getObjFormAjax(cJsonGetAllTime, products.cSmileContactless));
                    var dataDiscount = JSON.parse(getObjFormAjax(cJsonGetDiscount, products.cSmileContactless));
                    var dataDiscountOneTimeUse = JSON.parse(getObjFormAjax(cJsonGetDisCountOneTimeUse, products.cSmileContactless));   //Added and End by SMILEDINING-SA20-0048
                    var dataDiscountType = JSON.parse(getObjFormAjax(cJsonGetDiscountType, products.cSmileContactless));
                    var dataDiscountTimeMap = JSON.parse(getObjFormAjax(cJsonGetDiscountTimeMap, products.cSmileContactless)); //Added and End by WEB-SA23-0045
                    var dataAutoCharge = JSON.parse(getObjFormAjax(cJsonGetAutoCharge, products.cSmileContactless));
                    var dataHoliday = JSON.parse(getObjFormAjax(cJsonGetHoliday, products.cSmileContactless));
                    var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileContactless));
                    var dataPromotion = JSON.parse(getObjFormAjax(cJsonGetDataPromotion, products.cSmileContactless)); //Added and End by SMILEDINING-SA20-0016
                    var dataShopClose = JSON.parse(getObjFormAjax(cJsonGetShopClose, products.cSmileContactless));  //Added and End by SMILEDINING-SA20-0031
                    var dataPaymentFee = JSON.parse(getObjFormAjax(cJsonGetPaymentFee, products.cSmileContactless));  //Added and End by SMILEDINING-SA22-0020
                    var dataCustomerNotifications = JSON.parse(getObjFormAjax(cJsonGetCustomerNotifications, products.cSmileContactless)); //Added and End by WEB-SA24-0016
                    $('#tabMapLabel').hide();
                    //$('#tabMenuSettingLabel').hide();   //Modified and End by SMILEDINING-SA22-0009
                }

                var dataGraguity = JSON.parse(getObjFormAjax(cJsonGetGraguity, ""));    //Added and End by SMILEDINING-SA20-0018

                AllTimeViewModel(dataTime);
                DataDiscountViewModel(dataDiscount, dataDiscountType);
                DataAutoChargeSetUpViewModel(dataAutoCharge);
                DataDiscountOneTimeUseViewModel(dataDiscountOneTimeUse, dataDiscountType);  //Added and End by SMILEDINING-SA20-0048
                DataDiscountTimeMapViewModel(dataDiscountTimeMap);  //Added and End by WEB-SA23-0045
                DataHolidaySetUpViewModel(dataHoliday);
                DataGlobalConfigViewModel(globalConfig);
                DataSettingViewModel(globalConfig);
                DataGraguityViewModel(globalConfig, dataGraguity);    //Added and End by SMILEDINING-SA20-0018
                DataPromotionSetUpViewModel(dataPromotion);  //Added and End by SMILEDINING-SA20-0016
                DataShopCloseSetUpViewModel(dataShopClose);  //Added and End by SMILEDINING-SA20-0031
                DataPaymentFeeSetUpViewModel(dataPaymentFee);  //Added and End by SMILEDINING-SA22-0020
                DataCustomerNotificationsSetUpViewModel(dataCustomerNotifications); //Added and End by WEB-SA24-0016

                vmViewIndex.allSetting.filterProduct.valueArrProduct(products.cSmileDining);
                //End Added by SMILEDINING-SA20-0006

                vmViewIndex.allSetting.selectProduct(products.cSmileDining);  //Added and End by WEB-SA24-0030

                //Added By SMILEDINING-SA19-0008                 
                var dataCouponDelivery = JSON.parse(getObjFormAjax(cJsonGetCouponDelivery, ""));

                var noTable = _.head(dataCouponDelivery);
                if (noTable != undefined && noTable.couponDeliveryName == "noTable") {
                    vmViewIndex.allSetting.hasCouponDelivery(false)
                }

                DataCouponDeliveryViewModel(dataCouponDelivery);
                //End Added By SMILEDINING-SA19-0008                
                setTipsAuto(vmViewIndex.globalConfig.tipsAuto());   //Added and End by SMILEDINING-SA20-0032

                vmViewIndex.showMySetting(true);
                $('#tabRestaurant').click();
                //$('#tabUpload').click();    //Added and End by SMILEDINING-SA20-0048  //Modified and End by SMILEDINING-SA20-0048#1
                $('#tabDownload').click();    //Added and End by SMILEDINING-SA20-0048#1  
                break;
            case '/#Template':
                var dataTemplate = JSON.parse(getObjFormAjax(cJsonGetTemplate, ""));
                DataTemplateViewModel(dataTemplate);
                vmViewIndex.showTemplate(true);
                $('.panel-collapse').collapse('show');
                break;
            case '/#Report':
                var dataReport = JSON.parse(getObjFormAjax(cJsonGetReport, ""));
                DataReportViewModel(dataReport);
                vmViewIndex.showReport(true);
                break;
            case '/#Balance':
                var dataBalance = JSON.parse(getObjFormAjax(cJsonGetBalance, ""));
                if (dataBalance != null) DataBalanceViewModel(dataBalance);
                vmViewIndex.showBalance(true);
                break;
            case '/#Statement':
                var dataStatement = JSON.parse(getObjFormAjax(cJsonGetStatement, ""));
                DataStatementViewModel(dataStatement);
                vmViewIndex.showStatement(true);
                break;
                //Added by SMILEDINING-SA19-0011
            //Added by SMILEDINING-SA22-0013
            case '/#DeliveryBilling':
                //var dataDeliveryBilling = JSON.parse(getObjFormAjax(cJsonGetDeliveryBilling, ""));    //Modified and End by SMILEDINING-SA22-0013#4
                //Added by SMILEDINING-SA22-0013#4
                try {
                    var dataDeliveryBilling = JSON.parse(getObjFormAjax(cJsonGetDeliveryBilling, ""));
                } catch (err) {
                    swal('Oops...', cError_Fail_TimeOut, cSwal_Icon_Error);
                }
                //End Added by SMILEDINING-SA22-0013#4
                DataDeliveryBillingViewModel(dataDeliveryBilling);
                vmViewIndex.showDeliveryBilling(true);
                break;
            //End Added by SMILEDINING-SA22-0013
            case '/#E-GiftCard':
                vmViewIndex.showGiftCard(true);
                var jsonGiftCardData = getObjFormAjax(cJsonGetGiftCard, "");
                var dataGiftCard = JSON.parse(jsonGiftCardData);

                //var dataGlobalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, ""));      //Modified and End by SMILEDINING-SA20-0006
                var dataGlobalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileDining));     //Added and End by SMILEDINING-SA20-0006
                var currentDateTime = filterGlobalConfig(dataGlobalConfig, 'currentDateTime');
                //var formatDate = moment(currentDateTime, 'MM/DD/YYYY');
                //vmViewIndex.giftCard.currentDate(formatDate);

                var formatDate = moment(currentDateTime).format('MM/DD/YYYY');
                vmViewIndex.giftCard.giftCardShopDate(formatDate);

                //Added by SMILEDINING-SA21-0006
                var showPurchaseGiftCard = filterGlobalConfig(dataGlobalConfig, 'smiledining-show-giftcard');
                vmViewIndex.giftCard.showPurchaseGiftCard(showPurchaseGiftCard);
                vmViewIndex.giftCard.isShowPurchaseGiftCard(showPurchaseGiftCard == '1' ? true : false);
                //End Added by SMILEDINING-SA21-0006

                if (dataGiftCard.giftCardImageTable.length > 0 || dataGiftCard.giftCardValueTable.length > 0 || dataGiftCard.customDiscountTable.length > 0) {

                    DataGiftCardViewModel(dataGiftCard);
                    vmViewIndex.giftCard.guideLine(false);
                    $('#tabGiftCardImage').click();
                }
                else {
                    vmViewIndex.giftCard.guideLine(true);
                    $('#tabGiftCardGuide').click();
                }
                break;
            case '/#E-GiftCardView':
                //SMILEDINING-SA20-0006
                vmViewIndex.showGiftCardView(true);
                var jsonGiftCardView = getObjFormAjax(cJsonGetGiftCardView, "");
                var dataGiftCardView = JSON.parse(jsonGiftCardView);

                //var dataGlobalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, ""));      //Modified and End by SMILEDINING-SA20-0006
                var dataGlobalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileDining));	    //Added and End by SMILEDINING-SA20-0006
                var currentDateTime = filterGlobalConfig(dataGlobalConfig, 'currentDateTime');
                var formatDate = moment(currentDateTime).format('MM/DD/YYYY');
                vmViewIndex.giftCard.giftCardView.fromDate(formatDate);
                vmViewIndex.giftCard.giftCardView.endDate(formatDate);

                DataGiftCardViewViewModel(dataGiftCardView);
                break;
                //SMILEDINING-SA20-0006	
                //End Added by SMILEDINING-SA19-0011
            //Added by SMILEDINING-SA21-0063
            case '/#Marketing':
                var dataMarketing = JSON.parse(getObjFormAjax(cJsonGetMarketing, ""));
                DataMarketingViewModel(dataMarketing);
                $('#tabExportCustomer').click();
                vmViewIndex.showMarketing(true);
                break;
            //End Added by SMILEDINING-SA21-0063
            default:
        }
        vmViewIndex.showLoading(false);
    };

    function setDefaultMenu() {
        var self = vmViewIndex;
        self.showLiveOrder(false);
        self.showMenuSetUp(false);
        self.showConfigSetUp(false);
        self.showMySetting(false);
        self.showTemplate(false);
        self.showReport(false);
        self.showBalance(false);
        self.showStatement(false);
        self.showDeliveryBilling(false);    //Added and End by SMILEDINING-SA22-0013
        //Added by SMILEDINING-SA19-0011
        self.showGiftCard(false);
        self.showGiftCardView(false);
        //End Added by SMILEDINING-SA19-0011
        self.showMarketing(false) //Added and End by SMILEDINING-SA21-0063
        setScrollTop();
    };

    function setDefaultInitialMenu() {
        var self = this;
        self.showLogin = ko.observable(true);
        self.showMobile = ko.observable(false);
        self.showMenu = ko.observable(false);
        self.showLiveOrder = ko.observable(false);
        self.showMenuSetUp = ko.observable(false);
        self.showConfigSetUp = ko.observable(false);
        self.showMySetting = ko.observable(false);
        self.showTemplate = ko.observable(false);
        self.showReport = ko.observable(false);
        self.showBalance = ko.observable(false);
        self.showStatement = ko.observable(false);
        //Added by SMILEDINING-SA19-0011
        self.showGiftCard = ko.observable(false);
        self.showGiftCardView = ko.observable(false);
        //End Added by SMILEDINING-SA19-0011
        self.showMarketing = ko.observable(false); //Added and End by SMILEDINING-SA21-0063
    };

    function alertOnChangeSideBar(path) {
        var sideBarDelay = 0;
        if (vmViewIndex.configSetUp.chkDrag() == true && vmViewIndex.configSetUp.chkSave() == false && path != "/#ConfigSetup") {
            swal(setupAlert).then(function () {
                undoDraggingConfigSetup();
                vmViewIndex.showLoading(true);
                setTimeout(function () {
                    switchCaseSideBar(path);
                }, sideBarDelay);
            }, function (dismiss) {
                if (dismiss === 'cancel') {
                    if (vmViewIndex.configSetUp.chkDrag() == true) {
                        $("#ConfigSetupSideBar").click();
                    }
                };
            });
        } else if (vmViewIndex.menu.chkDrag() == true && vmViewIndex.menu.chkSave() == false && path != "/#MenuSetup") {
            swal(setupAlert).then(function () {
                undoMenuDragging();
                vmViewIndex.showLoading(true);
                setTimeout(function () {
                    switchCaseSideBar(path);
                }, sideBarDelay);
            }, function (dismiss) {
                if (dismiss === 'cancel') {
                    if (vmViewIndex.menu.chkDrag() == true) {
                        $("#MenuSetupSideBar").click();
                    }
                };
            });
        }
            //Added by SMILEDINING-SA19-0011
        else if (vmViewIndex.giftCard.addGiftCard.lockEdit() == true && path != "/#E-GiftCard") {

            swal(setupAlert).then(function () {
                vmViewIndex.showLoading(true);
                vmViewIndex.giftCard.addGiftCard.lockEdit(false);
                setTimeout(function () {
                    switchCaseSideBar(path);
                }, sideBarDelay);

            }, function (dismiss) {
                if (dismiss === 'cancel') {
                    if (vmViewIndex.giftCard.addGiftCard.lockEdit()) {
                        $("#GiftCardSideBar").click();
                    }
                };
            });
        }
            //End Added by SMILEDINING-SA19-0011        
        else {
            vmViewIndex.showLoading(true);
            setTimeout(function () {
                switchCaseSideBar(path);
            }, sideBarDelay);
        }
    };

    function setActiveLink(name) {
        var ul = $('ul');
        var path = name.substring(1);
        ul.children().removeClass('active');
        ul.find('a[href="' + path + '"]').parent().addClass('active');
    };

    $.fn.rotateY = function (deg) {
        this.css({ 'transform': 'rotateY(' + deg + 'deg)' });
        this.css({ '-ms-transform': 'rotateY(' + deg + 'deg)' });
        this.css({ '-moz-transform': 'rotateY(' + deg + 'deg)' });
        this.css({ '-o-transform': 'rotateY(' + deg + 'deg)' });
        this.css({ '-webkit-transform': 'rotateY(' + deg + 'deg)' });
        return this;
    };

    $("#accordionTemplateMain").on("click", ".link-zoom", function () {
        if ($(this).find('.arrowmaximize').hasClass('gb_hidden')) {
            $(this).find('.arrowmaximize').removeClass('gb_hidden');
            $(this).find('.arrowMinimize').addClass('gb_hidden');
        } else {
            $(this).find('.arrowmaximize').addClass('gb_hidden');
            $(this).find('.arrowMinimize').removeClass('gb_hidden');
        }
    });

    $("#accordionTemplateDetail").on("click", ".link-zoom", function () {
        if ($(this).find('.arrowmaximize').hasClass('gb_hidden')) {
            $(this).find('.arrowmaximize').removeClass('gb_hidden');
            $(this).find('.arrowMinimize').addClass('gb_hidden');
        } else {
            $(this).find('.arrowmaximize').addClass('gb_hidden');
            $(this).find('.arrowMinimize').removeClass('gb_hidden');
        }
    });

    function setUpKeepAlive() {
        var delay = (15) * 60 * 1000;
        setInterval(function () {
            getObjFormAjax(cJsonKeepSessionAlive, '')
        }, delay);
    };

    $(window).resize(function () {
        //Modified by SMILEDINING-SA20-0007
        //vmViewIndex.statement.groupOrder.chkWidth($(window).width());
        //if (vmViewIndex.statement.groupOrder.chkWidth() <= 414) {
        //    vmViewIndex.statement.groupOrder.setWidth('auto');
        //} else {
        //    vmViewIndex.statement.groupOrder.setWidth(360);
        //}
        //End Modified by SMILEDINING-SA20-0007

        setPositionShopStatus();    //Added and End by SMILEDINING-SA19-0021

        //Added by SMILEDINING-SA18-0039
        //if ($('.logo-mobile .navbar-brand p span').innerWidth() != 0 && $(window).width() < 570) {
        //    var navbarWidth = $('.nav-bar').outerWidth() - 92;
        //    var shopNameWidth = $('.logo-mobile .navbar-brand p span').innerWidth();
        //    if (shopNameWidth > navbarWidth)
        //        checkSizeShopNameWidth(0, 0, 0, true);
        //    else if (shopNameWidth + 10 < navbarWidth)
        //        checkSizeShopNameWidth(0, 0, 0, false);
        //}
        //End Added by SMILEDINING-SA18-0039
    });

    window.onbeforeunload = (function () {
        //Modified by SMILEDINING-SA19-0011
        //if (vmViewIndex.configSetUp.chkDrag() == true && vmViewIndex.configSetUp.chkSave() == false || vmViewIndex.menu.chkDrag() == true && vmViewIndex.menu.chkSave() == false) {
        //    return "Are you sure? If you leave before saving, your changes will be lost.";
        //}
        //End Modified by SMILEDINING-SA19-0011
        //Added by SMILEDINING-SA21-0014#1
        //Modified by WEB-SA22-0064
        //if (vmViewIndex.autoSyncProduct() && vmViewIndex.tabSyncProduct()) {
        //    vmViewIndex.showLoading(true);
        //    var objUrl = new ObjUrl(cJsonGetSyncProduct);
        //    var requestUrl = objUrl.getUrlFromJson();
        //    getJsonFromAjax(requestUrl, ajax_async, ajax_cache, ajax_type_post, '', 30000);
        //    vmViewIndex.showLoading(false);
        //}
        //End Modified by WEB-SA22-0064
        //End Added by SMILEDINING-SA21-0014#1
        //Added by WEB-SA23-0026
        //if (vmViewIndex.globalConfig.autoSyncProduct() && vmViewIndex.tabSyncProduct()) { //Modified and End by WEB-SA23-0026#1
        if (checkSyncProductAuto()) { //Added and End by WEB-SA23-0026#1
            vmViewIndex.showLoading(true);
            syncProductAuto(true);
        }
        //End Added by WEB-SA23-0026
        //Added by SMILEDINING-SA19-0011
        if (vmViewIndex.configSetUp.chkDrag() == true && vmViewIndex.configSetUp.chkSave() == false || vmViewIndex.menu.chkDrag() == true && vmViewIndex.menu.chkSave() == false || vmViewIndex.giftCard.addGiftCard.lockEdit() == true) {
            return cMessage_LeavePage;
        }
        //End Added by SMILEDINING-SA19-0011
    });

    // Required for drag and drop file access
    jQuery.event.props.push('dataTransfer');

    // IIFE to prevent globals
    (function () {
        var s;
        var fileImage = {

            settings: [],
            uploaded: [],

            init: function (settings) {
                fileImage.settings = settings;
                s = settings;
                fileImage.bindUIActions();
            },

            bindUIActions: function () {
                var timer;

                for (var i = 0; i < s.length; i++) {
                    s[i].each(function (index) {
                        $(this)
                          .data('width', $(this).data('base-width'))
                          .data('height', $(this).data('base-height'))
                          .data('zoom-factor', 0);
                        $(this).css({
                            'width': $(this).data('base-width'),
                            'height': $(this).data('base-height')
                        });

                    });

                    s[i].on('dragover', '.image-uploader', function () {
                        clearTimeout(timer);
                        fileImage.showDroppableArea($(this));
                        // Required for drop to work
                        return false;
                    });

                    s[i].on('dragleave', '.image-uploader', function () {
                        // Flicker protection
                        timer = setTimeout(function () {
                            fileImage.hideDroppableArea($(this));
                        }, 200);
                    });

                    s[i].on('drop', '.image-uploader', function (event) {
                        // Or else the browser will open the file
                        event.preventDefault();
                        $('.zoom', $(this)).show('fade');
                        //fileImage.handleDrop($(this), event.dataTransfer.files); //Modified and End by SMILEDINING-SA21-0075
                    });
                }

                $(document).on('click', '.zoom .plus', function () {
                    fileImage.zoom($(this).parent().parent(), 1);
                });

                $(document).on('click', '.zoom .minus', function () {
                    fileImage.zoom($(this).parent().parent(), -1);
                });

                $(document).on('click', '.zoom .close-uploader', function () {
                    fileImage.reset($(this).parent().parent());
                    $(this).parent().prev().val('');
                    fileImage.showDataInImage($(this).parent().parent());
                });
               
                $(document).on('change', '.display-uploader', function (event) {
                    if ($(this).val().length == 0) { return true; }
                    //fileImage.handleDrop($(this).parent(), event.target.files); //Modified and End by SMILEDINING-SA21-0075
                    //Added by SMILEDINING-SA21-0075#5
                    //if (event.currentTarget.className != "display-uploader") { //Modified and End by SMILEDINING-SA21-0075#6
                    if ($(this).parent().parent().attr("id") != "upload-cropImage") { //Added and End by SMILEDINING-SA21-0075#6
                        fileImage.handleDrop($(this).parent(), event.target.files);
                    }
                    //End Added by SMILEDINING-SA21-0075#5
                });

                $(document).on('click', '.image-uploader .image', function () {
                    var id = _.first($(this).parent().find('.display-uploader')).id;
                    $('#' + id, $(this).parent()).trigger('click');
                });

                $(document).on('mouseenter', '.image-uploader', function () {
                    if (typeof $(this).find('img').attr('src') !== 'undefined') {
                        if ($(this).find('img').attr('src').length > 0) {
                            $(this).find('.zoom').show('fade');
                        }
                    }
                });

                $(document).on('mouseleave', '.image-uploader', function () {
                    if (typeof $(this).find('img').attr('src') !== 'undefined') {
                        if ($(this).find('img').attr('src').length > 0) {
                            $(this).find('.zoom').hide();
                        }
                    }
                });
            },

            showDroppableArea: function (elt) {
                elt.addClass('droppable');
            },

            hideDroppableArea: function (elt) {
                elt.removeClass('droppable');
            },

            handleDrop: function (elt, files) {
                fileImage.hideDroppableArea(elt);

                // Multiple files can be dropped. Lets only deal with the "first" one.
                var file = _.first(files);

                if (file.type.match('image.*')) {
                    fileImage.handleImage(elt, file);
                } else {
                    fileImage.reset($(elt));
                    fileImage.showDataInImage($(elt));
                    alert('This file is not an image.');
                }

            },

            handleImage: function (elt, file) {
                fileImage.resizeImage(elt, file, elt.data('base-width'), elt.data('base-height'), function (data, width, height) {
                    fileImage.placeImage(elt, data);
                    var pos = $(elt).position();
                    $('img', elt)
                        .css({
                            'left': elt.data('pos-x'),
                            'top': elt.data('pos-y'),
                            'cursor': 'pointer',
                            'width': width,
                        });
                    fileImage.hideDataInImage(elt);
                    fileImage.uploaded[elt] = file;
                });
            },

            hideDataInImage: function (ele) {
                $(ele).find('small').hide();
                $(ele).find('i').hide();
                $(ele).find('br').hide();
            },

            showDataInImage: function (ele) {
                $(ele).find('small').show();
                $(ele).find('i').show();
                $(ele).find('br').show();
            },

            resizeImage: function (elt, file, width, height, callback) {
                var fileTracker = new FileReader;
                fileTracker.onload = function () {
                    imageResize(
                     elt,
                     this.result,
                     width,
                     height,
                     callback
                   );
                }
                fileTracker.readAsDataURL(file);

                fileTracker.onabort = function () {
                    alert('The upload was aborted.');
                }
                fileTracker.onerror = function () {
                    alert('An error occured while reading the file.');
                }

            },

            placeImage: function (elt, data) {
                elt.addClass('filled');
                $('img', elt).attr('src', data);
            },

            reset: function (elt) {
                $('img', elt)
                    .attr('src', '')
                    .css({ position: '', top: '', left: '', width: '' });
                $(elt)
                  .data('width', $(elt).data('base-width'))
                  .data('height', $(elt).data('base-height'))
                  .data('zoom-factor', 0)
                  .removeClass('filled');
                fileImage.uploaded[elt] = null;
                $('.zoom', elt).hide();
            },

            zoom: function (elt, factor) {
                var currentWidth, currentHeight, originalWidth, originalHeight, baseWidth, baseHeight, currentZoom, posx, posy;
                currentWidth = elt.data('width');
                currentHeight = elt.data('height');
                originalWidth = elt.data('original-width');
                originalHeight = elt.data('original-height');
                baseWidth = elt.data('base-width');
                baseHeight = elt.data('base-height');
                currentZoom = elt.data('zoom-factor');

                /* don't zoom if natural resolution */
                if ((currentWidth >= originalWidth && currentHeight >= originalHeight && factor > 0) || currentZoom + factor < 0)
                    return;

                /* save relative pos */
                posx = (-$('img', elt).position().left + (baseWidth / 2)) / currentWidth;
                posy = (-$('img', elt).position().top + (baseHeight / 2)) / currentHeight;

                /* update zoom and dimensions */
                currentZoom += factor;
                $(elt).data('zoom-factor', currentZoom);

                var imgRatio = originalWidth / originalHeight;
                var currentWidth = imgRatio <= 1 ? baseWidth : Math.round(originalWidth * baseHeight / originalHeight);
                var currentHeight = imgRatio > 1 ? baseHeight : Math.round(originalHeight * baseWidth / originalWidth);

                currentWidth = currentWidth * (1 + currentZoom * 0.1);
                currentHeight = currentHeight * (1 + currentZoom * 0.1);

                /* save new relative pos */
                posx = -(Math.round(posx * currentWidth) - (baseWidth / 2));
                posy = -(Math.round(posy * currentHeight) - (baseHeight / 2));
                $(elt).data('pos-x', posx);
                $(elt).data('pos-y', posy);
                $(elt).data('width', currentWidth);
                $(elt).data('height', currentHeight);

                var file = fileImage.uploaded[elt];
                fileImage.handleImage(elt, file);
            }
        }

        fileImage.init([$(document)]);
    })();
    //Added by SMILEDINING-SA21-0015
    /*Fix stlyle of modal on modal close*/
    //$('#modalSetUpShopClose').on('hidden.bs.modal', function () {
    //    $('body').addClass('modal-open').css({ 'padding-right': '17px' });
    //});
    //$('#modalSetUpHoliday').on('hidden.bs.modal', function () {
    //    $('body').addClass('modal-open').css({ 'padding-right': '17px' });
    //});
    //$('#modalSetUpAutoCharge').on('hidden.bs.modal', function () {
    //    $('body').addClass('modal-open').css({ 'padding-right': '17px' });
    //});
    //$('#modalSetUpDiscount').on('hidden.bs.modal', function () {
    //    $('body').addClass('modal-open').css({ 'padding-right': '17px' });
    //});
    //$('#modalSetupCouponDelivery').on('hidden.bs.modal', function () {
    //    $('body').addClass('modal-open').css({ 'padding-right': '17px' });
    //});
    //$('#modalSetUpDiscountOneTimeUse').on('hidden.bs.modal', function () {
    //    $('body').addClass('modal-open').css({ 'padding-right': '17px' });
    //});
    //$('#modalGroupFreeFoodSetup').on('hidden.bs.modal', function () {
    //    $('body').addClass('modal-open').css({ 'padding-right': '17px' });
    //});
    //$('#modalMainPriceSetup').on('hidden.bs.modal', function () {
    //    $('body').addClass('modal-open').css({ 'padding-right': '17px' });
    //});
    //$('#modalConditionSetup').on('hidden.bs.modal', function () {
    //    $('body').addClass('modal-open').css({ 'padding-right': '17px' });
    //});
    //$('#modalGroupMainFoodSetup').on('hidden.bs.modal', function () {
    //    $('body').addClass('modal-open').css({ 'padding-right': '17px' });
    //});
    //End Added by SMILEDINING-SA21-0015

    closeModalWhenDupplicate();     //Added and End by SMILEDINING-SA21-0015

    //$('#modalSetUpFoodImage').on('shown.bs.modal', function () {
    //    //debugger;
    //    //var desktopMenu = vmViewIndex.menu.dataSetupFoodModal.imageDesktopMenu();
    //    //var desktopFood = vmViewIndex.menu.dataSetupFoodModal.imageDesktopFood();
    //    //var mobileMenu = vmViewIndex.menu.dataSetupFoodModal.imageMobileMenu();
    //    //var mobileFood = vmViewIndex.menu.dataSetupFoodModal.imageMobileFood();

    //    //$('#modalSetUpFoodImage .image.image-desktop-menu').find('img').attr('src', desktopFood);
    //    //$('#modalSetUpFoodImage .image.image-desktop-food').find('img').attr('src', desktopMenu);
    //    //$('#modalSetUpFoodImage .image.image-mobile-menu').find('img').attr('src', mobileFood);
    //    //$('#modalSetUpFoodImage .image.image-mobile-food').find('img').attr('src', mobileMenu);

    //    //$('#modalSetUpFoodImage .image.image-desktop-menu').find('img').attr('src', desktopMenu);
    //    //$('#modalSetUpFoodImage .image.image-desktop-food').find('img').attr('src', desktopFood);
    //    //$('#modalSetUpFoodImage .image.image-mobile-menu').find('img').attr('src', mobileMenu);
    //    debugger;
    //    $('#modalSetUpFoodImage .image.image-mobile-food').find('img').attr('src', 'DVIMAGE/8907303/DESKTOP/MENU/7ba64e2e-668e-42eb-9d1a-081da4c5c4bb.jpg');
    //})
});
