/*
    SMILEDINING-SA18-0034      10/10/2018      Customize            1. Add column Active at grid linktofood
                                                                    2. Fixbug click icon menu menu not working
    SMILEDINING-SA19-0011      09/03/2019      Customize            1. E-Gift Card.
    SMILEDINING-SA21-0063#5    01/11/2021      Customize            1. Fix marketing view menu on mobile and Fix download file.
    SMILEDINING-SA22-0013      23/05/2022      Customize            1. Add menu Delivery Billing for show report in webowner.
    WEB-SA22-0064#1            16/12/2022      Customize            1. Fix bug shop status in webOwner and fix bug food productId when setting product in webSupport.
*/

/*
 * Mobile Owner
 */

function Mobile() {
    var self = this;
    self.showLogIn = ko.observable(false);
    self.showChangePassword = ko.observable(false);
    self.showCustomerAddress = ko.observable(false);
    self.logInSuccessed = ko.observable(false);     /*Set Once time*/
    self.clickMenu = function (data, event) {
        var id = event.target.innerText.trim();
        //Added by SMILEDINING-SA18-0034
        if (id == "")
            id = event.target.parentElement.innerText.trim();
        //End Added by SMILEDINING-SA18-0034
        setDefaultMenu(data);
        switch (id) {
            case cMobileMenuLogIn:
                self.showLogIn(true);
                break;
            case cMobileLiveOrder:
                data.showLiveOrder(true);
                location.replace("/#LiveOrder");
                break;
            case cMobileMenuSetup:
                data.showMenuSetUp(true); //Added and End by WEB-SA22-0064#1
                location.replace("/#MenuSetup");
                break;
            case cMobileConfigSetup:
                data.showConfigSetUp(true);
                location.replace("/#ConfigSetup");
                break;
            case cMobileMySetting:
                data.showMySetting(true);
                location.replace("/#MySetting");
                break;
            case cMobileTemplate:
                data.showTemplate(true);
                location.replace("/#Template");
                break;
            case cMobileReport:
                data.showReport(true);
                location.replace("/#Report");
                break;
            case cMobileBalance:
                data.showBalance(true);
                location.replace("/#Balance");
                break;
            case cMobileStatements:
                data.showStatement(true);
                location.replace("/#Statement");
                break;
            //Added by SMILEDINING-SA22-0013
            case cMobileDeliveryBilling:
                data.showDeliveryBilling(true);
                location.replace("/#DeliveryBilling");
                break;
            ///End Added by SMILEDINING-SA22-0013
            //Added by SMILEDINING-SA19-0011
            case cMobileGiftCard:
                data.showGiftCard(true);
                location.replace("/#E-GiftCard");
                break;
            //End Added by SMILEDINING-SA19-0011
            //Added by WEB-SA22-0064#1
            case cMobileGiftCardView:
                data.showGiftCardView(true);
                location.replace("/#E-GiftCardView");
                break;
            //End Added by WEB-SA22-0064#1
            //Added by SMILEDINING-SA21-0063#5
            case cMobileMarketing:
                data.showMarketing(true);
                location.replace("/#Marketing");
                break;
            //End Added by SMILEDINING-SA21-0063#5
            case cMobileLogOff:
                store(false); //Added and End by WEB-SA22-0064#1
                data.showMobile(false);
                data.showMenu(true);
                getIdTag(cfrmLogOff).submit();
                break;
            default:
                data.showMobile(false);
                data.showMenu(true);
                break;
        }
        $('.ssm-toggle-nav').click();
    };

    function setDefaultMenu(data) {
        data.showLiveOrder(false);
        data.showMenuSetUp(false);
        data.showConfigSetUp(false);
        data.showMySetting(false);
        data.showTemplate(false);
        data.showReport(false);
        data.showBalance(false);
        data.showStatement(false);
        data.showDeliveryBilling(false);    //Added and End by SMILEDINING-SA22-0013
    };
};