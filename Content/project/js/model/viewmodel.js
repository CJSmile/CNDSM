/*
    SMILEDINING-SA18-0003      01/12/2018      Customize            1. Holiday, AutoCharge, Special instructions.
    SMILEDINING-SA18-0006      01/19/2018      Customize            1. Check discount code expired , Show foodset menu hours , Add discount type
    SMILEDINING-SA18-0012      05/21/2018      Customize            1. Add FoodNameAlt.
    SMILEDINING-SA18-0020      08/08/2018      Customize            1. Add Tips Description in Setting
                                                                    2. Add Label Tips Description in checkout with credit card
                                                                    3. Fixbug Insert log Email   
                                                                    4. Fixbug Select Footset that Contains Food
                                                                    5. Change arrow color at tooltip Login and Register
                                                                    6. Change color number in cart to color white
    SMILEDINING-SA18-0023      08/23/2018      FixBug               1. Fixbug submit Validate can't submit again
                                                                    2. Fixbug first use Add food Validate firstname not working
    SMILEDINING-SA18-0024      08/04/2018      FixBug               1. Fixbug submit in modal layout Smaller
                                                                    2. Fixbug after dialog close combobox not reset
    SMILEDINING-SA18-0026      09/12/2018      Customize            1. Create function LinkToFood
    SMILEDINING-SA18-0029      09/18/2018      Customize            1. Add theme colour blue and green
                                                                    2. Add combobox choose theme
    SMILEDINING-SA18-0031      09/27/2018      Customize            1. Create function CopyChoice
    SMILEDINING-SA18-0033      10/08/2018      Customize            1. Edit Copy food name not have "Copy"
                                                                    2. Edit Copy food Save function to working in one Transaction
                                                                    3. Edit concept insert Log LinkToFood
                                                                    4. Edit CopyFood one food can copy multiple
                                                                    5. Fixbug copy ChoiceOption Set in menu food delete Option Set and Save but not Delete
                                                                    6. Edit concept insert log Copyfood to copyChoice concept 
                                                                    7. Edit Insert Log ChoiceOption on Food (Insert, Update, Delete)
                                                                    8. Fixbug Delete ChoiceOption Set on Food and Insert ChoiceOption Set Same Data bug data multiple
    SMILEDINING-SA18-0034      10/10/2018      Customize            1. Add column Active at grid linktofood
    SMILEDINING-SA18-0036      11/15/2018      Customize            1. Edit function Uploadimage upload new image delete old image
                                                                    2. smiledining mobile device nameshop to longer
                                                                    3. modal Autocharge after edit can't scroll in modal
                                                                    4. edit function GetDataOrderHistory in smiledining to new concept
                                                                    5. add new theme color (Red, Yellow, Navy, Gold, Beige, Pink, Black)
    SMILEDINING-SA18-0043      12/03/2018      Customize            1. Add discount and autocharge in getCheck LiveOrder
                                                                    2. Add discount and autocharge in getCheck Balance
                                                                    3. Fixbug save choiceOption multiple = false but can save maxChoice > 0
    SMILEDINING-SA19-0001      01/28/2019      Fixbug               1. Fixbug on safari browser can not click save
                                                                    2. Fixbug ChoiceOptionName can not use special alphabet.
                                                                    3. Fixbug add ChoiceOption in Food and delete can not save after delete.
							                                        4. Fixbug configSetUp Drag change sorting save same sorting
    SMILEDINING-SA19-0002      02/11/2019      Customize            1. Add field to custom text button pay at store and pay credit
                                                                    2. Edit button pay at store and pay credit get text data from database
                                                                    3. Add field to custom text placeholder special instruction
                                                                    4. Edit textarea special instruction get data placeholder from database
                                                                    5. Add field to set show/hide tips description (from pay at store and pay credit page)
                                                                    6. Edit and Add show/hide tips description (from pay at store and pay credit page)
    SMILEDINING-SA19-0004      03/13/2019      Customize            1. Add new tab menu 'Announcement' to 'Menu Setting' of SmileOwner
                                                                    2. Move 'Broad Text' of Menu Setting to 'Announcement'
                                                                    3. Create ''Announcement' module that include Header, Description, Badge.
                                                                    4. Add 'broad-active'  status for enable/disable on SmileDining (1=enable, 0=disable)
                                                                    5. Announcement must collaborative with active and close time of setup on SmileOwner.
                                                                    6. Upload/Delete AnnounceImage
                                                                    7. Delete Shop Logo
    SMILEDINING-SA19-0005      03/25/2019      Customize            1. Gennerate sql script for create table 'tbdeliveryfreetime'
                                                                    2. Add Delivery Free Time UI for Draw Maps and Set Mile at MySetting menu
                                                                    3. Delivery Free Time can separate date between Zone1, Zone2 and Zone3
                                                                    4. Control delivery charge of SmileDining depending on Shop map code and Zone of delivery
    SMILEDINING-SA19-0008      04/19/2019      Customize            1. Create Table tbcoupondelivery.
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
                                                                    2. Add filter Product on Menu Setup
                                                                    3. Add filter Product on Mysetting
                                                                    4. Added button for switch shop status more one products
                                                                    5. Change Tip Guide in Smile Dining From Web Owner
    SMILEDINING-SA20-0007      07/07/2020      Customize            1. New feature Gift Card.
    SMILEDINING-SA20-0010      16/07/2020      Customize            1. New feature set Out of Stock.
    SMILEDINING-SA20-0015       03/08/2020      Customize            1. New feature Curbside Pick up Option for Smile dining.
                                                                    2. Setting Open/Close for Curbside Pick up and setting instruction.
    SMILEDINING-SA20-0018      01/09/2020      Customize            1. Edit Config Setup for Choice Group,Choice Option,Choice Modify and Add Gratuity Charge.
                                                                    2. Add Setting Gratuity Charge to My Setting.
    SMILEDINING-SA20-0019      04/09/2020      Customize            1. Fix bug WebOwner Chang Choice Group.
                                                                    2. Fix bug don't show modal when dragging.
    SMILEDINING-SA20-0011      23/07/2020      Customize            1. New feature auto apply discount SmileDining.
    SMILEDINING-SA20-0016      21/10/2020      Customize            1. Promotion free food.
    SMILEDINING-SA20-0025      14/10/2020      Customize            1. Fix Bug Setting time Add all days.
    SMILEDINING-SA20-0032      10/29/2020      Customize            1. Add Tip Auto setting in Web Owner /Add field tip-auto globalConfig. 
                                                                    2. Add radio button tip guide auto/Modal Custom Amount tip in Web Dining.
                                                                    3. Config setting Service to keep data tbglobalconfig , tbglobalconfig_contactless.
    SMILEDINING-SA20-0028      21/10/2020      Customize            1. Upload/show Image Announcement(Lightbox)
                                                                    2. Add GlobalConfig image-annonce/image-announce-size/image-announce-active
    SMILEDINING-SA20-0036      22/11/2020      Customize            1. Fix bug menu setup copy choice two rounds invalid show choice.
    SMILEDINING-SA20-0037      23/11/2020      Customize            1. Fix bug shopClose invalid format in Firefox.
    SMILEDINING-SA20-0043      15/12/2020      Customize            1. Custom map zone mile price.
    SMILEDINING-SA20-0031      02/12/2020      Customize            1. Adjust shop close period date and time.
    SMILEDINING-SA20-0041#1    04/01/2021      Customize            1. Add period time.
    SMILEDINING-SA20-0043#1    05/01/2021      Customize            1. Change UI Custom mapzonemile.
    SMILEDINING-SA20-0043#2    06/01/2021      Customize            1. Add validate before save mapZoneMile.
    SMILEDINING-SA20-0043#3    06/01/2021      Customize            1. Fix bug decimal min mile of customMile.
    SMILEDINING-SA21-0001      08/01/2021      Customize            1. Setting Choice New Line.
    SMILEDINING-SA21-0002      13/01/2021      Customize            1. Enable or Disable Guest checkout on SmileDining.
    SMILEDINING-SA21-0004      24/01/2021      Customize            1. Close special instruction some menu or some category.
    SMILEDINING-SA21-0005      29/01/2021      Customize            1. Separate shop period time pickup and delivery.
    SMILEDINING-SA21-0006      12/02/2021      Customize            1. Add eGift card to SmileDining.
    SMILEDINING-SA21-0009      10/02/2021      Customize            1. Add id update to log for FoodSet, FoodCat, ChoiceOption, Choice, TaxRate, Revenues, Gratuity, FoodPrefix.
                                                                    2. Fix bug foodPrefix Status. 
    SMILEDINING-SA21-0014      08/03/2021      Customize            1. Add new product 'Smile Third Party Integrations' used Deliverect.
    SMILEDINING-SA20-0048      28/12/2020      Customize            1. Discount code one time use. 
    SMILEDINING-SA21-0015      09/03/2021      Customize            1. Fix bug validate setting promotion price.
                                                                    2. Fix bug smileDining disable button add to cart when invalid time.
                                                                    3. Fix bug mask input phone number don't working in mobile.
                                                                    4. Fix bug button pickup/delivery invalid color in mobile.
															        5. Fix bug selectBox in Config setup Choice Option and Choice Modify don't close when scroll window after open selectBox.
                                                                    6. Fix bug scroll window when open or close modal.
                                                                    7. Edit globalconfigservice.cs and globalconfigcontactlessservice.cs save value.
                                                                    8. Edit view of setupGiftCard webOwner and Fix bug of giftcard.
    SMILEDINING-SA20-0048#1    19/03/2021      Customize            1. Modified excel file DiscountOneTimeUse.
    SMILEDINING-SA21-0014#4    25/03/2021      Customize            1. Add IsAllergen to ProductTags.
    SMILEDINING-SA21-0014#7    09/04/2021      Customize            1. Modified deliverect sync product and added new feature snooze product. 
    SMILEDINING-SA21-0020      06/05/2021      Customize            1. Fix bug invalid date setting when open from different timezone.
    SMILEDINING-SA21-0018      21/05/2021      Customize            1. Setting food detail by third party to deliverect.
    SMILEDINING-SA21-0018#1    24/05/2021      Customize            1. Edit third party integration.
    SMILEDINING-SA21-0018#2    27/05/2021      Customize            1. Fixed bug setting Third Party Integrations.
    SMILEDINING-SA21-0018#3    28/05/2021      Customize            1. Fixed bug save choice and save image.
    SMILEDINING-SA21-0019      28/04/2021      Customize            1. Image show up.
    SMILEDINING-SA21-0017      20/04/2021      Customize            1. Discount coupon code can set minimum and maximim order and can set total of coupon used. 
    SMILEDINING-SA21-0021      11/06/2021      Customize            1. Setting icon image for show in smileDining.
    SMILEDINING-SA21-0017#1    17/06/2021      Customize            1. Fix bug discount.
    SMILEDINING-SA21-0019#1    18/06/2021      Customize            1. Fix bug image when click edit food.
    SMILEDINING-SA21-0024      21/06/2021      Customize            1. Fix bug delete choice when copy choice of food dupplicate choice of main food.
    SMILEDINING-SA21-0024#1    25/06/2021      Customize            1. Fixed bug copy choice can not copying food with duplicate choices.
    SMILEDINING-SA21-0025      29/06/2021      Customize            1. New feature cutlery or utensil option.
    SMILEDINING-SA21-0018#8    08/07/2021      Customize            1. Fixed bug select foodset and update food sorting.
    SMILEDINING-SA21-0021#6    12/07/2021      Customize            1. Fixed bug Config setup icon error message and Menu setup icon delete all icon.
    SMILEDINING-SA21-0028      30/07/2021      Customize            1. Edit UI Smile Dining and Contactless (Layout P2) and  edit webOwner can upload food Image for Desktop and Mobile. 
    SMILEDINING-SA21-0035      02/08/2021      Customize            1. Add upload background image in webOwner only Smile Contactless Dining. (Smile On Table P1)
                                                                    2. Create new Views following UI frame 1 and frame 2. (Smile On Table P1)
    SMILEDINING-SA21-0035#1    03/08/2021      Customize            1. Fix bug after login and refresh website is show error.
    SMILEDINING-SA21-0028#5    23/08/2021      Customize            1. Fix bug Layout p2 upload and show image.
    SMILEDINING-SA21-0028#6    26/08/2021      Customize            1. Fix bug upload custom image.
    SMILEDINING-SA21-0028#7    02/09/2021      Customize            1. Fixed bug upload image and button add to cart style in safari.
    SMILEDINING-SA21-0028#8    03/09/2021      Customize            1. Fixed bug path image.
    SMILEDINING-SA21-0053      10/09/2021      Customize            1. Add setting custom button order type
    SMILEDINING-SA21-0058      21/09/2021      Customize            1. Fix webOwner performance is slow.
    SMILEDINING-SA21-0063      07/10/2021      Customize            1. Add menu Marketing on web owner and Add menu Log on web support.
    SMILEDINING-SA21-0063#4    26/10/2021      Customize            1. Add download export customer excel file and Remove library ExcelJs,FileSaver.
    SMILEDINING-SA21-0055#2    28/10/2021      Customize            1. Add setting allow join ticket in webOwner and fix bug after join ticket in webContactless.
    SMILEDINING-SA21-0066#6    17/11/2021      Customize            1. Fix bug WebOwner disable edit food and choice and choiceOption from deliverect, and edit path food image from deliverect.
                                                                    2. Fix bug WebDining edit path food image and plu from deliverect, and alert confirm payment when channel is busy mode.
    SMILEDINING-SA21-0035#8    19/11/2021      Customize            1. Add setting show party size in webOwner.
                                                                    2. Fix bug Expiration Date of Credit Card and alert message when Expiration Date is not valid in webContactless.
                                                                    3. Fix bug apple pay show loading for waiting apple pay button in webContactless.
                                                                    4. Fix bug alert message send email receipt in webContactless.
    SMILEDINING-SA21-0066#7    22/11/2021      Customize            1. Fix bug disable edit choice and choiceOption from deliverect and copy food in webOwner. 
    SMILEDINING-SA21-0075      22/11/2021      Customize            1. Add crop image before upload.
    SMILEDINING-SA21-0077      23/11/2021      Customize            1. Fix bug deactive revenue class that used on some food and can't next step giftcard image when don't select image for upload.
    SMILEDINING-SA21-0075#2    23/11/2021      Customize            1. Fix image low quality when show on smiledining.
    SMILEDINING-SA21-0075#3    25/11/2021      Customize            1. Fix duplicate upload when delete image.
    SMILEDINING-SA21-0075#4    26/11/2021      Customize            1. Fix when click cancle then can't upload image.
    SMILEDINING-SA21-0066#11   26/11/2021      Customize            1. Fix bug LinkToFood disable food from deliverect in webOwner.
    SMILEDINING-SA21-0075#5    01/12/2021      Customize            1. Add switch active crop image and Fix bug custom image can't upload.
    SMILEDINING-SA21-0035#11   07/12/2021      Customize            1. Fix bug UI upload background image in webOwner only Smile Contactless Dining.
    SMILEDINING-SA21-0080#1    03/11/2021      Customize            1. Add Marketing Service Fee & Credit Card Fee to LiveOrder, Balance, Statement.
    SMILEDINING-SA21-0035#12   08/12/2021      Customize            1. Fix bug UI upload background image to show desktop first in webOwner.
    SMILEDINING-SA21-0083      17/12/2021      Customize            1. Add setting shop information.
    SMILEDINING-SA21-0083#1    22/12/2021      Customize            1. Hidden information setting when don't have script.
    SMILEDINING-SA21-0066#20   25/02/2022      Customize            1. Fix bug food imageThirdparty when edit image for food in WebOwner.
    SMILEDINING-SA21-0066#21   04/03/2022      Customize            1. Fix bug edit food for disable choice and choiceOption from Deliverect and copy food in webOwner.
    SMILEDINING-SA21-0066#22   07/03/2022      Customize            1. Fix bug click clear copy food for Deliverect in webOwner.
    SMILEDINING-SA21-0066#23   07/03/2022      Customize            1. Fix bug disable click clear copy food for Deliverect in webOwner.
    SMILEDINING-SA21-0066#24   15/03/2022      Customize            1. Add unlock food, choice and choiceOption from Deliverect in webOwner.
    SMILEDINING-SA22-0001#30   18/03/2022      Customize            1. Fix bug discount, autodiscount, coupondelivery,Auto Select foodsettimemap,
    SMILEDINING-SA22-0009      30/03/2022      Customize            1. Add setting utensils for contactless in webOwner (useing in kiosk).
    SMILEDINING-SA22-0010      08/04/2022      Customize            1. Fix bug error refresh page when logged in and upload food image on webOwner.
    SMILEDINING-SA22-0012#1    12/05/2022      Customize            1. Edit Dispatch for DoorDash in webSupport and webOwner.
    SMILEDINING-SA22-0013      23/05/2022      Customize            1. Add menu Delivery Billing for show report in webowner.
    SMILEDINING-SA22-0013#4    26/05/2022      Customize            1. Edit all code controller and service and edit print report.
    SMILEDINING-SA22-0013#5    30/05/2022      Customize            1. Edit format print delivery billing.
    SMILEDINING-SA22-0020      14/06/2022      Customize            1. Add new charge name 'Payment Fee' apply to order online.
    SMILEDINING-SA22-0033      25/08/2022      Customize            1. Add amount deposit and email customer for delivery billing in WebSupport and WebOwner.
    SMILEDINING-SA22-0034      06/09/2022      Customize            1. Edit Menu Hour can add more than two period in WebOwner.
    SMILEDINING-SA22-0037      14/09/2022      Customize            1. New feature setting delivery driver in WebOwner.
    WEB-SA22-0040              26/09/2022      Customize            1. New feature minimum order delivery charge.
    WEB-SA22-0040#1            30/09/2022      Customize            1. Fix bug UI and button save minimum order delivery charge in webOwner.
    WEB-SA22-0048              07/10/2022      Customize            1. Fix bug Setup Food in Menu Setup
    SMILEDINING-SA22-0034#3    12/10/2022      Customize            1. Fix bug show times on Menu Setup in WebOwner.
    WEB-SA22-0061              23/11/2022      Customize            1. Fix bug can't save choice for ios in webOwner.
    WEB-SA22-0062              29/11/2022      Customize            1. Add PromotionName, ShippingType, TotalUse in WebOwner
    WEB-SA22-0068              18/12/2022      Customize            1. Add FoodSetAutoHide in WebOwner.
                                                                    2. Hide FoodSet out of time in WebDinning and WebOntable.
    WEB-SA22-0062#1            22/12/2022      Customize            1. Fix bug ShippingType, TotalUse, EndDate Promotion in WebOwner
    WEB-SA22-0062#2            28/12/2022      Customize            1. Fix bug Promotion setup condition in WebOwner.
    WEB-SA23-0001              09/01/2023      Customize            1. Use MQTT send data to kiosk  in webOwner.
    WEB-SA23-0005              16/01/2023      Customize            1. Add setting estimated time in webOwner.
    WEB-SA23-0010              02/02/2023      Customize            1. Fix bug text for Taxes & Fees when no tax.
    WEB-SA22-0010#1            27/02/2023      Customize            1. Fix bug upload food image don't removing padding-right on webOwner.
    WEB-SA23-0026#1            15/05/2023      Customize            1. Fix bug auto sync product deliverect when log out and close browser on webOwner.
    WEB-SA23-0037              12/06/2023      Customize            1. Separate settings ticket comments and special instructions on webDining, webOwner.
    WEB-SA23-0041              27/07/2023      Customize            1. New feature member discount on webDining, webOwner.
    WEB-SA23-0045              23/08/2023      Customize            1. Add setting discount time on webOwner, webDining, webOnTable.
    WEB-SA23-0048              11/09/2023      Customize            1. Add setting Otter on webOwner, webSupport.
    WEB-SA24-0003              06/02/2024      Customize            1. New Requirement - Add Purchase date to E-Gift Card Menu on webOwner, webSupport.
                                                                    2. New Requirement - Change default Auto Sync Product to "Yes" on webSupport.
                                                                    3. Fix bug saving of shop address due to missing city on webSupport.
    WEB-SA24-0013              10/04/2024      Customize            1. Fix bug can't save discount for ios on webOwner.
    WEB-SA24-0013#1            10/04/2024      Customize            1. Fix bug invalid date coupon delivery on webOwner.
    WEB-SA24-0012              22/04/2024      Customize            1. New requriement - Add setting promotion "Day Of Week" on webOwner, webDining, webOnTable.
                                                                    2. Fix bug promotion shippping type and maximum uses on webOwner, webDining, webOnTable.
                                                                    3. Fix bug clear discount code when don't use on webDining.
    WEB-SA24-0016              05/06/2024      Customize            1. New requirement - Add pay at store only and notification for Smile On Table on webOwner, webSupport, webOnTable.
    WEB-SA24-0030              04/11/2024      Customize            1. Fix bug product dropdown selection in My Setting tab on webOwner.
    WEB-SA24-0030#1            04/11/2024      Customize            1. Fix bug product dropdown selection in My Setting tab (Check Data Changing) on webOwner.
    WEB-SA24-0030#2            04/11/2024      Customize            1. Fix bug product dropdown selection in My Setting tab (Check Data Changing 'tip-auto') on webOwner.
*/
/*
   View Model 
 */

function AllTemplateViewModel(data) {
    var self = this;
    self.data = new DataTemplateViewModel();

    self.draggedFoodImage = ko.observable();
    self.draggedTemplateImage = ko.observable();

    self.handleDragStart = function (pfoodImage, e) {
        self.draggedFoodImage(pfoodImage);
        self.draggedTemplateImage(null);
        return true;
    };

    self.handleDragStartDetail = function (pfoodImage, e) {
        self.draggedFoodImage(null);
        self.draggedTemplateImage(pfoodImage);
        return true;
    };

    self.handleDragOver = function (e) {
        console.log('dragOver');
    };

    self.handleDrop = function (photo, event) {
        var self = vmViewIndex.allTemplate;
        console.log('drop');
        //clone image
        var context = ko.contextFor(event.target);
        var index = context.$index();
        if (self.draggedFoodImage() != null) {
            self.data.templateMain()[index].templateId(self.data.templateId());
            self.data.templateMain()[index].foodName(self.draggedFoodImage().foodName());
            self.data.templateMain()[index].foodPrice(self.draggedFoodImage().foodPrice());
            self.data.templateMain()[index].image(self.draggedFoodImage().foodImage());
            self.data.templateMain()[index].imageName(self.draggedFoodImage().foodImageName());
            self.data.templateMain()[index].visibleImage(true);
        }
        if (self.draggedTemplateImage() != null) {
            self.data.templateMain()[index].templateId(self.data.templateId());
            self.data.templateMain()[index].foodName('Food Name');
            self.data.templateMain()[index].foodPrice(0);
            self.data.templateMain()[index].image(self.draggedTemplateImage().templateImage());
            self.data.templateMain()[index].imageName(self.draggedTemplateImage().templateImageName());
            self.data.templateMain()[index].visibleImage(true);
        }
    };

    self.handleDropDetail = function (photo, event) {
        var self = vmViewIndex.allTemplate;

        //clone image
        var context = ko.contextFor(event.target);
        var index = context.$index();
        if (self.draggedFoodImage() != null) {
            self.data.templateDetail()[index].templateId(self.data.templateId());
            self.data.templateDetail()[index].image(self.draggedFoodImage().foodImage());
            self.data.templateDetail()[index].imageName(self.draggedFoodImage().foodImageName());
            self.data.templateDetail()[index].visibleImage(true);
            self.data.templateDetail()[index].topic('Topic');
            self.data.templateDetail()[index].content('Content');
        }
        if (self.draggedTemplateImage() != null) {
            self.data.templateDetail()[index].templateId(self.data.templateId());
            self.data.templateDetail()[index].image(self.draggedTemplateImage().templateImage());
            self.data.templateDetail()[index].imageName(self.draggedTemplateImage().templateImageName());
            self.data.templateDetail()[index].visibleImage(true);
            self.data.templateDetail()[index].topic('Topic');
            self.data.templateDetail()[index].content('Content');
        }
    };
    self.handleDropLogo = function (photo, event) {
        var self = vmViewIndex.allTemplate;
        if (self.draggedFoodImage() != null) {
            self.data.image(self.draggedFoodImage().foodImage());
            self.data.imageName(self.draggedFoodImage().foodImageName());
        }
        if (self.draggedTemplateImage() != null) {
            self.data.image(self.draggedTemplateImage().templateImage());
            self.data.imageName(self.draggedTemplateImage().templateImageName());
        }
    };


    self.clickVisibleImage = function (data, event) {
        data.templateId(0);
        data.image(null);
        data.foodName('');
        data.foodPrice(0.00);
        data.visibleImage(false);
    };

    self.clickVisibleImageDetail = function (data, event) {
        data.templateId(0);
        data.image(null);
        data.topic('');
        data.content('');
        data.visibleImage(false);
    };

    self.clickVisibleImageLogo = function (data, event) {
        var self = vmViewIndex.allTemplate.data;
        self.image(null);
        self.imageName(null);
    };

    self.clickActiveTemplate = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.data.active,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            var self = vmViewIndex.allTemplate.data;
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    self.clickShowPrice = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.data.showPrice,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            var self = vmViewIndex.allTemplate.data;
            if (item.value == true) {
                self.showPrice(true);
            } else {
                self.showPrice(false);
            }
        }
    });

    self.disableUpdateTemplateSubmit = ko.observable(false);

    function setDisableSubmitUpdateTemplate(setDisable) {
        self.disableUpdateTemplateSubmit(setDisable);
    };

    $('#uploadImage').change(function () {
        $('#showUploadImage').val($(this).val());
    });
}

function DataTemplateViewModel(data) {
    var self = this;
    if (isEmpty(data)) {
        self.foodImage = ko.observableArray([]);
        self.templateImage = ko.observableArray([]);
        self.templateConfig = ko.observableArray([]);
        self.templateMainShow = ko.observableArray([]);
        self.templateDetailShow = ko.observableArray([]);

        //config select
        self.templateId = ko.observable(0);
        self.templateName = ko.observable('');
        self.imageMainQty = ko.observable(0);
        self.imageDetailQty = ko.observable(0);
        self.welcomeTopic = ko.observable('');
        self.welcomeContent = ko.observable('');
        self.active = ko.observable(false);
        self.showPrice = ko.observable(true);
        self.image = ko.observable();
        self.imageName = ko.observable();
        self.valTemplateId = ko.observable();

        //main food image
        self.templateMain = ko.observableArray([]);
        self.templateDetail = ko.observableArray([]);

        //image URL
        self.templateImageUrl = ko.observable();

        self.changeTemplate = ko.observable();

    } else { //Data
        clearTemplateViewModel();
        var foodImage = data.listFoodImage;
        var templateImage = data.listTemplateImage;
        var templateConfig = data.listTemplateConfig;
        var templateMainShow = data.listTemplateMain;
        var templateDetailShow = data.listTemplateDetail;
        var imagePath = data.templateImageUrl;

        var self = vmViewIndex.allTemplate.data;
        self.templateImageUrl(imagePath);
        var newFoodImage = ko.utils.arrayMap(foodImage, function (item) {
            return new FoodImage(item.foodId, item.foodName, item.foodPrice, item.image, imagePath);
        });
        self.foodImage.push.apply(self.foodImage, newFoodImage);

        var newTemplateImage = ko.utils.arrayMap(templateImage, function (item) {
            return new TemplateImage(item.templateImageId, item.image, imagePath);
        });
        self.templateImage.push.apply(self.templateImage, newTemplateImage);

        var newTemplateConfig = ko.utils.arrayMap(templateConfig, function (item) {
            return new TemplateConfig(item.templateId, item.templateName, item.imageMainQty, item.imageDetailQty
                                    , item.welcomeTopic, item.welcomeContent, item.active, item.showPrice, item.image, imagePath);
        });
        self.templateConfig.push.apply(self.templateConfig, newTemplateConfig);
        self.valTemplateId(_.first(self.templateConfig()).templateId());
        self.changeTemplate({
            dataSource: new DevExpress.data.ArrayStore({
                data: self.templateConfig(),
                key: 'templateId',
            }),
            dropDownButtonTemplate: 'dropDownButton',
            displayExpr: 'templateName',
            valueExpr: 'templateId',
            value: self.valTemplateId,
            onValueChanged: function (v) {
                getTemplateConfig(vmViewIndex.allTemplate.data.templateConfig(), v.value, vmViewIndex.allTemplate.data.templateImageUrl());
            }
        });

        var newTemplateMainShow = ko.utils.arrayMap(templateMainShow, function (item) {
            return new TemplateMain(item.templateMainId, item.templateId, item.image, item.sorting, item.foodName, item.foodPrice, true, imagePath);
        });
        self.templateMainShow.push.apply(self.templateMainShow, newTemplateMainShow);

        var newTemplateDetailShow = ko.utils.arrayMap(templateDetailShow, function (item) {
            return new TemplateDetail(item.templateDetailId, item.templateId, item.image, item.sorting, item.topic, item.content, true, imagePath);
        });
        self.templateDetailShow.push.apply(self.templateDetailShow, newTemplateDetailShow);
        getTemplateConfig(self.templateConfig(), null, imagePath);
    }
} //End DataTemplateViewModel

function clearTemplateViewModel() {
    var self = vmViewIndex.allTemplate.data;
    self.foodImage([]);
    self.templateImage([]);
    self.templateConfig([]);
    self.templateMainShow([]);
    self.templateDetailShow([]);
    //config select
    self.templateId(0);
    self.templateName('');
    self.imageMainQty(0);
    self.imageDetailQty(0);
    self.welcomeTopic('');
    self.welcomeContent('');
    self.active(false);
    self.showPrice(true);
    self.image();
    self.imageName();
    self.valTemplateId();

    //main food image
    self.templateMain([]);
    self.templateDetail([]);
}
function getTemplateConfig(pTemplateConfig, id, imagePath) {
    var self = vmViewIndex.allTemplate.data;
    var templateConfig = $('.templateConfig');
    var showPriceTag = $('.showPrice');

    var hasValue = false;
    var arrayFilterTemplateConfig = [];
    if (id == null || id == "") {
        arrayFilterTemplateConfig = ko.utils.arrayFilter(pTemplateConfig, function (item) {
            return item.active() == true;
        });
    } else {
        arrayFilterTemplateConfig = ko.utils.arrayFilter(pTemplateConfig, function (item) {
            return item.templateId() == id;
        });
    }

    if (arrayFilterTemplateConfig.length > 0) {
        hasValue = true;
    }

    if (!hasValue) {
        self.templateId(0);
        self.templateName('');
        self.imageMainQty(0);
        self.imageDetailQty(0);
        self.welcomeTopic('');
        self.welcomeContent('');
        self.image(null);
        self.imageName('');
        self.active(false);
        self.showPrice(true);
    }

    ko.utils.arrayForEach(arrayFilterTemplateConfig, function (value) {
        self.templateId(value.templateId());
        self.templateName(value.templateName());
        self.imageMainQty(value.imageMainQty());
        self.imageDetailQty(value.imageDetailQty());
        self.welcomeTopic(value.welcomeTopic());
        self.welcomeContent(value.welcomeContent());
        self.image(value.image());
        self.imageName(value.imageName());
        self.active(value.active());
        self.showPrice(value.showPrice());
    });

    self.templateMain([]);
    self.templateDetail([]);

    if (!hasValue) {
        if (self.imageMainQty() > 0) {
            var copyTemplateMain = self.templateMain();
            for (var i = 0; i < self.imageMainQty() ; i++) {
                copyTemplateMain.push(new TemplateMain(0, 0, null, i + 1, '', 0.00, false));
            }
            self.templateMain.valueHasMutated();
        }

        if (self.imageDetailQty() > 0) {
            var copyTemplateDetail = self.templateDetail();
            for (var i = 0; i < self.imageDetailQty() ; i++) {
                copyTemplateDetail.push(new TemplateDetail(0, 0, null, i + 1, '', '', false));
            }
            self.templateDetail.valueHasMutated();
        }

    } else {
        var copyTemplateMain = self.templateMain();

        var filterTemplateMainShow = ko.utils.arrayFilter(self.templateMainShow(), function (item) {
            return item.templateId() == self.templateId();
        });

        var countTemplateMain = filterTemplateMainShow.length;
        ko.utils.arrayForEach(filterTemplateMainShow, function (value) {
            copyTemplateMain.push(new TemplateMain(value.templateMainId(), value.templateId(), value.imageName(), value.sorting(), value.foodName(), value.foodPrice(), true, imagePath));
        });
        var balanceMain = self.imageMainQty();
        for (var i = countTemplateMain; i < balanceMain ; i++) {
            copyTemplateMain.push(new TemplateMain(0, 0, null, i + 1, '', 0.00, false));
        }
        self.templateMain.valueHasMutated();

        var copyTemplateDetail = self.templateDetail();

        var filterTemplateDetailShow = ko.utils.arrayFilter(self.templateDetailShow(), function (item) {
            return item.templateId() == self.templateId();
        });

        var countTemplateDetail = filterTemplateDetailShow.length;
        ko.utils.arrayForEach(filterTemplateDetailShow, function (value) {
            copyTemplateDetail.push(new TemplateDetail(value.templateDetailId(), value.templateId(), value.imageName(), value.sorting(), value.topic(), value.content(), true, imagePath));
        });
        var balanceDetail = self.imageDetailQty();
        for (var i = countTemplateDetail; i < balanceDetail ; i++) {
            copyTemplateDetail.push(new TemplateDetail(0, 0, null, i + 1, '', '', false));
        }
        self.templateDetail.valueHasMutated();
    }

};

function FoodImage(foodId, foodName, foodPrice, foodImage, imagePath) {
    var self = this;
    self.foodId = ko.observable(foodId);
    self.foodName = ko.observable(foodName);
    self.foodPrice = ko.observable(foodPrice);
    self.foodImage = ko.observable(imagePath + foodImage);
    self.foodImageName = ko.observable(foodImage);
};

function TemplateImage(templateImageId, templateImage, imagePath) {
    var self = this;
    self.templateImageId = ko.observable(templateImageId);
    self.templateImage = ko.observable(imagePath + templateImage);
    self.templateImageName = ko.observable(templateImage);
};

function TemplateConfig(templateId, templateName, imageMainQty, imageDetailQty, welcomeTopic, welcomeContent, active, showPrice, image, imagePath) {
    var self = this;
    self.templateId = ko.observable(templateId);
    self.templateName = ko.observable(templateName);
    self.imageMainQty = ko.observable(imageMainQty);
    self.imageDetailQty = ko.observable(imageDetailQty);
    self.welcomeTopic = ko.observable(welcomeTopic);
    self.welcomeContent = ko.observable(welcomeContent);
    self.active = ko.observable(active);
    self.showPrice = ko.observable(showPrice);
    if (image != null) {
        self.image = ko.observable(imagePath + image);
        self.imageName = ko.observable(image);
    } else {
        self.image = ko.observable(null);
        self.imageName = ko.observable(null);
    }
};

function TemplateMain(templateMainId, templateId, image, sorting, foodName, foodPrice, visibleImage, imagePath) {
    var self = this;
    self.templateMainId = ko.observable(templateMainId);
    self.templateId = ko.observable(templateId);
    if (image != null) {
        self.image = ko.observable(imagePath + image);
    } else {
        self.image = ko.observable(null);
    }
    self.imageName = ko.observable(image);
    self.sorting = ko.observable(sorting);
    self.foodName = ko.observable(foodName);
    self.foodPrice = ko.observable(foodPrice).extend({ numeric: 2 });
    self.visibleImage = ko.observable(visibleImage);
};

function TemplateDetail(templateDetailId, templateId, image, sorting, topic, content, visibleImage, imagePath) {
    var self = this;
    self.templateDetailId = ko.observable(templateDetailId);
    self.templateId = ko.observable(templateId);
    if (image != null) {
        self.image = ko.observable(imagePath + image);
    } else {
        self.image = ko.observable(null);
    }
    self.imageName = ko.observable(image);
    self.sorting = ko.observable(sorting);
    self.topic = ko.observable(topic);
    self.content = ko.observable(content);
    self.visibleImage = ko.observable(visibleImage);
};
//END TEMPLATE
function AllSettingViewModel(data) {
    var self = this;
    var dataGrid;

    self.tabSettingIndexClick = ko.observable(2);
    self.disableButtonSubmit = ko.observable(false);
    self.setDisableButtonSubmit = function () {
        self.disableButtonSubmit(true);
    }

    //Modified by SMILEDINING-SA19-0005
    //$('#uploadImageLogo').change(function () {
    //    //$('#showUploadImageLogo').val($(this).val());     //Modified and End by SMILEDINING-SA19-0004
    //    $('#showUploadImageLogo').html($(this).val());      //Added and End by SMILEDINING-SA19-0004
    //});

    ////Added by SMILEDINING-SA19-0004
    //$('#uploadAnnounceImage').change(function () {
    //    $('#showUploadAnnounceImage').html($(this).val());
    //});
    ////End Added by SMILEDINING-SA19-0004
    //End Modified by SMILEDINING-SA19-0005

    //SELECT PERIOD TIME
    var timeValue = ko.observableArray([
   { value: "5" },
   { value: "10" },
   { value: "15" },
   { value: "20" },
   { value: "30" },
   //Added by SMILEDINING-SA20-0041#1
   { value: "40" },
   { value: "50" },
   { value: "60" },
   //End Added by SMILEDINING-SA20-0041#1
    ]);

    self.defaultPeriodTime = ko.pureComputed(function () {
        return vmViewIndex.globalConfig.shopPeriodTime();
    });

    //Added by SMILEDINING-SA21-0005
    self.defaultPeriodTimePickup = ko.pureComputed(function () {
        return vmViewIndex.globalConfig.shopPeriodTimePickup();
    });

    self.defaultPeriodTimeDelivery = ko.pureComputed(function () {
        return vmViewIndex.globalConfig.shopPeriodTimeDelivery();
    });
    //End Added by SMILEDINING-SA21-0005

    self.selectPeriodTime = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: timeValue(),
            key: 'value'
        }),
        displayExpr: 'value',
        valueExpr: 'value',
        value: self.defaultPeriodTime,
        placeholder: "Select Time",
        onValueChanged: function (v) {
            vmViewIndex.globalConfig.shopPeriodTime(v.value);
        }
    });//end select periodtime

    //Added by SMILEDINING-SA21-0005
    self.selectPeriodTimePickup = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: timeValue(),
            key: 'value'
        }),
        displayExpr: 'value',
        valueExpr: 'value',
        value: self.defaultPeriodTimePickup,
        placeholder: "Select Time",
        onValueChanged: function (v) {
            vmViewIndex.globalConfig.shopPeriodTimePickup(v.value);
        }
    });

    self.selectPeriodTimeDelivery = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: timeValue(),
            key: 'value'
        }),
        displayExpr: 'value',
        valueExpr: 'value',
        value: self.defaultPeriodTimeDelivery,
        placeholder: "Select Time",
        onValueChanged: function (v) {
            vmViewIndex.globalConfig.shopPeriodTimeDelivery(v.value);
        }
    });
    //End Added by SMILEDINING-SA21-0005
    //Added by WEB-SA23-0005
    self.blurTimeStartPickup = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        vmViewIndex.globalConfig.timeStartPickup(value);
    };

    self.blurTimeEndPickup = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        vmViewIndex.globalConfig.timeEndPickup(value);
    };

    self.blurTimeStartDelivery = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        vmViewIndex.globalConfig.timeStartDelivery(value);
    };

    self.blurTimeEndDelivery = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = parseInt(value);
        }
        if (value < 0) {
            value = 0;
        }
        vmViewIndex.globalConfig.timeEndDelivery(value);
    };
    //End Added by WEB-SA23-0005

    //Added by SMILEDINING-SA20-0003
    //self.showOrderLimit = ko.observable(vmViewIndex.globalConfig.orderLimit() === '1' || vmViewIndex.globalConfig.orderLimit() === '2');
    self.showOrderLimit = ko.observable(false);
    self.switchOrderLimit = ko.observable({
        offText: 'No',
        onText: 'Yes',
        value: self.showOrderLimit,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.showOrderLimit(true);
                vmViewIndex.globalConfig.orderLimit('1');
            } else {
                self.showOrderLimit(false);
                vmViewIndex.globalConfig.orderLimit('0');
            }
        }
    });
    //End Added by SMILEDINING-SA20-0003
    //Added by SMILEDINING-SA21-0025
    self.addPrice = ko.observable(0.00);
    self.blurPrice = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.addPrice(value.toFixed(2));
    };
    self.showUtensils = ko.observable(false);
    self.switchShowUtensils = ko.observable({
        offText: 'No',
        onText: 'Yes',
        value: self.showUtensils,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.showUtensils(true);
            } else {
                self.showUtensils(false);
            }
        }
    });
    self.autoSelectUtensils = ko.observable(false);
    self.switchAutoSelect = ko.observable({
        offText: 'No',
        onText: 'Yes',
        value: self.autoSelectUtensils,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.autoSelectUtensils(true);
            } else {
                self.autoSelectUtensils(false);
            }
        }
    });
    //End Added by SMILEDINING-SA21-0025
    //Added by WEB-SA22-0068
    self.foodSetAutoHide = ko.observable(false);
    self.switchFoodSetAutoHide = ko.observable({
        offText: 'No',
        onText: 'Yes',
        value: self.foodSetAutoHide,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.foodSetAutoHide(true);
            } else {
                self.foodSetAutoHide(false);
            }
        }
    });
    //End Added by WEB-SA22-0068
    //Added by SMILEDINING-SA18-0029
    //SELECT Theme
    self.defaultThemeColor = ko.pureComputed(function () {
        if (isEmpty(vmViewIndex.globalConfig.themeColor()))
            vmViewIndex.globalConfig.themeColor("1");
        return vmViewIndex.globalConfig.themeColor();
    });

    var ThemeName = ko.observableArray([
   { name: "Orange", id: "1" },
   { name: "Green", id: "2" },
   { name: "Blue", id: "3" },
   { name: "Red", id: "4" },
   { name: "Yellow", id: "5" },
   { name: "Navy", id: "6" },
   { name: "Gold", id: "7" },
   { name: "Pink", id: "8" },
   { name: "Black", id: "9" }
    ]);

    self.selectTheme = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: ThemeName(),
            key: 'id'
        }),
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.defaultThemeColor,
        placeholder: "Select Theme",
        onValueChanged: function (v) {
            vmViewIndex.globalConfig.themeColor(v.value);
        }
    });//end select Theme
    //Added by SMILEDINING-SA21-0055#2
    self.allowJoinTicketContactless = ko.observable(false);
    self.switchAllowJoinTicket = ko.observable({
        offText: 'No',
        onText: 'Yes',
        value: self.allowJoinTicketContactless,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.allowJoinTicketContactless(true);
                vmViewIndex.globalConfig.allowJoinTicket("1");
            } else {
                self.allowJoinTicketContactless(false);
                vmViewIndex.globalConfig.allowJoinTicket("0");
            }
        }
    });
    //End Added by SMILEDINING-SA21-0055#2
    //Added by SMILEDINING-SA21-0035#8
    self.showPartySizeContactless = ko.observable(false);
    self.switchShowPartySize = ko.observable({
        switchedOffText: 'OFF',
        switchedOnText: 'ON',
        value: self.showPartySizeContactless,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.showPartySizeContactless(true);
                vmViewIndex.globalConfig.showPartySize("1");
            } else {
                self.showPartySizeContactless(false);
                vmViewIndex.globalConfig.showPartySize("0");
            }
        }
    });
    //End Added by SMILEDINING-SA21-0035#8
    //End Added by SMILEDINING-SA18-0029
    self.data = ko.observableArray([]);
    self.dataSetUpModal = new SetUpDiscountViewModel();
    //Added by SMILEDINING-SA20-0048
    self.dataDiscountOneTimeUse = ko.observableArray([]);
    self.discountGroup = ko.observableArray([]);
    self.dataSetUpModalDiscountOneTimeUse = new SetUpDiscountOneTimeUseViewModel();
    //End Added by SMILEDINING-SA20-0048
    self.dataSourceDiscountOneTimeUse = ko.observableArray();   //Added and End by SMILEDINING-SA20-0048#1
    self.chkBtnAdd = ko.observable(false);
    self.chkBtnUpdate = ko.observable(false);
    self.chkSearch = ko.observable(false);
    //Added by WEB-SA23-0041
    self.dataMemberDiscount = ko.observableArray([]);
    self.dataSetUpModalMemberDiscount = new SetUpMemberDiscountViewModel(self.chkBtnUpdate);
    //End Added by WEB-SA23-0041
    //Added by WEB-SA23-0045    
    self.isSetUpModalDiscount = ko.observable(false);
    self.isSetUpModalMemberDiscount = ko.observable(false);
    self.isSetUpModalDiscountOneTimeUse = ko.observable(false);
    self.isSetUpModalCouponDelivery = ko.observable(false);
    self.clearChkSetUpDiscount = function () {
        self.isSetUpModalDiscount(false);
        self.isSetUpModalMemberDiscount(false);
        self.isSetUpModalDiscountOneTimeUse(false);
        self.isSetUpModalCouponDelivery(false);
    };
    self.isSetUpModalMemberDiscountUpdate = ko.observable(false);
    self.dataDiscountTimeMap = ko.observableArray([]);
    self.dataSetUpModalDiscountTimeMap = new SetUpDiscountTimeMapViewModel(self.isSetUpModalMemberDiscountUpdate);
    //End Added by WEB-SA23-0045
    //Added by SMILEDINING-SA20-0031
    self.dataShopClose = ko.observableArray([]);
    self.dataSetUpModalShopClose = new SetUpShopCloseViewModel();
    //End Added by SMILEDINING-SA20-0031
    //Added By SMILEDINING-SA18-0003
    self.dataAutoCharge = ko.observableArray([]);
    self.dataPaymentFee = ko.observableArray([]); //Added and End by SMILEDINING-SA22-0020
    self.dataHoliday = ko.observableArray([]);
    self.dataSetUpModalAutoCharge = new SetUpAutoChargeViewModel();
    self.dataSetUpModalPaymentFee = new SetUpPaymentFeeViewModel();   //Added and End by SMILEDINING-SA22-0020
    self.dataSetUpModalHoliday = new SetUpHolidayViewModel();
    self.dataGratuity = new GraguitySettingViewModel(); //Added and End by SMILEDINING-SA20-0018
    //Added by SMILEDINING-SA20-0016
    self.dataListMainFood = ko.observableArray([]);
    self.dataListFreeFood = ko.observableArray([]);
    self.dataArrMainFood = ko.observableArray([]);
    self.dataArrFreeFood = ko.observableArray([]);
    self.dataListFoodCat = ko.observableArray([]);

    self.dataMainPrice = ko.observableArray([]);
    self.dataGroupMainFood = ko.observableArray([]);
    self.dataGroupFreeFood = ko.observableArray([]);
    self.dataConditionMainFood = ko.observableArray([]);
    self.dataConditionMainPrice = ko.observableArray([]);
    self.dataPromotionTimeMap = ko.observableArray([]); //Added and End by WEB-SA24-0012

    self.dataSetUpMainPrice = new SetUpMainPriceViewModel();
    self.dataSetUpGroupMainFood = new SetUpGroupMainFoodViewModel();
    self.dataSetUpGroupFreeFood = new SetUpGroupFreeFoodViewModel();
    self.dataSetUpCondition = new SetUpConditionViewModel();
    self.dataSetUpPromotionTimeMap = new SetUpPromotionTimeMapViewModel(); //Added and End by WEB-SA24-0012
    //End Added by SMILEDINING-SA20-0016
    //self.show = ko.observable(true); //Modified and End by WEB-SA23-0037
    //Added by WEB-SA23-0037
    self.valSwitchSpecialInstructions = ko.observable(true);
    self.valSwitchSpecialInstructionsForTicket = ko.observable(true);
    //End Added by WEB-SA23-0037

    //Added by SMILEDINING-SA20-0048
    self.groupDiscountDownload = ko.observableArray([]);
    self.group = ko.observable();
    self.selectDiscountGroup = ko.observable({
        acceptCustomValue: false,
        dataSource: self.groupDiscountDownload,
        displayExpr: "value",
        value: self.group,
        valueExpr: "id",
        dropDownButtonTemplate: 'dropDownButton',
        onItemClick: function (item) {
            if (item.itemData != null) {
                self.group();
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
    });

    //Modified by SMILEDINING-SA20-0048#1
    //self.showInstructionExcel = ko.observable(false);
    //self.clickShowInstructionExcel = function () {
    //    self.showInstructionExcel(!self.showInstructionExcel());
    //};
    //End Modified by SMILEDINING-SA20-0048#1

    //End Added by SMILEDINING-SA20-0048

    //Added by SMILEDINING-SA20-0048#1
    self.groupDiscountFilter = ko.observableArray([]);
    self.groupDiscountFilterSelect = ko.observable();

    self.filterDiscount = ko.observable({
        dataSource: self.groupDiscountFilter,
        displayExpr: 'value',
        value: self.groupDiscountFilterSelect,
        valueExpr: 'id',
        dropDownButtonTemplate: 'dropDownButton',
        searchEnabled: true,
        onItemClick: function (item) {
            var filter = ko.utils.arrayFilter(self.dataDiscountOneTimeUse(), function (items) {
                return (items.group() == item.itemData.id);
            });
            self.dataSourceDiscountOneTimeUse(filter.slice(0));
            refreshGrid('gridDiscountOneTimeUse');

        },
        onOpened: function (e) {
            e.component._popup.option('closeOnTargetScroll', false);
        },
    });
    //End Added by SMILEDINING-SA20-0048#1

    self.switchSpecialInstructions = ko.observable({
        offText: 'Hide',
        onText: 'Show',
        //value: self.show, //Modified and End by WEB-SA23-0037
        value: self.valSwitchSpecialInstructions, //Added and End by WEB-SA23-0037
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                //self.show(true); //Modified and End by WEB-SA23-0037
                self.valSwitchSpecialInstructions(true); //Added and End by WEB-SA23-0037
                vmViewIndex.globalConfig.specialInstructions("1");
            } else {
                //self.show(false); //Modified and End by WEB-SA23-0037
                self.valSwitchSpecialInstructions(false); //Added and End by WEB-SA23-0037
                vmViewIndex.globalConfig.specialInstructions("0");
            }
        }
    });

    //Added by WEB-SA23-0037
    self.switchSpecialInstructionsForTicket = ko.observable({
        offText: 'Hide',
        onText: 'Show',
        value: self.valSwitchSpecialInstructionsForTicket,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.valSwitchSpecialInstructionsForTicket(true);
                vmViewIndex.globalConfig.specialInstructionsForTicket("1");
            } else {
                self.valSwitchSpecialInstructionsForTicket(false);
                vmViewIndex.globalConfig.specialInstructionsForTicket("0");
            }
        }
    });
    //End Added by WEB-SA23-0037

    //End Added By SMILEDINING-SA18-0003

    //Added by SMILEDINING-SA21-0004
    self.instructionLinkToFood = ko.observable('');
    self.treeListFood = ko.observable();

    self.clickLinkToFood = function () {
        vmViewIndex.showLoading(true);
        setTimeout(function () {
            var dataMenu = JSON.parse(getObjFormAjax(cJsonGetDataMenu, ""));
            var dataFoodSet = ko.observableArray([]);
            var dataFoodCat = ko.observableArray([]);
            var dataFood = ko.observableArray([]);
            var tempDataMenu = ko.observableArray([]);
            var checkList = ko.observableArray([]);

            ko.mapping.fromJS(dataMenu.listFoodSet, {}, dataFoodSet);
            ko.mapping.fromJS(dataMenu.listFoodCategory, {}, dataFoodCat);
            ko.mapping.fromJS(dataMenu.listFood, {}, dataFood);

            var id = 1;
            ko.utils.arrayForEach(dataFoodSet(), function (itemFoodSet) {
                var foodSetId_head = 0;
                var foodSetHead = 0;
                var dataFoodSet = new DataInstructionLinkToFoodViewModel(id, foodSetId_head, itemFoodSet.foodSetName(), cFoodSet, itemFoodSet.foodSetId(), itemFoodSet.active());
                foodSetHead = id;
                tempDataMenu.push(dataFoodSet);
                ko.utils.arrayForEach(dataFoodCat(), function (itemFoodCategory) {
                    var foodCatHead = 0;
                    var filterFood = ko.utils.arrayFilter(dataFood(), function (itemFood) {
                        return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
                    });
                    if (!isEmpty(filterFood)) {
                        id += 1;
                        tempDataMenu.push(new DataInstructionLinkToFoodViewModel(id, foodSetHead, itemFoodCategory.foodCatName(), cFoodCat, itemFoodCategory.foodCatId(), itemFoodCategory.active()));
                        foodCatHead = id;

                        ko.utils.arrayForEach(filterFood, function (food) {
                            id += 1;
                            if (isEmpty(food.plu())) { //Added and End by SMILEDINING-SA21-0066#11
                                tempDataMenu.push(new DataInstructionLinkToFoodViewModel(id, foodCatHead, food.foodName(), cFood, food.foodId(), food.active()));
                            } //Added and End by SMILEDINING-SA21-0066#11
                            if (food.isShowInstruction()) {
                                checkList.push(id);
                            }
                        });
                    }
                });
                foodSetId_head += 1;
                id += 1;
            });

            self.treeListFood({
                dataSource: tempDataMenu,
                keyExpr: "id",
                parentIdExpr: "headId",
                allowColumnReordering: true,
                allowColumnResizing: true,
                showBorders: true,
                showColumnLines: true,
                showRowLines: true,
                columnAutoWidth: true,
                paging: {
                    enabled: false
                },
                pager: {
                    enabled: false
                },
                scrolling: {
                    mode: "standard"
                },
                selection: {
                    mode: "multiple",
                    recursive: true
                },
                filterRow: {
                    visible: true
                },
                loadPanel: {
                    enabled: true,
                    height: 90,
                    indicatorSrc: "",
                    showIndicator: true,
                    showPane: true,
                    text: "Loading...",
                    width: 200
                },
                stateStoring: {
                    enabled: true,
                    type: "localStorage",
                    storageKey: "treeListStorage"
                },
                columns: [
                { dataField: 'name', caption: 'Name' },
                { dataField: 'active', caption: 'Active', alignment: 'center' }
                ],
                expandedRowKeys: [0],
                selectedRowKeys: checkList,
                onCellPrepared: function (options) {
                    var fieldData = options.value,
                        fieldHtml = '';
                    if (!isEmpty(fieldData)) {
                        if (fieldData == true && typeof (fieldData) === "boolean") {
                            fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                        } else if (fieldData == false && typeof (fieldData) === "boolean") {
                            fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                        } else {
                            fieldHtml = fieldData.value;
                        }
                        options.cellElement.html(fieldHtml);
                    }
                },

            });
            $('#modalShowInstructions').modal('show');
            vmViewIndex.showLoading(false);
        }, 0);
    };

    self.clickSubmitLinkToFood = function () {
        var treeList = $("#treeListFood").dxTreeList("instance");
        var selectedData = treeList.getSelectedRowsData("all");
        var objUrl = new ObjUrl(cfrmInstructionLinkToFoodUpdate);
        var requestUrl = objUrl.getUrlSubmitForm();
        var jsonItem = ko.toJSON(selectedData);
        var passData = {
            'jsonListFood': jsonItem
        };
        //Added by WEB-SA23-0001
        var modalId = 'modalShowInstructions';
        vmViewIndex.disableButtonCloseModal(true);
        vmViewIndex.disablePointer('default');
        addSpinButton(modalId);
        if (!checkMqttConnection(cfrmInstructionLinkToFoodUpdate)) {
            swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
            removeSpinButton(modalId);
            vmViewIndex.showLoading(false);
            vmViewIndex.disableButtonCloseModal(false);
            vmViewIndex.disablePointer('pointer');
            vmViewIndex.isKiosk(false);
            return false;
        }
        //End Added by WEB-SA23-0001
        $.ajax({
            url: requestUrl,
            async: ajax_async,
            cache: ajax_cache,
            type: ajax_type_post,
            data: passData,
            timeout: ajax_timeout,
        })
        .done(function (result) {
            //Added by WEB-SA23-0001
            if (result.status) {
                var item = !isEmpty(result.obj) ? JSON.parse(result.obj) : null;
                if (vmViewIndex.isKiosk() && !isEmpty(item)) {
                    var itemKiosk = _.filter(item, function (v) {
                        return v.productId.includes(products.cSmileContactless) && v.active;
                    });
                    if (!isEmpty(itemKiosk)) {
                        sendMqtt(itemKiosk, getTopicMqtt('food'));
                    }
                }
            }
            //End Added by WEB-SA23-0001
            var objAlert = new ObjAlert("", result.message, result.status);
            objAlert.getAlert();
            $('#modalShowInstructions').modal('hide');
            //Added by WEB-SA23-0001
            removeSpinButton(modalId);
            vmViewIndex.showLoading(false);
            vmViewIndex.disableButtonCloseModal(false);
            vmViewIndex.disablePointer('pointer');
            vmViewIndex.isKiosk(false);
            //End Added by WEB-SA23-0001
        })
        .fail(function (result) {
            vmViewIndex.showLoading(false);
            var objAlert = new ObjAlert("", result.message, result.status);
            objAlert.getAlert();
            //Added by WEB-SA23-0001
            removeSpinButton(modalId);
            vmViewIndex.disableButtonCloseModal(false);
            vmViewIndex.disablePointer('pointer');
            vmViewIndex.isKiosk(false);
            //End Added by WEB-SA23-0001
        });
    };
    //End Added by SMILEDINING-SA21-0004

    //Added by SMILEDINING-SA19-0004
    self.showActive = ko.observable(true);
    self.switchShopActive = ko.observable({
        offText: 'No',
        onText: 'Yes',
        value: self.showActive,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.showActive(true);
                vmViewIndex.globalConfig.shopActive("1");
            } else {
                self.showActive(false);
                vmViewIndex.globalConfig.shopActive("0");
            }
        }
    });
    //End Added by SMILEDINING-SA19-0004

    //Added by SMILEDINING-SA20-0028
    self.showAnnounceCustomActive = ko.observable(true);
    self.switchShopAnnounceCustomActive = ko.observable({
        offText: 'No',
        onText: 'Yes',
        value: self.showAnnounceCustomActive,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.showAnnounceCustomActive(true);
                vmViewIndex.globalConfig.shopAnnounceCustomActive('1');
            } else {
                self.showAnnounceCustomActive(false);
                vmViewIndex.globalConfig.shopAnnounceCustomActive('0');
            }
        }
    });
    //End Added by SMILEDINING-SA20-0028
    //Added by SMILEDINING-SA21-0083
    self.valueShopInfo = ko.observable(true);
    self.switchShopInfo = ko.observable({
        offText: 'Hide',
        onText: 'Show',
        value: self.valueShopInfo,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.valueShopInfo(true);
                //vmViewIndex.globalConfig.isShopInfo(true); //Modified and End by SMILEDINING-SA21-0083#1
                vmViewIndex.globalConfig.isShopInfo("1"); //Added and End by SMILEDINING-SA21-0083#1
            } else {
                self.valueShopInfo(false);
                //vmViewIndex.globalConfig.isShopInfo(false); //Modified and End by SMILEDINING-SA21-0083#1
                vmViewIndex.globalConfig.isShopInfo("0"); //Added and End by SMILEDINING-SA21-0083#1
            }
        }
    });
    //End Added by SMILEDINING-SA21-0083
    //Added by SMILEDINING-SA19-0002
    self.checkHaveScript = ko.observable(true);
    self.showTipsDescForStore = ko.observable(false);
    self.showTipsDescForCredit = ko.observable(false);

    self.switchTipsDescForStore = ko.observable({
        offText: 'Hide',
        onText: 'Show',
        value: self.showTipsDescForStore,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.showTipsDescForStore(true);
                vmViewIndex.globalConfig.tipsDescForStore("1");
            } else {
                self.showTipsDescForStore(false);
                vmViewIndex.globalConfig.tipsDescForStore("0");
            }
        }
    });

    self.switchTipsDescForCredit = ko.observable({
        offText: 'Hide',
        onText: 'Show',
        value: self.showTipsDescForCredit,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.showTipsDescForCredit(true);
                vmViewIndex.globalConfig.tipsDescForCredit("1");
            } else {
                self.showTipsDescForCredit(false);
                vmViewIndex.globalConfig.tipsDescForCredit("0");
            }
        }
    });
    //End Added by SMILEDINING-SA19-0002

    //Added by SMILEDINING-SA20-0015
    self.showCurbside = ko.observable(false);
    self.switchCurbsidePickup = ko.observable({
        offText: 'Hide',
        onText: 'Show',
        value: self.showCurbside,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.showCurbside(true);
                vmViewIndex.globalConfig.showCurbsidePickup('1');
            } else {
                self.showCurbside(false);
                vmViewIndex.globalConfig.showCurbsidePickup('0');
            }
        }
    });
    //End Added by SMILEDINING-SA20-0015

    //Added by WEB-SA24-0016
    self.valSwitchNotificationCustomer = ko.observable(false);
    self.switchNotificationCustomer = ko.observable({
        offText: 'No',
        onText: 'Yes',
        value: self.valSwitchNotificationCustomer,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.valSwitchNotificationCustomer(true);
                vmViewIndex.globalConfig.notificationCustomer('1');
            } else {
                self.valSwitchNotificationCustomer(false);
                vmViewIndex.globalConfig.notificationCustomer('0');
            }
        }
    });

    self.dataCustomerNotifications = ko.observableArray([]);
    self.customerNotifications = ko.observableArray([]);
    self.customerNotificationsJson = ko.pureComputed(function () {
        return ko.toJSON(self.customerNotifications());
    });

    self.clickAddCustomerNotifications = function () {
        if (self.customerNotifications().length < cCustomerNotifications_Max) {
            self.customerNotifications.push(new DataCustomerNotificationsViewModel(null));
        }
    };

    self.clickRemoveCustomerNotifications = function (i, data, event) {
        const index = i();
        self.customerNotifications.splice(index, 1);
    };
    //End Added by WEB-SA24-0016

    //Added By SMILEDINING-SA19-0008    
    self.hasCouponDelivery = ko.observable(true);
    self.CouponDeliveryData = ko.observableArray([]);
    var currentDateTime = filterGlobalConfig(data, 'currentDateTime');
    currentDateTime = moment(currentDateTime, moment_date_format_mmddyyyyhhmmssa).format('MM/DD/YYYY'); //Added and End by WEB-SA24-0013
    self.dataViewModelCouponDelivery = new SetupCouponDeliveryViewModel(currentDateTime);

    self.dataGridCouponDelivery = ko.observable({
        dataSource: self.CouponDeliveryData,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'couponDeliveryName', caption: 'Name', width: '100' },
            { dataField: 'usedCoupon', caption: 'Used', width: '100', dataType: 'number', alignment: 'center' },
            { dataField: 'totalCoupon', caption: 'Total', width: '100', dataType: 'number', alignment: 'center' },
            { dataField: 'minimumOrder', caption: 'Minimum Order', dataType: 'number', alignment: 'center', format: 'currency', precision: 2 },
            { dataField: 'couponDeliveryCode', caption: 'Code' },
            { dataField: 'active', caption: "Active" }
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);

            //if (_.isEmpty(currentDateTime)) { //Modified and End by WEB-SA24-0013#1
            if (_.isEmpty(currentDateTime) || currentDateTime == 'Invalid date') { //Added and End by WEB-SA24-0013#1
                currentDateTime = vmViewIndex.globalConfig.currentDateTime();
                currentDateTime = moment(currentDateTime, moment_date_format_mmddyyyyhhmmssa).format('MM/DD/YYYY'); //Added and End by WEB-SA24-0013
            }

            var currentDate = moment(currentDateTime).format('MM/DD/YYYY');
            var jsonData = JSON.parse(unmap);
            var startDate = moment(jsonData.startDate).format('MM/DD/YYYY');

            if (moment(currentDate).isAfter(startDate)) {
                self.dataViewModelCouponDelivery.currentDate(startDate);
            }
            else {
                self.dataViewModelCouponDelivery.currentDate(currentDate);
            }

            ko.mapping.fromJSON(unmap, {}, self.dataViewModelCouponDelivery);
            //Added by WEB-SA23-0045
            self.clearChkSetUpDiscount();
            self.isSetUpModalCouponDelivery(true);
            DataSetUpDiscountTimeMap(null, null, Number(self.dataViewModelCouponDelivery.couponDeliveryId()));
            //End Added by WEB-SA23-0045
            vmViewIndex.allSetting.disableButtonSubmit(false);
            $(cModalSetupCouponDelivery).modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {

                        //if (_.isEmpty(currentDateTime)) { //Modified and End by WEB-SA24-0013#1
                        if (_.isEmpty(currentDateTime) || currentDateTime == 'Invalid date') { //Added and End by WEB-SA24-0013#1
                            currentDateTime = vmViewIndex.globalConfig.currentDateTime();
                            currentDateTime = moment(currentDateTime, moment_date_format_mmddyyyyhhmmssa).format('MM/DD/YYYY'); //Added and End by WEB-SA24-0013
                        }

                        var currentDate = moment(currentDateTime).format('MM/DD/YYYY');
                        self.dataViewModelCouponDelivery.currentDate(currentDate);
                        //Added by WEB-SA23-0045
                        self.clearChkSetUpDiscount();
                        self.isSetUpModalCouponDelivery(true);
                        DataSetUpDiscountTimeMap(); 
                        //End Added by WEB-SA23-0045
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        vmViewIndex.allSetting.dataViewModelCouponDelivery.clearSetUp();    //Added and End by SMILEDINING-SA22-0001#30
                        $(cModalSetupCouponDelivery).modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $(cDataGridCouponDelivery + " .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });
    //End Added By SMILEDINING-SA19-0008

    self.dataGridDiscount = ko.observable({
        dataSource: self.data,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'discountName', caption: 'Name', width: '200' },
            { dataField: 'discountDesc', caption: 'Des', width: '150' },
            { dataField: 'couponAmountOff', caption: 'AmountOff', dataType: 'number', alignment: 'center', format: 'currency', precision: 2 },
            { dataField: 'couponPercentOff', caption: 'PercentOff', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2 },
            //Added by  SMILEDINING-SA20-0011
            { dataField: 'termsAmountMin', caption: 'Terms Amount Min', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2 },
            { dataField: 'termsAmountMax', caption: 'Terms Amount Max', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2 },
            //End Added by  SMILEDINING-SA20-0011
            { dataField: 'couponCode', caption: 'Code' },
            { dataField: 'active', caption: "Active" }
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            self.dataSetUpModal.isCloseDiscount(true); //Added and End by SMILEDINING-SA20-0011
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpModal);
            //Added by SMILEDINING-SA20-0011
            self.dataSetUpModal.isCloseDiscount(false);
            if (self.dataSetUpModal.couponCode() == '' || self.dataSetUpModal.couponCode() == null) {
                self.dataSetUpModal.isAutoDiscount(true);
                self.dataSetUpModal.isCouponDiscount(false);
            }
            else {
                self.dataSetUpModal.isAutoDiscount(false);
                self.dataSetUpModal.isCouponDiscount(true);
            }
            if (self.dataSetUpModal.termsAmountMin() == 0) {
                self.dataSetUpModal.isUnlimitMin(true);
            }
            if (self.dataSetUpModal.termsAmountMax() == 0) {
                self.dataSetUpModal.isUnlimitMax(true);
            }
            self.dataSetUpModal.shippingTypeId(shippingType.cAll);
            if (self.dataSetUpModal.isPickup() && !self.dataSetUpModal.isDelivery())
                self.dataSetUpModal.shippingTypeId(shippingType.cPickUp);
            else if (!self.dataSetUpModal.isPickup() && self.dataSetUpModal.isDelivery()) {
                self.dataSetUpModal.shippingTypeId(shippingType.cDelivery);
            }
            //End Added by SMILEDINING-SA20-0011
            //Added by SMILEDINING-SA21-0020
            self.dataSetUpModal.startDate(moment(new Date(self.dataSetUpModal.startDate())).format());
            self.dataSetUpModal.endDate(moment(new Date(self.dataSetUpModal.endDate())).format());
            //End Added by SMILEDINING-SA21-0020
            //Added by WEB-SA23-0045
            self.clearChkSetUpDiscount();
            self.isSetUpModalDiscount(true);
            DataSetUpDiscountTimeMap(Number(self.dataSetUpModal.discountId()), null, null);
            //End Added by WEB-SA23-0045
            vmViewIndex.allSetting.disableButtonSubmit(false);
            $('#modalSetUpDiscount').modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        //Added by WEB-SA23-0045
                        self.clearChkSetUpDiscount();
                        self.isSetUpModalDiscount(true);
                        DataSetUpDiscountTimeMap(); 
                        //End Added by WEB-SA23-0045
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        $('#modalSetUpDiscount').modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridDiscount .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //dataGrid

    //Added by WEB-SA23-0041
    self.dataGridMemberDiscount = ko.observable({
        dataSource: self.dataMemberDiscount,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'discountName', caption: 'Name', width: '200' },
            { dataField: 'couponTypeId', caption: 'Type', width: '150' },
            { dataField: 'couponAmountOff', caption: 'AmountOff', dataType: 'number', alignment: 'center', format: 'currency', precision: 2 },
            { dataField: 'couponPercentOff', caption: 'PercentOff', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2 },
            { dataField: 'active', caption: "Active" }
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                if (options.column.dataField === "couponTypeId") { 
                    var couponTypeName = fieldData == couponTypes.cMember ? couponTypes.mapName[couponTypes.cMember].name : fieldData == couponTypes.cRegister ? couponTypes.mapName[couponTypes.cRegister].name : "";
                    fieldHtml = "<span>" + couponTypeName + "</span>";
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpModalMemberDiscount);
            if (self.dataSetUpModalMemberDiscount.termsAmountMin() == 0) {
                self.dataSetUpModalMemberDiscount.isUnlimitMin(true);
            }
            if (self.dataSetUpModalMemberDiscount.termsAmountMax() == 0) {
                self.dataSetUpModalMemberDiscount.isUnlimitMax(true);
            }
            self.dataSetUpModalMemberDiscount.startDate(moment(new Date(self.dataSetUpModalMemberDiscount.startDate())).format('L'));
            self.dataSetUpModalMemberDiscount.endDate(moment(new Date(self.dataSetUpModalMemberDiscount.endDate())).format('L'));
            //Added by WEB-SA23-0045
            self.clearChkSetUpDiscount();
            self.isSetUpModalMemberDiscount(true);
            DataSetUpDiscountTimeMap(Number(self.dataSetUpModalMemberDiscount.discountId()));
            self.isSetUpModalMemberDiscountUpdate(true);
            //End Added by WEB-SA23-0045
            vmViewIndex.allSetting.disableButtonSubmit(false);
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
            $(cModalSetupMemberDiscount).modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        //Added by WEB-SA23-0045
                        self.clearChkSetUpDiscount();
                        self.isSetUpModalMemberDiscount(true);
                        DataSetUpDiscountTimeMap(); 
                        //End Added by WEB-SA23-0045
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                        $(cModalSetupMemberDiscount).modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridMemberDiscount .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });
    //End Added by WEB-SA23-0041

    //Added by SMILEDINING-SA18-0003
    self.dataGridAutoCharge = ko.observable({
        dataSource: self.dataAutoCharge,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'autoChargeName', caption: 'Name', width: '140' },
            { dataField: 'autoChargeDesc', caption: 'Description', width: '100' },
            { dataField: 'amountCharge', caption: 'AmountCharge', dataType: 'number', alignment: 'center', format: 'currency', precision: 2 },
            { dataField: 'percentCharge', caption: 'PercentCharge', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2 },
            { dataField: 'taxCharge', caption: 'TaxCharge', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2 },
            { dataField: 'active', caption: "Active", alignment: 'center' },
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpModalAutoCharge);
            vmViewIndex.allSetting.disableButtonSubmit(false);
            $('#modalSetUpAutoCharge').modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        $('#modalSetUpAutoCharge').modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridAutoCharge .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //dataGridAutoCharge

    //Added by SMILEDINING-SA22-0020
    self.dataGridPaymentFee = ko.observable({
        dataSource: self.dataPaymentFee,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'paymentFeeName', caption: 'Name', width: '140' },
            { dataField: 'amountCharge', caption: 'AmountCharge', dataType: 'number', alignment: 'center', format: 'currency', precision: 2 },
            { dataField: 'percentCharge', caption: 'PercentCharge', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2 },
            { dataField: 'active', caption: "Active", alignment: 'center' },
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpModalPaymentFee);
            vmViewIndex.allSetting.disableButtonSubmit(false);
            $('#modalSetUpPaymentFee').modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
                {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-plus',
                        hint: 'Add',
                        onClick: function () {
                            vmViewIndex.allSetting.disableButtonSubmit(false);
                            $('#modalSetUpPaymentFee').modal({
                                keyboard: false,
                                backdrop: "static",
                                show: true
                            });
                            self.chkBtnAdd(true);
                            self.chkBtnUpdate(false);
                        }
                    }
                }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridPaymentFee .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //dataGridAutoCharge
    //End Added by SMILEDINING-SA22-0020
    //Added by SMILEDINING-SA18-0036
    self.btnCloseShowAutoCharge = function () {
        $('html').css({ 'overflow-x': 'auto', 'overflow-y': 'auto' });
    };
    //End Added by SMILEDINING-SA18-0036

    self.dataGridHoliday = ko.observable({
        dataSource: self.dataHoliday,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: false,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'description', caption: 'Description', width: '250' },
            { dataField: 'startDate', caption: 'StartDate', alignment: 'center', dataType: 'date' },
            { dataField: 'endDate', caption: 'EndDate', alignment: 'center', dataType: 'date' },
            { dataField: 'active', caption: "Active", alignment: 'center' },
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpModalHoliday);
            vmViewIndex.allSetting.disableButtonSubmit(false);
            $('#modalSetUpHoliday').modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        $('#modalSetUpHoliday').modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridHoliday .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //dataGridHoliday
    //End Added by SMILEDINING-SA18-0003

    //Added by SMILEDINING-SA20-0048
    self.dataGridDiscountOneTimeUse = ko.observable({
        //dataSource: self.dataDiscountOneTimeUse,  //Modified and End by SMILEDINING-SA20-0048#1
        dataSource: self.dataSourceDiscountOneTimeUse,  //Added and End by SMILEDINING-SA20-0048#1
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: false,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'discountOneTimeUseName', caption: 'Name', width: '150' },
            { dataField: 'group', caption: 'Group', width: '80' },
            { dataField: 'couponAmountOff', caption: 'AmountOff', dataType: 'number', alignment: 'center', format: 'currency', precision: 2 },
            { dataField: 'couponPercentOff', caption: 'PercentOff', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2 },
            { dataField: 'couponCode', caption: 'Code' },
            { dataField: 'usedOn', caption: 'UsedOn', alignment: 'center', dataType: 'date' },
        ],
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpModalDiscountOneTimeUse);
            vmViewIndex.allSetting.disableButtonSubmit(false);
            if (self.dataSetUpModalDiscountOneTimeUse.isUse()) {
                vmViewIndex.allSetting.disableButtonSubmit(true);
            }
            self.dataSetUpModalDiscountOneTimeUse.discountGroup(self.discountGroup.slice(0));

            //Added by SMILEDINING-SA21-0017
            if (self.dataSetUpModalDiscountOneTimeUse.termsAmountMin() == 0) {
                self.dataSetUpModalDiscountOneTimeUse.isUnlimitMin(true);
            }
            if (self.dataSetUpModalDiscountOneTimeUse.termsAmountMax() == 0) {
                self.dataSetUpModalDiscountOneTimeUse.isUnlimitMax(true);
            }
            self.dataSetUpModalDiscountOneTimeUse.shippingTypeId(shippingType.cAll);
            if (self.dataSetUpModalDiscountOneTimeUse.isPickup() && !self.dataSetUpModalDiscountOneTimeUse.isDelivery())
                self.dataSetUpModalDiscountOneTimeUse.shippingTypeId(shippingType.cPickUp);
            else if (!self.dataSetUpModalDiscountOneTimeUse.isPickup() && self.dataSetUpModalDiscountOneTimeUse.isDelivery()) {
                self.dataSetUpModalDiscountOneTimeUse.shippingTypeId(shippingType.cDelivery);
            }
            //End Added by SMILEDINING-SA21-0017

            //Added by SMILEDINING-SA21-0020
            self.dataSetUpModalDiscountOneTimeUse.startDate(moment(new Date(self.dataSetUpModalDiscountOneTimeUse.startDate())).format());
            self.dataSetUpModalDiscountOneTimeUse.endDate(moment(new Date(self.dataSetUpModalDiscountOneTimeUse.endDate())).format());
            //End Added by SMILEDINING-SA21-0020
            //Added by WEB-SA23-0045
            self.clearChkSetUpDiscount();
            self.isSetUpModalDiscountOneTimeUse(true);
            DataSetUpDiscountTimeMap(null, Number(self.dataSetUpModalDiscountOneTimeUse.discountOneTimeUseId()), null);
            //End Added by WEB-SA23-0045
            $('#modalSetUpDiscountOneTimeUse').modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        //Added by WEB-SA23-0045
                        self.clearChkSetUpDiscount();
                        self.isSetUpModalDiscountOneTimeUse(true);
                        DataSetUpDiscountTimeMap(); 
                        //End Added by WEB-SA23-0045
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        self.dataSetUpModalDiscountOneTimeUse.discountGroup(self.discountGroup.slice(0));
                        $('#modalSetUpDiscountOneTimeUse').modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            },
            //Added by SMILEDINING-SA20-0048#1
            {
                location: "before",
                template: function () {
                    return $("<div/>")
                        .addClass("informer")
                        .append(
                           $("<h2 />")
                             .text("Select Group : ")
                        );
                }
            },
            {
                widget: 'dxSelectBox',
                location: 'before',
                options: self.filterDiscount
            }
            //End Added by SMILEDINING-SA20-0048#1
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridDiscountOneTimeUse .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //dataGridHoliday
    //End Added by SMILEDINING-SA20-0048

    //Added by SMILEDINING-SA20-0016
    self.dataGridMainPrice = ko.observable({
        dataSource: self.dataMainPrice,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: false,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'priceMin', caption: 'Price Min', width: '350', dataType: 'number', alignment: 'center', format: 'currency', precision: 2 },
            { dataField: 'priceMax', caption: 'Price Max', width: '350', dataType: 'number', alignment: 'center', format: 'currency', precision: 2 },
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpMainPrice);
            self.dataSetUpMainPrice.isUnlimitPriceMin(self.dataSetUpMainPrice.priceMin() == '0.00' ? true : false);
            self.dataSetUpMainPrice.isUnlimitPriceMax(self.dataSetUpMainPrice.priceMax() == '0.00' ? true : false);

            vmViewIndex.allSetting.disableButtonSubmit(false);
            $('#modalMainPriceSetup').modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push(
                {
                    location: "before",
                    template: function () {
                        return $("<div/>")
                            .addClass("informer")
                            .append(
                               $("<h2 />")
                                 .text("Please setting Main Price before setting Condition.")
                            );
                    }
                },
                {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-search',
                        hint: 'Search',
                        onClick: function () {
                            if (self.chkSearch() == false) {
                                self.chkSearch(true);
                            } else if (self.chkSearch() == true) {
                                self.chkSearch(false);
                            }
                        }
                    }
                },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        //Modified by WEB-SA24-0012
                        //if (self.dataMainPrice().length > 0) {
                        //    vmViewIndex.allSetting.disableButtonSubmit(true);
                        //}
                        //End Modified by WEB-SA24-0012
                        $('#modalMainPriceSetup').modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridMainPrice .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //dataGridMainPrice

    self.dataGridGroupMainFood = ko.observable({
        dataSource: self.dataGroupMainFood,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: false,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'promotionGroupMainFoodName', caption: 'Group Name', width: '150' },
            { dataField: 'strMainFoodName', caption: 'Main Food', width: '585' },
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpGroupMainFood);
            var dataArrMainFood = self.dataArrMainFood.slice(0);
            ko.utils.arrayForEach(self.dataSetUpGroupMainFood.listPromotionMainFood(), function (val) {
                var index = dataArrMainFood.findIndex(function (element) {
                    return element.foodId() == val.foodId();
                });
                dataArrMainFood.splice(index, 1);
            });
            self.dataSetUpGroupMainFood.arrMainFood(dataArrMainFood.slice(0));

            vmViewIndex.allSetting.disableButtonSubmit(false);
            $('#modalGroupMainFoodSetup').modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push(
                            {
                                location: "before",
                                template: function () {
                                    return $("<div/>")
                                        .addClass("informer")
                                        .append(
                                           $("<h2 />")
                                             .text("Please setting Group Main Food before setting Condition.")
                                        );
                                }
                            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        self.dataSetUpGroupMainFood.arrMainFood(self.dataArrMainFood.slice(0));
                        $('#modalGroupMainFoodSetup').modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridGroupMainFood .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //dataGridGroupMainFood

    self.dataGridGroupFreeFood = ko.observable({
        dataSource: self.dataGroupFreeFood,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: false,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'promotionGroupFreeFoodName', caption: 'Group Name', width: '150' },
            { dataField: 'strFreeFoodName', caption: 'Main Food', width: '585' },
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpGroupFreeFood);
            var dataArrFreeFood = self.dataArrFreeFood.slice(0);
            ko.utils.arrayForEach(self.dataSetUpGroupFreeFood.listPromotionFreeFood(), function (val) {
                var index = dataArrFreeFood.findIndex(function (element) {
                    return element.foodId() == val.foodId();
                });
                dataArrFreeFood.splice(index, 1);
            });
            self.dataSetUpGroupFreeFood.arrFreeFood(dataArrFreeFood.slice(0));

            vmViewIndex.allSetting.disableButtonSubmit(false);
            $('#modalGroupFreeFoodSetup').modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push(
                {
                    location: "before",
                    template: function () {
                        return $("<div/>")
                            .addClass("informer")
                            .append(
                               $("<h2 />")
                                 .text("Please setting Group Free Food first.")
                            );
                    }
                }, {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-search',
                        hint: 'Search',
                        onClick: function () {
                            if (self.chkSearch() == false) {
                                self.chkSearch(true);
                            } else if (self.chkSearch() == true) {
                                self.chkSearch(false);
                            }
                        }
                    }
                },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        self.dataSetUpGroupFreeFood.arrFreeFood(self.dataArrFreeFood.slice(0));
                        $('#modalGroupFreeFoodSetup').modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridGroupFreeFood .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //dataGridGroupFreeFood

    self.dataGridConditionMainPrice = ko.observable({
        dataSource: self.dataConditionMainPrice,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: false,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'promotionName', caption: 'Promotion Name', alignment: 'center', width: '250'},   //Added and End by WEB-SA22-0062
            { dataField: 'strMainPriceName', caption: 'Main Price', alignment: 'center', width: '150' },
            { dataField: 'strGrpFreeFoodName', caption: 'Group FreeFood Name', alignment: 'center', width: '250' },
            { dataField: 'isAutoFree', caption: 'Auto Free', alignment: 'center', width: '80' },
            { dataField: 'active', caption: 'Active', alignment: 'center', width: '80' },
            { dataField: 'startDate', caption: 'StartDate', alignment: 'center', dataType: 'date', width: '100' },
            { dataField: 'endDate', caption: 'EndDate', alignment: 'center', dataType: 'date', width: '100' },

        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpCondition);
            //Added by WEB-SA22-0062#2
            self.dataSetUpCondition.startDate(moment(new Date(self.dataSetUpCondition.startDate())).format('L'));
            self.dataSetUpCondition.endDate(moment(new Date(self.dataSetUpCondition.endDate())).format('L'));
            //End Added by WEB-SA22-0062#2
            self.dataSetUpCondition.isTermsPrice(true);
            self.dataSetUpCondition.isTermsFood(false);
            self.dataSetUpCondition.tempListMainPrice(self.dataMainPrice.slice(0));
            self.dataSetUpCondition.tempListGroupFreeFood(self.dataGroupFreeFood.slice(0));

            self.dataSetUpCondition.isEmptyMainPrice(self.dataSetUpCondition.tempListMainPrice().length == 0 ? true : false);
            self.dataSetUpCondition.isEmptyGrpFreeFood(self.dataSetUpCondition.tempListGroupFreeFood().length == 0 ? true : false);

            DataSetUpPromotionTimeMap(self.dataSetUpCondition.promotionId()); //Added and End by WEB-SA24-0012

            vmViewIndex.allSetting.disableButtonSubmit(false);
            $('#modalConditionSetup').modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
            if (self.dataSetUpCondition.isEmptyMainPrice() == false) {
                var index = self.dataSetUpCondition.tempListMainPrice().findIndex(function (element) {
                    return element.promotionMainPriceId() == self.dataSetUpCondition.promotionMainPriceId();
                });
                $('.cardPrice').find('div.card.card-body.form-group.card-price')[index].classList.add('card-active');
            }
            if (self.dataSetUpCondition.isEmptyGrpFreeFood() == false) {
                var divCardFood = $('.cardFreeFood').find('div.card.form-group.card-food');
                ko.utils.arrayForEach(self.dataSetUpCondition.listPromotionGroupFreeFood(), function (item) {
                    var index = self.dataSetUpCondition.tempListGroupFreeFood().findIndex(function (element) {
                        return element.promotionGroupFreeFoodId() == item;
                    });
                    divCardFood[index].classList.add('card-active');
                });
            }
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        DataSetUpPromotionTimeMap(); //Added and End by WEB-SA24-0012
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        $('#modalConditionSetup').modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.dataSetUpCondition.isTermsPrice(true);
                        self.dataSetUpCondition.isTermsFood(false);
                        self.dataSetUpCondition.promotionTypeId(cConditionPrice);

                        self.dataSetUpCondition.tempListMainPrice(self.dataMainPrice.slice(0));
                        self.dataSetUpCondition.tempListGroupFreeFood(self.dataGroupFreeFood.slice(0));

                        self.dataSetUpCondition.isEmptyMainPrice(self.dataSetUpCondition.tempListMainPrice().length == 0 ? true : false);
                        self.dataSetUpCondition.isEmptyGrpFreeFood(self.dataSetUpCondition.tempListGroupFreeFood().length == 0 ? true : false);

                        if (!self.dataSetUpCondition.isEmptyMainPrice()) {
                            self.dataSetUpCondition.promotionMainPriceId(_.first(self.dataSetUpCondition.tempListMainPrice()).promotionMainPriceId());
                            self.dataSetUpCondition.promotionTypeId(cConditionPrice);
                            $('.cardPrice').find('div.card.card-body.form-group.card-price')[0].classList.add('card-active');
                        }
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridConditionMainPrice .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //End GridCondition MainPrice

    self.dataGridConditionMainFood = ko.observable({
        dataSource: self.dataConditionMainFood,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: false,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'promotionName', caption: 'Promotion Name', alignment: 'center', width: '250'},   //Added and End by WEB-SA22-0062
            { dataField: 'strGrpMainFoodName', caption: 'Group MainFood Name', alignment: 'center', width: '180' },
            { dataField: 'strGrpFreeFoodName', caption: 'Group FreeFood Name', alignment: 'center', width: '180' },
            { dataField: 'isAutoFree', caption: 'Auto Free', alignment: 'center', width: '80' },
            { dataField: 'active', caption: 'Active', alignment: 'center', width: '80' },
            { dataField: 'startDate', caption: 'StartDate', alignment: 'center', dataType: 'date', width: '100' },
            { dataField: 'endDate', caption: 'EndDate', alignment: 'center', dataType: 'date', width: '100' },

        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpCondition);
            //Added by WEB-SA22-0062#2
            self.dataSetUpCondition.startDate(moment(new Date(self.dataSetUpCondition.startDate())).format('L'));
            self.dataSetUpCondition.endDate(moment(new Date(self.dataSetUpCondition.endDate())).format('L'));
            //End Added by WEB-SA22-0062#2
            self.dataSetUpCondition.isTermsPrice(false);
            self.dataSetUpCondition.isTermsFood(true);
            self.dataSetUpCondition.tempListGroupMainFood(self.dataGroupMainFood().slice(0));
            self.dataSetUpCondition.tempListGroupFreeFood(self.dataGroupFreeFood().slice(0));

            self.dataSetUpCondition.isEmptyGrpMainFood(self.dataSetUpCondition.tempListGroupMainFood().length == 0 ? true : false);
            self.dataSetUpCondition.isEmptyGrpFreeFood(self.dataSetUpCondition.tempListGroupFreeFood().length == 0 ? true : false);

            DataSetUpPromotionTimeMap(self.dataSetUpCondition.promotionId()); //Added and End by WEB-SA24-0012

            vmViewIndex.allSetting.disableButtonSubmit(false);
            $('#modalConditionSetup').modal({
                keyboard: false,
                backdrop: "static",
                show: true
            });
            if (self.dataSetUpCondition.isEmptyGrpMainFood() == false) {
                var divCardFood = $('.cardMainFood').find('div.card.form-group.card-food');
                ko.utils.arrayForEach(self.dataSetUpCondition.listPromotionGroupMainFood(), function (item) {
                    var index = self.dataSetUpCondition.tempListGroupMainFood().findIndex(function (element) {
                        return element.promotionGroupMainFoodId() == item;
                    });
                    divCardFood[index].classList.add('card-active');
                });
            }
            if (self.dataSetUpCondition.isEmptyGrpFreeFood() == false) {
                var divCardFood = $('.cardFreeFood').find('div.card.form-group.card-food');
                ko.utils.arrayForEach(self.dataSetUpCondition.listPromotionGroupFreeFood(), function (item) {
                    var index = self.dataSetUpCondition.tempListGroupFreeFood().findIndex(function (element) {
                        return element.promotionGroupFreeFoodId() == item;
                    });
                    divCardFood[index].classList.add('card-active');
                });
            }
            self.chkBtnUpdate(true);
            self.chkBtnAdd(false);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        DataSetUpPromotionTimeMap(); //Added and End by WEB-SA24-0012
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        $('#modalConditionSetup').modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.dataSetUpCondition.isTermsPrice(false);
                        self.dataSetUpCondition.isTermsFood(true);
                        self.dataSetUpCondition.promotionTypeId(cConditionFood);

                        self.dataSetUpCondition.tempListGroupMainFood(self.dataGroupMainFood().slice(0));
                        self.dataSetUpCondition.tempListGroupFreeFood(self.dataGroupFreeFood().slice(0));

                        self.dataSetUpCondition.isEmptyGrpMainFood(self.dataSetUpCondition.tempListGroupMainFood().length == 0 ? true : false);
                        self.dataSetUpCondition.isEmptyGrpFreeFood(self.dataSetUpCondition.tempListGroupFreeFood().length == 0 ? true : false);

                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridConditionMainFood .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //End GridCondition MainFood
    //End Added by SMILEDINING-SA20-0016

    //Added by SMILEDINING-SA20-0031
    self.dataGridShopClose = ko.observable({
        dataSource: self.dataShopClose,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: false,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'startDate', caption: 'StartDate', alignment: 'center', dataType: 'date', width: '200' },
            { dataField: 'endDate', caption: 'EndDate', alignment: 'center', dataType: 'date', width: '200' },
            { dataField: 'reason', caption: 'CloseReason', width: '200' },
            { dataField: 'time', caption: '', width: 80, alignment: 'center' }
        ],
        onCellPrepared: function (options) {
            var column = options.column;
            var fieldData = options.value,
                fieldHtml = '';

            if (column.dataField === 'time') {
                if (!isEmpty(fieldData)) {
                    fieldHtml = "<span><i class='fa fa-trash fa-lg' style='color:red;'></i></span>";
                    options.cellElement.html(fieldHtml);
                }
            }
        },
        onCellClick: function (e) {
            var data = e.data;
            if (e.rowType == 'data' && e.column.dataField == 'time') {
                var id = '';
                if (data.time().length == 1) {
                    id = _.first(data.time()).shopCloseId();
                } else {
                    id = data.time()[0].shopCloseId() + ',' + data.time()[1].shopCloseId();
                }
                //swalConfirmDeleteShopClose(cfrmDeleteShopClose, id); //Modified and End by WEB-SA23-0001
                //Added by WEB-SA23-0001
                if (checkMqttConnection(cfrmDeleteShopClose)) {
                    swalConfirmDeleteShopClose(cfrmDeleteShopClose, id);
                } else {
                    swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
                    vmViewIndex.isKiosk(false);
                }
                //End Added by WEB-SA23-0001
            } else if (e.rowType == 'data') {

                var unmap = ko.mapping.toJSON(data);
                ko.mapping.fromJSON(unmap, {}, self.dataSetUpModalShopClose);
                var dataTime = data.time();
                dataTime.sort(function sortByTime(a, b) {
                    var aTimestart = moment(a.startTimePmAm(), moment_time_format_hhmmssa);
                    var bTimestart = moment(b.startTimePmAm(), moment_time_format_hhmmssa);
                    return aTimestart > bTimestart ? 1 : -1;
                });

                self.dataSetUpModalShopClose.shopCloseIdFirst(_.first(dataTime).shopCloseId());
                self.dataSetUpModalShopClose.hasShowSecondTime(true);
                // 24 Hour??
                if (_.first(dataTime).startTime() == time_start_24h && _.first(dataTime).endTime() == time_end_24h) {
                    self.dataSetUpModalShopClose.valActive24Hour(true);
                    self.dataSetUpModalShopClose.valFirstHourStartTime(moment(time_start_24h, moment_time_format_hhmmss));
                    self.dataSetUpModalShopClose.valFirstHourEndTime(moment(time_end_24h, moment_time_format_hhmmss));

                }
                else {
                    self.dataSetUpModalShopClose.valActive24Hour(false);
                    self.dataSetUpModalShopClose.valFirstHourStartTime(moment(_.first(dataTime).startTime(), moment_time_format_hhmmss));
                    self.dataSetUpModalShopClose.valFirstHourEndTime(moment(_.first(dataTime).endTime(), moment_time_format_hhmmss));
                }

                // Second Peried time
                if (dataTime.length > 1) {
                    self.dataSetUpModalShopClose.valSecondHourStartTime(moment(dataTime[1].startTime(), moment_time_format_hhmmss));
                    self.dataSetUpModalShopClose.valSecondHourEndTime(moment(dataTime[1].endTime(), moment_time_format_hhmmss));
                    self.dataSetUpModalShopClose.shopCloseIdSecond(dataTime[1].shopCloseId());
                    self.dataSetUpModalShopClose.hasShowSecondTime(false);
                }
                //self.dataSetUpModalShopClose
                //self.dataSetUpModalShopClose.timeObj();

                vmViewIndex.allSetting.disableButtonSubmit(false);
                $('#modalSetUpShopClose').modal({
                    keyboard: false,
                    backdrop: "static",
                    show: true
                });
                self.chkBtnUpdate(true);
                self.chkBtnAdd(false);
            }
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            },
            {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        vmViewIndex.allSetting.disableButtonSubmit(false);
                        self.dataSetUpModalShopClose.valFirstHourStartTime(moment(time_start_24h, moment_time_format_hhmmss));
                        self.dataSetUpModalShopClose.valFirstHourEndTime(moment(time_end_24h, moment_time_format_hhmmss));
                        self.dataSetUpModalShopClose.hasShowSecondTime(true);
                        $('#modalSetUpShopClose').modal({
                            keyboard: false,
                            backdrop: "static",
                            show: true
                        });
                        self.chkBtnUpdate(false);
                        self.chkBtnAdd(true);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $("#gridShopClose .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    }); //dataGridShopClose
    //End Added by SMILEDINING-SA20-0031

    //Added by SMILEDINING-SA19-0017
    self.shippingType = ko.observable('2');
    self.isPickup = ko.observable(false);
    self.isDelivery = ko.observable(false);
    self.isPickupDelivery = ko.observable(true);

    self.ckPickup = function () {
        self.isPickup(true);
        self.isDelivery(false);
        self.isPickupDelivery(false);
        self.shippingType('0');
        return true;
    };

    self.ckDelivery = function () {
        self.isPickup(false);
        self.isDelivery(true);
        self.isPickupDelivery(false);
        self.shippingType('1');
        return true;
    };

    self.ckPickupDelivery = function () {
        self.isPickup(false);
        self.isDelivery(false);
        self.isPickupDelivery(true);
        self.shippingType('2');
        return true;
    };
    //End Added by SMILEDINING-SA19-0017
    //Added by SMILEDINING-SA21-0002
    self.showGuestCheckOut = ko.observable('1');
    self.isShowGuestCheckOut = ko.observable(true);
    self.ckShowGuest = function () {
        self.isShowGuestCheckOut(true);
        self.showGuestCheckOut('1');
        return true;
    };

    self.ckHideGuest = function () {
        self.isShowGuestCheckOut(false);
        self.showGuestCheckOut('0');
        return true;
    };
    //End Added by SMILEDINING-SA21-0002
    //Added by SMILEDINING-SA20-0006
    self.isMultiProduct = ko.observable(false);
    self.isSmileDining = ko.observable(true);
    self.productIds = ko.observable(''); //Added and End by WEB-SA23-0001
    self.selectProduct = ko.observable();

    var productId = filterGlobalConfig(data, 'productID');
    var arrProductId = productId.split(',');
    var isMultiProduct = checkMultiProduct(arrProductId);
    var isSmileDining = checkIsSmileDining(arrProductId, '');
    self.isMultiProduct(isMultiProduct);
    self.isSmileDining(isSmileDining);
    self.productIds(arrProductId); //Added and End by WEB-SA23-0001
    self.filterProduct = new ProductViewModel(self, cfrmMySetting);
    //End Added by SMILEDINING-SA20-0006

    //Added by SMILEDINING-SA21-0035#11
    self.fileNameBackground = ko.observable('');
    self.fileTypeBackground = ko.observable('');
    self.chooseImageBackground = function (data, event) {
        if (event.target.file != "undefined") {
            vmViewIndex.showLoading(true);
            self.fileNameBackground(_.first(event.target.files).name);
            self.fileTypeBackground(_.first(event.target.files).type);
            var pathImagePreview = URL.createObjectURL(_.first(event.target.files));
            $('#imgBgCropContainer').attr('src', pathImagePreview);
            $('#imgBgCropMobileContainer').attr('src', pathImagePreview);
            setTimeout(function () {
                $('#modalUploadImageBackground').modal('show');
                //vmViewIndex.showLoading(false); //Modified and End by SMILEDINING-SA21-0035#12
            }, 500);
        }
    }

    var cropperBg = null;
    var cropperBgCopy = null;
    var cropperBgMobile = null;
    var imageBg = document.getElementById('imgBgCropContainer');
    var imageBgMobile = document.getElementById('imgBgCropMobileContainer');
    var fileImage = [];
    var optionCropperBg = {
        viewMode: 3,
        background: false,
        cropBoxResizable: false,
        guides: false,
        center: false,
        autoCropArea: 1,
        dragMode: 'move',
    };
    var optionCropperBgMobile = {
        aspectRatio: 414 / 248,
        viewMode: 3,
        background: false,
        cropBoxResizable: false,
        guides: false,
        center: false,
        autoCropArea: 0,
        minCropBoxWidth: 414,
        minCropBoxHeight: 248,
        dragMode: 'move',
    };
    $('#modalUploadImageBackground').on('shown.bs.modal', function () {
        if (!self.mobileCropMode()) {
            cropperBg = new Cropper(imageBg, optionCropperBg);
            vmViewIndex.showLoading(false); //Added and End by SMILEDINING-SA21-0035#12
        } else {
            self.mobileCropMode(false); //Added and End by SMILEDINING-SA21-0035#12
            //cropperBgMobile = new Cropper(imageBgMobile, optionCropperBgMobile); //Modified and End by SMILEDINING-SA21-0035#12
        }
    }).on('hidden.bs.modal', function () {
        if (!self.mobileCropMode()) {
            cropperBg.destroy();
            cropperBg = null;
        } else {
            cropperBgMobile.destroy();
            cropperBgMobile = null;
        }
        $('#uploadImageBackground').val('');
        $('#modalUploadImageBackground .drag-container').removeClass('d-none');
        //Added by SMILEDINING-SA21-0035#12
        if (isEmpty(vmViewIndex.globalConfig.shopBackground())) {
            $('#showUploadImageBackground').text('');
        } else {
            $('#showUploadImageBackground').text(vmViewIndex.globalConfig.shopBackground());
        }
        //End Added by SMILEDINING-SA21-0035#12
    });

    self.mobileCropMode = ko.observable(false);
    self.switchMobileCropMode = ko.observable({
        switchedOffText: 'OFF',
        switchedOnText: 'ON',
        value: self.mobileCropMode,
        width: 55,
        onValueChanged: function (item) {
            vmViewIndex.showLoading(true);
            if (item.value == true) {
                self.mobileCropMode(true);
                setTimeout(function () {
                    cropperBgMobile = new Cropper(imageBgMobile, optionCropperBgMobile);
                    $('#modalUploadImageBackground .drag-container').addClass('mobile');
                    $('#modalUploadImageBackground .drag-container').removeClass('d-none');
                    vmViewIndex.showLoading(false);
                }, 200);
                cropperBgCopy = cropperBg.getCroppedCanvas({
                    width: 1920,
                    height: 639
                });
                cropperBg.destroy();
                cropperBg = null;
            } else {
                self.mobileCropMode(false);
                setTimeout(function () {
                    cropperBg = new Cropper(imageBg, optionCropperBg);
                    $('#modalUploadImageBackground .drag-container').removeClass('mobile');
                    $('#modalUploadImageBackground .drag-container').removeClass('d-none');
                    vmViewIndex.showLoading(false);
                }, 200);
                if (!isEmpty(cropperBgMobile)) { //Added and End by SMILEDINING-SA21-0035#12
                    cropperBgMobile.destroy();
                    cropperBgMobile = null;
                } //Added and End by SMILEDINING-SA21-0035#12
            }
        }
    });

    $('#btnCropImageBackground').click(function () {
        fileImage = [];
        if (self.mobileCropMode()) {
            canvas = cropperBgCopy;
        } else {
            canvas = cropperBg.getCroppedCanvas({
                width: 1920,
                height: 639
            });
        }

        canvas.toBlob(function (blob) {
            url = URL.createObjectURL(blob);
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                const base64data = reader.result;
                convertBase64toFile(base64data);
            }
        });
    });

    function convertBase64toFile(base64data) {
        const promiseBase64 = new Promise((resolve, reject) => {
            fetch(base64data)
                .then(res => res.blob())
                .then(blob => {
                    var file;
                    var fileName = self.fileNameBackground();
                    var fileNameMobile = fileName.split('.').slice(0, -1).join('.') + '_mobile.' + fileName.split('.').pop();
                    if (fileImage.length == 0) {
                        file = new File([blob], fileName, { type: self.fileTypeBackground() })
                    } else {
                        file = new File([blob], fileNameMobile, { type: self.fileTypeBackground() })
                    }
                    if (typeof file != 'undefined') {
                        resolve(file);
                    } else {
                        reject(new Error(file));
                    }
                });
        });
        promiseBase64.then(value => {
            fileImage.push(value);

            if (self.mobileCropMode() && fileImage.length == 1 && !isEmpty(cropperBgMobile)) {
                canvas = cropperBgMobile.getCroppedCanvas({
                    width: 828,
                    height: 496
                });
                canvas.toBlob(function (blob) {
                    url = URL.createObjectURL(blob);
                    var reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = function () {
                        const base64data = reader.result;
                        convertBase64toFile(base64data);
                    }
                });
            } else {
                self.submitUploadImageBackground(fileImage);
            }
        });
        promiseBase64.catch(() => {
            $('#modalUploadImageBackground').modal('hide');
            swal('Error', cSwal_Alert_Error, cSwal_Icon_Error);
            vmViewIndex.disablePointer('pointer');
        })
    };

    self.submitUploadImageBackground = function (fileImage) {
        if (!checkInternetConnection()) {
            var objAlert = new ObjAlert(formId, cError_Fail_NoInternet, false);
            objAlert.getAlert();
            return false;
        };

        var parent = $('#' + cfrmUploadImageBackgroundSetting).parent();
        var objValidate = new ObjValidateForm(cfrmUploadImageBackgroundSetting, parent);

        vmViewIndex.disablePointer('default');
        objValidate.verifyData();
        if (objValidate.error.length > 0) {
            if (objValidate.showAlert) {
                var messageError = convertArrToString(objValidate.error);
                swal(cSwal_Alert_Error, replaceNewLineToBr(messageError), cSwal_Icon_Error);
            }
            vmViewIndex.disablePointer('pointer');
            return false;
        } else {
            addSpinButton('modalUploadImageBackground');
            var formData = new FormData();
            var objUrl = new ObjUrl(cfrmUploadImageBackgroundSetting);
            var requestUrl = objUrl.getUrlSubmitForm();
            for (var i = 0; i < fileImage.length; i++) {
                formData.append("uploadImageBackground", fileImage[i]);
            }
            $.ajax({
                url: requestUrl,
                async: ajax_async,
                cache: ajax_cache,
                type: ajax_type_post,
                data: formData,
                processData: false,
                contentType: false,
                timeout: ajax_timeout,
            })
                .done(function (result) {
                    if (result.status) {
                        vmViewIndex.globalConfig.shopBackground(result.filename);
                        vmViewIndex.globalConfig.delShopBackground(true);
                    }
                    $('#modalUploadImageBackground').modal('hide');
                    var objAlert = new ObjAlert(cfrmUploadImageBackgroundSetting, result.message, result.status);
                    objAlert.getAlert();
                    removeSpinButton('modalUploadImageBackground');
                    vmViewIndex.disablePointer('pointer');
                })
                .fail(function (result) {
                    $('#modalUploadImageBackground').modal('hide');
                    var objAlert = new ObjAlert(formId, cError_Fail_TimeOut, false);
                    objAlert.getAlert();
                    removeSpinButton('modalUploadImageBackground');
                    vmViewIndex.disablePointer('pointer');
                });
        }
    };

    $('#modalUploadImageBackground .drag-container').click(function () { 
        $(this).addClass('d-none');
    });
    //End Added by SMILEDINING-SA21-0035#11
};

//Added By SMILEDINING-SA19-0008
function SetupCouponDeliveryViewModel(currentDateTime) {
    var self = this;
    self.dataDiscountType = ko.observableArray([]);
    self.couponDeliveryId = ko.observable('');
    self.couponDeliveryName = ko.observable('');
    self.couponDeliveryDesc = ko.observable('');
    self.discountTypeId = ko.observable(3);
    self.isTotal = ko.observable(false);
    self.totalCoupon = ko.observable(0);
    self.isMinimum = ko.observable(false);
    self.minimumOrder = ko.observable(0.00).extend({ numeric: 2 });
    self.amountOff = ko.observable(0.00).extend({ numeric: 2 });
    self.percentOff = ko.observable(0.00).extend({ numeric: 0 });
    self.isAmount = ko.observable(false);
    self.isPercent = ko.observable(false);
    self.isFree = ko.observable(false);
    self.couponDeliveryCode = ko.observable('');
    self.startDate = ko.observable(moment(new Date()).format('L'));
    self.endDate = ko.observable(moment(new Date()).format('L'));
    self.active = ko.observable(true);
    self.currentDate = ko.observable(moment(currentDateTime).format('MM/DD/YYYY'));

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.active,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    self.dxStartDate = ko.observable({
        acceptCustomValue: false,
        width: "auto",
        pickerType: "calendar",
        type: "date",
        min: self.currentDate,
        value: self.startDate,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.startDate(moment(new Date(v.value)).format());
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dxEndDate = ko.observable({
        acceptCustomValue: false,
        width: "auto",
        min: self.startDate,
        pickerType: "calendar",
        type: "date",
        value: self.endDate,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.endDate(moment(new Date(v.value)).format());
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.ckTotal = function () {
        if (self.isTotal() == false) {
            self.totalCoupon(0);
            removeClassValidationError(cfrmTotalCouponDelivery);
        }

        return true;
    };

    self.ckMinimum = function () {
        if (self.isMinimum() == false) {
            self.minimumOrder(0.00);
            removeClassValidationError(cfrmMinimumOrderCouponDelivery);
        }

        return true;
    };

    self.ckFree = function () {
        self.isFree(true);
        self.isAmount(false);
        self.isPercent(false);
        self.amountOff(0.00);
        self.percentOff(0.00);
        removeClassValidationError(cfrmAmountOffCouponDelivery);
        removeClassValidationError(cfrmPercentOffCouponDelivery);
        return true;
    };

    self.ckAmountOff = function () {
        self.isFree(false);
        self.isPercent(false);
        self.isAmount(true);
        self.percentOff(0.00);
        removeClassValidationError(cfrmPercentOffCouponDelivery);
        return true;
    };

    self.ckPercentOff = function () {
        self.isFree(false);
        self.isPercent(true);
        self.isAmount(false);
        self.amountOff(0.00);
        removeClassValidationError(cfrmAmountOffCouponDelivery);
        return true;
    };

    self.btnCloseSetup = function () {
        self.clearSetUp();
        DataSetUpDiscountTimeMap(); //Added and End by WEB-SA23-0045
    };

    //Added by WEB-SA23-0045
    self.btnClickSave = function () {
        vmViewIndex.allSetting.dataSetUpModalDiscountTimeMap.setDataMultiTime();
        getIdTag(cfrmCouponDelivery).submit();
    };
    //End Added by WEB-SA23-0045

    self.selectDiscountType = ko.observable({
        acceptCustomValue: false,
        dataSource: self.dataDiscountType,
        displayExpr: "discountTypeName",
        value: self.discountTypeId,
        valueExpr: "discountTypeId",
        dropDownButtonTemplate: 'dropDownButton',
        onItemClick: function (item) {
            if (item.itemData != null) {
                if (item.itemData.discountTypeId() == 1) {
                    vmViewIndex.allSetting.dataViewModelCouponDelivery.discountTypeId(1);
                } else if (item.itemData.discountTypeId() == 2) {
                    vmViewIndex.allSetting.dataViewModelCouponDelivery.discountTypeId(2);
                }
                    //Added by SMILEDINING-SA20-0006
                else if (item.itemData.discountTypeId() == 4) {
                    vmViewIndex.allSetting.dataSetUpModal.discountTypeId(4);
                }
                    //End Added by SMILEDINING-SA20-0006
                else {
                    vmViewIndex.allSetting.dataViewModelCouponDelivery.discountTypeId(3);
                }
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
    });

    self.clearSetUp = function () {
        var self = this;
        self.couponDeliveryId('');
        self.couponDeliveryName('');
        self.couponDeliveryDesc('');
        self.discountTypeId(3);
        self.isTotal(false);
        self.totalCoupon(0);
        self.isMinimum(false);
        self.minimumOrder(0.00);
        self.amountOff(0.00);
        self.percentOff(0.00);
        self.isAmount(false);
        self.isPercent(false);
        self.isFree(false);
        self.couponDeliveryCode('');
        self.startDate(moment(new Date()).format('L'));
        self.endDate(moment(new Date()).format('L'));
        self.active(true);
    };
};
//End Added By SMILEDINING-SA19-0008

function SetUpDiscountViewModel() {
    var self = this;
    self.dataDiscountType = ko.observableArray([]); //Added and End by SMILEDINING-SA18-0006
    self.discountId = ko.observable('');
    self.discountName = ko.observable('');
    self.discountDesc = ko.observable('');
    self.discountTypeId = ko.observable(3); //Added and End by SMILEDINING-SA18-0006
    self.isCouponAmtOff = ko.observable(true);
    self.isCouponPercentOff = ko.observable(false);
    self.couponAmountOff = ko.observable(0.00).extend({ numeric: 2 });
    //self.couponPercentOff = ko.observable(0).extend({ numeric: 0 });      //Modified and End by SMILEDINING-SA20-0011
    self.couponPercentOff = ko.observable(0.00).extend({ numeric: 2 }); //Added and End by SMILEDINING-SA20-0011
    self.couponCode = ko.observable('');
    self.startDate = ko.observable(moment(new Date()).format('L'));
    self.endDate = ko.observable(moment(new Date()).format('L'));
    self.active = ko.observable(true);
    //Added by SMILEDINING-SA21-0017
    self.isTotal = ko.observable(false);
    self.totalCoupon = ko.observable(0);
    //End Added by SMILEDINING-SA21-0017
    //Added by SMILEDINING-SA20-0011
    self.isAutoDiscount = ko.observable(false);
    self.isCouponDiscount = ko.observable(true);
    self.termsAmountMin = ko.observable(0.00).extend({ numeric: 2 });
    self.termsAmountMax = ko.observable(0.00).extend({ numeric: 2 });
    self.isUnlimitMin = ko.observable(false);
    self.isUnlimitMax = ko.observable(false);
    self.isPickup = ko.observable(true);
    self.isDelivery = ko.observable(true);
    self.shippingType = ko.observableArray([]);
    self.shippingTypeId = ko.observable(shippingType.cAll);
    self.shippingType([
       { name: shippingType.mapName[shippingType.cAll].name, id: shippingType.cAll },
       { name: shippingType.mapName[shippingType.cPickUp].name, id: shippingType.cPickUp },
       { name: shippingType.mapName[shippingType.cDelivery].name, id: shippingType.cDelivery }]);
    //End Added by SMILEDINING-SA20-0011

    self.clickIsCouponAmtOff = function () {
        self.isCouponAmtOff(true);
        self.isCouponPercentOff(false);
        //self.couponPercentOff(0);     //Modified and End by SMILEDINING-SA20-0011
        self.couponPercentOff(0.00);    //Added and End by SMILEDINING-SA20-0011
        return true;
    };

    self.clickIsCouponPercentOff = function () {
        self.isCouponPercentOff(true);
        self.isCouponAmtOff(false);
        self.couponAmountOff(0.00);
        return true;
    };

    //Added by SMILEDINING-SA20-0011
    self.clickIsAutoDiscount = function (data) {
        var isAutoDiscount = data.allSetting.dataSetUpModal.isAutoDiscount();
        if (isAutoDiscount) {
            self.isAutoDiscount(true);
            self.isCouponDiscount(false);
            self.checkRangDiscount();
            self.isTotal(false); //Added and End by SMILEDINING-SA21-0017
        } else {
            self.isAutoDiscount(false);
            self.isCouponDiscount(true);
            vmViewIndex.allSetting.disableButtonSubmit(false);
        }
        self.couponCode('');
        self.termsAmountMin(0.00);
        self.termsAmountMax(0.00);
        self.isUnlimitMin(true);
        self.isUnlimitMax(true);
        self.totalCoupon(0);    //Added and End by SMILEDINING-SA21-0017
        return true;
    };
    self.clickIsUnlimitMin = function (data) {
        var isUnlimitMin = data.allSetting.dataSetUpModal.isUnlimitMin();
        self.termsAmountMin(0.00);
        if (self.isAutoDiscount())  //Added and End by SMILEDINING-SA21-0017
            self.checkRangDiscount(); //Added and End by SMILEDINING-SA20-0011
        return true;
    };
    self.clickIsUnlimitMax = function (data) {
        var isUnlimitMax = data.allSetting.dataSetUpModal.isUnlimitMax();
        self.termsAmountMax(0.00);
        if (self.isAutoDiscount())  //Added and End by SMILEDINING-SA21-0017
            self.checkRangDiscount(); //Added and End by SMILEDINING-SA20-0011
        return true;
    };
    self.isCloseDiscount = ko.observable(false);
    //End Added by SMILEDINING-SA20-0011

    self.dxStartDate = ko.observable({
        acceptCustomValue: false,
        width: "auto",
        pickerType: "calendar",
        type: "date",
        value: self.startDate,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.startDate(moment(new Date(v.value)).format());
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dxEndDate = ko.observable({
        acceptCustomValue: false,
        width: "auto",
        min: self.startDate,
        pickerType: "calendar",
        type: "date",
        value: self.endDate,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.endDate(moment(new Date(v.value)).format());
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    //Added by SMILEDINING-SA18-0006
    self.selectDiscountType = ko.observable({
        acceptCustomValue: false,
        dataSource: self.dataDiscountType,
        displayExpr: "discountTypeName",
        value: self.discountTypeId,
        valueExpr: "discountTypeId",
        dropDownButtonTemplate: 'dropDownButton',
        onItemClick: function (item) {
            if (item.itemData != null) {
                if (item.itemData.discountTypeId() == 1) {
                    vmViewIndex.allSetting.dataSetUpModal.discountTypeId(1);
                } else if (item.itemData.discountTypeId() == 2) {
                    vmViewIndex.allSetting.dataSetUpModal.discountTypeId(2);
                }
                    //Added by SMILEDINING-SA20-0011
                else if (item.itemData.discountTypeId() == 4) {
                    vmViewIndex.allSetting.dataSetUpModal.discountTypeId(4);
                }
                    //End Added by SMILEDINING-SA20-0011
                else {
                    vmViewIndex.allSetting.dataSetUpModal.discountTypeId(3);
                }
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
    });
    //End Added by SMILEDINING-SA18-0006

    //Added by SMILEDINING-SA20-0011
    self.selectShippingType = ko.observable({
        acceptCustomValue: false,
        dataSource: self.shippingType,
        displayExpr: 'name',
        value: self.shippingTypeId,
        valueExpr: 'id',
        dropDownButtonTemplate: 'dropDownButton',
        onItemClick: function (item) {
            if (item.itemData != null) {
                if (item.itemData.id == shippingType.cPickUp) {
                    vmViewIndex.allSetting.dataSetUpModal.shippingTypeId(shippingType.cPickUp);
                    vmViewIndex.allSetting.dataSetUpModal.isPickup(true);
                    vmViewIndex.allSetting.dataSetUpModal.isDelivery(false);
                } else if (item.itemData.id == shippingType.cDelivery) {
                    vmViewIndex.allSetting.dataSetUpModal.shippingTypeId(shippingType.cDelivery);
                    vmViewIndex.allSetting.dataSetUpModal.isPickup(false);
                    vmViewIndex.allSetting.dataSetUpModal.isDelivery(true);
                }
                else {
                    vmViewIndex.allSetting.dataSetUpModal.shippingTypeId(shippingType.cAll);
                    vmViewIndex.allSetting.dataSetUpModal.isPickup(true);
                    vmViewIndex.allSetting.dataSetUpModal.isDelivery(true);
                }
                if (self.isAutoDiscount())  //Added and End by SMILEDINING-SA21-0017
                    self.checkRangDiscount();
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
    });
    //End Added by SMILEDINING-SA20-0011

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.active,
        //width: switchActiveWidth55px, //Modified and End by SMILEDINING-SA21-0017
        width: switchActiveWidth60px,   //Added and End by SMILEDINING-SA21-0017
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
            //Added by SMILEDINING-SA20-0011
            if (self.isAutoDiscount()) {
                self.checkRangDiscount();
            }
            //End Added by SMILEDINING-SA20-0011
        }
    });

    //Added by SMILEDINING-SA21-0017
    self.clickIsTotal = function () {
        if (self.isTotal() == false) {
            self.totalCoupon(0);
        }
        return true;
    }
    //End Added by SMILEDINING-SA21-0017

    self.btnCloseSetUpDiscount = function () {
        self.isCloseDiscount(true); //Added and End by SMILEDINING-SA20-0011
        self.clearSetUpDiscount();
        //Added by SMILEDINING-SA20-0011
        self.isCloseDiscount(false);
        DataSetUpDiscountTimeMap(); //Added and End by WEB-SA23-0045
        vmViewIndex.allSetting.disableButtonSubmit(false);
        //End Added by SMILEDINING-SA20-0011
    };

    //Added by WEB-SA23-0045
    self.btnClickSave = function () {
        vmViewIndex.allSetting.dataSetUpModalDiscountTimeMap.setDataMultiTime();
        getIdTag(cfrmDiscount).submit();
    };
    //End Added by WEB-SA23-0045

    self.clearSetUpDiscount = function () {
        var self = this;
        //Added by SMILEDINING-SA20-0011
        self.isCloseDiscount(true);
        self.active(true);
        //End Added by SMILEDINING-SA20-0011
        self.discountId('');
        self.discountName('');
        self.discountDesc('');
        self.discountTypeId(3); //Added and End by SMILEDINING-SA18-0006
        self.isCouponAmtOff(true);
        self.isCouponPercentOff(false);
        self.couponAmountOff(0.00);
        //self.couponPercentOff(0);     //Modified and End by SMILEDINING-SA20-0011
        self.couponPercentOff(0.00);    //Added and End by SMILEDINING-SA20-0011
        self.couponCode('');
        self.startDate(moment(new Date()).format('L'));
        self.endDate(moment(new Date()).format('L'));
        //self.active(true);        //Modified and End by SMILEDINING-SA20-0011
        //Added by SMILEDINING-SA20-0011
        self.isAutoDiscount(false);
        self.isCouponDiscount(true);
        self.termsAmountMin(0.00);
        self.termsAmountMax(0.00);
        self.isUnlimitMin(false);
        self.isUnlimitMax(false);
        self.isPickup(true);
        self.isDelivery(true);
        self.shippingTypeId(shippingType.cAll);
        //End Added by SMILEDINING-SA20-0011
        //Added by SMILEDINING-SA21-0017
        self.isTotal(false);
        self.totalCoupon(0);
        //End Added by SMILEDINING-SA21-0017
        removeClassValidationError("#txtDiscount_DiscountAmountOff");
        removeClassValidationError("#txtDiscount_DiscountPercentOff");
    };

    //Added by SMILEDINING-SA20-0011
    self.checkRangDiscount = function () {
        if (self.isCloseDiscount() == false) {
            vmViewIndex.allSetting.disableButtonSubmit(false);
            //Added by SMILEDINING-SA20-0011
            if (isNaN(self.termsAmountMin()) || isNaN(self.termsAmountMax())) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                alerMessage(cError_GiftCerCustomDiscountMinMax_Empty, false);
                return true;
            }
            else if ((Number(self.termsAmountMin()) >= Number(self.termsAmountMax())) && Number(self.termsAmountMax() != 0)) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                alerMessage(cError_GiftCerCustomDiscountMin_LessMax, false);
                return false;
            }
            //End Added by SMILEDINING-SA20-0011
            var data = vmViewIndex.allSetting.data();
            var discountId = vmViewIndex.allSetting.dataSetUpModal.discountId();
            var discountAutoData = _.filter(data, function (v) {
                return v.couponCode() == null;
            });
            var filterFromId = _.filter(data, function (v) {
                return v.discountId() == discountId;
            });
            var filterShippingType;
            if (vmViewIndex.allSetting.dataSetUpModal.shippingTypeId() == shippingType.cAll) {
                filterShippingType = discountAutoData;
            }
            if (vmViewIndex.allSetting.dataSetUpModal.shippingTypeId() == shippingType.cPickUp) {
                filterShippingType = _.filter(discountAutoData, function (v) {
                    return v.isPickup() == true;
                });
            }
            if (vmViewIndex.allSetting.dataSetUpModal.shippingTypeId() == shippingType.cDelivery) {
                filterShippingType = _.filter(discountAutoData, function (v) {
                    return v.isDelivery() == true;
                });
            }
            var discountOrderBy = _.orderBy(filterShippingType, function (v) {
                return v.termsAmountMin();
            });

            var filterDiscountNolimit = _.filter(discountOrderBy, function (v) {
                return v.termsAmountMin() == 0 && v.termsAmountMax() == 0 && v.active() == true && v.discountId() != discountId;
            });

            var filterMaxNolimit = _.filter(discountOrderBy, function (v) {
                return v.termsAmountMin() != 0 && v.termsAmountMax() == 0;
            });
            if (filterMaxNolimit.length != 0) {
                //Modified by SMILEDINING-SA21-0017#1
                //filterMaxNolimit = _.filter(filterMaxNolimit, function (v) {
                //    return parseFloat(self.termsAmountMin()) >= parseFloat(v.termsAmountMin()) || parseFloat(self.termsAmountMax()) >= parseFloat(v.termsAmountMin());
                //});
                //End Modified by SMILEDINING-SA21-0017#1
                //Added by SMILEDINING-SA21-0017#1
                if (self.termsAmountMax() != 0) {
                    filterMaxNolimit = _.filter(filterMaxNolimit, function (v) {
                        return parseFloat(self.termsAmountMin()) >= parseFloat(v.termsAmountMin()) || parseFloat(self.termsAmountMax()) >= parseFloat(v.termsAmountMin());
                    });
                }
                //End Added by SMILEDINING-SA21-0017#1
            }

            if (filterMaxNolimit.length != 0) {
                filterMaxNolimit = _.filter(filterMaxNolimit, function (v) {
                    return v.discountId() != discountId;
                });
            }

            //Added by SMILEDINING-SA20-0011
            var filterMinNolimit = _.filter(discountOrderBy, function (v) {
                return v.termsAmountMin() == 0 && v.termsAmountMax() != 0;
            });
            if (filterMinNolimit.length != 0) {
                filterMinNolimit = _.filter(filterMinNolimit, function (v) {
                    return (parseFloat(self.termsAmountMax()) != 0 && parseFloat(self.termsAmountMax()) <= parseFloat(v.termsAmountMax())) || parseFloat(self.termsAmountMin()) <= parseFloat(v.termsAmountMax());
                });
            }
            if (filterMinNolimit.length != 0) {
                filterMinNolimit = _.filter(filterMinNolimit, function (v) {
                    return v.discountId() != discountId;
                });
            }
            //End Added by SMILEDINING-SA20-0011

            var filterDiscountOutOfNolimit = _.filter(discountOrderBy, function (v) {
                return v.termsAmountMin() != 0 && v.termsAmountMax() != 0;
            });
            var filterDiscountOutOfNolimitMaxMin = _.filter(discountOrderBy, function (v) {
                return (v.termsAmountMin() != 0 || v.termsAmountMax() != 0) && v.active() == true;
            });

            if (filterDiscountOutOfNolimitMaxMin.length != 0 && vmViewIndex.allSetting.dataSetUpModal.active() == true && parseFloat(vmViewIndex.allSetting.dataSetUpModal.termsAmountMax()) == 0 && parseFloat(vmViewIndex.allSetting.dataSetUpModal.termsAmountMin()) == 0) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                alerMessage(cError_CustomDiscount_InRange, false);
                return false;
            }
            else if (filterDiscountNolimit.length != 0) {
                if (filterFromId.length != 0) {
                    if (vmViewIndex.allSetting.dataSetUpModal.active() != _.first(filterFromId).active()) {
                        vmViewIndex.allSetting.setDisableButtonSubmit();
                        alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + _.first(filterDiscountNolimit).discountName() + '" ', false);
                        return false;
                    }
                    else {
                        if (_.first(filterFromId).couponCode() != null) {
                            vmViewIndex.allSetting.setDisableButtonSubmit();
                            alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + _.first(filterDiscountNolimit).discountName() + '" ', false);
                            return false;
                        }
                    }
                }
                else {
                    vmViewIndex.allSetting.setDisableButtonSubmit();
                    alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + _.first(filterDiscountNolimit).discountName() + '" ', false);
                    return false;
                }
            }
            else if (filterMaxNolimit != 0) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + _.first(filterMaxNolimit).discountName() + '" ', false);
                return false;
            }
                //Added by SMILEDINING-SA20-0011
            else if (filterMinNolimit != 0) {
                vmViewIndex.allSetting.setDisableButtonSubmit();
                alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + _.first(filterMinNolimit).discountName() + '" ', false);
                return false;
            }
                //End Added by SMILEDINING-SA20-0011
            else {
                var minInRange = _.filter(filterDiscountOutOfNolimit, function (v) {
                    return _.inRange(parseFloat(self.termsAmountMin()), parseFloat(v.termsAmountMin()), parseFloat(v.termsAmountMax()) + 0.01);
                });

                var maxInRange = _.filter(filterDiscountOutOfNolimit, function (v) {
                    return _.inRange(parseFloat(self.termsAmountMax()), parseFloat(v.termsAmountMin()), parseFloat(v.termsAmountMax()) + 0.01);
                });

                var indexMin = _.findIndex(minInRange, function (v) {
                    return v.discountId() != discountId;
                });

                var indexMax = _.findIndex(maxInRange, function (v) {
                    return v.discountId() != discountId;
                });
                //AlertMessage
                if (minInRange.length > 0 && indexMin >= 0) {
                    vmViewIndex.allSetting.setDisableButtonSubmit();
                    alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + minInRange[indexMin].discountName() + '" ', false);
                    return false;
                } else if (maxInRange.length > 0 && indexMax >= 0) {
                    vmViewIndex.allSetting.setDisableButtonSubmit();
                    alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + maxInRange[indexMax].discountName() + '" ', false);
                    return false;
                }
                else if (Number(self.termsAmountMin()) < Number(self.termsAmountMax())) {

                    var minInRangeRev = _.filter(filterDiscountOutOfNolimit, function (v) {
                        return _.inRange(parseFloat(v.termsAmountMin()), parseFloat(self.termsAmountMin()), parseFloat(self.termsAmountMax()) + 0.01);
                    });

                    var maxInRangeRev = _.filter(filterDiscountOutOfNolimit, function (v) {
                        return _.inRange(parseFloat(v.termsAmountMax()), parseFloat(self.termsAmountMin()), parseFloat(self.termsAmountMax()) + 0.01);
                    });

                    var indexMinRev = _.findIndex(minInRangeRev, function (v) {
                        return v.discountId() != discountId;
                    });

                    var indexMaxRev = _.findIndex(maxInRangeRev, function (v) {
                        return v.discountId() != discountId;
                    });

                    if (minInRangeRev.length > 0 && indexMinRev >= 0) {
                        vmViewIndex.allSetting.setDisableButtonSubmit();
                        alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + minInRangeRev[indexMinRev].discountName() + '" ', false);
                        return false;
                    } else if (maxInRangeRev.length > 0 && indexMaxRev >= 0) {
                        vmViewIndex.allSetting.setDisableButtonSubmit();
                        alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + maxInRangeRev[indexMaxRev].discountName() + '" ', false);
                        return false;
                    }
                }
            }
            return true;
        }
        return true;
    };
    //End Added by SMILEDINING-SA20-0011
};

//Added by WEB-SA23-0041
function SetUpMemberDiscountViewModel(chkBtnUpdate) {
    var self = this;
    self.discountId = ko.observable('');
    self.discountName = ko.observable('');
    self.discountDesc = ko.observable('');
    self.isTotal = ko.observable(false);
    self.totalCoupon = ko.observable(0);
    self.isCouponAmtOff = ko.observable(true);
    self.isCouponPercentOff = ko.observable(false);
    self.couponAmountOff = ko.observable(0.00).extend({ numeric: 2 });
    self.couponPercentOff = ko.observable(0.00).extend({ numeric: 2 });
    self.termsAmountMin = ko.observable(0.00).extend({ numeric: 2 });
    self.termsAmountMax = ko.observable(0.00).extend({ numeric: 2 });
    self.couponTypes = ko.observableArray([
        { name: couponTypes.mapName[couponTypes.cMember].name, id: couponTypes.cMember },
        { name: couponTypes.mapName[couponTypes.cRegister].name, id: couponTypes.cRegister }]);
    self.couponTypeId = ko.observable(couponTypes.cMember);
    self.startDate = ko.observable(moment(new Date()).format('L'));
    self.endDate = ko.observable(moment(new Date()).format('L'));
    self.active = ko.observable(true);
    self.isUnlimitMin = ko.observable(false);
    self.isUnlimitMax = ko.observable(false);

    self.selectCouponType = ko.observable({
        acceptCustomValue: false,
        dataSource: self.couponTypes,
        displayExpr: "name",
        valueExpr: "id",
        value: self.couponTypeId,        
        disabled: chkBtnUpdate,
        dropDownButtonTemplate: 'dropDownButton',
        onValueChanged: function (v) {
            var newValue = v.value;
            if (newValue == couponTypes.cRegister) {
                self.isTotal(true);
                self.totalCoupon(1);
            } else {
                self.isTotal(false);
                self.totalCoupon(0);
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
    });

    self.dxStartDate = ko.observable({
        acceptCustomValue: false,
        width: "auto",
        pickerType: "calendar",
        type: "date",
        value: self.startDate,
        disabled: chkBtnUpdate,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.startDate(moment(new Date(v.value)).format('L'));
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dxEndDate = ko.observable({
        acceptCustomValue: false,
        width: "auto",
        min: self.startDate,
        pickerType: "calendar",
        type: "date",
        value: self.endDate,
        disabled: chkBtnUpdate,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.endDate(moment(new Date(v.value)).format('L'));
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.active,
        width: switchActiveWidth60px,
        onValueChanged: function (v) {}
    });

    self.btnCloseSetUpMemberDiscount = function () {
        self.clearSetUpMemberDiscount();
        DataSetUpDiscountTimeMap(); //Added and End by WEB-SA23-0045
        vmViewIndex.allSetting.disableButtonSubmit(false);
    };

    //Added by WEB-SA23-0045
    self.btnClickSave = function () {
        vmViewIndex.allSetting.dataSetUpModalDiscountTimeMap.setDataMultiTime();
        getIdTag(cfrmMemberDiscount).submit();
    };
    //End Added by WEB-SA23-0045

    self.clearSetUpMemberDiscount = function () {
        self.discountId('');
        self.discountName('');
        self.discountDesc('');
        self.isTotal(false);
        self.totalCoupon(0);
        self.isCouponAmtOff(true);
        self.isCouponPercentOff(false);
        self.couponAmountOff(0.00);
        self.couponPercentOff(0.00);
        self.termsAmountMin(0.00);
        self.termsAmountMax(0.00);
        self.couponTypeId(couponTypes.cMember);
        self.startDate(moment(new Date()).format('L'));
        self.endDate(moment(new Date()).format('L'));
        self.active(true);
        self.isUnlimitMin(false);
        self.isUnlimitMax(false);
    };

    self.clickIsCouponAmtOff = function () {
        self.isCouponAmtOff(true);
        self.isCouponPercentOff(false);
        self.couponPercentOff(0.00);
        return true;
    };

    self.clickIsCouponPercentOff = function () {
        self.isCouponPercentOff(true);
        self.isCouponAmtOff(false);
        self.couponAmountOff(0.00);
        return true;
    };

    self.clickIsTotal = function () {
        if (!self.isTotal()) {
            self.totalCoupon(0);
        }
        return true;
    }

    self.clickIsUnlimitMin = function (data) {
        if (self.isUnlimitMin()) {
            self.termsAmountMin(0.00);
        }
        return true;
    };

    self.clickIsUnlimitMax = function (data) {
        if (self.isUnlimitMax()) {
            self.termsAmountMax(0.00);
        }
        return true;
    };
};
//End Added by WEB-SA23-0041

//Added by SMILEDINING-SA20-0048
function SetUpDiscountOneTimeUseViewModel() {
    var self = this;
    self.dataDiscountType = ko.observableArray([]);
    self.discountOneTimeUseId = ko.observable('');
    self.discountOneTimeUseName = ko.observable('');
    self.group = ko.observable(0);
    self.discountTypeId = ko.observable(3);
    self.isCouponAmtOff = ko.observable(true);
    self.isCouponPercentOff = ko.observable(false);
    self.couponAmountOff = ko.observable(0.00).extend({ numeric: 2 });
    self.couponPercentOff = ko.observable(0.00).extend({ numeric: 2 });
    self.couponCode = ko.observable('');
    self.startDate = ko.observable(moment(new Date()).format('L'));
    self.endDate = ko.observable(moment(new Date()).format('L'));
    self.usedOn = ko.observable('');
    self.isUse = ko.observable(false);
    self.discountGroup = ko.observableArray([]);
    //Added by SMILEDINING-SA21-0017
    self.termsAmountMin = ko.observable(0.00).extend({ numeric: 2 });
    self.termsAmountMax = ko.observable(0.00).extend({ numeric: 2 });
    self.isUnlimitMin = ko.observable(false);
    self.isUnlimitMax = ko.observable(false);
    self.isPickup = ko.observable(true);
    self.isDelivery = ko.observable(true);
    self.shippingType = ko.observableArray([]);
    self.shippingTypeId = ko.observable(shippingType.cAll);
    self.shippingType([
       { name: shippingType.mapName[shippingType.cAll].name, id: shippingType.cAll },
       { name: shippingType.mapName[shippingType.cPickUp].name, id: shippingType.cPickUp },
       { name: shippingType.mapName[shippingType.cDelivery].name, id: shippingType.cDelivery }]);


    self.clickIsUnlimitMin = function (data) {
        var isUnlimitMin = data.allSetting.dataSetUpModalDiscountOneTimeUse.isUnlimitMin();
        self.termsAmountMin(0.00);
        return true;
    };
    self.clickIsUnlimitMax = function (data) {
        var isUnlimitMax = data.allSetting.dataSetUpModalDiscountOneTimeUse.isUnlimitMax();
        self.termsAmountMax(0.00);
        return true;
    };

    self.selectShippingType = ko.observable({
        acceptCustomValue: false,
        dataSource: self.shippingType,
        displayExpr: 'name',
        value: self.shippingTypeId,
        valueExpr: 'id',
        dropDownButtonTemplate: 'dropDownButton',
        onItemClick: function (item) {
            if (item.itemData != null) {
                if (item.itemData.id == shippingType.cPickUp) {
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.shippingTypeId(shippingType.cPickUp);
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.isPickup(true);
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.isDelivery(false);
                } else if (item.itemData.id == shippingType.cDelivery) {
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.shippingTypeId(shippingType.cDelivery);
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.isPickup(false);
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.isDelivery(true);
                }
                else {
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.shippingTypeId(shippingType.cAll);
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.isPickup(true);
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.isDelivery(true);
                }
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
    });
    //End Added by SMILEDINING-SA21-0017

    self.dxStartDate = ko.observable({
        acceptCustomValue: false,
        width: "auto",
        pickerType: "calendar",
        type: "date",
        value: self.startDate,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.startDate(moment(new Date(v.value)).format());
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dxEndDate = ko.observable({
        acceptCustomValue: false,
        width: "auto",
        min: self.startDate,
        pickerType: "calendar",
        type: "date",
        value: self.endDate,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.endDate(moment(new Date(v.value)).format());
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });
    self.selectDiscountType = ko.observable({
        acceptCustomValue: false,
        dataSource: self.dataDiscountType,
        displayExpr: "discountTypeName",
        value: self.discountTypeId,
        valueExpr: "discountTypeId",
        dropDownButtonTemplate: 'dropDownButton',
        onItemClick: function (item) {
            if (item.itemData != null) {
                if (item.itemData.discountTypeId() == 1) {
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.discountTypeId(1);
                } else if (item.itemData.discountTypeId() == 2) {
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.discountTypeId(2);
                }
                else if (item.itemData.discountTypeId() == 4) {
                    vmViewIndex.allSetting.dataSetUpModalDiscountOneTimeUse.discountTypeId(4);
                }
                else {
                    vmViewIndex.allSetting.dataSetUpModal.discountTypeId(3);
                }
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
    });

    self.selectDiscountGroup = ko.observable({
        acceptCustomValue: false,
        dataSource: self.discountGroup,
        displayExpr: "value",
        value: self.group,
        valueExpr: "id",
        dropDownButtonTemplate: 'dropDownButton',
        onItemClick: function (item) {
            if (item.itemData != null) {
                self.group();
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
    });

    self.clickAmt = function () {
        self.isCouponAmtOff(true);
        self.isCouponPercentOff(false);
        self.couponPercentOff(0.00);
        return true;
    };
    self.clickPercent = function () {
        self.isCouponPercentOff(true);
        self.isCouponAmtOff(false);
        self.couponAmountOff(0.00);
        return true;
    };
    self.btnCloseSetUpDiscountOneTimeUse = function () {
        self.clearSetUpDiscountOneTimeUse();
        DataSetUpDiscountTimeMap(); //Added and End by WEB-SA23-0045
    };

    //Added by WEB-SA23-0045
    self.btnClickSave = function () {
        vmViewIndex.allSetting.dataSetUpModalDiscountTimeMap.setDataMultiTime();
        getIdTag(cfrmUpdateDisCountOneTimeUse).submit();
    };
    //End Added by WEB-SA23-0045

    self.clearSetUpDiscountOneTimeUse = function () {
        self.discountOneTimeUseId('');
        self.discountOneTimeUseName('');
        self.group(0);
        self.discountTypeId(3);
        self.isCouponAmtOff(true);
        self.isCouponPercentOff(false);
        self.couponAmountOff(0.00);
        self.couponPercentOff(0.00);
        self.couponCode('');
        self.startDate(moment(new Date()).format('L'));
        self.endDate(moment(new Date()).format('L'));
        self.usedOn('');
        self.isUse(false);
        //modalHiddenHasScroll('#modalShowDiscountOneTimeUse');     //Modified and End by SMILEDINING-SA21-0015
        //Added by SMILEDINING-SA21-0017
        self.termsAmountMin(0.00);
        self.termsAmountMax(0.00);
        self.isUnlimitMin(false);
        self.isUnlimitMax(false);
        self.isPickup(true);
        self.isDelivery(true);
        self.shippingTypeId(shippingType.cAll);
        //End Added by SMILEDINING-SA21-0017
    };
};
//End Added by SMILEDINING-SA20-0048

//Added by WEB-SA23-0045
function SetUpDiscountTimeMapViewModel(isSetUpModalMemberDiscountUpdate) {
    var self = this;
    self.dataMultiTimeList = ko.observableArray([]);
    self.jsonMultiTime = ko.pureComputed(function () {
        return ko.toJSON(self.dataMultiTimeList());
    });
    self.isAllDayOfWeek = ko.observable(true);
    self.hasErrorDateBox = ko.observable(false);
    self.disableSaveChanges = ko.pureComputed(function () { 
        return !self.isAllDayOfWeek() && self.hasErrorDateBox();
    });

    //Sun
    self.isSun = ko.observable(false);
    self.valActive24HourSun = ko.observable(false);
    self.multiTimeSunList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Sunday, self.multiTimeSunList, self.valActive24HourSun, isSetUpModalMemberDiscountUpdate);
    self.visibleBtnShowNextMultiTimeSun = ko.observable(true);
    self.disableBtnShowNextMultiTimeSun = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeSunList) || isSetUpModalMemberDiscountUpdate();
    });
    self.btnActive24HourSun = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourSun,
        width: switchActiveWidth55px,
        disabled: isSetUpModalMemberDiscountUpdate,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeSunList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickSun = function () {
        self.hiddenShowDiscountTimeMap();
        self.isSun(true);
        $('.' + cDivShowDiscountTimeMapSun).show();
    };

    self.clickHiddenMultiTimeSun = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeSunList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeSunList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeSun(true);
        }
    };

    self.clickShowNextMultiTimeSun = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeSunList);
        var dataMultiTimeOfIndex = self.multiTimeSunList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeSun(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Mon
    self.isMon = ko.observable(false);
    self.valActive24HourMon = ko.observable(false);
    self.multiTimeMonList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Monday, self.multiTimeMonList, self.valActive24HourMon, isSetUpModalMemberDiscountUpdate);    
    self.visibleBtnShowNextMultiTimeMon = ko.observable(true);
    self.disableBtnShowNextMultiTimeMon = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeMonList) || isSetUpModalMemberDiscountUpdate();
    });
    self.btnActive24HourMon = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourMon,
        width: switchActiveWidth55px,
        disabled: isSetUpModalMemberDiscountUpdate,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeMonList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickMon = function () {
        self.hiddenShowDiscountTimeMap();
        self.isMon(true);
        $('.' + cDivShowDiscountTimeMapMon).show();
    };

    self.clickHiddenMultiTimeMon = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeMonList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeMonList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeMon(true);
        }
    };

    self.clickShowNextMultiTimeMon = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeMonList);
        var dataMultiTimeOfIndex = self.multiTimeMonList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeMon(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Tue
    self.isTue = ko.observable(false);
    self.valActive24HourTue = ko.observable(false);
    self.multiTimeTueList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Tuesday, self.multiTimeTueList, self.valActive24HourTue, isSetUpModalMemberDiscountUpdate);
    self.visibleBtnShowNextMultiTimeTue = ko.observable(true);
    self.disableBtnShowNextMultiTimeTue = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeTueList) || isSetUpModalMemberDiscountUpdate();
    });
    self.btnActive24HourTue = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourTue,
        width: switchActiveWidth55px,
        disabled: isSetUpModalMemberDiscountUpdate,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeTueList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickTue = function () {
        self.hiddenShowDiscountTimeMap();
        self.isTue(true);
        $('.' + cDivShowDiscountTimeMapTue).show();
    };

    self.clickHiddenMultiTimeTue = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeTueList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeTueList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeTue(true);
        }
    };

    self.clickShowNextMultiTimeTue = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeTueList);
        var dataMultiTimeOfIndex = self.multiTimeTueList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeTue(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Wed
    self.isWed = ko.observable(false);
    self.valActive24HourWed = ko.observable(false);
    self.multiTimeWedList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Wednesday, self.multiTimeWedList, self.valActive24HourWed, isSetUpModalMemberDiscountUpdate);
    self.visibleBtnShowNextMultiTimeWed = ko.observable(true);
    self.disableBtnShowNextMultiTimeWed = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeWedList) || isSetUpModalMemberDiscountUpdate();
    });
    self.btnActive24HourWed = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourWed,
        width: switchActiveWidth55px,
        disabled: isSetUpModalMemberDiscountUpdate,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeWedList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickWed = function () {
        self.hiddenShowDiscountTimeMap();
        self.isWed(true);
        $('.' + cDivShowDiscountTimeMapWed).show();
    };

    self.clickHiddenMultiTimeWed = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeWedList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeWedList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeWed(true);
        }
    };

    self.clickShowNextMultiTimeWed = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeWedList);
        var dataMultiTimeOfIndex = self.multiTimeWedList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeWed(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Thu
    self.isThu = ko.observable(false);
    self.valActive24HourThu = ko.observable(false);
    self.multiTimeThuList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Thursday, self.multiTimeThuList, self.valActive24HourThu, isSetUpModalMemberDiscountUpdate);
    self.visibleBtnShowNextMultiTimeThu = ko.observable(true);
    self.disableBtnShowNextMultiTimeThu = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeThuList) || isSetUpModalMemberDiscountUpdate();
    });
    self.btnActive24HourThu = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourThu,
        width: switchActiveWidth55px,
        disabled: isSetUpModalMemberDiscountUpdate,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeThuList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickThu = function () {
        self.hiddenShowDiscountTimeMap();
        self.isThu(true);
        $('.' + cDivShowDiscountTimeMapThu).show();
    };

    self.clickHiddenMultiTimeThu = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeThuList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeThuList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeThu(true);
        }
    };

    self.clickShowNextMultiTimeThu = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeThuList);
        var dataMultiTimeOfIndex = self.multiTimeThuList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeThu(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Fri
    self.isFri = ko.observable(false);
    self.valActive24HourFri = ko.observable(false);
    self.multiTimeFriList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Friday, self.multiTimeFriList, self.valActive24HourFri, isSetUpModalMemberDiscountUpdate);
    self.visibleBtnShowNextMultiTimeFri = ko.observable(true);
    self.disableBtnShowNextMultiTimeFri = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeFriList) || isSetUpModalMemberDiscountUpdate();
    });
    self.btnActive24HourFri = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourFri,
        width: switchActiveWidth55px,
        disabled: isSetUpModalMemberDiscountUpdate,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeFriList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickFri = function () {
        self.hiddenShowDiscountTimeMap();
        self.isFri(true);
        $('.' + cDivShowDiscountTimeMapFri).show();
    };

    self.clickHiddenMultiTimeFri = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeFriList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeFriList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeFri(true);
        }
    };

    self.clickShowNextMultiTimeFri = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeFriList);
        var dataMultiTimeOfIndex = self.multiTimeFriList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeFri(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Sat
    self.isSat = ko.observable(false);
    self.valActive24HourSat = ko.observable(false);
    self.multiTimeSatList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Saturday, self.multiTimeSatList, self.valActive24HourSat, isSetUpModalMemberDiscountUpdate);
    self.visibleBtnShowNextMultiTimeSat = ko.observable(true);
    self.disableBtnShowNextMultiTimeSat = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeSatList) || isSetUpModalMemberDiscountUpdate();
    });
    self.btnActive24HourSat = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourSat,
        width: switchActiveWidth55px,
        disabled: isSetUpModalMemberDiscountUpdate,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeSatList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickSat = function () {
        self.hiddenShowDiscountTimeMap();
        self.isSat(true);
        $('.' + cDivShowDiscountTimeMapSat).show();
    };

    self.clickHiddenMultiTimeSat = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeSatList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeSatList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeSat(true);
        }
    };

    self.clickShowNextMultiTimeSat = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeSatList);
        var dataMultiTimeOfIndex = self.multiTimeSatList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeSat(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //All Days
    self.isAllDays = ko.observable(false);
    self.valActive24HourAllDays = ko.observable(false);
    self.multiTimeAllDaysList = ko.observableArray([]);
    addDataMultiTimeList(cDay_AllDay, self.multiTimeAllDaysList, self.valActive24HourAllDays, isSetUpModalMemberDiscountUpdate);
    self.visibleBtnShowNextMultiTimeAllDays = ko.observable(true);
    self.disableBtnShowNextMultiTimeAllDays = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeAllDaysList) || isSetUpModalMemberDiscountUpdate();
    });
    self.btnActive24HourAllDays = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourAllDays,
        width: switchActiveWidth55px,
        disabled: isSetUpModalMemberDiscountUpdate,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeAllDaysList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickAllDays = function () {
        self.hiddenShowDiscountTimeMap();
        self.valActive24HourAllDays(true);
        self.isAllDays(true);
        $('.' + cDivShowDiscountTimeMapAlldays).show();
    };

    self.clickHiddenMultiTimeAllDays = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeAllDaysList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeAllDaysList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeAllDays(true);
        }
    };

    self.clickShowNextMultiTimeAllDays = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeAllDaysList);
        var dataMultiTimeOfIndex = self.multiTimeAllDaysList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeAllDays(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //DiscountTimeMap Function
    self.hiddenShowDiscountTimeMap = function () {
        $('.' + cDivShowDiscountTimeMapSun).hide();
        $('.' + cDivShowDiscountTimeMapMon).hide();
        $('.' + cDivShowDiscountTimeMapTue).hide();
        $('.' + cDivShowDiscountTimeMapWed).hide();
        $('.' + cDivShowDiscountTimeMapThu).hide();
        $('.' + cDivShowDiscountTimeMapFri).hide();
        $('.' + cDivShowDiscountTimeMapSat).hide();
        $('.' + cDivShowDiscountTimeMapAlldays).hide();
        self.isSun(false);
        self.isMon(false);
        self.isTue(false);
        self.isWed(false);
        self.isThu(false);
        self.isFri(false);
        self.isSat(false);
        self.isAllDays(false);
    };

    self.setDataMultiTime = function () {
        self.dataMultiTimeList([]);
        insertData(self.multiTimeSunList());
        insertData(self.multiTimeMonList());
        insertData(self.multiTimeTueList());
        insertData(self.multiTimeWedList());
        insertData(self.multiTimeThuList());
        insertData(self.multiTimeFriList());
        insertData(self.multiTimeSatList());
        insertData(self.multiTimeAllDaysList());

        function insertData(data) {
            if (!isEmpty(data)) {
                ko.utils.arrayForEach(data, function (item) {
                    if (item.visible()) {
                        self.dataMultiTimeList.push(new DataMultiTimeDiscountTimeMapViewModel(null, null, item));
                    }
                });
            }
        };
    };

    self.chkDisableBtnHiddenMultiTime = function (multiTimeList, index) {
        return !(multiTimeList()[index + 1] == null || !multiTimeList()[index + 1].visible());
    };

    self.chkIndexToShowNextMultiTime = function (multiTimeList) {
        var prevSorting = cDiscountTimeMap_StartSorting - 1;
        var indexToShowNext = 0;
        ko.utils.arrayForEach(multiTimeList(), function (item) {
            if (item.sorting() > prevSorting && item.visible()) { // check last index of show
                indexToShowNext = (item.sorting() - 1) + 1;
            }
            prevSorting = item.visible() ? item.sorting() : prevSorting;
        });
        return indexToShowNext;
    };

    self.chkVisibleBtnShowNextMultiTime = function (sorting) {
        return sorting < cDiscountTimeMap_MaxSorting;
    };

    function addDataMultiTimeList(day, multiTimeList, disabled, isSetUpModalMemberDiscountUpdate) {
        self.disableDateBox = ko.pureComputed(function () {
            return disabled() || isSetUpModalMemberDiscountUpdate();
        });

        for (let sorting = cDiscountTimeMap_StartSorting; sorting <= cDiscountTimeMap_MaxSorting; sorting++) {
            multiTimeList.push(new DataMultiTimeDiscountTimeMapViewModel(day, sorting));
        }
        updateTimeDateBoxInMultiTimeList(multiTimeList, self.disableDateBox);
    };

    function updateTimeDateBoxInMultiTimeList(multiTimeList, disabled) {
        for (let index = 0; index < multiTimeList().length; index++) {
            var dataMultiTimeOfIndex = multiTimeList()[index];
            dataMultiTimeOfIndex.startTimeDateBox(createTimeDateBox(
                index > 0 ? multiTimeList()[index - 1].endTime : null,
                dataMultiTimeOfIndex.endTime,
                dataMultiTimeOfIndex.startTime,
                disabled
            ));
            dataMultiTimeOfIndex.endTimeDateBox(createTimeDateBox(
                dataMultiTimeOfIndex.startTime,
                multiTimeList()[index + 1] != null ? multiTimeList()[index + 1].startTime : null,
                dataMultiTimeOfIndex.endTime,
                disabled
            ));
        }
    };

    function createTimeDateBox(min, max, value, disabled) {
        return {
            min: min,
            max: max,
            type: "time",
            pickerType: "list",
            value: value,
            disabled: disabled,
            onValueChanged: function (v) {
                if (isEmpty(v.value) && (v.model.visible === undefined ? true : v.model.visible())) {
                    v.component.option("isValid", false);
                }
                value(isEmpty(v.value) ? null : moment(v.value, moment_time_format_hhmmss));
                self.hasErrorDateBox(false);
            },
            onChange: function (v) {
                if (v.component._options.validationError != null) {
                    self.hasErrorDateBox(true);
                } else {
                    self.hasErrorDateBox(false);
                }
            }
        };
    };

    function setActive24HourDataMultiTime(dataMultiTime) {
        dataMultiTime.visible(true);
        dataMultiTime.startTime(moment(time_start_24h, moment_time_format_hhmmss));
        dataMultiTime.endTime(moment(time_end_24h, moment_time_format_hhmmss));
        dataMultiTime.active(true);
    };

    function setHiddenDataMultiTime(dataMultiTime) {
        dataMultiTime.visible(false);
        dataMultiTime.startTime(null);
        dataMultiTime.endTime(null);
        dataMultiTime.active(true);
    };

    function setShowNextDataMultiTime(dataMultiTime) {
        dataMultiTime.visible(true);
    };

    function chkDisableBtnShowNextMultiTime(multiTimeList) {
        var indexFilter = _.findIndex(multiTimeList(), function (item) {
            return !item.visible();
        });
        if (indexFilter > 0) {
            var startTime = multiTimeList()[indexFilter - 1].startTime();
            var endTime = multiTimeList()[indexFilter - 1].endTime();
            if (isEmpty(startTime) || isEmpty(endTime)) 
                return true;
            else
                return false;
        }
    };
};
//End Added by WEB-SA23-0045

//Added by SMILEDINING-SA20-0031
function SetUpShopCloseViewModel() {
    var self = this;
    self.shopCloseIdFirst = ko.observable('');
    self.shopCloseIdSecond = ko.observable('');
    self.startDate = ko.observable(moment().format('L'));
    self.endDate = ko.observable(moment().format('L'));
    self.startTime = ko.observable(null);
    self.endTime = ko.observable(null);
    self.reason = ko.observable('');
    self.valFirstHourStartTime = ko.observable(null);
    self.valFirstHourEndTime = ko.observable(null);
    self.valSecondHourStartTime = ko.observable(null);
    self.valSecondHourEndTime = ko.observable(null);
    self.valActive24Hour = ko.observable(true);
    self.hasShowSecondTime = ko.observable(false);
    self.enableSaveChanges = ko.observable(true);

    self.dateFromDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.startDate,
        width: 150,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.startDate(moment(new Date(v.value)).format('L'));
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dateEndDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.endDate,
        min: self.startDate,
        width: 150,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.endDate(moment(new Date(v.value)).format('L'));
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });
    self.clickActive24Hour = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24Hour,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            var self = vmViewIndex.allSetting.dataSetUpModalShopClose;
            if (item.value == true) {
                self.valFirstHourStartTime(moment(time_start_24h, moment_time_format_hhmmss));
                self.valFirstHourEndTime(moment(time_end_24h, moment_time_format_hhmmss));
                self.valSecondHourStartTime(null);
                self.valSecondHourEndTime(null);

                self.valActive24Hour(true);
                self.hasShowSecondTime(true);
                //hideErorrTimePeriodTimeMenuEdit();
            } else {
                self.valActive24Hour(false);
            }
        }
    });

    self.timeObj = ko.pureComputed(function () {
        var data;
        if (self.valActive24Hour()) {
            data = {
                'active24Hour': self.valActive24Hour(),
                'firstStart': moment(time_start_24h, moment_time_format_hhmmss).format(moment_time_format_HHmmss),
                'firstEnd': moment(time_end_24h, moment_time_format_hhmmss).format(moment_time_format_HHmmss),
                'secondStart': null,
                'secondEnd': null,
                'showSecondTime': !self.hasShowSecondTime()
            };

        } else if (self.hasShowSecondTime()) {
            data =
                {
                    'active24Hour': self.valActive24Hour(),
                    'firstStart': moment(self.valFirstHourStartTime()).format(moment_time_format_HHmmss),
                    'firstEnd': moment(self.valFirstHourEndTime()).format(moment_time_format_HHmmss),
                    'secondStart': null,
                    'secondEnd': null,
                    'showSecondTime': !self.hasShowSecondTime()
                };
        } else {
            data =
                {
                    'active24Hour': self.valActive24Hour(),
                    'firstStart': moment(self.valFirstHourStartTime()).format(moment_time_format_HHmmss),
                    'firstEnd': moment(self.valFirstHourEndTime()).format(moment_time_format_HHmmss),
                    'secondStart': moment(self.valSecondHourStartTime()).format(moment_time_format_HHmmss),
                    'secondEnd': moment(self.valSecondHourEndTime()).format(moment_time_format_HHmmss),
                    'showSecondTime': !self.hasShowSecondTime()
                };
        }
        return ko.toJSON(data);
    });

    self.clickShowSecondTime = function () {
        self.hasShowSecondTime(false);
        self.valSecondHourStartTime(null);
        self.valSecondHourEndTime(null);
    };
    self.clickHiddenSecondTime = function () {
        self.hasShowSecondTime(true);
        self.valSecondHourStartTime(null);
        self.valSecondHourEndTime(null);
    };

    self.valFirstHourStartTimeEdit = ko.observable({
        max: self.valFirstHourEndTime,
        pickerType: "list",
        type: "time",
        value: self.valFirstHourStartTime,
        disabled: self.valActive24Hour,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valFirstHourStartTime(v.value);
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });
    self.valFirstHourEndTimeEdit = ko.observable({
        min: self.valFirstHourStartTime,
        max: self.valSecondHourStartTime,
        type: "time",
        pickerType: "list",
        value: self.valFirstHourEndTime,
        disabled: self.valActive24Hour,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valFirstHourEndTime(v.value);
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });
    self.valSecondHourStartTimeEdit = ko.observable({
        min: self.valFirstHourEndTime,
        max: self.valSecondHourEndTime,
        type: "time",
        pickerType: "list",
        value: self.valSecondHourStartTime,
        disabled: self.valActive24Hour,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valSecondHourStartTime(v.value);
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });
    self.valSecondHourEndTimeEdit = ko.observable({
        min: self.valSecondHourStartTime,
        type: "time",
        pickerType: "list",
        value: self.valSecondHourEndTime,
        disabled: self.valActive24Hour,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valSecondHourEndTime(v.value);
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.btnCloseSetUpShopClose = function () {
        self.clearSetUpShopClose();
    };

    self.clearSetUpShopClose = function () {
        self.shopCloseIdFirst('');
        self.shopCloseIdSecond('');
        self.startDate(moment().format('L'));
        self.endDate(moment().format('L'));
        self.startTime(null);
        self.endTime(null);
        self.reason('');
        self.valFirstHourStartTime(moment(time_start_24h, moment_time_format_hhmmss));
        self.valFirstHourEndTime(moment(time_end_24h, moment_time_format_hhmmss));
        self.valSecondHourStartTime(null);
        self.valSecondHourEndTime(null);
        self.valActive24Hour(true);
        self.hasShowSecondTime(true);
        self.enableSaveChanges(true);
    };

};
//End Added by SMILEDINING-SA20-0031

//Added by SMILEDINING-SA18-0003
function SetUpAutoChargeViewModel() {
    var self = this;
    self.autoChargeId = ko.observable('');
    self.autoChargeName = ko.observable('');
    self.autoChargeDesc = ko.observable('');
    self.isAmtCharge = ko.observable(true);
    self.isPercentCharge = ko.observable(false);
    self.amountCharge = ko.observable(0.00).extend({ numeric: 2 });
    self.percentCharge = ko.observable(0.00).extend({ numeric: 2 });
    self.isTax = ko.observable(false);
    self.taxCharge = ko.observable(0.00).extend({ numeric: 2 });
    self.isPickUp = ko.observable(false);
    self.isDelivery = ko.observable(false);
    self.active = ko.observable(true);
    self.isThirdParty = ko.observable(false); //Added and End by SMILEDINING-SA22-0012#1

    self.clickIsAmtCharge = function () {
        self.isAmtCharge(true);
        self.isPercentCharge(false);
        self.percentCharge(0.00);
        return true;
    };

    self.clickIsPercentCharge = function () {
        self.isAmtCharge(false);
        self.isPercentCharge(true);
        self.amountCharge(0.00);
        return true;
    };

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.active,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    self.btnCloseSetUpAutoCharge = function () {
        self.clearSetUpAutoCharge();
        //autochargeHasScroll();      //Added and End by SMILEDINING-SA18-0036
    };
    //Added by SMILEDINING-SA22-0012#1
    self.checkIsThirdParty = function () {
        if (self.isThirdParty()) {
            self.isPickUp(false);
        }
        return true;
    };
    //End Added by SMILEDINING-SA22-0012#1

    self.clearSetUpAutoCharge = function () {
        self.autoChargeId('');
        self.autoChargeName('');
        self.autoChargeDesc('');
        self.isAmtCharge(true);
        self.isPercentCharge(false);
        self.amountCharge('0.00');
        self.percentCharge('0.00');
        self.isTax(false);
        self.taxCharge('0.00');
        self.isPickUp(false);
        self.isDelivery(false);
        self.active(true);
        self.isThirdParty(false); //Added and End by SMILEDINING-SA22-0012#1
        removeClassValidationError("#txtAutoCharge_AmountCharge");
        removeClassValidationError("#txtAutoCharge_PercentCharge");
        removeClassValidationError("#txtAutoCharge_TaxCharge");
    };
}

function SetUpHolidayViewModel() {
    var self = this;
    self.holidayId = ko.observable('');
    self.description = ko.observable('');
    self.startDate = ko.observable(moment().format('L'));
    self.endDate = ko.observable(moment().format('L'));
    self.active = ko.observable(true);

    self.dateFromDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.startDate,
        width: 150,
        invalidDateMessage: "Value must be a date",
        onValueChanged: function (v) {
            if (v.value != "" && v.value != undefined) {
                self.startDate(moment(v.value).format('L'));
            } else {
                self.startDate(moment(new Date()).format('L'));
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dateEndDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.endDate,
        width: 150,
        invalidDateMessage: "Value must be a date",
        onValueChanged: function (v) {
            if (v.value != "" && v.value != undefined) {
                self.endDate(moment(v.value).format('L'));
            } else {
                self.endDate(moment(new Date()).format('L'));
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.active,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    self.btnCloseSetUpHoliday = function () {
        self.clearSetUpHoliday();
    };

    self.clearSetUpHoliday = function () {
        self.holidayId('');
        self.description('');
        self.startDate(moment().format('L'));
        self.endDate(moment().format('L'));
        self.active(true);
    };
}
//End Added by SMILEDINING-SA18-0003
//Added by SMILEDINING-SA22-0020
function SetUpPaymentFeeViewModel() {
    var self = this;
    self.paymentFeeId = ko.observable('');
    self.paymentFeeName = ko.observable('');
    self.isAmtCharge = ko.observable(true);
    self.isPercentCharge = ko.observable(false);
    self.amountCharge = ko.observable(0.00).extend({ numeric: 2 });
    self.percentCharge = ko.observable(0.00).extend({ numeric: 2 });
    self.isPickUp = ko.observable(false);
    self.isDelivery = ko.observable(false);
    self.active = ko.observable(true);

    self.clickIsAmtCharge = function () {
        self.isAmtCharge(true);
        self.isPercentCharge(false);
        self.percentCharge(0.00);
        return true;
    };

    self.clickIsPercentCharge = function () {
        self.isAmtCharge(false);
        self.isPercentCharge(true);
        self.amountCharge(0.00);
        return true;
    };

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.active,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    self.btnCloseSetUpPaymentFee = function () {
        self.clearSetUpPaymentFee();
    };

    self.clearSetUpPaymentFee = function () {
        self.paymentFeeId('');
        self.paymentFeeName('');
        self.isAmtCharge(true);
        self.isPercentCharge(false);
        self.amountCharge('0.00');
        self.percentCharge('0.00');
        self.isPickUp(false);
        self.isDelivery(false);
        self.active(true);
        removeClassValidationError(cfrmPaymentFee_PaymentFeeName);
        removeClassValidationError(cfrmPaymentFee_AmountCharge);
        removeClassValidationError(cfrmPaymentFee_PercentCharge);
    };
}
//End Added by SMILEDINING-SA22-0020
//Added by SMILEDINING-SA20-0018
function GraguitySettingViewModel() {
    var self = this;
    self.gratuityChargeAuto = ko.observable('');
    self.gratuityChargeAutoEnable = ko.observable();
    self.gratuityChargeAutoDisable = ko.observable();
    self.gratuityPartySize = ko.observable('');
    self.gratuityChargeId = ko.observable();
    self.gratuityChargeTax = ko.observable('');
    self.gratuityChargeTaxEnable = ko.observable();
    self.gratuityChargeTaxDisable = ko.observable();
    self.gratuityChargeTaxPercentage = ko.observable();
    self.dataGratuityCharge = ko.observableArray([]);

    self.clickChargeAutoEnable = function () {
        self.gratuityChargeAutoEnable(true);
        self.gratuityChargeAutoDisable(false);
        self.gratuityChargeAuto('1');
        return true;
    };
    self.clickChargeAutoDisable = function () {
        self.gratuityChargeAutoEnable(false);
        self.gratuityChargeAutoDisable(true);
        self.gratuityChargeAuto('0');
        return true;
    };
    self.clickChargeTaxEnable = function () {
        self.gratuityChargeTaxEnable(true);
        self.gratuityChargeTaxDisable(false);
        self.gratuityChargeTax('1');
        return true;
    };
    self.clickChargeTaxDisable = function () {
        self.gratuityChargeTaxEnable(false);
        self.gratuityChargeTaxDisable(true);
        self.gratuityChargeTax('0');
        return true;
    };
    self.gratuityChargeSelect = ko.observable({
        dataSource: {
            store: self.dataGratuityCharge,
            sort: 'graguityId'
        },
        displayExpr: 'graguityName',
        valueExpr: 'graguityId',
        value: self.gratuityChargeId,
        dropDownButtonTemplate: 'dropDownButton',
        searchEnabled: true,
        onItemClick: function (item) {
            self.gratuityChargeId(item.itemData.graguityId());
        }
    });
    self.blurPartySize = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 1;
        } else {
            value = parseInt(value);
        }
        self.gratuityPartySize(value);
    };

    self.blurChargeTaxPercent = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0.00;
        }
        else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0.00;
        }
        self.gratuityChargeTaxPercentage(value);
    };
    self.btnCloseGratuityCharge = function () {
        var globalConfig = JSON.parse(getObjFormAjax(cJsonGetGlobalConfig, products.cSmileContactless));
        var dataGraguity = JSON.parse(getObjFormAjax(cJsonGetGraguity, ""));
        DataGraguityViewModel(globalConfig, dataGraguity);
    };
};
//End Added by SMILEDINING-SA20-0018

//Added by SMILEDINING-SA20-0016
function SetUpMainPriceViewModel() {
    var self = this;
    self.promotionMainPriceId = ko.observable();
    self.priceMin = ko.observable(0.00).extend({ numeric: 2 });
    self.priceMax = ko.observable(0.00).extend({ numeric: 2 });
    self.isUnlimitPriceMin = ko.observable(true);
    self.isUnlimitPriceMax = ko.observable(true);

    self.clickIsUnlimitPriceMin = function (data) {
        var isUnlimitMin = data.allSetting.dataSetUpMainPrice.isUnlimitPriceMin();
        self.priceMin(0.00);
        if (isUnlimitMin) {
            //self.checkInRange(); //Modified and End by WEB-SA24-0012
        }
        return true;
    };
    self.clickIsUnlimitPriceMax = function (data) {
        var isUnlimitMax = data.allSetting.dataSetUpMainPrice.isUnlimitPriceMax();
        self.priceMax(0.00);
        if (isUnlimitMax) {
            //self.checkInRange(); //Modified and End by WEB-SA24-0012
        }
        return true;
    };
    self.btnCloseSetUpMainPrice = function () {
        self.clearSetUpMainPrice();
        vmViewIndex.allSetting.disableButtonSubmit(false);
    };
    self.clearSetUpMainPrice = function () {
        self.priceMin(0.00);
        self.priceMax(0.00)
        self.isUnlimitPriceMin(true);
        self.isUnlimitPriceMax(true);
        self.promotionMainPriceId('');
    };
    self.checkInRange = function () {
        //vmViewIndex.allSetting.disableButtonSubmit(false); //Modified and End by WEB-SA24-0012
        var data = vmViewIndex.allSetting.dataMainPrice();
        var mainPriceId = vmViewIndex.allSetting.dataSetUpMainPrice.promotionMainPriceId();
        var filterFromId = _.filter(data, function (v) {
            return v.promotionMainPriceId() == mainPriceId;
        });
        var dataOrderBy = _.orderBy(data, function (v) {
            return v.priceMin();
        });
        var filterDataNolimit = _.filter(dataOrderBy, function (v) {
            return v.priceMin() == 0 && v.priceMax() == 0 && v.promotionMainPriceId() != mainPriceId;
        });
        var filterMaxNolimit = _.filter(dataOrderBy, function (v) {
            return v.priceMin() != 0 && v.priceMax() == 0;
        });
        if (filterMaxNolimit.length != 0) {
            filterMaxNolimit = _.filter(filterMaxNolimit, function (v) {
                return parseFloat(self.priceMin()) >= parseFloat(v.priceMin()) || parseFloat(self.priceMax()) >= parseFloat(v.priceMin()) || parseFloat(self.priceMax()) == 0;
            });
        }
        if (filterMaxNolimit.length != 0) {
            filterMaxNolimit = _.filter(filterMaxNolimit, function (v) {
                return v.promotionMainPriceId() != mainPriceId;
            });
        }
        var filterMinNolimit = _.filter(dataOrderBy, function (v) {
            return v.priceMin() == 0 && v.priceMax() != 0;
        });
        if (filterMinNolimit.length != 0) {
            filterMinNolimit = _.filter(filterMinNolimit, function (v) {
                return parseFloat(self.priceMax()) <= parseFloat(v.priceMax()) || parseFloat(self.priceMin()) <= parseFloat(v.priceMax());
            });
        }
        if (filterMinNolimit.length != 0) {
            filterMinNolimit = _.filter(filterMinNolimit, function (v) {
                return v.promotionMainPriceId() != mainPriceId;
            });
        }
        var filterOutOfNolimit = _.filter(dataOrderBy, function (v) {
            return v.priceMin() != 0 && v.priceMax() != 0;
        });
        var filterOutOfNolimitMaxMin = _.filter(dataOrderBy, function (v) {
            return (v.priceMin() != 0 || v.priceMax() != 0) && v.promotionMainPriceId() != mainPriceId;
        });
        if (filterOutOfNolimitMaxMin.length != 0 && parseFloat(vmViewIndex.allSetting.dataSetUpMainPrice.priceMax()) == 0 && parseFloat(vmViewIndex.allSetting.dataSetUpMainPrice.priceMin()) == 0) {
            //Modified by WEB-SA24-0012
            //vmViewIndex.allSetting.setDisableButtonSubmit();
            //alerMessage(cError_CustomDiscount_InRange, false);
            //End Modified by WEB-SA24-0012
            alerMessage(cError_Promotion_MainPrice_InRange, false); //Added and End by WEB-SA24-0012
            return false;
        }
        else if (filterDataNolimit.length != 0) {
            //vmViewIndex.allSetting.setDisableButtonSubmit(); //Modified and End by WEB-SA24-0012
            alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + _.first(filterDataNolimit).priceMin() + " - " + 'Unlimit' + '" ', false);
            return false;
        }
        else if (filterMaxNolimit != 0) {
            //vmViewIndex.allSetting.setDisableButtonSubmit(); //Modified and End by WEB-SA24-0012
            alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + _.first(filterMaxNolimit).priceMin() + " - " + 'Unlimit' + '" ', false);
            return false;
        }
        else if (filterMinNolimit != 0) {
            //vmViewIndex.allSetting.setDisableButtonSubmit(); //Modified and End by WEB-SA24-0012
            alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + _.first(filterMinNolimit).priceMin() + " - " + _.first(filterMinNolimit).priceMax() + '" ', false);
            return false;
        }
        else {
            var minInRange = _.filter(filterOutOfNolimit, function (v) {
                return _.inRange(parseFloat(self.priceMin()), parseFloat(v.priceMin()), parseFloat(v.priceMax()) + 0.01);
            });

            var maxInRange = _.filter(filterOutOfNolimit, function (v) {
                return _.inRange(parseFloat(self.priceMax()), parseFloat(v.priceMin()), parseFloat(v.priceMax()) + 0.01);
            });

            var indexMin = _.findIndex(minInRange, function (v) {
                return v.promotionMainPriceId() != mainPriceId;
            });

            var indexMax = _.findIndex(maxInRange, function (v) {
                return v.promotionMainPriceId() != mainPriceId;
            });
            //AlertMessage
            if (minInRange.length > 0 && indexMin >= 0) {
                //vmViewIndex.allSetting.setDisableButtonSubmit(); //Modified and End by WEB-SA24-0012
                alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + minInRange[indexMin].priceMin() + " - " + minInRange[indexMin].priceMax() + '" ', false);
                return false;
            } else if (maxInRange.length > 0 && indexMax >= 0) {
                //vmViewIndex.allSetting.setDisableButtonSubmit(); //Modified and End by WEB-SA24-0012
                alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + maxInRange[indexMax].priceMin() + " - " + maxInRange[indexMax].priceMax() + '" ', false);
                return false;
            }
            else if (Number(self.priceMin()) < Number(self.priceMax())) {

                var minInRangeRev = _.filter(filterOutOfNolimit, function (v) {
                    return _.inRange(parseFloat(v.priceMin()), parseFloat(self.priceMin()), parseFloat(self.priceMax()) + 0.01);
                });

                var maxInRangeRev = _.filter(filterOutOfNolimit, function (v) {
                    return _.inRange(parseFloat(v.priceMax()), parseFloat(self.priceMin()), parseFloat(self.priceMax()) + 0.01);
                });

                var indexMinRev = _.findIndex(minInRangeRev, function (v) {
                    return v.promotionMainPriceId() != mainPriceId;
                });

                var indexMaxRev = _.findIndex(maxInRangeRev, function (v) {
                    return v.promotionMainPriceId() != mainPriceId;
                });

                if (minInRangeRev.length > 0 && indexMinRev >= 0) {
                    //vmViewIndex.allSetting.setDisableButtonSubmit(); //Modified and End by WEB-SA24-0012
                    alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + minInRangeRev[indexMinRev].priceMin() + ' - ' + minInRangeRev[indexMinRev].priceMax() + '" ', false);

                    return false;
                } else if (maxInRangeRev.length > 0 && indexMaxRev >= 0) {
                    //vmViewIndex.allSetting.setDisableButtonSubmit(); //Modified and End by WEB-SA24-0012
                    alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + maxInRangeRev[indexMaxRev].priceMin() + ' - ' + maxInRangeRev[indexMaxRev].priceMax() + '" ', false);
                    return false;
                }
            }
        }
        return true;
    };
};

function SetUpGroupMainFoodViewModel() {
    var self = this;

    self.promotionGroupMainFoodId = ko.observable();
    self.promotionGroupMainFoodName = ko.observable();
    self.listPromotionMainFood = ko.observableArray([]);
    self.strMainFoodName = ko.observable();

    self.arrMainFood = ko.observableArray([]);
    self.tempListSelectFood = ko.observableArray([]);
    self.selectItemKey = ko.observableArray([]);
    self.jsonPromotionMainFood = ko.observable();

    self.listFood = ko.observable({
        dataSource: ({
            store: self.arrMainFood,
            group: "foodCatName"
        }),
        grouped: true,
        searchEnabled: true,
        searchExpr: ["foodCatName", "foodName"],
        itemTemplate: function (data, _, element) {
            element.append(
                $("<p>").text(data.foodName()).css("margin", 0)
            )
        },
        selectionMode: "multiple",
        showSelectionControls: true,
        collapsibleGroups: true,
        selectedItemKeys: self.selectItemKey,
        onSelectionChanged: function (item) {
            if (item.addedItems.length != 0) {
                self.tempListSelectFood().push(_.first(item.addedItems));
            } else if (item.removedItems.length != 0) {
                var dataRemove = _.first(item.removedItems);
                var index = self.tempListSelectFood().findIndex(function (element) {
                    return element.foodId() == dataRemove.foodId();
                });
                self.tempListSelectFood.splice(index, 1);
            }
        }
    });

    self.clickAddPromotionMainFood = function (data, event) {
        if (self.tempListSelectFood().length != 0) {
            var dataAdd = self.tempListSelectFood.slice(0);
            self.tempListSelectFood([]);
            var listFoodId = [];
            ko.utils.arrayForEach(dataAdd, function (item) {
                self.listPromotionMainFood.push(item);
                listFoodId.push(item.foodId());
                var index = self.arrMainFood().findIndex(function (element) {
                    return element.foodId() == item.foodId();
                });
                self.arrMainFood.splice(index, 1);
            });

            self.jsonPromotionMainFood(generateJsonData(self.listPromotionMainFood()));
        }
    };
    self.changeOrderQty = function (data, event) {
        var index = self.listPromotionMainFood().findIndex(function (element) {
            return element.foodId() == data.foodId();
        });
        var newVal = $(event.target).val();

        if (newVal == '' || parseInt(newVal) <= 0) {
            newVal = '1';
        }
        $(event.target).val(newVal);
        self.listPromotionMainFood()[index].qty(parseInt(newVal));
        self.jsonPromotionMainFood(generateJsonData(self.listPromotionMainFood()));
    };

    self.clickDelPromotionMainFood = function (data, event) {
        var index = self.listPromotionMainFood().findIndex(function (element) {
            return element.foodId() == data.foodId();
        });
        self.listPromotionMainFood.splice(index, 1);

        self.arrMainFood.push(data);
        var dataTemp = self.tempListSelectFood.slice(0);
        self.selectItemKey([]);
        _.forEach(dataTemp, function (item) {
            self.selectItemKey.push(item);
        });
        self.tempListSelectFood(dataTemp);
        if (self.listPromotionMainFood().length == 0) {
            self.jsonPromotionMainFood('');
        } else {
            self.jsonPromotionMainFood(generateJsonData(self.listPromotionMainFood()));
        }

    };

    self.btnCloseSetUpGroupMainFood = function () {
        self.clearSetUpGroupMainFood();
        vmViewIndex.allSetting.disableButtonSubmit(false);
    };

    self.clearSetUpGroupMainFood = function () {
        self.promotionGroupMainFoodId('');
        self.promotionGroupMainFoodName('');
        self.listPromotionMainFood([]);
        self.strMainFoodName('');
        self.arrMainFood([]);
        self.tempListSelectFood([]);
        self.selectItemKey([]);
        self.jsonPromotionMainFood('');
    };
};
function SetUpGroupFreeFoodViewModel() {
    var self = this;

    self.promotionGroupFreeFoodId = ko.observable();
    self.promotionGroupFreeFoodName = ko.observable();
    self.listPromotionFreeFood = ko.observableArray([]);
    self.strFreeFoodName = ko.observable();

    self.arrFreeFood = ko.observableArray([]);
    self.tempListSelectFood = ko.observableArray([]);
    self.selectItemKey = ko.observableArray([]);
    self.jsonPromotionFreeFood = ko.observable();

    self.listFood = ko.observable({
        dataSource: ({
            store: self.arrFreeFood,
            group: "foodCatName"
        }),
        grouped: true,
        searchEnabled: true,
        searchExpr: ["foodCatName", "foodName"],
        itemTemplate: function (data, _, element) {
            element.append(
                $("<p>").text(data.foodName()).css("margin", 0)
            )
        },
        selectionMode: "multiple",
        showSelectionControls: true,
        collapsibleGroups: true,
        selectedItemKeys: self.selectItemKey,
        onSelectionChanged: function (item) {
            if (item.addedItems.length != 0) {
                self.tempListSelectFood().push(_.first(item.addedItems));
            } else if (item.removedItems.length != 0) {
                var dataRemove = _.first(item.removedItems);
                var index = self.tempListSelectFood().findIndex(function (element) {
                    return element.foodId() == dataRemove.foodId();
                });
                self.tempListSelectFood.splice(index, 1);
            }
        }
    });

    self.clickAddPromotionFreeFood = function () {
        if (self.tempListSelectFood().length != 0) {
            var dataAdd = self.tempListSelectFood.slice(0);
            self.tempListSelectFood([]);
            var listFoodId = [];
            ko.utils.arrayForEach(dataAdd, function (item) {
                self.listPromotionFreeFood.push(item);
                listFoodId.push(item.foodId());
                var index = self.arrFreeFood().findIndex(function (element) {
                    return element.foodId() == item.foodId();
                });
                self.arrFreeFood.splice(index, 1);
            });

            self.jsonPromotionFreeFood(generateJsonData(self.listPromotionFreeFood()));
        }
    };

    self.changeOrderQty = function (data, event) {
        var index = self.listPromotionFreeFood().findIndex(function (element) {
            return element.foodId() == data.foodId();
        });
        var newVal = $(event.target).val();
        if (newVal == '' || parseInt(newVal) <= 0) {
            newVal = '1';
        }
        $(event.target).val(newVal);
        self.listPromotionFreeFood()[index].qty(parseInt(newVal));
        self.jsonPromotionFreeFood(generateJsonData(self.listPromotionFreeFood()));
    };

    self.clickDelPromotionFreeFood = function (data, event) {
        var index = self.listPromotionFreeFood().findIndex(function (element) {
            return element.foodId() == data.foodId();
        });
        self.listPromotionFreeFood.splice(index, 1);

        self.arrFreeFood.push(data);
        var dataTemp = self.tempListSelectFood.slice(0);
        self.selectItemKey([]);
        _.forEach(dataTemp, function (item) {
            self.selectItemKey.push(item);
        });
        self.tempListSelectFood(dataTemp);
        if (self.listPromotionFreeFood().length == 0) {
            self.jsonPromotionFreeFood('');
        } else {
            self.jsonPromotionFreeFood(generateJsonData(self.listPromotionFreeFood()));
        }
    };

    self.btnCloseSetUpGroupFreeFood = function () {
        self.clearSetUpGroupFreeFood();
        vmViewIndex.allSetting.disableButtonSubmit(false);
    };

    self.clearSetUpGroupFreeFood = function () {
        self.promotionGroupFreeFoodId('');
        self.promotionGroupFreeFoodName('');
        self.listPromotionFreeFood([]);
        self.strFreeFoodName('');
        self.arrFreeFood([]);
        self.tempListSelectFood([]);
        self.selectItemKey([]);
        self.jsonPromotionFreeFood('');
    };
};
function generateJsonData(list) {
    var data = [];
    ko.utils.arrayForEach(list, function (val) {
        data.push({
            foodCatName: val.foodCatName(),
            foodCatId: val.foodCatId(),
            foodId: val.foodId(),
            foodName: val.foodName(),
            qty: val.qty(),
        });
    });
    var myJSON = JSON.stringify(data);
    return myJSON;
};
function SetUpConditionViewModel() {
    var self = this;

    self.promotionId = ko.observable();
    self.promotionTypeId = ko.observable();
    self.promotionTypeName = ko.observable();
    self.isAutoFree = ko.observable(true);
    self.active = ko.observable(true);
    self.startDate = ko.observable(moment().format('L'));
    self.endDate = ko.observable(moment().format('L'));
    self.promotionMainPriceId = ko.observable();
    self.promotionGroupMainFood = ko.observable();
    self.promotionGroupFreeFood = ko.observable();
    self.promotionGroupMainFoodStr = ko.observable();
    self.promotionGroupFreeFoodStr = ko.observable();

    self.listPromotionGroupMainFood = ko.observableArray([]);
    self.listPromotionGroupFreeFood = ko.observableArray([]);

    self.strGrpMainFoodName = ko.observable('');
    self.strGrpFreeFoodName = ko.observable('');
    self.strMainPriceName = ko.observable('');

    self.tempListMainPrice = ko.observableArray([]);
    self.tempListGroupMainFood = ko.observableArray([]);
    self.tempListGroupFreeFood = ko.observableArray([]);

    self.isConditionFree = ko.observable(false);
    self.isConditionMain = ko.observable(true);

    self.isTermsPrice = ko.observable(true);
    self.isTermsFood = ko.observable(false);

    self.isEmptyMainPrice = ko.observable(false);
    self.isEmptyGrpMainFood = ko.observable(false);
    self.isEmptyGrpFreeFood = ko.observable(false);

    //Added by WEB-SA22-0062
    self.promotionName = ko.observable();
    //self.totalUse = ko.observable(); //Modified and End by WEB-SA24-0012
    self.usageLimit = ko.observable(); //Added and End by WEB-SA24-0012
    self.isDelivery = ko.observable(true);
    self.isPickup = ko.observable(true);
    //self.isCheckedTotal = ko.observable(false); //Modified and End by WEB-SA24-0012
    self.isCheckedLimit = ko.observable(false); //Added and End by WEB-SA24-0012

    self.shippingType = ko.observableArray([]);
    self.shippingId = ko.observable(shippingType.cAll);
    self.shippingType([
       { name: shippingType.mapName[shippingType.cAll].name, id: shippingType.cAll },
       { name: shippingType.mapName[shippingType.cPickUp].name, id: shippingType.cPickUp },
       { name: shippingType.mapName[shippingType.cDelivery].name, id: shippingType.cDelivery }]);
	   
	self.selectShipping = ko.observable({       
       dataSource: self.shippingType,
       displayExpr: 'name',
       value: self.shippingId,
       valueExpr: 'id',
       dropDownButtonTemplate: 'dropDownButton',
       onValueChanged: function (item) {          
            if (item.value == shippingType.cPickUp) {
                vmViewIndex.allSetting.dataSetUpCondition.isPickup(true);
                vmViewIndex.allSetting.dataSetUpCondition.isDelivery(false); 
                self.shippingId(shippingType.cPickUp); //Added and End by WEB-SA22-0062#1
            } else if (item.value == shippingType.cDelivery) {
                vmViewIndex.allSetting.dataSetUpCondition.isPickup(false);
                vmViewIndex.allSetting.dataSetUpCondition.isDelivery(true);
                self.shippingId(shippingType.cDelivery); //Added and End by WEB-SA22-0062#1
            }
            else if (item.value == shippingType.cAll) {
                vmViewIndex.allSetting.dataSetUpCondition.isPickup(true);
                vmViewIndex.allSetting.dataSetUpCondition.isDelivery(true);
                self.shippingId(shippingType.cAll); //Added and End by WEB-SA22-0062#1
            }                
       },        
    });
    //End Added by WEB-SA22-0062

    self.clickNextCondition = function () {
        self.isConditionFree(true);
        self.isConditionMain(false);
        return true;
    };
    self.clickBackCondition = function () {
        self.isConditionFree(false);
        self.isConditionMain(true);
        return true;
    };

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.active,

        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    self.btnAutoFree = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.isAutoFree,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.isAutoFree(true);
            } else {
                self.isAutoFree(false);
            }
        }
    });


    self.dateFromDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.startDate,
        width: 150,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            //self.startDate(moment(new Date(v.value)).format()); //Modified and End by WEB-SA22-0062#2
            self.startDate(moment(new Date(v.value)).format('L')); //Added and End by WEB-SA22-0062#2
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dateEndDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.endDate,
        min: self.startDate,
        width: 150,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            //self.endDate(moment(new Date(v.value)).format()); //Modified and End by WEB-SA22-0062#2
            self.endDate(moment(new Date(v.value)).format('L')); //Added and End by WEB-SA22-0062#2
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });
    self.clickMainPrice = function (data) {
        var id = data.promotionMainPriceId();
        var index = self.tempListMainPrice().findIndex(function (element) {
            return element.promotionMainPriceId() == id;
        });
        var divCardPrice = $('.cardPrice').find('div.card.card-body.form-group.card-price');
        if (divCardPrice[index].classList.value.indexOf('card-active') == -1) {
            $('.cardPrice').find('div').removeClass('card-active');
        }
        divCardPrice[index].classList.add('card-active');
        self.promotionMainPriceId(id);
    };

    self.clickMainFood = function (data) {
        var id = data.promotionGroupMainFoodId();
        var index = self.tempListGroupMainFood().findIndex(function (element) {
            return element.promotionGroupMainFoodId() == id;
        });
        var divCardFood = $('.cardMainFood').find('div.card.form-group.card-food');
        if (self.listPromotionGroupMainFood() == null) {
            divCardFood[index].classList.add('card-active');
            var mainArr = new Array();
            mainArr.push(id);
            self.listPromotionGroupMainFood(mainArr);
        }
        else if (self.listPromotionGroupMainFood().includes(id)) {
            //del
            divCardFood[index].classList.remove('card-active');
            var indexDel = self.listPromotionGroupMainFood().findIndex(function (element) {
                return element == id;
            });
            self.listPromotionGroupMainFood().splice(indexDel, 1);
        }
        else {
            //add
            divCardFood[index].classList.add('card-active');
            self.listPromotionGroupMainFood().push(id);
        }
        self.promotionGroupMainFoodStr(self.listPromotionGroupMainFood().join(','));
    };

    self.clickFreeFood = function (data) {
        var id = data.promotionGroupFreeFoodId();
        var index = self.tempListGroupFreeFood().findIndex(function (element) {
            return element.promotionGroupFreeFoodId() == id;
        });
        var divCardFood = $('.cardFreeFood').find('div.card.form-group.card-food');

        if (self.listPromotionGroupFreeFood().includes(id)) {
            //del
            divCardFood[index].classList.remove('card-active');
            var indexDel = self.listPromotionGroupFreeFood().findIndex(function (element) {
                return element == id;
            });
            self.listPromotionGroupFreeFood().splice(indexDel, 1);
        }
        else {
            //add
            divCardFood[index].classList.add('card-active');
            self.listPromotionGroupFreeFood().push(id);
        }
        self.promotionGroupFreeFoodStr(self.listPromotionGroupFreeFood().join(','));
    };
    //Modified by WEB-SA24-0012
    ////Added by WEB-SA22-0062
    //self.clickIsTotalUse = function () {
    //    if (self.isCheckedTotal() == false) {
    //        self.totalUse(null);
    //    }
    //    if (self.isCheckedTotal() == true) {
    //        self.totalUse(1);
    //    }
    //    return true;
    //}
    ////End Added by WEB-SA22-0062
    //End Modified by WEB-SA24-0012
    //Added by WEB-SA24-0012
    self.clickCheckLimit = function () {
        if (self.isCheckedLimit() == false) {
            self.usageLimit(null);
        }
        if (self.isCheckedLimit() == true) {
            self.usageLimit(1);
        }
        return true;
    }
    //End Added by WEB-SA24-0012

    self.btnCloseSetUpCondition = function () {
        self.clearSetUpCondition();
        DataSetUpPromotionTimeMap(); //Added and End by WEB-SA24-0012
        vmViewIndex.allSetting.disableButtonSubmit(false);
    };

    //Added by WEB-SA24-0012
    self.btnClickSave = function () {
        vmViewIndex.allSetting.dataSetUpPromotionTimeMap.setDataMultiTime();
        getIdTag(cfrmPromotionCondition).submit();
    };
    //End Added by WEB-SA24-0012

    self.clearSetUpCondition = function () {
        //Added by WEB-SA22-0062
        self.promotionName('');
        //self.totalUse(null); //Modified and End by WEB-SA24-0012
        self.usageLimit(null); //Added and End by WEB-SA24-0012
        self.isDelivery(true);
        self.isPickup(true);
        //Modified by WEB-SA22-0062#1
        //self.isCheckedTotal(false);
        //self.shippingId(shippingType.cAll);
        //End Modified by WEB-SA22-0062#1
        //End Added by WEB-SA22-0062
        //Added by WEB-SA22-0062#2
        //self.isCheckedTotal(false); //Modified and End by WEB-SA24-0012
        self.isCheckedLimit(false); //Added and End by WEB-SA24-0012
        self.shippingId(shippingType.cAll);
        //End Added by WEB-SA22-0062#2
        self.promotionId('');
        self.promotionTypeId('');
        self.isAutoFree(true);
        self.active(true);
        self.startDate(moment().format('L'));
        self.endDate(moment().format('L'));
        self.promotionMainPriceId('');
        self.promotionGroupMainFood('');
        self.promotionGroupFreeFood('');
        self.listPromotionGroupMainFood([]);
        self.listPromotionGroupFreeFood([]);
        self.strGrpMainFoodName('');
        self.strGrpFreeFoodName('');
        self.strMainPriceName('');
        self.isConditionFree(false);
        self.isConditionMain(true);
        self.isTermsPrice(true);
        self.isTermsFood(false);
        self.isEmptyMainPrice(false);
        self.isEmptyGrpMainFood(false);
        self.isEmptyGrpFreeFood(false);
        self.promotionGroupMainFoodStr('');
        self.promotionGroupFreeFoodStr('');

        $('.cardPrice').find('div').removeClass('card-active');
        $('.cardFreeFood').find('div').removeClass('card-active');
        $('.cardMainFood').find('div').removeClass('card-active');
    };
};
//End Added by SMILEDINING-SA20-0016

//Added by WEB-SA24-0012
function SetUpPromotionTimeMapViewModel(){
    var self = this;
    self.dataMultiTimeList = ko.observableArray([]);
    self.jsonMultiTime = ko.pureComputed(function () {
        return ko.toJSON(self.dataMultiTimeList());
    });
    self.isAllDayOfWeek = ko.observable(true);
    self.hasErrorDateBox = ko.observable(false);
    self.disableSaveChanges = ko.pureComputed(function () { 
        return !self.isAllDayOfWeek() && self.hasErrorDateBox();
    });

    //Sun
    self.isSun = ko.observable(false);
    self.valActive24HourSun = ko.observable(false);
    self.multiTimeSunList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Sunday, self.multiTimeSunList, self.valActive24HourSun);
    self.visibleBtnShowNextMultiTimeSun = ko.observable(true);
    self.disableBtnShowNextMultiTimeSun = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeSunList);
    });
    self.btnActive24HourSun = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourSun,
        width: switchActiveWidth55px,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeSunList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickSun = function () {
        self.hiddenShowPromotionTimeMap();
        self.isSun(true);
        $('.' + cDivShowPromotionTimeMapSun).show();
    };

    self.clickHiddenMultiTimeSun = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeSunList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeSunList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeSun(true);
        }
    };

    self.clickShowNextMultiTimeSun = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeSunList);
        var dataMultiTimeOfIndex = self.multiTimeSunList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeSun(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Mon
    self.isMon = ko.observable(false);
    self.valActive24HourMon = ko.observable(false);
    self.multiTimeMonList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Monday, self.multiTimeMonList, self.valActive24HourMon);    
    self.visibleBtnShowNextMultiTimeMon = ko.observable(true);
    self.disableBtnShowNextMultiTimeMon = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeMonList);
    });
    self.btnActive24HourMon = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourMon,
        width: switchActiveWidth55px,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeMonList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickMon = function () {
        self.hiddenShowPromotionTimeMap();
        self.isMon(true);
        $('.' + cDivShowPromotionTimeMapMon).show();
    };

    self.clickHiddenMultiTimeMon = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeMonList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeMonList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeMon(true);
        }
    };

    self.clickShowNextMultiTimeMon = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeMonList);
        var dataMultiTimeOfIndex = self.multiTimeMonList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeMon(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Tue
    self.isTue = ko.observable(false);
    self.valActive24HourTue = ko.observable(false);
    self.multiTimeTueList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Tuesday, self.multiTimeTueList, self.valActive24HourTue);
    self.visibleBtnShowNextMultiTimeTue = ko.observable(true);
    self.disableBtnShowNextMultiTimeTue = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeTueList);
    });
    self.btnActive24HourTue = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourTue,
        width: switchActiveWidth55px,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeTueList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickTue = function () {
        self.hiddenShowPromotionTimeMap();
        self.isTue(true);
        $('.' + cDivShowPromotionTimeMapTue).show();
    };

    self.clickHiddenMultiTimeTue = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeTueList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeTueList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeTue(true);
        }
    };

    self.clickShowNextMultiTimeTue = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeTueList);
        var dataMultiTimeOfIndex = self.multiTimeTueList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeTue(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Wed
    self.isWed = ko.observable(false);
    self.valActive24HourWed = ko.observable(false);
    self.multiTimeWedList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Wednesday, self.multiTimeWedList, self.valActive24HourWed);
    self.visibleBtnShowNextMultiTimeWed = ko.observable(true);
    self.disableBtnShowNextMultiTimeWed = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeWedList);
    });
    self.btnActive24HourWed = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourWed,
        width: switchActiveWidth55px,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeWedList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickWed = function () {
        self.hiddenShowPromotionTimeMap();
        self.isWed(true);
        $('.' + cDivShowPromotionTimeMapWed).show();
    };

    self.clickHiddenMultiTimeWed = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeWedList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeWedList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeWed(true);
        }
    };

    self.clickShowNextMultiTimeWed = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeWedList);
        var dataMultiTimeOfIndex = self.multiTimeWedList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeWed(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Thu
    self.isThu = ko.observable(false);
    self.valActive24HourThu = ko.observable(false);
    self.multiTimeThuList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Thursday, self.multiTimeThuList, self.valActive24HourThu);
    self.visibleBtnShowNextMultiTimeThu = ko.observable(true);
    self.disableBtnShowNextMultiTimeThu = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeThuList);
    });
    self.btnActive24HourThu = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourThu,
        width: switchActiveWidth55px,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeThuList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickThu = function () {
        self.hiddenShowPromotionTimeMap();
        self.isThu(true);
        $('.' + cDivShowPromotionTimeMapThu).show();
    };

    self.clickHiddenMultiTimeThu = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeThuList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeThuList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeThu(true);
        }
    };

    self.clickShowNextMultiTimeThu = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeThuList);
        var dataMultiTimeOfIndex = self.multiTimeThuList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeThu(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Fri
    self.isFri = ko.observable(false);
    self.valActive24HourFri = ko.observable(false);
    self.multiTimeFriList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Friday, self.multiTimeFriList, self.valActive24HourFri);
    self.visibleBtnShowNextMultiTimeFri = ko.observable(true);
    self.disableBtnShowNextMultiTimeFri = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeFriList);
    });
    self.btnActive24HourFri = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourFri,
        width: switchActiveWidth55px,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeFriList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickFri = function () {
        self.hiddenShowPromotionTimeMap();
        self.isFri(true);
        $('.' + cDivShowPromotionTimeMapFri).show();
    };

    self.clickHiddenMultiTimeFri = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeFriList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeFriList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeFri(true);
        }
    };

    self.clickShowNextMultiTimeFri = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeFriList);
        var dataMultiTimeOfIndex = self.multiTimeFriList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeFri(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //Sat
    self.isSat = ko.observable(false);
    self.valActive24HourSat = ko.observable(false);
    self.multiTimeSatList = ko.observableArray([]);
    addDataMultiTimeList(cDay_Saturday, self.multiTimeSatList, self.valActive24HourSat);
    self.visibleBtnShowNextMultiTimeSat = ko.observable(true);
    self.disableBtnShowNextMultiTimeSat = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeSatList);
    });
    self.btnActive24HourSat = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourSat,
        width: switchActiveWidth55px,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeSatList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickSat = function () {
        self.hiddenShowPromotionTimeMap();
        self.isSat(true);
        $('.' + cDivShowPromotionTimeMapSat).show();
    };

    self.clickHiddenMultiTimeSat = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeSatList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeSatList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeSat(true);
        }
    };

    self.clickShowNextMultiTimeSat = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeSatList);
        var dataMultiTimeOfIndex = self.multiTimeSatList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeSat(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //All Days
    self.isAllDays = ko.observable(false);
    self.valActive24HourAllDays = ko.observable(false);
    self.multiTimeAllDaysList = ko.observableArray([]);
    addDataMultiTimeList(cDay_AllDay, self.multiTimeAllDaysList, self.valActive24HourAllDays);
    self.visibleBtnShowNextMultiTimeAllDays = ko.observable(true);
    self.disableBtnShowNextMultiTimeAllDays = ko.pureComputed(function () { 
        return chkDisableBtnShowNextMultiTime(self.multiTimeAllDaysList);
    });
    self.btnActive24HourAllDays = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.valActive24HourAllDays,
        width: switchActiveWidth55px,
        onValueChanged: function (v) {
            if (v.value) {
                ko.utils.arrayForEach(self.multiTimeAllDaysList(), function (item) {
                    var isFirstItem = item.sorting() == 1;
                    if (item.visible()) {
                        if (isFirstItem) {
                            setActive24HourDataMultiTime(item);
                        } else {
                            setHiddenDataMultiTime(item);
                        }
                    }
                });
            }
        }
    });

    self.clickAllDays = function () {
        self.hiddenShowPromotionTimeMap();
        self.valActive24HourAllDays(true);
        self.isAllDays(true);
        $('.' + cDivShowPromotionTimeMapAlldays).show();
    };

    self.clickHiddenMultiTimeAllDays = function (index) {
        if (!self.chkDisableBtnHiddenMultiTime(self.multiTimeAllDaysList, index)) {
            var dataMultiTimeOfIndex = self.multiTimeAllDaysList()[index];
            setHiddenDataMultiTime(dataMultiTimeOfIndex);
            self.visibleBtnShowNextMultiTimeAllDays(true);
        }
    };

    self.clickShowNextMultiTimeAllDays = function () {
        var indexToShowNext = self.chkIndexToShowNextMultiTime(self.multiTimeAllDaysList);
        var dataMultiTimeOfIndex = self.multiTimeAllDaysList()[indexToShowNext];
        setShowNextDataMultiTime(dataMultiTimeOfIndex);
        self.visibleBtnShowNextMultiTimeAllDays(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
    };

    //All Function
    self.hiddenShowPromotionTimeMap = function () {
        $('.' + cDivShowPromotionTimeMapSun).hide();
        $('.' + cDivShowPromotionTimeMapMon).hide();
        $('.' + cDivShowPromotionTimeMapTue).hide();
        $('.' + cDivShowPromotionTimeMapWed).hide();
        $('.' + cDivShowPromotionTimeMapThu).hide();
        $('.' + cDivShowPromotionTimeMapFri).hide();
        $('.' + cDivShowPromotionTimeMapSat).hide();
        $('.' + cDivShowPromotionTimeMapAlldays).hide();
        self.isSun(false);
        self.isMon(false);
        self.isTue(false);
        self.isWed(false);
        self.isThu(false);
        self.isFri(false);
        self.isSat(false);
        self.isAllDays(false);
    };

    self.setDataMultiTime = function () {
        self.dataMultiTimeList([]);
        insertData(self.multiTimeSunList());
        insertData(self.multiTimeMonList());
        insertData(self.multiTimeTueList());
        insertData(self.multiTimeWedList());
        insertData(self.multiTimeThuList());
        insertData(self.multiTimeFriList());
        insertData(self.multiTimeSatList());
        insertData(self.multiTimeAllDaysList());

        function insertData(data) {
            if (!isEmpty(data)) {
                ko.utils.arrayForEach(data, function (item) {
                    if (item.visible()) {
                        self.dataMultiTimeList.push(new DataMultiTimePromotionTimeMapViewModel(null, null, item));
                    }
                });
            }
        };
    };

    self.chkDisableBtnHiddenMultiTime = function (multiTimeList, index) {
        return !(multiTimeList()[index + 1] == null || !multiTimeList()[index + 1].visible());
    };

    self.chkIndexToShowNextMultiTime = function (multiTimeList) {
        var prevSorting = cPromotionTimeMap_StartSorting - 1;
        var indexToShowNext = 0;
        ko.utils.arrayForEach(multiTimeList(), function (item) {
            if (item.sorting() > prevSorting && item.visible()) { // check last index of show
                indexToShowNext = (item.sorting() - 1) + 1;
            }
            prevSorting = item.visible() ? item.sorting() : prevSorting;
        });
        return indexToShowNext;
    };

    self.chkVisibleBtnShowNextMultiTime = function (sorting) {
        return sorting < cPromotionTimeMap_MaxSorting;
    };

    function addDataMultiTimeList(day, multiTimeList, disabled) {
        self.disableDateBox = ko.pureComputed(function () {
            return disabled();
        });

        for (let sorting = cPromotionTimeMap_StartSorting; sorting <= cPromotionTimeMap_MaxSorting; sorting++) {
            multiTimeList.push(new DataMultiTimePromotionTimeMapViewModel(day, sorting));
        }
        updateTimeDateBoxInMultiTimeList(multiTimeList, self.disableDateBox);
    };

    function updateTimeDateBoxInMultiTimeList(multiTimeList, disabled) {
        for (let index = 0; index < multiTimeList().length; index++) {
            var dataMultiTimeOfIndex = multiTimeList()[index];
            dataMultiTimeOfIndex.startTimeDateBox(createTimeDateBox(
                index > 0 ? multiTimeList()[index - 1].endTime : null,
                dataMultiTimeOfIndex.endTime,
                dataMultiTimeOfIndex.startTime,
                disabled
            ));
            dataMultiTimeOfIndex.endTimeDateBox(createTimeDateBox(
                dataMultiTimeOfIndex.startTime,
                multiTimeList()[index + 1] != null ? multiTimeList()[index + 1].startTime : null,
                dataMultiTimeOfIndex.endTime,
                disabled
            ));
        }
    };

    function createTimeDateBox(min, max, value, disabled) {
        return {
            min: min,
            max: max,
            type: "time",
            pickerType: "list",
            value: value,
            disabled: disabled,
            onValueChanged: function (v) {
                if (isEmpty(v.value) && (v.model.visible === undefined ? true : v.model.visible())) {
                    v.component.option("isValid", false);
                }
                value(isEmpty(v.value) ? null : moment(v.value, moment_time_format_hhmmss));
                self.hasErrorDateBox(false);
            },
            onChange: function (v) {
                if (v.component._options.validationError != null) {
                    self.hasErrorDateBox(true);
                } else {
                    self.hasErrorDateBox(false);
                }
            }
        };
    };

    function setActive24HourDataMultiTime(dataMultiTime) {
        dataMultiTime.visible(true);
        dataMultiTime.startTime(moment(time_start_24h, moment_time_format_hhmmss));
        dataMultiTime.endTime(moment(time_end_24h, moment_time_format_hhmmss));
        dataMultiTime.active(true);
    };

    function setHiddenDataMultiTime(dataMultiTime) {
        dataMultiTime.visible(false);
        dataMultiTime.startTime(null);
        dataMultiTime.endTime(null);
        dataMultiTime.active(true);
    };

    function setShowNextDataMultiTime(dataMultiTime) {
        dataMultiTime.visible(true);
    };

    function chkDisableBtnShowNextMultiTime(multiTimeList) {
        var indexFilter = _.findIndex(multiTimeList(), function (item) {
            return !item.visible();
        });
        if (indexFilter > 0) {
            var startTime = multiTimeList()[indexFilter - 1].startTime();
            var endTime = multiTimeList()[indexFilter - 1].endTime();
            if (isEmpty(startTime) || isEmpty(endTime)) 
                return true;
            else
                return false;
        }
    };
};
//End Added by WEB-SA24-0012

function AllTimeViewModel(data) { //SetAllTime
    var self = this;
    var dataSunTimeMenu = divShowTimeSun;
    var dataMonTimeMenu = divShowTimeMon;
    var dataTueTimeMenu = divShowTimeTue;
    var dataWedTimeMenu = divShowTimeWed;
    var dataThuTimeMenu = divShowTimeThu;
    var dataFriTimeMenu = divShowTimeFri;
    var dataSatTimeMenu = divShowTimeSat;
    var dataAllDaysTimeMenu = divShowTimeAlldays;
    self.foodsetidkey = ko.observableArray([]); //Add and End by SMILEDINING-SA18-0024

    if (isEmpty(data)) {
        self.dataViewModel = ko.observableArray([]);
        self.data = ko.observableArray([]);
        self.dataModal = new NewDataTimeMenu();
        self.dataObj = ko.pureComputed(function () {
            return ko.toJSON(self.dataViewModel());
        });

        self.dataListTimeMenu = ko.observableArray([]);
        self.dataListTimePickUp = ko.observableArray([]);
        self.dataListTimeDelivery = ko.observableArray([]);
        self.dataListFoodSetTimeMap = ko.observableArray([]);
        self.dataListFoodSetName = ko.observableArray([]);
        self.hasShowFoodSet = ko.observable(false);
        self.selectFoodSet = ko.observable('');
        self.typeTimeName = ko.observable('TimeMenu');
        self.selectListFoodSetId = ko.observableArray([]);

        self.dataObjSelectTagBox = ko.pureComputed(function () {
            return ko.toJSON(self.selectListFoodSetId());
        });

        self.valDaySunTimeMenuEdit = ko.observable('SUN');
        self.valDayMonTimeMenuEdit = ko.observable('MON');
        self.valDayTueTimeMenuEdit = ko.observable('TUE');
        self.valDayWedTimeMenuEdit = ko.observable('WED');
        self.valDayThuTimeMenuEdit = ko.observable('THU');
        self.valDayFriTimeMenuEdit = ko.observable('FRI');
        self.valDaySatTimeMenuEdit = ko.observable('SAT');
        self.valDayAllEdit = ko.observable('ALLDAYS');

        self.hasSunTimeMenuEdit = ko.observable(false);
        self.hasMonTimeMenuEdit = ko.observable(false);
        self.hasTueTimeMenuEdit = ko.observable(false);
        self.hasWedTimeMenuEdit = ko.observable(false);
        self.hasThuTimeMenuEdit = ko.observable(false);
        self.hasFriTimeMenuEdit = ko.observable(false);
        self.hasSatTimeMenuEdit = ko.observable(false);
        self.hasAllDaysTimeMenuEdit = ko.observable(false);

        self.clickSelectFirstSunTimeMenuEdit = function () { return true; };
        self.clickSelectSecondSunTimeMenuEdit = function () { return true; };
        self.clickSelectFirstMonTimeMenuEdit = function () { return true; };
        self.clickSelectSecondMonTimeMenuEdit = function () { return true; };
        self.clickSelectFirstTueTimeMenuEdit = function () { return true; };
        self.clickSelectSecondTueTimeMenuEdit = function () { return true; };
        self.clickSelectFirstWedTimeMenuEdit = function () { return true; };
        self.clickSelectSecondWedTimeMenuEdit = function () { return true; };
        self.clickSelectFirstThuTimeMenuEdit = function () { return true; };
        self.clickSelectSecondThuTimeMenuEdit = function () { return true; };
        self.clickSelectFirstFriTimeMenuEdit = function () { return true; };
        self.clickSelectSecondFriTimeMenuEdit = function () { return true; };
        self.clickSelectFirstSatTimeMenuEdit = function () { return true; };
        self.clickSelectSecondSatTimeMenuEdit = function () { return true; };
        self.clickSelectFirstAllDaysTimeMenuEdit = function () { return true; };
        self.clickSelectSecondAllDaysTimeMenuEdit = function () { return true; };

        //SELECT TIME
        var timeName = ko.observableArray([
       { name: "Menu Hour", id: 1 },
       { name: "Pickup Hour", id: 2 },
       { name: "Delivery Hour", id: 3 },
       { name: "FoodSetTimeMap", id: 4 }
        ]);

        self.selectTime = ko.observable({
            dataSource: new DevExpress.data.ArrayStore({
                data: timeName(),
                key: 'id'
            }),
            displayExpr: 'name',
            valueExpr: 'id',
            value: _.first(timeName()).id,
            placeholder: "Select Time",
            onValueChanged: function (v) {
                switch (v.value) {
                    case 1:
                        vmViewIndex.allSetTime.typeTimeName("TimeMenu");
                        DataTimeMenu(vmViewIndex.allSetTime.dataListTimeMenu());
                        vmViewIndex.allSetTime.hasShowFoodSet(false);
                        hiddenShowTimeMenuEdit();
                        break;
                    case 2:
                        vmViewIndex.allSetTime.typeTimeName("TimePickUp");
                        DataTimeMenu(vmViewIndex.allSetTime.dataListTimePickUp());
                        vmViewIndex.allSetTime.hasShowFoodSet(false);
                        hiddenShowTimeMenuEdit();
                        break;
                    case 3:
                        vmViewIndex.allSetTime.typeTimeName("TimeDelivery");
                        DataTimeMenu(vmViewIndex.allSetTime.dataListTimeDelivery());
                        vmViewIndex.allSetTime.hasShowFoodSet(false);
                        hiddenShowTimeMenuEdit();
                        break;
                    case 4:
                        //listFoodSet
                        vmViewIndex.allSetTime.typeTimeName("FoodSetTimeMap");
                        DataTimeMenu(vmViewIndex.allSetTime.dataListFoodSetTimeMap());
                        vmViewIndex.allSetTime.hasShowFoodSet(true);
                        hiddenShowTimeMenuEdit();
                        break;
                    default:
                        vmViewIndex.allSetTime.hasShowFoodSet(false);
                }
            }
        });//end select time

        //Added by SMILEDINING-SA20-0006
        var timeNameContactless = ko.observableArray([
       { name: "Menu Hour", id: 1 },
       { name: "FoodSetTimeMap", id: 4 }
        ]);

        self.selectTimeContactless = ko.observable({
            dataSource: new DevExpress.data.ArrayStore({
                data: timeNameContactless(),
                key: 'id'
            }),
            displayExpr: 'name',
            valueExpr: 'id',
            value: _.first(timeNameContactless()).id,
            placeholder: "Select Time",
            onValueChanged: function (v) {
                switch (v.value) {
                    case 1:
                        vmViewIndex.allSetTime.typeTimeName("TimeMenu");
                        DataTimeMenu(vmViewIndex.allSetTime.dataListTimeMenu());
                        vmViewIndex.allSetTime.hasShowFoodSet(false);
                        hiddenShowTimeMenuEdit();
                        break;
                    case 4:
                        //listFoodSet
                        vmViewIndex.allSetTime.typeTimeName("FoodSetTimeMap");
                        DataTimeMenu(vmViewIndex.allSetTime.dataListFoodSetTimeMap());
                        vmViewIndex.allSetTime.hasShowFoodSet(true);
                        hiddenShowTimeMenuEdit();
                        break;
                    default:
                        vmViewIndex.allSetTime.hasShowFoodSet(false);
                }
            }
        });//end select time
        //End Added by SMILEDINING-SA20-0006

        /*Active 24 Hours*/
        //Sun
        self.clickActive24HourSunTimeMenuEdit = ko.observable({
            offText: 'NO',
            onText: 'YES',
            value: self.dataModal.valActive24HourSunTimeMenuEdit,
            width: switchActiveWidth55px,
            onValueChanged: function (item) {
                var self = vmViewIndex.allSetTime.dataModal;
                if (item.value == true) {
                    //Modified by SMILEDINING-SA22-0034
                    //self.valFirstHourStartTimeSunTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    //self.valFirstHourEndTimeSunTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    //self.valSecondHourStartTimeSunTimeMenuEditValue(null);
                    //self.valSecondHourEndTimeSunTimeMenuEditValue(null);

                    //self.valActive24HourSunTimeMenuEdit(true);
                    //self.valSelectFirstSunTimeMenuEdit(true);
                    //self.valSelectSecondSunTimeMenuEdit(true);
                    //self.hasShowSecondSunTimeMenuEdit(true);
                    //hideErorrTimePeriodTimeMenuEdit();
                    //End Modified by SMILEDINING-SA22-0034
                    //Added by SMILEDINING-SA22-0034
                    self.valFirstHourStartTimeSunTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    self.valFirstHourEndTimeSunTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    self.valActive24HourSunTimeMenuEdit(true);
                    self.valSelectFirstSunTimeMenuEdit(true);

                    ko.utils.arrayForEach(self.valMultiHourSunTimeMenuArr(), function (item) {
                        if (item.isShow()) {
                            item.isShow(false);
                            item.startTimeValue(null);
                            item.endTimeValue(null);
                            item.selectTimeMenuEdit(true);
                        }
                    });
                    self.hasShowMultiHourSunTimeMenuEdit(true);
                    hideErorrTimePeriodTimeMenuEdit();
                    //End Added by SMILEDINING-SA22-0034
                } else {
                    self.valActive24HourSunTimeMenuEdit(false);
                }
            }
        });

        //Mon
        self.clickActive24HourMonTimeMenuEdit = ko.observable({
            offText: 'NO',
            onText: 'YES',
            value: self.dataModal.valActive24HourMonTimeMenuEdit,
            width: switchActiveWidth55px,
            onValueChanged: function (item) {
                var self = vmViewIndex.allSetTime.dataModal;
                if (item.value == true) {
                    //Modified by SMILEDINING-SA22-0034
                    //self.valFirstHourStartTimeMonTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    //self.valFirstHourEndTimeMonTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    //self.valSecondHourStartTimeMonTimeMenuEditValue(null);
                    //self.valSecondHourEndTimeMonTimeMenuEditValue(null);

                    //self.valActive24HourMonTimeMenuEdit(true);
                    //self.valSelectFirstMonTimeMenuEdit(true);
                    //self.valSelectSecondMonTimeMenuEdit(true);
                    //self.hasShowSecondMonTimeMenuEdit(true);
                    //hideErorrTimePeriodTimeMenuEdit();
                    //End Modified by SMILEDINING-SA22-0034

                    //Added by SMILEDINING-SA22-0034
                    self.valFirstHourStartTimeMonTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    self.valFirstHourEndTimeMonTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    self.valActive24HourMonTimeMenuEdit(true);
                    self.valSelectFirstMonTimeMenuEdit(true);

                    ko.utils.arrayForEach(self.valMultiHourMonTimeMenuArr(), function (item) {
                        if (item.isShow()) {
                            item.isShow(false);
                            item.startTimeValue(null);
                            item.endTimeValue(null);
                            item.selectTimeMenuEdit(true);
                        }
                    });
                    self.hasShowMultiHourMonTimeMenuEdit(true);
                    hideErorrTimePeriodTimeMenuEdit();
                    //End Added by SMILEDINING-SA22-0034
                } else {
                    self.valActive24HourMonTimeMenuEdit(false);
                }
            }
        });

        //Tue
        self.clickActive24HourTueTimeMenuEdit = ko.observable({
            offText: 'NO',
            onText: 'YES',
            value: self.dataModal.valActive24HourTueTimeMenuEdit,
            width: switchActiveWidth55px,
            onValueChanged: function (item) {
                var self = vmViewIndex.allSetTime.dataModal;
                if (item.value == true) {
                    //Modified by SMILEDINING-SA22-0034
                    //self.valFirstHourStartTimeTueTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    //self.valFirstHourEndTimeTueTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    //self.valSecondHourStartTimeTueTimeMenuEditValue(null);
                    //self.valSecondHourEndTimeTueTimeMenuEditValue(null);

                    //self.valActive24HourTueTimeMenuEdit(true);
                    //self.valSelectFirstTueTimeMenuEdit(true);
                    //self.valSelectSecondTueTimeMenuEdit(true);
                    //self.hasShowSecondTueTimeMenuEdit(true);
                    //hideErorrTimePeriodTimeMenuEdit();
                    //End Modified by SMILEDINING-SA22-0034

                    //Added by SMILEDINING-SA22-0034
                    self.valFirstHourStartTimeTueTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    self.valFirstHourEndTimeTueTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    self.valActive24HourTueTimeMenuEdit(true);
                    self.valSelectFirstTueTimeMenuEdit(true);

                    ko.utils.arrayForEach(self.valMultiHourTueTimeMenuArr(), function (item) {
                        if (item.isShow()) {
                            item.isShow(false);
                            item.startTimeValue(null);
                            item.endTimeValue(null);
                            item.selectTimeMenuEdit(true);
                        }
                    });
                    self.hasShowMultiHourTueTimeMenuEdit(true);
                    hideErorrTimePeriodTimeMenuEdit();
                    //End Added by SMILEDINING-SA22-0034
                } else {
                    self.valActive24HourTueTimeMenuEdit(false);
                }
            }
        });

        //Wed
        self.clickActive24HourWedTimeMenuEdit = ko.observable({
            offText: 'NO',
            onText: 'YES',
            value: self.dataModal.valActive24HourWedTimeMenuEdit,
            width: switchActiveWidth55px,
            onValueChanged: function (item) {
                var self = vmViewIndex.allSetTime.dataModal;
                if (item.value == true) {
                    //Modified by SMILEDINING-SA22-0034
                    //self.valFirstHourStartTimeWedTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    //self.valFirstHourEndTimeWedTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    //self.valSecondHourStartTimeWedTimeMenuEditValue(null);
                    //self.valSecondHourEndTimeWedTimeMenuEditValue(null);

                    //self.valActive24HourWedTimeMenuEdit(true);
                    //self.valSelectFirstWedTimeMenuEdit(true);
                    //self.valSelectSecondWedTimeMenuEdit(true);
                    //self.hasShowSecondWedTimeMenuEdit(true);
                    //hideErorrTimePeriodTimeMenuEdit();
                    //End Modified by SMILEDINING-SA22-0034

                    //Added by SMILEDINING-SA22-0034
                    self.valFirstHourStartTimeWedTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    self.valFirstHourEndTimeWedTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    self.valActive24HourWedTimeMenuEdit(true);
                    self.valSelectFirstWedTimeMenuEdit(true);

                    ko.utils.arrayForEach(self.valMultiHourWedTimeMenuArr(), function (item) {
                        if (item.isShow()) {
                            item.isShow(false);
                            item.startTimeValue(null);
                            item.endTimeValue(null);
                            item.selectTimeMenuEdit(true);
                        }
                    });
                    self.hasShowMultiHourWedTimeMenuEdit(true);
                    hideErorrTimePeriodTimeMenuEdit();
                    //End Added by SMILEDINING-SA22-0034
                } else {
                    self.valActive24HourWedTimeMenuEdit(false);
                }
            }
        });

        //Thu
        self.clickActive24HourThuTimeMenuEdit = ko.observable({
            offText: 'NO',
            onText: 'YES',
            value: self.dataModal.valActive24HourThuTimeMenuEdit,
            width: switchActiveWidth55px,
            onValueChanged: function (item) {
                var self = vmViewIndex.allSetTime.dataModal;
                if (item.value == true) {
                    //Modified by SMILEDINING-SA22-0034
                    //self.valFirstHourStartTimeThuTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    //self.valFirstHourEndTimeThuTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    //self.valSecondHourStartTimeThuTimeMenuEditValue(null);
                    //self.valSecondHourEndTimeThuTimeMenuEditValue(null);

                    //self.valActive24HourThuTimeMenuEdit(true);
                    //self.valSelectFirstThuTimeMenuEdit(true);
                    //self.valSelectSecondThuTimeMenuEdit(true);
                    //self.hasShowSecondThuTimeMenuEdit(true);
                    //hideErorrTimePeriodTimeMenuEdit();
                    //End Modified by SMILEDINING-SA22-0034

                    //Added by SMILEDINING-SA22-0034
                    self.valFirstHourStartTimeThuTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    self.valFirstHourEndTimeThuTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    self.valActive24HourThuTimeMenuEdit(true);
                    self.valSelectFirstThuTimeMenuEdit(true);

                    ko.utils.arrayForEach(self.valMultiHourThuTimeMenuArr(), function (item) {
                        if (item.isShow()) {
                            item.isShow(false);
                            item.startTimeValue(null);
                            item.endTimeValue(null);
                            item.selectTimeMenuEdit(true);
                        }
                    });
                    self.hasShowMultiHourThuTimeMenuEdit(true);
                    hideErorrTimePeriodTimeMenuEdit();
                    //End Added by SMILEDINING-SA22-0034
                } else {
                    self.valActive24HourThuTimeMenuEdit(false);
                }
            }
        });

        //Fri
        self.clickActive24HourFriTimeMenuEdit = ko.observable({
            offText: 'NO',
            onText: 'YES',
            value: self.dataModal.valActive24HourFriTimeMenuEdit,
            width: switchActiveWidth55px,
            onValueChanged: function (item) {
                var self = vmViewIndex.allSetTime.dataModal;
                if (item.value == true) {
                    //Modified by SMILEDINING-SA22-0034
                    //self.valFirstHourStartTimeFriTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    //self.valFirstHourEndTimeFriTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    //self.valSecondHourStartTimeFriTimeMenuEditValue(null);
                    //self.valSecondHourEndTimeFriTimeMenuEditValue(null);

                    //self.valActive24HourFriTimeMenuEdit(true);
                    //self.valSelectFirstFriTimeMenuEdit(true);
                    //self.valSelectSecondFriTimeMenuEdit(true);
                    //self.hasShowSecondFriTimeMenuEdit(true);
                    //hideErorrTimePeriodTimeMenuEdit();
                    //End Modified by SMILEDINING-SA22-0034

                    //Added by SMILEDINING-SA22-0034
                    self.valFirstHourStartTimeFriTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    self.valFirstHourEndTimeFriTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    self.valActive24HourFriTimeMenuEdit(true);
                    self.valSelectFirstFriTimeMenuEdit(true);

                    ko.utils.arrayForEach(self.valMultiHourFriTimeMenuArr(), function (item) {
                        if (item.isShow()) {
                            item.isShow(false);
                            item.startTimeValue(null);
                            item.endTimeValue(null);
                            item.selectTimeMenuEdit(true);
                        }
                    });
                    self.hasShowMultiHourFriTimeMenuEdit(true);
                    hideErorrTimePeriodTimeMenuEdit();
                    //End Added by SMILEDINING-SA22-0034
                } else {
                    self.valActive24HourFriTimeMenuEdit(false);
                }
            }
        });

        //Sat
        self.clickActive24HourSatTimeMenuEdit = ko.observable({
            offText: 'NO',
            onText: 'YES',
            value: self.dataModal.valActive24HourSatTimeMenuEdit,
            width: switchActiveWidth55px,
            onValueChanged: function (item) {
                var self = vmViewIndex.allSetTime.dataModal;
                if (item.value == true) {
                    //Modified by SMILEDINING-SA22-0034
                    //self.valFirstHourStartTimeSatTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    //self.valFirstHourEndTimeSatTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    //self.valSecondHourStartTimeSatTimeMenuEditValue(null);
                    //self.valSecondHourEndTimeSatTimeMenuEditValue(null);
                    //self.valActive24HourSatTimeMenuEdit(true);
                    //self.valSelectFirstSatTimeMenuEdit(true);
                    //self.valSelectSecondSatTimeMenuEdit(true);
                    //self.hasShowSecondSatTimeMenuEdit(true);
                    //hideErorrTimePeriodTimeMenuEdit();
                    //End Modified by SMILEDINING-SA22-0034

                    //Added by SMILEDINING-SA22-0034
                    self.valFirstHourStartTimeSatTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    self.valFirstHourEndTimeSatTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    self.valActive24HourSatTimeMenuEdit(true);
                    self.valSelectFirstSatTimeMenuEdit(true);

                    ko.utils.arrayForEach(self.valMultiHourSatTimeMenuArr(), function (item) {
                        if (item.isShow()) {
                            item.isShow(false);
                            item.startTimeValue(null);
                            item.endTimeValue(null);
                            item.selectTimeMenuEdit(true);
                        }
                    });
                    self.hasShowMultiHourSatTimeMenuEdit(true);
                    hideErorrTimePeriodTimeMenuEdit();
                    //End Added by SMILEDINING-SA22-0034
                } else {
                    self.valActive24HourSatTimeMenuEdit(false);
                }
            }
        });

        //AllDays
        self.clickActive24HourAllDaysTimeMenuEdit = ko.observable({
            offText: 'NO',
            onText: 'YES',
            value: self.dataModal.valActive24HourAllDaysTimeMenuEdit,
            width: switchActiveWidth55px,
            onValueChanged: function (item) {
                var self = vmViewIndex.allSetTime.dataModal;
                if (item.value == true) {
                    //Modified by SMILEDINING-SA22-0034
                    //self.valFirstHourStartTimeAllDaysTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    //self.valFirstHourEndTimeAllDaysTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    //self.valSecondHourStartTimeAllDaysTimeMenuEditValue(null);
                    //self.valSecondHourEndTimeAllDaysTimeMenuEditValue(null);

                    //self.valActive24HourAllDaysTimeMenuEdit(true);
                    //self.valSelectFirstAllDaysTimeMenuEdit(true);
                    //self.valSelectSecondAllDaysTimeMenuEdit(true);
                    //self.hasShowSecondAllDaysTimeMenuEdit(true);
                    //hideErorrTimePeriodTimeMenuEdit();
                    //End Modified by SMILEDINING-SA22-0034

                    //Added by SMILEDINING-SA22-0034
                    self.valFirstHourStartTimeAllDaysTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
                    self.valFirstHourEndTimeAllDaysTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
                    self.valActive24HourAllDaysTimeMenuEdit(true);
                    self.valSelectFirstAllDaysTimeMenuEdit(true);

                    ko.utils.arrayForEach(self.valMultiHourAllDaysTimeMenuArr(), function (item) {
                        if (item.isShow()) {
                            item.isShow(false);
                            item.startTimeValue(null);
                            item.endTimeValue(null);
                            item.selectTimeMenuEdit(true);
                        }
                    });
                    self.hasShowMultiHourAllDaysTimeMenuEdit(true);
                    hideErorrTimePeriodTimeMenuEdit();
                    //End Added by SMILEDINING-SA22-0034
                } else {
                    self.valActive24HourAllDaysTimeMenuEdit(false);
                }
            }
        });

        self.clickSunTimeMenuEdit = function () {
            hiddenShowTimeMenuEdit();
            self.hasSunTimeMenuEdit(false);
            self.hasMonTimeMenuEdit(false);
            self.hasTueTimeMenuEdit(false);
            self.hasWedTimeMenuEdit(false);
            self.hasThuTimeMenuEdit(false);
            self.hasFriTimeMenuEdit(false);
            self.hasSatTimeMenuEdit(false);
            self.hasAllDaysTimeMenuEdit(false);

            var chkSunTimeMenuEdit = self.hasSunTimeMenuEdit();
            self.hasSunTimeMenuEdit(!chkSunTimeMenuEdit);
            if (self.hasSunTimeMenuEdit()) {
                dataSunTimeMenu.show();
            }
        };

        self.clickMonTimeMenuEdit = function () {
            hiddenShowTimeMenuEdit();

            self.hasSunTimeMenuEdit(false);
            self.hasMonTimeMenuEdit(false);
            self.hasTueTimeMenuEdit(false);
            self.hasWedTimeMenuEdit(false);
            self.hasThuTimeMenuEdit(false);
            self.hasFriTimeMenuEdit(false);
            self.hasSatTimeMenuEdit(false);
            self.hasAllDaysTimeMenuEdit(false);

            var chkMonTimeMenuEdit = self.hasMonTimeMenuEdit();
            self.hasMonTimeMenuEdit(!chkMonTimeMenuEdit);
            if (self.hasMonTimeMenuEdit()) {
                dataMonTimeMenu.show();
            }
        };

        self.clickTueTimeMenuEdit = function () {
            hiddenShowTimeMenuEdit();

            self.hasSunTimeMenuEdit(false);
            self.hasMonTimeMenuEdit(false);
            self.hasTueTimeMenuEdit(false);
            self.hasWedTimeMenuEdit(false);
            self.hasThuTimeMenuEdit(false);
            self.hasFriTimeMenuEdit(false);
            self.hasSatTimeMenuEdit(false);
            self.hasAllDaysTimeMenuEdit(false);

            var chkTueTimeMenuEdit = self.hasTueTimeMenuEdit();
            self.hasTueTimeMenuEdit(!chkTueTimeMenuEdit);
            if (self.hasTueTimeMenuEdit()) {
                dataTueTimeMenu.show();

            }
        };

        self.clickWedTimeMenuEdit = function () {
            hiddenShowTimeMenuEdit();

            self.hasSunTimeMenuEdit(false);
            self.hasMonTimeMenuEdit(false);
            self.hasTueTimeMenuEdit(false);
            self.hasWedTimeMenuEdit(false);
            self.hasThuTimeMenuEdit(false);
            self.hasFriTimeMenuEdit(false);
            self.hasSatTimeMenuEdit(false);
            self.hasAllDaysTimeMenuEdit(false);

            var chkWedTimeMenuEdit = self.hasWedTimeMenuEdit();
            self.hasWedTimeMenuEdit(!chkWedTimeMenuEdit);
            if (self.hasWedTimeMenuEdit()) {
                dataWedTimeMenu.show();

            }
        };

        self.clickThuTimeMenuEdit = function () {
            hiddenShowTimeMenuEdit();

            self.hasSunTimeMenuEdit(false);
            self.hasMonTimeMenuEdit(false);
            self.hasTueTimeMenuEdit(false);
            self.hasWedTimeMenuEdit(false);
            self.hasThuTimeMenuEdit(false);
            self.hasFriTimeMenuEdit(false);
            self.hasAllDaysTimeMenuEdit(false);
            self.hasSatTimeMenuEdit(false);

            var chkThuTimeMenuEdit = self.hasThuTimeMenuEdit();
            self.hasThuTimeMenuEdit(!chkThuTimeMenuEdit);
            if (self.hasThuTimeMenuEdit()) {
                dataThuTimeMenu.show();

            }
        };

        self.clickFriTimeMenuEdit = function () {
            hiddenShowTimeMenuEdit();

            self.hasSunTimeMenuEdit(false);
            self.hasMonTimeMenuEdit(false);
            self.hasTueTimeMenuEdit(false);
            self.hasWedTimeMenuEdit(false);
            self.hasThuTimeMenuEdit(false);
            self.hasFriTimeMenuEdit(false);
            self.hasSatTimeMenuEdit(false);
            self.hasAllDaysTimeMenuEdit(false);

            var chkFriTimeMenuEdit = self.hasFriTimeMenuEdit();
            self.hasFriTimeMenuEdit(!chkFriTimeMenuEdit);
            if (self.hasFriTimeMenuEdit()) {
                dataFriTimeMenu.show();

            }
        };

        self.clickSatTimeMenuEdit = function () {
            hiddenShowTimeMenuEdit();

            self.hasSunTimeMenuEdit(false);
            self.hasMonTimeMenuEdit(false);
            self.hasTueTimeMenuEdit(false);
            self.hasWedTimeMenuEdit(false);
            self.hasThuTimeMenuEdit(false);
            self.hasFriTimeMenuEdit(false);
            self.hasSatTimeMenuEdit(false);
            self.hasAllDaysTimeMenuEdit(false);

            var chkSatTimeMenuEdit = self.hasSatTimeMenuEdit();
            self.hasSatTimeMenuEdit(!chkSatTimeMenuEdit);
            if (self.hasSatTimeMenuEdit()) {
                dataSatTimeMenu.show();
            }
        };

        self.clickAllDaysTimeMenuEdit = function () {
            //vmViewIndex.allSetTime.dataModal.valActive24HourAllDaysTimeMenuEdit(true);    //Modified and End by SMILEDINING-SA20-0025
            hiddenShowTimeMenuEdit();

            self.hasSunTimeMenuEdit(false);
            self.hasMonTimeMenuEdit(false);
            self.hasTueTimeMenuEdit(false);
            self.hasWedTimeMenuEdit(false);
            self.hasThuTimeMenuEdit(false);
            self.hasFriTimeMenuEdit(false);
            self.hasSatTimeMenuEdit(false);
            self.hasAllDaysTimeMenuEdit(false);

            //Added by SMILEDINING-SA20-0025
            //Modified by SMILEDINING-SA22-0034
            //vmViewIndex.allSetTime.dataModal.valFirstHourStartTimeAllDaysTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
            //vmViewIndex.allSetTime.dataModal.valFirstHourEndTimeAllDaysTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
            //vmViewIndex.allSetTime.dataModal.valSecondHourStartTimeAllDaysTimeMenuEditValue(null);
            //vmViewIndex.allSetTime.dataModal.valSecondHourEndTimeAllDaysTimeMenuEditValue(null);

            //vmViewIndex.allSetTime.dataModal.valActive24HourAllDaysTimeMenuEdit(true);
            //vmViewIndex.allSetTime.dataModal.valSelectFirstAllDaysTimeMenuEdit(true);
            //vmViewIndex.allSetTime.dataModal.valSelectSecondAllDaysTimeMenuEdit(true);
            //vmViewIndex.allSetTime.dataModal.hasShowSecondAllDaysTimeMenuEdit(true);
            //hideErorrTimePeriodTimeMenuEdit();
            //End Modified by SMILEDINING-SA22-0034
            //End Added by SMILEDINING-SA20-0025

            //Added by SMILEDINING-SA22-0034
            vmViewIndex.allSetTime.dataModal.valFirstHourStartTimeAllDaysTimeMenuEditValue(moment(time_start_24h, moment_time_format_hhmmss));
            vmViewIndex.allSetTime.dataModal.valFirstHourEndTimeAllDaysTimeMenuEditValue(moment(time_end_24h, moment_time_format_hhmmss));
            vmViewIndex.allSetTime.dataModal.valActive24HourAllDaysTimeMenuEdit(true);
            vmViewIndex.allSetTime.dataModal.valSelectFirstAllDaysTimeMenuEdit(true);

            ko.utils.arrayForEach(vmViewIndex.allSetTime.dataModal.valMultiHourAllDaysTimeMenuArr(), function (item) {
                item.isShow(false);
                item.startTimeValue(null);
                item.endTimeValue(null);
                item.selectTimeMenuEdit(true);
            });
            vmViewIndex.allSetTime.dataModal.hasShowMultiHourAllDaysTimeMenuEdit(true);
            hideErorrTimePeriodTimeMenuEdit();
            //End Added by SMILEDINING-SA22-0034

            var chkAllDaysTimeMenuEdit = self.hasAllDaysTimeMenuEdit();
            self.hasAllDaysTimeMenuEdit(!chkAllDaysTimeMenuEdit);
            if (self.hasAllDaysTimeMenuEdit()) {
                divShowTimeAlldays.show();
            }
        };

        //Modified by SMILEDINING-SA22-0034
        ///*Show Second*/
        ////Sun
        //self.clickShowSecondSunTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondSunTimeMenuEdit = self.hasShowSecondSunTimeMenuEdit();
        //    self.hasShowSecondSunTimeMenuEdit(!chkShowSecondSunTimeMenuEdit);
        //    self.valSelectSecondSunTimeMenuEdit(true);
        //};

        //self.clickHiddenSecondSunTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondSunTimeMenuEdit = self.hasShowSecondSunTimeMenuEdit();
        //    self.hasShowSecondSunTimeMenuEdit(!chkShowSecondSunTimeMenuEdit);
        //    self.valSecondHourStartTimeSunTimeMenuEditValue(null);
        //    self.valSecondHourEndTimeSunTimeMenuEditValue(null);
        //    self.valSelectSecondSunTimeMenuEdit(false);
        //};

        ////Mon
        //self.clickShowSecondMonTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondMonTimeMenuEdit = self.hasShowSecondMonTimeMenuEdit();
        //    self.hasShowSecondMonTimeMenuEdit(!chkShowSecondMonTimeMenuEdit);
        //};

        //self.clickHiddenSecondMonTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondMonTimeMenuEdit = self.hasShowSecondMonTimeMenuEdit();
        //    self.hasShowSecondMonTimeMenuEdit(!chkShowSecondMonTimeMenuEdit);
        //    self.valSecondHourStartTimeMonTimeMenuEditValue(null);
        //    self.valSecondHourEndTimeMonTimeMenuEditValue(null);
        //    self.valSelectSecondMonTimeMenuEdit(true);
        //};

        ////Tue
        //self.clickShowSecondTueTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondTueTimeMenuEdit = self.hasShowSecondTueTimeMenuEdit();
        //    self.hasShowSecondTueTimeMenuEdit(!chkShowSecondTueTimeMenuEdit);
        //    self.valSelectSecondTueTimeMenuEdit(true);
        //};

        //self.clickHiddenSecondTueTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondTueTimeMenuEdit = self.hasShowSecondTueTimeMenuEdit();
        //    self.hasShowSecondTueTimeMenuEdit(!chkShowSecondTueTimeMenuEdit);
        //    self.valSecondHourStartTimeTueTimeMenuEditValue(null);
        //    self.valSecondHourEndTimeTueTimeMenuEditValue(null);
        //    self.valSelectSecondTueTimeMenuEdit(false);
        //};

        ////Wed
        //self.clickShowSecondWedTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondWedTimeMenuEdit = self.hasShowSecondWedTimeMenuEdit();
        //    self.hasShowSecondWedTimeMenuEdit(!chkShowSecondWedTimeMenuEdit);
        //    self.valSelectSecondWedTimeMenuEdit(true);
        //};

        //self.clickHiddenSecondWedTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondWedTimeMenuEdit = self.hasShowSecondWedTimeMenuEdit();
        //    self.hasShowSecondWedTimeMenuEdit(!chkShowSecondWedTimeMenuEdit);
        //    self.valSecondHourStartTimeWedTimeMenuEditValue(null);
        //    self.valSecondHourEndTimeWedTimeMenuEditValue(null);
        //    self.valSelectSecondWedTimeMenuEdit(false);
        //};

        ////Thu
        //self.clickShowSecondThuTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondThuTimeMenuEdit = self.hasShowSecondThuTimeMenuEdit();
        //    self.hasShowSecondThuTimeMenuEdit(!chkShowSecondThuTimeMenuEdit);
        //    self.valSelectSecondThuTimeMenuEdit(true);
        //};

        //self.clickHiddenSecondThuTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondThuTimeMenuEdit = self.hasShowSecondThuTimeMenuEdit();
        //    self.hasShowSecondThuTimeMenuEdit(!chkShowSecondThuTimeMenuEdit);
        //    self.valSecondHourStartTimeThuTimeMenuEditValue(null);
        //    self.valSecondHourEndTimeThuTimeMenuEditValue(null);
        //    self.valSelectSecondThuTimeMenuEdit(false);
        //};

        ////Fri
        //self.clickShowSecondFriTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondFriTimeMenuEdit = self.hasShowSecondFriTimeMenuEdit();
        //    self.hasShowSecondFriTimeMenuEdit(!chkShowSecondFriTimeMenuEdit);
        //    self.valSelectSecondFriTimeMenuEdit(true);
        //};

        //self.clickHiddenSecondFriTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondFriTimeMenuEdit = self.hasShowSecondFriTimeMenuEdit();
        //    self.hasShowSecondFriTimeMenuEdit(!chkShowSecondFriTimeMenuEdit);
        //    self.valSecondHourStartTimeFriTimeMenuEditValue(null);
        //    self.valSecondHourEndTimeFriTimeMenuEditValue(null);
        //    self.valSelectSecondFriTimeMenuEdit(false);
        //};

        ////Sat
        //self.clickShowSecondSatTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondSatTimeMenuEdit = self.hasShowSecondSatTimeMenuEdit();
        //    self.hasShowSecondSatTimeMenuEdit(!chkShowSecondSatTimeMenuEdit);
        //    self.valSelectSecondSatTimeMenuEdit(true);
        //};

        //self.clickHiddenSecondSatTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondSatTimeMenuEdit = self.hasShowSecondSatTimeMenuEdit();
        //    self.hasShowSecondSatTimeMenuEdit(!chkShowSecondSatTimeMenuEdit);
        //    self.valSecondHourStartTimeSatTimeMenuEditValue(null);
        //    self.valSecondHourEndTimeSatTimeMenuEditValue(null);
        //    self.valSelectSecondSatTimeMenuEdit(false);
        //};

        ////AllDays
        //self.clickShowSecondAllDaysTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondAllDaysTimeMenuEdit = self.hasShowSecondAllDaysTimeMenuEdit();
        //    self.hasShowSecondAllDaysTimeMenuEdit(!chkShowSecondAllDaysTimeMenuEdit);
        //    self.valSelectSecondAllDaysTimeMenuEdit(true);
        //};

        //self.clickHiddenSecondAllDaysTimeMenuEdit = function () {
        //    var self = vmViewIndex.allSetTime.dataModal;
        //    var chkShowSecondAllDaysTimeMenuEdit = self.hasShowSecondAllDaysTimeMenuEdit();
        //    self.hasShowSecondAllDaysTimeMenuEdit(!chkShowSecondAllDaysTimeMenuEdit);
        //    self.valSecondHourStartTimeAllDaysTimeMenuEditValue(null);
        //    self.valSecondHourEndTimeAllDaysTimeMenuEditValue(null);
        //    self.valSelectSecondAllDaysTimeMenuEdit(false);
        //};
        //End Added by SMILEDINING-SA22-0034

        //Added by SMILEDINING-SA22-0034
        /*Show Multi*/
        //Sun
        self.clickShowMultiHourSunTimeMenuEdit = function () {
            var self = vmViewIndex.allSetTime.dataModal;
            var indexShowing = vmViewIndex.allSetTime.chkIndexShowingMultiHourTimeMenuEdit(self.valMultiHourSunTimeMenuArr);
            var valMultiHourTimeMenuOfIndex = self.valMultiHourSunTimeMenuArr()[indexShowing];
            valMultiHourTimeMenuOfIndex.isShow(true);
            self.hasShowMultiHourSunTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(valMultiHourTimeMenuOfIndex.sorting()));
        };

        self.clickHiddenMultiHourSunTimeMenuEdit = function (index) {
            var self = vmViewIndex.allSetTime.dataModal;
            if (!vmViewIndex.allSetTime.chkDisableHiddenMultiHourTimeMenuEdit(self.valMultiHourSunTimeMenuArr, index)) {
                var valMultiHourTimeMenuOfIndex = self.valMultiHourSunTimeMenuArr()[index];
                valMultiHourTimeMenuOfIndex.isShow(false);
                valMultiHourTimeMenuOfIndex.startTimeValue(null);
                valMultiHourTimeMenuOfIndex.endTimeValue(null);
                valMultiHourTimeMenuOfIndex.selectTimeMenuEdit(true);
                self.hasShowMultiHourSunTimeMenuEdit(true);
            }
        };

        //Mon
        self.clickShowMultiHourMonTimeMenuEdit = function () {
            var self = vmViewIndex.allSetTime.dataModal;
            var indexShowing = vmViewIndex.allSetTime.chkIndexShowingMultiHourTimeMenuEdit(self.valMultiHourMonTimeMenuArr);
            var valMultiHourTimeMenuOfIndex = self.valMultiHourMonTimeMenuArr()[indexShowing];
            valMultiHourTimeMenuOfIndex.isShow(true);
            self.hasShowMultiHourMonTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(valMultiHourTimeMenuOfIndex.sorting()));
        }
        self.clickHiddenMultiHourMonTimeMenuEdit = function (index) {
            var self = vmViewIndex.allSetTime.dataModal;
            if (!vmViewIndex.allSetTime.chkDisableHiddenMultiHourTimeMenuEdit(self.valMultiHourMonTimeMenuArr, index)) {
                var valMultiHourTimeMenuOfIndex = self.valMultiHourMonTimeMenuArr()[index];
                valMultiHourTimeMenuOfIndex.isShow(false);
                valMultiHourTimeMenuOfIndex.startTimeValue(null);
                valMultiHourTimeMenuOfIndex.endTimeValue(null);
                valMultiHourTimeMenuOfIndex.selectTimeMenuEdit(true);
                self.hasShowMultiHourMonTimeMenuEdit(true);
            }
        };

        //Tue
        self.clickShowMultiHourTueTimeMenuEdit = function () {
            var self = vmViewIndex.allSetTime.dataModal;
            var indexShowing = vmViewIndex.allSetTime.chkIndexShowingMultiHourTimeMenuEdit(self.valMultiHourTueTimeMenuArr);
            var valMultiHourTimeMenuOfIndex = self.valMultiHourTueTimeMenuArr()[indexShowing];
            valMultiHourTimeMenuOfIndex.isShow(true);
            self.hasShowMultiHourTueTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(valMultiHourTimeMenuOfIndex.sorting()));
        }
        self.clickHiddenMultiHourTueTimeMenuEdit = function (index) {
            var self = vmViewIndex.allSetTime.dataModal;
            if (!vmViewIndex.allSetTime.chkDisableHiddenMultiHourTimeMenuEdit(self.valMultiHourTueTimeMenuArr, index)) {
                var valMultiHourTimeMenuOfIndex = self.valMultiHourTueTimeMenuArr()[index];
                valMultiHourTimeMenuOfIndex.isShow(false);
                valMultiHourTimeMenuOfIndex.startTimeValue(null);
                valMultiHourTimeMenuOfIndex.endTimeValue(null);
                valMultiHourTimeMenuOfIndex.selectTimeMenuEdit(true);
                self.hasShowMultiHourTueTimeMenuEdit(true);
            }
        };

        //Wed
        self.clickShowMultiHourWedTimeMenuEdit = function () {
            var self = vmViewIndex.allSetTime.dataModal;
            var indexShowing = vmViewIndex.allSetTime.chkIndexShowingMultiHourTimeMenuEdit(self.valMultiHourWedTimeMenuArr);
            var valMultiHourTimeMenuOfIndex = self.valMultiHourWedTimeMenuArr()[indexShowing];
            valMultiHourTimeMenuOfIndex.isShow(true);
            self.hasShowMultiHourWedTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(valMultiHourTimeMenuOfIndex.sorting()));
        }
        self.clickHiddenMultiHourWedTimeMenuEdit = function (index) {
            var self = vmViewIndex.allSetTime.dataModal;
            if (!vmViewIndex.allSetTime.chkDisableHiddenMultiHourTimeMenuEdit(self.valMultiHourWedTimeMenuArr, index)) {
                var valMultiHourTimeMenuOfIndex = self.valMultiHourWedTimeMenuArr()[index];
                valMultiHourTimeMenuOfIndex.isShow(false);
                valMultiHourTimeMenuOfIndex.startTimeValue(null);
                valMultiHourTimeMenuOfIndex.endTimeValue(null);
                valMultiHourTimeMenuOfIndex.selectTimeMenuEdit(true);
                self.hasShowMultiHourWedTimeMenuEdit(true);
            }
        };

        //Thu
        self.clickShowMultiHourThuTimeMenuEdit = function () {
            var self = vmViewIndex.allSetTime.dataModal;
            var indexShowing = vmViewIndex.allSetTime.chkIndexShowingMultiHourTimeMenuEdit(self.valMultiHourThuTimeMenuArr);
            var valMultiHourTimeMenuOfIndex = self.valMultiHourThuTimeMenuArr()[indexShowing];
            valMultiHourTimeMenuOfIndex.isShow(true);
            self.hasShowMultiHourThuTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(valMultiHourTimeMenuOfIndex.sorting()));
        }
        self.clickHiddenMultiHourThuTimeMenuEdit = function (index) {
            var self = vmViewIndex.allSetTime.dataModal;
            if (!vmViewIndex.allSetTime.chkDisableHiddenMultiHourTimeMenuEdit(self.valMultiHourThuTimeMenuArr, index)) {
                var valMultiHourTimeMenuOfIndex = self.valMultiHourThuTimeMenuArr()[index];
                valMultiHourTimeMenuOfIndex.isShow(false);
                valMultiHourTimeMenuOfIndex.startTimeValue(null);
                valMultiHourTimeMenuOfIndex.endTimeValue(null);
                valMultiHourTimeMenuOfIndex.selectTimeMenuEdit(true);
                self.hasShowMultiHourThuTimeMenuEdit(true);
            }
        };

        //Fri
        self.clickShowMultiHourFriTimeMenuEdit = function () {
            var self = vmViewIndex.allSetTime.dataModal;
            var indexShowing = vmViewIndex.allSetTime.chkIndexShowingMultiHourTimeMenuEdit(self.valMultiHourFriTimeMenuArr);
            var valMultiHourTimeMenuOfIndex = self.valMultiHourFriTimeMenuArr()[indexShowing];
            valMultiHourTimeMenuOfIndex.isShow(true);
            self.hasShowMultiHourFriTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(valMultiHourTimeMenuOfIndex.sorting()));
        }
        self.clickHiddenMultiHourFriTimeMenuEdit = function (index) {
            var self = vmViewIndex.allSetTime.dataModal;
            if (!vmViewIndex.allSetTime.chkDisableHiddenMultiHourTimeMenuEdit(self.valMultiHourFriTimeMenuArr, index)) {
                var valMultiHourTimeMenuOfIndex = self.valMultiHourFriTimeMenuArr()[index];
                valMultiHourTimeMenuOfIndex.isShow(false);
                valMultiHourTimeMenuOfIndex.startTimeValue(null);
                valMultiHourTimeMenuOfIndex.endTimeValue(null);
                valMultiHourTimeMenuOfIndex.selectTimeMenuEdit(true);
                self.hasShowMultiHourFriTimeMenuEdit(true);
            }
        };

        //Sat
        self.clickShowMultiHourSatTimeMenuEdit = function () {
            var self = vmViewIndex.allSetTime.dataModal;
            var indexShowing = vmViewIndex.allSetTime.chkIndexShowingMultiHourTimeMenuEdit(self.valMultiHourSatTimeMenuArr);
            var valMultiHourTimeMenuOfIndex = self.valMultiHourSatTimeMenuArr()[indexShowing];
            valMultiHourTimeMenuOfIndex.isShow(true);
            self.hasShowMultiHourSatTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(valMultiHourTimeMenuOfIndex.sorting()));
        }
        self.clickHiddenMultiHourSatTimeMenuEdit = function (index) {
            var self = vmViewIndex.allSetTime.dataModal;
            if (!vmViewIndex.allSetTime.chkDisableHiddenMultiHourTimeMenuEdit(self.valMultiHourSatTimeMenuArr, index)) {
                var valMultiHourTimeMenuOfIndex = self.valMultiHourSatTimeMenuArr()[index];
                valMultiHourTimeMenuOfIndex.isShow(false);
                valMultiHourTimeMenuOfIndex.startTimeValue(null);
                valMultiHourTimeMenuOfIndex.endTimeValue(null);
                valMultiHourTimeMenuOfIndex.selectTimeMenuEdit(true);
                self.hasShowMultiHourSatTimeMenuEdit(true);
            }
        };

        //AllDays
        self.clickShowMultiHourAllDaysTimeMenuEdit = function () {
            var self = vmViewIndex.allSetTime.dataModal;
            var indexShowing = vmViewIndex.allSetTime.chkIndexShowingMultiHourTimeMenuEdit(self.valMultiHourAllDaysTimeMenuArr);
            var valMultiHourTimeMenuOfIndex = self.valMultiHourAllDaysTimeMenuArr()[indexShowing];
            valMultiHourTimeMenuOfIndex.isShow(true);
            self.hasShowMultiHourAllDaysTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(valMultiHourTimeMenuOfIndex.sorting()));
        }
        self.clickHiddenMultiHourAllDaysTimeMenuEdit = function (index) {
            var self = vmViewIndex.allSetTime.dataModal;
            if (!vmViewIndex.allSetTime.chkDisableHiddenMultiHourTimeMenuEdit(self.valMultiHourAllDaysTimeMenuArr, index)) {
                var valMultiHourTimeMenuOfIndex = self.valMultiHourAllDaysTimeMenuArr()[index];
                valMultiHourTimeMenuOfIndex.isShow(false);
                valMultiHourTimeMenuOfIndex.startTimeValue(null);
                valMultiHourTimeMenuOfIndex.endTimeValue(null);
                valMultiHourTimeMenuOfIndex.selectTimeMenuEdit(true);
                self.hasShowMultiHourAllDaysTimeMenuEdit(true);
            }
        };

        self.chkDisableHiddenMultiHourTimeMenuEdit = function (dataValMultiHourTimeMenuArr, index) {
            return !(dataValMultiHourTimeMenuArr()[index + 1] == null || !dataValMultiHourTimeMenuArr()[index + 1].isShow());
        }

        self.chkIndexShowingMultiHourTimeMenuEdit = function (dataValMultiHourTimeMenuArr) {
            var prevSorting = 1;
            var index = 0;
            ko.utils.arrayForEach(dataValMultiHourTimeMenuArr(), function (item) {
                if (item.sorting() > prevSorting && item.isShow()) { // check last index of show
                    index = (item.sorting() - cTimeMenu_StartSortingMultiHour) + 1;
                }
                prevSorting = item.isShow() ? item.sorting() : prevSorting;
            });
            return index;
        };
        //End Added by SMILEDINING-SA22-0034

        self.btnCloseEditSetTimeMenu = function () {
            if (vmViewIndex.allSetTime.typeTimeName != "") {
                switch (vmViewIndex.allSetTime.typeTimeName()) {
                    case "TimeMenu":
                        DataTimeMenu(vmViewIndex.allSetTime.dataListTimeMenu());
                        vmViewIndex.allSetTime.hasShowFoodSet(false);
                        hiddenShowTimeMenuEdit();
                        break;
                    case "TimePickUp":
                        DataTimeMenu(vmViewIndex.allSetTime.dataListTimePickUp());
                        vmViewIndex.allSetTime.hasShowFoodSet(false);
                        hiddenShowTimeMenuEdit();
                        break;
                    case "TimeDelivery":
                        DataTimeMenu(vmViewIndex.allSetTime.dataListTimeDelivery());
                        vmViewIndex.allSetTime.hasShowFoodSet(false);
                        hiddenShowTimeMenuEdit();
                        break;
                    case "FoodSetTimeMap":
                        DataTimeMenu(vmViewIndex.allSetTime.dataListFoodSetTimeMap());
                        vmViewIndex.allSetTime.hasShowFoodSet(true);
                        //Add by SMILEDINING-SA18-0024
                        vmViewIndex.allSetTime.selectFoodSet({
                            value: _.first(vmViewIndex.allSetTime.foodsetidkey())
                        });
                        //End Add by SMILEDINING-SA18-0024
                        hiddenShowTimeMenuEdit();
                        break;
                }
            }
        };
        self.btnClickSave = function () {
            //Modified by SMILEDINING-SA22-0034
            //vmViewIndex.allSetTime.dataViewModel([]);
            //var data = vmViewIndex.allSetTime.dataModal;
            //vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(data.valActive24HourSunTimeMenuEdit(), data.valSelectFirstSunTimeMenuEdit(), data.valSelectSecondSunTimeMenuEdit(), cDay_Sunday,
            //                                                                data.valFirstHourStartTimeSunTimeMenuEditValue(), data.valFirstHourEndTimeSunTimeMenuEditValue(), data.valSecondHourStartTimeSunTimeMenuEditValue(),
            //                                                                data.valSecondHourEndTimeSunTimeMenuEditValue(), !data.hasShowSecondSunTimeMenuEdit()));
            //vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(data.valActive24HourMonTimeMenuEdit(), data.valSelectFirstMonTimeMenuEdit(), data.valSelectSecondMonTimeMenuEdit(), cDay_Monday,
            //                                                                data.valFirstHourStartTimeMonTimeMenuEditValue(), data.valFirstHourEndTimeMonTimeMenuEditValue(), data.valSecondHourStartTimeMonTimeMenuEditValue(),
            //                                                                data.valSecondHourEndTimeMonTimeMenuEditValue(), !data.hasShowSecondMonTimeMenuEdit()));
            //vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(data.valActive24HourTueTimeMenuEdit(), data.valSelectFirstTueTimeMenuEdit(), data.valSelectSecondTueTimeMenuEdit(), cDay_Tuesday,
            //                                                                data.valFirstHourStartTimeTueTimeMenuEditValue(), data.valFirstHourEndTimeTueTimeMenuEditValue(), data.valSecondHourStartTimeTueTimeMenuEditValue(),
            //                                                                data.valSecondHourEndTimeTueTimeMenuEditValue(), !data.hasShowSecondTueTimeMenuEdit()));
            //vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(data.valActive24HourWedTimeMenuEdit(), data.valSelectFirstWedTimeMenuEdit(), data.valSelectSecondWedTimeMenuEdit(), cDay_Wednesday,
            //                                                                data.valFirstHourStartTimeWedTimeMenuEditValue(), data.valFirstHourEndTimeWedTimeMenuEditValue(), data.valSecondHourStartTimeWedTimeMenuEditValue(),
            //                                                                data.valSecondHourEndTimeWedTimeMenuEditValue(), !data.hasShowSecondWedTimeMenuEdit()));
            //vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(data.valActive24HourThuTimeMenuEdit(), data.valSelectFirstThuTimeMenuEdit(), data.valSelectSecondThuTimeMenuEdit(), cDay_Thursday,
            //                                                                data.valFirstHourStartTimeThuTimeMenuEditValue(), data.valFirstHourEndTimeThuTimeMenuEditValue(), data.valSecondHourStartTimeThuTimeMenuEditValue(),
            //                                                                data.valSecondHourEndTimeThuTimeMenuEditValue(), !data.hasShowSecondThuTimeMenuEdit()));
            //vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(data.valActive24HourFriTimeMenuEdit(), data.valSelectFirstFriTimeMenuEdit(), data.valSelectSecondFriTimeMenuEdit(), cDay_Friday,
            //                                                                data.valFirstHourStartTimeFriTimeMenuEditValue(), data.valFirstHourEndTimeFriTimeMenuEditValue(), data.valSecondHourStartTimeFriTimeMenuEditValue(),
            //                                                                data.valSecondHourEndTimeFriTimeMenuEditValue(), !data.hasShowSecondFriTimeMenuEdit()));
            //vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(data.valActive24HourSatTimeMenuEdit(), data.valSelectFirstSatTimeMenuEdit(), data.valSelectSecondSatTimeMenuEdit(), cDay_Saturday,
            //                                                                data.valFirstHourStartTimeSatTimeMenuEditValue(), data.valFirstHourEndTimeSatTimeMenuEditValue(), data.valSecondHourStartTimeSatTimeMenuEditValue(),
            //                                                                data.valSecondHourEndTimeSatTimeMenuEditValue(), !data.hasShowSecondSatTimeMenuEdit()));
            //vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(data.valActive24HourAllDaysTimeMenuEdit(), data.valSelectFirstAllDaysTimeMenuEdit(), data.valSelectSecondAllDaysTimeMenuEdit(), cDay_AllDay,
            //                                                                data.valFirstHourStartTimeAllDaysTimeMenuEditValue(), data.valFirstHourEndTimeAllDaysTimeMenuEditValue(), data.valSecondHourStartTimeAllDaysTimeMenuEditValue(),
            //                                                                data.valSecondHourEndTimeAllDaysTimeMenuEditValue(), !data.hasShowSecondAllDaysTimeMenuEdit()));
            
            //$("#submitSetAllTime").click();
            //End Modified by SMILEDINING-SA22-0034

            //Added by SMILEDINING-SA22-0034
            vmViewIndex.allSetTime.dataViewModel([]);
            var data = vmViewIndex.allSetTime.dataModal;
            vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(cDay_Sunday, data.valActive24HourSunTimeMenuEdit(), data.valSelectFirstSunTimeMenuEdit(), 
                                                            data.valFirstHourStartTimeSunTimeMenuEditValue(), data.valFirstHourEndTimeSunTimeMenuEditValue(), data.valMultiHourSunTimeMenuArr()));
            vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(cDay_Monday, data.valActive24HourMonTimeMenuEdit(), data.valSelectFirstMonTimeMenuEdit(),
                                                            data.valFirstHourStartTimeMonTimeMenuEditValue(), data.valFirstHourEndTimeMonTimeMenuEditValue(), data.valMultiHourMonTimeMenuArr()));
            vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(cDay_Tuesday, data.valActive24HourTueTimeMenuEdit(), data.valSelectFirstTueTimeMenuEdit(),
                                                            data.valFirstHourStartTimeTueTimeMenuEditValue(), data.valFirstHourEndTimeTueTimeMenuEditValue(), data.valMultiHourTueTimeMenuArr()));
            vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(cDay_Wednesday, data.valActive24HourWedTimeMenuEdit(), data.valSelectFirstWedTimeMenuEdit(),
                                                            data.valFirstHourStartTimeWedTimeMenuEditValue(), data.valFirstHourEndTimeWedTimeMenuEditValue(), data.valMultiHourWedTimeMenuArr()));
            vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(cDay_Thursday, data.valActive24HourThuTimeMenuEdit(), data.valSelectFirstThuTimeMenuEdit(),
                                                            data.valFirstHourStartTimeThuTimeMenuEditValue(), data.valFirstHourEndTimeThuTimeMenuEditValue(), data.valMultiHourThuTimeMenuArr()));
            vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(cDay_Friday, data.valActive24HourFriTimeMenuEdit(), data.valSelectFirstFriTimeMenuEdit(),
                                                            data.valFirstHourStartTimeFriTimeMenuEditValue(), data.valFirstHourEndTimeFriTimeMenuEditValue(), data.valMultiHourFriTimeMenuArr()));
            vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(cDay_Saturday, data.valActive24HourSatTimeMenuEdit(), data.valSelectFirstSatTimeMenuEdit(),
                                                            data.valFirstHourStartTimeSatTimeMenuEditValue(), data.valFirstHourEndTimeSatTimeMenuEditValue(), data.valMultiHourSatTimeMenuArr()));
            vmViewIndex.allSetTime.dataViewModel.push(new DataTimeViewModel(cDay_AllDay, data.valActive24HourAllDaysTimeMenuEdit(), data.valSelectFirstAllDaysTimeMenuEdit(),
                                                            data.valFirstHourStartTimeAllDaysTimeMenuEditValue(), data.valFirstHourEndTimeAllDaysTimeMenuEditValue(), data.valMultiHourAllDaysTimeMenuArr()));
            
            $("#submitSetAllTime").click();
            //End Added by SMILEDINING-SA22-0034
        };

    } else {
        ko.mapping.fromJS(data.listFoodSet, {}, vmViewIndex.allSetTime.dataListFoodSetName);
        ko.mapping.fromJS(data.listFoodSetTimeMap, {}, vmViewIndex.allSetTime.dataListFoodSetTimeMap);
        ko.mapping.fromJS(data.listTimeMenu, {}, vmViewIndex.allSetTime.dataListTimeMenu);
        ko.mapping.fromJS(data.listTimePickUp, {}, vmViewIndex.allSetTime.dataListTimePickUp);
        ko.mapping.fromJS(data.listTimeDelivery, {}, vmViewIndex.allSetTime.dataListTimeDelivery);

        DataTimeMenu(vmViewIndex.allSetTime.dataListTimeMenu());

        if (!isEmpty(vmViewIndex.allSetTime.dataListFoodSetName())) {
            vmViewIndex.allSetTime.selectListFoodSetId.push(_.first(vmViewIndex.allSetTime.dataListFoodSetName()).foodSetId());
            vmViewIndex.allSetTime.foodsetidkey.push(_.first(vmViewIndex.allSetTime.dataListFoodSetName()).foodSetId()) //Add and End by SMILEDINING-SA18-0024
        }
        //SELECT FOODSET 
        //Add by SMILEDINING-SA18-0024
        self.storefoodset = new DevExpress.data.ArrayStore({
            data: [],
            key: 'foodSetId'
        });

        _.forEach(vmViewIndex.allSetTime.dataListFoodSetName(), function (value) {
            self.storefoodset.insert(value);
        });

        vmViewIndex.allSetTime.selectFoodSet({
            //Modified by SMILEDINING-SA18-0024
            //  dataSource: new DevExpress.data.ArrayStore({
            //      data: vmViewIndex.allSetTime.dataListFoodSetName(),
            //      key: 'foodSetId'
            //  }),
            //End Modified by SMILEDINING-SA18-0024
            dataSource: self.storefoodset,
            //End Add by SMILEDINING-SA18-0024
            displayExpr: 'foodSetName',
            valueExpr: 'foodSetId',
            searchEnabled: true,
            value: _.first(vmViewIndex.allSetTime.selectListFoodSetId()), // Default First data
            placeholder: "Select..",
            onValueChanged: function (v) {
                if (v.value === "" || v.value === null || v.value === undefined || v.value.length == 0) {
                    v.component.option("isValid", false);
                } else {
                    v.component.option("isValid", true);
                }

                //var foodSetTimeMap = ajaxGetFoodSetTimeMapById(cJsonGetFoodSetTimeMapById, v.value);  //Modified and End by SMILEDINING-SA20-0006
                //Added by SMILEDINING-SA20-0006
                var foodSetTimeMap = ajaxGetFoodSetTimeMapById(cJsonGetFoodSetTimeMapById, v.value, products.cSmileDining);
                if (vmViewIndex.allSetting.isSmileDining() == false) {
                    foodSetTimeMap = ajaxGetFoodSetTimeMapById(cJsonGetFoodSetTimeMapById, v.value, products.cSmileContactless);
                }
                //End Added by SMILEDINING-SA20-0006
                if (!isEmpty(foodSetTimeMap)) {
                    DataTimeMenu(JSON.parse(foodSetTimeMap));
                } else {
                    DataTimeMenu(null);
                }

                vmViewIndex.allSetTime.selectListFoodSetId([]);
                vmViewIndex.allSetTime.selectListFoodSetId.push(v.value);
            }
        });

    } //end else

    //function ajaxGetFoodSetTimeMapById(jsonObj, foodSetId2) {     //Modified and End by SMILEDINING-SA20-0006
    function ajaxGetFoodSetTimeMapById(jsonObj, foodSetId2, id) {   //Added and End by SMILEDINING-SA20-0006
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        //var passData = { 'foodSetId': foodSetId2 };       //Modified and End by SMILEDINING-SA20-0006
        var passData = { 'foodSetId': foodSetId2, 'key': id }; //Added and End by SMILEDINING-SA20-0006
        return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
    };
}//end AllTimeViewModel

function hiddenShowTimeMenuEdit() {
    divShowTimeSun.hide();
    divShowTimeMon.hide();
    divShowTimeTue.hide();
    divShowTimeWed.hide();
    divShowTimeThu.hide();
    divShowTimeFri.hide();
    divShowTimeSat.hide();
    divShowTimeAlldays.hide();
};

function removeBorderClassTimeMenuEdit() {
    var modalEditTime = $('#modalEditTimeMenu');
    modalEditTime.find('.btn-circle.sun').removeClass('is-active-allday');
    modalEditTime.find('.btn-circle.mon').removeClass('is-active-allday');
    modalEditTime.find('.btn-circle.tue').removeClass('is-active-allday');
    modalEditTime.find('.btn-circle.wed').removeClass('is-active-allday');
    modalEditTime.find('.btn-circle.thu').removeClass('is-active-allday');
    modalEditTime.find('.btn-circle.fri').removeClass('is-active-allday');
    modalEditTime.find('.btn-circle.sat').removeClass('is-active-allday');
    modalEditTime.find('.btn-circle.sat').removeClass('is-active-allday');

    modalEditTime.find('.btn-circle.sun').removeClass('is-active-sun');
    modalEditTime.find('.btn-circle.mon').removeClass('is-active-mon');
    modalEditTime.find('.btn-circle.tue').removeClass('is-active-tue');
    modalEditTime.find('.btn-circle.wed').removeClass('is-active-wed');
    modalEditTime.find('.btn-circle.thu').removeClass('is-active-thu');
    modalEditTime.find('.btn-circle.fri').removeClass('is-active-fri');
    modalEditTime.find('.btn-circle.sat').removeClass('is-active-sat');
    modalEditTime.find('.btn-circle.sat').removeClass('is-active-sat');
    modalEditTime.find('.h6 a').removeClass('link-active-allday');
};

function hideErorrTimePeriodTimeMenuEdit() {
    var dataSunTimeMenu = divShowTimeSun;
    var dataMonTimeMenu = divShowTimeMon;
    var dataTueTimeMenu = divShowTimeTue;
    var dataWedTimeMenu = divShowTimeWed;
    var dataThuTimeMenu = divShowTimeThu;
    var dataFriTimeMenu = divShowTimeFri;
    var dataSatTimeMenu = divShowTimeSat;
    var dataAllDaysTimeMenu = divShowTimeAlldays;

    //Not Show Error
    dataSunTimeMenu.find('.gb_color-message-error').hide();
    dataMonTimeMenu.find('.gb_color-message-error').hide();
    dataTueTimeMenu.find('.gb_color-message-error').hide();
    dataWedTimeMenu.find('.gb_color-message-error').hide();
    dataThuTimeMenu.find('.gb_color-message-error').hide();
    dataFriTimeMenu.find('.gb_color-message-error').hide();
    dataSatTimeMenu.find('.gb_color-message-error').hide();
    dataAllDaysTimeMenu.find('.gb_color-message-error').hide();

    dataSunTimeMenu.find('input:empty.input-validation-error').removeClass(cCssInputValidateError);
    dataMonTimeMenu.find('input:empty.input-validation-error').removeClass(cCssInputValidateError);
    dataTueTimeMenu.find('input:empty.input-validation-error').removeClass(cCssInputValidateError);
    dataWedTimeMenu.find('input:empty.input-validation-error').removeClass(cCssInputValidateError);
    dataThuTimeMenu.find('input:empty.input-validation-error').removeClass(cCssInputValidateError);
    dataFriTimeMenu.find('input:empty.input-validation-error').removeClass(cCssInputValidateError);
    dataSatTimeMenu.find('input:empty.input-validation-error').removeClass(cCssInputValidateError);
    dataAllDaysTimeMenu.find('input:empty.input-validation-error').removeClass(cCssInputValidateError);
};

function AllMapViewModel(data) {
    var self = this;
    self.settingDictionaryMapZone = ko.observableArray([]);
    self.settingDictionaryMapZonePrice = ko.observableArray([]);
    self.listMapZoneMile = ko.observableArray([]);
    self.shopMapCode = ko.observable("");
    self.shopLatitude = ko.observable("");
    self.shopLongitude = ko.observable("");
    self.typeMap = ko.observable(0);
    self.mapZone = ko.observableArray([]);
    self.tmpMapZone = self.mapZone();

    self.blurPrice = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        //self.listMapZoneMile.price(value);        //Modified and End by SMILEDINING-SA20-0043#2
        //Added by SMILEDINING-SA20-0043#2
        var arrFilter = ko.utils.arrayFilter(self.listMapZoneMile(), function (item) {
            return item.mapZoneId() == data.mapZoneId();
        });
        _.first(arrFilter).price(value);
        //End Added by SMILEDINING-SA20-0043#2
    };

    //Added by SMILEDINING-SA20-0043#2
    self.blurStartMile = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        var arrFilter = ko.utils.arrayFilter(self.listMapZoneMile(), function (item) {
            return item.mapZoneId() == data.mapZoneId();
        });
        _.first(arrFilter).startMile(value);
    };
    self.blurEndMile = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        var arrFilter = ko.utils.arrayFilter(self.listMapZoneMile(), function (item) {
            return item.mapZoneId() == data.mapZoneId();
        });
        _.first(arrFilter).endMile(value);
    };
    //End Added by SMILEDINING-SA20-0043#2

    //mapzone
    self.visibleZone1 = ko.observable(true);
    self.visibleZone2 = ko.observable(false);
    self.visibleZone3 = ko.observable(false);

    self.clickZone1 = function () {
        self.visibleZone1(true);
        self.visibleZone2(false);
        self.visibleZone3(false);
        getMap(_.first(vmViewIndex.allMapZone.mapZone()).MapZoneValue(), parseFloat(vmViewIndex.globalConfig.shopLatitude()), parseFloat(vmViewIndex.globalConfig.shopLongitude()), 1);
    };

    self.clickZone2 = function () {
        self.visibleZone1(false);
        self.visibleZone2(true);
        self.visibleZone3(false);
        getMap(vmViewIndex.allMapZone.mapZone()[1].MapZoneValue(), parseFloat(vmViewIndex.globalConfig.shopLatitude()), parseFloat(vmViewIndex.globalConfig.shopLongitude()), 2);
    };

    self.clickZone3 = function () {
        self.visibleZone1(false);
        self.visibleZone2(false);
        self.visibleZone3(true);
        getMap(vmViewIndex.allMapZone.mapZone()[2].MapZoneValue(), parseFloat(vmViewIndex.globalConfig.shopLatitude()), parseFloat(vmViewIndex.globalConfig.shopLongitude()), 3);
    };

    self.switchMapZone = ko.observable(true);

    self.clickChooseDrawMaps = function () {
        self.typeMap(0);
        getMap(_.first(vmViewIndex.allMapZone.mapZone()).MapZoneValue(), parseFloat(vmViewIndex.globalConfig.shopLatitude()), parseFloat(vmViewIndex.globalConfig.shopLongitude()), 1);
    };
    self.clickChooseSetMile = function () {
        self.typeMap(1);
    };

    self.visibleMileZone1 = ko.observable(true);
    self.visibleMileZone2 = ko.observable(false);
    self.visibleMileZone3 = ko.observable(false);

    self.clickSetMileZone1 = function () {
        self.visibleMileZone1(true);
        self.visibleMileZone2(false);
        self.visibleMileZone3(false);
    };

    self.clickSetMileZone2 = function () {
        self.visibleMileZone1(false);
        self.visibleMileZone2(true);
        self.visibleMileZone3(false);
    };

    self.clickSetMileZone3 = function () {
        self.visibleMileZone1(false);
        self.visibleMileZone2(false);
        self.visibleMileZone3(true);
    };

    //Added by SMILEDINING-SA19-0005   
    self.hasDeliveryFreeTime = ko.observable(true);
    self.enableSaveChanges = ko.observable(false);

    self.mapZone1Id = ko.observable(null);
    self.mapZone2Id = ko.observable(null);
    self.mapZone3Id = ko.observable(null);

    dataDeliveryFreeTime = divShowDeliveryFreeTime;

    showModalDeliveryFreeTime = modalDeliveryFreeTime;

    self.editStartTime = ko.observable(null);
    self.editEndTime = ko.observable(null);
    self.editMapZoneID = ko.observable(null);
    self.editShopMapCode = ko.observable(null);
    self.editDeliveryFreeTimeID = ko.observable(null);
    self.editActiveDeliveryFreeTime = ko.observable(false);

    // Draw Map Zone1
    self.startDeliveryFreeTimeDrawMapZone1 = ko.observable('');
    self.endDeliveryFreeTimeDrawMapZone1 = ko.observable('');
    self.activeDeliveryDrawMapZone1 = ko.observable('');
    self.activeDeliveryFreeTimeDrawMapZone1 = ko.observable(false);
    self.disableDeliveryFreeTimeDrawMapZone1 = ko.observable(true);
    self.valStartTimeDrawMapZone1 = ko.observable(null);
    self.valEndTimeDrawMapZone1 = ko.observable(null);
    self.valShopMapCodeDrawMapZone1 = ko.observable(null);
    self.mapZoneIdDrawMapZone1 = ko.observable(null);
    self.deliveryFreeTimeIdDrawMapZone1 = ko.observable(null);

    self.startDeliveryFreeTimeDrawMapZone1({
        max: self.valEndTimeDrawMapZone1,
        pickerType: "list",
        type: "time",
        value: self.valStartTimeDrawMapZone1,
        disabled: self.disableDeliveryFreeTimeDrawMapZone1,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valStartTimeDrawMapZone1(moment(v.value, moment_time_format_hhmmss));
            self.editStartTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.endDeliveryFreeTimeDrawMapZone1({
        min: self.valStartTimeDrawMapZone1,
        type: "time",
        pickerType: "list",
        value: self.valEndTimeDrawMapZone1,
        disabled: self.disableDeliveryFreeTimeDrawMapZone1,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valEndTimeDrawMapZone1(moment(v.value, moment_time_format_hhmmss));
            self.editEndTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });


    self.activeDeliveryDrawMapZone1 = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.activeDeliveryFreeTimeDrawMapZone1,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {

            if (item.value == true) {
                self.disableDeliveryFreeTimeDrawMapZone1(false);
                self.editActiveDeliveryFreeTime(true);
            } else {
                self.disableDeliveryFreeTimeDrawMapZone1(true);
                self.editActiveDeliveryFreeTime(false);
            }
        }
    });

    // Draw Map Zone2
    self.startDeliveryFreeTimeDrawMapZone2 = ko.observable('');
    self.endDeliveryFreeTimeDrawMapZone2 = ko.observable('');
    self.activeDeliveryDrawMapZone2 = ko.observable('');
    self.activeDeliveryFreeTimeDrawMapZone2 = ko.observable(false);
    self.disableDeliveryFreeTimeDrawMapZone2 = ko.observable(true);
    self.valStartTimeDrawMapZone2 = ko.observable(null);
    self.valEndTimeDrawMapZone2 = ko.observable(null);
    self.valShopMapCodeDrawMapZone2 = ko.observable(null);
    self.mapZoneIdDrawMapZone2 = ko.observable(null);
    self.deliveryFreeTimeIdDrawMapZone2 = ko.observable(null);

    self.startDeliveryFreeTimeDrawMapZone2({
        max: self.valEndTimeDrawMapZone2,
        pickerType: "list",
        type: "time",
        value: self.valStartTimeDrawMapZone2,
        disabled: self.disableDeliveryFreeTimeDrawMapZone2,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }

            self.valStartTimeDrawMapZone2(moment(v.value, moment_time_format_hhmmss));
            self.editStartTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.endDeliveryFreeTimeDrawMapZone2({
        min: self.valStartTimeDrawMapZone2,
        type: "time",
        pickerType: "list",
        value: self.valEndTimeDrawMapZone2,
        disabled: self.disableDeliveryFreeTimeDrawMapZone2,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }

            self.valEndTimeDrawMapZone2(moment(v.value, moment_time_format_hhmmss));
            self.editEndTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.activeDeliveryDrawMapZone2 = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.activeDeliveryFreeTimeDrawMapZone2,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {

            if (item.value == true) {
                self.disableDeliveryFreeTimeDrawMapZone2(false);
                self.editActiveDeliveryFreeTime(true);
            } else {
                self.disableDeliveryFreeTimeDrawMapZone2(true);
                self.editActiveDeliveryFreeTime(false);
            }
        }
    });

    // Draw Map Zone3
    self.startDeliveryFreeTimeDrawMapZone3 = ko.observable('');
    self.endDeliveryFreeTimeDrawMapZone3 = ko.observable('');
    self.activeDeliveryDrawMapZone3 = ko.observable('');
    self.activeDeliveryFreeTimeDrawMapZone3 = ko.observable(false);
    self.disableDeliveryFreeTimeDrawMapZone3 = ko.observable(true);
    self.valStartTimeDrawMapZone3 = ko.observable(null);
    self.valEndTimeDrawMapZone3 = ko.observable(null);
    self.valShopMapCodeDrawMapZone3 = ko.observable(null);
    self.mapZoneIdDrawMapZone3 = ko.observable(null);
    self.deliveryFreeTimeIdDrawMapZone3 = ko.observable(null);

    self.startDeliveryFreeTimeDrawMapZone3({
        max: self.valEndTimeDrawMapZone3,
        pickerType: "list",
        type: "time",
        value: self.valStartTimeDrawMapZone3,
        disabled: self.disableDeliveryFreeTimeDrawMapZone3,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valStartTimeDrawMapZone3(moment(v.value, moment_time_format_hhmmss));
            self.editStartTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.endDeliveryFreeTimeDrawMapZone3({
        min: self.valStartTimeDrawMapZone3,
        type: "time",
        pickerType: "list",
        value: self.valEndTimeDrawMapZone3,
        disabled: self.disableDeliveryFreeTimeDrawMapZone3,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valEndTimeDrawMapZone3(moment(v.value, moment_time_format_hhmmss));
            self.editEndTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.activeDeliveryDrawMapZone3 = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.activeDeliveryFreeTimeDrawMapZone3,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {

            if (item.value == true) {
                self.disableDeliveryFreeTimeDrawMapZone3(false);
                self.editActiveDeliveryFreeTime(true);
            } else {
                self.disableDeliveryFreeTimeDrawMapZone3(true);
                self.editActiveDeliveryFreeTime(false);
            }
        }
    });

    // Set Mile Zone1
    self.startDeliveryFreeTimeSetMileZone1 = ko.observable('');
    self.endDeliveryFreeTimeSetMileZone1 = ko.observable('');
    self.activeDeliverySetMileZone1 = ko.observable('');
    self.activeDeliveryFreeTimeSetMileZone1 = ko.observable(false);
    self.disableDeliveryFreeTimeSetMileZone1 = ko.observable(true);
    self.valStartTimeSetMileZone1 = ko.observable(null);
    self.valEndTimeSetMileZone1 = ko.observable(null);
    self.valShopMapCodeSetMileZone1 = ko.observable(null);
    self.mapZoneIdSetMileZone1 = ko.observable(null);
    self.deliveryFreeTimeIdSetMileZone1 = ko.observable(null);

    self.startDeliveryFreeTimeSetMileZone1({
        max: self.valEndTimeSetMileZone1,
        pickerType: "list",
        type: "time",
        value: self.valStartTimeSetMileZone1,
        disabled: self.disableDeliveryFreeTimeSetMileZone1,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valStartTimeSetMileZone1(moment(v.value, moment_time_format_hhmmss));
            self.editStartTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.endDeliveryFreeTimeSetMileZone1({
        min: self.valStartTimeSetMileZone1,
        type: "time",
        pickerType: "list",
        value: self.valEndTimeSetMileZone1,
        disabled: self.disableDeliveryFreeTimeSetMileZone1,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valEndTimeSetMileZone1(moment(v.value, moment_time_format_hhmmss));
            self.editEndTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.activeDeliverySetMileZone1 = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.activeDeliveryFreeTimeSetMileZone1,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {

            if (item.value == true) {
                self.disableDeliveryFreeTimeSetMileZone1(false);
                self.editActiveDeliveryFreeTime(true);
            } else {
                self.disableDeliveryFreeTimeSetMileZone1(true);
                self.editActiveDeliveryFreeTime(false);
            }
        }
    });

    // Set Mile Zone2
    self.startDeliveryFreeTimeSetMileZone2 = ko.observable('');
    self.endDeliveryFreeTimeSetMileZone2 = ko.observable('');
    self.activeDeliverySetMileZone2 = ko.observable('');
    self.activeDeliveryFreeTimeSetMileZone2 = ko.observable(false);
    self.disableDeliveryFreeTimeSetMileZone2 = ko.observable(true);
    self.valStartTimeSetMileZone2 = ko.observable(null);
    self.valEndTimeSetMileZone2 = ko.observable(null);
    self.valShopMapCodeSetMileZone2 = ko.observable(null);
    self.mapZoneIdSetMileZone2 = ko.observable(null);
    self.deliveryFreeTimeIdSetMileZone2 = ko.observable(null);

    self.startDeliveryFreeTimeSetMileZone2({
        max: self.valEndTimeSetMileZone2,
        pickerType: "list",
        type: "time",
        value: self.valStartTimeSetMileZone2,
        disabled: self.disableDeliveryFreeTimeSetMileZone2,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valStartTimeSetMileZone2(moment(v.value, moment_time_format_hhmmss));
            self.editStartTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.endDeliveryFreeTimeSetMileZone2({
        min: self.valStartTimeSetMileZone2,
        type: "time",
        pickerType: "list",
        value: self.valEndTimeSetMileZone2,
        disabled: self.disableDeliveryFreeTimeSetMileZone2,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valEndTimeSetMileZone2(moment(v.value, moment_time_format_hhmmss));
            self.editEndTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.activeDeliverySetMileZone2 = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.activeDeliveryFreeTimeSetMileZone2,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {

            if (item.value == true) {
                self.disableDeliveryFreeTimeSetMileZone2(false)
                self.editActiveDeliveryFreeTime(true);
            } else {
                self.disableDeliveryFreeTimeSetMileZone2(true)
                self.editActiveDeliveryFreeTime(false);
            }
        }
    });

    // Set Mile Zone3
    self.startDeliveryFreeTimeSetMileZone3 = ko.observable('');
    self.endDeliveryFreeTimeSetMileZone3 = ko.observable('');
    self.activeDeliverySetMileZone3 = ko.observable('');
    self.activeDeliveryFreeTimeSetMileZone3 = ko.observable(false);
    self.disableDeliveryFreeTimeSetMileZone3 = ko.observable(true);
    self.valStartTimeSetMileZone3 = ko.observable(null);
    self.valEndTimeSetMileZone3 = ko.observable(null);
    self.valShopMapCodeSetMileZone3 = ko.observable(null);
    self.mapZoneIdSetMileZone3 = ko.observable(null);
    self.deliveryFreeTimeIdSetMileZone3 = ko.observable(null);

    self.startDeliveryFreeTimeSetMileZone3({
        max: self.valEndTimeSetMileZone3,
        pickerType: "list",
        type: "time",
        value: self.valStartTimeSetMileZone3,
        disabled: self.disableDeliveryFreeTimeSetMileZone3,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valStartTimeSetMileZone3(moment(v.value, moment_time_format_hhmmss));
            self.editStartTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.endDeliveryFreeTimeSetMileZone3({
        min: self.valStartTimeSetMileZone3,
        type: "time",
        pickerType: "list",
        value: self.valEndTimeSetMileZone3,
        disabled: self.disableDeliveryFreeTimeSetMileZone3,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option("isValid", false);
            }
            self.valEndTimeSetMileZone3(moment(v.value, moment_time_format_hhmmss));
            self.editEndTime(moment(v.value).format(moment_time_format_HHmmss));
            self.enableSaveChanges(true);
        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {
                self.enableSaveChanges(false);
            } else {
                self.enableSaveChanges(true);
            }
        }
    });

    self.activeDeliverySetMileZone3 = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.activeDeliveryFreeTimeSetMileZone3,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {

            if (item.value == true) {
                self.disableDeliveryFreeTimeSetMileZone3(false);
                self.editActiveDeliveryFreeTime(true);
            } else {
                self.disableDeliveryFreeTimeSetMileZone3(true);
                self.editActiveDeliveryFreeTime(false);
            }
        }
    });


    // ==========================


    self.clickDeliveryFreeTime = function () {

        var chkDeliveryFreeTime = self.hasDeliveryFreeTime();
        self.hasDeliveryFreeTime(chkDeliveryFreeTime);

        if (self.hasDeliveryFreeTime()) {

            // $("#modalDeliveryFreeTime").modal();

            dataDeliveryFreeTime.hide();

            self.editStartTime(null);
            self.editEndTime(null);
            self.editMapZoneID(null);
            self.editShopMapCode(null);
            self.editDeliveryFreeTimeID(null);
            self.editActiveDeliveryFreeTime(false);

            if (self.typeMap() == 0) { //Draw Map Zone                 
                if (self.visibleZone1()) { // Draw Map Zone1

                    if (self.mapZoneIdDrawMapZone1() == null) {
                        self.mapZoneIdDrawMapZone1(self.mapZone1Id());
                        self.valShopMapCodeDrawMapZone1(self.typeMap());
                    }

                    dataDeliveryFreeTime.show(function (res) {
                        self.editMapZoneID(self.mapZoneIdDrawMapZone1());
                        self.editDeliveryFreeTimeID(self.deliveryFreeTimeIdDrawMapZone1());
                        self.editShopMapCode(self.valShopMapCodeDrawMapZone1());
                        self.editStartTime(moment(self.valStartTimeDrawMapZone1()).format(moment_time_format_HHmmss));
                        self.editEndTime(moment(self.valEndTimeDrawMapZone1()).format(moment_time_format_HHmmss));
                        self.editActiveDeliveryFreeTime(self.activeDeliveryFreeTimeDrawMapZone1());
                        showModalDeliveryFreeTime.modal();
                    });
                }
                else if (self.visibleZone2()) {  // Draw Map Zone2
                    if (self.mapZoneIdDrawMapZone2() == null) {
                        self.mapZoneIdDrawMapZone2(self.mapZone2Id());
                        self.valShopMapCodeDrawMapZone2(self.typeMap());
                    }

                    dataDeliveryFreeTime.show(function (res) {
                        self.editMapZoneID(self.mapZoneIdDrawMapZone2());
                        self.editDeliveryFreeTimeID(self.deliveryFreeTimeIdDrawMapZone2());
                        self.editShopMapCode(self.valShopMapCodeDrawMapZone2());
                        self.editStartTime(moment(self.valStartTimeDrawMapZone2()).format(moment_time_format_HHmmss));
                        self.editEndTime(moment(self.valEndTimeDrawMapZone2()).format(moment_time_format_HHmmss));
                        self.editActiveDeliveryFreeTime(self.activeDeliveryFreeTimeDrawMapZone2());
                        showModalDeliveryFreeTime.modal();
                    });
                }
                else if (self.visibleZone3()) {  // Draw Map Zone3
                    if (self.mapZoneIdDrawMapZone3() == null) {
                        self.mapZoneIdDrawMapZone3(self.mapZone3Id());
                        self.valShopMapCodeDrawMapZone3(self.typeMap());
                    }
                    dataDeliveryFreeTime.show(function (res) {
                        self.editMapZoneID(self.mapZoneIdDrawMapZone3());
                        self.editDeliveryFreeTimeID(self.deliveryFreeTimeIdDrawMapZone3());
                        self.editShopMapCode(self.valShopMapCodeDrawMapZone3());
                        self.editStartTime(moment(self.valStartTimeDrawMapZone3()).format(moment_time_format_HHmmss));
                        self.editEndTime(moment(self.valEndTimeDrawMapZone3()).format(moment_time_format_HHmmss));
                        self.editActiveDeliveryFreeTime(self.activeDeliveryFreeTimeDrawMapZone3());
                        showModalDeliveryFreeTime.modal();
                    });
                }

            }
            else { //Set Mile Zone

                if (self.visibleMileZone1()) {  // Site Mile Zone1
                    if (self.mapZoneIdSetMileZone1() == null) {
                        self.mapZoneIdSetMileZone1(self.mapZone1Id());
                        self.valShopMapCodeSetMileZone1(self.typeMap());
                    }

                    dataDeliveryFreeTime.show(function (res) {
                        self.editMapZoneID(self.mapZoneIdSetMileZone1());
                        self.editDeliveryFreeTimeID(self.deliveryFreeTimeIdSetMileZone1());
                        self.editShopMapCode(self.valShopMapCodeSetMileZone1());
                        self.editStartTime(moment(self.valStartTimeSetMileZone1()).format(moment_time_format_HHmmss));
                        self.editEndTime(moment(self.valEndTimeSetMileZone1()).format(moment_time_format_HHmmss));
                        self.editActiveDeliveryFreeTime(self.activeDeliveryFreeTimeSetMileZone1());
                        showModalDeliveryFreeTime.modal();
                    });
                }
                else if (self.visibleMileZone2()) {  // Site Mile Zone2
                    if (self.mapZoneIdSetMileZone2() == null) {
                        self.mapZoneIdSetMileZone2(self.mapZone2Id());
                        self.valShopMapCodeSetMileZone2(self.typeMap());
                    }

                    dataDeliveryFreeTime.show(function (res) {
                        self.editMapZoneID(self.mapZoneIdSetMileZone2());
                        self.editDeliveryFreeTimeID(self.deliveryFreeTimeIdSetMileZone2());
                        self.editShopMapCode(self.valShopMapCodeSetMileZone2());
                        self.editStartTime(moment(self.valStartTimeSetMileZone2()).format(moment_time_format_HHmmss));
                        self.editEndTime(moment(self.valEndTimeSetMileZone2()).format(moment_time_format_HHmmss));
                        self.editActiveDeliveryFreeTime(self.activeDeliveryFreeTimeSetMileZone2());
                        showModalDeliveryFreeTime.modal();
                    });
                }
                else if (self.visibleMileZone3()) {  // Site Mile Zone3
                    if (self.mapZoneIdSetMileZone3() == null) {
                        self.mapZoneIdSetMileZone3(self.mapZone3Id());
                        self.valShopMapCodeSetMileZone3(self.typeMap());
                    }

                    dataDeliveryFreeTime.show(function (res) {
                        self.editMapZoneID(self.mapZoneIdSetMileZone3());
                        self.editDeliveryFreeTimeID(self.deliveryFreeTimeIdSetMileZone3());
                        self.editShopMapCode(self.valShopMapCodeSetMileZone3());
                        self.editStartTime(moment(self.valStartTimeSetMileZone3()).format(moment_time_format_HHmmss));
                        self.editEndTime(moment(self.valEndTimeSetMileZone3()).format(moment_time_format_HHmmss));
                        self.editActiveDeliveryFreeTime(self.activeDeliveryFreeTimeSetMileZone3());
                        showModalDeliveryFreeTime.modal();
                    });
                }
            }

        }
    };
    //End Added By SMILEDINING-SA19-0005

    //Added by SMILEDINING-SA20-0043
    self.activeCustomMile = ko.observable(false);
    self.customMileZone = ko.observable();
    self.listValueCustom = ko.observableArray([]);
    self.jsonValueCustom = ko.observable();

    self.tempActiveCustomMile = ko.observable();
    self.tempCustomMileZone = ko.observable();
    self.tempListValueCustom = ko.observableArray([]);

    self.switchActiveCustomMile = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.activeCustomMile,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.activeCustomMile(true);
            } else {
                self.activeCustomMile(false);
            }
        }
    });
    self.zoneSelect = ko.observable("1");
    self.allZone = ko.observableArray([
   { name: "Zone1", id: "1" },
   { name: "Zone2", id: "2" },
   { name: "Zone3", id: "3" }
    ]);

    self.selectZone = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: self.allZone(),
            key: 'id'
        }),
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.zoneSelect,
        placeholder: "Select Zone",
        onValueChanged: function (v) {
            self.customMileZone(v.value);
            //Added by SMILEDINING-SA20-0043#1
            //var min = parseFloat(vmViewIndex.allMapZone.listMapZoneMile()[v.value - 1].endMile()) + 0.01;     //Modified and End by SMILEDINING-SA20-0043#3
            var min = rountTwo(parseFloat(vmViewIndex.allMapZone.listMapZoneMile()[v.value - 1].endMile()) + 0.01); //Added and End by SMILEDINING-SA20-0043#3
            self.listValueCustom()[0].minMile(min);
            //End Added by SMILEDINING-SA20-0043#1
        }
    });
    self.clickMinusValueCustom = function (i, data, event) {
        const index = i();
        //Added by SMILEDINING-SA20-0043#1
        var min = self.listValueCustom()[index].minMile();
        if (index + 1 < self.listValueCustom().length) {
            self.listValueCustom()[index + 1].minMile(min);
        }
        //End Added by SMILEDINING-SA20-0043#1
        self.listValueCustom.splice(index, 1);
    };
    self.clickPlusValueCustom = function () {
        var mile = ko.observable(0);
        var price = ko.observable(0);
        //Added by SMILEDINING-SA20-0043#1        
        //var max = parseFloat(Math.max.apply(Math, self.listValueCustom().map(function (x) { return x.maxMile(); }))) + 0.01;      //Modified and End by SMILEDINING-SA20-0043#3
        var max = rountTwo(parseFloat(Math.max.apply(Math, self.listValueCustom().map(function (x) { return x.maxMile(); }))) + 0.01);    //Added and End by SMILEDINING-SA20-0043#3
        var minMile = ko.observable(max);
        //End Added by SMILEDINING-SA20-0043#1
        self.listValueCustom.push({
            minMile: minMile,   //Added and End by SMILEDINING-SA20-0043#1
            maxMile: mile,
            pricePerMile: price
        });
    };
    self.clickModalCustomMile = function () {

        self.activeCustomMile(self.tempActiveCustomMile());
        self.customMileZone(self.tempCustomMileZone());
        //self.listValueCustom(self.tempListValueCustom.slice(0));  //Modified and End by SMILEDINING-SA20-0043#1
        //Added by SMILEDINING-SA20-0043#1
        var zoneId = parseInt(self.customMileZone());
        var endMile = parseFloat(vmViewIndex.allMapZone.listMapZoneMile()[zoneId - 1].endMile());
        var listData = [];
        var minMile = ko.observable(0);
        for (var i = 0 ; i < self.tempListValueCustom().length ; i++) {
            if (i == 0) {
                //var minMile = ko.observable(endMile + 0.01);      //Modified and End by SMILEDINING-SA20-0043#3
                var minMile = ko.observable(rountTwo(endMile + 0.01));    //Added and End by SMILEDINING-SA20-0043#3
                listData.push({
                    minMile: minMile,
                    maxMile: self.tempListValueCustom()[i].maxMile,
                    pricePerMile: self.tempListValueCustom()[i].pricePerMile
                });
            } else {
                var min = parseFloat(self.tempListValueCustom()[i - 1].maxMile()) + 0.01;
                //var minMile = ko.observable(min);     //Modified and End by SMILEDINING-SA20-0043#3
                var minMile = ko.observable(rountTwo(min));   //Added and End by SMILEDINING-SA20-0043#3
                listData.push({
                    minMile: minMile,
                    maxMile: self.tempListValueCustom()[i].maxMile,
                    pricePerMile: self.tempListValueCustom()[i].pricePerMile
                });
            }
        }
        self.listValueCustom(listData.slice(0));
        //End Added by SMILEDINING-SA20-0043#1
        if (self.listValueCustom().length == 0) {
            var mile = ko.observable(0);
            var price = ko.observable(0);
            var minMile = ko.observable(0)  //Added and End by SMILEDINING-SA20-0043#1
            minMile(parseFloat(vmViewIndex.allMapZone.listMapZoneMile()[0].endMile()));    //Added and End by SMILEDINING-SA20-0043#2
            self.listValueCustom.push({
                minMile: minMile,       //Added and End by SMILEDINING-SA20-0043#1
                maxMile: mile,
                pricePerMile: price
            });
        }
        self.zoneSelect(self.customMileZone());
    };

    self.blurMaxMile = function (i, data, event) {
        var value = $(event.target).val();
        const index = i();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.listValueCustom()[index].maxMile(value);

        //Added by SMILEDINING-SA20-0043#1
        if (self.listValueCustom().length != index + 1) {
            //self.listValueCustom()[index + 1].minMile(value + 0.01);      //Modified and End by SMILEDINING-SA20-0043#3
            self.listValueCustom()[index + 1].minMile(rountTwo(value + 0.01));  //Added and End by SMILEDINING-SA20-0043#3
        }
        //End Added by SMILEDINING-SA20-0043#1
    };

    self.blurPricePerMile = function (i, data, event) {
        var value = $(event.target).val();
        const index = i();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.listValueCustom()[index].pricePerMile(value);
    };

    self.valueCustomObj = ko.pureComputed(function () {
        return ko.toJSON(self.listValueCustom());
    });

    self.clickSubmitCustonMile = function () {
        if (!verifyMaxMile()) {
            swal(cSwal_Alert_Error, cError_CustomOverMile_MaxMile_LessThan, cSwal_Icon_Error);
        } else if (!verifyMaxMileDuplicate()) {
            swal(cSwal_Alert_Error, cError_CustomOverMile_MaxMile_Duplicate, cSwal_Icon_Error);
        } else if (vmViewIndex.allMapZone.customMileZone() != '3' && vmViewIndex.allMapZone.activeCustomMile()) {
            swalConfirmSaveOverMile(cfrmUpdateCustomMapZoneMile, vmViewIndex.allMapZone.customMileZone());
        } else {
            $('#' + cfrmUpdateCustomMapZoneMile).submit();
        }
    };
    //End Added by SMILEDINING-SA20-0043

    //Added by SMILEDINING-SA20-0043#2
    self.clickSubmitMapZoneMile = function () {
        if (!verifyMapZoneMile()) {
            swalConfirmSaveMapZoneMile(cfrmUpdateMapZoneMile, vmViewIndex.allMapZone.tempCustomMileZone());
        } else {
            $('#' + cfrmUpdateMapZoneMile).submit();
        }
    };
    //End Added by SMILEDINING-SA20-0043#2

    //Added by SMILEDINING-SA22-0037
    self.valSelectDeliveryByZone1 = ko.observable(0);
    self.valSelectDeliveryByZone2 = ko.observable(0);
    self.valSelectDeliveryByZone3 = ko.observable(0);
    self.dataSourceDeliveryByZone1 = ko.observableArray([{id: 0, name: 'Delivery By Restaurant'}]);
    self.dataSourceDeliveryByZone2 = ko.observableArray([{id: 0, name: 'Delivery By Restaurant'}]);
    self.dataSourceDeliveryByZone3 = ko.observableArray([{id: 0, name: 'Delivery By Restaurant'}]);

    self.checkDataSourceDeliveryBy = function () {
        if (!isEmpty(vmViewIndex.globalConfig.dispatchTypeDesc()) && self.dataSourceDeliveryByZone1().length < 2 && self.dataSourceDeliveryByZone2().length < 2 && self.dataSourceDeliveryByZone3().length < 2) {
            ko.utils.arrayForEach(vmViewIndex.globalConfig.dispatchTypeDesc(), function (item) {
                var obj = {};
                var dispatchTypeId = vmViewIndex.globalConfig.dispatchType();
                if (dispatchTypeId != '0' && dispatchTypeId == item.id()) {
                    obj = {
                        id: parseInt(dispatchTypeId),
                        name: 'Delivery By ' + item.name()
                    };
                    self.dataSourceDeliveryByZone1.push(obj);
                    self.dataSourceDeliveryByZone2.push(obj);
                    self.dataSourceDeliveryByZone3.push(obj);
                }
            });
        }

        if (!isEmpty(self.mapZone())) {
            ko.utils.arrayForEach(self.mapZone(), function (item) {
                var mapZoneId = item.MapZoneId();
                var dispatchTypeId = item.DispatchTypeId();
                if (mapZoneId == 1) {
                    self.valSelectDeliveryByZone1(dispatchTypeId);
                } else if (mapZoneId == 2) {
                    self.valSelectDeliveryByZone2(dispatchTypeId);
                } else if (mapZoneId == 3) {
                    self.valSelectDeliveryByZone3(dispatchTypeId);
                }
            });
        }
    };

    self.selectDeliveryByZone1 = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: self.dataSourceDeliveryByZone1(),
            key: 'id'
        }),
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.valSelectDeliveryByZone1,
        onValueChanged: function (v) {
            self.valSelectDeliveryByZone1(v.value);
            if (!isEmpty(self.mapZone())) {
                self.mapZone()[0].DispatchTypeId(v.value);
            }
            if (!isEmpty(self.listMapZoneMile())) {
                self.listMapZoneMile()[0].dispatchTypeId(v.value);
            }
        }
    });

    self.selectDeliveryByZone2 = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: self.dataSourceDeliveryByZone2(),
            key: 'id'
        }),
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.valSelectDeliveryByZone2,
        onValueChanged: function (v) {
            self.valSelectDeliveryByZone2(v.value);
            if (!isEmpty(self.mapZone())) {
                self.mapZone()[1].DispatchTypeId(v.value);
            }
            if (!isEmpty(self.listMapZoneMile())) {
                self.listMapZoneMile()[1].dispatchTypeId(v.value);
            }
        }
    });

    self.selectDeliveryByZone3 = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: self.dataSourceDeliveryByZone3(),
            key: 'id'
        }),
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.valSelectDeliveryByZone3,
        onValueChanged: function (v) {
            self.valSelectDeliveryByZone3(v.value);
            if (!isEmpty(self.mapZone())) {
                self.mapZone()[2].DispatchTypeId(v.value);
            }
            if (!isEmpty(self.listMapZoneMile())) {
                self.listMapZoneMile()[2].dispatchTypeId(v.value);
            }
        }
    });
    //End Added by SMILEDINING-SA22-0037

    //Added by WEB-SA22-0040
    self.minimumOrderDeliveryChargeList = ko.observableArray([]);
    self.tempMinimumOrderDeliveryChargeList = ko.observableArray([]);
    self.minimumOrderDeliveryChargeJson = ko.pureComputed(function () {
        return ko.toJSON(self.minimumOrderDeliveryChargeList());
    });
    self.disableBtnClearAllMinimumOrder = ko.observable(false);
    //self.disableBtnSubmitMinimumOrder = ko.observable(false); //Modified and End by WEB-SA22-0040#1

    self.clickModalMinimumOrderDeliveryCharge = function () { 
        self.minimumOrderDeliveryChargeList([]);
        ko.utils.arrayForEach(self.tempMinimumOrderDeliveryChargeList(), function (item) { 
            self.minimumOrderDeliveryChargeList.push(new DataMinimumOrderDeliveryChargeViewModel(item));
        });
        if (self.minimumOrderDeliveryChargeList().length == 0) {
            self.minimumOrderDeliveryChargeList.push(new DataMinimumOrderDeliveryChargeViewModel(null));
        }
    };

    self.clickAddMinimumOrder = function () {
        if (self.minimumOrderDeliveryChargeList().length < cMinimumOrder_MaxMinimumOrderDeliveryCharge) {
            self.minimumOrderDeliveryChargeList.push(new DataMinimumOrderDeliveryChargeViewModel(null));
        }
    };

    self.clickRemoveMinimumOrder = function (i, data, event) {
        const index = i();
        self.minimumOrderDeliveryChargeList.splice(index, 1);
    };

    self.clickClearAllMinimumOrder = function () {
        self.minimumOrderDeliveryChargeList([]);
        self.minimumOrderDeliveryChargeList.push(new DataMinimumOrderDeliveryChargeViewModel(null));
    }

    self.chkDisableBtnAddMinimumOrder = function () {
        if (self.minimumOrderDeliveryChargeList().length == 1) {
            var minimumOrderFirst = self.minimumOrderDeliveryChargeList()[0];
            var checkValue = parseFloat(minimumOrderFirst.minimumOrder()) + parseFloat(minimumOrderFirst.maximumOrder()) + parseFloat(minimumOrderFirst.deliveryChargeAmount());
            if (checkValue == 0 && !minimumOrderFirst.active()) {
                self.disableBtnClearAllMinimumOrder(true);
                //self.disableBtnSubmitMinimumOrder(true); //Modified and End by WEB-SA22-0040#1
                return true;
            }
        }
        self.disableBtnClearAllMinimumOrder(false);
        //self.disableBtnSubmitMinimumOrder(false); //Modified and End by WEB-SA22-0040#1
        return false;
    };

    self.blurMinimumOrder = function (i, data, event) {
        var value = $(event.target).val();
        const index = i();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.minimumOrderDeliveryChargeList()[index].minimumOrder(value);
    };

    self.blurMaximumOrder = function (i, data, event) {
        var value = $(event.target).val();
        const index = i();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.minimumOrderDeliveryChargeList()[index].maximumOrder(value);
    };

    self.blurDeliveryChargeAmount = function (i, data, event) {
        var value = $(event.target).val();
        const index = i();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        self.minimumOrderDeliveryChargeList()[index].deliveryChargeAmount(value);
    };
    //End Added by WEB-SA22-0040
};

//function AllRestaurantViewModel(data) { //Modified and End by SMILEDINING-SA19-0017
function AllRestaurantViewModel() { //Added and End by SMILEDINING-SA19-0017    
    var self = this;
    self.data = ko.observableArray([]);
    self.selectBoxDomainId = ko.observable("");
    self.selectBoxAllRestaurant = ko.observable("");

};

function GlobalConfigViewModel(data, timeZone) {
    var self = this;
    if (isEmpty(data)) {
        self.allTimeZone = ko.observableArray([]);
        self.shopNumber = ko.observable("");
        self.shopName = ko.observable("");
        self.shopCode = ko.observable("");
        self.shopStreet = ko.observable("");
        self.shopZipCode = ko.observable("");
        self.shopPhone = ko.observable("");
        self.shopBroad = ko.observable("");
        self.timeStartPickup = ko.observable("");
        self.timeEndPickup = ko.observable("");
        self.timeStartDelivery = ko.observable("");
        self.timeEndDelivery = ko.observable("");
        self.shopLatitude = ko.observable("");
        self.shopLongitude = ko.observable("");
        self.shopMapCode = ko.observable("");
        self.shopDeliveryTax = ko.observable("");
        self.payByCash = ko.observable("");
        self.payByCredit = ko.observable("");
        self.minimumOrder = ko.observable("");
        self.shopOpen = ko.observable("");
        self.shopOpenContactless = ko.observable(''); //Added and End by SMILEDINING-SA20-0006
        self.shopCloseReason = ko.observable("");
        //Added by SMILEDINING-SA19-0017
        self.shopCloseStartDate = ko.observable("");
        self.shopCloseEndDate = ko.observable("");
        self.shippingType = ko.observable("");
        self.startDate = ko.observable('');
        self.endDate = ko.observable('');
        self.isShopOpen = ko.observable(true);
        self.isShopOpenContactless = ko.observable(true); //Added and End by SMILEDINING-SA20-0006
        self.txtShopOpen = ko.observable('');
        self.txtShopOpenContactless = ko.observable('');//Added and End by SMILEDINING-SA20-0006
        self.currentDate = ko.observable('');
        self.switchShopOpen = ko.observable();
        self.switchShopOpenUtils = ko.observable();    //Added and End by SMILEDINING-SA19-0021
        self.switchShopOpenUtilsContactless = ko.observable(); //Added and End by SMILEDINING-SA20-0006
        self.dxShopCloseStart = ko.observable();
        self.dxShopCloseEnd = ko.observable();
        //End Added by SMILEDINING-SA19-0017
        self.shopPeriodTime = ko.observable("");
        //Added by SMILEDINING-SA21-0005
        self.shopPeriodTimePickup = ko.observable('');
        self.shopPeriodTimeDelivery = ko.observable('');
        //End Added by SMILEDINING-SA21-0005
        self.shopLogo = ko.observable("");
        self.shopLastUpdate = ko.observable("");
        self.calTax = ko.observable("");
        self.shopLogo = ko.observable("");
        //Added by SMILEDINING-SA21-0035
        self.shopBackground = ko.observable("");
        self.delShopBackground = ko.observable(false);
        //End Added by SMILEDINING-SA21-0035
        self.shopTimeZoneCode = ko.observable("");
        self.selectBoxTimeZoneCode = ko.observable("");
        self.shipmentType = ko.observable("");
        self.mapOptions = ko.observable("");
        self.specialInstructions = ko.observable(""); //Added and End By SMILEDINING-SA18-0003
        self.specialInstructionsForTicket = ko.observable(""); //Added and End By WEB-SA23-0037
        self.allowJoinTicket = ko.observable(false);    //Added and End by SMILEDINING-SA21-0055#2
        self.showPartySize = ko.observable(false);    //Added and End by SMILEDINING-SA21-0035#8
        self.tipsDesc = ko.observable(""); //Added and End By SMILEDINING-SA18-0020
        self.themeColor = ko.observable(""); //Added and End By SMILEDINING-SA18-0029
        self.tipsAuto = ko.observable(''); //Added and End By SMILEDINING-SA20-0032
        //Added by SMILEDINING-SA19-0002
        self.isShopInfo = ko.observable("");  //Added and End by SMILEDINING-SA21-0083
        self.tipsDescForStore = ko.observable("");
        self.tipsDescForCredit = ko.observable("");
        self.customButtonPayAtStore = ko.observable("");
        self.customButtonCredit = ko.observable("");
        self.customSpecialInstructions = ko.observable("");
        //End Added by SMILEDINING-SA19-0002
        //Added by SMILEDINING-SA21-0053
        self.customButtonPickup = ko.observable('');
        self.customButtonDelivery = ko.observable('');
        //End Added by SMILEDINING-SA21-0053
        //Added by SMILEDINING-SA19-0004
        self.hasAnnounceData = ko.observable(false);
        self.shopHeader = ko.observable("");
        self.shopBadge = ko.observable("");
        self.shopActive = ko.observable("");
        self.shopAnnounceImage = ko.observable("");
        self.delAnnounceImage = ko.observable(false);
        self.delShopLogo = ko.observable(false);
        //End Added by SMILEDINING-SA19-0004

        //Added by SMILEDINING-SA20-0028
        self.shopAnnounceCustomImage = ko.observable('');
        self.shopAnnounceCustomActive = ko.observable('');
        self.delAnnounceCustomImage = ko.observable(false);
        self.isShowAnnouceCustom = ko.observable(false);

        self.showCustom = ko.observable(false);
        self.switchShopCustom = ko.observable({
            offText: 'No',
            onText: 'Yes',
            value: self.showCustom,
            width: 80,
            onValueChanged: function (item) {
                if (item.value == true) {
                    self.showCustom(true);
                    //var showUploadAnnounceImage = $('#showUploadAnnounceImage');
                    //showUploadAnnounceImage.wrap('<form>').closest('form').get(0).reset();
                    //showUploadAnnounceImage.unwrap();

                    //var showUploadAnnounceCustomImage = $('#showUploadAnnounceCustomImage');
                    //showUploadAnnounceCustomImage.wrap('<form>').closest('form').get(0).reset();
                    //showUploadAnnounceCustomImage.unwrap();

                    $('#showUploadAnnounceImage').val('');
                    $('#showUploadAnnounceCustomImage').val('');
                } else {
                    self.showCustom(false);

                    //var showUploadAnnounceImage = $('#showUploadAnnounceImage');
                    //showUploadAnnounceImage.wrap('<form>').closest('form').get(0).reset();
                    //showUploadAnnounceImage.unwrap();

                    //var showUploadAnnounceCustomImage = $('#showUploadAnnounceCustomImage');
                    //showUploadAnnounceCustomImage.wrap('<form>').closest('form').get(0).reset();
                    //showUploadAnnounceCustomImage.unwrap();

                    $('#showUploadAnnounceImage').val('');
                    $('#showUploadAnnounceCustomImage').val('');
                }
            }
        });

        //End Added by SMILEDINING-SA20-0028

        //Added by SMILEDINING-SA20-0006 
        self.tipGuide = ko.observable('');
        self.tipGuideArray = ko.observableArray([]);
        self.showTipGuidePlus = ko.observable(false);
        self.showTipGuideMinus = ko.observable(false);
        //End Added by SMILEDINING-SA20-0006 
        self.currentDateTime = ko.observable("");       //Added and End by SMILEDINING-SA19-0008
        self.orderLimit = ko.observable("0");           //Added and End by SMILEDINING-SA20-0003
        //Added by SMILEDINING-SA21-0025
        self.topic = ko.observable('');
        self.question = ko.observable('');
        self.descriptionSelect = ko.observable('');
        self.descriptionNotSelect = ko.observable('');
        self.addPrice = ko.observable('');
        self.autoSelect = ko.observable('');
        self.showUtensils = ko.observable('');
        self.foodSetAutoHide = ko.observable(false); //Added and End by WEB-SA22-0068        
        //End Added by SMILEDINING-SA21-0025
        //Added by SMILEDINING-SA20-0015
        self.showCurbsidePickup = ko.observable('0');
        self.customCurbsideInstruction = ko.observable('');
        //End Added by SMILEDINING-SA20-0015

        //Added by SMILEDINING-SA20-0032
        self.dataTipsGuideAuto = ko.observableArray([]);
        self.selectTipGuideAuto = ko.observableArray([]);
        //End Added by SMILEDINING-SA20-0032
        self.showGuestCheckOut = ko.observable('0');    //Added and End by SMILEDINING-SA21-0002
        self.autoSyncProduct = ko.observable(false);  //Added and End by SMILEDINING-SA21-0014
        //Added by SMILEDINING-SA22-0037
        self.dispatchType = ko.observable('');
        self.dispatchTypeDesc = ko.observableArray([]); 
        //End Added by SMILEDINING-SA22-0037
        self.notificationCustomer = ko.observable('0'); //Added and End by WEB-SA24-0016
    } else {
        self.allTimeZone = ko.observableArray([]);
        ko.mapping.fromJS(timeZone, {}, self.allTimeZone);
        self.shopNumber = ko.observable(filterGlobalConfig(data, gcShopNumber));
        self.shopName = ko.observable(filterGlobalConfig(data, gcShopName));
        self.shopCode = ko.observable(filterGlobalConfig(data, gcShopCode));
        self.shopStreet = ko.observable(filterGlobalConfig(data, gcShopStreet));
        self.shopZipCode = ko.observable(filterGlobalConfig(data, gcShopPostal));
        self.shopPhone = ko.observable(getPhoneFormatUs(filterGlobalConfig(data, gcShopPhone)));
        self.shopBroad = ko.observable(filterGlobalConfig(data, gcShopBroad));
        self.isShopInfo = ko.observable(filterGlobalConfig(data, 'shop-info') == "1" || filterGlobalConfig(data, 'shop-info') == "" ? true : false); //Added and End by SMILEDINING-SA21-0083
        //Added by SMILEDINING-SA19-0004
        self.hasAnnounceData = ko.observable(true);
        self.shopHeader = ko.observable(filterGlobalConfig(data, gcAnnounceHeader));
        self.shopBadge = ko.observable(filterGlobalConfig(data, gcAnnounceBadge));
        self.shopActive = ko.observable(filterGlobalConfig(data, gcAnnounceActive));
        self.shopAnnounceImage = ko.observable(filterGlobalConfig(data, gcAnnounceImage));

        //Added by SMILEDINING-SA20-0028
        self.shopAnnounceCustomImage = ko.observable(filterGlobalConfig(data, 'broad-custom-image'));
        self.shopAnnounceCustomActive = ko.observable(filterGlobalConfig(data, 'broad-custom-active'));
        self.delAnnounceCustomImage = ko.observable(false);
        if (self.shopAnnounceCustomImage() == '' || self.shopAnnounceCustomImage() == null)
            self.delAnnounceCustomImage(false);
        else
            self.delAnnounceCustomImage(true);
        self.isShowAnnouceCustom = ko.observable(false);

        self.showCustom = ko.observable(false);
        self.switchShopCustom = ko.observable({
            offText: 'No',
            onText: 'Yes',
            value: self.showCustom,
            width: 80,
            onValueChanged: function (item) {
                if (item.value == true) {
                    self.showCustom(true);

                    //var showUploadAnnounceImage = $('#showUploadAnnounceImage');
                    //showUploadAnnounceImage.wrap('<form>').closest('form').get(0).reset();
                    //showUploadAnnounceImage.unwrap();

                    //var showUploadAnnounceCustomImage = $('#showUploadAnnounceCustomImage');
                    //showUploadAnnounceCustomImage.wrap('<form>').closest('form').get(0).reset();
                    //showUploadAnnounceCustomImage.unwrap();

                    $('#showUploadAnnounceImage').val(self.shopAnnounceImage());
                    $('#showUploadAnnounceCustomImage').val(self.shopAnnounceCustomImage());
                } else {
                    self.showCustom(false);

                    //var showUploadAnnounceImage = $('#showUploadAnnounceImage');
                    //showUploadAnnounceImage.wrap('<form>').closest('form').get(0).reset();
                    //showUploadAnnounceImage.unwrap();

                    //var showUploadAnnounceCustomImage = $('#showUploadAnnounceCustomImage');
                    //showUploadAnnounceCustomImage.wrap('<form>').closest('form').get(0).reset();
                    //showUploadAnnounceCustomImage.unwrap();

                    $('#showUploadAnnounceImage').val(self.shopAnnounceImage());
                    $('#showUploadAnnounceCustomImage').val(self.shopAnnounceCustomImage());
                }
            }
        });
        //End Added by SMILEDINING-SA20-0028

        self.delAnnounceImage = ko.observable(false);
        self.delShopLogo = ko.observable(false);
        self.delShopBackground = ko.observable(false); //Added and End by SMILEDINING-SA21-0035#1

        if (self.shopAnnounceImage() == "" || self.shopAnnounceImage() == null)
            self.delAnnounceImage(false);
        else
            self.delAnnounceImage(true);
        //End Added by SMILEDINING-SA19-0004

        //Added by SMILEDINING-SA19-0011
        var typeImage = '';
        switch (checkResolution()) {
            case 'xs':
                typeImage = cMobile;
                break;
            case 'sm':
                typeImage = cTABLET;
                break;
            case 'md':
                typeImage = cTABLET;
                break;
            default:
                typeImage = cDESKTOP;
                break;
        }
        cPathGiftCardImage = cProtocal + '://' + 'img.smiledining.com' + '/' + self.shopCode() + '/GIFTCER/' + +typeImage + '/'
        cPathFileBase = cProtocal + '://' + 'img.smiledining.com' + '/' + self.shopCode() + '/';    //Added and End by SMILEDINING-SA21-0028


        //cPathGiftCardImage = 'file://C' + ':' + '/DVIMAGE/' + self.shopCode() + '/GIFTCER/' + typeImage + '/';
        //End Added by SMILEDINING-SA19-0011

        self.currentDateTime = ko.observable(filterGlobalConfig(data, 'currentDateTime'));  //Added and End by SMILEDINING-SA19-0008
        self.timeStartPickup = ko.observable(filterGlobalConfig(data, gcTimePickupStart));
        self.timeEndPickup = ko.observable(filterGlobalConfig(data, gcTimePickupEnd));
        self.timeStartDelivery = ko.observable(filterGlobalConfig(data, gcTimeDeliveryStart));
        self.timeEndDelivery = ko.observable(filterGlobalConfig(data, gcTimeDeliveryEnd));
        self.shopLatitude = ko.observable(filterGlobalConfig(data, gcShopMapLat));
        self.shopLongitude = ko.observable(filterGlobalConfig(data, gcShopMapLng));
        self.shopMapCode = ko.observable(filterGlobalConfig(data, gcShopMapCode));
        self.shopDeliveryTax = ko.observable(filterGlobalConfig(data, gcShopDeliveryTax));
        self.payByCash = ko.observable(filterGlobalConfig(data, gcPayByCash));
        self.payByCredit = ko.observable(filterGlobalConfig(data, gcPayByCredit));
        self.minimumOrder = ko.observable(parseFloat(filterGlobalConfig(data, gcCalminumumOrder)));
        self.shopOpen = ko.observable(shopStatus(filterGlobalConfig(data, gcShopStatus)));
        //Added by SMILEDINING-SA20-0006 
        self.tipGuide = ko.observable(filterGlobalConfig(data, 'tip-guide'));
        if (self.tipGuide() == '')
            self.tipGuide('10,15,18,20');
        self.shopOpenContactless = ko.observable(shopStatus(filterGlobalConfig(data, gcShopStatus)));
        //End Added by SMILEDINING-SA20-0006
        self.shopCloseReason = ko.observable(filterGlobalConfig(data, gcShopCloseReason));
        //Added by SMILEDINING-SA19-0017     
        var shopCloseStartDate = ko.observable(filterGlobalConfig(data, gcShopCloseStartDate));
        if (shopCloseStartDate.length > 0)
            //shopCloseStartDate = moment(shopCloseStartDate).format(moment_date_format_mmddyyyy);      //Modified and End by SMILEDINING-SA20-0037
            shopCloseStartDate = moment(shopCloseStartDate, moment_date_format_yyyymmddthhmmss).format(moment_date_format_yyyymmdd);    //Added and End by SMILEDINING-SA20-0037
        var shopCloseEndDate = ko.observable(filterGlobalConfig(data, gcShopCloseEndDate));
        if (shopCloseEndDate.length > 0)
            //shopCloseEndDate = moment(shopCloseEndDate).format(moment_date_format_mmddyyyy);          //Modified and End by SMILEDINING-SA20-0037
            shopCloseEndDate = moment(shopCloseEndDate, moment_date_format_yyyymmddthhmmss).format(moment_date_format_yyyymmdd);     //Added and End by SMILEDINING-SA20-0037

        self.shopCloseStartDate = ko.observable(shopCloseStartDate);
        self.shopCloseEndDate = ko.observable(shopCloseEndDate);
        self.shippingType = ko.observable(filterGlobalConfig(data, gcShippingType));
        //End Added by SMILEDINING-SA19-0017
        self.shopPeriodTime = ko.observable(filterGlobalConfig(data, gcShopPeriodTime));
        //Added by SMILEDINING-SA21-0005
        self.shopPeriodTimePickup = ko.observable(filterGlobalConfig(data, 'shop-period-time-pickup'));
        self.shopPeriodTimeDelivery = ko.observable(filterGlobalConfig(data, 'shop-period-time-delivery'));
        //End Added by SMILEDINING-SA21-0005
        self.shopLogo = ko.observable(filterGlobalConfig(data, gcShopLogo));
        self.shopBackground = ko.observable(filterGlobalConfig(data, 'shop-background')); //Added and End by SMILEDINING-SA21-0035
        self.shopLastUpdate = ko.observable(filterGlobalConfig(data, gcShopLastUpdate));
        self.calTax = ko.observable(filterGlobalConfig(data, gcCalTax));
        self.shopTimeZoneCode = ko.observable(filterGlobalConfig(data, gcShopTimeZoneCode));
        self.shipmentType = ko.observable(getShippingType(filterGlobalConfig(data, gcShippingType)));
        self.specialInstructions = ko.observable(filterGlobalConfig(data, gcSpecialInstructions)); //Added and End By SMILEDINING-SA18-0003
        self.specialInstructionsForTicket = ko.observable(filterGlobalConfig(data, gcSpecialInstructionsForTicket)); //Added and End By WEB-SA23-0037
        self.allowJoinTicket = ko.observable(filterGlobalConfig(data, 'allow-join-ticket'));    //Added and End by SMILEDINING-SA21-0055#2
        self.showPartySize = ko.observable(filterGlobalConfig(data, 'contactless-show-party-size'));    //Added and End by SMILEDINING-SA21-0035#8
        self.tipsDesc = ko.observable(filterGlobalConfig(data, gcTipsDesc)); //Added and End By SMILEDINING-SA18-0020
        self.themeColor = ko.observable(filterGlobalConfig(data, gcThemeColor)); //Added and End by SMILEDINING-SA18-0029
        self.tipsAuto = ko.observable(filterGlobalConfig(data, 'tip-auto')); //Added and End By SMILEDINING-SA20-0032
        //Added by SMILEDINING-SA19-0002
        self.tipsDescForStore = ko.observable(filterGlobalConfig(data, gcTipsDescForStore));
        self.tipsDescForCredit = ko.observable(filterGlobalConfig(data, gcTipsDescForCredit));
        self.customButtonPayAtStore = ko.observable(filterGlobalConfig(data, gcCustomButtonPayAtStore));
        self.customButtonCredit = ko.observable(filterGlobalConfig(data, gcCustomButtonCredit));
        self.customSpecialInstructions = ko.observable(filterGlobalConfig(data, gcCustomSpecialInstructions));
        //End Added by SMILEDINING-SA19-0002
        //Added by SMILEDINING-SA21-0053
        self.customButtonPickup = ko.observable(filterGlobalConfig(data, 'custom-button-type-pickup'));
        self.customButtonDelivery = ko.observable(filterGlobalConfig(data, 'custom-button-type-delivery'));
        //End Added by SMILEDINING-SA21-0053
        self.orderLimit = ko.observable(filterGlobalConfig(data, gcOrderLimit));   //Added and End by SMILEDINING-SA20-0003
        //Added by SMILEDINING-SA21-0025
        self.topic = ko.observable(filterGlobalConfig(data, 'utensils-topic'));
        self.question = ko.observable(filterGlobalConfig(data, 'utensils-question'));
        self.descriptionSelect = ko.observable(filterGlobalConfig(data, 'utensils-description-select'));
        self.descriptionNotSelect = ko.observable(filterGlobalConfig(data, 'utensils-description-not-select'));
        self.addPrice = ko.observable(filterGlobalConfig(data, 'utensils-price'));
        self.autoSelect = ko.observable(filterGlobalConfig(data, 'utensils-auto-select'));
        self.showUtensils = ko.observable(filterGlobalConfig(data, 'utensils-show'));
        //End Added by SMILEDINING-SA21-0025
        self.foodSetAutoHide = ko.observable(filterGlobalConfig(data, 'foodset-auto-hide')); //Added and End by WEB-SA22-0068
        //Added by SMILEDINING-SA20-0006
        var arr = self.tipGuide().split(',');
        self.tipGuideArray = ko.observableArray([]);
        self.tipGuideArray(arr);
        self.showTipGuidePlus = ko.observable(false);
        self.showTipGuideMinus = ko.observable(false);
        self.showTipGuidePlus(arr.length == 4 ? false : true);
        self.showTipGuideMinus(arr.length == 1 ? false : true);
        updateTipGuideTable(self.tipGuideArray());
        //End Added by SMILEDINING-SA20-0006
        //Added by SMILEDINING-SA20-0015
        self.showCurbsidePickup = ko.observable(filterGlobalConfig(data, gcShowCurbsidePickup));
        if (self.showCurbsidePickup() == '')
            self.showCurbsidePickup('0');
        self.customCurbsideInstruction = ko.observable(filterGlobalConfig(data, gcCustomCurbsideInstruction));
        if (self.customCurbsideInstruction() == '')
            self.customCurbsideInstruction(cCurbsideInstructionDefault);
        //End Added by SMILEDINING-SA20-0015
        self.showGuestCheckOut = ko.observable(filterGlobalConfig(data, 'show-guest-checkout'));    //Added and End by SMILEDINING-SA21-0002
        self.autoSyncProduct = ko.observable(filterGlobalConfig(data, 'deliverect-autosync-product') == '1' ? true : false);  //Added and End by SMILEDINING-SA21-0014
        
        //Modified by SMILEDINING-SA19-0004
        //if (self.shopLogo().length > 0) {
        //    self.shopLogo(cProtocal + '://' + 'img.smiledining.com' + '/' + self.shopCode() + '/' + self.shopLogo());
        //}
        //End Modified by SMILEDINING-SA19-0004

        //Added by SMILEDINING-SA19-0004
        if (self.shopLogo() == "" || self.shopLogo() == null)
            self.delShopLogo(false);
        else
            self.delShopLogo(true);
        //End Added by SMILEDINING-SA19-0004
        //Added by SMILEDINING-SA21-0035
        if (self.shopBackground() == "" || self.shopBackground() == null)
            self.delShopBackground(false);
        else
            self.delShopBackground(true);
        //End Added by SMILEDINING-SA21-0035

        self.selectBoxTimeZoneCode = ko.observable(self.shopTimeZoneCode());
        self.shopTimeZoneCode({
            dataSource: new DevExpress.data.ArrayStore({
                data: self.allTimeZone(),
                key: 'timeZoneCode',
            }),
            dropDownButtonTemplate: 'dropDownButton',
            displayExpr: getDisplayExpr,
            valueExpr: 'timeZoneCode',
            value: self.selectBoxTimeZoneCode,
            searchEnabled: true,
            onValueChanged: function (v) {
                var filterData = ko.utils.arrayFilter(self.allTimeZone(), function (item) {
                    return item.timeZoneCode() == v.value;
                });
                var data = _.first(filterData);
                self.selectBoxTimeZoneCode(data.timeZoneCode());
                self.shopTimeZoneCode().value = v.value;
            }
        });

        function getDisplayExpr(item) {
            if (!item) {
                return "";
            }
            return item.name() + " " + item.time();
        }

        //Added by SMILEDINING-SA19-0017        
        self.startDate = ko.observable('');
        self.endDate = ko.observable('');
        self.isShopOpen = ko.observable(true);
        self.isShopOpenContactless = ko.observable(true); //Added and End by SMILEDINING-SA20-0006
        self.txtShopOpen = ko.observable('');
        self.txtShopOpenContactless = ko.observable('');//Added and End by SMILEDINING-SA20-0006
        //self.currentDate = ko.observable(moment(self.currentDateTime()).format('MM/DD/YYYY'));    //Modified and End by SMILEDINING-SA20-0037
        self.currentDate = ko.observable(moment(self.currentDateTime(), moment_date_format_mmddyyyyhhmmssa).format(moment_date_format_yyyymmdd));  //Added and End by SMILEDINING-SA20-0037

        self.computeMinEndDate = ko.pureComputed(function () {
            if (self.startDate() == null || isEmpty(self.startDate())) {
                return self.currentDate();
            }
            else if (moment(self.startDate()).isAfter(self.currentDate())) {
                return self.startDate();
            }
            else {

                return self.currentDate();
            }
        });

        self.switchShopOpen = ko.observable({
            offText: 'Close',
            onText: 'Open',
            value: self.isShopOpen,
            width: 80,
            onValueChanged: function (item) {
                if (item.value == true) {
                    self.txtShopOpen('OPEN');
                    self.isShopOpen(true);
                } else {
                    self.txtShopOpen('CLOSE');
                    self.isShopOpen(false);
                }
            }
        });

        self.switchShopOpenUtils = ko.observable();
        self.switchShopOpenUtilsContactless = ko.observable(); //Added and End by SMILEDINING-SA20-0006

        self.dxShopCloseStart = ko.observable({
            value: self.startDate,
            width: 'auto',
            pickerType: 'calendar',
            type: 'date',
            min: self.currentDate,
            acceptCustomValue: true,
            onValueChanged: function (target) {
                if (target.value)
                    //self.startDate(moment(target.value).format(moment_date_format_mmddyyyy));     //Modified and End by SMILEDINING-SA20-0037
                    self.startDate(moment(target.value, moment_date_format_yyyymmdd).format(moment_date_format_yyyymmdd));   //Added and End by SMILEDINING-SA20-0037
                else
                    self.startDate('');
            },
        });

        self.dxShopCloseEnd = ko.observable({
            value: self.endDate,
            width: 'auto',
            pickerType: 'calendar',
            type: 'date',
            min: self.computeMinEndDate,
            acceptCustomValue: true,
            onValueChanged: function (target) {
                if (target.value)
                    //self.endDate(moment(target.value).format(moment_date_format_mmddyyyy));       //Modified and End by SMILEDINING-SA20-0037
                    self.endDate(moment(target.value, moment_date_format_yyyymmdd).format(moment_date_format_yyyymmdd)); //Added and End by SMILEDINING-SA20-0037
                else
                    self.endDate('');
            },
        });
        //End Added by SMILEDINING-SA19-0017

        //Added by SMILEDINING-SA20-0032
        self.dataTipsGuideAuto = ko.observableArray([]);
        self.dataTipsGuideAuto.push('Off');
        ko.utils.arrayForEach(self.tipGuideArray(), function (data) {
            self.dataTipsGuideAuto.push(data + '');
        });
        self.selectTipGuideAuto = ko.observable({
            dataSource: new DevExpress.data.ArrayStore({
                data: self.dataTipsGuideAuto(),
            }),
            value: self.tipsAuto() == '' ? 'Off' : self.tipsAuto(),
            onValueChanged: function (v) {
                self.tipsAuto(v.value);
                setTipsAuto(v.value);
            }
        });
        //End Added by SMILEDINING-SA20-0032
        //Added by SMILEDINING-SA22-0037
        self.dispatchType = ko.observable(filterGlobalConfig(data, 'dispatch-type'));
        self.dispatchTypeDesc = ko.observableArray(getDispatchTypeDesc(data)); 
        //End Added by SMILEDINING-SA22-0037
        self.notificationCustomer = ko.observable(filterGlobalConfig(data, 'notification-customer')); //Added and End by WEB-SA24-0016
    }

    //Added by SMILEDINING-SA20-0006
    self.clickMinusTipGuide = function (data, event) {
        var context = ko.contextFor(event.target);
        var index = context.$index();

        var tipArr = vmViewIndex.globalConfig.tipGuideArray();
        tipArr.splice(index, 1);
        vmViewIndex.globalConfig.tipGuideArray(tipArr);
        if (self.tipGuideArray().length < 4) {
            vmViewIndex.globalConfig.showTipGuidePlus(true);
        }
        if (self.tipGuideArray().length == 1) {
            vmViewIndex.globalConfig.showTipGuideMinus(false);
        }
        updateTipGuideTable(self.tipGuideArray());
        resetTipsAuto();//Added and End by SMILEDINING-SA20-0032
    };

    self.clickPlusTipGuide = function () {
        self.tipGuideArray.push('');
        if (self.tipGuideArray().length == 4) {
            vmViewIndex.globalConfig.showTipGuidePlus(false);
        }
        if (self.tipGuideArray().length > 1) {
            vmViewIndex.globalConfig.showTipGuideMinus(true);
        }
        updateTipGuideTable(self.tipGuideArray());
    };

    //self.updateTipGuideArray = function (data, event) {
    //    var self = this;
    //    var newData = blurTip(data, event);
    //    var context = ko.contextFor(event.target);
    //    var index = context.$index();
    //    self.dataArr = ko.observableArray([]);
    //    self.dataArr(vmViewIndex.globalConfig.tipGuideArray.slice(0));
    //    self.dataArr.splice(index, 1, newData);
    //    vmViewIndex.globalConfig.tipGuideArray.removeAll();
    //    vmViewIndex.globalConfig.tipGuideArray(self.dataArr().slice(0));
    //};

    self.updateTipGuideArray = function (i, data, event) {

        var newData = $(event.target).val();
        if (!$.isNumeric(newData)) {
            newData = '';
        } else {
            newData = rountTwo(newData);
        }
        if (newData < 0) {
            newData = '';
        }

        var dataArr = ko.observableArray([]);
        const index = i();
        dataArr(vmViewIndex.globalConfig.tipGuideArray.slice(0));
        dataArr.splice(index, 1, newData);
        vmViewIndex.globalConfig.tipGuideArray.removeAll();
        vmViewIndex.globalConfig.tipGuideArray(dataArr().slice(0));
        resetTipsAuto();    //Added and End by SMILEDINING-SA20-0032
    };

    //function blurTip(data, event) {
    //    var value = $(event.target).val();
    //    if (!$.isNumeric(value)) {
    //        value = '';
    //    } else {
    //        value = rountTwo(value);
    //    }
    //    if (value < 0) {
    //        value = '';
    //    }
    //    return value;
    //};
    //End Added by SMILEDINING-SA20-0006
};

//Added by SMILEDINING-SA20-0032
//function recheckTipsAuto() {   
//    const data = ko.utils.arrayFilter(vmViewIndex.globalConfig.tipGuideArray(), function (item) {
//        return item == vmViewIndex.globalConfig.tipsAuto();
//    });
//    setTipsAuto(data);
//};

function resetTipsAuto() {
    const data = ko.utils.arrayFilter(vmViewIndex.globalConfig.tipGuideArray(), function (item) {
        return item == vmViewIndex.globalConfig.tipsAuto();
    });
    var selectTipAuto = $('#selectTipAuto').dxSelectBox('instance');
    if (!isEmpty(selectTipAuto)) {
        var ds = selectTipAuto.getDataSource();
        var items = ds.items();
        ds.store().clear();
        ds.store().insert('Off');
        ko.utils.arrayForEach(vmViewIndex.globalConfig.tipGuideArray(), function (data) {
            ds.store().insert(data + '');
        });
        ds.load();
        selectTipAuto.option('value', data.length == 0 ? 'Off' : (_.head(data) + ''));
        setTipsAuto(vmViewIndex.globalConfig.tipsAuto());
    }
};

function setTipsAuto(data) {
    $('.tipsAuto').removeClass('hover');
    if (!isEmpty(data)) {
        $('.tipsAuto').filter('[data-tip="tipsAuto' + data + '"]').addClass('hover');
    }
}
//End Added by SMILEDINING-SA20-0032

//Added by SMILEDINING-SA20-0006
function updateTipGuideTable(tipGuideArray) {
    var windowSize = $(window).width();
    var gridwidth = 0;
    var count = tipGuideArray.length;
    var width = windowSize < 576 ? 20 : 15;
    for (var i = 0 ; i < count ; i++) {
        gridwidth += width;
    }
    document.getElementById('tb-tipguide').style.width = gridwidth + '%';
};
//End Added by SMILEDINING-SA20-0006

function CustomerViewModel(data) {
    var self = this;
    if (isEmpty(data)) {
        self.customerId = ko.observable('');
        self.firstName = ko.observable('');
        self.lastName = ko.observable('');
        self.flag = ko.observable(false);
        self.email = ko.observable('');
        self.isExternalLogIn = ko.observable(false);
    } else {
        ko.mapping.fromJSON(data, {}, self);
    }
};



function ChangePassword() {
    var self = this;
    self.oldPassword = ko.observable('');
    self.newPassword = ko.observable('');
    self.confirmPassword = ko.observable('');
};


function MapViewModel(mapzone, mapzoneGeography, mapzonMile) {
    var self = this;
    self.mapzone = ko.observableArray([]);
    self.mapzoneGeography = ko.observableArray([]);
    self.mapzoneMile = ko.observableArray([]);

    ko.mapping.fromJSON(mapzone, {}, self.mapzone);
    ko.mapping.fromJSON(mapzoneGeography, {}, self.mapzoneGeography);
    ko.mapping.fromJSON(mapzonMile, {}, self.mapzoneMile);
};

function DeliveryChargeViewModel(deliveryCharge) {
    var self = this;
    self.deliveryChargePercentage = ko.observableArray([]);
    ko.mapping.fromJSON(deliveryCharge, {}, self.deliveryChargePercentage);
};

function LiveOrderViewModel() {
    var self = this;
    //self.orderTicket = ko.observableArray([]);    //Modified and End by SMILEDINING-SA20-0007
    self.ticket = ko.observableArray([]);           //Added and End by SMILEDINING-SA20-0007
    self.confirm = ko.observable(false);
    self.activeFeeCreditMarketing = ko.observable(false);  //Added and End by SMILEDINING-SA21-0080#1
    self.showSplitTaxesAndFees = ko.observable(false);  //Added and End by WEB-SA23-0010

    self.showFoodDetail = function (data, event) {
        //var dataFront = $(event.target).parent().parent().parent().parent().parent().parent().parent().parent();      //Modified and End by SMILEDINING-SA20-0007
        var dataFront = $(event.target).parent().parent().parent().parent().parent().parent().parent().parent().parent();       //Added and End by SMILEDINING-SA20-0007
        dataFront.find('.front').rotateY(180);
        dataFront.find('.back').rotateY(0);
    };

    self.showTicket = function (data, event) {
        var dataBack = $(event.target).parent().parent().parent().parent().parent().parent().parent().parent();
        dataBack.find('.front').rotateY(0);
        dataBack.find('.back').rotateY(180);
    };
}
//Added by SMILEDINING-SA21-0075
var cropper = null;
var image = document.getElementById('image_crop_box');
//Modified by SMILEDINING-SA21-0075#5
//$('#modalSetUpFoodUploadImage').on('shown.bs.modal', function () {
//    cropper = new Cropper(image, {
//        aspectRatio: 1,
//        viewMode: 3,
//        preview: '.image-preview',
//    });
//}).on('hidden.bs.modal', function () {
//    if (vmViewIndex.menu.checkDataMenu() != 'undefined') {
//        $('body').addClass('modal-open').css({ 'padding-right': '17px' });
//    }
//    cropper.destroy();
//    cropper = null;
//});
//End Modified by SMILEDINING-SA21-0075#5
//Added by SMILEDINING-SA21-0075#5
$('#modalSetUpFoodUploadImage').on('hidden.bs.modal', function () {
    if (vmViewIndex.menu.checkDataMenu() != 'undefined') {
        $('body').addClass('modal-open').css({ 'padding-right': '17px' });
        if (vmViewIndex.menu.dataSetupFoodModal.image() == "") {
            vmViewIndex.menu.dataSetupFoodModal.tempId('');
        }
    }
    $('.display-uploader').val('');
    vmViewIndex.menu.cropActive(false);
    if (cropper != null) {
        cropper.destroy();
        cropper = null;
    }
});
//End Added by SMILEDINING-SA21-0075#5
$('#cropImage').click(function () {
    addSpinButton('modalSetUpFoodUploadImage'); //Added and End by SMILEDINING-SA21-0075#3
    //Added by SMILEDINING-SA21-0075#4
    vmViewIndex.disableButtonCloseModal(true);
    vmViewIndex.disablePointer('default');
    //End Added by SMILEDINING-SA21-0075#4
    //Modified by SMILEDINING-SA21-0075#5
    //canvas = cropper.getCroppedCanvas({
    //    //Modified by SMILEDINING-SA21-0075#2
    //    //width: 160, 
    //    //height: 160
    //    //End Modified by SMILEDINING-SA21-0075#2
    //    //Added by SMILEDINING-SA21-0075#2
    //    width: 800,
    //    height: 800 
    //    //End Added by SMILEDINING-SA21-0075#2
    //});
    //canvas.toBlob(function (blob) {
    //    url = URL.createObjectURL(blob);
    //    var reader = new FileReader();
    //    reader.readAsDataURL(blob);
    //    reader.onloadend = function () {
    //        const base64data = reader.result;
    //        convertBase64toFile(base64data);
    //    }
    //});
    //End Modified by SMILEDINING-SA21-0075#5
    //Added by SMILEDINING-SA21-0075#5
    if (vmViewIndex.menu.cropActive() == true) {
        canvas = cropper.getCroppedCanvas({
            width: 800,
            height: 800
        });
        canvas.toBlob(function (blob) {
            url = URL.createObjectURL(blob);
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                const base64data = reader.result;
                convertBase64toFile(base64data);
            }
        });
    } else {
        if (vmViewIndex.menu.checkDataMenu() != 'undefined') {
            var base64data = $('#image_crop_box').attr('src');
            $('img', vmViewIndex.menu.elementImageId()).attr('src', base64data);
            $('img', vmViewIndex.menu.elementImageId()).attr('width', '115');
            $('img', vmViewIndex.menu.elementImageId()).attr('height', '115');
            vmViewIndex.menu.dataSetupFoodModal.image(base64data);
            $('#modalSetUpFoodUploadImage').modal('hide');
            removeSpinButton('modalSetUpFoodUploadImage');
            vmViewIndex.disableButtonCloseModal(false);
            vmViewIndex.disablePointer('pointer');
        } else {
            if (vmViewIndex.menu.typeUploadImage() == "dropImage") {
                vmViewIndex.menu.uploadDropImage(vmViewIndex.menu.tempImageId());
            } else if (vmViewIndex.menu.typeUploadImage() == "clickImage") {
                vmViewIndex.menu.submitChangeImage(vmViewIndex.menu.elementChangeImage(), vmViewIndex.menu.tempImageId(), false);
            }
        }
    }
    //End Added by SMILEDINING-SA21-0075#5
});

function convertBase64toFile(base64data) {
    const promiseBase64 = new Promise((resolve, reject) => {
        fetch(base64data)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], "Filename.jpg", { type: "image/jpeg" })
                if (typeof file != 'undefined') {
                    resolve(file);
                } else {
                    reject(new Error(file));
                }
            });
    });
    promiseBase64.then(value => {
        const file = value;
        if (vmViewIndex.menu.checkDataMenu() != 'undefined') {
            $('img', vmViewIndex.menu.elementImageId()).attr('src', base64data);
            $('img', vmViewIndex.menu.elementImageId()).attr('width', '115');
            $('img', vmViewIndex.menu.elementImageId()).attr('height', '115');
            vmViewIndex.menu.dataSetupFoodModal.image(base64data);
            vmViewIndex.menu.dataSetupFoodModal.tempId(file);
            //Added by SMILEDINING-SA21-0075#3
            $('#modalSetUpFoodUploadImage').modal('hide');
            removeSpinButton('modalSetUpFoodUploadImage');
            //End Added by SMILEDINING-SA21-0075#3
            //Added by SMILEDINING-SA21-0075#4
            vmViewIndex.disableButtonCloseModal(false);
            vmViewIndex.disablePointer('pointer');
            //End Added by SMILEDINING-SA21-0075#4
        } else {
            if (vmViewIndex.menu.typeUploadImage() == "dropImage") {
                vmViewIndex.menu.uploadDropImage(file);
            } else if (vmViewIndex.menu.typeUploadImage() == "clickImage") {
                vmViewIndex.menu.submitChangeImage(vmViewIndex.menu.elementChangeImage(), file, true);
                //vmViewIndex.menu.elementChangeImage().submit(); //Modified and End by SMILEDINING-SA21-0075#2
            }
        }
        //$('#modalSetUpFoodUploadImage').modal('hide'); //Modified and End by SMILEDINING-SA21-0075#3
    });
    promiseBase64.catch(() => {
        swal('Error', cSwal_Alert_Error, cSwal_Icon_Error);
        vmViewIndex.menu.dataSetupFoodModal.image('');
        //Added by SMILEDINING-SA21-0075#4
        vmViewIndex.disableButtonCloseModal(false);
        vmViewIndex.disablePointer('pointer');
        //End Added by SMILEDINING-SA21-0075#4
        $('#modalSetUpFoodUploadImage').modal('hide');
    })
}
//End Added by SMILEDINING-SA21-0075

function MenuSetupViewModel() {
    var self = this;
    //Sun
    self.firstShowSunStartTime = ko.observable('');
    self.firstShowSunEndTime = ko.observable('');
    self.showSunMultiTimeList = ko.observableArray([]); //Added and End by SMILEDINING-SA22-0034#3
    //Modified by SMILEDINING-SA22-0034#3
    //self.secondShowSunStartTime = ko.observable('');
    //self.secondShowSunEndTime = ko.observable('');
    //End Modified by SMILEDINING-SA22-0034#3

    //Mon
    self.firstShowMonStartTime = ko.observable('');
    self.firstShowMonEndTime = ko.observable('');
    self.showMonMultiTimeList = ko.observableArray([]); //Added and End by SMILEDINING-SA22-0034#3
    //Modified by SMILEDINING-SA22-0034#3
    //self.secondShowMonStartTime = ko.observable('');
    //self.secondShowMonEndTime = ko.observable('');
    //End Modified by SMILEDINING-SA22-0034#3

    //Tue
    self.firstShowTueStartTime = ko.observable('');
    self.firstShowTueEndTime = ko.observable('');
    self.showTueMultiTimeList = ko.observableArray([]); //Added and End by SMILEDINING-SA22-0034#3
    //Modified by SMILEDINING-SA22-0034#3
    //self.secondShowTueStartTime = ko.observable('');
    //self.secondShowTueEndTime = ko.observable('');
    //End Modified by SMILEDINING-SA22-0034#3

    //Wed
    self.firstShowWedStartTime = ko.observable('');
    self.firstShowWedEndTime = ko.observable('');
    self.showWedMultiTimeList = ko.observableArray([]); //Added and End by SMILEDINING-SA22-0034#3
    //Modified by SMILEDINING-SA22-0034#3
    //self.secondShowWedStartTime = ko.observable('');
    //self.secondShowWedEndTime = ko.observable('');
    //End Modified by SMILEDINING-SA22-0034#3

    //Thu
    self.firstShowThuStartTime = ko.observable('');
    self.firstShowThuEndTime = ko.observable('');
    self.showThuMultiTimeList = ko.observableArray([]); //Added and End by SMILEDINING-SA22-0034#3
    //Modified by SMILEDINING-SA22-0034#3
    //self.secondShowThuStartTime = ko.observable('');
    //self.secondShowThuEndTime = ko.observable('');
    //End Modified by SMILEDINING-SA22-0034#3

    //Fri
    self.firstShowFriStartTime = ko.observable('');
    self.firstShowFriEndTime = ko.observable('');
    self.showFriMultiTimeList = ko.observableArray([]); //Added and End by SMILEDINING-SA22-0034#3
    //Modified by SMILEDINING-SA22-0034#3
    //self.secondShowFriStartTime = ko.observable('');
    //self.secondShowFriEndTime = ko.observable('');
    //End Modified by SMILEDINING-SA22-0034#3

    //Sat
    self.firstShowSatStartTime = ko.observable('');
    self.firstShowSatEndTime = ko.observable('');
    self.showSatMultiTimeList = ko.observableArray([]); //Added and End by SMILEDINING-SA22-0034#3
    //Modified by SMILEDINING-SA22-0034#3
    //self.secondShowSatStartTime = ko.observable('');
    //self.secondShowSatEndTime = ko.observable('');
    //End Modified by SMILEDINING-SA22-0034#3

    self.tempDataShowTime = ko.observableArray([]);
    self.dataShowTime = ko.observableArray([]);
    self.choiceOptions = ko.observableArray([]);
    self.choice = ko.observableArray([]);
    self.dataMenu = ko.observableArray([]);
    self.dataFoodChoiceMap = ko.observableArray([]);

    self.isActiveFilterMenuFoodSet = ko.observable(true);
    self.isDeactiveFilterMenuFoodSet = ko.observable(false);
    self.isAllFilterMenuFoodSet = ko.observable(false);

    self.isActiveFilterMenuFoodCat = ko.observable(true);
    self.isDeactiveFilterMenuFoodCat = ko.observable(false);
    self.isAllFilterMenuFoodCat = ko.observable(false);

    self.isActiveFilterMenuFood = ko.observable(true);
    self.isDeactiveFilterMenuFood = ko.observable(false);
    self.isAllFilterMenuFood = ko.observable(false);

    self.valueFilterMenuFoodSet = ko.observable(1);
    self.valueFilterMenuFoodCat = ko.observable(1);
    self.valueFilterMenuFood = ko.observable(1);

    //Default Value
    self.defaultIsActiveFilterMenuFoodSet = ko.observable(true);
    self.defaultIsDeactiveFilterMenuFoodSet = ko.observable(false);
    self.defaultIsAllFilterMenuFoodSet = ko.observable(false);

    self.defaultIsActiveFilterMenuFoodCat = ko.observable(true);
    self.defaultIsDeactiveFilterMenuFoodCat = ko.observable(false);
    self.defaultIsAllFilterMenuFoodCat = ko.observable(false);

    self.defaultIsActiveFilterMenuFood = ko.observable(true);
    self.defaultIsDeactiveFilterMenuFood = ko.observable(false);
    self.defaultIsAllFilterMenuFood = ko.observable(false);

    self.defaultValueFilterMenuFoodSet = ko.observable(1);
    self.defaultValueFilterMenuFoodCat = ko.observable(1);
    self.defaultValueFilterMenuFood = ko.observable(1);

    self.showFilterMenu = ko.observable(false);
    self.defaultValueFilterProduct = ko.observable(products.cAllProduct); //Added and End by SMILEDINING-SA20-0006

    self.popupFilterMenu = ko.observable({
        width: 600,
        height: 280,
        contentTemplate: "filterMenu",
        position: { my: 'top center', at: 'top center', offset: '0 0', of: $("#showMenuSetUp") },
        height: function () {
            if ($(window).width() < 767) {
                return $(window).height() * 1;
            }
            return 280;
        },
        width: function () {
            if ($(window).width() < 767) {
                return $(window).width() * 1;
            }
            return 600;
        },
        shading: false,
        async: false,
        model: false,
        showTitle: true,
        titleTemplate: "<strong>Filter Menu</strong>",
        visible: self.showFilterMenu,
        dragEnabled: false,
        closeOnOutsideClick: true
    });

    self.clearFilterMenu = function () {
        self.valueFilterMenuFoodSet(self.defaultValueFilterMenuFoodSet());
        self.isActiveFilterMenuFoodSet(self.defaultIsActiveFilterMenuFoodSet());
        self.isDeactiveFilterMenuFoodSet(self.defaultIsDeactiveFilterMenuFoodSet());
        self.isAllFilterMenuFoodSet(self.defaultIsAllFilterMenuFoodSet());

        self.valueFilterMenuFoodCat(self.defaultValueFilterMenuFoodCat());
        self.isActiveFilterMenuFoodCat(self.defaultIsActiveFilterMenuFoodCat());
        self.isDeactiveFilterMenuFoodCat(self.defaultIsDeactiveFilterMenuFoodCat());
        self.isAllFilterMenuFoodCat(self.defaultIsAllFilterMenuFoodCat());

        self.valueFilterMenuFood(self.defaultValueFilterMenuFood());
        self.isActiveFilterMenuFood(self.defaultIsActiveFilterMenuFood());
        self.isDeactiveFilterMenuFood(self.defaultIsDeactiveFilterMenuFood());
        self.isAllFilterMenuFood(self.defaultIsAllFilterMenuFood());
    };

    self.AddDefaultFilterMenu = function () {
        self.defaultValueFilterMenuFoodSet(self.valueFilterMenuFoodSet());
        self.defaultIsActiveFilterMenuFoodSet(self.isActiveFilterMenuFoodSet());
        self.defaultIsDeactiveFilterMenuFoodSet(self.isDeactiveFilterMenuFoodSet());
        self.defaultIsAllFilterMenuFoodSet(self.isAllFilterMenuFoodSet());

        self.defaultValueFilterMenuFoodCat(self.valueFilterMenuFoodCat());
        self.defaultIsActiveFilterMenuFoodCat(self.isActiveFilterMenuFoodCat());
        self.defaultIsDeactiveFilterMenuFoodCat(self.isDeactiveFilterMenuFoodCat());
        self.defaultIsAllFilterMenuFoodCat(self.isAllFilterMenuFoodCat());

        self.defaultValueFilterMenuFood(self.valueFilterMenuFood());
        self.defaultIsActiveFilterMenuFood(self.isActiveFilterMenuFood());
        self.defaultIsDeactiveFilterMenuFood(self.isDeactiveFilterMenuFood());
        self.defaultIsAllFilterMenuFood(self.isAllFilterMenuFood());
    };

    self.clickActiveFilterMenuFoodSet = function () {
        self.valueFilterMenuFoodSet(1);
        self.isActiveFilterMenuFoodSet(true);
        self.isDeactiveFilterMenuFoodSet(false);
        self.isAllFilterMenuFoodSet(false);
        return true;
    };

    self.clickDeactiveFilterMenuFoodSet = function () {
        self.valueFilterMenuFoodSet(2);
        self.isActiveFilterMenuFoodSet(false);
        self.isDeactiveFilterMenuFoodSet(true);
        self.isAllFilterMenuFoodSet(false);
        return true;
    };

    self.clickAllFilterMenuFoodSet = function () {
        self.valueFilterMenuFoodSet(3);
        self.isActiveFilterMenuFoodSet(false);
        self.isDeactiveFilterMenuFoodSet(false);
        self.isAllFilterMenuFoodSet(true);
        return true;
    };

    self.clickActiveFilterMenuFoodCat = function () {
        self.valueFilterMenuFoodCat(1);
        self.isActiveFilterMenuFoodCat(true);
        self.isDeactiveFilterMenuFoodCat(false);
        self.isAllFilterMenuFoodCat(false);
        return true;
    };

    self.clickDeactiveFilterMenuFoodCat = function () {
        self.valueFilterMenuFoodCat(2);
        self.isActiveFilterMenuFoodCat(false);
        self.isDeactiveFilterMenuFoodCat(true);
        self.isAllFilterMenuFoodCat(false);
        return true;
    };

    self.clickAllFilterMenuFoodCat = function () {
        self.valueFilterMenuFoodCat(3);
        self.isActiveFilterMenuFoodCat(false);
        self.isDeactiveFilterMenuFoodCat(false);
        self.isAllFilterMenuFoodCat(true);
        return true;
    };

    self.clickActiveFilterMenuFood = function () {
        self.valueFilterMenuFood(1);
        self.isActiveFilterMenuFood(true);
        self.isDeactiveFilterMenuFood(false);
        self.isAllFilterMenuFood(false);
        return true;
    };

    self.clickDeactiveFilterMenuFood = function () {
        self.valueFilterMenuFood(2);
        self.isActiveFilterMenuFood(false);
        self.isDeactiveFilterMenuFood(true);
        self.isAllFilterMenuFood(false);
        return true;
    };

    self.clickAllFilterMenuFood = function () {
        self.valueFilterMenuFood(3);
        self.isActiveFilterMenuFood(false);
        self.isDeactiveFilterMenuFood(false);
        self.isAllFilterMenuFood(true);
        return true;
    };

    self.btnCloseFilterMenu = function () {
        self.clearFilterMenu();
        self.showFilterMenu(false);
    };

    self.btnClickFilterMenu = function () {
        self.showFilterMenu(false);
        vmViewIndex.showLoading(true);
        setTimeout(function () {
            //MapDataMenu(self.foodSetJs(), self.foodCategoryJs(), self.foodJs(), self.foodSetTimeMapJs(), self.valueFilterMenuFoodSet(), self.valueFilterMenuFoodCat(), self.valueFilterMenuFood());   //Modified by SMILEDINING-SA20-0006
            //Added by SMILEDINING-SA20-0006
            if (self.valueProduct() == null) {
                self.valueProduct(self.defaultValueFilterProduct);
            };
            MapDataMenu(self.foodSetJs(), self.foodCategoryJs(), self.foodJs(), self.foodSetTimeMapJs(), self.valueFilterMenuFoodSet(), self.valueFilterMenuFoodCat(), self.valueFilterMenuFood(), self.valueProduct());
            //End Added by SMILEDINING-SA20-0006
            self.AddDefaultFilterMenu();
            vmViewIndex.showLoading(false);
        //}, 3000); //Modified and End by SMILEDINING-SA21-0058
        }, 0); //Added and End by SMILEDINING-SA21-0058
    };

    self.foodSetJs = ko.observableArray([]);
    self.foodCategoryJs = ko.observableArray([]);
    self.foodJs = ko.observableArray([]);
    self.foodSetTimeMapJs = ko.observableArray([]);

    self.foodSet = ko.observableArray([]);
    self.foodCategory = ko.observableArray([]);
    self.food = ko.observableArray([]);
    self.foodChoiceMap = ko.observableArray([]);
    self.tempDataMenu = ko.observableArray([]);
    self.tempDataFoodCategory = ko.observableArray([]);
    self.optionSelectPickerFoodSet = ko.observableArray([]);
    self.optionSelectPickerFoodSetThirdParty = ko.observableArray([]);  //Added and End by SMILEDINING-SA21-0018#8
    self.optionSelectPickerFoodCategory = ko.observableArray([]);
    self.optionSelectPickerRevenue = ko.observableArray([]);
    self.optionSelectPickerCopyFood = ko.observableArray([]);
    self.optionSelectPickerChoiceOption = ko.observableArray([]);
    //self.optionSelectPickerChoiceOptionInit = ko.observableArray([]); //Added and End by SMILEDINING-SA21-0066#7 //Modified and End by SMILEDINING-SA21-0066#21
    self.optionSelectPickerChoiceOptionTemp = ko.observableArray([]);
    self.productTagStore = ko.observableArray([]);  //Added and End by SMILEDINING-SA21-0014

    //Added by SMILEDINING-SA21-0018
    self.thirdPartyGroupStore = ko.observableArray([]);
    self.thirdPartyStore = ko.observableArray([]);
    self.listFoodThirdPartyStore = ko.observableArray([]);

    self.thirdPartyGroups = ko.observableArray([]);
    self.foodInThirdPartyGroup = ko.observableArray([]);
    self.choiceOptionsInThirdPartyGroup = ko.observableArray([]);   //Added and End by SMILEDINING-SA21-0018#2

    self.listThirdPartyGroups = ko.observable('');
    self.listFoodInThirdPartyGroup = ko.observable('');
    self.baseFoodThirdParty = ko.observable('');
    //End Added by SMILEDINING-SA21-0018

    self.listFoodIconMap = ko.observableArray([]);  //Added and End by SMILEDINING-SA21-0021

    self.selectFoodSetId = ko.observable();
    self.selectFoodSetName = ko.observable();
    self.selectFoodSetSorting = ko.observable();
    self.selectFoodSetActive = ko.observable(true);
    self.selectFoodSetIsThirdParty = ko.observable(false);  //Added and End by SMILEDINING-SA21-0018
    self.selectFoodSetThirdPartyIntegProviderId = ko.observable();  //Added and End by WEB-SA23-0048
    self.chkBtnAddFoodSet = ko.observable(true);
    self.chkBtnAddFoodCategory = ko.observable(true);
    self.chkBtnAddFood = ko.observable(true);
    self.chkSelectedChoiceOption = ko.observable(true);
    self.chkClickCheckbox = ko.observable(false);

    self.dataSetupFoodSetModal = new SetupMenuViewModel();
    self.dataSetupFoodCategoryModal = new SetupSectionViewModel();
    self.dataSetupFoodModal = new SetupItemViewModel();
    self.arrModelCopyFood = ko.observableArray([]);

    self.chkSelectedChoiceOption = ko.observable(true);
    self.chkClickCheckbox = ko.observable(false);
    self.chkClickCopyFood = ko.observable(false);

    self.tempDataDragging = ko.observableArray([]);
    self.tempItemDragging = ko.observableArray([]);
    self.foodTypeDragging = ko.observable();
    self.chkDrag = ko.observable(false);
    self.chkSave = ko.observable(false);

    self.disableButtonSubmit = ko.observable(false);
    self.setDisableButtonSubmit = function () {
        self.disableButtonSubmit(true);
    }
    //Added by SMILEDINING-SA21-0075
    self.elementChangeImage = ko.observable();
    self.tempImageId = ko.observable();
    self.checkDataMenu = ko.observable();
    self.datasetId = ko.observable('');
    self.typeUploadImage = ko.observable();
    self.elementImageId = ko.observable();
    //End Added by SMILEDINING-SA21-0075
    //Added by SMILEDINING-SA20-0006
    //const arrProductList = [products.cSmileDining, products.cSmileContactless];   //Modified and End by SMILEDINING-SA21-0014
    //const arrProductList = [products.cSmileDining, products.cSmileContactless, products.cSmileThirdPartyIntegrations];  //Added and End by SMILEDINING-SA21-0014  //Modified and End by SMILEDINING-SA21-0014#7
    self.arrProductAll = ko.observableArray([]);
    //Modified by SMILEDINING-SA21-0014#7
    //if (arrProductList.length > 0) {
    //    _.forEach(arrProductList, function (value) {
    //        self.arrProductAll.push(value);
    //    });
    //};
    //End Modified by SMILEDINING-SA21-0014#7
    //Ended add by SMILEDINING-SA20-0006
    self.clickBtnSaveDrag = function () {
        if (vmViewIndex.menu.tempDataDragging().length != 0) {
            switch (vmViewIndex.menu.foodTypeDragging) {
                case "foodSet":
                    //swalConfirmSaveMenuDragging(cFoodSetUpdateDragging, vmViewIndex.menu.tempDataDragging(), vmViewIndex.menu.tempItemDragging()); //Modified and End by WEB-SA23-0001
                    //Added by WEB-SA23-0001
                    if (checkMqttConnection(cFoodSetUpdateDragging)) {
                        swalConfirmSaveMenuDragging(cFoodSetUpdateDragging, vmViewIndex.menu.tempDataDragging(), vmViewIndex.menu.tempItemDragging());
                    } else {
                        swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
                        vmViewIndex.isKiosk(false);
                    }
                    //End Added by WEB-SA23-0001
                    break;
                case "foodCategory":
                    //swalConfirmSaveMenuDragging(cFoodCategoryUpdateDragging, vmViewIndex.menu.tempDataDragging(), vmViewIndex.menu.tempItemDragging()); //Modified and End by WEB-SA23-0001
                    //Added by WEB-SA23-0001
                    if (checkMqttConnection(cFoodCategoryUpdateDragging)) {
                        swalConfirmSaveMenuDragging(cFoodCategoryUpdateDragging, vmViewIndex.menu.tempDataDragging(), vmViewIndex.menu.tempItemDragging());
                    } else {
                        swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
                        vmViewIndex.isKiosk(false);
                    }
                    //End Added by WEB-SA23-0001
                    break;
                case "food":
                    //swalConfirmSaveMenuDragging(cFoodUpdateDragging, vmViewIndex.menu.tempDataDragging(), vmViewIndex.menu.tempItemDragging()); //Modified and End by WEB-SA23-0001
                    //Added by WEB-SA23-0001
                    if (checkMqttConnection(cFoodUpdateDragging)) {
                        swalConfirmSaveMenuDragging(cFoodUpdateDragging, vmViewIndex.menu.tempDataDragging(), vmViewIndex.menu.tempItemDragging());
                    } else {
                        swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
                        vmViewIndex.isKiosk(false);
                    }
                    //End Added by WEB-SA23-0001
                    break;
            }
        }
    };
    self.clickBtnUndoDrag = function () {
        vmViewIndex.showLoading(true);
        setTimeout(function () {
            undoMenuDragging();
        }, 3000);
    };
    self.dropImage = function (data, event) {
        //Added by SMILEDINING-SA21-0075
        self.typeUploadImage("dropImage");
        self.elementImageId($(event.target).parent());
        if (typeof event.dataTransfer != "undefined") {
            self.checkDataMenu(typeof data.menu);
            //Added by SMILEDINING-SA21-0075#5
            if (typeof data.menu == 'undefined') {
                self.tempImageId(_.first(event.dataTransfer.files));
            }else {
                vmViewIndex.menu.dataSetupFoodModal.tempId(_.first(event.dataTransfer.files));
            }
            //End Added by SMILEDINING-SA21-0075#5
            var fileName = _.first(event.dataTransfer.files).name;
            var extension = fileName.split('.').pop().toUpperCase();
            if (extension != 'PNG' && extension != 'JPG' && extension != 'GIF' && extension != 'JPEG') {
            } else {
                self.elementChangeImage($(event.target).parent().parent().parent());
                var pathImagePreview = URL.createObjectURL(_.first(event.dataTransfer.files));
                document.getElementById('image_crop_box').setAttribute('src', pathImagePreview);
                $('#modalSetUpFoodUploadImage').modal('show');
            };
        };
        //End Added by SMILEDINING-SA21-0075
        //Modified by SMILEDINING-SA21-0075
        //var fileName = _.first(event.dataTransfer.files).name;
        //var extension = fileName.split('.').pop().toUpperCase();
        //if (extension != 'PNG' && extension != 'JPG' && extension != 'GIF' && extension != 'JPEG') {
        //} else if (_.first($(event.target).parent().parent().parent().parent().parent().parent()).id == cfrmFoodSetup) {
        //    data.menu.dataSetupFoodModal.tempId(_.first(event.dataTransfer.files));
        //} else {
        //    var formData = new FormData();
        //    var imageFile = _.first(event.dataTransfer.files);
        //    var foodIdImage = _.first($(event.target).parent().parent().parent().find('.display-uploader')).dataset.id;
        //    formData.append("uploader", imageFile);
        //    formData.append("foodIdImage", foodIdImage);
        //    var objUrl = new ObjUrl("frmChangeImage");
        //    var requestUrl = objUrl.getUrlSubmitForm();

        //    var bar = $(event.target).parent().parent().parent().find('.progress-bar');
        //    var percent = $(event.target).parent().parent().parent().find('.progress-bar');
        //    var status = $(event.target).parent().parent().parent().find('#status');

        //    status.empty();
        //    var percentVal = '0%';
        //    bar.width(percentVal);
        //    percent.html(percentVal);

            //$.ajax({
            //    type: 'POST',
            //    url: requestUrl,
            //    data: formData,
            //    contentType: false,
            //    processData: false,
            //    xhrFields: {
            //        onprogress: function (e) {
            //            if (e.lengthComputable) {
            //                percentVal = (e.loaded / e.total * 100 + '%');
            //                bar.width(percentVal);
            //                percent.html(percentVal);
            //            }
            //        }
            //    },
            //    success: function (response) {
            //        if (response.status) {
            //            var food = JSON.parse(response.obj);
            //            setFoodImage(food);
            //        } else {
            //            swal('Error', cSwal_Alert_Error, cSwal_Icon_Error);
            //        }
            //        return false;
            //    },
            //    complete: function (xhr) {
            //        swal('Save', cSwal_Alert_Success, cSwal_Icon_Success);
            //        setTimeout(function () {
            //            var percentVal = '0%';
            //            bar.width(percentVal);
            //            percent.html(percentVal);
            //        }, 2000);
            //    },
            //    error: function (response) {
            //        swal('Error', cSwal_Alert_Error, cSwal_Icon_Error);
            //    }
            //});
        //};
        //End Modified by SMILEDINING-SA21-0075
    };
    //Added by SMILEDINING-SA21-0075
    self.uploadDropImage = function (imageFile) {
        var formData = new FormData();
        var foodIdImage = _.first(self.elementChangeImage().find('.display-uploader')).dataset.id;
        formData.append("uploader", imageFile);
        formData.append("foodIdImage", foodIdImage);
        var objUrl = new ObjUrl("frmChangeImage");
        var requestUrl = objUrl.getUrlSubmitForm();

        var bar = self.elementChangeImage().find('.progress-bar');
        var percent = self.elementChangeImage().find('.progress-bar');
        var status = self.elementChangeImage().find('#status');

        status.empty();
        var percentVal = '0%';
        bar.width(percentVal);
        percent.html(percentVal);

        $.ajax({
            type: 'POST',
            url: requestUrl,
            data: formData,
            contentType: false,
            processData: false,
            xhrFields: {
                onprogress: function (e) {
                    if (e.lengthComputable) {
                        percentVal = (e.loaded / e.total * 100 + '%');
                        bar.width(percentVal);
                        percent.html(percentVal);
                    }
                }
            },
            success: function (response) {
                if (response.status) {
                    var food = JSON.parse(response.obj);
                    setFoodImage(food);
                } else {
                    swal('Error', cSwal_Alert_Error, cSwal_Icon_Error);
                }
                //Added by SMILEDINING-SA21-0075#3
                if (self.checkDataMenu() == 'undefined') {
                    $('#modalSetUpFoodUploadImage').modal('hide');
                    removeSpinButton('modalSetUpFoodUploadImage');
                }
                //End Added by SMILEDINING-SA21-0075#3
                //Added by SMILEDINING-SA21-0075#4
                vmViewIndex.disableButtonCloseModal(false);
                vmViewIndex.disablePointer('pointer');
                //End Added by SMILEDINING-SA21-0075#4
                return false;
            },
            complete: function (xhr) {
                swal('Save', cSwal_Alert_Success, cSwal_Icon_Success);
                setTimeout(function () {
                    var percentVal = '0%';
                    bar.width(percentVal);
                    percent.html(percentVal);
                }, 2000);
            },
            error: function (response) {
                swal('Error', cSwal_Alert_Error, cSwal_Icon_Error);
            }
         });

    }
    //End Added by SMILEDINING-SA21-0075
    self.arrOneTimeFormSubmit = ko.observableArray([]);
    //Use indirect change function for ie.
    self.changeImage = function (data, event) {
        self.arrOneTimeFormSubmit([]);
        var checkId = $(event.target).attr('class');
        var checkImage;
        var fromName;
        var checkDupplicateForm;
        //Added by SMILEDINING-SA21-0075
        self.typeUploadImage("clickImage");
        self.elementImageId($(event.target).parent());
        //End Added by SMILEDINING-SA21-0075
        if (checkId == 'display-uploader') {
            if (typeof event.target.files != 'undefined') {
                checkImage = event.target.files.length;
                fromName = _.first($(event.target).parent().parent()).id;
                if (checkImage > 0) {
                    var file = _.first(event.target.files).name;
                    var extension = file.split('.').pop().toUpperCase();
                    if (extension != 'PNG' && extension != 'JPG' && extension != 'GIF' && extension != 'JPEG') {

                    } else {
                        if (self.arrOneTimeFormSubmit().length > 0 && !isEmpty(fromName)) {
                            checkDupplicateForm = ko.utils.arrayFilter(self.arrOneTimeFormSubmit(), function (name) {
                                return name == fromName;
                            });
                            if (checkDupplicateForm.length == 0) {
                                self.arrOneTimeFormSubmit.push(fromName);
                                //submitChangeImage($(event.target).parent().parent(), data.menu.dataSetupFoodModal.tempId()); //Modified and End by SMILEDINING-SA21-0075
                                self.submitChangeImage($(event.target).parent().parent(), data.menu.dataSetupFoodModal.tempId(), false); //Added and End by SMILEDINING-SA21-0075
                            }
                            //$(event.target).parent().next().submit(); //Modified and End by SMILEDINING-SA21-0075#2
                        } else {
                            self.arrOneTimeFormSubmit.push(fromName);
                            //Modified by SMILEDINING-SA21-0075
                            //if (typeof data.menu == "undefined") {
                            //    self.submitChangeImage($(event.target).parent().parent(), data.tempId());
                            //} else {
                            //    //submitChangeImage($(event.target).parent().parent(), data.menu.dataSetupFoodModal.tempId());
                            //    data.menu.dataSetupFoodModal.tempId(_.first(event.target.files));
                            //}
                            //End Modified by SMILEDINING-SA21-0075
                            //Added by SMILEDINING-SA21-0075
                            if (typeof data.menu == 'undefined') {
                                self.checkDataMenu(typeof data.menu);
                                self.elementChangeImage($(event.target).parent().parent());
                                self.tempImageId(data.tempId());
                                self.datasetId(event.target.dataset.id);
                            } else {
                                self.checkDataMenu(typeof data.menu);
                                data.menu.dataSetupFoodModal.tempId(_.first(event.target.files)); //Added and End by SMILEDINING-SA21-0075#5
                            }
                            var pathImagePreview = URL.createObjectURL(_.first(event.target.files));
                            document.getElementById('image_crop_box').setAttribute('src', pathImagePreview);
                            $('#modalSetUpFoodUploadImage').modal('show');
                            //End Added by SMILEDINING-SA21-0075
                            //$(event.target).parent().next().submit(); //Modified and End by SMILEDINING-SA21-0075
                        }
                    }
                }
            }
        }else {
            fromName = _.first($(event.target).parent().parent().parent()).id;
            checkDupplicateForm = ko.utils.arrayFilter(self.arrOneTimeFormSubmit(), function (name) {
                return name == fromName;
            });
            if (checkDupplicateForm.length == 0) {
                self.arrOneTimeFormSubmit.push(fromName);
                var tempId;
                if (typeof data.tempId != 'undefined') {
                    vmViewIndex.menu.tempImageId(data.tempId());//Added and End by SMILEDINING-SA21-0075
                    tempId = data.tempId();
                    data.image('');
                    //self.submitChangeImage($(event.target).parent().parent().parent(), tempId, false); //Added and End by SMILEDINING-SA21-0075#2 //Modified and End by SMILEDINING-SA21-0075#3
                } else {
                    tempId = data.menu.dataSetupFoodModal.tempId();
                    data.menu.dataSetupFoodModal.image('')
                }
                //submitChangeImage($(event.target).parent().parent().parent(), tempId); //Modified and End by SMILEDINING-SA21-0075
                //self.submitChangeImage($(event.target).parent().parent().parent(), tempId, false); //Added and End by SMILEDINING-SA21-0075 //Modified and End by SMILEDINING-SA21-0075#2
            }
            vmViewIndex.menu.dataSetupFoodModal.tempId(null); //Added and End by SMILEDINING-SA21-0075
            $(event.target).parent().parent().find('.display-uploader').val('');
            $(event.target).parent().parent().find('.image img').attr('src', '');
            $(event.target).parent().parent().find('.image img').removeAttr('src');
            //$(event.target).parent().parent().next().submit(); //Modified and End by SMILEDINING-SA21-0075#2
            //Added by SMILEDINING-SA21-0075#3
            if (typeof data.tempId != 'undefined') {
                self.submitChangeImage($(event.target).parent().parent().parent(), tempId, false);
            }
            //End Added by SMILEDINING-SA21-0075#3
        }
    };
    //Added by SMILEDINING-SA21-0075#5
    self.cropActive = ko.observable(false);
    self.switchCrop = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.cropActive,
        width: switchActiveWidth60px,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.cropActive(true);
                cropper = new Cropper(image, {
                    aspectRatio: 1,
                    viewMode: 3,
                    preview: '.image-preview',
                });
            } else {
                self.cropActive(false);
                if (cropper != null) {
                    cropper.destroy();
                    cropper = null;
                }
            }
        }
    });
    //End Added by SMILEDINING-SA21-0075#5
    //Added by SMILEDINING-SA21-0075
    //self.cancleUploadImage = function () { //Modified and End by SMILEDINING-SA21-0075#5
    self.cancelUploadImage = function () { //Added and End by SMILEDINING-SA21-0075#5
        vmViewIndex.menu.dataSetupFoodModal.image('');
        $('#uploaderEdit').val(''); //Added and End by SMILEDINING-SA21-0075#4
        vmViewIndex.menu.dataSetupFoodModal.tempId('');//Added and End by SMILEDINING-SA21-0075#5
        $('#modalSetUpFoodUploadImage').modal('hide');
    }
    //End Added by SMILEDINING-SA21-0075
    //Added by SMILEDINING-SA21-0028
    self.dropCustomImage = function (data, event) {
        var checkId = $(event.currentTarget).attr('class');
        var fileName = _.first(event.dataTransfer.files).name;
        var extension = fileName.split('.').pop().toUpperCase();
        if (extension != 'PNG' && extension != 'JPG' && extension != 'GIF' && extension != 'JPEG') {
        } else {
            if (checkId.includes('desktop-menu')) {
                data.menu.dataSetupFoodModal.tempIdDesktopMenu(_.first(event.dataTransfer.files));
            } else if (checkId.includes('desktop-food')) {
                data.menu.dataSetupFoodModal.tempIdDesktopFood(_.first(event.dataTransfer.files));
            } else if (checkId.includes('mobile-menu')) {
                data.menu.dataSetupFoodModal.tempIdMobileMenu(_.first(event.dataTransfer.files));
            } else if (checkId.includes('mobile-food')) {
                data.menu.dataSetupFoodModal.tempIdMobileFood(_.first(event.dataTransfer.files));
            }
        } 
    };

    self.changeCustomImage = function (data, event) {
        self.arrOneTimeFormSubmit([]);
        var checkId = $(event.target).attr('class');
        var checkImage;
        var fromName;
        var checkDupplicateForm;
        if (checkId.includes('display-uploader')) {
            if (typeof event.target.files != 'undefined') {
                checkImage = event.target.files.length;
                if (checkImage > 0) {
                    var file = _.first(event.target.files).name;
                    var extension = file.split('.').pop().toUpperCase();
                    if (extension != 'PNG' && extension != 'JPG' && extension != 'GIF' && extension != 'JPEG') {

                    } else {
                        if (checkId.includes('desktop-menu')) {
                            data.menu.dataSetupFoodModal.tempIdDesktopMenu(_.first(event.target.files));
                        } else if (checkId.includes('desktop-food')){
                            data.menu.dataSetupFoodModal.tempIdDesktopFood(_.first(event.target.files));
                        } else if (checkId.includes('mobile-menu')){
                            data.menu.dataSetupFoodModal.tempIdMobileMenu(_.first(event.target.files));
                        } else if (checkId.includes('mobile-food')) {
                            data.menu.dataSetupFoodModal.tempIdMobileFood(_.first(event.target.files));
                        }
                    }
                }
            }
        } else {

            if (checkId.includes('desktop-menu')) {
                data.menu.dataSetupFoodModal.imageDesktopMenu('');
                data.menu.dataSetupFoodModal.tempIdDesktopMenu('');    //Added and End by SMILEDINING-SA21-0028#5
                $(event.target).parent().parent().find('.display-uploader.desktop-menu').val('');
                $(event.target).parent().parent().find('.image.image-desktop-menu img').attr('src', '');
                $(event.target).parent().parent().find('.image.image-desktop-menu img').removeAttr('src');
            } else if (checkId.includes('desktop-food')) {
                data.menu.dataSetupFoodModal.imageDesktopFood('');
                data.menu.dataSetupFoodModal.tempIdDesktopFood('');    //Added and End by SMILEDINING-SA21-0028#5
                $(event.target).parent().parent().find('.display-uploader.desktop-food').val('');
                $(event.target).parent().parent().find('.image.image-desktop-food img').attr('src', '');
                $(event.target).parent().parent().find('.image.image-desktop-food img').removeAttr('src');
            } else if (checkId.includes('mobile-menu')) {
                data.menu.dataSetupFoodModal.imageMobileMenu('');
                data.menu.dataSetupFoodModal.tempIdMobileMenu('');    //Added and End by SMILEDINING-SA21-0028#5
                $(event.target).parent().parent().find('.display-uploader.mobile-menu').val('');
                $(event.target).parent().parent().find('.image.image-mobile-menu img').attr('src', '');
                $(event.target).parent().parent().find('.image.image-mobile-menu img').removeAttr('src');
            } else if (checkId.includes('mobile-food')) {
                data.menu.dataSetupFoodModal.imageMobileFood('');
                data.menu.dataSetupFoodModal.tempIdMobileFood('');    //Added and End by SMILEDINING-SA21-0028#5
                $(event.target).parent().parent().find('.display-uploader.mobile-food').val('');
                $(event.target).parent().parent().find('.image.image-mobile-food img').attr('src', '');
                $(event.target).parent().parent().find('.image.image-mobile-food img').removeAttr('src');
            }            

        }
    };
    //End Added by SMILEDINING-SA21-0028
    //Added by SMILEDINING-SA20-0006
    // filter product
    self.showFilterProduct = ko.observable(false);
    //self.groupProduct = new ProductViewModel(self, cfrmMenuSetup);    //Modified and End by SMILEDINING-SA21-0014#7
    //Added by SMILEDINING-SA21-0014#7
    self.selectProduct = ko.observable();
    self.arrProductFilter = ko.observableArray([]);
    //End Added by SMILEDINING-SA21-0014#7
    self.foodIdImage = ko.observable(''); //Added and End by WEB-SA23-0001
    self.valueProduct = ko.observable();
    //End Added by SMILEDINING-SA20-0006
    //function submitChangeImage(element, data) { //Modified and End by SMILEDINING-SA21-0075
    self.submitChangeImage = function (element, data,isCropImage) { //Added and End by SMILEDINING-SA21-0075
        //element.submit(function () { //Modified and End by SMILEDINING-SA21-0075#2
            var bar = $(element).find('.progress-bar');
            var percent = $(element).find('.progress-bar');
            var status = $(element).find('#status');
            var formData = new FormData();
            var objUrl = new ObjUrl("frmChangeImage");
            var requestUrl = objUrl.getUrlSubmitForm();
            //Modified by SMILEDINING-SA21-0075
            //formData.append("uploader", _.first(jQuery("#uploader" + data).get(0).files));
            //var foodIdImage = event.target.dataset.id;
            //formData.append("foodIdImage", foodIdImage);
            //formData.append("tempId", data);
            //End Modified by SMILEDINING-SA21-0075
            //Added by SMILEDINING-SA21-0075
            if (!isCropImage) {
                formData.append("uploader", _.first(jQuery("#uploader" + data).get(0).files));
                //var foodIdImage = event.target.dataset.id; //Modified and End by SMILEDINING-SA21-0075#5
                var foodIdImage = (typeof event.target.dataset.id == 'undefined') ? vmViewIndex.menu.datasetId() : event.target.dataset.id; //Added and End by SMILEDINING-SA21-0075#5
                formData.append("foodIdImage", foodIdImage);
                formData.append("tempId", data);
                self.foodIdImage(foodIdImage); //Added and End by WEB-SA23-0001
            } else {
                formData.append("uploader", data);
                formData.append("foodIdImage", vmViewIndex.menu.datasetId());
                formData.append("tempId", vmViewIndex.menu.tempImageId());
                self.foodIdImage(vmViewIndex.menu.datasetId()); //Added and End by WEB-SA23-0001
            }
            //End Added by SMILEDINING-SA21-0075
            //Added by WEB-SA23-0001
            if (!checkMqttConnection(cfrmChangeImage)) {
                swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
                vmViewIndex.disableButtonCloseModal(false);
                vmViewIndex.disablePointer('pointer');
                vmViewIndex.isKiosk(false);
                return false;
            }
            //End Added by WEB-SA23-0001
            $.ajax({
                url: requestUrl,
                async: ajax_async,
                cache: ajax_cache,
                type: ajax_type_post,
                data: formData,
                processData: false,
                contentType: false,
                timeout: ajax_timeout, // timeout after 60 seconds

                beforeSend: function () {
                    status.empty();
                    var percentVal = '0%';
                    bar.width(percentVal);
                    percent.html(percentVal);
                },
                uploadProgress: function (event, position, total, percentComplete) {
                    var percentVal = percentComplete + '%';
                    bar.width(percentVal);
                    percent.html(percentVal);
                },
                success: function (response) {
                    $('body').removeAttr('style'); //Added and End by WEB-SA22-0010#1
                    if (response.status) {
                        //Modified by SMILEDINING-SA21-0075#2
                        //Added by SMILEDINING-SA21-0075
                        //End Added by SMILEDINING-SA21-0075
                        //End Modified by SMILEDINING-SA21-0075#2
                        var food = JSON.parse(response.obj);
                        setFoodImage(food);
                        //Added by WEB-SA23-0001
                        var itemFoodKiosk = !isEmpty(response.objKiosk) ? JSON.parse(response.objKiosk) : null;
                        if (vmViewIndex.isKiosk() && !isEmpty(itemFoodKiosk) && itemFoodKiosk.productId.includes(products.cSmileContactless) && itemFoodKiosk.active) {
                            sendMqtt(itemFoodKiosk, getTopicMqtt('food'));
                        }
                        //End Added by WEB-SA23-0001
                        checkUpdateThirdParty(cfrmChangeImage, response); //Added and End by WEB-SA23-0026#1
                        var percentVal = '100%';
                        bar.width(percentVal);
                        percent.html(percentVal);
                        swal('Save', cSwal_Alert_Success, cSwal_Icon_Success); //Added and End by WEB-SA22-0010#1
                    } else {
                        swal('Error', cSwal_Alert_Error, cSwal_Icon_Error);
                    }
                    //Added by SMILEDINING-SA21-0075#3
                    if (self.checkDataMenu() == 'undefined') {
                        $('#modalSetUpFoodUploadImage').modal('hide');
                        removeSpinButton('modalSetUpFoodUploadImage');
                    }
                    //End Added by SMILEDINING-SA21-0075#3
                    //Added by SMILEDINING-SA21-0075#4
                    vmViewIndex.disableButtonCloseModal(false);
                    vmViewIndex.disablePointer('pointer');
                    //End Added by SMILEDINING-SA21-0075#4
                    vmViewIndex.isKiosk(false); //Added and End by WEB-SA23-0001
                    return false;
                }
                ,
                complete: function (xhr) {
                    //Added by SMILEDINING-SA22-0010
                    //Modified by WEB-SA22-0010#1
                    //setTimeout(function () { 
                    //    swal('Save', cSwal_Alert_Success, cSwal_Icon_Success);
                    //}, 500);
                    //End Modified by WEB-SA22-0010#1
                    //End Added by SMILEDINING-SA22-0010
                    //swal('Save', cSwal_Alert_Success, cSwal_Icon_Success); //Modified and End by SMILEDINING-SA22-0010
                    setTimeout(function () {
                        var percentVal = '0%';
                        bar.width(percentVal);
                        percent.html(percentVal);
                    }, 2000);
                }
            });
        //}); //Modified and End by SMILEDINING-SA21-0075#2
    };

    self.foodFilter = function (dataFood, dataFoodSet) {
        var data = ko.utils.arrayFilter(dataFood.food, function (itemFood) {
            return (itemFood.foodSetId() == dataFoodSet.foodSetId());
        });
        return data;
    };

    self.clickBtnAddFoodSet = function () {
        vmViewIndex.menu.disableButtonSubmit(false);
        self.chkBtnAddFoodSet(true);
    };

    self.clickBtnFoodSetSetting = function (data) {
        self.chkBtnAddFoodSet(false);
        vmViewIndex.menu.disableButtonSubmit(false);
        self.dataSetupFoodSetModal.foodSetId(data.menu.selectFoodSetId());
        self.dataSetupFoodSetModal.foodSetName(data.menu.selectFoodSetName());
        self.dataSetupFoodSetModal.active(data.menu.selectFoodSetActive());
        //Added by SMILEDINING-SA21-0018
        self.dataSetupFoodSetModal.isThirdParty(data.menu.selectFoodSetIsThirdParty());
        self.dataSetupFoodSetModal.thirdPartyIntegrationsProviderIds([]); //Added and End by WEB-SA23-0048
        if (data.menu.selectFoodSetIsThirdParty() == true) {
            //document.getElementById('chkFoodSetSetUp_IsthirdParty').disabled = true;       //Modified and End by SMILEDINING-SA21-0018#1
            enableOrDisableCheckBox(cfrmFoodSetUp_ThirdParty, true); //Added and End by SMILEDINING-SA21-0018#1
            //Added by WEB-SA23-0048
            if (!isEmpty(data.menu.selectFoodSetThirdPartyIntegProviderId())) {
                var thirdPartyIntegrationsProviderIds = data.menu.selectFoodSetThirdPartyIntegProviderId().split(',').map(Number);
                self.dataSetupFoodSetModal.thirdPartyIntegrationsProviderIds(thirdPartyIntegrationsProviderIds); 
            }
            //End Added by WEB-SA23-0048
        }
        //End Added by SMILEDINING-SA21-0018
    };

    self.clickBtnAddFoodCategory = function () {
        vmViewIndex.menu.disableButtonSubmit(false);
        self.chkBtnAddFoodCategory(true);
    };

    self.clickBtnEditFoodCategory = function (data) {
        self.chkBtnAddFoodCategory(false);
        vmViewIndex.menu.disableButtonSubmit(false);
        self.dataSetupFoodCategoryModal.foodCatId(data.foodCategory.foodCatId());
        self.dataSetupFoodCategoryModal.foodCatName(data.foodCategory.foodCatName());
        self.dataSetupFoodCategoryModal.foodCatDesc(data.foodCategory.foodCatDesc());
    };

    self.clickBtnAddFood = function (data, event) {
        self.chkBtnAddFood(true);
        vmViewIndex.menu.disableButtonSubmit(false);

        self.dataSetupFoodModal.foodSetId(data.foodSet.foodSetId());
        self.dataSetupFoodModal.foodCatId(data.foodCategory.foodCatId());
        var filterFoodCategory = ko.utils.arrayFilter(self.tempDataFoodCategory(), function (itemFoodCategory) {
            return itemFoodCategory.foodSetId() == data.foodSet.foodSetId();
        });
        self.optionSelectPickerFoodCategory(filterFoodCategory);
        self.dataSetupFoodModal.foodId('');
        self.dataSetupFoodModal.revenueClassId('');
        self.dataSetupFoodModal.taxRateId('');
        self.dataSetupFoodModal.image('');
        //Added by SMILEDINING-SA21-0066#6
        self.dataSetupFoodModal.imageThirdParty('');
        self.dataSetupFoodModal.plu('');
        //End Added by SMILEDINING-SA21-0066#6
        self.dataSetupFoodModal.foodDesc('');
        self.dataSetupFoodModal.tempId(null);
        self.dataSetupFoodModal.isOutStock(false); //Added and End by SMILEDINING-SA20-0010
        //Added by SMILEDINING-SA20-0016
        self.dataSetupFoodModal.isFree(false);
        self.dataSetupFoodModal.isShow(true);
        //End Addded by SMILEDINING-SA20-0016
        //Added by SMILEDINING-SA20-0006
        self.dataSetupFoodModal.productId();
        //Added by SMILEDINING-SA20-0006
        if (vmViewIndex.allSetting.isMultiProduct() == false) {
            self.dataSetupFoodModal.productId(vmViewIndex.allSetting.isSmileDining() ? products.cSmileDining : products.cSmileContactless);
        }      
        //End Added by SMILEDINING-SA20-0006
        //Added by SMILEDINING-SA21-0018#2
        if (data.foodSet.isThirdParty()) {
            var productId = products.cSmileThirdPartyIntegrations;
            self.dataSetupFoodModal.productId(productId);

            var arr = productId.split(',');
            self.dataSetupFoodModal.arrProduct(arr);
            self.dataSetupFoodModal.isShowProductTags(self.dataSetupFoodModal.arrProduct().includes('5') ? true : false);
            //Added by WEB-SA23-0048
            self.dataSetupFoodModal.thirdPartyIntegrationsProviderIds([]);
            self.dataSetupFoodModal.thirdPartyIntegrationsProviderStore.clear();
            var thirdPartyIntegrationsProviderIds = [];
            if (!isEmpty(data.foodSet.thirdPartyIntegrationsProviderId())) { 
                thirdPartyIntegrationsProviderIds = data.foodSet.thirdPartyIntegrationsProviderId().split(',').map(Number);
            }
            thirdPartyIntegrationsProviderIds.sort(function(a, b){return parseInt(a) - parseInt(b)});
            _.forEach(thirdPartyIntegrationsProviderIds, function (providerId) {
                if (providerId == thirdPartyIntegrationsProviders.cDeliverect) {
                    self.dataSetupFoodModal.thirdPartyIntegrationsProviderStore.insert({ 
                        id: thirdPartyIntegrationsProviders.cDeliverect, 
                        name: thirdPartyIntegrationsProviders.mapName[thirdPartyIntegrationsProviders.cDeliverect].name 
                    });
                    self.dataSetupFoodModal.thirdPartyIntegrationsProviderIds.push(thirdPartyIntegrationsProviders.cDeliverect);
                }
                if (providerId == thirdPartyIntegrationsProviders.cOtter) {
                    self.dataSetupFoodModal.thirdPartyIntegrationsProviderStore.insert({ 
                        id: thirdPartyIntegrationsProviders.cOtter, 
                        name: thirdPartyIntegrationsProviders.mapName[thirdPartyIntegrationsProviders.cOtter].name 
                    });
                    self.dataSetupFoodModal.thirdPartyIntegrationsProviderIds.push(thirdPartyIntegrationsProviders.cOtter);
                }
            });
            //End Added by WEB-SA23-0048
        }
        //Added by WEB-SA22-0048
        if (!data.foodSet.isThirdParty()) {
            var productId = products.cSmileDining;
            self.dataSetupFoodModal.productId(productId)
            var arr = productId.split(',');
            self.dataSetupFoodModal.arrProduct(arr);
        }
        //End Added By WEB-SA22-0048
        //End Added by SMILEDINING-SA21-0018#2
        //self.dataSetupFoodModal.arrProduct().push(products.cSmileDining);     //Modified and End by SMILEDINING-SA20-0006
        //End Added by SMILEDINING-SA20-0006
        //Added by SMILEDINING-SA20-0003
        if (vmViewIndex.globalConfig.orderLimit() === '1' || vmViewIndex.globalConfig.orderLimit() === '2')
            self.dataSetupFoodModal.showLimit(true);
        else
            self.dataSetupFoodModal.showLimit(false);
        self.dataSetupFoodModal.qtyLimit(0);
        //End Added by SMILEDINING-SA20-0003

        var target = $(event.target).parent().parent();
        var image = target.find('img').attr('src');
        //Modified by SMILEDINING-SA21-0021
        //$('#modalSetupFood').find('img').attr('src', '');
        //$('#modalSetupFood').find('img').removeAttr('src');
        //End Modified by SMILEDINING-SA21-0021
        //Added by SMILEDINING-SA21-0021
        $('#modalSetupFood .image').find('img').attr('src', '');
        $('#modalSetupFood .image').find('img').removeAttr('src');
        //End Added by SMILEDINING-SA21-0021
    };

    self.clickAddChoiceOption = function (item, event) {
        self.choiceOptions.push(new getChoiceOptions(1));
        self.optionSelectPickerChoiceOptionTemp.push(new optionSelectChoiceOptionTemp(0, ''));
        self.dataSetupFoodModal.dataOptionFood(ko.toJSON(self.choiceOptions()));
        replaceChoiceOptionThirdParty();    //Added and End by SMILEDINING-SA21-0018#2
    };

    self.clickDelChoiceOption = function (item, event) {
        var context = ko.contextFor(event.target);
        var index = context.$index();
        var listChoiceOption = ko.mapping.fromJS(ko.toJS(self.choiceOptions())); //Added and End by SMILEDINING-SA19-0001
        //ko.utils.arrayFilter(self.choiceOptions(), function (choiceOption) {   //Modified and End by SMILEDINING-SA19-0001
        var i = 0;  //Added and End by SMILEDINING-SA21-0024#1
        ko.utils.arrayFilter(listChoiceOption(), function (choiceOption) { //Added and End by SMILEDINING-SA19-0001
            //if (choiceOption.ChoiceOptionId() == item.ChoiceOptionId()) { //Modified and End by SMILEDINING-SA21-0024
            if (choiceOption.ChoiceOptionId() == item.ChoiceOptionId() && choiceOption.CheckData() == item.CheckData()) {   //Added and End by SMILEDINING-SA21-0024
                //Added by SMILEDINING-SA19-0001
                if (item.CheckData() == 0) {
                    choiceOption.Active(false);
                    ko.utils.arrayForEach(choiceOption.Choice(), function (choice) {
                        choice.ChoiceName("");
                        choice.ChoicePrice(0.00);
                        choice.IsDefault(false);
                        self.choiceOptions(listChoiceOption()); //Added and End by SMILEDINING-SA19-0001
                    });
                } else {
                    if (i == index) {   //Added and End by SMILEDINING-SA21-0024#1
                        self.choiceOptions.remove(item);
                        self.optionSelectPickerChoiceOptionTemp.splice(index, 1);
                    }   //Added and End by SMILEDINING-SA21-0024#1
                }
                //End Added by SMILEDINING-SA19-0001

                //Modified by SMILEDINING-SA18-0033
                //if (item.CheckData() == 0) {
                //    choiceOption.Active(false);
                //    ko.utils.arrayForEach(choiceOption.Choice(), function (choice) {
                //        choice.ChoiceName("");
                //        choice.ChoicePrice(0.00);
                //        choice.IsDefault(false);
                //    });
                //} else {
                //    self.choiceOptions.remove(item);
                //    self.optionSelectPickerChoiceOptionTemp.splice(index, 1);
                //}
                //End Modified by SMILEDINING-SA18-0033

                //Modified by SMILEDINING-SA19-0001
                ////Added by SMILEDINING-SA18-0033
                //choiceOption.Active(false);
                //ko.utils.arrayForEach(choiceOption.Choice(), function (choice) {
                //    choice.ChoiceName("");
                //    choice.ChoicePrice(0.00);
                //    choice.IsDefault(false);
                //});
                ////End Added by SMILEDINING-SA18-0033
                //End Modified by SMILEDINING-SA19-0001

            }
            i++;    //Added and End by SMILEDINING-SA21-0024#1
        });
        //Modified by SMILEDINING-SA21-0024#1
        //for (var i = 0; i < self.choiceOptions().length - 1; i++) {
        //    if (self.choiceOptions()[i + 1].ChoiceOptionId() != self.choiceOptions()[i].ChoiceOptionId()) {
        //        self.chkSelectedChoiceOption(true);
        //    }
        //}
        //End Modified by SMILEDINING-SA21-0024#1
        //Added by SMILEDINING-SA21-0024#1
        self.chkSelectedChoiceOption(true);
        for (var i = 0; i < self.choiceOptions().length - 1; i++) {
            var filter = ko.utils.arrayFilter(self.choiceOptions(), function (item) {
                return item.ChoiceOptionId() == self.choiceOptions()[i].ChoiceOptionId() && item.Active() != false;
            });
            if (filter.length > 1) {
                swal(cError_ChoiceOption_Invalid, cError_ChoiceOptionName_Duplicate, cSwal_Icon_Error);
                self.chkSelectedChoiceOption(false);
            }
        }
        //End Added by SMILEDINING-SA21-0024#1
        self.dataSetupFoodModal.dataOptionFood(ko.toJSON(self.choiceOptions()));
        replaceChoiceOptionThirdParty();    //Added and End by SMILEDINING-SA21-0018#2
    };

    self.clickAddChoice = function (index) {
        //self.choiceOptions()[index].Choice.push(new getChoice("", "", "0.00", "", false, false)); //Modified and End by SMILEDINING-SA21-0066#21
        self.choiceOptions()[index].Choice.push(new getChoice("", "", "0.00", "", false, false, "")); //Added and End by SMILEDINING-SA21-0066#21
        self.dataSetupFoodModal.dataOptionFood(ko.toJSON(self.choiceOptions()));
        replaceChoiceOptionThirdParty();    //Added and End by SMILEDINING-SA21-0018#2
    };

    self.clickDelChoice = function (item, index) {
        self.choiceOptions()[index].Choice.remove(item);
        self.dataSetupFoodModal.dataOptionFood(ko.toJSON(self.choiceOptions()));
        replaceChoiceOptionThirdParty();    //Added and End by SMILEDINING-SA21-0018#2
    };

    self.clickBtnEditFood = function (data, event) {
        self.chkBtnAddFood(false);
        vmViewIndex.menu.disableButtonSubmit(false);
        self.dataSetupFoodModal.foodId(data.foodId());
        self.dataSetupFoodModal.foodName(data.foodName());
        self.dataSetupFoodModal.foodNameAlt(data.foodNameAlt());  //Added and End by SMILEDINING-SA18-0012
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
        self.dataSetupFoodModal.isOutStock(data.isOutStock()); //Added and End by SMILEDINING-SA20-0010
        //Added by SMILEDINING-SA20-0016
        self.dataSetupFoodModal.isFree(data.isFree());
        self.dataSetupFoodModal.isShow(data.isShow());
        //End Added by SMILEDINING-SA20-0016
        self.dataSetupFoodModal.tempId(data.tempId());
        self.dataSetupFoodModal.image(data.image());
        //Added by SMILEDINING-SA21-0066#6
        self.dataSetupFoodModal.imageThirdParty(data.imageThirdParty());
        self.dataSetupFoodModal.plu(data.plu());
        //End Added by SMILEDINING-SA21-0066#6
        self.dataSetupFoodModal.listProductTag(data.listProductTag());  //Added and End by SMILEDINING-SA21-0014
        //Added by SMILEDINING-SA20-0006
        self.dataSetupFoodModal.productId(data.productId());
        if (data.productId != null) {
            var arr = data.productId().split(',');
        };
        self.dataSetupFoodModal.arrProduct(arr);
        //End Added by SMILEDINING-SA20-0006

        self.dataSetupFoodModal.isShowProductTags(self.dataSetupFoodModal.arrProduct().includes('5') ? true : false);   //Added and End by SMILEDINING-SA21-0014#4

        //Added by SMILEDINING-SA20-0003
        if (vmViewIndex.globalConfig.orderLimit() === '1' || vmViewIndex.globalConfig.orderLimit() === '2')
            self.dataSetupFoodModal.showLimit(true);
        else
            self.dataSetupFoodModal.showLimit(false);
        self.dataSetupFoodModal.qtyLimit(data.qtyLimit());
        //End Added by SMILEDINING-SA20-0003

        //Added by SMILEDINING-SA21-0021
        var filterIcon = ko.utils.arrayFilter(self.listFoodIconMap(), function (item) {
            return item.foodId() == data.foodId();
        });

        var dataStoreIcon = ko.observableArray([]);
        if (filterIcon.length > 0) {
            filterIcon.sort(function (l, r) { return l.iconSorting() === r.iconSorting() ? 0 : l.iconSorting() < r.iconSorting() ? -1 : 1; });
            ko.utils.arrayForEach(filterIcon, function (itemIconMap) {
                var filterIconMap = ko.utils.arrayFilter(self.dataSetupFoodModal.cloneArrayIcon(), function (itemIcon) {
                    return itemIcon.iconId() == itemIconMap.iconId();
                });
                if (filterIconMap.length > 0) {
                    self.dataSetupFoodModal.listIcon.push(_.first(filterIconMap).iconId());
                    dataStoreIcon.push(new iconSortingModel(_.first(filterIconMap), itemIconMap.iconSorting()));
                }
            });
        }
        var dataIconStore = new DevExpress.data.ArrayStore({
            key: 'iconId',
            data: dataStoreIcon()
        });
        self.dataSetupFoodModal.listIconForDrag(dataIconStore);
        self.dataSetupFoodModal.showIconDrag(dataStoreIcon().length > 0 ? true : false);
        //End Added by SMILEDINING-SA21-0021
        //Added by WEB-SA23-0048
        if (self.selectFoodSetIsThirdParty()) {
            self.dataSetupFoodModal.thirdPartyIntegrationsProviderStore.clear();
            var thirdPartyIntegrationsProviderIds = [];
            if (!isEmpty(self.selectFoodSetThirdPartyIntegProviderId())) { 
                thirdPartyIntegrationsProviderIds = self.selectFoodSetThirdPartyIntegProviderId().split(',').map(Number);
            }
            thirdPartyIntegrationsProviderIds.sort(function(a, b){return parseInt(a) - parseInt(b)});
            _.forEach(thirdPartyIntegrationsProviderIds, function (providerId) {
                if (providerId == thirdPartyIntegrationsProviders.cDeliverect) {
                    self.dataSetupFoodModal.thirdPartyIntegrationsProviderStore.insert({ 
                        id: thirdPartyIntegrationsProviders.cDeliverect, 
                        name: thirdPartyIntegrationsProviders.mapName[thirdPartyIntegrationsProviders.cDeliverect].name 
                    });
                }
                if (providerId == thirdPartyIntegrationsProviders.cOtter) {
                    self.dataSetupFoodModal.thirdPartyIntegrationsProviderStore.insert({ 
                        id: thirdPartyIntegrationsProviders.cOtter, 
                        name: thirdPartyIntegrationsProviders.mapName[thirdPartyIntegrationsProviders.cOtter].name 
                    });
                }
            });

            self.dataSetupFoodModal.thirdPartyIntegrationsProviderIds([]);
            if (!isEmpty(data.thirdPartyIntegrationsProviderId())) {
                var foodThirdPartyIntegrationsProviderIds = data.thirdPartyIntegrationsProviderId().split(',').map(Number);
                self.dataSetupFoodModal.thirdPartyIntegrationsProviderIds(foodThirdPartyIntegrationsProviderIds);
            }
        }        
        //End Added by WEB-SA23-0048
        //Added by SMILEDINING-SA21-0066#7
        //Modified by SMILEDINING-SA21-0066#21
        //vmViewIndex.menu.optionSelectPickerChoiceOption([]);
        //if (!isEmpty(data.plu())) {
        //    ko.utils.arrayForEach(vmViewIndex.menu.optionSelectPickerChoiceOptionInit(), function (value) {
        //        vmViewIndex.menu.optionSelectPickerChoiceOption.push(new optionSelectChoiceOption(value.choiceOptionId, value.choiceOptionName));
        //    });
        //} else {
        //    ko.utils.arrayForEach(vmViewIndex.menu.optionSelectPickerChoiceOptionInit(), function (value) {
        //        if (isEmpty(value.plu)) {
        //            vmViewIndex.menu.optionSelectPickerChoiceOption.push(new optionSelectChoiceOption(value.choiceOptionId, value.choiceOptionName));
        //        }
        //    });
        //}
        //End Modified by SMILEDINING-SA21-0066#21
        //End Added by SMILEDINING-SA21-0066#7

        //Modified by SMILEDINING-SA21-0019
        //if (event.currentTarget.id == "divEditItem") {
        //    var target = $(event.target).parent().parent();
        //} else {
        //    var target = $(event.target).parent().parent().parent();
        //}
        //End Modified by SMILEDINING-SA21-0019
        //Added by SMILEDINING-SA21-0019#1
        if (event.currentTarget.id == "divEditItem") {
            var target = $(event.target).parent().parent();
        } else {
            var target = $(event.target).parent().parent().parent();
        }
        //End Added by SMILEDINING-SA21-0019#1

        //Modified by SMILEDINING-SA21-0019#1
        //var target = $(event.target).parent().parent().parent();    //Added and End by SMILEDINING-SA21-0019      
        //var image = target.find('img').attr('src');
        //End Modified by SMILEDINING-SA21-0019#1

        var image = data.image();   //Added and End by SMILEDINING-SA21-0019#1
        var imageThirdParty = data.imageThirdParty();   //Added and End by SMILEDINING-SA21-0066#6

        //Modified by SMILEDINING-SA21-0021
        //if (typeof image != 'undefined') {
        //    if (image.trim().length > 0) {
        //        $('#modalSetupFood').find('img').attr('src', image);
        //        $('#modalSetupFood').find('img').attr('width', target.find('img').width());
        //        $('#modalSetupFood').find('img').attr('height', target.find('img').height());
        //    } else {
        //        self.dataSetupFoodModal.image('');
        //        $('#modalSetupFood').find('img').attr('src', '');
        //        $('#modalSetupFood').find('img').removeAttr('src');
        //        $('#uploaderEdit' + data.tempId()).val('');
        //    }
        //} else {
        //    self.dataSetupFoodModal.image('');
        //    $('#modalSetupFood').find('img').attr('src', '');
        //    $('#modalSetupFood').find('img').removeAttr('src');
        //    $('#uploaderEdit' + data.tempId()).val('');
        //}
        //End Modified by SMILEDINING-SA21-0021
        //Added by SMILEDINING-SA21-0021
        //if (typeof image != 'undefined') {
        //    if (image.trim().length > 0) {
        //End Modified by SMILEDINING-SA21-0066#6
        //Added by SMILEDINING-SA21-0066#6
        if (typeof image != 'undefined' || imageThirdParty != 'undefined') {
            if (image.trim().length > 0 || imageThirdParty.trim().length > 0) {
        //End Added by SMILEDINING-SA21-0066#6
                //$('#modalSetupFood .image').find('img').attr('src', image); //Modified and End by SMILEDINING-SA21-0066#6
                $('#modalSetupFood .image').find('img').attr('src', imageThirdParty.trim().length > 0 ? imageThirdParty : image); //Added and End by SMILEDINING-SA21-0066#6
                //Modified by SMILEDINING-SA21-0019#1
                //$('#modalSetupFood .image').find('img').attr('width', target.find('img').width());
                //$('#modalSetupFood .image').find('img').attr('height', target.find('img').height());
                //End Modified by SMILEDINING-SA21-0019#1
                //Added by SMILEDINING-SA21-0019#1
                $('#modalSetupFood .image').find('img').attr('width', '115');
                $('#modalSetupFood .image').find('img').attr('height', '115');
                //End Added by SMILEDINING-SA21-0019#1
            } else {
                self.dataSetupFoodModal.image('');
                self.dataSetupFoodModal.imageThirdParty(''); //Added and End by SMILEDINING-SA21-0066#6
                $('#modalSetupFood .image').find('img').attr('src', '');
                $('#modalSetupFood .image').find('img').removeAttr('src');
                $('#uploaderEdit' + data.tempId()).val('');
            }
        } else {
            self.dataSetupFoodModal.image('');
            self.dataSetupFoodModal.imageThirdParty(''); //Added and End by SMILEDINING-SA21-0066#6
            $('#modalSetupFood .image').find('img').attr('src', '');
            $('#modalSetupFood .image').find('img').removeAttr('src');
            $('#uploaderEdit' + data.tempId()).val('');
        }
        //End Added by SMILEDINING-SA21-0021
        self.optionSelectPickerChoiceOptionTemp([]);
        copyFood(self.dataSetupFoodModal.foodId(), event, 0);

        //Added by SMILEDINING-SA21-0066#6
        if (data.plu() != '') {
            $('#modalSetupFood #selectPickerSection, #modalSetupFood #selectPickerRevenue, #modalSetupFood #selectCopyFood').dxSelectBox({ disabled: true, });
            $('#modalSetupFood #tagFood, #modalSetupFood #iconFood').dxTagBox({ disabled: true, });
            $('#modalSetupFood #grid-icon').dxDataGrid({ disabled: true, });

        } else {
            $('#modalSetupFood #selectPickerSection, #modalSetupFood #selectPickerRevenue, #modalSetupFood #selectCopyFood').dxSelectBox({ disabled: false, });
            $('#modalSetupFood #tagFood, #modalSetupFood #iconFood').dxTagBox({ disabled: false, });
            $('#modalSetupFood #grid-icon').dxDataGrid({ disabled: false, });
        }
        //End Added by SMILEDINING-SA21-0066#6
    };

    self.clickCopyFoodDetail = function (data) {
        var copyFoodId = data.menu.dataSetupFoodModal.valCopyFood();
        //copyFood(copyFoodId, event, 1);   //Modified and End by SMILEDINING-SA21-0018#3
        //Added by SMILEDINING-SA21-0018#3
        //self.choiceOptionsInThirdPartyGroup().length > 0 ? copyFoodThirdParty(copyFoodId, event, 1) : copyFood(copyFoodId, event, 1); //Modified and End by SMILEDINING-SA21-0066#21
        self.choiceOptionsInThirdPartyGroup().length > 0 ? copyFoodThirdParty(copyFoodId, event, 1) : copyFood(copyFoodId, event, 1, true); //Added and End by SMILEDINING-SA21-0066#21
        replaceChoiceOptionThirdParty();
        //End Added by SMILEDINING-SA21-0018#3
    };

    //self.clickClearCopyFood = function () { //Modified and End by SMILEDINING-SA21-0066#22
    //Added by SMILEDINING-SA21-0066#22
    //Modified by SMILEDINING-SA21-0066#23
    //self.clickClearCopyFood = function (data) { 
    //    var isClear = true;
    //    if (data.length > 0) {
    //        ko.utils.arrayFirst(data, function (choiceOption) {
    //            if (!isEmpty(choiceOption.Plu())) {
    //                isClear = false;
    //                return true;
    //            } else {
    //                if (choiceOption.Choice().length > 0) {
    //                    return ko.utils.arrayFirst(choiceOption.Choice(), function (choice) {
    //                        if (!isEmpty(choice.Plu())) {
    //                            isClear = false;
    //                            return true;
    //                        }
    //                    });
    //                }
    //            }
    //        });
    //    }
    //    if (isClear) {
    ////End Added by SMILEDINING-SA21-0066#22
    //        self.choiceOptions([]);
    //        self.choice([]);
    //        self.optionSelectPickerChoiceOptionTemp([]);
    //        self.dataSetupFoodModal.dataOptionFood([]);
    //        replaceChoiceOptionThirdParty();    //Added and End by SMILEDINING-SA21-0018#2
    //    } //Added and End by SMILEDINING-SA21-0066#22
    //};
    //End Modified by SMILEDINING-SA21-0066#23
    //Added by SMILEDINING-SA21-0066#23
    self.clickClearCopyFood = function () {
        self.choiceOptions([]);
        self.choice([]);
        self.optionSelectPickerChoiceOptionTemp([]);
        self.dataSetupFoodModal.dataOptionFood([]);
        replaceChoiceOptionThirdParty();
    };
    self.disableClickClearCopyFood = ko.observable(false);
    //End Added by SMILEDINING-SA21-0066#23

    //Added by SMILEDINING-SA21-0018
    self.clickBtnLinkFood = function (data, event) {
        self.thirdPartyGroups([]);
        self.foodInThirdPartyGroup([]);
        //Added and End by SMILEDINING-SA21-0018#2
        self.choiceOptionsInThirdPartyGroup([]);
        self.baseFoodThirdParty('');
        //End Added by SMILEDINING-SA21-0018#2
        linkThirdParty(data, event);
        self.chkBtnAddFood(false);
        vmViewIndex.menu.disableButtonSubmit(false)
        //Added by SMILEDINING-SA21-0066#7
        //Modified by SMILEDINING-SA21-0066#21
        //vmViewIndex.menu.optionSelectPickerChoiceOption([]);
        //if (!isEmpty(data.plu())) {
        //    ko.utils.arrayForEach(vmViewIndex.menu.optionSelectPickerChoiceOptionInit(), function (value) {
        //        vmViewIndex.menu.optionSelectPickerChoiceOption.push(new optionSelectChoiceOption(value.choiceOptionId, value.choiceOptionName));
        //    });
        //} else {
        //    ko.utils.arrayForEach(vmViewIndex.menu.optionSelectPickerChoiceOptionInit(), function (value) {
        //        if (isEmpty(value.plu)) {
        //            vmViewIndex.menu.optionSelectPickerChoiceOption.push(new optionSelectChoiceOption(value.choiceOptionId, value.choiceOptionName));
        //        }
        //    });
        //}
        //End Modified by SMILEDINING-SA21-0066#21
        //End Added by SMILEDINING-SA21-0066#7
    };
    //End Added by SMILEDINING-SA21-0018

    //Added By SMILEDINING-SA20-0006
    self.productId = ko.observable();
    self.clickSelectCheckBoxProduct = function (data, event) {
        var obj = [];
        self.productId('');
        ko.utils.arrayForEach(self.dataSetupFoodModal.arrProduct(), function (item) {
            obj.push(parseInt(item));
        });
        var sort = _.sortBy(obj);
        self.productId(sort.join(','));
        self.dataSetupFoodModal.productId(self.productId());

        self.dataSetupFoodModal.isShowProductTags(self.dataSetupFoodModal.arrProduct().includes('5') ? true : false);   //Added and End by SMILEDINING-SA21-0014#4        
        return true
    };
    //End Added By SMILEDINING-SA20-0006

    self.clickCopyFood = function (data, event) {
        self.chkClickCopyFood(true);
        $(event.target).closest("div .border-food").addClass('border-copy-food');
        //Modified by SMILEDINING-SA18-0033
        //$(event.target).closest(".link-copy-food").removeClass('copy-active');
        //$(event.target).closest(".link-copy-food").addClass('copy-not-active');
        //End Modified by SMILEDINING-SA18-0033
        copyFood(data.foodId(), event, 0);
        //self.arrModelCopyFood.push(new CopyfoodInFoodCategory(data.foodId(), data.tempId(), data.foodName(), data.foodDesc(), data.foodPrice(), data.image(),     //Modified and End by SMILEDINING-SA18-0012
        //self.arrModelCopyFood.push(new CopyfoodInFoodCategory(data.foodId(), data.tempId(), data.foodName(), data.foodNameAlt(), data.foodDesc(), data.foodPrice(), data.image(),    //Added and End by SMILEDINING-SA18-0012     //Modified and End by SMILEDINING-SA20-0006
        self.arrModelCopyFood.push(new CopyfoodInFoodCategory(data.foodId(), data.tempId(), data.foodName(), data.foodNameAlt(), data.foodDesc(), data.productId, data.foodPrice(), data.image(),    //Added and End by SMILEDINING-SA20-0006
                                                              data.active(), data.revenueClassId(), data.taxRateId(), data.foodCatId(), data.foodSetId(),
                                                              //self.dataSetupFoodModal.dataOptionFood())); //Modified and End by SMILEDINING-SA20-0010
                                                              //self.dataSetupFoodModal.dataOptionFood(), data.isOutStock())); //Added and End by SMILEDINING-SA20-0010     //Modified and End by SMILEDINING-SA20-0016
                                                              //self.dataSetupFoodModal.dataOptionFood(), data.isOutStock(), data.isFree(), data.isShow())); //Added and End by SMILEDINING-SA20-0016   //Modified and End by SMILEDINING-SA21-0014
                                                              //Added by SMILEDINING-SA21-0014   
                                                              //self.dataSetupFoodModal.dataOptionFood(), data.isOutStock(), data.isFree(), data.isShow(), data.listProductTag()) //Modified and End by SMILEDINING-SA21-0066#20
                                                              self.dataSetupFoodModal.dataOptionFood(), data.isOutStock(), data.isFree(), data.isShow(), data.listProductTag(), data.plu(), data.imageThirdParty()) //Added and End by SMILEDINING-SA21-0066#20
                                                              );
        //End Added SMILEDINING-SA21-0014
        updateCart();
        self.choiceOptions([]);
        self.choice([]);
        self.dataSetupFoodModal.dataOptionFood([]);
    };

    self.clickDeleteFoodInCart = function (data, event) {
        var foodId = data.TempId();
        var idBorder = "#border-food_" + foodId;
        var idSelectCopy = "#selectcopyfood_" + foodId;
        self.arrModelCopyFood.remove(data);
        $(idBorder).removeClass('border-copy-food');
        //Modified by SMILEDINING-SA21-0066#21
        //$(idSelectCopy).find(".link-copy-food").removeClass('copy-not-active');
        //$(idSelectCopy).find(".link-copy-food").addClass('copy-active');
        //End Modified by SMILEDINING-SA21-0066#21
        updateCart();
        self.choiceOptions([]);
        self.choice([]);
        self.dataSetupFoodModal.dataOptionFood([]);
    };

    self.clickPasteFood = function (data, event) {
        if (self.arrModelCopyFood().length <= 0) {
            swal('Invalid Copy Food', 'Please choose Food to Copy.', cSwal_Icon_Error);
        } else {
            vmViewIndex.showLoading(true);
            var foodSetId = data.foodSet.foodSetId();
            var foodSetName = data.foodSet.foodSetName();
            var foodCatId = data.foodCategory.foodCatId();
            self.dataSetupFoodModal.foodSetId(foodSetId);
            self.dataSetupFoodModal.foodCatId(foodCatId);
            self.chkClickCopyFood(false);
            $("#submitCopy").click();
        }
    };

    self.clickBtnDisableFoodCategory = function (data) {
        //changeActiveFoodCategory(cDisableFoodCategory, data); //Modified and End by WEB-SA23-0001
        //Added by WEB-SA23-0001
        if (checkMqttConnection(cDisableFoodCategory)) {
            changeActiveFoodCategory(cDisableFoodCategory, data);
        } else {
            swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
            vmViewIndex.isKiosk(false);
        }
        //End Added by WEB-SA23-0001
    };

    self.clickIsDefaultChoice = function (parentIndex, childIndex) {
        var self = vmViewIndex.menu;
        var chk = self.choiceOptions()[parentIndex].Choice()[childIndex].IsDefault();
        self.choiceOptions()[parentIndex].Choice()[childIndex].IsDefault(!chk);
        self.choiceOptions()[parentIndex].Choice()[childIndex].checkedIsDefault(!chk);
        //Modified by SMILEDINING-SA21-0018#2
        //if (!chk) {
        //    var length = self.choiceOptions()[parentIndex].Choice().length;
        //    for (var i = 0; i < length; i++) {
        //        if (i != childIndex) {
        //            self.choiceOptions()[parentIndex].Choice()[i].IsDefault(false);
        //            self.choiceOptions()[parentIndex].Choice()[i].checkedIsDefault(false);
        //            $('#ChoiceOption_' + parentIndex + '_Choice_' + i + '_IsDefault').removeClass();
        //            $('#ChoiceOption_' + parentIndex + '_Choice_' + i + '_IsDefault').addClass('default-choice-uncheck');
        //        }
        //    }
        //    $('#ChoiceOption_' + parentIndex + '_Choice_' + childIndex + '_IsDefault').removeClass();
        //    $('#ChoiceOption_' + parentIndex + '_Choice_' + childIndex + '_IsDefault').addClass('chkDefault default-choice-check');
        //} else {
        //    $('#ChoiceOption_' + parentIndex + '_Choice_' + childIndex + '_IsDefault').removeClass();
        //    $('#ChoiceOption_' + parentIndex + '_Choice_' + childIndex + '_IsDefault').addClass('default-choice-uncheck');
        //}
        //End Modified by SMILEDINING-SA21-0018#2
        //Added by SMILEDINING-SA21-0018#2
        var id = self.choiceOptionsInThirdPartyGroup().length > 0 ? '#modalSetupFoodThirdParty #ChoiceOption_' : '#ChoiceOption_';
        if (!chk) {
            var length = self.choiceOptions()[parentIndex].Choice().length;
            for (var i = 0; i < length; i++) {
                if (i != childIndex) {
                    self.choiceOptions()[parentIndex].Choice()[i].IsDefault(false);
                    self.choiceOptions()[parentIndex].Choice()[i].checkedIsDefault(false);
                    $(id + parentIndex + '_Choice_' + i + '_IsDefault').removeClass();
                    $(id + parentIndex + '_Choice_' + i + '_IsDefault').addClass('default-choice-uncheck');
                }
            }
            $(id + parentIndex + '_Choice_' + childIndex + '_IsDefault').removeClass();
            $(id + parentIndex + '_Choice_' + childIndex + '_IsDefault').addClass('chkDefault default-choice-check');
        } else {
            $(id + parentIndex + '_Choice_' + childIndex + '_IsDefault').removeClass();
            $(id + parentIndex + '_Choice_' + childIndex + '_IsDefault').addClass('default-choice-uncheck');
        }
        //End Added by SMILEDINING-SA21-0018#2

        self.dataSetupFoodModal.dataOptionFood(ko.toJSON(self.choiceOptions()));
        replaceChoiceOptionThirdParty();    //Added and End by SMILEDINING-SA21-0018#2
    };

    self.popoverShowtimes = {
        target: "#link-showtimes",
        showEvent: "dxhoverstart",
        hideEvent: "dxhoverend",
        position: "bottom",
        width: 280,
        showTitle: true,
        title: "Day of the week.",
        visible: false,
        animation: {
            show: {
                type: "pop",
                from: { scale: 0 },
                to: { scale: 1 }
            },
            hide: {
                type: "fade",
                from: 1,
                to: 0
            }
        },
        onContentReady: function (args) {
            var html = args.component.content();
            $(html).css("padding", "10px");
        }
    };

    //Added by SMILEDINING-SA21-0066#24
    self.clickUnlockFoodDeliverect = function (data) {
        swalUnlockFoodDeliverect(data);
    };
    //End Added by SMILEDINING-SA21-0066#24
}


function SetupMenuViewModel() {
    var self = this;
    self.foodSetId = ko.observable();
    self.foodSetName = ko.observable();
    self.active = ko.observable(true);
    self.isThirdParty = ko.observable(false);   //Added and End by SMILEDINING-SA21-0018
    //Added by WEB-SA23-0048
    self.thirdPartyIntegrationsProviderId = ko.observable('');
    self.thirdPartyIntegrationsProviderIds = ko.observableArray([]);
    self.thirdPartyIntegrationsProviderStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            { id: thirdPartyIntegrationsProviders.cDeliverect, name: thirdPartyIntegrationsProviders.mapName[thirdPartyIntegrationsProviders.cDeliverect].name },
            { id: thirdPartyIntegrationsProviders.cOtter, name: thirdPartyIntegrationsProviders.mapName[thirdPartyIntegrationsProviders.cOtter].name },
        ],
    });

    self.selectThirdPartyIntegrationsProviderIds = ko.observable({
        dataSource: self.thirdPartyIntegrationsProviderStore,
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.thirdPartyIntegrationsProviderIds,
        showDropDownButton: true,
        searchEnabled: false,
        showSelectionControls: true,
        showMultiTagOnly: false,
        onValueChanged: function (e) {
            var newValues = e.value;
            var sort = _.sortBy(newValues);
            self.thirdPartyIntegrationsProviderId(sort.join(','));
        },
    });
    //End Added by WEB-SA23-0048

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.active,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    //Added by SMILEDINING-SA21-0018
    self.clickIsThirdParty = function (data) {
        var isThirdParty = data.menu.dataSetupFoodSetModal.isThirdParty();
        if (isThirdParty) {
            self.isThirdParty(true);
            self.thirdPartyIntegrationsProviderIds([thirdPartyIntegrationsProviders.cDeliverect, thirdPartyIntegrationsProviders.cOtter]); //Added and End by WEB-SA23-0048
        } else {
            self.isThirdParty(false);
        }
        return true;
    };
    //End Added by SMILEDINING-SA21-0018

    self.btnCloseSetupFoodSet = function () {
        self.clearSetupFoodSet();
    };

    self.clearSetupFoodSet = function () {
        self.active(true);
        self.foodSetName('');
        //Added by SMILEDINING-SA21-0018
        self.isThirdParty(false);
        self.thirdPartyIntegrationsProviderIds([]); //Added and End by WEB-SA23-0048
        //document.getElementById('chkFoodSetSetUp_IsthirdParty').disabled = false;     //Modified and End by SMILEDINING-SA21-0018#1
        //End Added by SMILEDINING-SA21-0018
        enableOrDisableCheckBox(cfrmFoodSetUp_ThirdParty, false); //Added and End by SMILEDINING-SA21-0018#1
    };
}

function SetupSectionViewModel() {
    var self = this;
    self.foodCatId = ko.observable();
    self.foodCatName = ko.observable();
    self.foodCatDesc = ko.observable();
    self.foodCatSorting = ko.observable();
    self.active = ko.observable(true);

    self.btnCloseSetupFoodCategory = function () {
        self.clearSetupFoodCategory();
    };

    self.clearSetupFoodCategory = function () {
        self.active(true);
        self.foodCatName('');
        self.foodCatDesc('');
    };
}

function SetupItemViewModel() {
    var self = this;
    self.foodId = ko.observable();
    self.tempId = ko.observable();

    //Modified by SMILEDINING-SA18-0023
    //self.foodName = ko.observable();
    //self.foodNameAlt = ko.observable();  //Added and End by SMILEDINING-SA18-0012
    //End Modified by SMILEDINING-SA18-0023

    //Add by SMILEDINING-SA18-0023
    self.foodName = ko.observable('');
    self.foodNameAlt = ko.observable('');
    //End Add by SMILEDINING-SA18-0023
    //Added by SMILEDINING-SA20-0006
    self.arrProduct = ko.observableArray([]);
    self.productId = ko.observable();
    //End Added by SMILEDINING-SA20-0006
    self.foodDesc = ko.observable();
    self.foodPrice = ko.observable(0.00).extend({ numeric: 2 });
    //Added by SMILEDINING-SA20-0003
    self.blurFoodPrice = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0.00;
        }
        self.foodPrice(value);
    }
    //End Added by SMILEDINING-SA20-0003
    self.foodSorting = ko.observable();
    self.active = ko.observable(true);
    self.isOutStock = ko.observable(false); //Added and End by SMILEDINING-SA20-0010
    //Added by SMILEDINING-SA20-0016
    self.isFree = ko.observable(false);
    self.isShow = ko.observable(true);
    //End Added by SMILEDINING-SA20-0016
    self.foodSetId = ko.observable();
    self.foodCatId = ko.observable();
    self.revenueClassId = ko.observable();
    self.taxRateId = ko.observable();
    self.image = ko.observable('');
    //Added by SMILEDINING-SA21-0066#6
    self.imageThirdParty = ko.observable('');
    self.plu = ko.observable('');
    //End Added by SMILEDINING-SA21-0066#6
    //Added by SMILEDINING-SA21-0018
    self.thirdPartyGroupId = ko.observable();
    self.foodBaseId = ko.observable();
    self.isThirdParty = ko.observable();
    self.allChoiceOptions = ko.observable('');
    //End Added by SMILEDINING-SA21-0018
    self.dataAllChoiceOption = ko.observableArray([]);
    self.dataAllChoice = ko.observableArray([]);
    self.dataRevenueClass = ko.observableArray([]);
    //Added by SMILEDINING-SA18-0026
    self.listFood = ko.observableArray([]);
    self.listFoodChoiceMap = ko.observableArray([]);
    //End Added by SMILEDINING-SA18-0026
    self.dataCopyFood = ko.observableArray([]);
    self.valCopyFood = ko.observable();
    self.dataOptionFood = ko.observableArray([]);
    self.groupChoiceOptionId = ko.observableArray([]);
    //Added by SMILEDINING-SA21-0014
    self.cloneArrayProductTag = ko.observableArray([]);
    self.listProductTag = ko.observableArray([]);
    self.productTagSelect = ko.observable('');
    //End Added by SMILEDINING-SA21-0014
    //Added by SMILEDINING-SA21-0021
    self.cloneArrayIcon = ko.observableArray([]);
    self.listIcon = ko.observableArray([]);
    self.listIconForDrag = ko.observableArray([]);
    self.showIconDrag = ko.observable(false);
    //End Added by SMILEDINING-SA21-0021
    //Added by SMILEDINING-SA20-0003
    self.showLimit = ko.observable(false);
    self.qtyLimit = ko.observable(0);
    self.blurQtyLimit = function () {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        }
        self.qtyLimit(value);
    }
    //End Added by SMILEDINING-SA20-0003

    self.isShowProductTags = ko.observable(false);  //Added and End by SMILEDINING-SA21-0014#4
    //Added by WEB-SA23-0048
    self.thirdPartyIntegrationsProviderId = ko.observable('');
    self.thirdPartyIntegrationsProviderIds = ko.observableArray([]);
    self.thirdPartyIntegrationsProviderStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [],
    });

    self.selectThirdPartyIntegrationsProviderIds = ko.observable({
        dataSource: self.thirdPartyIntegrationsProviderStore,
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.thirdPartyIntegrationsProviderIds,
        showDropDownButton: true,
        searchEnabled: false,
        showSelectionControls: true,
        showMultiTagOnly: false,
        onValueChanged: function (e) {
            var newValues = e.value;
            var sort = _.sortBy(newValues);
            self.thirdPartyIntegrationsProviderId(sort.join(','));
        },
    });
    //End Added by WEB-SA23-0048
    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.active,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
                //Added by SMILEDINING-SA20-0016
                $('#switchOutStock').removeClass('dx-state-disabled');
                $('#switchIsFree').removeClass('dx-state-disabled');
                $('#switchIsShow').removeClass('dx-state-disabled');
                //End Added by SMILEDINING-SA20-0016
            } else {
                self.active(false);
                //Added by SMILEDINING-SA20-0016
                $('#switchOutStock').addClass('dx-state-disabled');
                $('#switchIsFree').addClass('dx-state-disabled');
                $('#switchIsShow').addClass('dx-state-disabled');
                //End Added by SMILEDINING-SA20-0016
            }
        }
    });

    //Added by SMILEDINING-SA20-0010
    self.switchOutStock = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.isOutStock,
        disabled: !self.active,  //Added and End by SMILEDINING-SA20-0016
        onValueChanged: function (item) {
            if (item.value == true) {
                self.isOutStock(true);
            } else {
                self.isOutStock(false);
            }
        }
    });
    ///End Added by SMILEDINING-SA20-0010

    //Added by SMILEDINING-SA20-0016
    self.switchIsFree = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.isFree,
        disabled: !self.active,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.isFree(true);
            } else {
                self.isFree(false);
            }
        }
    });
    self.switchIsShow = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.isShow,
        disabled: !self.active,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.isShow(true);
            } else {
                self.isShow(false);
            }
        }
    });

    self.showSwitch = ko.observable(false);
    self.popupSwitch = ko.observable({
        contentTemplate: "switchSetting",
        position: { my: 'left', at: 'left bottom', offset: '-200 80', of: $("#btnSwitch") },
        height: 190,
        width: 300,
        shading: false,
        async: false,
        model: false,
        showTitle: false,
        visible: self.showSwitch,
        dragEnabled: false,
        closeOnOutsideClick: true
    });
    //End Added by SMILEDINING-SA20-0016

    //Added by SMILEDINING-SA21-0018
    self.popupSwitchThirdParty = ko.observable({
        contentTemplate: "switchSetting",
        position: { my: 'left', at: 'left bottom', offset: '-200 80', of: $("#btnSwitchThirdPart") },
        height: 190,
        width: 300,
        shading: false,
        async: false,
        model: false,
        showTitle: false,
        visible: self.showSwitch,
        dragEnabled: false,
        closeOnOutsideClick: true
    });
    //End Added by SMILEDINING-SA21-0018

    //Added by SMILEDINING-SA21-0014
    self.selectTag = ko.observable({
        dataSource: self.cloneArrayProductTag,
        displayExpr: 'productTagName',
        valueExpr: 'productTagId',
        value: self.listProductTag,
        showDropDownButton: true,
        searchEnabled: true,
        onValueChanged: function (e) {
            var newValues = e.value;
            self.productTagSelect(ko.toJSON(newValues));
        }
    });
    //End Added by SMILEDINING-SA21-0014

    //Added by SMILEDINING-SA21-0021
    self.selectIcon = ko.observable({
        dataSource: self.cloneArrayIcon,
        displayExpr: 'iconName',
        valueExpr: 'iconId',
        value: self.listIcon,
        showDropDownButton: true,
        searchEnabled: true,
        showSelectionControls: true,
        maxDisplayedTags: 0,
        onOpened: function (e) {
            $('.dx-list-select-all').hide();
        },
        itemTemplate: function (data) {
            return "<div class='custom-item'><img class='img-icon' src='" +
                data.iconImage() + "' /><div class='product-name'>" +
                data.iconName() + "</div></div>";
        },
        onValueChanged: function (e) {

            var newValues = e.value;
            var previousValue = e.previousValue;
            if (newValues.length > previousValue.length) {  //Added เพิ่ม
                var filterDataNew = ko.utils.arrayFilter(vmViewIndex.menu.dataSetupFoodModal.cloneArrayIcon(), function (itemIcon) {
                    return itemIcon.iconId() == newValues[newValues.length - 1];
                });


                var maxSorting = 1;
                if (previousValue.length == 0) {
                    var dataStoreIcon = ko.observableArray([]);
                    dataStoreIcon.push(new iconSortingModel(_.first(filterDataNew), maxSorting));
                    var dataIconStore = new DevExpress.data.ArrayStore({
                        key: 'iconId',
                        data: dataStoreIcon()
                    });
                    vmViewIndex.menu.dataSetupFoodModal.listIconForDrag(dataIconStore);
                }
                else if (vmViewIndex.menu.dataSetupFoodModal.listIconForDrag()._array.length > 0) {
                    maxSorting = Math.max.apply(Math, vmViewIndex.menu.dataSetupFoodModal.listIconForDrag()._array.map(function (i) { return i.sorting(); }));
                    maxSorting = maxSorting + 1;
                    var item = new iconSortingModel(_.first(filterDataNew), maxSorting);
                    vmViewIndex.menu.dataSetupFoodModal.listIconForDrag()._array.push(item);
                }

                vmViewIndex.menu.dataSetupFoodModal.showIconDrag(vmViewIndex.menu.dataSetupFoodModal.listIconForDrag()._array.length > 0 ? true : false);


            } else if (newValues.length < previousValue.length) {    //splice data
                //Added by SMILEDINING-SA21-0021#6
                if (newValues.length == 0 && previousValue.length > 1) {
                    var dataStoreIcon = ko.observableArray([]);
                    var dataIconStore = new DevExpress.data.ArrayStore({
                        key: 'iconId',
                        data: dataStoreIcon()
                    });
                    vmViewIndex.menu.dataSetupFoodModal.listIconForDrag(dataIconStore);
                }
                    //End Added by SMILEDINING-SA21-0021#6
                else {  //Added and End by SMILEDINING-SA21-0021#6
                    var idDel = '';
                    ko.utils.arrayForEach(previousValue, function (data) {
                        var filter = ko.utils.arrayFilter(newValues, function (dataNew) {
                            return dataNew == data;
                        });
                        if (filter.length == 0) {
                            idDel = data;
                        }
                    });

                    var findIndexDel = _.findIndex(vmViewIndex.menu.dataSetupFoodModal.listIconForDrag()._array, function (items) {
                        return items.iconId() == idDel;
                    });

                    var sortDel = vmViewIndex.menu.dataSetupFoodModal.listIconForDrag()._array[findIndexDel].sorting();
                    vmViewIndex.menu.dataSetupFoodModal.listIconForDrag()._array.splice(findIndexDel, 1);
                    var dataUpdate = ko.utils.arrayFilter(vmViewIndex.menu.dataSetupFoodModal.listIconForDrag()._array, function (items) {
                        return items.sorting() >= sortDel;
                    });
                    var sortable = [];
                    ko.utils.arrayForEach(dataUpdate, function (item) {
                        sortable.push({
                            iconId: item.iconId(),
                            sorting: item.sorting() - 1,
                        });
                    });
                    ko.utils.arrayForEach(sortable, function (data) {
                        vmViewIndex.menu.dataSetupFoodModal.listIconForDrag().update(data.iconId, { sorting: data.sorting });
                    });
                    refreshGrid('grid-icon');
                }    //Added and End by SMILEDINING-SA21-0021#6
                vmViewIndex.menu.dataSetupFoodModal.showIconDrag(vmViewIndex.menu.dataSetupFoodModal.listIconForDrag()._array.length > 0 ? true : false);
            }


            refreshGrid('grid-icon');
        }
    });

    self.gridIconDrag = ko.observable({
        dataSource: {
            store: self.listIconForDrag,
            sort: 'sorting'
        },
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        allowColumnReordering: true,
        columnAutoWidth: true,
        showColumnHeaders: false,
        rowAlternationEnabled: false,
        columns: [{
            dataField: "iconName",
            calculateSortValue: 'sorting',
            cellTemplate: function (container, options) {

                var filterDataAppend = ko.utils.arrayFilter(vmViewIndex.menu.dataSetupFoodModal.listIconForDrag()._array, function (item) {
                    return item.sorting() == options.rowIndex + 1;
                });
                var dataAppend = _.first(filterDataAppend);
                $("<div>")
               .append($("<img>", { "src": dataAppend.iconImage(), "class": 'img-icon' }))
               .append(dataAppend.iconName())
               .appendTo(container);
            }
        }],
        onRowPrepared: function (e) {
            if (e.rowType != 'data') { return; }
            e.rowElement
            .addClass('myRow myRow-hover')
            .data('keyValue', e.key);
        },
        onContentReady: function (e) {
            iconSortable(e.element, self.listIconForDrag());
            $("#grid-icon .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });
    //End Added by SMILEDINING-SA21-0021

    self.btnCloseSetupFood = function () {
        self.clearSetupFood();
    };

    //Added by SMILEDINING-SA21-0028
    self.imageDesktopMenu = ko.observable('');
    self.imageDesktopFood = ko.observable('');
    self.imageMobileMenu = ko.observable('');
    self.imageMobileFood = ko.observable('');

    self.tempIdDesktopMenu = ko.observable('');
    self.tempIdDesktopFood = ko.observable('');
    self.tempIdMobileMenu = ko.observable('');
    self.tempIdMobileFood = ko.observable('');

    self.btnCustomImage = function () {

        //cPathFileBase = 'DVIMAGE/8907303/';   //Modified and End by SMILEDINING-SA21-0028#5
        //cPathFileBase = cProtocal + '://' + 'img.smiledining.com' + '/' + vmViewIndex.globalConfig.shopCode() + '/';    //Added and End by SMILEDINING-SA21-0028#6    //Modified and End by SMILEDINING-SA21-0028#8
        cPathFileBase = cPathFileBase == '' ? cProtocal + '://' + 'img.smiledining.com' + '/' + vmViewIndex.globalConfig.shopCode() + '/' : cPathFileBase;    //Added and End by SMILEDINING-SA21-0028#8
        var image = self.image().replace(cPathFileBase, '');
        //Modified by SMILEDINING-SA21-0028#7
        //var pathFileDesktopMenu = cPathFileBase + cDESKTOP + '/' + cMenuPath + '/' + image;
        //var pathFileDesktopFood = cPathFileBase + cDESKTOP + '/' + cFoodPath + '/' + image;
        //var pathFileMobileMenu = cPathFileBase + cMobile + '/' + cMenuPath + '/' + image;
        //var pathFileMobileFood = cPathFileBase + cMobile + '/' + cFoodPath + '/' + image;
        //End Modified by SMILEDINING-SA21-0028#7
        //Added by SMILEDINING-SA21-0028#7
        var stringDateTime = '?' + moment(new Date).format('YYYYMMDDHHmmss');
        var pathFileDesktopMenu = cPathFileBase + cDESKTOP + '/' + cMenuPath + '/' + image + stringDateTime;
        var pathFileDesktopFood = cPathFileBase + cDESKTOP + '/' + cFoodPath + '/' + image + stringDateTime;
        var pathFileMobileMenu = cPathFileBase + cMobile + '/' + cMenuPath + '/' + image + stringDateTime;
        var pathFileMobileFood = cPathFileBase + cMobile + '/' + cFoodPath + '/' + image + stringDateTime;
        //End Added by SMILEDINING-SA21-0028#7

        //if (imageExists(pathFileDesktopMenu) && imageExists(pathFileDesktopFood) && imageExists(pathFileMobileMenu) && imageExists(pathFileMobileFood)) { //Modified and End by SMILEDINING-SA21-0028#5
        if (image != '') {  //Added and End by SMILEDINING-SA21-0028#5
            self.imageDesktopMenu(pathFileDesktopMenu);
            self.imageDesktopFood(pathFileDesktopFood);
            self.imageMobileMenu(pathFileMobileMenu);
            self.imageMobileFood(pathFileMobileFood);

            self.tempIdDesktopMenu(self.tempId());
            self.tempIdDesktopFood(self.tempId());
            self.tempIdMobileMenu(self.tempId());
            self.tempIdMobileFood(self.tempId());

            $('#modalSetUpFoodImage .image.image-desktop-menu').find('img').attr('src', pathFileDesktopMenu);
            $('#modalSetUpFoodImage .image.image-desktop-menu').find('img').attr('width', '115');
            $('#modalSetUpFoodImage .image.image-desktop-menu').find('img').attr('height', '115');

            $('#modalSetUpFoodImage .image.image-desktop-food').find('img').attr('src', pathFileDesktopFood);
            $('#modalSetUpFoodImage .image.image-desktop-food').find('img').attr('width', '115');
            $('#modalSetUpFoodImage .image.image-desktop-food').find('img').attr('height', '115');

            $('#modalSetUpFoodImage .image.image-mobile-menu').find('img').attr('src', pathFileMobileMenu);
            $('#modalSetUpFoodImage .image.image-mobile-menu').find('img').attr('width', '115');
            $('#modalSetUpFoodImage .image.image-mobile-menu').find('img').attr('height', '115');
                                             
            $('#modalSetUpFoodImage .image.image-mobile-food').find('img').attr('src', pathFileMobileFood);
            $('#modalSetUpFoodImage .image.image-mobile-food').find('img').attr('width', '115');
            $('#modalSetUpFoodImage .image.image-mobile-food').find('img').attr('height', '115');

        } else {           
            self.imageDesktopMenu('');
            self.imageDesktopFood('');
            self.imageMobileMenu('');
            self.imageMobileFood('');
            $('#modalSetUpFoodImage .image').find('img').attr('src', '');
            $('#modalSetUpFoodImage .image').find('img').removeAttr('src');
            $('#uploaderEdit' + self.tempIdDesktopMenu()).val('');
            $('#uploaderEdit' + self.tempIdDesktopFood()).val('');
            $('#uploaderEdit' + self.tempIdMobileMenu()).val('');
            $('#uploaderEdit' + self.tempIdMobileFood()).val('');
        }
    };

    //End Added by SMILEDINING-SA21-0028

    self.clearSetupFood = function () {
        self.foodName('');
        self.foodNameAlt(''); //Added and End by SMILEDINING-SA18-0012
        self.foodDesc('');
        self.foodPrice('0.00');
        self.active(true);
        self.revenueClassId();
        self.taxRateId();
        self.image('');
        //Added by SMILEDINING-SA21-0066#6
        self.imageThirdParty('');
        self.plu('');
        //End Added by SMILEDINING-SA21-0066#6
        //Added by SMILEDINING-SA20-0003
        self.showLimit(false);
        self.qtyLimit(0);
        //End Added by SMILEDINING-SA20-0003
        //Added by SMILEDINING-SA20-0006
        self.arrProduct([]);
        self.productId('');
        //End Added by SMILEDINING-SA20-0006
        self.isOutStock(false); //Add and End by SMILEDINING-SA20-0010
        //Added by SMILEDINING-SA20-0016
        self.isFree(false);
        self.isShow(true);
        //End Added by SMILEDINING-SA20-0016
        //Added by SMILEDINING-SA21-0014
        self.listProductTag([]);
        self.productTagSelect('');
        //End Added by SMILEDINING-SA21-0014
        //Added by SMILEDINING-SA21-0021
        self.listIcon([]);
        self.listIconForDrag([]);
        self.showIconDrag(false);
        //End Added by SMILEDINING-SA21-0021
        self.isShowProductTags(false);  //Added and End by SMILEDINING-SA21-0014#4
        //Added by WEB-SA23-0048
        self.thirdPartyIntegrationsProviderIds([]); 
        self.thirdPartyIntegrationsProviderStore.clear();
        //End Added by WEB-SA23-0048
        var image = $('#modalSetupFood .image');
        image.parent().removeClass('filled');
        image.find('i').show();
        image.find('br').show();
        image.find('small').show();
        image.find('img').remove();
        image.append('<img>');
        $('#uploaderEdit').val('');
        self.dataOptionFood([]);
        vmViewIndex.menu.choiceOptions([]);
        vmViewIndex.menu.choice([]);
        vmViewIndex.menu.optionSelectPickerChoiceOptionTemp([]);    //Added and End by SMILEDINING-SA20-0036
        //Added by SMILEDINING-SA21-0018
        vmViewIndex.menu.listThirdPartyGroups('');
        vmViewIndex.menu.thirdPartyGroups([]);
        vmViewIndex.menu.listFoodInThirdPartyGroup('');
        vmViewIndex.menu.foodInThirdPartyGroup([]);
        //End Added by SMILEDINING-SA21-0018
        vmViewIndex.menu.choiceOptionsInThirdPartyGroup([]);    //Added and End by SMILEDINING-SA21-0018#2
        removeClassValidationError("#txtFoodSetUp_FoodPrice");
    };
}

function ConfigSetUpViewModel() {
    var self = this;
    self.choiceOption = new ChoiceOptionViewModel();
    self.choice = new ChoiceViewModel();
    self.choiceModify = new ChoiceViewModel(); //Added and End by SMILEDINING-SA20-0018
    self.taxRate = new TaxRateViewModel();
    self.revenueClass = new RevenueClassViewModel();
    //Added by SMILEDINING-SA20-0018
    self.graguityCharge = new GraguityChargeViewModel();
    self.foodPrefix = new FoodPrefixViewModel();
    //End Added by SMILEDINING-SA20-0018
    self.iconSetup = new IconViewModel(); //Added and End by SMILEDINING-SA21-0021
    self.linkToFood = new LinkToFoodViewModel(); //Added and End by SMILEDINING-SA18-0026
    self.chkDrag = ko.observable(false);
    self.chkSave = ko.observable(false);
    self.disableButtonSubmit = ko.observable(false);
    self.setDisableButtonSubmit = function () {
        self.disableButtonSubmit(true);
    }
    self.productTagStore = ko.observableArray([]); //Added and End by SMILEDINING-SA21-0014
    //Added by SMILEDINING-SA20-0018
    self.isClickTabChoice = ko.observable(false);
    self.isClickTabChoiceOption = ko.observable(false);
    self.isClickTabChoiceModify = ko.observable(false);
    self.choice.choiceTypeId(cChoiceType.option);
    self.choiceModify.choiceTypeId(cChoiceType.modify);
    //End Added by SMILEDINING-SA20-0018
}
//Added by SMILEDINING-SA18-0026
function LinkToFoodViewModel() {
    var self = this;
    self.foodId = ko.observable('');
    self.tempId = ko.observable('');
    self.foodName = ko.observable('');
    self.foodSorting = ko.observable('');
    self.active = ko.observable(true);
    self.foodSetId = ko.observable('');
    self.foodSetName = ko.observable('');
    self.foodCatId = ko.observable('');
    self.foodCatName = ko.observable('');
    self.listFood = ko.observableArray([]);
    self.listFoodChoiceMap = ko.observableArray([]);
    self.dataPrevValue = new SetUpChoiceViewModel();
    self.choiceId = ko.observable();
    self.choiceOptionId = ko.observable();
    self.selectedLinkToFood = ko.observable();

    self.gridLinkToFood = ko.observable('');
    self.btnCloseSetLinkToFood = function () {
        vmViewIndex.configSetUp.choice.showBtnLinkToFood(false);
        vmViewIndex.configSetUp.choiceModify.showBtnLinkToFood(false);  //Added and End by SMILEDINING-SA20-0018
        var gridInstance = $('#gridLinkToFood').dxTreeList('instance');
        gridInstance.deselectAll();
    };
    self.productId = ko.observable(''); //Added and End by SMILEDINING-SA20-0006
    self.isOutStock = ko.observable(false); //Added and End by SMILEDINING-SA20-0010
    //Added by SMILEDINING-SA20-0016
    self.isFree = ko.observable(false);
    self.isShow = ko.observable(true);
    //End Added by SMILEDINING-SA20-0016
};

function bindDataGridLinkToFood(data) {
    vmViewIndex.showLoading(true);
    var rowSelect = ko.observableArray([]);
    vmViewIndex.configSetUp.linkToFood.gridLinkToFood({
        dataSource: vmViewIndex.configSetUp.linkToFood.listFood,
        keyExpr: "foodId",
        scrolling: {
            mode: "standard"
        },
        showBorders: true,
        showColumnHeaders: true,
        showColumnLines: true,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        height: '550px',
        paging: {
            enabled: false
        },
        pager: {
            enabled: false
        },
        selection: {
            mode: 'multiple',
            showCheckBoxesMode: 'always',
            allowSelectAll: true,
        },
        loadPanel: {
            enabled: true,
            height: 90,
            indicatorSrc: "",
            showIndicator: true,
            showPane: true,
            text: "Loading...",
            width: 200
        },
        columns: [
            { dataField: 'foodName', caption: 'Food Name', alignment: 'left' },
             //Modified by SMILEDINING-SA18-0034
            //{ dataField: 'foodCatName', caption: 'Food Categories', alignment: 'center', width: 300, sortOrder: "asc" },
            //{ dataField: 'foodSetName', caption: 'Food Set', alignment: 'center', width: 300 }
            //End Modified by SMILEDINING-SA18-0034

            //Added by SMILEDINING-SA18-0034
            { dataField: 'foodCatName', caption: 'Food Categories', alignment: 'center', width: 250, sortOrder: "asc" },
            { dataField: 'foodSetName', caption: 'Food Set', alignment: 'center', width: 250 },
            { dataField: 'active', caption: 'Active', alignment: 'center', width: 100, sortOrder: "desc" }
            //End Added by SMILEDINING-SA18-0034
        ],
        //onRowPrepared: function (options) { //change for version devextreme 18.1
        onCellPrepared: function (options) {
            //Added by SMILEDINING-SA18-0034
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
            //End Added by SMILEDINING-SA18-0034
            var gridcheckbox = options.cellElement.parent().find('.dx-select-checkbox');
            if (options.data != undefined) {
                var fieldData = options.data.foodId();
                var key = options.rowIndex;
                ko.utils.arrayFilter(data, function (prod) {
                    if (options.columnIndex == 0) {
                        if (fieldData == prod) {
                            rowSelect.push(key);
                            gridcheckbox.addClass('dx-checkbox-checked');
                        }
                    }
                })
            }
        },
        onContentReady: function (option) {
            var gridInstance = $('#gridLinkToFood').dxTreeList('instance');
            gridInstance.selectRowsByIndexes(rowSelect());
            rowSelect([]);
            vmViewIndex.showLoading(false);
        }
    });
    $('#modalSetUpChoice').modal('hide');
    $('#modalSetUpChoiceModify').modal('hide'); //Added and End by SMILEDINING-SA20-0018
    $('#modalSetLinkToFood').modal({
        keyboard: false,
        backdrop: "static",
        show: true
    });
}

function getDataTreeListLinkToFood() {
    var gridLinkToFood = $("#gridLinkToFood").dxTreeList("instance");
    vmViewIndex.configSetUp.linkToFood.selectedLinkToFood(ko.toJSON(gridLinkToFood.getSelectedRowsData()));
    vmViewIndex.configSetUp.linkToFood.choiceId = ko.observable(vmViewIndex.configSetUp.linkToFood.dataPrevValue.choiceId());
    vmViewIndex.configSetUp.linkToFood.choiceOptionId = ko.observable(vmViewIndex.configSetUp.linkToFood.dataPrevValue.choiceOptionId());
}
//End Added by SMILEDINING-SA18-0026

function ChoiceOptionViewModel() {
    var self = this;
    self.cloneDataArrayStore = ko.observableArray([]);
    self.dataArrayStore = ko.observableArray([]);
    self.dataSetUpModal = new SetUpChoiceOptionViewModel();
    self.tempDataDragging = ko.observableArray([]);
    self.tempItemDragging = ko.observableArray([]);
    self.chkBtnAdd = ko.observable(false);
    self.chkBtnUpdate = ko.observable(false);
    self.chkSearch = ko.observable(false);
    //Added by SMILEDINING-SA19-0019
    self.pageSize = ko.observable(30);
    self.pageIndex = ko.observable(1);
    //End Added by SMILEDINING-SA19-0019
    //Added by SMILEDINING-SA21-0066#24
    self.clickUnlockChoiceOptionDeliverect = function () {
        swalUnlockChoiceOptionAndChoiceDeliverect(true);
    }
    //End Added by SMILEDINING-SA21-0066#24
    self.dataGridChoiceOption = ko.observable({
        dataSource: {
            store: self.dataArrayStore,
            sort: 'choiceSorting'
        },
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        allowColumnReordering: true,
        columnAutoWidth: true,
        rowAlternationEnabled: false,
        columns: [
            { dataField: 'choiceSorting', caption: '#', width: 40, alignment: 'center' },
            { dataField: 'choiceOptionName', caption: 'Name', width: 200 },
            { dataField: 'choiceOptionNameAlt', caption: 'Name Alt', width: 200 },
            { dataField: 'choiceMulti', caption: 'Multiple', alignment: 'center', width: 100 },
            { dataField: 'choiceRequire', caption: 'Require', alignment: 'center', width: 100 },
            { dataField: 'choiceNewLine', caption: 'New Line', alignment: 'center', width: 100 },  //Added and End by SMILEDINING-SA21-0001
            { dataField: 'active', caption: 'Active', alignment: 'center', width: 100 }
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                //Added by SMILEDINING-SA21-0066#7
                if (options.column.dataField === "choiceOptionName" && !isEmpty(options.data.plu())) {
                    //fieldHtml = "<img src='https://frontend.deliverect.com/static/media/DELIVERECT_logo_symbol.bc0a839a.svg' alt='logo-deliverect' class='float-right ml-2' width='19' height='19'/><span>" + fieldData + "</span>"; //Modified and End by SMILEDINING-SA21-0066#21
                    fieldHtml = `<img src='${cDeliverectLogo}' alt='logo-deliverect' class='float-right ml-2' width='19' height='19'/><span>${fieldData}</span>`; //Added and End by SMILEDINING-SA21-0066#21
                }
                //End Added by SMILEDINING-SA21-0066#7
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            if (vmViewIndex.configSetUp.chkDrag() == false && vmViewIndex.configSetUp.chkSave() == false) { //Added and End by SMILEDINING-SA20-0019
                var data = item.data;
                var unmap = ko.mapping.toJSON(data);
                ko.mapping.fromJSON(unmap, {}, self.dataSetUpModal);
                self.dataSetUpModal.cloneArrayProductTag(vmViewIndex.configSetUp.productTagStore.slice(0)); //Added and End by SMILEDINING-SA21-0014
                vmViewIndex.configSetUp.disableButtonSubmit(false);
                //Added by SMILEDINING-SA21-0066#6
                if (data.plu() != '') {
                    $('#modalSetUpChoiceOption .switch-custom').dxSwitch({ disabled: true, });
                    $('#modalSetUpChoiceOption #tagChoiceOption').dxTagBox({ disabled: true, });
                    $('#modalSetUpChoiceOption #selectArrange, #modalSetUpChoiceOption #selectMaxChoice').dxSelectBox({ disabled: true, });
                    $('#modalSetUpChoiceOption input').attr('disabled', 'disabled');
                } else {
                    $('#modalSetUpChoiceOption .switch-custom').dxSwitch({ disabled: false, });
                    $('#modalSetUpChoiceOption #tagChoiceOption').dxTagBox({ disabled: false, });
                    $('#modalSetUpChoiceOption #selectArrange, #modalSetUpChoiceOption #selectMaxChoice').dxSelectBox({ disabled: false, });
                    $('#modalSetUpChoiceOption input').removeAttr('disabled');
                }
                //End Added by SMILEDINING-SA21-0066#6
                $('#modalSetUpChoiceOption').modal({
                    keyboard: false,
                    backdrop: false,
                    show: true
                });
                self.chkBtnUpdate(true);
                self.chkBtnAdd(false);
            }   //Added and End by SMILEDINING-SA20-0019
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            }, {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        vmViewIndex.configSetUp.disableButtonSubmit(false);
                        self.dataSetUpModal.cloneArrayProductTag(vmViewIndex.configSetUp.productTagStore.slice(0)); //Added and End by SMILEDINING-SA21-0014
                        $('#modalSetUpChoiceOption').modal({
                            keyboard: false,
                            backdrop: false,
                            show: true
                        });
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                        //Added by SMILEDINING-SA21-0066#7
                        $('#modalSetUpChoiceOption .switch-custom').dxSwitch({ disabled: false, });
                        $('#modalSetUpChoiceOption #tagChoiceOption').dxTagBox({ disabled: false, });
                        $('#modalSetUpChoiceOption #selectArrange, #modalSetUpChoiceOption #selectMaxChoice').dxSelectBox({ disabled: false, });
                        $('#modalSetUpChoiceOption input').removeAttr('disabled');
                        //End Added by SMILEDINING-SA21-0066#7
                    }
                }
            }, {
                widget: 'dxButton',
                location: 'after',
                options: {
                    visible: vmViewIndex.configSetUp.chkDrag,
                    icon: 'fa fa-save',
                    hint: 'Save Changes',
                    type: 'success',
                    useSubmitBehavior: true,
                    onClick: function () {
                        //Modified by SMILEDINING-SA19-0019
                        //if (self.tempDataDragging().length != 0 && self.tempItemDragging().length != 0) {
                        //    swalConfirmSaveDragging(cChoiceOptionUpdateDragging, self.tempDataDragging(), self.tempItemDragging());
                        //}
                        //End Modified by SMILEDINING-SA19-0019

                        //Added by SMILEDINING-SA19-0019                          
                        var dataSortable = null;
                        self.dataArrayStore().load().done(function (data) {
                            dataSortable = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['choiceSorting'], ['asc']))();
                        });
                        //swalConfirmSaveSortableChoice(cChoiceOptionUpDateSortable, dataSortable); //Modified and End by WEB-SA23-0001
                        //End Added by SMILEDINING-SA19-0019
                        //Added by WEB-SA23-0001
                        if (checkMqttConnection(cChoiceOptionUpDateSortable)) {
                            swalConfirmSaveSortableChoice(cChoiceOptionUpDateSortable, dataSortable);
                        } else {
                            swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
                            vmViewIndex.isKiosk(false);
                        }
                        //End Added by WEB-SA23-0001
                    }
                }
            }
            , { //Undo
                widget: 'dxButton',
                location: 'after',
                options: {
                    visible: vmViewIndex.configSetUp.chkDrag,
                    icon: 'fa fa-undo',
                    hint: 'Undo/Cancel',
                    type: 'danger',
                    onClick: function (e) {
                        var selfChoiceOption = vmViewIndex.configSetUp.choiceOption;
                        vmViewIndex.showLoading(true);
                        setTimeout(function () {
                            undoDragging(selfChoiceOption);
                            refreshGrid('gridChoiceOption');
                        }, 3000);
                        vmViewIndex.configSetUp.chkDrag(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            infoText: 'Page {0} of {1}',
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            if (e.rowType != 'data') { return; }
            e.rowElement
            .addClass('myRow myRow-hover')
            .data('keyValue', e.key);
        },
        onContentReady: function (e) {
            //Added by SMILEDINING-SA19-0019
            var getPageSize = e.element.find(".dx-page-size.dx-selection").html();
            var getPageIndex = e.element.find(".dx-page.dx-selection").html();
            self.pageSize(Number(getPageSize));
            self.pageIndex(Number(getPageIndex));
            //End Added by SMILEDINING-SA19-0019

            //initDragging(e.element, "choiceOptionId", "choiceSorting", self.dataArrayStore(), self.tempDataDragging, self.tempItemDragging, "choiceOption"); //Modified and End by SMILEDINING-SA19-0019
            choiceOptionSortable(e.element, self.dataArrayStore()); //Added and End by SMILEDINING-SA19-0019

            if (self.tempDataDragging().length != 0 && self.tempItemDragging().length != 0) {
                vmViewIndex.configSetUp.chkDrag(true);
            }
            $("#gridChoiceOption .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });
}

function SetUpChoiceOptionViewModel() {
    var self = this;

    //self.clickCheckChoiceMulti = function () { return true; }

    //Added by SMILEDINING-SA18-0043
    self.clickCheckChoiceMulti = function () {
        if (self.choiceMulti() == false)
            self.maxChoice(0);
        return true;
    }
    //End Added by SMILEDINING-SA18-0043

    self.clickCheckChoiceRequire = function () { return true; }
    self.clickCheckChoiceNewLine = function () { return true; } //Added and End by SMILEDINING-SA21-0001
    self.active = ko.observable(true);
    self.choiceOptionId = ko.observable('');
    self.choiceOptionName = ko.observable('');
    self.choiceOptionNameAlt = ko.observable('');
    self.choiceSorting = ko.observable('');
    self.choiceMulti = ko.observable(false);
    self.choiceRequire = ko.observable(false);
    self.choiceNewLine = ko.observable(false);  //Added and End by SMILEDINING-SA21-0001
    //Added by SMILEDINING-SA18-0003
    self.arrange = ko.observable(0);
    self.maxChoice = ko.observable(0);
    //End Added by SMILEDINING-SA18-0003
    //Added by SMILEDINING-SA21-0014
    self.cloneArrayProductTag = ko.observableArray([]);
    self.listProductTag = ko.observableArray([]);
    self.productTagSelect = ko.observable('');
    //End Added by SMILEDINING-SA21-0014
    self.plu = ko.observable(''); //Added and End by SMILEDINING-SA21-0066#6

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.active,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    //Added by SMILEDINING-SA21-0014
    self.selectTag = ko.observable({
        dataSource: self.cloneArrayProductTag,
        displayExpr: 'productTagName',
        valueExpr: 'productTagId',
        value: self.listProductTag,
        showDropDownButton: true,
        searchEnabled: true,
        onValueChanged: function (e) {
            var newValues = e.value;
            self.productTagSelect(ko.toJSON(newValues));
        }
    });
    //End Added by SMILEDINING-SA21-0014

    //Added by SMILEDINING-SA18-0003
    self.itemMaxChoice = [{
        "maxChoice": 0,
        "value": "-"
    }, {
        "maxChoice": 1,
        "value": 1
    }, {
        "maxChoice": 2,
        "value": 2
    }, {
        "maxChoice": 3,
        "value": 3
    }, {
        "maxChoice": 4,
        "value": 4
    }, {
        "maxChoice": 5,
        "value": 5
    }, {
        "maxChoice": 6,
        "value": 6
    }, {
        "maxChoice": 7,
        "value": 7
    }, {
        "maxChoice": 8,
        "value": 8
    }, {
        "maxChoice": 9,
        "value": 9
    }, {
        "maxChoice": 10,
        "value": 10
    }]

    self.selectMaxChoice = ko.observable({
        acceptCustomValue: false,
        dataSource: self.itemMaxChoice,
        displayExpr: "value",
        value: self.maxChoice,
        valueExpr: "maxChoice",
        dropDownButtonTemplate: 'dropDownButton',
        onItemClick: function (item) {
            if (item.itemData.value != null) {
                if (item.itemData.value == "-") {
                    vmViewIndex.configSetUp.choiceOption.dataSetUpModal.maxChoice(0);
                } else {
                    vmViewIndex.configSetUp.choiceOption.dataSetUpModal.maxChoice(item.itemData.value);
                }
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
    });

    self.itemArrange = [{
        "arrange": 0,
        "value": "Default"
    }, {
        "arrange": 1,
        "value": "Left-to-Right"
    }, {
        "arrange": 2,
        "value": "Top-to-Down"
    }]

    self.selectArrange = ko.observable({
        acceptCustomValue: false,
        dataSource: self.itemArrange,
        displayExpr: "value",
        value: self.arrange,
        valueExpr: "arrange",
        dropDownButtonTemplate: 'dropDownButton',
        onItemClick: function (item) {
            if (item.itemData.value != null) {
                if (item.itemData.value == "Default") {
                    vmViewIndex.configSetUp.choiceOption.dataSetUpModal.arrange(0);
                } else if (item.itemData.value == "Left-to-Right") {
                    vmViewIndex.configSetUp.choiceOption.dataSetUpModal.arrange(1);
                } else {
                    vmViewIndex.configSetUp.choiceOption.dataSetUpModal.arrange(2);
                }
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
    });
    //End Added by SMILEDINING-SA18-0003

    self.btnCloseSetUpChoiceOption = function () {
        self.clearSetUpChoiceOption();
        vmViewIndex.configSetUp.choice.showBtnLinkToFood(false); //Added and End by SMILEDINING-SA18-0026
        vmViewIndex.configSetUp.choiceModify.showBtnLinkToFood(false);  //Added and End by SMILEDINING-SA20-0018
    };

    self.clearSetUpChoiceOption = function () {
        self.active(true);
        self.choiceOptionName('');
        self.choiceOptionNameAlt('');
        self.choiceMulti(false);
        self.choiceRequire(false);
        self.choiceNewLine(false);  //Added and End by SMILEDINING-SA21-0001
        //Added by SMILEDINING-SA18-0003
        self.arrange(0);
        self.maxChoice(0);
        //End Added by SMILEDINING-SA18-0003
        //Added by SMILEDINING-SA21-0014
        self.listProductTag([]);
        self.productTagSelect('');
        //End Added by SMILEDINING-SA21-0014
        self.plu(''); //Added and End by SMILEDINING-SA21-0066#24
    };
}

//Added by SMILEDINING-SA18-0031
function GetCopyChoice() {
    vmViewIndex.configSetUp.choice.jsonChoiceId(ko.toJSON(vmViewIndex.configSetUp.choice.listCopyChoice()));
}
//End Added by SMILEDINING-SA18-0031

function ChoiceViewModel() {
    var self = this;
    self.dataArrayStore = ko.observableArray([]);
    self.cloneDataArrayStore = ko.observableArray([]);
    self.tempDataDragging = ko.observableArray([]);
    self.tempItemDragging = ko.observableArray([]);
    self.dataChoice = ko.observableArray([]);
    self.dataChoiceOption = ko.observableArray([]);
    self.choiceOptionId = ko.observable();
    self.currentChoiceOptionSelect = ko.observable();
    self.dataSetUpModal = new SetUpChoiceViewModel();
    self.dataPrevValue = new SetUpChoiceViewModel();
    self.chkBtnAdd = ko.observable(false);
    self.chkBtnUpdate = ko.observable(false);
    self.chkSearch = ko.observable(false);
    //Added by SMILEDINING-SA18-0026
    self.showBtnLinkToFood = ko.observable(false);
    //End Added by SMILEDINING-SA18-0026
    //Added by WEB-SA22-0061
    self.isClickLinkToFood = ko.observable(false);
    self.clickLinkToFood = function () {
        self.isClickLinkToFood(true);
        $('#' + cfrmChoiceSetUp).submit()
    }
    //End Added by WEB-SA22-0061
    //Added by SMILEDINING-SA21-0066#24
    self.showBtnUnlockChoice = ko.observable(false);
    self.clickUnlockChoiceDeliverect = function () {
        swalUnlockChoiceOptionAndChoiceDeliverect(false);
    }
    //End Added by SMILEDINING-SA21-0066#24

    //Added by SMILEDINING-SA18-0031
    self.visibleListCopyChoice = ko.observable(false);
    self.listCopyChoice = ko.observableArray([]);
    self.jsonChoiceId = ko.observable('');
    self.clickDeleteInCart = ko.observable();
    self.popoverCopyChoice = ko.observable();
    self.choiceOptionCopy = ko.observable();
    //Added by SMILEDINING-SA19-0019
    self.pageSize = ko.observable(30);
    self.pageIndex = ko.observable(1);
    //End Added by SMILEDINING-SA19-0019

    self.clickCopyChoice = function () {
        //swalConfirmSaveCopyChoice(cfrmCopyChoice, self.listCopyChoice(), self.choiceOptionCopy()); //Modified and End by WEB-SA23-0001
        //Added by WEB-SA23-0001
        if (checkMqttConnection(cfrmCopyChoice)) {
            swalConfirmSaveCopyChoice(cfrmCopyChoice, self.listCopyChoice(), self.choiceOptionCopy());
        } else {
            swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
            vmViewIndex.isKiosk(false);
        }
        //End Added by WEB-SA23-0001
    };

    self.clickDeleteInCart = function (data, event) {
        var choiceGuid = data.choiceGuid();
        var idSelectCopy = "#copyChoice_" + choiceGuid;
        self.listCopyChoice.remove(data);
        $(idSelectCopy).removeClass('copy-not-active');
        $(idSelectCopy).addClass('copy-active');
        UpdateCartCopyChoice();
    };

    if (isEmpty(self.currentChoiceOptionSelect)) {
        self.choiceOptionCopy(self.currentChoiceOptionSelect);
    }
    //End Added by SMILEDINING-SA18-0031

    //Added by SMILEDINING-SA20-0018
    self.choiceTypeId = ko.observable();
    self.clickCopyChoiceModify = function () {
        //swalConfirmSaveCopyChoiceModify(cfrmCopyChoice, self.listCopyChoice(), self.choiceOptionCopy());
        swalConfirmSaveCopyChoiceModify(cfrmCopyChoice, vmViewIndex.configSetUp.choice.listCopyChoice(), self.choiceOptionCopy());
    };
    self.clickDeleteInCartModify = ko.observable();
    self.clickDeleteInCartModify = function (data, event) {
        var choiceGuid = data.choiceGuid();
        var idSelectCopy = "#copyChoiceModify_" + choiceGuid;
        self.listCopyChoice.remove(data);
        $(idSelectCopy).removeClass('copy-not-active');
        $(idSelectCopy).addClass('copy-active');
        UpdateCartCopyChoiceModify();
    };
    self.operaterArray = ko.observableArray([
        { name: cOperater.mapName[cOperater.cAdd].name, symbol: cOperater.mapSymbol[cOperater.cAdd].symbol },
        { name: cOperater.mapName[cOperater.cMultiply].name, symbol: cOperater.mapSymbol[cOperater.cMultiply].symbol }]);

    self.operaterSelect = ko.observable({
        dataSource: new DevExpress.data.ArrayStore({
            data: self.operaterArray(),
            key: 'symbol'
        }),
        displayExpr: 'name',
        valueExpr: 'symbol',
        value: self.dataSetUpModal.choiceOperator,
        placeholder: 'Select Operater',
        onItemClick: function (item) {
            var operater = item.itemData.symbol
            if (operater == cOperater.mapSymbol[cOperater.cAdd].symbol) {
                self.dataSetUpModal.choiceOperator(cOperater.mapSymbol[cOperater.cAdd].symbol);
            }
            else {
                self.dataSetUpModal.choiceOperator(cOperater.mapSymbol[cOperater.cMultiply].symbol);
            }
        }
    });
    //End Added by SMILEDINING-SA20-0018

    self.choiceOptionSelect = ko.observable({
        dataSource: {
            store: self.dataChoiceOption,
            sort: 'choiceSorting'
        },
        displayExpr: 'choiceOptionName',
        valueExpr: 'choiceOptionId',
        value: self.currentChoiceOptionSelect,
        dropDownButtonTemplate: 'dropDownButton',
        searchEnabled: true,
        onItemClick: function (item) {
            if (item.itemData.choiceOptionId != null) {
                var filter = ko.utils.arrayFilter(self.dataChoice(), function (itemChoice) {
                    return (itemChoice.choiceOptionId() == item.itemData.choiceOptionId);
                });
                self.dataArrayStore()._array = filter;
                self.cloneDataArrayStore(ko.mapping.toJS(filter));
                self.choiceOptionId(item.itemData.choiceOptionId);
                self.choiceOptionCopy(item.itemData.choiceOptionId); //Added and End by SMILEDINING-SA18-0031
                refreshGrid('gridChoice');
                refreshGrid('gridChoiceModify'); //Added and End by SMILEDINING-SA20-0018
            }
            vmViewIndex.configSetUp.chkDrag(false);
        },
        //Added by SMILEDINING-SA21-0015
        onOpened: function (e) {
            e.component._popup.option('closeOnTargetScroll', false);
        },
        //End Added by SMILEDINING-SA21-0015
    });

    self.dataGridChoice = ko.observable({
        dataSource: {
            store: self.dataArrayStore,
            sort: 'choiceSorting'
        },
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        rowAlternationEnabled: false,
        columns: [
            { dataField: 'choiceSorting', caption: '#', alignment: 'center', width: 40 },
            { dataField: 'choiceName', caption: 'Name', width: 180 },
            { dataField: 'choiceNameAlt', caption: 'Name Alt', width: 150 },
            { dataField: 'choicePrice', caption: 'Price', dataType: 'number', alignment: 'center', format: 'currency', precision: 2, width: 110 },
            { dataField: 'choiceWeight', caption: 'Weight', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2, width: 110 },
            { dataField: 'active', caption: 'Active', alignment: 'center', width: 100 }
        ],
        //Added by SMILEDINING-SA18-0031
        onCellHoverChanged: function (options) {
            //Added by SMILEDINING-SA21-0066#7
            if (!isEmpty(options.value)) {
                if (isEmpty(options.data.plu())) {
            //End Added by SMILEDINING-SA21-0066#7
            var popover = $('#popoverCopyChoice').dxPopover({
                width: 50,
                height: 50,
                hoverStateEnabled: true,
                position: "left",
                animation: {
                    show: {
                        type: "pop",
                        from: { scale: 0 },
                        to: { scale: 1 }
                    },
                    hide: {
                        type: "fade",
                        from: 1,
                        to: 0
                    }
                },
            }).dxPopover("instance");
                    if (options.eventType == 'mouseover') {
                        if (options.rowType == 'data') {
                            popover.option("contentTemplate",
                                function (contentElement) {
                                    $('<a>')
                                        .attr('id', 'copyChoice_' + options.data.choiceGuid())
                                        .attr('href', '#/')
                                        //.attr('title', 'Copy Choice')     //Modified and End by SMILEDINING-SA20-0018
                                        .attr('title', 'Copy Choice Option')    //Added and End by SMILEDINING-SA20-0018
                                        //.attr('data-bind', 'click: $root.configSetUp.choice.clickCopyChoice')
                                        .addClass('fa fa-file fa-2x link-copy-food copy-active')
                                        //On button click
                                        .on('dxclick', function () {
                                            self.visibleListCopyChoice(true);
                                            $(event.target).closest(".link-copy-food").removeClass('copy-active');
                                            $(event.target).closest(".link-copy-food").addClass('copy-not-active');

                                            vmViewIndex.configSetUp.choice.listCopyChoice.push(new CopyChoice(options.data.choiceId(), options.data.choiceName(), options.data.choiceGuid()));

                                            UpdateCartCopyChoice();
                                            popover.hide();
                                        })
                                        //End On button click
                                        .appendTo(contentElement);
                                });
                            popover.option("target", options.cellElement);
                            popover.show();
                        }
                    }
            //Added by SMILEDINING-SA21-0066#7
                }
            }
    //End Added by SMILEDINING-SA21-0066#7
        },
        //End Added by SMILEDINING-SA18-0031
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                //Added by SMILEDINING-SA21-0066#7
                if (options.column.dataField === "choiceName" && !isEmpty(options.data.plu())) {
                    //fieldHtml = "<img src='https://frontend.deliverect.com/static/media/DELIVERECT_logo_symbol.bc0a839a.svg' alt='logo-deliverect' class='float-right ml-2' width='19' height='19'/><span>" + fieldData + "</span>"; //Modified and End by SMILEDINING-SA21-0066#21
                    fieldHtml = `<img src='${cDeliverectLogo}' alt='logo-deliverect' class='float-right ml-2' width='19' height='19'/><span>${fieldData}</span>`; //Added and End by SMILEDINING-SA21-0066#21
                }
                //End Added by SMILEDINING-SA21-0066#7
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            if (vmViewIndex.configSetUp.chkDrag() == false && vmViewIndex.configSetUp.chkSave() == false) { //Added and End by SMILEDINING-SA20-0019
                var data = item.data;
                var unmap = ko.mapping.toJSON(data);
                ko.mapping.fromJSON(unmap, {}, self.dataSetUpModal);
                ko.mapping.fromJSON(unmap, {}, self.dataPrevValue);
                ko.mapping.fromJSON(unmap, {}, vmViewIndex.configSetUp.linkToFood.dataPrevValue); //Added and End by SMILEDINING-SA18-0026
                self.dataSetUpModal.cloneArrayProductTag(vmViewIndex.configSetUp.productTagStore.slice(0)); //Added and End by SMILEDINING-SA21-0014
                vmViewIndex.configSetUp.disableButtonSubmit(false);
                //Added by SMILEDINING-SA21-0066#6
                if (data.plu() != '') {
                    $('#modalSetUpChoice .switch-custom').dxSwitch({ disabled: true, });
                    $('#modalSetUpChoice #tagChoice').dxTagBox({ disabled: true, });
                    $('#modalSetUpChoice #txtChoiceSetUp_ChoiceOptionID').dxSelectBox({ disabled: true, });
                    $('#modalSetUpChoice input').attr('disabled', 'disabled');
                } else {
                    $('#modalSetUpChoice .switch-custom').dxSwitch({ disabled: false, });
                    $('#modalSetUpChoice #tagChoice').dxTagBox({ disabled: false, });
                    $('#modalSetUpChoice #txtChoiceSetUp_ChoiceOptionID').dxSelectBox({ disabled: false, });
                    $('#modalSetUpChoice input').removeAttr('disabled');
                }
                //End Added by SMILEDINING-SA21-0066#6
                $('#modalSetUpChoice').modal({
                    keyboard: false,
                    show: true,
                    backdrop: false,
                });
                self.chkBtnAdd(false);
                self.chkBtnUpdate(true);
                //Added by SMILEDINING-SA18-0026
                self.showBtnLinkToFood(true);
                self.showBtnUnlockChoice(true); //Added and End by SMILEDINING-SA21-0066#24
                //End Added by SMILEDINING-SA18-0026
            }   //Added and End by SMILEDINING-SA20-0019
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push(
                {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-search',
                        hint: 'Search',
                        onClick: function () {
                            if (self.chkSearch() == false) {
                                self.chkSearch(true);
                            } else if (self.chkSearch() == true) {
                                self.chkSearch(false);
                            }
                        }
                    }
                },
                {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-plus',
                        onClick: function () {
                            vmViewIndex.configSetUp.disableButtonSubmit(false);
                            self.dataSetUpModal.cloneArrayProductTag(vmViewIndex.configSetUp.productTagStore.slice(0)); //Added and End by SMILEDINING-SA21-0014
                            $('#modalSetUpChoice').modal({
                                keyboard: false,
                                backdrop: false,
                                show: true
                            });
                            self.chkBtnAdd(true);
                            self.chkBtnUpdate(false);
                            self.showBtnUnlockChoice(false); //Added and End by SMILEDINING-SA21-0066#24
                            //Added by SMILEDINING-SA21-0066#7
                            $('#modalSetUpChoice .switch-custom').dxSwitch({ disabled: false, });
                            $('#modalSetUpChoice #tagChoice').dxTagBox({ disabled: false, });
                            $('#modalSetUpChoice #txtChoiceSetUp_ChoiceOptionID').dxSelectBox({ disabled: false, });
                            $('#modalSetUpChoice input').removeAttr('disabled');
                            //End Added by SMILEDINING-SA21-0066#7
                        }
                    }
                }, {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        visible: vmViewIndex.configSetUp.chkDrag,
                        icon: 'fa fa-save',
                        hint: 'Save Changes',
                        type: 'success',
                        useSubmitBehavior: true,
                        onClick: function () {
                            //Modified by SMILEDINING-SA19-0019
                            //if (self.tempDataDragging().length != 0 && self.tempItemDragging().length != 0) {                                
                            //    swalConfirmSaveDragging(cChoiceUpdateDragging, self.tempDataDragging(), self.tempItemDragging());
                            //}
                            //End Modified by SMILEDINING-SA19-0019

                            //Added by SMILEDINING-SA19-0019                         
                            var dataSortable = null;
                            self.dataArrayStore().load().done(function (data) {
                                dataSortable = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['choiceSorting'], ['asc']))();
                            });
                            //swalConfirmSaveSortableChoice(cChoiceUpDateSortable, dataSortable); //Modified and End by WEB-SA23-0001
                            //End Added by SMILEDINING-SA19-0019
                            //Added by WEB-SA23-0001
                            if (checkMqttConnection(cChoiceUpDateSortable)) {
                                swalConfirmSaveSortableChoice(cChoiceUpDateSortable, dataSortable);
                            } else {
                                swal(cSwal_Alert_Error, cError_Fail_Mqtt_Connection, cSwal_Icon_Error);
                                vmViewIndex.isKiosk(false);
                            }
                            //End Added by WEB-SA23-0001
                        }
                    }
                }, { //Undo
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        visible: vmViewIndex.configSetUp.chkDrag,
                        icon: 'fa fa-undo',
                        hint: 'Undo/Cancel',
                        type: 'danger',
                        onClick: function (e) {
                            var selfChoice = vmViewIndex.configSetUp.choice;
                            vmViewIndex.showLoading(true);
                            setTimeout(function () {
                                undoDragging(selfChoice);
                                refreshGrid('gridChoice');
                            }, 3000);
                            vmViewIndex.configSetUp.chkDrag(false);
                        }
                    }
                },
                {
                    widget: 'dxSelectBox',
                    location: 'before',
                    options: self.choiceOptionSelect
                }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false,
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            if (e.rowType != 'data') { return; }
            e.rowElement
            .addClass('myRow myRow-hover')
            .data('keyValue', e.key);
        },
        onContentReady: function (e) {
            //Added by SMILEDINING-SA19-0019
            var getPageSize = e.element.find(".dx-page-size.dx-selection").html();
            var getPageIndex = e.element.find(".dx-page.dx-selection").html();
            self.pageSize(Number(getPageSize));
            self.pageIndex(Number(getPageIndex));
            //End Added by SMILEDINING-SA19-0019

            //initDragging(e.element, 'choiceId', 'choiceSorting', self.dataArrayStore(), self.tempDataDragging, self.tempItemDragging, "choice"); //Modified and End by SMILEDINING-SA19-0019
            choiceSortable(e.element, self.dataArrayStore()); //Added and End by SMILEDINING-SA19-0019

            if (self.tempDataDragging().length != 0 && self.tempItemDragging().length != 0) {
                vmViewIndex.configSetUp.chkDrag(true);
            }
            $("#gridChoice .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });

    //Added by SMILEDINING-SA20-0018
    self.dataGridChoiceModify = ko.observable({
        dataSource: {
            store: self.dataArrayStore,
            sort: 'choiceSorting'
        },
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        rowAlternationEnabled: false,
        columns: [
            { dataField: 'choiceSorting', caption: '#', alignment: 'center', width: 40 },
            { dataField: 'choiceName', caption: 'Name', width: 180 },
            { dataField: 'choiceNameAlt', caption: 'Name Alt', width: 150 },
            { dataField: 'choicePrice', caption: 'Price', dataType: 'number', alignment: 'center', format: 'currency', precision: 2, width: 110 },
            { dataField: 'choiceWeight', caption: 'Weight', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2, width: 110 },
            { dataField: 'active', caption: 'Active', alignment: 'center', width: 100 }
        ],
        onCellHoverChanged: function (options) {
            var popover = $('#popoverCopyChoice').dxPopover({
                width: 50,
                height: 50,
                hoverStateEnabled: true,
                position: "left",
                animation: {
                    show: {
                        type: "pop",
                        from: { scale: 0 },
                        to: { scale: 1 }
                    },
                    hide: {
                        type: "fade",
                        from: 1,
                        to: 0
                    }
                },
            }).dxPopover("instance");
            if (options.eventType == 'mouseover') {
                if (options.rowType == 'data') {
                    popover.option("contentTemplate",
                        function (contentElement) {
                            $('<a>')
                                .attr('id', 'copyChoiceModify_' + options.data.choiceGuid())
                                .attr('href', '#/')
                                .attr('title', 'Copy Choice Modify')
                                .addClass('fa fa-file fa-2x link-copy-food copy-active')
                                //On button click
                                .on('dxclick', function () {
                                    //self.visibleListCopyChoice(true);
                                    $(event.target).closest(".link-copy-food").removeClass('copy-active');
                                    $(event.target).closest(".link-copy-food").addClass('copy-not-active');

                                    //vmViewIndex.configSetUp.choiceModify.listCopyChoice.push(new CopyChoice(options.data.choiceId(), options.data.choiceName(), options.data.choiceGuid()));
                                    vmViewIndex.configSetUp.choice.listCopyChoice.push(new CopyChoice(options.data.choiceId(), options.data.choiceName(), options.data.choiceGuid()));
                                    vmViewIndex.configSetUp.choice.visibleListCopyChoice(true);
                                    UpdateCartCopyChoiceModify();
                                    popover.hide();
                                })
                                //End On button click
                                .appendTo(contentElement);
                        });
                    popover.option("target", options.cellElement);
                    popover.show();
                }
            }
        },
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            if (vmViewIndex.configSetUp.chkDrag() == false && vmViewIndex.configSetUp.chkSave() == false) { //Added and End by SMILEDINING-SA20-0019
                var data = item.data;
                var unmap = ko.mapping.toJSON(data);
                ko.mapping.fromJSON(unmap, {}, self.dataSetUpModal);
                ko.mapping.fromJSON(unmap, {}, self.dataPrevValue);
                ko.mapping.fromJSON(unmap, {}, vmViewIndex.configSetUp.linkToFood.dataPrevValue);
                self.dataSetUpModal.cloneArrayProductTag(vmViewIndex.configSetUp.productTagStore.slice(0)); //Added and End by SMILEDINING-SA21-0014
                vmViewIndex.configSetUp.disableButtonSubmit(false);
                $('#modalSetUpChoiceModify').modal({
                    keyboard: false,
                    show: true,
                    backdrop: false,
                });
                self.chkBtnAdd(false);
                self.chkBtnUpdate(true);
                self.showBtnLinkToFood(true);
            }   //Added and End by SMILEDINING-SA20-0019
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push(
                {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-search',
                        hint: 'Search',
                        onClick: function () {
                            if (self.chkSearch() == false) {
                                self.chkSearch(true);
                            } else if (self.chkSearch() == true) {
                                self.chkSearch(false);
                            }
                        }
                    }
                },
                {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-plus',
                        onClick: function () {
                            vmViewIndex.configSetUp.disableButtonSubmit(false);
                            self.dataSetUpModal.cloneArrayProductTag(vmViewIndex.configSetUp.productTagStore.slice(0)); //Added and End by SMILEDINING-SA21-0014
                            $('#modalSetUpChoiceModify').modal({
                                keyboard: false,
                                backdrop: false,
                                show: true
                            });
                            self.chkBtnAdd(true);
                            self.chkBtnUpdate(false);
                        }
                    }
                }, {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        visible: vmViewIndex.configSetUp.chkDrag,
                        icon: 'fa fa-save',
                        hint: 'Save Changes',
                        type: 'success',
                        useSubmitBehavior: true,
                        onClick: function () {
                            var dataSortable = null;
                            self.dataArrayStore().load().done(function (data) {
                                dataSortable = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['choiceSorting'], ['asc']))();
                            });
                            swalConfirmSaveSortableChoice(cChoiceModifyUpDateSortable, dataSortable);
                        }
                    }
                }, { //Undo
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        visible: vmViewIndex.configSetUp.chkDrag,
                        icon: 'fa fa-undo',
                        hint: 'Undo/Cancel',
                        type: 'danger',
                        onClick: function (e) {
                            var selfChoice = vmViewIndex.configSetUp.choiceModify;
                            vmViewIndex.showLoading(true);
                            setTimeout(function () {
                                undoDragging(selfChoice);
                                refreshGrid('gridChoiceModify');
                            }, 3000);
                            vmViewIndex.configSetUp.chkDrag(false);
                        }
                    }
                },
                {
                    widget: 'dxSelectBox',
                    location: 'before',
                    options: self.choiceOptionSelect
                }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false,
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            if (e.rowType != 'data') { return; }
            e.rowElement
            .addClass('myRow myRow-hover')
            .data('keyValue', e.key);
        },
        onContentReady: function (e) {
            var getPageSize = e.element.find(".dx-page-size.dx-selection").html();
            var getPageIndex = e.element.find(".dx-page.dx-selection").html();
            self.pageSize(Number(getPageSize));
            self.pageIndex(Number(getPageIndex));
            choiceModifySortable(e.element, self.dataArrayStore());

            if (self.tempDataDragging().length != 0 && self.tempItemDragging().length != 0) {
                vmViewIndex.configSetUp.chkDrag(true);
            }
            $("#gridChoiceModify .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });
    //End Added by SMILEDINING-SA20-0018
};

function SetUpChoiceViewModel() {
    var self = this;
    self.active = ko.observable(true);
    self.choiceId = ko.observable('');
    self.choiceName = ko.observable('');
    self.choiceNameAlt = ko.observable('');
    self.choiceOptionId = ko.observable('');
    self.choiceSorting = ko.observable('');
    self.choicePrice = ko.observable(0.00).extend({ numeric: 2 });
    self.choiceWeight = ko.observable(0.00).extend({ numeric: 2 });
    self.choiceOperator = ko.observable(cOperater.mapSymbol[cOperater.cAdd].symbol); //Added and End by SMILEDINING-SA20-0018
    //Added by SMILEDINING-SA21-0014
    self.cloneArrayProductTag = ko.observableArray([]);
    self.listProductTag = ko.observableArray([]);
    self.productTagSelect = ko.observable('');
    //End Added by SMILEDINING-SA21-0014
    self.plu = ko.observable(''); //Added and End by SMILEDINING-SA21-0066#6

    self.btnCloseSetUpChoice = function () {
        //self.clearSetUpChoice();        //Modified and End by SMILEDINING-SA20-0018
        //Added by SMILEDINING-SA20-0018
        self.clearSetUpChoice(vmViewIndex.configSetUp.choice.dataSetUpModal);
        vmViewIndex.configSetUp.choice.currentChoiceOptionSelect(self.choiceOptionId());
        //End Added by SMILEDINING-SA20-0018
        vmViewIndex.configSetUp.choice.showBtnLinkToFood(false); //Added and End by SMILEDINING-SA18-0026
        vmViewIndex.configSetUp.choice.showBtnUnlockChoice(false); //Added and End by SMILEDINING-SA21-0066#24
    };

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.active,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    //Added by SMILEDINING-SA21-0014
    self.selectTag = ko.observable({
        dataSource: self.cloneArrayProductTag,
        displayExpr: 'productTagName',
        valueExpr: 'productTagId',
        value: self.listProductTag,
        showDropDownButton: true,
        searchEnabled: true,
        onValueChanged: function (e) {
            var newValues = e.value;
            self.productTagSelect(ko.toJSON(newValues));
        }
    });
    //End Added by SMILEDINING-SA21-0014

    self.clearSetUpChoice = function (e) {
        self.active(true);
        self.choiceName('');
        self.choiceNameAlt('');
        self.choicePrice('0.00');
        self.choiceWeight('0.00');
        removeClassValidationError("#txtChoiceSetUp_ChoicePrice");
        removeClassValidationError("#txtChoiceSetUp_ChoiceWeight");
        //Added by SMILEDINING-SA21-0014
        self.listProductTag([]);
        self.productTagSelect('');
        //End Added by SMILEDINING-SA21-0014
        self.plu(''); //Added and End by SMILEDINING-SA21-0066#24
    };

    //Added by SMILEDINING-SA20-0018
    self.btnCloseSetUpChoiceModify = function () {
        self.clearSetUpChoiceModify(vmViewIndex.configSetUp.choiceModify.dataSetUpModal);
        vmViewIndex.configSetUp.choiceModify.currentChoiceOptionSelect(vmViewIndex.configSetUp.choiceModify.choiceOptionId());
        vmViewIndex.configSetUp.choiceModify.showBtnLinkToFood(false);
    };

    self.clearSetUpChoiceModify = function (self) {
        self.active(true);
        self.choiceName('');
        self.choiceNameAlt('');
        self.choicePrice('0.00');
        self.choiceWeight('0.00');
        self.choiceOperator(cOperater.mapSymbol[cOperater.cAdd].symbol);
        removeClassValidationError("#txtChoiceSetUp_ChoicePrice");
        removeClassValidationError("#txtChoiceSetUp_ChoiceWeight");
        //Added by SMILEDINING-SA21-0014
        self.listProductTag([]);
        self.productTagSelect('');
        //End Added by SMILEDINING-SA21-0014
    };
    //End Added by SMILEDINING-SA20-0018
}

function TaxRateViewModel() {
    var self = this;
    var dataGrid;
    self.data = ko.observableArray([]);
    self.dataSetUpModal = new SetUpTaxRateViewModel();
    self.chkBtnAdd = ko.observable(false);
    self.chkBtnUpdate = ko.observable(false);
    self.chkSearch = ko.observable(false);

    self.dataGridTaxRate = ko.observable({
        dataSource: self.data,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'taxRateName', caption: 'Name', width: 250 },
            { dataField: 'taxRatePercentage', caption: 'Percentage', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2, width: 120 },
            { dataField: 'markChar', caption: 'MarkChar', width: 110 },
            { dataField: 'markLegend', caption: 'MarkLegend', width: 110 },
            { dataField: 'active', caption: 'Active', alignment: 'center', width: 100 }
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpModal);
            vmViewIndex.configSetUp.disableButtonSubmit(false);
            $('#modalSetUpTaxRate').modal({
                keyboard: false,
                show: true,
                backdrop: false,
            });
            self.chkBtnAdd(false);
            self.chkBtnUpdate(true);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push(
                {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-search',
                        hint: 'Search',
                        onClick: function () {
                            if (self.chkSearch() == false) {
                                self.chkSearch(true);
                            } else if (self.chkSearch() == true) {
                                self.chkSearch(false);
                            }
                        }
                    }
                }, {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-plus',
                        onClick: function () {
                            vmViewIndex.configSetUp.disableButtonSubmit(false);
                            $('#modalSetUpTaxRate').modal({
                                keyboard: false,
                                backdrop: false,
                                show: true
                            });
                            self.chkBtnAdd(true);
                            self.chkBtnUpdate(false);
                        }
                    }
                });
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        pager: {
            allowPageSize: 'auto',
            infoText: 'Page {0} of {1}',
            showInfo: false,
            visible: 'auto'
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 10
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow myRow-hover');
        },
        onContentReady: function () {
            $("#gridTaxRate .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });
}

function SetUpTaxRateViewModel() {
    var self = this;
    self.active = ko.observable(true);
    self.taxRateId = ko.observable('');
    self.taxRateName = ko.observable('');
    self.taxRatePercentage = ko.observable(0.0).extend({ numeric: 2 });
    self.markChar = ko.observable('');
    self.markLegend = ko.observable('');

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.active,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    self.btnCloseSetUpTaxRate = function () {
        self.clearSetUpTaxRate();
    };

    self.clearSetUpTaxRate = function () {
        self.active(true);
        self.taxRateName('');
        self.taxRatePercentage('0.0');
        self.markChar('');
        self.markLegend('');
        removeClassValidationError("#txtTaxRateSetUp_TaxRatePercentage");
    };
};

//Added by SMILEDINING-SA20-0018
function GraguityChargeViewModel() {
    var self = this;
    var dataGrid;
    self.data = ko.observableArray([]);
    self.dataSetUpModal = new SetUpGraguityChargeViewModel();
    self.chkBtnAdd = ko.observable(false);
    self.chkBtnUpdate = ko.observable(false);
    self.chkSearch = ko.observable(false);

    self.dataGridGraguityCharge = ko.observable({
        dataSource: self.data,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'graguityName', caption: 'Name', width: 320 },
            { dataField: 'graguityPercentage', caption: 'Percentage', dataType: 'number', alignment: 'center', format: 'fixedPoint', precision: 2, width: 185 },
            { dataField: 'active', caption: 'Active', alignment: 'center', width: 185 }
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpModal);
            vmViewIndex.configSetUp.disableButtonSubmit(false);
            $('#modalSetUpGraguityCharge').modal({
                keyboard: false,
                show: true,
                backdrop: false,
            });
            self.chkBtnAdd(false);
            self.chkBtnUpdate(true);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push(
                {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-search',
                        hint: 'Search',
                        onClick: function () {
                            if (self.chkSearch() == false) {
                                self.chkSearch(true);
                            } else if (self.chkSearch() == true) {
                                self.chkSearch(false);
                            }
                        }
                    }
                }, {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-plus',
                        onClick: function () {
                            vmViewIndex.configSetUp.disableButtonSubmit(false);
                            $('#modalSetUpGraguityCharge').modal({
                                keyboard: false,
                                backdrop: false,
                                show: true
                            });
                            self.chkBtnAdd(true);
                            self.chkBtnUpdate(false);
                        }
                    }
                });
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        pager: {
            allowPageSize: 'auto',
            infoText: 'Page {0} of {1}',
            showInfo: false,
            visible: 'auto'
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 10
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow myRow-hover');
        },
        onContentReady: function () {
            $("#gridGraguityCharge .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });
}

function SetUpGraguityChargeViewModel() {
    var self = this;
    self.active = ko.observable(true);
    self.graguityId = ko.observable('');
    self.graguityName = ko.observable('');
    self.graguityPercentage = ko.observable(0.0).extend({ numeric: 2 });

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.active,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    self.btnCloseSetUpGraguityCharge = function () {
        self.clearSetUpGraguityCharge();
    };

    self.clearSetUpGraguityCharge = function () {
        self.active(true);
        self.graguityName('');
        self.graguityPercentage('0.0');
        removeClassValidationError("#txtGraguityChargeSetUp_GraguityPercentage");
    };
}
function FoodPrefixViewModel() {
    var self = this;
    self.cloneDataArrayStore = ko.observableArray([]);
    self.dataArrayStore = ko.observableArray([]);
    self.dataSetUpModal = new SetUpFoodPrefixViewModel();
    self.tempDataDragging = ko.observableArray([]);
    self.tempItemDragging = ko.observableArray([]);
    self.chkBtnAdd = ko.observable(false);
    self.chkBtnUpdate = ko.observable(false);
    self.chkSearch = ko.observable(false);
    self.pageSize = ko.observable(30);
    self.pageIndex = ko.observable(1);

    self.dataGridFoodPrefix = ko.observable({
        dataSource: {
            store: self.dataArrayStore,
            sort: 'prefixSorting'
        },
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        allowColumnReordering: true,
        columnAutoWidth: true,
        rowAlternationEnabled: false,
        columns: [
            { dataField: 'prefixSorting', caption: '#', width: 40, alignment: 'center' },
            { dataField: 'prefixName', caption: 'Name', width: 200 },
            { dataField: 'prefixDesc', caption: 'Description', width: 200 },
            { dataField: 'isPrefixCal', caption: 'Cal', alignment: 'center', width: 95 },
            { dataField: 'prefixColorRed', caption: 'Color Red', alignment: 'center', width: 95 },
            { dataField: 'active', caption: 'Status', alignment: 'center', width: 100 }
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            if (vmViewIndex.configSetUp.chkDrag() == false && vmViewIndex.configSetUp.chkSave() == false) { //Added and End by SMILEDINING-SA20-0019
                var data = item.data;
                var unmap = ko.mapping.toJSON(data);
                ko.mapping.fromJSON(unmap, {}, self.dataSetUpModal);
                vmViewIndex.configSetUp.disableButtonSubmit(false);
                $('#modalSetUpFoodPrefix').modal({
                    keyboard: false,
                    backdrop: false,
                    show: true
                });
                self.chkBtnUpdate(true);
                self.chkBtnAdd(false);
            }   //Added and End by SMILEDINING-SA20-0019
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            }, {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {
                        vmViewIndex.configSetUp.disableButtonSubmit(false);
                        $('#modalSetUpFoodPrefix').modal({
                            keyboard: false,
                            backdrop: false,
                            show: true
                        });
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            }, {
                widget: 'dxButton',
                location: 'after',
                options: {
                    visible: vmViewIndex.configSetUp.chkDrag,
                    icon: 'fa fa-save',
                    hint: 'Save Changes',
                    type: 'success',
                    useSubmitBehavior: true,
                    onClick: function () {

                        var dataSortable = null;
                        self.dataArrayStore().load().done(function (data) {
                            dataSortable = ko.mapping.fromJS(_.orderBy(ko.mapping.toJS(data), ['prefixSorting'], ['asc']))();
                        });
                        swalConfirmSaveSortableChoice(cFoodPrefixUpDateSortable, dataSortable);
                    }
                }
            }
            , { //Undo
                widget: 'dxButton',
                location: 'after',
                options: {
                    visible: vmViewIndex.configSetUp.chkDrag,
                    icon: 'fa fa-undo',
                    hint: 'Undo/Cancel',
                    type: 'danger',
                    onClick: function (e) {
                        var selfFoodPrefix = vmViewIndex.configSetUp.foodPrefix;
                        vmViewIndex.showLoading(true);
                        setTimeout(function () {
                            undoDragging(selfFoodPrefix);
                            refreshGrid('gridFoodPrefix');
                        }, 3000);
                        vmViewIndex.configSetUp.chkDrag(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            infoText: 'Page {0} of {1}',
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            if (e.rowType != 'data') { return; }
            e.rowElement
            .addClass('myRow myRow-hover')
            .data('keyValue', e.key);
        },
        onContentReady: function (e) {
            var getPageSize = e.element.find(".dx-page-size.dx-selection").html();
            var getPageIndex = e.element.find(".dx-page.dx-selection").html();
            self.pageSize(Number(getPageSize));
            self.pageIndex(Number(getPageIndex));
            foodPrefixSortable(e.element, self.dataArrayStore());

            if (self.tempDataDragging().length != 0 && self.tempItemDragging().length != 0) {
                vmViewIndex.configSetUp.chkDrag(true);
            }
            $("#gridFoodPrefix .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });
}

function SetUpFoodPrefixViewModel() {
    var self = this;
    self.prefixId = ko.observable('');
    self.prefixName = ko.observable('');
    self.prefixDesc = ko.observable('');
    self.prefixCal = ko.observable('');
    self.prefixColorRed = ko.observable(false);
    //self.prefixStatus = ko.observable('');    //Modified and End by SMILEDINING-SA21-0009
    self.prefixStatus = ko.observable('A'); //Added and End by SMILEDINING-SA21-0009
    self.prefixSorting = ko.observable('');
    self.isPrefixCal = ko.observable(false);
    self.active = ko.observable(true);

    self.btnStatus = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.active,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
                self.prefixStatus('A');
            } else {
                self.active(false);
                self.prefixStatus('B');
            }
        }
    });

    self.clickIsPrefixCal = function (data) {
        var isPrefixCal = data.configSetUp.foodPrefix.dataSetUpModal.isPrefixCal();
        if (isPrefixCal) {
            self.isPrefixCal(true);
            self.prefixCal(1);
        } else {
            self.isPrefixCal(false);
            self.prefixCal(0);
        }
        return true;
    };

    self.clickPrefixColorRed = function (data) {
        var prefixColorRed = data.configSetUp.foodPrefix.dataSetUpModal.prefixColorRed();
        if (prefixColorRed) {
            self.prefixColorRed(true);
        } else {
            self.prefixColorRed(false);
        }
        return true;
    };
    self.btnCloseSetUpFoodPrefix = function () {
        self.clearSetUpFoodPrefix();
    };
    self.clearSetUpFoodPrefix = function () {
        self.prefixName('');
        self.prefixDesc('');
        self.prefixCal('');
        self.prefixColorRed(false);
        self.prefixStatus('');
        self.prefixSorting('');
        self.isPrefixCal(false);
        self.active(true);

        removeClassValidationError("#txtFoodPrefixSetUp_PrefixName");
    };
}
//End Added by SMILEDINING-SA20-0018



function RevenueClassViewModel() {
    var self = this;
    var dataGrid;
    self.data = ko.observableArray([]);
    self.dataRevenueClass = ko.observableArray([]);
    self.dataTaxRate = ko.observableArray([]);
    self.taxRateId = ko.observable('');
    self.currentTaxRateSelect = ko.observable('');
    self.dataSetUpModal = new SetUpRevenueClassViewModel();
    self.dataPrevValue = new SetUpRevenueClassViewModel();
    self.chkBtnAdd = ko.observable(false);
    self.chkBtnUpdate = ko.observable(false);
    self.chkSearch = ko.observable(false);

    self.taxRateSelect = ko.observable({
        dataSource: self.dataTaxRate,
        displayExpr: 'taxRateName',
        valueExpr: 'taxRateId',
        value: self.currentTaxRateSelect,
        dropDownButtonTemplate: 'dropDownButton',
        //searchEnabled: true,  //Modified and End by SMILEDINING-SA20-0018
        onValueChanged: function (item) {
            if (item.value != null) {
                var filter = ko.utils.arrayFilter(self.dataRevenueClass(), function (itemRev) {
                    return (itemRev.taxRateId() == item.value);
                });
                ko.mapping.fromJSON(ko.mapping.toJSON(filter), {}, self.data);
                self.taxRateId(item.value);
            }
        }
    });

    self.dataGridRevenueClass = ko.observable({
        dataSource: self.data,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'revenueClassName', caption: 'Name', width: 320 },
            { dataField: 'isLiquor', caption: 'IsLiquor', alignment: 'center', width: 185 },
            { dataField: 'active', caption: 'Active', alignment: 'center', width: 185 }
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            var data = item.data;
            var unmap = ko.mapping.toJSON(data);
            ko.mapping.fromJSON(unmap, {}, self.dataSetUpModal);
            ko.mapping.fromJSON(unmap, {}, self.dataPrevValue);
            vmViewIndex.configSetUp.disableButtonSubmit(false);
            $('#modalSetUpRevenueClass').modal({
                keyboard: false,
                show: true,
                backdrop: false,
            });
            self.chkBtnAdd(false);
            self.chkBtnUpdate(true);
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push(
                {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-search',
                        hint: 'Search',
                        onClick: function () {
                            if (self.chkSearch() == false) {
                                self.chkSearch(true);
                            } else if (self.chkSearch() == true) {
                                self.chkSearch(false);
                            }
                        }
                    }
                },
                {
                    widget: 'dxButton',
                    location: 'after',
                    options: {
                        icon: 'fa fa-plus',
                        onClick: function () {
                            vmViewIndex.configSetUp.disableButtonSubmit(false);
                            $('#modalSetUpRevenueClass').modal({
                                keyboard: false,
                                backdrop: false,
                                show: true
                            });
                            self.chkBtnAdd(true);
                            self.chkBtnUpdate(false);
                        }
                    }
                },
                {
                    widget: 'dxSelectBox',
                    location: 'before',
                    options: self.taxRateSelect
                }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        pager: {
            allowPageSize: 'auto',
            infoText: 'Page {0} of {1}',
            showInfo: false,
            visible: 'auto'
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 10
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow myRow-hover');
        },
        onContentReady: function () {
            $("#gridRevenueClass .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });

}

function SetUpRevenueClassViewModel() {
    var self = this;

    self.active = ko.observable(true);
    self.revenueClassId = ko.observable('');
    self.revenueClassName = ko.observable('');
    self.isLiquor = ko.observable(false);
    self.clickIsLiquor = function () { return true; }
    self.taxRateId = ko.observable('');

    self.btnCloseSetUpRevenueClass = function () {
        self.clearSetUpRevenueClass();
    };

    self.clearSetUpRevenueClass = function () {
        self.active(true);
        self.revenueClassName('');
        self.isLiquor(false);
    };

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.active,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });
}

//Added by SMILEDINING-SA21-0021
function IconViewModel() {
    var self = this;
    self.dataArrayStore = ko.observableArray([]);
    self.dataSetUpModal = new SetUpIconViewModel();
    self.chkBtnAdd = ko.observable(false);
    self.chkBtnUpdate = ko.observable(false);
    self.chkSearch = ko.observable(false);
    self.pageSize = ko.observable(30);
    self.pageIndex = ko.observable(1);

    self.dataGridIcon = ko.observable({
        dataSource: self.dataArrayStore,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        rowAlternationEnabled: false,
        columns: [
            {
                caption: '#', width: 80, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'iconName', caption: 'Name', width: 220 },
            { dataField: 'active', caption: 'Active', width: 150 },
            { dataField: 'isShowText', caption: 'Show Text', alignment: 'center', width: 150 },
            { dataField: 'isFocus', caption: 'Show Top', alignment: 'center', width: 150 }
        ],
        onCellPrepared: function (options) {
            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-check text-success'></i></span>";
                } else if (fieldData == false && typeof (fieldData) === "boolean") {
                    fieldHtml = "<span><i class='fa fa-close text-danger'></i></span>";
                } else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {
            if (vmViewIndex.configSetUp.chkDrag() == false && vmViewIndex.configSetUp.chkSave() == false) {
                var data = item.data;
                var unmap = ko.mapping.toJSON(data);
                ko.mapping.fromJSON(unmap, {}, self.dataSetUpModal);
                vmViewIndex.configSetUp.disableButtonSubmit(false);
                var image = self.dataSetUpModal.iconImage();
                if (typeof image != 'undefined') {
                    if (image.trim().length > 0) {
                        $('#modalSetUpIcon').find('img').attr('src', image);
                        $('#modalSetUpIcon').find('img').attr('width', $('#modalSetUpIcon').find('img').width());
                        $('#modalSetUpIcon').find('img').attr('height', $('#modalSetUpIcon').find('img').height());
                    } else {
                        self.dataSetUpModal.iconImage('');
                        $('#modalSetUpIcon').find('img').attr('src', '');
                        $('#modalSetUpIcon').find('img').removeAttr('src');
                    }
                } else {
                    self.dataSetUpModal.iconImage('');
                    $('#modalSetUpIcon').find('img').attr('src', '');
                    $('#modalSetUpIcon').find('img').removeAttr('src');
                }

                $('#modalSetUpIcon').modal({
                    keyboard: false,
                    backdrop: false,
                    show: true
                });
                self.chkBtnUpdate(true);
                self.chkBtnAdd(false);
            }
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            toolbarItems.push({
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-search',
                    hint: 'Search',
                    onClick: function () {
                        if (self.chkSearch() == false) {
                            self.chkSearch(true);
                        } else if (self.chkSearch() == true) {
                            self.chkSearch(false);
                        }
                    }
                }
            }, {
                widget: 'dxButton',
                location: 'after',
                options: {
                    icon: 'fa fa-plus',
                    hint: 'Add',
                    onClick: function () {

                        vmViewIndex.configSetUp.disableButtonSubmit(false);
                        $('#modalSetUpIcon').modal({
                            keyboard: false,
                            backdrop: false,
                            show: true
                        });
                        self.chkBtnAdd(true);
                        self.chkBtnUpdate(false);
                    }
                }
            }
            );
        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: "Search...",
            highlightSearchText: false
        },
        pager: {
            allowPageSize: 'auto',
            infoText: 'Page {0} of {1}',
            showInfo: false,
            visible: 'auto'
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 10
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow myRow-hover');
        },
        onContentReady: function () {
            $("#gridIcon .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });

    self.dropImage = function (data, event) {

        var fileName = _.first(event.dataTransfer.files).name;
        var extension = fileName.split('.').pop().toUpperCase();
        if (extension != 'PNG') {
        } else if (_.first($(event.target).parent().parent().parent().parent().parent().parent()).id == cfrmFoodSetup) {
            data.configSetUp.iconSetup.dataSetUpModal.iconImage(_.first(event.dataTransfer.files));
        }
    };

    //Use indirect change function for ie.
    self.changeImage = function (data, event) {
        var checkId = $(event.target).attr('class');
        var checkImage;

        if (checkId == 'display-uploader') {
            if (typeof event.target.files != 'undefined') {
                checkImage = event.target.files.length;
                if (checkImage > 0) {
                    var file = _.first(event.target.files).name;
                    var extension = file.split('.').pop().toUpperCase();
                    if (extension != 'PNG') {

                    } else {
                        data.configSetUp.iconSetup.dataSetUpModal.iconImage(_.first(event.target.files));
                    }
                }
            }
        } else {
            data.configSetUp.iconSetup.dataSetUpModal.iconImage('');
            $(event.target).parent().parent().find('.display-uploader').val('');
            $(event.target).parent().parent().find('.image img').attr('src', '');
            $(event.target).parent().parent().find('.image img').removeAttr('src');
        }
    };
};

function SetUpIconViewModel() {
    var self = this;
    self.iconId = ko.observable('');
    self.iconName = ko.observable('');
    self.iconImage = ko.observable('');
    self.hexColor = ko.observable(cColorBlack);
    self.isFocus = ko.observable(false);
    self.active = ko.observable(true);
    self.isShowText = ko.observable(false);

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.active,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    self.btnIsFocus = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.isFocus,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.isFocus(true);
            } else {
                self.isFocus(false);
            }
        }
    });

    self.btnIsShowText = ko.observable({
        offText: 'NO',
        onText: 'YES',
        width: switchActiveWidth60px,
        value: self.isShowText,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.isShowText(true);
            } else {
                self.isShowText(false);
            }
        }
    });

    self.btnCloseSetUpIcon = function () {
        self.clearSetUpIcon();
    };
    self.clearSetUpIcon = function () {
        self.iconName('');
        self.iconImage('');
        self.hexColor(cColorBlack);
        self.isFocus(false);
        self.active(true);
        self.isShowText(false);
        //var image = $('#modalSetUpIcon .image');
        //image.parent().removeClass('filled');
        //image.find('i').show();
        //image.find('br').show();
        //image.find('small').show();
        //image.find('img').remove();
        //image.append('<img>');
        //$('#iconUploaderEdit').val('');

        removeClassValidationError("#txtIconSetUp_IconName");
    };
};
//End Added by SMILEDINING-SA21-0021

function ReportViewModel() {
    var self = this;
    self.chart = new ChartViewModel();
    self.saleMadeDetail = new SaleMadeDetailViewModel();
}

function ChartViewModel() {
    var self = this;
    self.dataSaleMade = ko.observableArray([]);
    self.dataOrderMade = ko.observableArray([]);
    self.fromDate = ko.observable();
    self.endDate = ko.observable();
    self.fromDateCompare = ko.observable();
    self.endDateCompare = ko.observable();
    self.showCompare = ko.observable(false);
    self.updateChart = ko.observable(false);
    self.chartMade = ko.observable(true);

    self.swipeChart = ko.observable({
        offText: 'Orders Made',
        onText: 'Sale Made',
        value: self.chartMade(),
        width: '110px',
        onValueChanged: function (item) {
            if (item.value) {
                self.chartMade(true);
                chkShowHideChart();
            } else {
                self.chartMade(false);
                chkShowHideChart();
            }
        }
    });


    self.clickCompare = function () {
        if (self.showCompare() == false) {
            self.showCompare(true);
        } else if (self.showCompare() == true) {
            self.showCompare(false);
        }
    };

    //self.buttonSetVisible = ko.observable({
    //    onClick: function () {
    //        if (self.showCompare() == false) {
    //            self.showCompare(true);
    //        } else if (self.showCompare() == true) {
    //            self.showCompare(false);
    //        }
    //    },
    //    text: "Compare",
    //    type: "default",
    //    height: "37.5px",
    //    width: "130px",
    //    hint: "Compare"
    //});

    self.dateFromDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.fromDate,
        width: 150,
        invalidDateMessage: "Value must be a date",
        onValueChanged: function (v) {
            if (v.value != "" && v.value != undefined) {
                self.fromDate(moment(v.value).format('L'));
            } else {
                self.fromDate(moment(new Date()).format('L'));
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });
    self.dateEndDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.endDate,
        width: 150,
        invalidDateMessage: "Value must be a date",
        onValueChanged: function (v) {
            if (v.value != "" && v.value != undefined) {
                self.endDate(moment(v.value).format('L'));
            } else {
                self.endDate(moment(new Date()).format('L'));
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dateFromDateBoxCompare = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.fromDateCompare,
        width: 150,
        visible: self.showCompare,
        invalidDateMessage: "Value must be a date",
        onValueChanged: function (v) {
            if (v.value != "" && v.value != undefined) {
                self.fromDateCompare(moment(v.value).format('L'));
            } else {
                self.fromDateCompare(moment(new Date()).format('L'));
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });
    self.dateEndDateBoxCompare = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.endDateCompare,
        width: 150,
        visible: self.showCompare,
        invalidDateMessage: "Value must be a date",
        onValueChanged: function (v) {
            if (v.value != "" && v.value != undefined) {
                self.endDateCompare(moment(v.value).format('L'));
            } else {
                self.endDateCompare(moment(new Date()).format('L'));
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });
}

function SaleMadeDetailViewModel() {
    var self = this;
    var dataGrid;
    self.data = ko.observableArray([]);
    self.chkSearch = ko.observable(false);
    self.dataGridSaleMadeDetail = ko.observable({
        dataSource: self.data,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'imageName', caption: '', allowFiltering: false, allowSorting: false, width: 'auto', cellTemplate: 'cellTemplate' },
            { dataField: 'foodName', caption: 'Food Name', width: 200 },
            { dataField: 'foodPrice', caption: 'Price', dataType: 'number', cssClass: 'right', format: 'currency', precision: 2 },
            { dataField: 'quantity', caption: 'Sold', dataType: 'number', width: 90 },
            { dataField: 'orderChoiceAmount', caption: "Extra", dataType: 'number', cssClass: 'right', format: 'currency', precision: 2 },
            { dataField: 'sumPrice', caption: 'Total', dataType: 'number', cssClass: 'right', format: 'currency', precision: 2 }
        ],
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        searchPanel: {
            visible: true,
            placeholder: "Search...",
            highlightSearchText: false
        },
        onContentReady: function () {
            $("#gridReport .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });
}

function BalanceViewModel() {
    var self = this;
    self.summary = ko.observableArray([]);
    //self.orderTicket = ko.observableArray([]);        //Modified and End by SMILEDINING-SA20-0007
    self.ticket = ko.observableArray([]);               //Added and End by SMILEDINING-SA20-0007
    self.fromDate = ko.observable();
    self.endDate = ko.observable();

    self.dateFromDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.fromDate,
        width: 150,
        invalidDateMessage: "Value must be a date",
        onValueChanged: function (v) {
            if (v.value != "" && v.value != undefined) {
                self.fromDate(moment(v.value).format('L'));
            } else {
                self.fromDate(moment(new Date()).format('L'));
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dateEndDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: "calendar",
        type: "date",
        value: self.endDate,
        width: 150,
        invalidDateMessage: "Value must be a date",
        onValueChanged: function (v) {
            if (v.value != "" && v.value != undefined) {
                self.endDate(moment(v.value).format('L'));
            } else {
                self.endDate(moment(new Date()).format('L'));
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.fullDate = ko.computed(function () {
        return moment(self.fromDate()).format('L') + ' - ' + moment(self.endDate()).format('L');
    });

    self.showFoodDetail = function (data, event) {
        var dataFront = $(event.target).parent().parent().parent().parent().parent().parent().parent().parent();
        dataFront.find('.front').rotateY(180);
        dataFront.find('.back').rotateY(0);
    };

    self.showTicket = function (data, event) {
        var dataBack = $(event.target).parent().parent().parent().parent().parent().parent().parent().parent();
        dataBack.find('.front').rotateY(0);
        dataBack.find('.back').rotateY(180);
    };
}

function StatementViewModel() {
    var self = this;
    var dataGrid;
    //Modified by SMILEDINING-SA20-0007
    //self.summaryStatement = ko.observableArray([]);
    //self.statementTicket = ko.observableArray([]);
    //self.groupOrder = new GroupOrderViewModel();
    //self.shopName = ko.observable();
    //self.shopStreet = ko.observable();
    //self.shopState = ko.observable();
    //self.shopPostal = ko.observable();
    //self.fromDate = ko.observable();
    //self.endDate = ko.observable();
    //self.nowDate = ko.observable(moment().format(moment_date_format_mmddyyyyhhmmssa2));
    //End Modified by SMILEDINING-SA20-0007

    //Added by SMILEDINING-SA20-0007
    self.summary = ko.observableArray([]);
    self.statementHeader = new DataStatementHeaderViewModel();
    self.statementDetail = ko.observableArray([]);
    self.shopName = ko.observable();
    self.shopStreet = ko.observable();
    self.shopCity = ko.observable();
    self.shopState = ko.observable();
    self.shopPostal = ko.observable();
    self.fromDate = ko.observable();
    self.endDate = ko.observable();
    self.currentDate = ko.observable(moment().format(moment_date_format_mmddyyyyhhmmssa2));
    //End Added by SMILEDINING-SA20-0007

    self.fullDate = ko.computed(function () {
        return moment(self.fromDate()).format('L') + ' - ' + moment(self.endDate()).format('L');
    });

    //Added by SMILEDINING-SA20-0007
    self.dataGridStatement = ko.observable({
        dataSource: self.statementDetail,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'ticketId', caption: '#', alignment: 'center', width: '110px' },
            { dataField: 'subTotal', caption: 'Sub Total', dataType: 'number', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, width: '90px' },
            { dataField: 'discount', caption: 'Discount', dataType: 'number', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, width: '90px' },
            { dataField: 'deliveryCharge', caption: 'DC', dataType: 'number', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, width: '70px' },
            { dataField: 'deliveryChargeTax', caption: 'DC Tax', dataType: 'number', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, width: '70px' },
            { dataField: 'autoCharge', caption: 'AC', dataType: 'number', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, width: '70px' },
            { dataField: 'autoChargeTax', caption: 'AC Tax', dataType: 'number', alignment: 'center', cssClass: 'right', format: 'currency', precision: 2, width: '70px' },
            { dataField: 'tax', caption: 'Tax', dataType: 'number', cssClass: 'right', alignment: 'center', format: 'currency', precision: 2, width: '70px' },
            { dataField: 'tip', caption: 'Tip', dataType: 'number', cssClass: 'right', alignment: 'center', format: 'currency', precision: 2, width: '70px' },
            { dataField: 'total', caption: 'Total', dataType: 'number', cssClass: 'right', alignment: 'center', format: 'currency', precision: 2, width: '70px' }
        ],
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        onContentReady: function () {
            $("#gridStatement .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });
    //End Added by SMILEDINING-SA20-0007

    //Modified by SMILEDINING-SA20-0007
    //self.dataGridStatementTicket = ko.observable({
    //    dataSource: self.statementTicket,
    //    showBorders: false,
    //    showColumnHeader: false,
    //    showColumnLines: false,
    //    showRowLines: true,
    //    visible: true,
    //    hoverStateEnabled: true,
    //    columnAutoWidth: true,
    //    onInitialized: function (e) {
    //        dataGrid = e.component;
    //    },
    //    columns: [
    //        {
    //            caption: '#', width: 40, alignment: 'center',
    //            cellTemplate: function (container, options) {
    //                container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
    //            }
    //        },
    //        { dataField: 'date', caption: 'Order time' },
    //        { dataField: 'ticketId', caption: 'Order #' },
    //        { dataField: 'type', caption: 'Type' },
    //        { dataField: 'tax', caption: 'Tax', dataType: 'number', cssClass: 'right', format: 'currency', precision: 2 },
    //        { dataField: 'deliveryCharge', caption: 'Delivery Charge', dataType: 'number', cssClass: 'right', format: 'currency', precision: 2 },
    //        { dataField: 'tip', caption: 'Tip', dataType: 'number', cssClass: 'right', format: 'currency', precision: 2 },
    //        { dataField: 'total', caption: 'Total', dataType: 'number', cssClass: 'right', format: 'currency', precision: 2 }
    //    ],
    //    pager: {
    //        showPageSizeSelector: true,
    //        allowedPageSizes: [30, 60, 90],
    //        showInfo: false,
    //        visible: true
    //    },
    //    paging: {
    //        enabled: true,
    //        pageIndex: 0,
    //        pageSize: 30
    //    },
    //    loadPanel: {
    //        enabled: true,
    //        showPane: false,
    //        text: ""
    //    },
    //    onContentReady: function () {
    //        $("#gridStatement .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
    //    }
    //});
    //End Modified by SMILEDINING-SA20-0007
};

//Added by SMILEDINING-SA22-0013
function DeliveryBillingViewModel() {
    var self = this;
    var dataGrid;
    self.deliveryBillingDetail = ko.observableArray([]);
    self.shopName = ko.observable();
    self.shopStreet = ko.observable();
    //Modified by SMILEDINING-SA22-0013#4
    //self.shopCity = ko.observable();
    //self.shopState = ko.observable();
    //self.shopPostal = ko.observable();
    //End Modified by SMILEDINING-SA22-0013#4
    self.period = ko.observable();
    self.countCommission = ko.observable(0);
    self.countTip = ko.observable(0);
    self.sumCommission = ko.observable(0);
    self.sumTip = ko.observable(0);
    self.totalAmount = ko.observable(0);
    self.selectMonth = ko.observable(new Date());
    self.sumAmountDeposit = ko.observable(0.00); //Added and End by SMILEDINING-SA22-0033

    self.dateBoxMonth = ko.observable({
        type: 'date',
        width: 250,
        value: self.selectMonth(),
        displayFormat: 'monthAndYear',
        minZoomLevel: "century",
        maxZoomLevel: "year",
        onValueChanged: function (e) {
            self.selectMonth(e.value);
            var dateFilter = moment(e.value).format('L');
            var dataDeliveryBilling = JSON.parse(getObjFormAjax(cJsonGetDeliveryBilling, dateFilter));
            DataDeliveryBillingViewModel(dataDeliveryBilling);
        }
    });

    self.dataGridDeliveryBilling = ko.observable({
        dataSource: self.deliveryBillingDetail,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            //Modified by SMILEDINING-SA22-0013#4
            //{ dataField: 'ticketId', caption: 'Order ID', alignment: 'center', width: 120 },
            //{ dataField: 'ticketDateTime', caption: 'Date/Time', alignment: 'left', width:  150},
            //{ dataField: 'customerName', caption: 'Customer Name', alignment: 'left', width: 140 },
            //{ dataField: 'total', caption: 'Total', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 70 },
            //{ dataField: 'commission', caption: 'Commission', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 100 },
            //{ dataField: 'dasherTip', caption: 'Dasher Tip', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 90 },
            //{ dataField: 'totalCharge', caption: 'Total Charge', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 100 }
            //End Modified by SMILEDINING-SA22-0013#4
            //Modified by SMILEDINING-SA22-0013#5
            //Added by SMILEDINING-SA22-0013#4
            // { dataField: 'ticketId', caption: 'Order ID', alignment: 'center', width: 100 },
            //{ dataField: 'ticketDateTime', caption: 'Date/Time', alignment: 'center', width: 190 },
            //{ dataField: 'customerName', caption: 'Customer Name', alignment: 'left', width: 150 },
            //{ dataField: 'total', caption: 'Total', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 70 },
            //{ dataField: 'commission', caption: 'Comm', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 70 },
            //{ dataField: 'dasherTip', caption: 'Dasher Tip',dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 100},
            //{
            //    dataField: 'totalCharge', caption: 'Total\nCharge',
            //    headerCellTemplate: function (header, info) {
            //        $("<div>").html(info.column.caption.replace(/\n/g, "<br/>")).appendTo(header);
            //    },
            //    dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 90
            //}
            //End Added by SMILEDINING-SA22-0013#4
            //End Modified by SMILEDINING-SA22-0013#5
            //Added by SMILEDINING-SA22-0013#5
            { dataField: 'ticketId', caption: 'Order ID', alignment: 'center', width: 120 },
            { dataField: 'ticketDateTime', caption: 'Date/Time', alignment: 'left', width:  150},
            { dataField: 'customerName', caption: 'Customer Name', alignment: 'left', width: 140 },
            { dataField: 'total', caption: 'Total', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 70 },
            { dataField: 'commission', caption: 'Commission', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 100 },
            { dataField: 'dasherTip', caption: 'Dasher Tip', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 90 },
            { dataField: 'totalCharge', caption: 'Total Charge', dataType: 'number', alignment: 'right', cssClass: 'right', format: 'currency', precision: 2, width: 100 }
            //End Added by SMILEDINING-SA22-0013#5
        ],
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ""
        },
        onContentReady: function () {
            $("#gridDeliveryBilling .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });
};
//End Added by SMILEDINING-SA22-0013
//Added by SMILEDINING-SA21-0063
function MarketingViewModel() {
    var self = this;
    var dataGrid;
    //var checkFormat = true; //Modified and End by SMILEDINING-SA21-0063#4
    //Added by SMILEDINING-SA21-0063#4
    self.recordRowArr = ko.observableArray([]);
    self.valueRow = ko.observable('');
    self.defaultRow = ko.pureComputed(function () {
        if (self.recordRowArr()[0] == undefined || isEmpty(self.recordRowArr())) {
            return '';
        }
        else {
            return self.recordRowArr()[0];
        }
    });
    self.rowSelectBox = ko.observable({
        dataSource: self.recordRowArr,
        value: self.defaultRow,
        onValueChanged: function (e) {
            self.valueRow(e.value);
        }
    });
    //End Added by SMILEDINING-SA21-0063#4
    //Modified by SMILEDINING-SA21-0063#4
    //self.data = ko.observableArray([]);
    //self.dataGridCustomer = ko.observable({
    //    dataSource: self.data,
    //    showBorders: false,
    //    showColumnHeader: false,
    //    showColumnLines: false,
    //    showRowLines: true,
    //    visible: true,
    //    hoverStateEnabled: true,
    //    columnAutoWidth: true,
    //    columnChooser: {
    //        enabled: true,
    //        mode: 'select'
    //    },
    //    //sorting: { mode: 'multiple' },
    //    export: {
    //        enabled: true
    //        , fileName: 'Customer'
    //        , allowExportSelectedData: false
    //    },
    //    //onExporting: function (e) {
    //    //    var workbook = new ExcelJS.Workbook();
    //    //    var worksheet = workbook.addWorksheet('Customer');
    //    //    DevExpress.excelExporter.exportDataGrid({
    //    //        component: e.component,
    //    //        worksheet: worksheet,
    //    //        autoFilterEnabled: true,
    //    //        customizeCell: function (options) {
    //    //            var gridCell = options.gridCell;
    //    //            var excelCell = options.excelCell;
    //    //            if (gridCell.rowType === "data") {
    //    //                if (gridCell.column.dataField === 'phone') {
    //    //                    checkFormat = gridCell.value.indexOf('-') == -1 ? false : true;
    //    //                    if (checkFormat || gridCell.value == "") {
    //    //                        excelCell.value = gridCell.value.toString();
    //    //                    } else {
    //    //                        var usPhone = gridCell.value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    //    //                        excelCell.value = usPhone;
    //    //                    }
    //    //                    excelCell.numFmt = '[<=9999999]###-####;(###) ###-####';
    //    //                }
    //    //                if (gridCell.column.dataField === '#') {
    //    //                    excelCell.value = excelCell.row - 1;
    //    //                }
    //    //            }
    //    //        }
    //    //    }).then(function () {
    //    //        workbook.xlsx.writeBuffer().then(function (buffer) {
    //    //            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Customer.xlsx');
    //    //        });
    //    //    });
    //    //    e.cancel = true;
    //    //},
    //    onInitialized: function (e) {
    //        dataGrid = e.component;
    //    },
    //    columns: [
    //        {
    //            caption: '#', dataField: '#', width: 40, alignment: 'center',
    //            cellTemplate: function (container, options) {
    //                container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
    //            }
    //        },
    //        { dataField: 'firstName', caption: 'First Name', dataType: 'text', alignment: 'center', cssClass: 'right',precision: 2 },
    //        { dataField: 'lastName', caption: 'Last Name', dataType: 'text', alignment: 'center', cssClass: 'right', precision: 2 },
    //        {
    //            dataField: 'phone',
    //            format: function (value) {
    //                var USNumber = value.match(/(\d{3})(\d{3})(\d{4})/);
    //                return "(" + USNumber[1] + ") " + USNumber[2] + "-" + USNumber[3];
    //            }
    //            , caption: 'Phone', dataType: 'text', alignment: 'center', cssClass: 'right', precision: 2
    //        },
    //        { dataField: 'email', caption: 'Email', dataType: 'text', alignment: 'center', cssClass: 'right', precision: 2 },
    //    ],
    //    paging: {
    //        pageSize: 15
    //    },
    //    pager: {
    //        showPageSizeSelector: true,
    //        allowedPageSizes: [15, 30, 60],
    //        showInfo: true,
    //        showNavigationButtons: true,
    //        showPageSizeSelector: true,
    //        visible: true
    //    },
    //    loadPanel: {
    //        enabled: true,
    //        showPane: false,
    //        text: ""
    //    },
    //});
    //End Modified by SMILEDINING-SA21-0063#4
}
//End Added by SMILEDINING-SA21-0063



//Modified by SMILEDINING-SA20-0007
//function GroupOrderViewModel() {
//    var self = this;
//    self.data = ko.observableArray([]);
//    self.valueGroupOrder = ko.observable();
//    self.chkWidth = ko.observable($(window).width());
//    self.setWidth = ko.observable(360);

//    self.selectStatementGroupOrder = ko.observable({
//        dataSource: self.data,
//        displayExpr: function (data) {
//            if (vmViewIndex.statement.groupOrder.chkWidth() <= 414) {
//                if (data != null || data != undefined ? data.isWeekly() : false) {
//                    return data ? ('Week ' + data.weekOfNumber() + ' : ' + data.order() + ' orders') : '';
//                } else {
//                    return data ? (data.monthOfYear() + ' : ' + data.order() + ' orders') : '';
//                }
//                self.setWidth('auto');
//            } else {
//                if (data != null || data != undefined ? data.isWeekly() : false) {
//                    return data ? ('Week ' + data.weekOfNumber() + ' : ' + data.startDate() + ' - ' + data.endDate() + ' : ' + data.order() + ' orders') : '';
//                } else {
//                    return data ? (data.monthOfYear() + ' : ' + data.startDate() + ' - ' + data.endDate() + ' : ' + data.order() + ' orders') : '';
//                }
//                self.setWidth('auto');
//            }
//            $("#selectGroupOrder").dxSelectBox("instance").repaint();
//        },
//        valueExpr: 'id',
//        value: self.valueGroupOrder,
//        dropDownButtonTemplate: 'dropDownButton',
//        itemTemplate: function (data) {
//            if (vmViewIndex.statement.groupOrder.chkWidth() <= 414) {
//                if (data != null || data != undefined ? data.isWeekly() : false) {
//                    return 'Week ' + data.weekOfNumber() + ' : ' + data.order() + ' orders';
//                } else {
//                    return data.monthOfYear() + ' : ' + data.order() + ' orders';
//                }
//                self.setWidth('auto');
//            } else {
//                if (data != null || data != undefined ? data.isWeekly() : false) {
//                    return 'Week ' + data.weekOfNumber() + ' : ' + data.startDate() + ' - ' + data.endDate() + ' : ' + data.order() + ' orders';
//                } else {
//                    return data.monthOfYear() + ' : ' + data.startDate() + ' - ' + data.endDate() + ' : ' + data.order() + ' orders';
//                }
//                self.setWidth('auto');
//            }
//            $("#selectGroupOrder").dxSelectBox("instance").repaint();
//        },
//        onItemClick: function (item) {
//            if (item.itemData != null) {
//                var filter = ko.utils.arrayFilter(vmViewIndex.statement.groupOrder.data(), function (itemFilter) {
//                    return itemFilter.id() == item.itemData.id();
//                });
//                var dataGetSummaryTicket = JSON.parse(ajaxGetSummaryTicket(cJsonGetSummaryTicket, _.first(filter).startDate(), _.first(filter).endDate()));
//                DataStatementViewModel(dataGetSummaryTicket);
//            }
//        },
//        //width: ,
//    });

//    function ajaxGetSummaryTicket(jsonObj, startDate, endDate) {
//        var objUrl = new ObjUrl(jsonObj);
//        var requestUrl = objUrl.getUrlFromJson();
//        var passData = { 'sStartDate': startDate, 'sEndDate': endDate };
//        return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);
//    };
//};
//End Modified by SMILEDINING-SA20-0007

// Added by SMILEDINING-SA20-0006
function ProductViewModel(data, form) {
    var self = this;
    self.valueArrProduct = ko.observable();
    self.arrProductFilter = ko.observableArray([]);
    self.selectProduct = ko.observable();
    self.selectItem = ko.observableArray([]);
    if (form == cfrmMenuSetup) {
        self.valueArrProduct(products.cAllProduct);
        self.arrProductFilter([
        { name: products.mapName[products.cAllProduct].name, id: products.cAllProduct },
        { name: products.mapName[products.cSmileDining].name, id: products.cSmileDining },
        { name: products.mapName[products.cSmileContactless].name, id: products.cSmileContactless }]);
        self.selectProduct({
            dataSource: new DevExpress.data.ArrayStore({
                data: self.arrProductFilter(),
                key: 'id'
            }),
            displayExpr: 'name',
            valueExpr: 'id',
            value: self.valueArrProduct,
            placeholder: 'Select Product',
            onItemClick: function (item) {
                var productID = item.itemData.id;
                data.valueProduct(productID);
                vmViewIndex.showLoading(true);
                setTimeout(function () {
                    MapDataMenu(data.foodSetJs(), data.foodCategoryJs(), data.foodJs(), data.foodSetTimeMapJs(), data.valueFilterMenuFoodSet(), data.valueFilterMenuFoodCat(), data.valueFilterMenuFood(), productID);
                    vmViewIndex.showLoading(false);
                    foodSetClick();
                }, 3000);
            }
        });
    }
    else if (form == cfrmMySetting) {
        self.valueArrProduct(products.cSmileDining);
        self.arrProductFilter([
        { name: products.mapName[products.cSmileDining].name, id: products.cSmileDining},
        { name: products.mapName[products.cSmileContactless].name, id: products.cSmileContactless }]);
        self.selectProduct({
            dataSource: new DevExpress.data.ArrayStore({
                data: self.arrProductFilter(),
                key: 'id'
            }),
            displayExpr: 'name',
            valueExpr: 'id',
            value: self.valueArrProduct,
            placeholder: 'Select Product',
            onItemClick: function (item) {
                var productID = item.itemData.id;
                var productBeforSelect = data.selectProduct();
                if (productBeforSelect == undefined) {
                    productBeforSelect = products.cSmileDining;
                }
                var isSmileDining = (productID == products.cSmileDining) ? true : false;
                var mapUpdate = false;
                //self.currentdataMap = ko.observableArray([]);
                if (productID != productBeforSelect) {
                    if (isSmileDining) {
                        var currentglobalConfig = jsonParseObj(cJsonGetGlobalConfig, products.cSmileContactless);
                    }
                    else {
                        var currentglobalConfig = jsonParseObj(cJsonGetGlobalConfig, products.cSmileDining);
                    }
                    //Added by SMILEDINING-SA21-0058                    
                    var allDataSetting = isSmileDining ? jsonParseObj(cJsonGetAllDataSetting, products.cSmileDining) : jsonParseObj(cJsonGetAllDataSetting, products.cSmileContactless);
                    var globalConfig = allDataSetting.globalConfig;
                    var dataTime = allDataSetting.dataTime;
                    var dataHoliday = allDataSetting.dataHoliday;
                    var dataAutoCharge = allDataSetting.dataAutoCharge;
                    var dataDiscount = allDataSetting.dataDiscount;
                    var dataDiscountType = allDataSetting.dataDiscountType;
                    var dataDiscountTimeMap = allDataSetting.dataDiscountTimeMap; //Added and End by WEB-SA23-0045
                    var dataMap = allDataSetting.dataMap;
                    var dataGraguity = allDataSetting.dataGraguity;
                    var dataPromotion = allDataSetting.dataPromotion;
                    var dataShopClose = allDataSetting.dataShopClose;
                    var dataDiscountOneTimeUse = allDataSetting.dataDiscountOneTimeUse;
                    var dataPaymentFee = allDataSetting.dataPaymentFee; //Added and End by SMILEDINING-SA22-0020
                    var dataCustomerNotifications = allDataSetting.dataCustomerNotifications; //Added and End by WEB-SA24-0016
                    //End Added by SMILEDINING-SA21-0058
                    //var currentglobalConfig = isSmileDining ? jsonParseObj(cJsonGetGlobalConfig, products.cSmileContactless) : jsonParseObj(cJsonGetGlobalConfig, products.cSmileDining);                    
                    //Modified by SMILEDINING-SA21-0058
                    //var globalConfig = isSmileDining ? jsonParseObj(cJsonGetGlobalConfig, products.cSmileDining) : jsonParseObj(cJsonGetGlobalConfig, products.cSmileContactless);
                    //var dataTime = isSmileDining ? jsonParseObj(cJsonGetAllTime, products.cSmileDining) : jsonParseObj(cJsonGetAllTime, products.cSmileContactless);
                    //var dataHoliday = isSmileDining ? jsonParseObj(cJsonGetHoliday, products.cSmileDining) : jsonParseObj(cJsonGetHoliday, products.cSmileContactless);
                    //var dataAutoCharge = isSmileDining ? jsonParseObj(cJsonGetAutoCharge, products.cSmileDining) : jsonParseObj(cJsonGetAutoCharge, products.cSmileContactless);
                    //var dataDiscount = isSmileDining ? jsonParseObj(cJsonGetDiscount, products.cSmileDining) : jsonParseObj(cJsonGetDiscount, products.cSmileContactless);
                    //var dataDiscountType = isSmileDining ? jsonParseObj(cJsonGetDiscountType, products.cSmileDining) : jsonParseObj(cJsonGetDiscountType, products.cSmileContactless);
                    //var dataMap = jsonParseObj(cJsonGetMap, "");
                    //var dataGraguity = jsonParseObj(cJsonGetGraguity, "");    //Added and End by SMILEDINING-SA20-0018
                    //var dataPromotion = isSmileDining ? jsonParseObj(cJsonGetDataPromotion, products.cSmileDining) : jsonParseObj(cJsonGetDataPromotion, products.cSmileContactless); //Added and End by SMILEDINING-SA20-0016
                    //var dataShopClose = isSmileDining ? jsonParseObj(cJsonGetShopClose, products.cSmileDining) : jsonParseObj(cJsonGetShopClose, products.cSmileContactless);  //Added and End by SMILEDINING-SA20-0031
                    //var dataDiscountOneTimeUse = isSmileDining ? jsonParseObj(cJsonGetDisCountOneTimeUse, products.cSmileDining) : jsonParseObj(cJsonGetDisCountOneTimeUse, products.cSmileContactless);    //Added and End by SMILEDINING-SA20-0048
                    //End Modified by SMILEDINING-SA21-0058

                    //var closereason = filterGlobalConfig(currentglobalConfig, gcShopCloseReason);      //Modified and End by SMILEDINING-SA20-0031
                    if (!isSmileDining) {
                        var smileContactless = ko.observableArray([
                            {
                                globalConfigKey: 'smileContactless',
                                globalConfigValue: true,
                                globalConfigDesc: null
                            }]);
                        globalConfig.push(smileContactless()[0]);
                        mapUpdate = checkMap(dataMap, vmViewIndex.allMapZone);
                    }
                    else {
                        var dataCouponDelivery = jsonParseObj(cJsonGetCouponDelivery, "");
                        var noTable = _.head(dataCouponDelivery);

                        var noDeleiveryFreeTimeTable = _.head(dataMap.listDeliveryFreeTime);
                        if (noDeleiveryFreeTimeTable != undefined && noDeleiveryFreeTimeTable.shopMapCode == "noTable") {
                            vmViewIndex.allMapZone.hasDeliveryFreeTime(false)
                        }
                        if (noTable != undefined && noTable.couponDeliveryName == "noTable") {
                            vmViewIndex.allSetting.hasCouponDelivery(false)
                        }
                        DataCouponDeliveryViewModel(dataCouponDelivery);
                        DataAllMapViewModel(dataMap);
                    }

                    //var shopUpdate = checkShopUpdate(currentglobalConfig, vmViewIndex.globalConfig);    //Modified and End by WEB-SA24-0030
                    var shopUpdate = checkShopUpdate(currentglobalConfig, vmViewIndex.globalConfig, isSmileDining); //Added and End by WEB-SA24-0030

                    if (shopUpdate || mapUpdate) {
                        swal(setupAlert).then(function () {
                            //leave                         
                            //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType)                //Modified and End by SMILEDINING-SA20-0018
                            vmViewIndex.showLoading(true);
                            setTimeout(function () {
                                //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity)    //Added and End by SMILEDINING-SA20-0018         //Modified and End by SMILEDINING-SA20-0016
                                //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion) //Added and End by SMILEDINING-SA20-0016         //Modified and End by SMILEDINING-SA20-0031
                                //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion, dataShopClose);   //Added and End by SMILEDINING-SA20-0031       //Modified and End by SMILEDINING-SA20-0048
                                //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion, dataShopClose, dataDiscountOneTimeUse);   //Added and End by SMILEDINING-SA20-0048   //Modified and End by SMILEDINING-SA22-0020
                                //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion, dataShopClose, dataDiscountOneTimeUse, dataPaymentFee);   //Added and End by SMILEDINING-SA22-0020 //Modified and End by WEB-SA23-0045
                                //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion, dataShopClose, dataDiscountOneTimeUse, dataPaymentFee, dataDiscountTimeMap);   //Added and End by WEB-SA23-0045 //Modified and End by WEB-SA24-0016
                                updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion, dataShopClose, dataDiscountOneTimeUse, dataPaymentFee, dataDiscountTimeMap, dataCustomerNotifications); //Added and End by WEB-SA24-0016
                                vmViewIndex.allSetting.isSmileDining(isSmileDining);
                                resetTipsAuto();        //Added and End by SMILEDINING-SA20-0032
                                vmViewIndex.showLoading(false);
                            }, 3000);
                            vmViewIndex.allSetting.selectProduct(productID);
                            vmViewIndex.showMySetting(true);
                            if (!isSmileDining) {
                                showTab(false);
                            }
                            else {
                                showTab(true);
                            }
                        }, function (dismiss) {
                            //stay
                            if (dismiss === 'cancel') {
                                if (!isSmileDining) {
                                    self.valueArrProduct(products.cSmileDining);
                                    showTab(true);
                                }
                                else {
                                    self.valueArrProduct(products.cSmileContactless);
                                    showTab(false);
                                }
                            }
                        });

                    }
                    else {
                        //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType);       //Modified and End by SMILEDINING-SA20-0018
                        vmViewIndex.showLoading(true);
                        setTimeout(function () {
                            //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity) //Added and End by SMILEDINING-SA20-0018    //Modified and End by SMILEDINING-SA20-0016
                            //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion) //Added and End by SMILEDINING-SA20-0016     //Modified and End by SMILEDINING-SA20-0031
                            //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion, dataShopClose);   //Added and End by SMILEDINING-SA20-0031   //Modified and End by SMILEDINING-SA20-0048
                            //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion, dataShopClose, dataDiscountOneTimeUse);   //Added and End by SMILEDINING-SA20-0048   //Modified and End by SMILEDINING-SA22-0020
                            //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion, dataShopClose, dataDiscountOneTimeUse, dataPaymentFee);   //Added and End by SMILEDINING-SA22-0020 //Modified and End by WEB-SA23-0045
                            //updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion, dataShopClose, dataDiscountOneTimeUse, dataPaymentFee, dataDiscountTimeMap);   //Added and End by WEB-SA23-0045 //Modified and End by WEB-SA24-0016
                            updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity, dataPromotion, dataShopClose, dataDiscountOneTimeUse, dataPaymentFee, dataDiscountTimeMap, dataCustomerNotifications); //Added and End by WEB-SA24-0016
                            vmViewIndex.allSetting.isSmileDining(isSmileDining);
                            resetTipsAuto();        //Added and End by SMILEDINING-SA20-0032
                            vmViewIndex.showLoading(false);
                        }, 3000);

                        vmViewIndex.allSetting.selectProduct(productID);
                        vmViewIndex.showMySetting(true);
                        if (!isSmileDining) {
                            showTab(false);
                        }
                        else {
                            showTab(true);
                        }
                        $('#txt_ShopCloseStart').removeClass('dx-invalid');
                        $('#txt_ShopCloseEnd').removeClass('dx-invalid');
                    }

                }
            }
        });
    }
};

function jsonParseObj(ajax, key) {
    var data = JSON.parse(getObjFormAjax(ajax, key));
    return data;
};

//function updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType) {        //Modified and End by SMILEDINING-SA20-0018
//function updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge, dataDiscount, dataDiscountType, dataGraguity) {  //Added and End by SMILEDINING-SA20-0018        //Modified and End by SMILEDINING-SA20-0016
//Modified by SMILEDINING-SA20-0048
//function updateData(globalConfig, dataTime, dataHoliday, dataAutoCharge
//                  , dataDiscount, dataDiscountType, dataGraguity, dataPromotion
//                  , dataShopClose   //Added and End by SMILEDINING-SA20-0031
//                  ) {  //Added and End by SMILEDINING-SA20-0016
//End Modified by SMILEDINING-SA20-0048
//Added by SMILEDINING-SA20-0048
function updateData(globalConfig, dataTime, dataHoliday
                  , dataAutoCharge, dataDiscount, dataDiscountType
                  , dataGraguity, dataPromotion, dataShopClose
                  , dataDiscountOneTimeUse
                  , dataPaymentFee
                  , dataDiscountTimeMap //Added and End by WEB-SA23-0045
                  , dataCustomerNotifications //Added and End by WEB-SA24-0016
) {
    //End Added by SMILEDINING-SA20-0048
    DataGlobalConfigViewModel(globalConfig);
    AllTimeViewModel(dataTime);
    DataSettingViewModel(globalConfig);
    DataHolidaySetUpViewModel(dataHoliday);
    DataAutoChargeSetUpViewModel(dataAutoCharge);
    DataDiscountViewModel(dataDiscount, dataDiscountType);
    DataDiscountTimeMapViewModel(dataDiscountTimeMap); //Added and End by WEB-SA23-0045
    DataGraguityViewModel(globalConfig, dataGraguity); //Added and End by SMILEDINING-SA20-0018
    DataPromotionSetUpViewModel(dataPromotion);  //Added and End by SMILEDINING-SA20-0016
    DataShopCloseSetUpViewModel(dataShopClose)  //Added and End by SMILEDINING-SA20-0031
    DataDiscountOneTimeUseViewModel(dataDiscountOneTimeUse, dataDiscountType);  //Added and End by SMILEDINING-SA20-0048
    DataPaymentFeeSetUpViewModel(dataPaymentFee);    //Added and End by SMILEDINING-SA22-0020
    DataCustomerNotificationsSetUpViewModel(dataCustomerNotifications); //Added and End by WEB-SA24-0016
};

function showTab(isSmileDining) {
    var index = vmViewIndex.allSetting.tabSettingIndexClick();
    if (!isSmileDining) {
        //if (index != 5 && index != 6) {   //Modified and End by SMILEDINING-SA22-0009
        if (index != 4 && index != 5 && index != 6) {   //Added and End by SMILEDINING-SA22-0009
            $('#tabRestaurant').click();
        }
        $('#tabMapLabel').hide();
        //$('#tabMenuSettingLabel').hide(); //Modified and End by SMILEDINING-SA22-0009
    }
    else {
        $('#tabMapLabel').show();
        //$('#tabMenuSettingLabel').show(); //Modified and End by SMILEDINING-SA22-0009
    }
};

function checkMap(dataMap, NewData) {
    var self = this;
    var update = false;
    var filterData = new Array();
    var datamap = new Array();
    var data = new Array();
    var mapzone = '';
    var mapzonePrice = '';
    var datamapZonePrice = '';
    var datamapzone = vmViewIndex.allMapZone.mapZone();
    for (var i = 0 ; i < 2 ; i++) {
        datamap = dataMap.listMapZoneMile[i];
        data = NewData.listMapZoneMile()[i];
        if (
            data.mapZoneId() != datamap.mapZoneId ||
            data.startMile() != datamap.startMile ||
            data.endMile() != datamap.endMile ||
            data.price() != datamap.price) {
            filterData.push(datamap);
        }
    }

    mapzone = dataMap.settingDictionaryMapZone[1].trim();
    mapzonePrice = dataMap.settingDictionaryMapZonePrice[1];
    datamapZonePrice = NewData.mapZone()[0].MapZonePrice();
    var mymapzone = generateZoneData(mapzone);
    var mydatamapZoneValue = generateZoneData(datamapzone[0].MapZoneValue());
    checkMapZone(mapzonePrice, datamapZonePrice, filterData, mymapzone, mydatamapZoneValue);


    mapzone = dataMap.settingDictionaryMapZone[2].trim();
    mapzonePrice = dataMap.settingDictionaryMapZonePrice[2];
    datamapZonePrice = NewData.mapZone()[1].MapZonePrice();
    var mymapzone = generateZoneData(mapzone);
    var mydatamapZoneValue = generateZoneData(datamapzone[1].MapZoneValue());
    checkMapZone(mapzonePrice, datamapZonePrice, filterData, mymapzone, mydatamapZoneValue)

    mapzone = dataMap.settingDictionaryMapZone[3].trim();
    mapzonePrice = dataMap.settingDictionaryMapZonePrice[3];
    datamapZonePrice = NewData.mapZone()[2].MapZonePrice();
    var mymapzone = generateZoneData(mapzone);
    var mydatamapZoneValue = generateZoneData(datamapzone[2].MapZoneValue());
    checkMapZone(mapzonePrice, datamapZonePrice, filterData, mymapzone, mydatamapZoneValue)

    function checkMapZone(mapzonePrice, datamapZonePrice, filterData, mymapzone, mydatamapZoneValue) {
        if (mapzonePrice != datamapZonePrice) {
            filterData.push(mymapzone);
        }
        for (var i = 0; i < mymapzone.length; i++) {
            if (mymapzone[i] != mydatamapZoneValue[i]) {
                filterData.push(mymapzone);
            }
        }
    };

    if (filterData.length != 0) {
        update = true;
    }
    return update;
};

function generateZoneData(datamapZoneValue) {
    var list = datamapZoneValue.split(' ');
    var zonevalue = new Array();
    ko.utils.arrayForEach(list, function (datalist) {
        var id = datalist.split(' ');
        var val = id[0].split(',');
        var lat = val[0];
        var lng = val[1];
        zonevalue.push(convertStringToNumber(lat).toFixed(6));
        zonevalue.push(convertStringToNumber(lng).toFixed(6));

    });
    return zonevalue;
};

//End Added by SMILEDINING-SA20-0006

//Added by SMILEDINING-SA19-0011
function GiftCardViewModel(globalConfigData) {
    var self = this;
    var currentDateTime = filterGlobalConfig(globalConfigData, 'currentDateTime');
    //var formatDate = moment(currentDateTime, 'MM/DD/YYYY');
    //self.currentDate = ko.observable(moment(formatDate).format('MM/DD/YYYY'));
    var formatDate = moment(currentDateTime).format('MM/DD/YYYY');
    self.giftCardShopDate = ko.observable(formatDate);

    self.giftCardImageStorage = ko.observableArray([]);
    self.giftCardValueStorage = ko.observableArray([]);
    self.customDiscountStorage = ko.observableArray([]);
    self.giftCardValueSorting = ko.observableArray([]);

    self.addGiftCard = new AddGiftCard(self);
    self.showGuideLine = new ShowGuideLine(self);
    self.guideLine = ko.observable(true);
    self.giftCardView = new GiftCardView();

    //Added by SMILEDINING-SA21-0006
    self.showPurchaseGiftCard = ko.observable(filterGlobalConfig(globalConfigData, 'smiledining-show-giftcard'));
    self.isShowPurchaseGiftCard = ko.observable(self.showPurchaseGiftCard() == '1' ? true : false);
    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.isShowPurchaseGiftCard,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.isShowPurchaseGiftCard(true);
            } else {
                self.isShowPurchaseGiftCard(false);
            }
        }
    });
    //End Added by SMILEDINING-SA21-0006
};

function GiftCardView() {
    var self = this;
    self.fromDate = ko.observable();
    self.endDate = ko.observable();

    self.dataGiftCardView = ko.observableArray([]);
    self.dataGridGiftCardView = ko.observable({
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        dataSource: self.dataGiftCardView,
        showColumnLines: true,
        showRowLines: true,
        showBorders: true,
        hoverStateEnabled: true,
        //columnChooser: {
        //    enabled: true,
        //    mode: 'select'
        //},
        //grouping: {
        //    contextMenuEnabled: true,
        //    expandMode: 'rowClick'
        //},
        sorting: { mode: 'multiple' },
        paging: {
            pageSize: 15
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [15, 30, 60, 90],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        //groupPanel: {
        //    visible: true
        //},
        //filterRow: { visible: true },
        allowColumnReordering: true,
        columnAutoWidth: true,
        columns: [
            {
                caption: '#', width: 60, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },

            { dataField: 'fromEmail', caption: 'From', alignment: 'center', width: '200' },
            { dataField: 'toEmail', caption: 'To Email', alignment: 'center', width: '200' },
            { dataField: 'toPhone', caption: 'To Phone', alignment: 'center', width: '100' },
            { dataField: 'orderDateTime', caption: 'Purchase Date', alignment: 'center', width: '120', dataType: 'date', format: "MM/dd/yyyy", }, //Added and End by WEB-SA24-0003
            { dataField: 'deliveryDate', caption: 'Delivery Date', alignment: 'center', width: '110' },
            { dataField: 'giftCode', caption: 'Card Number', alignment: 'center', width: '130' },
            { dataField: 'payAmount', caption: 'Pay', alignment: 'center', format: 'currency', precision: '2', width: '130' },
            { dataField: 'getAmount', caption: 'Value', alignment: 'center', format: 'currency', precision: '2', width: '130' },
        ],
        //onRowPrepared: function (e) {
        //    e.rowElement.addClass('datagrid-summary-state-hover');
        //},
        onRowClick: function (info) {
            var data = info.data;
            //self.dataUserModal.action(cStatusUpdate);
            //self.dataUserModal.userId(data.userId());
            //self.dataUserModal.firstName(data.firstName());
            //self.dataUserModal.lastName(data.lastName());
            //self.dataUserModal.email(data.email());
            //self.dataUserModal.phone(data.phone());
            //self.dataUserModal.active(data.active());
            //modalShow(cModalWrUser);
            //setMaskPhone();
        },
        //onToolbarPreparing: function (e) {
        //    e.toolbarOptions.items.unshift(
        //    {
        //        location: 'after',
        //        widget: 'dxButton',
        //        options: {
        //            icon: 'fa fa-plus',
        //            onClick: function () {
        //                //resetWrUserViewModel();
        //                //modalShow(cModalWrUser);
        //            }
        //        }
        //    });
        //},
        summary: {
            totalItems: [{
                column: 'payAmount',
                summaryType: 'sum',
                valueFormat: 'currency',
                precision: '2'
            },
            {
                column: 'getAmount',
                summaryType: 'sum',
                valueFormat: 'currency',
                precision: '2'
            }
            ]
        }
    });

    self.dateFromDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: 'calendar',
        type: 'date',
        value: self.fromDate,
        width: 150,
        invalidDateMessage: 'Value must be a date',
        onValueChanged: function (v) {
            if (v.value != "" && v.value != undefined) {
                self.fromDate(moment(v.value).format('L'));
            } else {
                self.fromDate(moment(new Date()).format('L'));
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dateEndDateBox = ko.observable({
        acceptCustomValue: false,
        pickerType: 'calendar',
        type: 'date',
        value: self.endDate,
        width: 150,
        invalidDateMessage: 'Value must be a date',
        onValueChanged: function (v) {
            if (v.value != "" && v.value != undefined) {
                self.endDate(moment(v.value).format('L'));
            } else {
                self.endDate(moment(new Date()).format('L'));
            }
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onInitialized: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });
};

function ShowGuideLine(parent) {
    var parent = parent;
    var self = this;

    self.giftCardImageData = ko.observableArray([]);
    self.giftCardValueData = ko.observableArray([]);
    self.customDiscountData = ko.observableArray([]);
    self.giftCardValueDataSorting = ko.observableArray([]);
    self.dataGridGiftCardValueData = ko.observableArray([]);


    self.activeTab = ko.observable('upload-image');

    self.isNormalDiscountGroup = ko.observable(true);
    self.isCustomDiscountGroup = ko.observable(false);

    self.giftCerActive = ko.observable(true);
    self.giftCerValueId = ko.observable('');
    self.giftCerValueName = ko.observable('');
    self.getAmount = ko.observable(0.00).extend({ numeric: 2 });
    self.blurGetAmount = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 10000) {
            value = 10000;
        }
        self.getAmount(value);
        self.payAmount(value);

        changePayAmount();
    };

    self.payAmount = ko.observable(0.00).extend({ numeric: 2 });
    self.isDiscountAmount = ko.observable(true);
    self.isDiscountPercent = ko.observable(false);
    self.getAsPay = ko.observable(false);
    self.activateOnly = ko.observable(true);
    self.discountAmount = ko.observable(0.00).extend({ numeric: 2 });
    self.blurDiscountAmount = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 10000) {
            value = 10000;
        }

        self.discountAmount(value);

        if (value > self.getAmount()) {
            self.discountAmount(self.getAmount())
        }
        changePayAmount();
    };

    self.discountPercent = ko.observable(0.00).extend({ numeric: 2 });
    self.blurDiscountPercent = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 0;
        }
        self.discountPercent(value);
        changePayAmount();
    };

    self.lastGetAmount = ko.observable(0.00).extend({ numeric: 2 });
    self.sorting = ko.observable(0);
    self.lastSorting = ko.observable(0);

    self.discountActive = ko.observable(true);
    self.refGiftCardValueId = ko.observable('');
    self.giftCerCustomDiscountId = ko.observable(null);
    self.discountValueName = ko.observable('Custom');
    self.discountName = ko.observable('');
    self.discountDesc = ko.observable('');
    self.min = ko.observable(0.00).extend({ numeric: 2 });
    self.blurMin = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 10000) {
            value = 10000;
        }
        self.min(value);
        checkRangCustomDiscount();
    };
    self.max = ko.observable(0.00).extend({ numeric: 2 });
    self.blurMax = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 10000) {
            value = 10000;
        }
        self.max(value);
        checkRangCustomDiscount();
    };

    self.isCustomDiscountAmount = ko.observable(true);
    self.isCustomDiscountPercent = ko.observable(false);
    self.amountOff = ko.observable(0.00).extend({ numeric: 2 });
    self.blurAmountOff = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 10000) {
            value = 10000;
        }

        self.amountOff(value);

        if (value > self.min()) {
            self.amountOff(0)
        }
    };
    self.percentOff = ko.observable(0.00).extend({ numeric: 2 });
    self.blurPercentOff = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 0;
        }
        self.percentOff(value);
    };

    self.allDate = ko.observable(true);
    self.startDate = ko.observable(moment(new Date()).format('L'));
    self.endDate = ko.observable(moment(new Date()).format('L'));
    self.allTime = ko.observable(true);
    self.startTime = ko.observable(moment(time_start_24h, moment_time_format_hhmmss));
    self.endTime = ko.observable(moment(time_end_24h, moment_time_format_hhmmss));
    self.haveDiscountData = ko.observable(false);
    self.enableSubmitGiftCardValue = ko.observable(true);
    self.enableSubmitCustomDiscount = ko.observable(true);

    //self.currentDate = ko.observable(parent.currentDate);
    self.jsonGiftCardImageData = ko.observable('');
    self.jsonGiftCardValueData = ko.observable('');
    self.jsonCustomDiscountData = ko.observable('');

    self.showGiftCardValueDetail = ko.observable(false);
    self.showCustomDiscountDetail = ko.observable(false);
    self.enableEditCustomDiscountDetail = ko.observable(false);
    self.showDiscount = ko.observable(0.00);

    self.txtAdd = ko.observable('Add');

    self.calShowDiscount = function () {
        if (self.isDiscountAmount())
            self.showDiscount('$' + self.discountAmount());
        else if (self.isDiscountPercent())
            self.showDiscount(self.discountPercent() + '%');
        else
            self.showDiscount('0.00');
    };

    self.clickImageActive = function (data, event) {

        if (data.active() && !data.isDefault()) {
            data.active(false);
        }
        else {
            data.active(true);
        }

    };

    self.clickImageDefault = function (data, event) {
        if (data.active()) {
            if (data.isDefault()) {
                data.isDefault(false);
            }
            else {

                var index = _.findIndex(self.giftCardImageData(), function (o) {
                    return o.isDefault() == true;
                });

                if (index >= 0) {
                    self.giftCardImageData()[index].isDefault(false);
                }
                data.isDefault(true);
            }
        }
    };

    self.clickDiscountAmount = function () {
        self.isDiscountAmount(true);
        self.isDiscountPercent(false);
        self.discountPercent(0);
        removeClassValidationError(cfrmTxtDiscountAmount);
        removeClassValidationError(cfrmTxtDiscountPercent);
        return self.computePayAmount();
    };

    self.clickDiscountPercent = function () {
        self.isDiscountPercent(true);
        self.isDiscountAmount(false);
        self.discountAmount(0.00);
        removeClassValidationError(cfrmTxtDiscountAmount);
        removeClassValidationError(cfrmTxtDiscountPercent);
        return self.computePayAmount();
    };

    self.computePayAmount = function () {
        changePayAmount();
        return true;

    };

    function changePayAmount() {
        if (self.getAmount() > 0) {

            self.enableSubmitGiftCardValue(true);
            if (self.isDiscountAmount()) {
                if (self.discountAmount() < 0) self.discountAmount(0);
                var payAmount = self.getAmount() - self.discountAmount();
                self.payAmount(payAmount);
            }
            else {
                if (self.discountPercent() < 0) self.discountPercent(0);
                var discount = (self.getAmount() * self.discountPercent()) / 100;
                var payAmount = self.getAmount() - discount;
                self.payAmount(payAmount);
            }
        }
    };

    self.setupGiftCardValue = new SetupGiftCardValue();

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.giftCerActive,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.giftCerActive(true);
            } else {
                self.giftCerActive(false);
            }
        }
    });

    self.checkAddButton = function () {
        if (self.txtAdd() == 'Add') return true;
        else return false;
    };

    self.clickNormalDiscountGroup = function () {
        self.isNormalDiscountGroup(true);
        self.isCustomDiscountGroup(false);
        self.clearCustom();

        $(cfrmPanelCustomDiscount).hide('slide', { direction: 'up' }, function () {
            $(cfrmPanelNormalDiscount).show('slide', { direction: 'down' });
        });
        return true;
    };

    self.clickCustomDiscountGroup = function () {
        self.isNormalDiscountGroup(false);
        self.isCustomDiscountGroup(true);
        self.clearValue();

        $(cfrmPanelNormalDiscount).hide('slide', { direction: 'up' }, function () {
            $(cfrmPanelCustomDiscount).show('slide', { direction: 'down' });
        });
        return true;
    };

    self.saveNormalDiscount = function () {
        if (isEmpty(self.giftCerValueName())) {
            alerMessage(cError_GiftCerValueName_Empty, false);
            return true;
        }
        else if (Number(self.getAmount() <= 0)) {
            alerMessage(cError_GiftCerGetAmount, false);
            return true;
        }
        else if (self.isDiscountAmount() && Number(self.discountAmount()) > Number(self.getAmount())) {
            alerMessage(cError_GiftCerValueDiscountAmount_GreaterGetAmount, false);
            return true;
        }
        else if (self.isDiscountPercent() && Number(self.discountPercent()) > 100) {
            alerMessage(cError_GiftCerValueDiscountPercent_Greater100, false);
            return true;
        }
        else if (!(self.isDiscountAmount() || self.isDiscountPercent())) {
            alerMessage(cError_GiftCerDiscountType, false);
            return true;
        }

        if (self.checkAddButton()) {

            if (self.lastSorting() > 0)
                self.sorting(self.lastSorting() + 1);
            else
                self.sorting(1);

            self.lastSorting(self.sorting());

            var giftCardValueViewModel = new DataGiftCardValueViewModel({
                giftCerValueId: Math.floor((Math.random() * 10000) + 1),
                giftCerValueName: self.giftCerValueName(),
                getAmount: self.getAmount(),
                payAmount: self.payAmount(),
                isDiscountAmount: self.isDiscountAmount(),
                isDiscountPercent: self.isDiscountPercent(),
                discountAmount: self.discountAmount(),
                discountPercent: self.discountPercent(),
                getAsPay: false,
                activateOnly: true,
                sorting: self.sorting(),
                active: self.giftCerActive()
            });
            self.giftCardValueData.push(giftCardValueViewModel);

            self.giftCardValueDataSorting.push({
                giftCerValueId: giftCardValueViewModel.giftCerValueId(),
                sorting: giftCardValueViewModel.sorting()
            });

            var setGiftCardForGridData = new DataGridGiftCardValueViewModel(giftCardValueViewModel);
            self.dataGridGiftCardValueData.push(setGiftCardForGridData);

            var messageObject = { msgType: 'success', msgTitle: 'Normal price has been added' };
            swalMessage(messageObject, function () {
                self.clearValue();
            });
        }
        else {

            var updateGiftCardValueViewModel = new DataGiftCardValueViewModel({
                giftCerValueId: self.giftCerValueId(),
                giftCerValueName: self.giftCerValueName(),
                getAmount: self.getAmount(),
                payAmount: self.payAmount(),
                isDiscountAmount: self.isDiscountAmount(),
                isDiscountPercent: self.isDiscountPercent(),
                discountAmount: self.discountAmount(),
                discountPercent: self.discountPercent(),
                getAsPay: false,
                activateOnly: true,
                sorting: self.sorting(),
                active: self.giftCerActive()
            });

            var filterValue = ko.utils.arrayFilter(self.giftCardValueData(), function (value) {
                return value.giftCerValueId() == self.giftCerValueId();
            });
            self.giftCardValueData.replace(_.first(filterValue), updateGiftCardValueViewModel);

            var updateGiftCardForGridData = new DataGridGiftCardValueViewModel(updateGiftCardValueViewModel);
            var filterGrid = ko.utils.arrayFilter(self.dataGridGiftCardValueData(), function (value) {
                return value.valueId() == self.giftCerValueId();
            });
            self.dataGridGiftCardValueData.replace(_.first(filterGrid), updateGiftCardForGridData);

            var messageObject = { msgType: 'success', msgTitle: 'Normal discount has been updated' };
            swalMessage(messageObject, function () {
                self.clearValue();
            });
        }

    };

    self.deleteNormalDiscount = function (data, event) {

        var filterSorting = ko.utils.arrayFilter(self.giftCardValueDataSorting(), function (value) {
            return value.giftCerValueId == self.giftCerValueId();
        });
        self.giftCardValueDataSorting.removeAll(filterSorting);

        var filterValue = ko.utils.arrayFilter(self.giftCardValueData(), function (value) {
            return value.giftCerValueId() == self.giftCerValueId();
        });
        self.giftCardValueData.removeAll(filterValue);

        var filterGrid = ko.utils.arrayFilter(self.dataGridGiftCardValueData(), function (value) {
            return value.valueId() == self.giftCerValueId();
        });
        self.dataGridGiftCardValueData.removeAll(filterGrid);

        var messageObject = { msgType: 'success', msgTitle: 'Normal price was delete' };
        swalMessage(messageObject, function () {
            self.clearValue();
        });
    };

    self.cancelUpdateNormalDiscount = function () {
        self.clearValue();
    };

    self.saveCustomDiscount = function () {

        if (isEmpty(self.discountName())) {
            alerMessage(cError_GiftCerCustomDiscountName, false);
            return true;
        }
            //else if (isEmpty(self.discountDesc())) {
            //    alerMessage(cError_GiftCerCustomDiscountDesc, false);
            //    return true;
            //}
        else if (isNaN(self.min()) || isNaN(self.max())) {
            alerMessage(cError_GiftCerCustomDiscountMinMax_Empty, false);
            return true;
        }
        else if (self.min() <= 0 || self.max() <= 0) {
            alerMessage(cError_GiftCerCustomDiscountMinMax_NotZero, false);
            return true;
        }
        else if (Number(self.min()) >= Number(self.max())) {
            alerMessage(cError_GiftCerCustomDiscountMin_LessMax, false);
            return true;
        }
        else if (!(self.isCustomDiscountAmount() || self.isCustomDiscountPercent())) {
            alerMessage(cError_GiftCerCustomDiscountType, false);
            return true;
        }
        else if (self.isCustomDiscountAmount() && isNaN(self.amountOff())) {
            alerMessage(cError_GiftCerCustomDiscountAmount_Empty, false);
            return true;
        }
            //else if (self.isCustomDiscountAmount() && (Number(self.amountOff()) >= Number(self.min()))) {
            //    alerMessage(cError_GiftCerCustomDiscountAmount_GreaterMin, false);
            //    return true;
            //}
        else if (self.isCustomDiscountPercent() && isNaN(self.percentOff())) {
            alerMessage(cError_GiftCerCustomDiscountPercent_Empty, false);
            return true;
        }
        else if (self.isCustomDiscountPercent() && Number(self.percentOff()) > 100) {
            alerMessage(cError_GiftCerCustomDiscountPercent_Greater100, false);
            return true;
        }
        else if (!self.allDate() && (isEmpty(self.startDate()) || isEmpty(self.endDate()))) {
            alerMessage(cError_GiftCerCustomDiscountDay_Empty, false);
            return true;
        }
        else if (!self.allTime() && (isEmpty(self.startTime()) || isEmpty(self.endTime()))) {
            alerMessage(cError_GiftCerCustomDiscountTime_Empty, false);
            return true;
        }

        if (!self.haveDiscountData()) {
            self.refGiftCardValueId(Math.floor((Math.random() * 10000) + 1));

            if (self.lastSorting() > 0)
                self.sorting(self.lastSorting() + 1);
            else
                self.sorting(1);
            self.lastSorting(self.sorting());

            var giftCardValueViewModel = new DataGiftCardValueViewModel({
                giftCerValueId: self.refGiftCardValueId(),
                giftCerValueName: self.discountValueName(),
                getAmount: 0,
                payAmount: 0,
                isDiscountAmount: false,
                isDiscountPercent: false,
                discountAmount: 0,
                discountPercent: 0,
                getAsPay: true,
                activateOnly: true,
                sorting: self.sorting(),
                active: self.discountActive()
            });
            self.giftCardValueData.push(giftCardValueViewModel);

            self.giftCardValueDataSorting.push({
                giftCerValueId: giftCardValueViewModel.giftCerValueId(),
                sorting: giftCardValueViewModel.sorting()
            });
        }

        if (self.checkAddButton()) {
            var setCustomDiscountData = new DataCustomDiscountViewModel({
                refGiftCardValueId: self.refGiftCardValueId(),
                giftCerCustomDiscountId: Math.floor((Math.random() * 10000) + 1),
                discountValueName: self.discountValueName(),
                discountName: self.discountName(),
                discountDesc: self.discountDesc(),
                min: self.min(),
                max: self.max(),
                allDate: self.allDate(),
                startDate: self.startDate(),
                endDate: self.endDate(),
                allTime: self.allTime(),
                startTime: self.startTime(),
                endTime: self.endTime(),
                isCustomDiscountAmount: self.isCustomDiscountAmount(),
                isCustomDiscountPercent: self.isCustomDiscountPercent(),
                amountOff: self.amountOff(),
                percentOff: self.percentOff(),
                active: self.discountActive()
            });

            self.customDiscountData.push(setCustomDiscountData);

            DataCustomDiscountToGiftCardValue(self, ko.toJS(setCustomDiscountData));

            self.haveDiscountData(true);

            var messageObject = { msgType: 'success', msgTitle: 'Custom price has been added' };
            swalMessage(messageObject, function () {
                self.clearCustom();
            });

        }
        else {
            var updateCustomDiscountData = new DataCustomDiscountViewModel({
                refGiftCardValueId: self.refGiftCardValueId(),
                giftCerCustomDiscountId: self.giftCerCustomDiscountId(),
                discountValueName: self.discountValueName(),
                discountName: self.discountName(),
                discountDesc: self.discountDesc(),
                min: self.min(),
                max: self.max(),
                allDate: self.allDate(),
                startDate: self.startDate(),
                endDate: self.endDate(),
                allTime: self.allTime(),
                startTime: self.startTime(),
                endTime: self.endTime(),
                isCustomDiscountAmount: self.isCustomDiscountAmount(),
                isCustomDiscountPercent: self.isCustomDiscountPercent(),
                amountOff: self.amountOff(),
                percentOff: self.percentOff(),
                active: self.discountActive()
            });

            var filterData = ko.utils.arrayFilter(self.customDiscountData(), function (value) {
                return value.giftCerCustomDiscountId() == self.giftCerCustomDiscountId();
            });
            self.customDiscountData.replace(_.first(filterData), updateCustomDiscountData);

            DataUpdateCustomDiscountToGiftCardValue(self, ko.toJS(updateCustomDiscountData));

            var messageObject = { msgType: 'success', msgTitle: 'Custom discount has been update' };
            swalMessage(messageObject, function () {
                self.clearCustom();
            });
        }

        var filterActiveStatus = ko.utils.arrayFilter(self.customDiscountData(), function (value) {
            return value.active() == true;
        });

        var filterValue = ko.utils.arrayFilter(self.giftCardValueData(), function (value) {
            return value.giftCerValueId() == self.refGiftCardValueId();
        });

        if (filterActiveStatus.length == 0) {
            var upDategiftCardValueStatus = new DataGiftCardValueViewModel({
                giftCerValueId: self.refGiftCardValueId(),
                giftCerValueName: self.discountValueName(),
                getAmount: 0,
                payAmount: 0,
                isDiscountAmount: false,
                isDiscountPercent: false,
                discountAmount: 0,
                discountPercent: 0,
                getAsPay: true,
                activateOnly: true,
                sorting: _.first(filterValue).sorting(),
                active: false
            });
            self.giftCardValueData.replace(_.first(filterValue), upDategiftCardValueStatus);
        }
        else if (filterActiveStatus.length == 1) {
            var upDategiftCardValueStatus = new DataGiftCardValueViewModel({
                giftCerValueId: self.refGiftCardValueId(),
                giftCerValueName: self.discountValueName(),
                getAmount: 0,
                payAmount: 0,
                isDiscountAmount: false,
                isDiscountPercent: false,
                discountAmount: 0,
                discountPercent: 0,
                getAsPay: true,
                activateOnly: true,
                sorting: _.first(filterValue).sorting(),
                active: true
            });
            self.giftCardValueData.replace(_.first(filterValue), upDategiftCardValueStatus);
        }

    };

    self.deleteCustomDiscount = function () {
        var filterCustom = ko.utils.arrayFilter(self.customDiscountData(), function (value) {
            return value.giftCerCustomDiscountId() == self.giftCerCustomDiscountId();
        });
        self.customDiscountData.removeAll(filterCustom);

        var filterValueGrid = ko.utils.arrayFilter(self.dataGridGiftCardValueData(), function (value) {
            return value.valueId() == self.giftCerCustomDiscountId();
        });
        self.dataGridGiftCardValueData.removeAll(filterValueGrid);

        if (self.customDiscountData().length <= 0) {
            var filterValue = ko.utils.arrayFilter(self.giftCardValueData(), function (value) {
                return value.giftCerValueId() == self.refGiftCardValueId();
            });
            self.giftCardValueData.removeAll(filterValue);

            self.refGiftCardValueId('');
            //self.discountValueName('');
            self.haveDiscountData(false);
        }

        var messageObject = { msgType: 'success', msgTitle: 'Custom price was deleted' };
        swalMessage(messageObject, function () {
            self.clearCustom();
        });

    };

    self.btnCustomDiscountActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.discountActive,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.discountActive(true);
            } else {
                self.discountActive(false);
            }
        }
    });

    self.clickCustomDiscountAmount = function () {
        self.isCustomDiscountAmount(true);
        self.isCustomDiscountPercent(false);
        self.percentOff(0);
        removeClassValidationError(cfrmTxtCustomDiscountAmount);
        removeClassValidationError(cfrmTxtCustomDiscountPercent);
        return true;
    };

    self.clickCustomDiscountPercent = function () {
        self.isCustomDiscountPercent(true);
        self.isCustomDiscountAmount(false);
        self.amountOff(0.00);
        removeClassValidationError(cfrmTxtCustomDiscountAmount);
        removeClassValidationError(cfrmTxtCustomDiscountPercent);
        return true;
    };

    self.checkCustomDiscountValue = function () {
        if (self.isCustomDiscountAmount()) {
            if (Number(self.amountOff()) < 0) self.amountOff(0.00);
        }
        else {
            if (Number(self.percentOff()) < 0) self.percentOff(0);
        }
        return true;
    };

    self.dxCustomDiscountStartDate = ko.observable({
        acceptCustomValue: false,
        width: 'auto',
        pickerType: 'calendar',
        type: 'date',
        min: self.currentDate,
        value: self.startDate,
        disabled: self.allDate,
        onValueChanged: function (v) {
            if (v.value === "" || v.value === null || v.value === undefined) {
                v.component.option('isValid', false);
            }
            self.startDate(moment(new Date(v.value)).format('MM/DD/YYYY'));
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        }, onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dxCustomDiscountEndDate = ko.observable({
        acceptCustomValue: false,
        width: 'auto',
        min: self.startDate,
        pickerType: 'calendar',
        type: 'date',
        value: self.endDate,
        disabled: self.allDate,
        onValueChanged: function (v) {
            if (v.value === '' || v.value === null || v.value === undefined) {
                v.component.option('isValid', false);
            }
            self.endDate(moment(new Date(v.value)).format('MM/DD/YYYY'));
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dxCustomDiscountStartTime = ko.observable({
        max: self.endTime,
        pickerType: 'list',
        type: 'time',
        value: self.startTime,
        disabled: self.allTime,
        onValueChanged: function (v) {
            if (v.value === '' || v.value === null || v.value === undefined) {
                v.component.option('isValid', false);
            }
            else {
                self.startTime(moment(v.value, moment_time_format_hhmmss));
            }

        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {

            } else {

            }
        }
    });

    self.dxCustomDiscountEndTime = ko.observable({
        min: self.startTime,
        pickerType: 'list',
        type: 'time',
        value: self.endTime,
        disabled: self.allTime,
        onValueChanged: function (v) {
            if (v.value === '' || v.value === null || v.value === undefined) {
                v.component.option('isValid', false);
            }
            else {
                self.endTime(moment(v.value, moment_time_format_hhmmss));
            }

        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {

            } else {

            }
        }
    });

    self.clearValue = function clearNormalDiscount() {
        self.giftCerValueName('');
        self.getAmount(0.00);
        self.payAmount(0.00);
        //self.isDiscountAmount(false);
        self.isDiscountPercent(false);
        self.discountAmount(0.00);
        self.discountPercent(0.00);
        self.giftCerActive(true);

        self.lastGetAmount(0.00);
        self.enableSubmitGiftCardValue(true);
        self.txtAdd('Add');
    };

    self.clearCustom = function clearCustomDiscount() {
        self.discountName('');
        self.discountDesc('');
        self.min('0.00');
        self.max('0.00');
        self.allDate(true);
        self.startDate(moment(new Date()).format('L'));
        self.endDate(moment(new Date()).format('L'));
        self.allTime(true);
        self.startTime(moment(time_start_24h, moment_time_format_hhmmss));
        self.endTime(moment(time_end_24h, moment_time_format_hhmmss));
        self.isCustomDiscountAmount(true);
        self.isCustomDiscountPercent(false);
        self.amountOff('0.00');
        self.percentOff('0');
        self.discountActive(true);
        self.enableSubmitCustomDiscount(true);
        self.txtAdd('Add');
    };

    self.clickSubmitGiftCard = function () {
        swalConfirmSubmitGifCard(cfrmGiftCard, cMessage_SubmitGiftCard);
    };

    self.prepareGiftCardData = function () {
        var jsImageData = ko.toJS(self.giftCardImageData());
        var jsonImageData = ko.toJSON(jsImageData);
        self.jsonGiftCardImageData(jsonImageData);

        _.forEach(self.giftCardValueDataSorting(), function (data, index) {
            var sortingGiftCardValueData = _.find(self.giftCardValueData(), function (o) {
                return o.giftCerValueId() == data.giftCerValueId;
            });
            sortingGiftCardValueData.sorting(data.sorting);
        });

        var jsGiftCardValueData = ko.toJS(self.giftCardValueData());
        var jsonGiftCardValueData = ko.toJSON(jsGiftCardValueData);
        self.jsonGiftCardValueData(jsonGiftCardValueData);

        self.customDiscountData().forEach(function (item) {
            var sTime = moment(item.startTime()).format(moment_time_format_HHmmss);
            var eTime = moment(item.endTime()).format(moment_time_format_HHmmss);
            item.startTime(sTime);
            item.endTime(eTime);
        });

        var jsCustomDiscountData = ko.toJS(self.customDiscountData());
        var jsonCustomDiscountData = ko.toJSON(jsCustomDiscountData);
        self.jsonCustomDiscountData(jsonCustomDiscountData);
    };

    self.dataGridGiftCardValue = ko.observable({
        dataSource: self.dataGridGiftCardValueData,
        showBorders: false,
        showColumnHeader: false,
        showColumnLines: false,
        showRowLines: true,
        visible: true,
        hoverStateEnabled: true,
        columnAutoWidth: true,
        columnHidingEnabled: false,
        rowAlternationEnabled: false,
        onInitialized: function (e) {
            dataGrid = e.component;
        },
        columns: [
            {
                caption: '#', width: 40, alignment: 'center',
                cellTemplate: function (container, options) {
                    container.text(dataGrid.pageIndex() * dataGrid.pageSize() + options.rowIndex + 1);
                }
            },
            { dataField: 'valueName', caption: 'Name', width: '100', alignment: 'left' },
            { dataField: 'getAmount', caption: 'Get', alignment: 'center', width: '100' },
            { dataField: 'payAmount', caption: 'Pay', alignment: 'center', width: '100' },
            { dataField: 'discountAmount', caption: '$', alignment: 'center', width: '100' },
            { dataField: 'discountPercent', caption: '%', alignment: 'center', width: '100' },
            { dataField: 'getAsPay', caption: 'Custom', alignment: 'center', width: '80' },
            { dataField: 'active', caption: 'Active' }
        ],
        onCellPrepared: function (options) {

            var fieldData = options.value,
                fieldHtml = '';
            if (!isEmpty(fieldData)) {
                if (fieldData == true && typeof (fieldData) === 'boolean') {
                    fieldHtml = '<span><i class=\'fa fa-check text-success\'></i></span>';
                } else if (fieldData == false && typeof (fieldData) === 'boolean') {
                    fieldHtml = '<span><i class=\'fa fa-close text-danger\'></i></span>';
                }
                else if (options.columnIndex == 4 && fieldData != '0.00') {
                    fieldHtml = '$' + fieldData;
                }
                else if (options.columnIndex == 5 && fieldData != '0') {
                    fieldHtml = fieldData + '%';
                }
                else {
                    fieldHtml = fieldData.value;
                }
                options.cellElement.html(fieldHtml);
            }
        },
        onRowClick: function (item) {

            if (self.activeTab() == 'giftcard-value') {
                var data = item.data;
                var unmap = ko.mapping.toJSON(data);

                ko.mapping.fromJSON(unmap, {}, self.setupGiftCardValue);

                if (!self.setupGiftCardValue.getAsPay()) {
                    self.giftCerValueId(self.setupGiftCardValue.valueId());
                    self.giftCerValueName(self.setupGiftCardValue.valueName());
                    self.getAmount(self.setupGiftCardValue.getAmount());
                    self.payAmount(self.setupGiftCardValue.payAmount());
                    self.discountAmount(self.setupGiftCardValue.discountAmount());
                    self.discountPercent(self.setupGiftCardValue.discountPercent());
                    self.getAsPay(self.setupGiftCardValue.getAsPay());
                    self.activateOnly(self.setupGiftCardValue.activateOnly());
                    self.isDiscountAmount(self.setupGiftCardValue.isDiscountAmount());
                    self.isDiscountPercent(self.setupGiftCardValue.isDiscountPercent());
                    self.sorting(self.setupGiftCardValue.sorting());
                    self.giftCerActive(self.setupGiftCardValue.active());
                    self.lastGetAmount(self.setupGiftCardValue.getAmount());

                    self.clickNormalDiscountGroup();
                    self.txtAdd('Update');

                    $(cModalShowGuideLineGiftCardValue).modal('hide');
                }
                else {

                    var updateCustomDiscount = ko.utils.arrayFilter(self.customDiscountData(), function (value) {
                        return value.giftCerCustomDiscountId() == self.setupGiftCardValue.valueId();
                    });

                    if (updateCustomDiscount.length > 0) {
                        var customDiscount = _.first(updateCustomDiscount);

                        //var startDate = moment(customDiscount.startDate()).format('MM/DD/YYYY');
                        //if (moment(parent.currentDate()).isAfter(startDate)) {
                        //    self.currentDate(startDate);
                        //}
                        //else {
                        //    self.currentDate(parent.currentDate());
                        //}

                        self.discountActive(customDiscount.active());
                        self.refGiftCardValueId(customDiscount.refGiftCardValueId());
                        self.giftCerCustomDiscountId(customDiscount.giftCerCustomDiscountId());
                        self.discountValueName(customDiscount.discountValueName());
                        self.discountName(customDiscount.discountName());
                        self.discountDesc(customDiscount.discountDesc());
                        self.min(customDiscount.min());
                        self.max(customDiscount.max());
                        self.isCustomDiscountAmount(customDiscount.isCustomDiscountAmount());
                        self.isCustomDiscountPercent(customDiscount.isCustomDiscountPercent());
                        self.amountOff(customDiscount.amountOff());
                        self.percentOff(customDiscount.percentOff());
                        self.allDate(customDiscount.allDate());
                        self.startDate(customDiscount.startDate());
                        self.endDate(customDiscount.endDate());
                        self.allTime(customDiscount.allTime());
                        self.startTime(customDiscount.startTime());
                        self.endTime(customDiscount.endTime());

                        self.clickCustomDiscountGroup();
                        self.txtAdd('Update');

                        $(cModalShowGuideLineGiftCardValue).modal('hide');
                    }
                }
            }

        },
        onToolbarPreparing: function (e) {

        },
        searchPanel: {
            visible: self.chkSearch,
            placeholder: 'Search...',
            highlightSearchText: false
        },
        loadPanel: {
            enabled: true,
            showPane: false,
            text: ''
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [30, 60, 90],
            showInfo: false,
            visible: true
        },
        paging: {
            enabled: true,
            pageIndex: 0,
            pageSize: 30
        },
        onRowPrepared: function (e) {
            e.rowElement.addClass('myRow-hover');
        },
        onContentReady: function (e) {
            $(cGuideLineGiftCardValue + " .dx-scrollable").dxScrollable({ showScrollbar: 'always' });
        }
    });

    self.clickStepUploadImage = function () {
        switch (self.activeTab()) {
            case 'image-descripttion':
                self.clickBackGifCard();
                break;
            case 'giftcard-value':
                self.activeTab('image-descripttion');
                $(cfrmTabCreateGiftCardValue).removeClass('active');
                $(cfrmStep3GiftCard).removeClass('active');
                $(cfrmTabCreateCustomDiscount).removeClass('active');
                self.clickBackGifCard();
                break;
            case 'complete-step':
                self.activeTab('image-descripttion');
                $(cfrmTabCompleteGiftCard).removeClass('active');
                $(cfrmStep4GiftCard).removeClass('active');
                self.clickBackGifCard();
                break;
            default:
                break;
        }
    };

    self.clickStepConfigImage = function () {
        switch (self.activeTab()) {
            case 'upload-image':
                self.clickNextGiftCard();
                break;
            case 'giftcard-value':
                self.clickBackGifCard();
                break;
            case 'complete-step':
                self.activeTab('giftcard-value');
                $(cfrmTabCompleteGiftCard).removeClass('active');
                $(cfrmStep4GiftCard).removeClass('active');
                self.clickBackGifCard();
                break;
            default:
                break;
        }
    };

    self.clickStepGiftCardValue = function () {

        self.clearValue();
        self.clearCustom();

        switch (self.activeTab()) {
            case 'upload-image':
                self.activeTab('image-descripttion');
                $(cfrmTabUploadGiftCardImage).removeClass('active');
                $(cfrmStep1GiftCard).removeClass('active');
                self.clickNextGiftCard();
                break;
            case 'image-descripttion':
                self.clickNextGiftCard();
                break;
            case 'complete-step':
                self.clickBackGifCard();
                break;
            default:
                break;
        }
    };

    self.clickStepComplete = function () {

        clearCardSelected();

        switch (self.activeTab()) {
            case 'upload-image':
                self.activeTab('giftcard-value');
                $(cfrmTabUploadGiftCardImage).removeClass('active');
                $(cfrmStep1GiftCard).removeClass('active');
                self.clickNextGiftCard();
                break;
            case 'image-descripttion':
                self.activeTab('giftcard-value');
                $(cfrmTabImageDescription).removeClass('active');
                $(cfrmStep2GiftCard).removeClass('active');
                self.clickNextGiftCard();
                break;
            case 'giftcard-value':
                self.clickNextGiftCard();
                break;
            default:
                break;
        }
    };

    self.clickNextGiftCard = function () {

        switch (self.activeTab()) {
            case 'upload-image':
                self.giftCardImageData([]);

                if ($('.imageuploadify-container').length > 0) {
                    for (i = 0; i < $('.imageuploadify-container').length; i++) {
                        var obj = $('.imageuploadify-container').eq(i);
                        var imgSrc = obj.find('img').attr('src');
                        var setDefault = false;
                        if (i == 0) setDefault = true;

                        var giftCardImageViewModel = new DataGiftCardImageViewModel({
                            giftCerImagesId: 'giftcardimage' + i,
                            active: true,
                            isDefault: setDefault,
                            giftCerImagesName: imgSrc,
                            sorting: i
                        });

                        self.giftCardImageData.push(giftCardImageViewModel);
                    }
                }

                self.activeTab('image-descripttion');
                $(cfrmTabUploadGiftCardImage).removeClass('active');
                $(cfrmTabImageDescription).addClass('active');
                $(cfrmStep1GiftCard).removeClass('active');
                $(cfrmStep2GiftCard).addClass('active');
                break;

            case 'image-descripttion':
                var orderImage = [];
                for (i = 0; i < $(cfrmTabImageDescription + ' .card-giftcard').length; i++) {
                    var imgObj = $(cfrmTabImageDescription + ' .card-giftcard');
                    var id = imgObj.eq(i).find('img').attr('id');
                    var index = _.findIndex(self.giftCardImageData(), function (o) {
                        return o.giftCerImagesId() == id;
                    });

                    self.giftCardImageData()[index].sorting(i);
                    orderImage[i] = self.giftCardImageData()[index];
                }

                var active = false;
                _.forEach(orderImage, function (value) {
                    if (value.active() == true) {
                        active = true;
                    }
                });

                if (!active) {
                    swal('Oops...', cError_GiftCerImage_IsActive, cSwal_Icon_Error);
                } else {

                    self.giftCardImageData(orderImage);

                    self.activeTab('giftcard-value');
                    $(cfrmTabImageDescription).removeClass('active');
                    $(cfrmTabCreateGiftCardValue).addClass('active');
                    $(cfrmStep2GiftCard).removeClass('active');
                    $(cfrmStep3GiftCard).addClass('active');
                }

                break;

            case 'giftcard-value':
                selectNextActivity(function (result) {
                    if (result == 'addGiftCardValue') {
                        self.giftCerValueName('');
                        self.getAmount(0.00);
                        self.payAmount(0.00);
                        self.isDiscountAmount(false);
                        self.isDiscountPercent(false);
                        self.discountAmount(0.00);
                        self.discountPercent(0.00);

                        self.clickNormalDiscountGroup();
                    }
                    else if (result == 'addCustomDiscount') {
                        self.discountName('');
                        self.discountDesc('');
                        self.min('0.00');
                        self.max('0.00');
                        self.allDate(true);
                        self.startDate(moment(new Date()).format('L'));
                        self.endDate(moment(new Date()).format('L'));
                        self.allTime(true);
                        self.startTime(moment(time_start_24h, moment_time_format_hhmmss));
                        self.endTime(moment(time_end_24h, moment_time_format_hhmmss));
                        self.isCustomDiscountAmount(false);
                        self.isCustomDiscountPercent(false);
                        self.amountOff('0.00');
                        self.percentOff('0');
                        self.discountActive(true);

                        self.clickCustomDiscountGroup();
                    }
                    else {
                        self.activeTab('complete-step');
                        $(cfrmTabCreateGiftCardValue).removeClass('active');
                        $(cfrmTabCompleteGiftCard).addClass('active');
                        $(cfrmStep3GiftCard).removeClass('active');
                        $(cfrmStep4GiftCard).addClass('active');

                        clearCardSelected();
                    }
                });

                var giftCardValueDataCount = self.giftCardValueData().length;
                var customDiscountDataCount = self.customDiscountData().length;

                if (customDiscountDataCount > 0) {
                    giftCardValueDataCount -= 1;
                }

                if (giftCardValueDataCount > 0 && customDiscountDataCount > 0) {
                    self.activeTab('complete-step');
                    $(cfrmTabCreateGiftCardValue).removeClass('active');
                    $(cfrmTabCompleteGiftCard).addClass('active');
                    $(cfrmStep3GiftCard).removeClass('active');
                    $(cfrmStep4GiftCard).addClass('active');

                    clearCardSelected();
                }
                break;

            default:
                break;
        }
    };

    self.clickBackGifCard = function () {
        switch (self.activeTab()) {
            case 'complete-step':
                self.activeTab('giftcard-value');
                $(cfrmTabCreateGiftCardValue).addClass('active');
                $(cfrmTabCompleteGiftCard).removeClass('active');
                $(cfrmStep3GiftCard).addClass('active');
                $(cfrmStep4GiftCard).removeClass('active');
                break;

            case 'giftcard-value':
                self.activeTab('image-descripttion');
                $(cfrmTabCreateGiftCardValue).removeClass('active');
                $(cfrmTabImageDescription).addClass('active');
                $(cfrmStep3GiftCard).removeClass('active');
                $(cfrmStep2GiftCard).addClass('active');
                $(cfrmTabCreateCustomDiscount).removeClass('active');
                break;

            case 'image-descripttion':
                self.activeTab('upload-image');
                $(cfrmTabImageDescription).removeClass('active');
                $(cfrmTabUploadGiftCardImage).addClass('active');
                $(cfrmStep2GiftCard).removeClass('active');
                $(cfrmStep1GiftCard).addClass('active');
                break;

            case 'upload-image':
                break;

            default:
                break;
        }
    };

    self.checkRangCustomDiscount = function () {
        checkRangCustomDiscount();
    };

    function checkRangCustomDiscount() {
        self.enableSubmitCustomDiscount(true);

        var customDiscountData = _.orderBy(self.customDiscountData(), function (v) {
            return v.min();
        });

        var minInRange = _.filter(customDiscountData, function (v) {
            return _.inRange(parseFloat(self.min()), parseFloat(v.min()), parseFloat(v.max()) + 0.01);
        });

        var maxInRange = _.filter(customDiscountData, function (v) {
            return _.inRange(parseFloat(self.max()), parseFloat(v.min()), parseFloat(v.max()) + 0.01);
        });

        var indexMin = _.findIndex(minInRange, function (v) {
            return v.giftCerCustomDiscountId() != self.giftCerCustomDiscountId();
        });

        var indexMax = _.findIndex(maxInRange, function (v) {
            return v.giftCerCustomDiscountId() != self.giftCerCustomDiscountId();
        });

        if (minInRange.length > 0 && indexMin >= 0) {
            self.enableSubmitCustomDiscount(false);
            alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + minInRange[indexMin].discountName() + '" ', false);
        } else if (maxInRange.length > 0 && indexMax >= 0) {
            self.enableSubmitCustomDiscount(false);
            alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + maxInRange[indexMax].discountName() + '" ', false);
        } else if (Number(self.min()) < Number(self.max())) {
            var minInRangeRev = _.filter(customDiscountData, function (v) {
                return _.inRange(v.min(), self.min(), self.max() + 1);
            });

            var maxInRangeRev = _.filter(customDiscountData, function (v) {
                return _.inRange(v.max(), self.min(), self.max() + 1);
            });

            var indexMinRev = _.findIndex(minInRangeRev, function (v) {
                return v.giftCerCustomDiscountId() != self.giftCerCustomDiscountId();
            });

            var indexMaxRev = _.findIndex(maxInRangeRev, function (v) {
                return v.giftCerCustomDiscountId() != self.giftCerCustomDiscountId();
            });

            if (minInRangeRev.length > 0 && indexMinRev >= 0) {
                self.enableSubmitCustomDiscount(false);
                alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + minInRangeRev[indexMinRev].discountName() + '" ', false);
            } else if (maxInRangeRev.length > 0 && indexMaxRev >= 0) {
                self.enableSubmitCustomDiscount(false);
                alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + maxInRangeRev[indexMaxRev].discountName() + '" ', false);
            }
        }
    };

    self.checkEmptyData = function () {
        if (self.giftCardImageData().length > 0 || self.giftCardValueData().length > 0 || self.customDiscountData().length > 0)
            return true;

        return false;
    };

};

function AddGiftCard(parent) {
    var parent = parent;
    var self = this;

    self.activeTab = ko.observable('upload-image');

    self.giftCardImageData = ko.observableArray([]);
    self.giftCardValueData = ko.observableArray([]);
    self.editGiftCardImageData = ko.observableArray([]);
    self.customDiscountData = ko.observableArray([]);

    self.jsonGiftCardImageData = ko.observable('');
    self.jsonSortingGiftCardData = ko.observable('');

    self.discountValueName = ko.observable('Custom');
    self.giftCerValueId = ko.observable(null);
    self.active = ko.observable(true);
    self.giftCerValueName = ko.observable('');
    self.getAmount = ko.observable(0.00).extend({ numeric: 2 });
    self.blurGetAmount = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 10000) {
            value = 10000;
        }
        self.getAmount(value);
        self.payAmount(value);

        changePayAmount();
    };

    self.payAmount = ko.observable(0.00).extend({ numeric: 2 });
    self.isDiscountAmount = ko.observable(true);
    self.isDiscountPercent = ko.observable(false);
    self.discountAmount = ko.observable(0.00).extend({ numeric: 2 });
    self.blurDiscountAmount = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 10000) {
            value = 10000;
        }

        self.discountAmount(value);

        if (value > self.getAmount()) {
            self.discountAmount(self.getAmount())
        }
        changePayAmount();
    };

    self.discountPercent = ko.observable(0.00).extend({ numeric: 2 });
    self.blurDiscountPercent = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 0;
        }
        self.discountPercent(value);
        changePayAmount();
    };

    self.getAsPay = ko.observable(false);
    self.activateOnly = ko.observable(true);
    self.lastGetAmount = ko.observable(0.00).extend({ numeric: 2 });

    self.refGiftCardValueId = ko.observable('');
    self.active = ko.observable(true);
    self.giftCerCustomDiscountId = ko.observable(null);
    self.discountName = ko.observable('');
    self.discountDesc = ko.observable('');
    self.min = ko.observable(0.00).extend({ numeric: 2 });
    self.blurMin = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 10000) {
            value = 10000;
        }
        self.min(value);
        checkRangCustomDiscount();
    };

    self.max = ko.observable(0.00).extend({ numeric: 2 });
    self.blurMax = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 10000) {
            value = 10000;
        }
        self.max(value);
        checkRangCustomDiscount();
    };

    self.isCustomDiscountAmount = ko.observable(true);
    self.isCustomDiscountPercent = ko.observable(false);
    self.amountOff = ko.observable(0.00).extend({ numeric: 2 });
    self.blurAmountOff = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 10000) {
            value = 10000;
        }

        self.amountOff(value);

        if (value > self.min()) {
            self.amountOff(0)
        }
    };

    self.percentOff = ko.observable(0.00).extend({ numeric: 2 });
    self.blurPercentOff = function (data, event) {
        var value = $(event.target).val();
        if (!$.isNumeric(value)) {
            value = 0;
        } else {
            value = rountTwo(value);
        }
        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 0;
        }
        self.percentOff(value);
    };

    self.allDate = ko.observable(true);
    self.startDate = ko.observable(moment(new Date()).format('L'));
    self.endDate = ko.observable(moment(new Date()).format('L'));
    self.allTime = ko.observable(true);
    self.startTime = ko.observable(moment(time_start_24h, moment_time_format_hhmmss));
    self.endTime = ko.observable(moment(time_end_24h, moment_time_format_hhmmss));
    self.startTimeString = ko.observable(moment(time_start_24h).format(moment_time_format_HHmmss));
    self.endTimeString = ko.observable(moment(time_end_24h).format(moment_time_format_HHmmss));
    //self.currentDate = ko.observable(parent.currentDate);

    self.haveDiscountData = ko.observable(false);
    self.editGiftCardImageId = ko.observable('');
    self.editGiftCardImageName = ko.observable('');
    self.editGiftCardImageSrc = ko.observable('');
    self.editGiftCardImageOrder = ko.observable(0);
    self.deleteGiftCardImageId = ko.observable('');
    self.lockEdit = ko.observable(false);
    self.chkGiftCardValueSearch = ko.observable(false);
    self.chkCustomDiscountSearch = ko.observable(false);
    self.enableSubmitGiftCardValue = ko.observable(true);
    self.enableSubmitCustomDiscount = ko.observable(true);

    self.showGiftCardValueDetail = ko.observable(false);
    self.showCustomDiscountDetail = ko.observable(false);
    self.enableEditCustomDiscountDetail = ko.observable(false);
    self.showDiscount = ko.observable(0.00);
    self.slickMove = ko.observable(false);

    self.showAddorEdit = function (itemId) {
        return (itemId == null || itemId == '') ? 'Add' : 'Edit';
    };

    self.calShowDiscount = function () {
        if (self.isDiscountAmount())
            self.showDiscount('$' + self.discountAmount());
        else if (self.isDiscountPercent())
            self.showDiscount(self.discountPercent() + '%');
        else
            self.showDiscount('0.00');
    };

    self.btnActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.active,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    self.clickNextAddGiftCardImage = function () {

        switch (self.activeTab()) {
            case 'upload-image':
                self.giftCardImageData([]);

                if ($('.imageuploadify-container').length > 0) {
                    for (i = 0; i < $('.imageuploadify-container').length; i++) {
                        var obj = $('.imageuploadify-container').eq(i);
                        var imgSrc = obj.find('img').attr('src');

                        var giftCardImageViewModel = new DataGiftCardImageViewModel({
                            giftCerImagesId: 'giftcardimage' + i,
                            active: true,
                            isDefault: false,
                            giftCerImagesName: imgSrc,
                            sorting: i
                        });

                        self.giftCardImageData.push(giftCardImageViewModel);
                    }
                    //Added by SMILEDINING-SA21-0077
                    self.activeTab('image-descripttion');
                    $(cfrmTabNewGiftCardImage).removeClass('active');
                    $(cfrmTabNewImageDescription).addClass('active');
                    $(cfrmStep1GiftCardImage).removeClass('active');
                    $(cfrmStep2GiftCardImage).addClass('active');
                    //End Added by SMILEDINING-SA21-0077
                }
                //Added by SMILEDINING-SA21-0077
                else {
                    swal(cSwal_Alert_Error, cError_GiftCerImage_Empty, cSwal_Icon_Error);
                }
                //End Added by SMILEDINING-SA21-0077
                //Modified by SMILEDINING-SA21-0077
                //self.activeTab('image-descripttion');
                //$(cfrmTabNewGiftCardImage).removeClass('active');
                //$(cfrmTabNewImageDescription).addClass('active');
                //$(cfrmStep1GiftCardImage).removeClass('active');
                //$(cfrmStep2GiftCardImage).addClass('active');
                //End Modified by SMILEDINING-SA21-0077
                break;

            case 'image-descripttion':
                var orderImage = [];
                for (i = 0; i < $(cfrmTabNewImageDescription + ' .card-giftcard').length; i++) {
                    var imgObj = $(cfrmTabNewImageDescription + ' .card-giftcard');
                    var id = imgObj.eq(i).find('img').attr('id');
                    var index = _.findIndex(self.giftCardImageData(), function (o) {
                        return o.giftCerImagesId() == id;
                    });

                    self.giftCardImageData()[index].sorting(i);
                    orderImage[i] = self.giftCardImageData()[index];
                }

                self.giftCardImageData(orderImage);

                self.activeTab('complete-step');
                $(cfrmTabNewImageDescription).removeClass('active');
                $(cfrmTabCompleteNewGiftCard).addClass('active');
                $(cfrmStep2GiftCardImage).removeClass('active');
                $(cfrmStep3GiftCardImage).addClass('active');
                break;

            default:
                break;
        }
    };

    self.clickBackAddGiftCardImage = function () {
        switch (self.activeTab()) {
            case 'complete-step':
                self.activeTab('image-descripttion');
                $(cfrmTabCompleteNewGiftCard).removeClass('active');
                $(cfrmTabNewImageDescription).addClass('active');
                $(cfrmStep3GiftCardImage).removeClass('active');
                $(cfrmStep2GiftCardImage).addClass('active');
                break;
            case 'image-descripttion':
                self.activeTab('upload-image');
                $(cfrmTabNewImageDescription).removeClass('active');
                $(cfrmTabNewGiftCardImage).addClass('active');
                $(cfrmStep2GiftCardImage).removeClass('active');
                $(cfrmStep1GiftCardImage).addClass('active');
                break;

            case 'upload-image':
                break;

            default:
                break;
        }
    };

    self.clickImageActive = function (data, event) {
        self.lockEdit(true);
        if (data.active() && !data.isDefault())
            data.active(false);
        else
            data.active(true);
    };

    self.clickImageDefault = function (data, event) {

        if (data.active()) {
            self.lockEdit(true);

            if (data.isDefault())
                data.isDefault(false);
            else {
                var index = _.findIndex(parent.giftCardImageStorage(), function (o) {
                    return o.isDefault() == true;
                });

                if (index >= 0)
                    parent.giftCardImageStorage()[index].isDefault(false);

                data.isDefault(true);
            }
        }
    };

    self.clickSubmitGiftCardImage = function () {
        var jsImageData = ko.toJS(self.giftCardImageData());
        var jsonImageData = ko.toJSON(jsImageData);
        self.jsonGiftCardImageData(jsonImageData);
        swalConfirmSubmitGifCard(cfrmNewGiftCardImage, cMessage_SubmitGiftCardImage);
    };

    self.isEmptyImageData = function () {
        return self.giftCardImageData().length > 0 ? false : true;
    };

    self.computePayAmount = function () {
        changePayAmount();
        return true;
    };

    function changePayAmount() {
        if (self.getAmount() > 0) {
            self.enableSubmitGiftCardValue(true);
            if (self.isDiscountAmount()) {
                if (self.discountAmount() < 0) self.discountAmount(0);
                var payAmount = self.getAmount() - self.discountAmount();
                if (payAmount < 0) {
                    self.payAmount(0);
                } else {
                    self.payAmount(payAmount);
                }
            }
            else {
                if (self.discountPercent() < 0) self.discountPercent(0);
                var discount = (self.getAmount() * self.discountPercent()) / 100;
                var payAmount = self.getAmount() - discount;
                if (payAmount < 0) {
                    self.payAmount(0);
                } else {
                    self.payAmount(payAmount);
                }
            }
        }
    };

    self.clickDiscountAmount = function () {
        self.isDiscountAmount(true);
        self.isDiscountPercent(false);
        self.discountPercent(0);
        removeClassValidationError(cfrmTxtDiscountAmount);
        removeClassValidationError(cfrmTxtDiscountPercent);
        return self.computePayAmount();
    };

    self.clickDiscountPercent = function () {
        self.isDiscountPercent(true);
        self.isDiscountAmount(false);
        self.discountAmount(0.00);
        removeClassValidationError(cfrmTxtDiscountAmount);
        removeClassValidationError(cfrmTxtDiscountPercent);
        return self.computePayAmount();
    };

    self.btnCustomDiscountActive = ko.observable({
        offText: 'NO',
        onText: 'YES',
        value: self.active,
        width: switchActiveWidth55px,
        onValueChanged: function (item) {
            if (item.value == true) {
                self.active(true);
            } else {
                self.active(false);
            }
        }
    });

    self.clickCustomDiscountAmount = function () {
        self.isCustomDiscountAmount(true);
        self.isCustomDiscountPercent(false);
        self.percentOff(0);
        removeClassValidationError(cfrmTxtCustomDiscountAmount);
        removeClassValidationError(cfrmTxtCustomDiscountPercent);
        return true;
    };

    self.clickCustomDiscountPercent = function () {
        self.isCustomDiscountPercent(true);
        self.isCustomDiscountAmount(false);
        self.amountOff(0.00);
        removeClassValidationError(cfrmTxtCustomDiscountAmount);
        removeClassValidationError(cfrmTxtCustomDiscountPercent);
        return true;
    };

    self.computeMinEndDate = ko.pureComputed(function () {
        if (self.startDate() == null || isEmpty(self.startDate())) {
            return parent.giftCardShopDate();
        }
        else if (moment(self.startDate()).isAfter(parent.giftCardShopDate())) {
            return self.startDate();
        }
        else {
            return parent.giftCardShopDate();
        }
    });

    self.dxCustomDiscountStartDate = ko.observable({
        acceptCustomValue: false,
        width: 'auto',
        pickerType: 'calendar',
        type: 'date',
        //min: self.currentDate,
        min: parent.giftCardShopDate,
        value: self.startDate,
        disabled: self.allDate,
        onValueChanged: function (v) {
            if (v.value === '' || v.value === null || v.value === undefined) {
                v.component.option('isValid', false);
            }
            self.startDate(moment(new Date(v.value)).format('MM/DD/YYYY'));
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dxCustomDiscountEndDate = ko.observable({
        acceptCustomValue: false,
        width: 'auto',
        //min: self.startDate,
        min: self.computeMinEndDate,
        pickerType: 'calendar',
        type: 'date',
        value: self.endDate,
        disabled: self.allDate,
        onValueChanged: function (v) {
            if (v.value === '' || v.value === null || v.value === undefined) {
                v.component.option('isValid', false);
            }
            self.endDate(moment(new Date(v.value)).format('MM/DD/YYYY'));
        },
        onKeyDown: function (e) {
            e.jQueryEvent.stopPropagation();
            e.jQueryEvent.preventDefault();
        },
        onContentReady: function (e) {
            setTimeout(function () {
                e.component.field().on('click', function () {
                    if (!e.component.option('opened'))
                        e.component.open();
                });
            });
        }
    });

    self.dxCustomDiscountStartTime = ko.observable({
        max: self.endTime,
        pickerType: 'list',
        type: 'time',
        value: self.startTime,
        disabled: self.allTime,
        onValueChanged: function (v) {
            if (v.value === '' || v.value === null || v.value === undefined) {
                v.component.option('isValid', false);
                self.startTimeString('');
            }
            else {
                self.startTime(moment(v.value, moment_time_format_hhmmss));
                self.startTimeString(moment(v.value).format(moment_time_format_HHmmss));
            }

        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {

            } else {

            }
        }
    });

    self.dxCustomDiscountEndTime = ko.observable({
        min: self.startTime,
        pickerType: 'list',
        type: 'time',
        value: self.endTime,
        disabled: self.allTime,
        onValueChanged: function (v) {
            if (v.value === '' || v.value === null || v.value === undefined) {
                v.component.option('isValid', false);
                self.endTimeString('');
            }
            else {
                self.endTime(moment(v.value, moment_time_format_hhmmss));
                self.endTimeString(moment(v.value).format(moment_time_format_HHmmss));
            }

        },
        onChange: function (v) {
            if (v.component._options.validationError != null) {

            } else {

            }
        }
    });

    self.clearGiftCardValue = function () {
        var self = this;

        self.giftCerValueId(null);
        self.active(true);
        self.giftCerValueName('');
        self.getAmount(0.00);
        self.payAmount(0.00);
        self.isDiscountAmount(true);
        self.isDiscountPercent(false);
        self.discountAmount(0.00);
        self.discountPercent(0.00);
        self.getAsPay(false);
        self.activateOnly(true);

        self.lastGetAmount(0.00);
        self.enableSubmitGiftCardValue(true);
    };

    self.clearCustomDiscount = function () {
        var self = this;
        self.active(true);
        self.giftCerCustomDiscountId(null);
        self.discountName('');
        self.discountDesc('');
        self.min(0.00);
        self.max(0.00);
        self.isCustomDiscountAmount(true);
        self.isCustomDiscountPercent(false);
        self.amountOff(0.00);
        self.percentOff(0.00);
        self.allDate(true);
        self.startDate(moment(new Date()).format('L'));
        self.endDate(moment(new Date()).format('L'));
        self.allTime(true);
        self.startTime(moment(time_start_24h, moment_time_format_hhmmss));
        self.endTime(moment(time_end_24h, moment_time_format_hhmmss));
        self.startTimeString(moment(self.startTime()).format(moment_time_format_HHmmss));
        self.endTimeString(moment(self.endTime()).format(moment_time_format_HHmmss));

        self.enableSubmitCustomDiscount(true);
    };

    self.setupCustomDiscount = new SetupCustomDiscountValue();

    self.clickSubmitAllGiftCardImage = function () {
        var jsImageData = ko.toJS(parent.giftCardImageStorage());

        var active = false;
        _.forEach(jsImageData, function (value) {
            if (value.active == true) {
                active = true;
            }
        });

        if (!active) {
            swal('Oops...', cError_GiftCerImage_IsActive, cSwal_Icon_Error);
        } else {
            var jsonImageData = ko.toJSON(jsImageData);
            self.jsonGiftCardImageData(jsonImageData);
            var frm = '#' + cfrmEditAllGiftCardImage;

            $(frm).submit();
        }


    };

    self.clickSubmitEditSortingGiftCardValue = function () {
        self.slickMove(false);
        var jsSortingData = ko.toJS(parent.giftCardValueSorting());
        var jsonSortingData = ko.toJSON(jsSortingData);
        self.jsonSortingGiftCardData(jsonSortingData);

        var frm = '#' + cfrmEditSortingGiftCardValue;
        $(frm).submit();
    };

    self.clickAddGiftCardValue = function () {

        $(cfrmGiftCardSlick).find('div .card-selected').removeClass('card-selected');
        self.showGiftCardValueDetail(false);
        self.showCustomDiscountDetail(false);

        self.clearGiftCardValue();

        $(cModalShowAddNewGiftCardValue).modal({
            keyboard: false,
            backdrop: 'static',
            show: true
        });
    };

    self.clickEditGiftCardValue = function () {
        $(cModalShowAddNewGiftCardValue).modal({
            keyboard: false,
            backdrop: 'static',
            show: true
        });
    };

    self.selectCustomDiscount = function (data, event) {

        $(cfrmRowDetailCustomDiscount).find('.panel-selected').removeClass('panel-selected');
        $(event.currentTarget).addClass('panel-selected');
        self.enableEditCustomDiscountDetail(true);

        var unmap = ko.mapping.toJSON(data);
        ko.mapping.fromJSON(unmap, {}, self.setupCustomDiscount);

        var initStartTime = moment(time_start_24h, moment_time_format_hhmmss);
        var initEndTime = moment(time_end_24h, moment_time_format_hhmmss);

        var valStartTime = self.setupCustomDiscount.startTime();
        var valEndTime = self.setupCustomDiscount.endTime();

        if (!(valStartTime === '' || valStartTime === null || valStartTime === undefined))
            initStartTime = moment(valStartTime, moment_time_format_hhmmss);


        if (!(valEndTime === '' || valEndTime === null || valEndTime === undefined))
            initEndTime = moment(valEndTime, moment_time_format_hhmmss);

        //var startDate = moment(self.setupCustomDiscount.startDate()).format('MM/DD/YYYY');
        //if (moment(parent.currentDate()).isAfter(startDate)) {
        //    self.currentDate(startDate);
        //}
        //else {
        //    self.currentDate(parent.currentDate());
        //}

        self.active(self.setupCustomDiscount.active());
        self.giftCerCustomDiscountId(self.setupCustomDiscount.giftCerCustomDiscountId());
        self.discountName(self.setupCustomDiscount.discountName());
        self.discountDesc(self.setupCustomDiscount.discountDesc());
        self.min(self.setupCustomDiscount.min());
        self.max(self.setupCustomDiscount.max());
        self.isCustomDiscountAmount(self.setupCustomDiscount.isCustomDiscountAmount());
        self.isCustomDiscountPercent(self.setupCustomDiscount.isCustomDiscountPercent());
        self.amountOff(self.setupCustomDiscount.amountOff());
        self.percentOff(self.setupCustomDiscount.percentOff());
        self.allDate(self.setupCustomDiscount.allDate());
        self.startDate(self.setupCustomDiscount.startDate());
        self.endDate(self.setupCustomDiscount.endDate());
        self.allTime(self.setupCustomDiscount.allTime());
        self.startTime(initStartTime);
        self.endTime(initEndTime);

    };

    self.clickAddCustomDiscount = function () {

        $(cfrmGiftCardSlick).find('div .card-selected').removeClass('card-selected');
        self.showGiftCardValueDetail(false);
        self.showCustomDiscountDetail(false);

        $(cfrmRowDetailCustomDiscount).find('.panel-selected').removeClass('panel-selected');
        self.clearCustomDiscount();
        self.enableEditCustomDiscountDetail(false);

        $(cModalShowAddNewCustomDiscount).modal({
            keyboard: false,
            backdrop: 'static',
            show: true
        });
    };

    self.clickEditCustomDiscount = function () {
        $(cModalShowAddNewCustomDiscount).modal({
            keyboard: false,
            backdrop: 'static',
            show: true
        });
    };

    self.clickDeleteGiftCardImage = function (data, event) {
        self.deleteGiftCardImageId(data.giftCerImagesId());
        swalConfirmSubmitGifCard(cfrmDeleteGiftCardImage, cMessage_DeleteImage);
    };

    self.checkRangCustomDiscount = function () {
        checkRangCustomDiscount()
    };

    function checkRangCustomDiscount() {

        self.enableSubmitCustomDiscount(true);

        var customDiscountData = _.orderBy(parent.customDiscountStorage(), function (v) {
            return v.min();
        });

        var minInRange = _.filter(customDiscountData, function (v) {
            return _.inRange(parseFloat(self.min()), parseFloat(v.min()), parseFloat(v.max()) + 0.01);
        });

        var maxInRange = _.filter(customDiscountData, function (v) {
            return _.inRange(parseFloat(self.max()), parseFloat(v.min()), parseFloat(v.max()) + 0.01);
        });

        var indexMin = _.findIndex(minInRange, function (v) {
            return v.giftCerCustomDiscountId() != self.giftCerCustomDiscountId();
        });

        var indexMax = _.findIndex(maxInRange, function (v) {
            return v.giftCerCustomDiscountId() != self.giftCerCustomDiscountId();
        });

        if (minInRange.length > 0 && indexMin >= 0) {
            self.enableSubmitCustomDiscount(false);
            alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + minInRange[indexMin].discountName() + '" ', false);
        } else if (maxInRange.length > 0 && indexMax >= 0) {
            self.enableSubmitCustomDiscount(false);
            alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + maxInRange[indexMax].discountName() + '" ', false);
        } else if (Number(self.min()) < Number(self.max())) {
            var minInRangeRev = _.filter(customDiscountData, function (v) {
                return _.inRange(v.min(), self.min(), self.max() + 1);
            });

            var maxInRangeRev = _.filter(customDiscountData, function (v) {
                return _.inRange(v.max(), self.min(), self.max() + 1);
            });

            var indexMinRev = _.findIndex(minInRangeRev, function (v) {
                return v.giftCerCustomDiscountId() != self.giftCerCustomDiscountId();
            });

            var indexMaxRev = _.findIndex(maxInRangeRev, function (v) {
                return v.giftCerCustomDiscountId() != self.giftCerCustomDiscountId();
            });

            if (minInRangeRev.length > 0 && indexMinRev >= 0) {
                self.enableSubmitCustomDiscount(false);
                alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + minInRangeRev[indexMinRev].discountName() + '" ', false);
            } else if (maxInRangeRev.length > 0 && indexMaxRev >= 0) {
                self.enableSubmitCustomDiscount(false);
                alerMessage(cError_GiftCerCustomDiscount_InRange + ' "' + maxInRangeRev[indexMaxRev].discountName() + '" ', false);
            }
        }
    };

    //self.setCustomDiscountToGiftCardValue = function (data) {
    //    if (self.refGiftCardValueId().length <= 0) {
    //        var giftCardValueViewModel = new DataGiftCardValueViewModel({
    //            giftCerValueId: data.giftCerCustomDiscountId,
    //            giftCerValueName: data.discountValueName,
    //            getAmount: 0,
    //            payAmount: 0,
    //            isDiscountAmount: false,
    //            isDiscountPercent: false,
    //            discountAmount: 0,
    //            discountPercent: 0,
    //            getAsPay: true,
    //            activateOnly: true,
    //            active: data.active
    //        });

    //        self.giftCardValueData.push(giftCardValueViewModel);
    //        parent.giftCardValueStorage.push(giftCardValueViewModel);

    //        self.haveDiscountData(true)
    //        self.refGiftCardValueId(data.refGiftCerValueId);
    //        self.discountValueName(data.discountValueName);
    //    }
    //};

};

function SetupGiftCardValue() {
    self.giftCerValueId = ko.observable('');
    self.active = ko.observable(true);
    self.giftCerValueName = ko.observable('');
    self.getAmount = ko.observable(0.00).extend({ numeric: 2 });
    self.payAmount = ko.observable(0.00).extend({ numeric: 2 });
    self.discountAmount = ko.observable(0.00).extend({ numeric: 2 });
    self.discountPercent = ko.observable(0.00).extend({ numeric: 0 });
    self.isDiscountAmount = ko.observable(true);
    self.isDiscountPercent = ko.observable(false);
    self.getAsPay = ko.observable(false);
    self.sorting = ko.observable(0);
    self.activateOnly = ko.observable(true);
};

function SetupCustomDiscountValue() {
    self.active = ko.observable(true);
    self.giftCerCustomDiscountId = ko.observable(null);
    self.discountName = ko.observable('');
    self.discountDesc = ko.observable('');
    self.min = ko.observable(0.00).extend({ numeric: 2 });
    self.max = ko.observable(1.00).extend({ numeric: 2 });
    self.isCustomDiscountAmount = ko.observable(true);
    self.isCustomDiscountPercent = ko.observable(false);
    self.amountOff = ko.observable(0.00).extend({ numeric: 2 });
    self.percentOff = ko.observable(0.00).extend({ numeric: 2 });
    self.allDate = ko.observable(true);
    self.startDate = ko.observable(moment(new Date()).format('L'));
    self.endDate = ko.observable(moment(new Date()).format('L'));
    self.allTime = ko.observable(true);
    self.startTime = ko.observable(moment(time_start_24h, moment_time_format_hhmmss));
    self.endTime = ko.observable(moment(time_end_24h, moment_time_format_hhmmss));
};

//End Added by SMILEDINING-SA19-0011


//Added by SMILEDINING-SA20-0006

function checkShopUpdate(globalConfig, newdata, isSmileDining) {
    var shopStartDate = moment(filterGlobalConfig(globalConfig, gcShopCloseStartDate)).format(moment_date_format_mmddyyyy);
    var shopEndDate = moment(filterGlobalConfig(globalConfig, gcShopCloseEndDate)).format(moment_date_format_mmddyyyy);
    var arrDataShop = ko.observableArray([
    { currentdata: filterGlobalConfig(globalConfig, gcShopName), newdata: newdata.shopName() == null ? "" : newdata.shopName().trim() },
    { currentdata: filterGlobalConfig(globalConfig, gcShopCode), newdata: newdata.shopCode() == null ? "" : newdata.shopCode().trim() },
    { currentdata: filterGlobalConfig(globalConfig, gcShopStreet), newdata: newdata.shopStreet() == null ? "" : newdata.shopStreet().trim() },
    { currentdata: filterGlobalConfig(globalConfig, gcShopPostal), newdata: newdata.shopZipCode() == null ? "" : newdata.shopZipCode().trim() },
    { currentdata: filterGlobalConfig(globalConfig, gcAnnounceHeader), newdata: newdata.shopHeader() == null ? "" : newdata.shopHeader().trim() },
    { currentdata: filterGlobalConfig(globalConfig, gcAnnounceBadge), newdata: newdata.shopBadge() },
    { currentdata: filterGlobalConfig(globalConfig, gcAnnounceActive), newdata: newdata.shopActive() },
    { currentdata: filterGlobalConfig(globalConfig, gcAnnounceImage), newdata: newdata.shopAnnounceImage() },
    //Added by SMILEDINING-SA20-0028
    { currentdata: filterGlobalConfig(globalConfig, 'broad-custom-image'), newdata: newdata.shopAnnounceCustomImage() },
    { currentdata: filterGlobalConfig(globalConfig, 'broad-custom-active'), newdata: newdata.shopAnnounceCustomActive() },
    //End Added by SMILEDINING-SA20-0028
    { currentdata: filterGlobalConfig(globalConfig, gcOrderLimit), newdata: newdata.orderLimit() == null ? "" : newdata.orderLimit().trim() },
    { currentdata: filterGlobalConfig(globalConfig, gcTimePickupStart), newdata: newdata.timeStartPickup() },
    { currentdata: filterGlobalConfig(globalConfig, gcTimePickupEnd), newdata: newdata.timeEndPickup() },
    { currentdata: filterGlobalConfig(globalConfig, gcTimeDeliveryStart), newdata: newdata.timeStartDelivery() },
    { currentdata: filterGlobalConfig(globalConfig, gcTimeDeliveryEnd), newdata: newdata.timeEndDelivery() },
    { currentdata: filterGlobalConfig(globalConfig, gcShopMapLat), newdata: newdata.shopLatitude() },
    { currentdata: filterGlobalConfig(globalConfig, gcShopMapLng), newdata: newdata.shopLongitude() },
    { currentdata: filterGlobalConfig(globalConfig, gcShopMapCode), newdata: newdata.shopMapCode() },
    { currentdata: filterGlobalConfig(globalConfig, gcShopDeliveryTax), newdata: newdata.shopDeliveryTax() },
    { currentdata: filterGlobalConfig(globalConfig, gcPayByCash), newdata: newdata.payByCash() },
    { currentdata: filterGlobalConfig(globalConfig, gcPayByCredit), newdata: newdata.payByCredit() },
    //{ currentdata: filterGlobalConfig(globalConfig, gcShopCloseReason), newdata: newdata.shopCloseReason() },     //Modified and End by SMILEDINING-SA20-0031
    { currentdata: filterGlobalConfig(globalConfig, gcShopPeriodTime), newdata: newdata.shopPeriodTime() },
    { currentdata: filterGlobalConfig(globalConfig, gcShopLogo), newdata: newdata.shopLogo() },
    { currentdata: filterGlobalConfig(globalConfig, 'shop-background'), newdata: newdata.shopBackground() }, //Added and End by SMILEDINING-SA21-0035
    { currentdata: filterGlobalConfig(globalConfig, gcCalTax), newdata: newdata.calTax() },
    { currentdata: filterGlobalConfig(globalConfig, gcShippingType), newdata: newdata.shippingType() },
    { currentdata: filterGlobalConfig(globalConfig, gcTipsDesc), newdata: newdata.tipsDesc() == null ? "" : newdata.tipsDesc().trim() },
    //{ currentdata: filterGlobalConfig(globalConfig, 'tip-auto'), newdata: newdata.tipsAuto() == null ? "" : newdata.tipsAuto().trim() }, //Added and End by SMILEDINING-SA20-0032 //Modified and End by WEB-SA24-0030#2
    { currentdata: filterGlobalConfig(globalConfig, 'tip-auto'), newdata: (newdata.tipsAuto() == null || newdata.tipsAuto() == "Off") ? "" : newdata.tipsAuto().trim() }, //Added and End by WEB-SA24-0030#2
    { currentdata: filterGlobalConfig(globalConfig, gcThemeColor), newdata: newdata.themeColor() },
    { currentdata: filterGlobalConfig(globalConfig, gcTipsDescForStore), newdata: newdata.tipsDescForStore() == null ? "" : newdata.tipsDescForStore().trim() },
    { currentdata: filterGlobalConfig(globalConfig, gcTipsDescForCredit), newdata: newdata.tipsDescForCredit() == null ? "" : newdata.tipsDescForCredit().trim() },
    { currentdata: filterGlobalConfig(globalConfig, gcCustomButtonPayAtStore), newdata: newdata.customButtonPayAtStore() == null ? "" : newdata.customButtonPayAtStore().trim() },
    { currentdata: filterGlobalConfig(globalConfig, gcCustomButtonCredit), newdata: newdata.customButtonCredit() == null ? "" : newdata.customButtonCredit().trim() },
    { currentdata: filterGlobalConfig(globalConfig, gcCustomSpecialInstructions), newdata: newdata.customSpecialInstructions() == null ? "" : newdata.customSpecialInstructions().trim() },
    { currentdata: filterGlobalConfig(globalConfig, gcOrderLimit), newdata: newdata.orderLimit() == null ? "" : newdata.orderLimit().trim() },
    //Modified by SMILEDINING-SA20-0031
    //{ currentdata: shopStartDate == 'Invalid date' ? '' : shopStartDate, newdata: newdata.startDate() },
    //{ currentdata: shopEndDate == 'Invalid date' ? '' : shopEndDate, newdata: newdata.endDate() },
    //End Modified by SMILEDINING-SA20-0031
    { currentdata: parseFloat(filterGlobalConfig(globalConfig, gcCalminumumOrder)), newdata: newdata.minimumOrder() },
    { currentdata: getPhoneFormatUs(filterGlobalConfig(globalConfig, gcShopPhone)), newdata: newdata.shopPhone() },
    { currentdata: filterGlobalConfig(globalConfig, gcSpecialInstructions), newdata: newdata.specialInstructions() },
    //{ currentdata: filterGlobalConfig(globalConfig, gcSpecialInstructionsForTicket), newdata: newdata.specialInstructionsForTicket() } //Added and End by WEB-SA23-0037 //Modified and End by WEB-SA24-0030
    ]);
    //Added by WEB-SA24-0030
    if (!isSmileDining) {
        arrDataShop.push({ currentdata: filterGlobalConfig(globalConfig, gcSpecialInstructionsForTicket), newdata: newdata.specialInstructionsForTicket() });
    }
    //End Added by WEB-SA24-0030
    return checkDataUpdate(arrDataShop);
};

function checkDataUpdate(arrDataShop) {
    var update = false;
    ko.utils.arrayForEach(arrDataShop(), function (data) {
        //Added by WEB-SA24-0030#1
        var currentdata = data.currentdata == null ? '' : data.currentdata;
        var newdata = data.newdata == null ? '' : data.newdata;
        //Added End by WEB-SA24-0030#1
        //if (data.currentdata != data.newdata) { //Modified and End by WEB-SA24-0030#1
        if (currentdata != newdata) { //Added and End by WEB-SA24-0030#1
            update = true;
            return update;
        }
    });
    return update;
};
//End Added by SMILEDINING-SA20-0006
