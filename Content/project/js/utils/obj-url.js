/*
    SMILEDINING-SA18-0003      01/17/2018      Customize               1. Show/Hide special instructions.
    SMILEDINING-SA18-0006      01/19/2018      Customize               1. Check discount code expired , Show foodset menu hours , Add discount type
    SMILEDINING-SA18-0023      08/23/2018      FixBug                  1. Fixbug submit Validate can't submit again
                                                                       2. Fixbug first use Add food Validate firstname not working
    SMILEDINING-SA18-0026      09/12/2018      Customize               1. Create function LinkToFood
    SMILEDINING-SA18-0031      09/27/2018      Customize               1. Create function CopyChoice
    SMILEDINING-SA18-0045      12/24/2018      Customize               1. Fixbug smiledining tablet device shop name longer menu Login have multiple line
                                                                       2. Fixbug smiledining mobile device scroll top after click Login and Register
                                                                       3. add function check shipping-type to show delivery and pickup (0 = showPickUp, 1=showDelivery, 2=showAll)
                                                                       4. change GetAll to get data with parameter Owner
                                                                       5. Refresh in owner add choose menu liveOrder
                                                                       6. Check and Remove div not using
                                                                       7. Edit function RemoveRange public to private (Service)
                                                                       8. Fixbug add maxlength tipDesc
                                                                       9. Fixbug linkToFood after click linkToFood modal choiceSetup can not reset
    SMILEDINING-SA19-0004      03/13/2019      Customize               1. Add new tab menu 'Announcement' to 'Menu Setting' of SmileOwner
                                                                       2. Move 'Broad Text' of Menu Setting to 'Announcement'
                                                                       3. Create ''Announcement' module that include Header, Description, Badge.
                                                                       4. Add 'broad-active'  status for enable/disable on SmileDining (1=enable, 0=disable)
                                                                       5. Announcement must collaborative with active and close time of setup on SmileOwner.
                                                                       6. Upload/Delete AnnounceImage
                                                                       7. Delete Shop Logo
    SMILEDINING-SA19-0005      03/25/2019      Customize               1. Gennerate sql script for create table 'tbdeliveryfreetime'
                                                                       2. Add Delivery Free Time UI for Draw Maps and Set Mile at MySetting menu
                                                                       3. Delivery Free Time can separate date between Zone1, Zone2 and Zone3
                                                                       4. Control delivery charge of SmileDining depending on Shop map code and Zone of delivery
    SMILEDINING-SA19-0008      04/19/2019      Customize               1. Create Table tbcoupondelivery.
                                                                       2. Create UI on My Setting menu at WebOwner.
                                                                       3. Assign total usable coupon option.
                                                                       4. Assign minimum order option.
                                                                       5. Assign discount delivery charge option.
                                                                       6. Assign start and end date for available coupon.
                                                                       7. Check and Calculate delivery charge and tax when order food.
    SMILEDINING-SA19-0019      08/26/2019      Customize               1. Modified Drag&Drop list of ChoiceOption to Sortable.
					                                                   2. Modified Drag&Drop list of Choice to Sortable.
    SMILEDINING-SA19-0021      09/02/2019      Customize               1. Change Design Menu Setting.
    SMILEDINING-SA19-0011      09/03/2019      Customize               1. E-Gift Card.
    SMILEDINING-SA20-0003      24/02/2020      Customize               1. New feature Limit Order and fix Bug food set time.
    SMILEDINING-SA20-0007      07/07/2020      Customize               1. New feature Gift Card.
    SMILEDINING-SA20-0018      01/09/2020      Customize               1. Edit Config Setup for Choice Group,Choice Option,Choice Modify and Add Gratuity Charge.
                                                                       2. Add Setting Gratuity Charge to My Setting.
    SMILEDINING-SA20-0016      21/10/2020      Customize               1. Promotion free food.
    SMILEDINING-SA20-0028      21/10/2020      Customize               1. Upload/show Image Announcement(Lightbox)
                                                                       2. Add GlobalConfig image-annonce/image-announce-size/image-announce-active
    SMILEDINING-SA20-0031      02/12/2020      Customize               1. Adjust shop close period date and time.
    SMILEDINING-SA20-0043      15/12/2017      Customize               1. Custom map zone mile price.
    SMILEDINING-SA21-0007      02/02/2021      Customize               1. Apple Pay and Set up Unit Of Work  and Shop Close API
    SMILEDINING-SA21-0004      24/01/2021      Customize               1. Close special instruction some menu or some category. 
    SMILEDINING-SA21-0006      12/02/2021      Customize               1. Add eGift card to SmileDining.
    SMILEDINING-SA21-0014      08/03/2021      Customize               1. Add new product 'Smile Third Party Integrations' used Deliverect.
    SMILEDINING-SA20-0048      28/12/2020      Customize               1. Discount code one time use. 
    SMILEDINING-SA21-0018      21/05/2021      Customize               1. Setting food detail by third party to deliverect.
    SMILEDINING-SA21-0021      11/06/2021      Customize               1. Setting icon image for show in smileDining.
    SMILEDINING-SA21-0028      30/07/2021      Customize               1. Edit UI Smile Dining and Contactless (Layout P2) and  edit webOwner can upload food Image for Desktop and Mobile. 
    SMILEDINING-SA21-0035      02/08/2021      Customize               1. Add upload background image in webOwner only Smile Contactless Dining. (Smile On Table P1)
                                                                       2. Create new Views following UI frame 1 and frame 2. (Smile On Table P1)
    SMILEDINING-SA21-0058      21/09/2021      Customize               1. Fix webOwner performance is slow.
    SMILEDINING-SA21-0063      07/10/2021      Customize               1. Add menu Marketing on web owner and Add menu Log on web support.
    SMILEDINING-SA21-0063#4    26/10/2021      Customize               1. Add download export customer excel file and Remove library ExcelJs,FileSaver.
    SMILEDINING-SA22-0013      23/05/2022      Customize               1. Add menu Delivery Billing for show report in webowner.
    SMILEDINING-SA22-0020      14/06/2022      Customize               1. Add new charge name 'Payment Fee' apply to order online.
    WEB-SA22-0040              26/09/2022      Customize               1. New feature minimum order delivery charge.
    WEB-SA22-0064              29/11/2022      Customize               1. Fix bug setting product in webSupport.
                                                                       2. Call Api in webOwner (AccountController, JsonController).
    WEB-SA22-0066              06/12/2022      Customize               1. Use MQTT send to kiosk for discount contactless in webOwner.
    WEB-SA23-0035#1            30/05/2023      Customize               1. Move setting statement type from webSupport to webOwner.
    WEB-SA23-0041              27/07/2023      Customize               1. New feature member discount on webDining, webOwner.
    WEB-SA23-0045              23/08/2023      Customize               1. Add setting discount time on webOwner, webDining, webOnTable.
    WEB-SA24-0016              05/06/2024      Customize               1. New requirement - Add pay at store only and notification for Smile On Table on webOwner, webSupport, webOnTable.
*/
/*
 * obj Url
 */

var ObjUrl = function (objName, objStatus) {
    this.id = objName;
    this.status = objStatus;
};

ObjUrl.prototype.getUrlSubmitForm = function () {
    var tag = $('#' + this.id);
    switch (this.id) {
        case cfrmLogIn:
            return $('#divAccountLogIn').data('request-url');
            break;
        case cfrmChangeRestaurant:
            return $('#divAccountChangeRestaurant').data('request-url');
            break;
        case cfrmRegister:
            return $('#divAccountRegister').data('request-url');
            break;
        case cfrmForgotPassword:
            return $('#divAccountForgotPassword').data('request-url');
            break;
        case cfrmResetPassword:
            return $('#divAccountRestPassword').data('request-url');
            break;
        case cfrmLogOff:
            return $('#divAccountLogOff').data('request-url');
            break;
        case cfrmUpdateRestaurant:
            return $('#divUpdateRestaurant').data('request-url');
            break;
        case cfrmUpdateMapZone:
            return $('#divUpdateMapZone').data('request-url');
            break;
        case cfrmUpdateMapZoneMile:
            return $('#divUpdateMapZoneMile').data('request-url');
            break;
            //Added by SMILEDINING-SA19-0005
        case cfrmUpdateDeliveryFreeTime:
            return $('#divUpdateDeliveyFreeTime').data('request-url');
            break;
            //End Added by SMILEDINING-SA19-0005
        case cfrmUpdateSetTimeMenu:
            return $('#divUpdateAllTime').data('request-url');
            break;
        case cfrmUpdateSetting:
            return $('#divUpdateSetting').data('request-url');
            break;
            //Added by SMILEDINING-SA20-0003
        case cfrmUpdateMenuSetting:
            return $('#divUpdateMenuSetting').data('request-url');
            break;
            //End Added by SMILEDINING-SA20-0003
            //Added by SMILEDINING-SA19-0004
        case cfrmUpdateAnnouncement:
            return $('#divUpdateAnnouncement').data('request-url');
            break;
        case cfrmUploadAnnounceImage:
            return $('#divUploadAnnounceImage').data('request-url');
            break;
        case cfrmDeleteAnnounceImage:
            return $('#divDeleteAnnounceImage').data('request-url');
            break;
        case cfrmDeleteImageLogo:
            return $('#divDeleteImageLogo').data('request-url');
            break;
            //End Added by SMILEDINING-SA19-0004
            //Added by SMILEDINING-SA21-0007
        case cfrmUploadAnnounceCustomImage:
            return $('#divUploadAnnounceCustomImage').data('request-url');
            break;
        case cfrmDeleteAnnounceCustomImage:
            return $('#divDeleteAnnounceCustomImage').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0007
        case cfrmChangeImage:
            return $('#divChangeImage').data('request-url');
            break;
        case cfrmUploadImageSetting:
            return $('#divUploadImage').data('request-url');
            break;
            //Added by SMILEDINING-SA21-0035
        case cfrmUploadImageBackgroundSetting:
            return $('#divUploadImageBackground').data('request-url');
            break;
        case cfrmDeleteImageBackground:
            return $('#divDeleteImageBackground').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0035
        case cfrmUploadImageTemplate:
            return $('#divUploadImageTemplate').data('request-url');
            break;
        case cfrmUpdateTemplate:
            return $('#divUpdateTemplate').data('request-url');
            break;
            //Modified by SMILEDINING-SA18-0045
            //case cfrmCustomerProfileUpdate:
            //    return $('#divCustomerProfileUpdate').data('request-url');
            //    break;
            //End Modified by SMILEDINING-SA18-0045
        case cfrmChangePassword:
            return $('#divCustomerChangePassword').data('request-url');
            break;

            //Modified by SMILEDINING-SA18-0045
            //case cfrmCustomerAddressUpdate:
            //    return $('#divCustomerAddressUpdate').data('request-url');
            //    break;
            //End Modified by SMILEDINING-SA18-0045
        case cfrmDiscount:
            if (this.status == statusAdd) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divDiscountAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divDiscountUpdate').data('request-url');
            }
            break;
            //Added by SMILEDINING-SA18-0003
        //Added by WEB-SA23-0041
        case cfrmMemberDiscount:
            if (this.status == statusAdd) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divMemberDiscountAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divMemberDiscountUpdate').data('request-url');
            }
            break;
        //End Added by WEB-SA23-0041
        case cfrmAutoCharge:
            if (this.status == statusAdd) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divAutoChargeAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divAutoChargeUpdate').data('request-url');
            }
            break;
        case cfrmHoliday:
            if (this.status == statusAdd) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divHolidayAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divHolidayUpdate').data('request-url');
            }
            break;
            //End Added by SMILEDINING-SA18-0003
            //Added By SMILEDINING-SA19-0008
        case cfrmCouponDelivery:
            return $('#divUpdateCouponDelivery').data('request-url');
            break;
            //End Added By SMILEDINING-SA19-0008
        case cfrmFoodSetSetup:
            if (this.status == statusAdd) {
                //vmViewIndex.menu.setDisableButtonSubmit();        //Modified by SMILEDINING-SA18-0023
                return $('#divFoodSetAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                //vmViewIndex.menu.setDisableButtonSubmit();        //Modified by SMILEDINING-SA18-0023
                return $('#divFoodSetUpdate').data('request-url');
            }
            break;
        case cfrmFoodCategorySetup:
            if (this.status == statusAdd) {
                //vmViewIndex.menu.setDisableButtonSubmit();        //Modified by SMILEDINING-SA18-0023
                return $('#divFoodCategoryAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                //vmViewIndex.menu.setDisableButtonSubmit();        //Modified by SMILEDINING-SA18-0023
                return $('#divFoodCategoryUpdate').data('request-url');
            }
            break;
        case cfrmFoodSetup:
            if (this.status == statusAdd) {
                //vmViewIndex.menu.setDisableButtonSubmit();        //Modified by SMILEDINING-SA18-0023
                return $('#divFoodAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                //vmViewIndex.menu.setDisableButtonSubmit();        //Modified by SMILEDINING-SA18-0023
                return $('#divFoodUpdate').data('request-url');
            }
            break;
            //Added by SMILEDINING-SA21-0028
        case cfrmFoodImageSetup:
            return $('#divFoodImageUpdate').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0028
            //Added by SMILEDINING-SA21-0018
        case cfrmFoodThirdPartySetup:
            return $('#divFoodThirdPartyUpdate').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0018
        case cfrmAddCopyFood:
            return $('#divCopyFoodAdd').data('request-url');
            break;
        case cfrmChoiceOptionSetUp:
            if (this.status == statusAdd) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divChoiceOptionAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divChoiceOptionUpdate').data('request-url');
            }
            break;
        case cfrmChoiceSetUp:
            if (this.status == statusAdd) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divChoiceAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divChoiceUpdate').data('request-url');
            }
                //Added by SMILEDINING-SA18-0026
            else if (this.status == statusLink) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divChoiceLink').data('request-url');
            }
            //End Added by SMILEDINING-SA18-0026
            break;
            //Added by SMILEDINING-SA20-0018
        case cfrmChoiceModifySetUp:
            if (this.status == statusAdd) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divChoiceAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divChoiceUpdate').data('request-url');
            }
            else if (this.status == statusLink) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divChoiceLink').data('request-url');
            }
            break;
        case cfrmGraguityChargeSetup:
            if (this.status == statusAdd) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divGraguityChargeAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divGraguityChargeUpdate').data('request-url');
            }
            break;
        case cfrmGraguityCharge:
            vmViewIndex.allSetting.setDisableButtonSubmit();
            return $('#divGraguityChargeSettingUpdate').data('request-url');
            break;
        case cfrmFoodPrefix:
            if (this.status == statusAdd) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divFoodPrefixAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divFoodPrefixUpdate').data('request-url');
            }
            break;
            //End Added by SMILEDINING-SA20-0018
        case cfrmTaxRateSetUp:
            if (this.status == statusAdd) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divTaxRateAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divTaxRateUpdate').data('request-url');
            }
            break;
            //Added by SMILEDINING-SA18-0026
        case cfrmLinkToFood:
            if (this.status == statusAdd) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divLinkToFoodUpdate').data('request-url');
            }
            break;
            //End Added by SMILEDINING-SA18-0026
        case cfrmRevenueClassSetUp:
            if (this.status == statusAdd) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divRevenueClassAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divRevenueClassUpdate').data('request-url');
            }
            break;
            //Added by SMILEDINING-SA21-0021
        case cfrmIconSetup:
            if (this.status == statusAdd) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divIconAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.configSetUp.setDisableButtonSubmit();
                return $('#divIconUpdate').data('request-url');
            }
            break;
            //End Added by SMILEDINING-SA21-0021
        case cfrmSearchReport:
            return $('#divSearchReport').data('request-url');
            break;
        case cfrmSearchBalance:
            return $('#divSearchBalance').data('request-url');
            break;
            //Added by SMILEDINING-SA18-0031
        case cfrmCopyChoice:
            return $('#divCopyChoice').data('request-url');
            break;
            //End Added by SMILEDINING-SA18-0031
            //Added by SMILEDINING-SA19-0011
        case cfrmGiftCard:
            return $('#divAddAllGiftCardData').data('request-url');
            break;
        case cfrmEditAllGiftCardImage:
            return $('#divEditAllGiftCardImage').data('request-url');
            break;
        case cfrmNewGiftCardImage:
            return $('#divAddNewGifcardImage').data('request-url');
            break;
        case cfrmDeleteGiftCardImage:
            return $('#divDeleteGifcardImage').data('request-url');
            break;
        case cfrmAddNewGiftCardValue:
            return $('#divAddNewGifcardValue').data('request-url');
            break;
        case cfrmAddNewCustomDiscount:
            return $("#divAddNewCustomDiscount").data('request-url');
            break;
        case cfrmEditSortingGiftCardValue:
            return $("#divEditSortingGiftCardValue").data('request-url');
            break;
        case cfrmGetGiftCardView:
            return $("#divGetGiftCardView").data('request-url');
            break;
            //End Added by SMILEDINING-SA19-0011
            //Added by SMILEDINING-SA21-0006
        case cfrmGiftCardSetup:
            return $('#divGiftCardSetup').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0006
            //Added by SMILEDINING-SA20-0007
        case cfrmSearchStatement:
            return $("#divSearchStatement").data('request-url');
            break;
            //End Added by SMILEDINING-SA20-0007
            //Added by SMILEDINING-SA20-0016
        case cfrmPromotionMainPrice:
            if (this.status == statusAdd) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divPromotionMainPriceAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divPromotionMainPriceUpdate').data('request-url');
            }
            break;
        case cfrmPromotionGroupMainFood:
            if (this.status == statusAdd) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divPromotionGroupMainFoodAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divPromotionGroupMainFoodUpdate').data('request-url');
            }
            break;
        case cfrmPromotionGroupFreeFood:
            if (this.status == statusAdd) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divPromotionGroupFreeFoodAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divPromotionGroupFreeFoodUpdate').data('request-url');
            }
            break;
        case cfrmPromotionCondition:
            if (this.status == statusAdd) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divPromotionConditionAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divPromotionConditionUpdate').data('request-url');
            }
            break;
            //End Added by SMILEDINING-SA20-0016
            //Added by SMILEDINING-SA20-0031
        case cfrmShopClose:
            if (this.status == statusAdd) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divShopCloseAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divShopCloseUpdate').data('request-url');
            }
            break;
        case cfrmDeleteShopClose:
            return $('#divShopCloseDelete').data('request-url');
            break;
            //End Added by SMILEDINING-SA20-0031
        //Added by WEB-SA22-0040
        case cfrmUpdateMinimumOrderDeliveryCharge:
            return $('#divUpdateMinimumOrderDeliveryCharge').data('request-url');
            break;
        //End Added by WEB-SA22-0040
            //Added by SMILEDINING-SA20-0043
        case cfrmUpdateCustomMapZoneMile:
            return $('#divUpdateCustomMapZoneMile').data('request-url');
            break;
            //End Added by SMILEDINING-SA20-0043
            //Added by SMILEDINING-SA20-0048
        case cfrmUploadDisCountOneTimeUse:
            return $('#divUploadDiscountOneTimeUse').data('request-url');
            break;
        case cfrmDownloadDisCountOneTimeUse:
            return $('#divDownloadDiscountOneTimeUse').data('request-url');
            break;
        case cfrmUpdateDisCountOneTimeUse:
            if (this.status == statusAdd) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divDisCountOneTimeUseAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divDisCountOneTimeUseUpdate').data('request-url');
            }
            break;
            //End Added by SMILEDINING-SA20-0048
            //Added by SMILEDINING-SA21-0004
        case cfrmInstructionLinkToFoodUpdate:
            return $('#divInstructionLinkToFoodUpdate').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0004
        //Added by SMILEDINING-SA21-0063#4
        case cfrmExportCustomer:
            return $('#divDownloadCustomer').data('request-url');
        //End Added by SMILEDINING-SA21-0063#4
        //Added by SMILEDINING-SA22-0020
        case cfrmPaymentFee:
            if (this.status == statusAdd) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divPaymentFeeAdd').data('request-url');
            } else if (this.status == statusUpdate) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                return $('#divPaymentFeeUpdate').data('request-url');
            }
            break;
        //End Added by SMILEDINING-SA22-0020
        default:
            return null;
            break;
    }
};

ObjUrl.prototype.getUrlFromJson = function () {
    switch (this.id) {
        case cJsonGetGlobalConfig:
            return $('#divJsonGetGlobalConfig').data('request-url');
            break;
        case cJsonGetMap:
            return $('#divJsonGetMap').data('request-url');
            break;
        case cJsonGetAllTimeZone:
            return $('#divJsonGetAllTimeZone').data('request-url');
            break;
        //Added by WEB-SA22-0066
        case cJsonGetDataMqtt:
            return $('#divJsonGetDataMqtt').data('request-url');
            break;
        //End Added by WEB-SA22-0066
        case cJsonGetAllTime:
            return $('#divJsonGetAllTime').data('request-url');
            break;
        case cJsonGetFoodSetTimeMapById:
            return $('#divJsonGetFoodSetTimeMapById').data('request-url');
            break;
        case cJsonGetDiscount:
            return $('#divJsonGetDiscount').data('request-url');
            break;
            //Added by SMILEDINING-SA18-0006
        case cJsonGetDiscountType:
            return $('#divJsonGetDiscountType').data('request-url');
            break;
            //End Added by SMILEDINING-SA18-0006
        //Added by WEB-SA23-0045
        case cJsonGetDiscountTimeMap:
            return $('#divJsonGetDiscountTimeMap').data('request-url');
            break;
        //End Added by WEB-SA23-0045
            //Added by SMILEDINING-SA18-0003
        case cJsonGetAutoCharge:
            return $('#divJsonGetAutoCharge').data('request-url');
            break;
        case cJsonGetHoliday:
            return $('#divJsonGetHoliday').data('request-url');
            break;
            //End Added by SMILEDINING-SA18-0003
        case cJsonGetCustomer:
            return $('#divJsonGetCustomer').data('request-url');
            break;
        case cJsonGetCustomerAddress:
            return $('#divJsonGetCustomerAddress').data('request-url');
            break;
        case cJsonGetTemplate:
            return $('#divJsonGetTemplate').data('request-url');
            break;
        case cJsonRefreshToken:
            return $('#divJsonRefreshToken').data('request-url');
            break;
        //Added by WEB-SA22-0064
        case cJsonCheckAuthentication:
            return $('#divJsonCheckAuthentication').data('request-url');
            break;
        //End Added by WEB-SA22-0064
        case cFoodSetUpdateDragging:
            return $('#divFoodSetUpdateDragging').data('request-url');
            break;
        case cFoodCategoryUpdateDragging:
            return $('#divFoodCategoryUpdateDragging').data('request-url');
            break;
        case cFoodUpdateDragging:
            return $('#divFoodUpdateDragging').data('request-url');
            break;
        case cJsonGetLiveOrder:
            return $('#divJsonGetLiveOrder').data('request-url');
            break;
        case cJsonGetDataMenu:
            return $('#divJsonGetDataMenu').data('request-url');
            break;
        case cJsonGetConfigSetUp:
            return $('#divJsonGetConfigSetUp').data('request-url');
            break;
        case cChoiceOptionUpdateDragging:
            return $('#divChoiceOptionUpdateDragging').data('request-url');
            break;
        case cChoiceUpdateDragging:
            return $('#divChoiceUpdateDragging').data('request-url');
            break;
            //Added by SMILEDINING-SA19-0019
        case cChoiceUpDateSortable:
            return $('#divChoiceUpDateSortable').data('request-url');
            break;
        case cChoiceOptionUpDateSortable:
            return $('#divChoiceOptionUpDateSortable').data('request-url');
            break;
            //End Added by SMILEDINING-SA19-0019
        case cJsonGetReport:
            return $('#divJsonGetReport').data('request-url');
            break;
        case cJsonGetBalance:
            return $('#divJsonGetBalance').data('request-url');
            break;
        case cJsonGetStatement:
            return $('#divJsonGetStatement').data('request-url');
            break;
        //Added by SMILEDINING-SA21-0063
        //Added by WEB-SA23-0035#1
        case cJsonUpdateStatementType:
            return $('#divJsonUpdateStatementType').data('request-url');
            break;
        //End Added by WEB-SA23-0035#1
        case cJsonGetMarketing:
            return $('#divJsonGetMarketing').data('request-url');
            break;
        //End Added by SMILEDINING-SA21-0063
            //Modified by SMILEDINING-SA20-0007
            //case cJsonGetSummaryTicket:
            //    return $('#divJsonGetSummaryTicket').data('request-url');
            //    break;
            //End Modified by SMILEDINING-SA20-0007
        case cDisableFoodCategory:
            return $('#divDisableFoodCategory').data('request-url');
            break;
        case cJsonGetFoodSettimeMap:
            return $('#divJsonGetFoodSettimeMap').data('request-url');
            break;
            //Added By SMILEDINING-SA19-0008
        case cJsonGetCouponDelivery:
            return $('#divGetCouponDelivery').data('request-url');
            break;
            //End Added By SMILEDINING-SA19-0008
            //Added by SMILEDINING-SA19-0021
        case cJsonUpdateGlobalConfig:
            return $('#divJsonUpdateGlobalConfig').data('request-url');
            break;
            //End Added by SMILEDINING-SA19-0021
            //Added by SMILEDINING-SA19-0011
        case cJsonGetGiftCard:
            return $('#divGetGiftCard').data('request-url');
            break;
        case cJsonGetGiftCardView:
            return $('#divGetGiftCardView').data('request-url');
            break;
            //End Added by SMILEDINING-SA19-0011
            //Added by SMILEDINING-SA20-0018
        case cJsonGetGraguity:
            return $('#divJsonGetGraguity').data('request-url');
            break;
        case cFoodPrefixUpDateSortable:
            return $('#divFoodPrefixUpDateSortable').data('request-url');
            break;
            //End Added by SMILEDINING-SA20-0018
        case cJsonKeepSessionAlive:
            return $('#divJsonKeepSessionAlive').data('request-url');
            break;
            //Added by SMILEDINING-SA20-0016
        case cJsonGetDataPromotion:
            return $('#divJsonGetDataPromotion').data('request-url');
            break;
            //End Added by SMILEDINING-SA20-0016
            //Added by SMILEDINING-SA20-0031
        case cJsonGetShopClose:
            return $('#divJsonGetShopClose').data('request-url');
            break;
            //End Added by SMILEDINING-SA20-0031
            //Added by SMILEDINING-SA20-0048
        case cJsonGetDisCountOneTimeUse:
            return $('#divJsonGetDisCountOneTimeUse').data('request-url');
            break;
            //End Added by SMILEDINING-SA20-0048
            //Added by SMILEDINING-SA21-0014
        case cJsonGetSyncProduct:
            return $('#divJsonGetSyncProduct').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0014
            //Added by SMILEDINING-SA21-0058
        case cJsonGetAllDataSetting:
            return $('#divJsonGetAllDataSetting').data('request-url');
            break;
            //End Added by SMILEDINING-SA21-0058
        //Added by SMILEDINING-SA22-0013
        case cJsonGetDeliveryBilling:
            return $('#divJsonGetDeliveryBilling').data('request-url');
            break;
        //End Added by SMILEDINING-SA22-0013
        //Added by SMILEDINING-SA22-0020
        case cJsonGetPaymentFee:
            return $('#divJsonGetPaymentFee').data('request-url');
            break;
        //End Added by SMILEDINING-SA22-0020
        //Added by WEB-SA24-0016
        case cJsonGetCustomerNotifications:
            return $('#divJsonGetCustomerNotifications').data('request-url');
            break;
        //End Added by WEB-SA24-0016
        default:
            return null;
            break;
    }
};