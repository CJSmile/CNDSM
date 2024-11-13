/*
    SMILEDINING-SA18-0003     01/12/2018      Customize             1. Holiday , AutoCharge , Special instructions
    SMILEDINING-SA18-0006     01/19/2018      Customize             1. Check discount code expired , Show foodset menu hours , Add discount type
    SMILEDINING-SA18-0026     09/12/2018      Customize             1. Create function LinkToFood
    SMILEDINING-SA18-0031     09/27/2018      Customize             1. Create function CopyChoice
    SMILEDINING-SA18-0036     11/15/2018      Customize             1. Add button Delete Logo Shop in smiledining
                                                                    2. smiledining mobile device nameshop to longer
                                                                    3. modal Autocharge after edit can't scroll in modal
                                                                    4. edit function GetDataOrderHistory in smiledining to new concept
                                                                    5. add new theme color (Red, Yellow, Navy, Gold, Beige, Pink, Black)
    SMILEDINING-SA18-0038     11/20/2018      Customize             1. Edit get data timeZone (Add one timezone Mountain Time)
                                                                    2. Fixbug Uploadimage don't choose path return error
                                                                    3. Fixbug Timezone don't choose return error
    SMILEDINING-SA18-0045     12/24/2018      Customize             1. Fixbug smiledining tablet device shop name longer menu Login have multiple line
                                                                    2. Fixbug smiledining mobile device scroll top after click Login and Register
                                                                    3. add function check shipping-type to show delivery and pickup (0 = showPickUp, 1=showDelivery, 2=showAll)
                                                                    4. change GetAll to get data with parameter Owner
                                                                    5. Refresh in owner add choose menu liveOrder
                                                                    6. Check and Remove div not using
                                                                    7. Edit function RemoveRange public to private (Service)
                                                                    8. Fixbug add maxlength tipDesc
                                                                    9. Fixbug linkToFood after click linkToFood modal choiceSetup can not reset
    SMILEDINING-SA19-0002     02/11/2019      Customize             1. Add field to custom text button pay at store and pay credit
                                                                    2. Edit button pay at store and pay credit get text data from database
                                                                    3. Add field to custom text placeholder special instruction
                                                                    4. Edit textarea special instruction get data placeholder from database
                                                                    5. Add field to set show/hide tips description (from pay at store and pay credit page)
                                                                    6. Edit and Add show/hide tips description (from pay at store and pay credit paSA19-0013ge)
    SMILEDINING-SA19-0004      03/13/2019      Customize            1. Add new tab menu 'Announcement' to 'Menu Setting' of SmileOwner
                                                                    2. Move 'Broad Text' of Menu Setting to 'Announcement'
                                                                    3. Create ''Announcement' module that include Header, Description, Badge.
                                                                    4. Add 'broad-active'  status for enable/disable on SmileDining (1=enable, 0=disable)
                                                                    5. Announcement must collaborative with active and close time of setup on SmileOwner.
                                                                    6. Upload/Delete AnnounceImage
                                                                    7. Delete Shop Logo
    SMILEDINING-SA19-0005      03/25/2019     Customize             1. Gennerate sql script for create table 'tbdeliveryfreetime'
                                                                    2. Add Delivery Free Time UI for Draw Maps and Set Mile at MySetting menu
                                                                    3. Delivery Free Time can separate date between Zone1, Zone2 and Zone3
                                                                    4. Control delivery charge of SmileDining depending on Shop map code and Zone of delivery
    SMILEDINING-SA19-0008      04/19/2019     Customize             1. Create Table tbcoupondelivery.
                                                                    2. Create UI on My Setting menu at WebOwner.
                                                                    3. Assign total usable coupon option.
                                                                    4. Assign minimum order option.
                                                                    5. Assign discount delivery charge option.
                                                                    6. Assign start and end date for available coupon.
                                                                    7. Check and Calculate delivery charge and tax when order food.
    SMILEDINING-SA19-0017      08/15/2019      Customize            1. Create Shop Status
                                                                    2. Create Shop Close StartDate and Shop Close EndDate
                                                                    3. Create Shop Close Reason
                                                                    4. Create Shipping Type
                                                                    5. Fix 'Active button' of Announcement Tab in IE

    SMILEDINING-SA19-0019      08/26/2019      Customize            1. Modified Drag&Drop list of ChoiceOption to Sortable.
					                                                2. Modified Drag&Drop list of Choice to Sortable.
    SMILEDINING-SA19-0021      09/02/2019      Customize            1. Change Design Menu Setting.
    SMILEDINING-SA19-0011      09/03/2019      Customize            1. E-Gift Card.
    SMILEDINING-SA20-0003      24/02/2020      Customize            1. New feature Limit Order and fix Bug food set time.
    SMILEDINING-SA20-0006      06/23/2020      Customize            1. Add checkbox Smile Contactless Dining on Menu Setup and update ProductID in database when update,add,copy food 
                                                                    2.Add filter Product on Menu Setup
                                                                    3. Add filter Product on Mysetting
                                                                    4. Added button for switch shop status more one products
    SMILEDINING-SA20-0007      07/07/2020      Customize            1. New feature Gift Card.
	SMILEDINING-SA20-0015      03/08/2020      Customize            1. New feature Curbside Pick up Option for Smile dining.
                                                                    2. Setting Open/Close for Curbside Pick up and setting instruction.
    SMILEDINING-SA20-0018      01/09/2020      Customize            1. Edit Config Setup for Choice Group,Choice Option,Choice Modify and Add Gratuity Charge.
                                                                    2. Add Setting Gratuity Charge to My Setting.
    SMILEDINING-SA20-0011      23/07/2020      Customize            1. New feature auto apply discount SmileDining.
    SMILEDINING-SA20-0016      21/10/2020      Customize            1. Promotion free food.
    SMILEDINING-SA20-0028      21/10/2020      Customize            1. Upload/show Image Announcement(Lightbox)
                                                                    2. Add GlobalConfig image-annonce/image-announce-size/image-announce-active
    SMILEDINING-SA20-0043      15/12/2020      Customize            1. Custom map zone mile price.
    SMILEDINING-SA20-0031      02/12/2020      Customize            1. Adjust shop close period date and time.
    SMILEDINING-SA20-0031#3    04/01/2021      Customize            1. Modified shopclose model.
    SMILEDINING-SA20-0043#2    06/01/2021      Customize            1. Add validate before save mapZoneMile.
    SMILEDINING-SA21-0004      24/01/2021      Customize            1. Close special instruction some menu or some category.
    SMILEDINING-SA21-0006      12/02/2021      Customize            1. Add eGift card to SmileDining.
    SMILEDINING-SA21-0014      08/03/2021      Customize            1. Add new product 'Smile Third Party Integrations' used Deliverect.
    SMILEDINING-SA20-0048      28/12/2020      Customize            1. Discount code one time use.
    SMILEDINING-SA21-0018      21/05/2021      Customize            1. Setting food detail by third party to deliverect.
    SMILEDINING-SA21-0018#1    24/05/2021      Customize            1. Edit third party integration.
    SMILEDINING-SA21-0021      11/06/2021      Customize            1. Setting icon image for show in smileDining.
    SMILEDINING-SA21-0025      29/06/2021      Customize            1. New feature cutlery or utensil option.
    SMILEDINING-SA21-0021#6    12/07/2021      Customize            1. Fixed bug Config setup icon error message and Menu setup icon delete all icon.
    SMILEDINING-SA21-0028      30/07/2021      Customize            1. Edit UI Smile Dining and Contactless (Layout P2) and  edit webOwner can upload food Image for Desktop and Mobile. 
    SMILEDINING-SA21-0035      02/08/2021      Customize            1. Add upload background image in webOwner only Smile Contactless Dining. (Smile On Table P1)
                                                                    2. Create new Views following UI frame 1 and frame 2. (Smile On Table P1)
    SMILEDINING-SA21-0053      10/09/2021      Customize            1. Add setting custom button order type
    SMILEDINING-SA21-0058      21/09/2021      Customize            1. Fix webOwner performance is slow.
    SMILEDINING-SA21-0063      07/10/2021      Customize            1. Add menu Marketing on web owner and Add menu Log on web support.
    SMILEDINING-SA21-0063#4    26/10/2021      Customize            1. Add download export customer excel file and Remove library ExcelJs,FileSaver.
    SMILEDINING-SA21-0063#5    01/11/2021      Customize            1. Fix marketing view menu on mobile and Fix download file.
    SMILEDINING-SA21-0077      23/11/2021      Customize            1. Fix bug deactive revenue class that used on some food and can't next step giftcard image when don't select image for upload.
    SMILEDINING-SA21-0066#21   04/03/2022      Customize            1. Fix bug edit food for disable choice and choiceOption from Deliverect and copy food in webOwner.
    SMILEDINING-SA21-0066#24   15/03/2022      Customize            1. Add unlock food, choice and choiceOption from Deliverect in webOwner.
    SMILEDINING-SA22-0013      23/05/2022      Customize            1. Add menu Delivery Billing for show report in webowner.
    SMILEDINING-SA22-0020      14/06/2022      Customize            1. Add new charge name 'Payment Fee' apply to order online.
    SMILEDINING-SA22-0034      06/09/2022      Customize            1. Edit Menu Hour can add more than two period in WebOwner.
    WEB-SA22-0040              26/09/2022      Customize            1. New feature minimum order delivery charge.
    WEB-SA22-0064              29/11/2022      Customize            1. Fix bug setting product in webSupport.
                                                                    2. Call Api in webOwner (AccountController, JsonController).
    WEB-SA22-0062              29/11/2022      Customize            1. Add PromotionName, ShippingType, TotalUse in WebOwner
    WEB-SA22-0066              06/12/2022      Customize            1. Use MQTT send to kiosk for discount contactless in webOwner.
    WEB-SA22-0064#1            16/12/2022      Customize            1. Fix bug shop status in webOwner and fix bug food productId when setting product in webSupport.
    WEB-SA23-0001              09/01/2023      Customize            1. Use MQTT send data to kiosk  in webOwner.
    WEB-SA23-0016              28/02/2023      Customize            1. Add setting mapzone to minimum order delivery charge in webOwner and webDining.
    WEB-SA23-0026#1            15/05/2023      Customize            1. Fix bug auto sync product deliverect when log out and close browser on webOwner.
    WEB-SA23-0035#1            30/05/2023      Customize            1. Move setting statement type from webSupport to webOwner.
    WEB-SA23-0037              12/06/2023      Customize            1. Separate settings ticket comments and special instructions on webDining, webOwner.
    WEB-SA23-0041              27/07/2023      Customize            1. New feature member discount on webDining, webOwner.
    WEB-SA23-0045              23/08/2023      Customize            1. Add setting discount time on webOwner, webDining, webOnTable.
    WEB-SA23-0048              11/09/2023      Customize            1. Add setting Otter on webOwner, webSupport.
    WEB-SA24-0013              10/04/2024      Customize            1. Fix bug can't save discount for ios on webOwner.
    WEB-SA24-0013#2            11/04/2024      Customize            1. Fix bug invalid date and minimum order and maximum order of discount on webOwner.
    WEB-SA24-0012              22/04/2024      Customize            1. New requriement - Add setting promotion "Day Of Week" on webOwner, webDining, webOnTable.
                                                                    2. Fix bug promotion shippping type and maximum uses on webOwner, webDining, webOnTable.
                                                                    3. Fix bug clear discount code when don't use on webDining.
    WEB-SA24-0016              05/06/2024      Customize            1. New requirement - Add pay at store only and notification for Smile On Table on webOwner, webSupport, webOnTable.
    WEB-SA24-0016#3            17/09/2024      Customize            1. Edit text notification for Smile On Table on webOwner, webOnTable.
    WEB-SA24-0030              04/11/2024      Customize            1. Fix bug product dropdown selection in My Setting tab on webOwner.
*/

var gcSpecialInstructions = 'special-instructions'; //Added and End By SMILEDINING-SA18-0003
var gcSpecialInstructionsForTicket = 'special-instructions-for-ticket'; //Added and End By WEB-SA23-0037

var textShowTime24h = '=== 24 Hours ===';
var textShowTimeClosed = '=== Closed ===';
var time_start_24h = "00:00:00";
var time_end_24h = "23:59:00";

var setupAlert = {
    title: "Are you sure?",
    text: "If you leave before saving, your changes will be lost.",
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "Leave this page",
    cancelButtonText: "Stay",
    closeOnConfirm: false,
    closeOnCancel: false,
    confirmButtonClass: "btn theme default-button",
    cancelButtonClass: "btn btn-danger",
};

var switchActiveWidth60px = '60px';
var switchActiveWidth55px = '55px';

var statusAdd = 'Add';
var statusUpdate = 'Update';
var statusLink = 'Link'; //Added and End by SMILEDINING-SA18-0026

var cMobileMenuLogIn = 'Log In';
var cMobileLiveOrder = 'Live Orders';
var cMobileMenuSetup = 'Menu Setup';
var cMobileConfigSetup = 'Config Setup';
var cMobileMySetting = 'My Setting';
var cMobileTemplate = 'Template';
var cMobileReport = 'Reports';
var cMobileBalance = 'Balance';
var cMobileStatements = 'Statements';
var cMobileDeliveryBilling = 'Delivery Billing';    //Added and End by SMILEDINING-SA22-0013
//var cMobileGiftCard = 'E-GiftCard'; //Added and End by SMILEDINING-SA19-0011 //Modified and End by WEB-SA22-0064#1
//Added by WEB-SA22-0064#1
var cMobileGiftCard = 'Setup E-Card';
var cMobileGiftCardView = 'View E-Card';
//End Added by WEB-SA22-0064#1
var cMobileMarketing = 'Marketing'; //Added and End by SMILEDINING-SA21-0063#5
var cMobileLogOff = 'Log out'

var cfrmLogIn = 'frmLogIn';
var cfrmLogIn_Email = '#txtLogInEmail';
var cfrmLogIn_Password = '#txtLogInPassword';

var cfrmChangeRestaurant = 'frmChangeRestaurant';

var cfrmRegister = 'frmRegister';
var cfrmRegister_Email = '#txtRegisterEmail';
var cfrmRegister_FirstName = '#txtRegisterFirstName';
var cfrmRegister_LastName = '#txtRegisterLastName';
var cfrmRegister_Password = '#txtRegisterPassword';
var cfrmRegister_ConfirmPassword = '#txtRegisterConfirmPassword';

var cfrmForgotPassword = 'frmForgotPassword';
var cfrmForgotPassword_Email = '#txtForgotPassswordEmail';

var cfrmResetPassword = 'frmResetPassword';
var cfrmResetPassword_Password = '#txtResetPasswordCurrentPassword';
var cfrmResetPassword_ConfirmPassword = '#txtResetPasswordConfirmPassword';

var cfrmDiscount = 'frmDiscount';
var cfrmDiscount_DiscountName = '#txtDiscount_DiscountName';
var cfrmDiscount_DiscountDesc = '#txtDiscount_DiscountDesc';
var cfrmDiscount_DiscountCouponCode = '#txtDiscountSetUp_CouponCode';
//Added by WEB-SA24-0013#2
var cfrmDiscount_TermsAmountMin = '#txtDiscount_TermsAmountMin';
var cfrmDiscount_TermsAmountMax = '#txtDiscount_TermsAmountMax';
var cfrmDiscount_StartDate = '#txtDiscount_StartDate';
var cfrmDiscount_EndDate = '#txtDiscount_EndDate';
//End Added by WEB-SA24-0013#2

//Added by WEB-SA23-0041
var cfrmMemberDiscount = 'frmMemberDiscount';
var cfrmMemberDiscount_DiscountName = '#txtMemberDiscount_DiscountName';
var cfrmMemberDiscount_IsCouponAmtOff = '#txtMemberDiscount_IsCouponAmtOff';
var cfrmMemberDiscount_CouponAmountOff = '#txtMemberDiscount_CouponAmountOff';
var cfrmMemberDiscount_IsCouponPercentOff = '#txtMemberDiscount_IsCouponPercentOff';
var cfrmMemberDiscount_CouponPercentOff = '#txtMemberDiscount_CouponPercentOff';
var cfrmMemberDiscount_TermsAmountMin = '#txtMemberDiscount_TermsAmountMin';
var cfrmMemberDiscount_TermsAmountMax = '#txtMemberDiscount_TermsAmountMax';
//Added by WEB-SA24-0013#2
var cfrmMemberDiscount_StartDate = '#txtMemberDiscount_StartDate';
var cfrmMemberDiscount_EndDate = '#txtMemberDiscount_EndDate';
//End Added by WEB-SA24-0013#2
var cModalSetupMemberDiscount = '#modalSetUpMemberDiscount';
//End Added by WEB-SA23-0041

//Added by SMILEDINING-SA18-0003
var cfrmAutoCharge = 'frmAutoCharge';
var cfrmAutoCharge_AutoChargeName = '#txtAutoCharge_AutoChargeName';
var cfrmAutoCharge_AmountCharge = '#txtAutoCharge_AmountCharge';
var cfrmAutoCharge_PercentCharge = '#txtAutoCharge_PercentCharge';

//Added by SMILEDINING-SA20-0006
var cfrmAutoCharge_IsPickUp = '#txtAutoCharge_IsPickUp';
var cfrmAutoCharge_IsDelivery = '#txtAutoCharge_IsDelivery';
//End Added by SMILEDINING-SA20-0006

//Added by SMILEDINING-SA22-0020
var cfrmPaymentFee = 'frmPaymentFee';
var cfrmPaymentFee_PaymentFeeName = '#txtPaymentFee_PaymentFeeName';
var cfrmPaymentFee_AmountCharge = '#txtPaymentFee_AmountCharge';
var cfrmPaymentFee_PercentCharge = '#txtPaymentFee_PercentCharge';
var cfrmPaymentFee_IsAmountCharge = '#txtPaymentFee_IsAmountCharge';
var cfrmPaymentFee_IsPercentCharge = '#txtPaymentFee_IsPercentCharge';
var cfrmPaymentFee_IsPickUp = '#txtPaymentFee_IsPickUp';
var cfrmPaymentFee_IsDelivery = '#txtPaymentFee_IsDelivery';
//End Added by SMILEDINING-SA22-0020

var cfrmHoliday = 'frmHoliday';
var cfrmHoliday_Description = '#txtHoliday_Description';
//End Added by SMILEDINING-SA18-0003

//Added by SMILEDINING-SA20-0018
var cfrmGraguityCharge = 'frmGraguityCharge';
var cfrmGraguityCharge_PartySize = '#txtGratuityCharge_GratuityPartySize';
//End Added by SMILEDINING-SA20-0018
//Added by SMILEDINING-SA20-0016
var cfrmPromotionMainPrice = 'frmPromotionMainPrice';
var cfrmPromotionMainPrice_PriceMin = '#txtPromotionMainPrice_PriceMin';
var cfrmPromotionMainPrice_PriceMax = '#txtPromotionMainPrice_PriceMax';

var cfrmPromotionMainFood = 'frmPromotionMainFood';
var cfrmPromotionMainFood_FoodCatId = '#txtPromotionMainFood_FoodCatId';
var cfrmPromotionMainFood_FoodId = '#txtPromotionMainFood_FoodId';
var cfrmPromotionMainFood_Qty = '#txtPromotionMainFood_Qty';

var cfrmPromotionFreeFood = 'frmPromotionFreeFood';
var cfrmPromotionFreeFood_FoodCatId = '#txtPromotionFreeFood_FoodCatId';
var cfrmPromotionFreeFood_FoodId = '#txtPromotionFreeFood_FoodId';
var cfrmPromotionFreeFood_Qty = '#txtPromotionFreeFood_Qty';

var cfrmPromotionGroupMainFood = 'frmPromotionGroupMainFood';
var cfrmPromotionGroupMainFood_GroupName = '#txtPromotionGroupMainFood_GroupName';
var cfrmPromotionGroupMainFood_MainFood = '#txtPromotionGroupMainFood_MainFood';

var cfrmPromotionGroupFreeFood = 'frmPromotionGroupFreeFood';
var cfrmPromotionGroupFreeFood_GroupName = '#txtPromotionGroupFreeFood_GroupName';
var cfrmPromotionGroupFreeFood_FreeFood = '#txtPromotionGroupFreeFood_FreeFood';

var cfrmPromotionCondition = 'frmPromotionCondition';
var cfrmPromotionCondition_PromotionTypeId = '#txtPromotionCondition_PromotionTypeId';
var cfrmPromotionCondition_MainPriceId = '#txtPromotionCondition_MainPriceId';
var cfrmPromotionCondition_MainFood = '#txtPromotionCondition_MainFood';
var cfrmPromotionCondition_FreeFood = '#txtPromotionCondition_FreeFood';
var cfrmPromotionCondition_AutoFree = '#txtPromotionCondition_AutoFree';
//Added by WEB-SA22-0062
var cfrmPromotionCondition_PromotionName = '#txtPromotionCondition_PromotionName';
//var cfrmPromotionCondition__totalUse = '#txtPromotionCondition_TotalUse'; //Modified and End by WEB-SA24-0012
//Added by WEB-SA24-0012
var cfrmPromotionCondition_StartDate = '#txtPromotionCondition_StartDate';
var cfrmPromotionCondition_EndDate = '#txtPromotionCondition_EndDate';
var cfrmPromotionCondition_MaxUses = '#txtPromotionCondition_MaxUses';
//End Added by WEB-SA24-0012
//End Added by WEB-SA22-0062
//End Added by SMILEDINING-SA20-0016

//Added by SMILEDINING-SA20-0031
var cfrmShopClose = 'frmShopClose';
var cfrmDeleteShopClose = 'frmDeleteShopClose';
var cfrmShopClose_StartDate = '#txtShopClose_StartDate';
var cfrmShopClose_EndDate = '#txtShopClose_EndDate';
var cfrmShopClose_Reason = '#txtShopClose_Reason';
//End Added by SMILEDINING-SA20-0031
//Added by SMILEDINING-SA20-0048
var cfrmUploadDisCountOneTimeUse = 'frmUploadDiscountOneTimeUse';
var cfrmDownloadDisCountOneTimeUse = 'frmDownloadDiscountOneTimeUse';
var cfrmUpdateDisCountOneTimeUse = 'frmUpdateDiscountOneTimeUse';
var cfrmDisCountOneTimeUse_Name = '#txtDiscountOneTimeUseName';
var cfrmDisCountOneTimeUse_Code = '#txtDiscountOneTimeUseCode';
//Added by WEB-SA24-0013#2
var cfrmDisCountOneTimeUse_TermsAmountMin = '#txtDiscountOneTimeUse_TermsAmountMin';
var cfrmDisCountOneTimeUse_TermsAmountMax = '#txtDiscountOneTimeUse_TermsAmountMax';
var cfrmDisCountOneTimeUse_StartDate = '#txtDiscountOneTimeUseStartDate';
var cfrmDisCountOneTimeUse_EndDate = '#txtDiscountOneTimeUseEndDate';
//End Added by WEB-SA24-0013#2
//End Added by SMILEDINING-SA20-0048
var cfrmInstructionLinkToFoodUpdate = 'frmInstructionLinkToFoodUpdate'; //Added and End by SMILEDINING-SA21-0004

//Added By SMILEDINING-SA19-0008
var cfrmCouponDelivery = 'frmCouponDelivery'
var cfrmCouponDelivery_CounponName = '#txtCouponDeliveryName';
var cfrmCouponDelivery_CounponCode = '#txtCouponDeliveryCode';
var cfrmisTotalCouponDelivery = '#isTotalCouponDelivery';
var cfrmTotalCouponDelivery = '#txtCouponDeliveryTotalCoupon';
var cfrmisMinimumCouponDelivery = '#isMinimumCouponDelivery';
var cfrmMinimumOrderCouponDelivery = '#txtCouponDeliveryMinimumOrder';
var cfrmisFreeCouponDelivery = '#isFreeCouponDelivery';
var cfrmisAmountCouponDelivery = '#isAmountCouponDelivery';
var cfrmAmountOffCouponDelivery = '#txtCouponDeliveryAmountOff';
var cfrmisPercentCouponDelivery = '#isPercentCouponDelivery';
var cfrmPercentOffCouponDelivery = '#txtCouponDeliveryPercentOff';
//Added by WEB-SA24-0013#2
var cfrmCouponDelivery_StartDate = '#txtCouponDeliveryStartDate';
var cfrmCouponDelivery_EndDate = '#txtCouponDeliveryEndDate';
//End Added by WEB-SA24-0013#2
var cJsonGetCouponDelivery = 'jsonGetCouponDelivery';
var cModalSetupCouponDelivery = '#modalSetupCouponDelivery';
var cDataGridCouponDelivery = '#gridCouponDelivery';
//End Added By SMILEDINING-SA19-0008

var cFoodSetUpdateDragging = 'FoodSetUpdateDragging';
var cFoodCategoryUpdateDragging = 'FoodCategoryUpdateDragging';
var cFoodUpdateDragging = 'FoodUpdateDragging';

var cfrmChoiceOptionSetUp = 'frmChoiceOptionSetUp';
var cfrmChoiceOptionSetUp_ChoiceOptionName = '#txtChoiceOptionSetUp_ChoiceOptionName';
var cfrmChoiceOptionSetUp_ChoiceOptionNameAlt = '#txtChoiceOptionSetUp_ChoiceOptionNameAlt';
var cfrmChoiceOptionSetUp_ChoiceOptionMultiple = '#chkChoiceOptionSetUp_ChoiceOptionMultiple';
var cfrmChoiceOptionSetUp_ChoiceOptionRequire = '#chkChoiceOptionSetUp_ChoiceOptionRequire';
var cfrmSearchReport = 'frmSearchReport';
var cfrmSearchBalance = 'frmSearchBalance';
var cfrmSearchStatement = 'frmSearchStatement';

var cfrmChoiceSetUp = 'frmChoiceSetUp';
var cfrmChoiceModifySetUp = 'frmChoiceModifySetUp'; //Added and End by SMILEDINING-SA20-0018
var cfrmChoiceSetUp_ChoiceName = '#txtChoiceSetUp_ChoiceName';
var cfrmChoiceSetUp_ChoiceNameAlt = '#txtChoiceSetUp_ChoiceNameAlt';
var cfrmChoiceSetUp_ChoiceOptionID = '#selChoiceSetUp_ChoiceOptionID'
var cfrmChoiceSetUp_ChoicePrice = '#txtChoiceSetUp_ChoicePrice';
var cfrmChoiceSetUp_ChoiceWeigth = '#txtChoiceSetUp_ChoiceWeigth';
var cChoiceOptionUpdateDragging = 'ChoiceOptionUpdateDragging';
var cChoiceUpdateDragging = 'ChoiceUpdateDragging';
var cChoiceModifyUpdateDragging = 'ChoiceModifyUpdateDragging'; //Added and End by SMILEDINING-SA20-0018
var cfrmLinkToFood = 'frmLinkToFood'; //Add and End by SMILEDINING-SA18-0026
var cfrmCopyChoice = 'frmCopyChoice'; //Added and End by SMILEDINING-SA18-0031
var cfrmCopyChoiceModify = 'frmCopyChoiceModify'; //Added and End by SMILEDINING-SA20-0018
//Added by SMILEDINING-SA19-0019
var cChoiceUpDateSortable = 'ChoiceUpDateSortable';
var cChoiceOptionUpDateSortable = 'ChoiceOptionUpDateSortable';
//End Added by SMILEDINING-SA19-0019
//Added by SMILEDINING-SA20-0018
var cChoiceModifyUpDateSortable = 'ChoiceModifyUpDateSortable';
var cFoodPrefixUpDateSortable = 'FoodPrefixUpDateSortable';
//End Added by SMILEDINING-SA20-0018
var cfrmTaxRateSetUp = 'frmTaxRateSetUp';
var cfrmTaxRateSetUp_TaxRateName = '#txtTaxRateSetUp_TaxRateName';
var cfrmTaxRateSetUp_TaxRatePercentage = '#txtTaxRateSetUp_TaxRatePercentage';
var cfrmTaxRateSetUp_MarkChar = '#txtTaxRateSetUp_MarkChar';
var cfrmTaxRateSetUp_MarkLegend = '#txtTaxRateSetUp_MarkLegend';

var cfrmRevenueClassSetUp = 'frmRevenueClassSetUp';
var cfrmRevenueClassSetUp_RevenueClassId = '#txtRevenueClassSetUp_RevenueClassId';
var cfrmRevenueClassSetUp_RevenueClassName = '#txtRevenueClassSetUp_RevenueClassName';
var cfrmRevenueClassSetUp_TaxRateID = '#txtRevenueClassSetUp_TaxRateID';
var cfrmRevenueClassSetUp_IsLiquor = '#chkRevenueClassSetUp_IsLiquor';

//Added by SMILEDINING-SA20-0018
var cfrmGraguityChargeSetup = 'frmGraguityChargeSetUp';
var cfrmGraguityChargeSetup_GraguityName = '#txtGraguityChargeSetUp_GraguityName';

var cfrmFoodPrefix = 'frmFoodPrefixSetUp';
var cfrmFoodPrefixSetUp_PrefixName = '#txtFoodPrefixSetUp_PrefixName';
//End Added by SMILEDINING-SA20-0018

//Added by SMILEDINING-SA21-0021
var cfrmIconSetup = 'frmIconSetUp';
var cfrmIconSetUp_IconName = '#txtIconSetUp_IconName';
//End Added by SMILEDINING-SA21-0021

var cfrmMenuSetup = 'frmMenuSetup';
var cfrmMySetting = 'frmMySetting'; // Added and End by SMILEDINING-SA20-0006
var cfrmFoodSetSetup = 'frmFoodSetSetup';
var cfrmFoodSetSetUp_FoodSetName = '#txtFoodSetSetUp_FoodSetName';
var cfrmFoodCategorySetUp_FoodCategoryName = '#txtFoodCategorySetUp_FoodCategoryName';
var cfrmFoodSetUp_FoodName = '#txtFoodSetUp_FoodName';
var cfrmFoodSetUp_RevenueClassId = '#txtFoodSetUp_RevenueClassId';
var cfrmFoodSetUp_ProductId = '#chkFoodSetUp_ProductId';    // Added and End by SMILEDINING-SA20-0006
var cfrmFoodSetUp_ThirdParty = '#chkFoodSetSetUp_IsthirdParty'; // Added and End by SMILEDINING-SA21-0018#1
var cfrmReport_FromDate = '.txtReport_FromDate';
var cfrmReport_EndDate = '.txtReport_EndDate';
var cfrmReport_FromDateCompare = '.txtReport_FromDateCompare';
var cfrmReport_EndDateCompare = '.txtReport_EndDateCompare';
var cfrmReport_ShowCompare = '.btnReport_ShowCompare';
var cfrmBalance_FromDate = '.txtBalance_FromDate';
var cfrmBalance_EndDate = '.txtBalance_EndDate';

var cfrmFoodCategorySetup = 'frmFoodCategorySetup';
var cfrmFoodSetup = 'frmFoodSetup';
var cfrmAddCopyFood = 'frmAddCopyFood';
var cfrmFoodThirdPartySetup = 'frmFoodThirdPartySetup'; //Added and End by SMILEDINING-SA21-0018
var cfrmFoodImageSetup = 'frmFoodImageSetup';   //Added and End by SMILEDINING-SA21-0028

var cDisableFoodCategory = 'DisableFoodCategory';
var cJsonGetFoodSettimeMap = 'JsonGetFoodSettimeMap';
var cJsonKeepSessionAlive = 'jsonKeepSessionAlive';

var cfrmChangeImage = 'frmChangeImage';

var cfrmUpdateRestaurant = 'frmUpdateRestaurant';
var cfrmEditRestaurant_ShopNumber = '#txtEditRestaurantShopNumber';
var cfrmEditRestaurant_ShopName = '#txtEditRestaurantShopName';
var cfrmEditRestaurant_ShopPhone = '#txtEditRestaurantShopPhone';
var cfrmEditRestaurant_ShopFax = '#txtEditRestaurantShopFax';
var cfrmEditRestaurant_ShopZipCode = '#txtEditRestaurantShopZipCode';
var cfrmEditRestaurant_ShopTimeZoneCode = '#txtEditRestaurantShopTimeZoneCode';
//Added by SMILEDINING-SA19-0017
var cfrmShopCloseStartDate = '#hdShopCloseStartDate';
var cfrmShopCloseEndDate = '#hdShopCloseEndDate';
var cError_ShopCloseDate_NotEqual = '- Both of "ShopCloseDate" should be empty';
var cError_ShopCloseDate_Error = 'StartDate must less than or equal EndDate';
//End Added by SMILEDINING-SA19-0017

var cfrmUpdateMapZone = 'frmUpdateMapZone';
var cfrmUpdateMapZoneMile = 'frmUpdateMapZoneMile';
var cfrmUpdateDeliveryFreeTime = 'frmUpdateDeliveryFreeTime'; // Added and End by SMILEDINING-SA19-0005
var cfrmUpdateCustomMapZoneMile = 'frmUpdateCustomMapZoneMile'; //Added and End by SMILEDINING-SA20-0043
//Added by SMILEDINING-SA20-0043#2
var cfrmUpdateMapZoneMile_StartMile = '#txtMapZoneMile_StartMile';
var cfrmUpdateMapZoneMile_EndMile = '#txtMapZoneMile_EndMile';
var cfrmUpdateMapZoneMile_Price = '#txtMapZoneMile_Price';
var cfrmUpdateMapZoneMile_StartMile2 = '#txtMapZoneMile_StartMile2';
var cfrmUpdateMapZoneMile_EndMile2 = '#txtMapZoneMile_EndMile2';
var cfrmUpdateMapZoneMile_Price2 = '#txtMapZoneMile_Price2';
var cfrmUpdateMapZoneMile_StartMile3 = '#txtMapZoneMile_StartMile3';
var cfrmUpdateMapZoneMile_EndMile3 = '#txtMapZoneMile_EndMile3';
var cfrmUpdateMapZoneMile_Price3 = '#txtMapZoneMile_Price3';
//End Added by SMILEDINING-SA20-0043#2
//Added by WEB-SA22-0040
var cfrmUpdateMinimumOrderDeliveryCharge = 'frmUpdateMinimumOrderDeliveryCharge';
var cfrmTxtMinimumOrder_MinimumOrder = '#txtMinimumOrder_MinimumOrder_';
var cfrmTxtMinimumOrder_MaximumOrder = '#txtMinimumOrder_MaximumOrder_';
var cfrmTxtMinimumOrder_DeliveryChargeAmount = '#txtMinimumOrder_DeliveryChargeAmount_';
//End Added by WEB-SA22-0040

//SetTime
var cfrmUpdateSetTimeMenu = 'frmUpdateSetTimeMenu';

//Setting
var cfrmUploadImageSetting = 'frmUploadImageSetting';
var cfrmUpdateSetting = 'frmUpdateSetting';
var cfrmUpdateMenuSetting = 'frmUpdateMenuSetting'; //Added and End by SMILEDINING-SA20-0003
//Added by SMILEDINING-SA21-0025
var cfrmUpdateMenuSetting_Topic = '#txtMenuSetting_Topic';
var cfrmUpdateMenuSetting_Question = '#txtMenuSetting_Question';
var cfrmUpdateMenuSetting_DescriptionSelect = '#txtMenuSetting_DescriptionSelect';
var cfrmUpdateMenuSetting_DescriptionNotSelect = '#txtMenuSetting_DescriptionNotSelect';
var cfrmUpdateMenuSetting_AddPrice = '#txtMenuSetting_AddPrice';
var cfrmUpdateMenuSetting_ShowUtensils = '#txtMenuSetting_ShowUtensils';
//End Added by SMILEDINING-SA21-0025
var cfrmUploadImagesPath = '#showUploadImageLogo'; //Added and End by SMILEDINING-SA18-0038
var cfrmDeleteImageLogo = 'frmDeleteImageLogo'; // Added and End by SMILEDINING-SA19-0004
var cfrmUpdateShopStatus = 'frmUpdateShopStatus' //Added and End by SMILEDINING-SA20-0006
//Added by SMILEDINING-SA21-0035
var cfrmUploadImageBackgroundSetting = 'frmUploadImageBackgroundSetting';
var cfrmUploadImagesBackgroundPath = '#showUploadImageBackground';
var cfrmDeleteImageBackground = 'frmDeleteImageBackground';
//End Added by SMILEDINING-SA21-0035

//Announcement
//Added by SMILEDINING-SA19-0004
var cfrmUpdateAnnouncement = 'frmUpdateAnnouncement';
var cfrmUploadAnnounceImage = 'frmUploadAnnounceImage';
var cfrmUploadAnnounceImagePath = '#showUploadAnnounceImage';
var cfrmDeleteAnnounceImage = 'frmDeleteAnnounceImage'
//End Added by SMILEDINING-SA19-0004

//Added by SMILEDINING-SA20-0028
var cfrmUploadAnnounceCustomImage = 'frmUploadAnnounceCustomImage';
var cfrmUploadAnnounceCustomImagePath = '#showUploadAnnounceCustomImage';
var cfrmDeleteAnnounceCustomImage = 'frmDeleteAnnounceCustomImage'
//End Added by SMILEDINING-SA20-0028

//Template
var cfrmUploadImageTemplate = 'frmUploadImageTemplate';
var cfrmUpdateTemplate = 'frmUpdateTemplate';

//Modified by SMILEDINING-SA18-0045
//var cfrmCustomerProfileUpdate = 'frmCustomerProfileUpdate';
//var cfrmCustomerProfileUpdate_FirstName = '#txtUpdateCustomerProfileFirstName';
//var cfrmCustomerProfileUpdate_LastName = '#txtUpdateCustomerProfileLastName';
//End Modified by SMILEDINING-SA18-0045

var cfrmChangePassword = 'frmChangePassword';
var cfrmChangePassword_Password = '#txtChangePasswordOldPassword';
var cfrmChangePassword_NewPassword = '#txtChangePasswordNewPassword';
var cfrmChangePassword_ConfirmNewPassword = '#txtChangePasswordConfirmPassword';

//Modified by SMILEDINING-SA18-0045
//var cfrmCustomerAddressAdd = 'frmCustomerAddressAdd';
//var cfrmCustomerAddressAdd_AddressName = '#txtCustomerAdressAdd_AddressName';
//var cfrmCustomerAddressAdd_Address = '#txtCustomerAdressAdd_Address';
//var cfrmCustomerAddressAdd_AddressApt = '#txtCustomerAdressAdd_AddressApt';
//var cfrmCustomerAddressAdd_ZipCode = '#txtCustomerAdressAdd_ZipCode';
//var cfrmCustomerAddressAdd_Phone = '#txtCustomerAdressAdd_Phone';

//var cfrmCustomerAddressUpdate = 'frmCustomerAddressUpdate';
//var cfrmCustomerAddressUpdate_AddressName = '#txtCustomerAdressUpdate_AddressName';
//var cfrmCustomerAddressUpdate_Address = '#txtCustomerAdressUpdate_Address';
//var cfrmCustomerAddressUpdate_AddressApt = '#txtCustomerAdressUpdate_AddressApt';
//var cfrmCustomerAddressUpdate_ZipCode = '#txtCustomerAdressUpdate_ZipCode';
//var cfrmCustomerAddressUpdate_Phone = '#txtCustomerAdressUpdate_Phone';
//End Modified by SMILEDINING-SA18-0045

var cfrmDiscount = 'frmDiscount';

var cfrmLogOff = 'frmLogOff';

//Added by SMILEDINING-SA19-0011
var cfrmGiftCard = 'frmGiftCard';
var cfrmEditAllGiftCardImage = 'frmEditAllGiftCardImage';
var cfrmNewGiftCardImage = 'frmNewGiftCardImage';
var cfrmDeleteGiftCardImage = 'frmDeleteGiftCardImage';
var cfrmAddNewGiftCardValue = 'frmAddNewGiftCardValue';
var cfrmAddNewCustomDiscount = 'frmAddNewCustomDiscount';
var cModalShowAddNewGiftCardValue = '#modalShowAddNewGiftCardValue';
var cModalShowAddNewCustomDiscount = '#modalShowAddNewCustomDiscount';
var cModalShowGuideLineGiftCardValue = '#modalShowGuideLineGiftCardValue';
var cModalAddGiftCardImage = '#modalAddGiftCardImage';
var cGuideLineGiftCardValue = '#guidelineGiftCardValue';
var cfrmTxtAddGiftCardValueName = '#txtAddGiftCardValueName';
var cfrmTxtAddGetAmount = '#txtAddGetAmount';
var cfrmIsAddDiscountAmount = '#hdIsDiscountAmount';
var cfrmIsAddDiscountPercent = '#hdIsDiscountPercent';
var cfrmTxtAddDiscountAmount = '#txtAddDiscountAmount';
var cfrmTxtCustomDiscountValueName = '#txtCustomDiscountValueName';
var cfrmTxtCustomDiscountName = '#txtCustomDiscountName';
var cfrmTxtCustomDiscountDesc = '#txtCustomDiscountDesc';
var cfrmTxtRangMin = '#txtRangMin';
var cfrmTxtRangMax = '#txtRangMax';
var cfrmIsCustomDiscountAmount = '#hdCustomDiscountAmount';
var cfrmIsCustomDiscountPercent = '#hdCustomDiscountPercent';
var cfrmTxtCustomDiscountAmount = '#txtCustomDiscountAmount';
var cfrmTxtCustomDiscountPercent = '#txtCustomDiscountPercent';
var cfrmIsAllDay = '#hdAllDay';
var cfrmCustomDiscountStartDate = '#hdCustomDiscountStartDate';
var cfrmCustomDiscountEndDate = '#hdCustomDiscountEndDate';
var cfrmIsAllTime = '#hdAllTime';
var cfrmCustomDiscountStartTime = '#hdCustomDiscountStartTime';
var cfrmCustomDiscountEndTime = '#hdCustomDiscountEndTime';
var cfrmGiftCardSlick = '#rowGiftCardSlick';
var cfrmGiftCardGuidelineSlick = '#rowGiftCardGuidelineSlick';
var cfrmTxtDiscountAmount = '#txtDiscountAmount';
var cfrmTxtDiscountPercent = '#txtDiscountPercent';
var cfrmPanelCustomDiscount = '#panelCustomDiscount';
var cfrmPanelNormalDiscount = '#panelNormalDiscount';
var cfrmEditSortingGiftCardValue = 'frmEditSortingGiftCardValue';
var cfrmGiftCardSetup = 'frmGiftCardSetup'; //Added and End by SMILEDINING-SA21-0006

var cfrmTabCreateGiftCardValue = '#tabCreateGiftCardValue';
var cfrmTabCreateCustomDiscount = '#tabCreateCustomDiscount';
var cfrmTabCompleteGiftCard = '#tabCompleteGiftCard';
var cfrmTabUploadGiftCardImage = '#tabUploadGiftCardImage';
var cfrmTabImageDescription = '#tabImageDescription';
var cfrmTabNewGiftCardImage = '#tabNewGiftCardImage';
var cfrmTabNewImageDescription = '#tabNewImageDescription';
var cfrmTabCompleteNewGiftCard = '#tabCompleteNewGiftCard';
var cfrmTabGiftCardImage = '#tabGiftCardImage';
var cfrmTabGiftCardValue = '#tabGiftCardValue';

var cfrmStep1GiftCard = '#step1-giftCard';
var cfrmStep2GiftCard = '#step2-giftCard';
var cfrmStep3GiftCard = '#step3-giftCard';
var cfrmStep4GiftCard = '#step4-giftCard';
var cfrmStep1GiftCardImage = '#step1-giftCardImage';
var cfrmStep2GiftCardImage = '#step2-giftCardImage';
var cfrmStep3GiftCardImage = '#step3-giftCardImage';

var cfrmDivGiftCardImage = '#divGiftCard-Image';
var cfrmDivGiftCardValue = '#divGiftCard-Value';
var cfrmUploadGiftCardImage = '#uploadGiftCardImage';
var cfrmUploadNewGiftCardImage = '#uploadNewGiftCardImage';

var cfrmRowDetailCustomDiscount = '#rowDetailCustomDiscount';
var cfrmRowGuidelineDetailCustomDiscount = '#rowGuidelineDetailCustomDiscount';
var cfrmGetGiftCardView = 'frmGetGiftCardView';
var cfrmGetGiftCardView_FromDate = '#txtGiftCardView_FromDate';
var cfrmGetGiftCardView_EndDate = '#txtGiftCardView_EndDate';
//End Added by SMILEDINING-SA19-0011
var cfrmCustomCurbsideInstruction = '#txt_CustomCurbsideInstruction'; //Added and End by SMILEDINING-SA20-0015
var cfrmIsSmileDining = '#txt_isSmileDining';//Added and End by SMILEDINING-SA20-0015#1

var cfrmSearchStatement = 'frmSearchStatement';             //Added and End by SMILEDINING-SA20-0007
//Added and End by SMILEDINING-SA21-0063#4
var cfrmExportCustomer = 'frmExportCustomer';
var cfrmExportCustomer_SelectRow = '#txtfrmExportCustomer_SelectRow';
//End Added by SMILEDINING-SA21-0063#4

var cJsonGetConfigSetUp = 'jsonGetConfigSetUp';
var cJsonGetReport = 'jsonGetReport';
var cJsonGetBalance = 'jsonGetBalance';
var cJsonGetStatement = 'jsonGetStatement';
var cJsonUpdateStatementType = 'jsonUpdateStatementType'; //Added and End by WEB-SA23-0035#1
var cJsonGetDeliveryBilling = 'jsonGetDeliveryBilling'; //Added and End by SMILEDINING-SA22-0013
var cJsonGetMarketing = 'jsonGetMarketing'; //Added and End by SMILEDINING-SA21-0063
//var cJsonGetSummaryTicket = 'jsonGetSummaryTicket';       //Modified and End by SMILEDINING-SA20-0007
var cJsonGetLiveOrder = 'jsonGetDataLiveOrder';
var cJsonGetDataMenu = 'jsonGetDataMenu';
var cJsonGetSyncProduct = 'jsonGetSyncProduct'; //Added and End by SMILEDINING-SA21-0014
//Added by SMILEDINING-SA19-0011
var cJsonGetGiftCard = 'jsonGetGiftCard';
var cJsonGetGiftCardView = 'jsonGetGiftCardView';
//End Added by SMILEDINING-SA19-0011
var cJsonGetTemplate = 'jsonGetTemplate';
var cJsonGetGlobalConfig = 'jsonGetGlobalConfig';
var cJsonGetMap = 'jsonGetMap';
var cJsonGetAllTimeZone = 'jsonGetAllTimeZone';
var cJsonGetDataMqtt = 'jsonGetDataMqtt'; //Added and End by WEB-SA22-0066
var cJsonGetFoodSetTimeMapById = 'jsonGetFoodSetTimeMapById';
var cJsonGetAllTime = 'jsonGetAllTime';
var cJsonGetDiscount = 'jsonGetDiscount';
var cJsonGetDiscountType = 'jsonGetDiscountType'; //Added and End by SMILEDINING-SA18-0006
var cJsonGetDiscountTimeMap = 'jsonGetDiscountTimeMap'; //Added and End by WEB-SA23-0045
//Added by SMILEDINING-SA18-0003
var cJsonGetAutoCharge = 'jsonGetAutoCharge';
var cJsonGetPaymentFee = 'jsonGetPaymentFee';   //Added and End by SMILEDINING-SA22-0020
var cJsonGetHoliday = 'jsonGetHoliday';
//End Added by SMILEDINING-SA18-0003
var cJsonGetGraguity = 'jsonGetGraguity';   //Added and End by SMILEDINING-SA20-0018
var cJsonGetDataPromotion = 'jsonGetDataPromotion';   //Added and End by SMILEDINING-SA20-0016
var cJsonGetShopClose = 'jsonGetShopClose'; //Added and End by SMILEDINING-SA20-0031
var cJsonGetDisCountOneTimeUse = 'jsonGetDisCountOneTimeUse'; //Added and End by SMILEDINING-SA20-0048
var cJsonGetCustomer = 'jsonGetCustomer';
var cJsonGetCustomerAddress = 'jsonGetCustomerAddress';
var cJsonGetCustomerNotifications = 'jsonGetCustomerNotifications'; //Added and End by WEB-SA24-0016
var cJsonRefreshToken = 'jsonRefreshToken';
var cJsonGetCurrentDateTime = 'jsonGetCurrentDateTime';
var cJsonUpdateGlobalConfig = 'jsonUpdateGlobalConfig';     //Added and End by SMILEDINING-SA19-0021
var cJsonGetAllDataSetting = 'JsonGetAllDataSetting'; //Added and End by SMILEDINING-SA21-0058
var cJsonCheckAuthentication = 'JsonCheckAuthentication'; //Added and End by WEB-SA22-0064

var cError_Email_Empty = '- Field "Email" should not be empty.';
var cError_Email_Validate = '- Must be a valid Email Address.';
var cError_FirstName_Empty = '- Field "First Name" should not be empty.';
var cError_LastName_Empty = '- Field "Last Name" should not be empty.';
var cError_Password_Empty = '- Field  "Password"  should not be empty.';
var cError_Password_Length = '- The Field Password must be at least 6 characters.';
var cError_ConfirmPassword_Empty = '- Field  "Confirm Password"  should not be empty.';
var cError_ConfirmPassword_Length = '- The Field Confirm Password must be at least 6 characters.';
var cError_Password_NotMatch = '- The password and confirmation password do not match.';
var cError_Fail_TimeOut = 'Invalid form data was sent to server. Please refresh this form and try again.';
var cError_Fail_NoInternet = 'Can\'t connect to the Internet.';
var cError_Fail_Mqtt_Connection = 'Sorry, The server has problem. Please contact support.'; //Added and End by WEB-SA23-0001
var cError_CustomerAddress_Fail = 'Invalid Address.';
var cError_CustomerAddress_ZipCode = 'Invalid Zip code';
var cError_CustomerAddress_Name_Empty = '- Field  "Address Name"  should not be empty.';
var cError_CustomerAddress_ZipCode_Empty = '- Field  "Zip code"  should not be empty.';
var cError_CustomerAddress_Phone_Empty = '- Field  "Phone"  should not be empty.';

var cError_Date = 'Invalid Date';
var cError_DateCompare = 'Invalid Date Compare';
var cError_ChoiceOption_Invalid = 'Invalid Option';
var cError_ChoiceOptionName_Empty = '- Field "Choice Option Name" should not be empty.';
var cError_ChoiceOptionName_Duplicate = 'Option is duplicate. Please choose other option.';
var cError_ChoiceOptionName_Deliverect = 'Cannot choose option from Deliverect. Please choose other option.'; //Added and End by SMILEDINING-SA21-0066#21
var cError_ChoiceName_Empty = '- Field "Choice Name" should not be empty.';
var cError_TaxRateName_Empty = '- Field "Tax Rate Name" should not be empty.';
var cError_RevenueClassName_Empty = '- Field "Revenue Class Name" should not be empty.';
var cError_IconName_Empty = '- Field "Icon Name" should not be empty.';//Added and End by SMILEDINING-SA21-0021#6
//Added by SMILEDINING-SA20-0018
var cError_GraguityName_Empty = '- Field "Gratuity Name" should not be empty.';
var cError_PrefixName_Empty = '- Field "Prefix Name" should not be empty.';
//Added by SMILEDINING-SA20-0018
var cError_FoodSetName_Empty = '- Field "Food Set Name" should not be empty.';
var cError_FoodCategoryName_Empty = '- Field "Food Category Name" should not be empty.';
var cError_FoodName_Empty = '- Field "Food Name" should not be empty.';
var cError_RevenueClassId_Empty = '- Please select "Revenue".';
var cError_Product_Empty = '- Please select at least one product.'; //Added and End by SMILEDINING-SA20-0006

var cError_ShopName_Empty = '- Field "Shop Name" should not be empty.';
var cError_ShopPhone_Empty = '- Field "Shop Phone" should not be empty.';
var cError_ShopFax_Empty = '- Field "Shop Fax" should not be empty.';
var cError_ShopPostal_Empty = '- Field "Shop Postal" should not be empty.';
var cError_ShopTimeZone_Empty = '- Field "Time Zone" should not be empty.';
var cError_ShopCloseReason_Empty = '- Field "Close reason" should not be empty.'; //Added and End by SMILEDINING-SA20-0031#3

var cError_DiscountName_Empty = '- Field "Discount Name" should not be empty.';
var cError_DiscountCouponCode_Empty = '- Field "Coupon Code" should not be empty.';
//Added by WEB-SA23-0041
var cError_DiscountCouponAmountOff_Empty = '- Field "Amount Off" should not be empty.';
var cError_DiscountCouponPercentOff_Empty = '- Field "Percent Off" should not be empty.';
//End Added by WEB-SA23-0041
var cError_Discount_Date_Invalid = '- Start Date cannot be greater then End Date.'; //Added and End by WEB-SA24-0013#2

//Added by SMILEDINING-SA18-0003
var cError_AutoChargeName_Empty = '- Field "AutoCharge Name" should not be empty.';
var cError_AutoChargeShippingType_Empty = '- Please select "PickUp" or "Delivery" or Both.';    //Added and End by SMILEDINING-SA20-0006
var cError_HolidayDesc_Empty = '- Field "Holiday Description" should not be empty.';
//End Added by SMILEDINING-SA18-0003
//Added by SMILEDINING-SA22-0020
var cError_PaymentFeeName_Empty = '- Field "Payment Fee Name" should not be empty.';
var cError_PaymentFeeShippingType_Empty = '- Please select "PickUp" or "Delivery" or Both.';
//End Added by SMILEDINING-SA22-0020
//Added by SMILEDINING-SA20-0018
var cError_GraguityPartySize_Empty = '- Field "Party More Than" should not be empty.';
var cError_GraguityPartySize_LessThan = '- Field "Party More Than" can not less than "1".';
//End Added by SMILEDINING-SA20-0018
//Added By SMILEDINING-SA19-0008
var cError_CouponDelivery_Name = '- Field "Coupon Name" should not be empty.';
var cError_CouponDelivery_Code = '- Field "Coupon Code" should not be empty.';
var cError_DeliveryCharge = '- Please select one of "Delivery Charge" option';
//var cError_TotalDeliveryCoupon = '- Field "Total Use" must be number between 0 - 99999'; //Modified and End by WEB-SA24-0013
var cError_TotalDeliveryCoupon = '- Field "Maximum Uses" must be number between 0 - 99999'; //Added and End by WEB-SA24-0013
var cError_MinimumOrderDeliveryCoupon = '- Field "Minimum Order" must be number between 0.00 - 99999.00';
var cError_AmountOffDeliveryCoupon = '- Field "Amount Off" must be number between 0.00 - 99999.00';
var cError_PercentOffDeliveryCoupon = '- Field "Percent Off" must be number between 0.00 - 100.00';
//End Added By SMILEDINING-SA19-0008
//Added by SMILEDINING-SA20-0043
var cError_CustomOverMile_MaxMile_LessThan = '- Field "Max Mile" must be more than Field "End Mile" of select zone.';
var cError_CustomOverMile_MaxMile_Duplicate = '- Field "Max Mile" can not duplicate value';
//End Added by SMILEDINING-SA20-0043
//Added by SMILEDINING-SA20-0043#2
var cError_DeliveryZone1_StartMile = '- Field "Start Mile" in Deliver Zone 1 should not be empty.';
var cError_DeliveryZone1_EndMile = '- Field "End Mile" in Deliver Zone 1 should not be empty.';
var cError_DeliveryZone1_Price = '- Field "Price" in Deliver Zone 1 should not be empty.';

var cError_DeliveryZone2_StartMile = '- Field "Start Mile" in Deliver Zone 2 should not be empty.';
var cError_DeliveryZone2_EndMile = '- Field "End Mile" in Deliver Zone 2 should not be empty.';
var cError_DeliveryZone2_Price = '- Field "Price" in Deliver Zone 2 should not be empty.';

var cError_DeliveryZone3_StartMile = '- Field "Start Mile" in Deliver Zone 3 should not be empty.';
var cError_DeliveryZone3_EndMile = '- Field "End Mile" in Deliver Zone 3 should not be empty.';
var cError_DeliveryZone3_Price = '- Field "Price" in Deliver Zone 3 should not be empty.';
//End Added by SMILEDINING-SA20-0043#2
//Added by WEB-SA22-0040
var cError_MinimumOrder_MinimumOrder = '- Field "Minimum Order" should not be empty.';
var cError_MinimumOrder_MaximumOrder = '- Field "Maximum Order" should not be empty.';
var cError_MinimumOrder_DeliveryChargeAmount = '- Field "Delivery Charge Amount" should not be empty.';
var cError_MinimumOrder_MaxLessThanMin = '- Minimum Order value should less than Maximum Order value.';
var cError_MinimumOrder_DeliveryZone = '- Please select Delivery Zone.'; //Added and End by WEB-SA23-0016
//End Added by WEB-SA22-0040
//Added by SMILEDINING-SA20-0016
var cError_PromotionMainPrice_PriceMin_Empty = '- Field "Price Min" should not be empty.';
var cError_PromotionMainPrice_PriceMax_Empty = '- Field "Price Max" should not be empty.';
var cError_PromotionMainPrice_MaxLessThanMin = 'Min value should less than Max value.';

var cError_PromotionFood_FoodCatId_Empty = '- Field "Section" should not be empty.';
var cError_PromotionFood_FoodId_Empty = '- Field "Food" should not be empty.';
var cError_PromotionFood_Qty_Empty = '- Field "Order Quantity" should not be empty.';
var cError_PromotionFood_Qty_Min = '- Field "Order Quantity" should not less than "1".';

var cError_PromotionGroupFood_GroupName_Empty = '- Field "Group Name" should not be empty.';
var cError_PromotionGroupFood_Food_Empty = '- Food in group should not be empty.';

var cError_Promotion_FreeTerms_Empty = '- "Free Terms" should not be empty.';
var cError_Promotion_MainPrice_Empty = '- Please select range main price.';
var cError_Promotion_MainPrice_InRange = 'This value should not in range of another main price range'; //Added and End by WEB-SA24-0012
var cError_Promotion_MainFood_Empty = '- Please select group main food.';
var cError_Promotion_FreePrice_Empty = '- Please select group free food.';
var cError_Promotion_FreePrice_Not_AutoFree = '- If you close Auto Free , you must select group free food more than one.';
//Added by WEB-SA22-0062
var cError_Promotion_Name_Empty = '- Field "Promotion Name" should not be empty ';
//var cError_Promotion_TotalUse_LessThan = '- Field "Total Use" can not less than "1".'; //Modified and End by WEB-SA24-0012
var cError_Promotion_MaxUses_LessThan = '- Field "Maximum Uses" can not less than "1".'; //Added and End by WEB-SA24-0012
//End Added by WEB-SA22-0062
//End Added by SMILEDINING-SA20-0016
//Added by SMILEDINING-SA21-0025
var cError_MenuSetting_Topic_Empty = '- Field "Topic of utensils" should not be empty.';
var cError_MenuSetting_Question_Empty = '- Field "Question of utensils" should not be empty';
var cError_MenuSetting_DescriptionSelect_Empty = '- Field "Description of utensils (select question box)" should not be empty.';
var cError_MenuSetting_DescriptionNotSelect_Empty = '- Field "Description of utensils (not select question box)" should not be empty.';
var cError_MenuSetting_AddPrice_Empty = '- Field "Add price utensils" should not be empty.';
//End Added by SMILEDINING-SA21-0025

var cError_Address_Delivery = 'Sorry. Can not find delivery addresss.';
var cError_Map_Delivery = 'Sorry. Your address is not in the delivery area.';
var cError_Session_TimeOut = 'Sorry, your session timed out please order online next time.';

var cError_ImagesPath_Empty = '- Please choose image before upload.'; //Added and End by SMILEDINING-SA18-0038

var cError_Dev_Url = 'Please set url in layout page';

//Added by SMILEDINING-SA19-0011
var cError_GiftCerValueName_Empty = '- Field "Name" should not be empty.';
var cError_GiftCerGetAmount = 'Price should more than 0.00';
var cError_GiftCerDiscountType = 'Please select choice in "Discount Type"';
var cError_GiftCerGetAmountDuplicate = 'Price should not duplicate';
var cError_GiftCerValueDiscountAmount_GreaterGetAmount = 'Discount Amount value should not greater than Min Get Amount';
var cError_GiftCerValueDiscountPercent_Greater100 = 'Percent Amount value should not greater than 100%';
var cError_GiftCerCustomDiscountValue_Empty = '- Field "Name" should not be empty.';
var cError_GiftCerCustomDiscountName = '- Field "Name" should not be empty.';
var cError_GiftCerCustomDiscountDesc = '- Field "Description" should not be empty.';
var cError_GiftCerCustomDiscountMinMax_Empty = '- Field "Min and Max" should not be empty.';
var cError_GiftCerCustomDiscountMinMax_NotZero = 'Min and Max  value should more than "0"';
var cError_GiftCerCustomDiscountMin_LessMax = 'Min value should less than Max value.';
var cError_GiftCerCustomDiscountType = 'Please select choice in Discount Type.';
var cError_GiftCerCustomDiscountAmount_Empty = '- Field "Amount" should not be empty.';
var cError_GiftCerCustomDiscountAmount_GreaterMin = 'Amount value should not greater than Min value';
var cError_GiftCerCustomDiscountPercent_Empty = '- Field "Percent" should not be empty.';
var cError_GiftCerCustomDiscountPercent_Greater100 = 'Percent value should not greater than 100%';
var cError_GiftCerCustomDiscountDay_Empty = '- Field "Start and End Day" should not be empty.';
var cError_GiftCerCustomDiscountTime_Empty = '- Field "Start and End Time" should not be empty.';
var cError_GiftCerCustomDiscountDay_Greater = '- Start Date cannot be greater then End Date.';

var cError_GiftCerCustomDiscountMin_Duplicate = 'Min value should not inside another Custom Price';
var cError_GiftCerCustomDiscountMax_Duplicate = 'Max value should not inside another Custom Price';
var cError_GiftCerCustomDiscountMinMax_Duplicate = 'Another Custom Price inside this Custom Price';

var cError_GiftCerImage_Empty = 'Please select image.';     //Added and End by SMILEDINING-SA21-0077

var cError_GiftCerCustomDiscount_InRange = 'This value should not in range of';
var cError_GiftCerCustomDiscount_CrossRange = 'This range should not cross another custom price range';
var cError_CustomDiscount_InRange = 'This value should not in range of another discount range'; //Added and End by SMILEDINING-SA20-0011

var cError_GiftCerImage_IsActive = ' please selcet at least 1 active image';
var cError_CustomCurbsideInstruction_Empty = '- Field "Curbside Instructions" should not be empty.'; //Added and End by SMILEDINING-SA20-0015

var cError_ExportCustomerSelectRow_Empty = '- Please select row per page.';

var cMessage_LeavePage = 'Are you sure? If you leave before saving, your changes will be lost.';
var cMessage_DeleteImage = 'Are you sure? GiftCard image will permanent delete.';
var cError_DeleteImage_ForeignKey = 'This giftcard image id is reference of another data'; 
var cMessage_SubmitGiftCard = 'Do you want submit. Please recheck before confirm?';
var cMessage_SubmitGiftCardImage = 'Do you want upload image?';
var cMessage_GiftCardValue_Empty = 'Your normal price is empty?';
var cMessage_Unlock_Deliverect = 'Are you sure, you want to unlock?'; //Added and End by SMILEDINING-SA21-0066#24
var cPathGiftCardImage = '';
var cDummyImage = 'http://placehold.it/150x100';
var cMobile = 'MOBILE';
var cTABLET = 'TABLET';
var cDESKTOP = 'DESKTOP';
//End Added by SMILEDINING-SA19-0011
//Added by SMILEDINING-SA21-0028
var cPathFileBase = '';
var cFoodPath = 'FOOD';
var cMenuPath = 'MENU';
//End Added by SMILEDINING-SA21-0028
//var cDeliverectLogo = 'https://frontend.deliverect.com/static/media/DELIVERECT_logo_symbol.bc0a839a.svg'; //Added and End by SMILEDINING-SA21-0066#21 //Modified and End by WEB-SA23-0026#1
var cDeliverectLogo = 'https://storage.googleapis.com/deliverect-integrations-production/pos/DELIVERECT_logo_symbol-61b764677d7430001973e4c1.svg'; //Added and End by WEB-SA23-0026#1


var cCssInputValidateError = 'input-validation-error';

var cSwal_Icon_Error = 'error';
var cSwal_Icon_Success = 'success';
var cSwal_Icon_Warning = 'warning'; //Added and End by WEB-SA22-0064
var cSwal_Alert_Error = 'Error...';
var cSwal_Alert_Success = 'Success...';
var cSwal_Alert_Required = 'Forget Something?';
var cSwal_Alert_InvalidLogIn = 'Invalid Login.';

var cDevextremeMarkerIcon = '//js.devexpress.com/Demos/RealtorApp/images/map-marker.png';
var cGooGleMapMarkerIcon = 'https://maps.google.com/mapfiles/kml/pal2/icon32.png';

var cDay_Sunday = 'Sunday';
var cDay_Monday = 'Monday';
var cDay_Tuesday = 'Tuesday';
var cDay_Wednesday = 'Wednesday';
var cDay_Thursday = 'Thursday';
var cDay_Friday = 'Friday';
var cDay_Saturday = 'Saturday';
var cDay_AllDay = 'AllDay';

var divShowTimeSun = $('#divShowTimeSunTimeMenuEdit');
var divShowTimeMon = $('#divShowTimeMonTimeMenuEdit');
var divShowTimeTue = $('#divShowTimeTueTimeMenuEdit');
var divShowTimeWed = $('#divShowTimeWedTimeMenuEdit');
var divShowTimeThu = $('#divShowTimeThuTimeMenuEdit');
var divShowTimeFri = $('#divShowTimeFriTimeMenuEdit');
var divShowTimeSat = $('#divShowTimeSatTimeMenuEdit');
var divShowTimeAlldays = $('#divShowTimeAllDaysTimeMenuEdit');
//Added by WEB-SA23-0045
var cDivShowDiscountTimeMapSun = 'divShowDiscountTimeMapSun';
var cDivShowDiscountTimeMapMon = 'divShowDiscountTimeMapMon';
var cDivShowDiscountTimeMapTue = 'divShowDiscountTimeMapTue';
var cDivShowDiscountTimeMapWed = 'divShowDiscountTimeMapWed';
var cDivShowDiscountTimeMapThu = 'divShowDiscountTimeMapThu';
var cDivShowDiscountTimeMapFri = 'divShowDiscountTimeMapFri';
var cDivShowDiscountTimeMapSat = 'divShowDiscountTimeMapSat';
var cDivShowDiscountTimeMapAlldays = 'divShowDiscountTimeMapAllDays';
//End Added by WEB-SA23-0045
//Added by WEB-SA24-0012
var cDivShowPromotionTimeMapSun = 'divShowPromotionTimeMapSun';
var cDivShowPromotionTimeMapMon = 'divShowPromotionTimeMapMon';
var cDivShowPromotionTimeMapTue = 'divShowPromotionTimeMapTue';
var cDivShowPromotionTimeMapWed = 'divShowPromotionTimeMapWed';
var cDivShowPromotionTimeMapThu = 'divShowPromotionTimeMapThu';
var cDivShowPromotionTimeMapFri = 'divShowPromotionTimeMapFri';
var cDivShowPromotionTimeMapSat = 'divShowPromotionTimeMapSat';
var cDivShowPromotionTimeMapAlldays = 'divShowPromotionTimeMapAllDays';
//End Added by WEB-SA24-0012

//Added by SMILEDINING-SA19-0005
var divShowDeliveryFreeTime = $('#divShowDeliveryFreeTime');
var modalDeliveryFreeTime = $('#modalDeliveryFreeTime');
//End Added by SMILEDINING-SA19-0005

var cPaybyCash = 'CASH';
var cPaybyCredit = 'CREDIT';
var cDelivery = 'DELIVERY';
var cPickUp = 'PICKUP';
var cProtocal = 'https';
var cGlobal_application = 'Web';

/*inital variable*/
var vmViewIndex;
var _isDelete = false;
var _currentTime = '';
var _signalConnect = false;
var _hub, _hubCheck;
var _timeoutHandle;

var cMenuLinkToFood = "MenuLinkToFood"; //Added and End by SMILEDINING-SA18-0026
//Added by SMILEDINING-SA19-0011
var cMenuEgiftCard = 'MenuEgiftCard';
var cMenuSmileDining = 'MenuSmileDining';
var cMenuDeliveryBilling = 'MenuDeliveryBilling';   //Added and End by SMILEDINING-SA22-0013
//End Added by SMILEDINING-SA19-0011
var cMenuSmileContactlessDining = 'MenuSmileContactlessDining'; // Added and end by SMILEDINING-SA20-0006
var cMenuSmileThirdPartyIntegrations = 'MenuSmileThirdPartyIntegrations'; // Added and End by WEB-SA22-0064

//Added by SMILEDINING-SA19-0002
var cDefaultCustomButtonPayAtStore = 'Pay at store';
var cDefaultCustomButtonPayCredit = 'Pay credit';
var cDefaultCustomSpecialInstruction = 'Add note extra sauce no onions etc.';
//End Added by SMILEDINING-SA19-0002
//Added by SMILEDINING-SA21-0053
var cDefaultCustomButtonPickup = 'Pickup';
var cDefaultCustomButtonDelivery = 'Delivery';
//End Added by SMILEDINING-SA21-0053
//Added by SMILEDINING-SA20-0006
var products = {
    cAllProduct: '0',
    cSmilePos: '1',
    cSmileDining: '2',
    cSmileEgiftCard: '3',
    cSmileContactless: '4',
    cSmileThirdPartyIntegrations: '5', //Added and End by SMILEDINING-SA21-0014
    mapName: {
        '0': { name: 'View All Products', shotName: 'View All Products' },
        '1': { name: 'Smile POS', shotName: 'Smile POS' },
        '2': { name: 'Smile Dining', shotName: 'Smile Dining' },
        '3': { name: 'Smile E-Gift Card', shotName: 'E-Gift Card' },
        //'4': { name: 'Smile Contactless Dining', shotName: 'Contactless Dining' },    //Modified and End by WEB-SA24-0030
        '4': { name: 'Smile On Table', shotName: 'Smile On Table' },    //Added and End by WEB-SA24-0030
        '5': { name: 'Smile Third Party Integrations', shotName: 'Smile Third Party' }   //Added and End by SMILEDINING-SA21-0014
    }
};
//End Added by SMILEDINING-SA20-0006
var cCurbsideInstructionDefault = 'Call the restaurant once you arrive and they will bring your order out to you. The number will be available after you place your order.'; //Added and End by SMILEDINING-SA20-0015
//Added by SMILEDINING-SA20-0018
var cChoiceType = {
    modify: '0',
    option: '1',
    both: '2'
};
var cTabChoiceOptionId = '2';
var cTabChoiceModifyId = '3';

var cOperater = {
    cAdd: '1',
    cMultiply: '2',
    mapName: {
        '1': { name: 'Add Up' },
        '2': { name: 'Multiply' }
    },
    mapSymbol: {
        '1': { symbol: '+' },
        '2': { symbol: '*' }
    }
};
//End Added by SMILEDINING-SA20-0018

//Added by SMILEDINING-SA20-0011
var shippingType = {
    cAll: '0',
    cPickUp: '1',
    cDelivery: '2',
    mapName: {
        '0': { name: 'All' },
        '1': { name: 'Pickup' },
        '2': { name: 'Delivery' }
    }
};
//End Added by SMILEDINING-SA20-0011
//Added by WEB-SA23-0035#1
var statementTypes = {
    cWeekly: '0',
    cMonthly: '1',
    mapName: {
        '0': { name: 'Weekly' },
        '1': { name: 'Monthly' }
    }
};
//End Added by WEB-SA23-0035#1
//Added by WEB-SA23-0041
var couponTypes = {
    cAuto: 0,
    cCoupon: 1,
    cMember: 2,
    cRegister: 3,
    mapName: {
        0: { name: 'Auto' },
        1: { name: 'Coupon' },
        2: { name: 'Member' },
        3: { name: 'Register' }
    }
};
//End Added by WEB-SA23-0041
//Added by WEB-SA23-0048
var thirdPartyIntegrationsProviders = {
    cDeliverect: 1,
    cOtter: 2,
    mapName: {
        1: { name: 'Deliverect' },
        2: { name: 'Otter' }
    }
};
//End Added by WEB-SA23-0048
//Added by SMILEDINING-SA20-0016
var cConditionFood = '1';
var cConditionPrice = '2';

var cStepFree = 1;
var cStepConditionType = 2;
var cStepMain = 3;
var cStepCondition = 4;
//End Added by SMILEDINING-SA20-0016
//Added by SMILEDINING-SA21-0004
var cFoodSet = 'FoodSet';
var cFoodCat = 'FoodCat';
var cFood = 'Food';
//End Added by SMILEDINING-SA21-0004
var cColorBlack = '#000000';    //Added and End by SMILEDINING-SA21-0021
//Added by SMILEDINING-SA22-0034
var cTimeMenu_MaxTimeMenuEdit = 10;
var cTimeMenu_StartSortingMultiHour = 2;
//End Added by SMILEDINING-SA22-0034
//Added by WEB-SA23-0045
var cDiscountTimeMap_StartSorting = 1;
var cDiscountTimeMap_MaxSorting = 3;
//End Added by WEB-SA23-0045
//Added by WEB-SA24-0012
var cPromotionTimeMap_StartSorting = 1;
var cPromotionTimeMap_MaxSorting = 3;
//End Added by WEB-SA24-0012
var cMinimumOrder_MaxMinimumOrderDeliveryCharge = 3; //Added and End by WEB-SA22-0040
//Added by WEB-SA24-0016
var cCustomerNotifications_Max = 9;
//var cCustomerNotifications_DefaultDescription = 'Call the waiter/waitress'; //Modified and End by WEB-SA24-0016#3
var cCustomerNotifications_DefaultDescription = 'Call your server'; //Added and End by WEB-SA24-0016#3
//End Added by WEB-SA24-0016
//Added by WEB-SA22-0066
var mqtt;
var reconnectTimeoutMqtt = 1000;
var cTopicTable = '/table/';
//End Added by WEB-SA22-0066