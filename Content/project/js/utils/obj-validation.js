/*
    SMILEDINING-SA18-0038      11/20/2018      Customize    1. Edit get data timeZone (Add one timezone Mountain Time)
                                                            2. Fixbug Uploadimage don't choose path return error
                                                            3. Fixbug Timezone don't choose return error 
    SMILEDINING-SA19-0004      03/13/2019      Customize    1. Add new tab menu 'Announcement' to 'Menu Setting' of SmileOwner
                                                            2. Move 'Broad Text' of Menu Setting to 'Announcement'
                                                            3. Create ''Announcement' module that include Header, Description, Badge.
                                                            4. Add 'broad-active'  status for enable/disable on SmileDining (1=enable, 0=disable)
                                                            5. Announcement must collaborative with active and close time of setup on SmileOwner.
                                                            6. Upload/Delete AnnounceImage
                                                            7. Delete Shop Logo
    SMILEDINING-SA19-0005      03/25/2019      Customize    1. Gennerate sql script for create table 'tbdeliveryfreetime'
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
    SMILEDINING-SA19-0017      08/15/2019      Customize    1. Create Shop Status
                                                            2. Create Shop Close StartDate and Shop Close EndDate
                                                            3. Create Shop Close Reason
                                                            4. Create Shipping Type
                                                            5. Fix 'Active button' of Announcement Tab in IE
    SMILEDINING-SA19-0011      09/03/2019      Customize    1. E-Gift Card.
    SMILEDINING-SA20-0006      06/23/2020      Customize    1. Add checkbox Smile Contactless Dining on Menu Setup and update ProductID in database when update,add,copy food 
	SMILEDINING-SA20-0015      03/08/2020      Customize    1. New feature Curbside Pick up Option for Smile dining.
                                                            2. Setting Open/Close for Curbside Pick up and setting instruction.
    SMILEDINING-SA20-0018      01/09/2020      Customize    1. Edit Config Setup for Choice Group,Choice Option,Choice Modify and Add Gratuity Charge.
                                                            2. Add Setting Gratuity Charge to My Setting.
    SMILEDINING-SA20-0011      23/07/2020      Customize    1. New feature auto apply discount SmileDining.
    SMILEDINING-SA20-0016      21/10/2020      Customize    1. Promotion free food.
    SMILEDINING-SA20-0031      02/12/2020      Customize    1. Adjust shop close period date and time.
    SMILEDINING-SA20-0031#3    04/01/2021      Customize    1. Modified shopclose model.
    SMILEDINING-SA20-0043#2    06/01/2021      Customize    1. Add validate before save mapZoneMile.
    SMILEDINING-SA21-0007      02/02/2021      Customize    1. Apple Pay and Set up Unit Of Work  and Shop Close API
    SMILEDINING-SA20-0048      28/12/2020      Customize    1. Discount code one time use.   
    SMILEDINING-SA21-0015      09/03/2021      Customize    1. Fix bug validate setting promotion price.
                                                            2. Fix bug smileDining disable button add to cart when invalid time.
                                                            3. Fix bug mask input phone number don't working in mobile.
                                                            4. Fix bug button pickup/delivery invalid color in mobile.
                                                            5. Fix bug selectBox in Config setup Choice Option and Choice Modify don't close when scroll window after open selectBox.
                                                            6. Fix bug scroll window when open or close modal.
                                                            7. Edit globalconfigservice.cs and globalconfigcontactlessservice.cs save value.
                                                            8. Edit view of setupGiftCard webOwner and Fix bug of giftcard. 
    SMILEDINING-SA20-0048#2    01/04/2021      Customize    1. Fix bug download excel file DiscountOneTimeUse. 
    SMILEDINING-SA21-0021      11/06/2021      Customize    1. Setting icon image for show in smileDining.
    SMILEDINING-SA21-0021#6    12/07/2021      Customize    1. Fixed bug Config setup icon error message and Menu setup icon delete all icon.
    SMILEDINING-SA21-0035      02/08/2021      Customize    1. Add upload background image in webOwner only Smile Contactless Dining. (Smile On Table P1)
                                                            2. Create new Views following UI frame 1 and frame 2. (Smile On Table P1)
    SMILEDINING-SA21-0063#4    26/10/2021      Customize    1. Add download export customer excel file and Remove library ExcelJs,FileSaver.
    SMILEDINING-SA22-0020      14/06/2022      Customize    1. Add new charge name 'Payment Fee' apply to order online.
    WEB-SA22-0040              26/09/2022      Customize    1. New feature minimum order delivery charge.
    WEB-SA22-0062              29/11/2022      Customize    1. Add PromotionName, ShippingType, TotalUse in WebOwner
    WEB-SA23-0016              28/02/2023      Customize    1. Add setting mapzone to minimum order delivery charge in webOwner and webDining.
    WEB-SA23-0041              27/07/2023      Customize    1. New feature member discount on webDining, webOwner.
    WEB-SA24-0013#2            11/04/2024      Customize    1. Fix bug invalid date and minimum order and maximum order of discount on webOwner.
    WEB-SA24-0012              22/04/2024      Customize    1. New requriement - Add setting promotion "Day Of Week" on webOwner, webDining, webOnTable.
                                                            2. Fix bug promotion shippping type and maximum uses on webOwner, webDining, webOnTable.
                                                            3. Fix bug clear discount code when don't use on webDining.
    WEB-SA24-0012#1            03/05/2024      Customize    1. Fix bug promotion condition on webOwner, webDining, webOnTable.
*/
/*
 * obj ValidateForm
 */

var ObjValidateForm = function (frmName, parent) {
    this.id = frmName;
    this.parent = parent;
    this.error = new Array();
    this.showAlert = true;
};

ObjValidateForm.prototype.verifyData = function () {
    var tag, id;
    switch (this.id) {
        case cfrmLogIn:

            tag = this.parent;
            if (tag.find(cfrmLogIn_Email) === undefined || tag.find(cfrmLogIn_Email).val().length == 0) {
                this.error.push(includeNewLine(cError_Email_Empty));
                tag.find(cfrmLogIn_Email).addClass(cCssInputValidateError);
            }

            if (tag.find(cfrmLogIn_Password) === undefined || tag.find(cfrmLogIn_Password).val().length == 0) {
                this.error.push(includeNewLine(cError_Password_Empty));
                tag.find(cfrmLogIn_Password).addClass(cCssInputValidateError);
            } else {
                if (tag.find(cfrmLogIn_Password).val().length < 6) {
                    this.error.push(includeNewLine(cError_Password_Length));
                    tag.find(cfrmLogIn_Password).addClass(cCssInputValidateError);
                }
            }

            if (this.error.length > 0) {
                multiLine(tag.find('.panel-messsage-error .field-validation-error span'), this.error);
                tag.find('.panel-messsage-error').show();
            }

            break;
        case cfrmForgotPassword:
            break;
        case cfrmResetPassword:
            break;
        case cfrmLogOff:
            this.showAlert = false;
            break;
        case cfrmFoodSetSetup:
            tag = this.parent;
            if (tag.find(cfrmFoodSetSetUp_FoodSetName) === undefined || tag.find(cfrmFoodSetSetUp_FoodSetName).val().length == 0) {
                this.error.push(includeNewLine(cError_FoodSetName_Empty));
            }
            break;
        case cfrmFoodCategorySetup:
            tag = this.parent;
            if (tag.find(cfrmFoodCategorySetUp_FoodCategoryName) === undefined || tag.find(cfrmFoodCategorySetUp_FoodCategoryName).val().length == 0) {
                this.error.push(includeNewLine(cError_FoodCategoryName_Empty));
            }
            break;
        case cfrmFoodSetup:
            tag = this.parent;
            if (tag.find(cfrmFoodSetUp_FoodName) === undefined || tag.find(cfrmFoodSetUp_FoodName).val().length == 0) {
                this.error.push(includeNewLine(cError_FoodName_Empty));
            }
            if (tag.find(cfrmFoodSetUp_RevenueClassId) === undefined || tag.find(cfrmFoodSetUp_RevenueClassId).val().length == 0) {
                this.error.push(includeNewLine(cError_RevenueClassId_Empty));
            }
            //Added by SMILEDINING-SA20-0006
            if (tag.find(cfrmFoodSetUp_ProductId).val() != undefined) {
                if (tag.find(cfrmFoodSetUp_ProductId).val().length == 0) {
                    this.error.push(includeNewLine(cError_Product_Empty));
                }
            }
            //if (tag.find(cfrmFoodSetUp_ProductId) === undefined || tag.find(cfrmFoodSetUp_ProductId).val().length == 0) {
            //    this.error.push(includeNewLine(cError_Product_Empty));
            //}
            //End Added by SMILEDINING-SA20-0006
            break;
        case cfrmChoiceOptionSetUp:
            tag = this.parent;
            if (tag.find(cfrmChoiceOptionSetUp_ChoiceOptionName) === undefined || tag.find(cfrmChoiceOptionSetUp_ChoiceOptionName).val().length == 0) {
                this.error.push(includeNewLine(cError_ChoiceOptionName_Empty));
            }
            break;
        case cfrmChoiceSetUp:
            tag = this.parent;
            if (tag.find(cfrmChoiceSetUp_ChoiceName) === undefined || tag.find(cfrmChoiceSetUp_ChoiceName).val().length == 0) {
                this.error.push(includeNewLine(cError_ChoiceName_Empty));
            }
            break;
        //Added by SMILEDINING-SA20-0018
        case cfrmChoiceModifySetUp:
            tag = this.parent;
            if (tag.find(cfrmChoiceSetUp_ChoiceName) === undefined || tag.find(cfrmChoiceSetUp_ChoiceName).val().length == 0) {
                this.error.push(includeNewLine(cError_ChoiceName_Empty));
            }
            break;
        case cfrmGraguityChargeSetup:
            tag = this.parent;
            if (tag.find(cfrmGraguityChargeSetup_GraguityName) === undefined || tag.find(cfrmGraguityChargeSetup_GraguityName).val().length == 0) {
                this.error.push(includeNewLine(cError_GraguityName_Empty));
            }
            break;
        case cfrmFoodPrefix:
            tag = this.parent;
            if (tag.find(cfrmFoodPrefixSetUp_PrefixName) === undefined || tag.find(cfrmFoodPrefixSetUp_PrefixName).val().length == 0) {
                this.error.push(includeNewLine(cError_PrefixName_Empty));
            }
            break;
        case cfrmGraguityCharge:
            tag = this.parent;
            if (tag.find(cfrmGraguityCharge_PartySize) === undefined || tag.find(cfrmGraguityCharge_PartySize).val().length == 0) {
                this.error.push(includeNewLine(cError_GraguityPartySize_Empty));
            }
            if (parseFloat(tag.find(cfrmGraguityCharge_PartySize).val()) < 1) {
                this.error.push(includeNewLine(cError_GraguityPartySize_LessThan));
            }
            break;
        //End Added by SMILEDINING-SA20-0018
        case cfrmTaxRateSetUp:
            tag = this.parent;
            if (tag.find(cfrmTaxRateSetUp_TaxRateName) === undefined || tag.find(cfrmTaxRateSetUp_TaxRateName).val().length == 0) {
                this.error.push(includeNewLine(cError_TaxRateName_Empty));
            }
            break;
        case cfrmRevenueClassSetUp:
            tag = this.parent;
            if (tag.find(cfrmRevenueClassSetUp_RevenueClassName) === undefined || tag.find(cfrmRevenueClassSetUp_RevenueClassName).val().length == 0) {
                this.error.push(includeNewLine(cError_RevenueClassName_Empty));
            }
            break;
        //Added by SMILEDINING-SA21-0021
        case cfrmIconSetup:
            tag = this.parent;
            if (tag.find(cfrmIconSetUp_IconName) === undefined || tag.find(cfrmIconSetUp_IconName).val().length == 0) {
                //this.error.push(includeNewLine(cError_RevenueClassName_Empty));   //Modified and End by SMILEDINING-SA21-0021#6
                this.error.push(includeNewLine(cError_IconName_Empty)); //Added and End by SMILEDINING-SA21-0021#6
            }
            break;
        //End Added by SMILEDINING-SA21-0021
        case cfrmSearchReport:
            tag = this.parent;
            if (moment(tag.find(cfrmReport_FromDate).val()) > moment(tag.find(cfrmReport_EndDate).val())) {
                this.error.push(includeNewLine(cError_Date));
            }
            if (tag.find(cfrmReport_ShowCompare).val() == "true") {
                if (moment(tag.find(cfrmReport_FromDateCompare).val()) > moment(tag.find(cfrmReport_EndDateCompare).val())) {
                    this.error.push(includeNewLine(cError_DateCompare));
                }
            }
            break;
        case cfrmSearchBalance:
            tag = this.parent;
            if (moment(tag.find(cfrmBalance_FromDate).val()) > moment(tag.find(cfrmBalance_EndDate).val())) {
                this.error.push(includeNewLine(cError_Date));
            }
            break;
        case cfrmUpdateRestaurant:
            tag = this.parent;
            if (tag.find(cfrmEditRestaurant_ShopName) === undefined || tag.find(cfrmEditRestaurant_ShopName).val().length == 0)
                this.error.push(includeNewLine(cError_ShopName_Empty));

            if (tag.find(cfrmEditRestaurant_ShopPhone) === undefined || tag.find(cfrmEditRestaurant_ShopPhone).val().length == 0)
                this.error.push(includeNewLine(cError_ShopPhone_Empty));

            if (tag.find(cfrmEditRestaurant_ShopZipCode) === undefined || tag.find(cfrmEditRestaurant_ShopZipCode).val().length == 0)
                this.error.push(includeNewLine(cError_ShopPostal_Empty));

            if (tag.find(cfrmEditRestaurant_ShopTimeZoneCode) === undefined || tag.find(cfrmEditRestaurant_ShopTimeZoneCode).val().length == 0)
                this.error.push(includeNewLine(cError_ShopTimeZone_Empty));
            //Modified by SMILEDINING-SA20-0031
            ////Added by SMILEDINING-SA19-0017
            //if (tag.find(cfrmShopCloseStartDate).val().length == 0 && tag.find(cfrmShopCloseEndDate).val().length != 0)
            //    this.error.push(includeNewLine(cError_ShopCloseDate_NotEqual));
            //else if (tag.find(cfrmShopCloseStartDate).val().length != 0 && tag.find(cfrmShopCloseEndDate).val().length == 0)
            //    this.error.push(includeNewLine(cError_ShopCloseDate_NotEqual));
            //if (moment(tag.find(cfrmShopCloseStartDate).val()).isAfter(tag.find(cfrmShopCloseEndDate).val()))
            //    this.error.push(includeNewLine(cError_ShopCloseDate_Error));
            ////End Added by SMILEDINING-SA19-0017
            //End Modified by SMILEDINING-SA20-0031
            break;
        case cfrmDiscount:
            tag = this.parent;
            if (tag.find(cfrmDiscount_DiscountName) === undefined || tag.find(cfrmDiscount_DiscountName).val().length == 0)
                this.error.push(includeNewLine(cError_DiscountName_Empty));
            //Added by WEB-SA24-0013#2
            if (Number(tag.find(cfrmDiscount_TermsAmountMax).val()) > 0 && Number(tag.find(cfrmDiscount_TermsAmountMin).val()) >= Number(tag.find(cfrmDiscount_TermsAmountMax).val()))
                this.error.push(includeNewLine(cError_MinimumOrder_MaxLessThanMin));
            if (moment(tag.find(cfrmDiscount_StartDate).val()).isAfter(moment(tag.find(cfrmDiscount_EndDate).val())))
                this.error.push(includeNewLine(cError_Discount_Date_Invalid));
            //End Added by WEB-SA24-0013#2

            //Modified by SMILEDINING-SA20-0011
            //if (tag.find(cfrmDiscount_DiscountCouponCode) === undefined || tag.find(cfrmDiscount_DiscountCouponCode).val().length == 0)
            //    this.error.push(includeNewLine(cError_DiscountCouponCode_Empty));
            //End Modified by SMILEDINING-SA20-0011

            break;
        //Added by WEB-SA23-0041
        case cfrmMemberDiscount:
            tag = this.parent;
            var status = $(document.activeElement).val();
            if (status == statusAdd) {
                if (tag.find(cfrmMemberDiscount_DiscountName) === undefined || tag.find(cfrmMemberDiscount_DiscountName).val().length == 0)
                    this.error.push(includeNewLine(cError_DiscountName_Empty));
                if (tag.find(cfrmMemberDiscount_IsCouponAmtOff).val() == 'true' && Number(tag.find(cfrmMemberDiscount_CouponAmountOff).val()) <= 0)
                    this.error.push(includeNewLine(cError_DiscountCouponAmountOff_Empty));
                if (tag.find(cfrmMemberDiscount_IsCouponPercentOff).val() == 'true' && Number(tag.find(cfrmMemberDiscount_CouponPercentOff).val()) <= 0)
                    this.error.push(includeNewLine(cError_DiscountCouponPercentOff_Empty));
                if (Number(tag.find(cfrmMemberDiscount_TermsAmountMax).val()) > 0 && Number(tag.find(cfrmMemberDiscount_TermsAmountMin).val()) >= Number(tag.find(cfrmMemberDiscount_TermsAmountMax).val()))
                    this.error.push(includeNewLine(cError_MinimumOrder_MaxLessThanMin));
                //Added by WEB-SA24-0013#2
                if (moment(tag.find(cfrmMemberDiscount_StartDate).val()).isAfter(moment(tag.find(cfrmMemberDiscount_EndDate).val())))
                    this.error.push(includeNewLine(cError_Discount_Date_Invalid));
                //End Added by WEB-SA24-0013#2
            }
            break;
        //End Added by WEB-SA23-0041
        case cfrmAutoCharge:
            tag = this.parent;
            if (tag.find(cfrmAutoCharge_AutoChargeName) === undefined || tag.find(cfrmAutoCharge_AutoChargeName).val().length == 0)
                this.error.push(includeNewLine(cError_AutoChargeName_Empty));
            //Added by SMILEDINING-SA20-0006
            if (tag.find(cfrmAutoCharge_IsPickUp).val() == 'false' && tag.find(cfrmAutoCharge_IsDelivery).val() == 'false')
                this.error.push(includeNewLine(cError_AutoChargeShippingType_Empty));
            //End Added by SMILEDINING-SA20-0006
            break;
        case cfrmHoliday:
            tag = this.parent;
            if (tag.find(cfrmHoliday_Description) === undefined || tag.find(cfrmHoliday_Description).val().length == 0)
                this.error.push(includeNewLine(cError_HolidayDesc_Empty));
            break;
        //Added By SMILEDINING-SA19-0008
        case cfrmCouponDelivery:
            tag = this.parent;
            if (tag.find(cfrmCouponDelivery_CounponName) === undefined || tag.find(cfrmCouponDelivery_CounponName).val().length == 0) {
                this.error.push(includeNewLine(cError_CouponDelivery_Name));
            }
            if (tag.find(cfrmCouponDelivery_CounponCode) === undefined || tag.find(cfrmCouponDelivery_CounponCode).val().length == 0) {
                this.error.push(includeNewLine(cError_CouponDelivery_Code));
            }
            if (tag.find(cfrmisTotalCouponDelivery).val() == "true" && !_.inRange(tag.find(cfrmTotalCouponDelivery).val(), 0, 99999)) {
                this.error.push(includeNewLine(cError_TotalDeliveryCoupon));
            }
            if (tag.find(cfrmisMinimumCouponDelivery).val() == "true" && !_.inRange(tag.find(cfrmMinimumOrderCouponDelivery).val(), 0.00, 99999.99)) {
                this.error.push(includeNewLine(cError_MinimumOrderDeliveryCoupon));
            }
            if ((tag.find(cfrmisFreeCouponDelivery) === undefined || tag.find(cfrmisFreeCouponDelivery).val() == "false")
                && (tag.find(cfrmisAmountCouponDelivery) === undefined || tag.find(cfrmisAmountCouponDelivery).val() == "false")
                && (tag.find(cfrmisPercentCouponDelivery) === undefined || tag.find(cfrmisPercentCouponDelivery).val() == "false")) {
                this.error.push(includeNewLine(cError_DeliveryCharge));
            }
            if (tag.find(cfrmisAmountCouponDelivery).val() == "true" && !_.inRange(tag.find(cfrmAmountOffCouponDelivery).val(), 0.00, 99999.99)) {
                this.error.push(includeNewLine(cError_AmountOffDeliveryCoupon));
            }
            if (tag.find(cfrmisPercentCouponDelivery).val() == "true" && !_.inRange(tag.find(cfrmPercentOffCouponDelivery).val(), 0.00, 100.00)) {
                this.error.push(includeNewLine(cError_PercentOffDeliveryCoupon));
            }
            //Added by WEB-SA24-0013#2
            if (moment(tag.find(cfrmCouponDelivery_StartDate).val()).isAfter(moment(tag.find(cfrmCouponDelivery_EndDate).val()))) {
                this.error.push(includeNewLine(cError_Discount_Date_Invalid));
            }
            //End Added by WEB-SA24-0013#2
            break;
        //End Added By SMILEDINING-SA19-0008
        //Added by SMILEDINING-SA18-0038
        case cfrmUploadImageSetting:
            tag = this.parent;
            //if (tag.find(cfrmUploadImagesPath) === undefined || tag.find(cfrmUploadImagesPath).val().length == 0)     //Modified and End by SMILEDINING-SA19-0004
            if ($(cfrmUploadImagesPath).html().length <= 0)     //Added and End by SMILEDINING-SA19-0004
                this.error.push(includeNewLine(cError_ImagesPath_Empty));
            break;
        //End Added by SMILEDINING-SA18-0038
        //Added by SMILEDINING-SA21-0035
        case cfrmUploadImageBackgroundSetting:
            tag = this.parent;
            if ($(cfrmUploadImagesBackgroundPath).html().length <= 0)
                this.error.push(includeNewLine(cError_ImagesPath_Empty));
            break;
        //End Added by SMILEDINING-SA21-0035
        //Added by SMILEDINING-SA19-0004
        case cfrmUploadAnnounceImage:
            tag = this.parent;
            if ($('#showUploadAnnounceImage').html().length <= 0) {
                this.error.push(includeNewLine(cError_ImagesPath_Empty));
            }
            break;
        // End Added by SMILEDINING-SA19-0004
        //Added by SMILEDINING-SA21-0007
        case cfrmUploadAnnounceCustomImage:
            tag = this.parent;
            if ($('#showUploadAnnounceCustomImage').html().length <= 0) {
                this.error.push(includeNewLine(cError_ImagesPath_Empty));
            }
            break;
        //End Added by SMILEDINING-SA21-0007
        //Added by SMILEDINING-SA19-0005
        case cfrmUpdateDeliveryFreeTime:
            tag = this.parent;
            break;
        //End Added by SMILEDINING-SA19-0005
        //Added by SMILEDINING-SA19-0011
        //case cfrmEditGiftCardImage:
        //    tag = this.parent;
        //    break;
        //Added by SMILEDINING-SA20-0043#2
        case cfrmUpdateMapZoneMile:
            tag = this.parent;
            //Zone1
            if (tag.find(cfrmUpdateMapZoneMile_StartMile) === undefined || tag.find(cfrmUpdateMapZoneMile_StartMile).val().length == 0)
                this.error.push(includeNewLine(cError_DeliveryZone1_StartMile));
            if (tag.find(cfrmUpdateMapZoneMile_EndMile) === undefined || tag.find(cfrmUpdateMapZoneMile_EndMile).val().length == 0)
                this.error.push(includeNewLine(cError_DeliveryZone1_EndMile));
            if (tag.find(cfrmUpdateMapZoneMile_Price) === undefined || tag.find(cfrmUpdateMapZoneMile_Price).val().length == 0)
                this.error.push(includeNewLine(cError_DeliveryZone1_Price));
            //Zone2
            if (tag.find(cfrmUpdateMapZoneMile_StartMile2) === undefined || tag.find(cfrmUpdateMapZoneMile_StartMile2).val().length == 0)
                this.error.push(includeNewLine(cError_DeliveryZone2_StartMile));
            if (tag.find(cfrmUpdateMapZoneMile_EndMile2) === undefined || tag.find(cfrmUpdateMapZoneMile_EndMile2).val().length == 0)
                this.error.push(includeNewLine(cError_DeliveryZone2_EndMile));
            if (tag.find(cfrmUpdateMapZoneMile_Price2) === undefined || tag.find(cfrmUpdateMapZoneMile_Price2).val().length == 0)
                this.error.push(includeNewLine(cError_DeliveryZone2_Price));
            //Zone3
            if (tag.find(cfrmUpdateMapZoneMile_StartMile3) === undefined || tag.find(cfrmUpdateMapZoneMile_StartMile3).val().length == 0)
                this.error.push(includeNewLine(cError_DeliveryZone3_StartMile));
            if (tag.find(cfrmUpdateMapZoneMile_EndMile3) === undefined || tag.find(cfrmUpdateMapZoneMile_EndMile3).val().length == 0)
                this.error.push(includeNewLine(cError_DeliveryZone3_EndMile));
            if (tag.find(cfrmUpdateMapZoneMile_Price3) === undefined || tag.find(cfrmUpdateMapZoneMile_Price3).val().length == 0)
                this.error.push(includeNewLine(cError_DeliveryZone3_Price));

            break;
        //End Added by SMILEDINING-SA20-0043#2
        //Added by WEB-SA22-0040
        case cfrmUpdateMinimumOrderDeliveryCharge:
            tag = this.parent;
            var length = vmViewIndex.allMapZone.minimumOrderDeliveryChargeList().length;
            var index = '1';

            if (length > 0) {
                var tagMinimumOrder_1 = cfrmTxtMinimumOrder_MinimumOrder + index;
                var tagMaximumOrder_1 = cfrmTxtMinimumOrder_MaximumOrder + index;
                var tagDeliveryChargeAmount_1 = cfrmTxtMinimumOrder_DeliveryChargeAmount + index;

                if (tag.find(tagMinimumOrder_1) === undefined || tag.find(tagMinimumOrder_1).val().length == 0)
                    this.error.push(includeNewLine(cError_MinimumOrder_MinimumOrder + ' #' + index));
                if (tag.find(tagMaximumOrder_1) === undefined || tag.find(tagMaximumOrder_1).val().length == 0)
                    this.error.push(includeNewLine(cError_MinimumOrder_MaximumOrder + ' #' + index));
                if (tag.find(tagDeliveryChargeAmount_1) === undefined || tag.find(tagDeliveryChargeAmount_1).val().length == 0)
                    this.error.push(includeNewLine(cError_MinimumOrder_DeliveryChargeAmount + ' #' + index));
                if (Number(tag.find(tagMinimumOrder_1).val()) >= Number(tag.find(tagMaximumOrder_1).val()) && vmViewIndex.allMapZone.minimumOrderDeliveryChargeList()[0].active()) {
                    this.error.push(includeNewLine(cError_MinimumOrder_MaxLessThanMin + ' #' + index));
                }
                //Added by WEB-SA23-0016
                if (isEmpty(vmViewIndex.allMapZone.minimumOrderDeliveryChargeList()[0].mapZone())) {
                    this.error.push(includeNewLine(cError_MinimumOrder_DeliveryZone + ' #' + index));
                }
                //End Added by WEB-SA23-0016
            }
            if (length > 1) {
                index = '2';
                var tagMinimumOrder_2 = cfrmTxtMinimumOrder_MinimumOrder + index;
                var tagMaximumOrder_2 = cfrmTxtMinimumOrder_MaximumOrder + index;
                var tagDeliveryChargeAmount_2 = cfrmTxtMinimumOrder_DeliveryChargeAmount + index;

                if (tag.find(tagMinimumOrder_2) === undefined || tag.find(tagMinimumOrder_2).val().length == 0)
                    this.error.push(includeNewLine(cError_MinimumOrder_MinimumOrder + ' #' + index));
                if (tag.find(tagMaximumOrder_2) === undefined || tag.find(tagMaximumOrder_2).val().length == 0)
                    this.error.push(includeNewLine(cError_MinimumOrder_MaximumOrder + ' #' + index));
                if (tag.find(tagDeliveryChargeAmount_2) === undefined || tag.find(tagDeliveryChargeAmount_2).val().length == 0)
                    this.error.push(includeNewLine(cError_MinimumOrder_DeliveryChargeAmount + ' #' + index));
                if (Number(tag.find(tagMinimumOrder_2).val()) >= Number(tag.find(tagMaximumOrder_2).val()) && vmViewIndex.allMapZone.minimumOrderDeliveryChargeList()[1].active()) {
                    this.error.push(includeNewLine(cError_MinimumOrder_MaxLessThanMin + ' #' + index));
                }
                //Added by WEB-SA23-0016
                if (isEmpty(vmViewIndex.allMapZone.minimumOrderDeliveryChargeList()[1].mapZone())) {
                    this.error.push(includeNewLine(cError_MinimumOrder_DeliveryZone + ' #' + index));
                }
                //End Added by WEB-SA23-0016
            }
            if (length > 2) {
                index = '3';
                var tagMinimumOrder_3 = cfrmTxtMinimumOrder_MinimumOrder + index;
                var tagMaximumOrder_3 = cfrmTxtMinimumOrder_MaximumOrder + index;
                var tagDeliveryChargeAmount_3 = cfrmTxtMinimumOrder_DeliveryChargeAmount + index;

                if (tag.find(tagMinimumOrder_3) === undefined || tag.find(tagMinimumOrder_3).val().length == 0)
                    this.error.push(includeNewLine(cError_MinimumOrder_MinimumOrder + ' #' + index));
                if (tag.find(tagMaximumOrder_3) === undefined || tag.find(tagMaximumOrder_3).val().length == 0)
                    this.error.push(includeNewLine(cError_MinimumOrder_MaximumOrder + ' #' + index));
                if (tag.find(tagDeliveryChargeAmount_3) === undefined || tag.find(tagDeliveryChargeAmount_3).val().length == 0)
                    this.error.push(includeNewLine(cError_MinimumOrder_DeliveryChargeAmount + ' #' + index));
                if (Number(tag.find(tagMinimumOrder_3).val()) >= Number(tag.find(tagMaximumOrder_3).val()) && vmViewIndex.allMapZone.minimumOrderDeliveryChargeList()[2].active()) {
                    this.error.push(includeNewLine(cError_MinimumOrder_MaxLessThanMin + ' #' + index));
                }
                //Added by WEB-SA23-0016
                if (isEmpty(vmViewIndex.allMapZone.minimumOrderDeliveryChargeList()[2].mapZone())) {
                    this.error.push(includeNewLine(cError_MinimumOrder_DeliveryZone + ' #' + index));
                }
                //End Added by WEB-SA23-0016
            }
            var messageVerifyRange = verifyRangeMinimumOrderDeliveryCharge();
            if (messageVerifyRange.length > 0) {
                this.error = this.error.concat(messageVerifyRange);
            }
            break;
        //End Added by WEB-SA22-0040
        case cfrmEditAllGiftCardImage:
            tag = this.parent;
            break;
        case cfrmDeleteGiftCardImage:
            tag = this.parent;
            break;
        case cfrmAddNewGiftCardValue:
            tag = this.parent;
            if (tag.find(cfrmTxtAddGiftCardValueName).val().length <= 0) {
                this.error.push(includeNewLine(cError_GiftCerValueName_Empty));
            }
            if (Number(tag.find(cfrmTxtAddGetAmount).val()) <= 0) {
                this.error.push(includeNewLine(cError_GiftCerGetAmount));
            }
            if (tag.find(cfrmIsAddDiscountAmount).val() == 'true' && Number(tag.find(cfrmTxtAddDiscountAmount).val()) > Number(tag.find(cfrmTxtAddGetAmount).val())) {
                this.error.push(includeNewLine(cError_GiftCerValueDiscountAmount_GreaterGetAmount));
            }
            if (!(tag.find(cfrmIsAddDiscountAmount).val() == 'true' || tag.find(cfrmIsAddDiscountPercent).val() == 'true')) {
                this.error.push(includeNewLine(cError_GiftCerDiscountType));
            }
            break;
        case cfrmAddNewCustomDiscount:
            tag = this.parent;
            if (tag.find(cfrmTxtCustomDiscountValueName).val().length <= 0) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountValue_Empty));
            }
            if (tag.find(cfrmTxtCustomDiscountName).val().length <= 0) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountName));
            }
            //if (tag.find(cfrmTxtCustomDiscountDesc).val().length <= 0) {
            //    this.error.push(includeNewLine(cError_GiftCerCustomDiscountDesc));
            //}
            if (tag.find(cfrmTxtRangMin).val().length <= 0 || tag.find(cfrmTxtRangMax).val().length <= 0) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountMinMax_Empty));
            }
            if (Number(tag.find(cfrmTxtRangMin).val()) <= 0 || Number(tag.find(cfrmTxtRangMax).val()) <= 0) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountMinMax_NotZero));
            }
            if (Number(tag.find(cfrmTxtRangMin).val()) >= Number(tag.find(cfrmTxtRangMax).val())) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountMin_LessMax));
            }
            if (!(tag.find(cfrmIsCustomDiscountAmount).val() == 'true' || tag.find(cfrmIsCustomDiscountPercent).val() == 'true')) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountType));
            }
            if ((tag.find(cfrmIsCustomDiscountAmount).val() == 'true' && tag.find(cfrmTxtCustomDiscountAmount).val().length <= 0)) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountAmount_Empty));
            }
            //if (tag.find(cfrmIsCustomDiscountAmount).val() == 'true' && (Number(tag.find(cfrmTxtCustomDiscountAmount).val()) >= Number(tag.find(cfrmTxtRangMin).val()))) {
            //    this.error.push(includeNewLine(cError_GiftCerCustomDiscountAmount_GreaterMin));
            //}
            if ((tag.find(cfrmIsCustomDiscountPercent).val() == 'true' && tag.find(cfrmTxtCustomDiscountPercent).val().length <= 0)) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountPercent_Empty));
            }
            if ((tag.find(cfrmIsCustomDiscountPercent).val() == 'true' && Number(tag.find(cfrmTxtCustomDiscountPercent).val()) > 100)) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountPercent_Greater100));
            }
            if ((tag.find(cfrmIsAllDay).val() != 'true') && (tag.find(cfrmCustomDiscountStartDate).val().length <= 0 || tag.find(cfrmCustomDiscountEndDate).val().length <= 0)) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountDay_Empty));
            }
            if ((tag.find(cfrmIsAllTime).val() != 'true') && (tag.find(cfrmCustomDiscountStartTime).val().length <= 0 || tag.find(cfrmCustomDiscountEndTime).val().length <= 0)) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountTime_Empty));
            }
            
            if (($("#dxDateBoxCustomDiscountStartDate").dxDateBox('instance').option('isValid') && $("#dxDateBoxCustomDiscountEndDate").dxDateBox('instance').option('isValid')) == false) {
                this.error.push(includeNewLine(cError_GiftCerCustomDiscountDay_Greater));
            }

            break;
        case cfrmGetGiftCardView:
            tag = this.parent;
            if (moment(tag.find(cfrmGetGiftCardView_FromDate).val()) > moment(tag.find(cfrmGetGiftCardView_EndDate).val())) {
                this.error.push(includeNewLine(cError_Date));
            }
            break;
          break;
            //End Added by SMILEDINING-SA19-0011
        //Added by SMILEDINING-SA20-0015
        case cfrmUpdateSetting:
            tag = this.parent;
            if (tag.find(cfrmIsSmileDining).val() == 'true') {
                if (tag.find(cfrmCustomCurbsideInstruction) === undefined || tag.find(cfrmCustomCurbsideInstruction).val().length == 0) {
                    this.error.push(includeNewLine(cError_CustomCurbsideInstruction_Empty));
                }
            }
            break;
        //End Added by SMILEDINING-SA20-0015
        //Added by SMILEDINING-SA20-0016
        case cfrmPromotionMainPrice:
            tag = this.parent;
            //Added by WEB-SA24-0012
            var checkInRange = vmViewIndex.allSetting.dataSetUpMainPrice.checkInRange();
            if (!checkInRange) {
                this.showAlert = false;
                this.error.push(includeNewLine(cError_Promotion_MainPrice_InRange));
                break;
            }
            //End Added by WEB-SA24-0012

            if (tag.find(cfrmPromotionMainPrice_PriceMin) === undefined || tag.find(cfrmPromotionMainPrice_PriceMin).val().length == 0)
                this.error.push(includeNewLine(cError_PromotionMainPrice_PriceMin_Empty));

            if (tag.find(cfrmPromotionMainPrice_PriceMax) === undefined || tag.find(cfrmPromotionMainPrice_PriceMax).val().length == 0)
                this.error.push(includeNewLine(cError_PromotionMainPrice_PriceMax_Empty));

            //if (tag.find(cfrmPromotionMainPrice_PriceMax).val() != 0 && tag.find(cfrmPromotionMainPrice_PriceMin).val() >= tag.find(cfrmPromotionMainPrice_PriceMax).val())   //Modified and End by SMILEDINING-SA21-0015
            if (parseFloat(tag.find(cfrmPromotionMainPrice_PriceMax).val()) != 0 && parseFloat(tag.find(cfrmPromotionMainPrice_PriceMin).val()) >= parseFloat(tag.find(cfrmPromotionMainPrice_PriceMax).val())) //Added and End by SMILEDINING-SA21-0015
                this.error.push(includeNewLine(cError_PromotionMainPrice_MaxLessThanMin));

            break;
        case cfrmPromotionGroupMainFood:
            tag = this.parent;
            if (tag.find(cfrmPromotionGroupMainFood_GroupName) === undefined || tag.find(cfrmPromotionGroupMainFood_GroupName).val().length == 0)
                this.error.push(includeNewLine(cError_PromotionGroupFood_GroupName_Empty));

            if (tag.find(cfrmPromotionGroupMainFood_MainFood) === undefined || tag.find(cfrmPromotionGroupMainFood_MainFood).val().length == 0)
                this.error.push(includeNewLine(cError_PromotionGroupFood_Food_Empty));

            break;
        case cfrmPromotionGroupFreeFood:
            tag = this.parent;
            if (tag.find(cfrmPromotionGroupFreeFood_GroupName) === undefined || tag.find(cfrmPromotionGroupFreeFood_GroupName).val().length == 0)
                this.error.push(includeNewLine(cError_PromotionGroupFood_GroupName_Empty));

            if (tag.find(cfrmPromotionGroupFreeFood_FreeFood) === undefined || tag.find(cfrmPromotionGroupFreeFood_FreeFood).val().length == 0)
                this.error.push(includeNewLine(cError_PromotionGroupFood_Food_Empty));

            break;
        case cfrmPromotionCondition:
            tag = this.parent;
            if (tag.find(cfrmPromotionCondition_PromotionTypeId) === undefined || tag.find(cfrmPromotionCondition_PromotionTypeId).val().length == 0)
                this.error.push(includeNewLine(cError_Promotion_FreeTerms_Empty));
            //Added by WEB-SA22-0062
            if (tag.find(cfrmPromotionCondition_PromotionName) === undefined || tag.find(cfrmPromotionCondition_PromotionName).val().length == 0)
                this.error.push(includeNewLine(cError_Promotion_Name_Empty));
            //Modified by WEB-SA24-0012
            //if (vmViewIndex.allSetting.dataSetUpCondition.isCheckedTotal() == true) { 
            //    if (tag.find(cfrmPromotionCondition__totalUse).val() == 0) { 
            //        this.error.push(includeNewLine(cError_Promotion_TotalUse_LessThan));
            //    }
            //}
            //End Modified by WEB-SA24-0012
            //Added by WEB-SA24-0012
            if (vmViewIndex.allSetting.dataSetUpCondition.isCheckedLimit() == true) { 
                if (tag.find(cfrmPromotionCondition_MaxUses).val() == 0) { 
                    this.error.push(includeNewLine(cError_Promotion_MaxUses_LessThan));
                }
            }
            if (moment(tag.find(cfrmPromotionCondition_StartDate).val()).isAfter(moment(tag.find(cfrmPromotionCondition_EndDate).val()))) {
                this.error.push(includeNewLine(cError_Discount_Date_Invalid));
            }
            //End Added by WEB-SA24-0012
            //End Added by WEB-SA22-0062
            if (tag.find(cfrmPromotionCondition_PromotionTypeId).val() == cConditionPrice) {
                if (tag.find(cfrmPromotionCondition_MainPriceId) === undefined || tag.find(cfrmPromotionCondition_MainPriceId).val().length == 0)
                    this.error.push(includeNewLine(cError_Promotion_MainPrice_Empty));
            } else if (tag.find(cfrmPromotionCondition_PromotionTypeId).val() == cConditionFood) {
                if (tag.find(cfrmPromotionCondition_MainFood) === undefined || tag.find(cfrmPromotionCondition_MainFood).val().length == 0)
                    this.error.push(includeNewLine(cError_Promotion_MainFood_Empty));
            }

            if (tag.find(cfrmPromotionCondition_FreeFood) === undefined || tag.find(cfrmPromotionCondition_FreeFood).val().length == 0)
                this.error.push(includeNewLine(cError_Promotion_FreePrice_Empty));

            if (tag.find(cfrmPromotionCondition_AutoFree).val() == 'false') {
                if (tag.find(cfrmPromotionCondition_FreeFood).val().split(',').length < 2) {
                    this.error.push(includeNewLine(cError_Promotion_FreePrice_Not_AutoFree));
                }
            }

            //Added by WEB-SA24-0012#1
            var messageVerifyMainPromotion = verifyMainPromotionAvoidDuplicates();
            if (messageVerifyMainPromotion.length > 0) {
                this.error = this.error.concat(messageVerifyMainPromotion);
            }
            //End Added by WEB-SA24-0012#1
            break;
            //End Added by SMILEDINING-SA20-0016
            //Added by SMILEDINING-SA20-0031#3
        case cfrmShopClose:
            tag = this.parent;
            if (tag.find(cfrmShopClose_Reason) === undefined || tag.find(cfrmShopClose_Reason).val().length == 0)
                this.error.push(includeNewLine(cError_ShopCloseReason_Empty));
            break;
            //End Added by SMILEDINING-SA20-0031#3
            //Added by SMILEDINING-SA20-0048
        case cfrmUpdateDisCountOneTimeUse:
            tag = this.parent;
            if (tag.find(cfrmDisCountOneTimeUse_Name) === undefined || tag.find(cfrmDisCountOneTimeUse_Name).val().length == 0) {
                this.error.push(includeNewLine(cError_CouponDelivery_Name));
            }
            if (tag.find(cfrmDisCountOneTimeUse_Code) === undefined || tag.find(cfrmDisCountOneTimeUse_Code).val().length == 0) {
                this.error.push(includeNewLine(cError_CouponDelivery_Code));
            }
            //Added by WEB-SA24-0013#2
            if (Number(tag.find(cfrmDisCountOneTimeUse_TermsAmountMax).val()) > 0 && Number(tag.find(cfrmDisCountOneTimeUse_TermsAmountMin).val()) >= Number(tag.find(cfrmDisCountOneTimeUse_TermsAmountMax).val())) {
                this.error.push(includeNewLine(cError_MinimumOrder_MaxLessThanMin));
            }
            if (moment(tag.find(cfrmDisCountOneTimeUse_StartDate).val()).isAfter(moment(tag.find(cfrmDisCountOneTimeUse_EndDate).val()))) {
                this.error.push(includeNewLine(cError_Discount_Date_Invalid));
            }
            //End Added by WEB-SA24-0013#2
            break;
            //End Added by SMILEDINING-SA20-0048
            //Adde by SMILEDINING-SA20-0048#2
        case cfrmDownloadDisCountOneTimeUse:
            this.showAlert = false;
            break;
            //End Added by SMILEDINING-SA20-0048#2
        //Added by SMILEDINING-SA21-0063#4
        case cfrmExportCustomer:
            tag = this.parent;
            if (tag.find(cfrmExportCustomer_SelectRow) === undefined || tag.find(cfrmExportCustomer_SelectRow).val().length == 0) {
                this.error.push(includeNewLine(cError_ExportCustomerSelectRow_Empty));
            }
            break;
        //End Added by SMILEDINING-SA21-0063#4
        //Added by SMILEDINING-SA22-0020
        case cfrmPaymentFee:
            tag = this.parent;
            if (tag.find(cfrmPaymentFee_PaymentFeeName) === undefined || tag.find(cfrmPaymentFee_PaymentFeeName).val().trim().length == 0)
                this.error.push(includeNewLine(cError_PaymentFeeName_Empty));
            if (tag.find(cfrmIsSmileDining).val() == 'true') {
                if (tag.find(cfrmPaymentFee_IsPickUp).val() == 'false' && tag.find(cfrmPaymentFee_IsDelivery).val() == 'false')
                    this.error.push(includeNewLine(cError_PaymentFeeShippingType_Empty));
            }
            break;
        //End Added by SMILEDINING-SA22-0020
        default:
            return null;
            break;
    }
};




