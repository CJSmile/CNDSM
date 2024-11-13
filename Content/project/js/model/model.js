/*
    SMILEDINING-SA18-0003      01/12/2018      Customize              1. Holiday, AutoCharge, Special instructions.
    SMILEDINING-SA18-0006      01/19/2018      Customize              1. Check discount code expired , Show foodset menu hours , Add discount type
    SMILEDINING-SA18-0020      08/08/2018      Customize              1. Add Tips Description in Setting
                                                                      2. Add Label Tips Description in checkout with credit card
                                                                      3. Fixbug Insert log Email   
                                                                      4. Fixbug Select Footset that Contains Food
                                                                      5. Change arrow color at tooltip Login and Register
                                                                      6. Change color number in cart to color white
    SMILEDINING-SA18-0021      08/20/2018      Customize              1. Fixbug tbmapzonemile data Uncorrect
    SMILEDINING-SA18-0026      09/12/2018      Customize              1. Create function LinkToFood
    SMILEDINING-SA18-0029      09/18/2018      Customize              1. Add theme colour blue and green
                                                                      2. Add combobox choose theme
    SMILEDINING-SA18-0035      11/08/2018      Fixbug                 1. Fixbug PercentCharge in Autocharge can't use decimal
                                                                      2. Fixbug can save empty customerPhone in customerAddress
    SMILEDINING-SA18-0031      09/27/2018      Customize              1. Create function CopyChoice
    SMILEDINING-SA18-0038      11/20/2018      Customize              1. Edit get data timeZone (Add one timezone Mountain Time)
                                                                      2. Fixbug Uploadimage don't choose path return error
                                                                      3. Fixbug Timezone don't choose return error
    SMILEDINING-SA18-0040      11/22/2018      Customize              1. Edit setTimeMenu use in google chorme Validate not working

    SMILEDINING-SA19-0002      02/11/2019      Customize              1. Add field to custom text button pay at store and pay credit
                                                                      2. Edit button pay at store and pay credit get text data from database
                                                                      3. Add field to custom text placeholder special instruction
                                                                      4. Edit textarea special instruction get data placeholder from database
                                                                      5. Add field to set show/hide tips description (from pay at store and pay credit page)
                                                                      6. Edit and Add show/hide tips description (from pay at store and pay credit page)
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
    SMILEDINING-SA19-0017      08/15/2019      Customize              1. Create Shop Status
                                                                      2. Create Shop Close StartDate and Shop Close EndDate
                                                                      3. Create Shop Close Reason
                                                                      4. Create Shipping Type
                                                                      5. Fix 'Active button' of Announcement Tab in IE
    SMILEDINING-SA19-0011      09/03/2019      Customize              1. E-Gift Card.
    SMILEDINING-SA20-0003      24/02/2020      Customize              1. New feature Limit Order and fix Bug food set time.
    SMILEDINING-SA20-0007      07/07/2020      Customize              1. New feature Gift Card.
    SMILEDINING-SA20-0006      06/23/2020      Customize              1. Add checkbox Smile Contactless Dining on Menu Setup and update ProductID in database when update,add,copy food 
                                                                      2. Add filter Product on Menu Setup
                                                                      3. Add filter Product on Mysetting
                                                                      4. Added button for switch shop status more one products
                                                                      5. Change Tip Guide in Smile Dining From Web Owner
    SMILEDINING-SA20-0010      16/07/2020      Customize              1. New feature set Out of Stock.
    SMILEDINING-SA20-0015      03/08/2020      Customize              1. New feature Curbside Pick up Option for Smile dining.
                                                                      2. Setting Open/Close for Curbside Pick up and setting instruction.
    SMILEDINING-SA20-0018      01/09/2020      Customize              1. Edit Config Setup for Choice Group,Choice Option,Choice Modify and Add Gratuity Charge.
                                                                      2. Add Setting Gratuity Charge to My Setting.
    SMILEDINING-SA20-0011      23/07/2020      Customize              1. New feature auto apply discount SmileDining.
    SMILEDINING-SA20-0016      21/10/2020      Customize              1. Promotion free food.
    SMILEDINING-SA20-0032      10/29/2020      Customize              1. Add Tip Auto setting in Web Owner /Add field tip-auto globalConfig. 
                                                                      2. Add radio button tip guide auto/Modal Custom Amount tip in Web Dining.
                                                                      3. Config setting Service to keep data tbglobalconfig , tbglobalconfig_contactless.
    SMILEDINING-SA20-0028      21/10/2020      Customize              1. Upload/show Image Announcement(Lightbox)
                                                                      2. Add GlobalConfig image-annonce/image-announce-size/image-announce-active
    SMILEDINING-SA20-0037      23/11/2020      Customize              1. Fix bug shopClose invalid format in Firefox.
    SMILEDINING-SA20-0043      15/12/2020      Customize              1. Custom map zone mile price.
    SMILEDINING-SA20-0031      02/12/2020      Customize              1. Adjust shop close period date and time.
    SMILEDINING-SA20-0031#3    04/01/2021      Customize              1. Modified shopclose model.
    SMILEDINING-SA21-0001      08/01/2021      Customize              1. Setting Choice New Line.
    SMILEDINING-SA21-0002      13/01/2021      Customize              1. Enable or Disable Guest checkout on SmileDining.
    SMILEDINING-SA21-0004      24/01/2021      Customize              1. Close special instruction some menu or some category. 
    SMILEDINING-SA21-0005      29/01/2021      Customize              1. Separate shop period time pickup and delivery.
    SMILEDINING-SA21-0014      08/03/2021      Customize              1. Add new product 'Smile Third Party Integrations' used Deliverect.
    SMILEDINING-SA20-0048      28/12/2020      Customize              1. Discount code one time use.
    SMILEDINING-SA20-0048#1    19/03/2021      Customize              1. Modified excel file DiscountOneTimeUse.
    SMILEDINING-SA21-0014#7    09/04/2021      Customize              1. Modified deliverect sync product and added new feature snooze product. 
    SMILEDINING-SA21-0018      21/05/2021      Customize              1. Setting food detail by third party to deliverect.
    SMILEDINING-SA21-0018#2    27/05/2021      Customize              1. Fixed bug setting Third Party Integrations.
    SMILEDINING-SA21-0017      20/04/2021      Customize              1. Discount coupon code can set minimum and maximim order and can set total of coupon used. 
    SMILEDINING-SA21-0014#9    14/06/2021      Customize              1. Fixed bug filter menu.
    SMILEDINING-SA21-0021      11/06/2021      Customize              1. Setting icon image for show in smileDining.
    SMILEDINING-SA21-0025      29/06/2021      Customize              1. New feature cutlery or utensil option.
    SMILEDINING-SA21-0018#8    08/07/2021      Customize              1. Fixed bug select foodset and update food sorting.
    SMILEDINING-SA21-0035      02/08/2021      Customize              1. Add upload background image in webOwner only Smile Contactless Dining. (Smile On Table P1)
                                                                      2. Create new Views following UI frame 1 and frame 2. (Smile On Table P1)
    SMILEDINING-SA21-0018#11   23/08/2021      Customize              1. Fixed bug show foodset thirdparty.
    SMILEDINING-SA21-0053      10/09/2021      Customize              1. Add setting custom button order type
    SMILEDINING-SA21-0058      21/09/2021      Customize              1. Fix webOwner performance is slow.
    SMILEDINING-SA21-0063      07/10/2021      Customize              1. Add menu Marketing on web owner and Add menu Log on web support.
    SMILEDINING-SA21-0063#4    26/10/2021      Customize              1. Add download export customer excel file and Remove library ExcelJs,FileSaver.
    SMILEDINING-SA21-0055#2    28/10/2021      Customize              1. Add setting allow join ticket in webOwner and fix bug after join ticket in webContactless.
    SMILEDINING-SA21-0063#5    01/11/2021      Customize              1. Fix marketing view menu on mobile and Fix download file.
    SMILEDINING-SA21-0066#6    17/11/2021      Customize              1. Fix bug WebOwner disable edit food and choice and choiceOption from deliverect, and edit path food image from deliverect.
                                                                      2. Fix bug WebDining edit path food image and plu from deliverect, and alert confirm payment when channel is busy mode.
    SMILEDINING-SA21-0035#8    19/11/2021      Customize              1. Add setting show party size in webOwner.
                                                                      2. Fix bug Expiration Date of Credit Card and alert message when Expiration Date is not valid in webContactless.
                                                                      3. Fix bug apple pay show loading for waiting apple pay button in webContactless.
                                                                      4. Fix bug alert message send email receipt in webContactless.
    SMILEDINING-SA21-0066#7    22/11/2021      Customize              1. Fix bug disable edit choice and choiceOption from deliverect and copy food in webOwner.                                                             
    SMILEDINING-SA21-0066#11   26/11/2021      Customize              1. Fix bug LinkToFood disable food from deliverect in webOwner.
    SMILEDINING-SA21-0080#1    03/11/2021      Customize              1. Add Marketing Service Fee & Credit Card Fee to LiveOrder, Balance, Statement.
    SMILEDINING-SA21-0083      17/12/2021      Customize              1. Add setting shop information.
    SMILEDINING-SA21-0083#1    22/12/2021      Customize              1. Hidden information setting when don't have script.
    SMILEDINING-SA22-0005#1    18/02/2022      Customize              1. Edit json send kafka to POS.
    SMILEDINING-SA21-0066#21   04/03/2022      Customize              1. Fix bug edit food for disable choice and choiceOption from Deliverect and copy food in webOwner.
    SMILEDINING-SA22-0012#1    12/05/2022      Customize              1. Edit Dispatch for DoorDash in webSupport and webOwner.
    SMILEDINING-SA22-0013      23/05/2022      Customize              1. Add menu Delivery Billing for show report in webowner.
    SMILEDINING-SA22-0013#4    26/05/2022      Customize              1. Edit all code controller and service and edit print report.
    SMILEDINING-SA22-0020      14/06/2022      Customize              1. Add new charge name 'Payment Fee' apply to order online.
    SMILEDINING-SA22-0033      25/08/2022      Customize              1. Add amount deposit and email customer for delivery billing in WebSupport and WebOwner.
    SMILEDINING-SA22-0034      06/09/2022      Customize              1. Edit Menu Hour can add more than two period in WebOwner.
    SMILEDINING-SA22-0037      14/09/2022      Customize              1. New feature setting delivery driver in WebOwner.
    WEB-SA22-0040              26/09/2022      Customize              1. New feature minimum order delivery charge.
    SMILEDINING-SA22-0034#2    03/10/2022      Customize              1. Fix bug Menu Hour check period time in range in WebOwner.
    SMILEDINING-SA22-0034#3    12/10/2022      Customize              1. Fix bug show times on Menu Setup in WebOwner.
    WEB-SA22-0062              29/11/2022      Customize              1. Add PromotionName, ShippingType, TotalUse in WebOwner
    WEB-SA22-0064#1            16/12/2022      Customize              1. Fix bug shop status in webOwner and fix bug food productId when setting product in webSupport.
    WEB-SA22-0068              18/12/2022      Customize              1. Add FoodSetAutoHide in WebOwner.
                                                                      2. Hide FoodSet out of time in WebDinning and WebOntable.
    WEB-SA22-0062#1            22/12/2022      Customize              1. Fix bug ShippingType, TotalUse, EndDate Promotion in WebOwner
    WEB-SA22-0062#2            28/12/2022      Customize              1. Fix bug Promotion setup condition in WebOwner.
    WEB-SA23-0001              09/01/2023      Customize              1. Use MQTT send data to kiosk  in webOwner.
    WEB-SA23-0010              02/02/2023      Customize              1. Fix bug text for Taxes & Fees when no tax.
    WEB-SA23-0016              28/02/2023      Customize              1. Add setting mapzone to minimum order delivery charge in webOwner and webDining.
    WEB-SA23-0026              29/03/2023      Customize              1. Fix bug auto sync product deliverect on webOwner.
    WEB-SA23-0031              02/05/2023      Customize              1. Fix bug invalid start date delivery discount on webOwner.
    WEB-SA23-0035              25/05/2023      Customize              1. Call Api on webOwner. (LiveOrderController)
    WEB-SA23-0035#1            30/05/2023      Customize              1. Move setting statement type from webSupport to webOwner.
    WEB-SA23-0037              12/06/2023      Customize              1. Separate settings ticket comments and special instructions on webDining, webOwner.
    WEB-SA23-0041              27/07/2023      Customize              1. New feature member discount on webDining, webOwner.
    WEB-SA23-0045              23/08/2023      Customize              1. Add setting discount time on webOwner, webDining, webOnTable.
    WEB-SA23-0048              11/09/2023      Customize              1. Add setting Otter on webOwner, webSupport.
    WEB-SA23-0057              22/12/2023      Customize              1. Fix bug promotion when deactive food category and update image menu only type jpg on webOwner.
    WEB-SA24-0012              22/04/2024      Customize              1. New requriement - Add setting promotion "Day Of Week" on webOwner, webDining, webOnTable.
                                                                      2. Fix bug promotion shippping type and maximum uses on webOwner, webDining, webOnTable.
                                                                      3. Fix bug clear discount code when don't use on webDining.
    WEB-SA24-0016              05/06/2024      Customize              1. New requirement - Add pay at store only and notification for Smile On Table on webOwner, webSupport, webOnTable.
*/
/*
 * model
 */

//function DataTimeViewModel(active24hour, activeFirstPeriod, activeSecondPeriod, day, firstStartTime, firstEndTime, secondStartTime, secondEndTime, showSecondTime) { //Modified and End by SMILEDINING-SA22-0034
function DataTimeViewModel(day, active24hour, activeFirstPeriod, firstStartTime, firstEndTime, dataMultiTime) { //Added and End by SMILEDINING-SA22-0034
    var self = this;
    self.active24Hour = ko.observable(active24hour);
    self.activeFirstPeriod = ko.observable(activeFirstPeriod);
    //self.activeSecondPeriod = ko.observable(activeSecondPeriod); //Modified and End by SMILEDINING-SA22-0034
    self.day = ko.observable(day);
    self.firstStartTime = ko.observable(moment(firstStartTime).format(moment_time_format_HHmmss));
    self.firstEndTime = ko.observable(moment(firstEndTime).format(moment_time_format_HHmmss));
    //Modified by SMILEDINING-SA22-0034
    //if (secondStartTime == null) {
    //    self.secondStartTime = ko.observable(null);
    //} else {
    //    self.secondStartTime = ko.observable(moment(secondStartTime).format(moment_time_format_HHmmss));
    //}

    //if (secondEndTime == null) {
    //    self.secondEndTime = ko.observable(null);
    //} else {
    //    self.secondEndTime = ko.observable(moment(secondEndTime).format(moment_time_format_HHmmss));
    //}

    //self.showSecondTime = ko.observable(showSecondTime);
    //End Modified by SMILEDINING-SA22-0034

    //Added by SMILEDINING-SA22-0034
    self.listMultiTime = ko.observableArray([]);
    if (!isEmpty(dataMultiTime)) {
        ko.utils.arrayForEach(dataMultiTime, function (item) {
            //if (item.isShow() && !isEmpty(item.startTimeValue()) && !isEmpty(item.endTimeValue())) { //Modified and End by SMILEDINING-SA22-0034#2
            if (item.isShow()) { //Added and End by SMILEDINING-SA22-0034#2
                self.listMultiTime.push(new DataMultiTimeViewModel(item));
            }
        });
    }
    //End Added by SMILEDINING-SA22-0034
};

//Added by SMILEDINING-SA22-0034
function DataMultiTimeViewModel(data) {
    var self = this;
    self.startTime = ko.observable(moment(data.startTimeValue()).format(moment_time_format_HHmmss));
    self.endTime = ko.observable(moment(data.endTimeValue()).format(moment_time_format_HHmmss));
    self.active = ko.observable(data.selectTimeMenuEdit());
    self.sorting = ko.observable(data.sorting());
    self.show = ko.observable(data.isShow());
}
//End Added by SMILEDINING-SA22-0034

function NewDataTimeMenu(data) {
    var self = this;

    //Added by SMILEDINING-SA22-0034
    self.hasShowMultiHourSunTimeMenuEdit = ko.observable(false);
    self.hasShowMultiHourMonTimeMenuEdit = ko.observable(false);
    self.hasShowMultiHourTueTimeMenuEdit = ko.observable(false);
    self.hasShowMultiHourWedTimeMenuEdit = ko.observable(false);
    self.hasShowMultiHourThuTimeMenuEdit = ko.observable(false);
    self.hasShowMultiHourFriTimeMenuEdit = ko.observable(false);
    self.hasShowMultiHourSatTimeMenuEdit = ko.observable(false);
    self.hasShowMultiHourAllDaysTimeMenuEdit = ko.observable(false);

    //Active 24 Hours
    self.valActive24HourSunTimeMenuEdit = ko.observable(false);
    self.valActive24HourMonTimeMenuEdit = ko.observable(false);
    self.valActive24HourTueTimeMenuEdit = ko.observable(false);
    self.valActive24HourWedTimeMenuEdit = ko.observable(false);
    self.valActive24HourThuTimeMenuEdit = ko.observable(false);
    self.valActive24HourFriTimeMenuEdit = ko.observable(false);
    self.valActive24HourSatTimeMenuEdit = ko.observable(false);
    self.valActive24HourAllDaysTimeMenuEdit = ko.observable(false);

    //Check Box Show
    self.valSelectFirstSunTimeMenuEdit = ko.observable(true);
    self.valSelectFirstMonTimeMenuEdit = ko.observable(true);
    self.valSelectFirstTueTimeMenuEdit = ko.observable(true);
    self.valSelectFirstWedTimeMenuEdit = ko.observable(true);
    self.valSelectFirstThuTimeMenuEdit = ko.observable(true);
    self.valSelectFirstFriTimeMenuEdit = ko.observable(true);
    self.valSelectFirstSatTimeMenuEdit = ko.observable(true);
    self.valSelectFirstAllDaysTimeMenuEdit = ko.observable(true);

    self.addDataValMultiHourTimeMenuArr = function (valMultiHourTimeMenuArr) {
        for (let sorting = cTimeMenu_StartSortingMultiHour; sorting <= cTimeMenu_MaxTimeMenuEdit; sorting++) {
            valMultiHourTimeMenuArr.push(new DataValMultiHourTimeMenuViewModel(sorting));
        }
    };

    //Added by SMILEDINING-SA22-0034#2
    self.chkDisableBtnAddNextPeriod = function (dataValMultiHourTimeMenuArr) {
        var indexFilter = _.findIndex(dataValMultiHourTimeMenuArr(), function (item) {
            return !item.isShow();
        });
        if (indexFilter > 0) {
            var startTimeValue = dataValMultiHourTimeMenuArr()[indexFilter - 1].startTimeValue();
            var endTimeValue = dataValMultiHourTimeMenuArr()[indexFilter - 1].endTimeValue();
            if (isEmpty(startTimeValue) || isEmpty(endTimeValue)) 
                return true;
            else
                return false;
        }
    }
    //End Added by SMILEDINING-SA22-0034#2

    //Sun
    self.valFirstHourStartTimeSunTimeMenuEdit = ko.observable('');
    self.valFirstHourEndTimeSunTimeMenuEdit = ko.observable('');
    self.valFirstHourStartTimeSunTimeMenuEditValue = ko.observable(null);
    self.valFirstHourEndTimeSunTimeMenuEditValue = ko.observable(null);
    self.valMultiHourSunTimeMenuArr = ko.observableArray([]);
    self.addDataValMultiHourTimeMenuArr(self.valMultiHourSunTimeMenuArr);
    //Added by SMILEDINING-SA22-0034#2
    self.disableBtnAddNextPeriodSun = ko.pureComputed(function () { 
        return self.chkDisableBtnAddNextPeriod(self.valMultiHourSunTimeMenuArr);
    });
    //End Added by SMILEDINING-SA22-0034#2

    //Mon
    self.valFirstHourStartTimeMonTimeMenuEdit = ko.observable('');
    self.valFirstHourEndTimeMonTimeMenuEdit = ko.observable('');
    self.valFirstHourStartTimeMonTimeMenuEditValue = ko.observable(null);
    self.valFirstHourEndTimeMonTimeMenuEditValue = ko.observable(null);
    self.valMultiHourMonTimeMenuArr = ko.observableArray([]);
    self.addDataValMultiHourTimeMenuArr(self.valMultiHourMonTimeMenuArr);
    //Added by SMILEDINING-SA22-0034#2
    self.disableBtnAddNextPeriodMon = ko.pureComputed(function () { 
        return self.chkDisableBtnAddNextPeriod(self.valMultiHourMonTimeMenuArr);
    });
    //End Added by SMILEDINING-SA22-0034#2

    //Tue
    self.valFirstHourStartTimeTueTimeMenuEdit = ko.observable('');
    self.valFirstHourEndTimeTueTimeMenuEdit = ko.observable('');
    self.valFirstHourStartTimeTueTimeMenuEditValue = ko.observable(null);
    self.valFirstHourEndTimeTueTimeMenuEditValue = ko.observable(null);
    self.valMultiHourTueTimeMenuArr = ko.observableArray([]);
    self.addDataValMultiHourTimeMenuArr(self.valMultiHourTueTimeMenuArr);
    //Added by SMILEDINING-SA22-0034#2
    self.disableBtnAddNextPeriodTue = ko.pureComputed(function () { 
        return self.chkDisableBtnAddNextPeriod(self.valMultiHourTueTimeMenuArr);
    });
    //End Added by SMILEDINING-SA22-0034#2

    //Wed
    self.valFirstHourStartTimeWedTimeMenuEdit = ko.observable('');
    self.valFirstHourEndTimeWedTimeMenuEdit = ko.observable('');
    self.valFirstHourStartTimeWedTimeMenuEditValue = ko.observable(null);
    self.valFirstHourEndTimeWedTimeMenuEditValue = ko.observable(null);
    self.valMultiHourWedTimeMenuArr = ko.observableArray([]);
    self.addDataValMultiHourTimeMenuArr(self.valMultiHourWedTimeMenuArr);
    //Added by SMILEDINING-SA22-0034#2
    self.disableBtnAddNextPeriodWed = ko.pureComputed(function () { 
        return self.chkDisableBtnAddNextPeriod(self.valMultiHourWedTimeMenuArr);
    });
    //End Added by SMILEDINING-SA22-0034#2

    //Thu
    self.valFirstHourStartTimeThuTimeMenuEdit = ko.observable('');
    self.valFirstHourEndTimeThuTimeMenuEdit = ko.observable('');
    self.valFirstHourStartTimeThuTimeMenuEditValue = ko.observable(null);
    self.valFirstHourEndTimeThuTimeMenuEditValue = ko.observable(null);
    self.valMultiHourThuTimeMenuArr = ko.observableArray([]);
    self.addDataValMultiHourTimeMenuArr(self.valMultiHourThuTimeMenuArr);
    //Added by SMILEDINING-SA22-0034#2
    self.disableBtnAddNextPeriodThu = ko.pureComputed(function () { 
        return self.chkDisableBtnAddNextPeriod(self.valMultiHourThuTimeMenuArr);
    });
    //End Added by SMILEDINING-SA22-0034#2

    //Fri
    self.valFirstHourStartTimeFriTimeMenuEdit = ko.observable('');
    self.valFirstHourEndTimeFriTimeMenuEdit = ko.observable('');
    self.valFirstHourStartTimeFriTimeMenuEditValue = ko.observable(null);
    self.valFirstHourEndTimeFriTimeMenuEditValue = ko.observable(null);
    self.valMultiHourFriTimeMenuArr = ko.observableArray([]);
    self.addDataValMultiHourTimeMenuArr(self.valMultiHourFriTimeMenuArr);
    //Added by SMILEDINING-SA22-0034#2
    self.disableBtnAddNextPeriodFri = ko.pureComputed(function () { 
        return self.chkDisableBtnAddNextPeriod(self.valMultiHourFriTimeMenuArr);
    });
    //End Added by SMILEDINING-SA22-0034#2

    //Sat
    self.valFirstHourStartTimeSatTimeMenuEdit = ko.observable('');
    self.valFirstHourEndTimeSatTimeMenuEdit = ko.observable('');
    self.valFirstHourStartTimeSatTimeMenuEditValue = ko.observable(null);
    self.valFirstHourEndTimeSatTimeMenuEditValue = ko.observable(null);
    self.valMultiHourSatTimeMenuArr = ko.observableArray([]);
    self.addDataValMultiHourTimeMenuArr(self.valMultiHourSatTimeMenuArr);
    //Added by SMILEDINING-SA22-0034#2
    self.disableBtnAddNextPeriodSat = ko.pureComputed(function () { 
        return self.chkDisableBtnAddNextPeriod(self.valMultiHourSatTimeMenuArr);
    });
    //End Added by SMILEDINING-SA22-0034#2

    //AllDay
    self.valFirstHourStartTimeAllDaysTimeMenuEdit = ko.observable('');
    self.valFirstHourEndTimeAllDaysTimeMenuEdit = ko.observable('');
    self.valFirstHourStartTimeAllDaysTimeMenuEditValue = ko.observable(null);
    self.valFirstHourEndTimeAllDaysTimeMenuEditValue = ko.observable(null);
    self.valMultiHourAllDaysTimeMenuArr = ko.observableArray([]);
    self.addDataValMultiHourTimeMenuArr(self.valMultiHourAllDaysTimeMenuArr);
    //Added by SMILEDINING-SA22-0034#2
    self.disableBtnAddNextPeriodAllDays = ko.pureComputed(function () { 
        return self.chkDisableBtnAddNextPeriod(self.valMultiHourAllDaysTimeMenuArr);
    });
    //End Added by SMILEDINING-SA22-0034#2

    //Time Menu Edit
    self.enableSaveChanges = ko.observable(true);
    self.createObjValTimeMenuEdit = function (min, max, value, disabled) { 
        return {
            min: min,
            max: max,
            type: "time",
            pickerType: "list",
            value: value,
            disabled: disabled,
            onValueChanged: function (v) {
                if (isEmpty(v.value) && (v.model.isShow === undefined ? true : v.model.isShow())) {
                    v.component.option("isValid", false);
                }
                value(isEmpty(v.value) ? null : moment(v.value, moment_time_format_hhmmss));
                self.enableSaveChanges(true);
            },
            onChange: function (v) {
                if (v.component._options.validationError != null) {
                    self.enableSaveChanges(false);
                } else {
                    self.enableSaveChanges(true);
                }
            }
        };
    };

    self.createObjValTimeMenuEditInValMultiHourTimeMenuArr = function (dataValMultiHourTimeMenuArr, dataValFirstHourEndTimeMenuEditValue, disabled) {
        for (let index = 0; index < dataValMultiHourTimeMenuArr().length; index++) {
            var valMultiHourTimeMenuOfIndex = dataValMultiHourTimeMenuArr()[index];
            valMultiHourTimeMenuOfIndex.startTimeEdit(self.createObjValTimeMenuEdit(
                index > 0 ? dataValMultiHourTimeMenuArr()[index - 1].endTimeValue : dataValFirstHourEndTimeMenuEditValue,
                valMultiHourTimeMenuOfIndex.endTimeValue,
                valMultiHourTimeMenuOfIndex.startTimeValue,
                disabled
            ));
            valMultiHourTimeMenuOfIndex.endTimeEdit(self.createObjValTimeMenuEdit(
                valMultiHourTimeMenuOfIndex.startTimeValue,
                dataValMultiHourTimeMenuArr()[index + 1] != null ? dataValMultiHourTimeMenuArr()[index + 1].startTimeValue : null,
                valMultiHourTimeMenuOfIndex.endTimeValue,
                disabled
            ));
        }
    };

    self.changeValueInValMultiHourTimeMenuArr = function (listMultiTime, dataValMultiHourTimeMenuArr) {
        ko.utils.arrayForEach(dataValMultiHourTimeMenuArr(), function (item) {
            item.isShow(false);
            item.startTimeValue(null);
            item.endTimeValue(null);
            item.selectTimeMenuEdit(true);
        });

        if (listMultiTime != null) {
            let index = 0;
            ko.utils.arrayForEach(listMultiTime(), function (item) {
                var valMultiHourTimeMenuOfIndex = dataValMultiHourTimeMenuArr()[index];
                valMultiHourTimeMenuOfIndex.startTimeValue(moment(item.startTime(), moment_time_format_hhmmss));
                valMultiHourTimeMenuOfIndex.endTimeValue(moment(item.endTime(), moment_time_format_hhmmss));
                valMultiHourTimeMenuOfIndex.selectTimeMenuEdit(item.active());
                valMultiHourTimeMenuOfIndex.isShow(true);
                index++;
            });
        }
    };

    self.chkHasShowMultiHourTimeMenuEdit = function (sorting) {
        return sorting < cTimeMenu_MaxTimeMenuEdit;
    };

    //SunTime
    self.valFirstHourStartTimeSunTimeMenuEdit(self.createObjValTimeMenuEdit(
        null,
        self.valFirstHourEndTimeSunTimeMenuEditValue,
        self.valFirstHourStartTimeSunTimeMenuEditValue,
        self.valActive24HourSunTimeMenuEdit
    ));

    self.valFirstHourEndTimeSunTimeMenuEdit(self.createObjValTimeMenuEdit(
        self.valFirstHourStartTimeSunTimeMenuEditValue,
        self.valMultiHourSunTimeMenuArr().length > 0 ? self.valMultiHourSunTimeMenuArr()[0].startTimeValue : null,
        self.valFirstHourEndTimeSunTimeMenuEditValue,
        self.valActive24HourSunTimeMenuEdit
    ));

    self.createObjValTimeMenuEditInValMultiHourTimeMenuArr(
        self.valMultiHourSunTimeMenuArr,
        self.valFirstHourEndTimeSunTimeMenuEditValue,
        self.valActive24HourSunTimeMenuEdit
    );

    //MonTime
    self.valFirstHourStartTimeMonTimeMenuEdit(self.createObjValTimeMenuEdit(
        null,
        self.valFirstHourEndTimeMonTimeMenuEditValue,
        self.valFirstHourStartTimeMonTimeMenuEditValue,
        self.valActive24HourMonTimeMenuEdit
    ));

    self.valFirstHourEndTimeMonTimeMenuEdit(self.createObjValTimeMenuEdit(
        self.valFirstHourStartTimeMonTimeMenuEditValue,
        self.valMultiHourMonTimeMenuArr().length > 0 ? self.valMultiHourMonTimeMenuArr()[0].startTimeValue : null,
        self.valFirstHourEndTimeMonTimeMenuEditValue,
        self.valActive24HourMonTimeMenuEdit
    ));

    self.createObjValTimeMenuEditInValMultiHourTimeMenuArr(
        self.valMultiHourMonTimeMenuArr,
        self.valFirstHourEndTimeMonTimeMenuEditValue,
        self.valActive24HourMonTimeMenuEdit
    );

    //TueTime
    self.valFirstHourStartTimeTueTimeMenuEdit(self.createObjValTimeMenuEdit(
        null,
        self.valFirstHourEndTimeTueTimeMenuEditValue,
        self.valFirstHourStartTimeTueTimeMenuEditValue,
        self.valActive24HourTueTimeMenuEdit
    ));

    self.valFirstHourEndTimeTueTimeMenuEdit(self.createObjValTimeMenuEdit(
        self.valFirstHourStartTimeTueTimeMenuEditValue,
        self.valMultiHourTueTimeMenuArr().length > 0 ? self.valMultiHourTueTimeMenuArr()[0].startTimeValue : null,
        self.valFirstHourEndTimeTueTimeMenuEditValue,
        self.valActive24HourTueTimeMenuEdit
    ));

    self.createObjValTimeMenuEditInValMultiHourTimeMenuArr(
        self.valMultiHourTueTimeMenuArr,
        self.valFirstHourEndTimeTueTimeMenuEditValue,
        self.valActive24HourTueTimeMenuEdit
    );

    //WedTime
    self.valFirstHourStartTimeWedTimeMenuEdit(self.createObjValTimeMenuEdit(
        null,
        self.valFirstHourEndTimeWedTimeMenuEditValue,
        self.valFirstHourStartTimeWedTimeMenuEditValue,
        self.valActive24HourWedTimeMenuEdit
    ));

    self.valFirstHourEndTimeWedTimeMenuEdit(self.createObjValTimeMenuEdit(
        self.valFirstHourStartTimeWedTimeMenuEditValue,
        self.valMultiHourWedTimeMenuArr().length > 0 ? self.valMultiHourWedTimeMenuArr()[0].startTimeValue : null,
        self.valFirstHourEndTimeWedTimeMenuEditValue,
        self.valActive24HourWedTimeMenuEdit
    ));

    self.createObjValTimeMenuEditInValMultiHourTimeMenuArr(
        self.valMultiHourWedTimeMenuArr,
        self.valFirstHourEndTimeWedTimeMenuEditValue,
        self.valActive24HourWedTimeMenuEdit
    );

    //ThuTime
    self.valFirstHourStartTimeThuTimeMenuEdit(self.createObjValTimeMenuEdit(
        null,
        self.valFirstHourEndTimeThuTimeMenuEditValue,
        self.valFirstHourStartTimeThuTimeMenuEditValue,
        self.valActive24HourThuTimeMenuEdit
    ));

    self.valFirstHourEndTimeThuTimeMenuEdit(self.createObjValTimeMenuEdit(
        self.valFirstHourStartTimeThuTimeMenuEditValue,
        self.valMultiHourThuTimeMenuArr().length > 0 ? self.valMultiHourThuTimeMenuArr()[0].startTimeValue : null,
        self.valFirstHourEndTimeThuTimeMenuEditValue,
        self.valActive24HourThuTimeMenuEdit
    ));

    self.createObjValTimeMenuEditInValMultiHourTimeMenuArr(
        self.valMultiHourThuTimeMenuArr,
        self.valFirstHourEndTimeThuTimeMenuEditValue,
        self.valActive24HourThuTimeMenuEdit
    );

    //FriTime
    self.valFirstHourStartTimeFriTimeMenuEdit(self.createObjValTimeMenuEdit(
        null,
        self.valFirstHourEndTimeFriTimeMenuEditValue,
        self.valFirstHourStartTimeFriTimeMenuEditValue,
        self.valActive24HourFriTimeMenuEdit
    ));

    self.valFirstHourEndTimeFriTimeMenuEdit(self.createObjValTimeMenuEdit(
        self.valFirstHourStartTimeFriTimeMenuEditValue,
        self.valMultiHourFriTimeMenuArr().length > 0 ? self.valMultiHourFriTimeMenuArr()[0].startTimeValue : null,
        self.valFirstHourEndTimeFriTimeMenuEditValue,
        self.valActive24HourFriTimeMenuEdit
    ));

    self.createObjValTimeMenuEditInValMultiHourTimeMenuArr(
        self.valMultiHourFriTimeMenuArr,
        self.valFirstHourEndTimeFriTimeMenuEditValue,
        self.valActive24HourFriTimeMenuEdit
    );

    //SatTime
    self.valFirstHourStartTimeSatTimeMenuEdit(self.createObjValTimeMenuEdit(
        null,
        self.valFirstHourEndTimeSatTimeMenuEditValue,
        self.valFirstHourStartTimeSatTimeMenuEditValue,
        self.valActive24HourSatTimeMenuEdit
    ));

    self.valFirstHourEndTimeSatTimeMenuEdit(self.createObjValTimeMenuEdit(
        self.valFirstHourStartTimeSatTimeMenuEditValue,
        self.valMultiHourSatTimeMenuArr().length > 0 ? self.valMultiHourSatTimeMenuArr()[0].startTimeValue : null,
        self.valFirstHourEndTimeSatTimeMenuEditValue,
        self.valActive24HourSatTimeMenuEdit
    ));

    self.createObjValTimeMenuEditInValMultiHourTimeMenuArr(
        self.valMultiHourSatTimeMenuArr,
        self.valFirstHourEndTimeSatTimeMenuEditValue,
        self.valActive24HourSatTimeMenuEdit
    );
    
    //AllDaysTime
    self.valFirstHourStartTimeAllDaysTimeMenuEdit(self.createObjValTimeMenuEdit(
        null,
        self.valFirstHourEndTimeAllDaysTimeMenuEditValue,
        self.valFirstHourStartTimeAllDaysTimeMenuEditValue,
        self.valActive24HourAllDaysTimeMenuEdit
    ));

    self.valFirstHourEndTimeAllDaysTimeMenuEdit(self.createObjValTimeMenuEdit(
        self.valFirstHourStartTimeAllDaysTimeMenuEditValue,
        self.valMultiHourAllDaysTimeMenuArr().length > 0 ? self.valMultiHourAllDaysTimeMenuArr()[0].startTimeValue : null,
        self.valFirstHourEndTimeAllDaysTimeMenuEditValue,
        self.valActive24HourAllDaysTimeMenuEdit
    ));

    self.createObjValTimeMenuEditInValMultiHourTimeMenuArr(
        self.valMultiHourAllDaysTimeMenuArr,
        self.valFirstHourEndTimeAllDaysTimeMenuEditValue,
        self.valActive24HourAllDaysTimeMenuEdit
    );
    //End Added by SMILEDINING-SA22-0034

    //Modified by SMILEDINING-SA22-0034
    //self.hasShowSecondSunTimeMenuEdit = ko.observable(false);
    //self.hasShowSecondMonTimeMenuEdit = ko.observable(false);
    //self.hasShowSecondTueTimeMenuEdit = ko.observable(false);
    //self.hasShowSecondWedTimeMenuEdit = ko.observable(false);
    //self.hasShowSecondThuTimeMenuEdit = ko.observable(false);
    //self.hasShowSecondFriTimeMenuEdit = ko.observable(false);
    //self.hasShowSecondSatTimeMenuEdit = ko.observable(false);
    //self.hasShowSecondAllDaysTimeMenuEdit = ko.observable(true);

    ////Active 24 Hours
    //self.valActive24HourSunTimeMenuEdit = ko.observable(false);
    //self.valActive24HourMonTimeMenuEdit = ko.observable(false);
    //self.valActive24HourTueTimeMenuEdit = ko.observable(false);
    //self.valActive24HourWedTimeMenuEdit = ko.observable(false);
    //self.valActive24HourThuTimeMenuEdit = ko.observable(false);
    //self.valActive24HourFriTimeMenuEdit = ko.observable(false);
    //self.valActive24HourSatTimeMenuEdit = ko.observable(false);
    //self.valActive24HourAllDaysTimeMenuEdit = ko.observable(false);

    ////Check Box Show
    //self.valSelectFirstSunTimeMenuEdit = ko.observable(true);
    //self.valSelectSecondSunTimeMenuEdit = ko.observable(true);
    //self.valSelectFirstMonTimeMenuEdit = ko.observable(true);
    //self.valSelectSecondMonTimeMenuEdit = ko.observable(true);
    //self.valSelectFirstTueTimeMenuEdit = ko.observable(true);
    //self.valSelectSecondTueTimeMenuEdit = ko.observable(true);
    //self.valSelectFirstWedTimeMenuEdit = ko.observable(true);
    //self.valSelectSecondWedTimeMenuEdit = ko.observable(true);
    //self.valSelectFirstThuTimeMenuEdit = ko.observable(true);
    //self.valSelectSecondThuTimeMenuEdit = ko.observable(true);
    //self.valSelectFirstFriTimeMenuEdit = ko.observable(true);
    //self.valSelectSecondFriTimeMenuEdit = ko.observable(true);
    //self.valSelectFirstSatTimeMenuEdit = ko.observable(true);
    //self.valSelectSecondSatTimeMenuEdit = ko.observable(true);
    //self.valSelectFirstAllDaysTimeMenuEdit = ko.observable(true);
    //self.valSelectSecondAllDaysTimeMenuEdit = ko.observable(false);

    ////Sun
    //self.valFirstHourStartTimeSunTimeMenuEdit = ko.observable('');
    //self.valFirstHourEndTimeSunTimeMenuEdit = ko.observable('');
    //self.valSecondHourStartTimeSunTimeMenuEdit = ko.observable('');
    //self.valSecondHourEndTimeSunTimeMenuEdit = ko.observable('');
    //self.valFirstHourStartTimeSunTimeMenuEditValue = ko.observable(null);
    //self.valFirstHourEndTimeSunTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourStartTimeSunTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourEndTimeSunTimeMenuEditValue = ko.observable(null);

    ////Mon
    //self.valFirstHourStartTimeMonTimeMenuEdit = ko.observable('');
    //self.valFirstHourEndTimeMonTimeMenuEdit = ko.observable('');
    //self.valSecondHourStartTimeMonTimeMenuEdit = ko.observable('');
    //self.valSecondHourEndTimeMonTimeMenuEdit = ko.observable('');
    //self.valFirstHourStartTimeMonTimeMenuEditValue = ko.observable(null);
    //self.valFirstHourEndTimeMonTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourStartTimeMonTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourEndTimeMonTimeMenuEditValue = ko.observable(null);

    ////Tue
    //self.valFirstHourStartTimeTueTimeMenuEdit = ko.observable('');
    //self.valFirstHourEndTimeTueTimeMenuEdit = ko.observable('');
    //self.valSecondHourStartTimeTueTimeMenuEdit = ko.observable('');
    //self.valSecondHourEndTimeTueTimeMenuEdit = ko.observable('');
    //self.valFirstHourStartTimeTueTimeMenuEditValue = ko.observable(null);
    //self.valFirstHourEndTimeTueTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourStartTimeTueTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourEndTimeTueTimeMenuEditValue = ko.observable(null);

    ////Wed
    //self.valFirstHourStartTimeWedTimeMenuEdit = ko.observable('');
    //self.valFirstHourEndTimeWedTimeMenuEdit = ko.observable('');
    //self.valSecondHourStartTimeWedTimeMenuEdit = ko.observable('');
    //self.valSecondHourEndTimeWedTimeMenuEdit = ko.observable('');
    //self.valFirstHourStartTimeWedTimeMenuEditValue = ko.observable(null);
    //self.valFirstHourEndTimeWedTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourStartTimeWedTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourEndTimeWedTimeMenuEditValue = ko.observable(null);

    ////Thu
    //self.valFirstHourStartTimeThuTimeMenuEdit = ko.observable('');
    //self.valFirstHourEndTimeThuTimeMenuEdit = ko.observable('');
    //self.valSecondHourStartTimeThuTimeMenuEdit = ko.observable('');
    //self.valSecondHourEndTimeThuTimeMenuEdit = ko.observable('');
    //self.valFirstHourStartTimeThuTimeMenuEditValue = ko.observable(null);
    //self.valFirstHourEndTimeThuTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourStartTimeThuTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourEndTimeThuTimeMenuEditValue = ko.observable(null);

    ////Fri
    //self.valFirstHourStartTimeFriTimeMenuEdit = ko.observable('');
    //self.valFirstHourEndTimeFriTimeMenuEdit = ko.observable('');
    //self.valSecondHourStartTimeFriTimeMenuEdit = ko.observable('');
    //self.valSecondHourEndTimeFriTimeMenuEdit = ko.observable('');
    //self.valFirstHourStartTimeFriTimeMenuEditValue = ko.observable(null);
    //self.valFirstHourEndTimeFriTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourStartTimeFriTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourEndTimeFriTimeMenuEditValue = ko.observable(null);

    ////Sat
    //self.valFirstHourStartTimeSatTimeMenuEdit = ko.observable('');
    //self.valFirstHourEndTimeSatTimeMenuEdit = ko.observable('');
    //self.valSecondHourStartTimeSatTimeMenuEdit = ko.observable('');
    //self.valSecondHourEndTimeSatTimeMenuEdit = ko.observable('');
    //self.valFirstHourStartTimeSatTimeMenuEditValue = ko.observable(null);
    //self.valFirstHourEndTimeSatTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourStartTimeSatTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourEndTimeSatTimeMenuEditValue = ko.observable(null);

    ////AllDay
    //self.valFirstHourStartTimeAllDaysTimeMenuEdit = ko.observable('');
    //self.valFirstHourEndTimeAllDaysTimeMenuEdit = ko.observable('');
    //self.valSecondHourStartTimeAllDaysTimeMenuEdit = ko.observable('');
    //self.valSecondHourEndTimeAllDaysTimeMenuEdit = ko.observable('');
    //self.valFirstHourStartTimeAllDaysTimeMenuEditValue = ko.observable(null);
    //self.valFirstHourEndTimeAllDaysTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourStartTimeAllDaysTimeMenuEditValue = ko.observable(null);
    //self.valSecondHourEndTimeAllDaysTimeMenuEditValue = ko.observable(null);

    ////SunTime
    //self.enableSaveChanges = ko.observable(true);
    //self.valFirstHourStartTimeSunTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //max: isChrome() ? null : self.valFirstHourEndTimeSunTimeMenuEditValue,
    //    //pickerType: isChrome() ? "list" : "list",
    //    //End Modified by SMILEDINING-SA18-0040
    //    //Added by SMILEDINING-SA18-0040
    //    max: self.valFirstHourEndTimeSunTimeMenuEditValue,
    //    pickerType: "list",
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    value: self.valFirstHourStartTimeSunTimeMenuEditValue,
    //    disabled: self.valActive24HourSunTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourStartTimeSunTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valFirstHourEndTimeSunTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourStartTimeSunTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourStartTimeSunTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourStartTimeSunTimeMenuEditValue,
    //    max: self.valSecondHourStartTimeSunTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040

    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valFirstHourEndTimeSunTimeMenuEditValue,
    //    disabled: self.valActive24HourSunTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourEndTimeSunTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourStartTimeSunTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourEndTimeSunTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourEndTimeSunTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourEndTimeSunTimeMenuEditValue,
    //    max: self.valSecondHourEndTimeSunTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourStartTimeSunTimeMenuEditValue,
    //    disabled: self.valActive24HourSunTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourStartTimeSunTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourEndTimeSunTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valSecondHourStartTimeSunTimeMenuEditValue,
    //    //min: isChrome() ? null : self.valSecondHourStartTimeSunTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valSecondHourStartTimeSunTimeMenuEditValue,
    //    min: self.valSecondHourStartTimeSunTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourEndTimeSunTimeMenuEditValue,
    //    disabled: self.valActive24HourSunTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourEndTimeSunTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    ////MonTime
    //self.valFirstHourStartTimeMonTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //max: isChrome() ? null : self.valFirstHourEndTimeMonTimeMenuEditValue,
    //    //pickerType: isChrome() ? "list" : "list",
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    max: self.valFirstHourEndTimeMonTimeMenuEditValue,
    //    pickerType: "list",
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    isValid: true,
    //    value: self.valFirstHourStartTimeMonTimeMenuEditValue,
    //    disabled: self.valActive24HourMonTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourStartTimeMonTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valFirstHourEndTimeMonTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourStartTimeMonTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourStartTimeMonTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourStartTimeMonTimeMenuEditValue,
    //    max: self.valSecondHourStartTimeMonTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valFirstHourEndTimeMonTimeMenuEditValue,
    //    disabled: self.valActive24HourMonTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourEndTimeMonTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourStartTimeMonTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourEndTimeMonTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourEndTimeMonTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourEndTimeMonTimeMenuEditValue,
    //    max: self.valSecondHourEndTimeMonTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourStartTimeMonTimeMenuEditValue,
    //    disabled: self.valActive24HourMonTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourStartTimeMonTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourEndTimeMonTimeMenuEdit({
    //    //min: isChrome() ? null : self.valSecondHourStartTimeMonTimeMenuEditValue, //Modified and End by SMILEDINING-SA18-0040
    //    min: self.valSecondHourStartTimeMonTimeMenuEditValue, //Added and End by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourEndTimeMonTimeMenuEditValue,
    //    disabled: self.valActive24HourMonTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourEndTimeMonTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    ////TueTime
    //self.valFirstHourStartTimeTueTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //max: isChrome() ? null : self.valFirstHourEndTimeTueTimeMenuEditValue,
    //    //pickerType: isChrome() ? "list" : "list",
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    max: self.valFirstHourEndTimeTueTimeMenuEditValue,
    //    pickerType: "list",
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    isValid: true,
    //    value: self.valFirstHourStartTimeTueTimeMenuEditValue,
    //    disabled: self.valActive24HourTueTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourStartTimeTueTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valFirstHourEndTimeTueTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourStartTimeTueTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourStartTimeTueTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourStartTimeTueTimeMenuEditValue,
    //    max: self.valSecondHourStartTimeTueTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valFirstHourEndTimeTueTimeMenuEditValue,
    //    disabled: self.valActive24HourTueTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourEndTimeTueTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourStartTimeTueTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourEndTimeTueTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourEndTimeTueTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourEndTimeTueTimeMenuEditValue,
    //    max: self.valSecondHourEndTimeTueTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourStartTimeTueTimeMenuEditValue,
    //    disabled: self.valActive24HourTueTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourStartTimeTueTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourEndTimeTueTimeMenuEdit({
    //    //min: isChrome() ? null : self.valSecondHourStartTimeTueTimeMenuEditValue, //Modified and End by SMILEDINING-SA18-0040
    //    min: self.valSecondHourStartTimeTueTimeMenuEditValue, //Added and End by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourEndTimeTueTimeMenuEditValue,
    //    disabled: self.valActive24HourTueTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourEndTimeTueTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    ////WedTime
    //self.valFirstHourStartTimeWedTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //max: isChrome() ? null : self.valFirstHourEndTimeWedTimeMenuEditValue,
    //    //pickerType: isChrome() ? "list" : "list",
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    max: self.valFirstHourEndTimeWedTimeMenuEditValue,
    //    pickerType: "list",
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    isValid: true,
    //    value: self.valFirstHourStartTimeWedTimeMenuEditValue,
    //    disabled: self.valActive24HourWedTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourStartTimeWedTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valFirstHourEndTimeWedTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourStartTimeWedTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourStartTimeWedTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourStartTimeWedTimeMenuEditValue,
    //    max: self.valSecondHourStartTimeWedTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valFirstHourEndTimeWedTimeMenuEditValue,
    //    disabled: self.valActive24HourWedTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourEndTimeWedTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourStartTimeWedTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourEndTimeWedTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourEndTimeWedTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourEndTimeWedTimeMenuEditValue,
    //    max: self.valSecondHourEndTimeWedTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourStartTimeWedTimeMenuEditValue,
    //    disabled: self.valActive24HourWedTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourStartTimeWedTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourEndTimeWedTimeMenuEdit({
    //    //min: isChrome() ? null : self.valSecondHourStartTimeWedTimeMenuEditValue, //Modified and End by SMILEDINING-SA18-0040
    //    min: self.valSecondHourStartTimeWedTimeMenuEditValue, //Added and End by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and Emd by SMILEDINING-SA18-0040
    //    value: self.valSecondHourEndTimeWedTimeMenuEditValue,
    //    disabled: self.valActive24HourWedTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourEndTimeWedTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    ////ThuTime
    //self.valFirstHourStartTimeThuTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //max: isChrome() ? null : self.valFirstHourEndTimeThuTimeMenuEditValue,
    //    //pickerType: isChrome() ? "list" : "list",
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    max: self.valFirstHourEndTimeThuTimeMenuEditValue,
    //    pickerType: "list",
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    isValid: true,
    //    value: self.valFirstHourStartTimeThuTimeMenuEditValue,
    //    disabled: self.valActive24HourThuTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourStartTimeThuTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valFirstHourEndTimeThuTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourStartTimeThuTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourStartTimeThuTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourStartTimeThuTimeMenuEditValue,
    //    max: self.valSecondHourStartTimeThuTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valFirstHourEndTimeThuTimeMenuEditValue,
    //    disabled: self.valActive24HourThuTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourEndTimeThuTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourStartTimeThuTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourEndTimeThuTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourEndTimeThuTimeMenuEditValue,
    //    //End by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourEndTimeThuTimeMenuEditValue,
    //    max: self.valSecondHourEndTimeThuTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourStartTimeThuTimeMenuEditValue,
    //    disabled: self.valActive24HourThuTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourStartTimeThuTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourEndTimeThuTimeMenuEdit({
    //    //min: isChrome() ? null : self.valSecondHourStartTimeThuTimeMenuEditValue, //Modified and End by SMILEDINING-SA18-0040
    //    min: self.valSecondHourStartTimeThuTimeMenuEditValue, //Added and End by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourEndTimeThuTimeMenuEditValue,
    //    disabled: self.valActive24HourThuTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourEndTimeThuTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    ////FriTime
    //self.valFirstHourStartTimeFriTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //max: isChrome() ? null : self.valFirstHourEndTimeFriTimeMenuEditValue,
    //    //pickerType: isChrome() ? "list" : "list",
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    max: self.valFirstHourEndTimeFriTimeMenuEditValue,
    //    pickerType: "list",
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    isValid: true,
    //    value: self.valFirstHourStartTimeFriTimeMenuEditValue,
    //    disabled: self.valActive24HourFriTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourStartTimeFriTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valFirstHourEndTimeFriTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourStartTimeFriTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourStartTimeFriTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourStartTimeFriTimeMenuEditValue,
    //    max: self.valSecondHourStartTimeFriTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valFirstHourEndTimeFriTimeMenuEditValue,
    //    disabled: self.valActive24HourFriTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourEndTimeFriTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourStartTimeFriTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourEndTimeFriTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourEndTimeFriTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourEndTimeFriTimeMenuEditValue,
    //    max: self.valSecondHourEndTimeFriTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourStartTimeFriTimeMenuEditValue,
    //    disabled: self.valActive24HourFriTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourStartTimeFriTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourEndTimeFriTimeMenuEdit({
    //    //min: isChrome() ? null : self.valSecondHourStartTimeFriTimeMenuEditValue, //Modified and End by SMILEDINING-SA18-0040
    //    min: self.valSecondHourStartTimeFriTimeMenuEditValue, //Added and End by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourEndTimeFriTimeMenuEditValue,
    //    disabled: self.valActive24HourFriTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourEndTimeFriTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    ////SatTime
    //self.valFirstHourStartTimeSatTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //max: isChrome() ? null : self.valFirstHourEndTimeSatTimeMenuEditValue,
    //    //pickerType: isChrome() ? "list" : "list",
    //    //Added by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    max: self.valFirstHourEndTimeSatTimeMenuEditValue,
    //    pickerType: "list",
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    isValid: true,
    //    value: self.valFirstHourStartTimeSatTimeMenuEditValue,
    //    disabled: self.valActive24HourSatTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourStartTimeSatTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valFirstHourEndTimeSatTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourStartTimeSatTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourStartTimeSatTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourStartTimeSatTimeMenuEditValue,
    //    max: self.valSecondHourStartTimeSatTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valFirstHourEndTimeSatTimeMenuEditValue,
    //    disabled: self.valActive24HourSatTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourEndTimeSatTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourStartTimeSatTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourEndTimeSatTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourEndTimeSatTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourEndTimeSatTimeMenuEditValue,
    //    max: self.valSecondHourEndTimeSatTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourStartTimeSatTimeMenuEditValue,
    //    disabled: self.valActive24HourSatTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourStartTimeSatTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourEndTimeSatTimeMenuEdit({
    //    //min: isChrome() ? null : self.valSecondHourStartTimeSatTimeMenuEditValue, //Modified and End by SMILEDINING-SA18-0040
    //    min: self.valSecondHourStartTimeSatTimeMenuEditValue, //Added and End by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourEndTimeSatTimeMenuEditValue,
    //    disabled: self.valActive24HourSatTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourEndTimeSatTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    ////AllDaysTime
    //self.valFirstHourStartTimeAllDaysTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //max: isChrome() ? null : self.valFirstHourEndTimeAllDaysTimeMenuEditValue,
    //    //pickerType: isChrome() ? "list" : "list",
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    max: self.valFirstHourEndTimeAllDaysTimeMenuEditValue,
    //    pickerType: "list",
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    value: self.valFirstHourStartTimeAllDaysTimeMenuEditValue,
    //    disabled: self.valActive24HourAllDaysTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourStartTimeAllDaysTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valFirstHourEndTimeAllDaysTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourStartTimeAllDaysTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourStartTimeAllDaysTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourStartTimeAllDaysTimeMenuEditValue,
    //    max: self.valSecondHourStartTimeAllDaysTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valFirstHourEndTimeAllDaysTimeMenuEditValue,
    //    disabled: self.valActive24HourAllDaysTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valFirstHourEndTimeAllDaysTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourStartTimeAllDaysTimeMenuEdit({
    //    //Modified by SMILEDINING-SA18-0040
    //    //min: isChrome() ? null : self.valFirstHourEndTimeAllDaysTimeMenuEditValue,
    //    //max: isChrome() ? null : self.valSecondHourEndTimeAllDaysTimeMenuEditValue,
    //    //End Modified by SMILEDINING-SA18-0040

    //    //Added by SMILEDINING-SA18-0040
    //    min: self.valFirstHourEndTimeAllDaysTimeMenuEditValue,
    //    max: self.valSecondHourEndTimeAllDaysTimeMenuEditValue,
    //    //End Added by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourStartTimeAllDaysTimeMenuEditValue,
    //    disabled: self.valActive24HourAllDaysTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourStartTimeAllDaysTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});

    //self.valSecondHourEndTimeAllDaysTimeMenuEdit({
    //    //min: isChrome() ? null : self.valSecondHourStartTimeAllDaysTimeMenuEditValue, //Modified and End by SMILEDINING-SA18-0040
    //    min: self.valSecondHourStartTimeAllDaysTimeMenuEditValue, //Added and End by SMILEDINING-SA18-0040
    //    type: "time",
    //    //pickerType: isChrome() ? "list" : "list", //Modified and End by SMILEDINING-SA18-0040
    //    pickerType: "list", //Added and End by SMILEDINING-SA18-0040
    //    value: self.valSecondHourEndTimeAllDaysTimeMenuEditValue,
    //    disabled: self.valActive24HourAllDaysTimeMenuEdit,
    //    onValueChanged: function (v) {
    //        if (v.value === "" || v.value === null || v.value === undefined) {
    //            v.component.option("isValid", false);
    //        }
    //        self.valSecondHourEndTimeAllDaysTimeMenuEditValue(v.value);
    //        self.enableSaveChanges(true);
    //    },
    //    onChange: function (v) {
    //        if (v.component._options.validationError != null) {
    //            self.enableSaveChanges(false);
    //        } else {
    //            self.enableSaveChanges(true);
    //        }
    //    }
    //});
    //End Modified by SMILEDINING-SA22-0034
}

function DataTimeMenu(data) {
    self = vmViewIndex.allSetTime.dataModal;

    //Added by SMILEDINING-SA22-0034
    if (isEmpty(data)) {
        self.hasShowMultiHourSunTimeMenuEdit(true);
        self.hasShowMultiHourMonTimeMenuEdit(true);
        self.hasShowMultiHourTueTimeMenuEdit(true);
        self.hasShowMultiHourWedTimeMenuEdit(true);
        self.hasShowMultiHourThuTimeMenuEdit(true);
        self.hasShowMultiHourFriTimeMenuEdit(true);
        self.hasShowMultiHourSatTimeMenuEdit(true);
        self.hasShowMultiHourAllDaysTimeMenuEdit(true);

        //Active 24 Hours
        self.valActive24HourSunTimeMenuEdit(false);
        self.valActive24HourMonTimeMenuEdit(false);
        self.valActive24HourTueTimeMenuEdit(false);
        self.valActive24HourWedTimeMenuEdit(false);
        self.valActive24HourThuTimeMenuEdit(false);
        self.valActive24HourFriTimeMenuEdit(false);
        self.valActive24HourSatTimeMenuEdit(false);
        self.valActive24HourAllDaysTimeMenuEdit(false);

        //Check Box Show
        self.valSelectFirstSunTimeMenuEdit(true);
        self.valSelectFirstMonTimeMenuEdit(true);
        self.valSelectFirstTueTimeMenuEdit(true);
        self.valSelectFirstWedTimeMenuEdit(true);
        self.valSelectFirstThuTimeMenuEdit(true);
        self.valSelectFirstFriTimeMenuEdit(true);
        self.valSelectFirstSatTimeMenuEdit(true);
        self.valSelectFirstAllDaysTimeMenuEdit(true);

        //Sun
        self.valFirstHourStartTimeSunTimeMenuEditValue(null);
        self.valFirstHourEndTimeSunTimeMenuEditValue(null);
        self.changeValueInValMultiHourTimeMenuArr(null, self.valMultiHourSunTimeMenuArr);

        //Mon
        self.valFirstHourStartTimeMonTimeMenuEditValue(null);
        self.valFirstHourEndTimeMonTimeMenuEditValue(null);
        self.changeValueInValMultiHourTimeMenuArr(null, self.valMultiHourMonTimeMenuArr);

        //Tue
        self.valFirstHourStartTimeTueTimeMenuEditValue(null);
        self.valFirstHourEndTimeTueTimeMenuEditValue(null);
        self.changeValueInValMultiHourTimeMenuArr(null, self.valMultiHourTueTimeMenuArr);

        //Wed
        self.valFirstHourStartTimeWedTimeMenuEditValue(null);
        self.valFirstHourEndTimeWedTimeMenuEditValue(null);
        self.changeValueInValMultiHourTimeMenuArr(null, self.valMultiHourWedTimeMenuArr);

        //Thu
        self.valFirstHourStartTimeThuTimeMenuEditValue(null);
        self.valFirstHourEndTimeThuTimeMenuEditValue(null);
        self.changeValueInValMultiHourTimeMenuArr(null, self.valMultiHourThuTimeMenuArr);

        //Fri
        self.valFirstHourStartTimeFriTimeMenuEditValue(null);
        self.valFirstHourEndTimeFriTimeMenuEditValue(null);
        self.changeValueInValMultiHourTimeMenuArr(null, self.valMultiHourFriTimeMenuArr);

        //Sat
        self.valFirstHourStartTimeSatTimeMenuEditValue(null);
        self.valFirstHourEndTimeSatTimeMenuEditValue(null);
        self.changeValueInValMultiHourTimeMenuArr(null, self.valMultiHourSatTimeMenuArr);

        //AllDay
        self.valFirstHourStartTimeAllDaysTimeMenuEditValue(null);
        self.valFirstHourEndTimeAllDaysTimeMenuEditValue(null);
        self.changeValueInValMultiHourTimeMenuArr(null, self.valMultiHourAllDaysTimeMenuArr);

    } else {
        var model = vmViewIndex.allSetTime;
        model.data([]);
        ko.mapping.fromJS(data, {}, model.data);

        //Active 24 Hours
        self.valActive24HourSunTimeMenuEdit(model.data()[0].active24Hour());
        self.valActive24HourMonTimeMenuEdit(model.data()[1].active24Hour());
        self.valActive24HourTueTimeMenuEdit(model.data()[2].active24Hour());
        self.valActive24HourWedTimeMenuEdit(model.data()[3].active24Hour());
        self.valActive24HourThuTimeMenuEdit(model.data()[4].active24Hour());
        self.valActive24HourFriTimeMenuEdit(model.data()[5].active24Hour());
        self.valActive24HourSatTimeMenuEdit(model.data()[6].active24Hour());

        self.hasShowMultiHourSunTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(model.data()[0].listMultiTime().length - 1));
        self.hasShowMultiHourMonTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(model.data()[1].listMultiTime().length - 1));
        self.hasShowMultiHourTueTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(model.data()[2].listMultiTime().length - 1));
        self.hasShowMultiHourWedTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(model.data()[3].listMultiTime().length - 1));
        self.hasShowMultiHourThuTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(model.data()[4].listMultiTime().length - 1));
        self.hasShowMultiHourFriTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(model.data()[5].listMultiTime().length - 1));
        self.hasShowMultiHourSatTimeMenuEdit(self.chkHasShowMultiHourTimeMenuEdit(model.data()[6].listMultiTime().length - 1));
                
        //Check Box Show
        self.valSelectFirstSunTimeMenuEdit(model.data()[0].activeFirstPeriod());
        self.valSelectFirstMonTimeMenuEdit(model.data()[1].activeFirstPeriod());
        self.valSelectFirstTueTimeMenuEdit(model.data()[2].activeFirstPeriod());
        self.valSelectFirstWedTimeMenuEdit(model.data()[3].activeFirstPeriod());
        self.valSelectFirstThuTimeMenuEdit(model.data()[4].activeFirstPeriod());
        self.valSelectFirstFriTimeMenuEdit(model.data()[5].activeFirstPeriod());
        self.valSelectFirstSatTimeMenuEdit(model.data()[6].activeFirstPeriod());

        //Sun
        self.valFirstHourStartTimeSunTimeMenuEditValue(moment(model.data()[0].firstStartTime(), moment_time_format_hhmmss));
        self.valFirstHourEndTimeSunTimeMenuEditValue(moment(model.data()[0].firstEndTime(), moment_time_format_hhmmss));
        self.changeValueInValMultiHourTimeMenuArr(model.data()[0].listMultiTime, self.valMultiHourSunTimeMenuArr);

        //Mon
        self.valFirstHourStartTimeMonTimeMenuEditValue(moment(model.data()[1].firstStartTime(), moment_time_format_hhmmss));
        self.valFirstHourEndTimeMonTimeMenuEditValue(moment(model.data()[1].firstEndTime(), moment_time_format_hhmmss));
        self.changeValueInValMultiHourTimeMenuArr(model.data()[1].listMultiTime, self.valMultiHourMonTimeMenuArr);

        //Tue
        self.valFirstHourStartTimeTueTimeMenuEditValue(moment(model.data()[2].firstStartTime(), moment_time_format_hhmmss));
        self.valFirstHourEndTimeTueTimeMenuEditValue(moment(model.data()[2].firstEndTime(), moment_time_format_hhmmss));
        self.changeValueInValMultiHourTimeMenuArr(model.data()[2].listMultiTime, self.valMultiHourTueTimeMenuArr);

        //Wed
        self.valFirstHourStartTimeWedTimeMenuEditValue(moment(model.data()[3].firstStartTime(), moment_time_format_hhmmss));
        self.valFirstHourEndTimeWedTimeMenuEditValue(moment(model.data()[3].firstEndTime(), moment_time_format_hhmmss));
        self.changeValueInValMultiHourTimeMenuArr(model.data()[3].listMultiTime, self.valMultiHourWedTimeMenuArr);

        //Thu
        self.valFirstHourStartTimeThuTimeMenuEditValue(moment(model.data()[4].firstStartTime(), moment_time_format_hhmmss));
        self.valFirstHourEndTimeThuTimeMenuEditValue(moment(model.data()[4].firstEndTime(), moment_time_format_hhmmss));
        self.changeValueInValMultiHourTimeMenuArr(model.data()[4].listMultiTime, self.valMultiHourThuTimeMenuArr);

        //Fri
        self.valFirstHourStartTimeFriTimeMenuEditValue(moment(model.data()[5].firstStartTime(), moment_time_format_hhmmss));
        self.valFirstHourEndTimeFriTimeMenuEditValue(moment(model.data()[5].firstEndTime(), moment_time_format_hhmmss));
        self.changeValueInValMultiHourTimeMenuArr(model.data()[5].listMultiTime, self.valMultiHourFriTimeMenuArr);

        //Sat
        self.valFirstHourStartTimeSatTimeMenuEditValue(moment(model.data()[6].firstStartTime(), moment_time_format_hhmmss));
        self.valFirstHourEndTimeSatTimeMenuEditValue(moment(model.data()[6].firstEndTime(), moment_time_format_hhmmss));
        self.changeValueInValMultiHourTimeMenuArr(model.data()[6].listMultiTime, self.valMultiHourSatTimeMenuArr);

        //AllDay
        self.valFirstHourStartTimeAllDaysTimeMenuEditValue(null);
        self.valFirstHourEndTimeAllDaysTimeMenuEditValue(null);
        self.changeValueInValMultiHourTimeMenuArr(null, self.valMultiHourAllDaysTimeMenuArr);

    }
    //End Added by SMILEDINING-SA22-0034

    //Modified by SMILEDINING-SA22-0034
    //if (isEmpty(data)) {
    //    self.hasShowSecondSunTimeMenuEdit(true);
    //    self.hasShowSecondMonTimeMenuEdit(true);
    //    self.hasShowSecondTueTimeMenuEdit(true);
    //    self.hasShowSecondWedTimeMenuEdit(true);
    //    self.hasShowSecondThuTimeMenuEdit(true);
    //    self.hasShowSecondFriTimeMenuEdit(true);
    //    self.hasShowSecondSatTimeMenuEdit(true);
    //    self.hasShowSecondAllDaysTimeMenuEdit(true);

    //    //Active 24 Hours
    //    self.valActive24HourSunTimeMenuEdit(false);
    //    self.valActive24HourMonTimeMenuEdit(false);
    //    self.valActive24HourTueTimeMenuEdit(false);
    //    self.valActive24HourWedTimeMenuEdit(false);
    //    self.valActive24HourThuTimeMenuEdit(false);
    //    self.valActive24HourFriTimeMenuEdit(false);
    //    self.valActive24HourSatTimeMenuEdit(false);
    //    self.valActive24HourAllDaysTimeMenuEdit(false);

    //    //Check Box Show
    //    self.valSelectFirstSunTimeMenuEdit(true);
    //    self.valSelectSecondSunTimeMenuEdit(false);
    //    self.valSelectFirstMonTimeMenuEdit(true);
    //    self.valSelectSecondMonTimeMenuEdit(false);
    //    self.valSelectFirstTueTimeMenuEdit(true);
    //    self.valSelectSecondTueTimeMenuEdit(false);
    //    self.valSelectFirstWedTimeMenuEdit(true);
    //    self.valSelectSecondWedTimeMenuEdit(false);
    //    self.valSelectFirstThuTimeMenuEdit(true);
    //    self.valSelectSecondThuTimeMenuEdit(false);
    //    self.valSelectFirstFriTimeMenuEdit(true);
    //    self.valSelectSecondFriTimeMenuEdit(false);
    //    self.valSelectFirstSatTimeMenuEdit(true);
    //    self.valSelectSecondSatTimeMenuEdit(false);
    //    self.valSelectFirstAllDaysTimeMenuEdit(true);
    //    self.valSelectSecondAllDaysTimeMenuEdit(false);

    //    //Sun
    //    self.valFirstHourStartTimeSunTimeMenuEdit('');
    //    self.valFirstHourEndTimeSunTimeMenuEdit('');
    //    self.valSecondHourStartTimeSunTimeMenuEdit('');
    //    self.valSecondHourEndTimeSunTimeMenuEdit('');
    //    self.valFirstHourStartTimeSunTimeMenuEditValue(null);
    //    self.valFirstHourEndTimeSunTimeMenuEditValue(null);
    //    self.valSecondHourStartTimeSunTimeMenuEditValue(null);
    //    self.valSecondHourEndTimeSunTimeMenuEditValue(null);

    //    //Mon
    //    self.valFirstHourStartTimeMonTimeMenuEdit('');
    //    self.valFirstHourEndTimeMonTimeMenuEdit('');
    //    self.valSecondHourStartTimeMonTimeMenuEdit('');
    //    self.valSecondHourEndTimeMonTimeMenuEdit('');
    //    self.valFirstHourStartTimeMonTimeMenuEditValue(null);
    //    self.valFirstHourEndTimeMonTimeMenuEditValue(null);
    //    self.valSecondHourStartTimeMonTimeMenuEditValue(null);
    //    self.valSecondHourEndTimeMonTimeMenuEditValue(null);

    //    //Tue
    //    self.valFirstHourStartTimeTueTimeMenuEdit('');
    //    self.valFirstHourEndTimeTueTimeMenuEdit('');
    //    self.valSecondHourStartTimeTueTimeMenuEdit('');
    //    self.valSecondHourEndTimeTueTimeMenuEdit('');
    //    self.valFirstHourStartTimeTueTimeMenuEditValue(null);
    //    self.valFirstHourEndTimeTueTimeMenuEditValue(null);
    //    self.valSecondHourStartTimeTueTimeMenuEditValue(null);
    //    self.valSecondHourEndTimeTueTimeMenuEditValue(null);

    //    //Wed
    //    self.valFirstHourStartTimeWedTimeMenuEdit('');
    //    self.valFirstHourEndTimeWedTimeMenuEdit('');
    //    self.valSecondHourStartTimeWedTimeMenuEdit('');
    //    self.valSecondHourEndTimeWedTimeMenuEdit('');
    //    self.valFirstHourStartTimeWedTimeMenuEditValue(null);
    //    self.valFirstHourEndTimeWedTimeMenuEditValue(null);
    //    self.valSecondHourStartTimeWedTimeMenuEditValue(null);
    //    self.valSecondHourEndTimeWedTimeMenuEditValue(null);

    //    //Thu
    //    self.valFirstHourStartTimeThuTimeMenuEdit('');
    //    self.valFirstHourEndTimeThuTimeMenuEdit('');
    //    self.valSecondHourStartTimeThuTimeMenuEdit('');
    //    self.valSecondHourEndTimeThuTimeMenuEdit('');
    //    self.valFirstHourStartTimeThuTimeMenuEditValue(null);
    //    self.valFirstHourEndTimeThuTimeMenuEditValue(null);
    //    self.valSecondHourStartTimeThuTimeMenuEditValue(null);
    //    self.valSecondHourEndTimeThuTimeMenuEditValue(null);

    //    //Fri
    //    self.valFirstHourStartTimeFriTimeMenuEdit('');
    //    self.valFirstHourEndTimeFriTimeMenuEdit('');
    //    self.valSecondHourStartTimeFriTimeMenuEdit('');
    //    self.valSecondHourEndTimeFriTimeMenuEdit('');
    //    self.valFirstHourStartTimeFriTimeMenuEditValue(null);
    //    self.valFirstHourEndTimeFriTimeMenuEditValue(null);
    //    self.valSecondHourStartTimeFriTimeMenuEditValue(null);
    //    self.valSecondHourEndTimeFriTimeMenuEditValue(null);

    //    //Sat
    //    self.valFirstHourStartTimeSatTimeMenuEdit('');
    //    self.valFirstHourEndTimeSatTimeMenuEdit('');
    //    self.valSecondHourStartTimeSatTimeMenuEdit('');
    //    self.valSecondHourEndTimeSatTimeMenuEdit('');
    //    self.valFirstHourStartTimeSatTimeMenuEditValue(null);
    //    self.valFirstHourEndTimeSatTimeMenuEditValue(null);
    //    self.valSecondHourStartTimeSatTimeMenuEditValue(null);
    //    self.valSecondHourEndTimeSatTimeMenuEditValue(null);

    //    //AllDay
    //    self.valFirstHourStartTimeAllDaysTimeMenuEdit('');
    //    self.valFirstHourEndTimeAllDaysTimeMenuEdit('');
    //    self.valSecondHourStartTimeAllDaysTimeMenuEdit('');
    //    self.valSecondHourEndTimeAllDaysTimeMenuEdit('');
    //    self.valFirstHourStartTimeAllDaysTimeMenuEditValue(null);
    //    self.valFirstHourEndTimeAllDaysTimeMenuEditValue(null);
    //    self.valSecondHourStartTimeAllDaysTimeMenuEditValue(null);
    //    self.valSecondHourEndTimeAllDaysTimeMenuEditValue(null);

    //} else {
    //    var model = vmViewIndex.allSetTime;
    //    model.data([]);
    //    ko.mapping.fromJS(data, {}, model.data);

    //    //Active 24 Hours
    //    self.valActive24HourSunTimeMenuEdit(model.data()[0].active24Hour());
    //    self.valActive24HourMonTimeMenuEdit(model.data()[1].active24Hour());
    //    self.valActive24HourTueTimeMenuEdit(model.data()[2].active24Hour());
    //    self.valActive24HourWedTimeMenuEdit(model.data()[3].active24Hour());
    //    self.valActive24HourThuTimeMenuEdit(model.data()[4].active24Hour());
    //    self.valActive24HourFriTimeMenuEdit(model.data()[5].active24Hour());
    //    self.valActive24HourSatTimeMenuEdit(model.data()[6].active24Hour());

    //    self.hasShowSecondSunTimeMenuEdit(!model.data()[0].showSecondTime());
    //    self.hasShowSecondMonTimeMenuEdit(!model.data()[1].showSecondTime());
    //    self.hasShowSecondTueTimeMenuEdit(!model.data()[2].showSecondTime());
    //    self.hasShowSecondWedTimeMenuEdit(!model.data()[3].showSecondTime());
    //    self.hasShowSecondThuTimeMenuEdit(!model.data()[4].showSecondTime());
    //    self.hasShowSecondFriTimeMenuEdit(!model.data()[5].showSecondTime());
    //    self.hasShowSecondSatTimeMenuEdit(!model.data()[6].showSecondTime());

    //    //Check Box Show
    //    self.valSelectFirstSunTimeMenuEdit(model.data()[0].activeFirstPeriod());
    //    self.valSelectSecondSunTimeMenuEdit(model.data()[0].activeSecondPeriod());
    //    self.valSelectFirstMonTimeMenuEdit(model.data()[1].activeFirstPeriod());
    //    self.valSelectSecondMonTimeMenuEdit(model.data()[1].activeSecondPeriod());
    //    self.valSelectFirstTueTimeMenuEdit(model.data()[2].activeFirstPeriod());
    //    self.valSelectSecondTueTimeMenuEdit(model.data()[2].activeSecondPeriod());
    //    self.valSelectFirstWedTimeMenuEdit(model.data()[3].activeFirstPeriod());
    //    self.valSelectSecondWedTimeMenuEdit(model.data()[3].activeSecondPeriod());
    //    self.valSelectFirstThuTimeMenuEdit(model.data()[4].activeFirstPeriod());
    //    self.valSelectSecondThuTimeMenuEdit(model.data()[4].activeSecondPeriod());
    //    self.valSelectFirstFriTimeMenuEdit(model.data()[5].activeFirstPeriod());
    //    self.valSelectSecondFriTimeMenuEdit(model.data()[5].activeSecondPeriod());
    //    self.valSelectFirstSatTimeMenuEdit(model.data()[6].activeFirstPeriod());
    //    self.valSelectSecondSatTimeMenuEdit(model.data()[6].activeSecondPeriod());


    //    //Sun
    //    self.valFirstHourStartTimeSunTimeMenuEditValue(moment(model.data()[0].firstStartTime(), moment_time_format_hhmmss));
    //    self.valFirstHourEndTimeSunTimeMenuEditValue(moment(model.data()[0].firstEndTime(), moment_time_format_hhmmss));
    //    if (self.valActive24HourSunTimeMenuEdit() == true || !self.hasShowSecondSunTimeMenuEdit() == false || model.data()[0].secondStartTime() == null) {
    //        self.valSecondHourStartTimeSunTimeMenuEditValue(null);
    //        self.valSecondHourEndTimeSunTimeMenuEditValue(null);
    //    } else {
    //        self.valSecondHourStartTimeSunTimeMenuEditValue(moment(model.data()[0].secondStartTime(), moment_time_format_hhmmss));
    //        self.valSecondHourEndTimeSunTimeMenuEditValue(moment(model.data()[0].secondEndTime(), moment_time_format_hhmmss));
    //    }

    //    //Mon
    //    self.valFirstHourStartTimeMonTimeMenuEditValue(moment(model.data()[1].firstStartTime(), moment_time_format_hhmmss));
    //    self.valFirstHourEndTimeMonTimeMenuEditValue(moment(model.data()[1].firstEndTime(), moment_time_format_hhmmss));
    //    if (self.valActive24HourMonTimeMenuEdit() == true || !self.hasShowSecondMonTimeMenuEdit() == false || model.data()[1].secondStartTime() == null) {
    //        self.valSecondHourStartTimeMonTimeMenuEditValue(null);
    //        self.valSecondHourEndTimeMonTimeMenuEditValue(null);
    //    } else {
    //        self.valSecondHourStartTimeMonTimeMenuEditValue(moment(model.data()[1].secondStartTime(), moment_time_format_hhmmss));
    //        self.valSecondHourEndTimeMonTimeMenuEditValue(moment(model.data()[1].secondEndTime(), moment_time_format_hhmmss));
    //    }

    //    //Tue
    //    self.valFirstHourStartTimeTueTimeMenuEditValue(moment(model.data()[2].firstStartTime(), moment_time_format_hhmmss));
    //    self.valFirstHourEndTimeTueTimeMenuEditValue(moment(model.data()[2].firstEndTime(), moment_time_format_hhmmss));
    //    if (self.valActive24HourTueTimeMenuEdit() == true || !self.hasShowSecondTueTimeMenuEdit() == false || model.data()[2].secondStartTime() == null) {
    //        self.valSecondHourStartTimeTueTimeMenuEditValue(null);
    //        self.valSecondHourEndTimeTueTimeMenuEditValue(null);
    //    } else {
    //        self.valSecondHourStartTimeTueTimeMenuEditValue(moment(model.data()[2].secondStartTime(), moment_time_format_hhmmss));
    //        self.valSecondHourEndTimeTueTimeMenuEditValue(moment(model.data()[2].secondEndTime(), moment_time_format_hhmmss));
    //    }

    //    //Wed
    //    self.valFirstHourStartTimeWedTimeMenuEditValue(moment(model.data()[3].firstStartTime(), moment_time_format_hhmmss));
    //    self.valFirstHourEndTimeWedTimeMenuEditValue(moment(model.data()[3].firstEndTime(), moment_time_format_hhmmss));
    //    if (self.valActive24HourWedTimeMenuEdit() == true || !self.hasShowSecondWedTimeMenuEdit() == false || model.data()[3].secondStartTime() == null) {
    //        self.valSecondHourStartTimeWedTimeMenuEditValue(null);
    //        self.valSecondHourEndTimeWedTimeMenuEditValue(null);
    //    } else {
    //        self.valSecondHourStartTimeWedTimeMenuEditValue(moment(model.data()[3].secondStartTime(), moment_time_format_hhmmss));
    //        self.valSecondHourEndTimeWedTimeMenuEditValue(moment(model.data()[3].secondEndTime(), moment_time_format_hhmmss));
    //    }

    //    //Thu
    //    self.valFirstHourStartTimeThuTimeMenuEditValue(moment(model.data()[4].firstStartTime(), moment_time_format_hhmmss));
    //    self.valFirstHourEndTimeThuTimeMenuEditValue(moment(model.data()[4].firstEndTime(), moment_time_format_hhmmss));
    //    if (self.valActive24HourThuTimeMenuEdit() == true || !self.hasShowSecondThuTimeMenuEdit() == false || model.data()[4].secondStartTime() == null) {
    //        self.valSecondHourStartTimeThuTimeMenuEditValue(null);
    //        self.valSecondHourEndTimeThuTimeMenuEditValue(null);
    //    } else {
    //        self.valSecondHourStartTimeThuTimeMenuEditValue(moment(model.data()[4].secondStartTime(), moment_time_format_hhmmss));
    //        self.valSecondHourEndTimeThuTimeMenuEditValue(moment(model.data()[4].secondEndTime(), moment_time_format_hhmmss));
    //    }

    //    //Fri
    //    self.valFirstHourStartTimeFriTimeMenuEditValue(moment(model.data()[5].firstStartTime(), moment_time_format_hhmmss));
    //    self.valFirstHourEndTimeFriTimeMenuEditValue(moment(model.data()[5].firstEndTime(), moment_time_format_hhmmss));
    //    if (self.valActive24HourFriTimeMenuEdit() == true || !self.hasShowSecondFriTimeMenuEdit() == false || model.data()[5].secondStartTime() == null) {
    //        self.valSecondHourStartTimeFriTimeMenuEditValue(null);
    //        self.valSecondHourEndTimeFriTimeMenuEditValue(null);
    //    } else {
    //        self.valSecondHourStartTimeFriTimeMenuEditValue(moment(model.data()[5].secondStartTime(), moment_time_format_hhmmss));
    //        self.valSecondHourEndTimeFriTimeMenuEditValue(moment(model.data()[5].secondEndTime(), moment_time_format_hhmmss));
    //    }

    //    //Sat
    //    self.valFirstHourStartTimeSatTimeMenuEditValue(moment(model.data()[6].firstStartTime(), moment_time_format_hhmmss));
    //    self.valFirstHourEndTimeSatTimeMenuEditValue(moment(model.data()[6].firstEndTime(), moment_time_format_hhmmss));
    //    if (self.valActive24HourSatTimeMenuEdit() == true || !self.hasShowSecondSatTimeMenuEdit() == false || model.data()[6].secondStartTime() == null) {
    //        self.valSecondHourStartTimeSatTimeMenuEditValue(null);
    //        self.valSecondHourEndTimeSatTimeMenuEditValue(null);
    //    } else {
    //        self.valSecondHourStartTimeSatTimeMenuEditValue(moment(model.data()[6].secondStartTime(), moment_time_format_hhmmss));
    //        self.valSecondHourEndTimeSatTimeMenuEditValue(moment(model.data()[6].secondEndTime(), moment_time_format_hhmmss));
    //    }

    //    //AllDay
    //    self.valFirstHourStartTimeAllDaysTimeMenuEditValue(null);
    //    self.valFirstHourEndTimeAllDaysTimeMenuEditValue(null);
    //    self.valSecondHourStartTimeAllDaysTimeMenuEditValue(null);
    //    self.valSecondHourEndTimeAllDaysTimeMenuEditValue(null);
    //    if (self.valActive24HourAllDaysTimeMenuEdit() == true || !self.hasShowSecondAllDaysTimeMenuEdit() == false) {
    //        self.valSecondHourStartTimeAllDaysTimeMenuEditValue(null);
    //        self.valSecondHourEndTimeAllDaysTimeMenuEditValue(null);
    //    }

    //}//end else
    //End Modified by SMILEDINING-SA22-0034

} //time menu

//Added by SMILEDINING-SA22-0034
function DataValMultiHourTimeMenuViewModel(sorting) {
    var self = this;
    self.startTimeEdit = ko.observable('');
    self.endTimeEdit = ko.observable('');
    self.startTimeValue = ko.observable(null);
    self.endTimeValue = ko.observable(null);
    self.selectTimeMenuEdit = ko.observable(true);
    self.isShow = ko.observable(false);
    self.sorting = ko.observable(sorting);
};
//End Added by SMILEDINING-SA22-0034

function DataAllMapViewModel(dataAllMapModel) {
    //Modified by SMILEDINING-SA18-0021
    //var self = this;
    //var model = vmViewIndex.allMapZone;

    //ko.mapping.fromJS(dataAllMapModel.settingDictionaryMapZone, {}, model.settingDictionaryMapZone);
    //ko.mapping.fromJS(dataAllMapModel.settingDictionaryMapZonePrice, {}, model.settingDictionaryMapZonePrice);
    //ko.utils.arrayForEach(dataAllMapModel.listMapZoneMile, function (item) {
    //    model.listMapZoneMile.push(new DataMapZoneMile(item));
    //});

    //model.typeMap(vmViewIndex.globalConfig.shopMapCode());
    //var dataZone = model.settingDictionaryMapZone();
    //var dataZonePrice = model.settingDictionaryMapZonePrice();
    //var dataZoneMile = model.listMapZoneMile();
    //var datalat = parseFloat(vmViewIndex.globalConfig.shopLatitude());
    //var datalng = parseFloat(vmViewIndex.globalConfig.shopLongitude());

    //for (var key in dataZone) {
    //    if (dataZone.hasOwnProperty(key)) {
    //        model.tmpMapZone.push(new MapZoneData(parseFloat(key), dataZone[key](), dataZonePrice[key]()));
    //    }
    //}

    //model.mapZone.valueHasMutated();
    //model.switchMapZone({
    //    offText: "Set Mile",
    //    onText: "Draw Maps",
    //    width: "7rem",
    //    value: model.typeMap() == 0 ? true : false,
    //    onValueChanged: function (v) {
    //        if (v.value == true) {
    //            model.typeMap(0);  //mapZone
    //            getMap(_.first(vmViewIndex.allMapZone.mapZone()).MapZoneValue(), parseFloat(vmViewIndex.globalConfig.shopLatitude()), parseFloat(vmViewIndex.globalConfig.shopLongitude()), 1);
    //        } else {
    //            model.typeMap(1);  //mapZoneMile
    //        }
    //    }
    //});
    //getMap(_.first(model.mapZone()).MapZoneValue(), datalat, datalng, 1); //Default Load
    //End Modified by SMILEDINING-SA18-0021

    //Add by SMILEDINING-SA18-0021
    var self = this;

    vmViewIndex.allMapZone.listMapZoneMile([]);
    vmViewIndex.allMapZone.mapZone([]);

    ko.mapping.fromJS(dataAllMapModel.settingDictionaryMapZone, {}, vmViewIndex.allMapZone.settingDictionaryMapZone);
    ko.mapping.fromJS(dataAllMapModel.settingDictionaryMapZonePrice, {}, vmViewIndex.allMapZone.settingDictionaryMapZonePrice);

    //Added by SMILEDINING-SA20-0043
    ko.mapping.fromJS(dataAllMapModel.customMapZone.active, {}, vmViewIndex.allMapZone.tempActiveCustomMile);
    ko.mapping.fromJS(dataAllMapModel.customMapZone.mapZoneId, {}, vmViewIndex.allMapZone.tempCustomMileZone);
    ko.mapping.fromJS(dataAllMapModel.customMapZone.listCustomMile, {}, vmViewIndex.allMapZone.tempListValueCustom);
    //End Added by SMILEDINING-SA20-0043
    ko.mapping.fromJS(dataAllMapModel.minimumOrderDeliveryChargeList, {}, vmViewIndex.allMapZone.tempMinimumOrderDeliveryChargeList); //Added and End by WEB-SA22-0040

    ko.utils.arrayForEach(dataAllMapModel.listMapZoneMile, function (item) {
        vmViewIndex.allMapZone.listMapZoneMile.push(new DataMapZoneMile(item));
    });

    vmViewIndex.allMapZone.typeMap(vmViewIndex.globalConfig.shopMapCode());
    var dataZone = vmViewIndex.allMapZone.settingDictionaryMapZone();
    var dataZonePrice = vmViewIndex.allMapZone.settingDictionaryMapZonePrice();
    var dataZoneMile = vmViewIndex.allMapZone.listMapZoneMile();
    var datalat = parseFloat(vmViewIndex.globalConfig.shopLatitude());
    var datalng = parseFloat(vmViewIndex.globalConfig.shopLongitude());

    for (var key in dataZone) {
        if (dataZone.hasOwnProperty(key)) {
            //vmViewIndex.allMapZone.mapZone.push(new MapZoneData(parseFloat(key), dataZone[key](), dataZonePrice[key]())); //Modified and End by SMILEDINING-SA22-0037
            //Added by SMILEDINING-SA22-0037
            var dispatchTypeId = 0;
            _.forEach(dataAllMapModel.allMapZone, function (item) {
                var mapZoneId = item.mapZoneId;
                if (key == '1' && mapZoneId == 'ossTmQI3qBU=') {
                    dispatchTypeId = item.dispatchTypeId;
                    return false;
                } else if (key == '2' && mapZoneId == 'Srd8o2evE8g=') {
                    dispatchTypeId = item.dispatchTypeId;
                    return false;
                } else if (key == '3' && mapZoneId == '7+nsa1QoqPY=') {
                    dispatchTypeId = item.dispatchTypeId;
                    return false;
                }
            });
            vmViewIndex.allMapZone.mapZone.push(new MapZoneData(parseFloat(key), dataZone[key](), dataZonePrice[key](), dispatchTypeId)); 
            //End Added by SMILEDINING-SA22-0037
        }
    }

    vmViewIndex.allMapZone.mapZone.valueHasMutated();
    vmViewIndex.allMapZone.switchMapZone({
        offText: "Set Mile",
        onText: "Draw Maps",
        width: "7rem",
        value: vmViewIndex.allMapZone.typeMap() == 0 ? true : false,
        onValueChanged: function (v) {
            if (v.value == true) {
                vmViewIndex.allMapZone.typeMap(0);  //mapZone
                getMap(_.first(vmViewIndex.allMapZone.mapZone()).MapZoneValue(), parseFloat(vmViewIndex.globalConfig.shopLatitude()), parseFloat(vmViewIndex.globalConfig.shopLongitude()), 1);
            } else {
                vmViewIndex.allMapZone.typeMap(1);  //mapZoneMile
            }
        }
    });
    getMap(_.first(vmViewIndex.allMapZone.mapZone()).MapZoneValue(), datalat, datalng, 1); //Default Load
    //End Add by SMILEDINING-SA18-0021

    //Added By SMILEDINING-SA19-0005  
    ko.utils.arrayForEach(dataAllMapModel.allMapZone, function (item) {

        if (item.mapZoneDesc.includes("Delivery Zone 1")) {
            vmViewIndex.allMapZone.mapZone1Id(item.mapZoneId);
        }
        else if (item.mapZoneDesc.includes("Delivery Zone 2")) {
            vmViewIndex.allMapZone.mapZone2Id(item.mapZoneId);
        }
        else if (item.mapZoneDesc.includes("Delivery Zone 3")) {
            vmViewIndex.allMapZone.mapZone3Id(item.mapZoneId);
        }
    });

    ko.utils.arrayForEach(dataAllMapModel.listDeliveryFreeTime, function (item) {
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
    });
    //End Added by SMILEDINING-SA19-0005
    vmViewIndex.allMapZone.checkDataSourceDeliveryBy(); //Added and End by SMILEDINING-SA22-0037

};

function DataMapZoneMile(data) {
    var self = this;
    self.mileId = ko.observable(data.mileId);
    self.mapZoneId = ko.observable(data.mapZoneId);
    self.startMile = ko.observable(data.startMile).extend({ numeric: 2 });
    self.endMile = ko.observable(data.endMile).extend({ numeric: 2 });
    self.price = ko.observable(data.price).extend({ numeric: 2 });
    self.dispatchTypeId = ko.observable(data.dispatchTypeId); //Added and End by SMILEDINING-SA22-0037
};

//Added by WEB-SA22-0040
function DataMinimumOrderDeliveryChargeViewModel(data) {
    var self = this;
    if (isEmpty(data)) {
        self.minimumOrderDeliveryChargeId = ko.observable(0);
        self.minimumOrder = ko.observable(0).extend({ numeric: 2 });
        self.maximumOrder = ko.observable(0).extend({ numeric: 2 });
        self.deliveryChargeAmount = ko.observable(0).extend({ numeric: 2 });
        //Added by WEB-SA23-0016
        self.valSelectMapZone = ko.observableArray(['1','2','3']);
        self.mapZone = ko.pureComputed(function () { 
            return self.valSelectMapZone().sort(function (a, b) { return parseInt(a) - parseInt(b) }).toString();
        });
        //End Added by WEB-SA23-0016
        self.active = ko.observable(false);
        self.visible = ko.observable(true);
        self.switchActive = createSwitchActive(self.active);
    } else {
        self.minimumOrderDeliveryChargeId = ko.observable(data.minimumOrderDeliveryChargeId());
        self.minimumOrder = ko.observable(data.minimumOrder()).extend({ numeric: 2 });
        self.maximumOrder = ko.observable(data.maximumOrder()).extend({ numeric: 2 });
        self.deliveryChargeAmount = ko.observable(data.deliveryChargeAmount()).extend({ numeric: 2 });
        //Added by WEB-SA23-0016
        self.valSelectMapZone = ko.observableArray(!isEmpty(data.mapZone()) ? data.mapZone().split(',') : ['1','2','3']);
        self.mapZone = ko.pureComputed(function () { 
            return self.valSelectMapZone().sort(function (a, b) { return parseInt(a) - parseInt(b) }).toString();
        });
        //End Added by WEB-SA23-0016
        self.active = ko.observable(data.active());
        self.visible = ko.observable(data.visible());
        self.switchActive = createSwitchActive(self.active);
    }

    function createSwitchActive(value) {
        return {
            offText: 'NO',
            onText: 'YES',
            value: value,
            width: switchActiveWidth55px,
            onValueChanged: function (item) {
                if (item.value == true) {
                    value(true);
                    //Added by WEB-SA23-0016
                    var id = !isEmpty(item.element.context.id) ? item.element.context.id : '1';
                    var dataTagBox = $(`#${cfrmUpdateMinimumOrderDeliveryCharge} .divMinimumOrder #dxTagBox_${id}`).dxTagBox('instance');
                    dataTagBox.repaint();
                    //End Added by WEB-SA23-0016
                } else {
                    value(false);
                }
            }
        }
    }
}
//End Added by WEB-SA22-0040

//Added by SMILEDINING-SA20-0006
function DataSettingViewModel(globalConfig) {
    var self = this;
    var isMultiProduct = false;
    var isSmileDining = true;
    var productId = filterGlobalConfig(globalConfig, 'productID');
    var arrProductId = productId.split(',');

    isMultiProduct = checkMultiProduct(arrProductId);
    isSmileDining = checkIsSmileDining(arrProductId);

    vmViewIndex.allSetting.isMultiProduct(isMultiProduct);
    vmViewIndex.allSetting.isSmileDining(isSmileDining);
    vmViewIndex.allSetting.productIds(arrProductId); //Added and End by WEB-SA23-0001
    self.isSmileDining = ko.observable(isSmileDining);
};

function checkMultiProduct(arrProductId) {
    var isMultiProduct = false;
    if (arrProductId.includes(products.cSmileDining) && arrProductId.includes(products.cSmileContactless)) {
        isMultiProduct = true;
    }
    return isMultiProduct;
};

function checkIsSmileDining(arrProductId) {
    var isSmileDining = true;
    if (arrProductId.includes(products.cSmileDining)) {
        isSmileDining = true;
    }
    else {
        isSmileDining = false;
    }
    return isSmileDining;
};
//End Added by SMILEDINING-SA20-0006

function DataGlobalConfigViewModel(globalConfig) {
    var self = this;
    var model = vmViewIndex.globalConfig;
    model.shopNumber(filterGlobalConfig(globalConfig, gcShopNumber));
    model.shopName(filterGlobalConfig(globalConfig, gcShopName));
    model.shopCode(filterGlobalConfig(globalConfig, gcShopCode));
    model.shopStreet(filterGlobalConfig(globalConfig, gcShopStreet));
    model.shopZipCode(filterGlobalConfig(globalConfig, gcShopPostal));
    model.shopPhone(getPhoneFormatUs(filterGlobalConfig(globalConfig, gcShopPhone)));
    model.shopBroad(filterGlobalConfig(globalConfig, gcShopBroad));

    /* Added By SMILEDINING-SA19-0004 */
    model.shopHeader(filterGlobalConfig(globalConfig, gcAnnounceHeader));
    model.shopBadge(filterGlobalConfig(globalConfig, gcAnnounceBadge));
    model.shopActive(filterGlobalConfig(globalConfig, gcAnnounceActive));
    model.shopAnnounceImage(filterGlobalConfig(globalConfig, gcAnnounceImage));

    //Added by SMILEDINING-SA20-0028
    model.shopAnnounceCustomImage(filterGlobalConfig(globalConfig, 'broad-custom-image'));
    model.shopAnnounceCustomActive(filterGlobalConfig(globalConfig, 'broad-custom-active'));
    //End Added by SMILEDINING-SA20-0028

    if (model.shopActive() == "") {
        model.hasAnnounceData(false);
    }
    else {
        model.hasAnnounceData(true);
    }

    if (isEmpty(model.shopActive())) {
        vmViewIndex.allSetting.checkHaveScript(false);
    }

    if (model.shopActive() == "1") {
        vmViewIndex.allSetting.showActive(true);
    } else {
        vmViewIndex.allSetting.showActive(false);
    }

    //Added by SMILEDINING-SA20-0028
    //if (model.shopAnnounceCustomActive() == '0') {
    //    model.hasAnnounceData(false);
    //}
    //else {
    //    model.hasAnnounceData(true);
    //}

    if (isEmpty(model.shopAnnounceCustomActive())) {
        vmViewIndex.allSetting.checkHaveScript(false);
    }

    if (model.shopAnnounceCustomActive() == '1') {
        vmViewIndex.allSetting.showAnnounceCustomActive(true);
    } else {
        vmViewIndex.allSetting.showAnnounceCustomActive(false);
    }

    if (model.shopAnnounceCustomImage() == "" || model.shopAnnounceCustomImage() == null)
        model.delAnnounceCustomImage(false);
    else
        model.delAnnounceCustomImage(true);

    //End Added by SMILEDINING-SA20-0028

    if (model.shopAnnounceImage() == "" || model.shopAnnounceImage() == null)
        model.delAnnounceImage(false);
    else
        model.delAnnounceImage(true);
    /* End Added By SMILEDINING-SA19-0004 */

    //Added by SMILEDINING-SA20-0003
    model.orderLimit(filterGlobalConfig(globalConfig, gcOrderLimit));
    vmViewIndex.allSetting.showOrderLimit(model.orderLimit() === '1' || model.orderLimit() === '2');
    //End Added by SMILEDINING-SA20-0003
    //Added by SMILEDINING-SA21-0025
    model.topic(filterGlobalConfig(globalConfig, 'utensils-topic'));
    model.question(filterGlobalConfig(globalConfig, 'utensils-question'));
    model.descriptionSelect(filterGlobalConfig(globalConfig, 'utensils-description-select'));
    model.descriptionNotSelect(filterGlobalConfig(globalConfig, 'utensils-description-not-select'));

    model.addPrice(filterGlobalConfig(globalConfig, 'utensils-price'));
    vmViewIndex.allSetting.addPrice(model.addPrice() == '' ? 0.00 : parseFloat(model.addPrice()).toFixed(2));

    model.autoSelect(filterGlobalConfig(globalConfig, 'utensils-auto-select'));
    vmViewIndex.allSetting.autoSelectUtensils(model.autoSelect() == '' ? false : model.autoSelect() == '0' ? false : true);

    model.showUtensils(filterGlobalConfig(globalConfig, 'utensils-show'));
    vmViewIndex.allSetting.showUtensils(model.showUtensils() == '' ? false : model.showUtensils() == '0' ? false : true);
    //End Added by SMILEDINING-SA21-0025

    //Added by WEB-SA22-0068
    model.foodSetAutoHide(filterGlobalConfig(globalConfig, 'foodset-auto-hide'));
    vmViewIndex.allSetting.foodSetAutoHide(model.foodSetAutoHide() == '' ? false : model.foodSetAutoHide() == '0' ? false : true);
    //End Added by WEb-SA22-0068

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
    cPathGiftCardImage = cProtocal + '://' + 'img.smiledining.com' + '/' + model.shopCode() + '/GIFTCER/' + typeImage + '/'


    //cPathGiftCardImage = 'file://C' + ':' + '/DVIMAGE/' + model.shopCode() + '/GIFTCER/' + typeImage + '/';
    //End Added by SMILEDINING-SA19-0011

    model.currentDateTime(filterGlobalConfig(globalConfig, 'currentDateTime'));     //Added and End by SMILEDINING-SA19-0008

    model.timeStartPickup(filterGlobalConfig(globalConfig, gcTimePickupStart));
    model.timeEndPickup(filterGlobalConfig(globalConfig, gcTimePickupEnd));
    model.timeStartDelivery(filterGlobalConfig(globalConfig, gcTimeDeliveryStart));
    model.timeEndDelivery(filterGlobalConfig(globalConfig, gcTimeDeliveryEnd));
    model.shopLatitude(filterGlobalConfig(globalConfig, gcShopMapLat));
    model.shopLongitude(filterGlobalConfig(globalConfig, gcShopMapLng));
    model.shopMapCode(filterGlobalConfig(globalConfig, gcShopMapCode));
    model.shopDeliveryTax(filterGlobalConfig(globalConfig, gcShopDeliveryTax));
    model.payByCash(filterGlobalConfig(globalConfig, gcPayByCash));
    model.payByCredit(filterGlobalConfig(globalConfig, gcPayByCredit));
    model.minimumOrder(parseFloat(filterGlobalConfig(globalConfig, gcCalminumumOrder)));
    //model.shopOpen(shopStatus(filterGlobalConfig(globalConfig, gcShopStatus)));        //Modified and End by SMILEDINING-SA20-0006   
    model.shopCloseReason(filterGlobalConfig(globalConfig, gcShopCloseReason));
    model.shopPeriodTime(filterGlobalConfig(globalConfig, gcShopPeriodTime));
    //Added by SMILEDINING-SA21-0005
    model.shopPeriodTimePickup(filterGlobalConfig(globalConfig, 'shop-period-time-pickup'));
    model.shopPeriodTimeDelivery(filterGlobalConfig(globalConfig, 'shop-period-time-delivery'));
    //End Added by SMILEDINING-SA21-0005
    model.shopLogo(filterGlobalConfig(globalConfig, gcShopLogo));
    model.shopBackground(filterGlobalConfig(globalConfig, 'shop-background')); //Added and End by SMILEDINING-SA21-0035
    model.shopLastUpdate(filterGlobalConfig(globalConfig, gcShopLastUpdate));
    model.showGuestCheckOut(filterGlobalConfig(globalConfig, 'show-guest-checkout'));   //Added and End by SMILEDINING-SA21-0002
    model.calTax(filterGlobalConfig(globalConfig, gcCalTax));
    model.shopTimeZoneCode(filterGlobalConfig(globalConfig, gcShopTimeZoneCode));
    model.shipmentType(getShippingType(filterGlobalConfig(globalConfig, gcShippingType)));
    model.tipsDesc(filterGlobalConfig(globalConfig, gcTipsDesc)); //Added and End By SMILEDINING-SA18-0020
    model.tipGuide(filterGlobalConfig(globalConfig, 'tip-guide')); //Added and End by SMILEDINING-SA20-0006
    model.themeColor(filterGlobalConfig(globalConfig, gcThemeColor)); //Added and End by SMILEDINING-SA18-0029
    model.tipsAuto(filterGlobalConfig(globalConfig, 'tip-auto')); //Added and End By SMILEDINING-SA20-0032
    //Added by SMILEDINING-SA19-0002
    model.tipsDescForStore(filterGlobalConfig(globalConfig, gcTipsDescForStore));
    model.tipsDescForCredit(filterGlobalConfig(globalConfig, gcTipsDescForCredit));
    model.customButtonPayAtStore(filterGlobalConfig(globalConfig, gcCustomButtonPayAtStore));
    model.customButtonCredit(filterGlobalConfig(globalConfig, gcCustomButtonCredit));
    model.customSpecialInstructions(filterGlobalConfig(globalConfig, gcCustomSpecialInstructions));
    model.orderLimit(filterGlobalConfig(globalConfig, gcOrderLimit));   //Added and End by SMILEDINING-SA20-0003
    //Added by SMILEDINING-SA21-0053
    model.customButtonPickup(filterGlobalConfig(globalConfig, 'custom-button-type-pickup'));
    model.customButtonDelivery(filterGlobalConfig(globalConfig, 'custom-button-type-delivery'));
    //End Added by SMILEDINING-SA21-0053
    model.isShopInfo(filterGlobalConfig(globalConfig, 'shop-info')); //Added and End by SMILEDINING-SA21-0083
    //Added by SMILEDINING-SA20-0006
    var smileContactless = filterGlobalConfig(globalConfig, 'smileContactless');
    if (smileContactless == true) {
        model.shopOpenContactless(shopStatus(filterGlobalConfig(globalConfig, gcShopStatus)));
    }
    else {
        model.shopOpen(shopStatus(filterGlobalConfig(globalConfig, gcShopStatus)));
    }
    var arr = model.tipGuide().split(',');
    model.tipGuideArray(arr);
    model.showTipGuidePlus(arr.length == 4 ? false : true);
    model.showTipGuideMinus(arr.length == 1 ? false : true);
    updateTipGuideTable(model.tipGuideArray());
    //End Added by SMILEDINING-SA20-0006
    //Modified by SMILEDINING-SA21-0083#1
    //Added by SMILEDINING-SA21-0083
    //if (model.isShopInfo() == "1" || model.isShopInfo() == "") {
    //    vmViewIndex.allSetting.valueShopInfo(true);
    //} else {
    //    vmViewIndex.allSetting.valueShopInfo(false);
    //}
    //End Added by SMILEDINING-SA21-0083
    //End Modified by SMILEDINING-SA21-0083#1
    //Added by SMILEDINING-SA21-0083#1
    if (model.isShopInfo() == "1") {
        vmViewIndex.allSetting.valueShopInfo(true);
    } else if (model.isShopInfo() == "0"){
        vmViewIndex.allSetting.valueShopInfo(false);
    }
    //End Added by SMILEDINING-SA21-0083#1
    //Added by SMILEDINING-SA20-0032
    model.dataTipsGuideAuto([]);
    model.dataTipsGuideAuto.push('Off');
    ko.utils.arrayForEach(model.tipGuideArray(), function (data) {
        model.dataTipsGuideAuto.push(data + '');
    });
    model.selectTipGuideAuto({
        dataSource: new DevExpress.data.ArrayStore({
            data: model.dataTipsGuideAuto(),
        }),
        value: model.tipsAuto() == '' ? 'Off' : model.tipsAuto(),
        onValueChanged: function (v) {
            model.tipsAuto(v.value);
            setTipsAuto(v.value);
        }
    });
    //End Added by SMILEDINING-SA20-0032

    //Added by SMILEDINING-SA19-0017
    var shopCloseStartDate = filterGlobalConfig(globalConfig, gcShopCloseStartDate);
    if (shopCloseStartDate.length > 0)
        //shopCloseStartDate = moment(shopCloseStartDate).format(moment_date_format_mmddyyyy);      //Modified and End by SMILEDINING-SA20-0037
        shopCloseStartDate = moment(shopCloseStartDate, moment_date_format_yyyymmddthhmmss).format(moment_date_format_yyyymmdd);    //Added and End by SMILEDINING-SA20-0037

    var shopCloseEndDate = filterGlobalConfig(globalConfig, gcShopCloseEndDate);
    if (shopCloseEndDate.length > 0)
        //shopCloseEndDate = moment(shopCloseEndDate).format(moment_date_format_mmddyyyy);      //Modified and End by SMILEDINING-SA20-0037
        shopCloseEndDate = moment(shopCloseEndDate, moment_date_format_yyyymmddthhmmss).format(moment_date_format_yyyymmdd);    //Added and End by SMILEDINING-SA20-0037

    model.shopCloseStartDate(shopCloseStartDate);
    model.shopCloseEndDate(shopCloseEndDate);
    model.startDate(shopCloseStartDate);
    model.endDate(shopCloseEndDate);
    //model.currentDate = ko.observable(moment(model.currentDateTime()).format('MM/DD/YYYY'));      //Modified and End by SMILEDINING-SA20-0037
    model.currentDate(moment(model.currentDateTime(), moment_date_format_mmddyyyyhhmmssa).format(moment_date_format_yyyymmdd));    //Added and End by SMILEDINING-SA20-0037   

    model.shippingType(filterGlobalConfig(globalConfig, gcShippingType));
    //Modified by SMILEDINING-SA20-0006
    //if (model.shopOpen()) {
    //    model.txtShopOpen('OPEN');
    //    model.isShopOpen(true);
    //} else {
    //    model.txtShopOpen('CLOSE');
    //    model.isShopOpen(false);
    //}
    //End Modified by SMILEDINING-SA20-0006
    //Added by SMILEDINING-SA20-0006
    if (smileContactless == '') {
        if (model.shopOpen()) {
            model.txtShopOpen('OPEN');
            model.isShopOpen(true);
        } else {
            model.txtShopOpen('CLOSE');
            model.isShopOpen(false);
        }
    }
    if (smileContactless == true) {
        if (model.shopOpenContactless()) {
            model.txtShopOpenContactless('OPEN');
            model.isShopOpenContactless(true);
        } else {
            model.txtShopOpenContactless('CLOSE');
            model.isShopOpenContactless(false);
        }
    }
    //End Added by SMILEDINING-SA20-0006
    self.computeMinEndDate = ko.pureComputed(function () {
        if (isEmpty(model.startDate())) {
            return model.currentDate();
        }
        else if (moment(model.startDate()).isAfter(model.currentDate())) {
            return model.startDate();
        }
        else {

            return model.currentDate();
        }
    });
    model.switchShopOpen({
        offText: 'Close',
        onText: 'Open',
        value: model.shopOpen,
        width: 80,
        onValueChanged: function (item) {
            if (item.value == true) {
                model.txtShopOpen('OPEN');
                model.isShopOpen(true);
            } else {
                model.txtShopOpen('CLOSE');
                model.isShopOpen(false);
            }
        }
    });
    model.dxShopCloseStart({
        value: model.startDate,
        width: 'auto',
        pickerType: 'calendar',
        type: 'date',
        min: model.currentDate,
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (target) {
            if (target.value)
                //model.startDate(moment(target.value).format(moment_date_format_mmddyyyy));    //Modified and End by SMILEDINING-SA20-0037
                model.startDate(moment(target.value, moment_date_format_yyyymmdd).format(moment_date_format_yyyymmdd));  //Added and End SMILEDINING-SA20-0037
            else
                model.startDate('');
        },
    });
    model.dxShopCloseEnd({
        value: model.endDate,
        width: 'auto',
        pickerType: 'calendar',
        type: 'date',
        min: self.computeMinEndDate,
        displayFormat: 'MM-dd-yyyy',
        onValueChanged: function (target) {
            if (target.value)
                //model.endDate(moment(target.value).format(moment_date_format_mmddyyyy));      //Modified and End by SMILEDINING-SA20-0037
                model.endDate(moment(target.value, moment_date_format_yyyymmdd).format(moment_date_format_yyyymmdd));    //Added and End by SMILEDINING-SA20-0037
            else
                model.endDate('');
        },
    });
    vmViewIndex.allSetting.shippingType(model.shippingType());
    if (model.shippingType() == 0) {
        vmViewIndex.allSetting.isPickup(true);
        vmViewIndex.allSetting.isDelivery(false);
        vmViewIndex.allSetting.isPickupDelivery(false);
    }
    else if (model.shippingType() == 1) {
        vmViewIndex.allSetting.isPickup(false);
        vmViewIndex.allSetting.isDelivery(true);
        vmViewIndex.allSetting.isPickupDelivery(false);
    }
    else if (model.shippingType() == 2) {
        vmViewIndex.allSetting.isPickup(false);
        vmViewIndex.allSetting.isDelivery(false);
        vmViewIndex.allSetting.isPickupDelivery(true);
    }
    else {
        vmViewIndex.allSetting.isPickup(false);
        vmViewIndex.allSetting.isDelivery(false);
        vmViewIndex.allSetting.isPickupDelivery(false);
        vmViewIndex.allSetting.shippingType('2');
    }
    //End Added by SMILEDINING-SA19-0017  

    //Added by SMILEDINING-SA21-0002
    vmViewIndex.allSetting.showGuestCheckOut(model.showGuestCheckOut());
    vmViewIndex.allSetting.isShowGuestCheckOut(model.showGuestCheckOut() == '1' ? true : false);
    //End Added by SMILEDINING-SA21-0002

    //if (isEmpty(model.tipsDescForStore()) && isEmpty(model.tipsDescForCredit()) && isEmpty(model.customButtonPayAtStore()) && isEmpty(model.customButtonCredit()) && isEmpty(model.customSpecialInstructions())) { //Modified and End by SMILEDINING-SA21-0053
    if (isEmpty(model.tipsDescForStore()) && isEmpty(model.tipsDescForCredit()) && isEmpty(model.customButtonPayAtStore()) && isEmpty(model.customButtonCredit()) && isEmpty(model.customSpecialInstructions() && isEmpty(model.customButtonPickup()) && isEmpty(model.customButtonDelivery()) )) { //Added and End by SMILEDINING-SA21-0053
        vmViewIndex.allSetting.checkHaveScript(false);
    }

    if (model.tipsDescForStore() == "1")
        vmViewIndex.allSetting.showTipsDescForStore(true);
    else
        vmViewIndex.allSetting.showTipsDescForStore(false);

    if (model.tipsDescForCredit() == "1")
        vmViewIndex.allSetting.showTipsDescForCredit(true);
    else
        vmViewIndex.allSetting.showTipsDescForCredit(false);

    if (isEmpty(model.customButtonPayAtStore()))
        model.customButtonPayAtStore(cDefaultCustomButtonPayAtStore);
    if (isEmpty(model.customButtonCredit()))
        model.customButtonCredit(cDefaultCustomButtonPayCredit);
    if (isEmpty(model.customSpecialInstructions()))
        model.customSpecialInstructions(cDefaultCustomSpecialInstruction);
    //End Added by SMILEDINING-SA19-0002
    //Added by SMILEDINING-SA21-0053
    if (isEmpty(model.customButtonPickup()))
        model.customButtonPickup(cDefaultCustomButtonPickup);
    if (isEmpty(model.customButtonDelivery()))
        model.customButtonDelivery(cDefaultCustomButtonDelivery);
    //End Added by SMILEDINING-SA21-0053
    //Added By SMILEDINING-SA18-0003
    model.specialInstructions(filterGlobalConfig(globalConfig, gcSpecialInstructions));
    if (model.specialInstructions() == "1") {
        //vmViewIndex.allSetting.show(true); //Modified and End by WEB-SA23-0037
        vmViewIndex.allSetting.valSwitchSpecialInstructions(true); //Added and End by WEB-SA23-0037
    } else {
        //vmViewIndex.allSetting.show(false); //Modified and End by WEB-SA23-0037
        vmViewIndex.allSetting.valSwitchSpecialInstructions(false); //Added and End by WEB-SA23-0037
    }
    //End Added By SMILEDINING-SA18-0003
    //Added by WEB-SA23-0037
    model.specialInstructionsForTicket(filterGlobalConfig(globalConfig, gcSpecialInstructionsForTicket));
    if (model.specialInstructionsForTicket() == "1") {
        vmViewIndex.allSetting.valSwitchSpecialInstructionsForTicket(true);
    } else {
        vmViewIndex.allSetting.valSwitchSpecialInstructionsForTicket(false);
    }
    //End Added by WEB-SA23-0037
    //Added by SMILEDINING-SA21-0055#2
    model.allowJoinTicket(filterGlobalConfig(globalConfig, 'allow-join-ticket'));
    if (model.allowJoinTicket() == "1") {
        vmViewIndex.allSetting.allowJoinTicketContactless(true);
    } else {
        vmViewIndex.allSetting.allowJoinTicketContactless(false);
    }
    //End Added by SMILEDINING-SA21-0055#2
    //Added by SMILEDINING-SA21-0035#8
    model.showPartySize(filterGlobalConfig(globalConfig, 'contactless-show-party-size'));
    if (model.showPartySize() == "1") {
        vmViewIndex.allSetting.showPartySizeContactless(true);
    } else {
        vmViewIndex.allSetting.showPartySizeContactless(false);
    }
    //End Added by SMILEDINING-SA21-0035#8
    //Added by SMILEDINING-SA20-0015
    model.showCurbsidePickup(filterGlobalConfig(globalConfig, gcShowCurbsidePickup));
    if (model.showCurbsidePickup() == '')
        model.showCurbsidePickup('0');
    if (model.showCurbsidePickup() == '0') {
        vmViewIndex.allSetting.showCurbside(false);
    }
    else {
        vmViewIndex.allSetting.showCurbside(true);
    }
    model.customCurbsideInstruction(filterGlobalConfig(globalConfig, gcCustomCurbsideInstruction));
    if (model.customCurbsideInstruction() == '')
        model.customCurbsideInstruction(cCurbsideInstructionDefault);
    //End Added by SMILEDINING-SA20-0015

    //Added by WEB-SA24-0016
    model.notificationCustomer(filterGlobalConfig(globalConfig, 'notification-customer'));
    if (model.notificationCustomer() == '1') {
        vmViewIndex.allSetting.valSwitchNotificationCustomer(true);
    } else {
        vmViewIndex.allSetting.valSwitchNotificationCustomer(false);
    }
    //End Added by WEB-SA24-0016

    //Modified by Modified SMILEDINING-SA19-0004
    //if (model.shopLogo().length > 0) {
    //    model.shopLogo(cProtocal + '://' + 'img.smiledining.com' + '/' + model.shopCode() + '/' + model.shopLogo());
    //}
    //End Modified by SMILEDINING-SA19-0004

    //Added By SMILEDINING-SA19-0004
    if (model.shopLogo() == "" || model.shopLogo() == null)
        model.delShopLogo(false);
    else
        model.delShopLogo(true);
    //End Added By SMILEDINING-SA19-0004
    //Added by SMILEDINING-SA21-0035
    if (model.shopBackground() == "" || model.shopBackground() == null)
        model.delShopBackground(false);
    else
        model.delShopBackground(true);
    //End Added by SMILEDINING-SA21-0035

    model.selectBoxTimeZoneCode(model.shopTimeZoneCode());
    model.shopTimeZoneCode({
        dataSource: new DevExpress.data.ArrayStore({
            data: vmViewIndex.globalConfig.allTimeZone(),
            key: 'timeZoneCode',
        }),
        dropDownButtonTemplate: 'dropDownButton',
        displayExpr: getDisplayExpr,
        valueExpr: 'timeZoneCode',
        value: model.selectBoxTimeZoneCode,
        searchEnabled: true,
        onValueChanged: function (v) {
            var filterData = ko.utils.arrayFilter(vmViewIndex.globalConfig.allTimeZone(), function (item) {
                return item.timeZoneCode() == v.value;
            });
            var data = _.first(filterData);
            model.selectBoxTimeZoneCode(data.timeZoneCode());
            model.shopTimeZoneCode().value = v.value;
        }
    });
    function getDisplayExpr(item) {
        if (!item) {
            return "";
        }
        //return item.name() + " " + item.time();       //Modified and End by SMILEDINING-SA18-0038
        return item.name(); //Added and End by SMILEDINING-SA18-0038
    }

    //Added by SMILEDINING-SA22-0037
    var filterDispatchType = filterGlobalConfig(globalConfig, 'dispatch-type');
    var filterDispatchTypeDesc = getDispatchTypeDesc(globalConfig);
    if (!isEmpty(filterDispatchType))
        model.dispatchType(filterDispatchType);
    if (!isEmpty(filterDispatchTypeDesc))
        model.dispatchTypeDesc(filterDispatchTypeDesc); 
    //End Added by SMILEDINING-SA22-0037
    //Added by WEB-SA23-0026
    var filterAutoSyncProduct = filterGlobalConfig(globalConfig, 'deliverect-autosync-product');
    if (!isEmpty(filterAutoSyncProduct))
        model.autoSyncProduct(filterAutoSyncProduct == '1');
    //End Added by WEB-SA23-0026
};

function getMap(zone, lat, lng, mapNumber) {
    var drawingManager;
    var polygon;
    var polygonIndex = new google.maps.MVCArray;

    var options = new function () {
        //map
        this.divId = '';
        this.zoom = 13;
        this.lat = lat;
        this.lng = lng;
        this.disableDefaultUI = true;
        this.zoomControl = true;
        this.scrollwheel = false;
        //mark
        this.icon = cGooGleMapMarkerIcon;
    };

    function clearPoint() {
        polygonIndex.clear();
    }

    function initialize(opt, zone) {
        var colorStroke = '#FF8C00';
        var colorFill = '#32CD32';
        var map = new google.maps.Map((opt.divId), {
            zoom: opt.zoom,
            center: { lat: opt.lat, lng: opt.lng },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: opt.disableDefaultUI,
            zoomControl: opt.zoomControl,
            scrollwheel: opt.scrollwheel,
            panControl: true
        });

        var bounds = new google.maps.LatLngBounds();

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(opt.lat, opt.lng),
            map: map,
            icon: opt.icon,
            title: opt.title
        });

        var polyOptions = {
            strokeWeight: 1,
            fillOpacity: 0.45,
            editable: true,
            strokeColor: colorStroke,
            fillColor: colorFill
        };

        // Creates a drawing manager attached to the map that allows the user to draw
        // markers, lines, and shapes.
        drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYGON,
            drawingControl: false,  //hide control
            polygonOptions: polyOptions,
            map: map
        });

        drawingManager.setMap(map);

        polygon = new google.maps.Polygon({
            strokeWeight: 1,
            fillOpacity: 0.45,
            editable: true,
            strokeColor: colorStroke,
            fillColor: colorFill
        });

        polygon.setMap(map);
        polygon.setPaths(new google.maps.MVCArray([polygonIndex]));

        if (zone.length > 0) {
            clearPoint();
            var coords = zone.split(" ");
            for (var i = 0; i < coords.length; i++) {
                var coord = coords[i].split(",");
                if (_.first(coord).length > 0) {
                    var point = new google.maps.LatLng(parseFloat(_.first(coord)), parseFloat(coord[1]));
                    polygonIndex.insertAt(polygonIndex.length, point);
                    bounds.extend(point);
                }
            }
        }
        drawingManager.setDrawingMode(null);
        google.maps.event.addListener(map, 'click', addPoint.bind(this));
        google.maps.event.addListener(polygon, 'rightclick', removePoint.bind(this));

        function addPoint(event) {
            polygonIndex.insertAt(polygonIndex.length, event.latLng);
        };

        function removePoint(event) {
            if (event.vertex != undefined) {
                polygonIndex.removeAt(event.vertex);
            }
        };
    };

    function save() {
        var totalPoint = '';

        polygon.getPath().forEach(function (point, i) {
            totalPoint += point.lat() + "," + point.lng() + " ";
        });

        ko.utils.arrayForEach(vmViewIndex.allMapZone.mapZone(), function (item) {
            if (item.MapZoneId() == mapNumber) {
                item.MapZoneValue(totalPoint);
            }
        });
    };
    //Added by SMILEDINING-SA20-0006
    function checkMapChange() {

        var totalPoint = '';

        polygon.getPath().forEach(function (point, i) {
            totalPoint += point.lat() + "," + point.lng() + " ";

        });
        ko.utils.arrayForEach(vmViewIndex.allMapZone.mapZone(), function (item) {
            if (item.MapZoneId() == mapNumber) {
                item.MapZoneValue(totalPoint);
            }
        });
    };
    //End Added by SMILEDINING-SA20-0006
    //Polygon 1
    var objPolygon = options;
    objPolygon.divId = _.first($('#googleMap' + mapNumber));
    google.maps.event.addDomListener(window, 'load', initialize(objPolygon, zone));
    google.maps.event.addDomListener(document.getElementById('btn-AddArea-Zone' + mapNumber), 'click', save);
    google.maps.event.addDomListener(document.getElementById('btn-ClearArea-Zone' + mapNumber), 'click', clearPoint);
    //Added by SMILEDINING-SA20-0006
    if (document.getElementById('selectProduct') != null) {
        google.maps.event.addDomListener(document.getElementById('selectProduct'), 'click', checkMapChange);
    }
    //End Added by SMILEDINING-SA20-0006
};
//function MapZoneData(id, value, price) { //Modified and End by SMILEDINING-SA22-0037
function MapZoneData(id, value, price, dispatchTypeId) { //Added and End by SMILEDINING-SA22-0037
    var self = this;
    self.MapZoneId = ko.observable(id);
    self.MapZoneValue = ko.observable(value);
    self.MapZonePrice = ko.observable(price).extend({ numeric: 2 });
    self.DispatchTypeId = ko.observable(dispatchTypeId); //Added and End by SMILEDINING-SA22-0037
};

function DataMenuViewModel(foodSet, foodCategory, food) {
    var self = this;
    self.foodSet = foodSet;
    self.foodCategory = foodCategory;
    self.food = food;
};

//Added by SMILEDINING-SA21-0004
function DataInstructionLinkToFoodViewModel(id, headId, name, type, idType, active) {
    var self = this;
    self.id = id;
    self.headId = headId;
    self.name = name;
    self.type = type;
    self.active = active;
    if (type == cFoodSet) {
        self.foodSetId = idType;
        self.foodCatId = '';
        self.foodId = '';
    } else if (type == cFoodCat) {
        self.foodSetId = '';
        self.foodCatId = idType;
        self.foodId = '';
    } else if (type == cFood) {
        self.foodSetId = '';
        self.foodCatId = '';
        self.foodId = idType;
    }
};
//End Added by SMILEDINING-SA21-0004


//function DataDiscountViewModel(data) { //Modified and End by SMILEDINING-SA18-0006
function DataDiscountViewModel(data, dataType) { //Added and End by SMILEDINING-SA18-0006
    var self = vmViewIndex.allSetting;
    //ko.mapping.fromJS(data, {}, self.data); //Modified and End by WEB-SA23-0041
    ko.mapping.fromJS(dataType, {}, self.dataSetUpModal.dataDiscountType); //Added and End by SMILEDINING-SA18-0006
    ko.mapping.fromJS(dataType, {}, self.dataViewModelCouponDelivery.dataDiscountType); //Added and End By SMILEDINING-SA19-0008
    //Added by WEB-SA23-0041
    var filterDiscount = ko.utils.arrayFilter(data, function (item) {
        return item.couponTypeId == couponTypes.cAuto || item.couponTypeId == couponTypes.cCoupon;
    });
    ko.mapping.fromJS(filterDiscount, {}, self.data);

    var filterMemberDiscount = ko.utils.arrayFilter(data, function (item) {
        return item.couponTypeId == couponTypes.cMember || item.couponTypeId == couponTypes.cRegister;
    });
    ko.mapping.fromJS(filterMemberDiscount, {}, self.dataMemberDiscount);
    //End Added by WEB-SA23-0041
};


//Added by SMILEDINING-SA20-0048
function DataDiscountOneTimeUseViewModel(data, dataType) {
    var self = vmViewIndex.allSetting;
    var arrSortGroup = _.sortBy(data, [function (item) { return item.group; }]);
    ko.mapping.fromJS(arrSortGroup, {}, self.dataDiscountOneTimeUse);
    ko.mapping.fromJS(dataType, {}, self.dataSetUpModalDiscountOneTimeUse.dataDiscountType);

    var group = _.groupBy(arrSortGroup, function (item) {
        return item.group;
    });
    var newArray = [];
    newArray.push({ id: 0, value: "Create New" });
    _.forEach(group, function (value, key) {
        newArray.push({ id: parseInt(key), value: key });
    });
    self.discountGroup(newArray.slice(0));

    var filterGroup = ko.utils.arrayFilter(newArray, function (item) {
        return item.id != 0;
    });

    //self.groupDiscountDownload(filterGroup.slice(0));     //Modified and End by SMILEDINING-SA20-0048#1
    self.groupDiscountDownload(newArray.slice(0));   //Added and End by SMILEDINING-SA20-0048#1
    if (self.groupDiscountDownload().length > 0) {
        self.group(_.first(self.groupDiscountDownload()).id);
    } else {
        self.group('');
    }

    //Added by SMILEDINING-SA20-0048#1
    self.groupDiscountFilter(filterGroup.slice(0));
    if (self.groupDiscountFilter().length > 0) {
        self.groupDiscountFilterSelect(_.first(self.groupDiscountFilter()).id);
    } else {
        self.groupDiscountFilterSelect('');
    }
    var dataSource = ko.utils.arrayFilter(self.dataDiscountOneTimeUse(), function (items) {
        return items.group() == self.groupDiscountFilterSelect();
    });
    self.dataSourceDiscountOneTimeUse(dataSource.slice(0));
    //End Added by SMILEDINING-SA20-0048#1

};
//End Added by SMILEDINING-SA20-0048

//Added By SMILEDINING-SA19-0008
function DataCouponDeliveryViewModel(data) {
    ko.mapping.fromJS(data, {}, vmViewIndex.allSetting.CouponDeliveryData);
};

function DataCouponDeliveryUpdate(data) {
    var self = this;
    self.couponDeliveryId = ko.observable(data.couponDeliveryId);
    self.couponDeliveryName = ko.observable(data.couponDeliveryName);
    self.couponDeliveryDesc = ko.observable(data.couponDeliveryDesc);
    self.discountTypeId = ko.observable(data.discountTypeId);
    self.usedCoupon = ko.observable(data.usedCoupon);
    self.isTotal = ko.observable(data.isTotal);
    self.totalCoupon = ko.observable(data.totalCoupon);
    self.isMinimum = ko.observable(data.isMinimum);
    self.minimumOrder = ko.observable(data.minimumOrder).extend({ numeric: 2 });
    self.amountOff = ko.observable(data.amountOff).extend({ numeric: 2 });
    self.percentOff = ko.observable(data.percentOff).extend({ numeric: 0 });
    self.isAmount = ko.observable(data.isAmount);
    self.isPercent = ko.observable(data.isPercent);
    self.isFree = ko.observable(data.isFree);
    self.couponDeliveryCode = ko.observable(data.couponDeliveryCode);
    //self.startDate = ko.observable(data.startDat); //Modified and End by WEB-SA23-0031
    self.startDate = ko.observable(data.startDate); //Added and End by WEB-SA23-0031
    self.endDate = ko.observable(data.endDate);
    self.createOn = ko.observable(data.createOn);
    self.modifyOn = ko.observable(data.modifyOn);
    self.active = ko.observable(data.active);
};
//End Added By SMILEDINING-SA19-0008

function DataDiscountSetUpViewModel(data) {
    var self = this;
    self.discountId = ko.observable(data.discountId);
    self.discountName = ko.observable(data.discountName);
    self.discountDesc = ko.observable(data.discountDesc);
    self.discountTypeId = ko.observable(data.discountTypeId); //Added and End by SMILEDINING-SA18-0006
    self.isCouponAmtOff = ko.observable(data.isCouponAmtOff);
    self.isCouponPercentOff = ko.observable(data.isCouponPercentOff);
    self.couponAmountOff = ko.observable(data.couponAmountOff).extend({ numeric: 2 });
    //self.couponPercentOff = ko.observable(data.couponPercentOff).extend({ numeric: 0 });      //Modified and End by SMILEDINING-SA20-0011
    self.couponPercentOff = ko.observable(data.couponPercentOff).extend({ numeric: 2 });    //Added and End by SMILEDINING-SA20-0011
    self.couponCode = ko.observable(data.couponCode);
    self.startDate = ko.observable(data.startDate);
    self.endDate = ko.observable(data.endDate);
    self.active = ko.observable(data.active);
    //Added by SMILEDINING-SA20-0011
    if (data.couponCode == null) {
        self.isAutoDiscount = ko.observable(true);
        self.isCouponDiscount = ko.observable(false);
    }
    else {
        self.isAutoDiscount = ko.observable(false);
        self.isCouponDiscount = ko.observable(true);
    }
    self.termsAmountMin = ko.observable(data.termsAmountMin).extend({ numeric: 2 });
    self.termsAmountMax = ko.observable(data.termsAmountMax).extend({ numeric: 2 });

    self.isUnlimitMin = ko.observable();
    self.isUnlimitMax = ko.observable();
    self.isUnlimitMin(data.termsAmountMin == 0 ? true : false);
    self.isUnlimitMax(data.termsAmountMax == 0 ? true : false);
    self.isPickup = ko.observable(data.isPickup);
    self.isDelivery = ko.observable(data.isDelivery);
    self.shippingTypeId = ko.observable(shippingType.cAll);
    if (data.isPickup && !data.isDelivery) {
        self.shippingTypeId(shippingType.cPickUp);
    }
    else if (!data.isPickup && data.isDelivery) {
        self.shippingTypeId(shippingType.cDelivery);
    }
    //End Added by SMILEDINING-SA20-0011
    //Added by SMILEDINING-SA21-0017
    self.isTotal = ko.observable(data.isTotal);
    self.totalCoupon = ko.observable(data.totalCoupon);
    //End Added by SMILEDINING-SA21-0017
};

//Added by WEB-SA23-0041
function DataMemberDiscountSetUpViewModel(data) {
    var self = this;
    self.discountId = ko.observable(data.discountId);
    self.discountName = ko.observable(data.discountName);
    self.discountDesc = ko.observable(data.discountDesc);
    self.isTotal = ko.observable(data.isTotal);
    self.totalCoupon = ko.observable(data.totalCoupon);
    self.isCouponAmtOff = ko.observable(data.isCouponAmtOff);
    self.isCouponPercentOff = ko.observable(data.isCouponPercentOff);
    self.couponAmountOff = ko.observable(data.couponAmountOff).extend({ numeric: 2 });
    self.couponPercentOff = ko.observable(data.couponPercentOff).extend({ numeric: 2 });
    self.termsAmountMin = ko.observable(data.termsAmountMin).extend({ numeric: 2 });
    self.termsAmountMax = ko.observable(data.termsAmountMax).extend({ numeric: 2 });
    self.couponTypeId = ko.observable(data.couponTypeId);
    self.startDate = ko.observable(data.startDate);
    self.endDate = ko.observable(data.endDate);
    self.active = ko.observable(data.active);
    self.isUnlimitMin = ko.observable(data.termsAmountMin == 0 ? true : false);
    self.isUnlimitMax = ko.observable(data.termsAmountMax == 0 ? true : false);
};
//End Added by WEB-SA23-0041

//Added by SMILEDINING-SA20-0048
function DataDiscountOneTimeUseSetUpViewModel(data) {
    var self = this;
    self.discountOneTimeUseId = ko.observable(data.discountOneTimeUseId);
    self.discountOneTimeUseName = ko.observable(data.discountOneTimeUseName);
    self.group = ko.observable(data.group);
    self.discountTypeId = ko.observable(data.discountTypeId);
    self.isCouponAmtOff = ko.observable(data.isCouponAmtOff);
    self.isCouponPercentOff = ko.observable(data.isCouponPercentOff);
    self.couponAmountOff = ko.observable(data.couponAmountOff).extend({ numeric: 2 });
    self.couponPercentOff = ko.observable(data.couponPercentOff).extend({ numeric: 2 });
    self.couponCode = ko.observable(data.couponCode);
    self.startDate = ko.observable(data.startDate);
    self.endDate = ko.observable(data.endDate);
    self.usedOn = ko.observable(data.usedOn);
    self.isUse = ko.observable(data.isUse);
    //Added by SMILEDINING-SA21-0017
    self.termsAmountMin = ko.observable(data.termsAmountMin).extend({ numeric: 2 });
    self.termsAmountMax = ko.observable(data.termsAmountMax).extend({ numeric: 2 });
    self.isUnlimitMin = ko.observable();
    self.isUnlimitMax = ko.observable();
    self.isUnlimitMin(data.termsAmountMin == 0 ? true : false);
    self.isUnlimitMax(data.termsAmountMax == 0 ? true : false);
    self.isPickup = ko.observable(data.isPickup);
    self.isDelivery = ko.observable(data.isDelivery);
    self.shippingTypeId = ko.observable(shippingType.cAll);
    if (data.isPickup && !data.isDelivery) {
        self.shippingTypeId(shippingType.cPickUp);
    }
    else if (!data.isPickup && data.isDelivery) {
        self.shippingTypeId(shippingType.cDelivery);
    }
    //End Added by SMILEDINING-SA21-0017
}
//End Added by SMILEDINING-SA20-0048

//Added by WEB-SA23-0045
function DataDiscountTimeMapViewModel(data) {
    ko.mapping.fromJS(data, {}, vmViewIndex.allSetting.dataDiscountTimeMap);
};

function DataMultiTimeDiscountTimeMapViewModel(day, sorting, data) {
    var self = this;
    if (isEmpty(data)) {
        self.day = ko.observable(day);
        self.startTimeDateBox = ko.observable('');
        self.endTimeDateBox = ko.observable('');
        self.startTime = ko.observable(null);
        self.endTime = ko.observable(null);
        self.active = ko.observable(true);
        self.visible = ko.observable(sorting == 1 ? true : false);
        self.sorting = ko.observable(sorting);
    } else {
        self.day = ko.observable(data.day());
        self.startTime = ko.observable(moment(data.startTime()).format(moment_time_format_HHmmss));
        self.endTime = ko.observable(moment(data.endTime()).format(moment_time_format_HHmmss));
        self.active = ko.observable(data.active());
        self.visible = ko.observable(data.visible());
        self.sorting = ko.observable(data.sorting());
    }
};

function DataSetUpDiscountTimeMap(discountId, discountOneTimeUseId, couponDeliveryId) {
    var self = vmViewIndex.allSetting.dataSetUpModalDiscountTimeMap;
    self.hiddenShowDiscountTimeMap();
    self.dataMultiTimeList([]);
    vmViewIndex.allSetting.isSetUpModalMemberDiscountUpdate(false);
    var discountTimeMapList = ko.utils.arrayFilter(vmViewIndex.allSetting.dataDiscountTimeMap(), function (item) { 
        if (discountId > 0)
            return item.discountId() == discountId;
        else if (discountOneTimeUseId > 0)
            return item.discountOneTimeUseId() == discountOneTimeUseId;
        else if (couponDeliveryId > 0)
            return item.couponDeliveryId() == couponDeliveryId;
    });

    setValueInMultiTime(cDay_Sunday, discountTimeMapList, self.multiTimeSunList(), self.valActive24HourSun, self.visibleBtnShowNextMultiTimeSun);
    setValueInMultiTime(cDay_Monday, discountTimeMapList, self.multiTimeMonList(), self.valActive24HourMon, self.visibleBtnShowNextMultiTimeMon);
    setValueInMultiTime(cDay_Tuesday, discountTimeMapList, self.multiTimeTueList(), self.valActive24HourTue, self.visibleBtnShowNextMultiTimeTue);
    setValueInMultiTime(cDay_Wednesday, discountTimeMapList, self.multiTimeWedList(), self.valActive24HourWed, self.visibleBtnShowNextMultiTimeWed);
    setValueInMultiTime(cDay_Thursday, discountTimeMapList, self.multiTimeThuList(), self.valActive24HourThu, self.visibleBtnShowNextMultiTimeThu);
    setValueInMultiTime(cDay_Friday, discountTimeMapList, self.multiTimeFriList(), self.valActive24HourFri, self.visibleBtnShowNextMultiTimeFri);
    setValueInMultiTime(cDay_Saturday, discountTimeMapList, self.multiTimeSatList(), self.valActive24HourSat, self.visibleBtnShowNextMultiTimeSat);
    setValueInMultiTime(cDay_AllDay, null, self.multiTimeAllDaysList(), self.valActive24HourAllDays, self.visibleBtnShowNextMultiTimeAllDays);
    self.isAllDayOfWeek(isEmpty(discountTimeMapList));

    function setValueInMultiTime(day, discountTimeMapList, multiTimeList, valActive24Hour, visibleBtnShowNextMultiTime) {
        valActive24Hour(false);
        visibleBtnShowNextMultiTime(true);
        _.forEach(multiTimeList, function (item) {
            item.visible(item.sorting() == 1 ? true : false);
            item.startTime(null);
            item.endTime(null);
            item.active(true);
        });

        if (!isEmpty(discountTimeMapList)) {
            var discountTimeMapFilterDay = ko.utils.arrayFilter(discountTimeMapList, function (item) {
                return item.day() == day;
            }).sort(function sortByTime(a, b) {
                var aTimestart = moment(a.timeStart(), moment_time_format_hhmmssa);
                var bTimestart = moment(b.timeStart(), moment_time_format_hhmmssa);
                return aTimestart > bTimestart ? 1 : -1;
            });

            let index = 0;
            _.forEach(discountTimeMapFilterDay, function (item) {
                var dataMultiTimeOfIndex = multiTimeList[index];
                dataMultiTimeOfIndex.startTime(moment(item.timeStart(), moment_time_format_hhmmss));
                dataMultiTimeOfIndex.endTime(moment(item.timeEnd(), moment_time_format_hhmmss));
                dataMultiTimeOfIndex.active(item.active());
                dataMultiTimeOfIndex.visible(true);
                index++;

                if (dataMultiTimeOfIndex.sorting() == 1) {
                    var startTime24H = moment(time_start_24h, moment_time_format_hhmmss);
                    var endTime24H = moment(time_end_24h, moment_time_format_hhmmss);
                    if (dataMultiTimeOfIndex.startTime().isSame(startTime24H) && dataMultiTimeOfIndex.endTime().isSame(endTime24H) && dataMultiTimeOfIndex.active()) {
                        valActive24Hour(true);
                    }
                }

                if (dataMultiTimeOfIndex.visible()) {
                    visibleBtnShowNextMultiTime(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
                }
            });
        } else {
            valActive24Hour(day != cDay_AllDay);
        }
    };
};
//End Added by WEB-SA23-0045

//Added by SMILEDINING-SA18-0003
function DataAutoChargeSetUpViewModel(data) {
    var self = vmViewIndex.allSetting;
    ko.mapping.fromJS(data, {}, self.dataAutoCharge);
};

//Added by SMILEDINING-SA22-0020
function DataPaymentFeeSetUpViewModel(data) {
    var self = vmViewIndex.allSetting;
    ko.mapping.fromJS(data, {}, self.dataPaymentFee);
};
//End Added by SMILEDINING-SA22-0020

function DataHolidaySetUpViewModel(data) {
    var self = vmViewIndex.allSetting;
    self.dataHoliday([]);
    ko.mapping.fromJS(data, {}, self.dataHoliday);
};

//Added by SMILEDINING-SA20-0016
function DataPromotionSetUpViewModel(data) {
    var self = vmViewIndex.allSetting;
    /*DataFood*/
    //var mainFood = ko.utils.arrayFilter(data.listFood, function (item) {
    //    return item.isFree == false;
    //});
    var mainFood = data.listFood.slice(0);
    var freeFood = ko.utils.arrayFilter(data.listFood, function (item) {
        return item.isFree == true;
    });
    ko.mapping.fromJS(mainFood, {}, self.dataListMainFood);
    ko.mapping.fromJS(freeFood, {}, self.dataListFreeFood);
    /*DataFoodCat*/
    ko.mapping.fromJS(data.listFoodCategory, {}, self.dataListFoodCat);
    /*DataFreeFood*/
    var arrFreeFood = ko.observableArray([]);
    _.forEach(freeFood, function (value) {
        var dataFoodCatFilter = ko.utils.arrayFilter(data.listFoodCategory, function (item) {
            return item.foodCatId == value.foodCatId;
        });
        if (dataFoodCatFilter.length > 0) {
            arrFreeFood.push({
                foodCatName: _.first(dataFoodCatFilter).foodCatName,
                foodCatId: value.foodCatId,
                foodId: value.foodId,
                foodName: value.foodName,
                qty: 1,
            });
        }
    });
    ko.mapping.fromJS(arrFreeFood, {}, self.dataArrFreeFood);
    /*DataMainFood*/
    var arrMainFood = ko.observableArray([]);
    _.forEach(mainFood, function (value) {
        var dataFoodCatFilter = ko.utils.arrayFilter(data.listFoodCategory, function (item) {
            return item.foodCatId == value.foodCatId;
        });
        if (dataFoodCatFilter.length > 0) {
            arrMainFood.push({
                foodCatName: _.first(dataFoodCatFilter).foodCatName,
                foodCatId: value.foodCatId,
                foodId: value.foodId,
                foodName: value.foodName,
                qty: 1,
            });
        }
    });
    ko.mapping.fromJS(arrMainFood, {}, self.dataArrMainFood);

    /*DataMainPrice*/
    ko.mapping.fromJS(data.listMainPrice, {}, self.dataMainPrice);

    /*DataGroupFreeFood*/
    var listGroupFreeFood = ko.observableArray([]);
    ko.utils.arrayForEach(data.listGrpFreeFood, function (item) {
        var groupFreeData = new SetUpGroupFreeFoodViewModel();
        groupFreeData.promotionGroupFreeFoodId(item.promotionGroupFreeFoodId);
        groupFreeData.promotionGroupFreeFoodName(item.promotionGroupFreeFoodName);

        var listName = [];
        var listFoodId = [];
        var listFood = [];
        ko.utils.arrayForEach(item.listPromotionFreeFood, function (val) {
            var foodId = ko.utils.arrayFilter(data.listFreeFood, function (val1) {
                return val1.promotionFreeFoodId == val;
            });
            listFoodId.push(_.first(foodId).foodId);
            listFood.push({
                foodId: _.first(foodId).foodId,
                qty: _.first(foodId).qty,
            });

        });
        //groupFreeData.promotionFreeFoodStr(listFoodId.join(','));
        var arrFood = [];
        var listName = [];
        _.forEach(listFood, function (value) {
            var dataFood = ko.utils.arrayFilter(freeFood, function (val) {
                return val.foodId == value.foodId;
            });
            if (dataFood.length > 0) {
                var dataFoodCatFilter = ko.utils.arrayFilter(data.listFoodCategory, function (item) {
                    return item.foodCatId == _.first(dataFood).foodCatId;
                });
                if (dataFoodCatFilter.length > 0) { //Added and End by SMILEDINING-SA22-0005#1
                    arrFood = ({
                        foodCatName: _.first(dataFoodCatFilter).foodCatName,
                        foodCatId: _.first(dataFood).foodCatId,
                        foodId: value.foodId,
                        foodName: _.first(dataFood).foodName,
                        qty: value.qty,
                    });
                    groupFreeData.listPromotionFreeFood.push(arrFood);
                    listName.push(_.first(dataFood).foodName);
                }   //Added and End by SMILEDINING-SA22-0005#1
            }
        });
        var myJSON = JSON.stringify(groupFreeData.listPromotionFreeFood());
        groupFreeData.jsonPromotionFreeFood(myJSON);
        groupFreeData.strFreeFoodName(listName.join(','));
        listGroupFreeFood.push(groupFreeData);
    });
    ko.mapping.fromJS(listGroupFreeFood, {}, self.dataGroupFreeFood);
    /*End DataGroupFreeFood*/
    /*DataGroupMainFood*/
    var listGroupMainFood = ko.observableArray([]);
    ko.utils.arrayForEach(data.listGrpMainFood, function (item) {
        var groupMainData = new SetUpGroupMainFoodViewModel();
        groupMainData.promotionGroupMainFoodId(item.promotionGroupMainFoodId);
        groupMainData.promotionGroupMainFoodName(item.promotionGroupMainFoodName);
        //groupMainData.promotionMainFoodStr(item.promotionMainFoodStr);

        var listName = [];
        var listFoodId = [];
        var listFood = [];
        ko.utils.arrayForEach(item.listPromotionMainFood, function (val) {
            var foodId = ko.utils.arrayFilter(data.listMainFood, function (val1) {
                return val1.promotionMainFoodId == val;
            });
            listFoodId.push(_.first(foodId).foodId);
            listFood.push({
                foodId: _.first(foodId).foodId,
                qty: _.first(foodId).qty,
            });
        });
        //groupMainData.promotionMainFoodStr(listFoodId.join(','));
        var arrFood = [];
        var listName = [];
        _.forEach(listFood, function (value) {
            var dataFood = ko.utils.arrayFilter(mainFood, function (val) {
                return val.foodId == value.foodId;
            });
            if (dataFood.length > 0) {
                var dataFoodCatFilter = ko.utils.arrayFilter(data.listFoodCategory, function (item) {
                    return item.foodCatId == _.first(dataFood).foodCatId;
                });
                if (dataFoodCatFilter.length > 0) { //Added and End by WEB-SA23-0057
                    arrFood = ({
                        foodCatName: _.first(dataFoodCatFilter).foodCatName,
                        foodCatId: _.first(dataFood).foodCatId,
                        foodId: value.foodId,
                        foodName: _.first(dataFood).foodName,
                        qty: value.qty,
                    });
                    groupMainData.listPromotionMainFood.push(arrFood);
                    listName.push(_.first(dataFood).foodName);
                } //Added and End by WEB-SA23-0057
            }
        });
        var myJSON = JSON.stringify(groupMainData.listPromotionMainFood());
        groupMainData.jsonPromotionMainFood(myJSON);
        groupMainData.strMainFoodName(listName.join(','));
        listGroupMainFood.push(groupMainData);
    });
    ko.mapping.fromJS(listGroupMainFood, {}, self.dataGroupMainFood);
    /*End DataGroupMainFood*/

    /*DataCondition MainPrice*/
    var listConditionMainPrice = ko.observableArray([]);
    var dataConditionMainPrice = ko.utils.arrayFilter(data.listPromotion, function (item) {
        return item.promotionTypeId == cConditionPrice;
    });

    ko.utils.arrayForEach(dataConditionMainPrice, function (item) {
        var conditionData = new SetUpConditionViewModel();
        conditionData.promotionId(item.promotionId);
        conditionData.promotionTypeId(item.promotionTypeId);
        conditionData.isAutoFree(item.isAutoFree);
        conditionData.active(item.active);
        conditionData.startDate(item.startDate);
        conditionData.endDate(item.endDate);
        conditionData.promotionMainPriceId(item.promotionMainPriceId);
        //Added by WEB-SA22-0062
        conditionData.promotionName(item.promotionName);
        //conditionData.totalUse(item.totalUse); //Modified and End by WEB-SA24-0012
        conditionData.usageLimit(item.usageLimit); //Added and End by WEB-SA24-0012
        conditionData.isDelivery(item.isDelivery);
        conditionData.isPickup(item.isPickup);
        //conditionData.isCheckedTotal(conditionData.totalUse() == null ? false : true); // Modified and End by WEB-SA22-0062#1
        //End Added by WEB-SA22-0062
        //Added by WEB-SA22-0062#1
        //conditionData.isCheckedTotal(item.totalUse == null ? false : true); //Modified and End by WEB-SA24-0012
        conditionData.isCheckedLimit(item.usageLimit == null ? false : true); //Added and End by WEB-SA24-0012
        if (item.isDelivery == true && item.isPickup == false) { 
            conditionData.shippingId(shippingType.cDelivery);
        }
        if (item.isDelivery == false && item.isPickup == true) { 
            conditionData.shippingId(shippingType.cPickUp);
        }
        if (item.isDelivery == true && item.isPickup == true) {
            conditionData.shippingId(shippingType.cAll);
        }
        //End Added by WEB-SA22-0062#1
        var dataMainPrice = ko.utils.arrayFilter(data.listMainPrice, function (val) {
            return val.promotionMainPriceId == item.promotionMainPriceId;
        });
        var priceMin = (_.first(dataMainPrice).priceMin).toFixed(2);
        var priceMax = (_.first(dataMainPrice).priceMax).toFixed(2);
        conditionData.strMainPriceName(priceMin + ' - ' + priceMax);
        conditionData.promotionGroupFreeFood(item.promotionGroupFreeFood);
        conditionData.listPromotionGroupFreeFood(item.listPromotionGroupFreeFood);
        if (item.listPromotionGroupFreeFood != null) {
            var listNameGrpFreeFood = [];
            ko.utils.arrayForEach(item.listPromotionGroupFreeFood, function (val) {
                var free = ko.utils.arrayFilter(listGroupFreeFood(), function (data) {
                    return data.promotionGroupFreeFoodId() == val;
                });
                listNameGrpFreeFood.push(_.first(free).promotionGroupFreeFoodName());
            });
            conditionData.strGrpFreeFoodName(listNameGrpFreeFood.join(','));
        } else {
            conditionData.strGrpFreeFoodName('-');
        }
        conditionData.promotionGroupFreeFoodStr(item.promotionGroupFreeFoodStr);
        listConditionMainPrice.push(conditionData);
    });
    ko.mapping.fromJS(listConditionMainPrice, {}, self.dataConditionMainPrice);
    /*DataCondition MainFood*/
    var listConditionMainFood = ko.observableArray([]);
    var dataConditionMainFood = ko.utils.arrayFilter(data.listPromotion, function (item) {
        return item.promotionTypeId == cConditionFood;
    });
    ko.utils.arrayForEach(dataConditionMainFood, function (item) {
        var conditionData = new SetUpConditionViewModel();
        conditionData.promotionId(item.promotionId);
        conditionData.promotionTypeId(item.promotionTypeId);
        //Added by WEB-SA22-0062
        conditionData.promotionName(item.promotionName);
        //conditionData.totalUse(item.totalUse); //Modified and End by WEB-SA24-0012
        conditionData.usageLimit(item.usageLimit); //Added and End by WEB-SA24-0012
        conditionData.isDelivery(item.isDelivery);
        conditionData.isPickup(item.isPickup);
        //conditionData.isCheckedTotal(conditionData.totalUse() == null ? false : true); // Modified and End by WEB-SA22-0062#1
        //End Added by WEB-SA22-0062
        //Added by WEB-SA22-0062#1
        //conditionData.isCheckedTotal(item.totalUse == null ? false : true); //Modified and End by WEB-SA24-0012
        conditionData.isCheckedLimit(item.usageLimit == null ? false : true); //Added and End by WEB-SA24-0012
        if (item.isDelivery == true && item.isPickup == false) { 
            conditionData.shippingId(shippingType.cDelivery);
        }
        if (item.isDelivery == false && item.isPickup == true) { 
            conditionData.shippingId(shippingType.cPickUp);
        }
        if (item.isDelivery == true && item.isPickup == true) {
            conditionData.shippingId(shippingType.cAll);
        }
        //End Added by WEB-SA22-0062#1
        conditionData.isAutoFree(item.isAutoFree);
        conditionData.active(item.active);
        conditionData.startDate(item.startDate);
        conditionData.endDate(item.endDate);
        conditionData.promotionGroupMainFood(item.promotionGroupMainFood);
        conditionData.listPromotionGroupMainFood(item.listPromotionGroupMainFood);
        var listNameGrpMainFood = [];
        ko.utils.arrayForEach(item.listPromotionGroupMainFood, function (val) {
            var main = ko.utils.arrayFilter(listGroupMainFood(), function (data) {
                return data.promotionGroupMainFoodId() == val;
            });
            listNameGrpMainFood.push(_.first(main).promotionGroupMainFoodName());
        });
        conditionData.strGrpMainFoodName(listNameGrpMainFood.join(','));
        conditionData.promotionGroupFreeFood(item.promotionGroupFreeFood);
        conditionData.listPromotionGroupFreeFood(item.listPromotionGroupFreeFood);
        if (item.listPromotionGroupFreeFood != null) {
            var listNameGrpFreeFood = [];
            ko.utils.arrayForEach(item.listPromotionGroupFreeFood, function (val) {
                var free = ko.utils.arrayFilter(listGroupFreeFood(), function (data) {
                    return data.promotionGroupFreeFoodId() == val;
                });
                listNameGrpFreeFood.push(_.first(free).promotionGroupFreeFoodName());
            });
            conditionData.strGrpFreeFoodName(listNameGrpFreeFood.join(','));
        } else {
            conditionData.strGrpFreeFoodName('-');
        }
        conditionData.promotionGroupFreeFoodStr(item.promotionGroupFreeFoodStr);
        conditionData.promotionGroupMainFoodStr(item.promotionGroupMainFoodStr);
        listConditionMainFood.push(conditionData);
    });
    ko.mapping.fromJS(listConditionMainFood, {}, self.dataConditionMainFood);
    /*End DataCondition*/

    ko.mapping.fromJS(data.listPromotionTimeMap, {}, self.dataPromotionTimeMap); //Added and End by WEB-SA24-0012
};
//End Added by SMILEDINING-SA20-0016

//Added by WEB-SA24-0012
function DataMultiTimePromotionTimeMapViewModel(day, sorting, data) {
    var self = this;
    if (isEmpty(data)) {
        self.day = ko.observable(day);
        self.startTimeDateBox = ko.observable('');
        self.endTimeDateBox = ko.observable('');
        self.startTime = ko.observable(null);
        self.endTime = ko.observable(null);
        self.active = ko.observable(true);
        self.visible = ko.observable(sorting == 1 ? true : false);
        self.sorting = ko.observable(sorting);
    } else {
        self.day = ko.observable(data.day());
        self.startTime = ko.observable(moment(data.startTime()).format(moment_time_format_HHmmss));
        self.endTime = ko.observable(moment(data.endTime()).format(moment_time_format_HHmmss));
        self.active = ko.observable(data.active());
        self.visible = ko.observable(data.visible());
        self.sorting = ko.observable(data.sorting());
    }
};

function DataSetUpPromotionTimeMap(promotionId) {
    var self = vmViewIndex.allSetting.dataSetUpPromotionTimeMap;
    self.hiddenShowPromotionTimeMap();
    self.dataMultiTimeList([]);
    var promotionTimeMapList = ko.utils.arrayFilter(vmViewIndex.allSetting.dataPromotionTimeMap(), function (item) { 
        return item.promotionId() == promotionId;
    });

    setValueInMultiTime(cDay_Sunday, promotionTimeMapList, self.multiTimeSunList(), self.valActive24HourSun, self.visibleBtnShowNextMultiTimeSun);
    setValueInMultiTime(cDay_Monday, promotionTimeMapList, self.multiTimeMonList(), self.valActive24HourMon, self.visibleBtnShowNextMultiTimeMon);
    setValueInMultiTime(cDay_Tuesday, promotionTimeMapList, self.multiTimeTueList(), self.valActive24HourTue, self.visibleBtnShowNextMultiTimeTue);
    setValueInMultiTime(cDay_Wednesday, promotionTimeMapList, self.multiTimeWedList(), self.valActive24HourWed, self.visibleBtnShowNextMultiTimeWed);
    setValueInMultiTime(cDay_Thursday, promotionTimeMapList, self.multiTimeThuList(), self.valActive24HourThu, self.visibleBtnShowNextMultiTimeThu);
    setValueInMultiTime(cDay_Friday, promotionTimeMapList, self.multiTimeFriList(), self.valActive24HourFri, self.visibleBtnShowNextMultiTimeFri);
    setValueInMultiTime(cDay_Saturday, promotionTimeMapList, self.multiTimeSatList(), self.valActive24HourSat, self.visibleBtnShowNextMultiTimeSat);
    setValueInMultiTime(cDay_AllDay, null, self.multiTimeAllDaysList(), self.valActive24HourAllDays, self.visibleBtnShowNextMultiTimeAllDays);
    self.isAllDayOfWeek(isEmpty(promotionTimeMapList));

    function setValueInMultiTime(day, promotionTimeMapList, multiTimeList, valActive24Hour, visibleBtnShowNextMultiTime) {
        valActive24Hour(false);
        visibleBtnShowNextMultiTime(true);
        _.forEach(multiTimeList, function (item) {
            item.visible(item.sorting() == 1 ? true : false);
            item.startTime(null);
            item.endTime(null);
            item.active(true);
        });

        if (!isEmpty(promotionTimeMapList)) {
            var promotionTimeMapFilterDay = ko.utils.arrayFilter(promotionTimeMapList, function (item) {
                return item.day() == day;
            }).sort(function sortByTime(a, b) {
                var aTimestart = moment(a.timeStart(), moment_time_format_hhmmssa);
                var bTimestart = moment(b.timeStart(), moment_time_format_hhmmssa);
                return aTimestart > bTimestart ? 1 : -1;
            });

            let index = 0;
            _.forEach(promotionTimeMapFilterDay, function (item) {
                var dataMultiTimeOfIndex = multiTimeList[index];
                dataMultiTimeOfIndex.startTime(moment(item.timeStart(), moment_time_format_hhmmss));
                dataMultiTimeOfIndex.endTime(moment(item.timeEnd(), moment_time_format_hhmmss));
                dataMultiTimeOfIndex.active(item.active());
                dataMultiTimeOfIndex.visible(true);
                index++;

                if (dataMultiTimeOfIndex.sorting() == 1) {
                    var startTime24H = moment(time_start_24h, moment_time_format_hhmmss);
                    var endTime24H = moment(time_end_24h, moment_time_format_hhmmss);
                    if (dataMultiTimeOfIndex.startTime().isSame(startTime24H) && dataMultiTimeOfIndex.endTime().isSame(endTime24H) && dataMultiTimeOfIndex.active()) {
                        valActive24Hour(true);
                    }
                }

                if (dataMultiTimeOfIndex.visible()) {
                    visibleBtnShowNextMultiTime(self.chkVisibleBtnShowNextMultiTime(dataMultiTimeOfIndex.sorting()));
                }
            });
        } else {
            valActive24Hour(day != cDay_AllDay);
        }
    };
};
//End Added by WEB-SA24-0012

//Added by SMILEDINING-SA20-0031
function DataShopCloseSetUpViewModel(data) {
    var self = vmViewIndex.allSetting;
    //ko.mapping.fromJS(data, {}, self.dataShopClose);      //Modified and End by SMILEDINING-SA20-0031#3
    //Added by SMILEDINING-SA20-0031#3
    var groups = _.groupBy(data, function (value) {
        return value.startDate + '#' + value.endDate;
    });
    var listDataTime = [];
    _.forEach(groups, function (value, key) {
        var listTime = [];
        listTime.push(new DataTimeCloseViewModel(value[0]));
        if (value.length > 1) {
            listTime.push(new DataTimeCloseViewModel(value[1]));
        }
        listDataTime.push({
            startDate: value[0].startDate,
            endDate: value[0].endDate,
            reason: value[0].reason,
            time: listTime
        });
    });
    ko.mapping.fromJS(listDataTime, {}, self.dataShopClose);
    //End Added by SMILEDINING-SA20-0031#3
};
//End Added by SMILEDINING-SA20-0031

//Added by SMILEDINING-SA20-0018
function DataGraguityViewModel(globalConfig, dataGraguity) {
    var self = vmViewIndex.allSetting.dataGratuity;

    var listGratuity = ko.utils.arrayFilter(dataGraguity, function (item) {
        return item.active == true;
    });

    ko.mapping.fromJS(listGratuity, {}, self.dataGratuityCharge);

    var gratuityAuto = filterGlobalConfig(globalConfig, 'gratuity-auto');
    if (gratuityAuto == '1') {
        self.gratuityChargeAutoEnable(true);
        self.gratuityChargeAutoDisable(false);
        self.gratuityChargeAuto(gratuityAuto);

    } else {
        self.gratuityChargeAutoEnable(false);
        self.gratuityChargeAutoDisable(true);
        self.gratuityChargeAuto('0');
    }

    var gratuitySize = filterGlobalConfig(globalConfig, 'gratuity-partysize-auto');
    if (gratuitySize == '') {
        self.gratuityPartySize('1');
    } else {
        self.gratuityPartySize(gratuitySize);
    }

    var gratuityId = filterGlobalConfig(globalConfig, 'gratuity-id-auto');
    if (gratuityId == '') {
        self.gratuityChargeId(_.first(dataGraguity));
    } else {
        self.gratuityChargeId(gratuityId);
    }

    var gratuityTax = filterGlobalConfig(globalConfig, 'gratuity-tax');
    if (gratuityTax == '1') {
        self.gratuityChargeTaxEnable(true);
        self.gratuityChargeTaxDisable(false);
        self.gratuityChargeTax(gratuityTax);
    }
    else {
        self.gratuityChargeTaxEnable(false);
        self.gratuityChargeTaxDisable(true);
        self.gratuityChargeTax('0');
    }

    var gratuityTaxPercentage = filterGlobalConfig(globalConfig, 'gratuitycharge-tax-percentage');
    if (gratuityTaxPercentage == '') {
        self.gratuityChargeTaxPercentage(0.00);
    }
    else {
        self.gratuityChargeTaxPercentage(parseFloat(gratuityTaxPercentage));
    }

};
//End Added by SMILEDINING-SA20-0018

//Added by WEB-SA24-0016
function DataCustomerNotificationsSetUpViewModel(data) {
    var self = vmViewIndex.allSetting;
    ko.mapping.fromJS(data, {}, self.dataCustomerNotifications);
    self.customerNotifications([]);
    ko.utils.arrayForEach(self.dataCustomerNotifications(), function (item) { 
        if (item.active()) {
            self.customerNotifications.push(new DataCustomerNotificationsViewModel(item));
        }
    });
    
    if (self.customerNotifications().length == 0) {
        self.customerNotifications.push(new DataCustomerNotificationsViewModel(null, true));
        vmViewIndex.allSetting.valSwitchNotificationCustomer(false);
    } 
};

function DataCustomerNotificationsViewModel(data, isDefault = false) {
    var self = this;
    if (isEmpty(data)) {
        self.customerNotificationsId = ko.observable(0);
        self.description = ko.observable(isDefault ? cCustomerNotifications_DefaultDescription : '');
        self.active = ko.observable(true);
    } else {
        self.customerNotificationsId = ko.observable(data.customerNotificationsId());
        self.description = ko.observable(data.description());
        self.active = ko.observable(data.active());
    }
}
//End Added by WEB-SA24-0016

function DataAutoChargeViewModel(data) {
    var self = this;
    self.autoChargeId = ko.observable(data.autoChargeId);
    self.autoChargeName = ko.observable(data.autoChargeName);
    self.autoChargeDesc = ko.observable(data.autoChargeDesc);
    self.isAmtCharge = ko.observable(data.isAmtCharge);
    self.isPercentCharge = ko.observable(data.isPercentCharge);
    self.amountCharge = ko.observable(data.amountCharge).extend({ numeric: 2 });
    //self.percentCharge = ko.observable(data.percentCharge).extend({ numeric: 0 });    //Modified and End by SMILEDINING-SA18-0035
    self.percentCharge = ko.observable(data.percentCharge).extend({ numeric: 2 });      //Added and End by SMILEDINING-SA18-0035
    self.isTax = ko.observable(data.isTax);
    self.taxCharge = ko.observable(data.taxCharge).extend({ numeric: 2 });
    self.isPickUp = ko.observable(data.isPickUp);
    self.isDelivery = ko.observable(data.isDelivery);
    self.active = ko.observable(data.active);
    self.isThirdParty = ko.observable(data.isThirdParty); //Added and End by SMILEDINING-SA22-0012#1
}

//Added by SMILEDINING-SA22-0020
function DataPaymentFeeViewModel(data) {
    var self = this;
    self.paymentFeeId = ko.observable(data.paymentFeeId);
    self.paymentFeeName = ko.observable(data.paymentFeeName);
    self.isAmtCharge = ko.observable(data.isAmtCharge);
    self.isPercentCharge = ko.observable(data.isPercentCharge);
    self.amountCharge = ko.observable(data.amountCharge).extend({ numeric: 2 });
    self.percentCharge = ko.observable(data.percentCharge).extend({ numeric: 2 });  
    self.isPickUp = ko.observable(data.isPickUp);
    self.isDelivery = ko.observable(data.isDelivery);
    self.active = ko.observable(data.active);
}
//End Added by SMILEDINING-SA22-0020

function DataHolidayViewModel(data) {
    var self = this;
    self.holidayId = ko.observable(data.holidayId);
    self.description = ko.observable(data.description);
    self.startDate = ko.observable(moment(data.startDate).format(moment_date_format_mmddyyyyhhmmssa2));
    self.endDate = ko.observable(moment(data.endDate).format(moment_date_format_mmddyyyyhhmmssa2));
    self.active = ko.observable(data.active);
    self.allDay = ko.observable(true);
}
//End Added by SMILEDINING-SA18-0003

//Added by SMILEDINING-SA20-0031
//Modified by SMILEDINING-SA20-0031#3
//function DataShopCloseViewModel(data) {
//    var self = this;
//    self.startDate = ko.observable(data.startDate);
//    self.endDate = ko.observable(data.endDate);
//    self.jsonTime = ko.observable('');
//    self.reason = ko.observable(data.reason);
//    self.timeFromJson = ko.observable('');
//    self.shopCloseIdFirst = ko.observable('');
//    self.shopCloseIdSecond = ko.observable('');
//    self.isSmileDining = ko.observable(false);
//    var dataTime = [];
//    ko.utils.arrayForEach(data.time, function (item) {
//        var value = new DataTimeCloseViewModel(item);
//        dataTime.push(value);
//    });
//    self.time = ko.observableArray(dataTime.slice(0));
//};
//End Modified by SMILEDINING-SA20-0031#3
//Added by SMILEDINING-SA20-0031#3
function DataShopCloseViewModel(data) {
    var self = this;
    var firstData = _.first(data);
    self.startDate = ko.observable(firstData.startDate);
    self.endDate = ko.observable(firstData.endDate);
    self.reason = ko.observable(firstData.reason);
    var dataTime = [];
    ko.utils.arrayForEach(data, function (item) {
        var value = new DataTimeCloseViewModel(item);
        dataTime.push(value);
    });
    self.time = ko.observableArray(dataTime.slice(0));
};
//End Added by SMILEDINING-SA20-0031#3

function DataTimeCloseViewModel(data) {
    var self = this;
    self.startTime = ko.observable(data.startTime);
    self.endTime = ko.observable(data.endTime);
    self.startTimePmAm = ko.observable(data.startTimePmAm);
    self.endTimePmAm = ko.observable(data.endTimePmAm);
    self.shopCloseId = ko.observable(data.shopCloseId);
};
//End Added by SMILEDINING-SA20-0031

//Added by SMILEDINING-SA20-0016
function DataMainPriceViewModel(data) {
    var self = this;
    self.promotionMainPriceId = ko.observable(data.promotionMainPriceId);
    self.priceMin = ko.observable(data.priceMin).extend({ numeric: 2 });
    self.priceMax = ko.observable(data.priceMax).extend({ numeric: 2 });
    self.createOn = ko.observable(data.createOn);
    self.modifyOn = ko.observable(data.modifyOn);
};

function DataGroupMainFoodViewModel(data) {
    var self = this;
    var listGrpMainFood = _.first(data.listGrpMainFood);
    self.promotionGroupMainFoodId = ko.observable(listGrpMainFood.promotionGroupMainFoodId);
    self.promotionGroupMainFoodName = ko.observable(listGrpMainFood.promotionGroupMainFoodName);
    self.listPromotionMainFood = ko.observableArray([]);
    self.jsonPromotionMainFood = ko.observable();
    self.strMainFoodName = ko.observable();

    var listFoodId = [];
    var listFood = [];
    ko.utils.arrayForEach(listGrpMainFood.listPromotionMainFood, function (val) {
        var foodId = ko.utils.arrayFilter(data.listMainFood, function (val1) {
            return val1.promotionMainFoodId == val;
        });
        listFoodId.push(_.first(foodId).foodId);
        listFood.push({
            foodId: _.first(foodId).foodId,
            qty: _.first(foodId).qty,
        });

    });
    var arrFood = [];
    var listName = [];
    _.forEach(listFood, function (value) {
        var dataFood = ko.utils.arrayFilter(vmViewIndex.allSetting.dataListMainFood(), function (val) {
            return val.foodId() == value.foodId;
        });
        var dataFoodCatFilter = ko.utils.arrayFilter(vmViewIndex.allSetting.dataListFoodCat(), function (item) {
            return item.foodCatId() == _.first(dataFood).foodCatId();
        });
        var qty = ko.observable(value.qty);
        arrFood = ({
            foodCatName: _.first(dataFoodCatFilter).foodCatName,
            foodCatId: _.first(dataFood).foodCatId,
            foodId: _.first(dataFood).foodId,
            foodName: _.first(dataFood).foodName,
            qty: qty,
        });

        self.listPromotionMainFood.push(arrFood);
        listName.push(_.first(dataFood).foodName());
    });
    //var myJSON = JSON.stringify(self.listPromotionMainFood()); //Modified and End by WEB-SA24-0012
    var myJSON = ko.toJSON(self.listPromotionMainFood()); //Added and End by WEB-SA24-0012
    self.jsonPromotionMainFood(myJSON);
    self.strMainFoodName(listName.join(','));
};
function DataGroupFreeFoodViewModel(data) {
    var self = this;
    var listGrpFreeFood = _.first(data.listGrpFreeFood);
    self.promotionGroupFreeFoodId = ko.observable(listGrpFreeFood.promotionGroupFreeFoodId);
    self.promotionGroupFreeFoodName = ko.observable(listGrpFreeFood.promotionGroupFreeFoodName);
    self.listPromotionFreeFood = ko.observableArray([]);
    self.jsonPromotionFreeFood = ko.observable();
    self.strFreeFoodName = ko.observable();
    var listFoodId = [];
    var listFood = [];
    ko.utils.arrayForEach(listGrpFreeFood.listPromotionFreeFood, function (val) {
        var foodId = ko.utils.arrayFilter(data.listFreeFood, function (val1) {
            return val1.promotionFreeFoodId == val;
        });
        listFoodId.push(_.first(foodId).foodId);
        listFood.push({
            foodId: _.first(foodId).foodId,
            qty: _.first(foodId).qty,
        });

    });
    var arrFood = [];
    var listName = [];
    _.forEach(listFood, function (value) {
        var dataFood = ko.utils.arrayFilter(vmViewIndex.allSetting.dataListFreeFood(), function (val) {
            return val.foodId() == value.foodId;
        });
        var dataFoodCatFilter = ko.utils.arrayFilter(vmViewIndex.allSetting.dataListFoodCat(), function (item) {
            return item.foodCatId() == _.first(dataFood).foodCatId();
        });
        var qty = ko.observable(value.qty);
        arrFood = ({
            foodCatName: _.first(dataFoodCatFilter).foodCatName,
            foodCatId: _.first(dataFood).foodCatId,
            //foodId: value.foodId, //Modified and End by WEB-SA24-0012
            foodId: ko.observable(value.foodId), //Added and End by WEB-SA24-0012
            foodName: _.first(dataFood).foodName,
            qty: qty,
        });

        self.listPromotionFreeFood.push(arrFood);
        listName.push(_.first(dataFood).foodName());
    });
    //var myJSON = JSON.stringify(self.listPromotionFreeFood()); //Modified and End by WEB-SA24-0012
    var myJSON = ko.toJSON(self.listPromotionFreeFood()); //Added and End by WEB-SA24-0012
    self.jsonPromotionFreeFood(myJSON);
    self.strFreeFoodName(listName.join(','));
};
function DataConditionViewModel(data, isMainPrice) {
    var self = this;
    self.promotionId = ko.observable(data.promotionId);
    self.promotionTypeId = ko.observable(data.promotionTypeId);
    self.isAutoFree = ko.observable(data.isAutoFree);
    self.active = ko.observable(data.active);
    //Modified by WEB-SA22-0062#2
    //self.startDate = ko.observable(moment(data.startDate).format(moment_date_format_mmddyyyyhhmmssa2));
    //self.endDate = ko.observable(moment(data.endDate).format(moment_date_format_mmddyyyyhhmmssa2));
    //End Modified by WEB-SA22-0062#2
    //Added by WEB-SA22-0062#2
    self.startDate = ko.observable(moment(data.startDate).format('L'));
    self.endDate = ko.observable(moment(data.endDate).format('L'));
    //End Added by WEB-SA22-0062#2
    //Added by WEB-SA22-0062
    self.promotionName = ko.observable(data.promotionName);
    self.isDelivery = ko.observable(data.isDelivery);
    //self.isPickUp = ko.observable(data.isPickUp); //Modified and End by WEB-SA22-0062#2
    self.isPickUp = ko.observable(data.isPickup); //Added and End by WEB-SA22-0062#2
    //self.totalUse = ko.observable(data.totalUse); //Modified and End by WEB-SA24-0012
    self.usageLimit = ko.observable(data.usageLimit); //Added and End by WEB-SA24-0012
    //self.isCheckedTotal = ko.observable(data.isCheckedTotal); //Modified and End by WEB-SA22-0062#2
    //Added by WEB-SA22-0062#2
    //self.isCheckedTotal = ko.observable(data.totalUse == null ? false : true); //Modified and End by WEB-SA24-0012
    self.isCheckedLimit = ko.observable(data.usageLimit == null ? false : true); //Added and End by WEB-SA24-0012
    self.shippingId = ko.observable( (data.isDelivery && data.isPickup) ? shippingType.cAll : data.isDelivery ? shippingType.cDelivery : shippingType.cPickUp);
    //End Added by WEB-SA22-0062#2
    //End Added by WEB-SA22-0062    
    if (isMainPrice) {
        self.promotionMainPriceId = ko.observable(data.promotionMainPriceId);
        self.strMainPriceName = ko.observable();
        if (data.promotionMainPriceId != null && data.promotionTypeId == cConditionPrice) {
            var dataMainPrice = ko.utils.arrayFilter(vmViewIndex.allSetting.dataMainPrice(), function (val) {
                return val.promotionMainPriceId() == data.promotionMainPriceId;
            });
            var priceMin = parseFloat(_.first(dataMainPrice).priceMin()).toFixed(2);
            var priceMax = parseFloat(_.first(dataMainPrice).priceMax()).toFixed(2);
            self.strMainPriceName(priceMin + ' - ' + priceMax);
        }
        else {
            self.strMainPriceName('-');
        }
    }
    if (!isMainPrice) {
        self.promotionGroupMainFood = ko.observable(data.promotionGroupMainFood);
        self.listPromotionGroupMainFood = ko.observableArray(data.listPromotionGroupMainFood);
        self.strGrpMainFoodName = ko.observable();
        if (data.listPromotionGroupMainFood != null && data.promotionTypeId == cConditionFood) {
            var listNameGrpMainFood = [];
            ko.utils.arrayForEach(data.listPromotionGroupMainFood, function (val) {
                var main = ko.utils.arrayFilter(vmViewIndex.allSetting.dataGroupMainFood(), function (item) {
                    return item.promotionGroupMainFoodId() == val;
                });
                listNameGrpMainFood.push(_.first(main).promotionGroupMainFoodName());
            });
            self.strGrpMainFoodName(listNameGrpMainFood.join(','));
        } else {
            self.strGrpMainFoodName('-');
        }
        self.promotionGroupMainFoodStr = ko.observable(data.promotionGroupMainFoodStr);
    }
    self.promotionGroupFreeFood = ko.observable(data.promotionGroupFreeFood);
    self.listPromotionGroupFreeFood = ko.observableArray(data.listPromotionGroupFreeFood);
    self.strGrpFreeFoodName = ko.observable();
    if (data.listPromotionGroupFreeFood != null) {
        var listNameGrpFreeFood = [];
        ko.utils.arrayForEach(data.listPromotionGroupFreeFood, function (val) {
            var free = ko.utils.arrayFilter(vmViewIndex.allSetting.dataGroupFreeFood(), function (item) {
                return item.promotionGroupFreeFoodId() == val;
            });
            listNameGrpFreeFood.push(_.first(free).promotionGroupFreeFoodName());
        });
        self.strGrpFreeFoodName(listNameGrpFreeFood.join(','));
    } else {
        self.strGrpFreeFoodName('-');
    }
    self.promotionGroupFreeFoodStr = ko.observable(data.promotionGroupFreeFoodStr);
};

//End Added by SMILEDINING-SA20-0016

function DataConfigSetUpViewModel(data) {
    var self = vmViewIndex.configSetUp;
    //Added by SMILEDINING-SA21-0014
    /*ProductTags*/
    var dataProductTag = ko.observableArray([]);
    ko.mapping.fromJS(data.listProductTag, {}, dataProductTag);
    self.productTagStore(dataProductTag);
    //End Added by SMILEDINING-SA21-0014
    /*ChoiceOption*/
    var dataChoiceOption = ko.observableArray([]);
    self.choiceOption.cloneDataArrayStore(data.listChoiceOption);
    ko.mapping.fromJS(data.listChoiceOption, {}, dataChoiceOption);
    var dataChoiceOptionStore = new DevExpress.data.ArrayStore({
        key: 'choiceOptionId',
        data: dataChoiceOption()
    });
    self.choiceOption.dataArrayStore(dataChoiceOptionStore);

    /*Choice*/
    //Added by SMILEDINING-SA20-0018
    var dataFilterOption = ko.utils.arrayFilter(data.listChoice, function (items) {
        return items.choiceTypeId == cChoiceType.option;
    });
    //End Added by SMILEDINING-SA20-0018
    //default Choice
    var dataChoice = ko.observableArray([]);
    //ko.mapping.fromJS(data.listChoice, {}, dataChoice);       //Modified and End by SMILEDINING-SA20-0018
    ko.mapping.fromJS(dataFilterOption, {}, dataChoice);    //Added and End by SMILEDINING-SA20-0018
    self.choice.dataChoice(dataChoice());
    self.choice.dataChoiceOption(data.listChoiceOption);
    //var filterChoice = ko.utils.arrayFilter(data.listChoice, function (itemChoice) {      //Modified and End by SMILEDINING-SA20-0018
    var filterChoice = ko.utils.arrayFilter(dataFilterOption, function (itemChoice) {    //Added and End by SMILEDINING-SA20-0018
        return (itemChoice.choiceOptionId == _.first(dataChoiceOption()).choiceOptionId());
    });
    self.choice.cloneDataArrayStore(filterChoice);
    var dataChoiceStore = new DevExpress.data.ArrayStore({
        key: 'choiceId',
        data: dataChoice()
    });
    self.choice.dataArrayStore(dataChoiceStore);
    self.choice.dataArrayStore()._array = ko.mapping.fromJS(filterChoice)();
    if (!isEmpty(data.listChoiceOption)) {
        self.choice.choiceOptionId(_.first(data.listChoiceOption).choiceOptionId);
        self.choice.currentChoiceOptionSelect(_.first(data.listChoiceOption).choiceOptionId);
    }

    //Added by SMILEDINING-SA20-0018
    /*Choice Modify*/
    var dataFilterModify = ko.utils.arrayFilter(data.listChoice, function (items) {
        return items.choiceTypeId == cChoiceType.modify;
    });
    var dataChoiceModify = ko.observableArray([]);
    ko.mapping.fromJS(dataFilterModify, {}, dataChoiceModify);
    self.choiceModify.dataChoice(dataChoiceModify());
    self.choiceModify.dataChoiceOption(data.listChoiceOption);
    var filterChoiceModify = ko.utils.arrayFilter(dataFilterModify, function (itemChoice) {
        return (itemChoice.choiceOptionId == _.first(dataChoiceOption()).choiceOptionId());
    });
    self.choiceModify.cloneDataArrayStore(filterChoiceModify);
    var dataChoiceStore = new DevExpress.data.ArrayStore({
        key: 'choiceId',
        data: dataChoiceModify()
    });

    self.choiceModify.dataArrayStore(dataChoiceStore);
    self.choiceModify.dataArrayStore()._array = ko.mapping.fromJS(filterChoiceModify)();
    if (!isEmpty(data.listChoiceOption)) {
        self.choiceModify.choiceOptionId(_.first(data.listChoiceOption).choiceOptionId);
        self.choiceModify.currentChoiceOptionSelect(_.first(data.listChoiceOption).choiceOptionId);
    }
    //End Added by SMILEDINING-SA20-0018

    /*TaxRate*/
    ko.mapping.fromJS(data.listTaxRate, {}, self.taxRate.data);

    /*RevenueClass*/
    ko.mapping.fromJS(data.listRevenueClass, {}, self.revenueClass.dataRevenueClass);
    ko.mapping.fromJS(data.listTaxRate, {}, self.revenueClass.dataTaxRate);
    //default RevenueClass
    var filterRev = ko.utils.arrayFilter(self.revenueClass.dataRevenueClass(), function (itemRev) {
        return (itemRev.taxRateId() == _.first(self.revenueClass.dataTaxRate()).taxRateId());
    });
    ko.mapping.fromJSON(ko.mapping.toJSON(filterRev), {}, self.revenueClass.data);
    if (!isEmpty(data.listTaxRate)) {
        self.revenueClass.taxRateId(_.first(data.listTaxRate).taxRateId);
        self.revenueClass.currentTaxRateSelect(_.first(data.listTaxRate).taxRateId);
    }

    /*LinkToFood*/
    //Added by SMILEDINING-SA18-0026
    var listFood = ko.observableArray([]);
    var listFoodChoiceMap = ko.observableArray([]);
    //Added by SMILEDINING-SA21-0066#11
    var dataFilterListLinkToFood = ko.utils.arrayFilter(data.listLinkToFood, function (item) {
        return isEmpty(item.plu);
    })
    ko.mapping.fromJS(dataFilterListLinkToFood, {}, listFood);
    //End Added by SMILEDINING-SA21-0066#11
    //ko.mapping.fromJS(data.listLinkToFood, {}, listFood); //Modified and End by SMILEDINING-SA21-0066#11
    self.linkToFood.listFood(listFood());
    ko.mapping.fromJS(data.listFoodChoiceMap, {}, listFoodChoiceMap);
    self.linkToFood.listFoodChoiceMap(listFoodChoiceMap());
    //End Added by SMILEDINING-SA18-0026

    //Added by SMILEDINING-SA20-0018
    /*GraguityCharge*/
    ko.mapping.fromJS(data.listGraguityCharge, {}, self.graguityCharge.data);

    /*FoodPrefix*/
    var dataFoodPrefix = ko.observableArray([]);
    self.foodPrefix.cloneDataArrayStore(data.listFoodPrefix);
    ko.mapping.fromJS(data.listFoodPrefix, {}, dataFoodPrefix);
    var dataFoodPrefixStore = new DevExpress.data.ArrayStore({
        key: 'prefixId',
        data: dataFoodPrefix()
    });
    self.foodPrefix.dataArrayStore(dataFoodPrefixStore);
    //End Added by SMILEDINING-SA20-0018

    /*IconSetup*/
    ko.mapping.fromJS(data.listIcon, {}, self.iconSetup.dataArrayStore);    //Added and End by SMILEDINING-SA21-0021
};

function DataChoiceOptionViewModel(data) {
    var self = this;
    self.choiceOptionId = ko.observable(data.choiceOptionId);
    self.choiceOptionName = ko.observable(data.choiceOptionName);
    self.choiceOptionNameAlt = ko.observable(data.choiceOptionNameAlt);
    self.choiceMulti = ko.observable(data.choiceMulti);
    self.choiceRequire = ko.observable(data.choiceRequire);
    self.choiceNewLine = ko.observable(data.choiceNewLine); //Added and End by SMILEDINING-SA21-0001
    self.choiceSorting = ko.observable(data.choiceSorting);
    self.active = ko.observable(data.active);
    //Added by SMILEDINING-SA18-0003 
    self.arrange = ko.observable(data.arrange);
    self.maxChoice = ko.observable(data.maxChoice);
    //End Added by SMILEDINING-SA18-0003 
    self.listProductTag = ko.observableArray(data.listProductTag);  //Added and End by SMILEDINING-SA21-0014
    self.plu = ko.observable(data.plu); //Added and End by SMILEDINING-SA21-0066#7
};

function DataChoiceViewModel(data) {
    var self = this;
    self.choiceId = ko.observable(data.choiceId);
    self.choiceName = ko.observable(data.choiceName);
    self.choiceNameAlt = ko.observable(data.choiceNameAlt);
    self.choicePrice = ko.observable(data.choicePrice);
    self.choiceWeight = ko.observable(data.choiceWeight);
    self.choiceSorting = ko.observable(data.choiceSorting);
    self.choiceOptionId = ko.observable(data.choiceOptionId);
    self.active = ko.observable(data.active);
    self.choiceGuid = ko.observable(data.choiceGuid); //Added and End by SMILEDINING-SA18-0031
    //Added by SMILEDINING-SA20-0018
    self.choiceTypeId = ko.observable(data.choiceTypeId);
    self.choiceOperator = ko.observable(data.choiceOperator);
    //End Added by SMILEDINING-SA20-0018
    self.listProductTag = ko.observableArray(data.listProductTag);  //Added and End by SMILEDINING-SA21-0014
    self.plu = ko.observable(data.plu); //Added and End by SMILEDINING-SA21-0066#7
};

function DataTaxRateViewModel(data) {
    var self = this;
    self.taxRateId = ko.observable(data.taxRateId);
    self.taxRateName = ko.observable(data.taxRateName);
    self.taxRatePercentage = ko.observable(data.taxRatePercentage);
    self.makrChar = ko.observable(data.markChar);
    self.makrLegend = ko.observable(data.makrLegend);
    self.active = ko.observable(data.active);
};

//Added by SMILEDINING-SA20-0018
function DataGraguityChargeViewModel(data) {
    var self = this;
    self.graguityId = ko.observable(data.graguityId);
    self.graguityName = ko.observable(data.graguityName);
    self.graguityPercentage = ko.observable(data.graguityPercentage);
    self.active = ko.observable(data.active);
};

function DataFoodPrefixViewModel(data) {
    var self = this;
    self.prefixId = ko.observable(data.prefixId);
    self.prefixName = ko.observable(data.prefixName);
    self.prefixDesc = ko.observable(data.prefixDesc);
    self.prefixCal = ko.observable(data.prefixCal);
    self.prefixColorRed = ko.observable(data.prefixColorRed);
    self.prefixStatus = ko.observable(data.prefixStatus);
    self.prefixSorting = ko.observable(data.prefixSorting);
    self.isPrefixCal = ko.observable(data.isPrefixCal);
    self.active = ko.observable(data.active);
};
//End Added by SMILEDINING-SA20-0018

function DataRevenueClassViewModel(data) {
    var self = this;
    self.revenueClassId = ko.observable(data.revenueClassId);
    self.revenueClassName = ko.observable(data.revenueClassName);
    self.isLiquor = ko.observable(data.isLiquor);
    self.active = ko.observable(data.active);
    self.taxRateId = ko.observable(data.taxRateId);
}

//Added by SMILEDINING-SA21-0021
function DataIconViewModel(data) {
    var self = this;
    self.iconId = ko.observable(data.iconId);
    self.iconName = ko.observable(data.iconName);
    self.iconImage = ko.observable(data.iconImage);
    self.hexColor = ko.observable(data.hexColor);
    self.isFocus = ko.observable(data.isFocus);
    self.active = ko.observable(data.active);
    self.isShowText = ko.observable(data.isShowText);
}
//End Added by SMILEDINING-SA21-0021

function DataReportViewModel(data) {
    var self = vmViewIndex.report;

    var dayDiff = moment(data.endDate).diff(data.fromDate, 'day') + 1;
    ko.mapping.fromJS(data.listSaleMadeDetail, {}, self.saleMadeDetail.data);
    self.chart.fromDate(data.fromDate);
    self.chart.endDate(data.endDate);
    self.chart.fromDateCompare(data.fromDateCompare);
    self.chart.endDateCompare(data.endDateCompare);
    self.chart.showCompare(data.showCompare);

    var dataSaleChartModel = data.saleMadeChart;
    var dataOrderChartModel = data.orderMadeChart;
    var dataSaleChartModelCompare = data.saleMadeChartCompare;
    var dataOrderChartModelCompare = data.orderMadeChartCompare;

    var fromDate = data.fromDate;
    var endDate = data.endDate;
    var fromDateCompare = data.fromDateCompare;
    var endDateCompare = data.endDateCompare;

    var firstDayLastMonth = data.fromDateCompare;
    var endDayLastMonth = data.endDateCompare;
    var firstDayCurrentMonth = data.fromDate;
    var endDayCurrentMonth = data.endDate;

    if (self.chart.showCompare == false) {
        genChart(dataSaleChartModel, dataOrderChartModel, null, null, firstDayCurrentMonth, endDayCurrentMonth,
                 firstDayLastMonth, endDayLastMonth, self.chart.updateChart(), dayDiff, self.chart.showCompare());
    } else {
        genChart(dataSaleChartModel, dataOrderChartModel, dataSaleChartModelCompare, dataOrderChartModelCompare, firstDayCurrentMonth,
                 endDayCurrentMonth, firstDayLastMonth, endDayLastMonth, self.chart.updateChart(), dayDiff, self.chart.showCompare());
    }
}

function DataBalanceViewModel(data) {
    var self = vmViewIndex.balance;
    //ko.mapping.fromJS([data.dataBalanceSummary], {}, self.summary);       //Modified and End by SMILEDINING-SA20-0007
    ko.mapping.fromJS([data.summary], {}, self.summary);                    //Added and End by SMILEDINING-SA20-0007
    self.fromDate(_.first(self.summary()).fromDate());
    self.endDate(_.first(self.summary()).endDate());

    //ko.mapping.fromJS(data.listBalanceLiveOrder, {}, self.orderTicket);       //Modified and End by SMILEDINING-SA20-0007
    ko.mapping.fromJS(data.listLiveOrder, {}, self.ticket);         //Added and End by SMILEDINING-SA20-0007
}

function DataStatementViewModel(data) {
    var self = vmViewIndex.statement;
    //Modified by SMILEDINING-SA20-0007
    //ko.mapping.fromJS(data, {}, self);
    //self.nowDate(moment(self.nowDateTime()).format(moment_date_format_mmddyyyyhhmmssa2));
    //ko.mapping.fromJS([data.dataStatementSummary], {}, self.summaryStatement);
    //self.fromDate(_.first(self.summaryStatement()).fromDate());
    //self.endDate(_.first(self.summaryStatement()).endDate());
    //ko.mapping.fromJS(data.listStatementTicket, {}, self.statementTicket);
    //if (data.listDataGroupOrder != null || data.listDataGroupOrder != undefined) {
    //    ko.mapping.fromJS(data.listDataGroupOrder, {}, self.groupOrder.data);
    //    self.groupOrder.valueGroupOrder(_.first(self.groupOrder.data()).id());
    //}
    //End Modified by SMILEDINING-SA20-0007
    //Added by SMILEDINING-SA20-0007
    ko.mapping.fromJS([data.summary], {}, self.summary);
    self.shopName(data.shopName);
    self.shopStreet(data.shopStreet);
    self.shopCity(data.shopCity);
    self.shopState(data.shopState);
    self.shopPostal(data.shopPostal);
    self.fromDate(_.first(self.summary()).fromDate());
    self.endDate(_.first(self.summary()).endDate());
    if (!isEmpty(data.statementHeader)) {
        ko.mapping.fromJS(data.statementHeader, {}, self.statementHeader.data);
        self.statementHeader.value(_.first(self.statementHeader.data()).id());
        self.statementHeader.valSelectStatementType(_.first(self.statementHeader.data()).isWeekly() ? '0' : '1'); //Added and End by WEB-SA23-0035#1
    }
    //if (!isEmpty(data.statementDetail)) ko.mapping.fromJS(data.statementDetail, {}, self.statementDetail); //Modified and End by WEB-SA23-0035
    //End Added by SMILEDINING-SA20-0007
    ko.mapping.fromJS(data.statementDetail, {}, self.statementDetail); //Added and End by WEB-SA23-0035
}

//Added by SMILEDINING-SA22-0013
function DataDeliveryBillingViewModel(data) {
    var self = vmViewIndex.deliveryBilling;
    self.shopName(data.shopName);
    self.shopStreet(data.shopStreet);
    //Modified by SMILEDINING-SA22-0013#4
    //self.shopCity(data.shopCity);
    //self.shopState(data.shopState);
    //self.shopPostal(data.shopPostal);
    //End Modified by SMILEDINING-SA22-0013#4
    self.period(data.period);
    self.countCommission(data.countCommission);
    self.countTip(data.countTip);
    self.sumCommission(data.sumCommission);
    self.sumTip(data.sumTip);
    self.totalAmount(rountTwo(self.sumCommission() + self.sumTip()));
    self.selectMonth(new Date(data.currentDateTime));
    self.sumAmountDeposit(data.sumAmountDeposit); //Added and End by SMILEDINING-SA22-0033
    ko.mapping.fromJS(data.deliveryBillingDetail, {}, self.deliveryBillingDetail);
}
//End Added by SMILEDINING-SA22-0013
//Added by SMILEDINING-SA21-0063
function DataMarketingViewModel(data) {
    var self = vmViewIndex.marketing;
    //ko.mapping.fromJS(data.listCustomer, {}, self.data); //Modified and End by SMILEDINING-SA21-0063#4
    //Added by SMILEDINING-SA21-0063#4
    //Added by SMILEDINING-SA21-0063#5
    if (data == null) {
        var rowArr = ["300", "500", "1000"];
    } else {
        var rowArr = data.globalConfigValue.split(',');
    }
    //End Added by SMILEDINING-SA21-0063#5
    //var rowArr = data.globalConfigValue.split(','); //Modified and End by SMILEDINING-SA21-0063#5
    ko.mapping.fromJS(rowArr, {}, self.recordRowArr);
    //End Added by SMILEDINING-SA21-0063#4
}
//End Added by SMILEDINING-SA21-0063

//Added by SMILEDINING-SA19-0011
function DataGiftCardViewViewModel(data) {
    var self = vmViewIndex.giftCard;
    ko.mapping.fromJS(data, {}, self.giftCardView.dataGiftCardView);
};

function DataGiftCardViewModel(data) {
    var parent = vmViewIndex.giftCard;
    var self = vmViewIndex.giftCard.addGiftCard;

    ko.mapping.fromJS(data.giftCardImageTable, {}, parent.giftCardImageStorage);
    ko.mapping.fromJS(data.giftCardValueTable, {}, parent.giftCardValueStorage);
    ko.mapping.fromJS(data.customDiscountTable, {}, parent.customDiscountStorage);

    for (i = 0; i < parent.giftCardValueStorage().length; i++) {
        if (parent.giftCardValueStorage()[i].getAsPay()) {
            self.refGiftCardValueId(parent.giftCardValueStorage()[i].giftCerValueId());
        }

        parent.giftCardValueSorting.push({
            giftCerValueId: parent.giftCardValueStorage()[i].giftCerValueId(),
            sorting: parent.giftCardValueStorage()[i].sorting()
        });
    }

    for (i = 0; i < parent.giftCardImageStorage().length; i++) {
        var urlImage = cPathGiftCardImage + parent.giftCardImageStorage()[i].giftCerImagesName();
        parent.giftCardImageStorage()[i].giftCerImagesName(urlImage);
    }

};

function DataCustomDiscountToGiftCardValue(source, data) {
    var self = source;
    if (self.refGiftCardValueId().length <= 0) {
        var giftCardValueViewModel = new DataGiftCardValueViewModel({
            giftCerValueId: data.giftCerCustomDiscountId,
            giftCerValueName: data.discountValueName,
            getAmount: 0,
            payAmount: 0,
            isDiscountAmount: false,
            isDiscountPercent: false,
            discountAmount: 0,
            discountPercent: 0,
            getAsPay: true,
            activateOnly: true,
            sorting: data.sorting,
            active: data.active
        });

        self.giftCardValueData.push(giftCardValueViewModel);

        self.haveDiscountData(true)
        self.refGiftCardValueId(data.refGiftCerValueId);
        self.discountValueName(data.discountValueName);
    }

    var getMin = data.min - 0;
    var getMax = data.max - 0;
    var payMin = data.min;
    var payMax = data.max;

    if (data.isCustomDiscountAmount) {
        payMin -= data.amountOff;
        payMax -= data.amountOff;

        if (payMin < 0) {
            payMin = 0
        }

        if (payMax < 0) {
            payMax = 0
        }
    }
    else if (data.isCustomDiscountPercent) {
        payMin = rountTwo(payMin - (data.min * data.percentOff) / 100);
        payMax = rountTwo(payMax - (data.max * data.percentOff) / 100);
    }

    var setCustomDiscount = new DataGiftCardValueViewModel({

        giftCerValueId: data.giftCerCustomDiscountId,
        giftCerValueName: data.discountName,
        getAmount: getMin + ' - ' + getMax,
        payAmount: payMin + ' - ' + payMax,
        isDiscountAmount: data.isCustomDiscountAmount,
        isDiscountPercent: data.isCustomDiscountPercent,
        discountAmount: data.amountOff,
        discountPercent: data.percentOff,
        getAsPay: true,
        activateOnly: true,
        active: data.active
    });

    var setGiftCardForGridData = new DataGridGiftCardValueViewModel(setCustomDiscount);
    self.dataGridGiftCardValueData.push(setGiftCardForGridData);
};

function DataUpdateCustomDiscountToGiftCardValue(source, data) {
    var self = source;

    var getMin = data.min - 0;
    var getMax = data.max - 0;
    var payMin = data.min;
    var payMax = data.max;

    if (data.isCustomDiscountAmount) {
        payMin -= data.amountOff;
        payMax -= data.amountOff;

        if (payMin < 0) {
            payMin = 0
        }

        if (payMax < 0) {
            payMax = 0
        }

    }
    else if (data.isCustomDiscountPercent) {
        payMin = rountTwo(payMin - (data.min * data.percentOff) / 100);
        payMax = rountTwo(payMax - (data.max * data.percentOff) / 100);
    }

    var setCustomDiscount = new DataGiftCardValueViewModel({

        giftCerValueId: data.giftCerCustomDiscountId,
        giftCerValueName: data.discountName,
        getAmount: getMin + ' - ' + getMax,
        payAmount: payMin + ' - ' + payMax,
        isDiscountAmount: data.isCustomDiscountAmount,
        isDiscountPercent: data.isCustomDiscountPercent,
        discountAmount: data.amountOff,
        discountPercent: data.percentOff,
        getAsPay: true,
        activateOnly: true,
        active: data.active
    });

    var setGiftCardForGridData = new DataGridGiftCardValueViewModel(setCustomDiscount);

    var filterGrid = ko.utils.arrayFilter(self.dataGridGiftCardValueData(), function (value) {
        return value.valueId() == data.giftCerCustomDiscountId;
    });
    self.dataGridGiftCardValueData.replace(_.first(filterGrid), setGiftCardForGridData);
};

function DataGiftCardImageViewModel(data) {
    var self = this;
    self.giftCerImagesId = ko.observable(data.giftCerImagesId);
    self.giftCerImagesName = ko.observable(data.giftCerImagesName);
    self.active = ko.observable(data.active);
    self.isDefault = ko.observable(data.isDefault);
    self.sorting = ko.observable(data.sorting);
};

function DataGiftCardValueViewModel(data) {
    var self = this;
    self.giftCerValueId = ko.observable(data.giftCerValueId);
    self.giftCerID = ko.observable('1');
    self.giftCerValueName = ko.observable(data.giftCerValueName);
    self.payAmount = ko.observable(data.payAmount);
    self.getAmount = ko.observable(data.getAmount);
    self.activateOnly = ko.observable(true);
    self.getAsPay = ko.observable(data.getAsPay);
    self.activateOnly = ko.observable(data.activateOnly);
    self.discountAmount = ko.observable(data.discountAmount);
    self.isDiscountAmount = ko.observable(data.isDiscountAmount);
    self.discountPercent = ko.observable(data.discountPercent);
    self.isDiscountPercent = ko.observable(data.isDiscountPercent);
    self.sorting = ko.observable(data.sorting);
    self.active = ko.observable(data.active);
};

function DataCustomDiscountViewModel(data) {
    var self = this;
    self.refGiftCardValueId = ko.observable(data.refGiftCardValueId);
    self.giftCerCustomDiscountId = ko.observable(data.giftCerCustomDiscountId);
    self.discountValueName = ko.observable(data.discountValueName);
    self.discountName = ko.observable(data.discountName);
    self.discountDesc = ko.observable(data.discountDesc);
    self.min = ko.observable(data.min);
    self.max = ko.observable(data.max);
    self.allDate = ko.observable(data.allDate);
    self.startDate = ko.observable(data.startDate);
    self.endDate = ko.observable(data.endDate);
    self.allTime = ko.observable(data.allTime);
    self.startTime = ko.observable(data.startTime);
    self.endTime = ko.observable(data.endTime);
    self.isCustomDiscountAmount = ko.observable(data.isCustomDiscountAmount);
    self.isCustomDiscountPercent = ko.observable(data.isCustomDiscountPercent);
    self.amountOff = ko.observable(data.amountOff);
    self.percentOff = ko.observable(data.percentOff);
    self.active = ko.observable(data.active);
    self.refGiftCerValueActive = ko.observable(data.refGiftCerValueActive);
};

/*
 function DataGridCustomDiscountViewModel(data) {
    var self = this;
    var minMax = "$" + data.min() + " - $" + data.max();
    var allDay = "All Day";
    var allTime = "All Time";
    var discount = "";

    if (data.allDate() == false) {
        allDay = moment(data.startDate()).format('MM/DD/YYYY') + " - " + moment(data.endDate()).format('MM/DD/YYYY');
    }

    if (data.isCustomDiscountAmount()) {
        discount = "$" + data.amountOff();
    }
    else if (data.isCustomDiscountPercent()) {
        discount = data.percentOff() + "%";
    }

    let startTime = moment(time_start_24h, moment_time_format_hhmmss);
    let endTime = moment(time_end_24h, moment_time_format_hhmmss);

    if (data.allTime() == false) {
        startTime = moment(data.startTime(), moment_time_format_hhmmss);
        endTime = moment(data.endTime(), moment_time_format_hhmmss);
        allTime = moment(startTime).format('HH:mm') + " - " + moment(endTime).format('HH:mm');
    }

    self.discountName = ko.observable(data.discountName());
    self.dataMinMix = ko.observable(minMax);
    self.dataDay = ko.observable(allDay);
    self.dataTime = ko.observable(allTime);
    self.dataDiscount = ko.observable(discount);
    self.isActive = ko.observable(data.active());

    self.giftCerCustomDiscountId = ko.observable(data.giftCerCustomDiscountId());
    self.discountDesc = ko.observable(data.discountDesc()),
    self.min = ko.observable(data.min()),
    self.max = ko.observable(data.max()),
    self.allDate = ko.observable(data.allDate());
    self.startDate = ko.observable(moment(data.startDate()).format('MM/DD/YYYY')),
    self.endDate = ko.observable(moment(data.endDate()).format('MM/DD/YYYY')),
    self.allTime = ko.observable(data.allTime()),
    self.startTime = moment(startTime).format('HH:mm'),
    self.endTime = moment(endTime).format('HH:mm'),
    self.isCustomDiscountAmount = ko.observable(data.isCustomDiscountAmount()),
    self.isCustomDiscountPercent = ko.observable(data.isCustomDiscountPercent()),
    self.amountOff = ko.observable(data.amountOff()),
    self.percentOff = ko.observable(data.percentOff()),
    self.active = ko.observable(data.active())
}
 */

function DataGridGiftCardValueViewModel(data) {
    var self = this;
    self.valueId = ko.observable(data.giftCerValueId());
    self.valueName = ko.observable(data.giftCerValueName());
    self.getAmount = ko.observable(data.getAmount());
    self.payAmount = ko.observable(data.payAmount());
    self.discountAmount = ko.observable(data.discountAmount());
    self.discountPercent = ko.observable(data.discountPercent());
    self.getAsPay = ko.observable(data.getAsPay());
    self.activateOnly = ko.observable(data.activateOnly());
    self.isDiscountAmount = ko.observable(data.isDiscountAmount());
    self.isDiscountPercent = ko.observable(data.isDiscountPercent());
    self.sorting = ko.observable(data.sorting());
    self.active = ko.observable(data.active());
};
//End Added by SMILEDINING-SA19-0011

function DataLiveOrderViewModel(data) {
    var self = vmViewIndex.liveOrder;
    //ko.mapping.fromJS(data, {}, self.orderTicket);        //Modified and End by SMILEDINING-SA20-0007
    //ko.mapping.fromJS(data, {}, self.ticket);               //Added and End by SMILEDINING-SA20-0007 //Modified and End by SMILEDINING-SA21-0080#1
    //Added by SMILEDINING-SA21-0080#1
    ko.mapping.fromJS(data.dataLiveOrder, {}, self.ticket);
    self.activeFeeCreditMarketing(data.feeCreditMarketing);
    self.showSplitTaxesAndFees(data.showSplitTaxesAndFees); //Added and End by WEB-SA23-0010
    //End Added by SMILEDINING-SA21-0080#1
};

function DataShowTimeViewModel(data) {
    self = vmViewIndex.menu;
    self.tempDataShowTime(data);
    ko.mapping.fromJS(data, {}, self.dataShowTime);

    if (data != null) {
        var filterFoodSetId = ko.utils.arrayFilter(self.dataShowTime(), function (dataFoodSetTimeMap) {
            return dataFoodSetTimeMap.foodSetId() == self.selectFoodSetId();
        });

        if (filterFoodSetId.length > 0) {
            //Sun
            //Modified by SMILEDINING-SA20-0003
            //if (!_.first(filterFoodSetId).listFoodSetTimeMap()[0].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[0].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[0].firstEndTime() != "") {
            //    self.firstShowSunStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[0].firstStartTime()) + ' - ');
            //    self.firstShowSunEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[0].firstEndTime()));
            //    if (_.first(filterFoodSetId).listFoodSetTimeMap()[0].secondStartTime().trim().length > 0) {
            //        self.secondShowSunStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[0].secondStartTime()) + ' - ');
            //        self.secondShowSunEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[0].secondEndTime()));
            //    } else {
            //        self.secondShowSunStartTime('');
            //        self.secondShowSunEndTime('');
            //    }
            //} else if (_.first(filterFoodSetId).listFoodSetTimeMap()[0].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[0].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[0].firstEndTime() != "") {
            //    self.firstShowSunStartTime(textShowTime24h);
            //    self.firstShowSunEndTime('');
            //    self.secondShowSunStartTime('');
            //    self.secondShowSunEndTime('');
            //} else {
            //    self.firstShowSunStartTime(textShowTimeClosed);
            //    self.firstShowSunEndTime('');
            //    self.secondShowSunStartTime('');
            //    self.secondShowSunEndTime('');
            //}
            //End Modified by SMILEDINING-SA20-0003
            //Added by SMILEDINING-SA20-0003
            if (_.first(filterFoodSetId).listFoodSetTimeMap()[0].isClosed()) {
                self.firstShowSunStartTime(textShowTimeClosed);
                self.firstShowSunEndTime('');
                self.showSunMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowSunStartTime('');
                //self.secondShowSunEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3
            } else {
                if (!_.first(filterFoodSetId).listFoodSetTimeMap()[0].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[0].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[0].firstEndTime() != "") {
                    self.firstShowSunStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[0].firstStartTime()) + ' - ');
                    self.firstShowSunEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[0].firstEndTime()));
                    //Modified by SMILEDINING-SA22-0034#3
                    //if (_.first(filterFoodSetId).listFoodSetTimeMap()[0].secondStartTime().trim().length > 0) {
                    //    self.secondShowSunStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[0].secondStartTime()) + ' - ');
                    //    self.secondShowSunEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[0].secondEndTime()));
                    //} else {
                    //    self.secondShowSunStartTime('');
                    //    self.secondShowSunEndTime('');
                    //}
                    //End Modified by SMILEDINING-SA22-0034#3
                    //Added by SMILEDINING-SA22-0034#3
                    self.showSunMultiTimeList([]);
                    ko.utils.arrayForEach(_.first(filterFoodSetId).listFoodSetTimeMap()[0].listMultiTime(), function (dataMultiTime) {
                        self.showSunMultiTimeList.push(new DataShowMultiTimeViewModel(
                            setTimeAMPM(dataMultiTime.startTime()),
                            setTimeAMPM(dataMultiTime.endTime()),                            
                        ));
                    });
                    //End Added by SMILEDINING-SA22-0034#3
                } else if (_.first(filterFoodSetId).listFoodSetTimeMap()[0].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[0].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[0].firstEndTime() != "") {
                    self.firstShowSunStartTime(textShowTime24h);
                    self.firstShowSunEndTime('');
                    self.showSunMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                    //Modified by SMILEDINING-SA22-0034#3
                    //self.secondShowSunStartTime('');
                    //self.secondShowSunEndTime('');
                    //End Modified by SMILEDINING-SA22-0034#3
                }
            }
            //End Added by SMILEDINING-SA20-0003

            //Mon
            //Modified by SMILEDINING-SA20-0003
            //if (!_.first(filterFoodSetId).listFoodSetTimeMap()[1].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[1].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[1].firstEndTime() != "") {
            //    self.firstShowMonStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[1].firstStartTime()) + ' - ');
            //    self.firstShowMonEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[1].firstEndTime()));
            //    if (_.first(filterFoodSetId).listFoodSetTimeMap()[1].secondStartTime().trim().length > 0) {
            //        self.secondShowMonStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[1].secondStartTime()) + ' - ');
            //        self.secondShowMonEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[1].secondEndTime()));
            //    } else {
            //        self.secondShowMonStartTime('');
            //        self.secondShowMonEndTime('');
            //    }
            //} else if (_.first(filterFoodSetId).listFoodSetTimeMap()[1].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[1].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[1].firstEndTime() != "") {
            //    self.firstShowMonStartTime(textShowTime24h);
            //    self.firstShowMonEndTime('');
            //    self.secondShowMonStartTime('');
            //    self.secondShowMonEndTime('');
            //} else {
            //    self.firstShowMonStartTime(textShowTimeClosed);
            //    self.firstShowMonEndTime('');
            //    self.secondShowMonStartTime('');
            //    self.secondShowMonEndTime('');
            //}
            //End Modified by SMILEDINING-SA20-0003
            //Added by SMILEDINING-SA20-0003
            if (_.first(filterFoodSetId).listFoodSetTimeMap()[1].isClosed()) {
                self.firstShowMonStartTime(textShowTimeClosed);
                self.firstShowMonEndTime('');
                self.showMonMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowMonStartTime('');
                //self.secondShowMonEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3
            } else {
                if (!_.first(filterFoodSetId).listFoodSetTimeMap()[1].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[1].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[1].firstEndTime() != "") {
                    self.firstShowMonStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[1].firstStartTime()) + ' - ');
                    self.firstShowMonEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[1].firstEndTime()));
                    //Modified by SMILEDINING-SA22-0034#3
                    //if (_.first(filterFoodSetId).listFoodSetTimeMap()[1].secondStartTime().trim().length > 0) {
                    //    self.secondShowMonStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[1].secondStartTime()) + ' - ');
                    //    self.secondShowMonEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[1].secondEndTime()));
                    //} else {
                    //    self.secondShowMonStartTime('');
                    //    self.secondShowMonEndTime('');
                    //}
                    //End Modified by SMILEDINING-SA22-0034#3
                    //Added by SMILEDINING-SA22-0034#3
                    self.showMonMultiTimeList([]);
                    ko.utils.arrayForEach(_.first(filterFoodSetId).listFoodSetTimeMap()[1].listMultiTime(), function (dataMultiTime) {
                        self.showMonMultiTimeList.push(new DataShowMultiTimeViewModel(
                            setTimeAMPM(dataMultiTime.startTime()),
                            setTimeAMPM(dataMultiTime.endTime()),                            
                        ));
                    });
                    //End Added by SMILEDINING-SA22-0034#3
                } else if (_.first(filterFoodSetId).listFoodSetTimeMap()[1].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[1].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[1].firstEndTime() != "") {
                    self.firstShowMonStartTime(textShowTime24h);
                    self.firstShowMonEndTime('');
                    self.showMonMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                    //Modified by SMILEDINING-SA22-0034#3
                    //self.secondShowMonStartTime('');
                    //self.secondShowMonEndTime('');
                    //End Modified by SMILEDINING-SA22-0034#3
                }
            }
            //End Added by SMILEDINING-SA20-0003

            //Tue
            //Modified by SMILEDINING-SA20-0003
            //if (!_.first(filterFoodSetId).listFoodSetTimeMap()[2].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[2].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[2].firstEndTime() != "") {
            //    self.firstShowTueStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[2].firstStartTime()) + ' - ');
            //    self.firstShowTueEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[2].firstEndTime()));
            //    if (_.first(filterFoodSetId).listFoodSetTimeMap()[2].secondStartTime().trim().length > 0) {
            //        self.secondShowTueStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[2].secondStartTime()) + ' - ');
            //        self.secondShowTueEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[2].secondEndTime()));
            //    } else {
            //        self.secondShowTueStartTime('');
            //        self.secondShowTueEndTime('');
            //    }
            //} else if (_.first(filterFoodSetId).listFoodSetTimeMap()[2].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[2].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[2].firstEndTime() != "") {
            //    self.firstShowTueStartTime(textShowTime24h);
            //    self.firstShowTueEndTime('');
            //    self.secondShowTueStartTime('');
            //    self.secondShowTueEndTime('');
            //} else {
            //    self.firstShowTueStartTime(textShowTimeClosed);
            //    self.firstShowTueEndTime('');
            //    self.secondShowTueStartTime('');
            //    self.secondShowTueEndTime('');
            //}
            //End Modified by SMILEDINING-SA20-0003
            //Added by SMILEDINING-SA20-0003
            if (_.first(filterFoodSetId).listFoodSetTimeMap()[2].isClosed()) {
                self.firstShowTueStartTime(textShowTimeClosed);
                self.firstShowTueEndTime('');
                self.showTueMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowTueStartTime('');
                //self.secondShowTueEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3
            } else {
                if (!_.first(filterFoodSetId).listFoodSetTimeMap()[2].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[2].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[2].firstEndTime() != "") {
                    self.firstShowTueStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[2].firstStartTime()) + ' - ');
                    self.firstShowTueEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[2].firstEndTime()));
                    //Modified by SMILEDINING-SA22-0034#3
                    //if (_.first(filterFoodSetId).listFoodSetTimeMap()[2].secondStartTime().trim().length > 0) {
                    //    self.secondShowTueStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[2].secondStartTime()) + ' - ');
                    //    self.secondShowTueEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[2].secondEndTime()));
                    //} else {
                    //    self.secondShowTueStartTime('');
                    //    self.secondShowTueEndTime('');
                    //}
                    //End Modified by SMILEDINING-SA22-0034#3
                    //Added by SMILEDINING-SA22-0034#3
                    self.showTueMultiTimeList([]);
                    ko.utils.arrayForEach(_.first(filterFoodSetId).listFoodSetTimeMap()[2].listMultiTime(), function (dataMultiTime) {
                        self.showTueMultiTimeList.push(new DataShowMultiTimeViewModel(
                            setTimeAMPM(dataMultiTime.startTime()),
                            setTimeAMPM(dataMultiTime.endTime()),                            
                        ));
                    });
                    //End Added by SMILEDINING-SA22-0034#3
                } else if (_.first(filterFoodSetId).listFoodSetTimeMap()[2].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[2].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[2].firstEndTime() != "") {
                    self.firstShowTueStartTime(textShowTime24h);
                    self.firstShowTueEndTime('');
                    self.showTueMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                    //Modified by SMILEDINING-SA22-0034#3
                    //self.secondShowTueStartTime('');
                    //self.secondShowTueEndTime('');
                    //End Modified by SMILEDINING-SA22-0034#3
                }
            }
            //End Added by SMILEDINING-SA20-0003

            //Wed
            //Modified by SMILEDINING-SA20-0003
            //if (!_.first(filterFoodSetId).listFoodSetTimeMap()[3].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[3].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[3].firstEndTime() != "") {
            //    self.firstShowWedStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[3].firstStartTime()) + ' - ');
            //    self.firstShowWedEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[3].firstEndTime()));
            //    if (_.first(filterFoodSetId).listFoodSetTimeMap()[3].secondStartTime().trim().length > 0) {
            //        self.secondShowWedStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[3].secondStartTime()) + ' - ');
            //        self.secondShowWedEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[3].secondEndTime()));
            //    } else {
            //        self.secondShowWedStartTime('');
            //        self.secondShowWedEndTime('');
            //    }
            //} else if (_.first(filterFoodSetId).listFoodSetTimeMap()[3].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[3].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[3].firstEndTime() != "") {
            //    self.firstShowWedStartTime(textShowTime24h);
            //    self.firstShowWedEndTime('');
            //    self.secondShowWedStartTime('');
            //    self.secondShowWedEndTime('');
            //} else {
            //    self.firstShowWedStartTime(textShowTimeClosed);
            //    self.firstShowWedEndTime('');
            //    self.secondShowWedStartTime('');
            //    self.secondShowWedEndTime('');
            //}
            //End Modified by SMILEDINING-SA20-0003
            //Added by SMILEDINING-SA20-0003
            if (_.first(filterFoodSetId).listFoodSetTimeMap()[3].isClosed()) {
                self.firstShowWedStartTime(textShowTimeClosed);
                self.firstShowWedEndTime('');
                self.showWedMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowWedStartTime('');
                //self.secondShowWedEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3
            } else {
                if (!_.first(filterFoodSetId).listFoodSetTimeMap()[3].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[3].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[3].firstEndTime() != "") {
                    self.firstShowWedStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[3].firstStartTime()) + ' - ');
                    self.firstShowWedEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[3].firstEndTime()));
                    //Modified by SMILEDINING-SA22-0034#3
                    //if (_.first(filterFoodSetId).listFoodSetTimeMap()[3].secondStartTime().trim().length > 0) {
                    //    self.secondShowWedStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[3].secondStartTime()) + ' - ');
                    //    self.secondShowWedEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[3].secondEndTime()));
                    //} else {
                    //    self.secondShowWedStartTime('');
                    //    self.secondShowWedEndTime('');
                    //}
                    //End Modified by SMILEDINING-SA22-0034#3
                    //Added by SMILEDINING-SA22-0034#3
                    self.showWedMultiTimeList([]);
                    ko.utils.arrayForEach(_.first(filterFoodSetId).listFoodSetTimeMap()[3].listMultiTime(), function (dataMultiTime) {
                        self.showWedMultiTimeList.push(new DataShowMultiTimeViewModel(
                            setTimeAMPM(dataMultiTime.startTime()),
                            setTimeAMPM(dataMultiTime.endTime()),                            
                        ));
                    });
                    //End Added by SMILEDINING-SA22-0034#3
                } else if (_.first(filterFoodSetId).listFoodSetTimeMap()[3].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[3].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[3].firstEndTime() != "") {
                    self.firstShowWedStartTime(textShowTime24h);
                    self.firstShowWedEndTime('');
                    self.showWedMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                    //Modified by SMILEDINING-SA22-0034#3
                    //self.secondShowWedStartTime('');
                    //self.secondShowWedEndTime('');
                    //End Modified by SMILEDINING-SA22-0034#3
                }
            }
            //End Added by SMILEDINING-SA20-0003

            //Thu
            //Modified by SMILEDINING-SA20-0003
            //if (!_.first(filterFoodSetId).listFoodSetTimeMap()[4].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[4].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[4].firstEndTime() != "") {
            //    self.firstShowThuStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[4].firstStartTime()) + ' - ');
            //    self.firstShowThuEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[4].firstEndTime()));
            //    if (_.first(filterFoodSetId).listFoodSetTimeMap()[4].secondStartTime().trim().length > 0) {
            //        self.secondShowThuStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[4].secondStartTime()) + ' - ');
            //        self.secondShowThuEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[4].secondEndTime()));
            //    } else {
            //        self.secondShowThuStartTime('');
            //        self.secondShowThuEndTime('');
            //    }
            //} else if (_.first(filterFoodSetId).listFoodSetTimeMap()[4].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[4].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[4].firstEndTime() != "") {
            //    self.firstShowThuStartTime(textShowTime24h);
            //    self.firstShowThuEndTime('');
            //    self.secondShowThuStartTime('');
            //    self.secondShowThuEndTime('');
            //} else {
            //    self.firstShowThuStartTime(textShowTimeClosed);
            //    self.firstShowThuEndTime('');
            //    self.secondShowThuStartTime('');
            //    self.secondShowThuEndTime('');
            //}
            //End Modified by SMILEDINING-SA20-0003

            //Added by SMILEDINING-SA20-0003
            if (_.first(filterFoodSetId).listFoodSetTimeMap()[4].isClosed()) {
                self.firstShowThuStartTime(textShowTimeClosed);
                self.firstShowThuEndTime('');
                self.showThuMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowThuStartTime('');
                //self.secondShowThuEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3
            } else {
                if (!_.first(filterFoodSetId).listFoodSetTimeMap()[4].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[4].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[4].firstEndTime() != "") {
                    self.firstShowThuStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[4].firstStartTime()) + ' - ');
                    self.firstShowThuEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[4].firstEndTime()));
                    //Modified by SMILEDINING-SA22-0034#3
                    //if (_.first(filterFoodSetId).listFoodSetTimeMap()[4].secondStartTime().trim().length > 0) {
                    //    self.secondShowThuStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[4].secondStartTime()) + ' - ');
                    //    self.secondShowThuEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[4].secondEndTime()));
                    //} else {
                    //    self.secondShowThuStartTime('');
                    //    self.secondShowThuEndTime('');
                    //}
                    //End Modified by SMILEDINING-SA22-0034#3
                    //Added by SMILEDINING-SA22-0034#3
                    self.showThuMultiTimeList([]);
                    ko.utils.arrayForEach(_.first(filterFoodSetId).listFoodSetTimeMap()[4].listMultiTime(), function (dataMultiTime) {
                        self.showThuMultiTimeList.push(new DataShowMultiTimeViewModel(
                            setTimeAMPM(dataMultiTime.startTime()),
                            setTimeAMPM(dataMultiTime.endTime()),                            
                        ));
                    });
                    //End Added by SMILEDINING-SA22-0034#3
                } else if (_.first(filterFoodSetId).listFoodSetTimeMap()[4].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[4].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[4].firstEndTime() != "") {
                    self.firstShowThuStartTime(textShowTime24h);
                    self.firstShowThuEndTime('');
                    self.showThuMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                    //Modified by SMILEDINING-SA22-0034#3
                    //self.secondShowThuStartTime('');
                    //self.secondShowThuEndTime('');
                    //End Modified by SMILEDINING-SA22-0034#3
                }
            }
            //End Added by SMILEDINING-SA20-0003

            //Fri
            //Modified by SMILEDINING-SA20-0003
            //if (!_.first(filterFoodSetId).listFoodSetTimeMap()[5].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[5].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[5].firstEndTime() != "") {
            //    self.firstShowFriStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[5].firstStartTime()) + ' - ');
            //    self.firstShowFriEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[5].firstEndTime()));
            //    if (_.first(filterFoodSetId).listFoodSetTimeMap()[5].secondStartTime().trim().length > 0) {
            //        self.secondShowFriStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[5].secondStartTime()) + ' - ');
            //        self.secondShowFriEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[5].secondEndTime()));
            //    } else {
            //        self.secondShowFriStartTime('');
            //        self.secondShowFriEndTime('');
            //    }
            //} else if (_.first(filterFoodSetId).listFoodSetTimeMap()[5].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[5].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[5].firstEndTime() != "") {
            //    self.firstShowFriStartTime(textShowTime24h);
            //    self.firstShowFriEndTime('');
            //    self.secondShowFriStartTime('');
            //    self.secondShowFriEndTime('');
            //} else {
            //    self.firstShowFriStartTime(textShowTimeClosed);
            //    self.firstShowFriEndTime('');
            //    self.secondShowFriStartTime('');
            //    self.secondShowFriEndTime('');
            //}
            //End Modified by SMILEDINING-SA20-0003

            //Added by SMILEDINING-SA20-0003
            if (_.first(filterFoodSetId).listFoodSetTimeMap()[5].isClosed()) {
                self.firstShowFriStartTime(textShowTimeClosed);
                self.firstShowFriEndTime('');
                self.showFriMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowFriStartTime('');
                //self.secondShowFriEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3
            } else {
                if (!_.first(filterFoodSetId).listFoodSetTimeMap()[5].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[5].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[5].firstEndTime() != "") {
                    self.firstShowFriStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[5].firstStartTime()) + ' - ');
                    self.firstShowFriEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[5].firstEndTime()));
                    //Modified by SMILEDINING-SA22-0034#3
                    //if (_.first(filterFoodSetId).listFoodSetTimeMap()[5].secondStartTime().trim().length > 0) {
                    //    self.secondShowFriStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[5].secondStartTime()) + ' - ');
                    //    self.secondShowFriEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[5].secondEndTime()));
                    //} else {
                    //    self.secondShowFriStartTime('');
                    //    self.secondShowFriEndTime('');
                    //}
                    //End Modified by SMILEDINING-SA22-0034#3
                    //Added by SMILEDINING-SA22-0034#3
                    self.showFriMultiTimeList([]);
                    ko.utils.arrayForEach(_.first(filterFoodSetId).listFoodSetTimeMap()[5].listMultiTime(), function (dataMultiTime) {
                        self.showFriMultiTimeList.push(new DataShowMultiTimeViewModel(
                            setTimeAMPM(dataMultiTime.startTime()),
                            setTimeAMPM(dataMultiTime.endTime()),                            
                        ));
                    });
                    //End Added by SMILEDINING-SA22-0034#3
                } else if (_.first(filterFoodSetId).listFoodSetTimeMap()[5].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[5].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[5].firstEndTime() != "") {
                    self.firstShowFriStartTime(textShowTime24h);
                    self.firstShowFriEndTime('');
                    self.showFriMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                    //Modified by SMILEDINING-SA22-0034#3
                    //self.secondShowFriStartTime('');
                    //self.secondShowFriEndTime('');
                    //End Modified by SMILEDINING-SA22-0034#3
                }
            }
            //End Added by SMILEDINING-SA20-0003

            //Sat
            //Modified by SMILEDINING-SA20-0003
            //if (!_.first(filterFoodSetId).listFoodSetTimeMap()[6].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[6].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[6].firstEndTime() != "") {
            //    self.firstShowSatStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[6].firstStartTime()) + ' - ');
            //    self.firstShowSatEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[6].firstEndTime()));
            //    if (_.first(filterFoodSetId).listFoodSetTimeMap()[6].secondStartTime().trim().length > 0) {
            //        self.secondShowSatStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[6].secondStartTime()) + ' - ');
            //        self.secondShowSatEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[6].secondEndTime()));
            //    } else {
            //        self.secondShowSatStartTime('');
            //        self.secondShowSatEndTime('');
            //    }
            //} else if (_.first(filterFoodSetId).listFoodSetTimeMap()[6].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[6].firstStartTime() != ""
            //    && _.first(filterFoodSetId).listFoodSetTimeMap()[6].firstEndTime() != "") {
            //    self.firstShowSatStartTime(textShowTime24h);
            //    self.firstShowSatEndTime('');
            //    self.secondShowSatStartTime('');
            //    self.secondShowSatEndTime('');
            //} else {
            //    self.firstShowSatStartTime(textShowTimeClosed);
            //    self.firstShowSatEndTime('');
            //    self.secondShowSatStartTime('');
            //    self.secondShowSatEndTime('');
            //}
            //End Modified by SMILEDINING-SA20-0003

            //Added by SMILEDINING-SA20-0003
            if (_.first(filterFoodSetId).listFoodSetTimeMap()[6].isClosed()) {
                self.firstShowSatStartTime(textShowTimeClosed);
                self.firstShowSatEndTime('');
                self.showSatMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowSatStartTime('');
                //self.secondShowSatEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3
            } else {
                if (!_.first(filterFoodSetId).listFoodSetTimeMap()[6].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[6].firstStartTime() != ""
                && _.first(filterFoodSetId).listFoodSetTimeMap()[6].firstEndTime() != "") {
                    self.firstShowSatStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[6].firstStartTime()) + ' - ');
                    self.firstShowSatEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[6].firstEndTime()));
                    //Modified by SMILEDINING-SA22-0034#3
                    //if (_.first(filterFoodSetId).listFoodSetTimeMap()[6].secondStartTime().trim().length > 0) {
                    //    self.secondShowSatStartTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[6].secondStartTime()) + ' - ');
                    //    self.secondShowSatEndTime(setTimeAMPM(_.first(filterFoodSetId).listFoodSetTimeMap()[6].secondEndTime()));
                    //} else {
                    //    self.secondShowSatStartTime('');
                    //    self.secondShowSatEndTime('');
                    //}
                    //End Modified by SMILEDINING-SA22-0034#3
                    //Added by SMILEDINING-SA22-0034#3
                    self.showSatMultiTimeList([]);
                    ko.utils.arrayForEach(_.first(filterFoodSetId).listFoodSetTimeMap()[6].listMultiTime(), function (dataMultiTime) {
                        self.showSatMultiTimeList.push(new DataShowMultiTimeViewModel(
                            setTimeAMPM(dataMultiTime.startTime()),
                            setTimeAMPM(dataMultiTime.endTime()),                            
                        ));
                    });
                    //End Added by SMILEDINING-SA22-0034#3
                } else if (_.first(filterFoodSetId).listFoodSetTimeMap()[6].active24Hour() && _.first(filterFoodSetId).listFoodSetTimeMap()[6].firstStartTime() != ""
                    && _.first(filterFoodSetId).listFoodSetTimeMap()[6].firstEndTime() != "") {
                    self.firstShowSatStartTime(textShowTime24h);
                    self.firstShowSatEndTime('');
                    self.showSatMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                    //Modified by SMILEDINING-SA22-0034#3
                    //self.secondShowSatStartTime('');
                    //self.secondShowSatEndTime('');
                    //End Modified by SMILEDINING-SA22-0034#3
                }
            }
            //End Added by SMILEDINING-SA20-0003

            //All Days 24 Hour
            if (_.first(filterFoodSetId).listFoodSetTimeMap()[0].firstStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[0].firstEndTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[0].secondStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[0].secondEndTime() == '' &&
                _.first(filterFoodSetId).listFoodSetTimeMap()[1].firstStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[1].firstEndTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[1].secondStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[1].secondEndTime() == '' &&
                _.first(filterFoodSetId).listFoodSetTimeMap()[2].firstStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[2].firstEndTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[2].secondStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[2].secondEndTime() == '' &&
                _.first(filterFoodSetId).listFoodSetTimeMap()[3].firstStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[3].firstEndTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[3].secondStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[3].secondEndTime() == '' &&
                _.first(filterFoodSetId).listFoodSetTimeMap()[4].firstStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[4].firstEndTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[4].secondStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[4].secondEndTime() == '' &&
                _.first(filterFoodSetId).listFoodSetTimeMap()[5].firstStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[5].firstEndTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[5].secondStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[5].secondEndTime() == '' &&
                _.first(filterFoodSetId).listFoodSetTimeMap()[6].firstStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[6].firstEndTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[6].secondStartTime() == '' && _.first(filterFoodSetId).listFoodSetTimeMap()[6].secondEndTime() == ''
                ) {

                //Sun
                self.firstShowSunStartTime(textShowTime24h);
                self.firstShowSunEndTime('');
                self.showSunMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowSunStartTime('');
                //self.secondShowSunEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3

                //Mon
                self.firstShowMonStartTime(textShowTime24h);
                self.firstShowMonEndTime('');
                self.showMonMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowMonStartTime('');
                //self.secondShowMonEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3

                //Tue
                self.firstShowTueStartTime(textShowTime24h);
                self.firstShowTueEndTime('');
                self.showTueMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowTueStartTime('');
                //self.secondShowTueEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3

                //Wed
                self.firstShowWedStartTime(textShowTime24h);
                self.firstShowWedEndTime('');
                self.showWedMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowWedStartTime('');
                //self.secondShowWedEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3

                //Thu
                self.firstShowThuStartTime(textShowTime24h);
                self.firstShowThuEndTime('');
                self.showThuMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowThuStartTime('');
                //self.secondShowThuEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3

                //Fri
                self.firstShowFriStartTime(textShowTime24h);
                self.firstShowFriEndTime('');
                self.showFriMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowFriStartTime('');
                //self.secondShowFriEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3

                //Sat
                self.firstShowSatStartTime(textShowTime24h);
                self.firstShowSatEndTime('');
                self.showSatMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
                //Modified by SMILEDINING-SA22-0034#3
                //self.secondShowSatStartTime('');
                //self.secondShowSatEndTime('');
                //End Modified by SMILEDINING-SA22-0034#3
            }
        } else {
            //Sun
            self.firstShowSunStartTime(textShowTime24h);
            self.firstShowSunEndTime('');
            self.showSunMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
            //Modified by SMILEDINING-SA22-0034#3
            //self.secondShowSunStartTime('');
            //self.secondShowSunEndTime('');
            //End Modified by SMILEDINING-SA22-0034#3

            //Mon
            self.firstShowMonStartTime(textShowTime24h);
            self.firstShowMonEndTime('');
            self.showMonMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
            //Modified by SMILEDINING-SA22-0034#3
            //self.secondShowMonStartTime('');
            //self.secondShowMonEndTime('');
            //End Modified by SMILEDINING-SA22-0034#3

            //Tue
            self.firstShowTueStartTime(textShowTime24h);
            self.firstShowTueEndTime('');
            self.showTueMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
            //Modified by SMILEDINING-SA22-0034#3
            //self.secondShowTueStartTime('');
            //self.secondShowTueEndTime('');
            //End Modified by SMILEDINING-SA22-0034#3

            //Wed
            self.firstShowWedStartTime(textShowTime24h);
            self.firstShowWedEndTime('');
            self.showWedMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
            //Modified by SMILEDINING-SA22-0034#3
            //self.secondShowWedStartTime('');
            //self.secondShowWedEndTime('');
            //End Modified by SMILEDINING-SA22-0034#3

            //Thu
            self.firstShowThuStartTime(textShowTime24h);
            self.firstShowThuEndTime('');
            self.showThuMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
            //Modified by SMILEDINING-SA22-0034#3
            //self.secondShowThuStartTime('');
            //self.secondShowThuEndTime('');
            //End Modified by SMILEDINING-SA22-0034#3

            //Fri
            self.firstShowFriStartTime(textShowTime24h);
            self.firstShowFriEndTime('');
            self.showFriMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
            //Modified by SMILEDINING-SA22-0034#3
            //self.secondShowFriStartTime('');
            //self.secondShowFriEndTime('');
            //End Modified by SMILEDINING-SA22-0034#3

            //Sat
            self.firstShowSatStartTime(textShowTime24h);
            self.firstShowSatEndTime('');
            self.showSatMultiTimeList([]); //Added and End by SMILEDINING-SA22-0034#3
            //Modified by SMILEDINING-SA22-0034#3
            //self.secondShowSatStartTime('');
            //self.secondShowSatEndTime('');
            //End Modified by SMILEDINING-SA22-0034#3
        }
    }
};

//Added by SMILEDINING-SA22-0034#3
function DataShowMultiTimeViewModel(startTime, endTime) {
    var self = this;
    self.startTime = ko.observable(startTime);
    self.endTime = ko.observable(endTime);
}
//End Added by SMILEDINING-SA22-0034#3

//function DataMenuSetupViewModel(data, dataFoodSettimeMap) {   //Modified and End by SMILEDINING-SA21-0014#7
//function DataMenuSetupViewModel(data, dataFoodSettimeMap, productId) { //Added and End by SMILEDINING-SA21-0014#7 //Modified and End by WEB-SA23-0048
function DataMenuSetupViewModel(data, productId) { //Added and End by WEB-SA23-0048
    var self = vmViewIndex.menu;
    ClearDataMenuSetupViewModel();

    if (data.listFoodChoiceMap != null)
        ko.mapping.fromJS(data.listFoodChoiceMap, {}, self.foodChoiceMap);

    if (data.listRevenueClass != null)
        ko.mapping.fromJS(data.listRevenueClass, {}, self.dataSetupFoodModal.dataRevenueClass);

    if (data.listChoiceOption != null)
        self.dataSetupFoodModal.dataAllChoiceOption(data.listChoiceOption);

    if (data.listChoice != null)
        self.dataSetupFoodModal.dataAllChoice(data.listChoice);

    if (data.groupChoiceOptionId != null)
        self.dataSetupFoodModal.groupChoiceOptionId(data.groupChoiceOptionId);

    //Added by SMILEDINING-SA21-0014
    if (data.listProductTag != null)
        ko.mapping.fromJS(data.listProductTag, {}, self.dataSetupFoodModal.cloneArrayProductTag);
    //End Added by SMILEDINING-SA21-0014

    //Added by SMILEDINING-SA21-0018
    if (data.listThirdPartyGroup != null)
        ko.mapping.fromJS(data.listThirdPartyGroup, {}, self.thirdPartyGroupStore);

    if (data.listThirdParty != null)
        ko.mapping.fromJS(data.listThirdParty, {}, self.thirdPartyStore);

    if (data.listFoodThirdParty != null)
        ko.mapping.fromJS(data.listFoodThirdParty, {}, self.listFoodThirdPartyStore);
    //End Added by SMILEDINING-SA21-0018  

    //Added by SMILEDINING-SA21-0021
    if (data.listIcon != null)
        ko.mapping.fromJS(data.listIcon, {}, self.dataSetupFoodModal.cloneArrayIcon);

    if (data.listFoodIconMap != null)
        ko.mapping.fromJS(data.listFoodIconMap, {}, self.listFoodIconMap);
    //End Added by SMILEDINING-SA21-0021

    //Added by WEB-SA22-0064#1
    if ((!productId.includes(products.cSmileDining) && !productId.includes(products.cSmileContactless)) || !productId.includes(products.cSmileThirdPartyIntegrations)) {
        var filterFoodSet = ko.utils.arrayFilter(data.listFoodSet, function (item) {
            if (productId.includes(products.cSmileThirdPartyIntegrations))
                return item.isThirdParty == true;
            else
                return item.isThirdParty == false;
        });
        data.listFoodSet = filterFoodSet;
    }    
    //End Added by WEB-SA22-0064#1

    //Added by SMILEDINING-SA21-0018#11
    //Modified by WEB-SA22-0064#1
    //if (!productId.includes(products.cSmileThirdPartyIntegrations)) {
    //    var filterFoodSet = ko.utils.arrayFilter(data.listFoodSet, function (item) {
    //        return item.isThirdParty == false;
    //    });
    //    data.listFoodSet = filterFoodSet;
    //}
    //End Modified by WEB-SA22-0064#1
    //End Added by SMILEDINING-SA21-0018#11
    //Added by SMILEDINING-SA20-0006
    self.arrMultiProduct = ko.observableArray([]);

    //Added by SMILEDINING-SA21-0014#7
    var arrProductList = [];
    var arrProductFilter = [];
    arrProductFilter.push({
        name: products.mapName[products.cAllProduct].name,
        id: products.cAllProduct
    });
    var arrProductId = productId.split(',');
    ko.utils.arrayForEach(arrProductId, function (id) {
        if (id == products.cSmileDining) {
            arrProductFilter.push({
                name: products.mapName[products.cSmileDining].name,
                id: products.cSmileDining
            });
            arrProductList.push(products.cSmileDining);
        }
        if (id == products.cSmileContactless) {
            arrProductFilter.push({
                name: products.mapName[products.cSmileContactless].name,
                id: products.cSmileContactless
            });
            arrProductList.push(products.cSmileContactless);
        }
        if (id == products.cSmileThirdPartyIntegrations) {
            arrProductFilter.push({
                name: products.mapName[products.cSmileThirdPartyIntegrations].name,
                id: products.cSmileThirdPartyIntegrations
            });
            arrProductList.push(products.cSmileThirdPartyIntegrations);
        }
    });
    if (arrProductList.length > 1) {        
        self.showFilterProduct(true);       
    }
    self.arrProductFilter(arrProductFilter.slice(0));

    self.valueProduct(products.cAllProduct);
    self.selectProduct({
        dataSource: new DevExpress.data.ArrayStore({
            data: self.arrProductFilter(),
            key: 'id'
        }),
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.valueProduct,
        placeholder: 'Select Product',
        onItemClick: function (item) {
            var productID = item.itemData.id;
            self.valueProduct(productID);
            vmViewIndex.showLoading(true);
            setTimeout(function () {
                //MapDataMenu(self.foodSetJs(), self.foodCategoryJs(), self.foodJs(), self.foodSetTimeMapJs(), self.valueFilterMenuFoodSet(), self.valueFilterMenuFoodCat(), data.valueFilterMenuFood(), productID);    //Modified and End by SMILEDINING-SA21-0014#9
                MapDataMenu(self.foodSetJs(), self.foodCategoryJs(), self.foodJs(), self.foodSetTimeMapJs(), self.valueFilterMenuFoodSet(), self.valueFilterMenuFoodCat(), self.valueFilterMenuFood(), productID);  //Added and End by SMILEDINING-SA21-0014#9
                vmViewIndex.showLoading(false);
                foodSetClick();
            //}, 3000); //Modified and End by SMILEDINING-SA21-0058
            }, 0); //Added and End by SMILEDINING-SA21-0058
        }
    });
    //End Added by SMILEDINING-SA21-0014#7

    if (data.listFood != null) {
        ko.utils.arrayForEach(data.listFood, function (value) {
            var dataFood = value.productId;
            if (dataFood != null) {
                var arrProductId = dataFood.split(',');
                //Modified by SMILEDINING-SA21-0014#7
                //if (arrProductId.includes(products.cSmileDining) && arrProductId.includes(products.cSmileContactless)) {
                //    self.showFilterProduct(true);
                //}
                //End Modified by SMILEDINING-SA21-0014#7
                value.arrProduct = new Array();
                ko.utils.arrayForEach(arrProductId, function (arrProductIdVal) {
                    value.arrProduct.push(arrProductIdVal);
                });
            }
        });
    }
    //const arrProductList = [products.cSmileDining, products.cSmileContactless];//Modified and End by SMILEDINING-SA21-0014
    //Modified by SMILEDINING-SA21-0014#7
    //const arrProductList = [products.cSmileDining, products.cSmileContactless, products.cSmileThirdPartyIntegrations];  //Added and End by SMILEDINING-SA21-0014
    //self.arrProductAll = ko.observableArray([]);
    //End Modified by SMILEDINING-SA21-0014#7
    self.arrProductAll([]); //Added and End by SMILEDINING-SA21-0014#7
    if (arrProductList.length > 0) {
        _.forEach(arrProductList, function (value) {
            self.arrProductAll.push(value);
        });
    };
    self.defaultValueFilterProduct = ko.observable(products.cAllProduct);
    //End Added by SMILEDINING-SA20-0006

    if (data.listFoodSet != null) {
        //MapDataMenu(data.listFoodSet, data.listFoodCategory, data.listFood, dataFoodSettimeMap, self.valueFilterMenuFoodSet(), self.valueFilterMenuFoodCat(), self.valueFilterMenuFood());    //Modified by SMILEDINING-SA20-0006
        //MapDataMenu(data.listFoodSet, data.listFoodCategory, data.listFood, dataFoodSettimeMap, self.valueFilterMenuFoodSet(), self.valueFilterMenuFoodCat(), self.valueFilterMenuFood(), self.defaultValueFilterProduct()); //Added and End by SMILEDINING-SA20-0006 //Modified and End by WEB-SA23-0048
        MapDataMenu(data.listFoodSet, data.listFoodCategory, data.listFood, data.listFoodSetTimeMap, self.valueFilterMenuFoodSet(), self.valueFilterMenuFoodCat(), self.valueFilterMenuFood(), self.defaultValueFilterProduct()); //Added and End by WEB-SA23-0048
    }

    //detail food
    ko.utils.arrayForEach(self.foodSet(), function (itemFoodSet) {
        //self.optionSelectPickerFoodSet.push(new optionSelectFoodSet(itemFoodSet.foodSetId(), itemFoodSet.foodSetName()));   //Modified and End by SMILEDINING-SA21-0018#8
        //Added by SMILEDINING-SA21-0018#8
        if (!itemFoodSet.isThirdParty()) {
            self.optionSelectPickerFoodSet.push(new optionSelectFoodSet(itemFoodSet.foodSetId(), itemFoodSet.foodSetName()));
        } else {
            self.optionSelectPickerFoodSetThirdParty.push(new optionSelectFoodSet(itemFoodSet.foodSetId(), itemFoodSet.foodSetName()));
        }
        //End Added by SMILEDINING-SA21-0018#8
    });
    ko.utils.arrayForEach(self.food(), function (itemFood) {
        if (itemFood.active()) {
            self.optionSelectPickerCopyFood.push(new optionSelectFood(itemFood.foodId(), itemFood.foodName()));
        }
    });

    if (data.listRevenueClass != null) {
        ko.utils.arrayForEach(self.dataSetupFoodModal.dataRevenueClass(), function (itemRev) {
            self.optionSelectPickerRevenue.push(new optionSelectRevenue(itemRev.revenueClassId(), itemRev.revenueClassName(), itemRev.taxRateId()));
        });
    }

    //option
    if (data.listChoiceOption != null) {
        ko.utils.arrayForEach(data.listChoiceOption, function (value) {
            //self.optionSelectPickerChoiceOption.push(new optionSelectChoiceOption(value.choiceOptionId, value.choiceOptionName)); //Modified and End by SMILEDINING-SA21-0066#21
            self.optionSelectPickerChoiceOption.push(new optionSelectChoiceOption(value.choiceOptionId, value.choiceOptionName, value.plu)); //Added and End by SMILEDINING-SA21-0066#21
        });
        //self.optionSelectPickerChoiceOptionInit(data.listChoiceOption); //Added and End by SMILEDINING-SA21-0066#7 //Modified and End by SMILEDINING-SA21-0066#21
    }

    if (!isEmpty(self.tempDataMenu())) {
        self.selectFoodSetId(_.first(self.dataMenu()).foodSet.foodSetId());
        self.selectFoodSetName(_.first(self.dataMenu()).foodSet.foodSetName());
        self.selectFoodSetSorting(_.first(self.dataMenu()).foodSet.foodSetSorting());
        self.selectFoodSetActive(_.first(self.dataMenu()).foodSet.active());
        self.selectFoodSetIsThirdParty(_.first(self.dataMenu()).foodSet.isThirdParty());    //Added and End by SMILEDINING-SA21-0018
        self.selectFoodSetThirdPartyIntegProviderId(_.first(self.dataMenu()).foodSet.thirdPartyIntegrationsProviderId());    //Added and End by WEB-SA23-0048
        $('#tabFoodSet' + self.selectFoodSetSorting()).click();
    }
};

function MapDataFoodSet(foodSetId, foodSetName, foodSetSorting, timeComplete, foodSetChar, foodSetBgColor, createOn, allDays, active) {
    var self = this;
    self.foodSetId = ko.observable(foodSetId);
    self.foodSetName = ko.observable(foodSetName);
    self.foodSetSorting = ko.observable(foodSetSorting);
    self.timeComplete = ko.observable(timeComplete);
    self.foodSetChar = ko.observable(foodSetChar);
    self.foodSetBgColor = ko.observable(foodSetBgColor);
    self.createOn = ko.observable(createOn);
    self.allDays = ko.observable(allDays);
    self.active = ko.observable(active);
};

//function MapDataMenu(listFoodSetJs, listFoodCatJs, listFoodJs, listFoodSetTimeMapJs, foodSetFilter, foodCatFilter, foodFilter) {      //Modified by SMILEDINING-SA20-0006
function MapDataMenu(listFoodSetJs, listFoodCatJs, listFoodJs, listFoodSetTimeMapJs, foodSetFilter, foodCatFilter, foodFilter, productFilter) { //Added and End by SMILEDINING-SA20-0006
    var self = vmViewIndex.menu;
    ClearMapDataMenu();
    self.foodSetJs(listFoodSetJs);
    self.foodCategoryJs(listFoodCatJs);
    self.foodJs(listFoodJs);
    self.foodSetTimeMapJs(listFoodSetTimeMapJs);

    if (listFoodSetJs != null) {
        listFoodSetJs.sort(function (item1, item2) {
            return item1.foodSetSorting - item2.foodSetSorting;
        });
    }

    if (listFoodCatJs != null) {
        listFoodCatJs.sort(function (item1, item2) {
            return item1.foodCatSorting - item2.foodCatSorting;
        });
    }

    if (listFoodJs != null) {
        listFoodJs.sort(function (item1, item2) {
            return item1.foodSorting - item2.foodSorting;
        });
    }

    ko.mapping.fromJS(self.foodSetJs(), {}, self.foodSet);
    ko.mapping.fromJS(self.foodCategoryJs(), {}, self.foodCategory);
    ko.mapping.fromJS(self.foodJs(), {}, self.food);
    ko.mapping.fromJS(self.foodSetTimeMapJs(), {}, self.tempDataShowTime);

    //1 active , 2 deactive, 3 all
    if (foodSetFilter == 1) {
        self.foodSet(ko.utils.arrayFilter(self.foodSet(), function (itemFoodSet) {
            return itemFoodSet.active() == true;
        }));
    } else if (foodSetFilter == 2) {
        self.foodSet(ko.utils.arrayFilter(self.foodSet(), function (itemFoodSet) {
            return itemFoodSet.active() == false;
        }));
    }

    if (foodCatFilter == 1) {
        self.foodCategory(ko.utils.arrayFilter(self.foodCategory(), function (itemFoodCat) {
            return itemFoodCat.active() == true;
        }));
    } else if (foodCatFilter == 2) {
        self.foodCategory(ko.utils.arrayFilter(self.foodCategory(), function (itemFoodCat) {
            return itemFoodCat.active() == false;
        }));
    }

    if (foodFilter == 1) {
        self.food(ko.utils.arrayFilter(self.food(), function (itemFood) {
            return itemFood.active() == true;
        }));
    } else if (foodFilter == 2) {
        self.food(ko.utils.arrayFilter(self.food(), function (itemFood) {
            return itemFood.active() == false;
        }));
    }

    //Added by SMILEDINING-SA20-0006
    if (productFilter == products.cSmileDining) {
        self.food(ko.utils.arrayFilter(self.food(), function (itemFood) {
            return itemFood.arrProduct().includes(products.cSmileDining);
        }));
    } else if (productFilter == products.cSmileContactless) {
        self.food(ko.utils.arrayFilter(self.food(), function (itemFood) {
            return itemFood.arrProduct().includes(products.cSmileContactless);
        }));
    }
    //Added by SMILEDINING-SA21-0014#7
    else if (productFilter == products.cSmileThirdPartyIntegrations) {
        self.food(ko.utils.arrayFilter(self.food(), function (itemFood) {
            return itemFood.arrProduct().includes(products.cSmileThirdPartyIntegrations);
        }));
    }
    //End Added by SMILEDINING-SA21-0014#7
    //End Added by SMILEDINING-SA20-0006

    ko.utils.arrayForEach(self.foodSet(), function (itemFoodSet) {
        ko.utils.arrayForEach(self.foodCategory(), function (itemFoodCategory) {
            var filterFood = ko.utils.arrayFilter(self.food(), function (itemFood) {
                return (itemFood.foodCatId() == itemFoodCategory.foodCatId()) && (itemFood.foodSetId() == itemFoodSet.foodSetId());
            });
            if (!isEmpty(filterFood)) {
                self.tempDataMenu.push(new DataMenuViewModel(itemFoodSet, itemFoodCategory, filterFood));
                self.tempDataFoodCategory.push(new optionSelectFoodCategory(itemFoodCategory.foodCatId(), itemFoodCategory.foodCatName(), itemFoodSet.foodSetId()));
            }
        });
    });
    self.dataMenu(self.tempDataMenu().slice());
}

function ClearMapDataMenu() {
    var self = vmViewIndex.menu;
    self.foodSet([]);
    self.foodCategory([]);
    self.food([]);
    self.tempDataMenu([]);
    self.tempDataFoodCategory([]);
}

function ClearDataMenuSetupViewModel() {
    var self = vmViewIndex.menu;
    self.dataMenu([]);
    self.foodSet([]);
    self.foodCategory([]);
    self.food([]);
    self.tempDataMenu([]);
    self.selectFoodSetId();
    self.selectFoodSetName();
    self.selectFoodSetSorting();
    self.selectFoodSetIsThirdParty();   //Added and End by SMILEDINING-SA21-0018
    self.selectFoodSetThirdPartyIntegProviderId();   //Added and End by WEB-SA23-0048
    self.selectFoodSetActive(true);
    self.chkBtnAddFoodSet(true);
    self.tempDataDragging([]);
    self.tempItemDragging([]);
    self.tempDataFoodCategory([]);
    self.chkDrag(false);
    self.chkSave(false);

    self.choiceOptions([]);
    self.choice([]);
    self.optionSelectPickerFoodSet([]);
    self.optionSelectPickerFoodSetThirdParty([]);   //Added and End by SMILEDINING-SA21-0018#8
    self.optionSelectPickerFoodCategory([]);
    self.optionSelectPickerRevenue([]);
    self.optionSelectPickerCopyFood([]);
    self.optionSelectPickerChoiceOption([]);
    //self.optionSelectPickerChoiceOptionInit([]); //Added and End by SMILEDINING-SA21-0066#7 //Modified and End by SMILEDINING-SA21-0066#21
    self.optionSelectPickerChoiceOptionTemp([]);
};

function DataFoodSetViewModel(data) {
    var self = this;
    self.foodSetId = ko.observable(data.foodSetId);
    self.foodSetName = ko.observable(data.foodSetName);
    self.foodSetChar = ko.observable(data.foodSetChar);
    self.foodSetSorting = ko.observable(data.foodSetSorting);
    self.isThirdParty = ko.observable(data.isThirdParty);   //Added and End by SMILEDINING-SA21-0018
    self.thirdPartyIntegrationsProviderId = ko.observable(data.thirdPartyIntegrationsProviderId);   //Added and End by WEB-SA23-0048
    self.active = ko.observable(data.active);
};

function DataFoodChoiceMapViewModel(data) {
    var self = this;
    self.foodChoiceMapId = ko.observable(data.foodChoiceMapId);
    self.foodId = ko.observable(data.foodId);
    self.tempId = ko.observable(data.tempId);
    self.choiceOptionId = ko.observable(data.choiceOptionId);
    self.choiceOptionName = ko.observable(data.choiceOptionName);
    self.choiceId = ko.observable(data.choiceId);
    self.choiceName = ko.observable(data.choiceName);
    self.choicePrice = ko.observable(data.choicePrice);
    self.isDefault = ko.observable(data.isDefault);
};

function DataFoodCategoryViewModel(data) {
    var self = this;
    self.foodCatId = ko.observable(data.foodCatId);
    self.foodCatName = ko.observable(data.foodCatName);
    self.foodCatDesc = ko.observable(data.foodCatDesc);
    self.foodCatColor = ko.observable(data.foodCatColor);
    self.foodCatIcon = ko.observable(data.foodCatIcon);
    self.foodCatParent = ko.observable(data.foodCatParent);
    self.foodCatSorting = ko.observable(data.foodCatSorting);
    self.createOn = ko.observable(data.createOn);
    self.priority = ko.observable(data.priority);
    self.active = ko.observable(data.active);
};

function DataFoodViewModel(data) {
    var self = this;
    self.foodId = ko.observable(data.foodId);
    self.tempId = ko.observable(data.tempId);
    self.foodName = ko.observable(data.foodName);
    self.foodNameAlt = ko.observable(data.foodNameAlt);
    self.foodDesc = ko.observable(data.foodDesc);
    self.foodPrice = ko.observable(data.foodPrice);
    self.foodSorting = ko.observable(data.foodSorting);
    self.image = ko.observable(data.image);
    self.foodSetId = ko.observable(data.foodSetId);
    self.foodCatId = ko.observable(data.foodCatId);
    self.revenueClassId = ko.observable(data.revenueClassId);
    self.taxRateId = ko.observable(data.taxRateId);
    self.active = ko.observable(data.active);
    self.createOn = ko.observable(data.createOn);
    self.modifyOn = ko.observable(data.modifyOn);
    self.allChoiceOptions = ko.observable(data.allChoiceOptions);
    self.choiceOption = ko.observable(data.choiceOption);
    self.qtyLimit = ko.observable(data.qtyLimit);       //Added and End by SMILEDINING-SA20-0003
    //Added by SMILEDINING-SA20-0006
    self.productId = ko.observable(data.productId);
    self.arrProduct = ko.observableArray(data.arrProduct);
    //End Added by SMILEDINING-SA20-0006
    self.isOutStock = ko.observable(data.isOutStock); //Added and End by SMILEDINING-SA20-0010
    //Added by SMILEDINING-SA20-0016
    self.isFree = ko.observable(data.isFree);
    self.isShow = ko.observable(data.isShow);
    //End Added by SMILEDINING-SA20-0016
    self.listProductTag = ko.observableArray(data.listProductTag);  //Added and End by SMILEDINING-SA21-0014
    //Added by SMILEDINING-SA21-0018#2
    self.isThirdParty = ko.observable(data.isThirdParty);
    self.foodBaseId = ko.observable(data.foodBaseId);
    self.thirdPartyGroupId = ko.observable(data.thirdPartyGroupId);
    //End Added by SMILEDINING-SA21-0018#2
    //Added by SMILEDINING-SA21-0066#6
    self.imageThirdParty = ko.observable(data.imageThirdParty == null ? '' : data.imageThirdParty);
    self.plu = ko.observable(data.plu == null ? '' : data.plu);
    //End Added by SMILEDINING-SA21-0066#6
    self.thirdPartyIntegrationsProviderId = ko.observable(data.thirdPartyIntegrationsProviderId); //Added and End by WEB-SA23-0048
};

//Added by SMILEDINING-SA20-0007
function DataStatementHeaderViewModel() {
    var self = this;
    self.data = ko.observableArray([]);
    self.value = ko.observable();
    self.chkWidth = ko.observable($(window).width());
    self.setWidth = ko.observable(360);
    //Added by WEB-SA23-0035#1
    self.valSelectStatementType = ko.observable('1');

    self.selectStatementTypeStore = new DevExpress.data.ArrayStore({
        key: 'id',
        data: [
            { id: statementTypes.cWeekly, name: statementTypes.mapName[statementTypes.cWeekly].name },
            { id: statementTypes.cMonthly, name: statementTypes.mapName[statementTypes.cMonthly].name },
        ],
    });

    self.selectStatementType = ko.observable({
        dataSource: self.selectStatementTypeStore,
        displayExpr: 'name',
        valueExpr: 'id',
        value: self.valSelectStatementType,
        placeholder: 'Select Statement Type',
        onValueChanged: function (data) {
            vmViewIndex.showLoading(true);
            setTimeout(function () { 
                getObjFormAjax(cJsonUpdateStatementType, data.value);
                var dataStatement = JSON.parse(getObjFormAjax(cJsonGetStatement, ""));
                DataStatementViewModel(dataStatement);
                vmViewIndex.showLoading(false);
            }, 0);
        }
    });
    //End Added by WEB-SA23-0035#1

    self.selectStatementHeader = ko.observable({
        dataSource: self.data,
        displayExpr: function (data) {
            if (vmViewIndex.statement.statementHeader.chkWidth() <= 414) {
                if (data != null || data != undefined ? data.isWeekly() : false) {
                    return data ? ('Week ' + data.weekOfNumber() + ' : ' + data.count() + ' orders') : '';
                } else {
                    return data ? (data.monthOfYear() + ' : ' + data.count() + ' orders') : '';
                }
                self.setWidth('auto');
            } else {
                if (data != null || data != undefined ? data.isWeekly() : false) {
                    return data ? ('Week ' + data.weekOfNumber() + ' : ' + data.startDate() + ' - ' + data.endDate() + ' : ' + data.count() + ' orders') : '';
                } else {
                    return data ? (data.monthOfYear() + ' : ' + data.startDate() + ' - ' + data.endDate() + ' : ' + data.count() + ' orders') : '';
                }
                self.setWidth('auto');
            }
            $('#selectStatementHeader').dxSelectBox('instance').repaint();
        },
        valueExpr: 'id',
        value: self.value,
        dropDownButtonTemplate: 'dropDownButton',
        itemTemplate: function (data) {
            if (vmViewIndex.statement.statementHeader.chkWidth() <= 414) {
                if (data != null || data != undefined ? data.isWeekly() : false) {
                    return 'Week ' + data.weekOfNumber() + ' : ' + data.count() + ' orders';
                } else {
                    return data.monthOfYear() + ' : ' + data.count() + ' orders';
                }
                self.setWidth('auto');
            } else {
                if (data != null || data != undefined ? data.isWeekly() : false) {
                    return 'Week ' + data.weekOfNumber() + ' : ' + data.startDate() + ' - ' + data.endDate() + ' : ' + data.count() + ' orders';
                } else {
                    return data.monthOfYear() + ' : ' + data.startDate() + ' - ' + data.endDate() + ' : ' + data.count() + ' orders';
                }
                self.setWidth('auto');
            }
            $('#selectStatementHeader').dxSelectBox('instance').repaint();
        },
        onItemClick: function (item) {
            if (item.itemData != null) {
                var filter = ko.utils.arrayFilter(vmViewIndex.statement.statementHeader.data(), function (itemFilter) {
                    return itemFilter.id() == item.itemData.id();
                });
                vmViewIndex.statement.fromDate(moment(_.first(filter).startDate()).format('L'));
                vmViewIndex.statement.endDate(moment(_.first(filter).endDate()).format('L'));
                getIdTag(cfrmSearchStatement).submit();
            }
        },
    });
};
//End Added by SMILEDINING-SA20-0007